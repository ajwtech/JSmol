Clazz.declarePackage ("org.jmol.modelsetbio");
Clazz.load (["org.jmol.modelsetbio.ProteinStructure"], "org.jmol.modelsetbio.Helix", ["javax.vecmath.Point3f", "$.Vector3f", "org.jmol.constant.EnumStructure", "org.jmol.util.Measure"], function () {
c$ = Clazz.declareType (org.jmol.modelsetbio, "Helix", org.jmol.modelsetbio.ProteinStructure);
Clazz.makeConstructor (c$, 
function (apolymer, monomerIndex, monomerCount, id, subtype) {
Clazz.superConstructor (this, org.jmol.modelsetbio.Helix, [apolymer, org.jmol.constant.EnumStructure.HELIX, monomerIndex, monomerCount, id]);
this.subtype = subtype;
}, "org.jmol.modelsetbio.AlphaPolymer,~N,~N,~N,org.jmol.constant.EnumStructure");
Clazz.overrideMethod (c$, "calcAxis", 
function () {
if (this.axisA != null) return ;
var points =  new Array (this.monomerCount + 1);
for (var i = 0; i <= this.monomerCount; i++) {
points[i] =  new javax.vecmath.Point3f ();
this.apolymer.getLeadMidPoint (this.monomerIndexFirst + i, points[i]);
}
this.axisA =  new javax.vecmath.Point3f ();
this.axisUnitVector =  new javax.vecmath.Vector3f ();
org.jmol.util.Measure.calcBestAxisThroughPoints (points, this.axisA, this.axisUnitVector, this.vectorProjection, 4);
this.axisB = javax.vecmath.Point3f.newP (points[this.monomerCount]);
org.jmol.util.Measure.projectOntoAxis (this.axisB, this.axisA, this.axisUnitVector, this.vectorProjection);
});
});
