﻿Clazz.declarePackage ("org.jmol.renderbio");
Clazz.load (["org.jmol.renderbio.BioShapeRenderer", "javax.vecmath.Point3f", "$.Vector3f"], "org.jmol.renderbio.RocketsRenderer", ["org.jmol.constant.EnumStructure"], function () {
c$ = Clazz.decorateAsClass (function () {
this.renderArrowHeads = false;
this.cordMidPoints = null;
this.tPending = false;
this.proteinstructurePending = null;
this.startIndexPending = 0;
this.endIndexPending = 0;
this.screenA = null;
this.screenB = null;
this.screenC = null;
this.corners = null;
this.screenCorners = null;
this.pointTipOffset = null;
this.scaledWidthVector = null;
this.scaledHeightVector = null;
this.lengthVector = null;
this.pointCorner = null;
Clazz.instantialize (this, arguments);
}, org.jmol.renderbio, "RocketsRenderer", org.jmol.renderbio.BioShapeRenderer);
Clazz.prepareFields (c$, function () {
this.screenA =  new javax.vecmath.Point3f ();
this.screenB =  new javax.vecmath.Point3f ();
this.screenC =  new javax.vecmath.Point3f ();
this.corners =  new Array (8);
this.screenCorners =  new Array (8);
{
for (var i = 8; --i >= 0; ) {
this.screenCorners[i] =  new javax.vecmath.Point3f ();
this.corners[i] =  new javax.vecmath.Point3f ();
}
}this.pointTipOffset =  new javax.vecmath.Point3f ();
this.scaledWidthVector =  new javax.vecmath.Vector3f ();
this.scaledHeightVector =  new javax.vecmath.Vector3f ();
this.lengthVector =  new javax.vecmath.Vector3f ();
this.pointCorner =  new javax.vecmath.Point3f ();
});
Clazz.overrideMethod (c$, "renderBioShape", 
function (bioShape) {
if (!(Clazz.instanceOf (bioShape.bioPolymer, org.jmol.modelsetbio.AminoPolymer))) return ;
var val = !this.viewer.getRocketBarrelFlag ();
if (this.renderArrowHeads != val) {
bioShape.falsifyMesh ();
this.renderArrowHeads = val;
}this.calcRopeMidPoints (false);
this.calcScreenControlPoints (this.cordMidPoints);
this.controlPoints = this.cordMidPoints;
this.render1 ();
this.viewer.freeTempPoints (this.cordMidPoints);
}, "org.jmol.shapebio.BioShape");
Clazz.defineMethod (c$, "isSheet", 
function (i) {
return this.structureTypes[i] === org.jmol.constant.EnumStructure.SHEET;
}, "~N");
Clazz.defineMethod (c$, "calcRopeMidPoints", 
function (isNewStyle) {
var midPointCount = this.monomerCount + 1;
this.cordMidPoints = this.viewer.allocTempPoints (midPointCount);
var proteinstructurePrev = null;
var point;
for (var i = 0; i < this.monomerCount; ++i) {
point = this.cordMidPoints[i];
var residue = this.monomers[i];
if (isNewStyle && this.renderArrowHeads) {
point.set (this.controlPoints[i]);
} else if (this.isHelix (i) || !isNewStyle && this.isSheet (i)) {
var proteinstructure = residue.getProteinStructure ();
point.set (i - 1 != proteinstructure.getMonomerIndex () ? proteinstructure.getAxisStartPoint () : proteinstructure.getAxisEndPoint ());
proteinstructurePrev = proteinstructure;
} else {
if (proteinstructurePrev != null) point.set (proteinstructurePrev.getAxisEndPoint ());
 else {
point.set (this.controlPoints[i]);
}proteinstructurePrev = null;
}}
point = this.cordMidPoints[this.monomerCount];
if (proteinstructurePrev != null) point.set (proteinstructurePrev.getAxisEndPoint ());
 else {
point.set (this.controlPoints[this.monomerCount]);
}}, "~B");
Clazz.defineMethod (c$, "render1", 
function () {
this.tPending = false;
for (var i = this.bsVisible.nextSetBit (0); i >= 0; i = this.bsVisible.nextSetBit (i + 1)) {
var monomer = this.monomers[i];
if (this.isHelix (i) || this.isSheet (i)) {
this.renderSpecialSegment (monomer, this.getLeadColix (i), this.mads[i]);
} else {
this.renderPending ();
this.renderHermiteConic (i, true);
}}
this.renderPending ();
});
Clazz.defineMethod (c$, "renderSpecialSegment", 
function (monomer, thisColix, thisMad) {
var proteinstructure = monomer.getProteinStructure ();
if (this.tPending) {
if (proteinstructure === this.proteinstructurePending && thisMad == this.mad && thisColix == this.colix && proteinstructure.getIndex (monomer) == this.endIndexPending + 1) {
++this.endIndexPending;
return ;
}this.renderPending ();
}this.proteinstructurePending = proteinstructure;
this.startIndexPending = this.endIndexPending = proteinstructure.getIndex (monomer);
this.colix = thisColix;
this.mad = thisMad;
this.tPending = true;
}, "org.jmol.modelsetbio.Monomer,~N,~N");
Clazz.defineMethod (c$, "renderPending", 
function () {
if (!this.tPending) return ;
var segments = this.proteinstructurePending.getSegments ();
var tEnd = (this.endIndexPending == this.proteinstructurePending.getMonomerCount () - 1);
if (Clazz.instanceOf (this.proteinstructurePending, org.jmol.modelsetbio.Helix)) this.renderPendingRocketSegment (this.endIndexPending, segments[this.startIndexPending], segments[this.endIndexPending], segments[this.endIndexPending + 1], tEnd);
 else if (Clazz.instanceOf (this.proteinstructurePending, org.jmol.modelsetbio.Sheet)) this.renderPendingSheet (segments[this.startIndexPending], segments[this.endIndexPending], segments[this.endIndexPending + 1], tEnd);
this.tPending = false;
});
Clazz.defineMethod (c$, "renderPendingRocketSegment", 
($fz = function (i, pointStart, pointBeforeEnd, pointEnd, tEnd) {
this.viewer.transformPt3f (pointStart, this.screenA);
this.viewer.transformPt3f (pointEnd, this.screenB);
var zMid = Math.round (Math.floor ((this.screenA.z + this.screenB.z) / 2));
var diameter = this.viewer.scaleToScreen (zMid, this.mad);
if (tEnd && this.renderArrowHeads) {
this.viewer.transformPt3f (pointBeforeEnd, this.screenC);
if (this.g3d.setColix (this.colix)) {
if (pointBeforeEnd.distance (pointEnd) <= 0.05) this.g3d.fillCylinderBits (2, diameter, this.screenB, this.screenC);
 else this.renderCone (i, pointBeforeEnd, pointEnd, this.screenC, this.screenB);
}if (this.startIndexPending == this.endIndexPending) return ;
var t = this.screenB;
this.screenB = this.screenC;
this.screenC = t;
}if (this.g3d.setColix (this.colix)) this.g3d.fillCylinderBits (2, diameter, this.screenA, this.screenB);
}, $fz.isPrivate = true, $fz), "~N,javax.vecmath.Point3f,javax.vecmath.Point3f,javax.vecmath.Point3f,~B");
Clazz.defineMethod (c$, "renderPendingSheet", 
($fz = function (pointStart, pointBeforeEnd, pointEnd, tEnd) {
if (!this.g3d.setColix (this.colix)) return ;
if (tEnd && this.renderArrowHeads) {
this.drawArrowHeadBox (pointBeforeEnd, pointEnd);
this.drawBox (pointStart, pointBeforeEnd);
} else {
this.drawBox (pointStart, pointEnd);
}}, $fz.isPrivate = true, $fz), "javax.vecmath.Point3f,javax.vecmath.Point3f,javax.vecmath.Point3f,~B");
Clazz.defineMethod (c$, "buildBox", 
function (pointCorner, scaledWidthVector, scaledHeightVector, lengthVector) {
for (var i = 8; --i >= 0; ) {
var corner = this.corners[i];
corner.set (pointCorner);
if ((i & 1) != 0) corner.add (scaledWidthVector);
if ((i & 2) != 0) corner.add (scaledHeightVector);
if ((i & 4) != 0) corner.add (lengthVector);
this.viewer.transformPt3f (corner, this.screenCorners[i]);
}
}, "javax.vecmath.Point3f,javax.vecmath.Vector3f,javax.vecmath.Vector3f,javax.vecmath.Vector3f");
Clazz.defineMethod (c$, "buildArrowHeadBox", 
function (pointCorner, scaledWidthVector, scaledHeightVector, pointTip) {
for (var i = 4; --i >= 0; ) {
var corner = this.corners[i];
corner.set (pointCorner);
if ((i & 1) != 0) corner.add (scaledWidthVector);
if ((i & 2) != 0) corner.add (scaledHeightVector);
this.viewer.transformPt3f (corner, this.screenCorners[i]);
}
this.corners[4].set (pointTip);
this.viewer.transformPt3f (pointTip, this.screenCorners[4]);
this.corners[5].add (pointTip, scaledHeightVector);
this.viewer.transformPt3f (this.corners[5], this.screenCorners[5]);
}, "javax.vecmath.Point3f,javax.vecmath.Vector3f,javax.vecmath.Vector3f,javax.vecmath.Point3f");
Clazz.defineMethod (c$, "drawBox", 
function (pointA, pointB) {
var sheet = this.proteinstructurePending;
var scale = this.mad / 1000;
this.scaledWidthVector.set (sheet.getWidthUnitVector ());
this.scaledWidthVector.scale (scale);
this.scaledHeightVector.set (sheet.getHeightUnitVector ());
this.scaledHeightVector.scale (scale / 4);
this.pointCorner.add (this.scaledWidthVector, this.scaledHeightVector);
this.pointCorner.scaleAdd (-0.5, pointA);
this.lengthVector.sub (pointB, pointA);
this.buildBox (this.pointCorner, this.scaledWidthVector, this.scaledHeightVector, this.lengthVector);
for (var i = 0; i < 6; ++i) {
var i0 = org.jmol.renderbio.RocketsRenderer.boxFaces[i * 4];
var i1 = org.jmol.renderbio.RocketsRenderer.boxFaces[i * 4 + 1];
var i2 = org.jmol.renderbio.RocketsRenderer.boxFaces[i * 4 + 2];
var i3 = org.jmol.renderbio.RocketsRenderer.boxFaces[i * 4 + 3];
this.g3d.fillQuadrilateral (this.screenCorners[i0], this.screenCorners[i1], this.screenCorners[i2], this.screenCorners[i3]);
}
}, "javax.vecmath.Point3f,javax.vecmath.Point3f");
Clazz.defineMethod (c$, "drawArrowHeadBox", 
function (base, tip) {
var sheet = this.proteinstructurePending;
var scale = this.mad / 1000;
this.scaledWidthVector.set (sheet.getWidthUnitVector ());
this.scaledWidthVector.scale (scale * 1.25);
this.scaledHeightVector.set (sheet.getHeightUnitVector ());
this.scaledHeightVector.scale (scale / 3);
this.pointCorner.add (this.scaledWidthVector, this.scaledHeightVector);
this.pointCorner.scaleAdd (-0.5, base);
this.pointTipOffset.set (this.scaledHeightVector);
this.pointTipOffset.scaleAdd (-0.5, tip);
this.buildArrowHeadBox (this.pointCorner, this.scaledWidthVector, this.scaledHeightVector, this.pointTipOffset);
this.g3d.fillTriangle (this.screenCorners[0], this.screenCorners[1], this.screenCorners[4]);
this.g3d.fillTriangle (this.screenCorners[2], this.screenCorners[3], this.screenCorners[5]);
for (var i = 0; i < 12; i += 4) {
var i0 = org.jmol.renderbio.RocketsRenderer.arrowHeadFaces[i];
var i1 = org.jmol.renderbio.RocketsRenderer.arrowHeadFaces[i + 1];
var i2 = org.jmol.renderbio.RocketsRenderer.arrowHeadFaces[i + 2];
var i3 = org.jmol.renderbio.RocketsRenderer.arrowHeadFaces[i + 3];
this.g3d.fillQuadrilateral (this.screenCorners[i0], this.screenCorners[i1], this.screenCorners[i2], this.screenCorners[i3]);
}
}, "javax.vecmath.Point3f,javax.vecmath.Point3f");
Clazz.defineStatics (c$,
"MIN_CONE_HEIGHT", 0.05,
"boxFaces", [0, 1, 3, 2, 0, 2, 6, 4, 0, 4, 5, 1, 7, 5, 4, 6, 7, 6, 2, 3, 7, 3, 1, 5]);
Clazz.defineStatics (c$,
"arrowHeadFaces", [0, 1, 3, 2, 0, 4, 5, 2, 1, 4, 5, 3]);
});
