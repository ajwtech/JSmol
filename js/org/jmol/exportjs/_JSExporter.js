Clazz.declarePackage ("org.jmol.exportjs");
Clazz.load (["org.jmol.exportjs.__CartesianExporter", "java.util.Hashtable", "org.jmol.exportjs.Export3D", "$.___Exporter"], "org.jmol.exportjs._JSExporter", ["java.lang.Boolean", "$.Float", "org.jmol.exportjs.UseTable", "org.jmol.util.ColorUtil"], function () {
c$ = Clazz.decorateAsClass (function () {
this.useTable = null;
this.htSpheresRendered = null;
this.htObjects = null;
this.ret = null;
Clazz.instantialize (this, arguments);
}, org.jmol.exportjs, "_JSExporter", org.jmol.exportjs.__CartesianExporter);
Clazz.prepareFields (c$, function () {
this.htSpheresRendered =  new java.util.Hashtable ();
this.htObjects =  new java.util.Hashtable ();
this.ret =  new Array (1);
});
Clazz.makeConstructor (c$, 
function () {
Clazz.superConstructor (this, org.jmol.exportjs._JSExporter, []);
this.useTable =  new org.jmol.exportjs.UseTable ();
});
Clazz.overrideMethod (c$, "outputFace", 
function (is, coordMap, faceVertexMax) {
}, "~A,~A,~N");
Clazz.defineMethod (c$, "useSphere", 
($fz = function (id, isNew, pt, o) {
System.out.println (id + " " + isNew + " " + pt + " " + o);
}, $fz.isPrivate = true, $fz), "~S,~B,javax.vecmath.Point3f,~A");
Clazz.defineMethod (c$, "useCylinder", 
($fz = function (id, isNew, pt1, pt2, o) {
System.out.println (id + " " + isNew + " " + pt1 + " " + pt2 + " " + o);
}, $fz.isPrivate = true, $fz), "~S,~B,javax.vecmath.Point3f,javax.vecmath.Point3f,~A");
Clazz.overrideMethod (c$, "outputSphere", 
function (ptCenter, radius, colix, checkRadius) {
var iRad = Math.round ((radius * 100));
var check = org.jmol.exportjs.___Exporter.round (ptCenter) + (checkRadius ? " " + iRad : "");
if (this.htSpheresRendered.get (check) != null) return ;
this.htSpheresRendered.put (check, Boolean.TRUE);
var found = this.useTable.getDef ("S" + colix + "_" + iRad, this.ret);
var o;
if (found) o = this.htObjects.get (this.ret[0]);
 else this.htObjects.put (this.ret[0], o = [this.getColor (colix), Float.$valueOf (radius)]);
this.useSphere (this.ret[0], !found, ptCenter, o);
}, "javax.vecmath.Point3f,~N,~N,~B");
Clazz.overrideMethod (c$, "outputCylinder", 
function (ptCenter, pt1, pt2, colix, endcaps, radius, ptX, ptY, checkRadius) {
if (ptX != null) return false;
var length = pt1.distance (pt2);
var found = this.useTable.getDef ("C" + colix + "_" + Math.round ((length * 100)) + "_" + radius + "_" + endcaps, this.ret);
var o;
if (found) o = this.htObjects.get (this.ret[0]);
 else this.htObjects.put (this.ret[0], o = [this.getColor (colix),  new Float (length),  new Float (radius)]);
this.useCylinder (this.ret[0], !found, pt1, pt2, o);
return true;
}, "javax.vecmath.Point3f,javax.vecmath.Point3f,javax.vecmath.Point3f,~N,~N,~N,javax.vecmath.Point3f,javax.vecmath.Point3f,~B");
Clazz.overrideMethod (c$, "outputCircle", 
function (pt1, pt2, radius, colix, doFill) {
}, "javax.vecmath.Point3f,javax.vecmath.Point3f,~N,~N,~B");
Clazz.overrideMethod (c$, "outputCone", 
function (ptBase, ptTip, radius, colix) {
}, "javax.vecmath.Point3f,javax.vecmath.Point3f,~N,~N");
Clazz.overrideMethod (c$, "outputEllipsoid", 
function (center, points, colix) {
}, "javax.vecmath.Point3f,~A,~N");
Clazz.defineMethod (c$, "getColor", 
($fz = function (colix) {
return org.jmol.util.ColorUtil.colorPointFromInt2 (this.g3d.getColorArgbOrGray (colix));
}, $fz.isPrivate = true, $fz), "~N");
Clazz.defineMethod (c$, "addObject", 
function (id, o) {
{
}}, "~S,~O");
Clazz.overrideMethod (c$, "outputTextPixel", 
function (pt, argb) {
}, "javax.vecmath.Point3f,~N");
Clazz.overrideMethod (c$, "outputTriangle", 
function (pt1, pt2, pt3, colix) {
}, "javax.vecmath.Point3f,javax.vecmath.Point3f,javax.vecmath.Point3f,~N");
Clazz.defineMethod (c$, "output", 
function (pt) {
}, "javax.vecmath.Tuple3f");
Clazz.overrideMethod (c$, "outputHeader", 
function () {
});
});
