Clazz.declarePackage ("org.jmol.i18n");
Clazz.load (null, "org.jmol.i18n.GT", ["java.text.MessageFormat"], function () {
c$ = Clazz.declareType (org.jmol.i18n, "GT");
Clazz.makeConstructor (c$, 
function (la) {
}, "~S");
Clazz.makeConstructor (c$, 
($fz = function () {
}, $fz.isPrivate = true, $fz));
c$.getLanguage = Clazz.defineMethod (c$, "getLanguage", 
function () {
return "en_US";
});
c$.ignoreApplicationBundle = Clazz.defineMethod (c$, "ignoreApplicationBundle", 
function () {
});
c$.setDoTranslate = Clazz.defineMethod (c$, "setDoTranslate", 
function (TF) {
}, "~B");
c$.getDoTranslate = Clazz.defineMethod (c$, "getDoTranslate", 
function () {
return false;
});
c$._ = Clazz.defineMethod (c$, "_", 
function (string) {
return string;
}, "~S");
c$.getTextWrapper = Clazz.defineMethod (c$, "getTextWrapper", 
($fz = function () {
return (org.jmol.i18n.GT.$getTextWrapper == null ? ($t$ = org.jmol.i18n.GT.$getTextWrapper =  new org.jmol.i18n.GT (), org.jmol.i18n.GT.prototype.$getTextWrapper = org.jmol.i18n.GT.$getTextWrapper, $t$) : org.jmol.i18n.GT.$getTextWrapper);
}, $fz.isPrivate = true, $fz));
c$._ = Clazz.defineMethod (c$, "_", 
function (string, item) {
return org.jmol.i18n.GT.getTextWrapper ().getString (string, [item]);
}, "~S,~S");
c$._ = Clazz.defineMethod (c$, "_", 
function (string, item) {
return org.jmol.i18n.GT.getTextWrapper ().getString (string, [Integer.$valueOf (item)]);
}, "~S,~N");
c$._ = Clazz.defineMethod (c$, "_", 
function (string, objects) {
return org.jmol.i18n.GT.getTextWrapper ().getString (string, objects);
}, "~S,~A");
c$._ = Clazz.defineMethod (c$, "_", 
function (string, t) {
return org.jmol.i18n.GT._ (string, Clazz.castNullAs ("Array"), t);
}, "~S,~B");
c$._ = Clazz.defineMethod (c$, "_", 
function (string, item, t) {
return org.jmol.i18n.GT._ (string, [item]);
}, "~S,~S,~B");
c$._ = Clazz.defineMethod (c$, "_", 
function (string, item, t) {
return org.jmol.i18n.GT._ (string, [Integer.$valueOf (item)]);
}, "~S,~N,~B");
c$._ = Clazz.defineMethod (c$, "_", 
function (string, objects, t) {
var str = (objects == null ? org.jmol.i18n.GT._ (string) : org.jmol.i18n.GT._ (string, objects));
return str;
}, "~S,~A,~B");
Clazz.defineMethod (c$, "getString", 
($fz = function (string, objects) {
return java.text.MessageFormat.format (string, objects);
}, $fz.isPrivate = true, $fz), "~S,~A");
Clazz.defineStatics (c$,
"$getTextWrapper", null);
});
