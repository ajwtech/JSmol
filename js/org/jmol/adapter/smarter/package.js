var path = ClazzLoader.getClasspathFor ("org.jmol.adapter.smarter.package");
path = path.substring (0, path.lastIndexOf ("package.js"));
ClazzLoader.jarClasspath (path + "Resolver.js", [
"org.jmol.adapter.smarter.LimitedLineReader",
"$.Resolver"]);
