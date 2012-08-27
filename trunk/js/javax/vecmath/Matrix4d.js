Clazz.declarePackage ("javax.vecmath");
Clazz.load (null, "javax.vecmath.Matrix4d", ["java.lang.ArrayIndexOutOfBoundsException", "$.InternalError", "$.RuntimeException", "javax.vecmath.Matrix3d", "$.SingularMatrixException", "$.VecMathI18N", "$.VecMathUtil"], function () {
c$ = Clazz.decorateAsClass (function () {
this.m00 = 0;
this.m01 = 0;
this.m02 = 0;
this.m03 = 0;
this.m10 = 0;
this.m11 = 0;
this.m12 = 0;
this.m13 = 0;
this.m20 = 0;
this.m21 = 0;
this.m22 = 0;
this.m23 = 0;
this.m30 = 0;
this.m31 = 0;
this.m32 = 0;
this.m33 = 0;
Clazz.instantialize (this, arguments);
}, javax.vecmath, "Matrix4d", null, [java.io.Serializable, Cloneable]);
Clazz.makeConstructor (c$, 
function (m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
this.m00 = m00;
this.m01 = m01;
this.m02 = m02;
this.m03 = m03;
this.m10 = m10;
this.m11 = m11;
this.m12 = m12;
this.m13 = m13;
this.m20 = m20;
this.m21 = m21;
this.m22 = m22;
this.m23 = m23;
this.m30 = m30;
this.m31 = m31;
this.m32 = m32;
this.m33 = m33;
}, "~N,~N,~N,~N,~N,~N,~N,~N,~N,~N,~N,~N,~N,~N,~N,~N");
Clazz.makeConstructor (c$, 
function (v) {
this.m00 = v[0];
this.m01 = v[1];
this.m02 = v[2];
this.m03 = v[3];
this.m10 = v[4];
this.m11 = v[5];
this.m12 = v[6];
this.m13 = v[7];
this.m20 = v[8];
this.m21 = v[9];
this.m22 = v[10];
this.m23 = v[11];
this.m30 = v[12];
this.m31 = v[13];
this.m32 = v[14];
this.m33 = v[15];
}, "~A");
Clazz.makeConstructor (c$, 
function (q1, t1, s) {
this.m00 = s * (1.0 - 2.0 * q1.y * q1.y - 2.0 * q1.z * q1.z);
this.m10 = s * (2.0 * (q1.x * q1.y + q1.w * q1.z));
this.m20 = s * (2.0 * (q1.x * q1.z - q1.w * q1.y));
this.m01 = s * (2.0 * (q1.x * q1.y - q1.w * q1.z));
this.m11 = s * (1.0 - 2.0 * q1.x * q1.x - 2.0 * q1.z * q1.z);
this.m21 = s * (2.0 * (q1.y * q1.z + q1.w * q1.x));
this.m02 = s * (2.0 * (q1.x * q1.z + q1.w * q1.y));
this.m12 = s * (2.0 * (q1.y * q1.z - q1.w * q1.x));
this.m22 = s * (1.0 - 2.0 * q1.x * q1.x - 2.0 * q1.y * q1.y);
this.m03 = t1.x;
this.m13 = t1.y;
this.m23 = t1.z;
this.m30 = 0.0;
this.m31 = 0.0;
this.m32 = 0.0;
this.m33 = 1.0;
}, "javax.vecmath.Quat4d,javax.vecmath.Vector3d,~N");
Clazz.makeConstructor (c$, 
function (q1, t1, s) {
this.m00 = s * (1.0 - 2.0 * q1.y * q1.y - 2.0 * q1.z * q1.z);
this.m10 = s * (2.0 * (q1.x * q1.y + q1.w * q1.z));
this.m20 = s * (2.0 * (q1.x * q1.z - q1.w * q1.y));
this.m01 = s * (2.0 * (q1.x * q1.y - q1.w * q1.z));
this.m11 = s * (1.0 - 2.0 * q1.x * q1.x - 2.0 * q1.z * q1.z);
this.m21 = s * (2.0 * (q1.y * q1.z + q1.w * q1.x));
this.m02 = s * (2.0 * (q1.x * q1.z + q1.w * q1.y));
this.m12 = s * (2.0 * (q1.y * q1.z - q1.w * q1.x));
this.m22 = s * (1.0 - 2.0 * q1.x * q1.x - 2.0 * q1.y * q1.y);
this.m03 = t1.x;
this.m13 = t1.y;
this.m23 = t1.z;
this.m30 = 0.0;
this.m31 = 0.0;
this.m32 = 0.0;
this.m33 = 1.0;
}, "javax.vecmath.Quat4f,javax.vecmath.Vector3d,~N");
Clazz.makeConstructor (c$, 
function (m1) {
this.m00 = m1.m00;
this.m01 = m1.m01;
this.m02 = m1.m02;
this.m03 = m1.m03;
this.m10 = m1.m10;
this.m11 = m1.m11;
this.m12 = m1.m12;
this.m13 = m1.m13;
this.m20 = m1.m20;
this.m21 = m1.m21;
this.m22 = m1.m22;
this.m23 = m1.m23;
this.m30 = m1.m30;
this.m31 = m1.m31;
this.m32 = m1.m32;
this.m33 = m1.m33;
}, "javax.vecmath.Matrix4d");
Clazz.makeConstructor (c$, 
function (m1) {
this.m00 = m1.m00;
this.m01 = m1.m01;
this.m02 = m1.m02;
this.m03 = m1.m03;
this.m10 = m1.m10;
this.m11 = m1.m11;
this.m12 = m1.m12;
this.m13 = m1.m13;
this.m20 = m1.m20;
this.m21 = m1.m21;
this.m22 = m1.m22;
this.m23 = m1.m23;
this.m30 = m1.m30;
this.m31 = m1.m31;
this.m32 = m1.m32;
this.m33 = m1.m33;
}, "javax.vecmath.Matrix4f");
Clazz.makeConstructor (c$, 
function (m1, t1, s) {
this.m00 = m1.m00 * s;
this.m01 = m1.m01 * s;
this.m02 = m1.m02 * s;
this.m03 = t1.x;
this.m10 = m1.m10 * s;
this.m11 = m1.m11 * s;
this.m12 = m1.m12 * s;
this.m13 = t1.y;
this.m20 = m1.m20 * s;
this.m21 = m1.m21 * s;
this.m22 = m1.m22 * s;
this.m23 = t1.z;
this.m30 = 0.0;
this.m31 = 0.0;
this.m32 = 0.0;
this.m33 = 1.0;
}, "javax.vecmath.Matrix3f,javax.vecmath.Vector3d,~N");
Clazz.makeConstructor (c$, 
function (m1, t1, s) {
this.m00 = m1.m00 * s;
this.m01 = m1.m01 * s;
this.m02 = m1.m02 * s;
this.m03 = t1.x;
this.m10 = m1.m10 * s;
this.m11 = m1.m11 * s;
this.m12 = m1.m12 * s;
this.m13 = t1.y;
this.m20 = m1.m20 * s;
this.m21 = m1.m21 * s;
this.m22 = m1.m22 * s;
this.m23 = t1.z;
this.m30 = 0.0;
this.m31 = 0.0;
this.m32 = 0.0;
this.m33 = 1.0;
}, "javax.vecmath.Matrix3d,javax.vecmath.Vector3d,~N");
Clazz.makeConstructor (c$, 
function () {
this.m00 = 0.0;
this.m01 = 0.0;
this.m02 = 0.0;
this.m03 = 0.0;
this.m10 = 0.0;
this.m11 = 0.0;
this.m12 = 0.0;
this.m13 = 0.0;
this.m20 = 0.0;
this.m21 = 0.0;
this.m22 = 0.0;
this.m23 = 0.0;
this.m30 = 0.0;
this.m31 = 0.0;
this.m32 = 0.0;
this.m33 = 0.0;
});
Clazz.overrideMethod (c$, "toString", 
function () {
return this.m00 + ", " + this.m01 + ", " + this.m02 + ", " + this.m03 + "\n" + this.m10 + ", " + this.m11 + ", " + this.m12 + ", " + this.m13 + "\n" + this.m20 + ", " + this.m21 + ", " + this.m22 + ", " + this.m23 + "\n" + this.m30 + ", " + this.m31 + ", " + this.m32 + ", " + this.m33 + "\n";
});
Clazz.defineMethod (c$, "setIdentity", 
function () {
this.m00 = 1.0;
this.m01 = 0.0;
this.m02 = 0.0;
this.m03 = 0.0;
this.m10 = 0.0;
this.m11 = 1.0;
this.m12 = 0.0;
this.m13 = 0.0;
this.m20 = 0.0;
this.m21 = 0.0;
this.m22 = 1.0;
this.m23 = 0.0;
this.m30 = 0.0;
this.m31 = 0.0;
this.m32 = 0.0;
this.m33 = 1.0;
});
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
case 3:
this.m03 = value;
break;
default:
throw  new ArrayIndexOutOfBoundsException (javax.vecmath.VecMathI18N.getString ("Matrix4d0"));
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
case 3:
this.m13 = value;
break;
default:
throw  new ArrayIndexOutOfBoundsException (javax.vecmath.VecMathI18N.getString ("Matrix4d0"));
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
case 3:
this.m23 = value;
break;
default:
throw  new ArrayIndexOutOfBoundsException (javax.vecmath.VecMathI18N.getString ("Matrix4d0"));
}
break;
case 3:
switch (column) {
case 0:
this.m30 = value;
break;
case 1:
this.m31 = value;
break;
case 2:
this.m32 = value;
break;
case 3:
this.m33 = value;
break;
default:
throw  new ArrayIndexOutOfBoundsException (javax.vecmath.VecMathI18N.getString ("Matrix4d0"));
}
break;
default:
throw  new ArrayIndexOutOfBoundsException (javax.vecmath.VecMathI18N.getString ("Matrix4d0"));
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
case 3:
return (this.m03);
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
case 3:
return (this.m13);
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
case 3:
return (this.m23);
default:
break;
}
break;
case 3:
switch (column) {
case 0:
return (this.m30);
case 1:
return (this.m31);
case 2:
return (this.m32);
case 3:
return (this.m33);
default:
break;
}
break;
default:
break;
}
throw  new ArrayIndexOutOfBoundsException (javax.vecmath.VecMathI18N.getString ("Matrix4d1"));
}, "~N,~N");
Clazz.defineMethod (c$, "getRow", 
function (row, v) {
if (row == 0) {
v.x = this.m00;
v.y = this.m01;
v.z = this.m02;
v.w = this.m03;
} else if (row == 1) {
v.x = this.m10;
v.y = this.m11;
v.z = this.m12;
v.w = this.m13;
} else if (row == 2) {
v.x = this.m20;
v.y = this.m21;
v.z = this.m22;
v.w = this.m23;
} else if (row == 3) {
v.x = this.m30;
v.y = this.m31;
v.z = this.m32;
v.w = this.m33;
} else {
throw  new ArrayIndexOutOfBoundsException (javax.vecmath.VecMathI18N.getString ("Matrix4d2"));
}}, "~N,javax.vecmath.Vector4d");
Clazz.defineMethod (c$, "getRow", 
function (row, v) {
if (row == 0) {
v[0] = this.m00;
v[1] = this.m01;
v[2] = this.m02;
v[3] = this.m03;
} else if (row == 1) {
v[0] = this.m10;
v[1] = this.m11;
v[2] = this.m12;
v[3] = this.m13;
} else if (row == 2) {
v[0] = this.m20;
v[1] = this.m21;
v[2] = this.m22;
v[3] = this.m23;
} else if (row == 3) {
v[0] = this.m30;
v[1] = this.m31;
v[2] = this.m32;
v[3] = this.m33;
} else {
throw  new ArrayIndexOutOfBoundsException (javax.vecmath.VecMathI18N.getString ("Matrix4d2"));
}}, "~N,~A");
Clazz.defineMethod (c$, "getColumn", 
function (column, v) {
if (column == 0) {
v.x = this.m00;
v.y = this.m10;
v.z = this.m20;
v.w = this.m30;
} else if (column == 1) {
v.x = this.m01;
v.y = this.m11;
v.z = this.m21;
v.w = this.m31;
} else if (column == 2) {
v.x = this.m02;
v.y = this.m12;
v.z = this.m22;
v.w = this.m32;
} else if (column == 3) {
v.x = this.m03;
v.y = this.m13;
v.z = this.m23;
v.w = this.m33;
} else {
throw  new ArrayIndexOutOfBoundsException (javax.vecmath.VecMathI18N.getString ("Matrix4d3"));
}}, "~N,javax.vecmath.Vector4d");
Clazz.defineMethod (c$, "getColumn", 
function (column, v) {
if (column == 0) {
v[0] = this.m00;
v[1] = this.m10;
v[2] = this.m20;
v[3] = this.m30;
} else if (column == 1) {
v[0] = this.m01;
v[1] = this.m11;
v[2] = this.m21;
v[3] = this.m31;
} else if (column == 2) {
v[0] = this.m02;
v[1] = this.m12;
v[2] = this.m22;
v[3] = this.m32;
} else if (column == 3) {
v[0] = this.m03;
v[1] = this.m13;
v[2] = this.m23;
v[3] = this.m33;
} else {
throw  new ArrayIndexOutOfBoundsException (javax.vecmath.VecMathI18N.getString ("Matrix4d3"));
}}, "~N,~A");
Clazz.defineMethod (c$, "get", 
function (m1) {
var tmp_rot =  Clazz.newArray (9, 0);
var tmp_scale =  Clazz.newArray (3, 0);
this.getScaleRotate (tmp_scale, tmp_rot);
m1.m00 = tmp_rot[0];
m1.m01 = tmp_rot[1];
m1.m02 = tmp_rot[2];
m1.m10 = tmp_rot[3];
m1.m11 = tmp_rot[4];
m1.m12 = tmp_rot[5];
m1.m20 = tmp_rot[6];
m1.m21 = tmp_rot[7];
m1.m22 = tmp_rot[8];
}, "javax.vecmath.Matrix3d");
Clazz.defineMethod (c$, "get", 
function (m1) {
var tmp_rot =  Clazz.newArray (9, 0);
var tmp_scale =  Clazz.newArray (3, 0);
this.getScaleRotate (tmp_scale, tmp_rot);
m1.m00 = tmp_rot[0];
m1.m01 = tmp_rot[1];
m1.m02 = tmp_rot[2];
m1.m10 = tmp_rot[3];
m1.m11 = tmp_rot[4];
m1.m12 = tmp_rot[5];
m1.m20 = tmp_rot[6];
m1.m21 = tmp_rot[7];
m1.m22 = tmp_rot[8];
}, "javax.vecmath.Matrix3f");
Clazz.defineMethod (c$, "get", 
function (m1, t1) {
var tmp_rot =  Clazz.newArray (9, 0);
var tmp_scale =  Clazz.newArray (3, 0);
this.getScaleRotate (tmp_scale, tmp_rot);
m1.m00 = tmp_rot[0];
m1.m01 = tmp_rot[1];
m1.m02 = tmp_rot[2];
m1.m10 = tmp_rot[3];
m1.m11 = tmp_rot[4];
m1.m12 = tmp_rot[5];
m1.m20 = tmp_rot[6];
m1.m21 = tmp_rot[7];
m1.m22 = tmp_rot[8];
t1.x = this.m03;
t1.y = this.m13;
t1.z = this.m23;
return (javax.vecmath.Matrix3d.max3 (tmp_scale));
}, "javax.vecmath.Matrix3d,javax.vecmath.Vector3d");
Clazz.defineMethod (c$, "get", 
function (m1, t1) {
var tmp_rot =  Clazz.newArray (9, 0);
var tmp_scale =  Clazz.newArray (3, 0);
this.getScaleRotate (tmp_scale, tmp_rot);
m1.m00 = tmp_rot[0];
m1.m01 = tmp_rot[1];
m1.m02 = tmp_rot[2];
m1.m10 = tmp_rot[3];
m1.m11 = tmp_rot[4];
m1.m12 = tmp_rot[5];
m1.m20 = tmp_rot[6];
m1.m21 = tmp_rot[7];
m1.m22 = tmp_rot[8];
t1.x = this.m03;
t1.y = this.m13;
t1.z = this.m23;
return (javax.vecmath.Matrix3d.max3 (tmp_scale));
}, "javax.vecmath.Matrix3f,javax.vecmath.Vector3d");
Clazz.defineMethod (c$, "get", 
function (q1) {
var tmp_rot =  Clazz.newArray (9, 0);
var tmp_scale =  Clazz.newArray (3, 0);
this.getScaleRotate (tmp_scale, tmp_rot);
var ww;
ww = 0.25 * (1.0 + tmp_rot[0] + tmp_rot[4] + tmp_rot[8]);
if (!((ww < 0 ? -ww : ww) < 1.0e-30)) {
q1.w = Math.sqrt (ww);
ww = 0.25 / q1.w;
q1.x = ((tmp_rot[7] - tmp_rot[5]) * ww);
q1.y = ((tmp_rot[2] - tmp_rot[6]) * ww);
q1.z = ((tmp_rot[3] - tmp_rot[1]) * ww);
return ;
}q1.w = 0.0;
ww = -0.5 * (tmp_rot[4] + tmp_rot[8]);
if (!((ww < 0 ? -ww : ww) < 1.0e-30)) {
q1.x = Math.sqrt (ww);
ww = 0.5 / q1.x;
q1.y = (tmp_rot[3] * ww);
q1.z = (tmp_rot[6] * ww);
return ;
}q1.x = 0.0;
ww = 0.5 * (1.0 - tmp_rot[8]);
if (!((ww < 0 ? -ww : ww) < 1.0e-30)) {
q1.y = (Math.sqrt (ww));
q1.z = (tmp_rot[7] / (2.0 * q1.y));
return ;
}q1.y = 0.0;
q1.z = 1.0;
}, "javax.vecmath.Quat4f");
Clazz.defineMethod (c$, "get", 
function (q1) {
var tmp_rot =  Clazz.newArray (9, 0);
var tmp_scale =  Clazz.newArray (3, 0);
this.getScaleRotate (tmp_scale, tmp_rot);
var ww;
ww = 0.25 * (1.0 + tmp_rot[0] + tmp_rot[4] + tmp_rot[8]);
if (!((ww < 0 ? -ww : ww) < 1.0e-30)) {
q1.w = Math.sqrt (ww);
ww = 0.25 / q1.w;
q1.x = (tmp_rot[7] - tmp_rot[5]) * ww;
q1.y = (tmp_rot[2] - tmp_rot[6]) * ww;
q1.z = (tmp_rot[3] - tmp_rot[1]) * ww;
return ;
}q1.w = 0.0;
ww = -0.5 * (tmp_rot[4] + tmp_rot[8]);
if (!((ww < 0 ? -ww : ww) < 1.0e-30)) {
q1.x = Math.sqrt (ww);
ww = 0.5 / q1.x;
q1.y = tmp_rot[3] * ww;
q1.z = tmp_rot[6] * ww;
return ;
}q1.x = 0.0;
ww = 0.5 * (1.0 - tmp_rot[8]);
if (!((ww < 0 ? -ww : ww) < 1.0e-30)) {
q1.y = Math.sqrt (ww);
q1.z = tmp_rot[7] / (2.0 * q1.y);
return ;
}q1.y = 0.0;
q1.z = 1.0;
}, "javax.vecmath.Quat4d");
Clazz.defineMethod (c$, "get", 
function (trans) {
trans.x = this.m03;
trans.y = this.m13;
trans.z = this.m23;
}, "javax.vecmath.Vector3d");
Clazz.defineMethod (c$, "getRotationScale", 
function (m1) {
m1.m00 = this.m00;
m1.m01 = this.m01;
m1.m02 = this.m02;
m1.m10 = this.m10;
m1.m11 = this.m11;
m1.m12 = this.m12;
m1.m20 = this.m20;
m1.m21 = this.m21;
m1.m22 = this.m22;
}, "javax.vecmath.Matrix3f");
Clazz.defineMethod (c$, "getRotationScale", 
function (m1) {
m1.m00 = this.m00;
m1.m01 = this.m01;
m1.m02 = this.m02;
m1.m10 = this.m10;
m1.m11 = this.m11;
m1.m12 = this.m12;
m1.m20 = this.m20;
m1.m21 = this.m21;
m1.m22 = this.m22;
}, "javax.vecmath.Matrix3d");
Clazz.defineMethod (c$, "getScale", 
function () {
var tmp_rot =  Clazz.newArray (9, 0);
var tmp_scale =  Clazz.newArray (3, 0);
this.getScaleRotate (tmp_scale, tmp_rot);
return (javax.vecmath.Matrix3d.max3 (tmp_scale));
});
Clazz.defineMethod (c$, "setRotationScale", 
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
Clazz.defineMethod (c$, "setRotationScale", 
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
Clazz.defineMethod (c$, "setRow", 
function (row, x, y, z, w) {
switch (row) {
case 0:
this.m00 = x;
this.m01 = y;
this.m02 = z;
this.m03 = w;
break;
case 1:
this.m10 = x;
this.m11 = y;
this.m12 = z;
this.m13 = w;
break;
case 2:
this.m20 = x;
this.m21 = y;
this.m22 = z;
this.m23 = w;
break;
case 3:
this.m30 = x;
this.m31 = y;
this.m32 = z;
this.m33 = w;
break;
default:
throw  new ArrayIndexOutOfBoundsException (javax.vecmath.VecMathI18N.getString ("Matrix4d4"));
}
}, "~N,~N,~N,~N,~N");
Clazz.defineMethod (c$, "setRow", 
function (row, v) {
switch (row) {
case 0:
this.m00 = v.x;
this.m01 = v.y;
this.m02 = v.z;
this.m03 = v.w;
break;
case 1:
this.m10 = v.x;
this.m11 = v.y;
this.m12 = v.z;
this.m13 = v.w;
break;
case 2:
this.m20 = v.x;
this.m21 = v.y;
this.m22 = v.z;
this.m23 = v.w;
break;
case 3:
this.m30 = v.x;
this.m31 = v.y;
this.m32 = v.z;
this.m33 = v.w;
break;
default:
throw  new ArrayIndexOutOfBoundsException (javax.vecmath.VecMathI18N.getString ("Matrix4d4"));
}
}, "~N,javax.vecmath.Vector4d");
Clazz.defineMethod (c$, "setRow", 
function (row, v) {
switch (row) {
case 0:
this.m00 = v[0];
this.m01 = v[1];
this.m02 = v[2];
this.m03 = v[3];
break;
case 1:
this.m10 = v[0];
this.m11 = v[1];
this.m12 = v[2];
this.m13 = v[3];
break;
case 2:
this.m20 = v[0];
this.m21 = v[1];
this.m22 = v[2];
this.m23 = v[3];
break;
case 3:
this.m30 = v[0];
this.m31 = v[1];
this.m32 = v[2];
this.m33 = v[3];
break;
default:
throw  new ArrayIndexOutOfBoundsException (javax.vecmath.VecMathI18N.getString ("Matrix4d4"));
}
}, "~N,~A");
Clazz.defineMethod (c$, "setColumn", 
function (column, x, y, z, w) {
switch (column) {
case 0:
this.m00 = x;
this.m10 = y;
this.m20 = z;
this.m30 = w;
break;
case 1:
this.m01 = x;
this.m11 = y;
this.m21 = z;
this.m31 = w;
break;
case 2:
this.m02 = x;
this.m12 = y;
this.m22 = z;
this.m32 = w;
break;
case 3:
this.m03 = x;
this.m13 = y;
this.m23 = z;
this.m33 = w;
break;
default:
throw  new ArrayIndexOutOfBoundsException (javax.vecmath.VecMathI18N.getString ("Matrix4d7"));
}
}, "~N,~N,~N,~N,~N");
Clazz.defineMethod (c$, "setColumn", 
function (column, v) {
switch (column) {
case 0:
this.m00 = v.x;
this.m10 = v.y;
this.m20 = v.z;
this.m30 = v.w;
break;
case 1:
this.m01 = v.x;
this.m11 = v.y;
this.m21 = v.z;
this.m31 = v.w;
break;
case 2:
this.m02 = v.x;
this.m12 = v.y;
this.m22 = v.z;
this.m32 = v.w;
break;
case 3:
this.m03 = v.x;
this.m13 = v.y;
this.m23 = v.z;
this.m33 = v.w;
break;
default:
throw  new ArrayIndexOutOfBoundsException (javax.vecmath.VecMathI18N.getString ("Matrix4d7"));
}
}, "~N,javax.vecmath.Vector4d");
Clazz.defineMethod (c$, "setColumn", 
function (column, v) {
switch (column) {
case 0:
this.m00 = v[0];
this.m10 = v[1];
this.m20 = v[2];
this.m30 = v[3];
break;
case 1:
this.m01 = v[0];
this.m11 = v[1];
this.m21 = v[2];
this.m31 = v[3];
break;
case 2:
this.m02 = v[0];
this.m12 = v[1];
this.m22 = v[2];
this.m32 = v[3];
break;
case 3:
this.m03 = v[0];
this.m13 = v[1];
this.m23 = v[2];
this.m33 = v[3];
break;
default:
throw  new ArrayIndexOutOfBoundsException (javax.vecmath.VecMathI18N.getString ("Matrix4d7"));
}
}, "~N,~A");
Clazz.defineMethod (c$, "add", 
function (scalar) {
this.m00 += scalar;
this.m01 += scalar;
this.m02 += scalar;
this.m03 += scalar;
this.m10 += scalar;
this.m11 += scalar;
this.m12 += scalar;
this.m13 += scalar;
this.m20 += scalar;
this.m21 += scalar;
this.m22 += scalar;
this.m23 += scalar;
this.m30 += scalar;
this.m31 += scalar;
this.m32 += scalar;
this.m33 += scalar;
}, "~N");
Clazz.defineMethod (c$, "add", 
function (scalar, m1) {
this.m00 = m1.m00 + scalar;
this.m01 = m1.m01 + scalar;
this.m02 = m1.m02 + scalar;
this.m03 = m1.m03 + scalar;
this.m10 = m1.m10 + scalar;
this.m11 = m1.m11 + scalar;
this.m12 = m1.m12 + scalar;
this.m13 = m1.m13 + scalar;
this.m20 = m1.m20 + scalar;
this.m21 = m1.m21 + scalar;
this.m22 = m1.m22 + scalar;
this.m23 = m1.m23 + scalar;
this.m30 = m1.m30 + scalar;
this.m31 = m1.m31 + scalar;
this.m32 = m1.m32 + scalar;
this.m33 = m1.m33 + scalar;
}, "~N,javax.vecmath.Matrix4d");
Clazz.defineMethod (c$, "add", 
function (m1, m2) {
this.m00 = m1.m00 + m2.m00;
this.m01 = m1.m01 + m2.m01;
this.m02 = m1.m02 + m2.m02;
this.m03 = m1.m03 + m2.m03;
this.m10 = m1.m10 + m2.m10;
this.m11 = m1.m11 + m2.m11;
this.m12 = m1.m12 + m2.m12;
this.m13 = m1.m13 + m2.m13;
this.m20 = m1.m20 + m2.m20;
this.m21 = m1.m21 + m2.m21;
this.m22 = m1.m22 + m2.m22;
this.m23 = m1.m23 + m2.m23;
this.m30 = m1.m30 + m2.m30;
this.m31 = m1.m31 + m2.m31;
this.m32 = m1.m32 + m2.m32;
this.m33 = m1.m33 + m2.m33;
}, "javax.vecmath.Matrix4d,javax.vecmath.Matrix4d");
Clazz.defineMethod (c$, "add", 
function (m1) {
this.m00 += m1.m00;
this.m01 += m1.m01;
this.m02 += m1.m02;
this.m03 += m1.m03;
this.m10 += m1.m10;
this.m11 += m1.m11;
this.m12 += m1.m12;
this.m13 += m1.m13;
this.m20 += m1.m20;
this.m21 += m1.m21;
this.m22 += m1.m22;
this.m23 += m1.m23;
this.m30 += m1.m30;
this.m31 += m1.m31;
this.m32 += m1.m32;
this.m33 += m1.m33;
}, "javax.vecmath.Matrix4d");
Clazz.defineMethod (c$, "sub", 
function (m1, m2) {
this.m00 = m1.m00 - m2.m00;
this.m01 = m1.m01 - m2.m01;
this.m02 = m1.m02 - m2.m02;
this.m03 = m1.m03 - m2.m03;
this.m10 = m1.m10 - m2.m10;
this.m11 = m1.m11 - m2.m11;
this.m12 = m1.m12 - m2.m12;
this.m13 = m1.m13 - m2.m13;
this.m20 = m1.m20 - m2.m20;
this.m21 = m1.m21 - m2.m21;
this.m22 = m1.m22 - m2.m22;
this.m23 = m1.m23 - m2.m23;
this.m30 = m1.m30 - m2.m30;
this.m31 = m1.m31 - m2.m31;
this.m32 = m1.m32 - m2.m32;
this.m33 = m1.m33 - m2.m33;
}, "javax.vecmath.Matrix4d,javax.vecmath.Matrix4d");
Clazz.defineMethod (c$, "sub", 
function (m1) {
this.m00 -= m1.m00;
this.m01 -= m1.m01;
this.m02 -= m1.m02;
this.m03 -= m1.m03;
this.m10 -= m1.m10;
this.m11 -= m1.m11;
this.m12 -= m1.m12;
this.m13 -= m1.m13;
this.m20 -= m1.m20;
this.m21 -= m1.m21;
this.m22 -= m1.m22;
this.m23 -= m1.m23;
this.m30 -= m1.m30;
this.m31 -= m1.m31;
this.m32 -= m1.m32;
this.m33 -= m1.m33;
}, "javax.vecmath.Matrix4d");
Clazz.defineMethod (c$, "transpose", 
function () {
var temp;
temp = this.m10;
this.m10 = this.m01;
this.m01 = temp;
temp = this.m20;
this.m20 = this.m02;
this.m02 = temp;
temp = this.m30;
this.m30 = this.m03;
this.m03 = temp;
temp = this.m21;
this.m21 = this.m12;
this.m12 = temp;
temp = this.m31;
this.m31 = this.m13;
this.m13 = temp;
temp = this.m32;
this.m32 = this.m23;
this.m23 = temp;
});
Clazz.defineMethod (c$, "transpose", 
function (m1) {
if (this !== m1) {
this.m00 = m1.m00;
this.m01 = m1.m10;
this.m02 = m1.m20;
this.m03 = m1.m30;
this.m10 = m1.m01;
this.m11 = m1.m11;
this.m12 = m1.m21;
this.m13 = m1.m31;
this.m20 = m1.m02;
this.m21 = m1.m12;
this.m22 = m1.m22;
this.m23 = m1.m32;
this.m30 = m1.m03;
this.m31 = m1.m13;
this.m32 = m1.m23;
this.m33 = m1.m33;
} else this.transpose ();
}, "javax.vecmath.Matrix4d");
Clazz.defineMethod (c$, "set", 
function (m) {
this.m00 = m[0];
this.m01 = m[1];
this.m02 = m[2];
this.m03 = m[3];
this.m10 = m[4];
this.m11 = m[5];
this.m12 = m[6];
this.m13 = m[7];
this.m20 = m[8];
this.m21 = m[9];
this.m22 = m[10];
this.m23 = m[11];
this.m30 = m[12];
this.m31 = m[13];
this.m32 = m[14];
this.m33 = m[15];
}, "~A");
Clazz.defineMethod (c$, "set", 
function (m1) {
this.m00 = m1.m00;
this.m01 = m1.m01;
this.m02 = m1.m02;
this.m03 = 0.0;
this.m10 = m1.m10;
this.m11 = m1.m11;
this.m12 = m1.m12;
this.m13 = 0.0;
this.m20 = m1.m20;
this.m21 = m1.m21;
this.m22 = m1.m22;
this.m23 = 0.0;
this.m30 = 0.0;
this.m31 = 0.0;
this.m32 = 0.0;
this.m33 = 1.0;
}, "javax.vecmath.Matrix3f");
Clazz.defineMethod (c$, "set", 
function (m1) {
this.m00 = m1.m00;
this.m01 = m1.m01;
this.m02 = m1.m02;
this.m03 = 0.0;
this.m10 = m1.m10;
this.m11 = m1.m11;
this.m12 = m1.m12;
this.m13 = 0.0;
this.m20 = m1.m20;
this.m21 = m1.m21;
this.m22 = m1.m22;
this.m23 = 0.0;
this.m30 = 0.0;
this.m31 = 0.0;
this.m32 = 0.0;
this.m33 = 1.0;
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
this.m03 = 0.0;
this.m13 = 0.0;
this.m23 = 0.0;
this.m30 = 0.0;
this.m31 = 0.0;
this.m32 = 0.0;
this.m33 = 1.0;
}, "javax.vecmath.Quat4d");
Clazz.defineMethod (c$, "set", 
function (a1) {
var mag = Math.sqrt (a1.x * a1.x + a1.y * a1.y + a1.z * a1.z);
if (mag < 1.0E-10) {
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
}this.m03 = 0.0;
this.m13 = 0.0;
this.m23 = 0.0;
this.m30 = 0.0;
this.m31 = 0.0;
this.m32 = 0.0;
this.m33 = 1.0;
}, "javax.vecmath.AxisAngle4d");
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
this.m03 = 0.0;
this.m13 = 0.0;
this.m23 = 0.0;
this.m30 = 0.0;
this.m31 = 0.0;
this.m32 = 0.0;
this.m33 = 1.0;
}, "javax.vecmath.Quat4f");
Clazz.defineMethod (c$, "set", 
function (a1) {
var mag = Math.sqrt (a1.x * a1.x + a1.y * a1.y + a1.z * a1.z);
if (mag < 1.0E-10) {
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
}this.m03 = 0.0;
this.m13 = 0.0;
this.m23 = 0.0;
this.m30 = 0.0;
this.m31 = 0.0;
this.m32 = 0.0;
this.m33 = 1.0;
}, "javax.vecmath.AxisAngle4f");
Clazz.defineMethod (c$, "set", 
function (q1, t1, s) {
this.m00 = s * (1.0 - 2.0 * q1.y * q1.y - 2.0 * q1.z * q1.z);
this.m10 = s * (2.0 * (q1.x * q1.y + q1.w * q1.z));
this.m20 = s * (2.0 * (q1.x * q1.z - q1.w * q1.y));
this.m01 = s * (2.0 * (q1.x * q1.y - q1.w * q1.z));
this.m11 = s * (1.0 - 2.0 * q1.x * q1.x - 2.0 * q1.z * q1.z);
this.m21 = s * (2.0 * (q1.y * q1.z + q1.w * q1.x));
this.m02 = s * (2.0 * (q1.x * q1.z + q1.w * q1.y));
this.m12 = s * (2.0 * (q1.y * q1.z - q1.w * q1.x));
this.m22 = s * (1.0 - 2.0 * q1.x * q1.x - 2.0 * q1.y * q1.y);
this.m03 = t1.x;
this.m13 = t1.y;
this.m23 = t1.z;
this.m30 = 0.0;
this.m31 = 0.0;
this.m32 = 0.0;
this.m33 = 1.0;
}, "javax.vecmath.Quat4d,javax.vecmath.Vector3d,~N");
Clazz.defineMethod (c$, "set", 
function (q1, t1, s) {
this.m00 = s * (1.0 - 2.0 * q1.y * q1.y - 2.0 * q1.z * q1.z);
this.m10 = s * (2.0 * (q1.x * q1.y + q1.w * q1.z));
this.m20 = s * (2.0 * (q1.x * q1.z - q1.w * q1.y));
this.m01 = s * (2.0 * (q1.x * q1.y - q1.w * q1.z));
this.m11 = s * (1.0 - 2.0 * q1.x * q1.x - 2.0 * q1.z * q1.z);
this.m21 = s * (2.0 * (q1.y * q1.z + q1.w * q1.x));
this.m02 = s * (2.0 * (q1.x * q1.z + q1.w * q1.y));
this.m12 = s * (2.0 * (q1.y * q1.z - q1.w * q1.x));
this.m22 = s * (1.0 - 2.0 * q1.x * q1.x - 2.0 * q1.y * q1.y);
this.m03 = t1.x;
this.m13 = t1.y;
this.m23 = t1.z;
this.m30 = 0.0;
this.m31 = 0.0;
this.m32 = 0.0;
this.m33 = 1.0;
}, "javax.vecmath.Quat4f,javax.vecmath.Vector3d,~N");
Clazz.defineMethod (c$, "set", 
function (q1, t1, s) {
this.m00 = s * (1.0 - 2.0 * q1.y * q1.y - 2.0 * q1.z * q1.z);
this.m10 = s * (2.0 * (q1.x * q1.y + q1.w * q1.z));
this.m20 = s * (2.0 * (q1.x * q1.z - q1.w * q1.y));
this.m01 = s * (2.0 * (q1.x * q1.y - q1.w * q1.z));
this.m11 = s * (1.0 - 2.0 * q1.x * q1.x - 2.0 * q1.z * q1.z);
this.m21 = s * (2.0 * (q1.y * q1.z + q1.w * q1.x));
this.m02 = s * (2.0 * (q1.x * q1.z + q1.w * q1.y));
this.m12 = s * (2.0 * (q1.y * q1.z - q1.w * q1.x));
this.m22 = s * (1.0 - 2.0 * q1.x * q1.x - 2.0 * q1.y * q1.y);
this.m03 = t1.x;
this.m13 = t1.y;
this.m23 = t1.z;
this.m30 = 0.0;
this.m31 = 0.0;
this.m32 = 0.0;
this.m33 = 1.0;
}, "javax.vecmath.Quat4f,javax.vecmath.Vector3f,~N");
Clazz.defineMethod (c$, "set", 
function (m1) {
this.m00 = m1.m00;
this.m01 = m1.m01;
this.m02 = m1.m02;
this.m03 = m1.m03;
this.m10 = m1.m10;
this.m11 = m1.m11;
this.m12 = m1.m12;
this.m13 = m1.m13;
this.m20 = m1.m20;
this.m21 = m1.m21;
this.m22 = m1.m22;
this.m23 = m1.m23;
this.m30 = m1.m30;
this.m31 = m1.m31;
this.m32 = m1.m32;
this.m33 = m1.m33;
}, "javax.vecmath.Matrix4f");
Clazz.defineMethod (c$, "set", 
function (m1) {
this.m00 = m1.m00;
this.m01 = m1.m01;
this.m02 = m1.m02;
this.m03 = m1.m03;
this.m10 = m1.m10;
this.m11 = m1.m11;
this.m12 = m1.m12;
this.m13 = m1.m13;
this.m20 = m1.m20;
this.m21 = m1.m21;
this.m22 = m1.m22;
this.m23 = m1.m23;
this.m30 = m1.m30;
this.m31 = m1.m31;
this.m32 = m1.m32;
this.m33 = m1.m33;
}, "javax.vecmath.Matrix4d");
Clazz.defineMethod (c$, "invert", 
function (m1) {
this.invertGeneral (m1);
}, "javax.vecmath.Matrix4d");
Clazz.defineMethod (c$, "invert", 
function () {
this.invertGeneral (this);
});
Clazz.defineMethod (c$, "invertGeneral", 
function (m1) {
var result =  Clazz.newArray (16, 0);
var row_perm =  Clazz.newArray (4, 0);
var i;
var r;
var c;
var tmp =  Clazz.newArray (16, 0);
tmp[0] = m1.m00;
tmp[1] = m1.m01;
tmp[2] = m1.m02;
tmp[3] = m1.m03;
tmp[4] = m1.m10;
tmp[5] = m1.m11;
tmp[6] = m1.m12;
tmp[7] = m1.m13;
tmp[8] = m1.m20;
tmp[9] = m1.m21;
tmp[10] = m1.m22;
tmp[11] = m1.m23;
tmp[12] = m1.m30;
tmp[13] = m1.m31;
tmp[14] = m1.m32;
tmp[15] = m1.m33;
if (!javax.vecmath.Matrix4d.luDecomposition (tmp, row_perm)) {
throw  new javax.vecmath.SingularMatrixException (javax.vecmath.VecMathI18N.getString ("Matrix4d10"));
}for (i = 0; i < 16; i++) result[i] = 0.0;

result[0] = 1.0;
result[5] = 1.0;
result[10] = 1.0;
result[15] = 1.0;
javax.vecmath.Matrix4d.luBacksubstitution (tmp, row_perm, result);
this.m00 = result[0];
this.m01 = result[1];
this.m02 = result[2];
this.m03 = result[3];
this.m10 = result[4];
this.m11 = result[5];
this.m12 = result[6];
this.m13 = result[7];
this.m20 = result[8];
this.m21 = result[9];
this.m22 = result[10];
this.m23 = result[11];
this.m30 = result[12];
this.m31 = result[13];
this.m32 = result[14];
this.m33 = result[15];
}, "javax.vecmath.Matrix4d");
c$.luDecomposition = Clazz.defineMethod (c$, "luDecomposition", 
function (matrix0, row_perm) {
var row_scale =  Clazz.newArray (4, 0);
{
var i;
var j;
var ptr;
var rs;
var big;
var temp;
ptr = 0;
rs = 0;
i = 4;
while (i-- != 0) {
big = 0.0;
j = 4;
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
for (j = 0; j < 4; j++) {
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
target = mtx + (4 * i) + j;
sum = matrix0[target];
k = i;
p1 = mtx + (4 * i);
p2 = mtx + j;
while (k-- != 0) {
sum -= matrix0[p1] * matrix0[p2];
p1++;
p2 += 4;
}
matrix0[target] = sum;
}
big = 0.0;
imax = -1;
for (i = j; i < 4; i++) {
target = mtx + (4 * i) + j;
sum = matrix0[target];
k = j;
p1 = mtx + (4 * i);
p2 = mtx + j;
while (k-- != 0) {
sum -= matrix0[p1] * matrix0[p2];
p1++;
p2 += 4;
}
matrix0[target] = sum;
if ((temp = row_scale[i] * Math.abs (sum)) >= big) {
big = temp;
imax = i;
}}
if (imax < 0) {
throw  new RuntimeException (javax.vecmath.VecMathI18N.getString ("Matrix4d11"));
}if (j != imax) {
k = 4;
p1 = mtx + (4 * imax);
p2 = mtx + (4 * j);
while (k-- != 0) {
temp = matrix0[p1];
matrix0[p1++] = matrix0[p2];
matrix0[p2++] = temp;
}
row_scale[imax] = row_scale[j];
}row_perm[j] = imax;
if (matrix0[(mtx + (4 * j) + j)] == 0.0) {
return false;
}if (j != (3)) {
temp = 1.0 / (matrix0[(mtx + (4 * j) + j)]);
target = mtx + (4 * (j + 1)) + j;
i = 3 - j;
while (i-- != 0) {
matrix0[target] *= temp;
target += 4;
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
for (k = 0; k < 4; k++) {
cv = k;
ii = -1;
for (i = 0; i < 4; i++) {
var sum;
ip = row_perm[rp + i];
sum = matrix2[cv + 4 * ip];
matrix2[cv + 4 * ip] = matrix2[cv + 4 * i];
if (ii >= 0) {
rv = i * 4;
for (j = ii; j <= i - 1; j++) {
sum -= matrix1[rv + j] * matrix2[cv + 4 * j];
}
} else if (sum != 0.0) {
ii = i;
}matrix2[cv + 4 * i] = sum;
}
rv = 12;
matrix2[cv + 12] /= matrix1[rv + 3];
rv -= 4;
matrix2[cv + 8] = (matrix2[cv + 8] - matrix1[rv + 3] * matrix2[cv + 12]) / matrix1[rv + 2];
rv -= 4;
matrix2[cv + 4] = (matrix2[cv + 4] - matrix1[rv + 2] * matrix2[cv + 8] - matrix1[rv + 3] * matrix2[cv + 12]) / matrix1[rv + 1];
rv -= 4;
matrix2[cv + 0] = (matrix2[cv + 0] - matrix1[rv + 1] * matrix2[cv + 4] - matrix1[rv + 2] * matrix2[cv + 8] - matrix1[rv + 3] * matrix2[cv + 12]) / matrix1[rv + 0];
}
}, "~A,~A,~A");
Clazz.defineMethod (c$, "determinant", 
function () {
var det;
det = this.m00 * (this.m11 * this.m22 * this.m33 + this.m12 * this.m23 * this.m31 + this.m13 * this.m21 * this.m32 - this.m13 * this.m22 * this.m31 - this.m11 * this.m23 * this.m32 - this.m12 * this.m21 * this.m33);
det -= this.m01 * (this.m10 * this.m22 * this.m33 + this.m12 * this.m23 * this.m30 + this.m13 * this.m20 * this.m32 - this.m13 * this.m22 * this.m30 - this.m10 * this.m23 * this.m32 - this.m12 * this.m20 * this.m33);
det += this.m02 * (this.m10 * this.m21 * this.m33 + this.m11 * this.m23 * this.m30 + this.m13 * this.m20 * this.m31 - this.m13 * this.m21 * this.m30 - this.m10 * this.m23 * this.m31 - this.m11 * this.m20 * this.m33);
det -= this.m03 * (this.m10 * this.m21 * this.m32 + this.m11 * this.m22 * this.m30 + this.m12 * this.m20 * this.m31 - this.m12 * this.m21 * this.m30 - this.m10 * this.m22 * this.m31 - this.m11 * this.m20 * this.m32);
return (det);
});
Clazz.defineMethod (c$, "set", 
function (scale) {
this.m00 = scale;
this.m01 = 0.0;
this.m02 = 0.0;
this.m03 = 0.0;
this.m10 = 0.0;
this.m11 = scale;
this.m12 = 0.0;
this.m13 = 0.0;
this.m20 = 0.0;
this.m21 = 0.0;
this.m22 = scale;
this.m23 = 0.0;
this.m30 = 0.0;
this.m31 = 0.0;
this.m32 = 0.0;
this.m33 = 1.0;
}, "~N");
Clazz.defineMethod (c$, "set", 
function (v1) {
this.m00 = 1.0;
this.m01 = 0.0;
this.m02 = 0.0;
this.m03 = v1.x;
this.m10 = 0.0;
this.m11 = 1.0;
this.m12 = 0.0;
this.m13 = v1.y;
this.m20 = 0.0;
this.m21 = 0.0;
this.m22 = 1.0;
this.m23 = v1.z;
this.m30 = 0.0;
this.m31 = 0.0;
this.m32 = 0.0;
this.m33 = 1.0;
}, "javax.vecmath.Vector3d");
Clazz.defineMethod (c$, "set", 
function (scale, v1) {
this.m00 = scale;
this.m01 = 0.0;
this.m02 = 0.0;
this.m03 = v1.x;
this.m10 = 0.0;
this.m11 = scale;
this.m12 = 0.0;
this.m13 = v1.y;
this.m20 = 0.0;
this.m21 = 0.0;
this.m22 = scale;
this.m23 = v1.z;
this.m30 = 0.0;
this.m31 = 0.0;
this.m32 = 0.0;
this.m33 = 1.0;
}, "~N,javax.vecmath.Vector3d");
Clazz.defineMethod (c$, "set", 
function (v1, scale) {
this.m00 = scale;
this.m01 = 0.0;
this.m02 = 0.0;
this.m03 = scale * v1.x;
this.m10 = 0.0;
this.m11 = scale;
this.m12 = 0.0;
this.m13 = scale * v1.y;
this.m20 = 0.0;
this.m21 = 0.0;
this.m22 = scale;
this.m23 = scale * v1.z;
this.m30 = 0.0;
this.m31 = 0.0;
this.m32 = 0.0;
this.m33 = 1.0;
}, "javax.vecmath.Vector3d,~N");
Clazz.defineMethod (c$, "set", 
function (m1, t1, scale) {
this.m00 = m1.m00 * scale;
this.m01 = m1.m01 * scale;
this.m02 = m1.m02 * scale;
this.m03 = t1.x;
this.m10 = m1.m10 * scale;
this.m11 = m1.m11 * scale;
this.m12 = m1.m12 * scale;
this.m13 = t1.y;
this.m20 = m1.m20 * scale;
this.m21 = m1.m21 * scale;
this.m22 = m1.m22 * scale;
this.m23 = t1.z;
this.m30 = 0.0;
this.m31 = 0.0;
this.m32 = 0.0;
this.m33 = 1.0;
}, "javax.vecmath.Matrix3f,javax.vecmath.Vector3f,~N");
Clazz.defineMethod (c$, "set", 
function (m1, t1, scale) {
this.m00 = m1.m00 * scale;
this.m01 = m1.m01 * scale;
this.m02 = m1.m02 * scale;
this.m03 = t1.x;
this.m10 = m1.m10 * scale;
this.m11 = m1.m11 * scale;
this.m12 = m1.m12 * scale;
this.m13 = t1.y;
this.m20 = m1.m20 * scale;
this.m21 = m1.m21 * scale;
this.m22 = m1.m22 * scale;
this.m23 = t1.z;
this.m30 = 0.0;
this.m31 = 0.0;
this.m32 = 0.0;
this.m33 = 1.0;
}, "javax.vecmath.Matrix3d,javax.vecmath.Vector3d,~N");
Clazz.defineMethod (c$, "setTranslation", 
function (trans) {
this.m03 = trans.x;
this.m13 = trans.y;
this.m23 = trans.z;
}, "javax.vecmath.Vector3d");
Clazz.defineMethod (c$, "rotX", 
function (angle) {
var sinAngle;
var cosAngle;
sinAngle = Math.sin (angle);
cosAngle = Math.cos (angle);
this.m00 = 1.0;
this.m01 = 0.0;
this.m02 = 0.0;
this.m03 = 0.0;
this.m10 = 0.0;
this.m11 = cosAngle;
this.m12 = -sinAngle;
this.m13 = 0.0;
this.m20 = 0.0;
this.m21 = sinAngle;
this.m22 = cosAngle;
this.m23 = 0.0;
this.m30 = 0.0;
this.m31 = 0.0;
this.m32 = 0.0;
this.m33 = 1.0;
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
this.m03 = 0.0;
this.m10 = 0.0;
this.m11 = 1.0;
this.m12 = 0.0;
this.m13 = 0.0;
this.m20 = -sinAngle;
this.m21 = 0.0;
this.m22 = cosAngle;
this.m23 = 0.0;
this.m30 = 0.0;
this.m31 = 0.0;
this.m32 = 0.0;
this.m33 = 1.0;
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
this.m03 = 0.0;
this.m10 = sinAngle;
this.m11 = cosAngle;
this.m12 = 0.0;
this.m13 = 0.0;
this.m20 = 0.0;
this.m21 = 0.0;
this.m22 = 1.0;
this.m23 = 0.0;
this.m30 = 0.0;
this.m31 = 0.0;
this.m32 = 0.0;
this.m33 = 1.0;
}, "~N");
Clazz.defineMethod (c$, "mul", 
function (scalar) {
this.m00 *= scalar;
this.m01 *= scalar;
this.m02 *= scalar;
this.m03 *= scalar;
this.m10 *= scalar;
this.m11 *= scalar;
this.m12 *= scalar;
this.m13 *= scalar;
this.m20 *= scalar;
this.m21 *= scalar;
this.m22 *= scalar;
this.m23 *= scalar;
this.m30 *= scalar;
this.m31 *= scalar;
this.m32 *= scalar;
this.m33 *= scalar;
}, "~N");
Clazz.defineMethod (c$, "mul", 
function (scalar, m1) {
this.m00 = m1.m00 * scalar;
this.m01 = m1.m01 * scalar;
this.m02 = m1.m02 * scalar;
this.m03 = m1.m03 * scalar;
this.m10 = m1.m10 * scalar;
this.m11 = m1.m11 * scalar;
this.m12 = m1.m12 * scalar;
this.m13 = m1.m13 * scalar;
this.m20 = m1.m20 * scalar;
this.m21 = m1.m21 * scalar;
this.m22 = m1.m22 * scalar;
this.m23 = m1.m23 * scalar;
this.m30 = m1.m30 * scalar;
this.m31 = m1.m31 * scalar;
this.m32 = m1.m32 * scalar;
this.m33 = m1.m33 * scalar;
}, "~N,javax.vecmath.Matrix4d");
Clazz.defineMethod (c$, "mul", 
function (m1) {
var m00;
var m01;
var m02;
var m03;
var m10;
var m11;
var m12;
var m13;
var m20;
var m21;
var m22;
var m23;
var m30;
var m31;
var m32;
var m33;
m00 = this.m00 * m1.m00 + this.m01 * m1.m10 + this.m02 * m1.m20 + this.m03 * m1.m30;
m01 = this.m00 * m1.m01 + this.m01 * m1.m11 + this.m02 * m1.m21 + this.m03 * m1.m31;
m02 = this.m00 * m1.m02 + this.m01 * m1.m12 + this.m02 * m1.m22 + this.m03 * m1.m32;
m03 = this.m00 * m1.m03 + this.m01 * m1.m13 + this.m02 * m1.m23 + this.m03 * m1.m33;
m10 = this.m10 * m1.m00 + this.m11 * m1.m10 + this.m12 * m1.m20 + this.m13 * m1.m30;
m11 = this.m10 * m1.m01 + this.m11 * m1.m11 + this.m12 * m1.m21 + this.m13 * m1.m31;
m12 = this.m10 * m1.m02 + this.m11 * m1.m12 + this.m12 * m1.m22 + this.m13 * m1.m32;
m13 = this.m10 * m1.m03 + this.m11 * m1.m13 + this.m12 * m1.m23 + this.m13 * m1.m33;
m20 = this.m20 * m1.m00 + this.m21 * m1.m10 + this.m22 * m1.m20 + this.m23 * m1.m30;
m21 = this.m20 * m1.m01 + this.m21 * m1.m11 + this.m22 * m1.m21 + this.m23 * m1.m31;
m22 = this.m20 * m1.m02 + this.m21 * m1.m12 + this.m22 * m1.m22 + this.m23 * m1.m32;
m23 = this.m20 * m1.m03 + this.m21 * m1.m13 + this.m22 * m1.m23 + this.m23 * m1.m33;
m30 = this.m30 * m1.m00 + this.m31 * m1.m10 + this.m32 * m1.m20 + this.m33 * m1.m30;
m31 = this.m30 * m1.m01 + this.m31 * m1.m11 + this.m32 * m1.m21 + this.m33 * m1.m31;
m32 = this.m30 * m1.m02 + this.m31 * m1.m12 + this.m32 * m1.m22 + this.m33 * m1.m32;
m33 = this.m30 * m1.m03 + this.m31 * m1.m13 + this.m32 * m1.m23 + this.m33 * m1.m33;
this.m00 = m00;
this.m01 = m01;
this.m02 = m02;
this.m03 = m03;
this.m10 = m10;
this.m11 = m11;
this.m12 = m12;
this.m13 = m13;
this.m20 = m20;
this.m21 = m21;
this.m22 = m22;
this.m23 = m23;
this.m30 = m30;
this.m31 = m31;
this.m32 = m32;
this.m33 = m33;
}, "javax.vecmath.Matrix4d");
Clazz.defineMethod (c$, "mul", 
function (m1, m2) {
if (this !== m1 && this !== m2) {
this.m00 = m1.m00 * m2.m00 + m1.m01 * m2.m10 + m1.m02 * m2.m20 + m1.m03 * m2.m30;
this.m01 = m1.m00 * m2.m01 + m1.m01 * m2.m11 + m1.m02 * m2.m21 + m1.m03 * m2.m31;
this.m02 = m1.m00 * m2.m02 + m1.m01 * m2.m12 + m1.m02 * m2.m22 + m1.m03 * m2.m32;
this.m03 = m1.m00 * m2.m03 + m1.m01 * m2.m13 + m1.m02 * m2.m23 + m1.m03 * m2.m33;
this.m10 = m1.m10 * m2.m00 + m1.m11 * m2.m10 + m1.m12 * m2.m20 + m1.m13 * m2.m30;
this.m11 = m1.m10 * m2.m01 + m1.m11 * m2.m11 + m1.m12 * m2.m21 + m1.m13 * m2.m31;
this.m12 = m1.m10 * m2.m02 + m1.m11 * m2.m12 + m1.m12 * m2.m22 + m1.m13 * m2.m32;
this.m13 = m1.m10 * m2.m03 + m1.m11 * m2.m13 + m1.m12 * m2.m23 + m1.m13 * m2.m33;
this.m20 = m1.m20 * m2.m00 + m1.m21 * m2.m10 + m1.m22 * m2.m20 + m1.m23 * m2.m30;
this.m21 = m1.m20 * m2.m01 + m1.m21 * m2.m11 + m1.m22 * m2.m21 + m1.m23 * m2.m31;
this.m22 = m1.m20 * m2.m02 + m1.m21 * m2.m12 + m1.m22 * m2.m22 + m1.m23 * m2.m32;
this.m23 = m1.m20 * m2.m03 + m1.m21 * m2.m13 + m1.m22 * m2.m23 + m1.m23 * m2.m33;
this.m30 = m1.m30 * m2.m00 + m1.m31 * m2.m10 + m1.m32 * m2.m20 + m1.m33 * m2.m30;
this.m31 = m1.m30 * m2.m01 + m1.m31 * m2.m11 + m1.m32 * m2.m21 + m1.m33 * m2.m31;
this.m32 = m1.m30 * m2.m02 + m1.m31 * m2.m12 + m1.m32 * m2.m22 + m1.m33 * m2.m32;
this.m33 = m1.m30 * m2.m03 + m1.m31 * m2.m13 + m1.m32 * m2.m23 + m1.m33 * m2.m33;
} else {
var m00;
var m01;
var m02;
var m03;
var m10;
var m11;
var m12;
var m13;
var m20;
var m21;
var m22;
var m23;
var m30;
var m31;
var m32;
var m33;
m00 = m1.m00 * m2.m00 + m1.m01 * m2.m10 + m1.m02 * m2.m20 + m1.m03 * m2.m30;
m01 = m1.m00 * m2.m01 + m1.m01 * m2.m11 + m1.m02 * m2.m21 + m1.m03 * m2.m31;
m02 = m1.m00 * m2.m02 + m1.m01 * m2.m12 + m1.m02 * m2.m22 + m1.m03 * m2.m32;
m03 = m1.m00 * m2.m03 + m1.m01 * m2.m13 + m1.m02 * m2.m23 + m1.m03 * m2.m33;
m10 = m1.m10 * m2.m00 + m1.m11 * m2.m10 + m1.m12 * m2.m20 + m1.m13 * m2.m30;
m11 = m1.m10 * m2.m01 + m1.m11 * m2.m11 + m1.m12 * m2.m21 + m1.m13 * m2.m31;
m12 = m1.m10 * m2.m02 + m1.m11 * m2.m12 + m1.m12 * m2.m22 + m1.m13 * m2.m32;
m13 = m1.m10 * m2.m03 + m1.m11 * m2.m13 + m1.m12 * m2.m23 + m1.m13 * m2.m33;
m20 = m1.m20 * m2.m00 + m1.m21 * m2.m10 + m1.m22 * m2.m20 + m1.m23 * m2.m30;
m21 = m1.m20 * m2.m01 + m1.m21 * m2.m11 + m1.m22 * m2.m21 + m1.m23 * m2.m31;
m22 = m1.m20 * m2.m02 + m1.m21 * m2.m12 + m1.m22 * m2.m22 + m1.m23 * m2.m32;
m23 = m1.m20 * m2.m03 + m1.m21 * m2.m13 + m1.m22 * m2.m23 + m1.m23 * m2.m33;
m30 = m1.m30 * m2.m00 + m1.m31 * m2.m10 + m1.m32 * m2.m20 + m1.m33 * m2.m30;
m31 = m1.m30 * m2.m01 + m1.m31 * m2.m11 + m1.m32 * m2.m21 + m1.m33 * m2.m31;
m32 = m1.m30 * m2.m02 + m1.m31 * m2.m12 + m1.m32 * m2.m22 + m1.m33 * m2.m32;
m33 = m1.m30 * m2.m03 + m1.m31 * m2.m13 + m1.m32 * m2.m23 + m1.m33 * m2.m33;
this.m00 = m00;
this.m01 = m01;
this.m02 = m02;
this.m03 = m03;
this.m10 = m10;
this.m11 = m11;
this.m12 = m12;
this.m13 = m13;
this.m20 = m20;
this.m21 = m21;
this.m22 = m22;
this.m23 = m23;
this.m30 = m30;
this.m31 = m31;
this.m32 = m32;
this.m33 = m33;
}}, "javax.vecmath.Matrix4d,javax.vecmath.Matrix4d");
Clazz.defineMethod (c$, "mulTransposeBoth", 
function (m1, m2) {
if (this !== m1 && this !== m2) {
this.m00 = m1.m00 * m2.m00 + m1.m10 * m2.m01 + m1.m20 * m2.m02 + m1.m30 * m2.m03;
this.m01 = m1.m00 * m2.m10 + m1.m10 * m2.m11 + m1.m20 * m2.m12 + m1.m30 * m2.m13;
this.m02 = m1.m00 * m2.m20 + m1.m10 * m2.m21 + m1.m20 * m2.m22 + m1.m30 * m2.m23;
this.m03 = m1.m00 * m2.m30 + m1.m10 * m2.m31 + m1.m20 * m2.m32 + m1.m30 * m2.m33;
this.m10 = m1.m01 * m2.m00 + m1.m11 * m2.m01 + m1.m21 * m2.m02 + m1.m31 * m2.m03;
this.m11 = m1.m01 * m2.m10 + m1.m11 * m2.m11 + m1.m21 * m2.m12 + m1.m31 * m2.m13;
this.m12 = m1.m01 * m2.m20 + m1.m11 * m2.m21 + m1.m21 * m2.m22 + m1.m31 * m2.m23;
this.m13 = m1.m01 * m2.m30 + m1.m11 * m2.m31 + m1.m21 * m2.m32 + m1.m31 * m2.m33;
this.m20 = m1.m02 * m2.m00 + m1.m12 * m2.m01 + m1.m22 * m2.m02 + m1.m32 * m2.m03;
this.m21 = m1.m02 * m2.m10 + m1.m12 * m2.m11 + m1.m22 * m2.m12 + m1.m32 * m2.m13;
this.m22 = m1.m02 * m2.m20 + m1.m12 * m2.m21 + m1.m22 * m2.m22 + m1.m32 * m2.m23;
this.m23 = m1.m02 * m2.m30 + m1.m12 * m2.m31 + m1.m22 * m2.m32 + m1.m32 * m2.m33;
this.m30 = m1.m03 * m2.m00 + m1.m13 * m2.m01 + m1.m23 * m2.m02 + m1.m33 * m2.m03;
this.m31 = m1.m03 * m2.m10 + m1.m13 * m2.m11 + m1.m23 * m2.m12 + m1.m33 * m2.m13;
this.m32 = m1.m03 * m2.m20 + m1.m13 * m2.m21 + m1.m23 * m2.m22 + m1.m33 * m2.m23;
this.m33 = m1.m03 * m2.m30 + m1.m13 * m2.m31 + m1.m23 * m2.m32 + m1.m33 * m2.m33;
} else {
var m00;
var m01;
var m02;
var m03;
var m10;
var m11;
var m12;
var m13;
var m20;
var m21;
var m22;
var m23;
var m30;
var m31;
var m32;
var m33;
m00 = m1.m00 * m2.m00 + m1.m10 * m2.m01 + m1.m20 * m2.m02 + m1.m30 * m2.m03;
m01 = m1.m00 * m2.m10 + m1.m10 * m2.m11 + m1.m20 * m2.m12 + m1.m30 * m2.m13;
m02 = m1.m00 * m2.m20 + m1.m10 * m2.m21 + m1.m20 * m2.m22 + m1.m30 * m2.m23;
m03 = m1.m00 * m2.m30 + m1.m10 * m2.m31 + m1.m20 * m2.m32 + m1.m30 * m2.m33;
m10 = m1.m01 * m2.m00 + m1.m11 * m2.m01 + m1.m21 * m2.m02 + m1.m31 * m2.m03;
m11 = m1.m01 * m2.m10 + m1.m11 * m2.m11 + m1.m21 * m2.m12 + m1.m31 * m2.m13;
m12 = m1.m01 * m2.m20 + m1.m11 * m2.m21 + m1.m21 * m2.m22 + m1.m31 * m2.m23;
m13 = m1.m01 * m2.m30 + m1.m11 * m2.m31 + m1.m21 * m2.m32 + m1.m31 * m2.m33;
m20 = m1.m02 * m2.m00 + m1.m12 * m2.m01 + m1.m22 * m2.m02 + m1.m32 * m2.m03;
m21 = m1.m02 * m2.m10 + m1.m12 * m2.m11 + m1.m22 * m2.m12 + m1.m32 * m2.m13;
m22 = m1.m02 * m2.m20 + m1.m12 * m2.m21 + m1.m22 * m2.m22 + m1.m32 * m2.m23;
m23 = m1.m02 * m2.m30 + m1.m12 * m2.m31 + m1.m22 * m2.m32 + m1.m32 * m2.m33;
m30 = m1.m03 * m2.m00 + m1.m13 * m2.m01 + m1.m23 * m2.m02 + m1.m33 * m2.m03;
m31 = m1.m03 * m2.m10 + m1.m13 * m2.m11 + m1.m23 * m2.m12 + m1.m33 * m2.m13;
m32 = m1.m03 * m2.m20 + m1.m13 * m2.m21 + m1.m23 * m2.m22 + m1.m33 * m2.m23;
m33 = m1.m03 * m2.m30 + m1.m13 * m2.m31 + m1.m23 * m2.m32 + m1.m33 * m2.m33;
this.m00 = m00;
this.m01 = m01;
this.m02 = m02;
this.m03 = m03;
this.m10 = m10;
this.m11 = m11;
this.m12 = m12;
this.m13 = m13;
this.m20 = m20;
this.m21 = m21;
this.m22 = m22;
this.m23 = m23;
this.m30 = m30;
this.m31 = m31;
this.m32 = m32;
this.m33 = m33;
}}, "javax.vecmath.Matrix4d,javax.vecmath.Matrix4d");
Clazz.defineMethod (c$, "mulTransposeRight", 
function (m1, m2) {
if (this !== m1 && this !== m2) {
this.m00 = m1.m00 * m2.m00 + m1.m01 * m2.m01 + m1.m02 * m2.m02 + m1.m03 * m2.m03;
this.m01 = m1.m00 * m2.m10 + m1.m01 * m2.m11 + m1.m02 * m2.m12 + m1.m03 * m2.m13;
this.m02 = m1.m00 * m2.m20 + m1.m01 * m2.m21 + m1.m02 * m2.m22 + m1.m03 * m2.m23;
this.m03 = m1.m00 * m2.m30 + m1.m01 * m2.m31 + m1.m02 * m2.m32 + m1.m03 * m2.m33;
this.m10 = m1.m10 * m2.m00 + m1.m11 * m2.m01 + m1.m12 * m2.m02 + m1.m13 * m2.m03;
this.m11 = m1.m10 * m2.m10 + m1.m11 * m2.m11 + m1.m12 * m2.m12 + m1.m13 * m2.m13;
this.m12 = m1.m10 * m2.m20 + m1.m11 * m2.m21 + m1.m12 * m2.m22 + m1.m13 * m2.m23;
this.m13 = m1.m10 * m2.m30 + m1.m11 * m2.m31 + m1.m12 * m2.m32 + m1.m13 * m2.m33;
this.m20 = m1.m20 * m2.m00 + m1.m21 * m2.m01 + m1.m22 * m2.m02 + m1.m23 * m2.m03;
this.m21 = m1.m20 * m2.m10 + m1.m21 * m2.m11 + m1.m22 * m2.m12 + m1.m23 * m2.m13;
this.m22 = m1.m20 * m2.m20 + m1.m21 * m2.m21 + m1.m22 * m2.m22 + m1.m23 * m2.m23;
this.m23 = m1.m20 * m2.m30 + m1.m21 * m2.m31 + m1.m22 * m2.m32 + m1.m23 * m2.m33;
this.m30 = m1.m30 * m2.m00 + m1.m31 * m2.m01 + m1.m32 * m2.m02 + m1.m33 * m2.m03;
this.m31 = m1.m30 * m2.m10 + m1.m31 * m2.m11 + m1.m32 * m2.m12 + m1.m33 * m2.m13;
this.m32 = m1.m30 * m2.m20 + m1.m31 * m2.m21 + m1.m32 * m2.m22 + m1.m33 * m2.m23;
this.m33 = m1.m30 * m2.m30 + m1.m31 * m2.m31 + m1.m32 * m2.m32 + m1.m33 * m2.m33;
} else {
var m00;
var m01;
var m02;
var m03;
var m10;
var m11;
var m12;
var m13;
var m20;
var m21;
var m22;
var m23;
var m30;
var m31;
var m32;
var m33;
m00 = m1.m00 * m2.m00 + m1.m01 * m2.m01 + m1.m02 * m2.m02 + m1.m03 * m2.m03;
m01 = m1.m00 * m2.m10 + m1.m01 * m2.m11 + m1.m02 * m2.m12 + m1.m03 * m2.m13;
m02 = m1.m00 * m2.m20 + m1.m01 * m2.m21 + m1.m02 * m2.m22 + m1.m03 * m2.m23;
m03 = m1.m00 * m2.m30 + m1.m01 * m2.m31 + m1.m02 * m2.m32 + m1.m03 * m2.m33;
m10 = m1.m10 * m2.m00 + m1.m11 * m2.m01 + m1.m12 * m2.m02 + m1.m13 * m2.m03;
m11 = m1.m10 * m2.m10 + m1.m11 * m2.m11 + m1.m12 * m2.m12 + m1.m13 * m2.m13;
m12 = m1.m10 * m2.m20 + m1.m11 * m2.m21 + m1.m12 * m2.m22 + m1.m13 * m2.m23;
m13 = m1.m10 * m2.m30 + m1.m11 * m2.m31 + m1.m12 * m2.m32 + m1.m13 * m2.m33;
m20 = m1.m20 * m2.m00 + m1.m21 * m2.m01 + m1.m22 * m2.m02 + m1.m23 * m2.m03;
m21 = m1.m20 * m2.m10 + m1.m21 * m2.m11 + m1.m22 * m2.m12 + m1.m23 * m2.m13;
m22 = m1.m20 * m2.m20 + m1.m21 * m2.m21 + m1.m22 * m2.m22 + m1.m23 * m2.m23;
m23 = m1.m20 * m2.m30 + m1.m21 * m2.m31 + m1.m22 * m2.m32 + m1.m23 * m2.m33;
m30 = m1.m30 * m2.m00 + m1.m31 * m2.m01 + m1.m32 * m2.m02 + m1.m33 * m2.m03;
m31 = m1.m30 * m2.m10 + m1.m31 * m2.m11 + m1.m32 * m2.m12 + m1.m33 * m2.m13;
m32 = m1.m30 * m2.m20 + m1.m31 * m2.m21 + m1.m32 * m2.m22 + m1.m33 * m2.m23;
m33 = m1.m30 * m2.m30 + m1.m31 * m2.m31 + m1.m32 * m2.m32 + m1.m33 * m2.m33;
this.m00 = m00;
this.m01 = m01;
this.m02 = m02;
this.m03 = m03;
this.m10 = m10;
this.m11 = m11;
this.m12 = m12;
this.m13 = m13;
this.m20 = m20;
this.m21 = m21;
this.m22 = m22;
this.m23 = m23;
this.m30 = m30;
this.m31 = m31;
this.m32 = m32;
this.m33 = m33;
}}, "javax.vecmath.Matrix4d,javax.vecmath.Matrix4d");
Clazz.defineMethod (c$, "mulTransposeLeft", 
function (m1, m2) {
if (this !== m1 && this !== m2) {
this.m00 = m1.m00 * m2.m00 + m1.m10 * m2.m10 + m1.m20 * m2.m20 + m1.m30 * m2.m30;
this.m01 = m1.m00 * m2.m01 + m1.m10 * m2.m11 + m1.m20 * m2.m21 + m1.m30 * m2.m31;
this.m02 = m1.m00 * m2.m02 + m1.m10 * m2.m12 + m1.m20 * m2.m22 + m1.m30 * m2.m32;
this.m03 = m1.m00 * m2.m03 + m1.m10 * m2.m13 + m1.m20 * m2.m23 + m1.m30 * m2.m33;
this.m10 = m1.m01 * m2.m00 + m1.m11 * m2.m10 + m1.m21 * m2.m20 + m1.m31 * m2.m30;
this.m11 = m1.m01 * m2.m01 + m1.m11 * m2.m11 + m1.m21 * m2.m21 + m1.m31 * m2.m31;
this.m12 = m1.m01 * m2.m02 + m1.m11 * m2.m12 + m1.m21 * m2.m22 + m1.m31 * m2.m32;
this.m13 = m1.m01 * m2.m03 + m1.m11 * m2.m13 + m1.m21 * m2.m23 + m1.m31 * m2.m33;
this.m20 = m1.m02 * m2.m00 + m1.m12 * m2.m10 + m1.m22 * m2.m20 + m1.m32 * m2.m30;
this.m21 = m1.m02 * m2.m01 + m1.m12 * m2.m11 + m1.m22 * m2.m21 + m1.m32 * m2.m31;
this.m22 = m1.m02 * m2.m02 + m1.m12 * m2.m12 + m1.m22 * m2.m22 + m1.m32 * m2.m32;
this.m23 = m1.m02 * m2.m03 + m1.m12 * m2.m13 + m1.m22 * m2.m23 + m1.m32 * m2.m33;
this.m30 = m1.m03 * m2.m00 + m1.m13 * m2.m10 + m1.m23 * m2.m20 + m1.m33 * m2.m30;
this.m31 = m1.m03 * m2.m01 + m1.m13 * m2.m11 + m1.m23 * m2.m21 + m1.m33 * m2.m31;
this.m32 = m1.m03 * m2.m02 + m1.m13 * m2.m12 + m1.m23 * m2.m22 + m1.m33 * m2.m32;
this.m33 = m1.m03 * m2.m03 + m1.m13 * m2.m13 + m1.m23 * m2.m23 + m1.m33 * m2.m33;
} else {
var m00;
var m01;
var m02;
var m03;
var m10;
var m11;
var m12;
var m13;
var m20;
var m21;
var m22;
var m23;
var m30;
var m31;
var m32;
var m33;
m00 = m1.m00 * m2.m00 + m1.m10 * m2.m10 + m1.m20 * m2.m20 + m1.m30 * m2.m30;
m01 = m1.m00 * m2.m01 + m1.m10 * m2.m11 + m1.m20 * m2.m21 + m1.m30 * m2.m31;
m02 = m1.m00 * m2.m02 + m1.m10 * m2.m12 + m1.m20 * m2.m22 + m1.m30 * m2.m32;
m03 = m1.m00 * m2.m03 + m1.m10 * m2.m13 + m1.m20 * m2.m23 + m1.m30 * m2.m33;
m10 = m1.m01 * m2.m00 + m1.m11 * m2.m10 + m1.m21 * m2.m20 + m1.m31 * m2.m30;
m11 = m1.m01 * m2.m01 + m1.m11 * m2.m11 + m1.m21 * m2.m21 + m1.m31 * m2.m31;
m12 = m1.m01 * m2.m02 + m1.m11 * m2.m12 + m1.m21 * m2.m22 + m1.m31 * m2.m32;
m13 = m1.m01 * m2.m03 + m1.m11 * m2.m13 + m1.m21 * m2.m23 + m1.m31 * m2.m33;
m20 = m1.m02 * m2.m00 + m1.m12 * m2.m10 + m1.m22 * m2.m20 + m1.m32 * m2.m30;
m21 = m1.m02 * m2.m01 + m1.m12 * m2.m11 + m1.m22 * m2.m21 + m1.m32 * m2.m31;
m22 = m1.m02 * m2.m02 + m1.m12 * m2.m12 + m1.m22 * m2.m22 + m1.m32 * m2.m32;
m23 = m1.m02 * m2.m03 + m1.m12 * m2.m13 + m1.m22 * m2.m23 + m1.m32 * m2.m33;
m30 = m1.m03 * m2.m00 + m1.m13 * m2.m10 + m1.m23 * m2.m20 + m1.m33 * m2.m30;
m31 = m1.m03 * m2.m01 + m1.m13 * m2.m11 + m1.m23 * m2.m21 + m1.m33 * m2.m31;
m32 = m1.m03 * m2.m02 + m1.m13 * m2.m12 + m1.m23 * m2.m22 + m1.m33 * m2.m32;
m33 = m1.m03 * m2.m03 + m1.m13 * m2.m13 + m1.m23 * m2.m23 + m1.m33 * m2.m33;
this.m00 = m00;
this.m01 = m01;
this.m02 = m02;
this.m03 = m03;
this.m10 = m10;
this.m11 = m11;
this.m12 = m12;
this.m13 = m13;
this.m20 = m20;
this.m21 = m21;
this.m22 = m22;
this.m23 = m23;
this.m30 = m30;
this.m31 = m31;
this.m32 = m32;
this.m33 = m33;
}}, "javax.vecmath.Matrix4d,javax.vecmath.Matrix4d");
Clazz.defineMethod (c$, "equals", 
function (m1) {
try {
return (this.m00 == m1.m00 && this.m01 == m1.m01 && this.m02 == m1.m02 && this.m03 == m1.m03 && this.m10 == m1.m10 && this.m11 == m1.m11 && this.m12 == m1.m12 && this.m13 == m1.m13 && this.m20 == m1.m20 && this.m21 == m1.m21 && this.m22 == m1.m22 && this.m23 == m1.m23 && this.m30 == m1.m30 && this.m31 == m1.m31 && this.m32 == m1.m32 && this.m33 == m1.m33);
} catch (e2) {
if (Clazz.instanceOf (e2, NullPointerException)) {
return false;
} else {
throw e2;
}
}
}, "javax.vecmath.Matrix4d");
Clazz.defineMethod (c$, "equals", 
function (t1) {
try {
var m2 = t1;
return (this.m00 == m2.m00 && this.m01 == m2.m01 && this.m02 == m2.m02 && this.m03 == m2.m03 && this.m10 == m2.m10 && this.m11 == m2.m11 && this.m12 == m2.m12 && this.m13 == m2.m13 && this.m20 == m2.m20 && this.m21 == m2.m21 && this.m22 == m2.m22 && this.m23 == m2.m23 && this.m30 == m2.m30 && this.m31 == m2.m31 && this.m32 == m2.m32 && this.m33 == m2.m33);
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
return this.epsilonEquals (m1, epsilon);
}, "javax.vecmath.Matrix4d,~N");
Clazz.defineMethod (c$, "epsilonEquals", 
function (m1, epsilon) {
var diff;
diff = this.m00 - m1.m00;
if ((diff < 0 ? -diff : diff) > epsilon) return false;
diff = this.m01 - m1.m01;
if ((diff < 0 ? -diff : diff) > epsilon) return false;
diff = this.m02 - m1.m02;
if ((diff < 0 ? -diff : diff) > epsilon) return false;
diff = this.m03 - m1.m03;
if ((diff < 0 ? -diff : diff) > epsilon) return false;
diff = this.m10 - m1.m10;
if ((diff < 0 ? -diff : diff) > epsilon) return false;
diff = this.m11 - m1.m11;
if ((diff < 0 ? -diff : diff) > epsilon) return false;
diff = this.m12 - m1.m12;
if ((diff < 0 ? -diff : diff) > epsilon) return false;
diff = this.m13 - m1.m13;
if ((diff < 0 ? -diff : diff) > epsilon) return false;
diff = this.m20 - m1.m20;
if ((diff < 0 ? -diff : diff) > epsilon) return false;
diff = this.m21 - m1.m21;
if ((diff < 0 ? -diff : diff) > epsilon) return false;
diff = this.m22 - m1.m22;
if ((diff < 0 ? -diff : diff) > epsilon) return false;
diff = this.m23 - m1.m23;
if ((diff < 0 ? -diff : diff) > epsilon) return false;
diff = this.m30 - m1.m30;
if ((diff < 0 ? -diff : diff) > epsilon) return false;
diff = this.m31 - m1.m31;
if ((diff < 0 ? -diff : diff) > epsilon) return false;
diff = this.m32 - m1.m32;
if ((diff < 0 ? -diff : diff) > epsilon) return false;
diff = this.m33 - m1.m33;
if ((diff < 0 ? -diff : diff) > epsilon) return false;
return true;
}, "javax.vecmath.Matrix4d,~N");
Clazz.overrideMethod (c$, "hashCode", 
function () {
var bits = 1;
bits = 31 * bits + javax.vecmath.VecMathUtil.doubleToLongBits (this.m00);
bits = 31 * bits + javax.vecmath.VecMathUtil.doubleToLongBits (this.m01);
bits = 31 * bits + javax.vecmath.VecMathUtil.doubleToLongBits (this.m02);
bits = 31 * bits + javax.vecmath.VecMathUtil.doubleToLongBits (this.m03);
bits = 31 * bits + javax.vecmath.VecMathUtil.doubleToLongBits (this.m10);
bits = 31 * bits + javax.vecmath.VecMathUtil.doubleToLongBits (this.m11);
bits = 31 * bits + javax.vecmath.VecMathUtil.doubleToLongBits (this.m12);
bits = 31 * bits + javax.vecmath.VecMathUtil.doubleToLongBits (this.m13);
bits = 31 * bits + javax.vecmath.VecMathUtil.doubleToLongBits (this.m20);
bits = 31 * bits + javax.vecmath.VecMathUtil.doubleToLongBits (this.m21);
bits = 31 * bits + javax.vecmath.VecMathUtil.doubleToLongBits (this.m22);
bits = 31 * bits + javax.vecmath.VecMathUtil.doubleToLongBits (this.m23);
bits = 31 * bits + javax.vecmath.VecMathUtil.doubleToLongBits (this.m30);
bits = 31 * bits + javax.vecmath.VecMathUtil.doubleToLongBits (this.m31);
bits = 31 * bits + javax.vecmath.VecMathUtil.doubleToLongBits (this.m32);
bits = 31 * bits + javax.vecmath.VecMathUtil.doubleToLongBits (this.m33);
return (bits ^ (bits >> 32));
});
Clazz.defineMethod (c$, "transform", 
function (vec, vecOut) {
var x;
var y;
var z;
var w;
x = (this.m00 * vec.x + this.m01 * vec.y + this.m02 * vec.z + this.m03 * vec.w);
y = (this.m10 * vec.x + this.m11 * vec.y + this.m12 * vec.z + this.m13 * vec.w);
z = (this.m20 * vec.x + this.m21 * vec.y + this.m22 * vec.z + this.m23 * vec.w);
vecOut.w = (this.m30 * vec.x + this.m31 * vec.y + this.m32 * vec.z + this.m33 * vec.w);
vecOut.x = x;
vecOut.y = y;
vecOut.z = z;
}, "javax.vecmath.Tuple4d,javax.vecmath.Tuple4d");
Clazz.defineMethod (c$, "transform", 
function (vec) {
var x;
var y;
var z;
x = (this.m00 * vec.x + this.m01 * vec.y + this.m02 * vec.z + this.m03 * vec.w);
y = (this.m10 * vec.x + this.m11 * vec.y + this.m12 * vec.z + this.m13 * vec.w);
z = (this.m20 * vec.x + this.m21 * vec.y + this.m22 * vec.z + this.m23 * vec.w);
vec.w = (this.m30 * vec.x + this.m31 * vec.y + this.m32 * vec.z + this.m33 * vec.w);
vec.x = x;
vec.y = y;
vec.z = z;
}, "javax.vecmath.Tuple4d");
Clazz.defineMethod (c$, "transform", 
function (vec, vecOut) {
var x;
var y;
var z;
x = (this.m00 * vec.x + this.m01 * vec.y + this.m02 * vec.z + this.m03 * vec.w);
y = (this.m10 * vec.x + this.m11 * vec.y + this.m12 * vec.z + this.m13 * vec.w);
z = (this.m20 * vec.x + this.m21 * vec.y + this.m22 * vec.z + this.m23 * vec.w);
vecOut.w = (this.m30 * vec.x + this.m31 * vec.y + this.m32 * vec.z + this.m33 * vec.w);
vecOut.x = x;
vecOut.y = y;
vecOut.z = z;
}, "javax.vecmath.Tuple4f,javax.vecmath.Tuple4f");
Clazz.defineMethod (c$, "transform", 
function (vec) {
var x;
var y;
var z;
x = (this.m00 * vec.x + this.m01 * vec.y + this.m02 * vec.z + this.m03 * vec.w);
y = (this.m10 * vec.x + this.m11 * vec.y + this.m12 * vec.z + this.m13 * vec.w);
z = (this.m20 * vec.x + this.m21 * vec.y + this.m22 * vec.z + this.m23 * vec.w);
vec.w = (this.m30 * vec.x + this.m31 * vec.y + this.m32 * vec.z + this.m33 * vec.w);
vec.x = x;
vec.y = y;
vec.z = z;
}, "javax.vecmath.Tuple4f");
Clazz.defineMethod (c$, "transform", 
function (point, pointOut) {
var x;
var y;
x = this.m00 * point.x + this.m01 * point.y + this.m02 * point.z + this.m03;
y = this.m10 * point.x + this.m11 * point.y + this.m12 * point.z + this.m13;
pointOut.z = this.m20 * point.x + this.m21 * point.y + this.m22 * point.z + this.m23;
pointOut.x = x;
pointOut.y = y;
}, "javax.vecmath.Point3d,javax.vecmath.Point3d");
Clazz.defineMethod (c$, "transform", 
function (point) {
var x;
var y;
x = this.m00 * point.x + this.m01 * point.y + this.m02 * point.z + this.m03;
y = this.m10 * point.x + this.m11 * point.y + this.m12 * point.z + this.m13;
point.z = this.m20 * point.x + this.m21 * point.y + this.m22 * point.z + this.m23;
point.x = x;
point.y = y;
}, "javax.vecmath.Point3d");
Clazz.defineMethod (c$, "transform", 
function (point, pointOut) {
var x;
var y;
x = (this.m00 * point.x + this.m01 * point.y + this.m02 * point.z + this.m03);
y = (this.m10 * point.x + this.m11 * point.y + this.m12 * point.z + this.m13);
pointOut.z = (this.m20 * point.x + this.m21 * point.y + this.m22 * point.z + this.m23);
pointOut.x = x;
pointOut.y = y;
}, "javax.vecmath.Point3f,javax.vecmath.Point3f");
Clazz.defineMethod (c$, "transform", 
function (point) {
var x;
var y;
x = (this.m00 * point.x + this.m01 * point.y + this.m02 * point.z + this.m03);
y = (this.m10 * point.x + this.m11 * point.y + this.m12 * point.z + this.m13);
point.z = (this.m20 * point.x + this.m21 * point.y + this.m22 * point.z + this.m23);
point.x = x;
point.y = y;
}, "javax.vecmath.Point3f");
Clazz.defineMethod (c$, "transform", 
function (normal, normalOut) {
var x;
var y;
x = this.m00 * normal.x + this.m01 * normal.y + this.m02 * normal.z;
y = this.m10 * normal.x + this.m11 * normal.y + this.m12 * normal.z;
normalOut.z = this.m20 * normal.x + this.m21 * normal.y + this.m22 * normal.z;
normalOut.x = x;
normalOut.y = y;
}, "javax.vecmath.Vector3d,javax.vecmath.Vector3d");
Clazz.defineMethod (c$, "transform", 
function (normal) {
var x;
var y;
x = this.m00 * normal.x + this.m01 * normal.y + this.m02 * normal.z;
y = this.m10 * normal.x + this.m11 * normal.y + this.m12 * normal.z;
normal.z = this.m20 * normal.x + this.m21 * normal.y + this.m22 * normal.z;
normal.x = x;
normal.y = y;
}, "javax.vecmath.Vector3d");
Clazz.defineMethod (c$, "transform", 
function (normal, normalOut) {
var x;
var y;
x = (this.m00 * normal.x + this.m01 * normal.y + this.m02 * normal.z);
y = (this.m10 * normal.x + this.m11 * normal.y + this.m12 * normal.z);
normalOut.z = (this.m20 * normal.x + this.m21 * normal.y + this.m22 * normal.z);
normalOut.x = x;
normalOut.y = y;
}, "javax.vecmath.Vector3f,javax.vecmath.Vector3f");
Clazz.defineMethod (c$, "transform", 
function (normal) {
var x;
var y;
x = (this.m00 * normal.x + this.m01 * normal.y + this.m02 * normal.z);
y = (this.m10 * normal.x + this.m11 * normal.y + this.m12 * normal.z);
normal.z = (this.m20 * normal.x + this.m21 * normal.y + this.m22 * normal.z);
normal.x = x;
normal.y = y;
}, "javax.vecmath.Vector3f");
Clazz.defineMethod (c$, "setRotation", 
function (m1) {
var tmp_rot =  Clazz.newArray (9, 0);
var tmp_scale =  Clazz.newArray (3, 0);
this.getScaleRotate (tmp_scale, tmp_rot);
this.m00 = m1.m00 * tmp_scale[0];
this.m01 = m1.m01 * tmp_scale[1];
this.m02 = m1.m02 * tmp_scale[2];
this.m10 = m1.m10 * tmp_scale[0];
this.m11 = m1.m11 * tmp_scale[1];
this.m12 = m1.m12 * tmp_scale[2];
this.m20 = m1.m20 * tmp_scale[0];
this.m21 = m1.m21 * tmp_scale[1];
this.m22 = m1.m22 * tmp_scale[2];
}, "javax.vecmath.Matrix3d");
Clazz.defineMethod (c$, "setRotation", 
function (m1) {
var tmp_rot =  Clazz.newArray (9, 0);
var tmp_scale =  Clazz.newArray (3, 0);
this.getScaleRotate (tmp_scale, tmp_rot);
this.m00 = m1.m00 * tmp_scale[0];
this.m01 = m1.m01 * tmp_scale[1];
this.m02 = m1.m02 * tmp_scale[2];
this.m10 = m1.m10 * tmp_scale[0];
this.m11 = m1.m11 * tmp_scale[1];
this.m12 = m1.m12 * tmp_scale[2];
this.m20 = m1.m20 * tmp_scale[0];
this.m21 = m1.m21 * tmp_scale[1];
this.m22 = m1.m22 * tmp_scale[2];
}, "javax.vecmath.Matrix3f");
Clazz.defineMethod (c$, "setRotation", 
function (q1) {
var tmp_rot =  Clazz.newArray (9, 0);
var tmp_scale =  Clazz.newArray (3, 0);
this.getScaleRotate (tmp_scale, tmp_rot);
this.m00 = (1.0 - 2.0 * q1.y * q1.y - 2.0 * q1.z * q1.z) * tmp_scale[0];
this.m10 = (2.0 * (q1.x * q1.y + q1.w * q1.z)) * tmp_scale[0];
this.m20 = (2.0 * (q1.x * q1.z - q1.w * q1.y)) * tmp_scale[0];
this.m01 = (2.0 * (q1.x * q1.y - q1.w * q1.z)) * tmp_scale[1];
this.m11 = (1.0 - 2.0 * q1.x * q1.x - 2.0 * q1.z * q1.z) * tmp_scale[1];
this.m21 = (2.0 * (q1.y * q1.z + q1.w * q1.x)) * tmp_scale[1];
this.m02 = (2.0 * (q1.x * q1.z + q1.w * q1.y)) * tmp_scale[2];
this.m12 = (2.0 * (q1.y * q1.z - q1.w * q1.x)) * tmp_scale[2];
this.m22 = (1.0 - 2.0 * q1.x * q1.x - 2.0 * q1.y * q1.y) * tmp_scale[2];
}, "javax.vecmath.Quat4f");
Clazz.defineMethod (c$, "setRotation", 
function (q1) {
var tmp_rot =  Clazz.newArray (9, 0);
var tmp_scale =  Clazz.newArray (3, 0);
this.getScaleRotate (tmp_scale, tmp_rot);
this.m00 = (1.0 - 2.0 * q1.y * q1.y - 2.0 * q1.z * q1.z) * tmp_scale[0];
this.m10 = (2.0 * (q1.x * q1.y + q1.w * q1.z)) * tmp_scale[0];
this.m20 = (2.0 * (q1.x * q1.z - q1.w * q1.y)) * tmp_scale[0];
this.m01 = (2.0 * (q1.x * q1.y - q1.w * q1.z)) * tmp_scale[1];
this.m11 = (1.0 - 2.0 * q1.x * q1.x - 2.0 * q1.z * q1.z) * tmp_scale[1];
this.m21 = (2.0 * (q1.y * q1.z + q1.w * q1.x)) * tmp_scale[1];
this.m02 = (2.0 * (q1.x * q1.z + q1.w * q1.y)) * tmp_scale[2];
this.m12 = (2.0 * (q1.y * q1.z - q1.w * q1.x)) * tmp_scale[2];
this.m22 = (1.0 - 2.0 * q1.x * q1.x - 2.0 * q1.y * q1.y) * tmp_scale[2];
}, "javax.vecmath.Quat4d");
Clazz.defineMethod (c$, "setRotation", 
function (a1) {
var tmp_rot =  Clazz.newArray (9, 0);
var tmp_scale =  Clazz.newArray (3, 0);
this.getScaleRotate (tmp_scale, tmp_rot);
var mag = 1.0 / Math.sqrt (a1.x * a1.x + a1.y * a1.y + a1.z * a1.z);
var ax = a1.x * mag;
var ay = a1.y * mag;
var az = a1.z * mag;
var sinTheta = Math.sin (a1.angle);
var cosTheta = Math.cos (a1.angle);
var t = 1.0 - cosTheta;
var xz = a1.x * a1.z;
var xy = a1.x * a1.y;
var yz = a1.y * a1.z;
this.m00 = (t * ax * ax + cosTheta) * tmp_scale[0];
this.m01 = (t * xy - sinTheta * az) * tmp_scale[1];
this.m02 = (t * xz + sinTheta * ay) * tmp_scale[2];
this.m10 = (t * xy + sinTheta * az) * tmp_scale[0];
this.m11 = (t * ay * ay + cosTheta) * tmp_scale[1];
this.m12 = (t * yz - sinTheta * ax) * tmp_scale[2];
this.m20 = (t * xz - sinTheta * ay) * tmp_scale[0];
this.m21 = (t * yz + sinTheta * ax) * tmp_scale[1];
this.m22 = (t * az * az + cosTheta) * tmp_scale[2];
}, "javax.vecmath.AxisAngle4d");
Clazz.defineMethod (c$, "setZero", 
function () {
this.m00 = 0.0;
this.m01 = 0.0;
this.m02 = 0.0;
this.m03 = 0.0;
this.m10 = 0.0;
this.m11 = 0.0;
this.m12 = 0.0;
this.m13 = 0.0;
this.m20 = 0.0;
this.m21 = 0.0;
this.m22 = 0.0;
this.m23 = 0.0;
this.m30 = 0.0;
this.m31 = 0.0;
this.m32 = 0.0;
this.m33 = 0.0;
});
Clazz.defineMethod (c$, "negate", 
function () {
this.m00 = -this.m00;
this.m01 = -this.m01;
this.m02 = -this.m02;
this.m03 = -this.m03;
this.m10 = -this.m10;
this.m11 = -this.m11;
this.m12 = -this.m12;
this.m13 = -this.m13;
this.m20 = -this.m20;
this.m21 = -this.m21;
this.m22 = -this.m22;
this.m23 = -this.m23;
this.m30 = -this.m30;
this.m31 = -this.m31;
this.m32 = -this.m32;
this.m33 = -this.m33;
});
Clazz.defineMethod (c$, "negate", 
function (m1) {
this.m00 = -m1.m00;
this.m01 = -m1.m01;
this.m02 = -m1.m02;
this.m03 = -m1.m03;
this.m10 = -m1.m10;
this.m11 = -m1.m11;
this.m12 = -m1.m12;
this.m13 = -m1.m13;
this.m20 = -m1.m20;
this.m21 = -m1.m21;
this.m22 = -m1.m22;
this.m23 = -m1.m23;
this.m30 = -m1.m30;
this.m31 = -m1.m31;
this.m32 = -m1.m32;
this.m33 = -m1.m33;
}, "javax.vecmath.Matrix4d");
Clazz.defineMethod (c$, "getScaleRotate", 
($fz = function (scales, rots) {
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
}, $fz.isPrivate = true, $fz), "~A,~A");
Clazz.defineMethod (c$, "clone", 
function () {
var m1 = null;
try {
m1 = Clazz.superCall (this, javax.vecmath.Matrix4d, "clone", []);
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
Clazz.defineMethod (c$, "getM03", 
function () {
return this.m03;
});
Clazz.defineMethod (c$, "setM03", 
function (m03) {
this.m03 = m03;
}, "~N");
Clazz.defineMethod (c$, "getM13", 
function () {
return this.m13;
});
Clazz.defineMethod (c$, "setM13", 
function (m13) {
this.m13 = m13;
}, "~N");
Clazz.defineMethod (c$, "getM23", 
function () {
return this.m23;
});
Clazz.defineMethod (c$, "setM23", 
function (m23) {
this.m23 = m23;
}, "~N");
Clazz.defineMethod (c$, "getM30", 
function () {
return this.m30;
});
Clazz.defineMethod (c$, "setM30", 
function (m30) {
this.m30 = m30;
}, "~N");
Clazz.defineMethod (c$, "getM31", 
function () {
return this.m31;
});
Clazz.defineMethod (c$, "setM31", 
function (m31) {
this.m31 = m31;
}, "~N");
Clazz.defineMethod (c$, "getM32", 
function () {
return this.m32;
});
Clazz.defineMethod (c$, "setM32", 
function (m32) {
this.m32 = m32;
}, "~N");
Clazz.defineMethod (c$, "getM33", 
function () {
return this.m33;
});
Clazz.defineMethod (c$, "setM33", 
function (m33) {
this.m33 = m33;
}, "~N");
Clazz.defineStatics (c$,
"EPS", 1.0E-10);
});
