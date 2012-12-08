package org.jsmol.test;

import java.io.BufferedReader;

public class Test_class {

  // Main application
  public static void main(String[] args) {
   new Test_class();
 }

	public Test_class() {
		try {
			LimitedLineReader x = new LimitedLineReader(null, 1000);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}

class LimitedLineReader {
  private char[] buf;
  private int cchBuf;
  private int ichCurrent;

  LimitedLineReader(BufferedReader bufferedReader, int readLimit)
    throws Exception {
  	if (bufferedReader == null)
  		return;
    bufferedReader.mark(readLimit);
    buf = new char[readLimit];
    cchBuf = Math.max(bufferedReader.read(buf, 0, readLimit), 0);
    ichCurrent = 0;
    bufferedReader.reset();
    
  }

  protected String readLineWithNewline() {
    while (ichCurrent < cchBuf) {
      int ichBeginningOfLine = ichCurrent;
      char ch = 0;
      while (ichCurrent < cchBuf &&
             (ch = buf[ichCurrent++]) != '\r' && ch != '\n') {
      }
      if (ch == '\r' && ichCurrent < cchBuf && buf[ichCurrent] == '\n')
        ++ichCurrent;
      int cchLine = ichCurrent - ichBeginningOfLine;
      if (buf[ichBeginningOfLine] == '#')
        continue; // flush comment lines;
      StringBuffer sb = new StringBuffer(cchLine);
      sb.append(buf, ichBeginningOfLine, cchLine);
      return sb.toString();
    }
    //Logger.debug("org.jmol.adapter.smarter.AtomSetCollectionReader;
    // miguel 2005 01 26
    // for now, just return the empty string.
    // it will only affect the Resolver code
    // it will be easier to handle because then everyone does not
    // need to check for the null pointer
    //
    // If it becomes a problem, then change this to null and modify
    // all the code above to make sure that it tests for null before
    // attempting to invoke methods on the strings. 
    return "";
  }
}
