Clazz.declarePackage ("javax.vecmath");
Clazz.load (["javax.vecmath.Tuple4f"], "javax.vecmath.Point4f", null, function () {
c$ = Clazz.declareType (javax.vecmath, "Point4f", javax.vecmath.Tuple4f);
c$.new4 = Clazz.defineMethod (c$, "new4", 
function (x, y, z, w) {
var pt =  new javax.vecmath.Point4f ();
pt.set (x, y, z, w);
return pt;
}, "~N,~N,~N,~N");
c$.newPt = Clazz.defineMethod (c$, "newPt", 
function (value) {
var pt =  new javax.vecmath.Point4f ();
pt.set (value.x, value.y, value.z, value.w);
return pt;
}, "javax.vecmath.Point4f");
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
}, "javax.vecmath.Point4f");
});
