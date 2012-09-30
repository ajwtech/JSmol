Clazz.declarePackage ("javax.vecmath");
Clazz.load (null, "javax.vecmath.Matrix4f", ["java.lang.ArrayIndexOutOfBoundsException", "$.RuntimeException", "javax.vecmath.SingularMatrixException", "$.VecMathUtil"], function () {
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
}, javax.vecmath, "Matrix4f", null, java.io.Serializable);
c$.newA = Clazz.defineMethod (c$, "newA", 
function (v) {
var m =  new javax.vecmath.Matrix4f ();
m.m00 = v[0];
m.m01 = v[1];
m.m02 = v[2];
m.m03 = v[3];
m.m10 = v[4];
m.m11 = v[5];
m.m12 = v[6];
m.m13 = v[7];
m.m20 = v[8];
m.m21 = v[9];
m.m22 = v[10];
m.m23 = v[11];
m.m30 = v[12];
m.m31 = v[13];
m.m32 = v[14];
m.m33 = v[15];
return m;
}, "~A");
c$.newM = Clazz.defineMethod (c$, "newM", 
function (m1) {
var m =  new javax.vecmath.Matrix4f ();
m.m00 = m1.m00;
m.m01 = m1.m01;
m.m02 = m1.m02;
m.m03 = m1.m03;
m.m10 = m1.m10;
m.m11 = m1.m11;
m.m12 = m1.m12;
m.m13 = m1.m13;
m.m20 = m1.m20;
m.m21 = m1.m21;
m.m22 = m1.m22;
m.m23 = m1.m23;
m.m30 = m1.m30;
m.m31 = m1.m31;
m.m32 = m1.m32;
m.m33 = m1.m33;
return m;
}, "javax.vecmath.Matrix4f");
c$.newMV = Clazz.defineMethod (c$, "newMV", 
function (m1, t1) {
var m =  new javax.vecmath.Matrix4f ();
m.m00 = m1.m00;
m.m01 = m1.m01;
m.m02 = m1.m02;
m.m03 = t1.x;
m.m10 = m1.m10;
m.m11 = m1.m11;
m.m12 = m1.m12;
m.m13 = t1.y;
m.m20 = m1.m20;
m.m21 = m1.m21;
m.m22 = m1.m22;
m.m23 = t1.z;
m.m30 = 0.0;
m.m31 = 0.0;
m.m32 = 0.0;
m.m33 = 1.0;
return m;
}, "javax.vecmath.Matrix3f,javax.vecmath.Vector3f");
Clazz.makeConstructor (c$, 
function () {
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
throw  new ArrayIndexOutOfBoundsException (("Matrix4f0"));
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
throw  new ArrayIndexOutOfBoundsException (("Matrix4f0"));
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
throw  new ArrayIndexOutOfBoundsException (("Matrix4f0"));
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
throw  new ArrayIndexOutOfBoundsException (("Matrix4f0"));
}
break;
default:
throw  new ArrayIndexOutOfBoundsException (("Matrix4f0"));
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
throw  new ArrayIndexOutOfBoundsException (("Matrix4f1"));
}, "~N,~N");
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
throw  new ArrayIndexOutOfBoundsException (("Matrix4f4"));
}}, "~N,~A");
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
throw  new ArrayIndexOutOfBoundsException (("Matrix4f2"));
}}, "~N,~A");
Clazz.defineMethod (c$, "get", 
function (trans) {
trans.x = this.m03;
trans.y = this.m13;
trans.z = this.m23;
}, "javax.vecmath.Vector3f");
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
throw  new ArrayIndexOutOfBoundsException (("Matrix4f6"));
}
}, "~N,~A");
Clazz.defineMethod (c$, "setColumn4", 
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
throw  new ArrayIndexOutOfBoundsException (("Matrix4f9"));
}
}, "~N,~N,~N,~N,~N");
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
throw  new ArrayIndexOutOfBoundsException (("Matrix4f9"));
}
}, "~N,~A");
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
}, "javax.vecmath.Matrix4f");
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
Clazz.defineMethod (c$, "setAA", 
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
}this.m03 = 0.0;
this.m13 = 0.0;
this.m23 = 0.0;
this.m30 = 0.0;
this.m31 = 0.0;
this.m32 = 0.0;
this.m33 = 1.0;
}, "javax.vecmath.AxisAngle4f");
Clazz.defineMethod (c$, "setM", 
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
Clazz.defineMethod (c$, "invertM", 
function (m1) {
this.invertGeneral (m1);
}, "javax.vecmath.Matrix4f");
Clazz.defineMethod (c$, "invert", 
function () {
this.invertGeneral (this);
});
Clazz.defineMethod (c$, "invertGeneral", 
function (m1) {
var temp =  Clazz.newArray (16, 0);
var result =  Clazz.newArray (16, 0);
var row_perm =  Clazz.newArray (4, 0);
var i;
temp[0] = m1.m00;
temp[1] = m1.m01;
temp[2] = m1.m02;
temp[3] = m1.m03;
temp[4] = m1.m10;
temp[5] = m1.m11;
temp[6] = m1.m12;
temp[7] = m1.m13;
temp[8] = m1.m20;
temp[9] = m1.m21;
temp[10] = m1.m22;
temp[11] = m1.m23;
temp[12] = m1.m30;
temp[13] = m1.m31;
temp[14] = m1.m32;
temp[15] = m1.m33;
if (!javax.vecmath.Matrix4f.luDecomposition (temp, row_perm)) {
throw  new javax.vecmath.SingularMatrixException (("Matrix4f12"));
}for (i = 0; i < 16; i++) result[i] = 0.0;

result[0] = 1.0;
result[5] = 1.0;
result[10] = 1.0;
result[15] = 1.0;
javax.vecmath.Matrix4f.luBacksubstitution (temp, row_perm, result);
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
}, "javax.vecmath.Matrix4f");
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
throw  new RuntimeException (("Matrix4f13"));
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
Clazz.defineMethod (c$, "setA", 
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
Clazz.defineMethod (c$, "setMV", 
function (m1, t1) {
this.m00 = m1.m00;
this.m01 = m1.m01;
this.m02 = m1.m02;
this.m03 = t1.x;
this.m10 = m1.m10;
this.m11 = m1.m11;
this.m12 = m1.m12;
this.m13 = t1.y;
this.m20 = m1.m20;
this.m21 = m1.m21;
this.m22 = m1.m22;
this.m23 = t1.z;
this.m30 = 0.0;
this.m31 = 0.0;
this.m32 = 0.0;
this.m33 = 1.0;
}, "javax.vecmath.Matrix3f,javax.vecmath.Vector3f");
Clazz.defineMethod (c$, "setTranslation", 
function (trans) {
this.m03 = trans.x;
this.m13 = trans.y;
this.m23 = trans.z;
}, "javax.vecmath.Vector3f");
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
}, "javax.vecmath.Matrix4f");
Clazz.defineMethod (c$, "mul2", 
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
}}, "javax.vecmath.Matrix4f,javax.vecmath.Matrix4f");
Clazz.overrideMethod (c$, "equals", 
function (t1) {
if (!(Clazz.instanceOf (t1, javax.vecmath.Matrix4f))) return false;
var m2 = t1;
return (this.m00 == m2.m00 && this.m01 == m2.m01 && this.m02 == m2.m02 && this.m03 == m2.m03 && this.m10 == m2.m10 && this.m11 == m2.m11 && this.m12 == m2.m12 && this.m13 == m2.m13 && this.m20 == m2.m20 && this.m21 == m2.m21 && this.m22 == m2.m22 && this.m23 == m2.m23 && this.m30 == m2.m30 && this.m31 == m2.m31 && this.m32 == m2.m32 && this.m33 == m2.m33);
}, "~O");
Clazz.overrideMethod (c$, "hashCode", 
function () {
var bits = 1;
bits = 31 * bits + javax.vecmath.VecMathUtil.floatToIntBits (this.m00);
bits = 31 * bits + javax.vecmath.VecMathUtil.floatToIntBits (this.m01);
bits = 31 * bits + javax.vecmath.VecMathUtil.floatToIntBits (this.m02);
bits = 31 * bits + javax.vecmath.VecMathUtil.floatToIntBits (this.m03);
bits = 31 * bits + javax.vecmath.VecMathUtil.floatToIntBits (this.m10);
bits = 31 * bits + javax.vecmath.VecMathUtil.floatToIntBits (this.m11);
bits = 31 * bits + javax.vecmath.VecMathUtil.floatToIntBits (this.m12);
bits = 31 * bits + javax.vecmath.VecMathUtil.floatToIntBits (this.m13);
bits = 31 * bits + javax.vecmath.VecMathUtil.floatToIntBits (this.m20);
bits = 31 * bits + javax.vecmath.VecMathUtil.floatToIntBits (this.m21);
bits = 31 * bits + javax.vecmath.VecMathUtil.floatToIntBits (this.m22);
bits = 31 * bits + javax.vecmath.VecMathUtil.floatToIntBits (this.m23);
bits = 31 * bits + javax.vecmath.VecMathUtil.floatToIntBits (this.m30);
bits = 31 * bits + javax.vecmath.VecMathUtil.floatToIntBits (this.m31);
bits = 31 * bits + javax.vecmath.VecMathUtil.floatToIntBits (this.m32);
bits = 31 * bits + javax.vecmath.VecMathUtil.floatToIntBits (this.m33);
return (bits ^ (bits >> 32));
});
Clazz.defineMethod (c$, "transform4", 
function (vec) {
var x;
var y;
var z;
x = this.m00 * vec.x + this.m01 * vec.y + this.m02 * vec.z + this.m03 * vec.w;
y = this.m10 * vec.x + this.m11 * vec.y + this.m12 * vec.z + this.m13 * vec.w;
z = this.m20 * vec.x + this.m21 * vec.y + this.m22 * vec.z + this.m23 * vec.w;
vec.w = this.m30 * vec.x + this.m31 * vec.y + this.m32 * vec.z + this.m33 * vec.w;
vec.x = x;
vec.y = y;
vec.z = z;
}, "javax.vecmath.Tuple4f");
Clazz.defineMethod (c$, "transform2", 
function (point, pointOut) {
var x;
var y;
x = this.m00 * point.x + this.m01 * point.y + this.m02 * point.z + this.m03;
y = this.m10 * point.x + this.m11 * point.y + this.m12 * point.z + this.m13;
pointOut.z = this.m20 * point.x + this.m21 * point.y + this.m22 * point.z + this.m23;
pointOut.x = x;
pointOut.y = y;
}, "javax.vecmath.Point3f,javax.vecmath.Point3f");
Clazz.defineMethod (c$, "transform", 
function (point) {
var x;
var y;
x = this.m00 * point.x + this.m01 * point.y + this.m02 * point.z + this.m03;
y = this.m10 * point.x + this.m11 * point.y + this.m12 * point.z + this.m13;
point.z = this.m20 * point.x + this.m21 * point.y + this.m22 * point.z + this.m23;
point.x = x;
point.y = y;
}, "javax.vecmath.Point3f");
Clazz.defineMethod (c$, "transformV", 
function (normal) {
var x;
var y;
x = this.m00 * normal.x + this.m01 * normal.y + this.m02 * normal.z;
y = this.m10 * normal.x + this.m11 * normal.y + this.m12 * normal.z;
normal.z = this.m20 * normal.x + this.m21 * normal.y + this.m22 * normal.z;
normal.x = x;
normal.y = y;
}, "javax.vecmath.Vector3f");
Clazz.defineMethod (c$, "transformV2", 
function (normal, normalOut) {
var x;
var y;
x = this.m00 * normal.x + this.m01 * normal.y + this.m02 * normal.z;
y = this.m10 * normal.x + this.m11 * normal.y + this.m12 * normal.z;
normalOut.z = this.m20 * normal.x + this.m21 * normal.y + this.m22 * normal.z;
normalOut.x = x;
normalOut.y = y;
}, "javax.vecmath.Vector3f,javax.vecmath.Vector3f");
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
Clazz.defineStatics (c$,
"EPS", 1.0E-8);
});
