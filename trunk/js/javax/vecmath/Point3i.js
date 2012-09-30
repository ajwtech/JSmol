Clazz.declarePackage ("javax.vecmath");
Clazz.load (["javax.vecmath.Tuple3i"], "javax.vecmath.Point3i", null, function () {
c$ = Clazz.declareType (javax.vecmath, "Point3i", javax.vecmath.Tuple3i);
c$.new3 = Clazz.defineMethod (c$, "new3", 
function (x, y, z) {
var pt =  new javax.vecmath.Point3i ();
pt.x = x;
pt.y = y;
pt.z = z;
return pt;
}, "~N,~N,~N");
});
