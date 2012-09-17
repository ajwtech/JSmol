Clazz.declarePackage ("org.jsmol.test");
Clazz.load (null, "org.jsmol.test.Test_bool", ["java.lang.Boolean", "java.util.Hashtable"], function () {
c$ = Clazz.declareType (org.jsmol.test, "Test_bool");
c$.main = Clazz.defineMethod (c$, "main", 
function (args) {
 new org.jsmol.test.Test_bool ();
}, "~A");
Clazz.makeConstructor (c$, 
function () {
var bTrue = Boolean.TRUE;
var bFalse = Boolean.FALSE;
System.out.println ("bTrue.booleanValue() is " + bTrue.booleanValue ());
System.out.println ("bFalse.booleanValue() is " + bFalse.booleanValue ());
var ht =  new java.util.Hashtable ();
ht.put ("True", bTrue);
ht.put ("False", bFalse);
System.out.println ("bTrue in ht is " + ht.get ("True"));
System.out.println ("bTrue.booleanValue() in ht is " + (ht.get ("True")).booleanValue ());
System.out.println ("bFalse in ht is " + ht.get ("False"));
System.out.println ("bFalse.booleanValue() in ht is " + (ht.get ("False")).booleanValue ());
});
});
