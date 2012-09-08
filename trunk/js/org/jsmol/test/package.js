var path = ClazzLoader.getClasspathFor ("org.jsmol.test.package");
path = path.substring (0, path.lastIndexOf ("package.js"));
ClazzLoader.jarClasspath (path + "Test_class.js", [
"org.jsmol.test.LimitedLineReader",
"$.Test_class"]);
