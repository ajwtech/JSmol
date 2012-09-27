Clazz.declarePackage ("org.jmol.render");
Clazz.load (["org.jmol.render.ShapeRenderer", "javax.vecmath.Point3f", "$.Point3i", "$.Vector3f"], "org.jmol.render.SticksRenderer", ["java.lang.Float", "org.jmol.constant.EnumPalette", "org.jmol.modelset.Bond", "org.jmol.util.Colix", "$.JmolEdge"], function () {
c$ = Clazz.decorateAsClass (function () {
this.showMultipleBonds = false;
this.multipleBondSpacing = 0;
this.multipleBondRadiusFactor = 0;
this.modeMultipleBond = 0;
this.endcaps = 0;
this.ssbondsBackbone = false;
this.hbondsBackbone = false;
this.bondsBackbone = false;
this.hbondsSolid = false;
this.atomA = null;
this.atomB = null;
this.bond = null;
this.xA = 0;
this.yA = 0;
this.zA = 0;
this.xB = 0;
this.yB = 0;
this.zB = 0;
this.dx = 0;
this.dy = 0;
this.mag2d = 0;
this.colixA = 0;
this.colixB = 0;
this.width = 0;
this.lineBond = false;
this.bondOrder = 0;
this.renderWireframe = false;
this.isAntialiased = false;
this.slabbing = false;
this.slabByAtom = false;
this.dashDots = null;
this.x = null;
this.y = null;
this.z = null;
this.p1 = null;
this.p2 = null;
this.s1 = null;
this.s2 = null;
this.atomA0 = null;
this.atomB0 = null;
this.xAxis1 = 0;
this.yAxis1 = 0;
this.xAxis2 = 0;
this.yAxis2 = 0;
this.dxStep = 0;
this.dyStep = 0;
Clazz.instantialize (this, arguments);
}, org.jmol.render, "SticksRenderer", org.jmol.render.ShapeRenderer);
Clazz.prepareFields (c$, function () {
this.x =  new javax.vecmath.Vector3f ();
this.y =  new javax.vecmath.Vector3f ();
this.z =  new javax.vecmath.Vector3f ();
this.p1 =  new javax.vecmath.Point3f ();
this.p2 =  new javax.vecmath.Point3f ();
this.s1 =  new javax.vecmath.Point3i ();
this.s2 =  new javax.vecmath.Point3i ();
});
Clazz.defineMethod (c$, "render", 
function () {
this.slabbing = this.viewer.getSlabEnabled ();
this.slabByAtom = this.viewer.getSlabByAtom ();
this.endcaps = 3;
this.dashDots = (this.viewer.getPartialDots () ? org.jmol.render.SticksRenderer.sixdots : org.jmol.render.SticksRenderer.dashes);
this.multipleBondSpacing = this.viewer.getMultipleBondSpacing ();
this.multipleBondRadiusFactor = this.viewer.getMultipleBondRadiusFactor ();
this.showMultipleBonds = this.multipleBondSpacing != 0 && this.viewer.getShowMultipleBonds ();
this.modeMultipleBond = this.viewer.getModeMultipleBond ();
this.renderWireframe = this.viewer.getInMotion () && this.viewer.getWireframeRotation ();
this.ssbondsBackbone = this.viewer.getSsbondsBackbone ();
this.hbondsBackbone = this.viewer.getHbondsBackbone ();
this.bondsBackbone =  new Boolean (this.hbondsBackbone | this.ssbondsBackbone).valueOf ();
this.hbondsSolid = this.viewer.getHbondsSolid ();
this.isAntialiased = this.g3d.isAntialiased ();
var bonds = this.modelSet.getBonds ();
for (var i = this.modelSet.getBondCount (); --i >= 0; ) {
this.bond = bonds[i];
if ((this.bond.getShapeVisibilityFlags () & this.myVisibilityFlag) != 0) this.renderBond ();
}
});
Clazz.defineMethod (c$, "renderBond", 
($fz = function () {
this.atomA = this.atomA0 = this.bond.getAtom1 ();
this.atomB = this.atomB0 = this.bond.getAtom2 ();
var order = this.bond.order & -131073;
if (this.bondsBackbone) {
if (this.ssbondsBackbone && (order & 256) != 0) {
this.atomA = this.atomA.getGroup ().getLeadAtomOr (this.atomA);
this.atomB = this.atomB.getGroup ().getLeadAtomOr (this.atomB);
} else if (this.hbondsBackbone && org.jmol.modelset.Bond.isHydrogen (order)) {
this.atomA = this.atomA.getGroup ().getLeadAtomOr (this.atomA);
this.atomB = this.atomB.getGroup ().getLeadAtomOr (this.atomB);
}}if (!this.atomA.isInFrame () || !this.atomB.isInFrame () || !this.g3d.isInDisplayRange (this.atomA.screenX, this.atomA.screenY) || !this.g3d.isInDisplayRange (this.atomB.screenX, this.atomB.screenY) || this.modelSet.isAtomHidden (this.atomA.getIndex ()) || this.modelSet.isAtomHidden (this.atomB.getIndex ())) return ;
if (this.slabbing) {
if (this.g3d.isClippedZ (this.atomA.screenZ) && this.g3d.isClippedZ (this.atomB.screenZ)) return ;
if (this.slabByAtom && (this.g3d.isClippedZ (this.atomA.screenZ) || this.g3d.isClippedZ (this.atomB.screenZ))) return ;
}this.colixA = this.atomA0.getColix ();
this.colixB = this.atomB0.getColix ();
if (((this.colix = this.bond.getColix ()) & -30721) == 2) {
this.colix = (this.colix & 30720);
this.colixA = org.jmol.util.Colix.getColixInherited ((this.colix | this.viewer.getColixAtomPalette (this.atomA0, org.jmol.constant.EnumPalette.CPK.id)), this.colixA);
this.colixB = org.jmol.util.Colix.getColixInherited ((this.colix | this.viewer.getColixAtomPalette (this.atomB0, org.jmol.constant.EnumPalette.CPK.id)), this.colixB);
} else {
this.colixA = org.jmol.util.Colix.getColixInherited (this.colix, this.colixA);
this.colixB = org.jmol.util.Colix.getColixInherited (this.colix, this.colixB);
}this.xA = this.atomA.screenX;
this.yA = this.atomA.screenY;
this.zA = this.atomA.screenZ;
this.xB = this.atomB.screenX;
this.yB = this.atomB.screenY;
this.zB = this.atomB.screenZ;
if (this.zA == 1 || this.zB == 1) return ;
this.bondOrder = order & -131073;
if ((this.bondOrder & 224) == 0) {
if ((this.bondOrder & 256) != 0) this.bondOrder &= -257;
if ((this.bondOrder & 1023) != 0) {
if (!this.showMultipleBonds || this.modeMultipleBond == 0 || (this.modeMultipleBond == 2 && this.mad > 500)) {
this.bondOrder = 1;
}}}var mask = 0;
switch (this.bondOrder) {
case 1:
case 2:
case 3:
case 4:
break;
case 17:
case 513:
this.bondOrder = 1;
mask = (order == 513 ? 0 : 1);
break;
case 515:
case 514:
this.bondOrder = 2;
mask = (order == 515 ? this.getAromaticDottedBondMask () : 0);
break;
default:
if ((this.bondOrder & 224) != 0) {
this.bondOrder = org.jmol.util.JmolEdge.getPartialBondOrder (order);
mask = org.jmol.util.JmolEdge.getPartialBondDotted (order);
} else if (org.jmol.modelset.Bond.isHydrogen (this.bondOrder)) {
this.bondOrder = 1;
if (!this.hbondsSolid) mask = -1;
} else if (this.bondOrder == 32768) {
this.bondOrder = 1;
}}
this.mad = this.bond.getMad ();
if (this.multipleBondRadiusFactor > 0 && this.bondOrder > 1) this.mad *= this.multipleBondRadiusFactor;
this.dx = this.xB - this.xA;
this.dy = this.yB - this.yA;
this.width = this.viewer.scaleToScreen (Math.floor ((this.zA + this.zB) / 2), this.mad);
if (this.renderWireframe && this.width > 0) this.width = 1;
this.lineBond = (this.width <= 1);
if (this.lineBond && (this.isAntialiased)) {
this.width = 3;
this.lineBond = false;
}switch (mask) {
case -1:
this.drawDashed (this.xA, this.yA, this.zA, this.xB, this.yB, this.zB, org.jmol.render.SticksRenderer.hDashes);
break;
default:
this.drawBond (mask);
break;
}
}, $fz.isPrivate = true, $fz));
Clazz.defineMethod (c$, "drawBond", 
($fz = function (dottedMask) {
if (this.exportType == 1 && this.bondOrder == 1) {
this.g3d.drawBond (this.atomA, this.atomB, this.colixA, this.colixB, this.endcaps, this.mad, -1);
return ;
}var isEndOn = (this.dx == 0 && this.dy == 0);
if (isEndOn && this.lineBond) return ;
var doFixedSpacing = (this.bondOrder > 1 && this.multipleBondSpacing > 0 && (this.viewer.getHybridizationAndAxes (this.atomA.index, this.z, this.x, "pz") != null || this.viewer.getHybridizationAndAxes (this.atomB.index, this.z, this.x, "pz") != null) && !Float.isNaN (this.x.x));
if (isEndOn && !doFixedSpacing) {
var space = Math.floor (this.width / 8) + 3;
var step = this.width + space;
var y = this.yA - Math.floor ((this.bondOrder - 1) * step / 2);
do {
this.fillCylinder (this.colixA, this.colixA, this.endcaps, this.width, this.xA, y, this.zA, this.xA, y, this.zA);
y += step;
} while (--this.bondOrder > 0);
return ;
}var isDashed = (dottedMask & 1) != 0;
if (this.bondOrder == 1 && this.exportType != 1) {
if (isDashed) this.drawDashed (this.xA, this.yA, this.zA, this.xB, this.yB, this.zB, this.dashDots);
 else this.fillCylinder (this.colixA, this.colixB, this.endcaps, this.width, this.xA, this.yA, this.zA, this.xB, this.yB, this.zB);
return ;
}if (doFixedSpacing) {
this.x.sub (this.atomB, this.atomA);
this.y.cross (this.x, this.z);
this.y.normalize ();
this.y.scale (this.multipleBondSpacing);
this.x.set (this.y);
this.x.scale ((this.bondOrder - 1) / 2);
this.p1.sub (this.atomA, this.x);
this.p2.sub (this.atomB, this.x);
while (true) {
if (this.exportType == 1 && !isDashed) {
this.g3d.drawBond (this.p1, this.p2, this.colixA, this.colixB, this.endcaps, this.mad, -2);
} else {
this.viewer.transformPtScr (this.p1, this.s1);
this.viewer.transformPtScr (this.p2, this.s2);
if (isDashed) this.drawDashed (this.s1.x, this.s1.y, this.s1.z, this.s2.x, this.s2.y, this.s2.z, this.dashDots);
 else this.fillCylinder (this.colixA, this.colixB, this.endcaps, this.width, this.s1.x, this.s1.y, this.s1.z, this.s2.x, this.s2.y, this.s2.z);
dottedMask >>= 1;
isDashed = (dottedMask & 1) != 0;
}if (--this.bondOrder <= 0) break;
this.p1.add (this.y);
this.p2.add (this.y);
this.stepAxisCoordinates ();
}
return ;
}var dxB = this.dx * this.dx;
var dyB = this.dy * this.dy;
this.mag2d = Math.round ((Math.sqrt (dxB + dyB) + 0.5));
this.resetAxisCoordinates ();
while (true) {
if ((dottedMask & 1) != 0) this.drawDashed (this.xAxis1, this.yAxis1, this.zA, this.xAxis2, this.yAxis2, this.zB, this.dashDots);
 else this.fillCylinder (this.colixA, this.colixB, this.endcaps, this.width, this.xAxis1, this.yAxis1, this.zA, this.xAxis2, this.yAxis2, this.zB);
dottedMask >>= 1;
if (--this.bondOrder <= 0) break;
this.stepAxisCoordinates ();
}
}, $fz.isPrivate = true, $fz), "~N");
Clazz.defineMethod (c$, "resetAxisCoordinates", 
($fz = function () {
var space = this.mag2d >> 3;
if (this.multipleBondSpacing != -1 && this.multipleBondSpacing < 0) space *= -this.multipleBondSpacing;
var step = this.width + space;
this.dxStep = Math.floor (step * this.dy / this.mag2d);
this.dyStep = Math.floor (step * -this.dx / this.mag2d);
this.xAxis1 = this.xA;
this.yAxis1 = this.yA;
this.xAxis2 = this.xB;
this.yAxis2 = this.yB;
var f = (this.bondOrder - 1);
this.xAxis1 -= Math.floor (this.dxStep * f / 2);
this.yAxis1 -= Math.floor (this.dyStep * f / 2);
this.xAxis2 -= Math.floor (this.dxStep * f / 2);
this.yAxis2 -= Math.floor (this.dyStep * f / 2);
}, $fz.isPrivate = true, $fz));
Clazz.defineMethod (c$, "stepAxisCoordinates", 
($fz = function () {
this.xAxis1 += this.dxStep;
this.yAxis1 += this.dyStep;
this.xAxis2 += this.dxStep;
this.yAxis2 += this.dyStep;
}, $fz.isPrivate = true, $fz));
Clazz.defineMethod (c$, "getAromaticDottedBondMask", 
($fz = function () {
var atomC = this.atomB.findAromaticNeighbor (this.atomA.getIndex ());
if (atomC == null) return 1;
var dxAC = atomC.screenX - this.xA;
var dyAC = atomC.screenY - this.yA;
return ((this.dx * dyAC - this.dy * dxAC) < 0 ? 2 : 1);
}, $fz.isPrivate = true, $fz));
Clazz.defineMethod (c$, "drawDashed", 
($fz = function (xA, yA, zA, xB, yB, zB, array) {
var dx = xB - xA;
var dy = yB - yA;
var dz = zB - zA;
var isDots = (array === org.jmol.render.SticksRenderer.sixdots);
if (isDots) {
if (this.mad * 4 > 1500) array = org.jmol.render.SticksRenderer.twodots;
 else if (this.mad * 6 > 1500) array = org.jmol.render.SticksRenderer.fourdots;
}var f = array[0];
var ptS = array[1];
var ptE = array[2];
var colixS = this.colixA;
var colixE = (ptE == 0 ? this.colixB : this.colixA);
for (var pt = 3; pt < array.length; pt++) {
var i = array[pt];
var xS = Math.round ((xA + dx * i / f));
var yS = Math.round ((yA + dy * i / f));
var zS = Math.round ((zA + dz * i / f));
if (isDots) {
this.s1.set (xS, yS, zS);
if (pt == ptS) this.g3d.setColix (this.colixA);
 else if (pt == ptE) this.g3d.setColix (this.colixB);
this.g3d.fillSphere (this.width, this.s1);
continue ;}if (pt == ptS) colixS = this.colixB;
i = array[++pt];
if (pt == ptE) colixE = this.colixB;
var xE = Math.round ((xA + dx * i / f));
var yE = Math.round ((yA + dy * i / f));
var zE = Math.round ((zA + dz * i / f));
this.fillCylinder (colixS, colixE, 2, this.width, xS, yS, zS, xE, yE, zE);
}
}, $fz.isPrivate = true, $fz), "~N,~N,~N,~N,~N,~N,~A");
Clazz.defineMethod (c$, "fillCylinder", 
($fz = function (colixA, colixB, endcaps, diameter, xA, yA, zA, xB, yB, zB) {
if (this.lineBond) this.g3d.drawLine (colixA, colixB, xA, yA, zA, xB, yB, zB);
 else this.g3d.fillCylinder (colixA, colixB, endcaps, (!this.isExport || this.mad == 1 ? diameter : this.mad), xA, yA, zA, xB, yB, zB);
}, $fz.isPrivate = true, $fz), "~N,~N,~N,~N,~N,~N,~N,~N,~N,~N");
Clazz.defineStatics (c$,
"dashes", [12, 0, 0, 2, 5, 7, 10],
"hDashes", [10, 7, 6, 1, 3, 4, 6, 7, 9],
"sixdots", [12, 3, 6, 1, 3, 5, 7, 9, 11],
"fourdots", [13, 3, 5, 2, 5, 8, 11],
"twodots", [12, 3, 4, 3, 9]);
});
