/* $RCSfile$
 * $Author: hansonr $
 * $Date: 2013-08-16 10:01:49 -0500 (Fri, 16 Aug 2013) $
 * $Revision: 18577 $

 *
 * Copyright (C) 2002-2005  The Jmol Development Team
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
 *  Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA.
 */

package org.jmol.render;


import org.jmol.constant.EnumPalette;
import org.jmol.modelset.Atom;
import org.jmol.modelset.Bond;
import org.jmol.script.T;
import org.jmol.util.BS;
import org.jmol.util.C;
import org.jmol.util.GData;
import org.jmol.util.JmolEdge;
import org.jmol.util.P3;
import org.jmol.util.V3;
import org.jmol.viewer.JC;

public class SticksRenderer extends FontLineShapeRenderer {

  private boolean showMultipleBonds;
  private float multipleBondSpacing;
  private float multipleBondRadiusFactor;
  private byte modeMultipleBond;
  private boolean isCartesianExport;
  //boolean showHydrogens;
  private byte endcaps;

  private boolean ssbondsBackbone;
  private boolean hbondsBackbone;
  private boolean bondsBackbone;
  private boolean hbondsSolid;
  
  private Atom a, b;
  private Bond bond;
  private int xA, yA, zA;
  private int xB, yB, zB;
  private int dx, dy;
  private int mag2d;
  private int bondOrder;
  private boolean wireframeOnly;
  private boolean isAntialiased;
  private boolean slabbing;
  private boolean slabByAtom;

  private final V3 x = new V3();
  private final V3 y = new V3();
  private final V3 z = new V3();
  private final P3 p1 = new P3();
  private final P3 p2 = new P3();
  private final BS bsForPass2 = BS.newN(64);
  private boolean isPass2;
  
  @Override
  protected boolean render() {
    Bond[] bonds = modelSet.bonds;
    if (bonds == null)
      return false;
    isPass2 = g3d.isPass2();
    if (!isPass2)
      bsForPass2.clearAll();
    slabbing = viewer.getSlabEnabled();
    slabByAtom = viewer.getBoolean(T.slabbyatom);
    endcaps = GData.ENDCAPS_SPHERICAL;
    dashDots = (viewer.getBoolean(T.partialdots) ? sixdots : dashes);
    multipleBondSpacing = viewer.getFloat(T.multiplebondspacing);
    isCartesianExport = (exportType == GData.EXPORT_CARTESIAN);
    if (multipleBondSpacing == 0 && isCartesianExport)
      multipleBondSpacing = 0.2f;
    multipleBondRadiusFactor = viewer.getFloat(T.multiplebondradiusfactor);
    modeMultipleBond = viewer.getModeMultipleBond();
    showMultipleBonds = (multipleBondSpacing != 0
        && modeMultipleBond != JC.MULTIBOND_NEVER
        && viewer.getBoolean(T.showmultiplebonds));

    wireframeOnly = !viewer.checkMotionRendering(T.bonds);
    ssbondsBackbone = viewer.getBoolean(T.ssbondsbackbone);
    hbondsBackbone = viewer.getBoolean(T.hbondsbackbone);
    bondsBackbone = hbondsBackbone | ssbondsBackbone;
    hbondsSolid = viewer.getBoolean(T.hbondssolid);
    isAntialiased = g3d.isAntialiased();
    boolean needTranslucent = false;
    if (!isExport && isPass2)
      for (int i = bsForPass2.nextSetBit(0); i >= 0; i = bsForPass2
          .nextSetBit(i + 1)) {
        bond = bonds[i];
        renderBond();
      }
    else
      for (int i = modelSet.bondCount; --i >= 0;) {
        bond = bonds[i];
        if ((bond.getShapeVisibilityFlags() & myVisibilityFlag) != 0
            && renderBond()) {
          needTranslucent = true;
          bsForPass2.set(i);
        }
      }
    return needTranslucent;
  }

