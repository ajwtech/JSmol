/* $RCSfile$
 * $Author$
 * $Date$
 * $Revision$
 *
 * Copyright (C) 2011  The Jmol Development Team
 *
 * Contact: jmol-developers@lists.sf.net
 *
 *  This library is free software; you can redistribute it and/or
 *  modify it under the terms of the GNU Lesser General Public
 *  License as published by the Free Software Foundation; either
 *  version 2.1 of the License, or (at your option) any later version.
 *
 *  This library is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 *  Lesser General Public License for more details.
 *
 *  You should have received a copy of the GNU Lesser General Public
 *  License along with this library; if not, write to the Free Software
 *  Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA
 *  02110-1301, USA.
 */

package org.jmol.thread;

import javax.vecmath.AxisAngle4f;
import javax.vecmath.Matrix3f;
import javax.vecmath.Point3f;
import javax.vecmath.Vector3f;

import org.jmol.viewer.TransformManager;
import org.jmol.viewer.Viewer;

public class MotionThread extends JmolThread {
  /**
   * 
   */
  private final TransformManager transformManager;
  private final Viewer viewer;

  /**
   * @param transformManager
   * @param viewer 
   */
  public MotionThread(TransformManager transformManager, Viewer viewer) {
    this.transformManager = transformManager;
    this.viewer = viewer;
  }

  private final Vector3f aaStepCenter = new Vector3f();
  private final Vector3f aaStepNavCenter = new Vector3f();
  private final AxisAngle4f aaStep = new AxisAngle4f();
  private final AxisAngle4f aaTotal = new AxisAngle4f();
  private final Matrix3f matrixStart = new Matrix3f();
  private final Matrix3f matrixStartInv = new Matrix3f();
  private final Matrix3f matrixStep = new Matrix3f();
  private final Matrix3f matrixEnd = new Matrix3f();

  private Point3f center;
  private float zoom; 
  private float xTrans;
  private float yTrans;
  private Point3f navCenter;
  private float xNav;
  private float yNav;
  private float navDepth;
  private Point3f ptMoveToCenter;
  private float startRotationRadius;
  private float targetPixelScale;
  private int totalSteps;
  private float startPixelScale;
  private float targetRotationRadius;
  private int fps;
  private float rotationRadiusDelta;
  private float pixelScaleDelta;
  private float zoomStart;
  private float zoomDelta;
  private float xTransStart;
  private float xTransDelta;
  private float yTransStart;
  private float yTransDelta;
  private float xNavTransStart;
  private float xNavTransDelta;
  private float yNavTransDelta;
  private float yNavTransStart;
  private float navDepthStart;
  private float navDepthDelta;
  private long targetTime;
  private long frameTimeMillis;
  private int iStep;
  
  private boolean asThread;
  
  public void startMotion(boolean asThread) {
    this.asThread = asThread;
    if (asThread)
      start();
    else
      run();
  }

  @Override
  public void run() {
    if (totalSteps > 0)
      viewer.setInMotion(true);
    try {
      if (totalSteps == 0 || startMotion())
        endMotion();
    } catch (Exception e) {
      // ignore
    }
    if (totalSteps > 0)
      viewer.setInMotion(false);
    transformManager.motion = null;
  }
  
  private boolean sleepThread() {
    if (System.currentTimeMillis() < targetTime) {
      viewer.requestRepaintAndWait();
      if (transformManager.motion == null || !asThread && !viewer.isScriptExecuting()) {
        return false;
      }
      int sleepTime = (int) (targetTime - System.currentTimeMillis());
      if (sleepTime > 0) {
        try {
          Thread.sleep(sleepTime);
        } catch (InterruptedException ie) {
          return false;
        }
        // System.out.println("moveto thread " +
        // Thread.currentThread().getName() + " running " +
        // System.currentTimeMillis());
      }
    }
    return true;
  }

