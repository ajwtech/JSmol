Clazz.declarePackage ("javax.vecmath");
Clazz.load (null, "javax.vecmath.VecMathUtil", ["java.lang.Double", "$.Float"], function () {
c$ = Clazz.declareType (javax.vecmath, "VecMathUtil");
c$.floatToIntBits = Clazz.defineMethod (c$, "floatToIntBits", 
function (f) {
if (f == 0.0) {
return 0;
} else {
return Float.floatToIntBits (f);
}}, "~N");
c$.doubleToLongBits = Clazz.defineMethod (c$, "doubleToLongBits", 
function (d) {
if (d == 0.0) {
return 0;
} else {
return Double.doubleToLongBits (d);
}}, "~N");
});
