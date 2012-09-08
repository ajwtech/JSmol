Clazz.declarePackage ("javax.vecmath");
Clazz.load (["javax.vecmath.Tuple4f"], "javax.vecmath.Vector4f", null, function () {
c$ = Clazz.declareType (javax.vecmath, "Vector4f", javax.vecmath.Tuple4f, java.io.Serializable);
Clazz.makeConstructor (c$, 
function (t1) {
Clazz.superConstructor (this, javax.vecmath.Vector4f, [t1.x, t1.y, t1.z, 0.0]);
}, "javax.vecmath.Tuple3f");
Clazz.defineMethod (c$, "set", 
function (t1) {
this.x = t1.x;
this.y = t1.y;
this.z = t1.z;
this.w = 0.0;
}, "javax.vecmath.Tuple3f");
Clazz.defineMethod (c$, "length", 
function () {
return Math.sqrt (this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
});
Clazz.defineMethod (c$, "lengthSquared", 
function () {
return (this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
});
Clazz.defineMethod (c$, "dot", 
function (v1) {
return (this.x * v1.x + this.y * v1.y + this.z * v1.z + this.w * v1.w);
}, "javax.vecmath.Vector4f");
Clazz.defineMethod (c$, "normalize", 
function (v1) {
var norm;
norm = (1.0 / Math.sqrt (v1.x * v1.x + v1.y * v1.y + v1.z * v1.z + v1.w * v1.w));
this.x = v1.x * norm;
this.y = v1.y * norm;
this.z = v1.z * norm;
this.w = v1.w * norm;
}, "javax.vecmath.Vector4f");
Clazz.defineMethod (c$, "normalize", 
function () {
var norm;
norm = (1.0 / Math.sqrt (this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w));
this.x *= norm;
this.y *= norm;
this.z *= norm;
this.w *= norm;
});
Clazz.defineMethod (c$, "angle", 
function (v1) {
var vDot = this.dot (v1) / (this.length () * v1.length ());
if (vDot < -1.0) vDot = -1.0;
if (vDot > 1.0) vDot = 1.0;
return ((Math.acos (vDot)));
}, "javax.vecmath.Vector4f");
});
