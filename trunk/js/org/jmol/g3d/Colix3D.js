Clazz.declarePackage ("org.jmol.g3d");
Clazz.load (["org.jmol.util.Int2IntHash"], "org.jmol.g3d.Colix3D", ["java.lang.IndexOutOfBoundsException", "org.jmol.util.ColorUtil", "$.Shader"], function () {
c$ = Clazz.declareType (org.jmol.g3d, "Colix3D");
Clazz.makeConstructor (c$, 
function () {
});
c$.getColix = Clazz.defineMethod (c$, "getColix", 
function (argb) {
if (argb == 0) return 0;
var translucentFlag = 0;
if ((argb & 0xFF000000) != 0xFF000000) {
argb |= 0xFF000000;
translucentFlag = 8192;
}var c = org.jmol.g3d.Colix3D.colixHash.get (argb);
if ((c & 3) == 3) translucentFlag = 0;
return (c > 0 ? (c | translucentFlag) : (org.jmol.g3d.Colix3D.allocateColix (argb) | translucentFlag));
}, "~N");
c$.allocateColix = Clazz.defineMethod (c$, "allocateColix", 
function (argb) {
if ((argb & 0xFF000000) != 0xFF000000) throw  new IndexOutOfBoundsException ();
for (var i = org.jmol.g3d.Colix3D.colixMax; --i >= 4; ) if (argb == org.jmol.g3d.Colix3D.argbs[i]) return i;

if (org.jmol.g3d.Colix3D.colixMax == org.jmol.g3d.Colix3D.argbs.length) {
var oldSize = org.jmol.g3d.Colix3D.colixMax;
var newSize = oldSize * 2;
if (newSize > 2048) newSize = 2048;
var t0 =  Clazz.newArray (newSize, 0);
System.arraycopy (org.jmol.g3d.Colix3D.argbs, 0, t0, 0, oldSize);
($t$ = org.jmol.g3d.Colix3D.argbs = t0, org.jmol.g3d.Colix3D.prototype.argbs = org.jmol.g3d.Colix3D.argbs, $t$);
if (org.jmol.g3d.Colix3D.argbsGreyscale != null) {
t0 =  Clazz.newArray (newSize, 0);
System.arraycopy (org.jmol.g3d.Colix3D.argbsGreyscale, 0, t0, 0, oldSize);
($t$ = org.jmol.g3d.Colix3D.argbsGreyscale = t0, org.jmol.g3d.Colix3D.prototype.argbsGreyscale = org.jmol.g3d.Colix3D.argbsGreyscale, $t$);
}var t2 =  Clazz.newArray (newSize, 0);
System.arraycopy (org.jmol.g3d.Colix3D.ashades, 0, t2, 0, oldSize);
($t$ = org.jmol.g3d.Colix3D.ashades = t2, org.jmol.g3d.Colix3D.prototype.ashades = org.jmol.g3d.Colix3D.ashades, $t$);
if (org.jmol.g3d.Colix3D.ashadesGreyscale != null) {
t2 =  Clazz.newArray (newSize, 0);
System.arraycopy (org.jmol.g3d.Colix3D.ashadesGreyscale, 0, t2, 0, oldSize);
($t$ = org.jmol.g3d.Colix3D.ashadesGreyscale = t2, org.jmol.g3d.Colix3D.prototype.ashadesGreyscale = org.jmol.g3d.Colix3D.ashadesGreyscale, $t$);
}}org.jmol.g3d.Colix3D.argbs[org.jmol.g3d.Colix3D.colixMax] = argb;
if (org.jmol.g3d.Colix3D.argbsGreyscale != null) org.jmol.g3d.Colix3D.argbsGreyscale[org.jmol.g3d.Colix3D.colixMax] = org.jmol.util.ColorUtil.calcGreyscaleRgbFromRgb (argb);
org.jmol.g3d.Colix3D.colixHash.put (argb, org.jmol.g3d.Colix3D.colixMax);
return (org.jmol.g3d.Colix3D.colixMax < 2047 ? ($t$ = org.jmol.g3d.Colix3D.colixMax ++, org.jmol.g3d.Colix3D.prototype.colixMax = org.jmol.g3d.Colix3D.colixMax, $t$) : org.jmol.g3d.Colix3D.colixMax);
}, "~N");
c$.calcArgbsGreyscale = Clazz.defineMethod (c$, "calcArgbsGreyscale", 
($fz = function () {
if (org.jmol.g3d.Colix3D.argbsGreyscale != null) return ;
var a =  Clazz.newArray (org.jmol.g3d.Colix3D.argbs.length, 0);
for (var i = org.jmol.g3d.Colix3D.argbs.length; --i >= 4; ) a[i] = org.jmol.util.ColorUtil.calcGreyscaleRgbFromRgb (org.jmol.g3d.Colix3D.argbs[i]);

($t$ = org.jmol.g3d.Colix3D.argbsGreyscale = a, org.jmol.g3d.Colix3D.prototype.argbsGreyscale = org.jmol.g3d.Colix3D.argbsGreyscale, $t$);
}, $fz.isPrivate = true, $fz));
c$.getArgb = Clazz.defineMethod (c$, "getArgb", 
function (colix) {
return org.jmol.g3d.Colix3D.argbs[colix & -30721];
}, "~N");
c$.getArgbGreyscale = Clazz.defineMethod (c$, "getArgbGreyscale", 
function (colix) {
if (org.jmol.g3d.Colix3D.argbsGreyscale == null) org.jmol.g3d.Colix3D.calcArgbsGreyscale ();
return org.jmol.g3d.Colix3D.argbsGreyscale[colix & -30721];
}, "~N");
c$.getShades = Clazz.defineMethod (c$, "getShades", 
function (argb, asGrey) {
if (asGrey) {
if (org.jmol.g3d.Colix3D.argbsGreyscale == null) org.jmol.g3d.Colix3D.calcArgbsGreyscale ();
org.jmol.g3d.Colix3D.argbsGreyscale[2047] = org.jmol.util.ColorUtil.calcGreyscaleRgbFromRgb (argb);
}return org.jmol.g3d.Colix3D.ashades[2047] = org.jmol.util.Shader.getShades (argb, false);
}, "~N,~B");
c$.getShades = Clazz.defineMethod (c$, "getShades", 
function (colix) {
colix &= -30721;
var shades = org.jmol.g3d.Colix3D.ashades[colix];
if (shades == null) shades = org.jmol.g3d.Colix3D.ashades[colix] = org.jmol.util.Shader.getShades (org.jmol.g3d.Colix3D.argbs[colix], false);
return shades;
}, "~N");
c$.getShadesGreyscale = Clazz.defineMethod (c$, "getShadesGreyscale", 
function (colix) {
colix &= -30721;
if (org.jmol.g3d.Colix3D.ashadesGreyscale == null) ($t$ = org.jmol.g3d.Colix3D.ashadesGreyscale =  Clazz.newArray (org.jmol.g3d.Colix3D.ashades.length, 0), org.jmol.g3d.Colix3D.prototype.ashadesGreyscale = org.jmol.g3d.Colix3D.ashadesGreyscale, $t$);
var shadesGreyscale = org.jmol.g3d.Colix3D.ashadesGreyscale[colix];
if (shadesGreyscale == null) shadesGreyscale = org.jmol.g3d.Colix3D.ashadesGreyscale[colix] = org.jmol.util.Shader.getShades (org.jmol.g3d.Colix3D.argbs[colix], true);
return shadesGreyscale;
}, "~N");
c$.flushShades = Clazz.defineMethod (c$, "flushShades", 
function () {
for (var i = org.jmol.g3d.Colix3D.colixMax; --i >= 0; ) org.jmol.g3d.Colix3D.ashades[i] = null;

($t$ = org.jmol.util.Shader.sphereShadingCalculated = false, org.jmol.util.Shader.prototype.sphereShadingCalculated = org.jmol.util.Shader.sphereShadingCalculated, $t$);
});
Clazz.defineStatics (c$,
"colixMax", 4,
"argbs",  Clazz.newArray (128, 0),
"argbsGreyscale", null,
"ashades",  Clazz.newArray (128, 0),
"ashadesGreyscale", null);
c$.colixHash = c$.prototype.colixHash =  new org.jmol.util.Int2IntHash ();
Clazz.defineStatics (c$,
"RAW_RGB_INT", 3,
"predefinedArgbs", [0xFF000000, 0xFFFFA500, 0xFFFFC0CB, 0xFF0000FF, 0xFFFFFFFF, 0xFF00FFFF, 0xFFFF0000, 0xFF008000, 0xFF808080, 0xFFC0C0C0, 0xFF00FF00, 0xFF800000, 0xFF000080, 0xFF808000, 0xFF800080, 0xFF008080, 0xFFFF00FF, 0xFFFFFF00, 0xFFFF69B4, 0xFFFFD700]);
{
for (var i = 0; i < org.jmol.g3d.Colix3D.predefinedArgbs.length; ++i) org.jmol.g3d.Colix3D.getColix (org.jmol.g3d.Colix3D.predefinedArgbs[i]);

}});
