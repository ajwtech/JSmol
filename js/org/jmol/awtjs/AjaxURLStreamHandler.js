Clazz.declarePackage ("org.jmol.awtjs");
Clazz.load (["java.net.URLStreamHandler"], "org.jmol.awtjs.AjaxURLStreamHandler", null, function () {
c$ = Clazz.decorateAsClass (function () {
this.protocol = null;
Clazz.instantialize (this, arguments);
}, org.jmol.awtjs, "AjaxURLStreamHandler", java.net.URLStreamHandler);
Clazz.makeConstructor (c$, 
function (protocol) {
Clazz.superConstructor (this, org.jmol.awtjs.AjaxURLStreamHandler, []);
this.protocol = protocol;
}, "~S");
Clazz.defineMethod (c$, "openConnection", 
function (url) {
return null;
}, "java.net.URL");
});
