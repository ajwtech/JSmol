﻿Clazz.declarePackage ("org.jmol.adapter.readers.quantum");
Clazz.load (["org.jmol.adapter.readers.quantum.BasisFunctionReader", "java.util.ArrayList"], "org.jmol.adapter.readers.quantum.SlaterReader", ["java.util.Arrays", "org.jmol.quantum.SlaterData", "org.jmol.util.Logger"], function () {
c$ = Clazz.decorateAsClass (function () {
this.slaters = null;
this.slaterArray = null;
if (!Clazz.isClassDefined ("org.jmol.adapter.readers.quantum.SlaterReader.SlaterSorter")) {
org.jmol.adapter.readers.quantum.SlaterReader.$SlaterReader$SlaterSorter$ ();
}
if (!Clazz.isClassDefined ("org.jmol.adapter.readers.quantum.SlaterReader.OrbitalSorter")) {
org.jmol.adapter.readers.quantum.SlaterReader.$SlaterReader$OrbitalSorter$ ();
}
Clazz.instantialize (this, arguments);
}, org.jmol.adapter.readers.quantum, "SlaterReader", org.jmol.adapter.readers.quantum.BasisFunctionReader);
Clazz.prepareFields (c$, function () {
this.slaters =  new java.util.ArrayList ();
});
Clazz.defineMethod (c$, "addSlater", 
function (iAtom, a, b, c, d, zeta, coef) {
this.slaters.add ( new org.jmol.quantum.SlaterData (iAtom, a, b, c, d, zeta, coef));
}, "~N,~N,~N,~N,~N,~N,~N");
Clazz.defineMethod (c$, "addSlater", 
function (sd, n) {
sd.index = n;
this.slaters.add (sd);
}, "org.jmol.quantum.SlaterData,~N");
Clazz.defineMethod (c$, "setSlaters", 
function (doScale, doSort) {
if (this.slaterArray == null) {
var nSlaters = this.slaters.size ();
this.slaterArray =  new Array (nSlaters);
for (var i = 0; i < this.slaterArray.length; i++) this.slaterArray[i] = this.slaters.get (i);

}if (doScale) for (var i = 0; i < this.slaterArray.length; i++) {
var sd = this.slaterArray[i];
sd.coef *= this.scaleSlater (sd.x, sd.y, sd.z, sd.r, sd.zeta);
if (org.jmol.util.Logger.debugging) {
org.jmol.util.Logger.debug ("SlaterReader " + i + ": " + sd.iAtom + " " + sd.x + " " + sd.y + " " + sd.z + " " + sd.r + " " + sd.zeta + " " + sd.coef);
}}
if (doSort) {
java.util.Arrays.sort (this.slaterArray, Clazz.innerTypeInstance (org.jmol.adapter.readers.quantum.SlaterReader.SlaterSorter, this, null));
var pointers =  Clazz.newArray (this.slaterArray.length, 0);
for (var i = 0; i < this.slaterArray.length; i++) pointers[i] = this.slaterArray[i].index;

this.sortOrbitalCoefficients (pointers);
}this.moData.put ("slaters", this.slaterArray);
this.atomSetCollection.setAtomSetAuxiliaryInfo ("moData", this.moData);
}, "~B,~B");
Clazz.defineMethod (c$, "setMOs", 
function (units) {
this.moData.put ("mos", this.orbitals);
this.moData.put ("energyUnits", units);
this.setMOData (this.moData);
}, "~S");
Clazz.defineMethod (c$, "sortOrbitalCoefficients", 
function (pointers) {
for (var i = this.orbitals.size (); --i >= 0; ) {
var mo = this.orbitals.get (i);
var coefs = mo.get ("coefficients");
var sorted =  Clazz.newArray (pointers.length, 0);
for (var j = 0; j < pointers.length; j++) {
var k = pointers[j];
if (k < coefs.length) sorted[j] = coefs[k];
}
mo.put ("coefficients", sorted);
}
}, "~A");
Clazz.defineMethod (c$, "sortOrbitals", 
function () {
var array = this.orbitals.toArray ( new Array (0));
java.util.Arrays.sort (array, Clazz.innerTypeInstance (org.jmol.adapter.readers.quantum.SlaterReader.OrbitalSorter, this, null));
this.orbitals.clear ();
for (var i = 0; i < array.length; i++) this.orbitals.add (array[i]);

});
Clazz.defineMethod (c$, "scaleSlater", 
function (ex, ey, ez, er, zeta) {
var el = ex + ey + ez;
switch (el) {
case 0:
case 1:
ez = -1;
break;
}
return org.jmol.adapter.readers.quantum.SlaterReader.getSlaterConstCartesian (el + er + 1, Math.abs (zeta), el, ex, ey, ez);
}, "~N,~N,~N,~N,~N");
c$.fact = Clazz.defineMethod (c$, "fact", 
($fz = function (f, zeta, n) {
return Math.pow (2 * zeta, n + 0.5) * Math.sqrt (f * 0.07957747154594767 / org.jmol.adapter.readers.quantum.SlaterReader.fact1[n]);
}, $fz.isPrivate = true, $fz), "~N,~N,~N");
c$.getSlaterConstCartesian = Clazz.defineMethod (c$, "getSlaterConstCartesian", 
function (n, zeta, el, ex, ey, ez) {
return org.jmol.adapter.readers.quantum.SlaterReader.fact (ez < 0 ? org.jmol.adapter.readers.quantum.SlaterReader.dfact2[el + 1] : org.jmol.adapter.readers.quantum.SlaterReader.dfact2[el + 1] / org.jmol.adapter.readers.quantum.SlaterReader.dfact2[ex] / org.jmol.adapter.readers.quantum.SlaterReader.dfact2[ey] / org.jmol.adapter.readers.quantum.SlaterReader.dfact2[ez], zeta, n);
}, "~N,~N,~N,~N,~N,~N");
c$.getSlaterConstDSpherical = Clazz.defineMethod (c$, "getSlaterConstDSpherical", 
function (n, zeta, ex, ey) {
return org.jmol.adapter.readers.quantum.SlaterReader.fact (Math.floor (15 / (ex < 0 ? 12 : ey < 0 ? 4 : 1)), zeta, n);
}, "~N,~N,~N,~N");
c$.$SlaterReader$SlaterSorter$ = function () {
Clazz.pu$h ();
c$ = Clazz.decorateAsClass (function () {
Clazz.prepareCallback (this, arguments);
Clazz.instantialize (this, arguments);
}, org.jmol.adapter.readers.quantum.SlaterReader, "SlaterSorter", null, java.util.Comparator);
Clazz.overrideMethod (c$, "compare", 
function (a, b) {
return (a.iAtom < b.iAtom ? -1 : a.iAtom > b.iAtom ? 1 : 0);
}, "org.jmol.quantum.SlaterData,org.jmol.quantum.SlaterData");
c$ = Clazz.p0p ();
};
c$.$SlaterReader$OrbitalSorter$ = function () {
Clazz.pu$h ();
c$ = Clazz.decorateAsClass (function () {
Clazz.prepareCallback (this, arguments);
Clazz.instantialize (this, arguments);
}, org.jmol.adapter.readers.quantum.SlaterReader, "OrbitalSorter", null, java.util.Comparator);
Clazz.overrideMethod (c$, "compare", 
function (a, b) {
var c = (a.get ("energy")).floatValue ();
var d = (b.get ("energy")).floatValue ();
return (c < d ? -1 : d < c ? 1 : 0);
}, "java.util.Map,java.util.Map");
c$ = Clazz.p0p ();
};
Clazz.defineStatics (c$,
"_1_4pi", 0.07957747154594767,
"fact1", [1.0, 2.0, 24.0, 720.0, 40320.0, 362880.0, 87178291200.0],
"dfact2", [1, 1, 3, 15, 105]);
});