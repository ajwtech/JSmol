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


import org.jmol.script.T;
import org.jmol.util.BS;
import org.jmol.util.JmolList;
import org.jmol.util.Logger;
import org.jmol.util.P3;
import org.jmol.viewer.JC;
import org.jmol.viewer.TransformManager;
import org.jmol.viewer.Viewer;

public class SpinThread extends JmolThread {
  /**
   * 
   */
  private TransformManager transformManager;
  private float endDegrees;
  private JmolList<P3> endPositions;
  private float[] dihedralList;
  private float nDegrees;
  private BS bsAtoms;
  private boolean isNav;
  private boolean isGesture;
  private float myFps;
  private float angle;
  private boolean haveNotified;
  private int index;
  //private boolean navigatingSurface;
  private BS[] bsBranches;
  private boolean isDone = false;
  
  public SpinThread() {}
  
  @SuppressWarnings("unchecked")
  @Override
  public int setManager(Object manager, Viewer viewer, Object params) {
    transformManager = (TransformManager) manager;
    setViewer(viewer, "SpinThread");
    Object[] options = (Object[]) params;

    //f//loat endDegrees, JmolList<P3> endPositions, float[] dihedralList, BS bsAtoms, boolean isNav,
    //boolean isGesture) {

    //Float.valueOf(endDegrees), endPositions, dihedralList,
    //bsAtoms, Boolean.valueOf(isGesture)} );

    //        spinThread = new SpinThread(this, viewer, NULL 
    //            === 0, null, null, null, true, false);

    if (options == null) {
      isNav = true;
    } else {
      endDegrees = ((Float) options[0]).floatValue();
      endPositions = (JmolList<P3>) options[1];
      dihedralList = (float[]) options[2];
      if (dihedralList != null)
        bsBranches = viewer.getBsBranches(dihedralList);
      bsAtoms = (BS) options[3];
      isGesture = (options[4] != null);
    }
    return 0;
  }

  /**
   * Java:
   * 
   * run1(INIT) while(!interrupted()) { run1(MAIN) } run1(FINISH)
   * 
   * JavaScript:
   * 
   * run1(INIT) run1(MAIN) --> setTimeout to run1(CHECK) or run1(FINISH) and
   * return run1(CHECK) --> setTimeout to run1(CHECK) or run1(MAIN) or
   * run1(FINISH) and return
   * 
   */

  @Override
  protected void run1(int mode) throws InterruptedException {
    while (true)
      switch (mode) {
      case INIT:
        myFps = (isNav ? transformManager.navFps : transformManager.spinFps);
        viewer.getGlobalSettings().setB(
            isNav ? "_navigating" : "_spinning", true);
        viewer.startHoverWatcher(false);
        mode = MAIN;
        break;
      case MAIN:
        if (isReset || checkInterrupted()) {
          mode = FINISH;
          break;
        }
        if (isNav && myFps != transformManager.navFps) {
          myFps = transformManager.navFps;
          index = 0;
          startTime = System.currentTimeMillis();
        } else if (!isNav && myFps != transformManager.spinFps
            && bsAtoms == null) {
          myFps = transformManager.spinFps;
          index = 0;
          startTime = System.currentTimeMillis();
        }
        if (myFps == 0
            || !(isNav ? transformManager.navOn : transformManager.spinOn)) {
          mode = FINISH;
          break;
        }
        //navigatingSurface = viewer.getNavigateSurface();
        boolean refreshNeeded = (isNav ? //navigatingSurface ||
            transformManager.navX != 0 || transformManager.navY != 0
            || transformManager.navZ != 0
            : transformManager.isSpinInternal
                && transformManager.internalRotationAxis.angle != 0
                || transformManager.isSpinFixed
                && transformManager.fixedRotationAxis.angle != 0
                || !transformManager.isSpinFixed
                && !transformManager.isSpinInternal
                && (transformManager.spinX != 0 || transformManager.spinY != 0 || transformManager.spinZ != 0));
        targetTime = (long) (++index * 1000 / myFps);
        currentTime = System.currentTimeMillis() - startTime;
        sleepTime = (int) (targetTime - currentTime);
        //System.out.println(targetTime + " " + currentTime + " " + sleepTime);
        if (sleepTime < 0) {
          if (!haveNotified)
            Logger.info("spinFPS is set too fast (" + myFps
                + ") -- can't keep up!");
          haveNotified = true;
          startTime -= sleepTime;
          sleepTime = 0;
        }
        boolean isInMotion = (bsAtoms == null && viewer.getInMotion(false));
        if (isInMotion) {
          if (isGesture) {
            mode = FINISH;
            break;
          }
          sleepTime += 1000;
        }
        if (refreshNeeded && !isInMotion
            && (transformManager.spinOn || transformManager.navOn))
          doTransform();
        mode = CHECK1;
        break;
      case CHECK1: // cycling
        while (!checkInterrupted() && !viewer.getRefreshing())
          if (!runSleep(10, CHECK1))
            return;
        if (bsAtoms == null)
          viewer.refresh(1, "SpinThread:run()");
        else
          viewer.requestRepaintAndWait("spin thread");
        //System.out.println(angle * degreesPerRadian + " " + count + " " + nDegrees + " " + endDegrees);
        if (!isNav && nDegrees >= endDegrees - 0.001) {
          isDone = true;
          transformManager.setSpinOff();
        }
        if (!runSleep(sleepTime, MAIN))
          return;
        mode = MAIN;
        break;
      case FINISH:
        if (dihedralList != null) {
          viewer.setDihedrals(dihedralList, bsBranches, 0F);
        } else if (bsAtoms != null && endPositions != null) {
          // when the standard deviations of the end points was
          // exact, we know that we want EXACTLY those final positions
          viewer.setAtomCoords(bsAtoms, T.xyz, endPositions);
          bsAtoms = null;
          endPositions = null;
        }
        if (!isReset) {
          transformManager.setSpinOff();
          viewer.startHoverWatcher(true);
        }
        stopped = !isDone;
        resumeEval();
        stopped = true;
        return;
      }
  }

  private void doTransform() {
    if (dihedralList != null) {
      float f = 1f / myFps / endDegrees;
      viewer.setDihedrals(dihedralList, bsBranches, f);
      nDegrees += 1f / myFps;
    } else if (isNav) {
      transformManager.setNavigationOffsetRelative();//navigatingSurface);
    } else if (transformManager.isSpinInternal
        || transformManager.isSpinFixed) {
      angle = (transformManager.isSpinInternal ? transformManager.internalRotationAxis
          : transformManager.fixedRotationAxis).angle
          / myFps;
      if (transformManager.isSpinInternal) {
        transformManager.rotateAxisAngleRadiansInternal(angle, bsAtoms);
      } else {
        transformManager.rotateAxisAngleRadiansFixed(angle, bsAtoms);
      }
      nDegrees += Math.abs(angle * TransformManager.degreesPerRadian);
      //System.out.println(i + " " + angle + " " + nDegrees);
    } else { // old way: Rx * Ry * Rz
      if (transformManager.spinX != 0) {
        transformManager.rotateXRadians(transformManager.spinX
            * JC.radiansPerDegree / myFps, null);
      }
      if (transformManager.spinY != 0) {
        transformManager.rotateYRadians(transformManager.spinY
            * JC.radiansPerDegree / myFps, null);
      }
      if (transformManager.spinZ != 0) {
        transformManager.rotateZRadians(transformManager.spinZ
            * JC.radiansPerDegree / myFps);
      }
    }
  }
}