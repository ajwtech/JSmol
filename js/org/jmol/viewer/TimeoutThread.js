Clazz.declarePackage ("org.jmol.viewer");
Clazz.load (["java.lang.Thread"], "org.jmol.viewer.TimeoutThread", ["org.jmol.util.Logger"], function () {
c$ = Clazz.decorateAsClass (function () {
this.$name = null;
this.ms = 0;
this.targetTime = 0;
this.status = 0;
this.script = null;
this.triggered = true;
this.viewer = null;
Clazz.instantialize (this, arguments);
}, org.jmol.viewer, "TimeoutThread", Thread);
Clazz.makeConstructor (c$, 
function (viewer, name, ms, script) {
Clazz.superConstructor (this, org.jmol.viewer.TimeoutThread, []);
this.viewer = viewer;
this.$name = name;
this.set (ms, script);
}, "org.jmol.viewer.Viewer,~S,~N,~S");
Clazz.defineMethod (c$, "set", 
function (ms, script) {
this.ms = ms;
this.targetTime = System.currentTimeMillis () + Math.abs (ms);
if (script != null) this.script = script;
}, "~N,~S");
Clazz.defineMethod (c$, "trigger", 
function () {
this.triggered = (this.ms < 0);
});
Clazz.overrideMethod (c$, "toString", 
function () {
return "timeout name=" + this.$name + " executions=" + this.status + " mSec=" + this.ms + " secRemaining=" + (this.targetTime - System.currentTimeMillis ()) / 1000 + " script=" + this.script + " thread=" + Thread.currentThread ().getName ();
});
Clazz.overrideMethod (c$, "run", 
function () {
if (this.script == null || this.script.length == 0 || this.ms == 0) return ;
Thread.currentThread ().setName ("timeout " + this.$name);
Thread.currentThread ().setPriority (1);
try {
while (true) {
Thread.sleep (26);
if (this.targetTime > System.currentTimeMillis ()) continue ;this.status++;
var looping = (this.ms < 0);
this.targetTime += Math.abs (this.ms);
if (this.viewer.timeouts.get (this.$name) == null) break;
if (!looping) this.viewer.timeouts.remove (this.$name);
if (this.triggered) {
this.triggered = false;
this.viewer.evalStringQuiet ((looping ? this.script + ";\ntimeout ID \"" + this.$name + "\";" : this.script));
} else {
}if (!looping) break;
}
} catch (e$$) {
if (Clazz.instanceOf (e$$, InterruptedException)) {
var ie = e$$;
{
}
} else if (Clazz.instanceOf (e$$, Exception)) {
var ie = e$$;
{
org.jmol.util.Logger.info ("Timeout " + this.$name + " Exception: " + ie);
}
} else {
throw e$$;
}
}
this.viewer.timeouts.remove (this.$name);
});
});
