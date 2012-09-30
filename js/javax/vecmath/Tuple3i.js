Clazz.declarePackage ("javax.vecmath");
c$ = Clazz.decorateAsClass (function () {
this.x = 0;
this.y = 0;
this.z = 0;
Clazz.instantialize (this, arguments);
}, javax.vecmath, "Tuple3i", null, java.io.Serializable);
Clazz.makeConstructor (c$, 
function () {
});
Clazz.defineMethod (c$, "set", 
function (x, y, z) {
this.x = x;
this.y = y;
this.z = z;
}, "~N,~N,~N");
Clazz.defineMethod (c$, "setT", 
function (t1) {
this.x = t1.x;
this.y = t1.y;
this.z = t1.z;
}, "javax.vecmath.Tuple3i");
Clazz.defineMethod (c$, "add", 
function (t1) {
this.x += t1.x;
this.y += t1.y;
this.z += t1.z;
}, "javax.vecmath.Tuple3i");
Clazz.defineMethod (c$, "scaleAdd", 
function (s, t1, t2) {
this.x = s * t1.x + t2.x;
this.y = s * t1.y + t2.y;
this.z = s * t1.z + t2.z;
}, "~N,javax.vecmath.Tuple3i,javax.vecmath.Tuple3i");
Clazz.overrideMethod (c$, "toString", 
function () {
return "(" + this.x + ", " + this.y + ", " + this.z + ")";
});
Clazz.overrideMethod (c$, "equals", 
function (t1) {
if (!(Clazz.instanceOf (t1, javax.vecmath.Tuple3i))) return false;
var t2 = t1;
return (this.x == t2.x && this.y == t2.y && this.z == t2.z);
}, "~O");
Clazz.overrideMethod (c$, "hashCode", 
function () {
var bits = 1;
bits = 31 * bits + this.x;
bits = 31 * bits + this.y;
bits = 31 * bits + this.z;
return (bits ^ (bits >> 32));
});
