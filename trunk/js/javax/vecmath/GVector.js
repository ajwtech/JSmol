Clazz.declarePackage ("javax.vecmath");
Clazz.load (null, "javax.vecmath.GVector", ["java.lang.InternalError", "$.StringBuffer", "javax.vecmath.GMatrix", "$.MismatchedSizeException", "$.VecMathI18N", "$.VecMathUtil"], function () {
c$ = Clazz.decorateAsClass (function () {
this.length = 0;
this.values = null;
Clazz.instantialize (this, arguments);
}, javax.vecmath, "GVector", null, [java.io.Serializable, Cloneable]);
Clazz.makeConstructor (c$, 
function (length) {
var i;
this.length = length;
this.values =  Clazz.newArray (length, 0);
for (i = 0; i < length; i++) this.values[i] = 0.0;

}, "~N");
Clazz.makeConstructor (c$, 
function (vector) {
var i;
this.length = vector.length;
this.values =  Clazz.newArray (vector.length, 0);
for (i = 0; i < this.length; i++) this.values[i] = vector[i];

}, "~A");
Clazz.makeConstructor (c$, 
function (vector) {
var i;
this.values =  Clazz.newArray (vector.length, 0);
this.length = vector.length;
for (i = 0; i < this.length; i++) this.values[i] = vector.values[i];

}, "javax.vecmath.GVector");
Clazz.makeConstructor (c$, 
function (tuple) {
this.values =  Clazz.newArray (2, 0);
this.values[0] = tuple.x;
this.values[1] = tuple.y;
this.length = 2;
}, "javax.vecmath.Tuple2f");
Clazz.makeConstructor (c$, 
function (tuple) {
this.values =  Clazz.newArray (3, 0);
this.values[0] = tuple.x;
this.values[1] = tuple.y;
this.values[2] = tuple.z;
this.length = 3;
}, "javax.vecmath.Tuple3f");
Clazz.makeConstructor (c$, 
function (tuple) {
this.values =  Clazz.newArray (3, 0);
this.values[0] = tuple.x;
this.values[1] = tuple.y;
this.values[2] = tuple.z;
this.length = 3;
}, "javax.vecmath.Tuple3d");
Clazz.makeConstructor (c$, 
function (tuple) {
this.values =  Clazz.newArray (4, 0);
this.values[0] = tuple.x;
this.values[1] = tuple.y;
this.values[2] = tuple.z;
this.values[3] = tuple.w;
this.length = 4;
}, "javax.vecmath.Tuple4f");
Clazz.makeConstructor (c$, 
function (tuple) {
this.values =  Clazz.newArray (4, 0);
this.values[0] = tuple.x;
this.values[1] = tuple.y;
this.values[2] = tuple.z;
this.values[3] = tuple.w;
this.length = 4;
}, "javax.vecmath.Tuple4d");
Clazz.makeConstructor (c$, 
function (vector, length) {
var i;
this.length = length;
this.values =  Clazz.newArray (length, 0);
for (i = 0; i < length; i++) {
this.values[i] = vector[i];
}
}, "~A,~N");
Clazz.defineMethod (c$, "norm", 
function () {
var sq = 0.0;
var i;
for (i = 0; i < this.length; i++) {
sq += this.values[i] * this.values[i];
}
return (Math.sqrt (sq));
});
Clazz.defineMethod (c$, "normSquared", 
function () {
var sq = 0.0;
var i;
for (i = 0; i < this.length; i++) {
sq += this.values[i] * this.values[i];
}
return (sq);
});
Clazz.defineMethod (c$, "normalize", 
function (v1) {
var sq = 0.0;
var i;
if (this.length != v1.length) throw  new javax.vecmath.MismatchedSizeException (javax.vecmath.VecMathI18N.getString ("GVector0"));
for (i = 0; i < this.length; i++) {
sq += v1.values[i] * v1.values[i];
}
var invMag;
invMag = 1.0 / Math.sqrt (sq);
for (i = 0; i < this.length; i++) {
this.values[i] = v1.values[i] * invMag;
}
}, "javax.vecmath.GVector");
Clazz.defineMethod (c$, "normalize", 
function () {
var sq = 0.0;
var i;
for (i = 0; i < this.length; i++) {
sq += this.values[i] * this.values[i];
}
var invMag;
invMag = 1.0 / Math.sqrt (sq);
for (i = 0; i < this.length; i++) {
this.values[i] = this.values[i] * invMag;
}
});
Clazz.defineMethod (c$, "scale", 
function (s, v1) {
var i;
if (this.length != v1.length) throw  new javax.vecmath.MismatchedSizeException (javax.vecmath.VecMathI18N.getString ("GVector1"));
for (i = 0; i < this.length; i++) {
this.values[i] = v1.values[i] * s;
}
}, "~N,javax.vecmath.GVector");
Clazz.defineMethod (c$, "scale", 
function (s) {
var i;
for (i = 0; i < this.length; i++) {
this.values[i] = this.values[i] * s;
}
}, "~N");
Clazz.defineMethod (c$, "scaleAdd", 
function (s, v1, v2) {
var i;
if (v2.length != v1.length) throw  new javax.vecmath.MismatchedSizeException (javax.vecmath.VecMathI18N.getString ("GVector2"));
if (this.length != v1.length) throw  new javax.vecmath.MismatchedSizeException (javax.vecmath.VecMathI18N.getString ("GVector3"));
for (i = 0; i < this.length; i++) {
this.values[i] = v1.values[i] * s + v2.values[i];
}
}, "~N,javax.vecmath.GVector,javax.vecmath.GVector");
Clazz.defineMethod (c$, "add", 
function (vector) {
var i;
if (this.length != vector.length) throw  new javax.vecmath.MismatchedSizeException (javax.vecmath.VecMathI18N.getString ("GVector4"));
for (i = 0; i < this.length; i++) {
this.values[i] += vector.values[i];
}
}, "javax.vecmath.GVector");
Clazz.defineMethod (c$, "add", 
function (vector1, vector2) {
var i;
if (vector1.length != vector2.length) throw  new javax.vecmath.MismatchedSizeException (javax.vecmath.VecMathI18N.getString ("GVector5"));
if (this.length != vector1.length) throw  new javax.vecmath.MismatchedSizeException (javax.vecmath.VecMathI18N.getString ("GVector6"));
for (i = 0; i < this.length; i++) this.values[i] = vector1.values[i] + vector2.values[i];

}, "javax.vecmath.GVector,javax.vecmath.GVector");
Clazz.defineMethod (c$, "sub", 
function (vector) {
var i;
if (this.length != vector.length) throw  new javax.vecmath.MismatchedSizeException (javax.vecmath.VecMathI18N.getString ("GVector7"));
for (i = 0; i < this.length; i++) {
this.values[i] -= vector.values[i];
}
}, "javax.vecmath.GVector");
Clazz.defineMethod (c$, "sub", 
function (vector1, vector2) {
var i;
if (vector1.length != vector2.length) throw  new javax.vecmath.MismatchedSizeException (javax.vecmath.VecMathI18N.getString ("GVector8"));
if (this.length != vector1.length) throw  new javax.vecmath.MismatchedSizeException (javax.vecmath.VecMathI18N.getString ("GVector9"));
for (i = 0; i < this.length; i++) this.values[i] = vector1.values[i] - vector2.values[i];

}, "javax.vecmath.GVector,javax.vecmath.GVector");
Clazz.defineMethod (c$, "mul", 
function (m1, v1) {
if (m1.getNumCol () != v1.length) throw  new javax.vecmath.MismatchedSizeException (javax.vecmath.VecMathI18N.getString ("GVector10"));
if (this.length != m1.getNumRow ()) throw  new javax.vecmath.MismatchedSizeException (javax.vecmath.VecMathI18N.getString ("GVector11"));
var v;
if (v1 !== this) {
v = v1.values;
} else {
v = this.values.clone ();
}for (var j = this.length - 1; j >= 0; j--) {
this.values[j] = 0.0;
for (var i = v1.length - 1; i >= 0; i--) {
this.values[j] += m1.values[j][i] * v[i];
}
}
}, "javax.vecmath.GMatrix,javax.vecmath.GVector");
Clazz.defineMethod (c$, "mul", 
function (v1, m1) {
if (m1.getNumRow () != v1.length) throw  new javax.vecmath.MismatchedSizeException (javax.vecmath.VecMathI18N.getString ("GVector12"));
if (this.length != m1.getNumCol ()) throw  new javax.vecmath.MismatchedSizeException (javax.vecmath.VecMathI18N.getString ("GVector13"));
var v;
if (v1 !== this) {
v = v1.values;
} else {
v = this.values.clone ();
}for (var j = this.length - 1; j >= 0; j--) {
this.values[j] = 0.0;
for (var i = v1.length - 1; i >= 0; i--) {
this.values[j] += m1.values[i][j] * v[i];
}
}
}, "javax.vecmath.GVector,javax.vecmath.GMatrix");
Clazz.defineMethod (c$, "negate", 
function () {
for (var i = this.length - 1; i >= 0; i--) {
this.values[i] *= -1.0;
}
});
Clazz.defineMethod (c$, "zero", 
function () {
for (var i = 0; i < this.length; i++) {
this.values[i] = 0.0;
}
});
Clazz.defineMethod (c$, "setSize", 
function (length) {
var tmp =  Clazz.newArray (length, 0);
var i;
var max;
if (this.length < length) max = this.length;
 else max = length;
for (i = 0; i < max; i++) {
tmp[i] = this.values[i];
}
this.length = length;
this.values = tmp;
}, "~N");
Clazz.defineMethod (c$, "set", 
function (vector) {
for (var i = this.length - 1; i >= 0; i--) this.values[i] = vector[i];

}, "~A");
Clazz.defineMethod (c$, "set", 
function (vector) {
var i;
if (this.length < vector.length) {
this.length = vector.length;
this.values =  Clazz.newArray (this.length, 0);
for (i = 0; i < this.length; i++) this.values[i] = vector.values[i];

} else {
for (i = 0; i < vector.length; i++) this.values[i] = vector.values[i];

for (i = vector.length; i < this.length; i++) this.values[i] = 0.0;

}}, "javax.vecmath.GVector");
Clazz.defineMethod (c$, "set", 
function (tuple) {
if (this.length < 2) {
this.length = 2;
this.values =  Clazz.newArray (2, 0);
}this.values[0] = tuple.x;
this.values[1] = tuple.y;
for (var i = 2; i < this.length; i++) this.values[i] = 0.0;

}, "javax.vecmath.Tuple2f");
Clazz.defineMethod (c$, "set", 
function (tuple) {
if (this.length < 3) {
this.length = 3;
this.values =  Clazz.newArray (3, 0);
}this.values[0] = tuple.x;
this.values[1] = tuple.y;
this.values[2] = tuple.z;
for (var i = 3; i < this.length; i++) this.values[i] = 0.0;

}, "javax.vecmath.Tuple3f");
Clazz.defineMethod (c$, "set", 
function (tuple) {
if (this.length < 3) {
this.length = 3;
this.values =  Clazz.newArray (3, 0);
}this.values[0] = tuple.x;
this.values[1] = tuple.y;
this.values[2] = tuple.z;
for (var i = 3; i < this.length; i++) this.values[i] = 0.0;

}, "javax.vecmath.Tuple3d");
Clazz.defineMethod (c$, "set", 
function (tuple) {
if (this.length < 4) {
this.length = 4;
this.values =  Clazz.newArray (4, 0);
}this.values[0] = tuple.x;
this.values[1] = tuple.y;
this.values[2] = tuple.z;
this.values[3] = tuple.w;
for (var i = 4; i < this.length; i++) this.values[i] = 0.0;

}, "javax.vecmath.Tuple4f");
Clazz.defineMethod (c$, "set", 
function (tuple) {
if (this.length < 4) {
this.length = 4;
this.values =  Clazz.newArray (4, 0);
}this.values[0] = tuple.x;
this.values[1] = tuple.y;
this.values[2] = tuple.z;
this.values[3] = tuple.w;
for (var i = 4; i < this.length; i++) this.values[i] = 0.0;

}, "javax.vecmath.Tuple4d");
Clazz.defineMethod (c$, "getSize", 
function () {
return this.values.length;
});
Clazz.defineMethod (c$, "getElement", 
function (index) {
return this.values[index];
}, "~N");
Clazz.defineMethod (c$, "setElement", 
function (index, value) {
this.values[index] = value;
}, "~N,~N");
Clazz.overrideMethod (c$, "toString", 
function () {
var buffer =  new StringBuffer (this.length * 8);
var i;
for (i = 0; i < this.length; i++) {
buffer.append (this.values[i]).append (" ");
}
return buffer.toString ();
});
Clazz.overrideMethod (c$, "hashCode", 
function () {
var bits = 1;
for (var i = 0; i < this.length; i++) {
bits = 31 * bits + javax.vecmath.VecMathUtil.doubleToLongBits (this.values[i]);
}
return (bits ^ (bits >> 32));
});
Clazz.defineMethod (c$, "equals", 
function (vector1) {
try {
if (this.length != vector1.length) return false;
for (var i = 0; i < this.length; i++) {
if (this.values[i] != vector1.values[i]) return false;
}
return true;
} catch (e2) {
if (Clazz.instanceOf (e2, NullPointerException)) {
return false;
} else {
throw e2;
}
}
}, "javax.vecmath.GVector");
Clazz.defineMethod (c$, "equals", 
function (o1) {
try {
var v2 = o1;
if (this.length != v2.length) return false;
for (var i = 0; i < this.length; i++) {
if (this.values[i] != v2.values[i]) return false;
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
function (v1, epsilon) {
var diff;
if (this.length != v1.length) return false;
for (var i = 0; i < this.length; i++) {
diff = this.values[i] - v1.values[i];
if ((diff < 0 ? -diff : diff) > epsilon) return false;
}
return true;
}, "javax.vecmath.GVector,~N");
Clazz.defineMethod (c$, "dot", 
function (v1) {
if (this.length != v1.length) throw  new javax.vecmath.MismatchedSizeException (javax.vecmath.VecMathI18N.getString ("GVector14"));
var result = 0.0;
for (var i = 0; i < this.length; i++) {
result += this.values[i] * v1.values[i];
}
return result;
}, "javax.vecmath.GVector");
Clazz.defineMethod (c$, "SVDBackSolve", 
function (U, W, V, b) {
if (!(U.nRow == b.getSize () && U.nRow == U.nCol && U.nRow == W.nRow)) {
throw  new javax.vecmath.MismatchedSizeException (javax.vecmath.VecMathI18N.getString ("GVector15"));
}if (!(W.nCol == this.values.length && W.nCol == V.nCol && W.nCol == V.nRow)) {
throw  new javax.vecmath.MismatchedSizeException (javax.vecmath.VecMathI18N.getString ("GVector23"));
}var tmp =  new javax.vecmath.GMatrix (U.nRow, W.nCol);
tmp.mul (U, V);
tmp.mulTransposeRight (U, W);
tmp.invert ();
this.mul (tmp, b);
}, "javax.vecmath.GMatrix,javax.vecmath.GMatrix,javax.vecmath.GMatrix,javax.vecmath.GVector");
Clazz.defineMethod (c$, "LUDBackSolve", 
function (LU, b, permutation) {
var size = LU.nRow * LU.nCol;
var temp =  Clazz.newArray (size, 0);
var result =  Clazz.newArray (size, 0);
var row_perm =  Clazz.newArray (b.getSize (), 0);
var i;
var j;
if (LU.nRow != b.getSize ()) {
throw  new javax.vecmath.MismatchedSizeException (javax.vecmath.VecMathI18N.getString ("GVector16"));
}if (LU.nRow != permutation.getSize ()) {
throw  new javax.vecmath.MismatchedSizeException (javax.vecmath.VecMathI18N.getString ("GVector24"));
}if (LU.nRow != LU.nCol) {
throw  new javax.vecmath.MismatchedSizeException (javax.vecmath.VecMathI18N.getString ("GVector25"));
}for (i = 0; i < LU.nRow; i++) {
for (j = 0; j < LU.nCol; j++) {
temp[i * LU.nCol + j] = LU.values[i][j];
}
}
for (i = 0; i < size; i++) result[i] = 0.0;

for (i = 0; i < LU.nRow; i++) result[i * LU.nCol] = b.values[i];

for (i = 0; i < LU.nCol; i++) row_perm[i] = Math.round (permutation.values[i]);

javax.vecmath.GMatrix.luBacksubstitution (LU.nRow, temp, row_perm, result);
for (i = 0; i < LU.nRow; i++) this.values[i] = result[i * LU.nCol];

}, "javax.vecmath.GMatrix,javax.vecmath.GVector,javax.vecmath.GVector");
Clazz.defineMethod (c$, "angle", 
function (v1) {
return (Math.acos (this.dot (v1) / (this.norm () * v1.norm ())));
}, "javax.vecmath.GVector");
Clazz.defineMethod (c$, "interpolate", 
function (v1, v2, alpha) {
this.interpolate (v1, v2, alpha);
}, "javax.vecmath.GVector,javax.vecmath.GVector,~N");
Clazz.defineMethod (c$, "interpolate", 
function (v1, alpha) {
this.interpolate (v1, alpha);
}, "javax.vecmath.GVector,~N");
Clazz.defineMethod (c$, "interpolate", 
function (v1, v2, alpha) {
if (v2.length != v1.length) throw  new javax.vecmath.MismatchedSizeException (javax.vecmath.VecMathI18N.getString ("GVector20"));
if (this.length != v1.length) throw  new javax.vecmath.MismatchedSizeException (javax.vecmath.VecMathI18N.getString ("GVector21"));
for (var i = 0; i < this.length; i++) {
this.values[i] = (1 - alpha) * v1.values[i] + alpha * v2.values[i];
}
}, "javax.vecmath.GVector,javax.vecmath.GVector,~N");
Clazz.defineMethod (c$, "interpolate", 
function (v1, alpha) {
if (v1.length != this.length) throw  new javax.vecmath.MismatchedSizeException (javax.vecmath.VecMathI18N.getString ("GVector22"));
for (var i = 0; i < this.length; i++) {
this.values[i] = (1 - alpha) * this.values[i] + alpha * v1.values[i];
}
}, "javax.vecmath.GVector,~N");
Clazz.defineMethod (c$, "clone", 
function () {
var v1 = null;
try {
v1 = Clazz.superCall (this, javax.vecmath.GVector, "clone", []);
} catch (e) {
if (Clazz.instanceOf (e, CloneNotSupportedException)) {
throw  new InternalError ();
} else {
throw e;
}
}
v1.values =  Clazz.newArray (this.length, 0);
for (var i = 0; i < this.length; i++) {
v1.values[i] = this.values[i];
}
return v1;
});
});
