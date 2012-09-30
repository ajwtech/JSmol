Clazz.declarePackage ("javax.vecmath");
Clazz.load (["javax.vecmath.Tuple3f"], "javax.vecmath.Vector3f", null, function () {
c$ = Clazz.declareType (javax.vecmath, "Vector3f", javax.vecmath.Tuple3f);
Clazz.defineMethod (c$, "lengthSquared", 
function () {
return (this.x * this.x + this.y * this.y + this.z * this.z);
});
Clazz.defineMethod (c$, "length", 
function () {
return Math.sqrt (this.x * this.x + this.y * this.y + this.z * this.z);
});
Clazz.defineMethod (c$, "cross", 
function (v1, v2) {
var x;
var y;
x = v1.y * v2.z - v1.z * v2.y;
y = v2.x * v1.z - v2.z * v1.x;
this.z = v1.x * v2.y - v1.y * v2.x;
this.x = x;
this.y = y;
}, "javax.vecmath.Vector3f,javax.vecmath.Vector3f");
Clazz.defineMethod (c$, "dot", 
function (v1) {
return (this.x * v1.x + this.y * v1.y + this.z * v1.z);
}, "javax.vecmath.Vector3f");
Clazz.defineMethod (c$, "normalize", 
function () {
var norm;
norm = (1.0 / Math.sqrt (this.x * this.x + this.y * this.y + this.z * this.z));
this.x *= norm;
this.y *= norm;
this.z *= norm;
});
Clazz.defineMethod (c$, "angle", 
function (v1) {
var vDot = this.dot (v1) / (this.length () * v1.length ());
if (vDot < -1.0) vDot = -1.0;
if (vDot > 1.0) vDot = 1.0;
return ((Math.acos (vDot)));
}, "javax.vecmath.Vector3f");
c$.newV = Clazz.defineMethod (c$, "newV", 
function (t) {
var v =  new javax.vecmath.Vector3f ();
v.x = t.x;
v.y = t.y;
v.z = t.z;
return v;
}, "javax.vecmath.Tuple3f");
c$.new3 = Clazz.defineMethod (c$, "new3", 
function (x, y, z) {
var v =  new javax.vecmath.Vector3f ();
v.x = x;
v.y = y;
v.z = z;
return v;
}, "~N,~N,~N");
});
