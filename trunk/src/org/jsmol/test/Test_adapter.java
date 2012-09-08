		package org.jsmol.test;

//import java.awt.Dimension;
//import java.awt.Graphics;
//import java.awt.event.WindowAdapter;
//import java.awt.event.WindowEvent;
import java.io.BufferedReader;
import java.io.StringReader;
import java.util.Hashtable;

//import javax.swing.JFrame;
//import javax.swing.JPanel;

import org.jmol.adapter.smarter.AtomSetCollection;
import org.jmol.adapter.smarter.SmarterJmolAdapter;
import org.jmol.api.JmolAdapter;
import org.jmol.api.JmolViewer;
import org.jmol.util.Logger;
import org.jmol.viewer.Viewer;

public class Test_adapter {

  // Main application
  public static void main(String[] args) {
  	Logger.setLogLevel(Logger.LEVEL_DEBUG);
    Test_adapter test = new Test_adapter();
    //test.viewer.loadInline(strXyzHOH);
  }

  static BufferedReader getBufferedReaderForString(String string) {
    return new BufferedReader(new StringReader(string));
  }

	private static AtomSetCollection atomSetCollection;


	public Test_adapter() {
		adapter = new SmarterJmolAdapter();
		BufferedReader reader = getBufferedReaderForString(strXyzHOH);
		Hashtable<String, Object> htParams = new Hashtable<String, Object>();
		Object ret = adapter.getAtomSetCollectionReader("string", null,
				reader, htParams);
		if (!(ret instanceof String))
			ret = adapter.getAtomSetCollection(ret);
		if (!(ret instanceof String))
			atomSetCollection = (AtomSetCollection) ret;
		String commandOptions = "-ionj \"load 1crn.pdb\"";
		//viewer = Viewer.allocateViewer(null, adapter, 
    //null, null, null, commandOptions, null);
		/* JmolViewer.allocateViewer(this, adapter);
		 * JFrame newFrame = new
		 * JFrame(); newFrame.getContentPane().add(this); newFrame.setSize(300,
		 * 300); newFrame.setVisible(true); newFrame.addWindowListener(new
		 * AppCloser());
		 */
		if (ret instanceof String)
			System.out.println(ret);
		else
  		System.out.println("testing atomCount=" + atomSetCollection.getAtomCount());
	}

  private final static String strXyzHOH = 
      "3\n" +
      "water\n" +
  		"O  0.0 0.0 0.0\n" +
  		"H  0.76923955 -0.59357141 0.0\n" +
  		"H -0.76923955 -0.59357141 0.0\n";

  //private JmolViewer viewer;
  private static JmolAdapter adapter;
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
