// JSmolJavaExt.js
 

// This library will be wrapped by an additional anonymous function using ANT in 
// build_03_tojs.xml. This task will also modify variable names. References 
// to Clazz._ will not be changed, but other Clazz.xxx will be changed to 
// (local scope) Clazz_xxx, allowing them to be further compressed using
// Google Closure Compiler in that same ANT task.

// BH 6/10/2016 5:53:20 AM aligned with SwingJS; combined with j2sJmol.js (same as j2sSwingjs)
// BH 3/9/2016 6:25:08 PM at least allow Error() by itself to work as before (inchi.js uses this)

;(function(Clazz) {

// moved here from package.js
// these classes will be created as objects prior to any others
// and are then available immediately

	Clazz._Loader.registerPackages("java", [ "io", "lang", "lang.reflect", "util" ]);

  var sJU = "java.util";

  var javautil = java.util;

	Clazz._Loader.ignore([
		"net.sf.j2s.ajax.HttpRequest",
		sJU + ".MapEntry.Type",
		//"java.net.UnknownServiceException", // unnecessary for Jmol
		"java.lang.Runtime",
		"java.security.AccessController",
		"java.security.PrivilegedExceptionAction",
		"java.io.File",
		"java.io.FileInputStream",
		"java.io.FileWriter",
		"java.io.OutputStreamWriter",
//		sJU + ".Calendar", // bypassed in ModelCollection
//		"java.text.SimpleDateFormat", // not used
//		"java.text.DateFormat", // not used
		sJU + ".concurrent.Executors"
	])


})(Clazz);
