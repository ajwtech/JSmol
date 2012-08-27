Clazz.declarePackage ("javax.vecmath");
Clazz.load (null, "javax.vecmath.GMatrix", ["java.lang.InternalError", "$.RuntimeException", "$.StringBuffer", "javax.vecmath.MismatchedSizeException", "$.SingularMatrixException", "$.VecMathI18N", "$.VecMathUtil"], function () {
c$ = Clazz.decorateAsClass (function () {
this.nRow = 0;
this.nCol = 0;
this.values = null;
Clazz.instantialize (this, arguments);
}, javax.vecmath, "GMatrix", null, [java.io.Serializable, Cloneable]);
Clazz.makeConstructor (c$, 
function (nRow, nCol) {
this.values =  Clazz.newArray (nRow, nCol, 0);
this.nRow = nRow;
this.nCol = nCol;
var i;
var j;
for (i = 0; i < nRow; i++) {
for (j = 0; j < nCol; j++) {
this.values[i][j] = 0.0;
}
}
var l;
if (nRow < nCol) l = nRow;
 else l = nCol;
for (i = 0; i < l; i++) {
this.values[i][i] = 1.0;
}
}, "~N,~N");
Clazz.makeConstructor (c$, 
function (nRow, nCol, matrix) {
this.values =  Clazz.newArray (nRow, nCol, 0);
this.nRow = nRow;
this.nCol = nCol;
var i;
var j;
for (i = 0; i < nRow; i++) {
for (j = 0; j < nCol; j++) {
this.values[i][j] = matrix[i * nCol + j];
}
}
}, "~N,~N,~A");
Clazz.makeConstructor (c$, 
function (matrix) {
this.nRow = matrix.nRow;
this.nCol = matrix.nCol;
this.values =  Clazz.newArray (this.nRow, this.nCol, 0);
var i;
var j;
for (i = 0; i < this.nRow; i++) {
for (j = 0; j < this.nCol; j++) {
this.values[i][j] = matrix.values[i][j];
}
}
}, "javax.vecmath.GMatrix");
Clazz.defineMethod (c$, "mul", 
function (m1) {
var i;
var j;
var k;
if (this.nCol != m1.nRow || this.nCol != m1.nCol) throw  new javax.vecmath.MismatchedSizeException (javax.vecmath.VecMathI18N.getString ("GMatrix0"));
var tmp =  Clazz.newArray (this.nRow, this.nCol, 0);
for (i = 0; i < this.nRow; i++) {
for (j = 0; j < this.nCol; j++) {
tmp[i][j] = 0.0;
for (k = 0; k < this.nCol; k++) {
tmp[i][j] += this.values[i][k] * m1.values[k][j];
}
}
}
this.values = tmp;
}, "javax.vecmath.GMatrix");
Clazz.defineMethod (c$, "mul", 
function (m1, m2) {
var i;
var j;
var k;
if (m1.nCol != m2.nRow || this.nRow != m1.nRow || this.nCol != m2.nCol) throw  new javax.vecmath.MismatchedSizeException (javax.vecmath.VecMathI18N.getString ("GMatrix1"));
var tmp =  Clazz.newArray (this.nRow, this.nCol, 0);
for (i = 0; i < m1.nRow; i++) {
for (j = 0; j < m2.nCol; j++) {
tmp[i][j] = 0.0;
for (k = 0; k < m1.nCol; k++) {
tmp[i][j] += m1.values[i][k] * m2.values[k][j];
}
}
}
this.values = tmp;
}, "javax.vecmath.GMatrix,javax.vecmath.GMatrix");
Clazz.defineMethod (c$, "mul", 
function (v1, v2) {
var i;
var j;
if (this.nRow < v1.getSize ()) throw  new javax.vecmath.MismatchedSizeException (javax.vecmath.VecMathI18N.getString ("GMatrix2"));
if (this.nCol < v2.getSize ()) throw  new javax.vecmath.MismatchedSizeException (javax.vecmath.VecMathI18N.getString ("GMatrix3"));
for (i = 0; i < v1.getSize (); i++) {
for (j = 0; j < v2.getSize (); j++) {
this.values[i][j] = v1.values[i] * v2.values[j];
}
}
}, "javax.vecmath.GVector,javax.vecmath.GVector");
Clazz.defineMethod (c$, "add", 
function (m1) {
var i;
var j;
if (this.nRow != m1.nRow) throw  new javax.vecmath.MismatchedSizeException (javax.vecmath.VecMathI18N.getString ("GMatrix4"));
if (this.nCol != m1.nCol) throw  new javax.vecmath.MismatchedSizeException (javax.vecmath.VecMathI18N.getString ("GMatrix5"));
for (i = 0; i < this.nRow; i++) {
for (j = 0; j < this.nCol; j++) {
this.values[i][j] = this.values[i][j] + m1.values[i][j];
}
}
}, "javax.vecmath.GMatrix");
Clazz.defineMethod (c$, "add", 
function (m1, m2) {
var i;
var j;
if (m2.nRow != m1.nRow) throw  new javax.vecmath.MismatchedSizeException (javax.vecmath.VecMathI18N.getString ("GMatrix6"));
if (m2.nCol != m1.nCol) throw  new javax.vecmath.MismatchedSizeException (javax.vecmath.VecMathI18N.getString ("GMatrix7"));
if (this.nCol != m1.nCol || this.nRow != m1.nRow) throw  new javax.vecmath.MismatchedSizeException (javax.vecmath.VecMathI18N.getString ("GMatrix8"));
for (i = 0; i < this.nRow; i++) {
for (j = 0; j < this.nCol; j++) {
this.values[i][j] = m1.values[i][j] + m2.values[i][j];
}
}
}, "javax.vecmath.GMatrix,javax.vecmath.GMatrix");
Clazz.defineMethod (c$, "sub", 
function (m1) {
var i;
var j;
if (this.nRow != m1.nRow) throw  new javax.vecmath.MismatchedSizeException (javax.vecmath.VecMathI18N.getString ("GMatrix9"));
if (this.nCol != m1.nCol) throw  new javax.vecmath.MismatchedSizeException (javax.vecmath.VecMathI18N.getString ("GMatrix28"));
for (i = 0; i < this.nRow; i++) {
for (j = 0; j < this.nCol; j++) {
this.values[i][j] = this.values[i][j] - m1.values[i][j];
}
}
}, "javax.vecmath.GMatrix");
Clazz.defineMethod (c$, "sub", 
function (m1, m2) {
var i;
var j;
if (m2.nRow != m1.nRow) throw  new javax.vecmath.MismatchedSizeException (javax.vecmath.VecMathI18N.getString ("GMatrix10"));
if (m2.nCol != m1.nCol) throw  new javax.vecmath.MismatchedSizeException (javax.vecmath.VecMathI18N.getString ("GMatrix11"));
if (this.nRow != m1.nRow || this.nCol != m1.nCol) throw  new javax.vecmath.MismatchedSizeException (javax.vecmath.VecMathI18N.getString ("GMatrix12"));
for (i = 0; i < this.nRow; i++) {
for (j = 0; j < this.nCol; j++) {
this.values[i][j] = m1.values[i][j] - m2.values[i][j];
}
}
}, "javax.vecmath.GMatrix,javax.vecmath.GMatrix");
Clazz.defineMethod (c$, "negate", 
function () {
var i;
var j;
for (i = 0; i < this.nRow; i++) {
for (j = 0; j < this.nCol; j++) {
this.values[i][j] = -this.values[i][j];
}
}
});
Clazz.defineMethod (c$, "negate", 
function (m1) {
var i;
var j;
if (this.nRow != m1.nRow || this.nCol != m1.nCol) throw  new javax.vecmath.MismatchedSizeException (javax.vecmath.VecMathI18N.getString ("GMatrix13"));
for (i = 0; i < this.nRow; i++) {
for (j = 0; j < this.nCol; j++) {
this.values[i][j] = -m1.values[i][j];
}
}
}, "javax.vecmath.GMatrix");
Clazz.defineMethod (c$, "setIdentity", 
function () {
var i;
var j;
for (i = 0; i < this.nRow; i++) {
for (j = 0; j < this.nCol; j++) {
this.values[i][j] = 0.0;
}
}
var l;
if (this.nRow < this.nCol) l = this.nRow;
 else l = this.nCol;
for (i = 0; i < l; i++) {
this.values[i][i] = 1.0;
}
});
Clazz.defineMethod (c$, "setZero", 
function () {
var i;
var j;
for (i = 0; i < this.nRow; i++) {
for (j = 0; j < this.nCol; j++) {
this.values[i][j] = 0.0;
}
}
});
Clazz.defineMethod (c$, "identityMinus", 
function () {
var i;
var j;
for (i = 0; i < this.nRow; i++) {
for (j = 0; j < this.nCol; j++) {
this.values[i][j] = -this.values[i][j];
}
}
var l;
if (this.nRow < this.nCol) l = this.nRow;
 else l = this.nCol;
for (i = 0; i < l; i++) {
this.values[i][i] += 1.0;
}
});
Clazz.defineMethod (c$, "invert", 
function () {
this.invertGeneral (this);
});
Clazz.defineMethod (c$, "invert", 
function (m1) {
this.invertGeneral (m1);
}, "javax.vecmath.GMatrix");
Clazz.defineMethod (c$, "copySubMatrix", 
function (rowSource, colSource, numRow, numCol, rowDest, colDest, target) {
var i;
var j;
if (this !== target) {
for (i = 0; i < numRow; i++) {
for (j = 0; j < numCol; j++) {
target.values[rowDest + i][colDest + j] = this.values[rowSource + i][colSource + j];
}
}
} else {
var tmp =  Clazz.newArray (numRow, numCol, 0);
for (i = 0; i < numRow; i++) {
for (j = 0; j < numCol; j++) {
tmp[i][j] = this.values[rowSource + i][colSource + j];
}
}
for (i = 0; i < numRow; i++) {
for (j = 0; j < numCol; j++) {
target.values[rowDest + i][colDest + j] = tmp[i][j];
}
}
}}, "~N,~N,~N,~N,~N,~N,javax.vecmath.GMatrix");
Clazz.defineMethod (c$, "setSize", 
function (nRow, nCol) {
var tmp =  Clazz.newArray (nRow, nCol, 0);
var i;
var j;
var maxRow;
var maxCol;
if (this.nRow < nRow) maxRow = this.nRow;
 else maxRow = nRow;
if (this.nCol < nCol) maxCol = this.nCol;
 else maxCol = nCol;
for (i = 0; i < maxRow; i++) {
for (j = 0; j < maxCol; j++) {
tmp[i][j] = this.values[i][j];
}
}
this.nRow = nRow;
this.nCol = nCol;
this.values = tmp;
}, "~N,~N");
Clazz.defineMethod (c$, "set", 
function (matrix) {
var i;
var j;
for (i = 0; i < this.nRow; i++) {
for (j = 0; j < this.nCol; j++) {
this.values[i][j] = matrix[this.nCol * i + j];
}
}
}, "~A");
Clazz.defineMethod (c$, "set", 
function (m1) {
var i;
var j;
if (this.nCol < 3 || this.nRow < 3) {
this.nCol = 3;
this.nRow = 3;
this.values =  Clazz.newArray (this.nRow, this.nCol, 0);
}this.values[0][0] = m1.m00;
this.values[0][1] = m1.m01;
this.values[0][2] = m1.m02;
this.values[1][0] = m1.m10;
this.values[1][1] = m1.m11;
this.values[1][2] = m1.m12;
this.values[2][0] = m1.m20;
this.values[2][1] = m1.m21;
this.values[2][2] = m1.m22;
for (i = 3; i < this.nRow; i++) {
for (j = 3; j < this.nCol; j++) {
this.values[i][j] = 0.0;
}
}
}, "javax.vecmath.Matrix3f");
Clazz.defineMethod (c$, "set", 
function (m1) {
if (this.nRow < 3 || this.nCol < 3) {
this.values =  Clazz.newArray (3, 3, 0);
this.nRow = 3;
this.nCol = 3;
}this.values[0][0] = m1.m00;
this.values[0][1] = m1.m01;
this.values[0][2] = m1.m02;
this.values[1][0] = m1.m10;
this.values[1][1] = m1.m11;
this.values[1][2] = m1.m12;
this.values[2][0] = m1.m20;
this.values[2][1] = m1.m21;
this.values[2][2] = m1.m22;
for (var i = 3; i < this.nRow; i++) {
for (var j = 3; j < this.nCol; j++) {
this.values[i][j] = 0.0;
}
}
}, "javax.vecmath.Matrix3d");
Clazz.defineMethod (c$, "set", 
function (m1) {
if (this.nRow < 4 || this.nCol < 4) {
this.values =  Clazz.newArray (4, 4, 0);
this.nRow = 4;
this.nCol = 4;
}this.values[0][0] = m1.m00;
this.values[0][1] = m1.m01;
this.values[0][2] = m1.m02;
this.values[0][3] = m1.m03;
this.values[1][0] = m1.m10;
this.values[1][1] = m1.m11;
this.values[1][2] = m1.m12;
this.values[1][3] = m1.m13;
this.values[2][0] = m1.m20;
this.values[2][1] = m1.m21;
this.values[2][2] = m1.m22;
this.values[2][3] = m1.m23;
this.values[3][0] = m1.m30;
this.values[3][1] = m1.m31;
this.values[3][2] = m1.m32;
this.values[3][3] = m1.m33;
for (var i = 4; i < this.nRow; i++) {
for (var j = 4; j < this.nCol; j++) {
this.values[i][j] = 0.0;
}
}
}, "javax.vecmath.Matrix4f");
Clazz.defineMethod (c$, "set", 
function (m1) {
if (this.nRow < 4 || this.nCol < 4) {
this.values =  Clazz.newArray (4, 4, 0);
this.nRow = 4;
this.nCol = 4;
}this.values[0][0] = m1.m00;
this.values[0][1] = m1.m01;
this.values[0][2] = m1.m02;
this.values[0][3] = m1.m03;
this.values[1][0] = m1.m10;
this.values[1][1] = m1.m11;
this.values[1][2] = m1.m12;
this.values[1][3] = m1.m13;
this.values[2][0] = m1.m20;
this.values[2][1] = m1.m21;
this.values[2][2] = m1.m22;
this.values[2][3] = m1.m23;
this.values[3][0] = m1.m30;
this.values[3][1] = m1.m31;
this.values[3][2] = m1.m32;
this.values[3][3] = m1.m33;
for (var i = 4; i < this.nRow; i++) {
for (var j = 4; j < this.nCol; j++) {
this.values[i][j] = 0.0;
}
}
}, "javax.vecmath.Matrix4d");
Clazz.defineMethod (c$, "set", 
function (m1) {
var i;
var j;
if (this.nRow < m1.nRow || this.nCol < m1.nCol) {
this.nRow = m1.nRow;
this.nCol = m1.nCol;
this.values =  Clazz.newArray (this.nRow, this.nCol, 0);
}for (i = 0; i < Math.min (this.nRow, m1.nRow); i++) {
for (j = 0; j < Math.min (this.nCol, m1.nCol); j++) {
this.values[i][j] = m1.values[i][j];
}
}
for (i = m1.nRow; i < this.nRow; i++) {
for (j = m1.nCol; j < this.nCol; j++) {
this.values[i][j] = 0.0;
}
}
}, "javax.vecmath.GMatrix");
Clazz.defineMethod (c$, "getNumRow", 
function () {
return (this.nRow);
});
Clazz.defineMethod (c$, "getNumCol", 
function () {
return (this.nCol);
});
Clazz.defineMethod (c$, "getElement", 
function (row, column) {
return (this.values[row][column]);
}, "~N,~N");
Clazz.defineMethod (c$, "setElement", 
function (row, column, value) {
this.values[row][column] = value;
}, "~N,~N,~N");
Clazz.defineMethod (c$, "getRow", 
function (row, array) {
for (var i = 0; i < this.nCol; i++) {
array[i] = this.values[row][i];
}
}, "~N,~A");
Clazz.defineMethod (c$, "getRow", 
function (row, vector) {
if (vector.getSize () < this.nCol) vector.setSize (this.nCol);
for (var i = 0; i < this.nCol; i++) {
vector.values[i] = this.values[row][i];
}
}, "~N,javax.vecmath.GVector");
Clazz.defineMethod (c$, "getColumn", 
function (col, array) {
for (var i = 0; i < this.nRow; i++) {
array[i] = this.values[i][col];
}
}, "~N,~A");
Clazz.defineMethod (c$, "getColumn", 
function (col, vector) {
if (vector.getSize () < this.nRow) vector.setSize (this.nRow);
for (var i = 0; i < this.nRow; i++) {
vector.values[i] = this.values[i][col];
}
}, "~N,javax.vecmath.GVector");
Clazz.defineMethod (c$, "get", 
function (m1) {
if (this.nRow < 3 || this.nCol < 3) {
m1.setZero ();
if (this.nCol > 0) {
if (this.nRow > 0) {
m1.m00 = this.values[0][0];
if (this.nRow > 1) {
m1.m10 = this.values[1][0];
if (this.nRow > 2) {
m1.m20 = this.values[2][0];
}}}if (this.nCol > 1) {
if (this.nRow > 0) {
m1.m01 = this.values[0][1];
if (this.nRow > 1) {
m1.m11 = this.values[1][1];
if (this.nRow > 2) {
m1.m21 = this.values[2][1];
}}}if (this.nCol > 2) {
if (this.nRow > 0) {
m1.m02 = this.values[0][2];
if (this.nRow > 1) {
m1.m12 = this.values[1][2];
if (this.nRow > 2) {
m1.m22 = this.values[2][2];
}}}}}}} else {
m1.m00 = this.values[0][0];
m1.m01 = this.values[0][1];
m1.m02 = this.values[0][2];
m1.m10 = this.values[1][0];
m1.m11 = this.values[1][1];
m1.m12 = this.values[1][2];
m1.m20 = this.values[2][0];
m1.m21 = this.values[2][1];
m1.m22 = this.values[2][2];
}}, "javax.vecmath.Matrix3d");
Clazz.defineMethod (c$, "get", 
function (m1) {
if (this.nRow < 3 || this.nCol < 3) {
m1.setZero ();
if (this.nCol > 0) {
if (this.nRow > 0) {
m1.m00 = this.values[0][0];
if (this.nRow > 1) {
m1.m10 = this.values[1][0];
if (this.nRow > 2) {
m1.m20 = this.values[2][0];
}}}if (this.nCol > 1) {
if (this.nRow > 0) {
m1.m01 = this.values[0][1];
if (this.nRow > 1) {
m1.m11 = this.values[1][1];
if (this.nRow > 2) {
m1.m21 = this.values[2][1];
}}}if (this.nCol > 2) {
if (this.nRow > 0) {
m1.m02 = this.values[0][2];
if (this.nRow > 1) {
m1.m12 = this.values[1][2];
if (this.nRow > 2) {
m1.m22 = this.values[2][2];
}}}}}}} else {
m1.m00 = this.values[0][0];
m1.m01 = this.values[0][1];
m1.m02 = this.values[0][2];
m1.m10 = this.values[1][0];
m1.m11 = this.values[1][1];
m1.m12 = this.values[1][2];
m1.m20 = this.values[2][0];
m1.m21 = this.values[2][1];
m1.m22 = this.values[2][2];
}}, "javax.vecmath.Matrix3f");
Clazz.defineMethod (c$, "get", 
function (m1) {
if (this.nRow < 4 || this.nCol < 4) {
m1.setZero ();
if (this.nCol > 0) {
if (this.nRow > 0) {
m1.m00 = this.values[0][0];
if (this.nRow > 1) {
m1.m10 = this.values[1][0];
if (this.nRow > 2) {
m1.m20 = this.values[2][0];
if (this.nRow > 3) {
m1.m30 = this.values[3][0];
}}}}if (this.nCol > 1) {
if (this.nRow > 0) {
m1.m01 = this.values[0][1];
if (this.nRow > 1) {
m1.m11 = this.values[1][1];
if (this.nRow > 2) {
m1.m21 = this.values[2][1];
if (this.nRow > 3) {
m1.m31 = this.values[3][1];
}}}}if (this.nCol > 2) {
if (this.nRow > 0) {
m1.m02 = this.values[0][2];
if (this.nRow > 1) {
m1.m12 = this.values[1][2];
if (this.nRow > 2) {
m1.m22 = this.values[2][2];
if (this.nRow > 3) {
m1.m32 = this.values[3][2];
}}}}if (this.nCol > 3) {
if (this.nRow > 0) {
m1.m03 = this.values[0][3];
if (this.nRow > 1) {
m1.m13 = this.values[1][3];
if (this.nRow > 2) {
m1.m23 = this.values[2][3];
if (this.nRow > 3) {
m1.m33 = this.values[3][3];
}}}}}}}}} else {
m1.m00 = this.values[0][0];
m1.m01 = this.values[0][1];
m1.m02 = this.values[0][2];
m1.m03 = this.values[0][3];
m1.m10 = this.values[1][0];
m1.m11 = this.values[1][1];
m1.m12 = this.values[1][2];
m1.m13 = this.values[1][3];
m1.m20 = this.values[2][0];
m1.m21 = this.values[2][1];
m1.m22 = this.values[2][2];
m1.m23 = this.values[2][3];
m1.m30 = this.values[3][0];
m1.m31 = this.values[3][1];
m1.m32 = this.values[3][2];
m1.m33 = this.values[3][3];
}}, "javax.vecmath.Matrix4d");
Clazz.defineMethod (c$, "get", 
function (m1) {
if (this.nRow < 4 || this.nCol < 4) {
m1.setZero ();
if (this.nCol > 0) {
if (this.nRow > 0) {
m1.m00 = this.values[0][0];
if (this.nRow > 1) {
m1.m10 = this.values[1][0];
if (this.nRow > 2) {
m1.m20 = this.values[2][0];
if (this.nRow > 3) {
m1.m30 = this.values[3][0];
}}}}if (this.nCol > 1) {
if (this.nRow > 0) {
m1.m01 = this.values[0][1];
if (this.nRow > 1) {
m1.m11 = this.values[1][1];
if (this.nRow > 2) {
m1.m21 = this.values[2][1];
if (this.nRow > 3) {
m1.m31 = this.values[3][1];
}}}}if (this.nCol > 2) {
if (this.nRow > 0) {
m1.m02 = this.values[0][2];
if (this.nRow > 1) {
m1.m12 = this.values[1][2];
if (this.nRow > 2) {
m1.m22 = this.values[2][2];
if (this.nRow > 3) {
m1.m32 = this.values[3][2];
}}}}if (this.nCol > 3) {
if (this.nRow > 0) {
m1.m03 = this.values[0][3];
if (this.nRow > 1) {
m1.m13 = this.values[1][3];
if (this.nRow > 2) {
m1.m23 = this.values[2][3];
if (this.nRow > 3) {
m1.m33 = this.values[3][3];
}}}}}}}}} else {
m1.m00 = this.values[0][0];
m1.m01 = this.values[0][1];
m1.m02 = this.values[0][2];
m1.m03 = this.values[0][3];
m1.m10 = this.values[1][0];
m1.m11 = this.values[1][1];
m1.m12 = this.values[1][2];
m1.m13 = this.values[1][3];
m1.m20 = this.values[2][0];
m1.m21 = this.values[2][1];
m1.m22 = this.values[2][2];
m1.m23 = this.values[2][3];
m1.m30 = this.values[3][0];
m1.m31 = this.values[3][1];
m1.m32 = this.values[3][2];
m1.m33 = this.values[3][3];
}}, "javax.vecmath.Matrix4f");
Clazz.defineMethod (c$, "get", 
function (m1) {
var i;
var j;
var nc;
var nr;
if (this.nCol < m1.nCol) nc = this.nCol;
 else nc = m1.nCol;
if (this.nRow < m1.nRow) nr = this.nRow;
 else nr = m1.nRow;
for (i = 0; i < nr; i++) {
for (j = 0; j < nc; j++) {
m1.values[i][j] = this.values[i][j];
}
}
for (i = nr; i < m1.nRow; i++) {
for (j = 0; j < m1.nCol; j++) {
m1.values[i][j] = 0.0;
}
}
for (j = nc; j < m1.nCol; j++) {
for (i = 0; i < nr; i++) {
m1.values[i][j] = 0.0;
}
}
}, "javax.vecmath.GMatrix");
Clazz.defineMethod (c$, "setRow", 
function (row, array) {
for (var i = 0; i < this.nCol; i++) {
this.values[row][i] = array[i];
}
}, "~N,~A");
Clazz.defineMethod (c$, "setRow", 
function (row, vector) {
for (var i = 0; i < this.nCol; i++) {
this.values[row][i] = vector.values[i];
}
}, "~N,javax.vecmath.GVector");
Clazz.defineMethod (c$, "setColumn", 
function (col, array) {
for (var i = 0; i < this.nRow; i++) {
this.values[i][col] = array[i];
}
}, "~N,~A");
Clazz.defineMethod (c$, "setColumn", 
function (col, vector) {
for (var i = 0; i < this.nRow; i++) {
this.values[i][col] = vector.values[i];
}
}, "~N,javax.vecmath.GVector");
Clazz.defineMethod (c$, "mulTransposeBoth", 
function (m1, m2) {
var i;
var j;
var k;
if (m1.nRow != m2.nCol || this.nRow != m1.nCol || this.nCol != m2.nRow) throw  new javax.vecmath.MismatchedSizeException (javax.vecmath.VecMathI18N.getString ("GMatrix14"));
if (m1 === this || m2 === this) {
var tmp =  Clazz.newArray (this.nRow, this.nCol, 0);
for (i = 0; i < this.nRow; i++) {
for (j = 0; j < this.nCol; j++) {
tmp[i][j] = 0.0;
for (k = 0; k < m1.nRow; k++) {
tmp[i][j] += m1.values[k][i] * m2.values[j][k];
}
}
}
this.values = tmp;
} else {
for (i = 0; i < this.nRow; i++) {
for (j = 0; j < this.nCol; j++) {
this.values[i][j] = 0.0;
for (k = 0; k < m1.nRow; k++) {
this.values[i][j] += m1.values[k][i] * m2.values[j][k];
}
}
}
}}, "javax.vecmath.GMatrix,javax.vecmath.GMatrix");
Clazz.defineMethod (c$, "mulTransposeRight", 
function (m1, m2) {
var i;
var j;
var k;
if (m1.nCol != m2.nCol || this.nCol != m2.nRow || this.nRow != m1.nRow) throw  new javax.vecmath.MismatchedSizeException (javax.vecmath.VecMathI18N.getString ("GMatrix15"));
if (m1 === this || m2 === this) {
var tmp =  Clazz.newArray (this.nRow, this.nCol, 0);
for (i = 0; i < this.nRow; i++) {
for (j = 0; j < this.nCol; j++) {
tmp[i][j] = 0.0;
for (k = 0; k < m1.nCol; k++) {
tmp[i][j] += m1.values[i][k] * m2.values[j][k];
}
}
}
this.values = tmp;
} else {
for (i = 0; i < this.nRow; i++) {
for (j = 0; j < this.nCol; j++) {
this.values[i][j] = 0.0;
for (k = 0; k < m1.nCol; k++) {
this.values[i][j] += m1.values[i][k] * m2.values[j][k];
}
}
}
}}, "javax.vecmath.GMatrix,javax.vecmath.GMatrix");
Clazz.defineMethod (c$, "mulTransposeLeft", 
function (m1, m2) {
var i;
var j;
var k;
if (m1.nRow != m2.nRow || this.nCol != m2.nCol || this.nRow != m1.nCol) throw  new javax.vecmath.MismatchedSizeException (javax.vecmath.VecMathI18N.getString ("GMatrix16"));
if (m1 === this || m2 === this) {
var tmp =  Clazz.newArray (this.nRow, this.nCol, 0);
for (i = 0; i < this.nRow; i++) {
for (j = 0; j < this.nCol; j++) {
tmp[i][j] = 0.0;
for (k = 0; k < m1.nRow; k++) {
tmp[i][j] += m1.values[k][i] * m2.values[k][j];
}
}
}
this.values = tmp;
} else {
for (i = 0; i < this.nRow; i++) {
for (j = 0; j < this.nCol; j++) {
this.values[i][j] = 0.0;
for (k = 0; k < m1.nRow; k++) {
this.values[i][j] += m1.values[k][i] * m2.values[k][j];
}
}
}
}}, "javax.vecmath.GMatrix,javax.vecmath.GMatrix");
Clazz.defineMethod (c$, "transpose", 
function () {
var i;
var j;
if (this.nRow != this.nCol) {
var tmp;
i = this.nRow;
this.nRow = this.nCol;
this.nCol = i;
tmp =  Clazz.newArray (this.nRow, this.nCol, 0);
for (i = 0; i < this.nRow; i++) {
for (j = 0; j < this.nCol; j++) {
tmp[i][j] = this.values[j][i];
}
}
this.values = tmp;
} else {
var swap;
for (i = 0; i < this.nRow; i++) {
for (j = 0; j < i; j++) {
swap = this.values[i][j];
this.values[i][j] = this.values[j][i];
this.values[j][i] = swap;
}
}
}});
Clazz.defineMethod (c$, "transpose", 
function (m1) {
var i;
var j;
if (this.nRow != m1.nCol || this.nCol != m1.nRow) throw  new javax.vecmath.MismatchedSizeException (javax.vecmath.VecMathI18N.getString ("GMatrix17"));
if (m1 !== this) {
for (i = 0; i < this.nRow; i++) {
for (j = 0; j < this.nCol; j++) {
this.values[i][j] = m1.values[j][i];
}
}
} else {
this.transpose ();
}}, "javax.vecmath.GMatrix");
Clazz.defineMethod (c$, "toString", 
function () {
var buffer =  new StringBuffer (this.nRow * this.nCol * 8);
var i;
var j;
for (i = 0; i < this.nRow; i++) {
for (j = 0; j < this.nCol; j++) {
buffer.append (this.values[i][j]).append (" ");
}
buffer.append ("\n");
}
return buffer.toString ();
});
c$.checkMatrix = Clazz.defineMethod (c$, "checkMatrix", 
($fz = function (m) {
var i;
var j;
for (i = 0; i < m.nRow; i++) {
for (j = 0; j < m.nCol; j++) {
if (Math.abs (m.values[i][j]) < 0.0000000001) {
System.out.print (" 0.0     ");
} else {
System.out.print (" " + m.values[i][j]);
}}
System.out.print ("\n");
}
}, $fz.isPrivate = true, $fz), "javax.vecmath.GMatrix");
Clazz.overrideMethod (c$, "hashCode", 
function () {
var bits = 1;
bits = 31 * bits + this.nRow;
bits = 31 * bits + this.nCol;
for (var i = 0; i < this.nRow; i++) {
for (var j = 0; j < this.nCol; j++) {
bits = 31 * bits + javax.vecmath.VecMathUtil.doubleToLongBits (this.values[i][j]);
}
}
return (bits ^ (bits >> 32));
});
Clazz.defineMethod (c$, "equals", 
function (m1) {
try {
var i;
var j;
if (this.nRow != m1.nRow || this.nCol != m1.nCol) return false;
for (i = 0; i < this.nRow; i++) {
for (j = 0; j < this.nCol; j++) {
if (this.values[i][j] != m1.values[i][j]) return false;
}
}
return true;
} catch (e2) {
if (Clazz.instanceOf (e2, NullPointerException)) {
return false;
} else {
throw e2;
}
}
}, "javax.vecmath.GMatrix");
Clazz.defineMethod (c$, "equals", 
function (o1) {
try {
var m2 = o1;
var i;
var j;
if (this.nRow != m2.nRow || this.nCol != m2.nCol) return false;
for (i = 0; i < this.nRow; i++) {
for (j = 0; j < this.nCol; j++) {
if (this.values[i][j] != m2.values[i][j]) return false;
}
}
return true;
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
}, "javax.vecmath.GMatrix,~N");
Clazz.defineMethod (c$, "epsilonEquals", 
function (m1, epsilon) {
var i;
var j;
var diff;
if (this.nRow != m1.nRow || this.nCol != m1.nCol) return false;
for (i = 0; i < this.nRow; i++) {
for (j = 0; j < this.nCol; j++) {
diff = this.values[i][j] - m1.values[i][j];
if ((diff < 0 ? -diff : diff) > epsilon) return false;
}
}
return true;
}, "javax.vecmath.GMatrix,~N");
Clazz.defineMethod (c$, "trace", 
function () {
var i;
var l;
var t;
if (this.nRow < this.nCol) l = this.nRow;
 else l = this.nCol;
t = 0.0;
for (i = 0; i < l; i++) {
t += this.values[i][i];
}
return t;
});
Clazz.defineMethod (c$, "SVD", 
function (U, W, V) {
if (this.nCol != V.nCol || this.nCol != V.nRow) {
throw  new javax.vecmath.MismatchedSizeException (javax.vecmath.VecMathI18N.getString ("GMatrix18"));
}if (this.nRow != U.nRow || this.nRow != U.nCol) {
throw  new javax.vecmath.MismatchedSizeException (javax.vecmath.VecMathI18N.getString ("GMatrix25"));
}if (this.nRow != W.nRow || this.nCol != W.nCol) {
throw  new javax.vecmath.MismatchedSizeException (javax.vecmath.VecMathI18N.getString ("GMatrix26"));
}if (this.nRow == 2 && this.nCol == 2) {
if (this.values[1][0] == 0.0) {
U.setIdentity ();
V.setIdentity ();
if (this.values[0][1] == 0.0) {
return 2;
}var sinl =  Clazz.newArray (1, 0);
var sinr =  Clazz.newArray (1, 0);
var cosl =  Clazz.newArray (1, 0);
var cosr =  Clazz.newArray (1, 0);
var single_values =  Clazz.newArray (2, 0);
single_values[0] = this.values[0][0];
single_values[1] = this.values[1][1];
javax.vecmath.GMatrix.compute_2X2 (this.values[0][0], this.values[0][1], this.values[1][1], single_values, sinl, cosl, sinr, cosr, 0);
javax.vecmath.GMatrix.update_u (0, U, cosl, sinl);
javax.vecmath.GMatrix.update_v (0, V, cosr, sinr);
return 2;
}}return javax.vecmath.GMatrix.computeSVD (this, U, W, V);
}, "javax.vecmath.GMatrix,javax.vecmath.GMatrix,javax.vecmath.GMatrix");
Clazz.defineMethod (c$, "LUD", 
function (LU, permutation) {
var size = LU.nRow * LU.nCol;
var temp =  Clazz.newArray (size, 0);
var even_row_exchange =  Clazz.newArray (1, 0);
var row_perm =  Clazz.newArray (LU.nRow, 0);
var i;
var j;
if (this.nRow != this.nCol) {
throw  new javax.vecmath.MismatchedSizeException (javax.vecmath.VecMathI18N.getString ("GMatrix19"));
}if (this.nRow != LU.nRow) {
throw  new javax.vecmath.MismatchedSizeException (javax.vecmath.VecMathI18N.getString ("GMatrix27"));
}if (this.nCol != LU.nCol) {
throw  new javax.vecmath.MismatchedSizeException (javax.vecmath.VecMathI18N.getString ("GMatrix27"));
}if (LU.nRow != permutation.getSize ()) {
throw  new javax.vecmath.MismatchedSizeException (javax.vecmath.VecMathI18N.getString ("GMatrix20"));
}for (i = 0; i < this.nRow; i++) {
for (j = 0; j < this.nCol; j++) {
temp[i * this.nCol + j] = this.values[i][j];
}
}
if (!javax.vecmath.GMatrix.luDecomposition (LU.nRow, temp, row_perm, even_row_exchange)) {
throw  new javax.vecmath.SingularMatrixException (javax.vecmath.VecMathI18N.getString ("GMatrix21"));
}for (i = 0; i < this.nRow; i++) {
for (j = 0; j < this.nCol; j++) {
LU.values[i][j] = temp[i * this.nCol + j];
}
}
for (i = 0; i < LU.nRow; i++) {
permutation.values[i] = row_perm[i];
}
return even_row_exchange[0];
}, "javax.vecmath.GMatrix,javax.vecmath.GVector");
Clazz.defineMethod (c$, "setScale", 
function (scale) {
var i;
var j;
var l;
if (this.nRow < this.nCol) l = this.nRow;
 else l = this.nCol;
for (i = 0; i < this.nRow; i++) {
for (j = 0; j < this.nCol; j++) {
this.values[i][j] = 0.0;
}
}
for (i = 0; i < l; i++) {
this.values[i][i] = scale;
}
}, "~N");
Clazz.defineMethod (c$, "invertGeneral", 
function (m1) {
var size = m1.nRow * m1.nCol;
var temp =  Clazz.newArray (size, 0);
var result =  Clazz.newArray (size, 0);
var row_perm =  Clazz.newArray (m1.nRow, 0);
var even_row_exchange =  Clazz.newArray (1, 0);
var i;
var j;
if (m1.nRow != m1.nCol) {
throw  new javax.vecmath.MismatchedSizeException (javax.vecmath.VecMathI18N.getString ("GMatrix22"));
}for (i = 0; i < this.nRow; i++) {
for (j = 0; j < this.nCol; j++) {
temp[i * this.nCol + j] = m1.values[i][j];
}
}
if (!javax.vecmath.GMatrix.luDecomposition (m1.nRow, temp, row_perm, even_row_exchange)) {
throw  new javax.vecmath.SingularMatrixException (javax.vecmath.VecMathI18N.getString ("GMatrix21"));
}for (i = 0; i < size; i++) result[i] = 0.0;

for (i = 0; i < this.nCol; i++) result[i + i * this.nCol] = 1.0;

javax.vecmath.GMatrix.luBacksubstitution (m1.nRow, temp, row_perm, result);
for (i = 0; i < this.nRow; i++) {
for (j = 0; j < this.nCol; j++) {
this.values[i][j] = result[i * this.nCol + j];
}
}
}, "javax.vecmath.GMatrix");
c$.luDecomposition = Clazz.defineMethod (c$, "luDecomposition", 
function (dim, matrix0, row_perm, even_row_xchg) {
var row_scale =  Clazz.newArray (dim, 0);
var i;
var j;
var ptr;
var rs;
var mtx;
var big;
var temp;
ptr = 0;
rs = 0;
even_row_xchg[0] = 1;
i = dim;
while (i-- != 0) {
big = 0.0;
j = dim;
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
mtx = 0;
for (j = 0; j < dim; j++) {
var imax;
var k;
var target;
var p1;
var p2;
var sum;
for (i = 0; i < j; i++) {
target = mtx + (dim * i) + j;
sum = matrix0[target];
k = i;
p1 = mtx + (dim * i);
p2 = mtx + j;
while (k-- != 0) {
sum -= matrix0[p1] * matrix0[p2];
p1++;
p2 += dim;
}
matrix0[target] = sum;
}
big = 0.0;
imax = -1;
for (i = j; i < dim; i++) {
target = mtx + (dim * i) + j;
sum = matrix0[target];
k = j;
p1 = mtx + (dim * i);
p2 = mtx + j;
while (k-- != 0) {
sum -= matrix0[p1] * matrix0[p2];
p1++;
p2 += dim;
}
matrix0[target] = sum;
if ((temp = row_scale[i] * Math.abs (sum)) >= big) {
big = temp;
imax = i;
}}
if (imax < 0) {
throw  new RuntimeException (javax.vecmath.VecMathI18N.getString ("GMatrix24"));
}if (j != imax) {
k = dim;
p1 = mtx + (dim * imax);
p2 = mtx + (dim * j);
while (k-- != 0) {
temp = matrix0[p1];
matrix0[p1++] = matrix0[p2];
matrix0[p2++] = temp;
}
row_scale[imax] = row_scale[j];
even_row_xchg[0] = -even_row_xchg[0];
}row_perm[j] = imax;
if (matrix0[(mtx + (dim * j) + j)] == 0.0) {
return false;
}if (j != (dim - 1)) {
temp = 1.0 / (matrix0[(mtx + (dim * j) + j)]);
target = mtx + (dim * (j + 1)) + j;
i = (dim - 1) - j;
while (i-- != 0) {
matrix0[target] *= temp;
target += dim;
}
}}
return true;
}, "~N,~A,~A,~A");
c$.luBacksubstitution = Clazz.defineMethod (c$, "luBacksubstitution", 
function (dim, matrix1, row_perm, matrix2) {
var i;
var ii;
var ip;
var j;
var k;
var rp;
var cv;
var rv;
var ri;
var tt;
rp = 0;
for (k = 0; k < dim; k++) {
cv = k;
ii = -1;
for (i = 0; i < dim; i++) {
var sum;
ip = row_perm[rp + i];
sum = matrix2[cv + dim * ip];
matrix2[cv + dim * ip] = matrix2[cv + dim * i];
if (ii >= 0) {
rv = i * dim;
for (j = ii; j <= i - 1; j++) {
sum -= matrix1[rv + j] * matrix2[cv + dim * j];
}
} else if (sum != 0.0) {
ii = i;
}matrix2[cv + dim * i] = sum;
}
for (i = 0; i < dim; i++) {
ri = (dim - 1 - i);
rv = dim * (ri);
tt = 0.0;
for (j = 1; j <= i; j++) {
tt += matrix1[rv + dim - j] * matrix2[cv + dim * (dim - j)];
}
matrix2[cv + dim * ri] = (matrix2[cv + dim * ri] - tt) / matrix1[rv + ri];
}
}
}, "~N,~A,~A,~A");
c$.computeSVD = Clazz.defineMethod (c$, "computeSVD", 
function (mat, U, W, V) {
var i;
var j;
var k;
var nr;
var nc;
var si;
var converged;
var rank;
var cs;
var sn;
var r;
var mag;
var scale;
var t;
var eLength;
var sLength;
var vecLength;
var tmp =  new javax.vecmath.GMatrix (mat.nRow, mat.nCol);
var u =  new javax.vecmath.GMatrix (mat.nRow, mat.nCol);
var v =  new javax.vecmath.GMatrix (mat.nRow, mat.nCol);
var m =  new javax.vecmath.GMatrix (mat);
if (m.nRow >= m.nCol) {
sLength = m.nCol;
eLength = m.nCol - 1;
} else {
sLength = m.nRow;
eLength = m.nRow;
}if (m.nRow > m.nCol) vecLength = m.nRow;
 else vecLength = m.nCol;
var vec =  Clazz.newArray (vecLength, 0);
var single_values =  Clazz.newArray (sLength, 0);
var e =  Clazz.newArray (eLength, 0);
if (false) {
System.out.println ("input to compute_svd = \n" + m.toString ());
}rank = 0;
U.setIdentity ();
V.setIdentity ();
nr = m.nRow;
nc = m.nCol;
for (si = 0; si < sLength; si++) {
if (nr > 1) {
if (false) System.out.println ("*********************** U ***********************\n");
mag = 0.0;
for (i = 0; i < nr; i++) {
mag += m.values[i + si][si] * m.values[i + si][si];
if (false) System.out.println ("mag = " + mag + " matrix.dot = " + m.values[i + si][si] * m.values[i + si][si]);
}
mag = Math.sqrt (mag);
if (m.values[si][si] == 0.0) {
vec[0] = mag;
} else {
vec[0] = m.values[si][si] + javax.vecmath.GMatrix.d_sign (mag, m.values[si][si]);
}for (i = 1; i < nr; i++) {
vec[i] = m.values[si + i][si];
}
scale = 0.0;
for (i = 0; i < nr; i++) {
if (false) System.out.println ("vec[" + i + "]=" + vec[i]);
scale += vec[i] * vec[i];
}
scale = 2.0 / scale;
if (false) System.out.println ("scale = " + scale);
for (j = si; j < m.nRow; j++) {
for (k = si; k < m.nRow; k++) {
u.values[j][k] = -scale * vec[j - si] * vec[k - si];
}
}
for (i = si; i < m.nRow; i++) {
u.values[i][i] += 1.0;
}
t = 0.0;
for (i = si; i < m.nRow; i++) {
t += u.values[si][i] * m.values[i][si];
}
m.values[si][si] = t;
for (j = si; j < m.nRow; j++) {
for (k = si + 1; k < m.nCol; k++) {
tmp.values[j][k] = 0.0;
for (i = si; i < m.nCol; i++) {
tmp.values[j][k] += u.values[j][i] * m.values[i][k];
}
}
}
for (j = si; j < m.nRow; j++) {
for (k = si + 1; k < m.nCol; k++) {
m.values[j][k] = tmp.values[j][k];
}
}
if (false) {
System.out.println ("U =\n" + U.toString ());
System.out.println ("u =\n" + u.toString ());
}for (j = si; j < m.nRow; j++) {
for (k = 0; k < m.nCol; k++) {
tmp.values[j][k] = 0.0;
for (i = si; i < m.nCol; i++) {
tmp.values[j][k] += u.values[j][i] * U.values[i][k];
}
}
}
for (j = si; j < m.nRow; j++) {
for (k = 0; k < m.nCol; k++) {
U.values[j][k] = tmp.values[j][k];
}
}
if (false) {
System.out.println ("single_values[" + si + "] =\n" + single_values[si]);
System.out.println ("m =\n" + m.toString ());
System.out.println ("U =\n" + U.toString ());
}nr--;
}if (nc > 2) {
if (false) System.out.println ("*********************** V ***********************\n");
mag = 0.0;
for (i = 1; i < nc; i++) {
mag += m.values[si][si + i] * m.values[si][si + i];
}
if (false) System.out.println ("mag = " + mag);
mag = Math.sqrt (mag);
if (m.values[si][si + 1] == 0.0) {
vec[0] = mag;
} else {
vec[0] = m.values[si][si + 1] + javax.vecmath.GMatrix.d_sign (mag, m.values[si][si + 1]);
}for (i = 1; i < nc - 1; i++) {
vec[i] = m.values[si][si + i + 1];
}
scale = 0.0;
for (i = 0; i < nc - 1; i++) {
if (false) System.out.println ("vec[" + i + "]=" + vec[i]);
scale += vec[i] * vec[i];
}
scale = 2.0 / scale;
if (false) System.out.println ("scale = " + scale);
for (j = si + 1; j < nc; j++) {
for (k = si + 1; k < m.nCol; k++) {
v.values[j][k] = -scale * vec[j - si - 1] * vec[k - si - 1];
}
}
for (i = si + 1; i < m.nCol; i++) {
v.values[i][i] += 1.0;
}
t = 0.0;
for (i = si; i < m.nCol; i++) {
t += v.values[i][si + 1] * m.values[si][i];
}
m.values[si][si + 1] = t;
for (j = si + 1; j < m.nRow; j++) {
for (k = si + 1; k < m.nCol; k++) {
tmp.values[j][k] = 0.0;
for (i = si + 1; i < m.nCol; i++) {
tmp.values[j][k] += v.values[i][k] * m.values[j][i];
}
}
}
for (j = si + 1; j < m.nRow; j++) {
for (k = si + 1; k < m.nCol; k++) {
m.values[j][k] = tmp.values[j][k];
}
}
if (false) {
System.out.println ("V =\n" + V.toString ());
System.out.println ("v =\n" + v.toString ());
System.out.println ("tmp =\n" + tmp.toString ());
}for (j = 0; j < m.nRow; j++) {
for (k = si + 1; k < m.nCol; k++) {
tmp.values[j][k] = 0.0;
for (i = si + 1; i < m.nCol; i++) {
tmp.values[j][k] += v.values[i][k] * V.values[j][i];
}
}
}
if (false) System.out.println ("tmp =\n" + tmp.toString ());
for (j = 0; j < m.nRow; j++) {
for (k = si + 1; k < m.nCol; k++) {
V.values[j][k] = tmp.values[j][k];
}
}
if (false) {
System.out.println ("m =\n" + m.toString ());
System.out.println ("V =\n" + V.toString ());
}nc--;
}}
for (i = 0; i < sLength; i++) {
single_values[i] = m.values[i][i];
}
for (i = 0; i < eLength; i++) {
e[i] = m.values[i][i + 1];
}
if (m.nRow == 2 && m.nCol == 2) {
var cosl =  Clazz.newArray (1, 0);
var cosr =  Clazz.newArray (1, 0);
var sinl =  Clazz.newArray (1, 0);
var sinr =  Clazz.newArray (1, 0);
javax.vecmath.GMatrix.compute_2X2 (single_values[0], e[0], single_values[1], single_values, sinl, cosl, sinr, cosr, 0);
javax.vecmath.GMatrix.update_u (0, U, cosl, sinl);
javax.vecmath.GMatrix.update_v (0, V, cosr, sinr);
return 2;
}javax.vecmath.GMatrix.compute_qr (0, e.length - 1, single_values, e, U, V);
rank = single_values.length;
return rank;
}, "javax.vecmath.GMatrix,javax.vecmath.GMatrix,javax.vecmath.GMatrix,javax.vecmath.GMatrix");
c$.compute_qr = Clazz.defineMethod (c$, "compute_qr", 
function (start, end, s, e, u, v) {
var i;
var j;
var k;
var n;
var sl;
var converged;
var shift;
var r;
var utemp;
var vtemp;
var f;
var g;
var cosl =  Clazz.newArray (1, 0);
var cosr =  Clazz.newArray (1, 0);
var sinl =  Clazz.newArray (1, 0);
var sinr =  Clazz.newArray (1, 0);
var m =  new javax.vecmath.GMatrix (u.nCol, v.nRow);
var MAX_INTERATIONS = 2;
var CONVERGE_TOL = 4.89E-15;
if (false) {
System.out.println ("start =" + start);
System.out.println ("s =\n");
for (i = 0; i < s.length; i++) {
System.out.println (s[i]);
}
System.out.println ("\nes =\n");
for (i = 0; i < e.length; i++) {
System.out.println (e[i]);
}
for (i = 0; i < s.length; i++) {
m.values[i][i] = s[i];
}
for (i = 0; i < e.length; i++) {
m.values[i][i + 1] = e[i];
}
System.out.println ("\nm =\n" + m.toString ());
}var c_b48 = 1.0;
var c_b71 = -1.0;
converged = false;
if (false) javax.vecmath.GMatrix.print_svd (s, e, u, v);
f = 0.0;
g = 0.0;
for (k = 0; k < 2 && !converged; k++) {
for (i = start; i <= end; i++) {
if (i == start) {
if (e.length == s.length) sl = end;
 else sl = end + 1;
shift = javax.vecmath.GMatrix.compute_shift (s[sl - 1], e[end], s[sl]);
f = (Math.abs (s[i]) - shift) * (javax.vecmath.GMatrix.d_sign (c_b48, s[i]) + shift / s[i]);
g = e[i];
}r = javax.vecmath.GMatrix.compute_rot (f, g, sinr, cosr);
if (i != start) e[i - 1] = r;
f = cosr[0] * s[i] + sinr[0] * e[i];
e[i] = cosr[0] * e[i] - sinr[0] * s[i];
g = sinr[0] * s[i + 1];
s[i + 1] = cosr[0] * s[i + 1];
javax.vecmath.GMatrix.update_v (i, v, cosr, sinr);
if (false) javax.vecmath.GMatrix.print_m (m, u, v);
r = javax.vecmath.GMatrix.compute_rot (f, g, sinl, cosl);
s[i] = r;
f = cosl[0] * e[i] + sinl[0] * s[i + 1];
s[i + 1] = cosl[0] * s[i + 1] - sinl[0] * e[i];
if (i < end) {
g = sinl[0] * e[i + 1];
e[i + 1] = cosl[0] * e[i + 1];
}javax.vecmath.GMatrix.update_u (i, u, cosl, sinl);
if (false) javax.vecmath.GMatrix.print_m (m, u, v);
}
if (s.length == e.length) {
r = javax.vecmath.GMatrix.compute_rot (f, g, sinr, cosr);
f = cosr[0] * s[i] + sinr[0] * e[i];
e[i] = cosr[0] * e[i] - sinr[0] * s[i];
s[i + 1] = cosr[0] * s[i + 1];
javax.vecmath.GMatrix.update_v (i, v, cosr, sinr);
if (false) javax.vecmath.GMatrix.print_m (m, u, v);
}if (false) {
System.out.println ("\n*********************** iteration #" + k + " ***********************\n");
javax.vecmath.GMatrix.print_svd (s, e, u, v);
}while ((end - start > 1) && (Math.abs (e[end]) < 4.89E-15)) {
end--;
}
for (n = end - 2; n > start; n--) {
if (Math.abs (e[n]) < 4.89E-15) {
javax.vecmath.GMatrix.compute_qr (n + 1, end, s, e, u, v);
end = n - 1;
while ((end - start > 1) && (Math.abs (e[end]) < 4.89E-15)) {
end--;
}
}}
if (false) System.out.println ("start = " + start);
if ((end - start <= 1) && (Math.abs (e[start + 1]) < 4.89E-15)) {
converged = true;
} else {
}}
if (false) System.out.println ("\n****call compute_2X2 ********************\n");
if (Math.abs (e[1]) < 4.89E-15) {
javax.vecmath.GMatrix.compute_2X2 (s[start], e[start], s[start + 1], s, sinl, cosl, sinr, cosr, 0);
e[start] = 0.0;
e[start + 1] = 0.0;
} else {
}i = start;
javax.vecmath.GMatrix.update_u (i, u, cosl, sinl);
javax.vecmath.GMatrix.update_v (i, v, cosr, sinr);
if (false) {
System.out.println ("\n*******after call compute_2X2 **********************\n");
javax.vecmath.GMatrix.print_svd (s, e, u, v);
}return ;
}, "~N,~N,~A,~A,javax.vecmath.GMatrix,javax.vecmath.GMatrix");
c$.update_v = Clazz.defineMethod (c$, "update_v", 
($fz = function (index, v, cosr, sinr) {
var j;
var vtemp;
for (j = 0; j < v.nRow; j++) {
vtemp = v.values[j][index];
v.values[j][index] = cosr[0] * vtemp + sinr[0] * v.values[j][index + 1];
v.values[j][index + 1] = -sinr[0] * vtemp + cosr[0] * v.values[j][index + 1];
}
}, $fz.isPrivate = true, $fz), "~N,javax.vecmath.GMatrix,~A,~A");
c$.update_v_split = Clazz.defineMethod (c$, "update_v_split", 
($fz = function (topr, bottomr, v, cosr, sinr, t, m) {
var j;
var vtemp;
for (j = 0; j < v.nRow; j++) {
vtemp = v.values[j][topr];
v.values[j][topr] = cosr[0] * vtemp - sinr[0] * v.values[j][bottomr];
v.values[j][bottomr] = sinr[0] * vtemp + cosr[0] * v.values[j][bottomr];
}
if (false) {
t.setIdentity ();
for (j = 0; j < v.nRow; j++) {
vtemp = t.values[j][topr];
t.values[j][topr] = cosr[0] * vtemp - sinr[0] * t.values[j][bottomr];
t.values[j][bottomr] = sinr[0] * vtemp + cosr[0] * t.values[j][bottomr];
}
}System.out.println ("topr    =" + topr);
System.out.println ("bottomr =" + bottomr);
System.out.println ("cosr =" + cosr[0]);
System.out.println ("sinr =" + sinr[0]);
System.out.println ("\nm =");
javax.vecmath.GMatrix.checkMatrix (m);
System.out.println ("\nv =");
javax.vecmath.GMatrix.checkMatrix (t);
m.mul (m, t);
System.out.println ("\nt*m =");
javax.vecmath.GMatrix.checkMatrix (m);
}, $fz.isPrivate = true, $fz), "~N,~N,javax.vecmath.GMatrix,~A,~A,javax.vecmath.GMatrix,javax.vecmath.GMatrix");
c$.update_u_split = Clazz.defineMethod (c$, "update_u_split", 
($fz = function (topr, bottomr, u, cosl, sinl, t, m) {
var j;
var utemp;
for (j = 0; j < u.nCol; j++) {
utemp = u.values[topr][j];
u.values[topr][j] = cosl[0] * utemp - sinl[0] * u.values[bottomr][j];
u.values[bottomr][j] = sinl[0] * utemp + cosl[0] * u.values[bottomr][j];
}
if (false) {
t.setIdentity ();
for (j = 0; j < u.nCol; j++) {
utemp = t.values[topr][j];
t.values[topr][j] = cosl[0] * utemp - sinl[0] * t.values[bottomr][j];
t.values[bottomr][j] = sinl[0] * utemp + cosl[0] * t.values[bottomr][j];
}
}System.out.println ("\nm=");
javax.vecmath.GMatrix.checkMatrix (m);
System.out.println ("\nu=");
javax.vecmath.GMatrix.checkMatrix (t);
m.mul (t, m);
System.out.println ("\nt*m=");
javax.vecmath.GMatrix.checkMatrix (m);
}, $fz.isPrivate = true, $fz), "~N,~N,javax.vecmath.GMatrix,~A,~A,javax.vecmath.GMatrix,javax.vecmath.GMatrix");
c$.update_u = Clazz.defineMethod (c$, "update_u", 
($fz = function (index, u, cosl, sinl) {
var j;
var utemp;
for (j = 0; j < u.nCol; j++) {
utemp = u.values[index][j];
u.values[index][j] = cosl[0] * utemp + sinl[0] * u.values[index + 1][j];
u.values[index + 1][j] = -sinl[0] * utemp + cosl[0] * u.values[index + 1][j];
}
}, $fz.isPrivate = true, $fz), "~N,javax.vecmath.GMatrix,~A,~A");
c$.print_m = Clazz.defineMethod (c$, "print_m", 
($fz = function (m, u, v) {
var mtmp =  new javax.vecmath.GMatrix (m.nCol, m.nRow);
mtmp.mul (u, mtmp);
mtmp.mul (mtmp, v);
System.out.println ("\n m = \n" + mtmp.toString (mtmp));
}, $fz.isPrivate = true, $fz), "javax.vecmath.GMatrix,javax.vecmath.GMatrix,javax.vecmath.GMatrix");
c$.toString = Clazz.defineMethod (c$, "toString", 
($fz = function (m) {
var buffer =  new StringBuffer (m.nRow * m.nCol * 8);
var i;
var j;
for (i = 0; i < m.nRow; i++) {
for (j = 0; j < m.nCol; j++) {
if (Math.abs (m.values[i][j]) < .000000001) {
buffer.append ("0.0000 ");
} else {
buffer.append (m.values[i][j]).append (" ");
}}
buffer.append ("\n");
}
return buffer.toString ();
}, $fz.isPrivate = true, $fz), "javax.vecmath.GMatrix");
c$.print_svd = Clazz.defineMethod (c$, "print_svd", 
($fz = function (s, e, u, v) {
var i;
var mtmp =  new javax.vecmath.GMatrix (u.nCol, v.nRow);
System.out.println (" \ns = ");
for (i = 0; i < s.length; i++) {
System.out.println (" " + s[i]);
}
System.out.println (" \ne = ");
for (i = 0; i < e.length; i++) {
System.out.println (" " + e[i]);
}
System.out.println (" \nu  = \n" + u.toString ());
System.out.println (" \nv  = \n" + v.toString ());
mtmp.setIdentity ();
for (i = 0; i < s.length; i++) {
mtmp.values[i][i] = s[i];
}
for (i = 0; i < e.length; i++) {
mtmp.values[i][i + 1] = e[i];
}
System.out.println (" \nm  = \n" + mtmp.toString ());
mtmp.mulTransposeLeft (u, mtmp);
mtmp.mulTransposeRight (mtmp, v);
System.out.println (" \n u.transpose*m*v.transpose  = \n" + mtmp.toString ());
}, $fz.isPrivate = true, $fz), "~A,~A,javax.vecmath.GMatrix,javax.vecmath.GMatrix");
c$.max = Clazz.defineMethod (c$, "max", 
function (a, b) {
if (a > b) return a;
 else return b;
}, "~N,~N");
c$.min = Clazz.defineMethod (c$, "min", 
function (a, b) {
if (a < b) return a;
 else return b;
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
fhmn = javax.vecmath.GMatrix.min (fa, ha);
fhmx = javax.vecmath.GMatrix.max (fa, ha);
if (fhmn == 0.0) {
ssmin = 0.0;
if (fhmx == 0.0) {
} else {
d__1 = javax.vecmath.GMatrix.min (fhmx, ga) / javax.vecmath.GMatrix.max (fhmx, ga);
}} else {
if (ga < fhmx) {
as = fhmn / fhmx + 1.0;
at = (fhmx - fhmn) / fhmx;
d__1 = ga / fhmx;
au = d__1 * d__1;
c = 2.0 / (Math.sqrt (as * as + au) + Math.sqrt (at * at + au));
ssmin = fhmn * c;
} else {
au = fhmx / ga;
if (au == 0.0) {
ssmin = fhmn * fhmx / ga;
} else {
as = fhmn / fhmx + 1.0;
at = (fhmx - fhmn) / fhmx;
d__1 = as * au;
d__2 = at * au;
c = 1.0 / (Math.sqrt (d__1 * d__1 + 1.0) + Math.sqrt (d__2 * d__2 + 1.0));
ssmin = fhmn * c * au;
ssmin += ssmin;
}}}return ssmin;
}, "~N,~N,~N");
c$.compute_2X2 = Clazz.defineMethod (c$, "compute_2X2", 
function (f, g, h, single_values, snl, csl, snr, csr, index) {
var c_b3 = 2.0;
var c_b4 = 1.0;
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
if (ga == 0.0) {
single_values[1] = ha;
single_values[0] = fa;
clt = 1.0;
crt = 1.0;
slt = 0.0;
srt = 0.0;
} else {
gasmal = true;
if (ga > fa) {
pmax = 2;
if (fa / ga < 1.0E-10) {
gasmal = false;
ssmax = ga;
if (ha > 1.0) {
ssmin = fa / (ga / ha);
} else {
ssmin = fa / ga * ha;
}clt = 1.0;
slt = ht / gt;
srt = 1.0;
crt = ft / gt;
}}if (gasmal) {
d = fa - ha;
if (d == fa) {
l = 1.0;
} else {
l = d / fa;
}m = gt / ft;
t = 2.0 - l;
mm = m * m;
tt = t * t;
s = Math.sqrt (tt + mm);
if (l == 0.0) {
r = Math.abs (m);
} else {
r = Math.sqrt (l * l + mm);
}a = (s + r) * 0.5;
if (ga > fa) {
pmax = 2;
if (fa / ga < 1.0E-10) {
gasmal = false;
ssmax = ga;
if (ha > 1.0) {
ssmin = fa / (ga / ha);
} else {
ssmin = fa / ga * ha;
}clt = 1.0;
slt = ht / gt;
srt = 1.0;
crt = ft / gt;
}}if (gasmal) {
d = fa - ha;
if (d == fa) {
l = 1.0;
} else {
l = d / fa;
}m = gt / ft;
t = 2.0 - l;
mm = m * m;
tt = t * t;
s = Math.sqrt (tt + mm);
if (l == 0.) {
r = Math.abs (m);
} else {
r = Math.sqrt (l * l + mm);
}a = (s + r) * 0.5;
ssmin = ha / a;
ssmax = fa * a;
if (mm == 0.0) {
if (l == 0.0) {
t = javax.vecmath.GMatrix.d_sign (c_b3, ft) * javax.vecmath.GMatrix.d_sign (c_b4, gt);
} else {
t = gt / javax.vecmath.GMatrix.d_sign (d, ft) + m / t;
}} else {
t = (m / (s + t) + m / (r + l)) * (a + 1.0);
}l = Math.sqrt (t * t + 4.0);
crt = 2.0 / l;
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
tsign = javax.vecmath.GMatrix.d_sign (c_b4, csr[0]) * javax.vecmath.GMatrix.d_sign (c_b4, csl[0]) * javax.vecmath.GMatrix.d_sign (c_b4, f);
}if (pmax == 2) {
tsign = javax.vecmath.GMatrix.d_sign (c_b4, snr[0]) * javax.vecmath.GMatrix.d_sign (c_b4, csl[0]) * javax.vecmath.GMatrix.d_sign (c_b4, g);
}if (pmax == 3) {
tsign = javax.vecmath.GMatrix.d_sign (c_b4, snr[0]) * javax.vecmath.GMatrix.d_sign (c_b4, snl[0]) * javax.vecmath.GMatrix.d_sign (c_b4, h);
}single_values[index] = javax.vecmath.GMatrix.d_sign (ssmax, tsign);
d__1 = tsign * javax.vecmath.GMatrix.d_sign (c_b4, f) * javax.vecmath.GMatrix.d_sign (c_b4, h);
single_values[index + 1] = javax.vecmath.GMatrix.d_sign (ssmin, d__1);
}return 0;
}, "~N,~N,~N,~A,~A,~A,~A,~A,~N");
c$.compute_rot = Clazz.defineMethod (c$, "compute_rot", 
function (f, g, sin, cos) {
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
if (g == 0.0) {
cs = 1.0;
sn = 0.0;
r = f;
} else if (f == 0.0) {
cs = 0.0;
sn = 1.0;
r = g;
} else {
f1 = f;
g1 = g;
scale = javax.vecmath.GMatrix.max (Math.abs (f1), Math.abs (g1));
if (scale >= 4.9947976805055876E145) {
count = 0;
while (scale >= 4.9947976805055876E145) {
++count;
f1 *= 2.002083095183101E-146;
g1 *= 2.002083095183101E-146;
scale = javax.vecmath.GMatrix.max (Math.abs (f1), Math.abs (g1));
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
scale = javax.vecmath.GMatrix.max (Math.abs (f1), Math.abs (g1));
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
}if (Math.abs (f) > Math.abs (g) && cs < 0.0) {
cs = -cs;
sn = -sn;
r = -r;
}}sin[0] = sn;
cos[0] = cs;
return r;
}, "~N,~N,~A,~A");
c$.d_sign = Clazz.defineMethod (c$, "d_sign", 
function (a, b) {
var x;
x = (a >= 0 ? a : -a);
return (b >= 0 ? x : -x);
}, "~N,~N");
Clazz.defineMethod (c$, "clone", 
function () {
var m1 = null;
try {
m1 = Clazz.superCall (this, javax.vecmath.GMatrix, "clone", []);
} catch (e) {
if (Clazz.instanceOf (e, CloneNotSupportedException)) {
throw  new InternalError ();
} else {
throw e;
}
}
m1.values =  Clazz.newArray (this.nRow, this.nCol, 0);
for (var i = 0; i < this.nRow; i++) {
for (var j = 0; j < this.nCol; j++) {
m1.values[i][j] = this.values[i][j];
}
}
return m1;
});
Clazz.defineStatics (c$,
"debug", false,
"EPS", 1.0E-10);
});
