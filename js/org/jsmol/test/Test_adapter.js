Clazz.declarePackage ("org.jsmol.test");
Clazz.load (null, "org.jsmol.test.Test_adapter", ["java.io.BufferedReader", "$.StringReader", "java.util.Hashtable", "org.jmol.adapter.smarter.SmarterJmolAdapter", "org.jmol.util.Logger"], function () {
c$ = Clazz.declareType (org.jsmol.test, "Test_adapter");
c$.main = Clazz.defineMethod (c$, "main", 
function (args) {
org.jmol.util.Logger.setLogLevel (5);
var test =  new org.jsmol.test.Test_adapter ();
}, "~A");
c$.getBufferedReaderForString = Clazz.defineMethod (c$, "getBufferedReaderForString", 
function (string) {
return  new java.io.BufferedReader ( new java.io.StringReader (string));
}, "~S");
Clazz.makeConstructor (c$, 
function () {
($t$ = org.jsmol.test.Test_adapter.adapter =  new org.jmol.adapter.smarter.SmarterJmolAdapter (), org.jsmol.test.Test_adapter.prototype.adapter = org.jsmol.test.Test_adapter.adapter, $t$);
var reader = org.jsmol.test.Test_adapter.getBufferedReaderForString ("3\nwater\nO  0.0 0.0 0.0\nH  0.76923955 -0.59357141 0.0\nH -0.76923955 -0.59357141 0.0\n");
var htParams =  new java.util.Hashtable ();
var ret = org.jsmol.test.Test_adapter.adapter.getAtomSetCollectionReader ("string", null, reader, htParams);
if (!(Clazz.instanceOf (ret, String))) ret = org.jsmol.test.Test_adapter.adapter.getAtomSetCollection (ret);
if (!(Clazz.instanceOf (ret, String))) ($t$ = org.jsmol.test.Test_adapter.atomSetCollection = ret, org.jsmol.test.Test_adapter.prototype.atomSetCollection = org.jsmol.test.Test_adapter.atomSetCollection, $t$);
var commandOptions = "-ionj \"load 1crn.pdb\"";
if (Clazz.instanceOf (ret, String)) System.out.println (ret);
 else System.out.println ("testing atomCount=" + org.jsmol.test.Test_adapter.atomSetCollection.getAtomCount ());
});
Clazz.defineStatics (c$,
"atomSetCollection", null,
"strXyzHOH", "3\nwater\nO  0.0 0.0 0.0\nH  0.76923955 -0.59357141 0.0\nH -0.76923955 -0.59357141 0.0\n",
"adapter", null);
});
