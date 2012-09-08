﻿Clazz.declarePackage ("org.jmol.constant");
Clazz.load (["java.lang.Enum"], "org.jmol.constant.EnumQuantumShell", ["java.lang.StringBuffer"], function () {
c$ = Clazz.decorateAsClass (function () {
this.tag = null;
this.tag2 = null;
this.id = 0;
this.idSpherical = 0;
Clazz.instantialize (this, arguments);
}, org.jmol.constant, "EnumQuantumShell", Enum);
c$.getNewDfCoefMap = Clazz.defineMethod (c$, "getNewDfCoefMap", 
function () {
return [ Clazz.newArray (1, 0),  Clazz.newArray (3, 0),  Clazz.newArray (4, 0),  Clazz.newArray (5, 0),  Clazz.newArray (6, 0),  Clazz.newArray (7, 0),  Clazz.newArray (10, 0)];
});
c$.getQuantumShellTagID = Clazz.defineMethod (c$, "getQuantumShellTagID", 
function (tag) {
if (tag.equals ("L")) return org.jmol.constant.EnumQuantumShell.SP.id;
var item = org.jmol.constant.EnumQuantumShell.getQuantumShell (tag);
return (item == null ? -1 : item.id);
}, "~S");
c$.getQuantumShell = Clazz.defineMethod (c$, "getQuantumShell", 
($fz = function (tag) {
for (var item, $item = 0, $$item = org.jmol.constant.EnumQuantumShell.values (); $item < $$item.length && ((item = $$item[$item]) || true); $item++) if (item.tag.equals (tag) || item.tag2.equals (tag)) return item;

return null;
}, $fz.isPrivate = true, $fz), "~S");
c$.getQuantumShellTagIDSpherical = Clazz.defineMethod (c$, "getQuantumShellTagIDSpherical", 
function (tag) {
if (tag.equals ("L")) return org.jmol.constant.EnumQuantumShell.SP.idSpherical;
var item = org.jmol.constant.EnumQuantumShell.getQuantumShell (tag);
return (item == null ? -1 : item.idSpherical);
}, "~S");
c$.getItem = Clazz.defineMethod (c$, "getItem", 
function (id) {
switch (id) {
case 0:
return org.jmol.constant.EnumQuantumShell.S;
case 1:
return org.jmol.constant.EnumQuantumShell.P;
case 2:
return org.jmol.constant.EnumQuantumShell.SP;
case 3:
return org.jmol.constant.EnumQuantumShell.D_SPHERICAL;
case 4:
return org.jmol.constant.EnumQuantumShell.D_CARTESIAN;
case 5:
return org.jmol.constant.EnumQuantumShell.F_SPHERICAL;
case 6:
return org.jmol.constant.EnumQuantumShell.F_CARTESIAN;
case 7:
return org.jmol.constant.EnumQuantumShell.G_SPHERICAL;
case 8:
return org.jmol.constant.EnumQuantumShell.G_CARTESIAN;
case 9:
return org.jmol.constant.EnumQuantumShell.H_SPHERICAL;
case 10:
return org.jmol.constant.EnumQuantumShell.H_CARTESIAN;
}
return null;
}, "~N");
c$.getQuantumShellTag = Clazz.defineMethod (c$, "getQuantumShellTag", 
function (id) {
for (var item, $item = 0, $$item = org.jmol.constant.EnumQuantumShell.values (); $item < $$item.length && ((item = $$item[$item]) || true); $item++) if (item.id == id) return item.tag;

return "" + id;
}, "~N");
c$.getMOString = Clazz.defineMethod (c$, "getMOString", 
function (lc) {
var sb =  new StringBuffer ();
if (lc.length == 2) return "" + Math.round ((lc[0] < 0 ? -lc[1] : lc[1]));
sb.append ('[');
for (var i = 0; i < lc.length; i += 2) {
if (i > 0) sb.append (", ");
sb.append (lc[i]).append (" ").append (Math.round (lc[i + 1]));
}
sb.append (']');
return sb.toString ();
}, "~A");
c$.SUPPORTED_BASIS_FUNCTIONS = "SPLDF";
Clazz.defineEnumConstant (c$, "S", 0, ["S", "S", 0, 0]);
Clazz.defineEnumConstant (c$, "P", 1, ["P", "X", 1, 1]);
Clazz.defineEnumConstant (c$, "SP", 2, ["SP", "SP", 2, 2]);
Clazz.defineEnumConstant (c$, "D_SPHERICAL", 3, ["5D", "5D", 3, 3]);
Clazz.defineEnumConstant (c$, "D_CARTESIAN", 4, ["D", "XX", 4, 3]);
Clazz.defineEnumConstant (c$, "F_SPHERICAL", 5, ["7F", "7F", 5, 5]);
Clazz.defineEnumConstant (c$, "F_CARTESIAN", 6, ["F", "XXX", 6, 5]);
Clazz.defineEnumConstant (c$, "G_SPHERICAL", 7, ["9G", "9G", 7, 7]);
Clazz.defineEnumConstant (c$, "G_CARTESIAN", 8, ["G", "XXXX", 8, 7]);
Clazz.defineEnumConstant (c$, "H_SPHERICAL", 9, ["10H", "10H", 9, 9]);
Clazz.defineEnumConstant (c$, "H_CARTESIAN", 10, ["H", "XXXXX", 10, 9]);
});