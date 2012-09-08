﻿Clazz.declarePackage ("org.jmol.adapter.readers.xml");
Clazz.load (["org.jmol.adapter.readers.xml.XmlReader"], "org.jmol.adapter.readers.xml.XmlCmlReader", ["java.lang.Float", "$.IndexOutOfBoundsException", "java.util.Properties", "$.StringTokenizer", "org.jmol.adapter.readers.cifpdb.CifReader", "org.jmol.adapter.smarter.Atom", "$.AtomSetCollection", "$.Bond", "org.jmol.api.JmolAdapter", "org.jmol.util.Logger", "$.Parser"], function () {
c$ = Clazz.decorateAsClass (function () {
this.tokens = null;
this.atomCount = 0;
this.atomArray = null;
this.bondCount = 0;
this.bondArray = null;
this.tokenCount = 0;
this.nModules = 0;
this.moduleNestingLevel = 0;
this.haveMolecule = false;
this.localSpaceGroupName = null;
this.processing = true;
this.state = 0;
this.scalarDictRef = null;
this.scalarDictValue = null;
this.scalarTitle = null;
this.cellParameterType = null;
this.checkedSerial = false;
this.isSerial = false;
this.moleculeNesting = 0;
this.latticeVectorPtr = 0;
this.embeddedCrystal = false;
this.atomIdNames = null;
Clazz.instantialize (this, arguments);
}, org.jmol.adapter.readers.xml, "XmlCmlReader", org.jmol.adapter.readers.xml.XmlReader);
Clazz.prepareFields (c$, function () {
this.tokens =  new Array (16);
this.atomArray =  new Array (100);
this.bondArray =  new Array (100);
});
Clazz.makeConstructor (c$, 
function () {
Clazz.superConstructor (this, org.jmol.adapter.readers.xml.XmlCmlReader, []);
});
Clazz.overrideMethod (c$, "getImplementedAttributes", 
function () {
return ["id", "title", "label", "name", "x3", "y3", "z3", "x2", "y2", "isotope", "elementType", "formalCharge", "atomId", "atomRefs2", "order", "atomRef1", "atomRef2", "dictRef", "spaceGroup"];
});
Clazz.overrideMethod (c$, "processStartElement", 
function (uri, name, qName, atts) {
if (!this.processing) return ;
switch (this.state) {
case 0:
if (name.equals ("molecule")) {
this.state = 6;
this.haveMolecule = true;
if (this.moleculeNesting == 0) {
this.createNewAtomSet (atts);
}this.moleculeNesting++;
} else if (name.equals ("crystal")) {
this.state = 2;
} else if (name.equals ("symmetry")) {
this.state = 17;
if (atts.containsKey ("spaceGroup")) {
this.localSpaceGroupName = atts.get ("spaceGroup");
} else {
this.localSpaceGroupName = "P1";
this.parent.clearUnitCell ();
}} else if (name.equals ("module")) {
this.moduleNestingLevel++;
this.nModules++;
} else if (name.equals ("latticeVector")) {
this.state = 18;
this.setKeepChars (true);
}break;
case 2:
this.checkedSerial = true;
this.isSerial = false;
if (name.equals ("scalar")) {
this.state = 3;
this.setKeepChars (true);
this.scalarTitle = atts.get ("title");
this.getDictRefValue (atts);
} else if (name.equals ("symmetry")) {
this.state = 4;
if (atts.containsKey ("spaceGroup")) {
this.localSpaceGroupName = atts.get ("spaceGroup");
for (var i = 0; i < this.localSpaceGroupName.length; i++) if ((this.localSpaceGroupName.charAt (i)).charCodeAt (0) == ('_').charCodeAt (0)) this.localSpaceGroupName = this.localSpaceGroupName.substring (0, i) + this.localSpaceGroupName.substring ((i--) + 1);

}} else if (name.equals ("cellParameter")) {
if (atts.containsKey ("parameterType")) {
this.cellParameterType = atts.get ("parameterType");
this.setKeepChars (true);
}}break;
case 18:
this.setKeepChars (true);
break;
case 17:
case 3:
case 4:
if (name.equals ("transform3")) {
this.state = 5;
this.setKeepChars (true);
}break;
case 5:
case 6:
if (name.equals ("crystal")) {
this.state = 2;
this.embeddedCrystal = true;
}if (name.equals ("molecule")) {
this.state = 6;
this.moleculeNesting++;
}if (name.equals ("bondArray")) {
this.state = 10;
this.bondCount = 0;
if (atts.containsKey ("order")) {
this.breakOutBondTokens (atts.get ("order"));
for (var i = this.tokenCount; --i >= 0; ) this.bondArray[i].order = this.parseBondToken (this.tokens[i]);

}if (atts.containsKey ("atomRef1")) {
this.breakOutBondTokens (atts.get ("atomRef1"));
for (var i = this.tokenCount; --i >= 0; ) this.bondArray[i].atomIndex1 = this.atomSetCollection.getAtomIndexFromName (this.tokens[i]);

}if (atts.containsKey ("atomRef2")) {
this.breakOutBondTokens (atts.get ("atomRef2"));
for (var i = this.tokenCount; --i >= 0; ) this.bondArray[i].atomIndex2 = this.atomSetCollection.getAtomIndexFromName (this.tokens[i]);

}}if (name.equals ("atomArray")) {
this.state = 7;
this.atomCount = 0;
var coords3D = false;
if (atts.containsKey ("atomID")) {
this.breakOutAtomTokens (atts.get ("atomID"));
for (var i = this.tokenCount; --i >= 0; ) this.atomArray[i].atomName = this.tokens[i];

}if (atts.containsKey ("x3")) {
coords3D = true;
this.breakOutAtomTokens (atts.get ("x3"));
for (var i = this.tokenCount; --i >= 0; ) this.atomArray[i].x = this.parseFloat (this.tokens[i]);

}if (atts.containsKey ("y3")) {
this.breakOutAtomTokens (atts.get ("y3"));
for (var i = this.tokenCount; --i >= 0; ) this.atomArray[i].y = this.parseFloat (this.tokens[i]);

}if (atts.containsKey ("z3")) {
this.breakOutAtomTokens (atts.get ("z3"));
for (var i = this.tokenCount; --i >= 0; ) this.atomArray[i].z = this.parseFloat (this.tokens[i]);

}if (atts.containsKey ("x2")) {
this.breakOutAtomTokens (atts.get ("x2"));
for (var i = this.tokenCount; --i >= 0; ) this.atomArray[i].x = this.parseFloat (this.tokens[i]);

}if (atts.containsKey ("y2")) {
this.breakOutAtomTokens (atts.get ("y2"));
for (var i = this.tokenCount; --i >= 0; ) this.atomArray[i].y = this.parseFloat (this.tokens[i]);

}if (atts.containsKey ("elementType")) {
this.breakOutAtomTokens (atts.get ("elementType"));
for (var i = this.tokenCount; --i >= 0; ) this.atomArray[i].elementSymbol = this.tokens[i];

}for (var i = this.atomCount; --i >= 0; ) {
var atom = this.atomArray[i];
if (!coords3D) atom.z = 0;
this.addAtom (atom);
}
}if (name.equals ("formula")) {
this.state = 12;
}break;
case 10:
if (name.equals ("bond")) {
this.state = 11;
var order = -1;
this.tokenCount = 0;
if (atts.containsKey ("atomRefs2")) this.breakOutTokens (atts.get ("atomRefs2"));
if (atts.containsKey ("order")) order = this.parseBondToken (atts.get ("order"));
if (this.tokenCount == 2 && order > 0) {
this.addNewBond (this.tokens[0], this.tokens[1], order);
}}break;
case 7:
if (name.equals ("atom")) {
this.state = 8;
this.atom =  new org.jmol.adapter.smarter.Atom ();
this.parent.setFractionalCoordinates (false);
var id = atts.get ("id");
if (atts.containsKey ("name")) this.atom.atomName = atts.get ("name");
 else if (atts.containsKey ("title")) this.atom.atomName = atts.get ("title");
 else if (atts.containsKey ("label")) this.atom.atomName = atts.get ("label");
 else this.atom.atomName = id;
if (!this.checkedSerial) {
this.isSerial = (id != null && id.length > 1 && id.startsWith ("a") && org.jmol.util.Parser.parseInt (id.substring (1)) != -2147483648);
this.checkedSerial = true;
}if (this.isSerial) this.atom.atomSerial = org.jmol.util.Parser.parseInt (id.substring (1));
if (atts.containsKey ("xFract") && (this.parent.iHaveUnitCell || !atts.containsKey ("x3"))) {
this.parent.setFractionalCoordinates (true);
this.atom.set (this.parseFloat (atts.get ("xFract")), this.parseFloat (atts.get ("yFract")), this.parseFloat (atts.get ("zFract")));
} else if (atts.containsKey ("x3")) {
this.atom.set (this.parseFloat (atts.get ("x3")), this.parseFloat (atts.get ("y3")), this.parseFloat (atts.get ("z3")));
} else if (atts.containsKey ("x2")) {
this.atom.set (this.parseFloat (atts.get ("x2")), this.parseFloat (atts.get ("y2")), 0);
}if (atts.containsKey ("elementType")) {
var sym = atts.get ("elementType");
if (atts.containsKey ("isotope")) this.atom.elementNumber = ((this.parseInt (atts.get ("isotope")) << 7) + org.jmol.api.JmolAdapter.getElementNumber (sym));
this.atom.elementSymbol = sym;
}if (atts.containsKey ("formalCharge")) this.atom.formalCharge = this.parseInt (atts.get ("formalCharge"));
}break;
case 11:
if (atts.containsKey ("builtin")) {
this.setKeepChars (true);
this.state = 14;
this.scalarDictValue = atts.get ("builtin");
}break;
case 8:
if (name.equals ("scalar")) {
this.state = 9;
this.setKeepChars (true);
this.scalarTitle = atts.get ("title");
this.getDictRefValue (atts);
} else if (atts.containsKey ("builtin")) {
this.setKeepChars (true);
this.state = 13;
this.scalarDictValue = atts.get ("builtin");
}break;
case 9:
break;
case 12:
break;
case 13:
break;
case 14:
break;
}
}, "~S,~S,~S,java.util.Map");
Clazz.defineMethod (c$, "addNewBond", 
($fz = function (a1, a2, order) {
this.parent.applySymmetryToBonds = true;
if (this.isSerial) this.atomSetCollection.addNewBondWithMappedSerialNumbers (org.jmol.util.Parser.parseInt (a1.substring (1)), org.jmol.util.Parser.parseInt (a2.substring (1)), order);
 else this.atomSetCollection.addNewBond (a1, a2, order);
}, $fz.isPrivate = true, $fz), "~S,~S,~N");
Clazz.defineMethod (c$, "getDictRefValue", 
($fz = function (atts) {
this.scalarDictRef = atts.get ("dictRef");
if (this.scalarDictRef != null) {
var iColon = this.scalarDictRef.indexOf (":");
this.scalarDictValue = this.scalarDictRef.substring (iColon + 1);
}}, $fz.isPrivate = true, $fz), "java.util.Map");
Clazz.overrideMethod (c$, "processEndElement", 
function (uri, name, qName) {
if (!this.processing) return ;
switch (this.state) {
case 0:
if (name.equals ("module")) {
if (--this.moduleNestingLevel == 0) {
if (this.parent.iHaveUnitCell) this.applySymmetryAndSetTrajectory ();
this.atomIdNames = this.atomSetCollection.setAtomNames (this.atomIdNames);
}}break;
case 2:
if (name.equals ("crystal")) {
if (this.embeddedCrystal) {
this.state = 6;
this.embeddedCrystal = false;
} else {
this.state = 0;
}} else if (name.equals ("cellParameter") && this.keepChars) {
var tokens = org.jmol.adapter.smarter.AtomSetCollectionReader.getTokens (this.chars);
this.setKeepChars (false);
if (tokens.length != 3 || this.cellParameterType == null) {
} else if (this.cellParameterType.equals ("length")) {
for (var i = 0; i < 3; i++) this.parent.setUnitCellItem (i, this.parseFloat (tokens[i]));

break;
} else if (this.cellParameterType.equals ("angle")) {
for (var i = 0; i < 3; i++) this.parent.setUnitCellItem (i + 3, this.parseFloat (tokens[i]));

break;
}org.jmol.util.Logger.error ("bad cellParameter information: parameterType=" + this.cellParameterType + " data=" + this.chars);
this.parent.setFractionalCoordinates (false);
}break;
case 3:
if (name.equals ("scalar")) {
this.state = 2;
if (this.scalarTitle != null) this.checkUnitCellItem (org.jmol.adapter.smarter.AtomSetCollection.notionalUnitcellTags, this.scalarTitle);
 else if (this.scalarDictRef != null) this.checkUnitCellItem (org.jmol.adapter.readers.cifpdb.CifReader.cellParamNames, (this.scalarDictValue.startsWith ("_") ? this.scalarDictValue : "_" + this.scalarDictValue));
}this.setKeepChars (false);
this.scalarTitle = null;
this.scalarDictRef = null;
break;
case 5:
if (name.equals ("transform3")) {
this.setKeepChars (false);
this.state = 4;
}break;
case 18:
var values = org.jmol.adapter.smarter.AtomSetCollectionReader.getTokensFloat (this.chars, null, 3);
this.parent.addPrimitiveLatticeVector (this.latticeVectorPtr, values, 0);
this.latticeVectorPtr = (this.latticeVectorPtr + 1) % 3;
this.setKeepChars (false);
this.state = 0;
break;
case 4:
case 17:
if (name.equals ("symmetry")) this.state = (this.state == 4 ? 2 : 0);
if (this.moduleNestingLevel == 0 && this.parent.iHaveUnitCell && !this.embeddedCrystal) this.applySymmetryAndSetTrajectory ();
break;
case 6:
if (name.equals ("molecule")) {
if (--this.moleculeNesting == 0) {
this.applySymmetryAndSetTrajectory ();
this.atomIdNames = this.atomSetCollection.setAtomNames (this.atomIdNames);
this.state = 0;
} else {
this.state = 6;
}}break;
case 10:
if (name.equals ("bondArray")) {
this.state = 6;
for (var i = 0; i < this.bondCount; ++i) this.atomSetCollection.addBond (this.bondArray[i]);

this.parent.applySymmetryToBonds = true;
}break;
case 7:
if (name.equals ("atomArray")) {
this.state = 6;
for (var i = 0; i < this.atomCount; ++i) this.addAtom (this.atomArray[i]);

}break;
case 11:
if (name.equals ("bond")) {
this.state = 10;
}break;
case 8:
if (name.equals ("atom")) {
this.state = 7;
this.addAtom (this.atom);
this.atom = null;
}break;
case 9:
if (name.equals ("scalar")) {
this.state = 8;
if ("jmol:charge".equals (this.scalarDictRef)) {
this.atom.partialCharge = this.parseFloat (this.chars);
} else if (this.scalarDictRef != null && "_atom_site_label".equals (this.scalarDictValue)) {
if (this.atomIdNames == null) this.atomIdNames =  new java.util.Properties ();
this.atomIdNames.put (this.atom.atomName, this.chars);
}}this.setKeepChars (false);
this.scalarTitle = null;
this.scalarDictRef = null;
break;
case 13:
this.state = 8;
if (this.scalarDictValue.equals ("x3")) this.atom.x = this.parseFloat (this.chars);
 else if (this.scalarDictValue.equals ("y3")) this.atom.y = this.parseFloat (this.chars);
 else if (this.scalarDictValue.equals ("z3")) this.atom.z = this.parseFloat (this.chars);
 else if (this.scalarDictValue.equals ("elementType")) this.atom.elementSymbol = this.chars;
this.setKeepChars (false);
break;
case 14:
this.state = 11;
if (this.scalarDictValue.equals ("atomRef")) {
if (this.tokenCount == 0) this.tokens =  new Array (2);
if (this.tokenCount < 2) this.tokens[this.tokenCount++] = this.chars;
} else if (this.scalarDictValue.equals ("order")) {
var order = this.parseBondToken (this.chars);
if (order > 0 && this.tokenCount == 2) this.addNewBond (this.tokens[0], this.tokens[1], order);
}this.setKeepChars (false);
break;
case 12:
this.state = 6;
break;
}
}, "~S,~S,~S");
Clazz.defineMethod (c$, "checkUnitCellItem", 
($fz = function (tags, value) {
for (var i = tags.length; --i >= 0; ) if (value.equals (tags[i])) {
this.parent.setUnitCellItem (i, this.parseFloat (this.chars));
return ;
}
}, $fz.isPrivate = true, $fz), "~A,~S");
Clazz.defineMethod (c$, "addAtom", 
($fz = function (atom) {
if ((atom.elementSymbol == null && atom.elementNumber < 0) || Float.isNaN (atom.z)) return ;
this.parent.setAtomCoord (atom);
if (this.isSerial) this.atomSetCollection.addAtomWithMappedSerialNumber (atom);
 else this.atomSetCollection.addAtomWithMappedName (atom);
}, $fz.isPrivate = true, $fz), "org.jmol.adapter.smarter.Atom");
Clazz.defineMethod (c$, "parseBondToken", 
function (str) {
var floatOrder = this.parseFloat (str);
if (Float.isNaN (floatOrder) && str.length >= 1) {
str = str.toUpperCase ();
switch (str.charAt (0)) {
case 'S':
return 1;
case 'D':
return 2;
case 'T':
return 3;
case 'A':
return 515;
case 'P':
return 66;
}
return this.parseInt (str);
}if (floatOrder == 1.5) return 515;
if (floatOrder == 2) return 2;
if (floatOrder == 3) return 3;
return 1;
}, "~S");
Clazz.defineMethod (c$, "breakOutTokens", 
function (str) {
var st =  new java.util.StringTokenizer (str);
this.tokenCount = st.countTokens ();
if (this.tokenCount > this.tokens.length) this.tokens =  new Array (this.tokenCount);
for (var i = 0; i < this.tokenCount; ++i) {
try {
this.tokens[i] = st.nextToken ();
} catch (nsee) {
if (Clazz.instanceOf (nsee, java.util.NoSuchElementException)) {
this.tokens[i] = null;
} else {
throw nsee;
}
}
}
}, "~S");
Clazz.defineMethod (c$, "breakOutAtomTokens", 
function (str) {
this.breakOutTokens (str);
this.checkAtomArrayLength (this.tokenCount);
}, "~S");
Clazz.defineMethod (c$, "checkAtomArrayLength", 
function (newAtomCount) {
if (this.atomCount == 0) {
if (newAtomCount > this.atomArray.length) this.atomArray =  new Array (newAtomCount);
for (var i = newAtomCount; --i >= 0; ) this.atomArray[i] =  new org.jmol.adapter.smarter.Atom ();

this.atomCount = newAtomCount;
} else if (newAtomCount != this.atomCount) {
throw  new IndexOutOfBoundsException ("bad atom attribute length");
}}, "~N");
Clazz.defineMethod (c$, "breakOutBondTokens", 
function (str) {
this.breakOutTokens (str);
this.checkBondArrayLength (this.tokenCount);
}, "~S");
Clazz.defineMethod (c$, "checkBondArrayLength", 
function (newBondCount) {
if (this.bondCount == 0) {
if (newBondCount > this.bondArray.length) this.bondArray =  new Array (newBondCount);
for (var i = newBondCount; --i >= 0; ) this.bondArray[i] =  new org.jmol.adapter.smarter.Bond ();

this.bondCount = newBondCount;
} else if (newBondCount != this.bondCount) {
throw  new IndexOutOfBoundsException ("bad bond attribute length");
}}, "~N");
Clazz.defineMethod (c$, "createNewAtomSet", 
($fz = function (atts) {
this.atomSetCollection.newAtomSet ();
var collectionName = null;
if (atts.containsKey ("title")) collectionName = atts.get ("title");
 else if (atts.containsKey ("id")) collectionName = atts.get ("id");
if (collectionName != null) {
this.atomSetCollection.setAtomSetName (collectionName);
}}, $fz.isPrivate = true, $fz), "java.util.Map");
Clazz.defineMethod (c$, "applySymmetryAndSetTrajectory", 
function () {
if (this.moduleNestingLevel > 0 || !this.haveMolecule || this.localSpaceGroupName == null) return ;
this.parent.setSpaceGroupName (this.localSpaceGroupName);
this.parent.iHaveSymmetryOperators = this.iHaveSymmetryOperators;
this.parent.applySymmetryAndSetTrajectory ();
});
Clazz.defineStatics (c$,
"START", 0,
"CML", 1,
"CRYSTAL", 2,
"CRYSTAL_SCALAR", 3,
"CRYSTAL_SYMMETRY", 4,
"CRYSTAL_SYMMETRY_TRANSFORM3", 5,
"MOLECULE", 6,
"MOLECULE_ATOM_ARRAY", 7,
"MOLECULE_ATOM", 8,
"MOLECULE_ATOM_SCALAR", 9,
"MOLECULE_BOND_ARRAY", 10,
"MOLECULE_BOND", 11,
"MOLECULE_FORMULA", 12,
"MOLECULE_ATOM_BUILTIN", 13,
"MOLECULE_BOND_BUILTIN", 14,
"MODULE", 15,
"SYMMETRY", 17,
"LATTICE_VECTOR", 18);
});