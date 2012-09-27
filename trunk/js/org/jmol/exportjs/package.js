var path = ClazzLoader.getClasspathFor ("org.jmol.exportjs.package");
path = path.substring (0, path.lastIndexOf ("package.js"));
ClazzLoader.jarClasspath (path + "___Exporter.js", [
"org.jmol.exportjs.UseTable",
"$.___Exporter"]);
