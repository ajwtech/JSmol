Clazz.declarePackage ("org.jmol.adapter.smarter");
Clazz.load (["org.jmol.api.JmolAdapter"], "org.jmol.adapter.smarter.SmarterJmolAdapter", ["java.lang.Float", "org.jmol.adapter.smarter.AtomSetCollection", "$.Resolver", "org.jmol.util.Logger"], function () {
c$ = Clazz.decorateAsClass (function () {
if (!Clazz.isClassDefined ("org.jmol.adapter.smarter.SmarterJmolAdapter.AtomIterator")) {
org.jmol.adapter.smarter.SmarterJmolAdapter.$SmarterJmolAdapter$AtomIterator$ ();
}
if (!Clazz.isClassDefined ("org.jmol.adapter.smarter.SmarterJmolAdapter.BondIterator")) {
org.jmol.adapter.smarter.SmarterJmolAdapter.$SmarterJmolAdapter$BondIterator$ ();
}
if (!Clazz.isClassDefined ("org.jmol.adapter.smarter.SmarterJmolAdapter.StructureIterator")) {
org.jmol.adapter.smarter.SmarterJmolAdapter.$SmarterJmolAdapter$StructureIterator$ ();
}
Clazz.instantialize (this, arguments);
}, org.jmol.adapter.smarter, "SmarterJmolAdapter", org.jmol.api.JmolAdapter);
Clazz.makeConstructor (c$, 
function () {
Clazz.superConstructor (this, org.jmol.adapter.smarter.SmarterJmolAdapter, ["SmarterJmolAdapter"]);
});
Clazz.overrideMethod (c$, "getFileTypeName", 
function (atomSetCollectionOrReader) {
if (Clazz.instanceOf (atomSetCollectionOrReader, org.jmol.adapter.smarter.AtomSetCollection)) return (atomSetCollectionOrReader).getFileTypeName ();
if (Clazz.instanceOf (atomSetCollectionOrReader, java.io.BufferedReader)) return org.jmol.adapter.smarter.Resolver.getFileType (atomSetCollectionOrReader);
return null;
}, "~O");
Clazz.overrideMethod (c$, "getAtomSetCollectionReader", 
function (name, type, bufferedReader, htParams) {
return org.jmol.adapter.smarter.SmarterJmolAdapter.staticGetAtomSetCollectionReader (name, type, bufferedReader, htParams);
}, "~S,~S,java.io.BufferedReader,java.util.Map");
c$.staticGetAtomSetCollectionReader = Clazz.defineMethod (c$, "staticGetAtomSetCollectionReader", 
function (name, type, bufferedReader, htParams) {
try {
var ret = org.jmol.adapter.smarter.Resolver.getAtomCollectionReader (name, type, bufferedReader, htParams, -1);
if (Clazz.instanceOf (ret, String)) {
try {
bufferedReader.close ();
} catch (e) {
if (Clazz.instanceOf (e, Exception)) {
} else {
throw e;
}
}
} else {
(ret).setup (name, htParams, bufferedReader);
}return ret;
} catch (e) {
if (Clazz.instanceOf (e, Throwable)) {
try {
bufferedReader.close ();
} catch (ex) {
if (Clazz.instanceOf (ex, Exception)) {
} else {
throw ex;
}
}
bufferedReader = null;
org.jmol.util.Logger.error (null, e);
return "" + e;
} else {
throw e;
}
}
}, "~S,~S,java.io.BufferedReader,java.util.Map");
Clazz.overrideMethod (c$, "getAtomSetCollection", 
function (atomSetCollectionReader) {
return org.jmol.adapter.smarter.SmarterJmolAdapter.staticGetAtomSetCollection (atomSetCollectionReader);
}, "~O");
c$.staticGetAtomSetCollection = Clazz.defineMethod (c$, "staticGetAtomSetCollection", 
function (a) {
var br = null;
try {
br = a.reader;
var ret = a.readData ();
if (!(Clazz.instanceOf (ret, org.jmol.adapter.smarter.AtomSetCollection))) return ret;
var atomSetCollection = ret;
if (atomSetCollection.errorMessage != null) return atomSetCollection.errorMessage;
return atomSetCollection;
} catch (e) {
if (Clazz.instanceOf (e, Throwable)) {
try {
br.close ();
} catch (ex) {
if (Clazz.instanceOf (ex, Exception)) {
} else {
throw ex;
}
}
br = null;
org.jmol.util.Logger.error (null, e);
return "" + e;
} else {
throw e;
}
}
}, "org.jmol.adapter.smarter.AtomSetCollectionReader");
Clazz.overrideMethod (c$, "getAtomSetCollectionReaders", 
function (fileReader, names, types, htParams, getReadersOnly) {
var size = names.length;
var readers = (getReadersOnly ?  new Array (size) : null);
var atomsets = (getReadersOnly ? null :  new Array (size));
for (var i = 0; i < size; i++) {
try {
var reader = fileReader.getBufferedReaderOrBinaryDocument (i, false);
if (!(Clazz.instanceOf (reader, java.io.BufferedReader))) return reader;
var ret = org.jmol.adapter.smarter.Resolver.getAtomCollectionReader (names[i], (types == null ? null : types[i]), reader, htParams, i);
if (!(Clazz.instanceOf (ret, org.jmol.adapter.smarter.AtomSetCollectionReader))) return ret;
var r = ret;
if (r.isBinary) {
r.setup (names[i], htParams, fileReader.getBufferedReaderOrBinaryDocument (i, true));
} else {
r.setup (names[i], htParams, reader);
}if (getReadersOnly) {
readers[i] = r;
} else {
ret = r.readData ();
if (!(Clazz.instanceOf (ret, org.jmol.adapter.smarter.AtomSetCollection))) return ret;
atomsets[i] = ret;
if (atomsets[i].errorMessage != null) return atomsets[i].errorMessage;
}} catch (e) {
if (Clazz.instanceOf (e, Throwable)) {
org.jmol.util.Logger.error (null, e);
return "" + e;
} else {
throw e;
}
}
}
if (getReadersOnly) return readers;
return this.getAtomSetCollectionFromSet (readers, atomsets, htParams);
}, "org.jmol.api.JmolFilesReaderInterface,~A,~A,java.util.Map,~B");
Clazz.overrideMethod (c$, "getAtomSetCollectionFromSet", 
function (readerSet, atomsets, htParams) {
var readers = readerSet;
var asc = (atomsets == null ?  new Array (readers.length) : atomsets);
if (atomsets == null) {
for (var i = 0; i < readers.length; i++) {
try {
var ret = readers[i].readData ();
if (!(Clazz.instanceOf (ret, org.jmol.adapter.smarter.AtomSetCollection))) return ret;
asc[i] = ret;
if (asc[i].errorMessage != null) return asc[i].errorMessage;
} catch (e) {
if (Clazz.instanceOf (e, Throwable)) {
org.jmol.util.Logger.error (null, e);
return "" + e;
} else {
throw e;
}
}
}
}var result;
if (htParams.containsKey ("trajectorySteps")) {
result = asc[0];
try {
result.finalizeTrajectory (htParams.get ("trajectorySteps"), htParams.get ("vibrationSteps"));
} catch (e) {
if (Clazz.instanceOf (e, Exception)) {
if (result.errorMessage == null) result.errorMessage = e.getMessage ();
} else {
throw e;
}
}
} else {
result =  new org.jmol.adapter.smarter.AtomSetCollection (asc);
}return (result.errorMessage == null ? result : result.errorMessage);
}, "~O,~O,java.util.Map");
Clazz.overrideMethod (c$, "getAtomSetCollectionOrBufferedReaderFromZip", 
function (is, fileName, zipDirectory, htParams, asBufferedReader, asBufferedInputStream) {
return "NOT IMPLEMENTED";
}, "java.io.InputStream,~S,~A,java.util.Map,~B,~B");
Clazz.overrideMethod (c$, "getAtomSetCollectionFromDOM", 
function (DOMNode, htParams) {
try {
var ret = org.jmol.adapter.smarter.Resolver.DOMResolve (DOMNode, htParams);
if (!(Clazz.instanceOf (ret, org.jmol.adapter.smarter.AtomSetCollectionReader))) return ret;
var a = ret;
a.setup ("DOM node", htParams, null);
ret = a.readData (DOMNode);
if (!(Clazz.instanceOf (ret, org.jmol.adapter.smarter.AtomSetCollection))) return ret;
var asc = ret;
if (asc.errorMessage != null) return asc.errorMessage;
return asc;
} catch (e) {
if (Clazz.instanceOf (e, Throwable)) {
org.jmol.util.Logger.error (null, e);
return "" + e;
} else {
throw e;
}
}
}, "~O,java.util.Map");
Clazz.overrideMethod (c$, "specialLoad", 
function (name, type) {
return org.jmol.adapter.smarter.Resolver.specialLoad (name, type);
}, "~S,~S");
Clazz.overrideMethod (c$, "finish", 
function (atomSetCollection) {
(atomSetCollection).finish ();
}, "~O");
Clazz.overrideMethod (c$, "getAtomSetCollectionName", 
function (atomSetCollection) {
return (atomSetCollection).getCollectionName ();
}, "~O");
Clazz.overrideMethod (c$, "getAtomSetCollectionAuxiliaryInfo", 
function (atomSetCollection) {
return (atomSetCollection).getAtomSetCollectionAuxiliaryInfo ();
}, "~O");
Clazz.overrideMethod (c$, "getAtomSetCount", 
function (atomSetCollection) {
return (atomSetCollection).getAtomSetCount ();
}, "~O");
Clazz.overrideMethod (c$, "getAtomSetNumber", 
function (atomSetCollection, atomSetIndex) {
return (atomSetCollection).getAtomSetNumber (atomSetIndex);
}, "~O,~N");
Clazz.overrideMethod (c$, "getAtomSetName", 
function (atomSetCollection, atomSetIndex) {
return (atomSetCollection).getAtomSetName (atomSetIndex);
}, "~O,~N");
Clazz.overrideMethod (c$, "getAtomSetAuxiliaryInfo", 
function (atomSetCollection, atomSetIndex) {
return (atomSetCollection).getAtomSetAuxiliaryInfo (atomSetIndex);
}, "~O,~N");
Clazz.overrideMethod (c$, "getHydrogenAtomCount", 
function (atomSetCollection) {
return (atomSetCollection).getHydrogenAtomCount ();
}, "~O");
Clazz.overrideMethod (c$, "getBondList", 
function (atomSetCollection) {
return (atomSetCollection).getBondList ();
}, "~O");
Clazz.overrideMethod (c$, "getAtomCount", 
function (atomSetCollection) {
var a = atomSetCollection;
return (a.bsAtoms == null ? a.getAtomCount () : a.bsAtoms.cardinality ());
}, "~O");
Clazz.overrideMethod (c$, "coordinatesAreFractional", 
function (atomSetCollection) {
return (atomSetCollection).coordinatesAreFractional;
}, "~O");
Clazz.overrideMethod (c$, "getNotionalUnitcell", 
function (atomSetCollection) {
return (atomSetCollection).notionalUnitCell;
}, "~O");
Clazz.overrideMethod (c$, "getPdbScaleMatrix", 
function (atomSetCollection) {
var a = (atomSetCollection).notionalUnitCell;
if (a.length < 22) return null;
var b =  Clazz.newArray (16, 0);
for (var i = 0; i < 16; i++) b[i] = a[6 + i];

return b;
}, "~O");
Clazz.overrideMethod (c$, "getPdbScaleTranslate", 
function (atomSetCollection) {
var a = (atomSetCollection).notionalUnitCell;
if (a.length < 22) return null;
var b =  Clazz.newArray (3, 0);
b[0] = a[9];
b[1] = a[13];
b[2] = a[17];
return b;
}, "~O");
Clazz.overrideMethod (c$, "getAtomIterator", 
function (atomSetCollection) {
return Clazz.innerTypeInstance (org.jmol.adapter.smarter.SmarterJmolAdapter.AtomIterator, this, null, atomSetCollection);
}, "~O");
Clazz.overrideMethod (c$, "getBondIterator", 
function (atomSetCollection) {
return Clazz.innerTypeInstance (org.jmol.adapter.smarter.SmarterJmolAdapter.BondIterator, this, null, atomSetCollection);
}, "~O");
Clazz.overrideMethod (c$, "getStructureIterator", 
function (atomSetCollection) {
return (atomSetCollection).getStructureCount () == 0 ? null : Clazz.innerTypeInstance (org.jmol.adapter.smarter.SmarterJmolAdapter.StructureIterator, this, null, atomSetCollection);
}, "~O");
c$.$SmarterJmolAdapter$AtomIterator$ = function () {
Clazz.pu$h ();
c$ = Clazz.decorateAsClass (function () {
Clazz.prepareCallback (this, arguments);
this.iatom = 0;
this.atom = null;
this.atomCount = 0;
this.atoms = null;
this.bsAtoms = null;
Clazz.instantialize (this, arguments);
}, org.jmol.adapter.smarter.SmarterJmolAdapter, "AtomIterator", org.jmol.api.JmolAdapter.AtomIterator, null, Clazz.innerTypeInstance (org.jmol.api.JmolAdapter.AtomIterator, this, null, Clazz.inheritArgs));
Clazz.makeConstructor (c$, 
function (a) {
Clazz.superConstructor (this, org.jmol.adapter.smarter.SmarterJmolAdapter.AtomIterator, []);
this.atomCount = a.getAtomCount ();
this.atoms = a.getAtoms ();
this.bsAtoms = a.bsAtoms;
this.iatom = 0;
}, "org.jmol.adapter.smarter.AtomSetCollection");
Clazz.overrideMethod (c$, "hasNext", 
function () {
if (this.iatom == this.atomCount) return false;
while ((this.atom = this.atoms[this.iatom++]) == null || (this.bsAtoms != null && !this.bsAtoms.get (this.atom.atomIndex))) if (this.iatom == this.atomCount) return false;

this.atoms[this.iatom - 1] = null;
return true;
});
Clazz.overrideMethod (c$, "getAtomSetIndex", 
function () {
return this.atom.atomSetIndex;
});
Clazz.overrideMethod (c$, "getAtomSymmetry", 
function () {
return this.atom.bsSymmetry;
});
Clazz.overrideMethod (c$, "getAtomSite", 
function () {
return this.atom.atomSite + 1;
});
Clazz.overrideMethod (c$, "getUniqueID", 
function () {
return Integer.$valueOf (this.atom.atomIndex);
});
Clazz.overrideMethod (c$, "getElementNumber", 
function () {
return (this.atom.elementNumber > 0 ? this.atom.elementNumber : org.jmol.api.JmolAdapter.getElementNumber (this.atom.getElementSymbol ()));
});
Clazz.overrideMethod (c$, "getAtomName", 
function () {
return this.atom.atomName;
});
Clazz.overrideMethod (c$, "getFormalCharge", 
function () {
return this.atom.formalCharge;
});
Clazz.overrideMethod (c$, "getPartialCharge", 
function () {
return this.atom.partialCharge;
});
Clazz.overrideMethod (c$, "getEllipsoid", 
function () {
return this.atom.ellipsoid;
});
Clazz.overrideMethod (c$, "getRadius", 
function () {
return this.atom.radius;
});
Clazz.overrideMethod (c$, "getX", 
function () {
return this.atom.x;
});
Clazz.overrideMethod (c$, "getY", 
function () {
return this.atom.y;
});
Clazz.overrideMethod (c$, "getZ", 
function () {
return this.atom.z;
});
Clazz.overrideMethod (c$, "getVectorX", 
function () {
return this.atom.vectorX;
});
Clazz.overrideMethod (c$, "getVectorY", 
function () {
return this.atom.vectorY;
});
Clazz.overrideMethod (c$, "getVectorZ", 
function () {
return this.atom.vectorZ;
});
Clazz.overrideMethod (c$, "getBfactor", 
function () {
return Float.isNaN (this.atom.bfactor) && this.atom.anisoBorU != null ? this.atom.anisoBorU[7] * 100 : this.atom.bfactor;
});
Clazz.overrideMethod (c$, "getOccupancy", 
function () {
return this.atom.occupancy;
});
Clazz.overrideMethod (c$, "getIsHetero", 
function () {
return this.atom.isHetero;
});
Clazz.overrideMethod (c$, "getAtomSerial", 
function () {
return this.atom.atomSerial;
});
Clazz.overrideMethod (c$, "getChainID", 
function () {
return org.jmol.api.JmolAdapter.canonizeChainID (this.atom.chainID);
});
Clazz.overrideMethod (c$, "getAlternateLocationID", 
function () {
return org.jmol.api.JmolAdapter.canonizeAlternateLocationID (this.atom.alternateLocationID);
});
Clazz.overrideMethod (c$, "getGroup3", 
function () {
return this.atom.group3;
});
Clazz.overrideMethod (c$, "getSequenceNumber", 
function () {
return this.atom.sequenceNumber;
});
Clazz.overrideMethod (c$, "getInsertionCode", 
function () {
return org.jmol.api.JmolAdapter.canonizeInsertionCode (this.atom.insertionCode);
});
Clazz.overrideMethod (c$, "getXYZ", 
function () {
return this.atom;
});
c$ = Clazz.p0p ();
};
c$.$SmarterJmolAdapter$BondIterator$ = function () {
Clazz.pu$h ();
c$ = Clazz.decorateAsClass (function () {
Clazz.prepareCallback (this, arguments);
this.bsAtoms = null;
this.bonds = null;
this.ibond = 0;
this.bond = null;
this.bondCount = 0;
Clazz.instantialize (this, arguments);
}, org.jmol.adapter.smarter.SmarterJmolAdapter, "BondIterator", org.jmol.api.JmolAdapter.BondIterator, null, Clazz.innerTypeInstance (org.jmol.api.JmolAdapter.BondIterator, this, null, Clazz.inheritArgs));
Clazz.makeConstructor (c$, 
function (a) {
Clazz.superConstructor (this, org.jmol.adapter.smarter.SmarterJmolAdapter.BondIterator, []);
this.bsAtoms = a.bsAtoms;
this.bonds = a.getBonds ();
this.bondCount = a.getBondCount ();
this.ibond = 0;
}, "org.jmol.adapter.smarter.AtomSetCollection");
Clazz.overrideMethod (c$, "hasNext", 
function () {
if (this.ibond == this.bondCount) return false;
while ((this.bond = this.bonds[this.ibond++]) == null || (this.bsAtoms != null && (!this.bsAtoms.get (this.bond.atomIndex1) || !this.bsAtoms.get (this.bond.atomIndex2)))) if (this.ibond == this.bondCount) return false;

return true;
});
Clazz.overrideMethod (c$, "getAtomUniqueID1", 
function () {
return Integer.$valueOf (this.bond.atomIndex1);
});
Clazz.overrideMethod (c$, "getAtomUniqueID2", 
function () {
return Integer.$valueOf (this.bond.atomIndex2);
});
Clazz.overrideMethod (c$, "getEncodedOrder", 
function () {
return this.bond.order;
});
c$ = Clazz.p0p ();
};
c$.$SmarterJmolAdapter$StructureIterator$ = function () {
Clazz.pu$h ();
c$ = Clazz.decorateAsClass (function () {
Clazz.prepareCallback (this, arguments);
this.structureCount = 0;
this.structures = null;
this.structure = null;
this.istructure = 0;
Clazz.instantialize (this, arguments);
}, org.jmol.adapter.smarter.SmarterJmolAdapter, "StructureIterator", org.jmol.api.JmolAdapter.StructureIterator, null, Clazz.innerTypeInstance (org.jmol.api.JmolAdapter.StructureIterator, this, null, Clazz.inheritArgs));
Clazz.makeConstructor (c$, 
function (a) {
Clazz.superConstructor (this, org.jmol.adapter.smarter.SmarterJmolAdapter.StructureIterator, []);
this.structureCount = a.getStructureCount ();
this.structures = a.getStructures ();
this.istructure = 0;
}, "org.jmol.adapter.smarter.AtomSetCollection");
Clazz.overrideMethod (c$, "hasNext", 
function () {
if (this.istructure == this.structureCount) return false;
this.structure = this.structures[this.istructure++];
return true;
});
Clazz.overrideMethod (c$, "getModelIndex", 
function () {
return this.structure.atomSetIndex;
});
Clazz.overrideMethod (c$, "getStructureType", 
function () {
return this.structure.structureType;
});
Clazz.overrideMethod (c$, "getSubstructureType", 
function () {
return this.structure.substructureType;
});
Clazz.overrideMethod (c$, "getStructureID", 
function () {
return this.structure.structureID;
});
Clazz.overrideMethod (c$, "getSerialID", 
function () {
return this.structure.serialID;
});
Clazz.overrideMethod (c$, "getStartChainID", 
function () {
return org.jmol.api.JmolAdapter.canonizeChainID (this.structure.startChainID);
});
Clazz.overrideMethod (c$, "getStartSequenceNumber", 
function () {
return this.structure.startSequenceNumber;
});
Clazz.overrideMethod (c$, "getStartInsertionCode", 
function () {
return org.jmol.api.JmolAdapter.canonizeInsertionCode (this.structure.startInsertionCode);
});
Clazz.overrideMethod (c$, "getEndChainID", 
function () {
return org.jmol.api.JmolAdapter.canonizeChainID (this.structure.endChainID);
});
Clazz.overrideMethod (c$, "getEndSequenceNumber", 
function () {
return this.structure.endSequenceNumber;
});
Clazz.overrideMethod (c$, "getEndInsertionCode", 
function () {
return this.structure.endInsertionCode;
});
Clazz.overrideMethod (c$, "getStrandCount", 
function () {
return this.structure.strandCount;
});
c$ = Clazz.p0p ();
};
Clazz.defineStatics (c$,
"PATH_KEY", ".PATH");
c$.PATH_SEPARATOR = c$.prototype.PATH_SEPARATOR = System.getProperty ("path.separator");
});
