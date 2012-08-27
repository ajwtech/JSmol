Clazz.declarePackage ("javax.vecmath");
Clazz.load (["javax.vecmath.Tuple4d"], "javax.vecmath.Point4d", null, function () {
c$ = Clazz.declareType (javax.vecmath, "Point4d", javax.vecmath.Tuple4d, java.io.Serializable);
Clazz.makeConstructor (c$, 
function (t1) {
Clazz.superConstructor (this, javax.vecmath.Point4d, [t1.x, t1.y, t1.z, 1.0]);
}, "javax.vecmath.Tuple3d");
Clazz.defineMethod (c$, "set", 
function (t1) {
this.x = t1.x;
this.y = t1.y;
this.z = t1.z;
this.w = 1.0;
}, "javax.vecmath.Tuple3d");
Clazz.defineMethod (c$, "distanceSquared", 
function (p1) {
var dx;
var dy;
var dz;
var dw;
dx = this.x - p1.x;
dy = this.y - p1.y;
dz = this.z - p1.z;
dw = this.w - p1.w;
return (dx * dx + dy * dy + dz * dz + dw * dw);
}, "javax.vecmath.Point4d");
Clazz.defineMethod (c$, "distance", 
function (p1) {
var dx;
var dy;
var dz;
var dw;
dx = this.x - p1.x;
dy = this.y - p1.y;
dz = this.z - p1.z;
dw = this.w - p1.w;
return Math.sqrt (dx * dx + dy * dy + dz * dz + dw * dw);
}, "javax.vecmath.Point4d");
Clazz.defineMethod (c$, "distanceL1", 
function (p1) {
return Math.abs (this.x - p1.x) + Math.abs (this.y - p1.y) + Math.abs (this.z - p1.z) + Math.abs (this.w - p1.w);
}, "javax.vecmath.Point4d");
Clazz.defineMethod (c$, "distanceLinf", 
function (p1) {
var t1;
var t2;
t1 = Math.max (Math.abs (this.x - p1.x), Math.abs (this.y - p1.y));
t2 = Math.max (Math.abs (this.z - p1.z), Math.abs (this.w - p1.w));
return Math.max (t1, t2);
}, "javax.vecmath.Point4d");
Clazz.defineMethod (c$, "project", 
function (p1) {
var oneOw;
oneOw = 1 / p1.w;
this.x = p1.x * oneOw;
this.y = p1.y * oneOw;
this.z = p1.z * oneOw;
this.w = 1.0;
}, "javax.vecmath.Point4d");
});
