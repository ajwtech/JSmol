﻿Clazz.declarePackage ("org.jmol.jvxl.readers");
Clazz.load (["org.jmol.jvxl.readers.VolumeDataReader", "javax.vecmath.Point3f"], "org.jmol.jvxl.readers.IsoShapeReader", ["java.lang.StringBuffer", "java.util.Random", "javax.vecmath.Vector3f", "org.jmol.jvxl.data.JvxlCoder", "org.jmol.util.Logger", "$.Measure"], function () {
c$ = Clazz.decorateAsClass (function () {
this.psi_n = 2;
this.psi_l = 1;
this.psi_m = 1;
this.psi_Znuc = 1;
this.sphere_radiusAngstroms = 0;
this.monteCarloCount = 0;
this.random = null;
this.allowNegative = true;
this.rfactor = null;
this.pfactor = null;
this.radius = 0;
this.ptPsi = null;
this.psi_normalization = 0;
this.aoMax = 0;
this.aoMax2 = 0;
this.angMax2 = 0;
this.planeU = null;
this.planeV = null;
this.planeCenter = null;
this.planeRadius = 0;
this.rnl = 0;
this.monteCarloDone = false;
this.nTries = 0;
Clazz.instantialize (this, arguments);
}, org.jmol.jvxl.readers, "IsoShapeReader", org.jmol.jvxl.readers.VolumeDataReader);
Clazz.prepareFields (c$, function () {
this.rfactor =  Clazz.newArray (10, 0);
this.pfactor =  Clazz.newArray (10, 0);
this.ptPsi =  new javax.vecmath.Point3f ();
this.psi_normalization = 1 / (2 * Math.sqrt (3.141592653589793));
});
Clazz.makeConstructor (c$, 
function (sg, radius) {
Clazz.superConstructor (this, org.jmol.jvxl.readers.IsoShapeReader, [sg]);
this.sphere_radiusAngstroms = radius;
}, "org.jmol.jvxl.readers.SurfaceGenerator,~N");
Clazz.makeConstructor (c$, 
function (sg, n, l, m, z_eff, monteCarloCount) {
Clazz.superConstructor (this, org.jmol.jvxl.readers.IsoShapeReader, [sg]);
this.psi_n = n;
this.psi_l = l;
this.psi_m = m;
this.psi_Znuc = z_eff;
this.sphere_radiusAngstroms = 0;
this.monteCarloCount = monteCarloCount;
}, "org.jmol.jvxl.readers.SurfaceGenerator,~N,~N,~N,~N,~N");
Clazz.overrideMethod (c$, "setup", 
function (isMapData) {
this.volumeData.sr = this;
this.precalculateVoxelData = false;
this.isQuiet = true;
if (this.center.x == 3.4028235E38) this.center.set (0, 0, 0);
var type = "sphere";
switch (this.dataType) {
case 1294:
this.calcFactors (this.psi_n, this.psi_l, this.psi_m);
this.autoScaleOrbital ();
this.ptsPerAngstrom = 5;
this.maxGrid = 40;
type = "hydrogen-like orbital";
if (this.monteCarloCount > 0) {
this.vertexDataOnly = true;
this.random =  new java.util.Random (this.params.randomSeed);
} else {
this.isQuiet = false;
}break;
case 70:
case 71:
type = "lp";
this.vertexDataOnly = true;
this.radius = 0;
this.ptsPerAngstrom = 1;
this.maxGrid = 1;
break;
case 68:
this.allowNegative = false;
this.calcFactors (this.psi_n, this.psi_l, this.psi_m);
this.psi_normalization = 1;
this.radius = 1.1 * this.eccentricityRatio * this.eccentricityScale;
if (this.eccentricityScale > 0 && this.eccentricityScale < 1) this.radius /= this.eccentricityScale;
this.ptsPerAngstrom = 10;
this.maxGrid = 21;
type = "lobe";
break;
case 67:
type = "ellipsoid(thermal)";
this.radius = 3.0 * this.sphere_radiusAngstroms;
this.ptsPerAngstrom = 10;
this.maxGrid = 22;
break;
case 66:
type = "ellipsoid";
case 65:
default:
this.radius = 1.2 * this.sphere_radiusAngstroms * this.eccentricityScale;
this.ptsPerAngstrom = 10;
this.maxGrid = 22;
break;
}
if (this.monteCarloCount == 0) this.setVolumeData ();
this.setHeader (type + "\n");
}, "~B");
Clazz.defineMethod (c$, "setVolumeData", 
function () {
this.setVoxelRange (0, -this.radius, this.radius, this.ptsPerAngstrom, this.maxGrid, 0);
this.setVoxelRange (1, -this.radius, this.radius, this.ptsPerAngstrom, this.maxGrid, 0);
if (this.allowNegative) this.setVoxelRange (2, -this.radius, this.radius, this.ptsPerAngstrom, this.maxGrid, 0);
 else this.setVoxelRange (2, 0, this.radius / this.eccentricityRatio, this.ptsPerAngstrom, this.maxGrid, 0);
});
Clazz.overrideMethod (c$, "getValue", 
function (x, y, z, ptyz) {
this.volumeData.voxelPtToXYZ (x, y, z, this.ptPsi);
return this.getValueAtPoint (this.ptPsi);
}, "~N,~N,~N,~N");
Clazz.overrideMethod (c$, "getValueAtPoint", 
function (pt) {
this.ptTemp.set (pt);
this.ptTemp.sub (this.center);
if (this.isEccentric) this.eccentricityMatrixInverse.transform (this.ptTemp);
if (this.isAnisotropic) {
this.ptTemp.x /= this.anisotropy[0];
this.ptTemp.y /= this.anisotropy[1];
this.ptTemp.z /= this.anisotropy[2];
}if (this.sphere_radiusAngstroms > 0) {
if (this.params.anisoB != null) {
return this.sphere_radiusAngstroms - Math.sqrt (this.ptTemp.x * this.ptTemp.x + this.ptTemp.y * this.ptTemp.y + this.ptTemp.z * this.ptTemp.z) / (Math.sqrt (this.params.anisoB[0] * this.ptTemp.x * this.ptTemp.x + this.params.anisoB[1] * this.ptTemp.y * this.ptTemp.y + this.params.anisoB[2] * this.ptTemp.z * this.ptTemp.z + this.params.anisoB[3] * this.ptTemp.x * this.ptTemp.y + this.params.anisoB[4] * this.ptTemp.x * this.ptTemp.z + this.params.anisoB[5] * this.ptTemp.y * this.ptTemp.z));
}return this.sphere_radiusAngstroms - Math.sqrt (this.ptTemp.x * this.ptTemp.x + this.ptTemp.y * this.ptTemp.y + this.ptTemp.z * this.ptTemp.z);
}var value = this.hydrogenAtomPsi (this.ptTemp);
if (Math.abs (value) < 1.0E-7) value = 0;
return (this.allowNegative || value >= 0 ? value : 0);
}, "javax.vecmath.Point3f");
Clazz.defineMethod (c$, "setHeader", 
($fz = function (line1) {
this.jvxlFileHeaderBuffer =  new StringBuffer (line1);
if (this.sphere_radiusAngstroms > 0) {
this.jvxlFileHeaderBuffer.append (" rad=").append (this.sphere_radiusAngstroms);
} else {
this.jvxlFileHeaderBuffer.append (" n=").append (this.psi_n).append (", l=").append (this.psi_l).append (", m=").append (this.psi_m).append (" Znuc=").append (this.psi_Znuc).append (" res=").append (this.ptsPerAngstrom).append (" rad=").append (this.radius);
}this.jvxlFileHeaderBuffer.append (this.isAnisotropic ? " anisotropy=(" + this.anisotropy[0] + "," + this.anisotropy[1] + "," + this.anisotropy[2] + ")\n" : "\n");
org.jmol.jvxl.data.JvxlCoder.jvxlCreateHeaderWithoutTitleOrAtoms (this.volumeData, this.jvxlFileHeaderBuffer);
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "calcFactors", 
($fz = function (n, el, m) {
var abm = Math.abs (m);
var NnlLnl = Math.pow (2 * this.psi_Znuc / n / 0.52918, 1.5) * Math.sqrt (org.jmol.jvxl.readers.IsoShapeReader.fact[n - el - 1] * org.jmol.jvxl.readers.IsoShapeReader.fact[n + el] / 2 / n);
var Plm = Math.pow (2, -el) * org.jmol.jvxl.readers.IsoShapeReader.fact[el] * org.jmol.jvxl.readers.IsoShapeReader.fact[el + abm] * Math.sqrt ((2 * el + 1) * org.jmol.jvxl.readers.IsoShapeReader.fact[el - abm] / 2 / org.jmol.jvxl.readers.IsoShapeReader.fact[el + abm]);
for (var p = 0; p <= n - el - 1; p++) this.rfactor[p] = NnlLnl / org.jmol.jvxl.readers.IsoShapeReader.fact[p] / org.jmol.jvxl.readers.IsoShapeReader.fact[n - el - p - 1] / org.jmol.jvxl.readers.IsoShapeReader.fact[2 * el + p + 1];

for (var p = abm; p <= el; p++) this.pfactor[p] = Math.pow (-1, el - p) * Plm / org.jmol.jvxl.readers.IsoShapeReader.fact[p] / org.jmol.jvxl.readers.IsoShapeReader.fact[el + abm - p] / org.jmol.jvxl.readers.IsoShapeReader.fact[el - p] / org.jmol.jvxl.readers.IsoShapeReader.fact[p - abm];

}, $fz.isPrivate = true, $fz), "~N,~N,~N");
Clazz.defineMethod (c$, "autoScaleOrbital", 
($fz = function () {
this.aoMax = 0;
var rmax = 0;
this.aoMax2 = 0;
var rmax2 = 0;
var d;
if (this.params.distance == 0) {
for (var ir = 0; ir < 1000; ir++) {
var r = ir / 10;
d = Math.abs (this.radialPart (r));
if (org.jmol.util.Logger.debugging) org.jmol.util.Logger.debug ("R\t" + r + "\t" + d);
if (d >= this.aoMax) {
rmax = r;
this.aoMax = d;
}d *= d * r * r;
if (d >= this.aoMax2) {
rmax2 = r;
this.aoMax2 = d;
}}
} else {
this.aoMax = Math.abs (this.radialPart (this.params.distance));
this.aoMax2 = this.aoMax * this.aoMax * this.params.distance * this.params.distance;
rmax = rmax2 = this.params.distance;
}org.jmol.util.Logger.info ("Atomic Orbital radial max = " + this.aoMax + " at " + rmax);
org.jmol.util.Logger.info ("Atomic Orbital r2R2 max = " + this.aoMax2 + " at " + rmax2);
if (this.monteCarloCount >= 0) {
this.angMax2 = 0;
for (var ang = 0; ang < 180; ang += 1) {
var th = ang / (6.283185307179586);
d = Math.abs (this.angularPart (th, 0, 0));
if (org.jmol.util.Logger.debugging) org.jmol.util.Logger.debug ("A\t" + ang + "\t" + d);
if (d > this.angMax2) {
this.angMax2 = d;
}}
this.angMax2 *= this.angMax2;
if (this.psi_m != 0) {
this.angMax2 *= 2;
}org.jmol.util.Logger.info ("Atomic Orbital phi^2theta^2 max = " + this.angMax2);
}var min;
if (this.params.cutoff == 0) {
min = (this.monteCarloCount > 0 ? this.aoMax * 0.01 : 0.01);
} else if (this.monteCarloCount > 0) {
this.aoMax = Math.abs (this.params.cutoff);
min = this.aoMax * 0.01;
} else {
min = Math.abs (this.params.cutoff / 2);
if (this.params.isSquared) min = Math.sqrt (min / 2);
}var r0 = 0;
for (var ir = 1000; --ir >= 0; ir -= 1) {
var r = ir / 10;
d = Math.abs (this.radialPart (r));
if (d >= min) {
r0 = r;
break;
}}
this.radius = r0 + (this.monteCarloCount == 0 ? 1 : 0);
if (this.isAnisotropic) {
var aMax = 0;
for (var i = 3; --i >= 0; ) if (this.anisotropy[i] > aMax) aMax = this.anisotropy[i];

this.radius *= aMax;
}org.jmol.util.Logger.info ("Atomic Orbital radial extent set to " + this.radius + " for cutoff " + this.params.cutoff);
if (this.params.thePlane != null && this.monteCarloCount > 0) {
this.planeCenter =  new javax.vecmath.Point3f ();
this.planeU =  new javax.vecmath.Vector3f ();
org.jmol.util.Measure.getPlaneProjection (this.center, this.params.thePlane, this.planeCenter, this.planeU);
this.planeU.set (this.params.thePlane.x, this.params.thePlane.y, this.params.thePlane.z);
this.planeU.normalize ();
this.planeV =  new javax.vecmath.Vector3f (1, 0, 0);
if (Math.abs (this.planeU.dot (this.planeV)) > 0.5) this.planeV.set (0, 1, 0);
this.planeV.cross (this.planeU, this.planeV);
this.planeU.cross (this.planeU, this.planeV);
this.aoMax2 = 0;
d = this.center.distance (this.planeCenter);
if (d < this.radius) {
this.planeRadius = Math.sqrt (this.radius * this.radius - d * d);
var ir = Math.round ((this.planeRadius * 10));
for (var ix = -ir; ix <= ir; ix++) for (var iy = -ir; iy <= ir; iy++) {
this.ptPsi.set (this.planeU);
this.ptPsi.scale (ix / 10);
this.ptPsi.scaleAdd (iy / 10, this.planeV, this.ptPsi);
d = this.hydrogenAtomPsi (this.ptPsi);
d = Math.abs (this.hydrogenAtomPsi (this.ptPsi));
if (d > this.aoMax2) this.aoMax2 = d;
}

if (this.aoMax2 < 0.001) this.aoMax2 = 0;
 else this.aoMax2 *= this.aoMax2;
}}}, $fz.isPrivate = true, $fz));
Clazz.defineMethod (c$, "radialPart", 
($fz = function (r) {
var rho = 2 * this.psi_Znuc * r / this.psi_n / 0.52918;
var sum = 0;
for (var p = 0; p <= this.psi_n - this.psi_l - 1; p++) sum += Math.pow (-rho, p) * this.rfactor[p];

return Math.exp (-rho / 2) * Math.pow (rho, this.psi_l) * sum;
}, $fz.isPrivate = true, $fz), "~N");
Clazz.defineMethod (c$, "hydrogenAtomPsi", 
($fz = function (pt) {
var x2y2 = pt.x * pt.x + pt.y * pt.y;
this.rnl = this.radialPart (Math.sqrt (x2y2 + pt.z * pt.z));
var ph = Math.atan2 (pt.y, pt.x);
var th = Math.atan2 (Math.sqrt (x2y2), pt.z);
var theta_lm_phi_m = this.angularPart (th, ph, this.psi_m);
return this.rnl * theta_lm_phi_m;
}, $fz.isPrivate = true, $fz), "javax.vecmath.Point3f");
Clazz.defineMethod (c$, "angularPart", 
($fz = function (th, ph, m) {
var cth = Math.cos (th);
var sth = Math.sin (th);
var isS = (m == 0 && this.psi_l == 0);
var abm = Math.abs (m);
var sum = 0;
if (isS) sum = this.pfactor[0];
 else for (var p = abm; p <= this.psi_l; p++) sum += (p == abm ? 1 : Math.pow (1 + cth, p - abm)) * (p == this.psi_l ? 1 : Math.pow (1 - cth, this.psi_l - p)) * this.pfactor[p];

var theta_lm = (abm == 0 ? sum : Math.abs (Math.pow (sth, abm)) * sum);
var phi_m;
if (m == 0) phi_m = 1;
 else if (m > 0) phi_m = Math.cos (m * ph) * 1.414214;
 else phi_m = Math.sin (m * ph) * 1.414214;
return (Math.abs (phi_m) < 0.0000000001 ? 0 : theta_lm * phi_m * this.psi_normalization);
}, $fz.isPrivate = true, $fz), "~N,~N,~N");
Clazz.defineMethod (c$, "createMonteCarloOrbital", 
($fz = function () {
if (this.monteCarloDone || this.aoMax2 == 0 || this.params.distance > this.radius) return ;
var isS = (this.psi_m == 0 && this.psi_l == 0);
this.monteCarloDone = true;
var value;
var rave = 0;
this.nTries = 0;
for (var i = 0; i < this.monteCarloCount; this.nTries++) {
if (this.params.thePlane == null) {
var r;
if (this.params.distance == 0) {
r = this.random.nextDouble () * this.radius;
var rp = r * this.radialPart (r);
if (rp * rp <= this.aoMax2 * this.random.nextDouble ()) continue ;} else {
r = this.params.distance;
}var u = this.random.nextDouble ();
var v = this.random.nextDouble ();
var theta = 2 * 3.141592653589793 * u;
var cosPhi = 2 * v - 1;
if (!isS) {
var phi = Math.acos (cosPhi);
var ap = this.angularPart (phi, theta, this.psi_m);
if (ap * ap <= this.angMax2 * this.random.nextDouble ()) continue ;}var sinPhi = Math.sin (Math.acos (cosPhi));
var x = r * Math.cos (theta) * sinPhi;
var y = r * Math.sin (theta) * sinPhi;
var z = r * cosPhi;
this.ptPsi.set (x, y, z);
this.ptPsi.add (this.center);
value = this.getValueAtPoint (this.ptPsi);
} else {
this.ptPsi.set (this.planeU);
this.ptPsi.scale (this.random.nextFloat () * this.planeRadius * 2 - this.planeRadius);
this.ptPsi.scaleAdd (this.random.nextFloat () * this.planeRadius * 2 - this.planeRadius, this.planeV, this.ptPsi);
this.ptPsi.add (this.planeCenter);
value = this.getValueAtPoint (this.ptPsi);
if (value * value <= this.aoMax2 * this.random.nextFloat ()) continue ;}rave += this.ptPsi.distance (this.center);
this.addVertexCopy (this.ptPsi, value, 0);
i++;
}
if (this.params.distance == 0) org.jmol.util.Logger.info ("Atomic Orbital mean radius = " + rave / this.monteCarloCount + " for " + this.monteCarloCount + " points (" + this.nTries + " tries)");
}, $fz.isPrivate = true, $fz));
Clazz.defineMethod (c$, "readSurfaceData", 
function (isMapData) {
switch (this.params.dataType) {
case 1294:
if (this.monteCarloCount <= 0) break;
this.createMonteCarloOrbital ();
return ;
case 70:
case 71:
this.ptPsi.set (0, 0, this.eccentricityScale / 2);
this.eccentricityMatrixInverse.transform (this.ptPsi);
this.ptPsi.add (this.center);
this.addVertexCopy (this.center, 0, 0);
this.addVertexCopy (this.ptPsi, 0, 0);
this.addTriangleCheck (0, 0, 0, 0, 0, false, 0);
return ;
}
Clazz.superCall (this, org.jmol.jvxl.readers.IsoShapeReader, "readSurfaceData", [isMapData]);
}, "~B");
Clazz.defineStatics (c$,
"A0", 0.52918,
"ROOT2", 1.414214,
"ATOMIC_ORBITAL_ZERO_CUT_OFF", 1e-7,
"fact",  Clazz.newArray (20, 0));
{
org.jmol.jvxl.readers.IsoShapeReader.fact[0] = 1;
for (var i = 1; i < 20; i++) org.jmol.jvxl.readers.IsoShapeReader.fact[i] = org.jmol.jvxl.readers.IsoShapeReader.fact[i - 1] * i;

}});