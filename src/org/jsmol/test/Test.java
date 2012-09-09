		package org.jsmol.test;

//import java.awt.Dimension;
//import java.awt.Graphics;
//import java.awt.event.WindowAdapter;
//import java.awt.event.WindowEvent;
import java.io.BufferedReader;
import java.io.StringReader;
import java.net.URL;

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

	private static AtomSetCollection atomSetCollection;

  private JmolViewer viewer;
  private static JmolAdapter adapter;

  public Test() {
		String commandOptions = "-i -n";
		adapter = new SmarterJmolAdapter();
		try {
			viewer = Viewer.allocateViewer(null, adapter, 
			    null, new URL("http://chemapps.stolaf.edu/Jmol/test"), new URL("http://chemapps.stolaf.edu/Jmol/test"), commandOptions, null, new org.jmol.awtjs.Platform());
		} catch (Exception e) {
			System.out.println(e.getMessage());
			e.printStackTrace();
		}
		viewer.scriptWait("load 1crn.pdb");
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
