Clazz.declarePackage ("org.jmol.viewer");
Clazz.load (["java.util.ArrayList"], "org.jmol.viewer.ScriptManager", ["java.lang.Boolean", "$.Thread", "org.jmol.util.Logger", "$.TextFormat"], function () {
c$ = Clazz.decorateAsClass (function () {
this.viewer = null;
this.queueThreads = null;
this.scriptQueueRunning = null;
this.scriptQueue = null;
this.commandWatcherThread = null;
if (!Clazz.isClassDefined ("org.jmol.viewer.ScriptManager.ScriptQueueRunnable")) {
org.jmol.viewer.ScriptManager.$ScriptManager$ScriptQueueRunnable$ ();
}
this.useCommandWatcherThread = false;
if (!Clazz.isClassDefined ("org.jmol.viewer.ScriptManager.CommandWatcher")) {
org.jmol.viewer.ScriptManager.$ScriptManager$CommandWatcher$ ();
}
Clazz.instantialize (this, arguments);
}, org.jmol.viewer, "ScriptManager");
Clazz.prepareFields (c$, function () {
this.queueThreads =  new Array (2);
this.scriptQueueRunning =  Clazz.newArray (2, false);
this.scriptQueue =  new java.util.ArrayList ();
});
Clazz.makeConstructor (c$, 
function (viewer) {
this.viewer = viewer;
}, "org.jmol.viewer.Viewer");
Clazz.defineMethod (c$, "clear", 
function () {
this.startCommandWatcher (false);
});
Clazz.defineMethod (c$, "addScript", 
function (strScript) {
return this.addScript ("string", strScript, "", false, false);
}, "~S");
Clazz.defineMethod (c$, "addScript", 
function (strScript, isScriptFile, isQuiet) {
return this.addScript ("String", strScript, "", isScriptFile, isQuiet);
}, "~S,~B,~B");
Clazz.defineMethod (c$, "addScript", 
function (returnType, strScript, statusList, isScriptFile, isQuiet) {
if (!this.viewer.usingScriptQueue ()) {
this.clearQueue ();
this.viewer.haltScriptExecution ();
}if (this.commandWatcherThread == null && this.useCommandWatcherThread) this.startCommandWatcher (true);
if (this.commandWatcherThread != null && strScript.indexOf ("/*SPLIT*/") >= 0) {
var scripts = org.jmol.util.TextFormat.splitChars (strScript, "/*SPLIT*/");
for (var i = 0; i < scripts.length; i++) this.addScript (returnType, scripts[i], statusList, isScriptFile, isQuiet);

return "split into " + scripts.length + " sections for processing";
}var useCommandThread = (this.commandWatcherThread != null && (strScript.indexOf ("javascript") < 0 || strScript.indexOf ("#javascript ") >= 0));
var scriptItem =  new java.util.ArrayList ();
scriptItem.add (strScript);
scriptItem.add (statusList);
scriptItem.add (returnType);
scriptItem.add (isScriptFile ? Boolean.TRUE : Boolean.FALSE);
scriptItem.add (isQuiet ? Boolean.TRUE : Boolean.FALSE);
scriptItem.add (Integer.$valueOf (useCommandThread ? -1 : 1));
this.scriptQueue.add (scriptItem);
this.startScriptQueue (false);
return "pending";
}, "~S,~S,~S,~B,~B");
Clazz.defineMethod (c$, "getScriptCount", 
function () {
return this.scriptQueue.size ();
});
Clazz.defineMethod (c$, "clearQueue", 
function () {
this.scriptQueue.clear ();
});
Clazz.defineMethod (c$, "waitForQueue", 
function () {
var n = 0;
while (this.queueThreads[0] != null || this.queueThreads[1] != null) {
try {
Thread.sleep (100);
if (((n++) % 10) == 0) if (org.jmol.util.Logger.debugging) {
org.jmol.util.Logger.info ("...scriptManager waiting for queue: " + this.scriptQueue.size () + " thread=" + Thread.currentThread ().getName ());
}} catch (e) {
if (Clazz.exceptionOf (e, InterruptedException)) {
} else {
throw e;
}
}
}
});
Clazz.defineMethod (c$, "flushQueue", 
function (command) {
for (var i = this.scriptQueue.size (); --i >= 0; ) {
var strScript = (this.scriptQueue.get (i).get (0));
if (strScript.indexOf (command) == 0) {
this.scriptQueue.remove (i);
if (org.jmol.util.Logger.debugging) org.jmol.util.Logger.debug (this.scriptQueue.size () + " scripts; removed: " + strScript);
}}
}, "~S");
Clazz.defineMethod (c$, "startScriptQueue", 
function (startedByCommandWatcher) {
var pt = (startedByCommandWatcher ? 1 : 0);
if (this.scriptQueueRunning[pt]) return ;
this.scriptQueueRunning[pt] = true;
this.queueThreads[pt] =  new Thread (Clazz.innerTypeInstance (org.jmol.viewer.ScriptManager.ScriptQueueRunnable, this, null, startedByCommandWatcher, pt));
this.queueThreads[pt].setName ("QueueThread" + pt);
this.queueThreads[pt].start ();
}, "~B");
Clazz.defineMethod (c$, "getScriptItem", 
function (watching, isByCommandWatcher) {
var scriptItem = this.scriptQueue.get (0);
var flag = ((scriptItem.get (5)).intValue ());
var isOK = (watching ? flag < 0 : isByCommandWatcher ? flag == 0 : flag == 1);
return (isOK ? scriptItem : null);
}, "~B,~B");
Clazz.defineMethod (c$, "startCommandWatcher", 
function (isStart) {
this.useCommandWatcherThread = isStart;
if (isStart) {
if (this.commandWatcherThread != null) return ;
this.commandWatcherThread =  new Thread (Clazz.innerTypeInstance (org.jmol.viewer.ScriptManager.CommandWatcher, this, null));
this.commandWatcherThread.setName ("CommmandWatcherThread");
this.commandWatcherThread.start ();
} else {
if (this.commandWatcherThread == null) return ;
this.commandWatcherThread.interrupt ();
this.commandWatcherThread = null;
}if (org.jmol.util.Logger.debugging) {
org.jmol.util.Logger.info ("command watcher " + (isStart ? "started" : "stopped") + this.commandWatcherThread);
}}, "~B");
Clazz.defineMethod (c$, "interruptQueueThreads", 
function () {
for (var i = 0; i < this.queueThreads.length; i++) {
if (this.queueThreads[i] != null) this.queueThreads[i].interrupt ();
}
});
c$.$ScriptManager$ScriptQueueRunnable$ = function () {
Clazz.pu$h ();
c$ = Clazz.decorateAsClass (function () {
Clazz.prepareCallback (this, arguments);
this.startedByCommandThread = false;
this.pt = 0;
Clazz.instantialize (this, arguments);
}, org.jmol.viewer.ScriptManager, "ScriptQueueRunnable", null, Runnable);
Clazz.makeConstructor (c$, 
function (a, b) {
this.startedByCommandThread = a;
this.pt = b;
}, "~B,~N");
Clazz.overrideMethod (c$, "run", 
function () {
while (this.b$["org.jmol.viewer.ScriptManager"].scriptQueue.size () != 0) {
if (!this.runNextScript ()) try {
Thread.sleep (100);
} catch (e) {
if (Clazz.exceptionOf (e, Exception)) {
org.jmol.util.Logger.error (this + " Exception " + e.getMessage ());
break;
} else {
throw e;
}
}
}
this.b$["org.jmol.viewer.ScriptManager"].queueThreads[this.pt].interrupt ();
this.stop ();
});
Clazz.defineMethod (c$, "stop", 
function () {
this.b$["org.jmol.viewer.ScriptManager"].scriptQueueRunning[this.pt] = false;
this.b$["org.jmol.viewer.ScriptManager"].queueThreads[this.pt] = null;
this.b$["org.jmol.viewer.ScriptManager"].viewer.setSyncDriver (4);
});
Clazz.defineMethod (c$, "runNextScript", 
($fz = function () {
if (this.b$["org.jmol.viewer.ScriptManager"].scriptQueue.size () == 0) return false;
var a = this.b$["org.jmol.viewer.ScriptManager"].getScriptItem (false, this.startedByCommandThread);
if (a == null) return false;
var b = a.get (0);
var c = a.get (1);
var d = a.get (2);
var e = (a.get (3)).booleanValue ();
var f = (a.get (4)).booleanValue ();
if (org.jmol.util.Logger.debugging) {
org.jmol.util.Logger.info ("Queue[" + this.pt + "][" + this.b$["org.jmol.viewer.ScriptManager"].scriptQueue.size () + "] scripts; running: " + b);
}this.b$["org.jmol.viewer.ScriptManager"].scriptQueue.remove (0);
this.runScript (d, b, c, e, f);
if (this.b$["org.jmol.viewer.ScriptManager"].scriptQueue.size () == 0) {
return false;
}return true;
}, $fz.isPrivate = true, $fz));
Clazz.defineMethod (c$, "runScript", 
($fz = function (a, b, c, d, e) {
this.b$["org.jmol.viewer.ScriptManager"].viewer.evalStringWaitStatus (a, b, c, d, e, true);
}, $fz.isPrivate = true, $fz), "~S,~S,~S,~B,~B");
c$ = Clazz.p0p ();
};
c$.$ScriptManager$CommandWatcher$ = function () {
Clazz.pu$h ();
c$ = Clazz.decorateAsClass (function () {
Clazz.prepareCallback (this, arguments);
Clazz.instantialize (this, arguments);
}, org.jmol.viewer.ScriptManager, "CommandWatcher", null, Runnable);
Clazz.overrideMethod (c$, "run", 
function () {
Thread.currentThread ().setPriority (1);
var a = 50;
while (this.b$["org.jmol.viewer.ScriptManager"].commandWatcherThread != null) {
try {
Thread.sleep (a);
if (this.b$["org.jmol.viewer.ScriptManager"].commandWatcherThread != null) {
if (this.b$["org.jmol.viewer.ScriptManager"].scriptQueue.size () > 0) {
var b = this.b$["org.jmol.viewer.ScriptManager"].getScriptItem (true, true);
if (b != null) {
b.set (5, Integer.$valueOf (0));
this.b$["org.jmol.viewer.ScriptManager"].startScriptQueue (true);
}}}} catch (e$$) {
if (Clazz.exceptionOf (e$$, InterruptedException)) {
var ie = e$$;
{
org.jmol.util.Logger.warn ("CommandWatcher InterruptedException! " + this);
break;
}
} else if (Clazz.exceptionOf (e$$, Exception)) {
var ie = e$$;
{
var b = "script processing ERROR:\n\n" + ie.toString ();
for (var c = 0; c < ie.getStackTrace ().length; c++) {
b += "\n" + ie.getStackTrace ()[c].toString ();
}
org.jmol.util.Logger.warn ("CommandWatcher Exception! " + b);
break;
}
} else {
throw e$$;
}
}
}
this.b$["org.jmol.viewer.ScriptManager"].commandWatcherThread = null;
});
c$ = Clazz.p0p ();
};
});
