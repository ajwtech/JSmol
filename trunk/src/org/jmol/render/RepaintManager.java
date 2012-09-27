/* $RCSfile$
 * $Author: hansonr $
 * $Date: 2012-09-27 01:51:06 -0500 (Thu, 27 Sep 2012) $
 * $Revision: 17585 $
 *
 * Copyright (C) 2003-2005  The Jmol Development Team
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
 *  Lesser General License for more details.
 *
 *  You should have received a copy of the GNU Lesser General Public
 *  License along with this library; if not, write to the Free Software
 *  Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA.
 */
package org.jmol.render;

import org.jmol.api.JmolRendererInterface;
import org.jmol.api.JmolRepaintInterface;
import org.jmol.modelset.ModelSet;
import org.jmol.shape.Shape;
import org.jmol.util.GData;
import org.jmol.util.Logger;
import org.jmol.util.Rectangle;
import org.jmol.viewer.JmolConstants;
import org.jmol.viewer.ShapeManager;
import org.jmol.viewer.Viewer;

public class RepaintManager implements JmolRepaintInterface {

  private Viewer viewer;
  private ShapeManager shapeManager;
  private ShapeRenderer[] renderers;

  public RepaintManager() {
    // required for reflection
  }
  
  public void set(Viewer viewer, ShapeManager shapeManager) {
    this.viewer = viewer;
    this.shapeManager = shapeManager;
  }

  /////////// thread management ///////////
  
  private int holdRepaint = 0;
  private boolean repaintPending;
  
  public boolean isRepaintPending() {
    return repaintPending;
  }
  
  public void pushHoldRepaint() {
    ++holdRepaint;
    //System.out.println("repaintManager pushHoldRepaint holdRepaint=" + holdRepaint + " thread=" + Thread.currentThread().getName());
  }
  
  public void popHoldRepaint(boolean andRepaint) {
    --holdRepaint;
    //System.out.println("repaintManager popHoldRepaint holdRepaint=" + holdRepaint + " thread=" + Thread.currentThread().getName());
    if (holdRepaint <= 0) {
      holdRepaint = 0;
      if (andRepaint) {
        repaintPending = true;
        //System.out.println("RM popholdrepaint TRUE " + (test++));
        repaintNow();
      }
    }
  }

  synchronized public void requestRepaintAndWait() {
    /**
     * @j2sNative
     * 
     *  if (typeof Jmol != "undefined" && Jmol._repaint) 
     *    Jmol._repaint(this.viewer.htmlName, false);
     *  this.repaintDone();
     */
    {
      //System.out.println("RM requestRepaintAndWait() " + (test++));
      try {
        repaintNow();
        //System.out.println("repaintManager requestRepaintAndWait I am waiting for a repaint: thread=" + Thread.currentThread().getName());
        wait(viewer.getRepaintWait()); // more than a second probably means we are locked up here
        if (repaintPending) {
          Logger.error("repaintManager requestRepaintAndWait timeout");
          repaintDone();
        }
      } catch (InterruptedException e) {
        //System.out.println("repaintManager requestRepaintAndWait interrupted thread=" + Thread.currentThread().getName());
      }
    }
    //System.out.println("repaintManager requestRepaintAndWait I am no longer waiting for a repaint: thread=" + Thread.currentThread().getName());
  }

  public boolean repaintIfReady() {
    if (repaintPending)
      return false;
    repaintPending = true;
    if (holdRepaint == 0) {
      //System.out.println("RM refresh() " + (test++));
      repaintNow();
    }
    return true;
  }

  private void repaintNow() {
    // from RepaintManager to the System
    // -- "Send me an asynchronous update() event!"
    if (!viewer.haveDisplay)
      return;    
    /**
     * Jmol._repaint(appletId,asNewThread)
     * 
     * should invoke 
     * 
     *   setTimeout(Jmol.getApplet(appletId)._applet.viewer.updateJS(width, height)) // may be 0,0
     *   
     * when it is ready to do so.
     * 
     * @j2sNative
     * 
     * if (typeof Jmol != "undefined" && Jmol._repaint)
     *   Jmol._repaint(this.viewer.htmlName,true);
     * 
     */
    {
      viewer.apiPlatform.repaint(viewer.getDisplay());
    }
     
  }

