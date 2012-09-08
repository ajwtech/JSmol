Clazz.declarePackage ("javax.vecmath");
Clazz.load (["javax.vecmath.Tuple2d"], "javax.vecmath.Point2d", null, function () {
c$ = Clazz.declareType (javax.vecmath, "Point2d", javax.vecmath.Tuple2d, java.io.Serializable);
Clazz.defineMethod (c$, "distanceSquared", 
function (p1) {
var dx;
var dy;
dx = this.x - p1.x;
dy = this.y - p1.y;
return dx * dx + dy * dy;
}, "javax.vecmath.Point2d");
Clazz.defineMethod (c$, "distance", 
function (p1) {
var dx;
var dy;
dx = this.x - p1.x;
dy = this.y - p1.y;
return Math.sqrt (dx * dx + dy * dy);
}, "javax.vecmath.Point2d");
Clazz.defineMethod (c$, "distanceL1", 
function (p1) {
return (Math.abs (this.x - p1.x) + Math.abs (this.y - p1.y));
}, "javax.vecmath.Point2d");
Clazz.defineMethod (c$, "distanceLinf", 
function (p1) {
return (Math.max (Math.abs (this.x - p1.x), Math.abs (this.y - p1.y)));
}, "javax.vecmath.Point2d");
});
