﻿Clazz.declarePackage ("org.jmol.adapter.readers.xtal");
Clazz.load (["org.jmol.adapter.smarter.AtomSetCollectionReader"], "org.jmol.adapter.readers.xtal.Wien2kReader", ["java.lang.Character", "$.Float", "org.jmol.util.TextFormat"], function () {
c$ = Clazz.decorateAsClass (function () {
this.isrhombohedral = false;
this.latticeCode = '\0';
this.doSymmetry = true;
this.cxyz = " x y z";
Clazz.instantialize (this, arguments);
}, org.jmol.adapter.readers.xtal, "Wien2kReader", org.jmol.adapter.smarter.AtomSetCollectionReader);
Clazz.overrideMethod (c$, "initializeReader", 
function () {
this.doSymmetry = !this.spaceGroup.equals ("none");
this.setFractionalCoordinates (true);
this.atomSetCollection.setCollectionName (this.readLine ());
this.readUnitCell ();
this.readAtoms ();
this.readSymmetry ();
this.readEmbeddedScript ();
this.continuing = false;
});
Clazz.defineMethod (c$, "readUnitCell", 
($fz = function () {
this.readLine ();
this.isrhombohedral = (((this.latticeCode = this.line.charAt (0))).charCodeAt (0) == 82);
if (this.line.startsWith ("CYZ")) this.latticeCode = 'A';
 else if (this.line.startsWith ("CXZ")) this.latticeCode = 'B';
 else if (this.line.startsWith ("B")) this.latticeCode = 'I';
if (this.latticeCode.charCodeAt (0) != 82 && this.latticeCode.charCodeAt (0) != 72) this.atomSetCollection.setLatticeParameter (this.latticeCode.charCodeAt (0));
if (this.line.length > 32) {
var name = this.line.substring (32).trim ();
if (name.indexOf (" ") >= 0) name = name.substring (name.indexOf (" ") + 1);
if (name.indexOf ("_") >= 0) name = name.substring (name.indexOf ("_") + 1);
this.setSpaceGroupName (name);
}var factor = (this.readLine ().toLowerCase ().indexOf ("ang") >= 0 ? 1 : 0.5291772);
this.readLine ();
var a = this.parseFloatStr (this.line.substring (0, 10)) * factor;
var b = this.parseFloatStr (this.line.substring (10, 20)) * factor;
var c = this.parseFloatStr (this.line.substring (20, 30)) * factor;
var l = this.line.length;
var alpha = (l >= 40 ? this.parseFloatStr (this.line.substring (30, 40)) : 0);
var beta = (l >= 50 ? this.parseFloatStr (this.line.substring (40, 50)) : 0);
var gamma = (l >= 60 ? this.parseFloatStr (this.line.substring (50, 60)) : 0);
if (this.isrhombohedral) {
var ar = Math.sqrt (a * a / 3 + c * c / 9);
alpha = beta = gamma = (Math.acos ((2 * c * c - 3 * a * a) / (2 * c * c + 6 * a * a)) * 180 / 3.141592653589793);
a = b = c = ar;
}if (Float.isNaN (alpha) || alpha == 0) alpha = 90;
if (Float.isNaN (beta) || beta == 0) beta = 90;
if (Float.isNaN (gamma) || gamma == 0) gamma = 90;
this.setUnitCell (a, b, c, alpha, beta, gamma);
}, $fz.isPrivate = true, $fz));
Clazz.defineMethod (c$, "readAtoms", 
($fz = function () {
this.readLine ();
while (this.line != null && (this.line.indexOf ("ATOM") == 0 || !this.doSymmetry && this.line.indexOf (":") == 8)) {
var thisAtom = this.atomSetCollection.getAtomCount ();
this.addAtom ();
if (this.readLine ().indexOf ("MULT=") == 10) for (var i = this.parseIntStr (this.line.substring (15, 18)); --i >= 0; ) {
this.readLine ();
if (!this.doSymmetry) this.addAtom ();
}
var atomName = this.line.substring (0, 10);
var sym = atomName.substring (0, 2).trim ();
if (sym.length == 2 && Character.isDigit (sym.charAt (1))) sym = sym.substring (0, 1);
atomName = org.jmol.util.TextFormat.simpleReplace (atomName, " ", "");
var n = 0;
for (var i = this.atomSetCollection.getAtomCount (); --i >= thisAtom; ) {
var atom = this.atomSetCollection.getAtom (i);
atom.elementSymbol = sym;
atom.atomName = atomName + "_" + (n++);
}
while (this.readLine () != null && this.line.indexOf ("ATOM") < 0 && this.line.indexOf ("SYMMETRY") < 0) {
}
}
}, $fz.isPrivate = true, $fz));
Clazz.defineMethod (c$, "addAtom", 
($fz = function () {
var a = this.parseFloatStr (this.line.substring (12, 22));
var b = this.parseFloatStr (this.line.substring (25, 35));
var c = this.parseFloatStr (this.line.substring (38, 48));
var atom = this.atomSetCollection.addNewAtom ();
this.setAtomCoordXYZ (atom, a, b, c);
}, $fz.isPrivate = true, $fz));
Clazz.defineMethod (c$, "readSymmetry", 
($fz = function () {
if (this.line.indexOf ("SYMMETRY") < 0) return ;
var n = this.parseIntStr (this.line.substring (0, 4).trim ());
for (var i = n; --i >= 0; ) {
var xyz = this.getJones () + "," + this.getJones () + "," + this.getJones ();
if (this.doSymmetry) this.setSymmetryOperator (xyz);
this.readLine ();
}
}, $fz.isPrivate = true, $fz));
Clazz.defineMethod (c$, "getJones", 
($fz = function () {
this.readLine ();
var xyz = "";
var trans = this.parseFloatStr (this.line.substring (6));
for (var i = 0; i < 6; i++) {
if ((this.line.charAt (i)).charCodeAt (0) == 45) xyz += "-";
if ((this.line.charAt (++i)).charCodeAt (0) == 49) {
xyz += (" x y z".charAt (i)).charCodeAt (0);
if (trans > 0) xyz += "+";
if (trans != 0) xyz += trans;
}}
return xyz;
}, $fz.isPrivate = true, $fz));
Clazz.defineMethod (c$, "readEmbeddedScript", 
($fz = function () {
while (this.line != null) {
this.checkCurrentLineForScript ();
this.readLine ();
}
}, $fz.isPrivate = true, $fz));
});
