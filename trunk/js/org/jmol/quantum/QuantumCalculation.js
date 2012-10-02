Clazz.declarePackage ("org.jmol.quantum");
Clazz.load (["javax.vecmath.Point3f"], "org.jmol.quantum.QuantumCalculation", ["org.jmol.util.Escape", "$.Logger"], function () {
c$ = Clazz.decorateAsClass (function () {
this.doDebug = false;
this.bsExcluded = null;
this.voxelData = null;
this.vd = null;
this.countsXYZ = null;
this.points = null;
this.xMin = 0;
this.xMax = 0;
this.yMin = 0;
this.yMax = 0;
this.zMin = 0;
this.zMax = 0;
this.qmAtoms = null;
this.atomIndex = 0;
this.thisAtom = null;
this.firstAtomOffset = 0;
this.xBohr = null;
this.yBohr = null;
this.zBohr = null;
this.originBohr = null;
this.stepBohr = null;
this.nX = 0;
this.nY = 0;
this.nZ = 0;
this.X = null;
this.Y = null;
this.Z = null;
this.X2 = null;
this.Y2 = null;
this.Z2 = null;
this.rangeBohrOrAngstroms = 10;
this.unitFactor = 1.8897161;
this.volume = 1;
if (!Clazz.isClassDefined ("org.jmol.quantum.QuantumCalculation.QMAtom")) {
org.jmol.quantum.QuantumCalculation.$QuantumCalculation$QMAtom$ ();
}
Clazz.instantialize (this, arguments);
}, org.jmol.quantum, "QuantumCalculation");
Clazz.prepareFields (c$, function () {
this.originBohr =  Clazz.newArray (3, 0);
this.stepBohr =  Clazz.newArray (3, 0);
});
Clazz.defineMethod (c$, "initialize", 
function (nX, nY, nZ, points) {
if (points != null) {
this.points = points;
nX = nY = nZ = points.length;
}this.nX = this.xMax = nX;
this.nY = this.yMax = nY;
this.nZ = this.zMax = nZ;
if (this.xBohr != null && this.xBohr.length >= nX) return ;
this.xBohr =  Clazz.newArray (nX, 0);
this.yBohr =  Clazz.newArray (nY, 0);
this.zBohr =  Clazz.newArray (nZ, 0);
this.X =  Clazz.newArray (nX, 0);
this.Y =  Clazz.newArray (nY, 0);
this.Z =  Clazz.newArray (nZ, 0);
this.X2 =  Clazz.newArray (nX, 0);
this.Y2 =  Clazz.newArray (nY, 0);
this.Z2 =  Clazz.newArray (nZ, 0);
}, "~N,~N,~N,~A");
Clazz.defineMethod (c$, "setupCoordinates", 
function (originXYZ, stepsXYZ, bsSelected, atomCoordAngstroms, points, renumber) {
if (points == null) {
this.volume = 1;
for (var i = 3; --i >= 0; ) {
this.originBohr[i] = originXYZ[i] * this.unitFactor;
this.stepBohr[i] = stepsXYZ[i] * this.unitFactor;
this.volume *= this.stepBohr[i];
}
org.jmol.util.Logger.info ("QuantumCalculation:\n origin = " + org.jmol.util.Escape.escape (originXYZ) + "\n steps = " + org.jmol.util.Escape.escape (stepsXYZ) + "\n origin(Bohr)= " + org.jmol.util.Escape.escape (this.originBohr) + "\n steps(Bohr)= " + org.jmol.util.Escape.escape (this.stepBohr) + "\n counts= " + this.nX + " " + this.nY + " " + this.nZ);
}if (atomCoordAngstroms != null) {
this.qmAtoms =  new Array (renumber ? bsSelected.cardinality () : atomCoordAngstroms.length);
var isAll = (bsSelected == null);
var i0 = (isAll ? this.qmAtoms.length - 1 : bsSelected.nextSetBit (0));
for (var i = i0, j = 0; i >= 0; i = (isAll ? i - 1 : bsSelected.nextSetBit (i + 1))) this.qmAtoms[renumber ? j++ : i] = Clazz.innerTypeInstance (org.jmol.quantum.QuantumCalculation.QMAtom, this, null, i, atomCoordAngstroms[i], this.X, this.Y, this.Z, this.X2, this.Y2, this.Z2);

}}, "~A,~A,javax.util.BitSet,~A,~A,~B");
Clazz.defineMethod (c$, "process", 
function (pt) {
this.doDebug = false;
if (this.points == null || this.nX != 1) this.initializeOnePoint ();
this.points[0].setT (pt);
this.voxelData[0][0][0] = 0;
this.setXYZBohr (this.points);
this.processPoints ();
return this.voxelData[0][0][0];
}, "javax.vecmath.Point3f");
Clazz.defineMethod (c$, "processPoints", 
function () {
this.process ();
});
Clazz.defineMethod (c$, "initializeOnePoint", 
function () {
this.points =  new Array (1);
this.points[0] =  new javax.vecmath.Point3f ();
this.voxelData =  Clazz.newArray (1, 1, 1, 0);
this.xMin = this.yMin = this.zMin = 0;
this.initialize (1, 1, 1, this.points);
});
Clazz.defineMethod (c$, "setXYZBohr", 
function (points) {
this.setXYZBohr (this.xBohr, 0, this.nX, points);
this.setXYZBohr (this.yBohr, 1, this.nY, points);
this.setXYZBohr (this.zBohr, 2, this.nZ, points);
}, "~A");
Clazz.defineMethod (c$, "setXYZBohr", 
($fz = function (bohr, i, n, points) {
if (points != null) {
var x = 0;
for (var j = 0; j < n; j++) {
switch (i) {
case 0:
x = points[j].x;
break;
case 1:
x = points[j].y;
break;
case 2:
x = points[j].z;
break;
}
bohr[j] = x * this.unitFactor;
}
return ;
}bohr[0] = this.originBohr[i];
var inc = this.stepBohr[i];
for (var j = 0; ++j < n; ) bohr[j] = bohr[j - 1] + inc;

}, $fz.isPrivate = true, $fz), "~A,~N,~N,~A");
Clazz.defineMethod (c$, "setMinMax", 
function (ix) {
this.yMax = this.zMax = (ix < 0 ? this.xMax : ix + 1);
this.yMin = this.zMin = (ix < 0 ? 0 : ix);
}, "~N");
c$.$QuantumCalculation$QMAtom$ = function () {
Clazz.pu$h ();
c$ = Clazz.decorateAsClass (function () {
Clazz.prepareCallback (this, arguments);
this.myX = null;
this.myY = null;
this.myZ = null;
this.myX2 = null;
this.myY2 = null;
this.myZ2 = null;
this.atom = null;
this.index = 0;
this.znuc = 0;
this.iMolecule = 0;
this.isExcluded = false;
Clazz.instantialize (this, arguments);
}, org.jmol.quantum.QuantumCalculation, "QMAtom", javax.vecmath.Point3f);
Clazz.makeConstructor (c$, 
function (a, b, c, d, e, f, g, h) {
Clazz.superConstructor (this, org.jmol.quantum.QuantumCalculation.QMAtom, []);
this.index = a;
this.myX = c;
this.myY = d;
this.myZ = e;
this.myX2 = f;
this.myY2 = g;
this.myZ2 = h;
this.atom = b;
this.isExcluded = (this.b$["org.jmol.quantum.QuantumCalculation"].bsExcluded != null && this.b$["org.jmol.quantum.QuantumCalculation"].bsExcluded.get (a));
this.setT (b);
this.scale (this.b$["org.jmol.quantum.QuantumCalculation"].unitFactor);
this.znuc = b.getElementNumber ();
}, "~N,org.jmol.modelset.Atom,~A,~A,~A,~A,~A,~A");
Clazz.defineMethod (c$, "setXYZ", 
function (a) {
var b;
try {
if (a) {
if (this.b$["org.jmol.quantum.QuantumCalculation"].points != null) {
this.b$["org.jmol.quantum.QuantumCalculation"].xMin = this.b$["org.jmol.quantum.QuantumCalculation"].yMin = this.b$["org.jmol.quantum.QuantumCalculation"].zMin = 0;
this.b$["org.jmol.quantum.QuantumCalculation"].xMax = this.b$["org.jmol.quantum.QuantumCalculation"].yMax = this.b$["org.jmol.quantum.QuantumCalculation"].zMax = this.b$["org.jmol.quantum.QuantumCalculation"].points.length;
} else {
b = Math.round (Math.floor ((this.x - this.b$["org.jmol.quantum.QuantumCalculation"].xBohr[0] - this.b$["org.jmol.quantum.QuantumCalculation"].rangeBohrOrAngstroms) / this.b$["org.jmol.quantum.QuantumCalculation"].stepBohr[0]));
this.b$["org.jmol.quantum.QuantumCalculation"].xMin = (b < 0 ? 0 : b);
b = Math.round (Math.floor (1 + (this.x - this.b$["org.jmol.quantum.QuantumCalculation"].xBohr[0] + this.b$["org.jmol.quantum.QuantumCalculation"].rangeBohrOrAngstroms) / this.b$["org.jmol.quantum.QuantumCalculation"].stepBohr[0]));
this.b$["org.jmol.quantum.QuantumCalculation"].xMax = (b >= this.b$["org.jmol.quantum.QuantumCalculation"].nX ? this.b$["org.jmol.quantum.QuantumCalculation"].nX : b + 1);
b = Math.round (Math.floor ((this.y - this.b$["org.jmol.quantum.QuantumCalculation"].yBohr[0] - this.b$["org.jmol.quantum.QuantumCalculation"].rangeBohrOrAngstroms) / this.b$["org.jmol.quantum.QuantumCalculation"].stepBohr[1]));
this.b$["org.jmol.quantum.QuantumCalculation"].yMin = (b < 0 ? 0 : b);
b = Math.round (Math.floor (1 + (this.y - this.b$["org.jmol.quantum.QuantumCalculation"].yBohr[0] + this.b$["org.jmol.quantum.QuantumCalculation"].rangeBohrOrAngstroms) / this.b$["org.jmol.quantum.QuantumCalculation"].stepBohr[1]));
this.b$["org.jmol.quantum.QuantumCalculation"].yMax = (b >= this.b$["org.jmol.quantum.QuantumCalculation"].nY ? this.b$["org.jmol.quantum.QuantumCalculation"].nY : b + 1);
b = Math.round (Math.floor ((this.z - this.b$["org.jmol.quantum.QuantumCalculation"].zBohr[0] - this.b$["org.jmol.quantum.QuantumCalculation"].rangeBohrOrAngstroms) / this.b$["org.jmol.quantum.QuantumCalculation"].stepBohr[2]));
this.b$["org.jmol.quantum.QuantumCalculation"].zMin = (b < 0 ? 0 : b);
b = Math.round (Math.floor (1 + (this.z - this.b$["org.jmol.quantum.QuantumCalculation"].zBohr[0] + this.b$["org.jmol.quantum.QuantumCalculation"].rangeBohrOrAngstroms) / this.b$["org.jmol.quantum.QuantumCalculation"].stepBohr[2]));
this.b$["org.jmol.quantum.QuantumCalculation"].zMax = (b >= this.b$["org.jmol.quantum.QuantumCalculation"].nZ ? this.b$["org.jmol.quantum.QuantumCalculation"].nZ : b + 1);
}}for (b = this.b$["org.jmol.quantum.QuantumCalculation"].xMax; --b >= this.b$["org.jmol.quantum.QuantumCalculation"].xMin; ) {
this.myX2[b] = this.myX[b] = this.b$["org.jmol.quantum.QuantumCalculation"].xBohr[b] - this.x;
this.myX2[b] *= this.myX[b];
}
for (b = this.b$["org.jmol.quantum.QuantumCalculation"].yMax; --b >= this.b$["org.jmol.quantum.QuantumCalculation"].yMin; ) {
this.myY2[b] = this.myY[b] = this.b$["org.jmol.quantum.QuantumCalculation"].yBohr[b] - this.y;
this.myY2[b] *= this.myY[b];
}
for (b = this.b$["org.jmol.quantum.QuantumCalculation"].zMax; --b >= this.b$["org.jmol.quantum.QuantumCalculation"].zMin; ) {
this.myZ2[b] = this.myZ[b] = this.b$["org.jmol.quantum.QuantumCalculation"].zBohr[b] - this.z;
this.myZ2[b] *= this.myZ[b];
}
if (this.b$["org.jmol.quantum.QuantumCalculation"].points != null) {
this.b$["org.jmol.quantum.QuantumCalculation"].yMax = this.b$["org.jmol.quantum.QuantumCalculation"].zMax = 1;
}} catch (e) {
if (Clazz.exceptionOf (e, Exception)) {
org.jmol.util.Logger.error ("Error in QuantumCalculation setting bounds");
} else {
throw e;
}
}
}, "~B");
c$ = Clazz.p0p ();
};
Clazz.defineStatics (c$,
"bohr_per_angstrom", 1.8897161);
});
