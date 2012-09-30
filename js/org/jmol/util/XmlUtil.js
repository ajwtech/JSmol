Clazz.declarePackage ("org.jmol.util");
Clazz.load (null, "org.jmol.util.XmlUtil", ["java.lang.Float", "$.StringBuffer", "java.util.ArrayList", "org.jmol.script.Token", "org.jmol.util.Escape", "$.TextFormat"], function () {
c$ = Clazz.declareType (org.jmol.util, "XmlUtil");
c$.openDocument = Clazz.defineMethod (c$, "openDocument", 
function (data) {
data.append ("<?xml version=\"1.0\"?>\n");
}, "StringBuffer");
c$.openTag = Clazz.defineMethod (c$, "openTag", 
function (sb, name) {
sb.append ("<").append (name).append (">\n");
}, "StringBuffer,~S");
c$.openTagAttr = Clazz.defineMethod (c$, "openTagAttr", 
function (sb, name, attributes) {
org.jmol.util.XmlUtil.appendTagAll (sb, name, attributes, null, false, false);
sb.append ("\n");
}, "StringBuffer,~S,~A");
c$.closeTag = Clazz.defineMethod (c$, "closeTag", 
function (sb, name) {
sb.append ("</").append (name).append (">\n");
}, "StringBuffer,~S");
c$.appendTagAll = Clazz.defineMethod (c$, "appendTagAll", 
function (sb, name, attributes, data, isCdata, doClose) {
var closer = ">";
if (name.endsWith ("/")) {
name = name.substring (0, name.length - 1);
if (data == null) {
closer = "/>\n";
doClose = false;
}}sb.append ("<").append (name);
if (attributes != null) for (var i = 0; i < attributes.length; i++) {
var o = attributes[i];
if (o == null) continue ;if (Clazz.instanceOf (o, Array)) for (var j = 0; j < (o).length; j += 2) org.jmol.util.XmlUtil.appendAttrib (sb, (o)[j], (o)[j + 1]);

 else org.jmol.util.XmlUtil.appendAttrib (sb, o, attributes[++i]);
}
sb.append (closer);
if (data != null) {
if (isCdata) data = org.jmol.util.XmlUtil.wrapCdata (data);
sb.append (data);
}if (doClose) org.jmol.util.XmlUtil.closeTag (sb, name);
}, "StringBuffer,~S,~A,~O,~B,~B");
c$.wrapCdata = Clazz.defineMethod (c$, "wrapCdata", 
function (data) {
var s = "" + data;
return (s.indexOf ("&") < 0 && s.indexOf ("<") < 0 ? (s.startsWith ("\n") ? "" : "\n") + s : "<![CDATA[" + org.jmol.util.TextFormat.simpleReplace (s, "]]>", "]]]]><![CDATA[>") + "]]>");
}, "~O");
c$.unwrapCdata = Clazz.defineMethod (c$, "unwrapCdata", 
function (s) {
return (s.startsWith ("<![CDATA[") && s.endsWith ("]]>") ? s.substring (9, s.length - 3).$replace ("]]]]><![CDATA[>", "]]>") : s);
}, "~S");
c$.appendTagObj = Clazz.defineMethod (c$, "appendTagObj", 
function (sb, name, attributes, data) {
org.jmol.util.XmlUtil.appendTagAll (sb, name, attributes, data, false, true);
}, "StringBuffer,~S,~A,~O");
c$.appendTag = Clazz.defineMethod (c$, "appendTag", 
function (sb, name, data) {
if (Clazz.instanceOf (data, Array)) org.jmol.util.XmlUtil.appendTagAll (sb, name, data, null, false, true);
 else org.jmol.util.XmlUtil.appendTagAll (sb, name, null, data, false, true);
}, "StringBuffer,~S,~O");
c$.appendCdata = Clazz.defineMethod (c$, "appendCdata", 
function (sb, name, attributes, data) {
org.jmol.util.XmlUtil.appendTagAll (sb, name, attributes, data, true, true);
}, "StringBuffer,~S,~A,~S");
c$.appendAttrib = Clazz.defineMethod (c$, "appendAttrib", 
function (sb, name, value) {
if (value == null) return ;
sb.append (" ").append (name).append ("=\"").append (value).append ("\"");
}, "StringBuffer,~O,~O");
c$.toXml = Clazz.defineMethod (c$, "toXml", 
function (sb, name, properties) {
for (var i = 0; i < properties.size (); i++) {
var o = properties.get (i);
org.jmol.util.XmlUtil.appendTagObj (sb, name, o[0], o[1]);
}
}, "StringBuffer,~S,java.util.List");
c$.escape = Clazz.defineMethod (c$, "escape", 
function (name, atts, value, asString, indent) {
var sb;
var type = (value == null ? null : value.getClass ().getName ());
if (name === "token") {
type = null;
value = org.jmol.script.Token.nameOf ((value).intValue ());
} else if (type != null) {
type = type.substring (0, type.lastIndexOf ("[") + 1) + type.substring (type.lastIndexOf (".") + 1);
if (Clazz.instanceOf (value, String)) {
value = org.jmol.util.XmlUtil.wrapCdata (value);
} else if (Clazz.instanceOf (value, javax.util.BitSet)) {
value = org.jmol.util.Escape.escape (value);
} else if (Clazz.instanceOf (value, java.util.List)) {
var v = value;
sb =  new StringBuffer ("\n");
if (atts == null) atts =  new java.util.ArrayList ();
atts.add (["count", Integer.$valueOf (v.size ())]);
for (var i = 0; i < v.size (); i++) sb.append (org.jmol.util.XmlUtil.escape (null, null, v.get (i), true, indent + "  "));

value = sb.toString ();
} else if (Clazz.instanceOf (value, java.util.Map)) {
var ht = value;
sb =  new StringBuffer ("\n");
var e = ht.keySet ().iterator ();
var n = 0;
while (e.hasNext ()) {
n++;
var name2 = e.next ();
sb.append (org.jmol.util.XmlUtil.escape (name2, null, ht.get (name2), true, indent + "  "));
}
if (atts == null) atts =  new java.util.ArrayList ();
atts.add (["count",  new Integer (n)]);
value = sb.toString ();
} else if (type.startsWith ("[")) {
if (Clazz.instanceOf (value, Array)) {
var f = value;
sb =  new StringBuffer ("\n");
if (atts == null) atts =  new java.util.ArrayList ();
atts.add (["count",  new Integer (f.length)]);
for (var i = 0; i < f.length; i++) sb.append (org.jmol.util.XmlUtil.escape (null, null,  new Float (f[i]), true, indent + "  "));

value = sb.toString ();
} else if (Clazz.instanceOf (value, Array)) {
var iv = value;
sb =  new StringBuffer ("\n");
if (atts == null) atts =  new java.util.ArrayList ();
atts.add (["count",  new Integer (iv.length)]);
for (var i = 0; i < iv.length; i++) sb.append (org.jmol.util.XmlUtil.escape (null, null,  new Integer (iv[i]), true, indent + "  "));

value = sb.toString ();
} else if (Clazz.instanceOf (value, Array)) {
var o = value;
sb =  new StringBuffer ("\n");
if (atts == null) atts =  new java.util.ArrayList ();
atts.add (["count",  new Integer (o.length)]);
for (var i = 0; i < o.length; i++) sb.append (org.jmol.util.XmlUtil.escape (null, null, o[i], true, indent + "  "));

value = sb.toString ();
} else {
}}}var attributes =  new java.util.ArrayList ();
attributes.add (["name", name]);
attributes.add (["type", type]);
if (atts != null) for (var i = 0; i < atts.size (); i++) attributes.add (atts.get (i));

if (!asString) return [attributes.toArray (), value];
sb =  new StringBuffer ();
sb.append (indent);
org.jmol.util.XmlUtil.appendTagAll (sb, "val", attributes.toArray (), null, false, false);
sb.append (value);
if (Clazz.instanceOf (value, String) && (value).indexOf ("\n") >= 0) sb.append (indent);
org.jmol.util.XmlUtil.closeTag (sb, "val");
return sb.toString ();
}, "~S,java.util.List,~O,~B,~S");
});