  public int set(float floatSecondsTotal, Point3f center, Matrix3f end, float zoom,
          float xTrans, float yTrans, float newRotationRadius,
          Point3f navCenter, float xNav, float yNav, float navDepth) {
    this.center = center;
    matrixEnd.set(end);
    this.zoom = zoom;
    this.xTrans = xTrans;
    this.yTrans = yTrans;
    this.navCenter = navCenter;
    this.xNav = xNav;
    this.yNav = yNav;
    this.navDepth = navDepth;
    ptMoveToCenter = (center == null ? transformManager.fixedRotationCenter : center);
    startRotationRadius = transformManager.modelRadius;
    targetRotationRadius = (center == null || Float.isNaN(newRotationRadius) ? transformManager.modelRadius
        : newRotationRadius <= 0 ? viewer.calcRotationRadius(center)
            : newRotationRadius);
    startPixelScale = transformManager.scaleDefaultPixelsPerAngstrom;
    targetPixelScale = (center == null ? startPixelScale
        : transformManager.defaultScaleToScreen(targetRotationRadius));
    if (Float.isNaN(zoom))
      zoom = transformManager.zoomPercent;
    transformManager.getRotation(matrixStart);
    matrixStartInv.invertM(matrixStart);
    matrixStep.mul2(matrixEnd, matrixStartInv);
    aaTotal.setM(matrixStep);
    fps = 30;
    totalSteps = (int) (floatSecondsTotal * fps);
    if (totalSteps == 0)
      return 0;
    frameTimeMillis = 1000 / fps;
    targetTime = System.currentTimeMillis();
    zoomStart = transformManager.zoomPercent;
    zoomDelta = zoom - zoomStart;
    xTransStart = transformManager.getTranslationXPercent();
    xTransDelta = xTrans - xTransStart;
    yTransStart = transformManager.getTranslationYPercent();
    yTransDelta = yTrans - yTransStart;
    aaStepCenter.setT(ptMoveToCenter);
    aaStepCenter.sub(transformManager.fixedRotationCenter);
    aaStepCenter.scale(1f / totalSteps);
    pixelScaleDelta = (targetPixelScale - startPixelScale);
    rotationRadiusDelta = (targetRotationRadius - startRotationRadius);
    if (navCenter != null && transformManager.mode == TransformManager.MODE_NAVIGATION) {
      aaStepNavCenter.setT(navCenter);
      aaStepNavCenter.sub(transformManager.navigationCenter);
      aaStepNavCenter.scale(1f / totalSteps);
    }
    float xNavTransStart = transformManager.getNavigationOffsetPercent('X');
    xNavTransDelta = xNav - xNavTransStart;
    yNavTransStart = transformManager.getNavigationOffsetPercent('Y');
    yNavTransDelta = yNav - yNavTransStart;
    float navDepthStart = transformManager.getNavigationDepthPercent();
    navDepthDelta = navDepth - navDepthStart;
    return totalSteps;
  }
  
  public boolean startMotion() {
    for (; iStep < totalSteps; ++iStep) {
      if (!Float.isNaN(matrixEnd.m00)) {
        transformManager.getRotation(matrixStart);
        matrixStartInv.invertM(matrixStart);
        matrixStep.mul2(matrixEnd, matrixStartInv);
        aaTotal.setM(matrixStep);
        aaStep.setAA(aaTotal);
        aaStep.angle /= (totalSteps - iStep);
        if (aaStep.angle == 0)
          matrixStep.setIdentity();
        else
          matrixStep.setAA(aaStep);
        matrixStep.mul(matrixStart);
      }
      float fStep = iStep / (totalSteps - 1f);
      transformManager.modelRadius = startRotationRadius + rotationRadiusDelta * fStep;
      transformManager.scaleDefaultPixelsPerAngstrom = startPixelScale + pixelScaleDelta
          * fStep;
      if (!Float.isNaN(xTrans)) {
        transformManager.zoomToPercent(zoomStart + zoomDelta * fStep);
        transformManager.translateToPercent('x', xTransStart + xTransDelta * fStep);
        transformManager.translateToPercent('y', yTransStart + yTransDelta * fStep);
      }
      transformManager.setRotation(matrixStep);
      if (center != null)
        transformManager.fixedRotationCenter.add(aaStepCenter);
      if (navCenter != null && transformManager.mode == TransformManager.MODE_NAVIGATION) {
        Point3f pt = Point3f.newP(transformManager.navigationCenter);
        pt.add(aaStepNavCenter);
        transformManager.navigatePt(0, pt);
        if (!Float.isNaN(xNav) && !Float.isNaN(yNav))
          transformManager.navTranslatePercent(0, xNavTransStart + xNavTransDelta * fStep,
              yNavTransStart + yNavTransDelta * fStep);
        if (!Float.isNaN(navDepth))
          transformManager.setNavigationDepthPercent(0, navDepthStart + navDepthDelta * fStep);
      }
      targetTime += frameTimeMillis;
      if (!sleepThread())
        return false;
    }
    return true;
  }

  public void endMotion() {
    transformManager.setRotationRadius(targetRotationRadius, true);
    transformManager.scaleDefaultPixelsPerAngstrom = targetPixelScale;
    if (center != null)
      transformManager.moveRotationCenter(center, !transformManager.windowCentered);
    if (!Float.isNaN(xTrans)) {
      transformManager.zoomToPercent(zoom);
      transformManager.translateToPercent('x', xTrans);
      transformManager.translateToPercent('y', yTrans);
    }
    transformManager.setRotation(matrixEnd);
    if (navCenter != null && transformManager.mode == TransformManager.MODE_NAVIGATION) {
      transformManager.navigationCenter.setT(navCenter);
      if (!Float.isNaN(xNav) && !Float.isNaN(yNav))
        transformManager.navTranslatePercent(0, xNav, yNav);
      if (!Float.isNaN(navDepth))
        transformManager.setNavigationDepthPercent(0, navDepth);
    }
  }
}