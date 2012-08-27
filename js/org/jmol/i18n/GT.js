Clazz.declarePackage ("org.jmol.i18n");
c$ = Clazz.declareType (org.jmol.i18n, "GT");
Clazz.makeConstructor (c$, 
function (value) {
}, "~S");
c$.getLanguage = Clazz.defineMethod (c$, "getLanguage", 
function () {
return "en_US";
});
c$._ = Clazz.defineMethod (c$, "_", 
function (string, abs) {
return null;
}, "~S,~N");
c$.getDoTranslate = Clazz.defineMethod (c$, "getDoTranslate", 
function () {
return false;
});
c$.setDoTranslate = Clazz.defineMethod (c$, "setDoTranslate", 
function (b) {
}, "~B");
c$._ = Clazz.defineMethod (c$, "_", 
function (string) {
return string;
}, "~S");
c$._ = Clazz.defineMethod (c$, "_", 
function (string, localName) {
return string;
}, "~S,~S");
c$._ = Clazz.defineMethod (c$, "_", 
function (string, objects) {
return string;
}, "~S,~A");
