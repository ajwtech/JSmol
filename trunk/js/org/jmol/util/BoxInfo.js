Clazz.declarePackage ("org.jmol.util");
Clazz.load (["javax.vecmath.Point3f", "$.Point3i", "$.Vector3f"], "org.jmol.util.BoxInfo", ["java.util.ArrayList", "$.Hashtable", "javax.vecmath.Point4f", "org.jmol.util.Measure", "$.Point3fi", "$.TriangleData"], function () {
c$ = Clazz.decorateAsClass (function () {
this.bbCorner0 = null;
this.bbCorner1 = null;
this.bbCenter = null;
this.bbVector = null;
this.bbVertices = null;
this.isScaleSet = false;
Clazz.instantialize (this, arguments);
}, org.jmol.util, "BoxInfo");
Clazz.prepareFields (c$, function () {
this.bbCorner0 =  new javax.vecmath.Point3f ();
this.bbCorner1 =  new javax.vecmath.Point3f ();
this.bbCenter =  new javax.vecmath.Point3f ();
this.bbVector =  new javax.vecmath.Vector3f ();
this.bbVertices =  new Array (8);
{
for (var i = 8; --i >= 0; ) this.bbVertices[i] =  new org.jmol.util.Point3fi ();

}{
for (var i = 0; i < 8; i++) {
org.jmol.util.BoxInfo.unitBboxPoints[i] =  new javax.vecmath.Point3f (-1, -1, -1);
org.jmol.util.BoxInfo.unitBboxPoints[i].scaleAdd (2, org.jmol.util.BoxInfo.unitCubePoints[i], org.jmol.util.BoxInfo.unitBboxPoints[i]);
}
}});
Clazz.makeConstructor (c$, 
function () {
this.reset ();
});
Clazz.defineMethod (c$, "intersectPlane", 
function (plane, scale, flags) {
var v =  new java.util.ArrayList ();
v.add (this.getCanonicalCopy (scale));
return org.jmol.util.TriangleData.intersectPlane (plane, v, flags);
}, "javax.vecmath.Point4f,~N,~N");
Clazz.defineMethod (c$, "getCanonicalCopy", 
function (scale) {
return org.jmol.util.BoxInfo.getCanonicalCopy (this.bbVertices, scale);
}, "~N");
c$.getCanonicalCopy = Clazz.defineMethod (c$, "getCanonicalCopy", 
function (bbUcPoints, scale) {
var pts =  new Array (8);
for (var i = 0; i < 8; i++) pts[org.jmol.util.BoxInfo.toCanonical[i]] =  new javax.vecmath.Point3f (bbUcPoints[i]);

org.jmol.util.BoxInfo.scaleBox (pts, scale);
return pts;
}, "~A,~N");
c$.scaleBox = Clazz.defineMethod (c$, "scaleBox", 
function (pts, scale) {
if (scale == 0 || scale == 1) return ;
var center =  new javax.vecmath.Point3f ();
var v =  new javax.vecmath.Vector3f ();
for (var i = 0; i < 8; i++) center.add (pts[i]);

center.scale (0.125);
for (var i = 0; i < 8; i++) {
v.sub (pts[i], center);
v.scale (scale);
pts[i].add (center, v);
}
}, "~A,~N");
c$.getFacesFromCriticalPoints = Clazz.defineMethod (c$, "getFacesFromCriticalPoints", 
function (points) {
var faces =  new Array (6);
var vNorm =  new javax.vecmath.Vector3f ();
var vAB =  new javax.vecmath.Vector3f ();
var vAC =  new javax.vecmath.Vector3f ();
var va =  new javax.vecmath.Point3f ();
var vb =  new javax.vecmath.Point3f ();
var vc =  new javax.vecmath.Point3f ();
var vertices =  new Array (8);
for (var i = 0; i < 8; i++) {
vertices[i] =  new javax.vecmath.Point3f (points[0]);
if ((i & 1) == 1) vertices[i].add (points[1]);
if ((i & 2) == 2) vertices[i].add (points[2]);
if ((i & 4) == 4) vertices[i].add (points[3]);
}
for (var i = 0; i < 6; i++) {
va.set (vertices[org.jmol.util.BoxInfo.facePoints[i].x]);
vb.set (vertices[org.jmol.util.BoxInfo.facePoints[i].y]);
vc.set (vertices[org.jmol.util.BoxInfo.facePoints[i].z]);
org.jmol.util.Measure.getPlaneThroughPoints (va, vb, vc, vNorm, vAB, vAC, faces[i] =  new javax.vecmath.Point4f ());
}
return faces;
}, "~A");
c$.getCriticalPoints = Clazz.defineMethod (c$, "getCriticalPoints", 
function (bbVertices, offset) {
var center =  new javax.vecmath.Point3f (bbVertices[0]);
var a =  new javax.vecmath.Point3f (bbVertices[1]);
var b =  new javax.vecmath.Point3f (bbVertices[2]);
var c =  new javax.vecmath.Point3f (bbVertices[4]);
a.sub (center);
b.sub (center);
c.sub (center);
if (offset != null) center.add (offset);
return [center, a, b, c];
}, "~A,javax.vecmath.Tuple3f");
Clazz.defineMethod (c$, "getBoundBoxCenter", 
function () {
if (!this.isScaleSet) this.setBbcage (1);
return this.bbCenter;
});
Clazz.defineMethod (c$, "getBoundBoxCornerVector", 
function () {
if (!this.isScaleSet) this.setBbcage (1);
return this.bbVector;
});
Clazz.defineMethod (c$, "getBoundBoxPoints", 
function (isAll) {
if (!this.isScaleSet) this.setBbcage (1);
return (isAll ? [this.bbCenter,  new javax.vecmath.Point3f (this.bbVector), this.bbCorner0, this.bbCorner1] : [this.bbCorner0, this.bbCorner1]);
}, "~B");
Clazz.defineMethod (c$, "getBboxVertices", 
function () {
if (!this.isScaleSet) this.setBbcage (1);
return this.bbVertices;
});
Clazz.defineMethod (c$, "getBoundBoxInfo", 
function () {
if (!this.isScaleSet) this.setBbcage (1);
var info =  new java.util.Hashtable ();
info.put ("center",  new javax.vecmath.Point3f (this.bbCenter));
info.put ("vector",  new javax.vecmath.Vector3f (this.bbVector));
info.put ("corner0",  new javax.vecmath.Point3f (this.bbCorner0));
info.put ("corner1",  new javax.vecmath.Point3f (this.bbCorner1));
return info;
});
Clazz.defineMethod (c$, "setBoundBox", 
function (pt1, pt2, byCorner, scale) {
if (pt1 != null) {
if (scale == 0) return ;
if (byCorner) {
if (pt1.distance (pt2) == 0) return ;
this.bbCorner0.set (Math.min (pt1.x, pt2.x), Math.min (pt1.y, pt2.y), Math.min (pt1.z, pt2.z));
this.bbCorner1.set (Math.max (pt1.x, pt2.x), Math.max (pt1.y, pt2.y), Math.max (pt1.z, pt2.z));
} else {
if (pt2.x == 0 || pt2.y == 0 && pt2.z == 0) return ;
this.bbCorner0.set (pt1.x - pt2.x, pt1.y - pt2.y, pt1.z - pt2.z);
this.bbCorner1.set (pt1.x + pt2.x, pt1.y + pt2.y, pt1.z + pt2.z);
}}this.setBbcage (scale);
}, "javax.vecmath.Point3f,javax.vecmath.Point3f,~B,~N");
Clazz.defineMethod (c$, "reset", 
function () {
this.isScaleSet = false;
this.bbCorner0.set (3.4028235E38, 3.4028235E38, 3.4028235E38);
this.bbCorner1.set (-3.4028235E38, -3.4028235E38, -3.4028235E38);
});
Clazz.defineMethod (c$, "addBoundBoxPoint", 
function (pt) {
this.isScaleSet = false;
org.jmol.util.BoxInfo.addPoint (pt, this.bbCorner0, this.bbCorner1, 0);
}, "javax.vecmath.Point3f");
c$.addPoint = Clazz.defineMethod (c$, "addPoint", 
function (pt, xyzMin, xyzMax, margin) {
if (pt.x - margin < xyzMin.x) xyzMin.x = pt.x - margin;
if (pt.x + margin > xyzMax.x) xyzMax.x = pt.x + margin;
if (pt.y - margin < xyzMin.y) xyzMin.y = pt.y - margin;
if (pt.y + margin > xyzMax.y) xyzMax.y = pt.y + margin;
if (pt.z - margin < xyzMin.z) xyzMin.z = pt.z - margin;
if (pt.z + margin > xyzMax.z) xyzMax.z = pt.z + margin;
}, "javax.vecmath.Point3f,javax.vecmath.Point3f,javax.vecmath.Point3f,~N");
Clazz.defineMethod (c$, "setBbcage", 
function (scale) {
this.isScaleSet = true;
this.bbCenter.add (this.bbCorner0, this.bbCorner1);
this.bbCenter.scale (0.5);
this.bbVector.sub (this.bbCorner1, this.bbCenter);
if (scale > 0) {
this.bbVector.scale (scale);
} else {
this.bbVector.x -= scale / 2;
this.bbVector.y -= scale / 2;
this.bbVector.z -= scale / 2;
}for (var i = 8; --i >= 0; ) {
var pt = this.bbVertices[i];
pt.set (org.jmol.util.BoxInfo.unitBboxPoints[i]);
pt.x *= this.bbVector.x;
pt.y *= this.bbVector.y;
pt.z *= this.bbVector.z;
pt.add (this.bbCenter);
}
this.bbCorner0.set (this.bbVertices[0]);
this.bbCorner1.set (this.bbVertices[7]);
}, "~N");
Clazz.defineMethod (c$, "isWithin", 
function (pt) {
if (!this.isScaleSet) this.setBbcage (1);
return (pt.x >= this.bbCorner0.x && pt.x <= this.bbCorner1.x && pt.y >= this.bbCorner0.y && pt.y <= this.bbCorner1.y && pt.z >= this.bbCorner0.z && pt.z <= this.bbCorner1.z);
}, "javax.vecmath.Point3f");
Clazz.defineStatics (c$,
"bbcageTickEdges", ['z', 0, 0, 'y', 'x', 0, 0, 0, 0, 0, 0, 0],
"uccageTickEdges", ['z', 'y', 'x', 0, 0, 0, 0, 0, 0, 0, 0, 0],
"edges", [0, 1, 0, 2, 0, 4, 1, 3, 1, 5, 2, 3, 2, 6, 3, 7, 4, 5, 4, 6, 5, 7, 6, 7]);
c$.unitCubePoints = c$.prototype.unitCubePoints = [ new javax.vecmath.Point3f (0, 0, 0),  new javax.vecmath.Point3f (0, 0, 1),  new javax.vecmath.Point3f (0, 1, 0),  new javax.vecmath.Point3f (0, 1, 1),  new javax.vecmath.Point3f (1, 0, 0),  new javax.vecmath.Point3f (1, 0, 1),  new javax.vecmath.Point3f (1, 1, 0),  new javax.vecmath.Point3f (1, 1, 1)];
c$.facePoints = c$.prototype.facePoints = [ new javax.vecmath.Point3i (4, 0, 6),  new javax.vecmath.Point3i (4, 6, 5),  new javax.vecmath.Point3i (5, 7, 1),  new javax.vecmath.Point3i (1, 3, 0),  new javax.vecmath.Point3i (6, 2, 7),  new javax.vecmath.Point3i (1, 0, 5)];
Clazz.defineStatics (c$,
"toCanonical", [0, 3, 4, 7, 1, 2, 5, 6]);
c$.cubeVertexOffsets = c$.prototype.cubeVertexOffsets = [ new javax.vecmath.Point3i (0, 0, 0),  new javax.vecmath.Point3i (1, 0, 0),  new javax.vecmath.Point3i (1, 0, 1),  new javax.vecmath.Point3i (0, 0, 1),  new javax.vecmath.Point3i (0, 1, 0),  new javax.vecmath.Point3i (1, 1, 0),  new javax.vecmath.Point3i (1, 1, 1),  new javax.vecmath.Point3i (0, 1, 1)];
c$.unitBboxPoints = c$.prototype.unitBboxPoints =  new Array (8);
});
