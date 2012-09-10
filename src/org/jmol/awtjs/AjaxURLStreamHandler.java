package org.jmol.awtjs;

import java.io.IOException;
import java.net.URL;
import java.net.URLConnection;
import java.net.URLStreamHandler;

/**
 * 
 * A method to allow a JavaScript Ajax 
 * 
 */
public class AjaxURLStreamHandler extends URLStreamHandler {

	String protocol;

	public AjaxURLStreamHandler(String protocol) {
		this.protocol = protocol;
	}

	@Override
	protected URLConnection openConnection(URL url) throws IOException {
		return null;
	}


}
