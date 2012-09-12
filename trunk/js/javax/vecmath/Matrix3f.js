Clazz.declarePackage ("javax.vecmath");
Clazz.load (null, "javax.vecmath.Matrix3f", ["java.lang.ArrayIndexOutOfBoundsException", "$.InternalError", "$.RuntimeException", "javax.vecmath.Matrix3d", "$.SingularMatrixException", "$.VecMathI18N", "$.VecMathUtil"], function () {
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
}, javax.vecmath, "Matrix3f", null, [java.io.Serializable, Cloneable]);
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
this.m00 = (tmp_rot[0] * scale);
this.m01 = (tmp_rot[1] * scale);
this.m02 = (tmp_rot[2] * scale);
this.m10 = (tmp_rot[3] * scale);
this.m11 = (tmp_rot[4] * scale);
this.m12 = (tmp_rot[5] * scale);
this.m20 = (tmp_rot[6] * scale);
this.m21 = (tmp_rot[7] * scale);
this.m22 = (tmp_rot[8] * scale);
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
throw  new ArrayIndexOutOfBoundsException (javax.vecmath.VecMathI18N.getString ("Matrix3f0"));
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
throw  new ArrayIndexOutOfBoundsException (javax.vecmath.VecMathI18N.getString ("Matrix3f0"));
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
throw  new ArrayIndexOutOfBoundsException (javax.vecmath.VecMathI18N.getString ("Matrix3f0"));
}
break;
default:
throw  new ArrayIndexOutOfBoundsException (javax.vecmath.VecMathI18N.getString ("Matrix3f0"));
}
}, "~N,~N,~N");
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
throw  new ArrayIndexOutOfBoundsException (javax.vecmath.VecMathI18N.getString ("Matrix3f1"));
}}, "~N,javax.vecmath.Vector3f");
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
throw  new ArrayIndexOutOfBoundsException (javax.vecmath.VecMathI18N.getString ("Matrix3f1"));
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
throw  new ArrayIndexOutOfBoundsException (javax.vecmath.VecMathI18N.getString ("Matrix3f3"));
}}, "~N,javax.vecmath.Vector3f");
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
throw  new ArrayIndexOutOfBoundsException (javax.vecmath.VecMathI18N.getString ("Matrix3f3"));
}}, "~N,~A");
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
throw  new ArrayIndexOutOfBoundsException (javax.vecmath.VecMathI18N.getString ("Matrix3f5"));
}, "~N,~N");
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
throw  new ArrayIndexOutOfBoundsException (javax.vecmath.VecMathI18N.getString ("Matrix3f6"));
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
throw  new ArrayIndexOutOfBoundsException (javax.vecmath.VecMathI18N.getString ("Matrix3f6"));
}
}, "~N,javax.vecmath.Vector3f");
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
throw  new ArrayIndexOutOfBoundsException (javax.vecmath.VecMathI18N.getString ("Matrix3f6"));
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
throw  new ArrayIndexOutOfBoundsException (javax.vecmath.VecMathI18N.getString ("Matrix3f9"));
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
throw  new ArrayIndexOutOfBoundsException (javax.vecmath.VecMathI18N.getString ("Matrix3f9"));
}
}, "~N,javax.vecmath.Vector3f");
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
throw  new ArrayIndexOutOfBoundsException (javax.vecmath.VecMathI18N.getString ("Matrix3f9"));
}
}, "~N,~A");
Clazz.defineMethod (c$, "getScale", 
function () {
var tmp_rot =  Clazz.newArray (9, 0);
var tmp_scale =  Clazz.newArray (3, 0);
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
}, "~N,javax.vecmath.Matrix3f");
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
}, "javax.vecmath.Matrix3f,javax.vecmath.Matrix3f");
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
}, "javax.vecmath.Matrix3f");
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
}, "javax.vecmath.Matrix3f,javax.vecmath.Matrix3f");
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
}, "javax.vecmath.Matrix3f");
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
}, "javax.vecmath.Matrix3f");
Clazz.defineMethod (c$, "set", 
function (q1) {
this.m00 = 1.0 - 2.0 * q1.y * q1.y - 2.0 * q1.z * q1.z;
this.m10 = 2.0 * (q1.x * q1.y + q1.w * q1.z);
this.m20 = 2.0 * (q1.x * q1.z - q1.w * q1.y);
this.m01 = 2.0 * (q1.x * q1.y - q1.w * q1.z);
this.m11 = 1.0 - 2.0 * q1.x * q1.x - 2.0 * q1.z * q1.z;
this.m21 = 2.0 * (q1.y * q1.z + q1.w * q1.x);
this.m02 = 2.0 * (q1.x * q1.z + q1.w * q1.y);
this.m12 = 2.0 * (q1.y * q1.z - q1.w * q1.x);
this.m22 = 1.0 - 2.0 * q1.x * q1.x - 2.0 * q1.y * q1.y;
}, "javax.vecmath.Quat4f");
Clazz.defineMethod (c$, "set", 
function (a1) {
var mag = Math.sqrt (a1.x * a1.x + a1.y * a1.y + a1.z * a1.z);
if (mag < 1.0E-8) {
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
function (a1) {
var mag = Math.sqrt (a1.x * a1.x + a1.y * a1.y + a1.z * a1.z);
if (mag < 1.0E-8) {
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
this.m00 = (t * ax * ax + cosTheta);
this.m01 = (t * xy - sinTheta * az);
this.m02 = (t * xz + sinTheta * ay);
this.m10 = (t * xy + sinTheta * az);
this.m11 = (t * ay * ay + cosTheta);
this.m12 = (t * yz - sinTheta * ax);
this.m20 = (t * xz - sinTheta * ay);
this.m21 = (t * yz + sinTheta * ax);
this.m22 = (t * az * az + cosTheta);
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
}, "javax.vecmath.Quat4d");
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
Clazz.defineMethod (c$, "invert", 
function (m1) {
this.invertGeneral (m1);
}, "javax.vecmath.Matrix3f");
Clazz.defineMethod (c$, "invert", 
function () {
this.invertGeneral (this);
});
Clazz.defineMethod (c$, "invertGeneral", 
($fz = function (m1) {
var temp =  Clazz.newArray (9, 0);
var result =  Clazz.newArray (9, 0);
var row_perm =  Clazz.newArray (3, 0);
var i;
var r;
var c;
temp[0] = m1.m00;
temp[1] = m1.m01;
temp[2] = m1.m02;
temp[3] = m1.m10;
temp[4] = m1.m11;
temp[5] = m1.m12;
temp[6] = m1.m20;
temp[7] = m1.m21;
temp[8] = m1.m22;
if (!javax.vecmath.Matrix3f.luDecomposition (temp, row_perm)) {
throw  new javax.vecmath.SingularMatrixException (javax.vecmath.VecMathI18N.getString ("Matrix3f12"));
}for (i = 0; i < 9; i++) result[i] = 0.0;

result[0] = 1.0;
result[4] = 1.0;
result[8] = 1.0;
javax.vecmath.Matrix3f.luBacksubstitution (temp, row_perm, result);
this.m00 = result[0];
this.m01 = result[1];
this.m02 = result[2];
this.m10 = result[3];
this.m11 = result[4];
this.m12 = result[5];
this.m20 = result[6];
this.m21 = result[7];
this.m22 = result[8];
}, $fz.isPrivate = true, $fz), "javax.vecmath.Matrix3f");
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
throw  new RuntimeException (javax.vecmath.VecMathI18N.getString ("Matrix3f13"));
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
}, "~N,javax.vecmath.Matrix3f");
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
}, "javax.vecmath.Matrix3f");
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
}}, "javax.vecmath.Matrix3f,javax.vecmath.Matrix3f");
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
this.m00 = (tmp_rot[0]);
this.m01 = (tmp_rot[1]);
this.m02 = (tmp_rot[2]);
this.m10 = (tmp_rot[3]);
this.m11 = (tmp_rot[4]);
this.m12 = (tmp_rot[5]);
this.m20 = (tmp_rot[6]);
this.m21 = (tmp_rot[7]);
this.m22 = (tmp_rot[8]);
}, "javax.vecmath.Matrix3f");
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
this.m00 = (tmp_rot[0]);
this.m01 = (tmp_rot[1]);
this.m02 = (tmp_rot[2]);
this.m10 = (tmp_rot[3]);
this.m11 = (tmp_rot[4]);
this.m12 = (tmp_rot[5]);
this.m20 = (tmp_rot[6]);
this.m21 = (tmp_rot[7]);
this.m22 = (tmp_rot[8]);
}, "javax.vecmath.Matrix3f,javax.vecmath.Matrix3f");
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
}}, "javax.vecmath.Matrix3f,javax.vecmath.Matrix3f");
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
}}, "javax.vecmath.Matrix3f,javax.vecmath.Matrix3f");
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
}}, "javax.vecmath.Matrix3f,javax.vecmath.Matrix3f");
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
this.m00 = (tmp_rot[0]);
this.m01 = (tmp_rot[1]);
this.m02 = (tmp_rot[2]);
this.m10 = (tmp_rot[3]);
this.m11 = (tmp_rot[4]);
this.m12 = (tmp_rot[5]);
this.m20 = (tmp_rot[6]);
this.m21 = (tmp_rot[7]);
this.m22 = (tmp_rot[8]);
}, "javax.vecmath.Matrix3f");
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
}, "javax.vecmath.Matrix3f");
Clazz.defineMethod (c$, "equals", 
function (m1) {
try {
return (this.m00 == m1.m00 && this.m01 == m1.m01 && this.m02 == m1.m02 && this.m10 == m1.m10 && this.m11 == m1.m11 && this.m12 == m1.m12 && this.m20 == m1.m20 && this.m21 == m1.m21 && this.m22 == m1.m22);
} catch (e2) {
if (Clazz.exceptionOf (e2, NullPointerException)) {
return false;
} else {
throw e2;
}
}
}, "javax.vecmath.Matrix3f");
Clazz.defineMethod (c$, "equals", 
function (o1) {
try {
var m2 = o1;
return (this.m00 == m2.m00 && this.m01 == m2.m01 && this.m02 == m2.m02 && this.m10 == m2.m10 && this.m11 == m2.m11 && this.m12 == m2.m12 && this.m20 == m2.m20 && this.m21 == m2.m21 && this.m22 == m2.m22);
} catch (e$$) {
if (Clazz.exceptionOf (e$$, ClassCastException)) {
var e1 = e$$;
{
return false;
}
} else if (Clazz.exceptionOf (e$$, NullPointerException)) {
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
var status = true;
if (Math.abs (this.m00 - m1.m00) > epsilon) status = false;
if (Math.abs (this.m01 - m1.m01) > epsilon) status = false;
if (Math.abs (this.m02 - m1.m02) > epsilon) status = false;
if (Math.abs (this.m10 - m1.m10) > epsilon) status = false;
if (Math.abs (this.m11 - m1.m11) > epsilon) status = false;
if (Math.abs (this.m12 - m1.m12) > epsilon) status = false;
if (Math.abs (this.m20 - m1.m20) > epsilon) status = false;
if (Math.abs (this.m21 - m1.m21) > epsilon) status = false;
if (Math.abs (this.m22 - m1.m22) > epsilon) status = false;
return (status);
}, "javax.vecmath.Matrix3f,~N");
Clazz.overrideMethod (c$, "hashCode", 
function () {
var bits = 1;
bits = 31 * bits + javax.vecmath.VecMathUtil.floatToIntBits (this.m00);
bits = 31 * bits + javax.vecmath.VecMathUtil.floatToIntBits (this.m01);
bits = 31 * bits + javax.vecmath.VecMathUtil.floatToIntBits (this.m02);
bits = 31 * bits + javax.vecmath.VecMathUtil.floatToIntBits (this.m10);
bits = 31 * bits + javax.vecmath.VecMathUtil.floatToIntBits (this.m11);
bits = 31 * bits + javax.vecmath.VecMathUtil.floatToIntBits (this.m12);
bits = 31 * bits + javax.vecmath.VecMathUtil.floatToIntBits (this.m20);
bits = 31 * bits + javax.vecmath.VecMathUtil.floatToIntBits (this.m21);
bits = 31 * bits + javax.vecmath.VecMathUtil.floatToIntBits (this.m22);
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
}, "javax.vecmath.Matrix3f");
Clazz.defineMethod (c$, "transform", 
function (t) {
var x;
var y;
var z;
x = this.m00 * t.x + this.m01 * t.y + this.m02 * t.z;
y = this.m10 * t.x + this.m11 * t.y + this.m12 * t.z;
z = this.m20 * t.x + this.m21 * t.y + this.m22 * t.z;
t.set (x, y, z);
}, "javax.vecmath.Tuple3f");
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
}, "javax.vecmath.Tuple3f,javax.vecmath.Tuple3f");
Clazz.defineMethod (c$, "getScaleRotate", 
function (scales, rot) {
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
javax.vecmath.Matrix3d.compute_svd (tmp, scales, rot);
return ;
}, "~A,~A");
Clazz.defineMethod (c$, "clone", 
function () {
var m1 = null;
try {
m1 = Clazz.superCall (this, javax.vecmath.Matrix3f, "clone", []);
} catch (e) {
if (Clazz.exceptionOf (e, CloneNotSupportedException)) {
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
"EPS", 1.0E-8);
});
