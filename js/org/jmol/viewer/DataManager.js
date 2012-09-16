﻿Clazz.declarePackage ("org.jmol.viewer");
Clazz.load (["java.util.Hashtable", "org.jmol.constant.EnumVdw"], "org.jmol.viewer.DataManager", ["java.lang.StringBuffer", "java.util.BitSet", "org.jmol.script.Token", "org.jmol.util.ArrayUtil", "$.BitSetUtil", "$.Elements", "$.Escape", "$.Logger", "$.Parser"], function () {
c$ = Clazz.decorateAsClass (function () {
this.dataValues = null;
this.viewer = null;
this.userVdws = null;
this.userVdwMars = null;
this.defaultVdw = null;
this.bsUserVdws = null;
Clazz.instantialize (this, arguments);
}, org.jmol.viewer, "DataManager");
Clazz.prepareFields (c$, function () {
this.dataValues =  new java.util.Hashtable ();
this.defaultVdw = org.jmol.constant.EnumVdw.JMOL;
});
Clazz.makeConstructor (c$, 
function (viewer) {
this.viewer = viewer;
}, "org.jmol.viewer.Viewer");
Clazz.defineMethod (c$, "clear", 
function () {
this.dataValues.clear ();
});
Clazz.defineMethod (c$, "setData", 
function (type, data, arrayCount, actualAtomCount, matchField, matchFieldColumnCount, field, fieldColumnCount) {
if (type == null) {
this.clear ();
return ;
}type = type.toLowerCase ();
if (type.equals ("element_vdw")) {
var stringData = (data[1]).trim ();
if (stringData.length == 0) {
this.userVdwMars = null;
this.userVdws = null;
this.bsUserVdws = null;
return ;
}if (this.bsUserVdws == null) this.setUserVdw (this.defaultVdw);
org.jmol.util.Parser.parseFloatArrayFromMatchAndField (stringData, this.bsUserVdws, 1, 0, data[2], 2, 0, this.userVdws, 1);
for (var i = this.userVdws.length; --i >= 0; ) this.userVdwMars[i] = Math.round ((this.userVdws[i] * 1000));

return ;
}if (data[2] != null && arrayCount > 0) {
var createNew = (matchField != 0 || field != -2147483648 && field != 2147483647);
var oldData = this.dataValues.get (type);
var bs;
var f = (oldData == null || createNew ?  Clazz.newArray (actualAtomCount, 0) : org.jmol.util.ArrayUtil.ensureLength ((oldData[1]), actualAtomCount));
var stringData = (Clazz.instanceOf (data[1], String) ? data[1] : null);
var floatData = (Clazz.instanceOf (data[1], Array) ? data[1] : null);
var strData = null;
if (field == -2147483648 && (strData = org.jmol.util.Parser.getTokens (stringData)).length > 1) field = 0;
if (field == -2147483648) {
bs = data[2];
org.jmol.util.Parser.setSelectedFloats (org.jmol.util.Parser.parseFloatStr (stringData), bs, f);
} else if (field == 0 || field == 2147483647) {
bs = data[2];
if (floatData != null) {
if (floatData.length == bs.cardinality ()) for (var i = bs.nextSetBit (0), pt = 0; i >= 0; i = bs.nextSetBit (i + 1), pt++) f[i] = floatData[pt];

 else for (var i = bs.nextSetBit (0); i >= 0; i = bs.nextSetBit (i + 1)) f[i] = floatData[i];

} else {
org.jmol.util.Parser.parseFloatArrayBsData (strData == null ? org.jmol.util.Parser.getTokens (stringData) : strData, bs, f);
}} else if (matchField <= 0) {
bs = data[2];
org.jmol.util.Parser.parseFloatArrayFromMatchAndField (stringData, bs, 0, 0, null, field, fieldColumnCount, f, 1);
} else {
var iData = data[2];
org.jmol.util.Parser.parseFloatArrayFromMatchAndField (stringData, null, matchField, matchFieldColumnCount, iData, field, fieldColumnCount, f, 1);
bs =  new java.util.BitSet ();
for (var i = iData.length; --i >= 0; ) if (iData[i] >= 0) bs.set (iData[i]);

}if (oldData != null && Clazz.instanceOf (oldData[2], java.util.BitSet) && !createNew) bs.or ((oldData[2]));
data[2] = bs;
data[1] = f;
if (type.indexOf ("property_atom.") == 0) {
var tok = org.jmol.script.Token.getSettableTokFromString (type = type.substring (14));
if (tok == 0) {
org.jmol.util.Logger.error ("Unknown atom property: " + type);
return ;
}var nValues = bs.cardinality ();
var fValues =  Clazz.newArray (nValues, 0);
for (var n = 0, i = bs.nextSetBit (0); n < nValues; i = bs.nextSetBit (i + 1)) fValues[n++] = f[i];

this.viewer.setAtomProperty (bs, tok, 0, 0, null, fValues, null);
return ;
}}this.dataValues.put (type, data);
}, "~S,~A,~N,~N,~N,~N,~N,~N");
Clazz.defineMethod (c$, "getData", 
function (type) {
if (this.dataValues == null || type == null) return null;
if (type.equalsIgnoreCase ("types")) {
var info =  new Array (2);
info[0] = "types";
info[1] = "";
var n = 0;
var e = this.dataValues.keySet ().iterator ();
while (e.hasNext ()) info[1] += (n++ > 0 ? "\n" : "") + e.next ();

return info;
}return this.dataValues.get (type);
}, "~S");
Clazz.defineMethod (c$, "getDataFloat", 
function (label) {
if (this.dataValues == null) return null;
var data = this.getData (label);
if (data == null || !(Clazz.instanceOf (data[1], Array))) return null;
return data[1];
}, "~S");
Clazz.defineMethod (c$, "getDataFloat", 
function (label, atomIndex) {
if (this.dataValues != null) {
var data = this.getData (label);
if (data != null && Clazz.instanceOf (data[1], Array)) {
var f = data[1];
if (atomIndex < f.length) return f[atomIndex];
}}return NaN;
}, "~S,~N");
Clazz.defineMethod (c$, "getDataFloat2D", 
function (label) {
if (this.dataValues == null) return null;
var data = this.getData (label);
if (data == null || !(Clazz.instanceOf (data[1], Array))) return null;
return data[1];
}, "~S");
Clazz.defineMethod (c$, "getDataFloat3D", 
function (label) {
if (this.dataValues == null) return null;
var data = this.getData (label);
if (data == null || !(Clazz.instanceOf (data[1], Array))) return null;
return data[1];
}, "~S");
Clazz.defineMethod (c$, "deleteModelAtoms", 
function (firstAtomIndex, nAtoms, bsDeleted) {
if (this.dataValues == null) return ;
var e = this.dataValues.keySet ().iterator ();
while (e.hasNext ()) {
var name = e.next ();
if (name.indexOf ("property_") == 0) {
var obj = this.dataValues.get (name);
org.jmol.util.BitSetUtil.deleteBits (obj[2], bsDeleted);
if (Clazz.instanceOf (obj[1], Array)) {
obj[1] = org.jmol.util.ArrayUtil.deleteElements (obj[1], firstAtomIndex, nAtoms);
} else if (Clazz.instanceOf (obj[1], Array)) {
obj[1] = org.jmol.util.ArrayUtil.deleteElements (obj[1], firstAtomIndex, nAtoms);
} else {
}}}
}, "~N,~N,java.util.BitSet");
Clazz.defineMethod (c$, "getDataState", 
function (state, sfunc, atomProps) {
if (this.dataValues == null) return ;
var e = this.dataValues.keySet ().iterator ();
var sb =  new StringBuffer ();
var n = 0;
if (atomProps.length > 0) {
n = 1;
sb.append (atomProps);
}while (e.hasNext ()) {
var name = e.next ();
if (name.indexOf ("property_") == 0) {
n++;
var obj = this.dataValues.get (name);
var data = obj[1];
if (Clazz.instanceOf (data, Array)) {
this.viewer.getAtomicPropertyState (sb, 14, obj[2], name, data);
sb.append ("\n");
} else {
sb.append ("\n").append (org.jmol.util.Escape.encapsulateData (name, data));
}} else if (name.indexOf ("data2d") == 0) {
var data = this.dataValues.get (name)[1];
if (Clazz.instanceOf (data, Array)) {
n++;
sb.append ("\n").append (org.jmol.util.Escape.encapsulateData (name, data));
}}}
if (this.userVdws != null) {
var info = this.getDefaultVdwNameOrData (0, org.jmol.constant.EnumVdw.USER, this.bsUserVdws);
if (info.length > 0) {
n++;
sb.append (info);
}}if (n == 0) return ;
if (sfunc != null) state.append ("function _setDataState() {\n");
state.append (sb);
if (sfunc != null) {
sfunc.append ("  _setDataState;\n");
state.append ("}\n\n");
}}, "StringBuffer,StringBuffer,~S");
Clazz.defineMethod (c$, "setUserVdw", 
($fz = function (mode) {
this.userVdwMars =  Clazz.newArray (org.jmol.util.Elements.elementNumberMax, 0);
this.userVdws =  Clazz.newArray (org.jmol.util.Elements.elementNumberMax, 0);
this.bsUserVdws =  new java.util.BitSet ();
if (mode === org.jmol.constant.EnumVdw.USER) mode = org.jmol.constant.EnumVdw.JMOL;
for (var i = 1; i < org.jmol.util.Elements.elementNumberMax; i++) {
this.userVdwMars[i] = org.jmol.util.Elements.getVanderwaalsMar (i, mode);
this.userVdws[i] = this.userVdwMars[i] / 1000;
}
}, $fz.isPrivate = true, $fz), "org.jmol.constant.EnumVdw");
Clazz.defineMethod (c$, "setDefaultVdw", 
function (type) {
switch (type) {
case org.jmol.constant.EnumVdw.JMOL:
case org.jmol.constant.EnumVdw.BABEL:
case org.jmol.constant.EnumVdw.RASMOL:
case org.jmol.constant.EnumVdw.AUTO:
case org.jmol.constant.EnumVdw.USER:
break;
default:
type = org.jmol.constant.EnumVdw.JMOL;
}
if (type !== this.defaultVdw && type === org.jmol.constant.EnumVdw.USER && this.bsUserVdws == null) this.setUserVdw (this.defaultVdw);
this.defaultVdw = type;
}, "org.jmol.constant.EnumVdw");
Clazz.defineMethod (c$, "getDefaultVdwNameOrData", 
function (mode, type, bs) {
switch (mode) {
case -2147483648:
return this.defaultVdw.getVdwLabel ();
case 2147483647:
if ((bs = this.bsUserVdws) == null) return "";
type = org.jmol.constant.EnumVdw.USER;
break;
}
if (type == null || type === org.jmol.constant.EnumVdw.AUTO) type = this.defaultVdw;
if (type === org.jmol.constant.EnumVdw.USER && this.bsUserVdws == null) this.setUserVdw (this.defaultVdw);
var sb =  new StringBuffer (type.getVdwLabel () + "\n");
var isAll = (bs == null);
var i0 = (isAll ? 1 : bs.nextSetBit (0));
var i1 = (isAll ? org.jmol.util.Elements.elementNumberMax : bs.length ());
for (var i = i0; i < i1 && i >= 0; i = (isAll ? i + 1 : bs.nextSetBit (i + 1))) sb.append (i).append ('\t').append (type === org.jmol.constant.EnumVdw.USER ? this.userVdws[i] : org.jmol.util.Elements.getVanderwaalsMar (i, type) / 1000).append ('\t').append (org.jmol.util.Elements.elementSymbolFromNumber (i)).append ('\n');

return (bs == null ? sb.toString () : "\n  DATA \"element_vdw\"\n" + sb.append ("  end \"element_vdw\";\n\n").toString ());
}, "~N,org.jmol.constant.EnumVdw,java.util.BitSet");
c$.getInlineData = Clazz.defineMethod (c$, "getInlineData", 
function (loadScript, strModel, isAppend, loadFilter) {
var tag = (isAppend ? "append" : "model") + " inline";
loadScript.append ("load /*data*/ data \"").append (tag).append ("\"\n").append (strModel).append ("end \"").append (tag).append (loadFilter == null || loadFilter.length == 0 ? "" : " filter" + org.jmol.util.Escape.escapeStr (loadFilter)).append ("\";");
}, "StringBuffer,~S,~B,~S");
});
