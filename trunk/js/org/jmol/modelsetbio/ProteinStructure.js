Clazz.declarePackage ("org.jmol.modelsetbio");
Clazz.load (["javax.vecmath.Vector3f"], "org.jmol.modelsetbio.ProteinStructure", ["javax.vecmath.Point3f", "org.jmol.util.Logger"], function () {
c$ = Clazz.decorateAsClass (function () {
this.apolymer = null;
this.type = null;
this.subtype = null;
this.monomerIndexFirst = 0;
this.monomerIndexLast = 0;
this.monomerCount = 0;
this.axisA = null;
this.axisB = null;
this.axisUnitVector = null;
this.vectorProjection = null;
this.segments = null;
this.uniqueID = 0;
this.structureID = null;
this.serialID = 0;
this.strandCount = 0;
Clazz.instantialize (this, arguments);
}, org.jmol.modelsetbio, "ProteinStructure");
Clazz.prepareFields (c$, function () {
this.vectorProjection =  new javax.vecmath.Vector3f ();
});
Clazz.makeConstructor (c$, 
function (apolymer, type, monomerIndex, monomerCount, id) {
this.uniqueID = ($t$ = ++ org.jmol.modelsetbio.ProteinStructure.globalSerialID, org.jmol.modelsetbio.ProteinStructure.prototype.globalSerialID = org.jmol.modelsetbio.ProteinStructure.globalSerialID, $t$);
this.apolymer = apolymer;
this.type = type;
this.monomerIndexFirst = monomerIndex;
this.addMonomer (monomerIndex + monomerCount - 1);
if (org.jmol.util.Logger.debugging) org.jmol.util.Logger.debug ("Creating ProteinStructure " + this.uniqueID + " " + type.getBioStructureTypeName (false) + " from " + this.monomerIndexFirst + " through " + this.monomerIndexLast + " in polymer " + apolymer);
}, "org.jmol.modelsetbio.AlphaPolymer,org.jmol.constant.EnumStructure,~N,~N,~N");
Clazz.defineMethod (c$, "addMonomer", 
function (index) {
this.monomerIndexFirst = Math.min (this.monomerIndexFirst, index);
this.monomerIndexLast = Math.max (this.monomerIndexLast, index);
this.monomerCount = this.monomerIndexLast - this.monomerIndexFirst + 1;
}, "~N");
Clazz.defineMethod (c$, "removeMonomer", 
function (monomerIndex) {
if (monomerIndex > this.monomerIndexLast || monomerIndex < this.monomerIndexFirst) return 0;
var ret = this.monomerIndexLast - monomerIndex;
this.monomerIndexLast = Math.max (this.monomerIndexFirst, monomerIndex) - 1;
this.monomerCount = this.monomerIndexLast - this.monomerIndexFirst + 1;
return ret;
}, "~N");
Clazz.defineMethod (c$, "calcAxis", 
function () {
});
Clazz.defineMethod (c$, "calcSegments", 
function () {
if (this.segments != null) return ;
this.calcAxis ();
this.segments =  new Array (this.monomerCount + 1);
this.segments[this.monomerCount] = this.axisB;
this.segments[0] = this.axisA;
var axis =  new javax.vecmath.Vector3f (this.axisUnitVector);
axis.scale (this.axisB.distance (this.axisA) / this.monomerCount);
for (var i = 1; i < this.monomerCount; i++) {
var point = this.segments[i] =  new javax.vecmath.Point3f ();
point.set (this.segments[i - 1]);
point.add (axis);
}
});
Clazz.defineMethod (c$, "lowerNeighborIsHelixOrSheet", 
function () {
if (this.monomerIndexFirst == 0) return false;
return this.apolymer.monomers[this.monomerIndexFirst - 1].isHelix () || this.apolymer.monomers[this.monomerIndexFirst - 1].isSheet ();
});
Clazz.defineMethod (c$, "upperNeighborIsHelixOrSheet", 
function () {
var upperNeighborIndex = this.monomerIndexFirst + this.monomerCount;
if (upperNeighborIndex == this.apolymer.monomerCount) return false;
return this.apolymer.monomers[upperNeighborIndex].isHelix () || this.apolymer.monomers[upperNeighborIndex].isSheet ();
});
Clazz.defineMethod (c$, "getMonomerCount", 
function () {
return this.monomerCount;
});
Clazz.defineMethod (c$, "isWithin", 
function (monomerIndex) {
return (monomerIndex > this.monomerIndexFirst && monomerIndex < this.monomerIndexLast);
}, "~N");
Clazz.defineMethod (c$, "getMonomerIndex", 
function () {
return this.monomerIndexFirst;
});
Clazz.defineMethod (c$, "getIndex", 
function (monomer) {
var monomers = this.apolymer.monomers;
var i;
for (i = this.monomerCount; --i >= 0; ) if (monomers[this.monomerIndexFirst + i] === monomer) break;

return i;
}, "org.jmol.modelsetbio.Monomer");
Clazz.defineMethod (c$, "getSegments", 
function () {
if (this.segments == null) this.calcSegments ();
return this.segments;
});
Clazz.defineMethod (c$, "getAxisStartPoint", 
function () {
this.calcAxis ();
return this.axisA;
});
Clazz.defineMethod (c$, "getAxisEndPoint", 
function () {
this.calcAxis ();
return this.axisB;
});
Clazz.defineMethod (c$, "getStructureMidPoint", 
function (index) {
if (this.segments == null) this.calcSegments ();
return this.segments[index];
}, "~N");
Clazz.defineMethod (c$, "getInfo", 
function (info) {
info.put ("type", this.type.getBioStructureTypeName (false));
var leadAtomIndices = this.apolymer.getLeadAtomIndices ();
var iArray =  Clazz.newArray (this.monomerCount, 0);
System.arraycopy (leadAtomIndices, this.monomerIndexFirst, iArray, 0, this.monomerCount);
info.put ("leadAtomIndices", iArray);
this.calcAxis ();
if (this.axisA == null) return ;
info.put ("axisA", this.axisA);
info.put ("axisB", this.axisB);
info.put ("axisUnitVector", this.axisUnitVector);
}, "java.util.Map");
Clazz.defineMethod (c$, "resetAxes", 
function () {
this.axisA = null;
this.segments = null;
});
Clazz.defineStatics (c$,
"globalSerialID", 1000);
});
