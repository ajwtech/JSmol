Clazz.declarePackage ("org.jsmol.test");
Clazz.load (null, "org.jsmol.test.Test", ["java.io.BufferedReader", "$.StringReader", "java.util.Hashtable", "org.jmol.adapter.smarter.SmarterJmolAdapter", "org.jmol.viewer.Viewer"], function () {
c$ = Clazz.decorateAsClass (function () {
this.viewer = null;
Clazz.instantialize (this, arguments);
}, org.jsmol.test, "Test");
c$.main = Clazz.defineMethod (c$, "main", 
function (args) {
var test =  new org.jsmol.test.Test ();
}, "~A");
c$.getBufferedReaderForString = Clazz.defineMethod (c$, "getBufferedReaderForString", 
function (string) {
return  new java.io.BufferedReader ( new java.io.StringReader (string));
}, "~S");
Clazz.makeConstructor (c$, 
function () {
($t$ = org.jsmol.test.Test.adapter =  new org.jmol.adapter.smarter.SmarterJmolAdapter (), org.jsmol.test.Test.prototype.adapter = org.jsmol.test.Test.adapter, $t$);
var reader = org.jsmol.test.Test.getBufferedReaderForString ("3\nwater\nO  0.0 0.0 0.0\nH  0.76923955 -0.59357141 0.0\nH -0.76923955 -0.59357141 0.0\n");
var htParams =  new java.util.Hashtable ();
var ret = org.jsmol.test.Test.adapter.getAtomSetCollectionReader ("string", null, reader, htParams);
if (!(Clazz.instanceOf (ret, String))) ret = org.jsmol.test.Test.adapter.getAtomSetCollection (ret);
if (!(Clazz.instanceOf (ret, String))) ($t$ = org.jsmol.test.Test.atomSetCollection = ret, org.jsmol.test.Test.prototype.atomSetCollection = org.jsmol.test.Test.atomSetCollection, $t$);
var commandOptions = "-ionj \"load 1crn.pdb\"";
this.viewer = org.jmol.viewer.Viewer.allocateViewer (null, org.jsmol.test.Test.adapter, null, null, null, commandOptions, null);
if (Clazz.instanceOf (ret, String)) System.out.println (ret);
 else System.out.println ("testing atomCount=" + org.jsmol.test.Test.atomSetCollection.getAtomCount ());
});
Clazz.defineStatics (c$,
"atomSetCollection", null,
"adapter", null,
"strXyzHOH", "3\nwater\nO  0.0 0.0 0.0\nH  0.76923955 -0.59357141 0.0\nH -0.76923955 -0.59357141 0.0\n");
});
