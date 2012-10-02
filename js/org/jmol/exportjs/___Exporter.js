Clazz.declarePackage ("org.jmol.exportjs");
Clazz.load (["javax.vecmath.AxisAngle4f", "$.Point3f", "$.Vector3f", "org.jmol.util.GData"], "org.jmol.exportjs.___Exporter", ["java.io.BufferedWriter", "$.File", "$.FileOutputStream", "$.OutputStreamWriter", "java.lang.Float", "$.Short", "java.text.SimpleDateFormat", "java.util.ArrayList", "$.Date", "$.Hashtable", "javax.util.StringXBuilder", "javax.vecmath.Matrix3f", "org.jmol.util.Colix", "$.MeshSurface", "$.Quaternion"], function () {
c$ = Clazz.decorateAsClass (function () {
this.viewer = null;
this.privateKey = 0;
this.jmolRenderer = null;
this.$output = null;
this.bw = null;
this.os = null;
this.fileName = null;
this.commandLineOptions = null;
this.isToFile = false;
this.g3d = null;
this.backgroundColix = 0;
this.screenWidth = 0;
this.screenHeight = 0;
this.slabZ = 0;
this.depthZ = 0;
this.lightSource = null;
this.fixedRotationCenter = null;
this.referenceCenter = null;
this.cameraPosition = null;
this.cameraDistance = 0;
this.aperatureAngle = 0;
this.scalePixelsPerAngstrom = 0;
this.exportType = 0;
this.tempP1 = null;
this.tempP2 = null;
this.tempP3 = null;
this.center = null;
this.tempV1 = null;
this.tempV2 = null;
this.tempV3 = null;
this.tempA = null;
this.nBytes = 0;
this.commentChar = null;
this.tempC = null;
this.nText = 0;
this.nImage = 0;
this.lineWidthMad = 0;
Clazz.instantialize (this, arguments);
}, org.jmol.exportjs, "___Exporter");
Clazz.prepareFields (c$, function () {
this.lightSource = org.jmol.util.GData.getLightSource ();
this.tempP1 =  new javax.vecmath.Point3f ();
this.tempP2 =  new javax.vecmath.Point3f ();
this.tempP3 =  new javax.vecmath.Point3f ();
this.center =  new javax.vecmath.Point3f ();
this.tempV1 =  new javax.vecmath.Vector3f ();
this.tempV2 =  new javax.vecmath.Vector3f ();
this.tempV3 =  new javax.vecmath.Vector3f ();
this.tempA =  new javax.vecmath.AxisAngle4f ();
this.tempC =  new javax.vecmath.Point3f ();
});
Clazz.makeConstructor (c$, 
function () {
});
Clazz.defineMethod (c$, "setRenderer", 
function (jmolRenderer) {
this.jmolRenderer = jmolRenderer;
}, "org.jmol.api.JmolRendererInterface");
Clazz.defineMethod (c$, "initializeOutput", 
function (viewer, privateKey, g3d, output) {
this.viewer = viewer;
this.g3d = g3d;
this.privateKey = privateKey;
this.backgroundColix = viewer.getObjectColix (0);
this.center.setT (viewer.getRotationCenter ());
if ((this.screenWidth <= 0) || (this.screenHeight <= 0)) {
this.screenWidth = viewer.getScreenWidth ();
this.screenHeight = viewer.getScreenHeight ();
}this.slabZ = g3d.getSlab ();
this.depthZ = g3d.getDepth ();
var cameraFactors = viewer.getCameraFactors ();
this.referenceCenter = cameraFactors[0];
this.cameraPosition = cameraFactors[1];
this.fixedRotationCenter = cameraFactors[2];
this.cameraDistance = cameraFactors[3].x;
this.aperatureAngle = cameraFactors[3].y;
this.scalePixelsPerAngstrom = cameraFactors[3].z;
this.isToFile = (Clazz.instanceOf (output, String));
if (this.isToFile) {
this.fileName = output;
var pt = this.fileName.indexOf (":::");
if (pt > 0) {
this.commandLineOptions = this.fileName.substring (pt + 3);
this.fileName = this.fileName.substring (0, pt);
}try {
var f =  new java.io.File (this.fileName);
System.out.println ("__Exporter writing to " + f.getAbsolutePath ());
this.os =  new java.io.FileOutputStream (this.fileName);
this.bw =  new java.io.BufferedWriter ( new java.io.OutputStreamWriter (this.os));
} catch (e) {
if (Clazz.exceptionOf (e, java.io.FileNotFoundException)) {
return false;
} else {
throw e;
}
}
} else {
this.$output = output;
}this.outputHeader ();
return true;
}, "org.jmol.viewer.Viewer,~N,org.jmol.util.GData,~O");
Clazz.defineMethod (c$, "output", 
function (data) {
this.nBytes += data.length;
try {
if (this.bw == null) this.$output.append (data);
 else this.bw.write (data);
} catch (e) {
if (Clazz.exceptionOf (e, java.io.IOException)) {
} else {
throw e;
}
}
}, "~S");
Clazz.defineMethod (c$, "outputComment", 
function (comment) {
if (this.commentChar != null) this.output (this.commentChar + comment + "\n");
}, "~S");
c$.setTempVertex = Clazz.defineMethod (c$, "setTempVertex", 
function (pt, offset, ptTemp) {
ptTemp.setT (pt);
if (offset != null) ptTemp.add (offset);
}, "javax.vecmath.Point3f,javax.vecmath.Point3f,javax.vecmath.Point3f");
Clazz.defineMethod (c$, "outputVertices", 
function (vertices, nVertices, offset) {
for (var i = 0; i < nVertices; i++) {
if (Float.isNaN (vertices[i].x)) continue ;this.outputVertex (vertices[i], offset);
this.output ("\n");
}
}, "~A,~N,javax.vecmath.Point3f");
Clazz.defineMethod (c$, "outputVertex", 
function (pt, offset) {
org.jmol.exportjs.___Exporter.setTempVertex (pt, offset, this.tempP1);
this.output (this.tempP1);
}, "javax.vecmath.Point3f,javax.vecmath.Point3f");
Clazz.defineMethod (c$, "outputJmolPerspective", 
function () {
this.outputComment (this.getJmolPerspective ());
});
Clazz.defineMethod (c$, "getJmolPerspective", 
function () {
if (this.commentChar == null) return "";
var sb =  new javax.util.StringXBuilder ();
sb.append (this.commentChar).append ("Jmol perspective:");
sb.append ("\n").append (this.commentChar).append ("screen width height dim: " + this.screenWidth + " " + this.screenHeight + " " + this.viewer.getScreenDim ());
sb.append ("\n").append (this.commentChar).append ("perspectiveDepth: " + this.viewer.getPerspectiveDepth ());
sb.append ("\n").append (this.commentChar).append ("cameraDistance(angstroms): " + this.cameraDistance);
sb.append ("\n").append (this.commentChar).append ("aperatureAngle(degrees): " + this.aperatureAngle);
sb.append ("\n").append (this.commentChar).append ("scalePixelsPerAngstrom: " + this.scalePixelsPerAngstrom);
sb.append ("\n").append (this.commentChar).append ("light source: " + this.lightSource);
sb.append ("\n").append (this.commentChar).append ("lighting: " + this.viewer.getSpecularState ().$replace ('\n', ' '));
sb.append ("\n").append (this.commentChar).append ("center: " + this.center);
sb.append ("\n").append (this.commentChar).append ("rotationRadius: " + this.viewer.getRotationRadius ());
sb.append ("\n").append (this.commentChar).append ("boundboxCenter: " + this.viewer.getBoundBoxCenter ());
sb.append ("\n").append (this.commentChar).append ("translationOffset: " + this.viewer.getTranslationScript ());
sb.append ("\n").append (this.commentChar).append ("zoom: " + this.viewer.getZoomPercentFloat ());
sb.append ("\n").append (this.commentChar).append ("moveto command: " + this.viewer.getOrientationText (4130, null));
sb.append ("\n");
return sb.toString ();
});
Clazz.defineMethod (c$, "outputFooter", 
function () {
});
Clazz.defineMethod (c$, "finalizeOutput", 
function () {
this.outputFooter ();
if (!this.isToFile) return this.$output.toString ();
try {
this.bw.flush ();
this.bw.close ();
this.os = null;
} catch (e) {
if (Clazz.exceptionOf (e, java.io.IOException)) {
e.printStackTrace ();
return "ERROR EXPORTING FILE";
} else {
throw e;
}
}
return "OK " + this.nBytes + " " + this.jmolRenderer.getExportName () + " " + this.fileName;
});
c$.getExportDate = Clazz.defineMethod (c$, "getExportDate", 
function () {
return  new java.text.SimpleDateFormat ("yyyy-MM-dd', 'HH:mm").format ( new java.util.Date ());
});
Clazz.defineMethod (c$, "rgbFractionalFromColix", 
function (colix) {
return this.rgbFractionalFromArgb (this.g3d.getColorArgbOrGray (colix));
}, "~N");
Clazz.defineMethod (c$, "getTriad", 
function (t) {
return org.jmol.exportjs.___Exporter.round (t.x) + " " + org.jmol.exportjs.___Exporter.round (t.y) + " " + org.jmol.exportjs.___Exporter.round (t.z);
}, "javax.vecmath.Tuple3f");
Clazz.defineMethod (c$, "rgbFractionalFromArgb", 
function (argb) {
var red = (argb >> 16) & 0xFF;
var green = (argb >> 8) & 0xFF;
var blue = argb & 0xFF;
this.tempC.set (red == 0 ? 0 : (red + 1) / 256, green == 0 ? 0 : (green + 1) / 256, blue == 0 ? 0 : (blue + 1) / 256);
return this.getTriad (this.tempC);
}, "~N");
c$.translucencyFractionalFromColix = Clazz.defineMethod (c$, "translucencyFractionalFromColix", 
function (colix) {
return org.jmol.exportjs.___Exporter.round (org.jmol.util.Colix.getColixTranslucencyFractional (colix));
}, "~N");
c$.opacityFractionalFromColix = Clazz.defineMethod (c$, "opacityFractionalFromColix", 
function (colix) {
return org.jmol.exportjs.___Exporter.round (1 - org.jmol.util.Colix.getColixTranslucencyFractional (colix));
}, "~N");
c$.opacityFractionalFromArgb = Clazz.defineMethod (c$, "opacityFractionalFromArgb", 
function (argb) {
var opacity = (argb >> 24) & 0xFF;
return org.jmol.exportjs.___Exporter.round (opacity == 0 ? 0 : (opacity + 1) / 256);
}, "~N");
c$.round = Clazz.defineMethod (c$, "round", 
function (number) {
var s;
return (number == 0 ? "0" : number == 1 ? "1" : (s = "" + (Math.round (number * 1000) / 1000)).startsWith ("0.") ? s.substring (1) : s.startsWith ("-0.") ? "-" + s.substring (2) : s.endsWith (".0") ? s.substring (0, s.length - 2) : s);
}, "~N");
c$.round = Clazz.defineMethod (c$, "round", 
function (pt) {
return org.jmol.exportjs.___Exporter.round (pt.x) + " " + org.jmol.exportjs.___Exporter.round (pt.y) + " " + org.jmol.exportjs.___Exporter.round (pt.z);
}, "javax.vecmath.Tuple3f");
Clazz.defineMethod (c$, "getColorList", 
function (i00, colixes, nVertices, bsSelected, htColixes) {
var nColix = 0;
var list =  new java.util.ArrayList ();
var isAll = (bsSelected == null);
var i0 = (isAll ? nVertices - 1 : bsSelected.nextSetBit (0));
for (var i = i0; i >= 0; i = (isAll ? i - 1 : bsSelected.nextSetBit (i + 1))) {
var color = Short.$valueOf (colixes[i]);
if (!htColixes.containsKey (color)) {
list.add (color);
htColixes.put (color, Integer.$valueOf (i00 + nColix++));
}}
return list;
}, "~N,~A,~N,javax.util.BitSet,java.util.Map");
c$.getConeMesh = Clazz.defineMethod (c$, "getConeMesh", 
function (centerBase, matRotateScale, colix) {
var ms =  new org.jmol.util.MeshSurface ();
var ndeg = 10;
var n = Math.floor (360 / ndeg);
ms.colix = colix;
ms.vertices =  new Array (ms.vertexCount = n + 1);
ms.polygonIndexes =  Clazz.newArray (ms.polygonCount = n, 0);
for (var i = 0; i < n; i++) ms.polygonIndexes[i] = [i, (i + 1) % n, n];

var d = ndeg / 180. * 3.141592653589793;
for (var i = 0; i < n; i++) {
var x = (Math.cos (i * d));
var y = (Math.sin (i * d));
ms.vertices[i] = javax.vecmath.Point3f.new3 (x, y, 0);
}
ms.vertices[n] = javax.vecmath.Point3f.new3 (0, 0, 1);
if (matRotateScale != null) {
ms.normals =  new Array (ms.vertexCount);
for (var i = 0; i < ms.vertexCount; i++) {
matRotateScale.transform (ms.vertices[i]);
ms.normals[i] =  new javax.vecmath.Vector3f ();
ms.normals[i].setT (ms.vertices[i]);
(ms.normals[i]).normalize ();
ms.vertices[i].add (centerBase);
}
}return ms;
}, "javax.vecmath.Point3f,javax.vecmath.Matrix3f,~N");
Clazz.defineMethod (c$, "getRotationMatrix", 
function (pt1, pt2, radius) {
var m =  new javax.vecmath.Matrix3f ();
var m1;
if (pt2.x == pt1.x && pt2.y == pt1.y) {
m1 =  new javax.vecmath.Matrix3f ();
m1.setIdentity ();
if (pt1.z > pt2.z) m1.m11 = m1.m22 = -1;
} else {
this.tempV1.setT (pt2);
this.tempV1.sub (pt1);
this.tempV2.set (0, 0, 1);
this.tempV2.cross (this.tempV2, this.tempV1);
this.tempV1.cross (this.tempV1, this.tempV2);
var q = org.jmol.util.Quaternion.getQuaternionFrameV (this.tempV2, this.tempV1, null, false);
m1 = q.getMatrix ();
}m.m00 = radius;
m.m11 = radius;
m.m22 = pt2.distance (pt1);
m1.mul (m);
return m1;
}, "javax.vecmath.Point3f,javax.vecmath.Point3f,~N");
Clazz.defineMethod (c$, "getRotationMatrix", 
function (pt1, ptZ, radius, ptX, ptY) {
var m =  new javax.vecmath.Matrix3f ();
m.m00 = ptX.distance (pt1) * radius;
m.m11 = ptY.distance (pt1) * radius;
m.m22 = ptZ.distance (pt1) * 2;
var q = org.jmol.util.Quaternion.getQuaternionFrame (pt1, ptX, ptY);
var m1 = q.getMatrix ();
m1.mul (m);
return m1;
}, "javax.vecmath.Point3f,javax.vecmath.Point3f,~N,javax.vecmath.Point3f,javax.vecmath.Point3f");
Clazz.defineMethod (c$, "drawSurface", 
function (meshSurface, colix) {
var nVertices = meshSurface.vertexCount;
if (nVertices == 0) return ;
var nFaces = 0;
var nPolygons = meshSurface.polygonCount;
var bsPolygons = meshSurface.bsPolygons;
var faceVertexMax = (meshSurface.haveQuads ? 4 : 3);
var indices = meshSurface.polygonIndexes;
var isAll = (bsPolygons == null);
var i0 = (isAll ? nPolygons - 1 : bsPolygons.nextSetBit (0));
for (var i = i0; i >= 0; i = (isAll ? i - 1 : bsPolygons.nextSetBit (i + 1))) nFaces += (faceVertexMax == 4 && indices[i].length == 4 ? 2 : 1);

if (nFaces == 0) return ;
var vertices = meshSurface.getVertices ();
var normals = meshSurface.normals;
var colorSolid = (colix != 0);
var colixes = (colorSolid ? null : meshSurface.vertexColixes);
var polygonColixes = (colorSolid ? meshSurface.polygonColixes : null);
var htColixes =  new java.util.Hashtable ();
var colorList = null;
if (polygonColixes != null) colorList = this.getColorList (0, polygonColixes, nPolygons, bsPolygons, htColixes);
 else if (colixes != null) colorList = this.getColorList (0, colixes, nVertices, null, htColixes);
this.outputSurface (vertices, normals, colixes, indices, polygonColixes, nVertices, nPolygons, nFaces, bsPolygons, faceVertexMax, colix, colorList, htColixes, meshSurface.offset);
}, "org.jmol.util.MeshSurface,~N");
Clazz.defineMethod (c$, "outputSurface", 
function (vertices, normals, colixes, indices, polygonColixes, nVertices, nPolygons, nFaces, bsPolygons, faceVertexMax, colix, colorList, htColixes, offset) {
}, "~A,~A,~A,~A,~A,~N,~N,~N,javax.util.BitSet,~N,~N,java.util.List,java.util.Map,javax.vecmath.Point3f");
Clazz.defineMethod (c$, "drawFilledCircle", 
function (colixRing, colixFill, diameter, x, y, z) {
if (colixRing != 0) this.drawCircle (x, y, z, diameter, colixRing, false);
if (colixFill != 0) this.drawCircle (x, y, z, diameter, colixFill, true);
}, "~N,~N,~N,~N,~N,~N");
Clazz.defineMethod (c$, "plotImage", 
function (x, y, z, image, bgcolix, width, height) {
if (z < 3) z = this.viewer.getFrontPlane ();
this.outputComment ("start image " + (++this.nImage));
this.g3d.plotImage (x, y, z, image, this.jmolRenderer, bgcolix, width, height);
this.outputComment ("end image " + this.nImage);
}, "~N,~N,~N,java.awt.Image,~N,~N,~N");
Clazz.defineMethod (c$, "plotText", 
function (x, y, z, colix, text, font3d) {
if (z < 3) z = this.viewer.getFrontPlane ();
this.outputComment ("start text " + (++this.nText) + ": " + text);
this.g3d.plotText (x, y, z, this.g3d.getColorArgbOrGray (colix), text, font3d, this.jmolRenderer);
this.outputComment ("end text " + this.nText + ": " + text);
}, "~N,~N,~N,~N,~S,org.jmol.util.JmolFont");
Clazz.defineStatics (c$,
"degreesPerRadian", (57.29577951308232));
});
