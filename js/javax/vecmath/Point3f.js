Clazz.declarePackage ("javax.vecmath");
Clazz.load (["javax.vecmath.Tuple3f"], "javax.vecmath.Point3f", null, function () {
c$ = Clazz.declareType (javax.vecmath, "Point3f", javax.vecmath.Tuple3f, java.io.Serializable);
Clazz.defineMethod (c$, "distanceSquared", 
function (p1) {
var dx;
var dy;
var dz;
dx = this.x - p1.x;
dy = this.y - p1.y;
dz = this.z - p1.z;
return dx * dx + dy * dy + dz * dz;
}, "javax.vecmath.Point3f");
Clazz.defineMethod (c$, "distance", 
function (p1) {
var dx;
var dy;
var dz;
dx = this.x - p1.x;
dy = this.y - p1.y;
dz = this.z - p1.z;
return Math.sqrt (dx * dx + dy * dy + dz * dz);
}, "javax.vecmath.Point3f");
Clazz.defineMethod (c$, "distanceL1", 
function (p1) {
return (Math.abs (this.x - p1.x) + Math.abs (this.y - p1.y) + Math.abs (this.z - p1.z));
}, "javax.vecmath.Point3f");
Clazz.defineMethod (c$, "distanceLinf", 
function (p1) {
var tmp;
tmp = Math.max (Math.abs (this.x - p1.x), Math.abs (this.y - p1.y));
return (Math.max (tmp, Math.abs (this.z - p1.z)));
}, "javax.vecmath.Point3f");
Clazz.defineMethod (c$, "project", 
function (p1) {
var oneOw;
oneOw = 1 / p1.w;
this.x = p1.x * oneOw;
this.y = p1.y * oneOw;
this.z = p1.z * oneOw;
}, "javax.vecmath.Point4f");
});
