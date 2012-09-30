﻿Clazz.declarePackage ("org.jmol.renderbio");
Clazz.load (["org.jmol.renderbio.RocketsRenderer", "javax.vecmath.Point3i"], "org.jmol.renderbio.CartoonRenderer", ["org.jmol.util.Colix"], function () {
c$ = Clazz.decorateAsClass (function () {
this.newRockets = true;
this.renderAsRockets = false;
this.renderEdges = false;
this.colixSugarEdge = 0;
this.colixWatsonCrickEdge = 0;
this.colixHoogsteenEdge = 0;
this.ptConnect = null;
this.ring6Points = null;
this.ring6Screens = null;
this.ring5Points = null;
this.ring5Screens = null;
Clazz.instantialize (this, arguments);
}, org.jmol.renderbio, "CartoonRenderer", org.jmol.renderbio.RocketsRenderer);
Clazz.prepareFields (c$, function () {
this.ptConnect =  new javax.vecmath.Point3i ();
this.ring6Points =  new Array (6);
this.ring6Screens =  new Array (6);
this.ring5Points =  new Array (5);
this.ring5Screens =  new Array (5);
{
this.ring6Screens[5] =  new javax.vecmath.Point3i ();
for (var i = 5; --i >= 0; ) {
this.ring5Screens[i] =  new javax.vecmath.Point3i ();
this.ring6Screens[i] =  new javax.vecmath.Point3i ();
}
}});
Clazz.overrideMethod (c$, "renderBioShape", 
function (bioShape) {
if (bioShape.wingVectors == null || this.isCarbohydrate) return ;
this.calcScreenControlPoints ();
if (this.isNucleic) {
this.renderNucleic ();
return ;
}var val = this.viewer.getCartoonRocketFlag ();
if (this.renderAsRockets != val) {
bioShape.falsifyMesh ();
this.renderAsRockets = val;
}val = !this.viewer.getRocketBarrelFlag ();
if (this.renderArrowHeads != val) {
bioShape.falsifyMesh ();
this.renderArrowHeads = val;
}this.ribbonTopScreens = this.calcScreens (0.5);
this.ribbonBottomScreens = this.calcScreens (-0.5);
this.calcRopeMidPoints (this.newRockets);
if (!this.renderArrowHeads) {
this.calcScreenControlPoints (this.cordMidPoints);
this.controlPoints = this.cordMidPoints;
}this.render1 ();
this.viewer.freeTempPoints (this.cordMidPoints);
this.viewer.freeTempScreens (this.ribbonTopScreens);
this.viewer.freeTempScreens (this.ribbonBottomScreens);
}, "org.jmol.shapebio.BioShape");
Clazz.defineMethod (c$, "renderNucleic", 
function () {
this.renderEdges = this.viewer.getCartoonBaseEdgesFlag ();
var isTranslucent = org.jmol.util.Colix.isColixTranslucent (this.colix);
if (this.renderEdges) {
var tl = org.jmol.util.Colix.getColixTranslucencyLevel (this.colix);
this.colixSugarEdge = org.jmol.util.Colix.getColixTranslucent (10, isTranslucent, tl);
this.colixWatsonCrickEdge = org.jmol.util.Colix.getColixTranslucent (11, isTranslucent, tl);
this.colixHoogsteenEdge = org.jmol.util.Colix.getColixTranslucent (7, isTranslucent, tl);
}var isTraceAlpha = this.viewer.getTraceAlpha ();
for (var i = this.bsVisible.nextSetBit (0); i >= 0; i = this.bsVisible.nextSetBit (i + 1)) {
if (isTraceAlpha) {
this.ptConnect.set (Math.floor ((this.controlPointScreens[i].x + this.controlPointScreens[i + 1].x) / 2), Math.floor ((this.controlPointScreens[i].y + this.controlPointScreens[i + 1].y) / 2), Math.floor ((this.controlPointScreens[i].z + this.controlPointScreens[i + 1].z) / 2));
} else {
this.ptConnect.setT (this.controlPointScreens[i + 1]);
}this.renderHermiteConic (i, false);
this.colix = this.getLeadColix (i);
if (this.g3d.setColix (this.colix)) this.renderNucleicBaseStep (this.monomers[i], this.mads[i], this.ptConnect);
}
});
Clazz.defineMethod (c$, "render1", 
function () {
var lastWasSheet = false;
var lastWasHelix = false;
var previousStructure = null;
var thisStructure;
for (var i = this.monomerCount; --i >= 0; ) {
thisStructure = this.monomers[i].getProteinStructure ();
if (thisStructure !== previousStructure) {
if (this.renderAsRockets) lastWasHelix = false;
lastWasSheet = false;
}previousStructure = thisStructure;
var isHelix = this.isHelix (i);
var isSheet = this.isSheet (i);
var isHelixRocket = (this.renderAsRockets || !this.renderArrowHeads ? isHelix : false);
if (this.bsVisible.get (i)) {
if (isHelixRocket) {
} else if (isSheet || isHelix) {
if (lastWasSheet && isSheet || lastWasHelix && isHelix) this.renderHermiteRibbon (true, i, true);
 else this.renderHermiteArrowHead (i);
} else {
this.renderHermiteConic (i, true);
}}lastWasSheet = isSheet;
lastWasHelix = isHelix;
}
if (this.renderAsRockets || !this.renderArrowHeads) this.renderRockets ();
});
Clazz.defineMethod (c$, "renderRockets", 
($fz = function () {
this.tPending = false;
for (var i = this.bsVisible.nextSetBit (0); i >= 0; i = this.bsVisible.nextSetBit (i + 1)) if (this.isHelix (i)) this.renderSpecialSegment (this.monomers[i], this.getLeadColix (i), this.mads[i]);

this.renderPending ();
}, $fz.isPrivate = true, $fz));
Clazz.defineMethod (c$, "renderNucleicBaseStep", 
($fz = function (nucleotide, thisMad, backboneScreen) {
if (this.renderEdges) {
this.renderLeontisWesthofEdges (nucleotide, thisMad);
return ;
}nucleotide.getBaseRing6Points (this.ring6Points);
this.viewer.transformPoints (this.ring6Points, this.ring6Screens);
this.renderRing6 ();
var hasRing5 = nucleotide.maybeGetBaseRing5Points (this.ring5Points);
var stepScreen;
if (hasRing5) {
this.viewer.transformPoints (this.ring5Points, this.ring5Screens);
this.renderRing5 ();
stepScreen = this.ring5Screens[3];
} else {
stepScreen = this.ring6Screens[2];
}this.mad = (thisMad > 1 ? Math.floor (thisMad / 2) : thisMad);
this.g3d.fillCylinderScreen (3, this.viewer.scaleToScreen (backboneScreen.z, this.mad), backboneScreen, stepScreen);
--this.ring6Screens[5].z;
for (var i = 5; --i >= 0; ) {
--this.ring6Screens[i].z;
if (hasRing5) --this.ring5Screens[i].z;
}
for (var i = 6; --i > 0; ) this.g3d.fillCylinderScreen (3, 3, this.ring6Screens[i], this.ring6Screens[i - 1]);

if (hasRing5) {
for (var i = 5; --i > 0; ) this.g3d.fillCylinderScreen (3, 3, this.ring5Screens[i], this.ring5Screens[i - 1]);

} else {
this.g3d.fillCylinderScreen (3, 3, this.ring6Screens[5], this.ring6Screens[0]);
}}, $fz.isPrivate = true, $fz), "org.jmol.modelsetbio.NucleicMonomer,~N,javax.vecmath.Point3i");
Clazz.defineMethod (c$, "renderLeontisWesthofEdges", 
($fz = function (nucleotide, thisMad) {
if (!nucleotide.getEdgePoints (this.ring6Points)) return ;
this.viewer.transformPoints (this.ring6Points, this.ring6Screens);
this.renderTriangle ();
this.mad = (thisMad > 1 ? Math.floor (thisMad / 2) : thisMad);
this.g3d.fillCylinderScreen (3, 3, this.ring6Screens[0], this.ring6Screens[1]);
this.g3d.fillCylinderScreen (3, 3, this.ring6Screens[1], this.ring6Screens[2]);
this.g3d.setColix (this.colixSugarEdge);
this.g3d.fillCylinderScreen (3, 3, this.ring6Screens[2], this.ring6Screens[3]);
this.g3d.setColix (this.colixWatsonCrickEdge);
this.g3d.fillCylinderScreen (3, 3, this.ring6Screens[3], this.ring6Screens[4]);
this.g3d.setColix (this.colixHoogsteenEdge);
this.g3d.fillCylinderScreen (3, 3, this.ring6Screens[4], this.ring6Screens[5]);
}, $fz.isPrivate = true, $fz), "org.jmol.modelsetbio.NucleicMonomer,~N");
Clazz.defineMethod (c$, "renderTriangle", 
($fz = function () {
this.g3d.setNoisySurfaceShade (this.ring6Screens[2], this.ring6Screens[3], this.ring6Screens[4]);
this.g3d.fillTriangle (this.ring6Screens[2], this.ring6Screens[3], this.ring6Screens[4]);
}, $fz.isPrivate = true, $fz));
Clazz.defineMethod (c$, "renderRing6", 
($fz = function () {
this.g3d.setNoisySurfaceShade (this.ring6Screens[0], this.ring6Screens[2], this.ring6Screens[4]);
this.g3d.fillTriangle (this.ring6Screens[0], this.ring6Screens[2], this.ring6Screens[4]);
this.g3d.fillTriangle (this.ring6Screens[0], this.ring6Screens[1], this.ring6Screens[2]);
this.g3d.fillTriangle (this.ring6Screens[0], this.ring6Screens[4], this.ring6Screens[5]);
this.g3d.fillTriangle (this.ring6Screens[2], this.ring6Screens[3], this.ring6Screens[4]);
}, $fz.isPrivate = true, $fz));
Clazz.defineMethod (c$, "renderRing5", 
($fz = function () {
this.g3d.fillTriangle (this.ring5Screens[0], this.ring5Screens[2], this.ring5Screens[3]);
this.g3d.fillTriangle (this.ring5Screens[0], this.ring5Screens[1], this.ring5Screens[2]);
this.g3d.fillTriangle (this.ring5Screens[0], this.ring5Screens[3], this.ring5Screens[4]);
}, $fz.isPrivate = true, $fz));
});
