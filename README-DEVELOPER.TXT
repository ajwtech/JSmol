developers:

INSTALLING JAVA2SCRIPT

At this point in time, you will need either Eclipse 3.5 or 3.6 
for the Java2Script compiler to work. The plug-in can be found in 
j2s/eclipse_plugin. Close Eclipse and copy the appropriate plug-in
to your eclipse/plugins directory. The origins of these jar files
are the files in j2s/zip, which were created by Zhou Renjian in 
March of 2013.

http://dev.zhourenjian.com/j2s/j2s.update.3.5.v20130303.zip
http://dev.zhourenjian.com/j2s/j2s.update.3.6.v20130303.zip

His instructions: 

1. Copy net.sf.j2s.core_2.0.0.jar to eclipse/plugins/
2. Copy j2stag.jar and j2stagsrc.zip to eclipse/plugins/net.sf.j2s.ajax_2.0.0/
3. Copy j2slib to eclipse/plugins/net.sf.j2s.lib_2.0.0/

Of these, I only use (1) because we are not implementing the interactive
J2S options in Eclipse. (Our j2sjmol.js file is different from that used by Java2Script.)


BUILDING THE PROJECT


All of the code in src is derived from the Jmol project. Oddly enough, this
directory is temporary only; it is in svn-ignore, and it is deleted when 
buildfromjmol.xml or buildfromjmol.stable.xml is run.

See the detailed notes in buildfromjmol.xml.

Please make commit comments in Jmol/src/viewer/Jmol.properties, not here.

You may have to right-click on buildtojs.xml and set its 
external configuration to:

-- refresh resources upon completion (project...)
-- build project before starting

Also, you should turn off "project -- build Automatically", because it
seems to slow things down.


hansonr@stolaf.edu 8/17/2013, 10/1/2013


