Clazz.declarePackage ("javax.vecmath");
Clazz.load (null, "javax.vecmath.VecMathI18N", ["java.util.ResourceBundle"], function () {
c$ = Clazz.declareType (javax.vecmath, "VecMathI18N");
c$.getString = Clazz.defineMethod (c$, "getString", 
function (key) {
var s;
try {
s = java.util.ResourceBundle.getBundle ("javax.vecmath.ExceptionStrings").getString (key);
} catch (e) {
if (Clazz.exceptionOf (e, java.util.MissingResourceException)) {
System.err.println ("VecMathI18N: Error looking up: " + key);
s = key;
} else {
throw e;
}
}
return s;
}, "~S");
});
