Clazz.declarePackage ("javax.vecmath");
Clazz.load (null, "javax.vecmath.Matrix3d", ["java.lang.ArrayIndexOutOfBoundsException", "$.InternalError", "$.RuntimeException", "javax.vecmath.SingularMatrixException", "$.VecMathI18N", "$.VecMathUtil"], function () {
c$ = Clazz.decorateAsClass (function () {
this.m00 = 0;
this.m01 = 0;
this.m02 = 0;
this.m10 = 0;
this.m11 = 0;
this.m12 = 0;
this.m20 = 0;
this.m21 = 0;
this.m22 = 0;
Clazz.instantialize (this, arguments);
}, javax.vecmath, "Matrix3d", null, [java.io.Serializable, Cloneable]);
Clazz.makeConstructor (c$, 
function (m00, m01, m02, m10, m11, m12, m20, m21, m22) {
this.m00 = m00;
this.m01 = m01;
this.m02 = m02;
this.m10 = m10;
this.m11 = m11;
this.m12 = m12;
this.m20 = m20;
this.m21 = m21;
this.m22 = m22;
}, "~N,~N,~N,~N,~N,~N,~N,~N,~N");
Clazz.makeConstructor (c$, 
function (v) {
this.m00 = v[0];
this.m01 = v[1];
this.m02 = v[2];
this.m10 = v[3];
this.m11 = v[4];
this.m12 = v[5];
this.m20 = v[6];
this.m21 = v[7];
this.m22 = v[8];
}, "~A");
Clazz.makeConstructor (c$, 
function (m1) {
this.m00 = m1.m00;
this.m01 = m1.m01;
this.m02 = m1.m02;
this.m10 = m1.m10;
this.m11 = m1.m11;
this.m12 = m1.m12;
this.m20 = m1.m20;
this.m21 = m1.m21;
this.m22 = m1.m22;
}, "javax.vecmath.Matrix3d");
Clazz.makeConstructor (c$, 
function (m1) {
this.m00 = m1.m00;
this.m01 = m1.m01;
this.m02 = m1.m02;
this.m10 = m1.m10;
this.m11 = m1.m11;
this.m12 = m1.m12;
this.m20 = m1.m20;
this.m21 = m1.m21;
this.m22 = m1.m22;
}, "javax.vecmath.Matrix3f");
Clazz.makeConstructor (c$, 
function () {
this.m00 = 0.0;
this.m01 = 0.0;
this.m02 = 0.0;
this.m10 = 0.0;
this.m11 = 0.0;
this.m12 = 0.0;
this.m20 = 0.0;
this.m21 = 0.0;
this.m22 = 0.0;
});
Clazz.overrideMethod (c$, "toString", 
function () {
return this.m00 + ", " + this.m01 + ", " + this.m02 + "\n" + this.m10 + ", " + this.m11 + ", " + this.m12 + "\n" + this.m20 + ", " + this.m21 + ", " + this.m22 + "\n";
});
Clazz.defineMethod (c$, "setIdentity", 
function () {
this.m00 = 1.0;
this.m01 = 0.0;
this.m02 = 0.0;
this.m10 = 0.0;
this.m11 = 1.0;
this.m12 = 0.0;
this.m20 = 0.0;
this.m21 = 0.0;
this.m22 = 1.0;
});
Clazz.defineMethod (c$, "setScale", 
function (scale) {
var tmp_rot =  Clazz.newArray (9, 0);
var tmp_scale =  Clazz.newArray (3, 0);
this.getScaleRotate (tmp_scale, tmp_rot);
this.m00 = tmp_rot[0] * scale;
this.m01 = tmp_rot[1] * scale;
this.m02 = tmp_rot[2] * scale;
this.m10 = tmp_rot[3] * scale;
this.m11 = tmp_rot[4] * scale;
this.m12 = tmp_rot[5] * scale;
this.m20 = tmp_rot[6] * scale;
this.m21 = tmp_rot[7] * scale;
this.m22 = tmp_rot[8] * scale;
}, "~N");
Clazz.defineMethod (c$, "setElement", 
function (row, column, value) {
switch (row) {
case 0:
switch (column) {
case 0:
this.m00 = value;
break;
case 1:
this.m01 = value;
break;
case 2:
this.m02 = value;
break;
default:
throw  new ArrayIndexOutOfBoundsException (javax.vecmath.VecMathI18N.getString ("Matrix3d0"));
}
break;
case 1:
switch (column) {
case 0:
this.m10 = value;
break;
case 1:
this.m11 = value;
break;
case 2:
this.m12 = value;
break;
default:
throw  new ArrayIndexOutOfBoundsException (javax.vecmath.VecMathI18N.getString ("Matrix3d0"));
}
break;
case 2:
switch (column) {
case 0:
this.m20 = value;
break;
case 1:
this.m21 = value;
break;
case 2:
this.m22 = value;
break;
default:
throw  new ArrayIndexOutOfBoundsException (javax.vecmath.VecMathI18N.getString ("Matrix3d0"));
}
break;
default:
throw  new ArrayIndexOutOfBoundsException (javax.vecmath.VecMathI18N.getString ("Matrix3d0"));
}
}, "~N,~N,~N");
Clazz.defineMethod (c$, "getElement", 
function (row, column) {
switch (row) {
case 0:
switch (column) {
case 0:
return (this.m00);
case 1:
return (this.m01);
case 2:
return (this.m02);
default:
break;
}
break;
case 1:
switch (column) {
case 0:
return (this.m10);
case 1:
return (this.m11);
case 2:
return (this.m12);
default:
break;
}
break;
case 2:
switch (column) {
case 0:
return (this.m20);
case 1:
return (this.m21);
case 2:
return (this.m22);
default:
break;
}
break;
default:
break;
}
throw  new ArrayIndexOutOfBoundsException (javax.vecmath.VecMathI18N.getString ("Matrix3d1"));
}, "~N,~N");
Clazz.defineMethod (c$, "getRow", 
function (row, v) {
if (row == 0) {
v.x = this.m00;
v.y = this.m01;
v.z = this.m02;
} else if (row == 1) {
v.x = this.m10;
v.y = this.m11;
v.z = this.m12;
} else if (row == 2) {
v.x = this.m20;
v.y = this.m21;
v.z = this.m22;
} else {
throw  new ArrayIndexOutOfBoundsException (javax.vecmath.VecMathI18N.getString ("Matrix3d2"));
}}, "~N,javax.vecmath.Vector3d");
Clazz.defineMethod (c$, "getRow", 
function (row, v) {
if (row == 0) {
v[0] = this.m00;
v[1] = this.m01;
v[2] = this.m02;
} else if (row == 1) {
v[0] = this.m10;
v[1] = this.m11;
v[2] = this.m12;
} else if (row == 2) {
v[0] = this.m20;
v[1] = this.m21;
v[2] = this.m22;
} else {
throw  new ArrayIndexOutOfBoundsException (javax.vecmath.VecMathI18N.getString ("Matrix3d2"));
}}, "~N,~A");
Clazz.defineMethod (c$, "getColumn", 
function (column, v) {
if (column == 0) {
v.x = this.m00;
v.y = this.m10;
v.z = this.m20;
} else if (column == 1) {
v.x = this.m01;
v.y = this.m11;
v.z = this.m21;
} else if (column == 2) {
v.x = this.m02;
v.y = this.m12;
v.z = this.m22;
} else {
throw  new ArrayIndexOutOfBoundsException (javax.vecmath.VecMathI18N.getString ("Matrix3d4"));
}}, "~N,javax.vecmath.Vector3d");
Clazz.defineMethod (c$, "getColumn", 
function (column, v) {
if (column == 0) {
v[0] = this.m00;
v[1] = this.m10;
v[2] = this.m20;
} else if (column == 1) {
v[0] = this.m01;
v[1] = this.m11;
v[2] = this.m21;
} else if (column == 2) {
v[0] = this.m02;
v[1] = this.m12;
v[2] = this.m22;
} else {
throw  new ArrayIndexOutOfBoundsException (javax.vecmath.VecMathI18N.getString ("Matrix3d4"));
}}, "~N,~A");
Clazz.defineMethod (c$, "setRow", 
function (row, x, y, z) {
switch (row) {
case 0:
this.m00 = x;
this.m01 = y;
this.m02 = z;
break;
case 1:
this.m10 = x;
this.m11 = y;
this.m12 = z;
break;
case 2:
this.m20 = x;
this.m21 = y;
this.m22 = z;
break;
default:
throw  new ArrayIndexOutOfBoundsException (javax.vecmath.VecMathI18N.getString ("Matrix3d6"));
}
}, "~N,~N,~N,~N");
Clazz.defineMethod (c$, "setRow", 
function (row, v) {
switch (row) {
case 0:
this.m00 = v.x;
this.m01 = v.y;
this.m02 = v.z;
break;
case 1:
this.m10 = v.x;
this.m11 = v.y;
this.m12 = v.z;
break;
case 2:
this.m20 = v.x;
this.m21 = v.y;
this.m22 = v.z;
break;
default:
throw  new ArrayIndexOutOfBoundsException (javax.vecmath.VecMathI18N.getString ("Matrix3d6"));
}
}, "~N,javax.vecmath.Vector3d");
Clazz.defineMethod (c$, "setRow", 
function (row, v) {
switch (row) {
case 0:
this.m00 = v[0];
this.m01 = v[1];
this.m02 = v[2];
break;
case 1:
this.m10 = v[0];
this.m11 = v[1];
this.m12 = v[2];
break;
case 2:
this.m20 = v[0];
this.m21 = v[1];
this.m22 = v[2];
break;
default:
throw  new ArrayIndexOutOfBoundsException (javax.vecmath.VecMathI18N.getString ("Matrix3d6"));
}
}, "~N,~A");
Clazz.defineMethod (c$, "setColumn", 
function (column, x, y, z) {
switch (column) {
case 0:
this.m00 = x;
this.m10 = y;
this.m20 = z;
break;
case 1:
this.m01 = x;
this.m11 = y;
this.m21 = z;
break;
case 2:
this.m02 = x;
this.m12 = y;
this.m22 = z;
break;
default:
throw  new ArrayIndexOutOfBoundsException (javax.vecmath.VecMathI18N.getString ("Matrix3d9"));
}
}, "~N,~N,~N,~N");
Clazz.defineMethod (c$, "setColumn", 
function (column, v) {
switch (column) {
case 0:
this.m00 = v.x;
this.m10 = v.y;
this.m20 = v.z;
break;
case 1:
this.m01 = v.x;
this.m11 = v.y;
this.m21 = v.z;
break;
case 2:
this.m02 = v.x;
this.m12 = v.y;
this.m22 = v.z;
break;
default:
throw  new ArrayIndexOutOfBoundsException (javax.vecmath.VecMathI18N.getString ("Matrix3d9"));
}
}, "~N,javax.vecmath.Vector3d");
Clazz.defineMethod (c$, "setColumn", 
function (column, v) {
switch (column) {
case 0:
this.m00 = v[0];
this.m10 = v[1];
this.m20 = v[2];
break;
case 1:
this.m01 = v[0];
this.m11 = v[1];
this.m21 = v[2];
break;
case 2:
this.m02 = v[0];
this.m12 = v[1];
this.m22 = v[2];
break;
default:
throw  new ArrayIndexOutOfBoundsException (javax.vecmath.VecMathI18N.getString ("Matrix3d9"));
}
}, "~N,~A");
Clazz.defineMethod (c$, "getScale", 
function () {
var tmp_scale =  Clazz.newArray (3, 0);
var tmp_rot =  Clazz.newArray (9, 0);
this.getScaleRotate (tmp_scale, tmp_rot);
return (javax.vecmath.Matrix3d.max3 (tmp_scale));
});
Clazz.defineMethod (c$, "add", 
function (scalar) {
this.m00 += scalar;
this.m01 += scalar;
this.m02 += scalar;
this.m10 += scalar;
this.m11 += scalar;
this.m12 += scalar;
this.m20 += scalar;
this.m21 += scalar;
this.m22 += scalar;
}, "~N");
Clazz.defineMethod (c$, "add", 
function (scalar, m1) {
this.m00 = m1.m00 + scalar;
this.m01 = m1.m01 + scalar;
this.m02 = m1.m02 + scalar;
this.m10 = m1.m10 + scalar;
this.m11 = m1.m11 + scalar;
this.m12 = m1.m12 + scalar;
this.m20 = m1.m20 + scalar;
this.m21 = m1.m21 + scalar;
this.m22 = m1.m22 + scalar;
}, "~N,javax.vecmath.Matrix3d");
Clazz.defineMethod (c$, "add", 
function (m1, m2) {
this.m00 = m1.m00 + m2.m00;
this.m01 = m1.m01 + m2.m01;
this.m02 = m1.m02 + m2.m02;
this.m10 = m1.m10 + m2.m10;
this.m11 = m1.m11 + m2.m11;
this.m12 = m1.m12 + m2.m12;
this.m20 = m1.m20 + m2.m20;
this.m21 = m1.m21 + m2.m21;
this.m22 = m1.m22 + m2.m22;
}, "javax.vecmath.Matrix3d,javax.vecmath.Matrix3d");
Clazz.defineMethod (c$, "add", 
function (m1) {
this.m00 += m1.m00;
this.m01 += m1.m01;
this.m02 += m1.m02;
this.m10 += m1.m10;
this.m11 += m1.m11;
this.m12 += m1.m12;
this.m20 += m1.m20;
this.m21 += m1.m21;
this.m22 += m1.m22;
}, "javax.vecmath.Matrix3d");
Clazz.defineMethod (c$, "sub", 
function (m1, m2) {
this.m00 = m1.m00 - m2.m00;
this.m01 = m1.m01 - m2.m01;
this.m02 = m1.m02 - m2.m02;
this.m10 = m1.m10 - m2.m10;
this.m11 = m1.m11 - m2.m11;
this.m12 = m1.m12 - m2.m12;
this.m20 = m1.m20 - m2.m20;
this.m21 = m1.m21 - m2.m21;
this.m22 = m1.m22 - m2.m22;
}, "javax.vecmath.Matrix3d,javax.vecmath.Matrix3d");
Clazz.defineMethod (c$, "sub", 
function (m1) {
this.m00 -= m1.m00;
this.m01 -= m1.m01;
this.m02 -= m1.m02;
this.m10 -= m1.m10;
this.m11 -= m1.m11;
this.m12 -= m1.m12;
this.m20 -= m1.m20;
this.m21 -= m1.m21;
this.m22 -= m1.m22;
}, "javax.vecmath.Matrix3d");
Clazz.defineMethod (c$, "transpose", 
function () {
var temp;
temp = this.m10;
this.m10 = this.m01;
this.m01 = temp;
temp = this.m20;
this.m20 = this.m02;
this.m02 = temp;
temp = this.m21;
this.m21 = this.m12;
this.m12 = temp;
});
Clazz.defineMethod (c$, "transpose", 
function (m1) {
if (this !== m1) {
this.m00 = m1.m00;
this.m01 = m1.m10;
this.m02 = m1.m20;
this.m10 = m1.m01;
this.m11 = m1.m11;
this.m12 = m1.m21;
this.m20 = m1.m02;
this.m21 = m1.m12;
this.m22 = m1.m22;
} else this.transpose ();
}, "javax.vecmath.Matrix3d");
Clazz.defineMethod (c$, "set", 
function (q1) {
this.m00 = (1.0 - 2.0 * q1.y * q1.y - 2.0 * q1.z * q1.z);
this.m10 = (2.0 * (q1.x * q1.y + q1.w * q1.z));
this.m20 = (2.0 * (q1.x * q1.z - q1.w * q1.y));
this.m01 = (2.0 * (q1.x * q1.y - q1.w * q1.z));
this.m11 = (1.0 - 2.0 * q1.x * q1.x - 2.0 * q1.z * q1.z);
this.m21 = (2.0 * (q1.y * q1.z + q1.w * q1.x));
this.m02 = (2.0 * (q1.x * q1.z + q1.w * q1.y));
this.m12 = (2.0 * (q1.y * q1.z - q1.w * q1.x));
this.m22 = (1.0 - 2.0 * q1.x * q1.x - 2.0 * q1.y * q1.y);
}, "javax.vecmath.Quat4d");
Clazz.defineMethod (c$, "set", 
function (a1) {
var mag = Math.sqrt (a1.x * a1.x + a1.y * a1.y + a1.z * a1.z);
if (mag < 1.110223024E-16) {
this.m00 = 1.0;
this.m01 = 0.0;
this.m02 = 0.0;
this.m10 = 0.0;
this.m11 = 1.0;
this.m12 = 0.0;
this.m20 = 0.0;
this.m21 = 0.0;
this.m22 = 1.0;
} else {
mag = 1.0 / mag;
var ax = a1.x * mag;
var ay = a1.y * mag;
var az = a1.z * mag;
var sinTheta = Math.sin (a1.angle);
var cosTheta = Math.cos (a1.angle);
var t = 1.0 - cosTheta;
var xz = ax * az;
var xy = ax * ay;
var yz = ay * az;
this.m00 = t * ax * ax + cosTheta;
this.m01 = t * xy - sinTheta * az;
this.m02 = t * xz + sinTheta * ay;
this.m10 = t * xy + sinTheta * az;
this.m11 = t * ay * ay + cosTheta;
this.m12 = t * yz - sinTheta * ax;
this.m20 = t * xz - sinTheta * ay;
this.m21 = t * yz + sinTheta * ax;
this.m22 = t * az * az + cosTheta;
}}, "javax.vecmath.AxisAngle4d");
Clazz.defineMethod (c$, "set", 
function (q1) {
this.m00 = (1.0 - 2.0 * q1.y * q1.y - 2.0 * q1.z * q1.z);
this.m10 = (2.0 * (q1.x * q1.y + q1.w * q1.z));
this.m20 = (2.0 * (q1.x * q1.z - q1.w * q1.y));
this.m01 = (2.0 * (q1.x * q1.y - q1.w * q1.z));
this.m11 = (1.0 - 2.0 * q1.x * q1.x - 2.0 * q1.z * q1.z);
this.m21 = (2.0 * (q1.y * q1.z + q1.w * q1.x));
this.m02 = (2.0 * (q1.x * q1.z + q1.w * q1.y));
this.m12 = (2.0 * (q1.y * q1.z - q1.w * q1.x));
this.m22 = (1.0 - 2.0 * q1.x * q1.x - 2.0 * q1.y * q1.y);
}, "javax.vecmath.Quat4f");
Clazz.defineMethod (c$, "set", 
function (a1) {
var mag = Math.sqrt (a1.x * a1.x + a1.y * a1.y + a1.z * a1.z);
if (mag < 1.110223024E-16) {
this.m00 = 1.0;
this.m01 = 0.0;
this.m02 = 0.0;
this.m10 = 0.0;
this.m11 = 1.0;
this.m12 = 0.0;
this.m20 = 0.0;
this.m21 = 0.0;
this.m22 = 1.0;
} else {
mag = 1.0 / mag;
var ax = a1.x * mag;
var ay = a1.y * mag;
var az = a1.z * mag;
var sinTheta = Math.sin (a1.angle);
var cosTheta = Math.cos (a1.angle);
var t = 1.0 - cosTheta;
var xz = ax * az;
var xy = ax * ay;
var yz = ay * az;
this.m00 = t * ax * ax + cosTheta;
this.m01 = t * xy - sinTheta * az;
this.m02 = t * xz + sinTheta * ay;
this.m10 = t * xy + sinTheta * az;
this.m11 = t * ay * ay + cosTheta;
this.m12 = t * yz - sinTheta * ax;
this.m20 = t * xz - sinTheta * ay;
this.m21 = t * yz + sinTheta * ax;
this.m22 = t * az * az + cosTheta;
}}, "javax.vecmath.AxisAngle4f");
Clazz.defineMethod (c$, "set", 
function (m1) {
this.m00 = m1.m00;
this.m01 = m1.m01;
this.m02 = m1.m02;
this.m10 = m1.m10;
this.m11 = m1.m11;
this.m12 = m1.m12;
this.m20 = m1.m20;
this.m21 = m1.m21;
this.m22 = m1.m22;
}, "javax.vecmath.Matrix3f");
Clazz.defineMethod (c$, "set", 
function (m1) {
this.m00 = m1.m00;
this.m01 = m1.m01;
this.m02 = m1.m02;
this.m10 = m1.m10;
this.m11 = m1.m11;
this.m12 = m1.m12;
this.m20 = m1.m20;
this.m21 = m1.m21;
this.m22 = m1.m22;
}, "javax.vecmath.Matrix3d");
Clazz.defineMethod (c$, "set", 
function (m) {
this.m00 = m[0];
this.m01 = m[1];
this.m02 = m[2];
this.m10 = m[3];
this.m11 = m[4];
this.m12 = m[5];
this.m20 = m[6];
this.m21 = m[7];
this.m22 = m[8];
}, "~A");
Clazz.defineMethod (c$, "invert", 
function (m1) {
this.invertGeneral (m1);
}, "javax.vecmath.Matrix3d");
Clazz.defineMethod (c$, "invert", 
function () {
this.invertGeneral (this);
});
Clazz.defineMethod (c$, "invertGeneral", 
($fz = function (m1) {
var result =  Clazz.newArray (9, 0);
var row_perm =  Clazz.newArray (3, 0);
var i;
var r;
var c;
var tmp =  Clazz.newArray (9, 0);
tmp[0] = m1.m00;
tmp[1] = m1.m01;
tmp[2] = m1.m02;
tmp[3] = m1.m10;
tmp[4] = m1.m11;
tmp[5] = m1.m12;
tmp[6] = m1.m20;
tmp[7] = m1.m21;
tmp[8] = m1.m22;
if (!javax.vecmath.Matrix3d.luDecomposition (tmp, row_perm)) {
throw  new javax.vecmath.SingularMatrixException (javax.vecmath.VecMathI18N.getString ("Matrix3d12"));
}for (i = 0; i < 9; i++) result[i] = 0.0;

result[0] = 1.0;
result[4] = 1.0;
result[8] = 1.0;
javax.vecmath.Matrix3d.luBacksubstitution (tmp, row_perm, result);
this.m00 = result[0];
this.m01 = result[1];
this.m02 = result[2];
this.m10 = result[3];
this.m11 = result[4];
this.m12 = result[5];
this.m20 = result[6];
this.m21 = result[7];
this.m22 = result[8];
}, $fz.isPrivate = true, $fz), "javax.vecmath.Matrix3d");
c$.luDecomposition = Clazz.defineMethod (c$, "luDecomposition", 
function (matrix0, row_perm) {
var row_scale =  Clazz.newArray (3, 0);
{
var i;
var j;
var ptr;
var rs;
var big;
var temp;
ptr = 0;
rs = 0;
i = 3;
while (i-- != 0) {
big = 0.0;
j = 3;
while (j-- != 0) {
temp = matrix0[ptr++];
temp = Math.abs (temp);
if (temp > big) {
big = temp;
}}
if (big == 0.0) {
return false;
}row_scale[rs++] = 1.0 / big;
}
}{
var j;
var mtx;
mtx = 0;
for (j = 0; j < 3; j++) {
var i;
var imax;
var k;
var target;
var p1;
var p2;
var sum;
var big;
var temp;
for (i = 0; i < j; i++) {
target = mtx + (3 * i) + j;
sum = matrix0[target];
k = i;
p1 = mtx + (3 * i);
p2 = mtx + j;
while (k-- != 0) {
sum -= matrix0[p1] * matrix0[p2];
p1++;
p2 += 3;
}
matrix0[target] = sum;
}
big = 0.0;
imax = -1;
for (i = j; i < 3; i++) {
target = mtx + (3 * i) + j;
sum = matrix0[target];
k = j;
p1 = mtx + (3 * i);
p2 = mtx + j;
while (k-- != 0) {
sum -= matrix0[p1] * matrix0[p2];
p1++;
p2 += 3;
}
matrix0[target] = sum;
if ((temp = row_scale[i] * Math.abs (sum)) >= big) {
big = temp;
imax = i;
}}
if (imax < 0) {
throw  new RuntimeException (javax.vecmath.VecMathI18N.getString ("Matrix3d13"));
}if (j != imax) {
k = 3;
p1 = mtx + (3 * imax);
p2 = mtx + (3 * j);
while (k-- != 0) {
temp = matrix0[p1];
matrix0[p1++] = matrix0[p2];
matrix0[p2++] = temp;
}
row_scale[imax] = row_scale[j];
}row_perm[j] = imax;
if (matrix0[(mtx + (3 * j) + j)] == 0.0) {
return false;
}if (j != (2)) {
temp = 1.0 / (matrix0[(mtx + (3 * j) + j)]);
target = mtx + (3 * (j + 1)) + j;
i = 2 - j;
while (i-- != 0) {
matrix0[target] *= temp;
target += 3;
}
}}
}return true;
}, "~A,~A");
c$.luBacksubstitution = Clazz.defineMethod (c$, "luBacksubstitution", 
function (matrix1, row_perm, matrix2) {
var i;
var ii;
var ip;
var j;
var k;
var rp;
var cv;
var rv;
rp = 0;
for (k = 0; k < 3; k++) {
cv = k;
ii = -1;
for (i = 0; i < 3; i++) {
var sum;
ip = row_perm[rp + i];
sum = matrix2[cv + 3 * ip];
matrix2[cv + 3 * ip] = matrix2[cv + 3 * i];
if (ii >= 0) {
rv = i * 3;
for (j = ii; j <= i - 1; j++) {
sum -= matrix1[rv + j] * matrix2[cv + 3 * j];
}
} else if (sum != 0.0) {
ii = i;
}matrix2[cv + 3 * i] = sum;
}
rv = 6;
matrix2[cv + 6] /= matrix1[rv + 2];
rv -= 3;
matrix2[cv + 3] = (matrix2[cv + 3] - matrix1[rv + 2] * matrix2[cv + 6]) / matrix1[rv + 1];
rv -= 3;
matrix2[cv + 0] = (matrix2[cv + 0] - matrix1[rv + 1] * matrix2[cv + 3] - matrix1[rv + 2] * matrix2[cv + 6]) / matrix1[rv + 0];
}
}, "~A,~A,~A");
Clazz.defineMethod (c$, "determinant", 
function () {
var total;
total = this.m00 * (this.m11 * this.m22 - this.m12 * this.m21) + this.m01 * (this.m12 * this.m20 - this.m10 * this.m22) + this.m02 * (this.m10 * this.m21 - this.m11 * this.m20);
return total;
});
Clazz.defineMethod (c$, "set", 
function (scale) {
this.m00 = scale;
this.m01 = 0.0;
this.m02 = 0.0;
this.m10 = 0.0;
this.m11 = scale;
this.m12 = 0.0;
this.m20 = 0.0;
this.m21 = 0.0;
this.m22 = scale;
}, "~N");
Clazz.defineMethod (c$, "rotX", 
function (angle) {
var sinAngle;
var cosAngle;
sinAngle = Math.sin (angle);
cosAngle = Math.cos (angle);
this.m00 = 1.0;
this.m01 = 0.0;
this.m02 = 0.0;
this.m10 = 0.0;
this.m11 = cosAngle;
this.m12 = -sinAngle;
this.m20 = 0.0;
this.m21 = sinAngle;
this.m22 = cosAngle;
}, "~N");
Clazz.defineMethod (c$, "rotY", 
function (angle) {
var sinAngle;
var cosAngle;
sinAngle = Math.sin (angle);
cosAngle = Math.cos (angle);
this.m00 = cosAngle;
this.m01 = 0.0;
this.m02 = sinAngle;
this.m10 = 0.0;
this.m11 = 1.0;
this.m12 = 0.0;
this.m20 = -sinAngle;
this.m21 = 0.0;
this.m22 = cosAngle;
}, "~N");
Clazz.defineMethod (c$, "rotZ", 
function (angle) {
var sinAngle;
var cosAngle;
sinAngle = Math.sin (angle);
cosAngle = Math.cos (angle);
this.m00 = cosAngle;
this.m01 = -sinAngle;
this.m02 = 0.0;
this.m10 = sinAngle;
this.m11 = cosAngle;
this.m12 = 0.0;
this.m20 = 0.0;
this.m21 = 0.0;
this.m22 = 1.0;
}, "~N");
Clazz.defineMethod (c$, "mul", 
function (scalar) {
this.m00 *= scalar;
this.m01 *= scalar;
this.m02 *= scalar;
this.m10 *= scalar;
this.m11 *= scalar;
this.m12 *= scalar;
this.m20 *= scalar;
this.m21 *= scalar;
this.m22 *= scalar;
}, "~N");
Clazz.defineMethod (c$, "mul", 
function (scalar, m1) {
this.m00 = scalar * m1.m00;
this.m01 = scalar * m1.m01;
this.m02 = scalar * m1.m02;
this.m10 = scalar * m1.m10;
this.m11 = scalar * m1.m11;
this.m12 = scalar * m1.m12;
this.m20 = scalar * m1.m20;
this.m21 = scalar * m1.m21;
this.m22 = scalar * m1.m22;
}, "~N,javax.vecmath.Matrix3d");
Clazz.defineMethod (c$, "mul", 
function (m1) {
var m00;
var m01;
var m02;
var m10;
var m11;
var m12;
var m20;
var m21;
var m22;
m00 = this.m00 * m1.m00 + this.m01 * m1.m10 + this.m02 * m1.m20;
m01 = this.m00 * m1.m01 + this.m01 * m1.m11 + this.m02 * m1.m21;
m02 = this.m00 * m1.m02 + this.m01 * m1.m12 + this.m02 * m1.m22;
m10 = this.m10 * m1.m00 + this.m11 * m1.m10 + this.m12 * m1.m20;
m11 = this.m10 * m1.m01 + this.m11 * m1.m11 + this.m12 * m1.m21;
m12 = this.m10 * m1.m02 + this.m11 * m1.m12 + this.m12 * m1.m22;
m20 = this.m20 * m1.m00 + this.m21 * m1.m10 + this.m22 * m1.m20;
m21 = this.m20 * m1.m01 + this.m21 * m1.m11 + this.m22 * m1.m21;
m22 = this.m20 * m1.m02 + this.m21 * m1.m12 + this.m22 * m1.m22;
this.m00 = m00;
this.m01 = m01;
this.m02 = m02;
this.m10 = m10;
this.m11 = m11;
this.m12 = m12;
this.m20 = m20;
this.m21 = m21;
this.m22 = m22;
}, "javax.vecmath.Matrix3d");
Clazz.defineMethod (c$, "mul", 
function (m1, m2) {
if (this !== m1 && this !== m2) {
this.m00 = m1.m00 * m2.m00 + m1.m01 * m2.m10 + m1.m02 * m2.m20;
this.m01 = m1.m00 * m2.m01 + m1.m01 * m2.m11 + m1.m02 * m2.m21;
this.m02 = m1.m00 * m2.m02 + m1.m01 * m2.m12 + m1.m02 * m2.m22;
this.m10 = m1.m10 * m2.m00 + m1.m11 * m2.m10 + m1.m12 * m2.m20;
this.m11 = m1.m10 * m2.m01 + m1.m11 * m2.m11 + m1.m12 * m2.m21;
this.m12 = m1.m10 * m2.m02 + m1.m11 * m2.m12 + m1.m12 * m2.m22;
this.m20 = m1.m20 * m2.m00 + m1.m21 * m2.m10 + m1.m22 * m2.m20;
this.m21 = m1.m20 * m2.m01 + m1.m21 * m2.m11 + m1.m22 * m2.m21;
this.m22 = m1.m20 * m2.m02 + m1.m21 * m2.m12 + m1.m22 * m2.m22;
} else {
var m00;
var m01;
var m02;
var m10;
var m11;
var m12;
var m20;
var m21;
var m22;
m00 = m1.m00 * m2.m00 + m1.m01 * m2.m10 + m1.m02 * m2.m20;
m01 = m1.m00 * m2.m01 + m1.m01 * m2.m11 + m1.m02 * m2.m21;
m02 = m1.m00 * m2.m02 + m1.m01 * m2.m12 + m1.m02 * m2.m22;
m10 = m1.m10 * m2.m00 + m1.m11 * m2.m10 + m1.m12 * m2.m20;
m11 = m1.m10 * m2.m01 + m1.m11 * m2.m11 + m1.m12 * m2.m21;
m12 = m1.m10 * m2.m02 + m1.m11 * m2.m12 + m1.m12 * m2.m22;
m20 = m1.m20 * m2.m00 + m1.m21 * m2.m10 + m1.m22 * m2.m20;
m21 = m1.m20 * m2.m01 + m1.m21 * m2.m11 + m1.m22 * m2.m21;
m22 = m1.m20 * m2.m02 + m1.m21 * m2.m12 + m1.m22 * m2.m22;
this.m00 = m00;
this.m01 = m01;
this.m02 = m02;
this.m10 = m10;
this.m11 = m11;
this.m12 = m12;
this.m20 = m20;
this.m21 = m21;
this.m22 = m22;
}}, "javax.vecmath.Matrix3d,javax.vecmath.Matrix3d");
Clazz.defineMethod (c$, "mulNormalize", 
function (m1) {
var tmp =  Clazz.newArray (9, 0);
var tmp_rot =  Clazz.newArray (9, 0);
var tmp_scale =  Clazz.newArray (3, 0);
tmp[0] = this.m00 * m1.m00 + this.m01 * m1.m10 + this.m02 * m1.m20;
tmp[1] = this.m00 * m1.m01 + this.m01 * m1.m11 + this.m02 * m1.m21;
tmp[2] = this.m00 * m1.m02 + this.m01 * m1.m12 + this.m02 * m1.m22;
tmp[3] = this.m10 * m1.m00 + this.m11 * m1.m10 + this.m12 * m1.m20;
tmp[4] = this.m10 * m1.m01 + this.m11 * m1.m11 + this.m12 * m1.m21;
tmp[5] = this.m10 * m1.m02 + this.m11 * m1.m12 + this.m12 * m1.m22;
tmp[6] = this.m20 * m1.m00 + this.m21 * m1.m10 + this.m22 * m1.m20;
tmp[7] = this.m20 * m1.m01 + this.m21 * m1.m11 + this.m22 * m1.m21;
tmp[8] = this.m20 * m1.m02 + this.m21 * m1.m12 + this.m22 * m1.m22;
javax.vecmath.Matrix3d.compute_svd (tmp, tmp_scale, tmp_rot);
this.m00 = tmp_rot[0];
this.m01 = tmp_rot[1];
this.m02 = tmp_rot[2];
this.m10 = tmp_rot[3];
this.m11 = tmp_rot[4];
this.m12 = tmp_rot[5];
this.m20 = tmp_rot[6];
this.m21 = tmp_rot[7];
this.m22 = tmp_rot[8];
}, "javax.vecmath.Matrix3d");
Clazz.defineMethod (c$, "mulNormalize", 
function (m1, m2) {
var tmp =  Clazz.newArray (9, 0);
var tmp_rot =  Clazz.newArray (9, 0);
var tmp_scale =  Clazz.newArray (3, 0);
tmp[0] = m1.m00 * m2.m00 + m1.m01 * m2.m10 + m1.m02 * m2.m20;
tmp[1] = m1.m00 * m2.m01 + m1.m01 * m2.m11 + m1.m02 * m2.m21;
tmp[2] = m1.m00 * m2.m02 + m1.m01 * m2.m12 + m1.m02 * m2.m22;
tmp[3] = m1.m10 * m2.m00 + m1.m11 * m2.m10 + m1.m12 * m2.m20;
tmp[4] = m1.m10 * m2.m01 + m1.m11 * m2.m11 + m1.m12 * m2.m21;
tmp[5] = m1.m10 * m2.m02 + m1.m11 * m2.m12 + m1.m12 * m2.m22;
tmp[6] = m1.m20 * m2.m00 + m1.m21 * m2.m10 + m1.m22 * m2.m20;
tmp[7] = m1.m20 * m2.m01 + m1.m21 * m2.m11 + m1.m22 * m2.m21;
tmp[8] = m1.m20 * m2.m02 + m1.m21 * m2.m12 + m1.m22 * m2.m22;
javax.vecmath.Matrix3d.compute_svd (tmp, tmp_scale, tmp_rot);
this.m00 = tmp_rot[0];
this.m01 = tmp_rot[1];
this.m02 = tmp_rot[2];
this.m10 = tmp_rot[3];
this.m11 = tmp_rot[4];
this.m12 = tmp_rot[5];
this.m20 = tmp_rot[6];
this.m21 = tmp_rot[7];
this.m22 = tmp_rot[8];
}, "javax.vecmath.Matrix3d,javax.vecmath.Matrix3d");
Clazz.defineMethod (c$, "mulTransposeBoth", 
function (m1, m2) {
if (this !== m1 && this !== m2) {
this.m00 = m1.m00 * m2.m00 + m1.m10 * m2.m01 + m1.m20 * m2.m02;
this.m01 = m1.m00 * m2.m10 + m1.m10 * m2.m11 + m1.m20 * m2.m12;
this.m02 = m1.m00 * m2.m20 + m1.m10 * m2.m21 + m1.m20 * m2.m22;
this.m10 = m1.m01 * m2.m00 + m1.m11 * m2.m01 + m1.m21 * m2.m02;
this.m11 = m1.m01 * m2.m10 + m1.m11 * m2.m11 + m1.m21 * m2.m12;
this.m12 = m1.m01 * m2.m20 + m1.m11 * m2.m21 + m1.m21 * m2.m22;
this.m20 = m1.m02 * m2.m00 + m1.m12 * m2.m01 + m1.m22 * m2.m02;
this.m21 = m1.m02 * m2.m10 + m1.m12 * m2.m11 + m1.m22 * m2.m12;
this.m22 = m1.m02 * m2.m20 + m1.m12 * m2.m21 + m1.m22 * m2.m22;
} else {
var m00;
var m01;
var m02;
var m10;
var m11;
var m12;
var m20;
var m21;
var m22;
m00 = m1.m00 * m2.m00 + m1.m10 * m2.m01 + m1.m20 * m2.m02;
m01 = m1.m00 * m2.m10 + m1.m10 * m2.m11 + m1.m20 * m2.m12;
m02 = m1.m00 * m2.m20 + m1.m10 * m2.m21 + m1.m20 * m2.m22;
m10 = m1.m01 * m2.m00 + m1.m11 * m2.m01 + m1.m21 * m2.m02;
m11 = m1.m01 * m2.m10 + m1.m11 * m2.m11 + m1.m21 * m2.m12;
m12 = m1.m01 * m2.m20 + m1.m11 * m2.m21 + m1.m21 * m2.m22;
m20 = m1.m02 * m2.m00 + m1.m12 * m2.m01 + m1.m22 * m2.m02;
m21 = m1.m02 * m2.m10 + m1.m12 * m2.m11 + m1.m22 * m2.m12;
m22 = m1.m02 * m2.m20 + m1.m12 * m2.m21 + m1.m22 * m2.m22;
this.m00 = m00;
this.m01 = m01;
this.m02 = m02;
this.m10 = m10;
this.m11 = m11;
this.m12 = m12;
this.m20 = m20;
this.m21 = m21;
this.m22 = m22;
}}, "javax.vecmath.Matrix3d,javax.vecmath.Matrix3d");
Clazz.defineMethod (c$, "mulTransposeRight", 
function (m1, m2) {
if (this !== m1 && this !== m2) {
this.m00 = m1.m00 * m2.m00 + m1.m01 * m2.m01 + m1.m02 * m2.m02;
this.m01 = m1.m00 * m2.m10 + m1.m01 * m2.m11 + m1.m02 * m2.m12;
this.m02 = m1.m00 * m2.m20 + m1.m01 * m2.m21 + m1.m02 * m2.m22;
this.m10 = m1.m10 * m2.m00 + m1.m11 * m2.m01 + m1.m12 * m2.m02;
this.m11 = m1.m10 * m2.m10 + m1.m11 * m2.m11 + m1.m12 * m2.m12;
this.m12 = m1.m10 * m2.m20 + m1.m11 * m2.m21 + m1.m12 * m2.m22;
this.m20 = m1.m20 * m2.m00 + m1.m21 * m2.m01 + m1.m22 * m2.m02;
this.m21 = m1.m20 * m2.m10 + m1.m21 * m2.m11 + m1.m22 * m2.m12;
this.m22 = m1.m20 * m2.m20 + m1.m21 * m2.m21 + m1.m22 * m2.m22;
} else {
var m00;
var m01;
var m02;
var m10;
var m11;
var m12;
var m20;
var m21;
var m22;
m00 = m1.m00 * m2.m00 + m1.m01 * m2.m01 + m1.m02 * m2.m02;
m01 = m1.m00 * m2.m10 + m1.m01 * m2.m11 + m1.m02 * m2.m12;
m02 = m1.m00 * m2.m20 + m1.m01 * m2.m21 + m1.m02 * m2.m22;
m10 = m1.m10 * m2.m00 + m1.m11 * m2.m01 + m1.m12 * m2.m02;
m11 = m1.m10 * m2.m10 + m1.m11 * m2.m11 + m1.m12 * m2.m12;
m12 = m1.m10 * m2.m20 + m1.m11 * m2.m21 + m1.m12 * m2.m22;
m20 = m1.m20 * m2.m00 + m1.m21 * m2.m01 + m1.m22 * m2.m02;
m21 = m1.m20 * m2.m10 + m1.m21 * m2.m11 + m1.m22 * m2.m12;
m22 = m1.m20 * m2.m20 + m1.m21 * m2.m21 + m1.m22 * m2.m22;
this.m00 = m00;
this.m01 = m01;
this.m02 = m02;
this.m10 = m10;
this.m11 = m11;
this.m12 = m12;
this.m20 = m20;
this.m21 = m21;
this.m22 = m22;
}}, "javax.vecmath.Matrix3d,javax.vecmath.Matrix3d");
Clazz.defineMethod (c$, "mulTransposeLeft", 
function (m1, m2) {
if (this !== m1 && this !== m2) {
this.m00 = m1.m00 * m2.m00 + m1.m10 * m2.m10 + m1.m20 * m2.m20;
this.m01 = m1.m00 * m2.m01 + m1.m10 * m2.m11 + m1.m20 * m2.m21;
this.m02 = m1.m00 * m2.m02 + m1.m10 * m2.m12 + m1.m20 * m2.m22;
this.m10 = m1.m01 * m2.m00 + m1.m11 * m2.m10 + m1.m21 * m2.m20;
this.m11 = m1.m01 * m2.m01 + m1.m11 * m2.m11 + m1.m21 * m2.m21;
this.m12 = m1.m01 * m2.m02 + m1.m11 * m2.m12 + m1.m21 * m2.m22;
this.m20 = m1.m02 * m2.m00 + m1.m12 * m2.m10 + m1.m22 * m2.m20;
this.m21 = m1.m02 * m2.m01 + m1.m12 * m2.m11 + m1.m22 * m2.m21;
this.m22 = m1.m02 * m2.m02 + m1.m12 * m2.m12 + m1.m22 * m2.m22;
} else {
var m00;
var m01;
var m02;
var m10;
var m11;
var m12;
var m20;
var m21;
var m22;
m00 = m1.m00 * m2.m00 + m1.m10 * m2.m10 + m1.m20 * m2.m20;
m01 = m1.m00 * m2.m01 + m1.m10 * m2.m11 + m1.m20 * m2.m21;
m02 = m1.m00 * m2.m02 + m1.m10 * m2.m12 + m1.m20 * m2.m22;
m10 = m1.m01 * m2.m00 + m1.m11 * m2.m10 + m1.m21 * m2.m20;
m11 = m1.m01 * m2.m01 + m1.m11 * m2.m11 + m1.m21 * m2.m21;
m12 = m1.m01 * m2.m02 + m1.m11 * m2.m12 + m1.m21 * m2.m22;
m20 = m1.m02 * m2.m00 + m1.m12 * m2.m10 + m1.m22 * m2.m20;
m21 = m1.m02 * m2.m01 + m1.m12 * m2.m11 + m1.m22 * m2.m21;
m22 = m1.m02 * m2.m02 + m1.m12 * m2.m12 + m1.m22 * m2.m22;
this.m00 = m00;
this.m01 = m01;
this.m02 = m02;
this.m10 = m10;
this.m11 = m11;
this.m12 = m12;
this.m20 = m20;
this.m21 = m21;
this.m22 = m22;
}}, "javax.vecmath.Matrix3d,javax.vecmath.Matrix3d");
Clazz.defineMethod (c$, "normalize", 
function () {
var tmp_rot =  Clazz.newArray (9, 0);
var tmp_scale =  Clazz.newArray (3, 0);
this.getScaleRotate (tmp_scale, tmp_rot);
this.m00 = tmp_rot[0];
this.m01 = tmp_rot[1];
this.m02 = tmp_rot[2];
this.m10 = tmp_rot[3];
this.m11 = tmp_rot[4];
this.m12 = tmp_rot[5];
this.m20 = tmp_rot[6];
this.m21 = tmp_rot[7];
this.m22 = tmp_rot[8];
});
Clazz.defineMethod (c$, "normalize", 
function (m1) {
var tmp =  Clazz.newArray (9, 0);
var tmp_rot =  Clazz.newArray (9, 0);
var tmp_scale =  Clazz.newArray (3, 0);
tmp[0] = m1.m00;
tmp[1] = m1.m01;
tmp[2] = m1.m02;
tmp[3] = m1.m10;
tmp[4] = m1.m11;
tmp[5] = m1.m12;
tmp[6] = m1.m20;
tmp[7] = m1.m21;
tmp[8] = m1.m22;
javax.vecmath.Matrix3d.compute_svd (tmp, tmp_scale, tmp_rot);
this.m00 = tmp_rot[0];
this.m01 = tmp_rot[1];
this.m02 = tmp_rot[2];
this.m10 = tmp_rot[3];
this.m11 = tmp_rot[4];
this.m12 = tmp_rot[5];
this.m20 = tmp_rot[6];
this.m21 = tmp_rot[7];
this.m22 = tmp_rot[8];
}, "javax.vecmath.Matrix3d");
Clazz.defineMethod (c$, "normalizeCP", 
function () {
var mag = 1.0 / Math.sqrt (this.m00 * this.m00 + this.m10 * this.m10 + this.m20 * this.m20);
this.m00 = this.m00 * mag;
this.m10 = this.m10 * mag;
this.m20 = this.m20 * mag;
mag = 1.0 / Math.sqrt (this.m01 * this.m01 + this.m11 * this.m11 + this.m21 * this.m21);
this.m01 = this.m01 * mag;
this.m11 = this.m11 * mag;
this.m21 = this.m21 * mag;
this.m02 = this.m10 * this.m21 - this.m11 * this.m20;
this.m12 = this.m01 * this.m20 - this.m00 * this.m21;
this.m22 = this.m00 * this.m11 - this.m01 * this.m10;
});
Clazz.defineMethod (c$, "normalizeCP", 
function (m1) {
var mag = 1.0 / Math.sqrt (m1.m00 * m1.m00 + m1.m10 * m1.m10 + m1.m20 * m1.m20);
this.m00 = m1.m00 * mag;
this.m10 = m1.m10 * mag;
this.m20 = m1.m20 * mag;
mag = 1.0 / Math.sqrt (m1.m01 * m1.m01 + m1.m11 * m1.m11 + m1.m21 * m1.m21);
this.m01 = m1.m01 * mag;
this.m11 = m1.m11 * mag;
this.m21 = m1.m21 * mag;
this.m02 = this.m10 * this.m21 - this.m11 * this.m20;
this.m12 = this.m01 * this.m20 - this.m00 * this.m21;
this.m22 = this.m00 * this.m11 - this.m01 * this.m10;
}, "javax.vecmath.Matrix3d");
Clazz.defineMethod (c$, "equals", 
function (m1) {
try {
return (this.m00 == m1.m00 && this.m01 == m1.m01 && this.m02 == m1.m02 && this.m10 == m1.m10 && this.m11 == m1.m11 && this.m12 == m1.m12 && this.m20 == m1.m20 && this.m21 == m1.m21 && this.m22 == m1.m22);
} catch (e2) {
if (Clazz.instanceOf (e2, NullPointerException)) {
return false;
} else {
throw e2;
}
}
}, "javax.vecmath.Matrix3d");
Clazz.defineMethod (c$, "equals", 
function (t1) {
try {
var m2 = t1;
return (this.m00 == m2.m00 && this.m01 == m2.m01 && this.m02 == m2.m02 && this.m10 == m2.m10 && this.m11 == m2.m11 && this.m12 == m2.m12 && this.m20 == m2.m20 && this.m21 == m2.m21 && this.m22 == m2.m22);
} catch (e$$) {
if (Clazz.instanceOf (e$$, ClassCastException)) {
var e1 = e$$;
{
return false;
}
} else if (Clazz.instanceOf (e$$, NullPointerException)) {
var e2 = e$$;
{
return false;
}
} else {
throw e$$;
}
}
}, "~O");
Clazz.defineMethod (c$, "epsilonEquals", 
function (m1, epsilon) {
var diff;
diff = this.m00 - m1.m00;
if ((diff < 0 ? -diff : diff) > epsilon) return false;
diff = this.m01 - m1.m01;
if ((diff < 0 ? -diff : diff) > epsilon) return false;
diff = this.m02 - m1.m02;
if ((diff < 0 ? -diff : diff) > epsilon) return false;
diff = this.m10 - m1.m10;
if ((diff < 0 ? -diff : diff) > epsilon) return false;
diff = this.m11 - m1.m11;
if ((diff < 0 ? -diff : diff) > epsilon) return false;
diff = this.m12 - m1.m12;
if ((diff < 0 ? -diff : diff) > epsilon) return false;
diff = this.m20 - m1.m20;
if ((diff < 0 ? -diff : diff) > epsilon) return false;
diff = this.m21 - m1.m21;
if ((diff < 0 ? -diff : diff) > epsilon) return false;
diff = this.m22 - m1.m22;
if ((diff < 0 ? -diff : diff) > epsilon) return false;
return true;
}, "javax.vecmath.Matrix3d,~N");
Clazz.overrideMethod (c$, "hashCode", 
function () {
var bits = 1;
bits = 31 * bits + javax.vecmath.VecMathUtil.doubleToLongBits (this.m00);
bits = 31 * bits + javax.vecmath.VecMathUtil.doubleToLongBits (this.m01);
bits = 31 * bits + javax.vecmath.VecMathUtil.doubleToLongBits (this.m02);
bits = 31 * bits + javax.vecmath.VecMathUtil.doubleToLongBits (this.m10);
bits = 31 * bits + javax.vecmath.VecMathUtil.doubleToLongBits (this.m11);
bits = 31 * bits + javax.vecmath.VecMathUtil.doubleToLongBits (this.m12);
bits = 31 * bits + javax.vecmath.VecMathUtil.doubleToLongBits (this.m20);
bits = 31 * bits + javax.vecmath.VecMathUtil.doubleToLongBits (this.m21);
bits = 31 * bits + javax.vecmath.VecMathUtil.doubleToLongBits (this.m22);
return (bits ^ (bits >> 32));
});
Clazz.defineMethod (c$, "setZero", 
function () {
this.m00 = 0.0;
this.m01 = 0.0;
this.m02 = 0.0;
this.m10 = 0.0;
this.m11 = 0.0;
this.m12 = 0.0;
this.m20 = 0.0;
this.m21 = 0.0;
this.m22 = 0.0;
});
Clazz.defineMethod (c$, "negate", 
function () {
this.m00 = -this.m00;
this.m01 = -this.m01;
this.m02 = -this.m02;
this.m10 = -this.m10;
this.m11 = -this.m11;
this.m12 = -this.m12;
this.m20 = -this.m20;
this.m21 = -this.m21;
this.m22 = -this.m22;
});
Clazz.defineMethod (c$, "negate", 
function (m1) {
this.m00 = -m1.m00;
this.m01 = -m1.m01;
this.m02 = -m1.m02;
this.m10 = -m1.m10;
this.m11 = -m1.m11;
this.m12 = -m1.m12;
this.m20 = -m1.m20;
this.m21 = -m1.m21;
this.m22 = -m1.m22;
}, "javax.vecmath.Matrix3d");
Clazz.defineMethod (c$, "transform", 
function (t) {
var x;
var y;
var z;
x = this.m00 * t.x + this.m01 * t.y + this.m02 * t.z;
y = this.m10 * t.x + this.m11 * t.y + this.m12 * t.z;
z = this.m20 * t.x + this.m21 * t.y + this.m22 * t.z;
t.set (x, y, z);
}, "javax.vecmath.Tuple3d");
Clazz.defineMethod (c$, "transform", 
function (t, result) {
var x;
var y;
var z;
x = this.m00 * t.x + this.m01 * t.y + this.m02 * t.z;
y = this.m10 * t.x + this.m11 * t.y + this.m12 * t.z;
result.z = this.m20 * t.x + this.m21 * t.y + this.m22 * t.z;
result.x = x;
result.y = y;
}, "javax.vecmath.Tuple3d,javax.vecmath.Tuple3d");
Clazz.defineMethod (c$, "getScaleRotate", 
function (scales, rots) {
var tmp =  Clazz.newArray (9, 0);
tmp[0] = this.m00;
tmp[1] = this.m01;
tmp[2] = this.m02;
tmp[3] = this.m10;
tmp[4] = this.m11;
tmp[5] = this.m12;
tmp[6] = this.m20;
tmp[7] = this.m21;
tmp[8] = this.m22;
javax.vecmath.Matrix3d.compute_svd (tmp, scales, rots);
return ;
}, "~A,~A");
c$.compute_svd = Clazz.defineMethod (c$, "compute_svd", 
function (m, outScale, outRot) {
var i;
var j;
var g;
var scale;
var u1 =  Clazz.newArray (9, 0);
var v1 =  Clazz.newArray (9, 0);
var t1 =  Clazz.newArray (9, 0);
var t2 =  Clazz.newArray (9, 0);
var tmp = t1;
var single_values = t2;
var rot =  Clazz.newArray (9, 0);
var e =  Clazz.newArray (3, 0);
var scales =  Clazz.newArray (3, 0);
var converged;
var negCnt = 0;
var cs;
var sn;
var c1;
var c2;
var c3;
var c4;
var s1;
var s2;
var s3;
var s4;
var cl1;
var cl2;
var cl3;
for (i = 0; i < 9; i++) rot[i] = m[i];

if (m[3] * m[3] < 1.110223024E-16) {
u1[0] = 1.0;
u1[1] = 0.0;
u1[2] = 0.0;
u1[3] = 0.0;
u1[4] = 1.0;
u1[5] = 0.0;
u1[6] = 0.0;
u1[7] = 0.0;
u1[8] = 1.0;
} else if (m[0] * m[0] < 1.110223024E-16) {
tmp[0] = m[0];
tmp[1] = m[1];
tmp[2] = m[2];
m[0] = m[3];
m[1] = m[4];
m[2] = m[5];
m[3] = -tmp[0];
m[4] = -tmp[1];
m[5] = -tmp[2];
u1[0] = 0.0;
u1[1] = 1.0;
u1[2] = 0.0;
u1[3] = -1.0;
u1[4] = 0.0;
u1[5] = 0.0;
u1[6] = 0.0;
u1[7] = 0.0;
u1[8] = 1.0;
} else {
g = 1.0 / Math.sqrt (m[0] * m[0] + m[3] * m[3]);
c1 = m[0] * g;
s1 = m[3] * g;
tmp[0] = c1 * m[0] + s1 * m[3];
tmp[1] = c1 * m[1] + s1 * m[4];
tmp[2] = c1 * m[2] + s1 * m[5];
m[3] = -s1 * m[0] + c1 * m[3];
m[4] = -s1 * m[1] + c1 * m[4];
m[5] = -s1 * m[2] + c1 * m[5];
m[0] = tmp[0];
m[1] = tmp[1];
m[2] = tmp[2];
u1[0] = c1;
u1[1] = s1;
u1[2] = 0.0;
u1[3] = -s1;
u1[4] = c1;
u1[5] = 0.0;
u1[6] = 0.0;
u1[7] = 0.0;
u1[8] = 1.0;
}if (m[6] * m[6] < 1.110223024E-16) {
} else if (m[0] * m[0] < 1.110223024E-16) {
tmp[0] = m[0];
tmp[1] = m[1];
tmp[2] = m[2];
m[0] = m[6];
m[1] = m[7];
m[2] = m[8];
m[6] = -tmp[0];
m[7] = -tmp[1];
m[8] = -tmp[2];
tmp[0] = u1[0];
tmp[1] = u1[1];
tmp[2] = u1[2];
u1[0] = u1[6];
u1[1] = u1[7];
u1[2] = u1[8];
u1[6] = -tmp[0];
u1[7] = -tmp[1];
u1[8] = -tmp[2];
} else {
g = 1.0 / Math.sqrt (m[0] * m[0] + m[6] * m[6]);
c2 = m[0] * g;
s2 = m[6] * g;
tmp[0] = c2 * m[0] + s2 * m[6];
tmp[1] = c2 * m[1] + s2 * m[7];
tmp[2] = c2 * m[2] + s2 * m[8];
m[6] = -s2 * m[0] + c2 * m[6];
m[7] = -s2 * m[1] + c2 * m[7];
m[8] = -s2 * m[2] + c2 * m[8];
m[0] = tmp[0];
m[1] = tmp[1];
m[2] = tmp[2];
tmp[0] = c2 * u1[0];
tmp[1] = c2 * u1[1];
u1[2] = s2;
tmp[6] = -u1[0] * s2;
tmp[7] = -u1[1] * s2;
u1[8] = c2;
u1[0] = tmp[0];
u1[1] = tmp[1];
u1[6] = tmp[6];
u1[7] = tmp[7];
}if (m[2] * m[2] < 1.110223024E-16) {
v1[0] = 1.0;
v1[1] = 0.0;
v1[2] = 0.0;
v1[3] = 0.0;
v1[4] = 1.0;
v1[5] = 0.0;
v1[6] = 0.0;
v1[7] = 0.0;
v1[8] = 1.0;
} else if (m[1] * m[1] < 1.110223024E-16) {
tmp[2] = m[2];
tmp[5] = m[5];
tmp[8] = m[8];
m[2] = -m[1];
m[5] = -m[4];
m[8] = -m[7];
m[1] = tmp[2];
m[4] = tmp[5];
m[7] = tmp[8];
v1[0] = 1.0;
v1[1] = 0.0;
v1[2] = 0.0;
v1[3] = 0.0;
v1[4] = 0.0;
v1[5] = -1.0;
v1[6] = 0.0;
v1[7] = 1.0;
v1[8] = 0.0;
} else {
g = 1.0 / Math.sqrt (m[1] * m[1] + m[2] * m[2]);
c3 = m[1] * g;
s3 = m[2] * g;
tmp[1] = c3 * m[1] + s3 * m[2];
m[2] = -s3 * m[1] + c3 * m[2];
m[1] = tmp[1];
tmp[4] = c3 * m[4] + s3 * m[5];
m[5] = -s3 * m[4] + c3 * m[5];
m[4] = tmp[4];
tmp[7] = c3 * m[7] + s3 * m[8];
m[8] = -s3 * m[7] + c3 * m[8];
m[7] = tmp[7];
v1[0] = 1.0;
v1[1] = 0.0;
v1[2] = 0.0;
v1[3] = 0.0;
v1[4] = c3;
v1[5] = -s3;
v1[6] = 0.0;
v1[7] = s3;
v1[8] = c3;
}if (m[7] * m[7] < 1.110223024E-16) {
} else if (m[4] * m[4] < 1.110223024E-16) {
tmp[3] = m[3];
tmp[4] = m[4];
tmp[5] = m[5];
m[3] = m[6];
m[4] = m[7];
m[5] = m[8];
m[6] = -tmp[3];
m[7] = -tmp[4];
m[8] = -tmp[5];
tmp[3] = u1[3];
tmp[4] = u1[4];
tmp[5] = u1[5];
u1[3] = u1[6];
u1[4] = u1[7];
u1[5] = u1[8];
u1[6] = -tmp[3];
u1[7] = -tmp[4];
u1[8] = -tmp[5];
} else {
g = 1.0 / Math.sqrt (m[4] * m[4] + m[7] * m[7]);
c4 = m[4] * g;
s4 = m[7] * g;
tmp[3] = c4 * m[3] + s4 * m[6];
m[6] = -s4 * m[3] + c4 * m[6];
m[3] = tmp[3];
tmp[4] = c4 * m[4] + s4 * m[7];
m[7] = -s4 * m[4] + c4 * m[7];
m[4] = tmp[4];
tmp[5] = c4 * m[5] + s4 * m[8];
m[8] = -s4 * m[5] + c4 * m[8];
m[5] = tmp[5];
tmp[3] = c4 * u1[3] + s4 * u1[6];
u1[6] = -s4 * u1[3] + c4 * u1[6];
u1[3] = tmp[3];
tmp[4] = c4 * u1[4] + s4 * u1[7];
u1[7] = -s4 * u1[4] + c4 * u1[7];
u1[4] = tmp[4];
tmp[5] = c4 * u1[5] + s4 * u1[8];
u1[8] = -s4 * u1[5] + c4 * u1[8];
u1[5] = tmp[5];
}single_values[0] = m[0];
single_values[1] = m[4];
single_values[2] = m[8];
e[0] = m[1];
e[1] = m[5];
if (e[0] * e[0] < 1.110223024E-16 && e[1] * e[1] < 1.110223024E-16) {
} else {
javax.vecmath.Matrix3d.compute_qr (single_values, e, u1, v1);
}scales[0] = single_values[0];
scales[1] = single_values[1];
scales[2] = single_values[2];
if (javax.vecmath.Matrix3d.almostEqual (Math.abs (scales[0]), 1.0) && javax.vecmath.Matrix3d.almostEqual (Math.abs (scales[1]), 1.0) && javax.vecmath.Matrix3d.almostEqual (Math.abs (scales[2]), 1.0)) {
for (i = 0; i < 3; i++) if (scales[i] < 0.0) negCnt++;

if ((negCnt == 0) || (negCnt == 2)) {
outScale[0] = outScale[1] = outScale[2] = 1.0;
for (i = 0; i < 9; i++) outRot[i] = rot[i];

return ;
}}javax.vecmath.Matrix3d.transpose_mat (u1, t1);
javax.vecmath.Matrix3d.transpose_mat (v1, t2);
javax.vecmath.Matrix3d.svdReorder (m, t1, t2, scales, outRot, outScale);
}, "~A,~A,~A");
c$.svdReorder = Clazz.defineMethod (c$, "svdReorder", 
function (m, t1, t2, scales, outRot, outScale) {
var out =  Clazz.newArray (3, 0);
var $in =  Clazz.newArray (3, 0);
var in0;
var in1;
var in2;
var index;
var i;
var mag =  Clazz.newArray (3, 0);
var rot =  Clazz.newArray (9, 0);
if (scales[0] < 0.0) {
scales[0] = -scales[0];
t2[0] = -t2[0];
t2[1] = -t2[1];
t2[2] = -t2[2];
}if (scales[1] < 0.0) {
scales[1] = -scales[1];
t2[3] = -t2[3];
t2[4] = -t2[4];
t2[5] = -t2[5];
}if (scales[2] < 0.0) {
scales[2] = -scales[2];
t2[6] = -t2[6];
t2[7] = -t2[7];
t2[8] = -t2[8];
}javax.vecmath.Matrix3d.mat_mul (t1, t2, rot);
if (javax.vecmath.Matrix3d.almostEqual (Math.abs (scales[0]), Math.abs (scales[1])) && javax.vecmath.Matrix3d.almostEqual (Math.abs (scales[1]), Math.abs (scales[2]))) {
for (i = 0; i < 9; i++) {
outRot[i] = rot[i];
}
for (i = 0; i < 3; i++) {
outScale[i] = scales[i];
}
} else {
if (scales[0] > scales[1]) {
if (scales[0] > scales[2]) {
if (scales[2] > scales[1]) {
out[0] = 0;
out[1] = 2;
out[2] = 1;
} else {
out[0] = 0;
out[1] = 1;
out[2] = 2;
}} else {
out[0] = 2;
out[1] = 0;
out[2] = 1;
}} else {
if (scales[1] > scales[2]) {
if (scales[2] > scales[0]) {
out[0] = 1;
out[1] = 2;
out[2] = 0;
} else {
out[0] = 1;
out[1] = 0;
out[2] = 2;
}} else {
out[0] = 2;
out[1] = 1;
out[2] = 0;
}}mag[0] = (m[0] * m[0] + m[1] * m[1] + m[2] * m[2]);
mag[1] = (m[3] * m[3] + m[4] * m[4] + m[5] * m[5]);
mag[2] = (m[6] * m[6] + m[7] * m[7] + m[8] * m[8]);
if (mag[0] > mag[1]) {
if (mag[0] > mag[2]) {
if (mag[2] > mag[1]) {
in0 = 0;
in2 = 1;
in1 = 2;
} else {
in0 = 0;
in1 = 1;
in2 = 2;
}} else {
in2 = 0;
in0 = 1;
in1 = 2;
}} else {
if (mag[1] > mag[2]) {
if (mag[2] > mag[0]) {
in1 = 0;
in2 = 1;
in0 = 2;
} else {
in1 = 0;
in0 = 1;
in2 = 2;
}} else {
in2 = 0;
in1 = 1;
in0 = 2;
}}index = out[in0];
outScale[0] = scales[index];
index = out[in1];
outScale[1] = scales[index];
index = out[in2];
outScale[2] = scales[index];
index = out[in0];
outRot[0] = rot[index];
index = out[in0] + 3;
outRot[3] = rot[index];
index = out[in0] + 6;
outRot[6] = rot[index];
index = out[in1];
outRot[1] = rot[index];
index = out[in1] + 3;
outRot[4] = rot[index];
index = out[in1] + 6;
outRot[7] = rot[index];
index = out[in2];
outRot[2] = rot[index];
index = out[in2] + 3;
outRot[5] = rot[index];
index = out[in2] + 6;
outRot[8] = rot[index];
}}, "~A,~A,~A,~A,~A,~A");
c$.compute_qr = Clazz.defineMethod (c$, "compute_qr", 
function (s, e, u, v) {
var i;
var j;
var k;
var converged;
var shift;
var ssmin;
var ssmax;
var r;
var cosl =  Clazz.newArray (2, 0);
var cosr =  Clazz.newArray (2, 0);
var sinl =  Clazz.newArray (2, 0);
var sinr =  Clazz.newArray (2, 0);
var m =  Clazz.newArray (9, 0);
var utemp;
var vtemp;
var f;
var g;
var MAX_INTERATIONS = 10;
var CONVERGE_TOL = 4.89E-15;
var c_b48 = 1.;
var c_b71 = -1.0;
var first;
converged = false;
first = 1;
if (Math.abs (e[1]) < 4.89E-15 || Math.abs (e[0]) < 4.89E-15) converged = true;
for (k = 0; k < 10 && !converged; k++) {
shift = javax.vecmath.Matrix3d.compute_shift (s[1], e[1], s[2]);
f = (Math.abs (s[0]) - shift) * (javax.vecmath.Matrix3d.d_sign (c_b48, s[0]) + shift / s[0]);
g = e[0];
r = javax.vecmath.Matrix3d.compute_rot (f, g, sinr, cosr, 0, first);
f = cosr[0] * s[0] + sinr[0] * e[0];
e[0] = cosr[0] * e[0] - sinr[0] * s[0];
g = sinr[0] * s[1];
s[1] = cosr[0] * s[1];
r = javax.vecmath.Matrix3d.compute_rot (f, g, sinl, cosl, 0, first);
first = 0;
s[0] = r;
f = cosl[0] * e[0] + sinl[0] * s[1];
s[1] = cosl[0] * s[1] - sinl[0] * e[0];
g = sinl[0] * e[1];
e[1] = cosl[0] * e[1];
r = javax.vecmath.Matrix3d.compute_rot (f, g, sinr, cosr, 1, first);
e[0] = r;
f = cosr[1] * s[1] + sinr[1] * e[1];
e[1] = cosr[1] * e[1] - sinr[1] * s[1];
g = sinr[1] * s[2];
s[2] = cosr[1] * s[2];
r = javax.vecmath.Matrix3d.compute_rot (f, g, sinl, cosl, 1, first);
s[1] = r;
f = cosl[1] * e[1] + sinl[1] * s[2];
s[2] = cosl[1] * s[2] - sinl[1] * e[1];
e[1] = f;
utemp = u[0];
u[0] = cosl[0] * utemp + sinl[0] * u[3];
u[3] = -sinl[0] * utemp + cosl[0] * u[3];
utemp = u[1];
u[1] = cosl[0] * utemp + sinl[0] * u[4];
u[4] = -sinl[0] * utemp + cosl[0] * u[4];
utemp = u[2];
u[2] = cosl[0] * utemp + sinl[0] * u[5];
u[5] = -sinl[0] * utemp + cosl[0] * u[5];
utemp = u[3];
u[3] = cosl[1] * utemp + sinl[1] * u[6];
u[6] = -sinl[1] * utemp + cosl[1] * u[6];
utemp = u[4];
u[4] = cosl[1] * utemp + sinl[1] * u[7];
u[7] = -sinl[1] * utemp + cosl[1] * u[7];
utemp = u[5];
u[5] = cosl[1] * utemp + sinl[1] * u[8];
u[8] = -sinl[1] * utemp + cosl[1] * u[8];
vtemp = v[0];
v[0] = cosr[0] * vtemp + sinr[0] * v[1];
v[1] = -sinr[0] * vtemp + cosr[0] * v[1];
vtemp = v[3];
v[3] = cosr[0] * vtemp + sinr[0] * v[4];
v[4] = -sinr[0] * vtemp + cosr[0] * v[4];
vtemp = v[6];
v[6] = cosr[0] * vtemp + sinr[0] * v[7];
v[7] = -sinr[0] * vtemp + cosr[0] * v[7];
vtemp = v[1];
v[1] = cosr[1] * vtemp + sinr[1] * v[2];
v[2] = -sinr[1] * vtemp + cosr[1] * v[2];
vtemp = v[4];
v[4] = cosr[1] * vtemp + sinr[1] * v[5];
v[5] = -sinr[1] * vtemp + cosr[1] * v[5];
vtemp = v[7];
v[7] = cosr[1] * vtemp + sinr[1] * v[8];
v[8] = -sinr[1] * vtemp + cosr[1] * v[8];
m[0] = s[0];
m[1] = e[0];
m[2] = 0.0;
m[3] = 0.0;
m[4] = s[1];
m[5] = e[1];
m[6] = 0.0;
m[7] = 0.0;
m[8] = s[2];
if (Math.abs (e[1]) < 4.89E-15 || Math.abs (e[0]) < 4.89E-15) converged = true;
}
if (Math.abs (e[1]) < 4.89E-15) {
javax.vecmath.Matrix3d.compute_2X2 (s[0], e[0], s[1], s, sinl, cosl, sinr, cosr, 0);
utemp = u[0];
u[0] = cosl[0] * utemp + sinl[0] * u[3];
u[3] = -sinl[0] * utemp + cosl[0] * u[3];
utemp = u[1];
u[1] = cosl[0] * utemp + sinl[0] * u[4];
u[4] = -sinl[0] * utemp + cosl[0] * u[4];
utemp = u[2];
u[2] = cosl[0] * utemp + sinl[0] * u[5];
u[5] = -sinl[0] * utemp + cosl[0] * u[5];
vtemp = v[0];
v[0] = cosr[0] * vtemp + sinr[0] * v[1];
v[1] = -sinr[0] * vtemp + cosr[0] * v[1];
vtemp = v[3];
v[3] = cosr[0] * vtemp + sinr[0] * v[4];
v[4] = -sinr[0] * vtemp + cosr[0] * v[4];
vtemp = v[6];
v[6] = cosr[0] * vtemp + sinr[0] * v[7];
v[7] = -sinr[0] * vtemp + cosr[0] * v[7];
} else {
javax.vecmath.Matrix3d.compute_2X2 (s[1], e[1], s[2], s, sinl, cosl, sinr, cosr, 1);
utemp = u[3];
u[3] = cosl[0] * utemp + sinl[0] * u[6];
u[6] = -sinl[0] * utemp + cosl[0] * u[6];
utemp = u[4];
u[4] = cosl[0] * utemp + sinl[0] * u[7];
u[7] = -sinl[0] * utemp + cosl[0] * u[7];
utemp = u[5];
u[5] = cosl[0] * utemp + sinl[0] * u[8];
u[8] = -sinl[0] * utemp + cosl[0] * u[8];
vtemp = v[1];
v[1] = cosr[0] * vtemp + sinr[0] * v[2];
v[2] = -sinr[0] * vtemp + cosr[0] * v[2];
vtemp = v[4];
v[4] = cosr[0] * vtemp + sinr[0] * v[5];
v[5] = -sinr[0] * vtemp + cosr[0] * v[5];
vtemp = v[7];
v[7] = cosr[0] * vtemp + sinr[0] * v[8];
v[8] = -sinr[0] * vtemp + cosr[0] * v[8];
}return (0);
}, "~A,~A,~A,~A");
c$.max = Clazz.defineMethod (c$, "max", 
function (a, b) {
if (a > b) return (a);
 else return (b);
}, "~N,~N");
c$.min = Clazz.defineMethod (c$, "min", 
function (a, b) {
if (a < b) return (a);
 else return (b);
}, "~N,~N");
c$.d_sign = Clazz.defineMethod (c$, "d_sign", 
function (a, b) {
var x;
x = (a >= 0 ? a : -a);
return (b >= 0 ? x : -x);
}, "~N,~N");
c$.compute_shift = Clazz.defineMethod (c$, "compute_shift", 
function (f, g, h) {
var d__1;
var d__2;
var fhmn;
var fhmx;
var c;
var fa;
var ga;
var ha;
var as;
var at;
var au;
var ssmin;
fa = Math.abs (f);
ga = Math.abs (g);
ha = Math.abs (h);
fhmn = javax.vecmath.Matrix3d.min (fa, ha);
fhmx = javax.vecmath.Matrix3d.max (fa, ha);
if (fhmn == 0.) {
ssmin = 0.;
if (fhmx == 0.) {
} else {
d__1 = javax.vecmath.Matrix3d.min (fhmx, ga) / javax.vecmath.Matrix3d.max (fhmx, ga);
}} else {
if (ga < fhmx) {
as = fhmn / fhmx + 1.;
at = (fhmx - fhmn) / fhmx;
d__1 = ga / fhmx;
au = d__1 * d__1;
c = 2. / (Math.sqrt (as * as + au) + Math.sqrt (at * at + au));
ssmin = fhmn * c;
} else {
au = fhmx / ga;
if (au == 0.) {
ssmin = fhmn * fhmx / ga;
} else {
as = fhmn / fhmx + 1.;
at = (fhmx - fhmn) / fhmx;
d__1 = as * au;
d__2 = at * au;
c = 1. / (Math.sqrt (d__1 * d__1 + 1.) + Math.sqrt (d__2 * d__2 + 1.));
ssmin = fhmn * c * au;
ssmin += ssmin;
}}}return (ssmin);
}, "~N,~N,~N");
c$.compute_2X2 = Clazz.defineMethod (c$, "compute_2X2", 
function (f, g, h, single_values, snl, csl, snr, csr, index) {
var c_b3 = 2.;
var c_b4 = 1.;
var d__1;
var pmax;
var temp;
var swap;
var a;
var d;
var l;
var m;
var r;
var s;
var t;
var tsign;
var fa;
var ga;
var ha;
var ft;
var gt;
var ht;
var mm;
var gasmal;
var tt;
var clt;
var crt;
var slt;
var srt;
var ssmin;
var ssmax;
ssmax = single_values[0];
ssmin = single_values[1];
clt = 0.0;
crt = 0.0;
slt = 0.0;
srt = 0.0;
tsign = 0.0;
ft = f;
fa = Math.abs (ft);
ht = h;
ha = Math.abs (h);
pmax = 1;
if (ha > fa) swap = true;
 else swap = false;
if (swap) {
pmax = 3;
temp = ft;
ft = ht;
ht = temp;
temp = fa;
fa = ha;
ha = temp;
}gt = g;
ga = Math.abs (gt);
if (ga == 0.) {
single_values[1] = ha;
single_values[0] = fa;
clt = 1.;
crt = 1.;
slt = 0.;
srt = 0.;
} else {
gasmal = true;
if (ga > fa) {
pmax = 2;
if (fa / ga < 1.110223024E-16) {
gasmal = false;
ssmax = ga;
if (ha > 1.) {
ssmin = fa / (ga / ha);
} else {
ssmin = fa / ga * ha;
}clt = 1.;
slt = ht / gt;
srt = 1.;
crt = ft / gt;
}}if (gasmal) {
d = fa - ha;
if (d == fa) {
l = 1.;
} else {
l = d / fa;
}m = gt / ft;
t = 2. - l;
mm = m * m;
tt = t * t;
s = Math.sqrt (tt + mm);
if (l == 0.) {
r = Math.abs (m);
} else {
r = Math.sqrt (l * l + mm);
}a = (s + r) * .5;
if (ga > fa) {
pmax = 2;
if (fa / ga < 1.110223024E-16) {
gasmal = false;
ssmax = ga;
if (ha > 1.) {
ssmin = fa / (ga / ha);
} else {
ssmin = fa / ga * ha;
}clt = 1.;
slt = ht / gt;
srt = 1.;
crt = ft / gt;
}}if (gasmal) {
d = fa - ha;
if (d == fa) {
l = 1.;
} else {
l = d / fa;
}m = gt / ft;
t = 2. - l;
mm = m * m;
tt = t * t;
s = Math.sqrt (tt + mm);
if (l == 0.) {
r = Math.abs (m);
} else {
r = Math.sqrt (l * l + mm);
}a = (s + r) * .5;
ssmin = ha / a;
ssmax = fa * a;
if (mm == 0.) {
if (l == 0.) {
t = javax.vecmath.Matrix3d.d_sign (c_b3, ft) * javax.vecmath.Matrix3d.d_sign (c_b4, gt);
} else {
t = gt / javax.vecmath.Matrix3d.d_sign (d, ft) + m / t;
}} else {
t = (m / (s + t) + m / (r + l)) * (a + 1.);
}l = Math.sqrt (t * t + 4.);
crt = 2. / l;
srt = t / l;
clt = (crt + srt * m) / a;
slt = ht / ft * srt / a;
}}if (swap) {
csl[0] = srt;
snl[0] = crt;
csr[0] = slt;
snr[0] = clt;
} else {
csl[0] = clt;
snl[0] = slt;
csr[0] = crt;
snr[0] = srt;
}if (pmax == 1) {
tsign = javax.vecmath.Matrix3d.d_sign (c_b4, csr[0]) * javax.vecmath.Matrix3d.d_sign (c_b4, csl[0]) * javax.vecmath.Matrix3d.d_sign (c_b4, f);
}if (pmax == 2) {
tsign = javax.vecmath.Matrix3d.d_sign (c_b4, snr[0]) * javax.vecmath.Matrix3d.d_sign (c_b4, csl[0]) * javax.vecmath.Matrix3d.d_sign (c_b4, g);
}if (pmax == 3) {
tsign = javax.vecmath.Matrix3d.d_sign (c_b4, snr[0]) * javax.vecmath.Matrix3d.d_sign (c_b4, snl[0]) * javax.vecmath.Matrix3d.d_sign (c_b4, h);
}single_values[index] = javax.vecmath.Matrix3d.d_sign (ssmax, tsign);
d__1 = tsign * javax.vecmath.Matrix3d.d_sign (c_b4, f) * javax.vecmath.Matrix3d.d_sign (c_b4, h);
single_values[index + 1] = javax.vecmath.Matrix3d.d_sign (ssmin, d__1);
}return 0;
}, "~N,~N,~N,~A,~A,~A,~A,~A,~N");
c$.compute_rot = Clazz.defineMethod (c$, "compute_rot", 
function (f, g, sin, cos, index, first) {
var i__1;
var d__1;
var d__2;
var cs;
var sn;
var i;
var scale;
var count;
var f1;
var g1;
var r;
var safmn2 = 2.002083095183101E-146;
var safmx2 = 4.994797680505588E+145;
if (g == 0.) {
cs = 1.;
sn = 0.;
r = f;
} else if (f == 0.) {
cs = 0.;
sn = 1.;
r = g;
} else {
f1 = f;
g1 = g;
scale = javax.vecmath.Matrix3d.max (Math.abs (f1), Math.abs (g1));
if (scale >= 4.9947976805055876E145) {
count = 0;
while (scale >= 4.9947976805055876E145) {
++count;
f1 *= 2.002083095183101E-146;
g1 *= 2.002083095183101E-146;
scale = javax.vecmath.Matrix3d.max (Math.abs (f1), Math.abs (g1));
}
r = Math.sqrt (f1 * f1 + g1 * g1);
cs = f1 / r;
sn = g1 / r;
i__1 = count;
for (i = 1; i <= count; ++i) {
r *= 4.9947976805055876E145;
}
} else if (scale <= 2.002083095183101E-146) {
count = 0;
while (scale <= 2.002083095183101E-146) {
++count;
f1 *= 4.9947976805055876E145;
g1 *= 4.9947976805055876E145;
scale = javax.vecmath.Matrix3d.max (Math.abs (f1), Math.abs (g1));
}
r = Math.sqrt (f1 * f1 + g1 * g1);
cs = f1 / r;
sn = g1 / r;
i__1 = count;
for (i = 1; i <= count; ++i) {
r *= 2.002083095183101E-146;
}
} else {
r = Math.sqrt (f1 * f1 + g1 * g1);
cs = f1 / r;
sn = g1 / r;
}if (Math.abs (f) > Math.abs (g) && cs < 0.) {
cs = -cs;
sn = -sn;
r = -r;
}}sin[index] = sn;
cos[index] = cs;
return r;
}, "~N,~N,~A,~A,~N,~N");
c$.print_mat = Clazz.defineMethod (c$, "print_mat", 
function (mat) {
var i;
for (i = 0; i < 3; i++) {
System.out.println (mat[i * 3 + 0] + " " + mat[i * 3 + 1] + " " + mat[i * 3 + 2] + "\n");
}
}, "~A");
c$.print_det = Clazz.defineMethod (c$, "print_det", 
function (mat) {
var det;
det = mat[0] * mat[4] * mat[8] + mat[1] * mat[5] * mat[6] + mat[2] * mat[3] * mat[7] - mat[2] * mat[4] * mat[6] - mat[0] * mat[5] * mat[7] - mat[1] * mat[3] * mat[8];
System.out.println ("det= " + det);
}, "~A");
c$.mat_mul = Clazz.defineMethod (c$, "mat_mul", 
function (m1, m2, m3) {
var i;
var tmp =  Clazz.newArray (9, 0);
tmp[0] = m1[0] * m2[0] + m1[1] * m2[3] + m1[2] * m2[6];
tmp[1] = m1[0] * m2[1] + m1[1] * m2[4] + m1[2] * m2[7];
tmp[2] = m1[0] * m2[2] + m1[1] * m2[5] + m1[2] * m2[8];
tmp[3] = m1[3] * m2[0] + m1[4] * m2[3] + m1[5] * m2[6];
tmp[4] = m1[3] * m2[1] + m1[4] * m2[4] + m1[5] * m2[7];
tmp[5] = m1[3] * m2[2] + m1[4] * m2[5] + m1[5] * m2[8];
tmp[6] = m1[6] * m2[0] + m1[7] * m2[3] + m1[8] * m2[6];
tmp[7] = m1[6] * m2[1] + m1[7] * m2[4] + m1[8] * m2[7];
tmp[8] = m1[6] * m2[2] + m1[7] * m2[5] + m1[8] * m2[8];
for (i = 0; i < 9; i++) {
m3[i] = tmp[i];
}
}, "~A,~A,~A");
c$.transpose_mat = Clazz.defineMethod (c$, "transpose_mat", 
function ($in, out) {
out[0] = $in[0];
out[1] = $in[3];
out[2] = $in[6];
out[3] = $in[1];
out[4] = $in[4];
out[5] = $in[7];
out[6] = $in[2];
out[7] = $in[5];
out[8] = $in[8];
}, "~A,~A");
c$.max3 = Clazz.defineMethod (c$, "max3", 
function (values) {
if (values[0] > values[1]) {
if (values[0] > values[2]) return (values[0]);
 else return (values[2]);
} else {
if (values[1] > values[2]) return (values[1]);
 else return (values[2]);
}}, "~A");
c$.almostEqual = Clazz.defineMethod (c$, "almostEqual", 
($fz = function (a, b) {
if (a == b) return true;
var EPSILON_ABSOLUTE = 1.0e-6;
var EPSILON_RELATIVE = 1.0e-4;
var diff = Math.abs (a - b);
var absA = Math.abs (a);
var absB = Math.abs (b);
var max = (absA >= absB) ? absA : absB;
if (diff < 1.0E-6) return true;
if ((diff / max) < 1.0E-4) return true;
return false;
}, $fz.isPrivate = true, $fz), "~N,~N");
Clazz.defineMethod (c$, "clone", 
function () {
var m1 = null;
try {
m1 = Clazz.superCall (this, javax.vecmath.Matrix3d, "clone", []);
} catch (e) {
if (Clazz.instanceOf (e, CloneNotSupportedException)) {
throw  new InternalError ();
} else {
throw e;
}
}
return m1;
});
Clazz.defineMethod (c$, "getM00", 
function () {
return this.m00;
});
Clazz.defineMethod (c$, "setM00", 
function (m00) {
this.m00 = m00;
}, "~N");
Clazz.defineMethod (c$, "getM01", 
function () {
return this.m01;
});
Clazz.defineMethod (c$, "setM01", 
function (m01) {
this.m01 = m01;
}, "~N");
Clazz.defineMethod (c$, "getM02", 
function () {
return this.m02;
});
Clazz.defineMethod (c$, "setM02", 
function (m02) {
this.m02 = m02;
}, "~N");
Clazz.defineMethod (c$, "getM10", 
function () {
return this.m10;
});
Clazz.defineMethod (c$, "setM10", 
function (m10) {
this.m10 = m10;
}, "~N");
Clazz.defineMethod (c$, "getM11", 
function () {
return this.m11;
});
Clazz.defineMethod (c$, "setM11", 
function (m11) {
this.m11 = m11;
}, "~N");
Clazz.defineMethod (c$, "getM12", 
function () {
return this.m12;
});
Clazz.defineMethod (c$, "setM12", 
function (m12) {
this.m12 = m12;
}, "~N");
Clazz.defineMethod (c$, "getM20", 
function () {
return this.m20;
});
Clazz.defineMethod (c$, "setM20", 
function (m20) {
this.m20 = m20;
}, "~N");
Clazz.defineMethod (c$, "getM21", 
function () {
return this.m21;
});
Clazz.defineMethod (c$, "setM21", 
function (m21) {
this.m21 = m21;
}, "~N");
Clazz.defineMethod (c$, "getM22", 
function () {
return this.m22;
});
Clazz.defineMethod (c$, "setM22", 
function (m22) {
this.m22 = m22;
}, "~N");
Clazz.defineStatics (c$,
"EPS", 1.110223024E-16,
"ERR_EPS", 1.0E-8,
"xin", 0,
"yin", 0,
"zin", 0,
"xout", 0,
"yout", 0,
"zout", 0);
});
