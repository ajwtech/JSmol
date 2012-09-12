Clazz.declarePackage ("javax.vecmath");
Clazz.load (null, "javax.vecmath.AxisAngle4f", ["java.lang.InternalError", "javax.vecmath.Matrix3d", "$.Matrix3f", "$.VecMathUtil"], function () {
c$ = Clazz.decorateAsClass (function () {
this.x = 0;
this.y = 0;
this.z = 0;
this.angle = 0;
Clazz.instantialize (this, arguments);
}, javax.vecmath, "AxisAngle4f", null, [java.io.Serializable, Cloneable]);
Clazz.makeConstructor (c$, 
function (x, y, z, angle) {
this.x = x;
this.y = y;
this.z = z;
this.angle = angle;
}, "~N,~N,~N,~N");
Clazz.makeConstructor (c$, 
function (a) {
this.x = a[0];
this.y = a[1];
this.z = a[2];
this.angle = a[3];
}, "~A");
Clazz.makeConstructor (c$, 
function (a1) {
this.x = a1.x;
this.y = a1.y;
this.z = a1.z;
this.angle = a1.angle;
}, "javax.vecmath.AxisAngle4f");
Clazz.makeConstructor (c$, 
function (a1) {
this.x = a1.x;
this.y = a1.y;
this.z = a1.z;
this.angle = a1.angle;
}, "javax.vecmath.AxisAngle4d");
Clazz.makeConstructor (c$, 
function (axis, angle) {
this.x = axis.x;
this.y = axis.y;
this.z = axis.z;
this.angle = angle;
}, "javax.vecmath.Vector3f,~N");
Clazz.makeConstructor (c$, 
function () {
this.x = 0.0;
this.y = 0.0;
this.z = 1.0;
this.angle = 0.0;
});
Clazz.defineMethod (c$, "set", 
function (x, y, z, angle) {
this.x = x;
this.y = y;
this.z = z;
this.angle = angle;
}, "~N,~N,~N,~N");
Clazz.defineMethod (c$, "set", 
function (a) {
this.x = a[0];
this.y = a[1];
this.z = a[2];
this.angle = a[3];
}, "~A");
Clazz.defineMethod (c$, "set", 
function (a1) {
this.x = a1.x;
this.y = a1.y;
this.z = a1.z;
this.angle = a1.angle;
}, "javax.vecmath.AxisAngle4f");
Clazz.defineMethod (c$, "set", 
function (a1) {
this.x = a1.x;
this.y = a1.y;
this.z = a1.z;
this.angle = a1.angle;
}, "javax.vecmath.AxisAngle4d");
Clazz.defineMethod (c$, "set", 
function (axis, angle) {
this.x = axis.x;
this.y = axis.y;
this.z = axis.z;
this.angle = angle;
}, "javax.vecmath.Vector3f,~N");
Clazz.defineMethod (c$, "get", 
function (a) {
a[0] = this.x;
a[1] = this.y;
a[2] = this.z;
a[3] = this.angle;
}, "~A");
Clazz.defineMethod (c$, "set", 
function (q1) {
var mag = q1.x * q1.x + q1.y * q1.y + q1.z * q1.z;
if (mag > 1.0E-6) {
mag = Math.sqrt (mag);
var invMag = 1.0 / mag;
this.x = (q1.x * invMag);
this.y = (q1.y * invMag);
this.z = (q1.z * invMag);
this.angle = (2.0 * Math.atan2 (mag, q1.w));
} else {
this.x = 0.0;
this.y = 1.0;
this.z = 0.0;
this.angle = 0.0;
}}, "javax.vecmath.Quat4f");
Clazz.defineMethod (c$, "set", 
function (q1) {
var mag = q1.x * q1.x + q1.y * q1.y + q1.z * q1.z;
if (mag > 1.0E-6) {
mag = Math.sqrt (mag);
var invMag = 1.0 / mag;
this.x = (q1.x * invMag);
this.y = (q1.y * invMag);
this.z = (q1.z * invMag);
this.angle = (2.0 * Math.atan2 (mag, q1.w));
} else {
this.x = 0.0;
this.y = 1.0;
this.z = 0.0;
this.angle = 0.0;
}}, "javax.vecmath.Quat4d");
Clazz.defineMethod (c$, "set", 
function (m1) {
var m3f =  new javax.vecmath.Matrix3f ();
m1.get (m3f);
this.x = m3f.m21 - m3f.m12;
this.y = m3f.m02 - m3f.m20;
this.z = m3f.m10 - m3f.m01;
var mag = this.x * this.x + this.y * this.y + this.z * this.z;
if (mag > 1.0E-6) {
mag = Math.sqrt (mag);
var sin = 0.5 * mag;
var cos = 0.5 * (m3f.m00 + m3f.m11 + m3f.m22 - 1.0);
this.angle = Math.atan2 (sin, cos);
var invMag = 1.0 / mag;
this.x = (this.x * invMag);
this.y = (this.y * invMag);
this.z = (this.z * invMag);
} else {
this.x = 0.0;
this.y = 1.0;
this.z = 0.0;
this.angle = 0.0;
}}, "javax.vecmath.Matrix4f");
Clazz.defineMethod (c$, "set", 
function (m1) {
var m3d =  new javax.vecmath.Matrix3d ();
m1.get (m3d);
this.x = (m3d.m21 - m3d.m12);
this.y = (m3d.m02 - m3d.m20);
this.z = (m3d.m10 - m3d.m01);
var mag = this.x * this.x + this.y * this.y + this.z * this.z;
if (mag > 1.0E-6) {
mag = Math.sqrt (mag);
var sin = 0.5 * mag;
var cos = 0.5 * (m3d.m00 + m3d.m11 + m3d.m22 - 1.0);
this.angle = Math.atan2 (sin, cos);
var invMag = 1.0 / mag;
this.x = (this.x * invMag);
this.y = (this.y * invMag);
this.z = (this.z * invMag);
} else {
this.x = 0.0;
this.y = 1.0;
this.z = 0.0;
this.angle = 0.0;
}}, "javax.vecmath.Matrix4d");
Clazz.defineMethod (c$, "set", 
function (m1) {
this.x = (m1.m21 - m1.m12);
this.y = (m1.m02 - m1.m20);
this.z = (m1.m10 - m1.m01);
var mag = this.x * this.x + this.y * this.y + this.z * this.z;
if (mag > 1.0E-6) {
mag = Math.sqrt (mag);
var sin = 0.5 * mag;
var cos = 0.5 * (m1.m00 + m1.m11 + m1.m22 - 1.0);
this.angle = Math.atan2 (sin, cos);
var invMag = 1.0 / mag;
this.x = (this.x * invMag);
this.y = (this.y * invMag);
this.z = (this.z * invMag);
} else {
this.x = 0.0;
this.y = 1.0;
this.z = 0.0;
this.angle = 0.0;
}}, "javax.vecmath.Matrix3f");
Clazz.defineMethod (c$, "set", 
function (m1) {
this.x = (m1.m21 - m1.m12);
this.y = (m1.m02 - m1.m20);
this.z = (m1.m10 - m1.m01);
var mag = this.x * this.x + this.y * this.y + this.z * this.z;
if (mag > 1.0E-6) {
mag = Math.sqrt (mag);
var sin = 0.5 * mag;
var cos = 0.5 * (m1.m00 + m1.m11 + m1.m22 - 1.0);
this.angle = Math.atan2 (sin, cos);
var invMag = 1.0 / mag;
this.x = (this.x * invMag);
this.y = (this.y * invMag);
this.z = (this.z * invMag);
} else {
this.x = 0.0;
this.y = 1.0;
this.z = 0.0;
this.angle = 0.0;
}}, "javax.vecmath.Matrix3d");
Clazz.overrideMethod (c$, "toString", 
function () {
return "(" + this.x + ", " + this.y + ", " + this.z + ", " + this.angle + ")";
});
Clazz.defineMethod (c$, "equals", 
function (a1) {
try {
return (this.x == a1.x && this.y == a1.y && this.z == a1.z && this.angle == a1.angle);
} catch (e2) {
if (Clazz.exceptionOf (e2, NullPointerException)) {
return false;
} else {
throw e2;
}
}
}, "javax.vecmath.AxisAngle4f");
Clazz.defineMethod (c$, "equals", 
function (o1) {
try {
var a2 = o1;
return (this.x == a2.x && this.y == a2.y && this.z == a2.z && this.angle == a2.angle);
} catch (e$$) {
if (Clazz.exceptionOf (e$$, NullPointerException)) {
var e2 = e$$;
{
return false;
}
} else if (Clazz.exceptionOf (e$$, ClassCastException)) {
var e1 = e$$;
{
return false;
}
} else {
throw e$$;
}
}
}, "~O");
Clazz.defineMethod (c$, "epsilonEquals", 
function (a1, epsilon) {
var diff;
diff = this.x - a1.x;
if ((diff < 0 ? -diff : diff) > epsilon) return false;
diff = this.y - a1.y;
if ((diff < 0 ? -diff : diff) > epsilon) return false;
diff = this.z - a1.z;
if ((diff < 0 ? -diff : diff) > epsilon) return false;
diff = this.angle - a1.angle;
if ((diff < 0 ? -diff : diff) > epsilon) return false;
return true;
}, "javax.vecmath.AxisAngle4f,~N");
Clazz.overrideMethod (c$, "hashCode", 
function () {
var bits = 1;
bits = 31 * bits + javax.vecmath.VecMathUtil.floatToIntBits (this.x);
bits = 31 * bits + javax.vecmath.VecMathUtil.floatToIntBits (this.y);
bits = 31 * bits + javax.vecmath.VecMathUtil.floatToIntBits (this.z);
bits = 31 * bits + javax.vecmath.VecMathUtil.floatToIntBits (this.angle);
return (bits ^ (bits >> 32));
});
Clazz.defineMethod (c$, "clone", 
function () {
try {
return Clazz.superCall (this, javax.vecmath.AxisAngle4f, "clone", []);
} catch (e) {
if (Clazz.exceptionOf (e, CloneNotSupportedException)) {
throw  new InternalError ();
} else {
throw e;
}
}
});
Clazz.defineMethod (c$, "getAngle", 
function () {
return this.angle;
});
Clazz.defineMethod (c$, "setAngle", 
function (angle) {
this.angle = angle;
}, "~N");
Clazz.defineMethod (c$, "getX", 
function () {
return this.x;
});
Clazz.defineMethod (c$, "setX", 
function (x) {
this.x = x;
}, "~N");
Clazz.defineMethod (c$, "getY", 
function () {
return this.y;
});
Clazz.defineMethod (c$, "setY", 
function (y) {
this.y = y;
}, "~N");
Clazz.defineMethod (c$, "getZ", 
function () {
return this.z;
});
Clazz.defineMethod (c$, "setZ", 
function (z) {
this.z = z;
}, "~N");
Clazz.defineStatics (c$,
"EPS", 0.000001);
});
