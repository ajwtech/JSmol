Clazz.declarePackage ("org.jmol.modelsetbio");
Clazz.load (["org.jmol.modelsetbio.ProteinStructure"], "org.jmol.modelsetbio.Sheet", ["javax.vecmath.Point3f", "$.Vector3f", "org.jmol.constant.EnumStructure", "org.jmol.util.Measure"], function () {
c$ = Clazz.decorateAsClass (function () {
this.alphaPolymer = null;
this.widthUnitVector = null;
this.heightUnitVector = null;
Clazz.instantialize (this, arguments);
}, org.jmol.modelsetbio, "Sheet", org.jmol.modelsetbio.ProteinStructure);
Clazz.makeConstructor (c$, 
function (alphaPolymer, monomerIndex, monomerCount, id, subtype) {
Clazz.superConstructor (this, org.jmol.modelsetbio.Sheet, [alphaPolymer, org.jmol.constant.EnumStructure.SHEET, monomerIndex, monomerCount, id]);
this.alphaPolymer = alphaPolymer;
this.subtype = subtype;
}, "org.jmol.modelsetbio.AlphaPolymer,~N,~N,~N,org.jmol.constant.EnumStructure");
Clazz.overrideMethod (c$, "calcAxis", 
function () {
if (this.axisA != null) return ;
if (this.monomerCount == 2) {
this.axisA = this.alphaPolymer.getLeadPoint (this.monomerIndexFirst);
this.axisB = this.alphaPolymer.getLeadPoint (this.monomerIndexFirst + 1);
} else {
this.axisA =  new javax.vecmath.Point3f ();
this.alphaPolymer.getLeadMidPoint (this.monomerIndexFirst + 1, this.axisA);
this.axisB =  new javax.vecmath.Point3f ();
this.alphaPolymer.getLeadMidPoint (this.monomerIndexFirst + this.monomerCount - 1, this.axisB);
}this.axisUnitVector =  new javax.vecmath.Vector3f ();
this.axisUnitVector.sub (this.axisB, this.axisA);
this.axisUnitVector.normalize ();
var tempA =  new javax.vecmath.Point3f ();
this.alphaPolymer.getLeadMidPoint (this.monomerIndexFirst, tempA);
if (this.lowerNeighborIsHelixOrSheet ()) {
} else {
org.jmol.util.Measure.projectOntoAxis (tempA, this.axisA, this.axisUnitVector, this.vectorProjection);
}var tempB =  new javax.vecmath.Point3f ();
this.alphaPolymer.getLeadMidPoint (this.monomerIndexFirst + this.monomerCount, tempB);
if (this.upperNeighborIsHelixOrSheet ()) {
} else {
org.jmol.util.Measure.projectOntoAxis (tempB, this.axisA, this.axisUnitVector, this.vectorProjection);
}this.axisA = tempA;
this.axisB = tempB;
});
Clazz.defineMethod (c$, "calcSheetUnitVectors", 
function () {
if (!(Clazz.instanceOf (this.alphaPolymer, org.jmol.modelsetbio.AminoPolymer))) return ;
if (this.widthUnitVector == null) {
var vectorCO =  new javax.vecmath.Vector3f ();
var vectorCOSum =  new javax.vecmath.Vector3f ();
var amino = this.alphaPolymer.monomers[this.monomerIndexFirst];
vectorCOSum.sub (amino.getCarbonylOxygenAtom (), amino.getCarbonylCarbonAtom ());
for (var i = this.monomerCount; --i > this.monomerIndexFirst; ) {
amino = this.alphaPolymer.monomers[i];
vectorCO.sub (amino.getCarbonylOxygenAtom (), amino.getCarbonylCarbonAtom ());
if (vectorCOSum.angle (vectorCO) < 1.5707964) vectorCOSum.add (vectorCO);
 else vectorCOSum.sub (vectorCO);
}
this.heightUnitVector = vectorCO;
this.heightUnitVector.cross (this.axisUnitVector, vectorCOSum);
this.heightUnitVector.normalize ();
this.widthUnitVector = vectorCOSum;
this.widthUnitVector.cross (this.axisUnitVector, this.heightUnitVector);
}});
Clazz.defineMethod (c$, "getWidthUnitVector", 
function () {
if (this.widthUnitVector == null) this.calcSheetUnitVectors ();
return this.widthUnitVector;
});
Clazz.defineMethod (c$, "getHeightUnitVector", 
function () {
if (this.heightUnitVector == null) this.calcSheetUnitVectors ();
return this.heightUnitVector;
});
});
