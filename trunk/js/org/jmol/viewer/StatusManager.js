Clazz.declarePackage ("org.jmol.viewer");
c$ = Clazz.decorateAsClass (function () {
this.syncingMouse = false;
this.syncingScripts = false;
this.stereoSync = false;
Clazz.instantialize (this, arguments);
}, org.jmol.viewer, "StatusManager");
Clazz.makeConstructor (c$, 
function (viewer) {
}, "org.jmol.viewer.Viewer");
Clazz.defineMethod (c$, "doSync", 
function () {
return false;
});
Clazz.defineMethod (c$, "setSync", 
function (string) {
}, "~S");
Clazz.defineMethod (c$, "setAllowStatusReporting", 
function (value) {
}, "~B");
Clazz.defineMethod (c$, "setCallbackFunction", 
function (key, object) {
}, "~S,~O");
Clazz.defineMethod (c$, "notifyMinimizationStatus", 
function (parameter, integer, parameter2, parameter3, ff) {
}, "~S,Integer,Float,Float,~S");
Clazz.defineMethod (c$, "getSyncMode", 
function () {
return 0;
});
Clazz.defineMethod (c$, "syncSend", 
function (peak, string, i) {
}, "~S,~S,~N");
Clazz.defineMethod (c$, "setStatusFrameChanged", 
function (frameNo, fileNo, modelNo, i, j) {
}, "~N,~N,~N,~N,~N");
Clazz.defineMethod (c$, "setStatusAppletReady", 
function (htmlName, b) {
}, "~S,~B");
Clazz.defineMethod (c$, "setScriptStatus", 
function (strStatus, statusMessage, msWalltime, strErrorMessageUntranslated) {
}, "~S,~S,~N,~S");
Clazz.defineMethod (c$, "setStatusResized", 
function (width, height) {
}, "~N,~N");
Clazz.defineMethod (c$, "setFileLoadStatus", 
function (fullPathName, fileName, modelName, strError, code, doCallback) {
}, "~S,~S,~S,~S,~N,~B");
Clazz.defineMethod (c$, "setJmolCallbackListener", 
function (jmolCallbackListener) {
}, "org.jmol.api.JmolCallbackListener");
Clazz.defineMethod (c$, "setJmolStatusListener", 
function (jmolStatusListener, object) {
}, "org.jmol.api.JmolStatusListener,~O");
Clazz.defineMethod (c$, "setScriptEcho", 
function (strEcho, isScriptQueued) {
}, "~S,~B");
Clazz.defineMethod (c$, "setStatusAtomHovered", 
function (atomIndex, info) {
}, "~N,~S");
Clazz.defineMethod (c$, "setStatusAtomMoved", 
function (bs) {
}, "java.util.BitSet");
Clazz.defineMethod (c$, "getStatusList", 
function () {
return null;
});
Clazz.defineMethod (c$, "setSyncDriver", 
function (mode) {
}, "~N");
Clazz.defineMethod (c$, "setStatusClicked", 
function (x, i, action, clickCount, mode) {
return 0;
}, "~N,~N,~N,~N,~N");
Clazz.defineMethod (c$, "clearConsole", 
function () {
});
Clazz.defineMethod (c$, "createImage", 
function (fileName, type, textOrBytes, quality) {
return null;
}, "~S,~S,~O,~N");
Clazz.defineMethod (c$, "dialogAsk", 
function (type, fileName) {
return null;
}, "~S,~S");
Clazz.defineMethod (c$, "functionXY", 
function (functionName, nX, nY) {
return null;
}, "~S,~N,~N");
Clazz.defineMethod (c$, "functionXYZ", 
function (functionName, nX, nY, nZ) {
return null;
}, "~S,~N,~N,~N");
Clazz.defineMethod (c$, "getJspecViewProperties", 
function (string) {
return null;
}, "~S");
Clazz.defineMethod (c$, "showUrl", 
function (urlString) {
}, "~S");
Clazz.defineMethod (c$, "setStatusObjectHovered", 
function (id, info, pt) {
}, "~S,~S,javax.vecmath.Point3f");
Clazz.defineMethod (c$, "setStatusMeasuring", 
function (status, intInfo, strMeasure, value) {
}, "~S,~N,~S,~N");
Clazz.defineMethod (c$, "setStatusAtomPicked", 
function (atomIndex, info) {
}, "~N,~S");
Clazz.defineMethod (c$, "notifyError", 
function (errType, errMsg, errMsgUntranslated) {
}, "~S,~S,~S");
Clazz.defineMethod (c$, "getStatusChanged", 
function (statusNameList) {
return null;
}, "~S");
Clazz.defineMethod (c$, "getMessageQueue", 
function () {
return null;
});
Clazz.defineMethod (c$, "getRegistryInfo", 
function () {
return null;
});
Clazz.defineMethod (c$, "jsEval", 
function (strEval) {
return null;
}, "~S");
Clazz.defineStatics (c$,
"SYNC_OFF", 0,
"SYNC_DRIVER", 1,
"SYNC_SLAVE", 2,
"SYNC_DISABLE", 3,
"SYNC_ENABLE", 4,
"SYNC_STEREO", 5);
