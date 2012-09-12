Clazz.declarePackage ("org.jmol.symmetry");
Clazz.load (["javax.vecmath.Matrix4f", "$.Point3i"], ["org.jmol.symmetry.Translation", "$.Rotation", "$.HallInfo"], ["java.lang.StringBuffer", "org.jmol.symmetry.SymmetryOperation", "org.jmol.util.Logger"], function () {
c$ = Clazz.decorateAsClass (function () {
this.hallSymbol = null;
this.primitiveHallSymbol = null;
this.latticeCode = 0;
this.latticeExtension = null;
this.isCentrosymmetric = false;
this.nRotations = 0;
this.rotationTerms = null;
this.vector12ths = null;
this.vectorCode = null;
if (!Clazz.isClassDefined ("org.jmol.symmetry.HallInfo.RotationTerm")) {
org.jmol.symmetry.HallInfo.$HallInfo$RotationTerm$ ();
}
Clazz.instantialize (this, arguments);
}, org.jmol.symmetry, "HallInfo");
Clazz.prepareFields (c$, function () {
this.rotationTerms =  new Array (16);
});
Clazz.makeConstructor (c$, 
function (hallSymbol) {
try {
var str = this.hallSymbol = hallSymbol.trim ();
str = this.extractLatticeInfo (str);
if (org.jmol.symmetry.Translation.getLatticeIndex (this.latticeCode) == 0) return ;
this.latticeExtension = org.jmol.symmetry.Translation.getLatticeExtension (this.latticeCode, this.isCentrosymmetric);
str = this.extractVectorInfo (str) + this.latticeExtension;
org.jmol.util.Logger.info ("Hallinfo: " + hallSymbol + " " + str);
var prevOrder = 0;
var prevAxisType = '\0';
this.primitiveHallSymbol = "P";
while (str.length > 0 && this.nRotations < 16) {
str = this.extractRotationInfo (str, prevOrder, prevAxisType);
var r = this.rotationTerms[this.nRotations - 1];
prevOrder = r.order;
prevAxisType = r.axisType;
this.primitiveHallSymbol += " " + r.primitiveCode;
}
this.primitiveHallSymbol += this.vectorCode;
} catch (e) {
if (Clazz.exceptionOf (e, Exception)) {
org.jmol.util.Logger.error ("Invalid Hall symbol");
this.nRotations = 0;
} else {
throw e;
}
}
}, "~S");
Clazz.defineMethod (c$, "dumpInfo", 
function () {
var sb =  new StringBuffer ("\nHall symbol: ").append (this.hallSymbol).append ("\nprimitive Hall symbol: ").append (this.primitiveHallSymbol).append ("\nlattice type: ").append (this.getLatticeDesignation ());
for (var i = 0; i < this.nRotations; i++) {
sb.append ("\n\nrotation term ").append (i + 1).append (this.rotationTerms[i].dumpInfo ());
}
return sb.toString ();
});
Clazz.defineMethod (c$, "getLatticeDesignation", 
($fz = function () {
return org.jmol.symmetry.Translation.getLatticeDesignation (this.latticeCode, this.isCentrosymmetric);
}, $fz.isPrivate = true, $fz));
Clazz.defineMethod (c$, "extractLatticeInfo", 
($fz = function (name) {
var i = name.indexOf (" ");
if (i < 0) return "";
var term = name.substring (0, i).toUpperCase ();
this.latticeCode = term.charAt (0);
if ((this.latticeCode).charCodeAt (0) == ('-').charCodeAt (0)) {
this.isCentrosymmetric = true;
this.latticeCode = term.charAt (1);
}return name.substring (i + 1).trim ();
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "extractVectorInfo", 
($fz = function (name) {
this.vector12ths =  new javax.vecmath.Point3i ();
this.vectorCode = "";
var i = name.indexOf ("(");
var j = name.indexOf (")", i);
if (i > 0 && j > i) {
var term = name.substring (i + 1, j);
this.vectorCode = " (" + term + ")";
name = name.substring (0, i).trim ();
i = term.indexOf (" ");
if (i >= 0) {
this.vector12ths.x = Integer.parseInt (term.substring (0, i));
term = term.substring (i + 1).trim ();
i = term.indexOf (" ");
if (i >= 0) {
this.vector12ths.y = Integer.parseInt (term.substring (0, i));
term = term.substring (i + 1).trim ();
}}this.vector12ths.z = Integer.parseInt (term);
}return name;
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "extractRotationInfo", 
($fz = function (name, prevOrder, prevAxisType) {
var i = name.indexOf (" ");
var code;
if (i >= 0) {
code = name.substring (0, i);
name = name.substring (i + 1).trim ();
} else {
code = name;
name = "";
}this.rotationTerms[this.nRotations] = Clazz.innerTypeInstance (org.jmol.symmetry.HallInfo.RotationTerm, this, null, code, prevOrder, prevAxisType);
this.nRotations++;
return name;
}, $fz.isPrivate = true, $fz), "~S,~N,~N");
c$.$HallInfo$RotationTerm$ = function () {
Clazz.pu$h ();
c$ = Clazz.decorateAsClass (function () {
Clazz.prepareCallback (this, arguments);
this.inputCode = null;
this.primitiveCode = null;
this.lookupCode = null;
this.translationString = null;
this.rotation = null;
this.translation = null;
this.seitzMatrix12ths = null;
this.isImproper = false;
this.order = 0;
this.axisType = 0;
this.diagonalReferenceAxis = 0;
this.allPositive = true;
Clazz.instantialize (this, arguments);
}, org.jmol.symmetry.HallInfo, "RotationTerm");
Clazz.prepareFields (c$, function () {
this.seitzMatrix12ths =  new javax.vecmath.Matrix4f ();
});
Clazz.makeConstructor (c$, 
function () {
});
Clazz.makeConstructor (c$, 
function (a, b, c) {
this.getRotationInfo (a, b, c);
}, "~S,~N,~N");
Clazz.defineMethod (c$, "dumpInfo", 
function () {
var a =  new StringBuffer ("\ninput code: ").append (this.inputCode).append ("; primitive code: ").append (this.primitiveCode).append ("\norder: ").append (this.order).append (this.isImproper ? " (improper axis)" : "");
if ((this.axisType).charCodeAt (0) != ('_').charCodeAt (0)) {
a.append ("; axisType: ").append (this.axisType);
if ((this.diagonalReferenceAxis).charCodeAt (0) != ('\0').charCodeAt (0)) a.append (this.diagonalReferenceAxis);
}if (this.translationString.length > 0) a.append ("; translation: ").append (this.translationString);
if (this.b$["org.jmol.symmetry.HallInfo"].vectorCode.length > 0) a.append ("; vector offset:").append (this.b$["org.jmol.symmetry.HallInfo"].vectorCode);
if (this.rotation != null) a.append ("\noperator: ").append (this.getXYZ (this.allPositive)).append ("\nSeitz matrix:\n").append (org.jmol.symmetry.SymmetryOperation.dumpSeitz (this.seitzMatrix12ths));
return a.toString ();
});
Clazz.defineMethod (c$, "getXYZ", 
function (a) {
return org.jmol.symmetry.SymmetryOperation.getXYZFromMatrix (this.seitzMatrix12ths, true, a, true);
}, "~B");
Clazz.defineMethod (c$, "getRotationInfo", 
($fz = function (a, b, c) {
this.inputCode = a;
a += "   ";
if ((a.charAt (0)).charCodeAt (0) == ('-').charCodeAt (0)) {
this.isImproper = true;
a = a.substring (1);
}this.primitiveCode = "";
this.order = (a.charAt (0)).charCodeAt (0) - ('0').charCodeAt (0);
this.diagonalReferenceAxis = '\0';
this.axisType = '\0';
var d = 2;
var e;
switch (e = a.charAt (1)) {
case 'x':
case 'y':
case 'z':
switch (a.charAt (2)) {
case '\'':
case '"':
this.diagonalReferenceAxis = e;
e = a.charAt (2);
d++;
}
case '*':
this.axisType = e;
break;
case '\'':
case '"':
this.axisType = e;
switch (a.charAt (2)) {
case 'x':
case 'y':
case 'z':
this.diagonalReferenceAxis = a.charAt (2);
d++;
break;
default:
this.diagonalReferenceAxis = c;
}
break;
default:
this.axisType = (this.order == 1 ? '_' : this.b$["org.jmol.symmetry.HallInfo"].nRotations == 0 ? 'z' : this.b$["org.jmol.symmetry.HallInfo"].nRotations == 2 ? '*' : b == 2 || b == 4 ? 'x' : '\'');
a = a.substring (0, 1) + this.axisType + a.substring (1);
}
this.primitiveCode += ((this.axisType).charCodeAt (0) == ('_').charCodeAt (0) ? "1" : a.substring (0, 2));
if ((this.diagonalReferenceAxis).charCodeAt (0) != ('\0').charCodeAt (0)) {
a = a.substring (0, 1) + this.diagonalReferenceAxis + this.axisType + a.substring (d);
this.primitiveCode += (this.diagonalReferenceAxis).charCodeAt (0);
d = 3;
}this.lookupCode = a.substring (0, d);
this.rotation = org.jmol.symmetry.Rotation.lookup (this.lookupCode);
if (this.rotation == null) {
org.jmol.util.Logger.error ("Rotation lookup could not find " + this.inputCode + " ? " + this.lookupCode);
return ;
}this.translation =  new org.jmol.symmetry.Translation ();
this.translationString = "";
var f = a.length;
for (var g = d; g < f; g++) {
var h = a.charAt (g);
var i =  new org.jmol.symmetry.Translation (h, this.order);
if ((i.translationCode).charCodeAt (0) != ('\0').charCodeAt (0)) {
this.translationString += "" + i.translationCode;
this.translation.rotationShift12ths += i.rotationShift12ths;
this.translation.vectorShift12ths.add (i.vectorShift12ths);
}}
this.primitiveCode = (this.isImproper ? "-" : "") + this.primitiveCode + this.translationString;
if (this.isImproper) {
this.seitzMatrix12ths.set (this.rotation.seitzMatrixInv);
} else {
this.seitzMatrix12ths.set (this.rotation.seitzMatrix);
}this.seitzMatrix12ths.m03 = this.translation.vectorShift12ths.x;
this.seitzMatrix12ths.m13 = this.translation.vectorShift12ths.y;
this.seitzMatrix12ths.m23 = this.translation.vectorShift12ths.z;
switch (this.axisType) {
case 'x':
this.seitzMatrix12ths.m03 += this.translation.rotationShift12ths;
break;
case 'y':
this.seitzMatrix12ths.m13 += this.translation.rotationShift12ths;
break;
case 'z':
this.seitzMatrix12ths.m23 += this.translation.rotationShift12ths;
break;
}
if (this.b$["org.jmol.symmetry.HallInfo"].vectorCode.length > 0) {
var h =  new javax.vecmath.Matrix4f ();
var i =  new javax.vecmath.Matrix4f ();
h.setIdentity ();
i.setIdentity ();
h.m03 = this.b$["org.jmol.symmetry.HallInfo"].vector12ths.x;
h.m13 = this.b$["org.jmol.symmetry.HallInfo"].vector12ths.y;
h.m23 = this.b$["org.jmol.symmetry.HallInfo"].vector12ths.z;
i.m03 = -this.b$["org.jmol.symmetry.HallInfo"].vector12ths.x;
i.m13 = -this.b$["org.jmol.symmetry.HallInfo"].vector12ths.y;
i.m23 = -this.b$["org.jmol.symmetry.HallInfo"].vector12ths.z;
this.seitzMatrix12ths.mul (h, this.seitzMatrix12ths);
this.seitzMatrix12ths.mul (i);
}if (org.jmol.util.Logger.debugging) {
org.jmol.util.Logger.debug ("code = " + a + "; primitive code =" + this.primitiveCode + "\n Seitz Matrix(12ths):" + this.seitzMatrix12ths);
}}, $fz.isPrivate = true, $fz), "~S,~N,~N");
c$ = Clazz.p0p ();
};
c$ = Clazz.decorateAsClass (function () {
this.translationCode = '\0';
this.rotationOrder = 0;
this.rotationShift12ths = 0;
this.vectorShift12ths = null;
Clazz.instantialize (this, arguments);
}, org.jmol.symmetry, "Translation");
Clazz.prepareFields (c$, function () {
this.vectorShift12ths =  new javax.vecmath.Point3i ();
});
Clazz.makeConstructor (c$, 
function () {
});
Clazz.makeConstructor (c$, 
function (translationCode, order) {
for (var i = 0; i < org.jmol.symmetry.Translation.hallTranslationTerms.length; i++) {
var h = org.jmol.symmetry.Translation.hallTranslationTerms[i];
if ((h.translationCode).charCodeAt (0) == (translationCode).charCodeAt (0)) {
if (h.rotationOrder == 0 || h.rotationOrder == order) {
this.translationCode = translationCode;
this.rotationShift12ths = h.rotationShift12ths;
this.vectorShift12ths = h.vectorShift12ths;
return ;
}}}
}, "~N,~N");
Clazz.makeConstructor (c$, 
($fz = function (translationCode, vectorShift12ths) {
this.translationCode = translationCode;
this.rotationOrder = 0;
this.rotationShift12ths = 0;
this.vectorShift12ths = vectorShift12ths;
}, $fz.isPrivate = true, $fz), "~N,javax.vecmath.Point3i");
Clazz.makeConstructor (c$, 
($fz = function (translationCode, order, rotationShift12ths) {
this.translationCode = translationCode;
this.rotationOrder = order;
this.rotationShift12ths = rotationShift12ths;
this.vectorShift12ths =  new javax.vecmath.Point3i ();
}, $fz.isPrivate = true, $fz), "~N,~N,~N");
c$.getHallLatticeEquivalent = Clazz.defineMethod (c$, "getHallLatticeEquivalent", 
function (latticeParameter) {
var latticeCode = org.jmol.symmetry.Translation.getLatticeCode (latticeParameter);
var isCentrosymmetric = (latticeParameter > 0);
return (isCentrosymmetric ? "-" : "") + latticeCode + " 1";
}, "~N");
c$.getLatticeIndex = Clazz.defineMethod (c$, "getLatticeIndex", 
function (latt) {
for (var i = 1, ipt = 3; i <= org.jmol.symmetry.Translation.nLatticeTypes; i++, ipt += 3) if ((org.jmol.symmetry.Translation.latticeTranslationData[ipt].charAt (0)).charCodeAt (0) == (latt).charCodeAt (0)) return i;

return 0;
}, "~N");
c$.getLatticeCode = Clazz.defineMethod (c$, "getLatticeCode", 
function (latt) {
if (latt < 0) latt = -latt;
return (latt == 0 ? '\0' : latt > org.jmol.symmetry.Translation.nLatticeTypes ? org.jmol.symmetry.Translation.getLatticeCode (org.jmol.symmetry.Translation.getLatticeIndex (String.fromCharCode (latt))) : org.jmol.symmetry.Translation.latticeTranslationData[latt * 3].charAt (0));
}, "~N");
c$.getLatticeDesignation = Clazz.defineMethod (c$, "getLatticeDesignation", 
function (latt) {
var isCentrosymmetric = (latt > 0);
var str = (isCentrosymmetric ? "-" : "");
if (latt < 0) latt = -latt;
if (latt == 0 || latt > org.jmol.symmetry.Translation.nLatticeTypes) return "";
return str + org.jmol.symmetry.Translation.getLatticeCode (latt) + ": " + (isCentrosymmetric ? "centrosymmetric " : "") + org.jmol.symmetry.Translation.latticeTranslationData[latt * 3 + 1];
}, "~N");
c$.getLatticeDesignation = Clazz.defineMethod (c$, "getLatticeDesignation", 
function (latticeCode, isCentrosymmetric) {
var latt = org.jmol.symmetry.Translation.getLatticeIndex (latticeCode);
if (!isCentrosymmetric) latt = -latt;
return org.jmol.symmetry.Translation.getLatticeDesignation (latt);
}, "~N,~B");
c$.getLatticeExtension = Clazz.defineMethod (c$, "getLatticeExtension", 
function (latt, isCentrosymmetric) {
for (var i = 1, ipt = 3; i <= org.jmol.symmetry.Translation.nLatticeTypes; i++, ipt += 3) if ((org.jmol.symmetry.Translation.latticeTranslationData[ipt].charAt (0)).charCodeAt (0) == (latt).charCodeAt (0)) return org.jmol.symmetry.Translation.latticeTranslationData[ipt + 2] + (isCentrosymmetric ? " -1" : "");

return "";
}, "~N,~B");
Clazz.defineStatics (c$,
"latticeTranslationData", ["\0", "unknown", "", "P", "primitive", "", "I", "body-centered", " 1n", "R", "rhombohedral", " 1r 1r", "F", "face-centered", " 1ab 1bc 1ac", "A", "A-centered", " 1bc", "B", "B-centered", " 1ac", "C", "C-centered", " 1ab", "S", "rhombohedral(S)", " 1s 1s", "T", "rhombohedral(T)", " 1t 1t"]);
c$.nLatticeTypes = c$.prototype.nLatticeTypes = Math.floor (org.jmol.symmetry.Translation.latticeTranslationData.length / 3) - 1;
c$.hallTranslationTerms = c$.prototype.hallTranslationTerms = [ new org.jmol.symmetry.Translation ('a',  new javax.vecmath.Point3i (6, 0, 0)),  new org.jmol.symmetry.Translation ('b',  new javax.vecmath.Point3i (0, 6, 0)),  new org.jmol.symmetry.Translation ('c',  new javax.vecmath.Point3i (0, 0, 6)),  new org.jmol.symmetry.Translation ('n',  new javax.vecmath.Point3i (6, 6, 6)),  new org.jmol.symmetry.Translation ('u',  new javax.vecmath.Point3i (3, 0, 0)),  new org.jmol.symmetry.Translation ('v',  new javax.vecmath.Point3i (0, 3, 0)),  new org.jmol.symmetry.Translation ('w',  new javax.vecmath.Point3i (0, 0, 3)),  new org.jmol.symmetry.Translation ('d',  new javax.vecmath.Point3i (3, 3, 3)),  new org.jmol.symmetry.Translation ('1', 2, 6),  new org.jmol.symmetry.Translation ('1', 3, 4),  new org.jmol.symmetry.Translation ('2', 3, 8),  new org.jmol.symmetry.Translation ('1', 4, 3),  new org.jmol.symmetry.Translation ('3', 4, 9),  new org.jmol.symmetry.Translation ('1', 6, 2),  new org.jmol.symmetry.Translation ('2', 6, 4),  new org.jmol.symmetry.Translation ('4', 6, 8),  new org.jmol.symmetry.Translation ('5', 6, 10),  new org.jmol.symmetry.Translation ('r',  new javax.vecmath.Point3i (4, 8, 8)),  new org.jmol.symmetry.Translation ('s',  new javax.vecmath.Point3i (8, 8, 4)),  new org.jmol.symmetry.Translation ('t',  new javax.vecmath.Point3i (8, 4, 8))];
c$ = Clazz.decorateAsClass (function () {
this.rotCode = null;
this.seitzMatrix = null;
this.seitzMatrixInv = null;
Clazz.instantialize (this, arguments);
}, org.jmol.symmetry, "Rotation");
Clazz.prepareFields (c$, function () {
this.seitzMatrix =  new javax.vecmath.Matrix4f ();
this.seitzMatrixInv =  new javax.vecmath.Matrix4f ();
});
Clazz.makeConstructor (c$, 
function () {
});
Clazz.makeConstructor (c$, 
($fz = function (code, matrixData) {
this.rotCode = code;
var data =  Clazz.newArray (16, 0);
var dataInv =  Clazz.newArray (16, 0);
data[15] = dataInv[15] = 1;
for (var i = 0, ipt = 0; ipt < 11; i++) {
var value = 0;
switch (matrixData.charAt (i)) {
case ' ':
ipt++;
continue ;case '+':
case '1':
value = 1;
break;
case '-':
value = -1;
break;
}
data[ipt] = value;
dataInv[ipt] = -value;
ipt++;
}
this.seitzMatrix.set (data);
this.seitzMatrixInv.set (dataInv);
}, $fz.isPrivate = true, $fz), "~S,~S");
c$.lookup = Clazz.defineMethod (c$, "lookup", 
function (code) {
for (var i = org.jmol.symmetry.Rotation.hallRotationTerms.length; --i >= 0; ) if (org.jmol.symmetry.Rotation.hallRotationTerms[i].rotCode.equals (code)) return org.jmol.symmetry.Rotation.hallRotationTerms[i];

return null;
}, "~S");
c$.hallRotationTerms = c$.prototype.hallRotationTerms = [ new org.jmol.symmetry.Rotation ("1_", "+00 0+0 00+"),  new org.jmol.symmetry.Rotation ("2x", "+00 0-0 00-"),  new org.jmol.symmetry.Rotation ("2y", "-00 0+0 00-"),  new org.jmol.symmetry.Rotation ("2z", "-00 0-0 00+"),  new org.jmol.symmetry.Rotation ("2\'", "0-0 -00 00-"),  new org.jmol.symmetry.Rotation ("2\"", "0+0 +00 00-"),  new org.jmol.symmetry.Rotation ("2x\'", "-00 00- 0-0"),  new org.jmol.symmetry.Rotation ("2x\"", "-00 00+ 0+0"),  new org.jmol.symmetry.Rotation ("2y\'", "00- 0-0 -00"),  new org.jmol.symmetry.Rotation ("2y\"", "00+ 0-0 +00"),  new org.jmol.symmetry.Rotation ("2z\'", "0-0 -00 00-"),  new org.jmol.symmetry.Rotation ("2z\"", "0+0 +00 00-"),  new org.jmol.symmetry.Rotation ("3x", "+00 00- 0+-"),  new org.jmol.symmetry.Rotation ("3y", "-0+ 0+0 -00"),  new org.jmol.symmetry.Rotation ("3z", "0-0 +-0 00+"),  new org.jmol.symmetry.Rotation ("3*", "00+ +00 0+0"),  new org.jmol.symmetry.Rotation ("4x", "+00 00- 0+0"),  new org.jmol.symmetry.Rotation ("4y", "00+ 0+0 -00"),  new org.jmol.symmetry.Rotation ("4z", "0-0 +00 00+"),  new org.jmol.symmetry.Rotation ("6x", "+00 0+- 0+0"),  new org.jmol.symmetry.Rotation ("6y", "00+ 0+0 -0+"),  new org.jmol.symmetry.Rotation ("6z", "+-0 +00 00+")];
});
