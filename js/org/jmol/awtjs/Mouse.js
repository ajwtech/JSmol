Clazz.declarePackage ("org.jmol.awtjs");
Clazz.load (["org.jmol.api.JmolMouseInterface"], "org.jmol.awtjs.Mouse", null, function () {
c$ = Clazz.decorateAsClass (function () {
this.viewer = null;
this.actionManager = null;
Clazz.instantialize (this, arguments);
}, org.jmol.awtjs, "Mouse", null, org.jmol.api.JmolMouseInterface);
Clazz.makeConstructor (c$, 
function (viewer, actionManager) {
this.viewer = viewer;
this.actionManager = actionManager;
}, "org.jmol.viewer.Viewer,org.jmol.viewer.ActionManager");
Clazz.overrideMethod (c$, "clear", 
function () {
});
Clazz.overrideMethod (c$, "dispose", 
function () {
this.actionManager.dispose ();
});
Clazz.overrideMethod (c$, "handleOldJvm10Event", 
function (id, x, y, modifiers, time) {
return false;
}, "~N,~N,~N,~N,~N");
});
