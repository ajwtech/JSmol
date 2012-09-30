		package org.jsmol.test;

//import java.awt.Dimension;
//import java.awt.Graphics;
//import java.awt.event.WindowAdapter;
//import java.awt.event.WindowEvent;
import java.io.BufferedReader;
import java.io.StringReader;
//import java.net.URL;
import java.util.Hashtable;
import java.util.Map;

//import javax.swing.JFrame;
//import javax.swing.JPanel;

//import org.jmol.adapter.smarter.AtomSetCollection;
import org.jmol.adapter.smarter.SmarterJmolAdapter;
//import org.jmol.api.JmolAdapter;
import org.jmol.api.JmolStatusListener;
import org.jmol.api.JmolViewer;
import org.jmol.constant.EnumCallback;
import org.jmol.util.Escape;
import org.jmol.viewer.Viewer;

public class Test implements JmolStatusListener{

  // Main application
  public static void main(String[] args) {
    new Test();
    //test.viewer.loadInline(strXyzHOH);
  }

  static BufferedReader getBufferedReaderForString(String string) {
    return new BufferedReader(new StringReader(string));
  }

  private JmolViewer viewer;
  //private static JmolAdapter adapter;

	public Test(){
		try {
			Map<String, Object> viewerOptions = new Hashtable<String, Object>();
			viewerOptions.put("adapter", new SmarterJmolAdapter());
			viewerOptions.put("applet", Boolean.TRUE);
			viewerOptions.put("debug", Boolean.TRUE);
			viewerOptions.put("platform", "org.jmol.awtjs.Platform");
			viewerOptions.put("repaintManager", "");
			viewerOptions.put("fullName", "http://chemapps.stolaf.edu/jmol/test/jsmol.htm");
			viewerOptions.put("documentBase", "http://chemapps.stolaf.edu/jmol/test/jsmol.htm");
			viewerOptions.put("codeBase", "http://chemapps.stolaf.edu/jmol/test");
			//viewerOptions.put("statusListener", this);
			System.out.println("test 1");
			viewer = new Viewer(viewerOptions);
			System.out.println("test 2");
		} catch (Exception e) {
			System.out.println(e.getMessage());
			e.printStackTrace();
		}
		System.out.println("Test() 1");
		viewer.scriptWait("load DATA \"model\"" + strXyzHOH + "\nend \"model\"\n;print getProperty('atomInfo')");
		System.out.println(viewer.getProperty("String", "atomInfo", "{*}"));
    System.out.println("Test() 2");
	}

  private final static String strXyzHOH = 
      "3\n" +
      "water\n" +
  		"O  0.0 0.0 0.0\n" +
  		"H  0.76923955 -0.59357141 0.0\n" +
  		"H -0.76923955 -0.59357141 0.0\n";

	public String createImage(String fileName, String type, Object textOrBytes,
			int quality) {
		// TODO Auto-generated method stub
		return null;
	}

	public String eval(String strEval) {
		// TODO Auto-generated method stub
		return null;
	}

	public float[][] functionXY(String functionName, int x, int y) {
		// TODO Auto-generated method stub
		return null;
	}

	public float[][][] functionXYZ(String functionName, int nx, int ny, int nz) {
		// TODO Auto-generated method stub
		return null;
	}

	public Map<String, Object> getProperty(String type) {
		// TODO Auto-generated method stub
		return null;
	}

	public Map<String, Object> getRegistryInfo() {
		// TODO Auto-generated method stub
		return null;
	}

	public void resizeInnerPanel(String data) {
		// TODO Auto-generated method stub
		
	}

	public void showUrl(String url) {
		// TODO Auto-generated method stub
		
	}

	public void notifyCallback(EnumCallback message, Object[] data) {
		System.out.println("callback " + message + ": " + Escape.escape(data));
	}

	public boolean notifyEnabled(EnumCallback type) {
		// TODO Auto-generated method stub
		return true;
	}

	public void setCallbackFunction(String callbackType, String callbackFunction) {
		// TODO Auto-generated method stub
		
	}

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
