Clazz.declarePackage ("javax.vecmath");
Clazz.load (["javax.vecmath.Tuple2d"], "javax.vecmath.Vector2d", null, function () {
c$ = Clazz.declareType (javax.vecmath, "Vector2d", javax.vecmath.Tuple2d, java.io.Serializable);
Clazz.defineMethod (c$, "dot", 
function (v1) {
return (this.x * v1.x + this.y * v1.y);
}, "javax.vecmath.Vector2d");
Clazz.defineMethod (c$, "length", 
function () {
return Math.sqrt (this.x * this.x + this.y * this.y);
});
Clazz.defineMethod (c$, "lengthSquared", 
function () {
return (this.x * this.x + this.y * this.y);
});
Clazz.defineMethod (c$, "normalize", 
function (v1) {
var norm;
norm = (1.0 / Math.sqrt (v1.x * v1.x + v1.y * v1.y));
this.x = v1.x * norm;
this.y = v1.y * norm;
}, "javax.vecmath.Vector2d");
Clazz.defineMethod (c$, "normalize", 
function () {
var norm;
norm = (1.0 / Math.sqrt (this.x * this.x + this.y * this.y));
this.x *= norm;
this.y *= norm;
});
Clazz.defineMethod (c$, "angle", 
function (v1) {
var vDot = this.dot (v1) / (this.length () * v1.length ());
if (vDot < -1.0) vDot = -1.0;
if (vDot > 1.0) vDot = 1.0;
return ((Math.acos (vDot)));
}, "javax.vecmath.Vector2d");
});
