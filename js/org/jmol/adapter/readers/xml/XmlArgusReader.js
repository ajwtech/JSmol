﻿Clazz.declarePackage ("org.jmol.adapter.readers.xml");
Clazz.load (["org.jmol.adapter.readers.xml.XmlReader"], "org.jmol.adapter.readers.xml.XmlArgusReader", ["java.lang.Float", "org.jmol.adapter.smarter.Atom"], function () {
c$ = Clazz.decorateAsClass (function () {
this.atomName1 = null;
this.atomName2 = null;
this.bondOrder = 0;
this.elementContext = 0;
this.trans = null;
this.ptTrans = 0;
Clazz.instantialize (this, arguments);
}, org.jmol.adapter.readers.xml, "XmlArgusReader", org.jmol.adapter.readers.xml.XmlReader);
Clazz.makeConstructor (c$, 
function () {
Clazz.superConstructor (this, org.jmol.adapter.readers.xml.XmlArgusReader, []);
});
Clazz.overrideMethod (c$, "getImplementedAttributes", 
function () {
return ["order"];
});
Clazz.overrideMethod (c$, "processStartElement", 
function (namespaceURI, localName, qName, atts) {
for (var i = org.jmol.adapter.readers.xml.XmlArgusReader.keepCharsList.length; --i >= 0; ) if (org.jmol.adapter.readers.xml.XmlArgusReader.keepCharsList[i].equals (localName)) {
this.setKeepChars (true);
break;
}
if ("molecule".equals (localName)) {
this.atomSetCollection.newAtomSet ();
return ;
}if ("atom".equals (localName)) {
this.elementContext = 2;
this.atom =  new org.jmol.adapter.smarter.Atom ();
return ;
}if ("bond".equals (localName)) {
this.elementContext = 3;
this.atomName1 = null;
this.atomName2 = null;
this.bondOrder = this.parseBondToken (atts.get ("order"));
return ;
}if ("transformmat".equals (localName)) {
this.elementContext = 4;
this.trans =  Clazz.newArray (16, 0);
return ;
}}, "~S,~S,~S,java.util.Map");
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
}
return this.parseInt (str);
}if (floatOrder == 1.5) return 515;
if (floatOrder == 2) return 2;
if (floatOrder == 3) return 3;
return 1;
}, "~S");
Clazz.overrideMethod (c$, "processEndElement", 
function (uri, localName, qName) {
if (this.chars != null && this.chars.length > 0 && (this.chars.charAt (this.chars.length - 1)).charCodeAt (0) == ('\n').charCodeAt (0)) this.chars = this.chars.substring (0, this.chars.length - 1);
if ("molecule".equals (localName)) {
this.elementContext = 0;
return ;
}if ("atom".equals (localName)) {
if (this.atom.elementSymbol != null && !Float.isNaN (this.atom.z)) {
this.parent.setAtomCoord (this.atom);
this.atomSetCollection.addAtomWithMappedName (this.atom);
}this.atom = null;
this.elementContext = 0;
return ;
}if ("bond".equals (localName)) {
if (this.atomName2 != null) this.atomSetCollection.addNewBond (this.atomName1, this.atomName2, this.bondOrder);
this.elementContext = 0;
return ;
}if ("transformmat".equals (localName)) {
this.elementContext = 0;
this.parent.setTransform (this.trans[0], this.trans[1], this.trans[2], this.trans[4], this.trans[5], this.trans[6], this.trans[8], this.trans[9], this.trans[10]);
return ;
}if (this.elementContext == 1) {
if ("name".equals (localName)) {
this.atomSetCollection.setAtomSetName (this.chars);
this.setKeepChars (false);
}return ;
}if (this.atom != null && this.elementContext == 2) {
if ("x".equals (localName)) {
this.atom.x = this.parseFloat (this.chars);
} else if ("y".equals (localName)) {
this.atom.y = this.parseFloat (this.chars);
return ;
} else if ("z".equals (localName)) {
this.atom.z = this.parseFloat (this.chars);
return ;
} else if ("atsym".equals (localName)) {
this.atom.elementSymbol = this.chars;
return ;
} else if ("formalchg".equals (localName)) {
this.atom.formalCharge = this.parseInt (this.chars);
} else if ("atomkey".equals (localName)) {
this.atom.atomName = this.chars;
}this.setKeepChars (false);
return ;
}if (this.elementContext == 3) {
if ("atomkey".equals (localName)) {
if (this.atomName1 == null) this.atomName1 = this.chars;
 else this.atomName2 = this.chars;
this.setKeepChars (false);
}return ;
}if (this.elementContext == 4) {
this.trans[this.ptTrans++] = this.parseFloat (this.chars);
this.setKeepChars (false);
return ;
}}, "~S,~S,~S");
Clazz.defineStatics (c$,
"keepCharsList", ["name", "x", "y", "z", "formalchg", "atomkey", "atsym", "e00", "e01", "e02", "e03", "e10", "e11", "e12", "e13", "e20", "e21", "e22", "e23", "e30", "e31", "e32", "e33"],
"UNSET", 0,
"MOLECULE", 1,
"ATOM", 2,
"BOND", 3,
"TRANSFORMMAT", 4);
});
