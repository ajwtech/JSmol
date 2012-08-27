Clazz.declarePackage ("org.jmol.viewer");
Clazz.load (["java.lang.Thread", "java.util.BitSet", "org.jmol.constant.EnumAnimationMode"], "org.jmol.viewer.AnimationManager", ["java.lang.Boolean", "$.Float", "$.StringBuffer", "java.util.Hashtable", "org.jmol.util.Escape", "$.Logger", "org.jmol.viewer.StateManager"], function () {
c$ = Clazz.decorateAsClass (function () {
this.viewer = null;
this.animationReplayMode = null;
this.$animationOn = false;
this.animationPaused = false;
this.inMotion = false;
this.animationFps = 0;
this.animationDirection = 1;
this.currentDirection = 1;
this.currentModelIndex = 0;
this.firstModelIndex = 0;
this.frameStep = 0;
this.lastModelIndex = 0;
this.firstFrameDelayMs = 0;
this.lastFrameDelayMs = 0;
this.lastModelPainted = 0;
this.animationThread = null;
this.backgroundModelIndex = -1;
this.bsVisibleFrames = null;
this.firstFrameDelay = 0;
this.intAnimThread = 0;
this.lastFrameDelay = 1;
if (!Clazz.isClassDefined ("org.jmol.viewer.AnimationManager.AnimationThread")) {
org.jmol.viewer.AnimationManager.$AnimationManager$AnimationThread$ ();
}
Clazz.instantialize (this, arguments);
}, org.jmol.viewer, "AnimationManager");
Clazz.prepareFields (c$, function () {
this.animationReplayMode = org.jmol.constant.EnumAnimationMode.ONCE;
this.bsVisibleFrames =  new java.util.BitSet ();
});
Clazz.makeConstructor (c$, 
function (viewer) {
this.viewer = viewer;
}, "org.jmol.viewer.Viewer");
Clazz.defineMethod (c$, "getVisibleFramesBitSet", 
function () {
return this.bsVisibleFrames;
});
Clazz.defineMethod (c$, "setCurrentModelIndex", 
function (modelIndex) {
this.setCurrentModelIndex (modelIndex, true);
}, "~N");
Clazz.defineMethod (c$, "setCurrentModelIndex", 
function (modelIndex, clearBackgroundModel) {
if (modelIndex < 0) this.setAnimationOff (false);
var formerModelIndex = this.currentModelIndex;
var modelSet = this.viewer.getModelSet ();
var modelCount = (modelSet == null ? 0 : modelSet.getModelCount ());
if (modelCount == 1) this.currentModelIndex = modelIndex = 0;
 else if (modelIndex < 0 || modelIndex >= modelCount) modelIndex = -1;
var ids = null;
var isSameSource = false;
if (this.currentModelIndex != modelIndex) {
if (modelCount > 0) {
var toDataFrame = this.viewer.isJmolDataFrame (modelIndex);
var fromDataFrame = this.viewer.isJmolDataFrame (this.currentModelIndex);
if (fromDataFrame) this.viewer.setJmolDataFrame (null, -1, this.currentModelIndex);
if (this.currentModelIndex != -1) this.viewer.saveModelOrientation ();
if (fromDataFrame || toDataFrame) {
ids = this.viewer.getJmolFrameType (modelIndex) + " " + modelIndex + " <-- " + " " + this.currentModelIndex + " " + this.viewer.getJmolFrameType (this.currentModelIndex);
isSameSource = (this.viewer.getJmolDataSourceFrame (modelIndex) == this.viewer.getJmolDataSourceFrame (this.currentModelIndex));
}}this.currentModelIndex = modelIndex;
if (ids != null) {
if (modelIndex >= 0) this.viewer.restoreModelOrientation (modelIndex);
if (isSameSource && ids.indexOf ("quaternion") >= 0 && ids.indexOf ("plot") < 0 && ids.indexOf ("ramachandran") < 0 && ids.indexOf (" property ") < 0) {
this.viewer.restoreModelRotation (formerModelIndex);
}}}this.viewer.setTrajectory (this.currentModelIndex);
this.viewer.setFrameOffset (this.currentModelIndex);
if (this.currentModelIndex == -1 && clearBackgroundModel) this.setBackgroundModelIndex (-1);
this.viewer.setTainted (true);
this.setFrameRangeVisible ();
this.setStatusFrameChanged ();
if (modelSet != null) {
if (!this.viewer.getSelectAllModels ()) this.viewer.setSelectionSubset (this.viewer.getModelUndeletedAtomsBitSet (this.currentModelIndex));
}}, "~N,~B");
Clazz.defineMethod (c$, "setBackgroundModelIndex", 
function (modelIndex) {
var modelSet = this.viewer.getModelSet ();
if (modelSet == null || modelIndex < 0 || modelIndex >= modelSet.getModelCount ()) modelIndex = -1;
this.backgroundModelIndex = modelIndex;
if (modelIndex >= 0) this.viewer.setTrajectory (modelIndex);
this.viewer.setTainted (true);
this.setFrameRangeVisible ();
}, "~N");
Clazz.defineMethod (c$, "setStatusFrameChanged", 
($fz = function () {
if (this.viewer.getModelSet () != null) this.viewer.setStatusFrameChanged (this.$animationOn ? -2 - this.currentModelIndex : this.currentModelIndex);
}, $fz.isPrivate = true, $fz));
Clazz.defineMethod (c$, "setFrameRangeVisible", 
($fz = function () {
this.bsVisibleFrames.clear ();
if (this.backgroundModelIndex >= 0) this.bsVisibleFrames.set (this.backgroundModelIndex);
if (this.currentModelIndex >= 0) {
this.bsVisibleFrames.set (this.currentModelIndex);
return ;
}if (this.frameStep == 0) return ;
var nDisplayed = 0;
var frameDisplayed = 0;
for (var i = this.firstModelIndex; i != this.lastModelIndex; i += this.frameStep) if (!this.viewer.isJmolDataFrame (i)) {
this.bsVisibleFrames.set (i);
nDisplayed++;
frameDisplayed = i;
}
if (this.firstModelIndex == this.lastModelIndex || !this.viewer.isJmolDataFrame (this.lastModelIndex) || nDisplayed == 0) {
this.bsVisibleFrames.set (this.lastModelIndex);
if (nDisplayed == 0) this.firstModelIndex = this.lastModelIndex;
nDisplayed = 0;
}if (nDisplayed == 1 && this.currentModelIndex < 0) this.setCurrentModelIndex (frameDisplayed);
}, $fz.isPrivate = true, $fz));
Clazz.defineMethod (c$, "initializePointers", 
function (frameStep) {
this.firstModelIndex = 0;
var modelCount = this.viewer.getModelCount ();
this.lastModelIndex = (frameStep == 0 ? 0 : modelCount) - 1;
this.frameStep = frameStep;
this.viewer.setFrameVariables ();
}, "~N");
Clazz.defineMethod (c$, "clear", 
function () {
this.setAnimationOn (false);
this.setCurrentModelIndex (0);
this.currentDirection = 1;
this.setAnimationDirection (1);
this.setAnimationFps (10);
this.setAnimationReplayMode (org.jmol.constant.EnumAnimationMode.ONCE, 0, 0);
this.initializePointers (0);
});
Clazz.defineMethod (c$, "getAnimationInfo", 
function () {
var info =  new java.util.Hashtable ();
info.put ("firstModelIndex", Integer.$valueOf (this.firstModelIndex));
info.put ("lastModelIndex", Integer.$valueOf (this.lastModelIndex));
info.put ("animationDirection", Integer.$valueOf (this.animationDirection));
info.put ("currentDirection", Integer.$valueOf (this.currentDirection));
info.put ("displayModelIndex", Integer.$valueOf (this.currentModelIndex));
info.put ("displayModelNumber", this.viewer.getModelNumberDotted (this.currentModelIndex));
info.put ("displayModelName", (this.currentModelIndex >= 0 ? this.viewer.getModelName (this.currentModelIndex) : ""));
info.put ("animationFps", Integer.$valueOf (this.animationFps));
info.put ("animationReplayMode", this.animationReplayMode.name ());
info.put ("firstFrameDelay",  new Float (this.firstFrameDelay));
info.put ("lastFrameDelay",  new Float (this.lastFrameDelay));
info.put ("animationOn", Boolean.$valueOf (this.$animationOn));
info.put ("animationPaused", Boolean.$valueOf (this.animationPaused));
return info;
});
Clazz.defineMethod (c$, "getState", 
function (sfunc) {
var modelCount = this.viewer.getModelCount ();
if (modelCount < 2) return "";
var commands =  new StringBuffer ();
if (sfunc != null) {
sfunc.append ("  _setFrameState;\n");
commands.append ("function _setFrameState() {\n");
}commands.append ("# frame state;\n");
commands.append ("# modelCount ").append (modelCount).append (";\n# first ").append (this.viewer.getModelNumberDotted (0)).append (";\n# last ").append (this.viewer.getModelNumberDotted (modelCount - 1)).append (";\n");
if (this.backgroundModelIndex >= 0) org.jmol.viewer.StateManager.appendCmd (commands, "set backgroundModel " + this.viewer.getModelNumberDotted (this.backgroundModelIndex));
var bs = this.viewer.getFrameOffsets ();
if (bs != null) org.jmol.viewer.StateManager.appendCmd (commands, "frame align " + org.jmol.util.Escape.escape (bs));
org.jmol.viewer.StateManager.appendCmd (commands, "frame RANGE " + this.viewer.getModelNumberDotted (this.firstModelIndex) + " " + this.viewer.getModelNumberDotted (this.lastModelIndex));
org.jmol.viewer.StateManager.appendCmd (commands, "animation DIRECTION " + (this.animationDirection == 1 ? "+1" : "-1"));
org.jmol.viewer.StateManager.appendCmd (commands, "animation FPS " + this.animationFps);
org.jmol.viewer.StateManager.appendCmd (commands, "animation MODE " + this.animationReplayMode.name () + " " + this.firstFrameDelay + " " + this.lastFrameDelay);
org.jmol.viewer.StateManager.appendCmd (commands, "frame " + this.viewer.getModelNumberDotted (this.currentModelIndex));
org.jmol.viewer.StateManager.appendCmd (commands, "animation " + (!this.$animationOn ? "OFF" : this.currentDirection == 1 ? "PLAY" : "PLAYREV"));
if (this.$animationOn && this.animationPaused) org.jmol.viewer.StateManager.appendCmd (commands, "animation PAUSE");
if (sfunc != null) commands.append ("}\n\n");
return commands.toString ();
}, "StringBuffer");
Clazz.defineMethod (c$, "setAnimationDirection", 
function (animationDirection) {
this.animationDirection = animationDirection;
}, "~N");
Clazz.defineMethod (c$, "setAnimationFps", 
function (animationFps) {
this.animationFps = animationFps;
}, "~N");
Clazz.defineMethod (c$, "setAnimationReplayMode", 
function (animationReplayMode, firstFrameDelay, lastFrameDelay) {
this.firstFrameDelay = firstFrameDelay > 0 ? firstFrameDelay : 0;
this.firstFrameDelayMs = Math.round ((this.firstFrameDelay * 1000));
this.lastFrameDelay = lastFrameDelay > 0 ? lastFrameDelay : 0;
this.lastFrameDelayMs = Math.round ((this.lastFrameDelay * 1000));
this.animationReplayMode = animationReplayMode;
this.viewer.setFrameVariables ();
}, "org.jmol.constant.EnumAnimationMode,~N,~N");
Clazz.defineMethod (c$, "setAnimationRange", 
function (framePointer, framePointer2) {
var modelCount = this.viewer.getModelCount ();
if (framePointer < 0) framePointer = 0;
if (framePointer2 < 0) framePointer2 = modelCount;
if (framePointer >= modelCount) framePointer = modelCount - 1;
if (framePointer2 >= modelCount) framePointer2 = modelCount - 1;
this.firstModelIndex = framePointer;
this.lastModelIndex = framePointer2;
this.frameStep = (framePointer2 < framePointer ? -1 : 1);
this.rewindAnimation ();
}, "~N,~N");
Clazz.defineMethod (c$, "animationOn", 
($fz = function (TF) {
this.$animationOn = TF;
this.viewer.setBooleanProperty ("_animating", TF);
}, $fz.isPrivate = true, $fz), "~B");
Clazz.defineMethod (c$, "setAnimationOn", 
function (animationOn) {
if (!animationOn || !this.viewer.haveModelSet () || this.viewer.isHeadless ()) {
this.setAnimationOff (false);
return ;
}if (!this.viewer.getSpinOn ()) this.viewer.refresh (3, "Viewer:setAnimationOn");
this.setAnimationRange (-1, -1);
this.resumeAnimation ();
}, "~B");
Clazz.defineMethod (c$, "setAnimationOff", 
function (isPaused) {
if (this.animationThread != null) {
this.animationThread.interrupt ();
this.animationThread = null;
}this.animationPaused = isPaused;
if (!this.viewer.getSpinOn ()) this.viewer.refresh (3, "Viewer:setAnimationOff");
this.animationOn (false);
this.setStatusFrameChanged ();
}, "~B");
Clazz.defineMethod (c$, "pauseAnimation", 
function () {
this.setAnimationOff (true);
});
Clazz.defineMethod (c$, "reverseAnimation", 
function () {
this.currentDirection = -this.currentDirection;
if (!this.$animationOn) this.resumeAnimation ();
});
Clazz.defineMethod (c$, "repaintDone", 
function () {
this.lastModelPainted = this.currentModelIndex;
});
Clazz.defineMethod (c$, "resumeAnimation", 
function () {
if (this.currentModelIndex < 0) this.setAnimationRange (this.firstModelIndex, this.lastModelIndex);
if (this.viewer.getModelCount () <= 1) {
this.animationOn (false);
return ;
}this.animationOn (true);
this.animationPaused = false;
if (this.animationThread == null) {
this.intAnimThread++;
this.animationThread = Clazz.innerTypeInstance (org.jmol.viewer.AnimationManager.AnimationThread, this, null, this.firstModelIndex, this.lastModelIndex, this.intAnimThread);
this.animationThread.start ();
}});
Clazz.defineMethod (c$, "setAnimationNext", 
function () {
return this.setAnimationRelative (this.animationDirection);
});
Clazz.defineMethod (c$, "setAnimationLast", 
function () {
this.setCurrentModelIndex (this.animationDirection > 0 ? this.lastModelIndex : this.firstModelIndex);
});
Clazz.defineMethod (c$, "rewindAnimation", 
function () {
this.setCurrentModelIndex (this.animationDirection > 0 ? this.firstModelIndex : this.lastModelIndex);
this.currentDirection = 1;
this.viewer.setFrameVariables ();
});
Clazz.defineMethod (c$, "setAnimationPrevious", 
function () {
return this.setAnimationRelative (-this.animationDirection);
});
Clazz.defineMethod (c$, "setAnimationRelative", 
function (direction) {
var frameStep = this.frameStep * direction * this.currentDirection;
var modelIndexNext = this.currentModelIndex + frameStep;
var isDone = (modelIndexNext > this.firstModelIndex && modelIndexNext > this.lastModelIndex || modelIndexNext < this.firstModelIndex && modelIndexNext < this.lastModelIndex);
if (isDone) {
switch (this.animationReplayMode) {
case org.jmol.constant.EnumAnimationMode.ONCE:
return false;
case org.jmol.constant.EnumAnimationMode.LOOP:
modelIndexNext = (this.animationDirection == this.currentDirection ? this.firstModelIndex : this.lastModelIndex);
break;
case org.jmol.constant.EnumAnimationMode.PALINDROME:
this.currentDirection = -this.currentDirection;
modelIndexNext -= 2 * frameStep;
}
}var nModels = this.viewer.getModelCount ();
if (modelIndexNext < 0 || modelIndexNext >= nModels) return false;
this.setCurrentModelIndex (modelIndexNext);
return true;
}, "~N");
Clazz.defineMethod (c$, "getAnimRunTimeSeconds", 
function () {
if (this.firstModelIndex == this.lastModelIndex || this.lastModelIndex < 0 || this.firstModelIndex < 0 || this.lastModelIndex >= this.viewer.getModelCount () || this.firstModelIndex >= this.viewer.getModelCount ()) return 0;
var i0 = Math.min (this.firstModelIndex, this.lastModelIndex);
var i1 = Math.max (this.firstModelIndex, this.lastModelIndex);
var nsec = 1 * (i1 - i0) / this.animationFps + this.firstFrameDelay + this.lastFrameDelay;
for (var i = i0; i <= i1; i++) nsec += this.viewer.getFrameDelayMs (i) / 1000;

return nsec;
});
c$.$AnimationManager$AnimationThread$ = function () {
Clazz.pu$h ();
c$ = Clazz.decorateAsClass (function () {
Clazz.prepareCallback (this, arguments);
this.framePointer = 0;
this.framePointer2 = 0;
this.intThread = 0;
Clazz.instantialize (this, arguments);
}, org.jmol.viewer.AnimationManager, "AnimationThread", Thread);
Clazz.makeConstructor (c$, 
function (a, b, c) {
Clazz.superConstructor (this, org.jmol.viewer.AnimationManager.AnimationThread, []);
this.framePointer = a;
this.framePointer2 = b;
this.setName ("AnimationThread");
this.intThread = c;
}, "~N,~N,~N");
Clazz.overrideMethod (c$, "run", 
function () {
var a = System.currentTimeMillis ();
var b = 0;
var c;
if (org.jmol.util.Logger.debugging) org.jmol.util.Logger.debug ("animation thread " + this.intThread + " running");
this.b$["org.jmol.viewer.AnimationManager"].viewer.requestRepaintAndWait ();
try {
c = b - (System.currentTimeMillis () - a);
if (c > 0) Thread.sleep (c);
var d = true;
while (!this.isInterrupted () && this.b$["org.jmol.viewer.AnimationManager"].$animationOn) {
if (this.b$["org.jmol.viewer.AnimationManager"].currentModelIndex == this.framePointer) {
b += this.b$["org.jmol.viewer.AnimationManager"].firstFrameDelayMs;
c = b - (System.currentTimeMillis () - a);
if (c > 0) Thread.sleep (c);
}if (this.b$["org.jmol.viewer.AnimationManager"].currentModelIndex == this.framePointer2) {
b += this.b$["org.jmol.viewer.AnimationManager"].lastFrameDelayMs;
c = b - (System.currentTimeMillis () - a);
if (c > 0) Thread.sleep (c);
}if (!d && this.b$["org.jmol.viewer.AnimationManager"].lastModelPainted == this.b$["org.jmol.viewer.AnimationManager"].currentModelIndex && !this.b$["org.jmol.viewer.AnimationManager"].setAnimationNext ()) {
org.jmol.util.Logger.debug ("animation thread " + this.intThread + " exiting");
this.b$["org.jmol.viewer.AnimationManager"].setAnimationOff (false);
return ;
}d = false;
b += Math.round (((1000 / this.b$["org.jmol.viewer.AnimationManager"].animationFps) + this.b$["org.jmol.viewer.AnimationManager"].viewer.getFrameDelayMs (this.b$["org.jmol.viewer.AnimationManager"].currentModelIndex)));
c = b - (System.currentTimeMillis () - a);
while (!this.isInterrupted () && this.b$["org.jmol.viewer.AnimationManager"].$animationOn && !this.b$["org.jmol.viewer.AnimationManager"].viewer.getRefreshing ()) {
Thread.sleep (10);
}
if (!this.b$["org.jmol.viewer.AnimationManager"].viewer.getSpinOn ()) this.b$["org.jmol.viewer.AnimationManager"].viewer.refresh (1, "animationThread");
c = b - (System.currentTimeMillis () - a);
if (c > 0) Thread.sleep (c);
}
} catch (ie) {
if (Clazz.instanceOf (ie, InterruptedException)) {
org.jmol.util.Logger.debug ("animation thread interrupted!");
try {
this.b$["org.jmol.viewer.AnimationManager"].setAnimationOn (false);
} catch (e) {
if (Clazz.instanceOf (e, Exception)) {
} else {
throw e;
}
}
} else {
throw ie;
}
}
});
c$ = Clazz.p0p ();
};
});
