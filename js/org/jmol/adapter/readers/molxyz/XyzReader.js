﻿Clazz.declarePackage ("org.jmol.adapter.readers.molxyz");
Clazz.load (["org.jmol.adapter.smarter.AtomSetCollectionReader"], "org.jmol.adapter.readers.molxyz.XyzReader", ["java.lang.Float", "org.jmol.util.Logger"], function () {
c$ = Clazz.declareType (org.jmol.adapter.readers.molxyz, "XyzReader", org.jmol.adapter.smarter.AtomSetCollectionReader);
Clazz.overrideMethod (c$, "checkLine", 
function () {
var modelAtomCount = this.parseInt (this.line);
if (modelAtomCount == -2147483648) {
this.continuing = false;
return false;
}this.vibrationNumber = ++this.modelNumber;
if (this.desiredVibrationNumber <= 0 ? this.doGetModel (this.modelNumber, null) : this.doGetVibration (this.vibrationNumber)) {
this.readLine ();
this.checkLineForScript ();
this.atomSetCollection.newAtomSet ();
var name = this.line;
this.readAtoms (modelAtomCount);
this.applySymmetryAndSetTrajectory ();
this.atomSetCollection.setAtomSetName (name);
if (this.isLastModel (this.modelNumber)) {
this.continuing = false;
return false;
}} else {
this.skipAtomSet (modelAtomCount);
}this.discardLinesUntilNonBlank ();
return false;
});
Clazz.defineMethod (c$, "finalizeReader", 
function () {
this.isTrajectory = false;
Clazz.superCall (this, org.jmol.adapter.readers.molxyz.XyzReader, "finalizeReader", []);
});
Clazz.defineMethod (c$, "skipAtomSet", 
($fz = function (modelAtomCount) {
this.readLine ();
for (var i = modelAtomCount; --i >= 0; ) this.readLine ();

}, $fz.isPrivate = true, $fz), "~N");
Clazz.defineMethod (c$, "readAtoms", 
($fz = function (modelAtomCount) {
for (var i = 0; i < modelAtomCount; ++i) {
this.readLine ();
var tokens = this.getTokens ();
if (tokens.length < 4) {
org.jmol.util.Logger.warn ("line cannot be read for XYZ atom data: " + this.line);
continue ;}var atom = this.atomSetCollection.addNewAtom ();
this.setElementAndIsotope (atom, tokens[0]);
atom.x = this.parseFloat (tokens[1]);
atom.y = this.parseFloat (tokens[2]);
atom.z = this.parseFloat (tokens[3]);
if (Float.isNaN (atom.x) || Float.isNaN (atom.y) || Float.isNaN (atom.z)) {
org.jmol.util.Logger.warn ("line cannot be read for XYZ atom data: " + this.line);
atom.set (0, 0, 0);
}var vpt = 4;
this.setAtomCoord (atom);
switch (tokens.length) {
case 4:
continue ;case 5:
case 6:
case 8:
case 9:
if (tokens[4].indexOf (".") >= 0) {
atom.partialCharge = this.parseFloat (tokens[4]);
} else {
var charge = this.parseInt (tokens[4]);
if (charge != -2147483648) atom.formalCharge = charge;
}switch (tokens.length) {
case 5:
continue ;case 6:
atom.radius = this.parseFloat (tokens[5]);
continue ;case 9:
atom.atomSerial = this.parseInt (tokens[8]);
}
vpt++;
default:
var vx = this.parseFloat (tokens[vpt++]);
var vy = this.parseFloat (tokens[vpt++]);
var vz = this.parseFloat (tokens[vpt++]);
if (Float.isNaN (vx) || Float.isNaN (vy) || Float.isNaN (vz)) continue ;this.atomSetCollection.addVibrationVector (atom.atomIndex, vx, vy, vz);
}
}
}, $fz.isPrivate = true, $fz), "~N");
});