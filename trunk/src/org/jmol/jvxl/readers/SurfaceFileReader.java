/* $RCSfile$
 * $Author: hansonr $
 * $Date: 2007-03-30 11:40:16 -0500 (Fri, 30 Mar 2007) $
 * $Revision: 7273 $
 *
 * Copyright (C) 2007 Miguel, Bob, Jmol Development
 *
 * Contact: hansonr@stolaf.edu
 *
 *  This library is free software; you can redistribute it and/or
 *  modify it under the terms of the GNU Lesser General Public
 *  License as published by the Free Software Foundation; either
 *  version 2.1 of the License, or (at your option) any later version.
 *
 *  This library is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 *  Lesser General License for more details.
 *
 *  You should have received a copy of the GNU Lesser General Public
 *  License along with this library; if not, write to the Free Software
 *  Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA.
 */
package org.jmol.jvxl.readers;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.OutputStream;

import org.jmol.api.Interface;
import org.jmol.api.JmolDocument;
import org.jmol.util.Parser;

/**
 * PolygonFileReader or VolumeFileReader
 */
abstract class SurfaceFileReader extends SurfaceReader {

  protected BufferedReader br;
  protected JmolDocument binarydoc;
  protected OutputStream os;

  SurfaceFileReader() {
  }

  @Override
  void init(SurfaceGenerator sg) {
    initSR(sg);
  }

  void init2(SurfaceGenerator sg, BufferedReader br) {
    init2SFR(sg, br);
  }

  void init2SFR(SurfaceGenerator sg, BufferedReader br) {
    init(sg);
    this.br = br;
  }

  JmolDocument newBinaryDocument() {
    return (JmolDocument) Interface.getOptionInterface("io2.BinaryDocument");
  }
  
  @Override
  protected void setOutputStream(OutputStream os) {
    if (binarydoc == null)
      this.os = os;
    else
      sg.setOutputStream(binarydoc, os);
  }

  @Override
  protected void closeReader() {
    closeReaderSFR();
  }

  protected void closeReaderSFR() {
    if (br != null)
      try {
        br.close();
      } catch (IOException e) {
        // ignore
      }
    if (os != null)
      try {
        os.flush();
        os.close();
      } catch (IOException e) {
        // ignore
      }
    if (binarydoc != null)
      binarydoc.close();
  }

  @Override
  void discardTempData(boolean discardAll) {
    closeReader();
    discardTempDataSR(discardAll);
  }

  protected String line;
  protected int[] next = new int[1];

  protected String[] getTokens() {
    return Parser.getTokensAt(line, 0);
  }

  protected float parseFloat() {
    return Parser.parseFloatNext(line, next);
  }

  protected float parseFloatStr(String s) {
    next[0] = 0;
    return Parser.parseFloatNext(s, next);
  }

  protected float parseFloatRange(String s, int iStart, int iEnd) {
    next[0] = iStart;
    return Parser.parseFloatRange(s, iEnd, next);
  }

  protected int parseInt() {
    return Parser.parseIntNext(line, next);
  }

  protected int parseIntStr(String s) {
    next[0] = 0;
    return Parser.parseIntNext(s, next);
  }

  protected int parseIntNext(String s) {
    return Parser.parseIntNext(s, next);
  }

  protected float[] parseFloatArrayStr(String s) {
    next[0] = 0;
    return Parser.parseFloatArrayNext(s, next, null, null, null);
  }

  protected float[] parseFloatArray(float[] a, String strStart, String strEnd) {
    return Parser.parseFloatArrayNext(line, next, a, strStart, strEnd);
  }

  protected String getQuotedStringNext() {
    return Parser.getQuotedStringNext(line, next);
  }

  protected void skipTo(String info, String what) throws Exception {
    if (info != null)
      while (readLine().indexOf(info) < 0) {
      }
    if (what != null)
      next[0] = line.indexOf(what) + what.length() + 2;
  }

  protected String readLine() throws Exception {
    line = br.readLine();
    if (line != null) {
      nBytes += line.length();
      if (os != null) {
        byte[] b = line.getBytes();
        os.write(b, 0, b.length);
        /**
         * @j2sNative
         * 
         *    this.os.writeByteAsInt(0x0A);
         */
        {
          os.write('\n');
        }
      }
    }
    return line;
  }
}