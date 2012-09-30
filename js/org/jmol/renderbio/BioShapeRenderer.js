Clazz.declarePackage ("org.jmol.renderbio");
Clazz.load (["org.jmol.render.MeshRenderer", "javax.util.BitSet", "javax.vecmath.AxisAngle4f", "$.Matrix3f", "$.Point3f", "$.Point3i", "$.Vector3f"], "org.jmol.renderbio.BioShapeRenderer", ["org.jmol.constant.EnumStructure", "org.jmol.shape.Mesh", "org.jmol.util.Colix", "$.Hermite", "$.Logger"], function () {
c$ = Clazz.decorateAsClass (function () {
this.invalidateMesh = false;
this.invalidateSheets = false;
this.isHighRes = false;
this.isTraceAlpha = false;
this.ribbonBorder = false;
this.haveControlPointScreens = false;
this.aspectRatio = 0;
this.hermiteLevel = 0;
this.sheetSmoothing = 0;
this.meshes = null;
this.meshReady = null;
this.monomerCount = 0;
this.monomers = null;
this.isNucleic = false;
this.isCarbohydrate = false;
this.bsVisible = null;
this.ribbonTopScreens = null;
this.ribbonBottomScreens = null;
this.controlPoints = null;
this.controlPointScreens = null;
this.leadAtomIndices = null;
this.wingVectors = null;
this.mads = null;
this.colixes = null;
this.structureTypes = null;
this.pointT = null;
this.iPrev = 0;
this.iNext = 0;
this.iNext2 = 0;
this.iNext3 = 0;
this.diameterBeg = 0;
this.diameterMid = 0;
this.diameterEnd = 0;
this.doCap0 = false;
this.doCap1 = false;
this.screenArrowTop = null;
this.screenArrowTopPrev = null;
this.screenArrowBot = null;
this.screenArrowBotPrev = null;
this.controlHermites = null;
this.wingHermites = null;
this.radiusHermites = null;
this.norm = null;
this.Z = null;
this.wing = null;
this.wing0 = null;
this.wing1 = null;
this.wingT = null;
this.aa = null;
this.pt = null;
this.pt1 = null;
this.ptPrev = null;
this.ptNext = null;
this.mat = null;
Clazz.instantialize (this, arguments);
}, org.jmol.renderbio, "BioShapeRenderer", org.jmol.render.MeshRenderer);
Clazz.prepareFields (c$, function () {
this.bsVisible =  new javax.util.BitSet ();
this.pointT =  new javax.vecmath.Point3f ();
this.screenArrowTop =  new javax.vecmath.Point3i ();
this.screenArrowTopPrev =  new javax.vecmath.Point3i ();
this.screenArrowBot =  new javax.vecmath.Point3i ();
this.screenArrowBotPrev =  new javax.vecmath.Point3i ();
this.norm =  new javax.vecmath.Vector3f ();
this.Z = javax.vecmath.Vector3f.new3 (0.1345, 0.5426, 0.3675);
this.wing =  new javax.vecmath.Vector3f ();
this.wing0 =  new javax.vecmath.Vector3f ();
this.wing1 =  new javax.vecmath.Vector3f ();
this.wingT =  new javax.vecmath.Vector3f ();
this.aa =  new javax.vecmath.AxisAngle4f ();
this.pt =  new javax.vecmath.Point3f ();
this.pt1 =  new javax.vecmath.Point3f ();
this.ptPrev =  new javax.vecmath.Point3f ();
this.ptNext =  new javax.vecmath.Point3f ();
this.mat =  new javax.vecmath.Matrix3f ();
});
Clazz.defineMethod (c$, "render", 
function () {
if (this.shape == null) return ;
this.invalidateMesh = false;
var TF = this.isExport || this.viewer.getHighResolution ();
if (TF != this.isHighRes) this.invalidateMesh = true;
this.isHighRes = TF;
var val = this.viewer.getRibbonAspectRatio ();
val = Math.min (Math.max (0, val), 20);
if (val != this.aspectRatio && val != 0) this.invalidateMesh = true;
this.aspectRatio = val;
val = this.viewer.getHermiteLevel ();
if (val == 0 && this.exportType == 1) val = 5;
val = (val <= 0 ? -val : this.viewer.getInMotion () ? 0 : val);
if (val != this.hermiteLevel && val != 0) this.invalidateMesh = true;
this.hermiteLevel = Math.min (val, 8);
if (this.hermiteLevel == 0) this.aspectRatio = 0;
TF = (this.viewer.getTraceAlpha ());
if (TF != this.isTraceAlpha) this.invalidateMesh = true;
this.isTraceAlpha = TF;
this.invalidateSheets = false;
var fval = this.viewer.getSheetSmoothing ();
if (fval != this.sheetSmoothing && this.isTraceAlpha) {
this.sheetSmoothing = fval;
this.invalidateMesh = true;
this.invalidateSheets = true;
}var mps = this.shape;
for (var c = mps.bioShapes.length; --c >= 0; ) {
var bioShape = mps.getBioShape (c);
if ((bioShape.modelVisibilityFlags & this.myVisibilityFlag) == 0) continue ;if (bioShape.monomerCount >= 2 && this.initializePolymer (bioShape)) {
this.renderBioShape (bioShape);
this.freeTempArrays ();
}}
});
Clazz.defineMethod (c$, "freeTempArrays", 
($fz = function () {
if (this.haveControlPointScreens) this.viewer.freeTempScreens (this.controlPointScreens);
this.viewer.freeTempEnum (this.structureTypes);
}, $fz.isPrivate = true, $fz));
Clazz.defineMethod (c$, "initializePolymer", 
($fz = function (bioShape) {
if (this.viewer.isJmolDataFrameForModel (bioShape.modelIndex)) {
this.controlPoints = bioShape.bioPolymer.getControlPoints (true, 0, false);
} else {
this.controlPoints = bioShape.bioPolymer.getControlPoints (this.isTraceAlpha, this.sheetSmoothing, this.invalidateSheets);
}this.monomerCount = bioShape.monomerCount;
this.monomers = bioShape.monomers;
this.leadAtomIndices = bioShape.bioPolymer.getLeadAtomIndices ();
this.bsVisible.clearAll ();
var haveVisible = false;
if (this.invalidateMesh) bioShape.falsifyMesh ();
for (var i = this.monomerCount; --i >= 0; ) {
if ((this.monomers[i].shapeVisibilityFlags & this.myVisibilityFlag) == 0 || this.modelSet.isAtomHidden (this.leadAtomIndices[i])) continue ;var lead = this.modelSet.atoms[this.leadAtomIndices[i]];
if (!this.g3d.isInDisplayRange (lead.screenX, lead.screenY)) continue ;this.bsVisible.set (i);
haveVisible = true;
}
if (!haveVisible) return false;
this.ribbonBorder = this.viewer.getRibbonBorder ();
this.isNucleic = Clazz.instanceOf (bioShape.bioPolymer, org.jmol.modelsetbio.NucleicPolymer);
this.isCarbohydrate = Clazz.instanceOf (bioShape.bioPolymer, org.jmol.modelsetbio.CarbohydratePolymer);
this.haveControlPointScreens = false;
this.wingVectors = bioShape.wingVectors;
this.meshReady = bioShape.meshReady;
this.meshes = bioShape.meshes;
this.mads = bioShape.mads;
this.colixes = bioShape.colixes;
this.setStructureTypes ();
return true;
}, $fz.isPrivate = true, $fz), "org.jmol.shapebio.BioShape");
Clazz.defineMethod (c$, "setStructureTypes", 
($fz = function () {
this.structureTypes = this.viewer.allocTempEnum (this.monomerCount + 1);
for (var i = this.monomerCount; --i >= 0; ) {
this.structureTypes[i] = this.monomers[i].getProteinStructureType ();
if (this.structureTypes[i] === org.jmol.constant.EnumStructure.TURN) this.structureTypes[i] = org.jmol.constant.EnumStructure.NONE;
}
this.structureTypes[this.monomerCount] = this.structureTypes[this.monomerCount - 1];
}, $fz.isPrivate = true, $fz));
Clazz.defineMethod (c$, "isHelix", 
function (i) {
return this.structureTypes[i] === org.jmol.constant.EnumStructure.HELIX;
}, "~N");
Clazz.defineMethod (c$, "calcScreenControlPoints", 
function () {
this.calcScreenControlPoints (this.controlPoints);
});
Clazz.defineMethod (c$, "calcScreenControlPoints", 
function (points) {
var count = this.monomerCount + 1;
this.controlPointScreens = this.viewer.allocTempScreens (count);
for (var i = count; --i >= 0; ) {
this.viewer.transformPtScr (points[i], this.controlPointScreens[i]);
}
this.haveControlPointScreens = true;
}, "~A");
Clazz.defineMethod (c$, "calcScreens", 
function (offsetFraction) {
var count = this.controlPoints.length;
var screens = this.viewer.allocTempScreens (count);
if (offsetFraction == 0) {
for (var i = count; --i >= 0; ) this.viewer.transformPtScr (this.controlPoints[i], screens[i]);

} else {
var offset_1000 = offsetFraction / 1000;
for (var i = count; --i >= 0; ) this.calc1Screen (this.controlPoints[i], this.wingVectors[i], (this.mads[i] == 0 && i > 0 ? this.mads[i - 1] : this.mads[i]), offset_1000, screens[i]);

}return screens;
}, "~N");
Clazz.defineMethod (c$, "calc1Screen", 
($fz = function (center, vector, mad, offset_1000, screen) {
this.pointT.setT (vector);
var scale = mad * offset_1000;
this.pointT.scaleAdd (scale, center);
this.viewer.transformPtScr (this.pointT, screen);
}, $fz.isPrivate = true, $fz), "javax.vecmath.Point3f,javax.vecmath.Vector3f,~N,~N,javax.vecmath.Point3i");
Clazz.defineMethod (c$, "getLeadColix", 
function (i) {
return org.jmol.util.Colix.getColixInherited (this.colixes[i], this.monomers[i].getLeadAtom ().getColix ());
}, "~N");
Clazz.defineMethod (c$, "setNeighbors", 
($fz = function (i) {
this.iPrev = Math.max (i - 1, 0);
this.iNext = Math.min (i + 1, this.monomerCount);
this.iNext2 = Math.min (i + 2, this.monomerCount);
this.iNext3 = Math.min (i + 3, this.monomerCount);
}, $fz.isPrivate = true, $fz), "~N");
Clazz.defineMethod (c$, "renderHermiteCylinder", 
function (screens, i) {
this.colix = this.getLeadColix (i);
if (!this.g3d.setColix (this.colix)) return ;
this.setNeighbors (i);
this.g3d.drawHermite (this.isNucleic ? 4 : 7, screens[this.iPrev], screens[i], screens[this.iNext], screens[this.iNext2]);
}, "~A,~N");
Clazz.defineMethod (c$, "setMads", 
($fz = function (i, thisTypeOnly) {
this.madMid = this.madBeg = this.madEnd = this.mads[i];
if (this.isTraceAlpha) {
if (!thisTypeOnly || this.structureTypes[i] === this.structureTypes[this.iNext]) {
this.madEnd = this.mads[this.iNext];
if (this.madEnd == 0) {
if (Clazz.instanceOf (this, org.jmol.renderbio.TraceRenderer)) {
this.madEnd = this.madBeg;
} else {
this.madEnd = this.madBeg;
}}this.madMid = ((this.madBeg + this.madEnd) >> 1);
}} else {
if (!thisTypeOnly || this.structureTypes[i] === this.structureTypes[this.iPrev]) this.madBeg = (((this.mads[this.iPrev] == 0 ? this.madMid : this.mads[this.iPrev]) + this.madMid) >> 1);
if (!thisTypeOnly || this.structureTypes[i] === this.structureTypes[this.iNext]) this.madEnd = (((this.mads[this.iNext] == 0 ? this.madMid : this.mads[this.iNext]) + this.madMid) >> 1);
}this.doCap0 = (i == this.iPrev || thisTypeOnly && this.structureTypes[i] !== this.structureTypes[this.iPrev]);
this.doCap1 = (this.iNext == this.iNext2 || thisTypeOnly && this.structureTypes[i] !== this.structureTypes[this.iNext]);
this.diameterBeg = this.viewer.scaleToScreen (this.controlPointScreens[i].z, this.madBeg);
this.diameterMid = this.viewer.scaleToScreen (this.monomers[i].getLeadAtom ().screenZ, this.madMid);
this.diameterEnd = this.viewer.scaleToScreen (this.controlPointScreens[this.iNext].z, this.madEnd);
if ((this.aspectRatio <= 0 || (!this.checkDiameter (this.diameterBeg) && !this.checkDiameter (this.diameterMid) && !this.checkDiameter (this.diameterEnd)))) return false;
return true;
}, $fz.isPrivate = true, $fz), "~N,~B");
Clazz.defineMethod (c$, "checkDiameter", 
($fz = function (d) {
return ( new Boolean ( new Boolean (this.isHighRes & d > 3).valueOf () || d >= 8).valueOf ());
}, $fz.isPrivate = true, $fz), "~N");
Clazz.defineMethod (c$, "renderHermiteConic", 
function (i, thisTypeOnly) {
this.setNeighbors (i);
this.colix = this.getLeadColix (i);
if (!this.g3d.setColix (this.colix)) return ;
if (this.setMads (i, thisTypeOnly)) {
try {
if ((this.meshes[i] == null || !this.meshReady[i]) && !this.createMeshCylinder (i, this.madBeg, this.madMid, this.madEnd, 1)) return ;
this.meshes[i].setColix (this.colix);
this.render1 (this.meshes[i]);
return ;
} catch (e) {
if (Clazz.exceptionOf (e, Exception)) {
org.jmol.util.Logger.error ("render mesh error hermiteConic: " + e.toString ());
} else {
throw e;
}
}
}this.g3d.fillHermite (this.isNucleic ? 4 : 7, this.diameterBeg, this.diameterMid, this.diameterEnd, this.controlPointScreens[this.iPrev], this.controlPointScreens[i], this.controlPointScreens[this.iNext], this.controlPointScreens[this.iNext2]);
}, "~N,~B");
Clazz.defineMethod (c$, "renderHermiteRibbon", 
function (doFill, i, thisTypeOnly) {
this.setNeighbors (i);
this.colix = this.getLeadColix (i);
if (!this.g3d.setColix (this.colix)) return ;
if (doFill && this.aspectRatio != 0) {
if (this.setMads (i, thisTypeOnly)) {
try {
if ((this.meshes[i] == null || !this.meshReady[i]) && !this.createMeshCylinder (i, this.madBeg, this.madMid, this.madEnd, this.aspectRatio)) return ;
this.meshes[i].setColix (this.colix);
this.render1 (this.meshes[i]);
return ;
} catch (e) {
if (Clazz.exceptionOf (e, Exception)) {
org.jmol.util.Logger.error ("render mesh error hermiteRibbon: " + e.toString ());
} else {
throw e;
}
}
}}this.g3d.drawHermite (doFill, this.ribbonBorder, this.isNucleic ? 4 : 7, this.ribbonTopScreens[this.iPrev], this.ribbonTopScreens[i], this.ribbonTopScreens[this.iNext], this.ribbonTopScreens[this.iNext2], this.ribbonBottomScreens[this.iPrev], this.ribbonBottomScreens[i], this.ribbonBottomScreens[this.iNext], this.ribbonBottomScreens[this.iNext2], this.aspectRatio);
}, "~B,~N,~B");
Clazz.defineMethod (c$, "renderHermiteArrowHead", 
function (i) {
this.colix = this.getLeadColix (i);
if (!this.g3d.setColix (this.colix)) return ;
this.setNeighbors (i);
if (this.setMads (i, false)) {
try {
this.doCap0 = true;
this.doCap1 = false;
if ((this.meshes[i] == null || !this.meshReady[i]) && !this.createMeshCylinder (i, Math.round ((this.madBeg * 1.2)), Math.round ((this.madBeg * 0.6)), 0, this.aspectRatio >> 1)) return ;
this.meshes[i].setColix (this.colix);
this.render1 (this.meshes[i]);
return ;
} catch (e) {
if (Clazz.exceptionOf (e, Exception)) {
org.jmol.util.Logger.error ("render mesh error hermiteArrowHead: " + e.toString ());
} else {
throw e;
}
}
}this.calc1Screen (this.controlPoints[i], this.wingVectors[i], this.madBeg, .0007, this.screenArrowTop);
this.calc1Screen (this.controlPoints[i], this.wingVectors[i], this.madBeg, -7.0E-4, this.screenArrowBot);
this.calc1Screen (this.controlPoints[i], this.wingVectors[i], this.madBeg, 0.001, this.screenArrowTopPrev);
this.calc1Screen (this.controlPoints[i], this.wingVectors[i], this.madBeg, -0.0010, this.screenArrowBotPrev);
this.g3d.drawHermite (true, this.ribbonBorder, this.isNucleic ? 4 : 7, this.screenArrowTopPrev, this.screenArrowTop, this.controlPointScreens[this.iNext], this.controlPointScreens[this.iNext2], this.screenArrowBotPrev, this.screenArrowBot, this.controlPointScreens[this.iNext], this.controlPointScreens[this.iNext2], this.aspectRatio);
if (this.ribbonBorder && this.aspectRatio == 0) {
this.g3d.fillCylinder (this.colix, this.colix, 3, (this.exportType == 1 ? 50 : 3), this.screenArrowTop.x, this.screenArrowTop.y, this.screenArrowTop.z, this.screenArrowBot.x, this.screenArrowBot.y, this.screenArrowBot.z);
}}, "~N");
Clazz.defineMethod (c$, "renderCone", 
function (i, pointBegin, pointEnd, screenPtBegin, screenPtEnd) {
var coneDiameter = this.mad + (this.mad >> 2);
coneDiameter = this.viewer.scaleToScreen (Math.round (Math.floor (screenPtBegin.z)), coneDiameter);
this.g3d.fillConeSceen (2, coneDiameter, screenPtBegin, screenPtEnd);
}, "~N,javax.vecmath.Point3f,javax.vecmath.Point3f,javax.vecmath.Point3f,javax.vecmath.Point3f");
Clazz.defineMethod (c$, "createMeshCylinder", 
($fz = function (i, madBeg, madMid, madEnd, aspectRatio) {
this.setNeighbors (i);
if (this.controlPoints[i].distance (this.controlPoints[this.iNext]) == 0) return false;
if (this.isHelix (i)) {
var p = (this.monomers[i]).getProteinStructure ();
p.calcAxis ();
}var isEccentric = (aspectRatio != 1 && this.wingVectors != null);
var nHermites = (this.hermiteLevel + 1) * 2 + 1;
var nPer = (nHermites - 1) * 2 - 2;
var mesh = this.meshes[i] =  new org.jmol.shape.Mesh ("mesh_" + this.shapeID + "_" + i, 0, i);
var variableRadius = (madBeg != madMid || madMid != madEnd);
if (this.controlHermites == null || this.controlHermites.length < nHermites + 1) {
this.controlHermites =  new Array (nHermites + 1);
}org.jmol.util.Hermite.getHermiteList (this.isNucleic ? 4 : 7, this.controlPoints[this.iPrev], this.controlPoints[i], this.controlPoints[this.iNext], this.controlPoints[this.iNext2], this.controlPoints[this.iNext3], this.controlHermites, 0, nHermites);
if (isEccentric) {
if (this.wingHermites == null || this.wingHermites.length < nHermites + 1) {
this.wingHermites =  new Array (nHermites + 1);
}this.wing.setT (this.wingVectors[this.iPrev]);
if (madEnd == 0) this.wing.scale (2.0);
org.jmol.util.Hermite.getHermiteList (this.isNucleic ? 4 : 7, this.wing, this.wingVectors[i], this.wingVectors[this.iNext], this.wingVectors[this.iNext2], this.wingVectors[this.iNext3], this.wingHermites, 0, nHermites);
}var radius1 = madBeg / 2000;
var radius2 = madMid / 2000;
var radius3 = madEnd / 2000;
if (variableRadius) {
if (this.radiusHermites == null || this.radiusHermites.length < ((nHermites + 1) >> 1) + 1) {
this.radiusHermites =  new Array (((nHermites + 1) >> 1) + 1);
}this.ptPrev.set (radius1, radius1, 0);
this.pt.set (radius1, radius2, 0);
this.pt1.set (radius2, radius3, 0);
this.ptNext.set (radius3, radius3, 0);
org.jmol.util.Hermite.getHermiteList (4, this.ptPrev, this.pt, this.pt1, this.ptNext, this.ptNext, this.radiusHermites, 0, (nHermites + 1) >> 1);
}if (!isEccentric) {
this.norm.sub2 (this.controlHermites[1], this.controlHermites[0]);
this.wing0.cross (this.norm, this.Z);
this.wing0.cross (this.norm, this.wing0);
}var nPoints = 0;
var iMid = nHermites >> 1;
for (var p = 0; p < nHermites; p++) {
this.norm.sub2 (this.controlHermites[p + 1], this.controlHermites[p]);
if (isEccentric) {
this.wing.setT (this.wingHermites[p]);
this.wing1.setT (this.wing);
this.wing.scale (2 / aspectRatio);
} else {
this.wing.cross (this.norm, this.wing0);
this.wing.normalize ();
}var scale = (!variableRadius ? radius1 : p < iMid ? this.radiusHermites[p].x : this.radiusHermites[p - iMid].y);
this.wing.scale (scale);
this.wing1.scale (scale);
this.aa.setVA (this.norm, (6.283185307179586 / nPer));
this.mat.setAA (this.aa);
this.pt1.setT (this.controlHermites[p]);
for (var k = 0; k < nPer; k++) {
this.mat.transform (this.wing);
this.wingT.setT (this.wing);
if (isEccentric) {
if (k == Math.floor ((nPer + 2) / 4) || k == Math.floor ((3 * nPer + 2) / 4)) this.wing1.scale (-1);
this.wingT.add (this.wing1);
}this.pt.add2 (this.pt1, this.wingT);
if (isEccentric) {
}mesh.addVertexCopy (this.pt);
}
if (p > 0) {
for (var k = 0; k < nPer; k++) {
mesh.addQuad (nPoints - nPer + k, nPoints - nPer + ((k + 1) % nPer), nPoints + ((k + 1) % nPer), nPoints + k);
}
}nPoints += nPer;
}
if (this.doCap0) for (var k = this.hermiteLevel * 2; --k >= 0; ) mesh.addQuad (k + 2, k + 1, (nPer - k) % nPer, nPer - k - 1);

if (this.doCap1) for (var k = this.hermiteLevel * 2; --k >= 0; ) mesh.addQuad (nPoints - k - 1, nPoints - nPer + (nPer - k) % nPer, nPoints - nPer + k + 1, nPoints - nPer + k + 2);

mesh.initialize (1073741958, null, null);
mesh.setVisibilityFlags (1);
return (this.meshReady[i] = true);
}, $fz.isPrivate = true, $fz), "~N,~N,~N,~N,~N");
Clazz.defineStatics (c$,
"ABSOLUTE_MIN_MESH_SIZE", 3,
"MIN_MESH_RENDER_SIZE", 8);
});
