		package org.jsmol.test;

//import java.awt.Dimension;
//import java.awt.Graphics;
//import java.awt.event.WindowAdapter;
//import java.awt.event.WindowEvent;
import java.io.BufferedReader;
import java.io.StringReader;
import java.net.URL;
import java.util.Hashtable;
import java.util.Map;

//import javax.swing.JFrame;
//import javax.swing.JPanel;

import org.jmol.adapter.smarter.AtomSetCollection;
import org.jmol.adapter.smarter.SmarterJmolAdapter;
import org.jmol.api.JmolAdapter;
import org.jmol.api.JmolViewer;
import org.jmol.viewer.Viewer;

public class Test {

  // Main application
  public static void main(String[] args) {
    Test test = new Test();
    //test.viewer.loadInline(strXyzHOH);
  }

  static BufferedReader getBufferedReaderForString(String string) {
    return new BufferedReader(new StringReader(string));
  }

  private JmolViewer viewer;
  private static JmolAdapter adapter;

	public Test() {
		try {
			Map<String, Object> viewerOptions = new Hashtable<String, Object>();
			viewerOptions.put("adapter", new SmarterJmolAdapter());
			viewerOptions.put("applet", Boolean.TRUE);
			viewerOptions.put("platform", "org.jmol.awtjs.Platform");
			viewerOptions.put("fullName", "http://chemapps.stolaf.edu/jmol/test/jsmol.htm");
			viewerOptions.put("documentBase", "http://chemapps.stolaf.edu/jmol/test/jsmol.htm");
			viewerOptions.put("codeBase", "http://chemapps.stolaf.edu/jmol/test");
			viewer = new Viewer(viewerOptions);
		} catch (Exception e) {
			System.out.println(e.getMessage());
			e.printStackTrace();
		}
		viewer.scriptWait("load DATA \"model\" \n" + strXyzHOH + "\nend \"model\"\n");
	}

  private final static String strXyzHOH = 
      "3\n" +
      "water\n" +
  		"O  0.0 0.0 0.0\n" +
  		"H  0.76923955 -0.59357141 0.0\n" +
  		"H -0.76923955 -0.59357141 0.0\n";

  //private Dimension currentSize = new Dimension();
/*
  @Override
  public void paint(Graphics g) {
    getSize(currentSize);
    viewer.renderScreenImage(g, currentSize.width, currentSize.height);
  }
*/
  /**
   * To shutdown when run as an application.  This is a
   * fairly lame implementation.   A more self-respecting
   * implementation would at least check to see if a save
   * was needed.
   */
//  protected final class AppCloser extends WindowAdapter {

//    @Override
  //  public void windowClosing(WindowEvent e) {
    //  System.exit(0);
 //   }
 // }

}
