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
import org.jmol.util.Dimension;
import org.jmol.util.Escape;
import org.jmol.io.JmolBinary;
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
    
    byte[] b = new byte[80]; // a GZIP form of water.xyz
    b[0]=(byte)0x1F;
    b[1]=(byte)0x8B;
    b[2]=(byte)0x08;
    b[3]=(byte)0x08;
    b[4]=(byte)0xE6;
    b[5]=(byte)0x43;
    b[6]=(byte)0x0D;
    b[7]=(byte)0x45;
    b[8]=(byte)0x02;
    b[9]=(byte)0x00;
    b[10]=(byte)0x77;
    b[11]=(byte)0x61;
    b[12]=(byte)0x74;
    b[13]=(byte)0x65;
    b[14]=(byte)0x72;
    b[15]=(byte)0x2E;
    b[16]=(byte)0x78;
    b[17]=(byte)0x79;
    b[18]=(byte)0x7A;
    b[19]=(byte)0x00;
    b[20]=(byte)0x4D;
    b[21]=(byte)0xCA;
    b[22]=(byte)0xC1;
    b[23]=(byte)0x0D;
    b[24]=(byte)0x00;
    b[25]=(byte)0x20;
    b[26]=(byte)0x08;
    b[27]=(byte)0x03;
    b[28]=(byte)0xC0;
    b[29]=(byte)0x3F;
    b[30]=(byte)0x09;
    b[31]=(byte)0x3B;
    b[32]=(byte)0x30;
    b[33]=(byte)0x81;
    b[34]=(byte)0xA9;
    b[35]=(byte)0x0A;
    b[36]=(byte)0x06;
    b[37]=(byte)0x37;
    b[38]=(byte)0xF0;
    b[39]=(byte)0xE7;
    b[40]=(byte)0xFE;
    b[41]=(byte)0xDB;
    b[42]=(byte)0x58;
    b[43]=(byte)0x7E;
    b[44]=(byte)0x3E;
    b[45]=(byte)0xDA;
    b[46]=(byte)0x34;
    b[47]=(byte)0x97;
    b[48]=(byte)0x4E;
    b[49]=(byte)0x15;
    b[50]=(byte)0x53;
    b[51]=(byte)0x39;
    b[52]=(byte)0xD6;
    b[53]=(byte)0x1B;
    b[54]=(byte)0x0C;
    b[55]=(byte)0xCD;
    b[56]=(byte)0x37;
    b[57]=(byte)0xB8;
    b[58]=(byte)0x22;
    b[59]=(byte)0xF2;
    b[60]=(byte)0x27;
    b[61]=(byte)0x67;
    b[62]=(byte)0xC3;
    b[63]=(byte)0xA1;
    b[64]=(byte)0x72;
    b[65]=(byte)0x8B;
    b[66]=(byte)0x2A;
    b[67]=(byte)0x58;
    b[68]=(byte)0xA4;
    b[69]=(byte)0x1C;
    b[70]=(byte)0x7C;
    b[71]=(byte)0x3D;
    b[72]=(byte)0xBD;
    b[73]=(byte)0xAD;
    b[74]=(byte)0x18;
    b[75]=(byte)0x15;
    b[76]=(byte)0x3F;
    b[77]=(byte)0x00;
    b[78]=(byte)0x00;
    b[79]=(byte)0x00;
    System.out.println("isGzip = " + JmolBinary.isGzipB(b));
    System.out.println(JmolBinary.getGzippedBytesAsString(b));
    
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

	public Dimension resizeInnerPanel(String data) {
    return null;
		// TODO Auto-generated method stub
		
	}

	public void showUrl(String url) {
		// TODO Auto-generated method stub
		
	}

	public void notifyCallback(EnumCallback message, Object[] data) {
		System.out.println("callback " + message + ": " + Escape.e(data));
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
