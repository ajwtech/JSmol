package org.jmol.api;

import java.io.BufferedInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Hashtable;
import java.util.List;
import java.util.Map;

import org.jmol.viewer.FileManager;
import org.jmol.viewer.Viewer;

public interface JmolZipUtility {

  public ZInputStream newZipInputStream(InputStream is);
  
  public String getZipDirectoryAsStringAndClose(BufferedInputStream t);

  public InputStream newGZIPInputStream(BufferedInputStream bis) throws IOException;

  public String getGzippedBytesAsString(byte[] t);

  public Object getZipFileContents(BufferedInputStream bis,
                                          String[] subFileList, int listPtr, boolean asBufferedInputStream);

  public String[] getZipDirectoryAndClose(BufferedInputStream t,
                                                 boolean addManifest);

  public void getAllZipData(InputStream bis, String[] subFileList,
                                String replace, String string,
                                Map<String, String> fileData);

  public Object getZipFileContentsAsBytes(BufferedInputStream bis,
                                                 String[] subFileList, int i);

  public String cacheZipContents(BufferedInputStream checkPngZipStream,
                                        String shortName,
                                        Map<String, byte[]> pngjCache);

  public String addPngFileBytes(String name, byte[] ret, int iFile,
                                Hashtable<Object, String> crcMap,
                                boolean isSparDir, String newName, int ptSlash,
                                List<Object> v);

  public Object writeZipFile(FileManager fm, Viewer viewer, String outFileName,
                             List<Object> fileNamesAndByteArrays, String msg);

  public String getSceneScript(String[] scenes, Map<String, String> htScenes,
                             List<Integer> list);

  public Object createZipSet(FileManager fm, Viewer viewer, String fileName,
                             String script, String[] scripts,
                             boolean includeRemoteFiles);

  public Object getAtomSetCollectionOrBufferedReaderFromZip(JmolAdapter adapter,
                                                            InputStream is,
                                                            String fileName,
                                                            String[] zipDirectory,
                                                            Map<String, Object> htParams,
                                                            int i,
                                                            boolean asBufferedReader,
                                                            boolean asBufferedInputStream);

  public String[] spartanFileList(String name, String zipDirectory);

  public byte[] getCachedPngjBytes(FileManager fm, String pathName);

  public boolean cachePngjFile(FileManager fm, String[] data);

}