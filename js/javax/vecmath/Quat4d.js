Clazz.declarePackage ("javax.vecmath");
Clazz.load (["javax.vecmath.Tuple4d"], "javax.vecmath.Quat4d", null, function () {
c$ = Clazz.declareType (javax.vecmath, "Quat4d", javax.vecmath.Tuple4d, java.io.Serializable);
Clazz.makeConstructor (c$, 
function (x, y, z, w) {
Clazz.superConstructor (this, javax.vecmath.Quat4d, []);
var mag;
mag = 1.0 / Math.sqrt (x * x + y * y + z * z + w * w);
this.x = x * mag;
this.y = y * mag;
this.z = z * mag;
this.w = w * mag;
}, "~N,~N,~N,~N");
Clazz.makeConstructor (c$, 
function (q) {
Clazz.superConstructor (this, javax.vecmath.Quat4d, []);
var mag;
mag = 1.0 / Math.sqrt (q[0] * q[0] + q[1] * q[1] + q[2] * q[2] + q[3] * q[3]);
this.x = q[0] * mag;
this.y = q[1] * mag;
this.z = q[2] * mag;
this.w = q[3] * mag;
}, "~A");
Clazz.makeConstructor (c$, 
function (t1) {
Clazz.superConstructor (this, javax.vecmath.Quat4d, []);
var mag;
mag = 1.0 / Math.sqrt (t1.x * t1.x + t1.y * t1.y + t1.z * t1.z + t1.w * t1.w);
this.x = t1.x * mag;
this.y = t1.y * mag;
this.z = t1.z * mag;
this.w = t1.w * mag;
}, "javax.vecmath.Tuple4f");
Clazz.makeConstructor (c$, 
function (t1) {
Clazz.superConstructor (this, javax.vecmath.Quat4d, []);
var mag;
mag = 1.0 / Math.sqrt (t1.x * t1.x + t1.y * t1.y + t1.z * t1.z + t1.w * t1.w);
this.x = t1.x * mag;
this.y = t1.y * mag;
this.z = t1.z * mag;
this.w = t1.w * mag;
}, "javax.vecmath.Tuple4d");
Clazz.defineMethod (c$, "conjugate", 
function (q1) {
this.x = -q1.x;
this.y = -q1.y;
this.z = -q1.z;
this.w = q1.w;
}, "javax.vecmath.Quat4d");
Clazz.defineMethod (c$, "conjugate", 
function () {
this.x = -this.x;
this.y = -this.y;
this.z = -this.z;
});
Clazz.defineMethod (c$, "mul", 
function (q1, q2) {
if (this !== q1 && this !== q2) {
this.w = q1.w * q2.w - q1.x * q2.x - q1.y * q2.y - q1.z * q2.z;
this.x = q1.w * q2.x + q2.w * q1.x + q1.y * q2.z - q1.z * q2.y;
this.y = q1.w * q2.y + q2.w * q1.y - q1.x * q2.z + q1.z * q2.x;
this.z = q1.w * q2.z + q2.w * q1.z + q1.x * q2.y - q1.y * q2.x;
} else {
var x;
var y;
var w;
w = q1.w * q2.w - q1.x * q2.x - q1.y * q2.y - q1.z * q2.z;
x = q1.w * q2.x + q2.w * q1.x + q1.y * q2.z - q1.z * q2.y;
y = q1.w * q2.y + q2.w * q1.y - q1.x * q2.z + q1.z * q2.x;
this.z = q1.w * q2.z + q2.w * q1.z + q1.x * q2.y - q1.y * q2.x;
this.w = w;
this.x = x;
this.y = y;
}}, "javax.vecmath.Quat4d,javax.vecmath.Quat4d");
Clazz.defineMethod (c$, "mul", 
function (q1) {
var x;
var y;
var w;
w = this.w * q1.w - this.x * q1.x - this.y * q1.y - this.z * q1.z;
x = this.w * q1.x + q1.w * this.x + this.y * q1.z - this.z * q1.y;
y = this.w * q1.y + q1.w * this.y - this.x * q1.z + this.z * q1.x;
this.z = this.w * q1.z + q1.w * this.z + this.x * q1.y - this.y * q1.x;
this.w = w;
this.x = x;
this.y = y;
}, "javax.vecmath.Quat4d");
Clazz.defineMethod (c$, "mulInverse", 
function (q1, q2) {
var tempQuat =  new javax.vecmath.Quat4d (q2);
tempQuat.inverse ();
this.mul (q1, tempQuat);
}, "javax.vecmath.Quat4d,javax.vecmath.Quat4d");
Clazz.defineMethod (c$, "mulInverse", 
function (q1) {
var tempQuat =  new javax.vecmath.Quat4d (q1);
tempQuat.inverse ();
this.mul (tempQuat);
}, "javax.vecmath.Quat4d");
Clazz.defineMethod (c$, "inverse", 
function (q1) {
var norm;
norm = 1.0 / (q1.w * q1.w + q1.x * q1.x + q1.y * q1.y + q1.z * q1.z);
this.w = norm * q1.w;
this.x = -norm * q1.x;
this.y = -norm * q1.y;
this.z = -norm * q1.z;
}, "javax.vecmath.Quat4d");
Clazz.defineMethod (c$, "inverse", 
function () {
var norm;
norm = 1.0 / (this.w * this.w + this.x * this.x + this.y * this.y + this.z * this.z);
this.w *= norm;
this.x *= -norm;
this.y *= -norm;
this.z *= -norm;
});
Clazz.defineMethod (c$, "normalize", 
function (q1) {
var norm;
norm = (q1.x * q1.x + q1.y * q1.y + q1.z * q1.z + q1.w * q1.w);
if (norm > 0.0) {
norm = 1.0 / Math.sqrt (norm);
this.x = norm * q1.x;
this.y = norm * q1.y;
this.z = norm * q1.z;
this.w = norm * q1.w;
} else {
this.x = 0.0;
this.y = 0.0;
this.z = 0.0;
this.w = 0.0;
}}, "javax.vecmath.Quat4d");
Clazz.defineMethod (c$, "normalize", 
function () {
var norm;
norm = (this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
if (norm > 0.0) {
norm = 1.0 / Math.sqrt (norm);
this.x *= norm;
this.y *= norm;
this.z *= norm;
this.w *= norm;
} else {
this.x = 0.0;
this.y = 0.0;
this.z = 0.0;
this.w = 0.0;
}});
Clazz.defineMethod (c$, "set", 
function (m1) {
var ww = 0.25 * (m1.m00 + m1.m11 + m1.m22 + m1.m33);
if (ww >= 0) {
if (ww >= 1.0E-30) {
this.w = Math.sqrt (ww);
ww = 0.25 / this.w;
this.x = ((m1.m21 - m1.m12) * ww);
this.y = ((m1.m02 - m1.m20) * ww);
this.z = ((m1.m10 - m1.m01) * ww);
return ;
}} else {
this.w = 0;
this.x = 0;
this.y = 0;
this.z = 1;
return ;
}this.w = 0;
ww = -0.5 * (m1.m11 + m1.m22);
if (ww >= 0) {
if (ww >= 1.0E-30) {
this.x = Math.sqrt (ww);
ww = 1.0 / (2.0 * this.x);
this.y = (m1.m10 * ww);
this.z = (m1.m20 * ww);
return ;
}} else {
this.x = 0;
this.y = 0;
this.z = 1;
return ;
}this.x = 0;
ww = 0.5 * (1.0 - m1.m22);
if (ww >= 1.0E-30) {
this.y = Math.sqrt (ww);
this.z = (m1.m21) / (2.0 * this.y);
return ;
}this.y = 0;
this.z = 1;
}, "javax.vecmath.Matrix4f");
Clazz.defineMethod (c$, "set", 
function (m1) {
var ww = 0.25 * (m1.m00 + m1.m11 + m1.m22 + m1.m33);
if (ww >= 0) {
if (ww >= 1.0E-30) {
this.w = Math.sqrt (ww);
ww = 0.25 / this.w;
this.x = (m1.m21 - m1.m12) * ww;
this.y = (m1.m02 - m1.m20) * ww;
this.z = (m1.m10 - m1.m01) * ww;
return ;
}} else {
this.w = 0;
this.x = 0;
this.y = 0;
this.z = 1;
return ;
}this.w = 0;
ww = -0.5 * (m1.m11 + m1.m22);
if (ww >= 0) {
if (ww >= 1.0E-30) {
this.x = Math.sqrt (ww);
ww = 0.5 / this.x;
this.y = m1.m10 * ww;
this.z = m1.m20 * ww;
return ;
}} else {
this.x = 0;
this.y = 0;
this.z = 1;
return ;
}this.x = 0.0;
ww = 0.5 * (1.0 - m1.m22);
if (ww >= 1.0E-30) {
this.y = Math.sqrt (ww);
this.z = m1.m21 / (2.0 * this.y);
return ;
}this.y = 0;
this.z = 1;
}, "javax.vecmath.Matrix4d");
Clazz.defineMethod (c$, "set", 
function (m1) {
var ww = 0.25 * (m1.m00 + m1.m11 + m1.m22 + 1.0);
if (ww >= 0) {
if (ww >= 1.0E-30) {
this.w = Math.sqrt (ww);
ww = 0.25 / this.w;
this.x = ((m1.m21 - m1.m12) * ww);
this.y = ((m1.m02 - m1.m20) * ww);
this.z = ((m1.m10 - m1.m01) * ww);
return ;
}} else {
this.w = 0;
this.x = 0;
this.y = 0;
this.z = 1;
return ;
}this.w = 0;
ww = -0.5 * (m1.m11 + m1.m22);
if (ww >= 0) {
if (ww >= 1.0E-30) {
this.x = Math.sqrt (ww);
ww = 0.5 / this.x;
this.y = (m1.m10 * ww);
this.z = (m1.m20 * ww);
return ;
}} else {
this.x = 0;
this.y = 0;
this.z = 1;
return ;
}this.x = 0;
ww = 0.5 * (1.0 - m1.m22);
if (ww >= 1.0E-30) {
this.y = Math.sqrt (ww);
this.z = (m1.m21 / (2.0 * this.y));
}this.y = 0;
this.z = 1;
}, "javax.vecmath.Matrix3f");
Clazz.defineMethod (c$, "set", 
function (m1) {
var ww = 0.25 * (m1.m00 + m1.m11 + m1.m22 + 1.0);
if (ww >= 0) {
if (ww >= 1.0E-30) {
this.w = Math.sqrt (ww);
ww = 0.25 / this.w;
this.x = (m1.m21 - m1.m12) * ww;
this.y = (m1.m02 - m1.m20) * ww;
this.z = (m1.m10 - m1.m01) * ww;
return ;
}} else {
this.w = 0;
this.x = 0;
this.y = 0;
this.z = 1;
return ;
}this.w = 0;
ww = -0.5 * (m1.m11 + m1.m22);
if (ww >= 0) {
if (ww >= 1.0E-30) {
this.x = Math.sqrt (ww);
ww = 0.5 / this.x;
this.y = m1.m10 * ww;
this.z = m1.m20 * ww;
return ;
}} else {
this.x = 0;
this.y = 0;
this.z = 1;
return ;
}this.x = 0;
ww = 0.5 * (1.0 - m1.m22);
if (ww >= 1.0E-30) {
this.y = Math.sqrt (ww);
this.z = m1.m21 / (2.0 * this.y);
return ;
}this.y = 0;
this.z = 1;
}, "javax.vecmath.Matrix3d");
Clazz.defineMethod (c$, "set", 
function (a) {
var mag;
var amag;
amag = Math.sqrt (a.x * a.x + a.y * a.y + a.z * a.z);
if (amag < 1.0E-12) {
this.w = 0.0;
this.x = 0.0;
this.y = 0.0;
this.z = 0.0;
} else {
mag = Math.sin (a.angle / 2.0);
amag = 1.0 / amag;
this.w = Math.cos (a.angle / 2.0);
this.x = a.x * amag * mag;
this.y = a.y * amag * mag;
this.z = a.z * amag * mag;
}}, "javax.vecmath.AxisAngle4f");
Clazz.defineMethod (c$, "set", 
function (a) {
var mag;
var amag;
amag = Math.sqrt (a.x * a.x + a.y * a.y + a.z * a.z);
if (amag < 1.0E-12) {
this.w = 0.0;
this.x = 0.0;
this.y = 0.0;
this.z = 0.0;
} else {
amag = 1.0 / amag;
mag = Math.sin (a.angle / 2.0);
this.w = Math.cos (a.angle / 2.0);
this.x = a.x * amag * mag;
this.y = a.y * amag * mag;
this.z = a.z * amag * mag;
}}, "javax.vecmath.AxisAngle4d");
Clazz.defineMethod (c$, "interpolate", 
function (q1, alpha) {
var dot;
var s1;
var s2;
var om;
var sinom;
dot = this.x * q1.x + this.y * q1.y + this.z * q1.z + this.w * q1.w;
if (dot < 0) {
q1.x = -q1.x;
q1.y = -q1.y;
q1.z = -q1.z;
q1.w = -q1.w;
dot = -dot;
}if ((1.0 - dot) > 1.0E-12) {
om = Math.acos (dot);
sinom = Math.sin (om);
s1 = Math.sin ((1.0 - alpha) * om) / sinom;
s2 = Math.sin (alpha * om) / sinom;
} else {
s1 = 1.0 - alpha;
s2 = alpha;
}this.w = s1 * this.w + s2 * q1.w;
this.x = s1 * this.x + s2 * q1.x;
this.y = s1 * this.y + s2 * q1.y;
this.z = s1 * this.z + s2 * q1.z;
}, "javax.vecmath.Quat4d,~N");
Clazz.defineMethod (c$, "interpolate", 
function (q1, q2, alpha) {
var dot;
var s1;
var s2;
var om;
var sinom;
dot = q2.x * q1.x + q2.y * q1.y + q2.z * q1.z + q2.w * q1.w;
if (dot < 0) {
q1.x = -q1.x;
q1.y = -q1.y;
q1.z = -q1.z;
q1.w = -q1.w;
dot = -dot;
}if ((1.0 - dot) > 1.0E-12) {
om = Math.acos (dot);
sinom = Math.sin (om);
s1 = Math.sin ((1.0 - alpha) * om) / sinom;
s2 = Math.sin (alpha * om) / sinom;
} else {
s1 = 1.0 - alpha;
s2 = alpha;
}this.w = s1 * q1.w + s2 * q2.w;
this.x = s1 * q1.x + s2 * q2.x;
this.y = s1 * q1.y + s2 * q2.y;
this.z = s1 * q1.z + s2 * q2.z;
}, "javax.vecmath.Quat4d,javax.vecmath.Quat4d,~N");
Clazz.defineStatics (c$,
"EPS", 1.0e-12,
"EPS2", 1.0e-30,
"PIO2", 1.57079632679);
});
