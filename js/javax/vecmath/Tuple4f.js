Clazz.declarePackage ("javax.vecmath");
Clazz.load (null, "javax.vecmath.Tuple4f", ["javax.vecmath.VecMathUtil"], function () {
c$ = Clazz.decorateAsClass (function () {
this.x = 0;
this.y = 0;
this.z = 0;
this.w = 0;
Clazz.instantialize (this, arguments);
}, javax.vecmath, "Tuple4f", null, java.io.Serializable);
Clazz.defineMethod (c$, "set", 
function (x, y, z, w) {
this.x = x;
this.y = y;
this.z = z;
this.w = w;
}, "~N,~N,~N,~N");
Clazz.defineMethod (c$, "scale", 
function (s) {
this.x *= s;
this.y *= s;
this.z *= s;
this.w *= s;
}, "~N");
Clazz.overrideMethod (c$, "toString", 
function () {
return "(" + this.x + ", " + this.y + ", " + this.z + ", " + this.w + ")";
});
Clazz.overrideMethod (c$, "equals", 
function (t1) {
if (!(Clazz.instanceOf (t1, javax.vecmath.Tuple4f))) return false;
var t2 = t1;
return (this.x == t2.x && this.y == t2.y && this.z == t2.z && this.w == t2.w);
}, "~O");
Clazz.overrideMethod (c$, "hashCode", 
function () {
var bits = 1;
bits = 31 * bits + javax.vecmath.VecMathUtil.floatToIntBits (this.x);
bits = 31 * bits + javax.vecmath.VecMathUtil.floatToIntBits (this.y);
bits = 31 * bits + javax.vecmath.VecMathUtil.floatToIntBits (this.z);
bits = 31 * bits + javax.vecmath.VecMathUtil.floatToIntBits (this.w);
return (bits ^ (bits >> 32));
});
});
