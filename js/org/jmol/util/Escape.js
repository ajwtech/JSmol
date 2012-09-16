Clazz.declarePackage ("org.jmol.util");
Clazz.load (null, "org.jmol.util.Escape", ["java.lang.Character", "$.Float", "$.StringBuffer", "$.StringBuilder", "java.util.ArrayList", "$.BitSet", "javax.vecmath.Matrix3f", "$.Matrix4f", "$.Point3f", "$.Point4f", "org.jmol.script.ScriptVariable", "org.jmol.util.Parser", "$.TextFormat", "$.XmlUtil"], function () {
c$ = Clazz.declareType (org.jmol.util, "Escape");
c$.escapeColor = Clazz.defineMethod (c$, "escapeColor", 
function (argb) {
return "[x" + org.jmol.util.Escape.getHexColorFromRGB (argb) + "]";
}, "~N");
c$.getHexColorFromRGB = Clazz.defineMethod (c$, "getHexColorFromRGB", 
function (argb) {
if (argb == 0) return null;
var r = "00" + Integer.toHexString ((argb >> 16) & 0xFF);
r = r.substring (r.length - 2);
var g = "00" + Integer.toHexString ((argb >> 8) & 0xFF);
g = g.substring (g.length - 2);
var b = "00" + Integer.toHexString (argb & 0xFF);
b = b.substring (b.length - 2);
return r + g + b;
}, "~N");
c$.escapePt = Clazz.defineMethod (c$, "escapePt", 
function (xyz) {
if (xyz == null) return "null";
return "{" + xyz.x + " " + xyz.y + " " + xyz.z + "}";
}, "javax.vecmath.Tuple3f");
c$.matrixToScript = Clazz.defineMethod (c$, "matrixToScript", 
function (m) {
return org.jmol.util.TextFormat.replaceAllCharacters (m.toString (), "\n\r ", "").$replace ('\t', ' ');
}, "~O");
c$.escape = Clazz.defineMethod (c$, "escape", 
function (x) {
if (Clazz.instanceOf (x, String)) return org.jmol.util.Escape.escapeStr (x);
if (Clazz.instanceOf (x, java.util.List)) return org.jmol.util.Escape.escapeVar (x);
if (Clazz.instanceOf (x, java.util.BitSet)) return org.jmol.util.Escape.escapeBs (x, true);
if (Clazz.instanceOf (x, javax.vecmath.Matrix3f)) return org.jmol.util.TextFormat.simpleReplace ((x).toString (), "\t", ",\t");
if (Clazz.instanceOf (x, javax.vecmath.Matrix4f)) return org.jmol.util.TextFormat.simpleReplace ((x).toString (), "\t", ",\t");
if (Clazz.instanceOf (x, javax.vecmath.Tuple3f)) return org.jmol.util.Escape.escapePt (x);
if (Clazz.instanceOf (x, javax.vecmath.Point4f)) {
var xyzw = x;
return "{" + xyzw.x + " " + xyzw.y + " " + xyzw.z + " " + xyzw.w + "}";
}if (Clazz.instanceOf (x, javax.vecmath.AxisAngle4f)) {
var a = x;
return "{" + a.x + " " + a.y + " " + a.z + " " + (a.angle * 180 / 3.141592653589793) + "}";
}if (Clazz.instanceOf (x, Array)) return org.jmol.util.Escape.escapeStrA (x, true);
if (Clazz.instanceOf (x, Array) || Clazz.instanceOf (x, Array) || Clazz.instanceOf (x, Array) || Clazz.instanceOf (x, Array) || Clazz.instanceOf (x, Array) || Clazz.instanceOf (x, Array)) return org.jmol.util.Escape.toJSON (null, x);
if (Clazz.instanceOf (x, Array)) return org.jmol.util.Escape.escapeArray (x);
if (Clazz.instanceOf (x, java.util.Map)) return org.jmol.util.Escape.escapeMap (x);
return (x == null ? "null" : x.toString ());
}, "~O");
c$.escapeStr = Clazz.defineMethod (c$, "escapeStr", 
function (str) {
if (str == null) return "\"\"";
var haveEscape = false;
var i = 0;
for (; i < "\\\\\tt\rr\nn\"\"".length; i += 2) if (str.indexOf ("\\\\\tt\rr\nn\"\"".charAt (i)) >= 0) {
haveEscape = true;
break;
}
if (haveEscape) while (i < "\\\\\tt\rr\nn\"\"".length) {
var pt = -1;
var ch = "\\\\\tt\rr\nn\"\"".charAt (i++);
var ch2 = "\\\\\tt\rr\nn\"\"".charAt (i++);
var sb =  new StringBuffer ();
var pt0 = 0;
while ((pt = str.indexOf (ch, pt + 1)) >= 0) {
sb.append (str.substring (pt0, pt)).append ('\\').append (ch2);
pt0 = pt + 1;
}
sb.append (str.substring (pt0, str.length));
str = sb.toString ();
}
for (i = str.length; --i >= 0; ) if ((str.charAt (i)).charCodeAt (0) > 0x7F) str = str.substring (0, i) + org.jmol.util.Escape.unicode (str.charAt (i)) + str.substring (i + 1);

return "\"" + str + "\"";
}, "~S");
c$.unicode = Clazz.defineMethod (c$, "unicode", 
($fz = function (c) {
var s = "0000" + Integer.toHexString (c.charCodeAt (0));
return "\\u" + s.substring (s.length - 4);
}, $fz.isPrivate = true, $fz), "~S");
c$.escapeVar = Clazz.defineMethod (c$, "escapeVar", 
function (list) {
if (list == null) return org.jmol.util.Escape.escapeStr ("");
var s =  new StringBuilder ();
s.append ("[");
for (var i = 0; i < list.size (); i++) {
if (i > 0) s.append (", ");
s.append (org.jmol.util.Escape.escapeNice (list.get (i).asString ()));
}
s.append ("]");
return s.toString ();
}, "java.util.ArrayList");
c$.escapeMap = Clazz.defineMethod (c$, "escapeMap", 
function (ht) {
var sb =  new StringBuilder ();
sb.append ("{ ");
var sep = "";
for (var entry, $entry = ht.entrySet ().iterator (); $entry.hasNext () && ((entry = $entry.next ()) || true);) {
var key = entry.getKey ();
sb.append (sep).append (org.jmol.util.Escape.escapeStr (key)).append (':');
var val = entry.getValue ();
if (!(Clazz.instanceOf (val, org.jmol.script.ScriptVariable))) val = org.jmol.script.ScriptVariable.getVariable (val);
sb.append ((val).escape ());
sep = ",";
}
sb.append (" }");
return sb.toString ();
}, "java.util.Map");
c$.escapeFloatA = Clazz.defineMethod (c$, "escapeFloatA", 
function (f, asArray) {
if (asArray) return org.jmol.util.Escape.toJSON (null, f);
var sb =  new StringBuilder ();
for (var i = 0; i < f.length; i++) {
if (i > 0) sb.append ('\n');
sb.append (f[i]);
}
return sb.toString ();
}, "~A,~B");
c$.escapeFloatAA = Clazz.defineMethod (c$, "escapeFloatAA", 
function (f, addSemi) {
var sb =  new StringBuilder ();
var eol = (addSemi ? ";\n" : "\n");
for (var i = 0; i < f.length; i++) if (f[i] != null) {
if (i > 0) sb.append (eol);
for (var j = 0; j < f[i].length; j++) sb.append (f[i][j]).append ('\t');

}
return sb.toString ();
}, "~A,~B");
c$.escapeFloatAAA = Clazz.defineMethod (c$, "escapeFloatAAA", 
function (f, addSemi) {
var sb =  new StringBuilder ();
var eol = (addSemi ? ";\n" : "\n");
if (f[0] == null || f[0][0] == null) return "0 0 0" + eol;
sb.append (f.length).append (" ").append (f[0].length).append (" ").append (f[0][0].length);
for (var i = 0; i < f.length; i++) if (f[i] != null) {
sb.append (eol);
for (var j = 0; j < f[i].length; j++) if (f[i][j] != null) {
sb.append (eol);
for (var k = 0; k < f[i][j].length; k++) sb.append (f[i][j][k]).append ('\t');

}
}
return sb.toString ();
}, "~A,~B");
c$.escapeStrA = Clazz.defineMethod (c$, "escapeStrA", 
function (list, nicely) {
if (list == null) return org.jmol.util.Escape.escapeStr ("");
var s =  new StringBuilder ();
s.append ("[");
for (var i = 0; i < list.length; i++) {
if (i > 0) s.append (", ");
s.append (nicely ? org.jmol.util.Escape.escapeNice (list[i]) : org.jmol.util.Escape.escapeStr (list[i]));
}
s.append ("]");
return s.toString ();
}, "~A,~B");
c$.escapeArray = Clazz.defineMethod (c$, "escapeArray", 
function (x) {
if (x == null) return org.jmol.util.Escape.escapeStr ("");
if (Clazz.instanceOf (x, Float)) return "" + x;
var s =  new StringBuilder ();
s.append ("[");
if (Clazz.instanceOf (x, Array)) {
var dlist = x;
for (var i = 0; i < dlist.length; i++) {
if (i > 0) s.append (", ");
s.append (dlist[i]);
}
} else if (Clazz.instanceOf (x, Array)) {
var flist = x;
for (var i = 0; i < flist.length; i++) {
if (i > 0) s.append (", ");
s.append (flist[i]);
}
} else if (Clazz.instanceOf (x, Array)) {
var ilist = x;
for (var i = 0; i < ilist.length; i++) {
if (i > 0) s.append (", ");
s.append (ilist[i]);
}
} else if (Clazz.instanceOf (x, Array)) {
var plist = x;
s =  new StringBuilder ("[");
for (var i = 0; i < plist.length; i++) {
if (i > 0) s.append (", ");
s.append (org.jmol.util.Escape.escapePt (plist[i]));
}
return s.append ("]").toString ();
}s.append ("]");
return s.toString ();
}, "~O");
c$.escapeNice = Clazz.defineMethod (c$, "escapeNice", 
($fz = function (s) {
if (s == null) return "null";
var f = org.jmol.util.Parser.parseFloatStrict (s);
return (Float.isNaN (f) ? org.jmol.util.Escape.escapeStr (s) : s);
}, $fz.isPrivate = true, $fz), "~S");
c$.unescapePointOrBitsetOrMatrixOrArray = Clazz.defineMethod (c$, "unescapePointOrBitsetOrMatrixOrArray", 
function (s) {
if ((s.charAt (0)).charCodeAt (0) == 123) return org.jmol.util.Escape.unescapePoint (s);
if ((org.jmol.util.Escape.isStringArray (s) || s.startsWith ("[{") && s.indexOf ("[{") == s.lastIndexOf ("[{")) && s.indexOf (',') < 0 && s.indexOf ('.') < 0 && s.indexOf ('-') < 0) return org.jmol.util.Escape.unescapeBitset (s);
if (s.startsWith ("[[")) return org.jmol.util.Escape.unescapeMatrix (s);
return s;
}, "~S");
c$.isStringArray = Clazz.defineMethod (c$, "isStringArray", 
function (s) {
return s.startsWith ("({") && s.lastIndexOf ("({") == 0 && s.indexOf ("})") == s.length - 2;
}, "~S");
c$.unescapePoint = Clazz.defineMethod (c$, "unescapePoint", 
function (strPoint) {
if (strPoint == null || strPoint.length == 0) return strPoint;
var str = strPoint.$replace ('\n', ' ').trim ();
if ((str.charAt (0)).charCodeAt (0) != 123 || (str.charAt (str.length - 1)).charCodeAt (0) != 125) return strPoint;
var points =  Clazz.newArray (5, 0);
var nPoints = 0;
str = str.substring (1, str.length - 1);
var next =  Clazz.newArray (1, 0);
for (; nPoints < 5; nPoints++) {
points[nPoints] = org.jmol.util.Parser.parseFloatNext (str, next);
if (Float.isNaN (points[nPoints])) {
if (next[0] >= str.length || (str.charAt (next[0])).charCodeAt (0) != 44) break;
next[0]++;
nPoints--;
}}
if (nPoints == 3) return  new javax.vecmath.Point3f (points[0], points[1], points[2]);
if (nPoints == 4) return  new javax.vecmath.Point4f (points[0], points[1], points[2], points[3]);
return strPoint;
}, "~S");
c$.unescapeBitset = Clazz.defineMethod (c$, "unescapeBitset", 
function (str) {
var ch;
var len;
if (str == null || (len = (str = str.trim ()).length) < 4 || str.equalsIgnoreCase ("({null})") || ((ch = str.charAt (0))).charCodeAt (0) != 40 && ch.charCodeAt (0) != 91 || (str.charAt (len - 1)).charCodeAt (0) != ((ch.charCodeAt (0) == 40 ? ')' : ']')).charCodeAt (0) || (str.charAt (1)).charCodeAt (0) != 123 || str.indexOf ('}') != len - 2) return null;
len -= 2;
for (var i = len; --i >= 2; ) if (!Character.isDigit (ch = str.charAt (i)) && ch.charCodeAt (0) != 32 && ch.charCodeAt (0) != 9 && ch.charCodeAt (0) != 58) return null;

var lastN = len;
while (Character.isDigit (str.charAt (--lastN))) {
}
if (++lastN == len) lastN = 0;
 else try {
lastN = Integer.parseInt (str.substring (lastN, len));
} catch (e) {
if (Clazz.exceptionOf (e, NumberFormatException)) {
return null;
} else {
throw e;
}
}
var bs =  new java.util.BitSet (lastN);
lastN = -1;
var iPrev = -1;
var iThis = -2;
for (var i = 2; i <= len; i++) {
switch (ch = str.charAt (i)) {
case '\t':
case ' ':
case '}':
if (iThis < 0) break;
if (iThis < lastN) return null;
lastN = iThis;
if (iPrev < 0) iPrev = iThis;
bs.set (iPrev, iThis + 1);
iPrev = -1;
iThis = -2;
break;
case ':':
iPrev = lastN = iThis;
iThis = -2;
break;
default:
if (Character.isDigit (ch)) {
if (iThis < 0) iThis = 0;
iThis = (iThis << 3) + (iThis << 1) + (ch.charCodeAt (0) - 48);
}}
}
return (iPrev >= 0 ? null : bs);
}, "~S");
c$.unescapeMatrix = Clazz.defineMethod (c$, "unescapeMatrix", 
function (strMatrix) {
if (strMatrix == null || strMatrix.length == 0) return strMatrix;
var str = strMatrix.$replace ('\n', ' ').trim ();
if (str.lastIndexOf ("[[") != 0 || str.indexOf ("]]") != str.length - 2) return strMatrix;
var points =  Clazz.newArray (16, 0);
str = str.substring (2, str.length - 2).$replace ('[', ' ').$replace (']', ' ').$replace (',', ' ');
var next =  Clazz.newArray (1, 0);
var nPoints = 0;
for (; nPoints < 16; nPoints++) {
points[nPoints] = org.jmol.util.Parser.parseFloatNext (str, next);
if (Float.isNaN (points[nPoints])) {
break;
}}
if (!Float.isNaN (org.jmol.util.Parser.parseFloatNext (str, next))) return strMatrix;
if (nPoints == 9) return  new javax.vecmath.Matrix3f (points);
if (nPoints == 16) return  new javax.vecmath.Matrix4f (points);
return strMatrix;
}, "~S");
c$.escapeBs = Clazz.defineMethod (c$, "escapeBs", 
function (bs, isAtoms) {
var chOpen = (isAtoms ? '(' : '[');
var chClose = (isAtoms ? ')' : ']');
if (bs == null) return chOpen + "{}" + chClose;
var s =  new StringBuilder (chOpen + "{");
var imax = bs.length ();
var iLast = -1;
var iFirst = -2;
var i = -1;
while (++i <= imax) {
var isSet = bs.get (i);
if (i == imax || iLast >= 0 && !isSet) {
if (iLast >= 0 && iFirst != iLast) s.append ((iFirst == iLast - 1 ? " " : ":") + iLast);
if (i == imax) break;
iLast = -1;
}if (bs.get (i)) {
if (iLast < 0) {
s.append ((iFirst == -2 ? "" : " ") + i);
iFirst = i;
}iLast = i;
}}
s.append ("}").append (chClose);
return s.toString ();
}, "java.util.BitSet,~B");
c$.packageJSON = Clazz.defineMethod (c$, "packageJSON", 
($fz = function (infoType, sb) {
return org.jmol.util.Escape.packageJSON (infoType, sb.toString ());
}, $fz.isPrivate = true, $fz), "~S,StringBuilder");
c$.packageJSON = Clazz.defineMethod (c$, "packageJSON", 
($fz = function (infoType, info) {
if (infoType == null) return info;
return "\"" + infoType + "\": " + info;
}, $fz.isPrivate = true, $fz), "~S,~S");
c$.fixString = Clazz.defineMethod (c$, "fixString", 
($fz = function (s) {
if (s == null || s.indexOf ("{\"") == 0) return s;
s = org.jmol.util.TextFormat.simpleReplace (s, "\"", "''");
s = org.jmol.util.TextFormat.simpleReplace (s, "\n", " | ");
return "\"" + s + "\"";
}, $fz.isPrivate = true, $fz), "~S");
c$.toJSON = Clazz.defineMethod (c$, "toJSON", 
function (infoType, info) {
var sb =  new StringBuilder ();
var sep = "";
if (info == null) return org.jmol.util.Escape.packageJSON (infoType, Clazz.castNullAs ("String"));
if (Clazz.instanceOf (info, Integer) || Clazz.instanceOf (info, Float) || Clazz.instanceOf (info, Double)) return org.jmol.util.Escape.packageJSON (infoType, info.toString ());
if (Clazz.instanceOf (info, String)) return org.jmol.util.Escape.packageJSON (infoType, org.jmol.util.Escape.fixString (info));
if (Clazz.instanceOf (info, Array)) {
sb.append ("[");
var imax = (info).length;
for (var i = 0; i < imax; i++) {
sb.append (sep).append (org.jmol.util.Escape.fixString ((info)[i]));
sep = ",";
}
sb.append ("]");
return org.jmol.util.Escape.packageJSON (infoType, sb);
}if (Clazz.instanceOf (info, Array)) {
sb.append ("[");
var imax = (info).length;
for (var i = 0; i < imax; i++) {
sb.append (sep).append ((info)[i]);
sep = ",";
}
sb.append ("]");
return org.jmol.util.Escape.packageJSON (infoType, sb);
}if (Clazz.instanceOf (info, Array)) {
sb.append ("[");
var imax = (info).length;
for (var i = 0; i < imax; i++) {
sb.append (sep).append ((info)[i]);
sep = ",";
}
sb.append ("]");
return org.jmol.util.Escape.packageJSON (infoType, sb);
}if (Clazz.instanceOf (info, Array)) {
sb.append ("[");
var imax = (info).length;
for (var i = 0; i < imax; i++) {
sb.append (sep).append ((info)[i]);
sep = ",";
}
sb.append ("]");
return org.jmol.util.Escape.packageJSON (infoType, sb);
}if (Clazz.instanceOf (info, Array)) {
sb.append ("[");
var imax = (info).length;
for (var i = 0; i < imax; i++) {
sb.append (sep);
org.jmol.util.Escape.addJsonTuple (sb, (info)[i]);
sep = ",";
}
sb.append ("]");
return org.jmol.util.Escape.packageJSON (infoType, sb);
}if (Clazz.instanceOf (info, Array)) {
sb.append ("[");
var imax = (info).length;
for (var i = 0; i < imax; i++) {
sb.append (sep).append (org.jmol.util.Escape.toJSON (null, (info)[i]));
sep = ",";
}
sb.append ("]");
return org.jmol.util.Escape.packageJSON (infoType, sb);
}if (Clazz.instanceOf (info, Array)) {
sb.append ("[");
var imax = (info).length;
for (var i = 0; i < imax; i++) {
sb.append (sep).append (org.jmol.util.Escape.toJSON (null, (info)[i]));
sep = ",";
}
sb.append ("]");
return org.jmol.util.Escape.packageJSON (infoType, sb);
}if (Clazz.instanceOf (info, Array)) {
sb.append ("[");
var imax = (info).length;
for (var i = 0; i < imax; i++) {
sb.append (sep).append (org.jmol.util.Escape.toJSON (null, (info)[i]));
sep = ",";
}
sb.append ("]");
return org.jmol.util.Escape.packageJSON (infoType, sb);
}if (Clazz.instanceOf (info, Array)) {
sb.append ("[");
var imax = (info).length;
for (var i = 0; i < imax; i++) {
sb.append (sep).append (org.jmol.util.Escape.toJSON (null, (info)[i]));
sep = ",";
}
sb.append ("]");
return org.jmol.util.Escape.packageJSON (infoType, sb);
}if (Clazz.instanceOf (info, java.util.List)) {
sb.append ("[ ");
var imax = (info).size ();
for (var i = 0; i < imax; i++) {
sb.append (sep).append (org.jmol.util.Escape.toJSON (null, (info).get (i)));
sep = ",";
}
sb.append (" ]");
return org.jmol.util.Escape.packageJSON (infoType, sb);
}if (Clazz.instanceOf (info, javax.vecmath.Matrix4f)) {
var x =  Clazz.newArray (4, 0);
var m4 = info;
sb.append ('[');
for (var i = 0; i < 4; i++) {
if (i > 0) sb.append (',');
m4.getRow (i, x);
sb.append (org.jmol.util.Escape.toJSON (null, x));
}
sb.append (']');
return org.jmol.util.Escape.packageJSON (infoType, sb);
}if (Clazz.instanceOf (info, javax.vecmath.Matrix3f)) {
var x =  Clazz.newArray (3, 0);
var m3 = info;
sb.append ('[');
for (var i = 0; i < 3; i++) {
if (i > 0) sb.append (',');
m3.getRow (i, x);
sb.append (org.jmol.util.Escape.toJSON (null, x));
}
sb.append (']');
return org.jmol.util.Escape.packageJSON (infoType, sb);
}if (Clazz.instanceOf (info, javax.vecmath.Tuple3f)) {
org.jmol.util.Escape.addJsonTuple (sb, info);
return org.jmol.util.Escape.packageJSON (infoType, sb);
}if (Clazz.instanceOf (info, javax.vecmath.AxisAngle4f)) {
sb.append ("[").append ((info).x).append (",").append ((info).y).append (",").append ((info).z).append (",").append (((info).angle * 180 / 3.141592653589793)).append ("]");
return org.jmol.util.Escape.packageJSON (infoType, sb);
}if (Clazz.instanceOf (info, javax.vecmath.Point4f)) {
sb.append ("[").append ((info).x).append (",").append ((info).y).append (",").append ((info).z).append (",").append ((info).w).append ("]");
return org.jmol.util.Escape.packageJSON (infoType, sb);
}if (Clazz.instanceOf (info, java.util.Map)) {
sb.append ("{ ");
var e = (info).keySet ().iterator ();
while (e.hasNext ()) {
var key = e.next ();
sb.append (sep).append (org.jmol.util.Escape.packageJSON (key, org.jmol.util.Escape.toJSON (null, (info).get (key))));
sep = ",";
}
sb.append (" }");
return org.jmol.util.Escape.packageJSON (infoType, sb);
}return org.jmol.util.Escape.packageJSON (infoType, org.jmol.util.Escape.fixString (info.toString ()));
}, "~S,~O");
c$.addJsonTuple = Clazz.defineMethod (c$, "addJsonTuple", 
($fz = function (sb, pt) {
sb.append ("[").append (pt.x).append (",").append (pt.y).append (",").append (pt.z).append ("]");
}, $fz.isPrivate = true, $fz), "StringBuilder,javax.vecmath.Tuple3f");
c$.toReadable = Clazz.defineMethod (c$, "toReadable", 
function (info) {
return org.jmol.util.Escape.toReadable (null, info);
}, "~O");
c$.toReadable = Clazz.defineMethod (c$, "toReadable", 
function (name, info) {
var sb =  new StringBuilder ();
var sep = "";
if (info == null) return "null";
if (Clazz.instanceOf (info, String)) return org.jmol.util.Escape.packageReadable (name, null, org.jmol.util.Escape.escapeStr (info));
if (Clazz.instanceOf (info, Array)) {
sb.append ("[");
var imax = (info).length;
for (var i = 0; i < imax; i++) {
sb.append (sep).append (org.jmol.util.Escape.escapeStr ((info)[i]));
sep = ",";
}
sb.append ("]");
return org.jmol.util.Escape.packageReadable (name, "String[" + imax + "]", sb);
}if (Clazz.instanceOf (info, Array)) {
sb.append ("[");
var imax = (info).length;
for (var i = 0; i < imax; i++) {
sb.append (sep).append ((info)[i]);
sep = ",";
}
sb.append ("]");
return org.jmol.util.Escape.packageReadable (name, "int[" + imax + "]", sb);
}if (Clazz.instanceOf (info, Array)) {
sb.append ("[");
var imax = (info).length;
for (var i = 0; i < imax; i++) {
sb.append (sep).append ((info)[i]);
sep = ",";
}
sb.append ("]");
return org.jmol.util.Escape.packageReadable (name, "float[" + imax + "]", sb);
}if (Clazz.instanceOf (info, Array)) {
sb.append ("[");
var imax = (info).length;
for (var i = 0; i < imax; i++) {
sb.append (sep).append (org.jmol.util.Escape.escapePt ((info)[i]));
sep = ",";
}
sb.append ("]");
return org.jmol.util.Escape.packageReadable (name, "point3f[" + imax + "]", sb);
}if (Clazz.instanceOf (info, Array)) {
sb.append ("[");
var imax = (info).length;
for (var i = 0; i < imax; i++) {
sb.append (sep).append (org.jmol.util.Escape.toReadable (null, (info)[i]));
sep = ",\n";
}
sb.append ("]");
return org.jmol.util.Escape.packageReadable (name, "String[" + imax + "][]", sb);
}if (Clazz.instanceOf (info, Array)) {
sb.append ("[");
var imax = (info).length;
for (var i = 0; i < imax; i++) {
sb.append (sep).append (org.jmol.util.Escape.toReadable (null, (info)[i]));
sep = ",";
}
sb.append ("]");
return org.jmol.util.Escape.packageReadable (name, "int[" + imax + "][]", sb);
}if (Clazz.instanceOf (info, Array)) {
sb.append ("[\n");
var imax = (info).length;
for (var i = 0; i < imax; i++) {
sb.append (sep).append (org.jmol.util.Escape.toReadable (null, (info)[i]));
sep = ",\n";
}
sb.append ("]");
return org.jmol.util.Escape.packageReadable (name, "float[][]", sb);
}if (Clazz.instanceOf (info, java.util.List)) {
var imax = (info).size ();
for (var i = 0; i < imax; i++) {
sb.append (org.jmol.util.Escape.toReadable (name + "[" + (i + 1) + "]", (info).get (i)));
}
return org.jmol.util.Escape.packageReadable (name, "List[" + imax + "]", sb);
}if (Clazz.instanceOf (info, javax.vecmath.Matrix3f) || Clazz.instanceOf (info, javax.vecmath.Tuple3f) || Clazz.instanceOf (info, javax.vecmath.Point4f) || Clazz.instanceOf (info, javax.vecmath.AxisAngle4f)) {
sb.append (org.jmol.util.Escape.escape (info));
return org.jmol.util.Escape.packageReadable (name, null, sb);
}if (Clazz.instanceOf (info, java.util.Map)) {
var e = (info).keySet ().iterator ();
while (e.hasNext ()) {
var key = e.next ();
sb.append (org.jmol.util.Escape.toReadable ((name == null ? "" : name + ".") + key, (info).get (key)));
}
return sb.toString ();
}return org.jmol.util.Escape.packageReadable (name, null, info.toString ());
}, "~S,~O");
c$.packageReadable = Clazz.defineMethod (c$, "packageReadable", 
($fz = function (infoName, infoType, sb) {
return org.jmol.util.Escape.packageReadable (infoName, infoType, sb.toString ());
}, $fz.isPrivate = true, $fz), "~S,~S,StringBuilder");
c$.packageReadable = Clazz.defineMethod (c$, "packageReadable", 
($fz = function (infoName, infoType, info) {
var s = (infoType == null ? "" : infoType + "\t");
if (infoName == null) return s + info;
return "\n" + infoName + "\t" + (infoType == null ? "" : "*" + infoType + "\t") + info;
}, $fz.isPrivate = true, $fz), "~S,~S,~S");
c$.escapeModelFileNumber = Clazz.defineMethod (c$, "escapeModelFileNumber", 
function (iv) {
return "" + (Math.floor (iv / 1000000)) + "." + (iv % 1000000);
}, "~N");
c$.encapsulateData = Clazz.defineMethod (c$, "encapsulateData", 
function (name, data) {
return "  DATA \"" + name + "\"\n" + (Clazz.instanceOf (data, Array) ? org.jmol.util.Escape.escapeFloatAA (data, true) + ";\n" : Clazz.instanceOf (data, Array) ? org.jmol.util.Escape.escapeFloatAAA (data, true) + ";\n" : data) + "    END \"" + name + "\";\n";
}, "~S,~O");
c$.escapeXml = Clazz.defineMethod (c$, "escapeXml", 
function (value) {
if (Clazz.instanceOf (value, String)) return org.jmol.util.XmlUtil.wrapCdata (value.toString ());
var s = "" + value;
if (s.length == 0 || (s.charAt (0)).charCodeAt (0) != 91) return s;
return org.jmol.util.XmlUtil.wrapCdata (org.jmol.util.Escape.toReadable (null, value));
}, "~O");
c$.unescapeUnicode = Clazz.defineMethod (c$, "unescapeUnicode", 
function (s) {
var ichMax = s.length;
var sb =  new StringBuilder (ichMax);
var ich = 0;
while (ich < ichMax) {
var ch = s.charAt (ich++);
if (ch.charCodeAt (0) == 92 && ich < ichMax) {
ch = s.charAt (ich++);
switch (ch) {
case 'u':
if (ich < ichMax) {
var unicode = 0;
for (var k = 4; --k >= 0 && ich < ichMax; ) {
var chT = s.charAt (ich);
var hexit = org.jmol.util.Escape.getHexitValue (chT);
if (hexit < 0) break;
unicode <<= 4;
unicode += hexit;
++ich;
}
ch = String.fromCharCode (unicode);
}}
}sb.append (ch);
}
return sb.toString ();
}, "~S");
c$.getHexitValue = Clazz.defineMethod (c$, "getHexitValue", 
function (ch) {
if (ch >= '0' && ch <= '9') return ch.charCodeAt (0) - 48;
 else if (ch >= 'a' && ch <= 'f') return 10 + ch.charCodeAt (0) - 97;
 else if (ch >= 'A' && ch <= 'F') return 10 + ch.charCodeAt (0) - 65;
 else return -1;
}, "~S");
c$.unescapeStringArray = Clazz.defineMethod (c$, "unescapeStringArray", 
function (data) {
if (data == null || !data.startsWith ("[") || !data.endsWith ("]")) return null;
var v =  new java.util.ArrayList ();
var next =  Clazz.newArray (1, 0);
next[0] = 1;
while (next[0] < data.length) {
var s = org.jmol.util.Parser.getQuotedStringNext (data, next);
if (s == null) return null;
v.add (s);
while (next[0] < data.length && (data.charAt (next[0])).charCodeAt (0) != 34) next[0]++;

}
return v.toArray ( new Array (v.size ()));
}, "~S");
c$.escapeUrl = Clazz.defineMethod (c$, "escapeUrl", 
function (url) {
url = org.jmol.util.TextFormat.simpleReplace (url, "\n", "");
url = org.jmol.util.TextFormat.simpleReplace (url, "%", "%25");
url = org.jmol.util.TextFormat.simpleReplace (url, "[", "%5B");
url = org.jmol.util.TextFormat.simpleReplace (url, "]", "%5D");
url = org.jmol.util.TextFormat.simpleReplace (url, " ", "%20");
return url;
}, "~S");
Clazz.defineStatics (c$,
"escapable", "\\\\\tt\rr\nn\"\"");
});
