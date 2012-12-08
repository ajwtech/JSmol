package org.jsmol.test;

import java.io.BufferedInputStream;
import java.io.ByteArrayInputStream;
import java.io.FileInputStream;

import org.jmol.io.JmolBinary;

public class Test_zip {

  // Main application
  public static void main(String[] args) {
   new Test_zip();
 }

	public Test_zip() {
	  try {
      BufferedInputStream x = new BufferedInputStream(new FileInputStream("c:/temp/t.zip"));
      byte[] bytes = (byte[]) JmolBinary.getStreamAsBytes(x, null);
      x = new BufferedInputStream(new ByteArrayInputStream(bytes));
      String[] s = JmolBinary.getZipDirectoryAndClose(x, false);
      for (int i = 0; i < s.length; i++)
        System.out.println(s[i]);
    } catch (Exception e) {
      // TODO Auto-generated catch block
      e.printStackTrace();
    }
	  
	}

}

