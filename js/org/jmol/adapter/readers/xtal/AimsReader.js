﻿Clazz.declarePackage ("org.jmol.adapter.readers.xtal");
Clazz.load (["org.jmol.adapter.smarter.AtomSetCollectionReader"], "org.jmol.adapter.readers.xtal.AimsReader", ["org.jmol.util.Logger"], function () {
c$ = Clazz.decorateAsClass (function () {
this.globalDoApplySymmetry = false;
this.isFractional = false;
this.nLatticeVectors = 0;
Clazz.instantialize (this, arguments);
}, org.jmol.adapter.readers.xtal, "AimsReader", org.jmol.adapter.smarter.AtomSetCollectionReader);
Clazz.overrideMethod (c$, "initializeReader", 
function () {
this.globalDoApplySymmetry = this.doApplySymmetry;
this.doApplySymmetry = true;
this.isFractional = true;
});
Clazz.overrideMethod (c$, "checkLine", 
function () {
var tokens = this.getTokens ();
if (tokens.length == 0) return true;
if (tokens[0].equals ("lattice_vector")) {
this.readLatticeVector (tokens);
return true;
}if (tokens[0].equals ("atom")) {
this.readAtom (tokens, false);
return true;
}if (tokens[0].equals ("atom_frac")) {
this.readAtom (tokens, true);
return true;
}if (tokens[0].equals ("multipole")) {
this.readMultipole (tokens);
return true;
}return true;
});
Clazz.defineMethod (c$, "finalizeReader", 
function () {
this.doApplySymmetry = this.globalDoApplySymmetry;
if (this.nLatticeVectors == 1 || this.nLatticeVectors == 2) {
org.jmol.util.Logger.warn ("ignoring translation symmetry for more or less than 3 dimensions(which is currently neither supported by FHI-aims");
}Clazz.superCall (this, org.jmol.adapter.readers.xtal.AimsReader, "finalizeReader", []);
});
Clazz.defineMethod (c$, "readLatticeVector", 
($fz = function (tokens) {
if (tokens.length < 4) {
org.jmol.util.Logger.warn ("cannot read line with FHI-aims lattice vector: " + this.line);
} else if (this.nLatticeVectors == 3) {
org.jmol.util.Logger.warn ("more than 3 FHI-aims lattice vectors found with line: " + this.line);
} else {
this.addPrimitiveLatticeVector (this.nLatticeVectors++, [this.parseFloat (tokens[1]), this.parseFloat (tokens[2]), this.parseFloat (tokens[3])], 0);
this.setFractionalCoordinates (this.nLatticeVectors == 3);
}}, $fz.isPrivate = true, $fz), "~A");
Clazz.defineMethod (c$, "readAtom", 
($fz = function (tokens, isFractional) {
if (tokens.length < 5) {
org.jmol.util.Logger.warn ("cannot read line with FHI-aims line: " + this.line);
return ;
}if (this.isFractional != isFractional) this.setFractionalCoordinates (this.isFractional = isFractional);
var atom = this.atomSetCollection.addNewAtom ();
this.setAtomCoord (atom, this.parseFloat (tokens[1]), this.parseFloat (tokens[2]), this.parseFloat (tokens[3]));
atom.elementSymbol = tokens[4];
}, $fz.isPrivate = true, $fz), "~A,~B");
Clazz.defineMethod (c$, "readMultipole", 
($fz = function (tokens) {
if (tokens.length < 6) {
org.jmol.util.Logger.warn ("cannot read line with FHI-aims atom data: " + this.line);
return ;
}var order = this.parseInt (tokens[4]);
if (order > 0) {
org.jmol.util.Logger.warn ("multipole line ignored since only monopoles are currently supported: " + this.line);
return ;
}if (this.isFractional) this.setFractionalCoordinates (this.isFractional = false);
var atom = this.atomSetCollection.addNewAtom ();
this.setAtomCoord (atom, this.parseFloat (tokens[1]), this.parseFloat (tokens[2]), this.parseFloat (tokens[3]));
atom.partialCharge = this.parseFloat (tokens[5]);
}, $fz.isPrivate = true, $fz), "~A");
});