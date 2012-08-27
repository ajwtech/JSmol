Clazz.declarePackage ("javax.vecmath");
Clazz.load (["javax.vecmath.Tuple2f"], "javax.vecmath.Point2f", null, function () {
c$ = Clazz.declareType (javax.vecmath, "Point2f", javax.vecmath.Tuple2f, java.io.Serializable);
Clazz.defineMethod (c$, "distanceSquared", 
function (p1) {
var dx;
var dy;
dx = this.x - p1.x;
dy = this.y - p1.y;
return dx * dx + dy * dy;
}, "javax.vecmath.Point2f");
Clazz.defineMethod (c$, "distance", 
function (p1) {
var dx;
var dy;
dx = this.x - p1.x;
dy = this.y - p1.y;
return Math.sqrt (dx * dx + dy * dy);
}, "javax.vecmath.Point2f");
Clazz.defineMethod (c$, "distanceL1", 
function (p1) {
return (Math.abs (this.x - p1.x) + Math.abs (this.y - p1.y));
}, "javax.vecmath.Point2f");
Clazz.defineMethod (c$, "distanceLinf", 
function (p1) {
return (Math.max (Math.abs (this.x - p1.x), Math.abs (this.y - p1.y)));
}, "javax.vecmath.Point2f");
});
