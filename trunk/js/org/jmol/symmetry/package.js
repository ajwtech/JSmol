var path = ClazzLoader.getClasspathFor ("org.jmol.symmetry.package");
path = path.substring (0, path.lastIndexOf ("package.js"));
ClazzLoader.jarClasspath (path + "HallInfo.js", [
"org.jmol.symmetry.Translation",
"$.Rotation",
"$.HallInfo"]);