  private boolean renderBond() {
    Atom atomA0, atomB0;
    
    a = atomA0 = bond.getAtom1();
    b = atomB0 = bond.getAtom2();

    int order = bond.order & ~JmolEdge.BOND_NEW;
    if (bondsBackbone) {
      if (ssbondsBackbone && (order & JmolEdge.BOND_SULFUR_MASK) != 0) {
        // for ssbonds, always render the sidechain,
        // then render the backbone version
        /*
         mth 2004 04 26
         No, we are not going to do this any more
         render(bond, atomA, atomB);
         */

        a = a.getGroup().getLeadAtomOr(a);
        b = b.getGroup().getLeadAtomOr(b);
      } else if (hbondsBackbone && Bond.isOrderH(order)) {
        a = a.getGroup().getLeadAtomOr(a);
        b = b.getGroup().getLeadAtomOr(b);
      }
    }
    if (!isPass2
        && (!a.isInFrame() || !b.isInFrame()
            || !g3d.isInDisplayRange(a.screenX, a.screenY)
            || !g3d.isInDisplayRange(b.screenX, b.screenY)
            || modelSet.isAtomHidden(a.getIndex()) || modelSet
            .isAtomHidden(b.getIndex())))
      return false;

    if (slabbing) {
      if (g3d.isClippedZ(a.screenZ) && g3d.isClippedZ(b.screenZ))
        return false;
      if (slabByAtom
          && (g3d.isClippedZ(a.screenZ) || g3d.isClippedZ(b.screenZ)))
        return false;
    }
    zA = a.screenZ;
    zB = b.screenZ;
    if (zA == 1 || zB == 1)
      return false;
    colixA = atomA0.getColix();
    colixB = atomB0.getColix();
    if (((colix = bond.colix) & C.OPAQUE_MASK) == C.USE_PALETTE) {
      colix = (short) (colix & ~C.OPAQUE_MASK);
      colixA = C.getColixInherited((short) (colix | viewer
          .getColixAtomPalette(atomA0, EnumPalette.CPK.id)), colixA);
      colixB = C.getColixInherited((short) (colix | viewer
          .getColixAtomPalette(atomB0, EnumPalette.CPK.id)), colixB);
    } else {
      colixA = C.getColixInherited(colix, colixA);
      colixB = C.getColixInherited(colix, colixB);
    }
    boolean needTranslucent = false;
    if (!isExport && !isPass2) {
      boolean doA = !C.isColixTranslucent(colixA);
      boolean doB = !C.isColixTranslucent(colixB);
      if (!doA || !doB) {
        if (!doA && !doB && !needTranslucent) {
          g3d.setColix(!doA ? colixA : colixB);
          return true;
        }
        needTranslucent = true;
      }
    }

    // set the rendered bond order

    bondOrder = order & ~JmolEdge.BOND_NEW;
    if ((bondOrder & JmolEdge.BOND_PARTIAL_MASK) == 0) {
      if ((bondOrder & JmolEdge.BOND_SULFUR_MASK) != 0)
        bondOrder &= ~JmolEdge.BOND_SULFUR_MASK;
      if ((bondOrder & JmolEdge.BOND_COVALENT_MASK) != 0) {
        if (!showMultipleBonds
            || (modeMultipleBond == JC.MULTIBOND_NOTSMALL && mad > JC.madMultipleBondSmallMaximum)
            || (bondOrder & JmolEdge.BOND_AS_SINGLE) != 0
            ) {
          bondOrder = 1;
        }
      }
    }

    // set the mask

    int mask = 0;
    switch (bondOrder) {
    case 1:
    case 2:
    case 3:
    case 4:
      break;
    case JmolEdge.BOND_ORDER_UNSPECIFIED:
    case JmolEdge.BOND_AROMATIC_SINGLE:
      bondOrder = 1;
      mask = (order == JmolEdge.BOND_AROMATIC_SINGLE ? 0 : 1);
      break;
    case JmolEdge.BOND_AROMATIC:
    case JmolEdge.BOND_AROMATIC_DOUBLE:
      bondOrder = 2;
      mask = (order == JmolEdge.BOND_AROMATIC ? getAromaticDottedBondMask() : 0);
      break;
    default:
      if ((bondOrder & JmolEdge.BOND_PARTIAL_MASK) != 0) {
        bondOrder = JmolEdge.getPartialBondOrder(order);
        mask = JmolEdge.getPartialBondDotted(order);
      } else if (Bond.isOrderH(bondOrder)) {
        bondOrder = 1;
        if (!hbondsSolid)
          mask = -1;
      } else if (bondOrder == JmolEdge.BOND_STRUT) {
        bondOrder = 1;
      }
    }

    // set the diameter

    xA = a.screenX;
    yA = a.screenY;
    xB = b.screenX;
    yB = b.screenY;

    mad = bond.mad;
    if (multipleBondRadiusFactor > 0 && bondOrder > 1)
      mad *= multipleBondRadiusFactor;
    dx = xB - xA;
    dy = yB - yA;
    width = (int) viewer.scaleToScreen((zA + zB) / 2, mad);
    if (wireframeOnly && width > 0)
      width = 1;
    if (!isCartesianExport) {
      asLineOnly = (width <= 1);
      if (asLineOnly && (isAntialiased)) {
        width = 3;
        asLineOnly = false;
      }
    }

    // draw the bond

    switch (mask) {
    case -1:
      drawDashed(xA, yA, zA, xB, yB, zB, hDashes);
      break;
    default:
      drawBond(mask);
      break;
    }
    return needTranslucent;
  }
    
