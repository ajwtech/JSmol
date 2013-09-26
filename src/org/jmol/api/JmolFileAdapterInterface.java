package org.jmol.api;

import java.io.IOException;
import java.io.InputStream;
import java.net.URL;

import org.jmol.io.JmolOutputChannel;
import org.jmol.viewer.FileManager;

public interface JmolFileAdapterInterface {

  public Object getBufferedURLInputStream(URL url, byte[] outputBytes,
                                          String post);

  public Object getBufferedFileInputStream(String name);

  public JmolOutputChannel openOutputChannel(double privateKey, FileManager fm, String fileName, boolean asWriter) throws IOException;

  public InputStream openFileInputStream(double privateKey, String fileName) throws IOException;

  public String getAbsolutePath(double privateKey, String fileName);

  public Object openLogFile(double privateKey, String logFileName, boolean asAppend) throws IOException ;

}
