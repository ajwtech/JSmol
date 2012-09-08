Clazz.declarePackage ("org.jmol.util");
Clazz.load (["org.jmol.util.Geodesic"], "org.jmol.util.Normix", ["java.lang.NullPointerException", "java.util.BitSet", "$.Random", "javax.vecmath.Vector3f", "org.jmol.util.Logger", "$.Shader"], function () {
c$ = Clazz.decorateAsClass (function () {
this.transformedVectors = null;
this.shadeIndexes = null;
this.shadeIndexes2Sided = null;
Clazz.instantialize (this, arguments);
}, org.jmol.util, "Normix");
Clazz.prepareFields (c$, function () {
this.transformedVectors =  new Array (org.jmol.util.Normix.normixCount);
{
for (var i = org.jmol.util.Normix.normixCount; --i >= 0; ) this.transformedVectors[i] =  new javax.vecmath.Vector3f ();

}this.shadeIndexes =  Clazz.newArray (org.jmol.util.Normix.normixCount, 0);
this.shadeIndexes2Sided =  Clazz.newArray (org.jmol.util.Normix.normixCount, 0);
});
c$.getVector = Clazz.defineMethod (c$, "getVector", 
function (normix) {
return org.jmol.util.Normix.vertexVectors[normix];
}, "~N");
c$.getInverseNormix = Clazz.defineMethod (c$, "getInverseNormix", 
function (normix) {
return org.jmol.util.Normix.inverseNormixes[normix];
}, "~N");
c$.getNormix = Clazz.defineMethod (c$, "getNormix", 
function (v, bsTemp) {
return org.jmol.util.Normix.getNormix (v.x, v.y, v.z, 3, bsTemp);
}, "javax.vecmath.Vector3f,java.util.BitSet");
c$.get2SidedNormix = Clazz.defineMethod (c$, "get2SidedNormix", 
function (v, bsTemp) {
return ~org.jmol.util.Normix.getNormix (v.x, v.y, v.z, 3, bsTemp);
}, "javax.vecmath.Vector3f,java.util.BitSet");
c$.getNormix = Clazz.defineMethod (c$, "getNormix", 
function (x, y, z, geodesicLevel, bsConsidered) {
var champion;
var t;
if (z >= 0) {
champion = 0;
t = z - 1;
} else {
champion = 11;
t = z - (-1);
}bsConsidered.clear ();
bsConsidered.set (champion);
var championDist2 = x * x + y * y + t * t;
for (var lvl = 0; lvl <= geodesicLevel; ++lvl) {
var neighborVertexes = org.jmol.util.Normix.neighborVertexesArrays[lvl];
for (var offsetNeighbors = 6 * champion, i = offsetNeighbors + (champion < 12 ? 5 : 6); --i >= offsetNeighbors; ) {
var challenger = neighborVertexes[i];
if (bsConsidered.get (challenger)) continue ;bsConsidered.set (challenger);
var v = org.jmol.util.Normix.vertexVectors[challenger];
var d;
d = v.x - x;
var d2 = d * d;
if (d2 >= championDist2) continue ;d = v.y - y;
d2 += d * d;
if (d2 >= championDist2) continue ;d = v.z - z;
d2 += d * d;
if (d2 >= championDist2) continue ;champion = challenger;
championDist2 = d2;
}
}
return champion;
}, "~N,~N,~N,~N,java.util.BitSet");
Clazz.defineMethod (c$, "getTransformedVectors", 
function () {
return this.transformedVectors;
});
Clazz.defineMethod (c$, "isDirectedTowardsCamera", 
function (normix) {
return (normix < 0) || (this.transformedVectors[normix].z > 0);
}, "~N");
Clazz.defineMethod (c$, "setRotationMatrix", 
function (rotationMatrix) {
for (var i = org.jmol.util.Normix.normixCount; --i >= 0; ) {
var tv = this.transformedVectors[i];
rotationMatrix.transform (org.jmol.util.Normix.vertexVectors[i], tv);
this.shadeIndexes[i] = org.jmol.util.Shader.getShadeIndexNormalized (tv.x, -tv.y, tv.z);
this.shadeIndexes2Sided[i] = (tv.z >= 0 ? this.shadeIndexes[i] : org.jmol.util.Shader.getShadeIndexNormalized (-tv.x, tv.y, -tv.z));
}
}, "javax.vecmath.Matrix3f");
Clazz.defineMethod (c$, "getShadeIndex", 
function (normix) {
return (normix == -10000 || normix == 9999 ? org.jmol.util.Normix.nullShadeIndex : normix < 0 ? this.shadeIndexes2Sided[~normix] : this.shadeIndexes[normix]);
}, "~N");
Clazz.defineStatics (c$,
"NORMIX_GEODESIC_LEVEL", 3);
c$.normixCount = c$.prototype.normixCount = org.jmol.util.Geodesic.getVertexCount (3);
c$.vertexVectors = c$.prototype.vertexVectors = org.jmol.util.Geodesic.getVertexVectors ();
c$.inverseNormixes = c$.prototype.inverseNormixes =  Clazz.newArray (org.jmol.util.Normix.normixCount, 0);
c$.neighborVertexesArrays = c$.prototype.neighborVertexesArrays = org.jmol.util.Geodesic.getNeighborVertexesArrays ();
Clazz.defineStatics (c$,
"TIMINGS", false,
"NORMIX_NULL", 9999);
{
var bsTemp =  new java.util.BitSet ();
for (var n = org.jmol.util.Normix.normixCount; --n >= 0; ) {
var v = org.jmol.util.Normix.vertexVectors[n];
org.jmol.util.Normix.inverseNormixes[n] = org.jmol.util.Normix.getNormix (-v.x, -v.y, -v.z, 3, bsTemp);
}
if (false) {
org.jmol.util.Logger.info ("begin timings!");
for (var i = 0; i < org.jmol.util.Normix.normixCount; ++i) {
var normix = org.jmol.util.Normix.getNormix (org.jmol.util.Normix.vertexVectors[i], bsTemp);
org.jmol.util.Logger.info ("draw normix" + i + " {" + org.jmol.util.Normix.vertexVectors[i].x + " " + org.jmol.util.Normix.vertexVectors[i].y + " " + org.jmol.util.Normix.vertexVectors[i].z + "} {0 0 0} \"" + i + "\"");
if (normix != i) if (org.jmol.util.Logger.debugging) {
org.jmol.util.Logger.debug ("" + i + " -> " + normix);
}}
var rand =  new java.util.Random ();
var vFoo =  new javax.vecmath.Vector3f ();
var vBar =  new javax.vecmath.Vector3f ();
var vSum =  new javax.vecmath.Vector3f ();
var runCount = 100000;
var neighborVertexes = org.jmol.util.Normix.neighborVertexesArrays[3];
org.jmol.util.Logger.startTimer ();
for (var i = 0; i < runCount; ++i) {
var foo = Math.round ((rand.nextDouble () * org.jmol.util.Normix.normixCount));
var offsetNeighbor;
var bar;
do {
offsetNeighbor = foo * 6 + Math.round ((rand.nextDouble () * 6));
bar = neighborVertexes[offsetNeighbor];
} while (bar == -1);
vFoo.set (org.jmol.util.Normix.vertexVectors[foo]);
vFoo.scale (rand.nextFloat ());
vBar.set (org.jmol.util.Normix.vertexVectors[bar]);
vBar.scale (rand.nextFloat ());
vSum.add (vFoo, vBar);
vSum.normalize ();
}
org.jmol.util.Logger.checkTimer ("base runtime for " + runCount);
org.jmol.util.Logger.startTimer ();
for (var i = 0; i < runCount; ++i) {
var foo = Math.round ((rand.nextDouble () * org.jmol.util.Normix.normixCount));
var offsetNeighbor;
var bar;
do {
offsetNeighbor = foo * 6 + Math.round ((rand.nextDouble () * 6));
bar = neighborVertexes[offsetNeighbor];
} while (bar == -1);
vFoo.set (org.jmol.util.Normix.vertexVectors[foo]);
vFoo.scale (rand.nextFloat ());
vBar.set (org.jmol.util.Normix.vertexVectors[bar]);
vBar.scale (rand.nextFloat ());
vSum.add (vFoo, vBar);
var sum = org.jmol.util.Normix.getNormix (vSum, bsTemp);
if (sum != foo && sum != bar) {
throw  new NullPointerException ();
}var sum2 = org.jmol.util.Normix.getNormix (vSum, bsTemp);
if (sum != sum2) {
org.jmol.util.Logger.debug ("normalized not the same answer?");
throw  new NullPointerException ();
}}
org.jmol.util.Logger.checkTimer ("normix2 runtime for " + runCount);
}}Clazz.defineStatics (c$,
"nullShadeIndex", 50);
});
