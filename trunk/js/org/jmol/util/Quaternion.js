Clazz.declarePackage ("org.jmol.util");
Clazz.load (["javax.vecmath.Point4f"], "org.jmol.util.Quaternion", ["java.lang.Float", "javax.vecmath.AxisAngle4f", "$.Matrix3f", "$.Point3f", "$.Vector3f", "org.jmol.util.Escape", "$.Logger", "$.TextFormat"], function () {
c$ = Clazz.decorateAsClass (function () {
this.q0 = 0;
this.q1 = 0;
this.q2 = 0;
this.q3 = 0;
this.mat = null;
Clazz.instantialize (this, arguments);
}, org.jmol.util, "Quaternion");
Clazz.makeConstructor (c$, 
function () {
this.q0 = 1;
});
Clazz.makeConstructor (c$, 
function (q) {
this.set (q);
}, "org.jmol.util.Quaternion");
Clazz.makeConstructor (c$, 
function (pt, theta) {
this.set (pt, theta);
}, "javax.vecmath.Tuple3f,~N");
Clazz.makeConstructor (c$, 
function (mat) {
this.set (mat);
}, "javax.vecmath.Matrix3f");
Clazz.makeConstructor (c$, 
function (a) {
this.set (a);
}, "javax.vecmath.AxisAngle4f");
Clazz.makeConstructor (c$, 
function (pt) {
this.set (pt);
}, "javax.vecmath.Point4f");
Clazz.makeConstructor (c$, 
function (q0, q1, q2, q3) {
if (q0 < -1) {
this.q0 = -1;
return ;
}if (q0 > 1) {
this.q0 = 1;
return ;
}this.q0 = q0;
this.q1 = q1;
this.q2 = q2;
this.q3 = q3;
}, "~N,~N,~N,~N");
Clazz.defineMethod (c$, "set", 
function (q) {
this.q0 = q.q0;
this.q1 = q.q1;
this.q2 = q.q2;
this.q3 = q.q3;
}, "org.jmol.util.Quaternion");
Clazz.defineMethod (c$, "set", 
($fz = function (pt) {
var factor = (pt == null ? 0 : pt.distance (org.jmol.util.Quaternion.qZero));
if (factor == 0) {
this.q0 = 1;
return ;
}this.q0 = pt.w / factor;
this.q1 = pt.x / factor;
this.q2 = pt.y / factor;
this.q3 = pt.z / factor;
}, $fz.isPrivate = true, $fz), "javax.vecmath.Point4f");
Clazz.defineMethod (c$, "set", 
function (pt, theta) {
if (pt.x == 0 && pt.y == 0 && pt.z == 0) {
this.q0 = 1;
return ;
}var fact = (Math.sin (theta / 2 * 3.141592653589793 / 180) / Math.sqrt (pt.x * pt.x + pt.y * pt.y + pt.z * pt.z));
this.q0 = (Math.cos (theta / 2 * 3.141592653589793 / 180));
this.q1 = (pt.x * fact);
this.q2 = (pt.y * fact);
this.q3 = (pt.z * fact);
}, "javax.vecmath.Tuple3f,~N");
Clazz.defineMethod (c$, "set", 
function (a) {
var aa =  new javax.vecmath.AxisAngle4f (a);
if (aa.angle == 0) aa.y = 1;
var m3 =  new javax.vecmath.Matrix3f ();
m3.setAA (aa);
this.set (m3);
}, "javax.vecmath.AxisAngle4f");
Clazz.defineMethod (c$, "set", 
function (mat) {
this.mat = mat;
var trace = mat.m00 + mat.m11 + mat.m22;
var temp;
var w;
var x;
var y;
var z;
if (trace >= 0.5) {
w = Math.sqrt (1.0 + trace);
x = (mat.m21 - mat.m12) / w;
y = (mat.m02 - mat.m20) / w;
z = (mat.m10 - mat.m01) / w;
} else if ((temp = mat.m00 + mat.m00 - trace) >= 0.5) {
x = Math.sqrt (1.0 + temp);
w = (mat.m21 - mat.m12) / x;
y = (mat.m10 + mat.m01) / x;
z = (mat.m20 + mat.m02) / x;
} else if ((temp = mat.m11 + mat.m11 - trace) >= 0.5 || mat.m11 > mat.m22) {
y = Math.sqrt (1.0 + temp);
w = (mat.m02 - mat.m20) / y;
x = (mat.m10 + mat.m01) / y;
z = (mat.m21 + mat.m12) / y;
} else {
z = Math.sqrt (1.0 + mat.m22 + mat.m22 - trace);
w = (mat.m10 - mat.m01) / z;
x = (mat.m20 + mat.m02) / z;
y = (mat.m21 + mat.m12) / z;
}this.q0 = (w * 0.5);
this.q1 = (x * 0.5);
this.q2 = (y * 0.5);
this.q3 = (z * 0.5);
}, "javax.vecmath.Matrix3f");
Clazz.defineMethod (c$, "setRef", 
function (qref) {
if (qref == null) {
this.mul (this.getFixFactor ());
return ;
}if (this.dot (qref) >= 0) return ;
this.q0 *= -1;
this.q1 *= -1;
this.q2 *= -1;
this.q3 *= -1;
}, "org.jmol.util.Quaternion");
c$.getQuaternionFrame = Clazz.defineMethod (c$, "getQuaternionFrame", 
function (center, x, xy) {
var vA = javax.vecmath.Vector3f.newV (x);
vA.sub (center);
var vB = javax.vecmath.Vector3f.newV (xy);
vB.sub (center);
return org.jmol.util.Quaternion.getQuaternionFrame (vA, vB, null, false);
}, "javax.vecmath.Point3f,javax.vecmath.Tuple3f,javax.vecmath.Tuple3f");
c$.getQuaternionFrame = Clazz.defineMethod (c$, "getQuaternionFrame", 
function (vA, vB, vC, yBased) {
if (vC == null) {
vC =  new javax.vecmath.Vector3f ();
vC.cross (vA, vB);
if (yBased) vA.cross (vB, vC);
}var vBprime =  new javax.vecmath.Vector3f ();
vBprime.cross (vC, vA);
vA.normalize ();
vBprime.normalize ();
vC.normalize ();
var mat =  new javax.vecmath.Matrix3f ();
mat.setColumnV (0, vA);
mat.setColumnV (1, vBprime);
mat.setColumnV (2, vC);
var q =  new org.jmol.util.Quaternion (mat);
return q;
}, "javax.vecmath.Vector3f,javax.vecmath.Vector3f,javax.vecmath.Vector3f,~B");
Clazz.defineMethod (c$, "getMatrix", 
function () {
if (this.mat == null) this.setMatrix ();
return this.mat;
});
Clazz.defineMethod (c$, "setMatrix", 
($fz = function () {
this.mat =  new javax.vecmath.Matrix3f ();
this.mat.m00 = this.q0 * this.q0 + this.q1 * this.q1 - this.q2 * this.q2 - this.q3 * this.q3;
this.mat.m01 = 2 * this.q1 * this.q2 - 2 * this.q0 * this.q3;
this.mat.m02 = 2 * this.q1 * this.q3 + 2 * this.q0 * this.q2;
this.mat.m10 = 2 * this.q1 * this.q2 + 2 * this.q0 * this.q3;
this.mat.m11 = this.q0 * this.q0 - this.q1 * this.q1 + this.q2 * this.q2 - this.q3 * this.q3;
this.mat.m12 = 2 * this.q2 * this.q3 - 2 * this.q0 * this.q1;
this.mat.m20 = 2 * this.q1 * this.q3 - 2 * this.q0 * this.q2;
this.mat.m21 = 2 * this.q2 * this.q3 + 2 * this.q0 * this.q1;
this.mat.m22 = this.q0 * this.q0 - this.q1 * this.q1 - this.q2 * this.q2 + this.q3 * this.q3;
}, $fz.isPrivate = true, $fz));
Clazz.defineMethod (c$, "add", 
function (x) {
return  new org.jmol.util.Quaternion (this.getNormal (), this.getTheta () + x);
}, "~N");
Clazz.defineMethod (c$, "mul", 
function (x) {
return (x == 1 ?  new org.jmol.util.Quaternion (this.q0, this.q1, this.q2, this.q3) :  new org.jmol.util.Quaternion (this.getNormal (), this.getTheta () * x));
}, "~N");
Clazz.defineMethod (c$, "mul", 
function (p) {
return  new org.jmol.util.Quaternion (this.q0 * p.q0 - this.q1 * p.q1 - this.q2 * p.q2 - this.q3 * p.q3, this.q0 * p.q1 + this.q1 * p.q0 + this.q2 * p.q3 - this.q3 * p.q2, this.q0 * p.q2 + this.q2 * p.q0 + this.q3 * p.q1 - this.q1 * p.q3, this.q0 * p.q3 + this.q3 * p.q0 + this.q1 * p.q2 - this.q2 * p.q1);
}, "org.jmol.util.Quaternion");
Clazz.defineMethod (c$, "div", 
function (p) {
return this.mul (p.inv ());
}, "org.jmol.util.Quaternion");
Clazz.defineMethod (c$, "divLeft", 
function (p) {
return this.inv ().mul (p);
}, "org.jmol.util.Quaternion");
Clazz.defineMethod (c$, "dot", 
function (q) {
return this.q0 * q.q0 + this.q1 * q.q1 + this.q2 * q.q2 + this.q3 * q.q3;
}, "org.jmol.util.Quaternion");
Clazz.defineMethod (c$, "inv", 
function () {
return  new org.jmol.util.Quaternion (this.q0, -this.q1, -this.q2, -this.q3);
});
Clazz.defineMethod (c$, "negate", 
function () {
return  new org.jmol.util.Quaternion (-this.q0, -this.q1, -this.q2, -this.q3);
});
Clazz.defineMethod (c$, "getFixFactor", 
($fz = function () {
return (this.q0 < 0 || this.q0 == 0 && (this.q1 < 0 || this.q1 == 0 && (this.q2 < 0 || this.q2 == 0 && this.q3 < 0)) ? -1 : 1);
}, $fz.isPrivate = true, $fz));
Clazz.defineMethod (c$, "getVector", 
function (i) {
return this.getVector (i, 1);
}, "~N");
Clazz.defineMethod (c$, "getVector", 
($fz = function (i, scale) {
if (i == -1) {
scale *= this.getFixFactor ();
return javax.vecmath.Vector3f.new3 (this.q1 * scale, this.q2 * scale, this.q3 * scale);
}if (this.mat == null) this.setMatrix ();
var v =  new javax.vecmath.Vector3f ();
this.mat.getColumnV (i, v);
if (scale != 1) v.scale (scale);
return v;
}, $fz.isPrivate = true, $fz), "~N,~N");
Clazz.defineMethod (c$, "getNormal", 
function () {
var v = org.jmol.util.Quaternion.getRawNormal (this);
v.scale (this.getFixFactor ());
return v;
});
c$.getRawNormal = Clazz.defineMethod (c$, "getRawNormal", 
($fz = function (q) {
var v = javax.vecmath.Vector3f.new3 (q.q1, q.q2, q.q3);
if (v.length () == 0) return javax.vecmath.Vector3f.new3 (0, 0, 1);
v.normalize ();
return v;
}, $fz.isPrivate = true, $fz), "org.jmol.util.Quaternion");
Clazz.defineMethod (c$, "getTheta", 
function () {
return (Math.acos (Math.abs (this.q0)) * 2 * 180 / 3.141592653589793);
});
Clazz.defineMethod (c$, "getThetaRadians", 
function () {
return (Math.acos (Math.abs (this.q0)) * 2);
});
Clazz.defineMethod (c$, "getNormalDirected", 
function (v0) {
var v = this.getNormal ();
if (v.x * v0.x + v.y * v0.y + v.z * v0.z < 0) {
v.scale (-1);
}return v;
}, "javax.vecmath.Vector3f");
Clazz.defineMethod (c$, "get3dProjection", 
function (v3d) {
v3d.set (this.q1, this.q2, this.q3);
return v3d;
}, "javax.vecmath.Vector3f");
Clazz.defineMethod (c$, "getThetaDirected", 
function (axisAngle) {
var theta = this.getTheta ();
var v = this.getNormal ();
if (axisAngle.x * this.q1 + axisAngle.y * this.q2 + axisAngle.z * this.q3 < 0) {
v.scale (-1);
theta = -theta;
}axisAngle.set (v.x, v.y, v.z, theta);
return axisAngle;
}, "javax.vecmath.Point4f");
Clazz.defineMethod (c$, "getThetaDirected", 
function (vector) {
var theta = this.getTheta ();
var v = this.getNormal ();
if (vector.x * this.q1 + vector.y * this.q2 + vector.z * this.q3 < 0) {
v.scale (-1);
theta = -theta;
}return theta;
}, "javax.vecmath.Vector3f");
Clazz.defineMethod (c$, "toPoint4f", 
function () {
return javax.vecmath.Point4f.new4 (this.q1, this.q2, this.q3, this.q0);
});
Clazz.defineMethod (c$, "toAxisAngle4f", 
function () {
var theta = 2 * Math.acos (Math.abs (this.q0));
var sinTheta2 = Math.sin (theta / 2);
var v = this.getNormal ();
if (sinTheta2 < 0) {
v.scale (-1);
theta = 3.141592653589793 - theta;
}return  new javax.vecmath.AxisAngle4f (v, theta);
});
Clazz.defineMethod (c$, "transform", 
function (pt) {
if (this.mat == null) this.setMatrix ();
var ptNew = javax.vecmath.Point3f.newP (pt);
this.mat.transform (ptNew);
return ptNew;
}, "javax.vecmath.Point3f");
Clazz.defineMethod (c$, "transform", 
function (pt, ptNew) {
if (this.mat == null) this.setMatrix ();
this.mat.transform2 (pt, ptNew);
}, "javax.vecmath.Tuple3f,javax.vecmath.Tuple3f");
Clazz.defineMethod (c$, "transform", 
function (v) {
if (this.mat == null) this.setMatrix ();
var vNew = javax.vecmath.Vector3f.newV (v);
this.mat.transform (vNew);
return vNew;
}, "javax.vecmath.Vector3f");
Clazz.defineMethod (c$, "leftDifference", 
function (q2) {
var q2adjusted = (this.dot (q2) < 0 ? q2.negate () : q2);
return this.inv ().mul (q2adjusted);
}, "org.jmol.util.Quaternion");
Clazz.defineMethod (c$, "rightDifference", 
function (q2) {
var q2adjusted = (this.dot (q2) < 0 ? q2.negate () : q2);
return this.mul (q2adjusted.inv ());
}, "org.jmol.util.Quaternion");
Clazz.defineMethod (c$, "getInfo", 
function () {
var axis = this.toAxisAngle4f ();
return org.jmol.util.TextFormat.sprintf ("%10.6f%10.6f%10.6f%10.6f  %6.2f  %10.5f %10.5f %10.5f", [[this.q0, this.q1, this.q2, this.q3, (axis.angle * 180 / 3.141592653589793), axis.x, axis.y, axis.z]]);
});
Clazz.defineMethod (c$, "draw", 
function (prefix, id, ptCenter, scale) {
var strV = " VECTOR " + org.jmol.util.Escape.escapePt (ptCenter) + " ";
if (scale == 0) scale = 1;
return "draw " + prefix + "x" + id + strV + org.jmol.util.Escape.escapePt (this.getVector (0, scale)) + " color red\n" + "draw " + prefix + "y" + id + strV + org.jmol.util.Escape.escapePt (this.getVector (1, scale)) + " color green\n" + "draw " + prefix + "z" + id + strV + org.jmol.util.Escape.escapePt (this.getVector (2, scale)) + " color blue\n";
}, "~S,~S,javax.vecmath.Point3f,~N");
Clazz.overrideMethod (c$, "toString", 
function () {
return "{" + this.q1 + " " + this.q2 + " " + this.q3 + " " + this.q0 + "}";
});
c$.div = Clazz.defineMethod (c$, "div", 
function (data1, data2, nMax, isRelative) {
var n;
if (data1 == null || data2 == null || (n = Math.min (data1.length, data2.length)) == 0) return null;
if (nMax > 0 && n > nMax) n = nMax;
var dqs =  new Array (n);
for (var i = 0; i < n; i++) {
if (data1[i] == null || data2[i] == null) return null;
dqs[i] = (isRelative ? data1[i].divLeft (data2[i]) : data1[i].div (data2[i]));
}
return dqs;
}, "~A,~A,~N,~B");
c$.sphereMean = Clazz.defineMethod (c$, "sphereMean", 
function (data, retStddev, criterion) {
if (data == null || data.length == 0) return  new org.jmol.util.Quaternion ();
if (retStddev == null) retStddev =  Clazz.newArray (1, 0);
if (data.length == 1) {
retStddev[0] = 0;
return  new org.jmol.util.Quaternion (data[0]);
}var diff = 3.4028235E38;
var lastStddev = 3.4028235E38;
var qMean = org.jmol.util.Quaternion.simpleAverage (data);
var maxIter = 100;
var iter = 0;
while (diff > criterion && lastStddev != 0 && iter < maxIter) {
qMean = org.jmol.util.Quaternion.newMean (data, qMean);
retStddev[0] = org.jmol.util.Quaternion.stdDev (data, qMean);
diff = Math.abs (retStddev[0] - lastStddev);
lastStddev = retStddev[0];
org.jmol.util.Logger.info (++iter + " sphereMean " + qMean + " stddev=" + lastStddev + " diff=" + diff);
}
return qMean;
}, "~A,~A,~N");
c$.simpleAverage = Clazz.defineMethod (c$, "simpleAverage", 
($fz = function (ndata) {
var mean = javax.vecmath.Vector3f.new3 (0, 0, 1);
var v = ndata[0].getNormal ();
mean.add (v);
for (var i = ndata.length; --i >= 0; ) mean.add (ndata[i].getNormalDirected (mean));

mean.sub (v);
mean.normalize ();
var f = 0;
for (var i = ndata.length; --i >= 0; ) f += Math.abs (ndata[i].get3dProjection (v).dot (mean));

if (f != 0) mean.scale (f / ndata.length);
f = Math.sqrt (1 - mean.lengthSquared ());
if (Float.isNaN (f)) f = 0;
return  new org.jmol.util.Quaternion (javax.vecmath.Point4f.new4 (mean.x, mean.y, mean.z, f));
}, $fz.isPrivate = true, $fz), "~A");
c$.newMean = Clazz.defineMethod (c$, "newMean", 
($fz = function (data, mean) {
var sum =  new javax.vecmath.Vector3f ();
var v;
var q;
var dq;
for (var i = data.length; --i >= 0; ) {
q = data[i];
dq = q.div (mean);
v = dq.getNormal ();
v.scale (dq.getTheta ());
sum.add (v);
}
sum.scale (1 / data.length);
var dqMean =  new org.jmol.util.Quaternion (sum, sum.length ());
return dqMean.mul (mean);
}, $fz.isPrivate = true, $fz), "~A,org.jmol.util.Quaternion");
c$.stdDev = Clazz.defineMethod (c$, "stdDev", 
($fz = function (data, mean) {
var sum = 0;
var sum2 = 0;
var n = data.length;
for (var i = n; --i >= 0; ) {
var dq = data[i].div (mean);
var theta = dq.getTheta ();
sum += theta;
sum2 += theta * theta;
}
sum2 = sum2 - sum * sum / n;
if (sum2 < 0) sum2 = 0;
return Math.sqrt (sum2 / (n - 1));
}, $fz.isPrivate = true, $fz), "~A,org.jmol.util.Quaternion");
c$.qZero = c$.prototype.qZero =  new javax.vecmath.Point4f ();
});