  synchronized public void repaintDone() {
    repaintPending = false;
    /**
     * @j2sNative
     * 
     */
    {
      //System.out.println("repaintManager repaintDone thread=" + Thread.currentThread().getName());
      // ignored in JavaScript
      notify(); // to cancel any wait in requestRepaintAndWait()
    }
  }

  
  /////////// renderer management ///////////
  
  
  public void clear(int iShape) {
    if (renderers ==  null)
      return;
    if (iShape >= 0)
      renderers[iShape] = null;
    else
      for (int i = 0; i < JmolConstants.SHAPE_MAX; ++i)
        renderers[i] = null;
  }

  private ShapeRenderer getRenderer(int shapeID) {
    if (renderers[shapeID] != null)
      return renderers[shapeID];
    String className = JmolConstants.getShapeClassName(shapeID, true) + "Renderer";
    try {
      Class<?> shapeClass = Class.forName(className);
      ShapeRenderer renderer = (ShapeRenderer) shapeClass.newInstance();
      renderer.setViewerG3dShapeID(viewer, shapeID);
      return renderers[shapeID] = renderer;
    } catch (Exception e) {
      Logger.error("Could not instantiate renderer:" + className, e);
      return null;
    }
  }

  /////////// actual rendering ///////////
  
  private boolean logTime;
  
  
  public void render(GData gdata, ModelSet modelSet, boolean isFirstPass, int[] minMax) {
    logTime = false;//viewer.getTestFlag(2);
    if (logTime)
      Logger.startTimer();
    try {
      JmolRendererInterface g3d = (JmolRendererInterface) gdata;
      g3d.renderBackground(null);
      if (isFirstPass)  {
        if (minMax != null)
          g3d.renderCrossHairs(minMax, viewer.getScreenWidth(), viewer.getScreenHeight(), 
              viewer.getNavigationOffset(), viewer.getNavigationDepthPercent());
        Rectangle band = viewer.getRubberBandSelection();
          if (band != null && g3d.setColix(viewer.getColixRubberband()))
            g3d.drawRect(band.x, band.y, 0, 0, band.width, band.height);
      }
      if (renderers == null)
        renderers = new ShapeRenderer[JmolConstants.SHAPE_MAX];
      for (int i = 0; i < JmolConstants.SHAPE_MAX && g3d.currentlyRendering(); ++i) {
        Shape shape = shapeManager.getShape(i);
        if (shape == null)
          continue;
        getRenderer(i).render(g3d, modelSet, shape);
        if (logTime)
          Logger.checkTimer("render time " + JmolConstants.getShapeClassName(i, false));
      }
    } catch (Exception e) {
      e.printStackTrace();
      Logger.error("rendering error? ");
    }
  }

  
  public String renderExport(String type, GData gdata, ModelSet modelSet,
                      String fileName) {
    boolean isOK;
    viewer.finalizeTransformParameters();
    shapeManager.finalizeAtoms(null, null);
    shapeManager.transformAtoms();
    JmolRendererInterface g3dExport = viewer.initializeExporter(type, fileName);
    isOK = (g3dExport != null);
    if (!isOK) {
      Logger.error("Cannot export " + type);
      return null;
    }
    g3dExport.renderBackground(g3dExport);
    if (renderers == null)
      renderers = new ShapeRenderer[JmolConstants.SHAPE_MAX];
    for (int i = 0; i < JmolConstants.SHAPE_MAX; ++i) {
      Shape shape = shapeManager.getShape(i);
      if (shape != null)
        getRenderer(i).render(g3dExport, modelSet, shape);
    }
    return g3dExport.finalizeOutput();
  }

}
