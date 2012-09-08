Clazz.declarePackage ("org.jmol.viewer");
Clazz.load (["java.util.Hashtable", "javax.vecmath.Matrix3f", "$.Point3f", "org.jmol.constant.EnumAxesMode", "$.EnumCallback"], "org.jmol.viewer.StateManager", ["java.lang.Boolean", "$.Float", "$.Runtime", "$.StringBuffer", "$.StringBuilder", "java.util.Arrays", "$.BitSet", "org.jmol.constant.EnumStructure", "org.jmol.script.ScriptVariable", "org.jmol.util.BitSetUtil", "$.Escape", "$.GData", "$.Logger", "$.TextFormat", "org.jmol.viewer.JmolConstants", "$.Viewer"], function () {
c$ = Clazz.decorateAsClass (function () {
this.viewer = null;
this.saved = null;
this.lastOrientation = "";
this.lastConnections = "";
this.lastSelected = "";
this.lastState = "";
this.lastShape = "";
this.lastCoordinates = "";
if (!Clazz.isClassDefined ("org.jmol.viewer.StateManager.Orientation")) {
org.jmol.viewer.StateManager.$StateManager$Orientation$ ();
}
if (!Clazz.isClassDefined ("org.jmol.viewer.StateManager.Connections")) {
org.jmol.viewer.StateManager.$StateManager$Connections$ ();
}
this.localFunctions = null;
if (!Clazz.isClassDefined ("org.jmol.viewer.StateManager.GlobalSettings")) {
org.jmol.viewer.StateManager.$StateManager$GlobalSettings$ ();
}
Clazz.instantialize (this, arguments);
}, org.jmol.viewer, "StateManager");
Clazz.prepareFields (c$, function () {
this.saved =  new java.util.Hashtable ();
this.localFunctions =  new java.util.Hashtable ();
});
c$.getVariableList = Clazz.defineMethod (c$, "getVariableList", 
function (htVariables, nMax, withSites, definedOnly) {
var sb =  new StringBuffer ();
var n = 0;
var list =  new Array (htVariables.size ());
for (var entry, $entry = htVariables.entrySet ().iterator (); $entry.hasNext () && ((entry = $entry.next ()) || true);) {
var key = entry.getKey ();
var $var = entry.getValue ();
if ((withSites || !key.startsWith ("site_")) && (!definedOnly || (key.charAt (0)).charCodeAt (0) == ('@').charCodeAt (0))) list[n++] = key + ((key.charAt (0)).charCodeAt (0) == ('@').charCodeAt (0) ? " " + $var.asString () : " = " + org.jmol.viewer.StateManager.varClip (key, $var.escape (), nMax));
}
java.util.Arrays.sort (list, 0, n);
for (var i = 0; i < n; i++) if (list[i] != null) org.jmol.viewer.StateManager.appendCmd (sb, list[i]);

if (n == 0 && !definedOnly) sb.append ("# --no global user variables defined--;\n");
return sb.toString ();
}, "java.util.Map,~N,~B,~B");
c$.getObjectIdFromName = Clazz.defineMethod (c$, "getObjectIdFromName", 
function (name) {
if (name == null) return -1;
var objID = "background axis1      axis2      axis3      boundbox   unitcell   frank      ".indexOf (name.toLowerCase ());
return (objID < 0 ? objID : Math.floor (objID / 11));
}, "~S");
c$.getObjectNameFromId = Clazz.defineMethod (c$, "getObjectNameFromId", 
function (objId) {
if (objId < 0 || objId >= 8) return null;
return "background axis1      axis2      axis3      boundbox   unitcell   frank      ".substring (objId * 11, objId * 11 + 11).trim ();
}, "~N");
Clazz.makeConstructor (c$, 
function (viewer) {
this.viewer = viewer;
}, "org.jmol.viewer.Viewer");
Clazz.defineMethod (c$, "getGlobalSettings", 
function (gsOld, clearUserVariables) {
return Clazz.innerTypeInstance (org.jmol.viewer.StateManager.GlobalSettings, this, null, gsOld, clearUserVariables);
}, "org.jmol.viewer.StateManager.GlobalSettings,~B");
Clazz.defineMethod (c$, "clear", 
function (global) {
this.viewer.setShowAxes (false);
this.viewer.setShowBbcage (false);
this.viewer.setShowUnitCell (false);
global.clear ();
}, "org.jmol.viewer.StateManager.GlobalSettings");
Clazz.defineMethod (c$, "setCrystallographicDefaults", 
function () {
this.viewer.setAxesModeUnitCell (true);
this.viewer.setShowAxes (true);
this.viewer.setShowUnitCell (true);
this.viewer.setBooleanProperty ("perspectiveDepth", false);
});
Clazz.defineMethod (c$, "setCommonDefaults", 
($fz = function () {
this.viewer.setBooleanProperty ("perspectiveDepth", true);
this.viewer.setFloatProperty ("bondTolerance", 0.45);
this.viewer.setFloatProperty ("minBondDistance", 0.4);
}, $fz.isPrivate = true, $fz));
Clazz.defineMethod (c$, "setJmolDefaults", 
function () {
this.setCommonDefaults ();
this.viewer.setStringProperty ("defaultColorScheme", "Jmol");
this.viewer.setBooleanProperty ("axesOrientationRasmol", false);
this.viewer.setBooleanProperty ("zeroBasedXyzRasmol", false);
this.viewer.setIntProperty ("percentVdwAtom", 23);
this.viewer.setIntProperty ("bondRadiusMilliAngstroms", 150);
this.viewer.setDefaultVdw ("auto");
});
Clazz.defineMethod (c$, "setRasMolDefaults", 
function () {
this.setCommonDefaults ();
this.viewer.setStringProperty ("defaultColorScheme", "RasMol");
this.viewer.setBooleanProperty ("axesOrientationRasmol", true);
this.viewer.setBooleanProperty ("zeroBasedXyzRasmol", true);
this.viewer.setIntProperty ("percentVdwAtom", 0);
this.viewer.setIntProperty ("bondRadiusMilliAngstroms", 1);
this.viewer.setDefaultVdw ("Rasmol");
});
Clazz.defineMethod (c$, "listSavedStates", 
function () {
var names = "";
var e = this.saved.keySet ().iterator ();
while (e.hasNext ()) names += "\n" + e.next ();

return names;
});
Clazz.defineMethod (c$, "deleteSavedType", 
($fz = function (type) {
var e = this.saved.keySet ().iterator ();
while (e.hasNext ()) {
var name = e.next ();
if (name.startsWith (type)) {
e.remove ();
org.jmol.util.Logger.debug ("deleted " + name);
}}
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "deleteSaved", 
function (name) {
this.saved.remove (name);
}, "~S");
Clazz.defineMethod (c$, "saveSelection", 
function (saveName, bsSelected) {
if (saveName.equalsIgnoreCase ("DELETE")) {
this.deleteSavedType ("Selected_");
return ;
}saveName = this.lastSelected = "Selected_" + saveName;
this.saved.put (saveName, org.jmol.util.BitSetUtil.copy (bsSelected));
}, "~S,java.util.BitSet");
Clazz.defineMethod (c$, "restoreSelection", 
function (saveName) {
var name = (saveName.length > 0 ? "Selected_" + saveName : this.lastSelected);
var bsSelected = this.saved.get (name);
if (bsSelected == null) {
this.viewer.select ( new java.util.BitSet (), false, null, false);
return false;
}this.viewer.select (bsSelected, false, null, false);
return true;
}, "~S");
Clazz.defineMethod (c$, "saveState", 
function (saveName) {
if (saveName.equalsIgnoreCase ("DELETE")) {
this.deleteSavedType ("State_");
return ;
}saveName = this.lastState = "State_" + saveName;
this.saved.put (saveName, this.viewer.getStateInfo ());
}, "~S");
Clazz.defineMethod (c$, "getSavedState", 
function (saveName) {
var name = (saveName.length > 0 ? "State_" + saveName : this.lastState);
var script = this.saved.get (name);
return (script == null ? "" : script);
}, "~S");
Clazz.defineMethod (c$, "saveStructure", 
function (saveName) {
if (saveName.equalsIgnoreCase ("DELETE")) {
this.deleteSavedType ("Shape_");
return ;
}saveName = this.lastShape = "Shape_" + saveName;
this.saved.put (saveName, this.viewer.getStructureState ());
}, "~S");
Clazz.defineMethod (c$, "getSavedStructure", 
function (saveName) {
var name = (saveName.length > 0 ? "Shape_" + saveName : this.lastShape);
var script = this.saved.get (name);
return (script == null ? "" : script);
}, "~S");
Clazz.defineMethod (c$, "saveCoordinates", 
function (saveName, bsSelected) {
if (saveName.equalsIgnoreCase ("DELETE")) {
this.deleteSavedType ("Coordinates_");
return ;
}saveName = this.lastCoordinates = "Coordinates_" + saveName;
this.saved.put (saveName, this.viewer.getCoordinateState (bsSelected));
}, "~S,java.util.BitSet");
Clazz.defineMethod (c$, "getSavedCoordinates", 
function (saveName) {
var name = (saveName.length > 0 ? "Coordinates_" + saveName : this.lastCoordinates);
var script = this.saved.get (name);
return (script == null ? "" : script);
}, "~S");
Clazz.defineMethod (c$, "getOrientation", 
function () {
return Clazz.innerTypeInstance (org.jmol.viewer.StateManager.Orientation, this, null, false);
});
Clazz.defineMethod (c$, "getSavedOrientationText", 
function (saveName) {
var o;
if (saveName != null) {
o = this.getOrientation (saveName);
return (o == null ? "" : o.getMoveToText (true));
}var sb =  new StringBuffer ();
var e = this.saved.keySet ().iterator ();
while (e.hasNext ()) {
var name = e.next ();
if (!name.startsWith ("Orientation_")) {
continue ;}sb.append ((this.saved.get (name)).getMoveToText (true));
}
return sb.toString ();
}, "~S");
Clazz.defineMethod (c$, "saveOrientation", 
function (saveName) {
if (saveName.equalsIgnoreCase ("DELETE")) {
this.deleteSavedType ("Orientation_");
return ;
}var o = Clazz.innerTypeInstance (org.jmol.viewer.StateManager.Orientation, this, null, saveName.equals ("default"));
o.saveName = this.lastOrientation = "Orientation_" + saveName;
this.saved.put (o.saveName, o);
}, "~S");
Clazz.defineMethod (c$, "restoreOrientation", 
function (saveName, timeSeconds, isAll) {
var o = this.getOrientation (saveName);
if (o == null) return false;
o.restore (timeSeconds, isAll);
return true;
}, "~S,~N,~B");
Clazz.defineMethod (c$, "getOrientation", 
($fz = function (saveName) {
var name = (saveName.length > 0 ? "Orientation_" + saveName : this.lastOrientation);
return this.saved.get (name);
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "saveBonds", 
function (saveName) {
if (saveName.equalsIgnoreCase ("DELETE")) {
this.deleteSavedType ("Bonds_");
return ;
}var b = Clazz.innerTypeInstance (org.jmol.viewer.StateManager.Connections, this, null);
b.saveName = this.lastConnections = "Bonds_" + saveName;
this.saved.put (b.saveName, b);
}, "~S");
Clazz.defineMethod (c$, "restoreBonds", 
function (saveName) {
var name = (saveName.length > 0 ? "Bonds_" + saveName : this.lastConnections);
var c = this.saved.get (name);
if (c == null) return false;
c.restore ();
return true;
}, "~S");
Clazz.defineMethod (c$, "getFunctions", 
function (isStatic) {
return (isStatic ? org.jmol.viewer.StateManager.staticFunctions : this.localFunctions);
}, "~B");
Clazz.defineMethod (c$, "getFunctionCalls", 
function (selectedFunction) {
if (selectedFunction == null) selectedFunction = "";
var s =  new StringBuffer ();
var pt = selectedFunction.indexOf ("*");
var isGeneric = (pt >= 0);
var isStatic = (selectedFunction.indexOf ("static_") == 0);
var namesOnly = (selectedFunction.equalsIgnoreCase ("names") || selectedFunction.equalsIgnoreCase ("static_names"));
if (namesOnly) selectedFunction = "";
if (isGeneric) selectedFunction = selectedFunction.substring (0, pt);
selectedFunction = selectedFunction.toLowerCase ();
var ht = this.getFunctions (isStatic);
var names =  new Array (ht.size ());
var e = ht.keySet ().iterator ();
var n = 0;
while (e.hasNext ()) {
var name = e.next ();
if (selectedFunction.length == 0 && !name.startsWith ("_") || name.equalsIgnoreCase (selectedFunction) || isGeneric && name.toLowerCase ().indexOf (selectedFunction) == 0) names[n++] = name;
}
java.util.Arrays.sort (names, 0, n);
for (var i = 0; i < n; i++) {
var f = ht.get (names[i]);
s.append (namesOnly ? f.getSignature () : f.toString ());
s.append ('\n');
}
return s.toString ();
}, "~S");
Clazz.defineMethod (c$, "clearFunctions", 
function () {
org.jmol.viewer.StateManager.staticFunctions.clear ();
this.localFunctions.clear ();
});
c$.isStaticFunction = Clazz.defineMethod (c$, "isStaticFunction", 
($fz = function (name) {
return name.startsWith ("static_");
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "isFunction", 
function (name) {
return (org.jmol.viewer.StateManager.isStaticFunction (name) ? org.jmol.viewer.StateManager.staticFunctions : this.localFunctions).containsKey (name);
}, "~S");
Clazz.defineMethod (c$, "addFunction", 
function ($function) {
(org.jmol.viewer.StateManager.isStaticFunction ($function.name) ? org.jmol.viewer.StateManager.staticFunctions : this.localFunctions).put ($function.name, $function);
}, "org.jmol.script.ScriptFunction");
Clazz.defineMethod (c$, "removeFunction", 
function (name) {
var $function = this.getFunction (name);
if ($function == null) return ;
org.jmol.viewer.StateManager.staticFunctions.remove (name);
this.localFunctions.remove (name);
}, "~S");
Clazz.defineMethod (c$, "getFunction", 
function (name) {
if (name == null) return null;
var $function = (org.jmol.viewer.StateManager.isStaticFunction (name) ? org.jmol.viewer.StateManager.staticFunctions : this.localFunctions).get (name);
return ($function == null || $function.aatoken == null ? null : $function);
}, "~S");
c$.getJmolVersionInt = Clazz.defineMethod (c$, "getJmolVersionInt", 
function () {
var s = org.jmol.viewer.JmolConstants.version;
var version = -1;
try {
var i = s.indexOf (".");
if (i < 0) {
version = 100000 * Integer.parseInt (s);
return version;
}version = 100000 * Integer.parseInt (s.substring (0, i));
s = s.substring (i + 1);
i = s.indexOf (".");
if (i < 0) {
version += 1000 * Integer.parseInt (s);
return version;
}version += 1000 * Integer.parseInt (s.substring (0, i));
s = s.substring (i + 1);
i = s.indexOf ("_");
if (i >= 0) s = s.substring (0, i);
i = s.indexOf (" ");
if (i >= 0) s = s.substring (0, i);
version += Integer.parseInt (s);
} catch (e) {
if (Clazz.instanceOf (e, NumberFormatException)) {
} else {
throw e;
}
}
return version;
});
c$.setStateInfo = Clazz.defineMethod (c$, "setStateInfo", 
function (ht, i1, i2, key) {
var bs;
if (ht.containsKey (key)) {
bs = ht.get (key);
} else {
bs =  new java.util.BitSet ();
ht.put (key, bs);
}bs.set (i1, i2 + 1);
}, "java.util.Map,~N,~N,~S");
c$.varClip = Clazz.defineMethod (c$, "varClip", 
function (name, sv, nMax) {
if (nMax > 0 && sv.length > nMax) sv = sv.substring (0, nMax) + " #...more (" + sv.length + " bytes -- use SHOW " + name + " or MESSAGE @" + name + " to view)";
return sv;
}, "~S,~S,~N");
c$.getCommands = Clazz.defineMethod (c$, "getCommands", 
function (ht) {
return org.jmol.viewer.StateManager.getCommands (ht, null, "select");
}, "java.util.Map");
c$.getCommands = Clazz.defineMethod (c$, "getCommands", 
function (htDefine, htMore) {
return org.jmol.viewer.StateManager.getCommands (htDefine, htMore, "select");
}, "java.util.Map,java.util.Map");
c$.getCommands = Clazz.defineMethod (c$, "getCommands", 
function (htDefine, htMore, selectCmd) {
var s =  new StringBuffer ();
var setPrev = org.jmol.viewer.StateManager.getCommands (htDefine, s, null, selectCmd);
if (htMore != null) org.jmol.viewer.StateManager.getCommands (htMore, s, setPrev, "select");
return s.toString ();
}, "java.util.Map,java.util.Map,~S");
c$.getCommands = Clazz.defineMethod (c$, "getCommands", 
($fz = function (ht, s, setPrev, selectCmd) {
if (ht == null) return "";
for (var entry, $entry = ht.entrySet ().iterator (); $entry.hasNext () && ((entry = $entry.next ()) || true);) {
var key = entry.getKey ();
var set = org.jmol.util.Escape.escape (entry.getValue ());
if (set.length < 5) continue ;set = selectCmd + " " + set;
if (!set.equals (setPrev)) org.jmol.viewer.StateManager.appendCmd (s, set);
setPrev = set;
if (key.indexOf ("-") != 0) org.jmol.viewer.StateManager.appendCmd (s, key);
}
return setPrev;
}, $fz.isPrivate = true, $fz), "java.util.Map,StringBuffer,~S,~S");
c$.appendCmd = Clazz.defineMethod (c$, "appendCmd", 
function (s, cmd) {
if (cmd.length == 0) return ;
s.append ("  ").append (cmd).append (";\n");
}, "StringBuffer,~S");
c$.$StateManager$Orientation$ = function () {
Clazz.pu$h ();
c$ = Clazz.decorateAsClass (function () {
Clazz.prepareCallback (this, arguments);
this.saveName = null;
this.rotationMatrix = null;
this.xTrans = 0;
this.yTrans = 0;
this.zoom = 0;
this.rotationRadius = 0;
this.center = null;
this.navCenter = null;
this.xNav = NaN;
this.yNav = NaN;
this.navDepth = NaN;
this.windowCenteredFlag = false;
this.navigationMode = false;
this.navigateSurface = false;
this.moveToText = null;
Clazz.instantialize (this, arguments);
}, org.jmol.viewer.StateManager, "Orientation");
Clazz.prepareFields (c$, function () {
this.rotationMatrix =  new javax.vecmath.Matrix3f ();
this.center =  new javax.vecmath.Point3f ();
this.navCenter =  new javax.vecmath.Point3f ();
});
Clazz.makeConstructor (c$, 
function (a) {
if (a) {
var b = this.b$["org.jmol.viewer.StateManager"].viewer.getModelSetAuxiliaryInfo ("defaultOrientationMatrix");
if (b == null) this.rotationMatrix.setIdentity ();
 else this.rotationMatrix.set (b);
} else {
this.b$["org.jmol.viewer.StateManager"].viewer.getRotation (this.rotationMatrix);
}this.xTrans = this.b$["org.jmol.viewer.StateManager"].viewer.getTranslationXPercent ();
this.yTrans = this.b$["org.jmol.viewer.StateManager"].viewer.getTranslationYPercent ();
this.zoom = this.b$["org.jmol.viewer.StateManager"].viewer.getZoomSetting ();
this.center.set (this.b$["org.jmol.viewer.StateManager"].viewer.getRotationCenter ());
this.windowCenteredFlag = this.b$["org.jmol.viewer.StateManager"].viewer.isWindowCentered ();
this.rotationRadius = this.b$["org.jmol.viewer.StateManager"].viewer.getRotationRadius ();
this.navigationMode = this.b$["org.jmol.viewer.StateManager"].viewer.getNavigationMode ();
this.navigateSurface = this.b$["org.jmol.viewer.StateManager"].viewer.getNavigateSurface ();
this.moveToText = this.b$["org.jmol.viewer.StateManager"].viewer.getMoveToText (-1);
if (this.navigationMode) {
this.xNav = this.b$["org.jmol.viewer.StateManager"].viewer.getNavigationOffsetPercent ('X');
this.yNav = this.b$["org.jmol.viewer.StateManager"].viewer.getNavigationOffsetPercent ('Y');
this.navDepth = this.b$["org.jmol.viewer.StateManager"].viewer.getNavigationDepthPercent ();
this.navCenter =  new javax.vecmath.Point3f (this.b$["org.jmol.viewer.StateManager"].viewer.getNavigationCenter ());
}}, "~B");
Clazz.defineMethod (c$, "getMoveToText", 
function (a) {
return (a ? "  " + this.moveToText + "\n  save orientation \"" + this.saveName.substring (12) + "\";\n" : this.moveToText);
}, "~B");
Clazz.defineMethod (c$, "restore", 
function (a, b) {
if (!b) {
this.b$["org.jmol.viewer.StateManager"].viewer.setRotationMatrix (this.rotationMatrix);
return ;
}this.b$["org.jmol.viewer.StateManager"].viewer.setBooleanProperty ("windowCentered", this.windowCenteredFlag);
this.b$["org.jmol.viewer.StateManager"].viewer.setBooleanProperty ("navigationMode", this.navigationMode);
this.b$["org.jmol.viewer.StateManager"].viewer.setBooleanProperty ("navigateSurface", this.navigateSurface);
this.b$["org.jmol.viewer.StateManager"].viewer.moveTo (a, this.center, null, NaN, this.rotationMatrix, this.zoom, this.xTrans, this.yTrans, this.rotationRadius, this.navCenter, this.xNav, this.yNav, this.navDepth);
}, "~N,~B");
c$ = Clazz.p0p ();
};
c$.$StateManager$Connections$ = function () {
Clazz.pu$h ();
c$ = Clazz.decorateAsClass (function () {
Clazz.prepareCallback (this, arguments);
this.saveName = null;
this.bondCount = 0;
this.connections = null;
Clazz.instantialize (this, arguments);
}, org.jmol.viewer.StateManager, "Connections");
Clazz.makeConstructor (c$, 
function () {
var a = this.b$["org.jmol.viewer.StateManager"].viewer.getModelSet ();
if (a == null) return ;
this.bondCount = a.getBondCount ();
this.connections =  new Array (this.bondCount + 1);
var b = a.getBonds ();
for (var c = this.bondCount; --c >= 0; ) {
var d = b[c];
this.connections[c] =  new org.jmol.viewer.StateManager.Connection (d.getAtomIndex1 (), d.getAtomIndex2 (), d.getMad (), d.getColix (), d.order, d.getEnergy (), d.getShapeVisibilityFlags ());
}
});
Clazz.defineMethod (c$, "restore", 
function () {
var a = this.b$["org.jmol.viewer.StateManager"].viewer.getModelSet ();
if (a == null) return ;
a.deleteAllBonds ();
for (var b = this.bondCount; --b >= 0; ) {
var c = this.connections[b];
var d = a.getAtomCount ();
if (c.atomIndex1 >= d || c.atomIndex2 >= d) continue ;var e = a.bondAtoms (a.atoms[c.atomIndex1], a.atoms[c.atomIndex2], c.order, c.mad, null, c.energy, false, true);
e.setColix (c.colix);
e.setShapeVisibilityFlags (c.shapeVisibilityFlags);
}
for (var c = this.bondCount; --c >= 0; ) a.getBondAt (c).setIndex (c);

this.b$["org.jmol.viewer.StateManager"].viewer.setShapeProperty (1, "reportAll", null);
});
c$ = Clazz.p0p ();
};
c$.$StateManager$GlobalSettings$ = function () {
Clazz.pu$h ();
c$ = Clazz.decorateAsClass (function () {
Clazz.prepareCallback (this, arguments);
this.htNonbooleanParameterValues = null;
this.htBooleanParameterFlags = null;
this.htPropertyFlagsRemoved = null;
this.htUserVariables = null;
this.ambientPercent = 45;
this.diffusePercent = 84;
this.specular = true;
this.specularExponent = 6;
this.phongExponent = 64;
this.specularPercent = 22;
this.specularPower = 40;
this.zDepth = 0;
this.zShadePower = 3;
this.zSlab = 50;
this.slabByMolecule = false;
this.slabByAtom = false;
this.allowEmbeddedScripts = true;
this.appendNew = true;
this.appletProxy = "";
this.applySymmetryToBonds = false;
this.atomTypes = "";
this.autoBond = true;
this.axesOrientationRasmol = false;
this.bondRadiusMilliAngstroms = 150;
this.bondTolerance = 0.45;
this.defaultDirectory = "";
this.defaultStructureDSSP = true;
this.ptDefaultLattice = null;
this.defaultLoadScript = "";
this.defaultLoadFilter = "";
this.defaultDropScript = "zap; load %FILE;if (%ALLOWCARTOONS && _loadScript == '' && defaultLoadScript == '' && _filetype == 'Pdb') {if ({(protein or nucleic)&*/1.1} && {*/1.1}[1].groupindex != {*/1.1}[0].groupindex){select protein or nucleic;cartoons only;}if ({visible}){color structure}else{wireframe -0.1};if (!{visible}){spacefill 23%};select *}";
this.forceAutoBond = false;
this.fractionalRelative = false;
this.inlineNewlineChar = '|';
this.loadFormat = "http://www.rcsb.org/pdb/files/%FILE.pdb.gz";
this.loadLigandFormat = "http://www.rcsb.org/pdb/files/ligand/%FILE.cif";
this.nmrUrlFormat = "http://www.nmrdb.org/predictor?smiles=";
this.smilesUrlFormat = "http://cactus.nci.nih.gov/chemical/structure/%FILE/file?format=sdf&get3d=True";
this.nihResolverFormat = "http://cactus.nci.nih.gov/chemical/structure/%FILE";
this.pubChemFormat = "http://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/%FILE/SDF?record_type=3d";
this.edsUrlFormat = "http://eds.bmc.uu.se/eds/dfs/%LC13/%LCFILE/%LCFILE.omap";
this.edsUrlCutoff = "load('http://eds.bmc.uu.se/eds/dfs/%LC13/%LCFILE/%LCFILE.sfdat').lines.find('MAP_SIGMA').split(' ')[2]";
this.edsUrlOptions = "within 2.0 {*}";
this.minBondDistance = 0.4;
this.minPixelSelRadius = 6;
this.pdbAddHydrogens = false;
this.pdbGetHeader = false;
this.pdbSequential = false;
this.percentVdwAtom = 23;
this.smallMoleculeMaxAtoms = 40000;
this.smartAromatic = true;
this.zeroBasedXyzRasmol = false;
this.legacyAutoBonding = false;
this.allowRotateSelected = false;
this.allowMoveAtoms = false;
this.perspectiveDepth = true;
this.visualRange = 5;
this.solventOn = false;
this.defaultAngleLabel = "%VALUE %UNITS";
this.defaultDistanceLabel = "%VALUE %UNITS";
this.defaultTorsionLabel = "%VALUE %UNITS";
this.justifyMeasurements = false;
this.measureAllModels = false;
this.minimizationSteps = 100;
this.minimizationRefresh = true;
this.minimizationSilent = false;
this.minimizationCriterion = 0.001;
this.antialiasDisplay = false;
this.antialiasImages = true;
this.imageState = true;
this.antialiasTranslucent = true;
this.displayCellParameters = true;
this.dotsSelectedOnly = false;
this.dotSurface = true;
this.dotDensity = 3;
this.dotScale = 1;
this.meshScale = 1;
this.dynamicMeasurements = false;
this.greyscaleRendering = false;
this.isosurfaceKey = false;
this.isosurfacePropertySmoothing = true;
this.isosurfacePropertySmoothingPower = 7;
this.repaintWaitMs = 1000;
this.showHiddenSelectionHalos = false;
this.showKeyStrokes = true;
this.showMeasurements = true;
this.zoomLarge = true;
this.backgroundImageFileName = null;
this.partialDots = false;
this.bondModeOr = false;
this.hbondsBackbone = false;
this.hbondsAngleMinimum = 90;
this.hbondsDistanceMaximum = 3.25;
this.hbondsRasmol = true;
this.hbondsSolid = false;
this.modeMultipleBond = 2;
this.showHydrogens = true;
this.showMultipleBonds = true;
this.ssbondsBackbone = false;
this.multipleBondSpacing = -1;
this.multipleBondRadiusFactor = 0;
this.cartoonBaseEdges = false;
this.cartoonRockets = false;
this.chainCaseSensitive = false;
this.hermiteLevel = 0;
this.highResolutionFlag = false;
this.rangeSelected = false;
this.rasmolHydrogenSetting = true;
this.rasmolHeteroSetting = true;
this.ribbonAspectRatio = 16;
this.ribbonBorder = false;
this.rocketBarrels = false;
this.sheetSmoothing = 1;
this.traceAlpha = true;
this.allowGestures = false;
this.allowModelkit = true;
this.allowMultiTouch = true;
this.allowKeyStrokes = false;
this.animationFps = 10;
this.atomPicking = true;
this.autoFps = false;
this.axesMode = null;
this.axesScale = 2;
this.bondPicking = false;
this.cameraDepth = 3.0;
this.dataSeparator = "~~~";
this.debugScript = false;
this.defaultDrawArrowScale = 0.5;
this.defaultLabelXYZ = "%a";
this.defaultLabelPDB = "%m%r";
this.defaultTranslucent = 0.5;
this.delayMaximumMs = 0;
this.dipoleScale = 1.0;
this.disablePopupMenu = false;
this.dragSelected = false;
this.drawHover = false;
this.drawPicking = false;
this.dsspCalcHydrogen = true;
this.energyUnits = "kJ";
this.helpPath = "http://chemapps.stolaf.edu/jmol/docs/index.htm";
this.fontScaling = false;
this.fontCaching = true;
this.forceField = "MMFF";
this.helixStep = 1;
this.hideNameInPopup = false;
this.hoverDelayMs = 500;
this.loadAtomDataTolerance = 0.01;
this.logCommands = false;
this.logGestures = false;
this.measureDistanceUnits = "nanometers";
this.measurementLabels = true;
this.messageStyleChime = false;
this.monitorEnergy = false;
this.multiProcessor = true;
this.pickingSpinRate = 10;
this.pickLabel = "";
this.pointGroupDistanceTolerance = 0.2;
this.pointGroupLinearTolerance = 8.0;
this.preserveState = true;
this.propertyColorScheme = "roygb";
this.quaternionFrame = "p";
this.saveProteinStructureState = true;
this.solventProbeRadius = 1.2;
this.scriptDelay = 0;
this.selectAllModels = true;
this.statusReporting = true;
this.strandCountForStrands = 5;
this.strandCountForMeshRibbon = 7;
this.strutSpacing = 6;
this.strutLengthMaximum = 7.0;
this.strutDefaultRadius = 0.3;
this.strutsMultiple = false;
this.useArcBall = false;
this.useMinimizationThread = true;
this.useNumberLocalization = true;
this.useScriptQueue = true;
this.waitForMoveTo = true;
this.vectorScale = 1;
this.vectorSymmetry = false;
this.vibrationPeriod = 1;
this.vibrationScale = 1;
this.wireframeRotation = false;
this.hideNavigationPoint = false;
this.navigationMode = false;
this.navigateSurface = false;
this.navigationPeriodic = false;
this.navigationSpeed = 5;
this.showNavigationPointAlways = false;
this.stereoState = null;
this.modelKitMode = false;
this.objColors = null;
this.objStateOn = null;
this.objMad = null;
this.ellipsoidAxes = false;
this.ellipsoidDots = false;
this.ellipsoidArcs = false;
this.ellipsoidFill = false;
this.ellipsoidBall = true;
this.ellipsoidDotCount = 200;
this.ellipsoidAxisDiameter = 0.02;
this.testFlag1 = false;
this.testFlag2 = false;
this.testFlag3 = false;
this.testFlag4 = false;
this.structureList = null;
this.haveSetStructureList = false;
Clazz.instantialize (this, arguments);
}, org.jmol.viewer.StateManager, "GlobalSettings");
Clazz.prepareFields (c$, function () {
this.htUserVariables =  new java.util.Hashtable ();
this.ptDefaultLattice =  new javax.vecmath.Point3f ();
this.axesMode = org.jmol.constant.EnumAxesMode.BOUNDBOX;
this.objColors =  Clazz.newArray (8, 0);
this.objStateOn =  Clazz.newArray (8, false);
this.objMad =  Clazz.newArray (8, 0);
this.structureList =  new java.util.Hashtable ();
{
this.structureList.put (org.jmol.constant.EnumStructure.TURN, [30, 90, -15, 95]);
this.structureList.put (org.jmol.constant.EnumStructure.SHEET, [-180, -10, 70, 180, -180, -45, -180, -130, 140, 180, 90, 180]);
this.structureList.put (org.jmol.constant.EnumStructure.HELIX, [-160, 0, -100, 45]);
}});
Clazz.makeConstructor (c$, 
function (a, b) {
this.registerAllValues (a, b);
}, "org.jmol.viewer.StateManager.GlobalSettings,~B");
Clazz.defineMethod (c$, "clear", 
function () {
var a = this.htUserVariables.keySet ().iterator ();
while (a.hasNext ()) {
var b = a.next ();
if ((b.charAt (0)).charCodeAt (0) == ('@').charCodeAt (0) || b.startsWith ("site_")) a.remove ();
}
this.setPicked (-1);
this.setParameterValue ("_atomhovered", -1);
this.setParameterValue ("_pickinfo", "");
this.setParameterValue ("selectionhalos", false);
this.setParameterValue ("hidenotselected", false);
this.setParameterValue ("measurementlabels", this.measurementLabels = true);
this.setParameterValue ("drawHover", this.drawHover = false);
});
Clazz.defineMethod (c$, "registerAllValues", 
function (a, b) {
this.htNonbooleanParameterValues =  new java.util.Hashtable ();
this.htBooleanParameterFlags =  new java.util.Hashtable ();
this.htPropertyFlagsRemoved =  new java.util.Hashtable ();
if (a != null) {
if (!b) this.htUserVariables = a.htUserVariables;
this.debugScript = a.debugScript;
this.disablePopupMenu = a.disablePopupMenu;
this.messageStyleChime = a.messageStyleChime;
this.defaultDirectory = a.defaultDirectory;
this.allowGestures = a.allowGestures;
this.allowModelkit = a.allowModelkit;
this.allowMultiTouch = a.allowMultiTouch;
this.allowKeyStrokes = a.allowKeyStrokes;
this.legacyAutoBonding = a.legacyAutoBonding;
this.useScriptQueue = a.useScriptQueue;
this.useArcBall = a.useArcBall;
}for (var item, $item = 0, $$item = org.jmol.constant.EnumCallback.values (); $item < $$item.length && ((item = $$item[$item]) || true); $item++) this.resetParameterStringValue (item.name () + "Callback", a);

this.setParameterValue ("historyLevel", 0);
this.setParameterValue ("depth", 0);
this.setParameterValue ("gestureSwipeFactor", 1.0);
this.setParameterValue ("hideNotSelected", false);
this.setParameterValue ("hoverLabel", "");
this.setParameterValue ("isKiosk", this.b$["org.jmol.viewer.StateManager"].viewer.isKiosk ());
this.setParameterValue ("logFile", this.b$["org.jmol.viewer.StateManager"].viewer.getLogFile ());
this.setParameterValue ("logLevel", org.jmol.util.Logger.getLogLevel ());
this.setParameterValue ("mouseWheelFactor", 1.15);
this.setParameterValue ("mouseDragFactor", 1.0);
this.setParameterValue ("navFps", 10);
this.setParameterValue ("navigationDepth", 0);
this.setParameterValue ("navigationSlab", 0);
this.setParameterValue ("navX", 0);
this.setParameterValue ("navY", 0);
this.setParameterValue ("navZ", 0);
this.setParameterValue ("pathForAllFiles", "");
this.setParameterValue ("perspectiveModel", 11);
this.setParameterValue ("picking", "identify");
this.setParameterValue ("pickingStyle", "toggle");
this.setParameterValue ("refreshing", true);
this.setParameterValue ("rotationRadius", 0);
this.setParameterValue ("scaleAngstromsPerInch", 0);
this.setParameterValue ("scriptReportingLevel", 0);
this.setParameterValue ("selectionHalos", false);
this.setParameterValue ("showaxes", false);
this.setParameterValue ("showboundbox", false);
this.setParameterValue ("showfrank", false);
this.setParameterValue ("showUnitcell", false);
this.setParameterValue ("slab", 100);
this.setParameterValue ("slabEnabled", false);
this.setParameterValue ("slabrange", 0);
this.setParameterValue ("spinX", 0);
this.setParameterValue ("spinY", 30);
this.setParameterValue ("spinZ", 0);
this.setParameterValue ("spinFps", 30);
this.setParameterValue ("stereoDegrees", -5);
this.setParameterValue ("stateversion", 0);
this.setParameterValue ("syncScript", this.b$["org.jmol.viewer.StateManager"].viewer.getStatusManager ().syncingScripts);
this.setParameterValue ("syncMouse", this.b$["org.jmol.viewer.StateManager"].viewer.getStatusManager ().syncingMouse);
this.setParameterValue ("syncStereo", this.b$["org.jmol.viewer.StateManager"].viewer.getStatusManager ().stereoSync);
this.setParameterValue ("windowCentered", true);
this.setParameterValue ("zoomEnabled", true);
this.setParameterValue ("zDepth", 0);
this.setParameterValue ("zShade", false);
this.setParameterValue ("zSlab", 50);
this.setParameterValue ("_version", org.jmol.viewer.StateManager.getJmolVersionInt ());
this.setParameterValue ("axesWindow", true);
this.setParameterValue ("axesMolecular", false);
this.setParameterValue ("axesPosition", false);
this.setParameterValue ("axesUnitcell", false);
this.setParameterValue ("backgroundModel", 0);
this.setParameterValue ("colorRasmol", false);
this.setParameterValue ("currentLocalPath", "");
this.setParameterValue ("defaultLattice", "{0 0 0}");
this.setParameterValue ("defaultColorScheme", "Jmol");
this.setParameterValue ("defaultDirectoryLocal", "");
this.setParameterValue ("defaults", "Jmol");
this.setParameterValue ("defaultVDW", "Jmol");
this.setParameterValue ("exportDrivers", "Idtf;Js;Maya;Povray;Vrml;X3d;Tachyon;Obj");
this.setParameterValue ("propertyAtomNumberColumnCount", 0);
this.setParameterValue ("propertyAtomNumberField", 0);
this.setParameterValue ("propertyDataColumnCount", 0);
this.setParameterValue ("propertyDataField", 0);
this.setParameterValue ("undo", true);
this.setParameterValue ("allowEmbeddedScripts", this.allowEmbeddedScripts);
this.setParameterValue ("allowGestures", this.allowGestures);
this.setParameterValue ("allowKeyStrokes", this.allowKeyStrokes);
this.setParameterValue ("allowModelkit", this.allowModelkit);
this.setParameterValue ("allowMultiTouch", this.allowMultiTouch);
this.setParameterValue ("allowRotateSelected", this.allowRotateSelected);
this.setParameterValue ("allowMoveAtoms", this.allowMoveAtoms);
this.setParameterValue ("ambientPercent", this.ambientPercent);
this.setParameterValue ("animationFps", this.animationFps);
this.setParameterValue ("antialiasImages", this.antialiasImages);
this.setParameterValue ("antialiasDisplay", this.antialiasDisplay);
this.setParameterValue ("antialiasTranslucent", this.antialiasTranslucent);
this.setParameterValue ("appendNew", this.appendNew);
this.setParameterValue ("appletProxy", this.appletProxy);
this.setParameterValue ("applySymmetryToBonds", this.applySymmetryToBonds);
this.setParameterValue ("atomPicking", this.atomPicking);
this.setParameterValue ("atomTypes", this.atomTypes);
this.setParameterValue ("autoBond", this.autoBond);
this.setParameterValue ("autoFps", this.autoFps);
this.setParameterValue ("axesMode", this.axesMode.getCode ());
this.setParameterValue ("axesScale", this.axesScale);
this.setParameterValue ("axesOrientationRasmol", this.axesOrientationRasmol);
this.setParameterValue ("bondModeOr", this.bondModeOr);
this.setParameterValue ("bondPicking", this.bondPicking);
this.setParameterValue ("bondRadiusMilliAngstroms", this.bondRadiusMilliAngstroms);
this.setParameterValue ("bondTolerance", this.bondTolerance);
this.setParameterValue ("cameraDepth", this.cameraDepth);
this.setParameterValue ("cartoonBaseEdges", this.cartoonBaseEdges);
this.setParameterValue ("cartoonRockets", this.cartoonRockets);
this.setParameterValue ("chainCaseSensitive", this.chainCaseSensitive);
this.setParameterValue ("dataSeparator", this.dataSeparator);
this.setParameterValue ("debugScript", this.debugScript);
this.setParameterValue ("defaultAngleLabel", this.defaultAngleLabel);
this.setParameterValue ("defaultDrawArrowScale", this.defaultDrawArrowScale);
this.setParameterValue ("defaultDirectory", this.defaultDirectory);
this.setParameterValue ("defaultDistanceLabel", this.defaultDistanceLabel);
this.setParameterValue ("defaultDropScript", this.defaultDropScript);
this.setParameterValue ("defaultLabelPDB", this.defaultLabelPDB);
this.setParameterValue ("defaultLabelXYZ", this.defaultLabelXYZ);
this.setParameterValue ("defaultLoadFilter", this.defaultLoadFilter);
this.setParameterValue ("defaultLoadScript", this.defaultLoadScript);
this.setParameterValue ("defaultStructureDSSP", this.defaultStructureDSSP);
this.setParameterValue ("defaultTorsionLabel", this.defaultTorsionLabel);
this.setParameterValue ("defaultTranslucent", this.defaultTranslucent);
this.setParameterValue ("delayMaximumMs", this.delayMaximumMs);
this.setParameterValue ("diffusePercent", this.diffusePercent);
this.setParameterValue ("dipoleScale", this.dipoleScale);
this.setParameterValue ("disablePopupMenu", this.disablePopupMenu);
this.setParameterValue ("displayCellParameters", this.displayCellParameters);
this.setParameterValue ("dotDensity", this.dotDensity);
this.setParameterValue ("dotScale", this.dotScale);
this.setParameterValue ("dotsSelectedOnly", this.dotsSelectedOnly);
this.setParameterValue ("dotSurface", this.dotSurface);
this.setParameterValue ("dragSelected", this.dragSelected);
this.setParameterValue ("drawHover", this.drawHover);
this.setParameterValue ("drawPicking", this.drawPicking);
this.setParameterValue ("dsspCalculateHydrogenAlways", this.dsspCalcHydrogen);
this.setParameterValue ("dynamicMeasurements", this.dynamicMeasurements);
this.setParameterValue ("edsUrlFormat", this.edsUrlFormat);
this.setParameterValue ("edsUrlCutoff", this.edsUrlCutoff);
this.setParameterValue ("ellipsoidArcs", this.ellipsoidArcs);
this.setParameterValue ("ellipsoidAxes", this.ellipsoidAxes);
this.setParameterValue ("ellipsoidAxisDiameter", this.ellipsoidAxisDiameter);
this.setParameterValue ("ellipsoidBall", this.ellipsoidBall);
this.setParameterValue ("ellipsoidDotCount", this.ellipsoidDotCount);
this.setParameterValue ("ellipsoidDots", this.ellipsoidDots);
this.setParameterValue ("ellipsoidFill", this.ellipsoidFill);
this.setParameterValue ("energyUnits", this.energyUnits);
this.setParameterValue ("fontScaling", this.fontScaling);
this.setParameterValue ("fontCaching", this.fontCaching);
this.setParameterValue ("forceAutoBond", this.forceAutoBond);
this.setParameterValue ("forceField", this.forceField);
this.setParameterValue ("fractionalRelative", this.fractionalRelative);
this.setParameterValue ("greyscaleRendering", this.greyscaleRendering);
this.setParameterValue ("hbondsAngleMinimum", this.hbondsAngleMinimum);
this.setParameterValue ("hbondsDistanceMaximum", this.hbondsDistanceMaximum);
this.setParameterValue ("hbondsBackbone", this.hbondsBackbone);
this.setParameterValue ("hbondsRasmol", this.hbondsRasmol);
this.setParameterValue ("hbondsSolid", this.hbondsSolid);
this.setParameterValue ("helixStep", this.helixStep);
this.setParameterValue ("helpPath", this.helpPath);
this.setParameterValue ("hermiteLevel", this.hermiteLevel);
this.setParameterValue ("hideNameInPopup", this.hideNameInPopup);
this.setParameterValue ("hideNavigationPoint", this.hideNavigationPoint);
this.setParameterValue ("highResolution", this.highResolutionFlag);
this.setParameterValue ("hoverDelay", this.hoverDelayMs / 1000);
this.setParameterValue ("imageState", this.imageState);
this.setParameterValue ("isosurfaceKey", this.isosurfaceKey);
this.setParameterValue ("isosurfacePropertySmoothing", this.isosurfacePropertySmoothing);
this.setParameterValue ("isosurfacePropertySmoothingPower", this.isosurfacePropertySmoothingPower);
this.setParameterValue ("justifyMeasurements", this.justifyMeasurements);
this.setParameterValue ("legacyAutoBonding", this.legacyAutoBonding);
this.setParameterValue ("loadAtomDataTolerance", this.loadAtomDataTolerance);
this.setParameterValue ("loadFormat", this.loadFormat);
this.setParameterValue ("loadLigandFormat", this.loadLigandFormat);
this.setParameterValue ("logCommands", this.logCommands);
this.setParameterValue ("logGestures", this.logGestures);
this.setParameterValue ("measureAllModels", this.measureAllModels);
this.setParameterValue ("measurementLabels", this.measurementLabels);
this.setParameterValue ("measurementUnits", this.measureDistanceUnits);
this.setParameterValue ("meshScale", this.meshScale);
this.setParameterValue ("messageStyleChime", this.messageStyleChime);
this.setParameterValue ("minBondDistance", this.minBondDistance);
this.setParameterValue ("minPixelSelRadius", this.minPixelSelRadius);
this.setParameterValue ("minimizationSteps", this.minimizationSteps);
this.setParameterValue ("minimizationRefresh", this.minimizationRefresh);
this.setParameterValue ("minimizationSilent", this.minimizationSilent);
this.setParameterValue ("minimizationCriterion", this.minimizationCriterion);
this.setParameterValue ("modelKitMode", this.modelKitMode);
this.setParameterValue ("monitorEnergy", this.monitorEnergy);
this.setParameterValue ("multipleBondRadiusFactor", this.multipleBondRadiusFactor);
this.setParameterValue ("multipleBondSpacing", this.multipleBondSpacing);
this.setParameterValue ("multiProcessor", this.multiProcessor && (org.jmol.viewer.Viewer.nProcessors > 1));
this.setParameterValue ("navigationMode", this.navigationMode);
this.setParameterValue ("navigateSurface", this.navigateSurface);
this.setParameterValue ("navigationPeriodic", this.navigationPeriodic);
this.setParameterValue ("navigationSpeed", this.navigationSpeed);
this.setParameterValue ("nmrUrlFormat", this.nmrUrlFormat);
this.setParameterValue ("partialDots", this.partialDots);
this.setParameterValue ("pdbAddHydrogens", this.pdbAddHydrogens);
this.setParameterValue ("pdbGetHeader", this.pdbGetHeader);
this.setParameterValue ("pdbSequential", this.pdbSequential);
this.setParameterValue ("perspectiveDepth", this.perspectiveDepth);
this.setParameterValue ("percentVdwAtom", this.percentVdwAtom);
this.setParameterValue ("phongExponent", this.phongExponent);
this.setParameterValue ("pickingSpinRate", this.pickingSpinRate);
this.setParameterValue ("pickLabel", this.pickLabel);
this.setParameterValue ("pointGroupLinearTolerance", this.pointGroupLinearTolerance);
this.setParameterValue ("pointGroupDistanceTolerance", this.pointGroupDistanceTolerance);
this.setParameterValue ("preserveState", this.preserveState);
this.setParameterValue ("propertyColorScheme", this.propertyColorScheme);
this.setParameterValue ("quaternionFrame", this.quaternionFrame);
this.setParameterValue ("rangeSelected", this.rangeSelected);
this.setParameterValue ("repaintWaitMs", this.repaintWaitMs);
this.setParameterValue ("ribbonAspectRatio", this.ribbonAspectRatio);
this.setParameterValue ("ribbonBorder", this.ribbonBorder);
this.setParameterValue ("rocketBarrels", this.rocketBarrels);
this.setParameterValue ("saveProteinStructureState", this.saveProteinStructureState);
this.setParameterValue ("scriptqueue", this.useScriptQueue);
this.setParameterValue ("selectAllModels", this.selectAllModels);
this.setParameterValue ("selectHetero", this.rasmolHeteroSetting);
this.setParameterValue ("selectHydrogen", this.rasmolHydrogenSetting);
this.setParameterValue ("sheetSmoothing", this.sheetSmoothing);
this.setParameterValue ("showHiddenSelectionHalos", this.showHiddenSelectionHalos);
this.setParameterValue ("showHydrogens", this.showHydrogens);
this.setParameterValue ("showKeyStrokes", this.showKeyStrokes);
this.setParameterValue ("showMeasurements", this.showMeasurements);
this.setParameterValue ("showMultipleBonds", this.showMultipleBonds);
this.setParameterValue ("showNavigationPointAlways", this.showNavigationPointAlways);
this.setParameterValue ("showScript", this.scriptDelay);
this.setParameterValue ("slabByMolecule", this.slabByMolecule);
this.setParameterValue ("slabByAtom", this.slabByAtom);
this.setParameterValue ("smartAromatic", this.smartAromatic);
this.setParameterValue ("smallMoleculeMaxAtoms", this.smallMoleculeMaxAtoms);
this.setParameterValue ("smilesUrlFormat", this.smilesUrlFormat);
this.setParameterValue ("nihResolverFormat", this.nihResolverFormat);
this.setParameterValue ("pubChemFormat", this.pubChemFormat);
this.setParameterValue ("solventProbe", this.solventOn);
this.setParameterValue ("solventProbeRadius", this.solventProbeRadius);
this.setParameterValue ("specular", this.specular);
this.setParameterValue ("specularExponent", this.specularExponent);
this.setParameterValue ("specularPercent", this.specularPercent);
this.setParameterValue ("specularPower", this.specularPower);
this.setParameterValue ("ssbondsBackbone", this.ssbondsBackbone);
this.setParameterValue ("statusReporting", this.statusReporting);
this.setParameterValue ("strandCount", this.strandCountForStrands);
this.setParameterValue ("strandCountForStrands", this.strandCountForStrands);
this.setParameterValue ("strandCountForMeshRibbon", this.strandCountForMeshRibbon);
this.setParameterValue ("strutDefaultRadius", this.strutDefaultRadius);
this.setParameterValue ("strutLengthMaximum", this.strutLengthMaximum);
this.setParameterValue ("strutSpacing", this.strutSpacing);
this.setParameterValue ("strutsMultiple", this.strutsMultiple);
this.setParameterValue ("testFlag1", this.testFlag1);
this.setParameterValue ("testFlag2", this.testFlag2);
this.setParameterValue ("testFlag3", this.testFlag3);
this.setParameterValue ("testFlag4", this.testFlag4);
this.setParameterValue ("traceAlpha", this.traceAlpha);
this.setParameterValue ("useArcBall", this.useArcBall);
this.setParameterValue ("useMinimizationThread", this.useMinimizationThread);
this.setParameterValue ("useNumberLocalization", this.useNumberLocalization);
this.setParameterValue ("vectorScale", this.vectorScale);
this.setParameterValue ("vectorSymmetry", this.vectorSymmetry);
this.setParameterValue ("vibrationPeriod", this.vibrationPeriod);
this.setParameterValue ("vibrationScale", this.vibrationScale);
this.setParameterValue ("visualRange", this.visualRange);
this.setParameterValue ("waitForMoveTo", this.waitForMoveTo);
this.setParameterValue ("wireframeRotation", this.wireframeRotation);
this.setParameterValue ("zDepth", this.zDepth);
this.setParameterValue ("zeroBasedXyzRasmol", this.zeroBasedXyzRasmol);
this.setParameterValue ("zoomLarge", this.zoomLarge);
this.setParameterValue ("zShadePower", this.zShadePower);
this.setParameterValue ("zSlab", this.zSlab);
}, "org.jmol.viewer.StateManager.GlobalSettings,~B");
Clazz.defineMethod (c$, "getLoadState", 
function (a) {
var b =  new StringBuffer ();
org.jmol.viewer.StateManager.appendCmd (b, "set allowEmbeddedScripts false");
if (this.allowEmbeddedScripts) this.setParameterValue ("allowEmbeddedScripts", true);
org.jmol.viewer.StateManager.appendCmd (b, "set appendNew " + this.appendNew);
org.jmol.viewer.StateManager.appendCmd (b, "set appletProxy " + org.jmol.util.Escape.escape (this.appletProxy));
org.jmol.viewer.StateManager.appendCmd (b, "set applySymmetryToBonds " + this.applySymmetryToBonds);
if (this.atomTypes.length > 0) org.jmol.viewer.StateManager.appendCmd (b, "set atomTypes " + org.jmol.util.Escape.escape (this.atomTypes));
org.jmol.viewer.StateManager.appendCmd (b, "set autoBond " + this.autoBond);
if (this.axesOrientationRasmol) org.jmol.viewer.StateManager.appendCmd (b, "set axesOrientationRasmol true");
org.jmol.viewer.StateManager.appendCmd (b, "set bondRadiusMilliAngstroms " + this.bondRadiusMilliAngstroms);
org.jmol.viewer.StateManager.appendCmd (b, "set bondTolerance " + this.bondTolerance);
org.jmol.viewer.StateManager.appendCmd (b, "set defaultLattice " + org.jmol.util.Escape.escape (this.ptDefaultLattice));
org.jmol.viewer.StateManager.appendCmd (b, "set defaultLoadFilter " + org.jmol.util.Escape.escape (this.defaultLoadFilter));
org.jmol.viewer.StateManager.appendCmd (b, "set defaultLoadScript \"\"");
if (this.defaultLoadScript.length > 0) this.setParameterValue ("defaultLoadScript", this.defaultLoadScript);
org.jmol.viewer.StateManager.appendCmd (b, "set defaultStructureDssp " + this.defaultStructureDSSP);
var c = this.b$["org.jmol.viewer.StateManager"].viewer.getDefaultVdwTypeNameOrData (-2147483648, null);
org.jmol.viewer.StateManager.appendCmd (b, "set defaultVDW " + c);
if (c.equals ("User")) org.jmol.viewer.StateManager.appendCmd (b, this.b$["org.jmol.viewer.StateManager"].viewer.getDefaultVdwTypeNameOrData (2147483647, null));
org.jmol.viewer.StateManager.appendCmd (b, "set forceAutoBond " + this.forceAutoBond);
org.jmol.viewer.StateManager.appendCmd (b, "#set defaultDirectory " + org.jmol.util.Escape.escape (this.defaultDirectory));
org.jmol.viewer.StateManager.appendCmd (b, "#set loadFormat " + org.jmol.util.Escape.escape (this.loadFormat));
org.jmol.viewer.StateManager.appendCmd (b, "#set loadLigandFormat " + org.jmol.util.Escape.escape (this.loadLigandFormat));
org.jmol.viewer.StateManager.appendCmd (b, "#set smilesUrlFormat " + org.jmol.util.Escape.escape (this.smilesUrlFormat));
org.jmol.viewer.StateManager.appendCmd (b, "#set nihResolverFormat " + org.jmol.util.Escape.escape (this.nihResolverFormat));
org.jmol.viewer.StateManager.appendCmd (b, "#set pubChemFormat " + org.jmol.util.Escape.escape (this.pubChemFormat));
org.jmol.viewer.StateManager.appendCmd (b, "#set edsUrlFormat " + org.jmol.util.Escape.escape (this.edsUrlFormat));
org.jmol.viewer.StateManager.appendCmd (b, "#set edsUrlCutoff " + org.jmol.util.Escape.escape (this.edsUrlCutoff));
org.jmol.viewer.StateManager.appendCmd (b, "set legacyAutoBonding " + this.legacyAutoBonding);
org.jmol.viewer.StateManager.appendCmd (b, "set minBondDistance " + this.minBondDistance);
org.jmol.viewer.StateManager.appendCmd (b, "set minimizationCriterion  " + this.minimizationCriterion);
org.jmol.viewer.StateManager.appendCmd (b, "set minimizationSteps  " + this.minimizationSteps);
org.jmol.viewer.StateManager.appendCmd (b, "set pdbAddHydrogens " + (a != null && a.get ("pdbNoHydrogens") == null ? this.pdbAddHydrogens : false));
org.jmol.viewer.StateManager.appendCmd (b, "set pdbGetHeader " + this.pdbGetHeader);
org.jmol.viewer.StateManager.appendCmd (b, "set pdbSequential " + this.pdbSequential);
org.jmol.viewer.StateManager.appendCmd (b, "set percentVdwAtom " + this.percentVdwAtom);
org.jmol.viewer.StateManager.appendCmd (b, "set smallMoleculeMaxAtoms " + this.smallMoleculeMaxAtoms);
org.jmol.viewer.StateManager.appendCmd (b, "set smartAromatic " + this.smartAromatic);
if (this.zeroBasedXyzRasmol) org.jmol.viewer.StateManager.appendCmd (b, "set zeroBasedXyzRasmol true");
return b.toString ();
}, "java.util.Map");
Clazz.defineMethod (c$, "setDefaultLattice", 
function (a) {
this.ptDefaultLattice.set (a);
}, "javax.vecmath.Point3f");
Clazz.defineMethod (c$, "getDefaultLattice", 
function () {
return this.ptDefaultLattice;
});
Clazz.defineMethod (c$, "getWindowState", 
function (a, b, c) {
var d =  new StringBuffer ();
if (a != null) {
a.append ("  initialize;\n  set refreshing false;\n  _setWindowState;\n");
d.append ("\nfunction _setWindowState() {\n");
}if (b != 0) d.append ("# preferredWidthHeight ").append (b).append (" ").append (c).append (";\n");
d.append ("# width ").append (b == 0 ? this.b$["org.jmol.viewer.StateManager"].viewer.getScreenWidth () : b).append (";\n# height ").append (c == 0 ? this.b$["org.jmol.viewer.StateManager"].viewer.getScreenHeight () : c).append (";\n");
org.jmol.viewer.StateManager.appendCmd (d, "stateVersion = " + this.getParameter ("_version"));
org.jmol.viewer.StateManager.appendCmd (d, "background " + org.jmol.util.Escape.escapeColor (this.objColors[0]));
for (var e = 1; e < 8; e++) if (this.objColors[e] != 0) org.jmol.viewer.StateManager.appendCmd (d, org.jmol.viewer.StateManager.getObjectNameFromId (e) + "Color = \"" + org.jmol.util.Escape.escapeColor (this.objColors[e]) + '"');

if (this.backgroundImageFileName != null) org.jmol.viewer.StateManager.appendCmd (d, "background IMAGE /*file*/" + org.jmol.util.Escape.escape (this.backgroundImageFileName));
d.append (this.getSpecularState ());
org.jmol.viewer.StateManager.appendCmd (d, "statusReporting  = " + this.statusReporting);
if (a != null) d.append ("}\n\n");
return d.toString ();
}, "StringBuffer,~N,~N");
Clazz.defineMethod (c$, "getSpecularState", 
function () {
var a =  new StringBuffer ("");
org.jmol.viewer.StateManager.appendCmd (a, "set ambientPercent " + org.jmol.util.GData.getAmbientPercent ());
org.jmol.viewer.StateManager.appendCmd (a, "set diffusePercent " + org.jmol.util.GData.getDiffusePercent ());
org.jmol.viewer.StateManager.appendCmd (a, "set specular " + org.jmol.util.GData.getSpecular ());
org.jmol.viewer.StateManager.appendCmd (a, "set specularPercent " + org.jmol.util.GData.getSpecularPercent ());
org.jmol.viewer.StateManager.appendCmd (a, "set specularPower " + org.jmol.util.GData.getSpecularPower ());
var b = org.jmol.util.GData.getSpecularExponent ();
var c = org.jmol.util.GData.getPhongExponent ();
if (Math.pow (2, b) == c) org.jmol.viewer.StateManager.appendCmd (a, "set specularExponent " + b);
 else org.jmol.viewer.StateManager.appendCmd (a, "set phongExponent " + c);
org.jmol.viewer.StateManager.appendCmd (a, "set zShadePower " + org.jmol.util.GData.getZShadePower ());
return a.toString ();
});
Clazz.defineMethod (c$, "setUnits", 
function (a) {
var b = this.measureDistanceUnits;
var c = this.energyUnits;
if (a.equalsIgnoreCase ("angstroms")) this.measureDistanceUnits = "angstroms";
 else if (a.equalsIgnoreCase ("nanometers") || a.equalsIgnoreCase ("nm")) this.measureDistanceUnits = "nanometers";
 else if (a.equalsIgnoreCase ("picometers") || a.equalsIgnoreCase ("pm")) this.measureDistanceUnits = "picometers";
 else if (a.equalsIgnoreCase ("bohr") || a.equalsIgnoreCase ("au")) this.measureDistanceUnits = "au";
 else if (a.equalsIgnoreCase ("vanderwaals") || a.equalsIgnoreCase ("vdw")) this.measureDistanceUnits = "vdw";
 else if (a.equalsIgnoreCase ("kj")) this.energyUnits = "kJ";
 else if (a.equalsIgnoreCase ("kcal")) this.energyUnits = "kcal";
if (!b.equalsIgnoreCase (this.measureDistanceUnits)) this.setParameterValue ("measurementUnits", this.measureDistanceUnits);
 else if (!c.equalsIgnoreCase (this.energyUnits)) this.setParameterValue ("energyUnits", this.energyUnits);
}, "~S");
Clazz.defineMethod (c$, "isJmolVariable", 
function (a) {
return (a.charAt (0)).charCodeAt (0) == ('_').charCodeAt (0) || this.htNonbooleanParameterValues.containsKey (a = a.toLowerCase ()) || this.htBooleanParameterFlags.containsKey (a) || org.jmol.viewer.StateManager.unreportedProperties.indexOf (";" + a + ";") >= 0;
}, "~S");
Clazz.defineMethod (c$, "resetParameterStringValue", 
($fz = function (a, b) {
this.setParameterValue (a, b == null ? "" : b.getParameter (a));
}, $fz.isPrivate = true, $fz), "~S,org.jmol.viewer.StateManager.GlobalSettings");
Clazz.defineMethod (c$, "setParameterValue", 
function (a, b) {
a = a.toLowerCase ();
if (this.htNonbooleanParameterValues.containsKey (a)) return ;
this.htBooleanParameterFlags.put (a, b ? Boolean.TRUE : Boolean.FALSE);
}, "~S,~B");
Clazz.defineMethod (c$, "setParameterValue", 
function (a, b) {
a = a.toLowerCase ();
if (this.htBooleanParameterFlags.containsKey (a)) return ;
this.htNonbooleanParameterValues.put (a, Integer.$valueOf (b));
}, "~S,~N");
Clazz.defineMethod (c$, "setParameterValue", 
function (a, b) {
if (Float.isNaN (b)) return ;
a = a.toLowerCase ();
if (this.htBooleanParameterFlags.containsKey (a)) return ;
this.htNonbooleanParameterValues.put (a,  new Float (b));
}, "~S,~N");
Clazz.defineMethod (c$, "setParameterValue", 
function (a, b) {
a = a.toLowerCase ();
if (b == null || this.htBooleanParameterFlags.containsKey (a)) return ;
this.htNonbooleanParameterValues.put (a, b);
}, "~S,~S");
Clazz.defineMethod (c$, "removeJmolParameter", 
function (a) {
a = a.toLowerCase ();
if (this.htBooleanParameterFlags.containsKey (a)) {
this.htBooleanParameterFlags.remove (a);
if (!this.htPropertyFlagsRemoved.containsKey (a)) this.htPropertyFlagsRemoved.put (a, Boolean.FALSE);
return ;
}if (this.htNonbooleanParameterValues.containsKey (a)) this.htNonbooleanParameterValues.remove (a);
}, "~S");
Clazz.defineMethod (c$, "setUserVariable", 
function (a, b) {
if (b == null) return null;
a = a.toLowerCase ();
this.htUserVariables.put (a, b.setName (a).setGlobal ());
return b;
}, "~S,org.jmol.script.ScriptVariable");
Clazz.defineMethod (c$, "unsetUserVariable", 
function (a) {
if (a.equals ("all") || a.equals ("variables")) {
this.htUserVariables.clear ();
org.jmol.util.Logger.info ("all user-defined variables deleted");
} else if (this.htUserVariables.containsKey (a)) {
org.jmol.util.Logger.info ("variable " + a + " deleted");
this.htUserVariables.remove (a);
}}, "~S");
Clazz.defineMethod (c$, "removeUserVariable", 
function (a) {
this.htUserVariables.remove (a);
}, "~S");
Clazz.defineMethod (c$, "getUserVariable", 
function (a) {
if (a == null) return null;
a = a.toLowerCase ();
return this.htUserVariables.get (a);
}, "~S");
Clazz.defineMethod (c$, "getParameterEscaped", 
function (a, b) {
a = a.toLowerCase ();
if (this.htNonbooleanParameterValues.containsKey (a)) {
var c = this.htNonbooleanParameterValues.get (a);
return org.jmol.viewer.StateManager.varClip (a, org.jmol.util.Escape.escape (c), b);
}if (this.htBooleanParameterFlags.containsKey (a)) return this.htBooleanParameterFlags.get (a).toString ();
if (this.htUserVariables.containsKey (a)) return this.htUserVariables.get (a).escape ();
if (this.htPropertyFlagsRemoved.containsKey (a)) return "false";
return "<not defined>";
}, "~S,~N");
Clazz.defineMethod (c$, "getParameter", 
function (a) {
var b = this.getParameter (a, false);
return (b == null ? "" : b);
}, "~S");
Clazz.defineMethod (c$, "getOrSetNewVariable", 
function (a, b) {
if (a == null || a.length == 0) a = "x";
var c = this.getParameter (a, true);
return (c == null && b && (a.charAt (0)).charCodeAt (0) != ('_').charCodeAt (0) ? this.setUserVariable (a,  new org.jmol.script.ScriptVariable ()) : org.jmol.script.ScriptVariable.getVariable (c));
}, "~S,~B");
Clazz.defineMethod (c$, "getParameter", 
function (a, b) {
a = a.toLowerCase ();
if (a.equals ("_memory")) {
var c = 0;
var d = 0;
try {
var e = Runtime.getRuntime ();
c = e.totalMemory () / 1000000;
d = e.freeMemory () / 1000000;
} catch (e) {
}
var e = org.jmol.util.TextFormat.formatDecimal (c - d, 1) + "/" + org.jmol.util.TextFormat.formatDecimal (c, 1);
this.htNonbooleanParameterValues.put ("_memory", e);
}if (this.htNonbooleanParameterValues.containsKey (a)) return this.htNonbooleanParameterValues.get (a);
if (this.htBooleanParameterFlags.containsKey (a)) return this.htBooleanParameterFlags.get (a);
if (this.htPropertyFlagsRemoved.containsKey (a)) return Boolean.FALSE;
if (this.htUserVariables.containsKey (a)) {
var c = this.htUserVariables.get (a);
return (b ? c : org.jmol.script.ScriptVariable.oValue (c));
}return null;
}, "~S,~B");
Clazz.defineMethod (c$, "getAllSettings", 
function (a) {
var b =  new StringBuffer ("");
var c;
var d;
var e =  new Array (this.htBooleanParameterFlags.size () + this.htNonbooleanParameterValues.size () + this.htUserVariables.size ());
var f = 0;
var g = "_" + a;
c = this.htBooleanParameterFlags.keySet ().iterator ();
while (c.hasNext ()) {
d = c.next ();
if (a == null || d.indexOf (a) == 0 || d.indexOf (g) == 0) e[f++] = (d.indexOf ("_") == 0 ? d + " = " : "set " + d + " ") + this.htBooleanParameterFlags.get (d);
}
c = this.htNonbooleanParameterValues.keySet ().iterator ();
while (c.hasNext ()) {
d = c.next ();
if ((d.charAt (0)).charCodeAt (0) != ('@').charCodeAt (0) && (a == null || d.indexOf (a) == 0 || d.indexOf (g) == 0)) {
var h = this.htNonbooleanParameterValues.get (d);
if (Clazz.instanceOf (h, String)) h = this.chop (org.jmol.util.Escape.escape (h));
e[f++] = (d.indexOf ("_") == 0 ? d + " = " : "set " + d + " ") + h;
}}
c = this.htUserVariables.keySet ().iterator ();
while (c.hasNext ()) {
d = c.next ();
if (a == null || d.indexOf (a) == 0) {
var h = this.htUserVariables.get (d);
var i = h.asString ();
e[f++] = d + " " + (d.startsWith ("@") ? "" : "= ") + (h.tok == 4 ? this.chop (org.jmol.util.Escape.escape (i)) : i);
}}
java.util.Arrays.sort (e, 0, f);
for (var h = 0; h < f; h++) if (e[h] != null) org.jmol.viewer.StateManager.appendCmd (b, e[h]);

b.append ("\n");
return b.toString ();
}, "~S");
Clazz.defineMethod (c$, "chop", 
($fz = function (a) {
var b = a.length;
if (b < 512) return a;
var c =  new StringBuilder ();
var d = "\"\\\n    + \"";
var e = 0;
for (var f = 72; f < b; e = f, f += 72) {
while ((a.charAt (f - 1)).charCodeAt (0) == ('\\').charCodeAt (0)) f++;

c.append ((e == 0 ? "" : d)).append (a.substring (e, f));
}
c.append (d).append (a.substring (e, b));
return c.toString ();
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "getState", 
function (a) {
var b =  new Array (this.htBooleanParameterFlags.size () + this.htNonbooleanParameterValues.size ());
var c =  new StringBuffer ();
var d = (a != null);
if (d) {
a.append ("  _setVariableState;\n");
c.append ("function _setVariableState() {\n\n");
}var e = 0;
var f;
var g;
f = this.htBooleanParameterFlags.keySet ().iterator ();
while (f.hasNext ()) {
g = f.next ();
if (this.doReportProperty (g)) b[e++] = "set " + g + " " + this.htBooleanParameterFlags.get (g);
}
f = this.htNonbooleanParameterValues.keySet ().iterator ();
while (f.hasNext ()) {
g = f.next ();
if (this.doReportProperty (g)) {
var h = this.htNonbooleanParameterValues.get (g);
if ((g.charAt (0)).charCodeAt (0) == ('=').charCodeAt (0)) {
g = g.substring (1);
} else {
if (g.indexOf ("default") == 0) g = " set " + g;
 else g = "set " + g;
h = org.jmol.util.Escape.escape (h);
}b[e++] = g + " " + h;
}}
switch (this.axesMode) {
case org.jmol.constant.EnumAxesMode.UNITCELL:
b[e++] = "set axes unitcell";
break;
case org.jmol.constant.EnumAxesMode.BOUNDBOX:
b[e++] = "set axes window";
break;
default:
b[e++] = "set axes molecular";
}
java.util.Arrays.sort (b, 0, e);
for (var h = 0; h < e; h++) if (b[h] != null) org.jmol.viewer.StateManager.appendCmd (c, b[h]);

var i = org.jmol.viewer.StateManager.getVariableList (this.htUserVariables, 0, false, true);
if (i.length > 0) {
c.append ("\n#user-defined atom sets; \n");
c.append (i);
}this.b$["org.jmol.viewer.StateManager"].viewer.loadShape (5);
c.append (this.b$["org.jmol.viewer.StateManager"].viewer.getShapeProperty (5, "defaultState"));
if (this.haveSetStructureList) {
c.append ("struture HELIX set " + org.jmol.util.Escape.escape (this.structureList.get (org.jmol.constant.EnumStructure.HELIX)));
c.append ("struture SHEET set " + org.jmol.util.Escape.escape (this.structureList.get (org.jmol.constant.EnumStructure.SHEET)));
c.append ("struture TURN set " + org.jmol.util.Escape.escape (this.structureList.get (org.jmol.constant.EnumStructure.TURN)));
}if (a != null) c.append ("\n}\n\n");
return c.toString ();
}, "StringBuffer");
Clazz.defineMethod (c$, "doReportProperty", 
($fz = function (a) {
return ((a.charAt (0)).charCodeAt (0) != ('_').charCodeAt (0) && org.jmol.viewer.StateManager.unreportedProperties.indexOf (";" + a + ";") < 0);
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "getVariableList", 
function () {
return org.jmol.viewer.StateManager.getVariableList (this.htUserVariables, 0, true, false);
});
Clazz.defineMethod (c$, "setStructureList", 
function (a, b) {
this.haveSetStructureList = true;
this.structureList.put (b, a);
}, "~A,org.jmol.constant.EnumStructure");
Clazz.defineMethod (c$, "getStructureList", 
function () {
return this.structureList;
});
Clazz.defineMethod (c$, "setPicked", 
function (a) {
var b = null;
if (a >= 0) {
this.setParameterValue ("_atompicked", a);
b = this.getParameter ("picked", true);
}if (b == null || b.tok != 10) {
b = org.jmol.script.ScriptVariable.getVariable ( new java.util.BitSet ());
this.setUserVariable ("picked", b);
}if (a >= 0) org.jmol.script.ScriptVariable.getBitSet (b, false).set (a);
}, "~N");
c$ = Clazz.p0p ();
};
Clazz.pu$h ();
c$ = Clazz.decorateAsClass (function () {
this.atomIndex1 = 0;
this.atomIndex2 = 0;
this.mad = 0;
this.colix = 0;
this.order = 0;
this.energy = 0;
this.shapeVisibilityFlags = 0;
Clazz.instantialize (this, arguments);
}, org.jmol.viewer.StateManager, "Connection");
Clazz.makeConstructor (c$, 
function (a, b, c, d, e, f, g) {
this.atomIndex1 = a;
this.atomIndex2 = b;
this.mad = c;
this.colix = d;
this.order = e;
this.energy = f;
this.shapeVisibilityFlags = g;
}, "~N,~N,~N,~N,~N,~N,~N");
c$ = Clazz.p0p ();
Clazz.defineStatics (c$,
"OBJ_BACKGROUND", 0,
"OBJ_AXIS1", 1,
"OBJ_AXIS2", 2,
"OBJ_AXIS3", 3,
"OBJ_BOUNDBOX", 4,
"OBJ_UNITCELL", 5,
"OBJ_FRANK", 6,
"OBJ_MAX", 8,
"objectNameList", "background axis1      axis2      axis3      boundbox   unitcell   frank      ");
c$.staticFunctions = c$.prototype.staticFunctions =  new java.util.Hashtable ();
c$.unreportedProperties = c$.prototype.unreportedProperties = (";ambientpercent;animationfps;antialiasdisplay;antialiasimages;antialiastranslucent;appendnew;axescolor;axesposition;axesmolecular;axesorientationrasmol;axesunitcell;axeswindow;axis1color;axis2color;axis3color;backgroundcolor;backgroundmodel;bondsymmetryatoms;boundboxcolor;cameradepth;debug;debugscript;defaultlatttice;defaults;defaultdropscript;diffusepercent;exportdrivers;_filecaching;_filecache;fontcaching;fontscaling;forcefield;language;legacyautobonding;loglevel;logfile;loggestures;logcommands;measurestylechime;loadformat;loadligandformat;smilesurlformat;pubchemformat;nihresolverformat;edsurlformat;edsurlcutoff;multiprocessor;navigationmode;;pathforallfiles;perspectivedepth;phongexponent;perspectivemodel;preservestate;refreshing;repaintwaitms;rotationradius;showaxes;showaxis1;showaxis2;showaxis3;showboundbox;showfrank;showunitcell;slabenabled;slab;slabrange;depth;zshade;zshadepower;specular;specularexponent;specularpercent;specularpower;stateversion;statusreporting;stereo;stereostate;vibrationperiod;unitcellcolor;visualrange;windowcentered;zerobasedxyzrasmol;zoomenabled;mousedragfactor;mousewheelfactor;scriptqueue;scriptreportinglevel;syncscript;syncmouse;syncstereo;;defaultdirectory;currentlocalpath;defaultdirectorylocal;ambient;bonds;colorrasmol;diffuse;frank;hetero;hidenotselected;hoverlabel;hydrogen;languagetranslation;measurementunits;navigationdepth;navigationslab;picking;pickingstyle;propertycolorschemeoverload;radius;rgbblue;rgbgreen;rgbred;scaleangstromsperinch;selectionhalos;showscript;showselections;solvent;strandcount;spinx;spiny;spinz;spinfps;navx;navy;navz;navfps;" + org.jmol.constant.EnumCallback.getNameList () + ";undo;bondpicking;modelkitmode;allowgestures;allowkeystrokes;allowmultitouch;allowmodelkit" + ";").toLowerCase ();
});
