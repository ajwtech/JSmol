Clazz.declarePackage ("javax.vecmath");
Clazz.load (null, "javax.vecmath.Matrix3f", ["java.lang.ArrayIndexOutOfBoundsException", "$.RuntimeException", "javax.vecmath.SingularMatrixException", "$.VecMathUtil"], function () {
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
}, javax.vecmath, "Matrix3f", null, java.io.Serializable);
c$.newA = Clazz.defineMethod (c$, "newA", 
function (v) {
var m =  new javax.vecmath.Matrix3f ();
m.setA (v);
return m;
}, "~A");
c$.newM = Clazz.defineMethod (c$, "newM", 
function (m1) {
var m =  new javax.vecmath.Matrix3f ();
m.m00 = m1.m00;
m.m01 = m1.m01;
m.m02 = m1.m02;
m.m10 = m1.m10;
m.m11 = m1.m11;
m.m12 = m1.m12;
m.m20 = m1.m20;
m.m21 = m1.m21;
m.m22 = m1.m22;
return m;
}, "javax.vecmath.Matrix3f");
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
throw  new ArrayIndexOutOfBoundsException (("Matrix3f0"));
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
throw  new ArrayIndexOutOfBoundsException (("Matrix3f0"));
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
throw  new ArrayIndexOutOfBoundsException (("Matrix3f0"));
}
break;
default:
throw  new ArrayIndexOutOfBoundsException (("Matrix3f0"));
}
}, "~N,~N,~N");
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
throw  new ArrayIndexOutOfBoundsException (("Matrix3f1"));
}}, "~N,~A");
Clazz.defineMethod (c$, "getColumnV", 
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
throw  new ArrayIndexOutOfBoundsException (("Matrix3f3"));
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
throw  new ArrayIndexOutOfBoundsException (("Matrix3f3"));
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
throw  new ArrayIndexOutOfBoundsException (("Matrix3f5"));
}, "~N,~N");
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
throw  new ArrayIndexOutOfBoundsException (("Matrix3f6"));
}
}, "~N,~A");
Clazz.defineMethod (c$, "setColumnV", 
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
throw  new ArrayIndexOutOfBoundsException (("Matrix3f9"));
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
throw  new ArrayIndexOutOfBoundsException (("Matrix3f9"));
}
}, "~N,~A");
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
Clazz.defineMethod (c$, "transposeM", 
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
}}, "javax.vecmath.AxisAngle4f");
Clazz.defineMethod (c$, "setA", 
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
Clazz.defineMethod (c$, "invertM", 
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
throw  new javax.vecmath.SingularMatrixException (("Matrix3f12"));
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
throw  new RuntimeException (("Matrix3f13"));
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
Clazz.defineMethod (c$, "mulf", 
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
Clazz.defineMethod (c$, "mul2", 
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
Clazz.overrideMethod (c$, "equals", 
function (o1) {
if (!(Clazz.instanceOf (o1, javax.vecmath.Matrix3f))) return false;
var m2 = o1;
return (this.m00 == m2.m00 && this.m01 == m2.m01 && this.m02 == m2.m02 && this.m10 == m2.m10 && this.m11 == m2.m11 && this.m12 == m2.m12 && this.m20 == m2.m20 && this.m21 == m2.m21 && this.m22 == m2.m22);
}, "~O");
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
Clazz.defineMethod (c$, "transform2", 
function (t, result) {
var x;
var y;
x = this.m00 * t.x + this.m01 * t.y + this.m02 * t.z;
y = this.m10 * t.x + this.m11 * t.y + this.m12 * t.z;
result.z = this.m20 * t.x + this.m21 * t.y + this.m22 * t.z;
result.x = x;
result.y = y;
}, "javax.vecmath.Tuple3f,javax.vecmath.Tuple3f");
Clazz.defineStatics (c$,
"EPS", 1.0E-8);
});
