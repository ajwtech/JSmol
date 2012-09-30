Clazz.declarePackage ("javax.vecmath");
Clazz.load (["javax.vecmath.Tuple3f"], "javax.vecmath.Point3f", null, function () {
c$ = Clazz.declareType (javax.vecmath, "Point3f", javax.vecmath.Tuple3f);
c$.newP = Clazz.defineMethod (c$, "newP", 
function (t) {
var p =  new javax.vecmath.Point3f ();
p.x = t.x;
p.y = t.y;
p.z = t.z;
return p;
}, "javax.vecmath.Tuple3f");
c$.new3 = Clazz.defineMethod (c$, "new3", 
function (x, y, z) {
var p =  new javax.vecmath.Point3f ();
p.x = x;
p.y = y;
p.z = z;
return p;
}, "~N,~N,~N");
Clazz.defineMethod (c$, "distanceSquared", 
function (p1) {
var dx = this.x - p1.x;
var dy = this.y - p1.y;
var dz = this.z - p1.z;
return (dx * dx + dy * dy + dz * dz);
}, "javax.vecmath.Point3f");
Clazz.defineMethod (c$, "distance", 
function (p1) {
return Math.sqrt (this.distanceSquared (p1));
}, "javax.vecmath.Point3f");
});