  private void drawBond(int dottedMask) {
    if (isCartesianExport && bondOrder == 1) {
      // bypass screen rendering and just use the atoms themselves
      g3d.drawBond(a, b, colixA, colixB, endcaps, mad, -1);
      return;
    }
    boolean isEndOn = (dx == 0 && dy == 0);
    if (isEndOn && asLineOnly)
      return;
    boolean doFixedSpacing = (bondOrder > 1 && multipleBondSpacing > 0);
    boolean isPiBonded = doFixedSpacing && (viewer.getHybridizationAndAxes(a.index, z, x, "pz") != null || viewer
            .getHybridizationAndAxes(b.index, z, x, "pz") != null) && !Float.isNaN(x.x);
    if (isEndOn && !doFixedSpacing) {
      // end-on view
      int space = width / 8 + 3;
      int step = width + space;
      int y = yA - (bondOrder - 1) * step / 2;
      do {
        fillCylinder(colixA, colixA, endcaps, width, xA, y, zA, xA, y, zA);
        y += step;
      } while (--bondOrder > 0);
      return;
    }
    boolean isDashed = (dottedMask & 1) != 0;
    if (bondOrder == 1) {
      if (isDashed)
        drawDashed(xA, yA, zA, xB, yB, zB, dashDots);
      else
        fillCylinder(colixA, colixB, endcaps, width, xA, yA, zA, xB, yB, zB);
      return;
    }
    if (doFixedSpacing) {
      if (!isPiBonded) // obscure point
        z.set((float) Math.PI, (float) Math.E, (float) (Math.PI * Math.E)); 
      x.sub2(b, a);
      y.cross(x, z);
      y.normalize();
      if (Float.isNaN(y.x)) {
        // in case x and z are parallel (O=C=O)
        z.set((float) Math.PI, (float) Math.E, (float) (Math.PI * Math.E)); 
        y.cross(x, z);
        y.cross(y, x);
        y.normalize();
      }
      y.scale(multipleBondSpacing);
      x.setT(y);
      x.scale((bondOrder - 1) / 2f);
      p1.sub2(a, x);
      p2.sub2(b, x);
      while (true) {
        if (isCartesianExport && !isDashed) {
          // bypass screen rendering and just use the atoms themselves
          g3d.drawBond(p1, p2, colixA, colixB, endcaps, mad, -2);
        } else {
          viewer.transformPtScr(p1, s1);
          viewer.transformPtScr(p2, s2);
          if (isDashed)
            drawDashed(s1.x, s1.y, s1.z, s2.x, s2.y, s2.z, dashDots);
          else
            fillCylinder(colixA, colixB, endcaps, width, s1.x, s1.y, s1.z,
                s2.x, s2.y, s2.z);
          dottedMask >>= 1;
          isDashed = (dottedMask & 1) != 0;
        }
        if (--bondOrder <= 0)
          break;
        p1.add(y);
        p2.add(y);
        stepAxisCoordinates();
      }
      return;
    }
    int dxB = dx * dx;
    int dyB = dy * dy;
    mag2d = (int) Math.round(Math.sqrt(dxB + dyB));
    resetAxisCoordinates();
    while (true) {
      if ((dottedMask & 1) != 0)
        drawDashed(xAxis1, yAxis1, zA, xAxis2, yAxis2, zB, dashDots);
      else
        fillCylinder(colixA, colixB, endcaps, width, xAxis1, yAxis1, zA,
            xAxis2, yAxis2, zB);
      dottedMask >>= 1;
      if (--bondOrder <= 0)
        break;
      stepAxisCoordinates();
    }
  }

  private int xAxis1, yAxis1, xAxis2, yAxis2, dxStep, dyStep;

  private void resetAxisCoordinates() {
    int space = mag2d >> 3;
    if (multipleBondSpacing != -1 && multipleBondSpacing < 0)
      space *= -multipleBondSpacing;
    int step = width + space;
    dxStep = step * dy / mag2d;
    dyStep = step * -dx / mag2d;
    xAxis1 = xA;
    yAxis1 = yA;
    xAxis2 = xB;
    yAxis2 = yB;
    int f = (bondOrder - 1);
    xAxis1 -= dxStep * f / 2;
    yAxis1 -= dyStep * f / 2;
    xAxis2 -= dxStep * f / 2;
    yAxis2 -= dyStep * f / 2;
  }

  private void stepAxisCoordinates() {
    xAxis1 += dxStep; yAxis1 += dyStep;
    xAxis2 += dxStep; yAxis2 += dyStep;
  }

  private int getAromaticDottedBondMask() {
    Atom atomC = b.findAromaticNeighbor(a.getIndex());
    if (atomC == null)
      return 1;
    int dxAC = atomC.screenX - xA;
    int dyAC = atomC.screenY - yA;
    return ((dx * dyAC - dy * dxAC) < 0 ? 2 : 1);
  }

}