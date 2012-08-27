Clazz.declarePackage ("org.jmol.api");
c$ = Clazz.decorateAsClass (function () {
this.apiPlatform = null;
Clazz.instantialize (this, arguments);
}, org.jmol.api, "JmolSimpleViewer");
c$.allocateSimpleViewer = Clazz.defineMethod (c$, "allocateSimpleViewer", 
function (container, jmolAdapter) {
return org.jmol.viewer.Viewer.allocateViewer (container, jmolAdapter, null, null, null, null, null, null);
}, "~O,org.jmol.api.JmolAdapter");
