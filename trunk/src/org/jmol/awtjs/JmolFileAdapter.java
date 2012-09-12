package org.jmol.awtjs;

import java.io.BufferedInputStream;
import java.io.IOException;
import java.net.URL;
import java.net.UnknownServiceException;

import org.jmol.api.JmolFileAdapterInterface;

public class JmolFileAdapter implements JmolFileAdapterInterface {

  public Object getBufferedFileInputStream(String name) {
  	// this could be replaced by JavaScript
    try {
      throw new UnknownServiceException("No local file reading in JavaScript version of Jmol");
    } catch (IOException e) {
      return e.getMessage();
    }
  }

	public Object getBufferedURLInputStream(URL url, byte[] outputBytes,
			String post) {
		try {
			JmolURLConnection conn = (JmolURLConnection) url.openConnection();
			String type = null;
			if (type != null) {
				if (outputBytes == null)
					conn.outputString(post);
				else
					conn.outputBytes(outputBytes);
			}
			return new BufferedInputStream(conn.getInputStream());
		} catch (IOException e) {
			return e.getMessage();
		}
	}


}
