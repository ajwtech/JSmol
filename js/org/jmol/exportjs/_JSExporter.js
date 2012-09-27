Clazz.declarePackage ("org.jmol.exportjs");
Clazz.load (["org.jmol.exportjs.__CartesianExporter", "$.Export3D", "$.___Exporter"], "org.jmol.exportjs._JSExporter", null, function () {
c$ = Clazz.declareType (org.jmol.exportjs, "_JSExporter", org.jmol.exportjs.__CartesianExporter);
Clazz.makeConstructor (c$, 
function () {
Clazz.superConstructor (this, org.jmol.exportjs._JSExporter, []);
});
Clazz.overrideMethod (c$, "outputCircle", 
function (pt1, pt2, radius, colix, doFill) {
}, "javax.vecmath.Point3f,javax.vecmath.Point3f,~N,~N,~B");
Clazz.overrideMethod (c$, "outputCone", 
function (ptBase, ptTip, radius, colix) {
}, "javax.vecmath.Point3f,javax.vecmath.Point3f,~N,~N");
Clazz.overrideMethod (c$, "outputCylinder", 
function (ptCenter, pt1, pt2, colix1, endcaps, radius, ptX, ptY, checkRadius) {
return false;
}, "javax.vecmath.Point3f,javax.vecmath.Point3f,javax.vecmath.Point3f,~N,~N,~N,javax.vecmath.Point3f,javax.vecmath.Point3f,~B");
Clazz.overrideMethod (c$, "outputEllipsoid", 
function (center, points, colix) {
}, "javax.vecmath.Point3f,~A,~N");
Clazz.overrideMethod (c$, "outputFace", 
function (is, coordMap, faceVertexMax) {
}, "~A,~A,~N");
Clazz.overrideMethod (c$, "outputSphere", 
function (ptAtom2, f, colix, checkRadius) {
}, "javax.vecmath.Point3f,~N,~N,~B");
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
