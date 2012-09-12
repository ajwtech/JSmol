Clazz.declarePackage ("org.jmol.script");
Clazz.load (["org.jmol.script.ScriptFunction", "java.util.ArrayList"], "org.jmol.script.ParallelProcessor", ["java.util.concurrent.Executors", "org.jmol.util.Logger", "org.jmol.viewer.ShapeManager", "$.Viewer"], function () {
c$ = Clazz.decorateAsClass (function () {
this.viewer = null;
this.counter = 0;
this.error = null;
this.lock = null;
this.processes = null;
if (!Clazz.isClassDefined ("org.jmol.script.ParallelProcessor.RunProcess")) {
org.jmol.script.ParallelProcessor.$ParallelProcessor$RunProcess$ ();
}
Clazz.instantialize (this, arguments);
}, org.jmol.script, "ParallelProcessor", org.jmol.script.ScriptFunction);
Clazz.prepareFields (c$, function () {
this.lock =  new JavaObject ();
this.processes =  new java.util.ArrayList ();
});
c$.getExecutor = Clazz.defineMethod (c$, "getExecutor", 
function () {
return java.util.concurrent.Executors.newCachedThreadPool ();
});
Clazz.defineMethod (c$, "runAllProcesses", 
function (viewer, inParallel) {
if (this.processes.size () == 0) return ;
this.viewer = viewer;
inParallel = new Boolean (inParallel & (!viewer.isParallel () && viewer.setParallel (true))).valueOf ();
var vShapeManagers =  new java.util.ArrayList ();
this.error = null;
this.counter = 0;
if (org.jmol.util.Logger.debugging) org.jmol.util.Logger.debug ("running " + this.processes.size () + " processes on " + org.jmol.viewer.Viewer.nProcessors + " processesors inParallel=" + inParallel);
this.counter = this.processes.size ();
for (var i = this.processes.size (); --i >= 0; ) {
var shapeManager = null;
if (inParallel) {
shapeManager =  new org.jmol.viewer.ShapeManager (viewer, viewer.getModelSet ());
vShapeManagers.add (shapeManager);
}this.runProcess (this.processes.remove (0), shapeManager);
}
{
while (this.counter > 0) {
try {
this.lock.wait ();
} catch (e) {
if (Clazz.exceptionOf (e, InterruptedException)) {
} else {
throw e;
}
}
if (this.error != null) throw this.error;
}
}this.mergeResults (vShapeManagers);
viewer.setParallel (false);
}, "org.jmol.viewer.Viewer,~B");
Clazz.defineMethod (c$, "mergeResults", 
function (vShapeManagers) {
try {
for (var i = 0; i < vShapeManagers.size (); i++) this.viewer.mergeShapes (vShapeManagers.get (i).getShapes ());

} catch (e) {
if (Clazz.exceptionOf (e, Error)) {
throw e;
} else {
throw e;
}
} finally {
this.counter = -1;
vShapeManagers = null;
}
}, "java.util.List");
Clazz.defineMethod (c$, "clearShapeManager", 
function (er) {
{
this.error = er;
this.notifyAll ();
}}, "Error");
Clazz.defineMethod (c$, "addProcess", 
function (name, context) {
this.processes.add ( new org.jmol.script.ParallelProcessor.Process (name, context));
}, "~S,org.jmol.script.ScriptContext");
Clazz.defineMethod (c$, "runProcess", 
($fz = function (process, shapeManager) {
var r = Clazz.innerTypeInstance (org.jmol.script.ParallelProcessor.RunProcess, this, null, process, this.lock, shapeManager);
var exec = (shapeManager == null ? null : this.viewer.getExecutor ());
if (exec != null) {
exec.execute (r);
} else {
r.run ();
}}, $fz.isPrivate = true, $fz), "org.jmol.script.ParallelProcessor.Process,org.jmol.viewer.ShapeManager");
c$.$ParallelProcessor$RunProcess$ = function () {
Clazz.pu$h ();
c$ = Clazz.decorateAsClass (function () {
Clazz.prepareCallback (this, arguments);
this.process = null;
this.processLock = null;
this.shapeManager = null;
Clazz.instantialize (this, arguments);
}, org.jmol.script.ParallelProcessor, "RunProcess", null, Runnable);
Clazz.makeConstructor (c$, 
function (a, b, c) {
this.process = a;
this.processLock = b;
this.shapeManager = c;
}, "org.jmol.script.ParallelProcessor.Process,~O,org.jmol.viewer.ShapeManager");
Clazz.overrideMethod (c$, "run", 
function () {
try {
if (this.b$["org.jmol.script.ParallelProcessor"].error == null) {
if (org.jmol.util.Logger.debugging) org.jmol.util.Logger.debug ("Running process " + this.process.processName + " " + this.process.context.pc + " - " + (this.process.context.pcEnd - 1));
this.b$["org.jmol.script.ParallelProcessor"].viewer.eval (this.process.context, this.shapeManager);
if (org.jmol.util.Logger.debugging) org.jmol.util.Logger.debug ("Process " + this.process.processName + " complete");
}} catch (e$$) {
if (Clazz.exceptionOf (e$$, Exception)) {
var e = e$$;
{
if (this.b$["org.jmol.script.ParallelProcessor"].tok != 364558) e.printStackTrace ();
}
} else if (Clazz.exceptionOf (e$$, Error)) {
var er = e$$;
{
this.b$["org.jmol.script.ParallelProcessor"].clearShapeManager (er);
}
} else {
throw e$$;
}
} finally {
{
--this.b$["org.jmol.script.ParallelProcessor"].counter;
this.processLock.notifyAll ();
}}
});
c$ = Clazz.p0p ();
};
Clazz.pu$h ();
c$ = Clazz.decorateAsClass (function () {
this.processName = null;
this.context = null;
Clazz.instantialize (this, arguments);
}, org.jmol.script.ParallelProcessor, "Process");
Clazz.makeConstructor (c$, 
function (a, b) {
this.processName = a;
this.context = b;
}, "~S,org.jmol.script.ScriptContext");
c$ = Clazz.p0p ();
});
