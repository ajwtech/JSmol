﻿Clazz.declarePackage ("org.jmol.jvxl.readers");
Clazz.load (["org.jmol.jvxl.readers.AtomDataReader"], "org.jmol.jvxl.readers.IsoMOReader", ["java.lang.Float", "java.util.Random", "javax.vecmath.Point3f", "$.Vector3f", "org.jmol.api.Interface", "org.jmol.constant.EnumQuantumShell", "org.jmol.util.Logger", "$.Measure", "$.TextFormat"], function () {
c$ = Clazz.decorateAsClass (function () {
this.random = null;
this.vDist = null;
this.points = null;
this.vTemp = null;
this.q = null;
this.mos = null;
this.isNci = false;
this.coef = null;
this.dfCoefMaps = null;
this.linearCombination = null;
this.coefs = null;
this.isElectronDensityCalc = false;
this.qSetupDone = false;
Clazz.instantialize (this, arguments);
}, org.jmol.jvxl.readers, "IsoMOReader", org.jmol.jvxl.readers.AtomDataReader);
Clazz.prepareFields (c$, function () {
this.vDist =  Clazz.newArray (3, 0);
});
Clazz.makeConstructor (c$, 
function (sg) {
Clazz.superConstructor (this, org.jmol.jvxl.readers.IsoMOReader, [sg]);
this.isNci = (this.params.qmOrbitalType == 3);
if (this.isNci) {
this.isXLowToHigh = this.hasColorData = true;
this.precalculateVoxelData = false;
this.params.insideOut = !this.params.insideOut;
}}, "org.jmol.jvxl.readers.SurfaceGenerator");
Clazz.defineMethod (c$, "setup", 
function (isMapData) {
this.mos = this.params.moData.get ("mos");
this.linearCombination = this.params.qm_moLinearCombination;
var mo = (this.mos != null && this.linearCombination == null ? this.mos.get (this.params.qm_moNumber - 1) : null);
var haveVolumeData = this.params.moData.containsKey ("haveVolumeData");
if (haveVolumeData && mo != null) this.params.volumeData = mo.get ("volumeData");
Clazz.superCall (this, org.jmol.jvxl.readers.IsoMOReader, "setup", [isMapData]);
this.doAddHydrogens = false;
this.getAtoms (this.params.bsSelected, this.doAddHydrogens, !this.isNci, this.isNci, this.isNci, false, false, this.params.qm_marginAngstroms);
if (this.isNci) this.setHeader ("NCI (promolecular)", "see NCIPLOT: A Program for Plotting Noncovalent Interaction Regions, Julia Contreras-Garcia, et al., J. of Chemical Theory and Computation, 2011, 7, 625-632");
 else this.setHeader ("MO", "calculation type: " + this.params.moData.get ("calculationType"));
this.setRanges (this.params.qm_ptsPerAngstrom, this.params.qm_gridMax, 0);
var className = (this.isNci ? "quantum.NciCalculation" : "quantum.MOCalculation");
if (haveVolumeData) {
for (var i = this.params.title.length; --i >= 0; ) this.fixTitleLine (i, mo);

} else {
this.q = org.jmol.api.Interface.getOptionInterface (className);
if (this.isNci) {
this.qpc = this.q;
} else if (this.linearCombination == null) {
for (var i = this.params.title.length; --i >= 0; ) this.fixTitleLine (i, mo);

this.coef = mo.get ("coefficients");
this.dfCoefMaps = mo.get ("dfCoefMaps");
} else {
this.coefs =  Clazz.newArray (this.mos.size (), 0);
for (var i = 1; i < this.linearCombination.length; i += 2) {
var j = Math.round (this.linearCombination[i]);
if (j > this.mos.size () || j < 1) return ;
this.coefs[j - 1] = this.mos.get (j - 1).get ("coefficients");
}
for (var i = this.params.title.length; --i >= 0; ) this.fixTitleLine (i, null);

}this.isElectronDensityCalc = (this.coef == null && this.linearCombination == null && !this.isNci);
}this.volumeData.sr = null;
if (isMapData && !this.isElectronDensityCalc && !haveVolumeData) {
this.volumeData.sr = this;
this.volumeData.doIterate = false;
this.volumeData.setVoxelDataAsArray (this.voxelData =  Clazz.newArray (1, 1, 1, 0));
this.points =  new Array (1);
this.points[0] =  new javax.vecmath.Point3f ();
if (!this.setupCalculation ()) this.q = null;
} else if (this.params.psi_monteCarloCount > 0) {
this.vertexDataOnly = true;
this.random =  new java.util.Random (this.params.randomSeed);
}}, "~B");
Clazz.overrideMethod (c$, "readVolumeParameters", 
function (isMapData) {
this.setup (isMapData);
if (this.volumeData.sr == null) this.initializeVolumetricData ();
return true;
}, "~B");
Clazz.defineMethod (c$, "fixTitleLine", 
($fz = function (iLine, mo) {
if (!this.fixTitleLine (iLine)) return ;
var line = this.params.title[iLine];
var pt = line.indexOf ("%");
if (line.length == 0 || pt < 0) return ;
var rep = 0;
if (line.indexOf ("%F") >= 0) line = org.jmol.util.TextFormat.formatStringS (line, "F", this.params.fileName);
if (line.indexOf ("%I") >= 0) line = org.jmol.util.TextFormat.formatStringS (line, "I", this.params.qm_moLinearCombination == null ? "" + this.params.qm_moNumber : org.jmol.constant.EnumQuantumShell.getMOString (this.params.qm_moLinearCombination));
if (line.indexOf ("%N") >= 0) line = org.jmol.util.TextFormat.formatStringS (line, "N", "" + this.params.qmOrbitalCount);
var energy = null;
if (mo == null) {
for (var i = 0; i < this.linearCombination.length; i += 2) if (this.linearCombination[i] != 0) {
mo = this.mos.get (Math.round (this.linearCombination[i + 1]) - 1);
var e = mo.get ("energy");
if (energy == null) {
if (e == null) break;
energy = e;
} else if (!energy.equals (e)) {
energy = null;
break;
}}
} else {
if (mo.containsKey ("energy")) energy = mo.get ("energy");
}if (line.indexOf ("%E") >= 0) line = org.jmol.util.TextFormat.formatStringS (line, "E", energy != null && ++rep != 0 ? "" + energy : "");
if (line.indexOf ("%U") >= 0) line = org.jmol.util.TextFormat.formatStringS (line, "U", energy != null && this.params.moData.containsKey ("energyUnits") && ++rep != 0 ? this.params.moData.get ("energyUnits") : "");
if (line.indexOf ("%S") >= 0) line = org.jmol.util.TextFormat.formatStringS (line, "S", mo != null && mo.containsKey ("symmetry") && ++rep != 0 ? "" + mo.get ("symmetry") : "");
if (line.indexOf ("%O") >= 0) line = org.jmol.util.TextFormat.formatStringS (line, "O", mo != null && mo.containsKey ("occupancy") && ++rep != 0 ? "" + mo.get ("occupancy") : "");
if (line.indexOf ("%T") >= 0) line = org.jmol.util.TextFormat.formatStringS (line, "T", mo != null && mo.containsKey ("type") && ++rep != 0 ? "" + mo.get ("type") : "");
var isOptional = (line.indexOf ("?") == 0);
this.params.title[iLine] = (!isOptional ? line : rep > 0 && !line.trim ().endsWith ("=") ? line.substring (1) : "");
}, $fz.isPrivate = true, $fz), "~N,java.util.Map");
Clazz.defineMethod (c$, "readSurfaceData", 
function (isMapData) {
if (this.volumeData.sr != null) return ;
if (this.params.psi_monteCarloCount <= 0) {
Clazz.superCall (this, org.jmol.jvxl.readers.IsoMOReader, "readSurfaceData", [isMapData]);
return ;
}if (this.points != null) return ;
this.points =  new Array (1000);
for (var j = 0; j < 1000; j++) this.points[j] =  new javax.vecmath.Point3f ();

if (this.params.thePlane != null) this.vTemp =  new javax.vecmath.Vector3f ();
for (var i = 0; i < 3; i++) this.vDist[i] = this.volumeData.volumetricVectorLengths[i] * this.volumeData.voxelCounts[i];

this.volumeData.setVoxelDataAsArray (this.voxelData =  Clazz.newArray (1000, 1, 1, 0));
this.getValues ();
var value;
var f = 0;
for (var j = 0; j < 1000; j++) if ((value = Math.abs (this.voxelData[j][0][0])) > f) f = value;

if (f < 0.0001) return ;
for (var i = 0; i < this.params.psi_monteCarloCount; ) {
this.getValues ();
for (var j = 0; j < 1000; j++) {
value = this.voxelData[j][0][0];
var absValue = Math.abs (value);
if (absValue <= this.getRnd (f)) continue ;this.addVertexCopy (this.points[j], value, 0);
if (++i == this.params.psi_monteCarloCount) break;
}
}
}, "~B");
Clazz.overrideMethod (c$, "postProcessVertices", 
function () {
});
Clazz.defineMethod (c$, "getValues", 
($fz = function () {
for (var j = 0; j < 1000; j++) {
this.voxelData[j][0][0] = 0;
this.points[j].set (this.volumeData.volumetricOrigin.x + this.getRnd (this.vDist[0]), this.volumeData.volumetricOrigin.y + this.getRnd (this.vDist[1]), this.volumeData.volumetricOrigin.z + this.getRnd (this.vDist[2]));
if (this.params.thePlane != null) org.jmol.util.Measure.getPlaneProjection (this.points[j], this.params.thePlane, this.points[j], this.vTemp);
}
this.createOrbital ();
}, $fz.isPrivate = true, $fz));
Clazz.overrideMethod (c$, "getValueAtPoint", 
function (pt) {
return (this.q == null ? 0 : this.q.process (pt));
}, "javax.vecmath.Point3f");
Clazz.defineMethod (c$, "getRnd", 
($fz = function (f) {
return this.random.nextFloat () * f;
}, $fz.isPrivate = true, $fz), "~N");
Clazz.overrideMethod (c$, "generateCube", 
function () {
if (this.params.volumeData != null) return ;
this.newVoxelDataCube ();
this.createOrbital ();
});
Clazz.defineMethod (c$, "createOrbital", 
function () {
var isMonteCarlo = (this.params.psi_monteCarloCount > 0);
if (this.isElectronDensityCalc) {
if (this.mos == null || isMonteCarlo) return ;
for (var i = this.params.qm_moNumber; --i >= 0; ) {
org.jmol.util.Logger.info (" generating isosurface data for MO " + (i + 1));
var mo = this.mos.get (i);
this.coef = mo.get ("coefficients");
this.dfCoefMaps = mo.get ("dfCoefMaps");
if (!this.setupCalculation ()) return ;
this.q.createCube ();
}
} else {
if (!isMonteCarlo) org.jmol.util.Logger.info ("generating isosurface data for MO using cutoff " + this.params.cutoff);
if (!this.setupCalculation ()) return ;
this.q.createCube ();
}});
Clazz.defineMethod (c$, "getPlane", 
function (x) {
if (!this.qSetupDone) this.setupCalculation ();
return Clazz.superCall (this, org.jmol.jvxl.readers.IsoMOReader, "getPlane", [x]);
}, "~N");
Clazz.defineMethod (c$, "setupCalculation", 
($fz = function () {
this.qSetupDone = true;
switch (this.params.qmOrbitalType) {
case 5:
break;
case 1:
return this.q.setupCalculation (this.volumeData, this.bsMySelected, null, null, this.params.moData.get ("calculationType"), this.atomData.atomXyz, this.atomData.firstAtomIndex, this.params.moData.get ("shells"), this.params.moData.get ("gaussians"), this.dfCoefMaps, null, this.coef, this.linearCombination, this.coefs, this.params.theProperty, this.params.moData.get ("isNormalized") == null, this.points, this.params.parameters, this.params.testFlags);
case 2:
return this.q.setupCalculation (this.volumeData, this.bsMySelected, null, null, this.params.moData.get ("calculationType"), this.atomData.atomXyz, this.atomData.firstAtomIndex, null, null, null, this.params.moData.get ("slaters"), this.coef, this.linearCombination, this.coefs, this.params.theProperty, true, this.points, this.params.parameters, this.params.testFlags);
case 3:
return this.q.setupCalculation (this.volumeData, this.bsMySelected, this.params.bsSolvent, this.atomData.bsMolecules, null, this.atomData.atomXyz, this.atomData.firstAtomIndex, null, null, null, null, null, null, null, this.params.theProperty, true, this.points, this.params.parameters, this.params.testFlags);
}
return false;
}, $fz.isPrivate = true, $fz));
Clazz.defineMethod (c$, "getSurfacePointAndFraction", 
function (cutoff, isCutoffAbsolute, valueA, valueB, pointA, edgeVector, x, y, z, vA, vB, fReturn, ptReturn) {
var zero = Clazz.superCall (this, org.jmol.jvxl.readers.IsoMOReader, "getSurfacePointAndFraction", [cutoff, isCutoffAbsolute, valueA, valueB, pointA, edgeVector, x, y, z, vA, vB, fReturn, ptReturn]);
return (this.q == null || Float.isNaN (zero) ? zero : this.q.process (ptReturn));
}, "~N,~B,~N,~N,javax.vecmath.Point3f,javax.vecmath.Vector3f,~N,~N,~N,~N,~N,~A,javax.vecmath.Point3f");
});
