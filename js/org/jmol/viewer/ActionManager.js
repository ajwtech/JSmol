Clazz.declarePackage ("org.jmol.viewer");
c$ = Clazz.declareType (org.jmol.viewer, "ActionManager");
c$.getPickingMode = Clazz.defineMethod (c$, "getPickingMode", 
function (strMode) {
return 0;
}, "~S");
c$.getPickingStyle = Clazz.defineMethod (c$, "getPickingStyle", 
function (style) {
return 0;
}, "~S");
Clazz.defineMethod (c$, "setPickingStyle", 
function (pickingStyle) {
}, "~N");
Clazz.defineMethod (c$, "startHoverWatcher", 
function (b) {
}, "~B");
Clazz.defineMethod (c$, "clear", 
function () {
});
Clazz.defineMethod (c$, "getBindingInfo", 
function (qualifiers) {
return null;
}, "~S");
Clazz.defineMethod (c$, "setPickingMode", 
function (i) {
}, "~N");
Clazz.defineMethod (c$, "setMouseWheelFactor", 
function (value) {
}, "~N");
Clazz.defineMethod (c$, "setMouseDragFactor", 
function (value) {
}, "~N");
Clazz.defineMethod (c$, "getPickingState", 
function () {
return null;
});
Clazz.defineMethod (c$, "setViewer", 
function (viewer, commandOptions) {
}, "org.jmol.viewer.Viewer,~S");
Clazz.defineMethod (c$, "setGestureSwipeFactor", 
function (value) {
}, "~N");
Clazz.defineMethod (c$, "getRubberBand", 
function () {
return null;
});
Clazz.defineMethod (c$, "isBound", 
function (action, gesture) {
return false;
}, "~N,~N");
Clazz.defineMethod (c$, "getCurrentX", 
function () {
return 0;
});
Clazz.defineMethod (c$, "getAtomPickingMode", 
function () {
return null;
});
Clazz.defineMethod (c$, "getCurrentY", 
function () {
return 0;
});
Clazz.defineMethod (c$, "getPickingStyle", 
function () {
return null;
});
c$.getPickingStyleName = Clazz.defineMethod (c$, "getPickingStyleName", 
function (pickingStyle) {
return null;
}, "~O");
c$.getPickingModeName = Clazz.defineMethod (c$, "getPickingModeName", 
function (atomPickingMode) {
return null;
}, "~O");
Clazz.defineMethod (c$, "setAtomPickingOption", 
function (option) {
}, "~S");
Clazz.defineMethod (c$, "setBondPickingOption", 
function (option) {
}, "~S");
Clazz.defineStatics (c$,
"PICKING_IDENTIFY", 0,
"PICKINGSTYLE_SELECT_JMOL", 0,
"PICKING_LABEL", -11,
"PICKING_DRAW", -12,
"PICKING_ASSIGN_BOND", -13,
"PICKING_ASSIGN_ATOM", -14);
