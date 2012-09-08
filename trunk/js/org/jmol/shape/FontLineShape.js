﻿Clazz.declarePackage ("org.jmol.shape");
Clazz.load (["org.jmol.shape.FontShape"], "org.jmol.shape.FontLineShape", ["java.lang.Float", "$.StringBuffer", "org.jmol.util.Escape"], function () {
c$ = Clazz.decorateAsClass (function () {
this.tickInfos = null;
Clazz.instantialize (this, arguments);
}, org.jmol.shape, "FontLineShape", org.jmol.shape.FontShape);
Clazz.prepareFields (c$, function () {
this.tickInfos =  new Array (4);
});
Clazz.defineMethod (c$, "setProperty", 
function (propertyName, value, bs) {
if ("tickInfo" === propertyName) {
var t = value;
if (t.ticks == null) {
if (t.type.equals (" ")) this.tickInfos[0] = this.tickInfos[1] = this.tickInfos[2] = this.tickInfos[3] = null;
 else this.tickInfos["xyz".indexOf (t.type) + 1] = null;
return ;
}this.tickInfos["xyz".indexOf (t.type) + 1] = t;
return ;
}Clazz.superCall (this, org.jmol.shape.FontLineShape, "setProperty", [propertyName, value, bs]);
}, "~S,~O,java.util.BitSet");
Clazz.defineMethod (c$, "getShapeState", 
function () {
var s = Clazz.superCall (this, org.jmol.shape.FontLineShape, "getShapeState", []);
if (this.tickInfos == null) return s;
var sb =  new StringBuffer (s);
if (this.tickInfos[0] != null) this.appendTickInfo (sb, 0);
if (this.tickInfos[1] != null) this.appendTickInfo (sb, 1);
if (this.tickInfos[2] != null) this.appendTickInfo (sb, 2);
if (this.tickInfos[3] != null) this.appendTickInfo (sb, 3);
if (s.indexOf (" off") >= 0) sb.append ("  " + this.myType + " off;\n");
return sb.toString ();
});
Clazz.defineMethod (c$, "appendTickInfo", 
($fz = function (sb, i) {
sb.append ("  ");
sb.append (this.myType);
org.jmol.shape.FontLineShape.addTickInfo (sb, this.tickInfos[i], false);
sb.append (";\n");
}, $fz.isPrivate = true, $fz), "StringBuffer,~N");
c$.addTickInfo = Clazz.defineMethod (c$, "addTickInfo", 
function (sb, tickInfo, addFirst) {
sb.append (" ticks ").append (tickInfo.type).append (" ").append (org.jmol.util.Escape.escape (tickInfo.ticks));
var isUnitCell = (tickInfo.scale != null && Float.isNaN (tickInfo.scale.x));
if (isUnitCell) sb.append (" UNITCELL");
if (tickInfo.tickLabelFormats != null) sb.append (" format ").append (org.jmol.util.Escape.escape (tickInfo.tickLabelFormats, false));
if (!isUnitCell && tickInfo.scale != null) sb.append (" scale ").append (org.jmol.util.Escape.escape (tickInfo.scale));
if (addFirst && !Float.isNaN (tickInfo.first) && tickInfo.first != 0) sb.append (" first ").append (tickInfo.first);
if (tickInfo.reference != null) sb.append (" point ").append (org.jmol.util.Escape.escape (tickInfo.reference));
}, "StringBuffer,org.jmol.modelset.TickInfo,~B");
});
