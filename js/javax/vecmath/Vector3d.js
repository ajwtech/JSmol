Clazz.declarePackage ("javax.vecmath");
Clazz.load (["javax.vecmath.Tuple3d"], "javax.vecmath.Vector3d", null, function () {
c$ = Clazz.declareType (javax.vecmath, "Vector3d", javax.vecmath.Tuple3d);
Clazz.defineMethod (c$, "cross", 
function (v1, v2) {
var x;
var y;
x = v1.y * v2.z - v1.z * v2.y;
y = v2.x * v1.z - v2.z * v1.x;
this.z = v1.x * v2.y - v1.y * v2.x;
this.x = x;
this.y = y;
}, "javax.vecmath.Vector3d,javax.vecmath.Vector3d");
Clazz.defineMethod (c$, "normalize", 
function () {
var norm;
norm = 1.0 / Math.sqrt (this.x * this.x + this.y * this.y + this.z * this.z);
this.x *= norm;
this.y *= norm;
this.z *= norm;
});
Clazz.defineMethod (c$, "dot", 
function (v1) {
return (this.x * v1.x + this.y * v1.y + this.z * v1.z);
}, "javax.vecmath.Vector3d");
Clazz.defineMethod (c$, "lengthSquared", 
function () {
return (this.x * this.x + this.y * this.y + this.z * this.z);
});
Clazz.defineMethod (c$, "length", 
function () {
return Math.sqrt (this.x * this.x + this.y * this.y + this.z * this.z);
});
});
