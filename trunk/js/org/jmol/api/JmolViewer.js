Clazz.declarePackage ("org.jmol.api");
Clazz.load (["org.jmol.api.JmolSimpleViewer"], "org.jmol.api.JmolViewer", null, function () {
c$ = Clazz.decorateAsClass (function () {
this.menuStructure = null;
Clazz.instantialize (this, arguments);
}, org.jmol.api, "JmolViewer", org.jmol.api.JmolSimpleViewer);
c$.allocateViewer = Clazz.defineMethod (c$, "allocateViewer", 
function (container, jmolAdapter, htmlName, documentBase, codeBase, commandOptions, statusListener, implementedPlatform) {
return org.jmol.viewer.Viewer.allocateViewer (container, jmolAdapter, htmlName, documentBase, codeBase, commandOptions, statusListener, implementedPlatform);
}, "~O,org.jmol.api.JmolAdapter,~S,java.net.URL,java.net.URL,~S,org.jmol.api.JmolStatusListener,org.jmol.api.ApiPlatform");
c$.allocateViewer = Clazz.defineMethod (c$, "allocateViewer", 
function (container, jmolAdapter, htmlName, documentBase, codeBase, commandOptions, statusListener) {
return org.jmol.viewer.Viewer.allocateViewer (container, jmolAdapter, htmlName, documentBase, codeBase, commandOptions, statusListener, null);
}, "~O,org.jmol.api.JmolAdapter,~S,java.net.URL,java.net.URL,~S,org.jmol.api.JmolStatusListener");
c$.allocateViewer = Clazz.defineMethod (c$, "allocateViewer", 
function (container, jmolAdapter) {
return org.jmol.viewer.Viewer.allocateViewer (container, jmolAdapter, null, null, null, null, null, null);
}, "~O,org.jmol.api.JmolAdapter");
Clazz.defineMethod (c$, "setConsole", 
function (console) {
this.getProperty ("DATA_API", "getAppConsole", console);
}, "org.jmol.api.JmolAppConsoleInterface");
c$.getJmolVersion = Clazz.defineMethod (c$, "getJmolVersion", 
function () {
return org.jmol.viewer.Viewer.getJmolVersion ();
});
c$.checkOption = Clazz.defineMethod (c$, "checkOption", 
function (viewer, option) {
var testFlag = viewer.getParameter (option);
return (Clazz.instanceOf (testFlag, Boolean) && (testFlag).booleanValue () || Clazz.instanceOf (testFlag, Integer) && (testFlag).intValue () != 0);
}, "org.jmol.api.JmolViewer,~S");
Clazz.defineMethod (c$, "getBooleanProperty", 
function (key, doICare) {
return this.getBooleanProperty (key);
}, "~S,~B");
Clazz.defineMethod (c$, "mouseEvent", 
function (id, x, y, modifiers, when) {
this.handleOldJvm10Event (id, x, y, modifiers, when);
}, "~N,~N,~N,~N,~N");
Clazz.defineMethod (c$, "renderScreenImage", 
function (g, currentSize, rectClip) {
this.apiPlatform.renderScreenImage (this, g, currentSize);
}, "~O,~O,~O");
Clazz.defineMethod (c$, "getJsObjectInfo", 
function (jsObject, method, args) {
return this.apiPlatform.getJsObjectInfo (jsObject, method, args);
}, "~O,~S,~A");
c$.getJmolValueAsString = Clazz.defineMethod (c$, "getJmolValueAsString", 
function (jmolViewer, $var) {
return (jmolViewer == null ? "" : "" + jmolViewer.getParameter ($var));
}, "org.jmol.api.JmolViewer,~S");
});
