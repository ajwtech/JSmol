/* $RCSfile$
 * $Author: nicove $
 * $Date: 2012-08-26 11:11:54 -0500 (Sun, 26 Aug 2012) $
 * $Revision: 17481 $
 *
 * Copyright (C) 2005  Miguel, Jmol Development, www.jmol.org
 *
 * Contact: jmol-developers@lists.sf.net
 *
 *  This library is free software; you can redistribute it and/or
 *  modify it under the terms of the GNU Lesser General Public
 *  License as published by the Free Software Foundation; either
 *  version 2.1 of the License, or (at your option) any later version.
 *
 *  This library is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 *  Lesser General Public License for more details.
 *
 *  You should have received a copy of the GNU Lesser General Public
 *  License along with this library; if not, write to the Free Software
 *  Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA.
 */
package org.jmol.i18n;

import java.text.MessageFormat;

public class GT {


  public GT(String la) {
  }
  
  private GT() {
  }
  
  public static String getLanguage() {
  	return "en_US";
  }
  
  public static void ignoreApplicationBundle() {
  }

  public static void setDoTranslate(boolean TF) {
  }

  public static boolean getDoTranslate() {
  	return false;
  }

  public static String _(String string) {
  	return string;
  }

  private static GT getTextWrapper;

  private static GT getTextWrapper() {
    return (getTextWrapper == null ? getTextWrapper = new GT() : getTextWrapper);
  }

  public static String _(String string, String item) {
    return getTextWrapper().getString(string, new Object[] { item });
  }

  public static String _(String string, int item) {
    return getTextWrapper().getString(string,
        new Object[] { Integer.valueOf(item) });
  }

  public static String _(String string, Object[] objects) {
    return getTextWrapper().getString(string, objects);
  }

  //forced translations
  
  public static String _(String string, boolean t) {
    return _(string, (Object[]) null, t);
  }

  public static String _(String string,
                         String item, boolean t) {
    return _(string, new Object[] { item });
  }

  public static String _(String string,
                         int item, boolean t) {
    return _(string, new Object[] { Integer.valueOf(item) });
  }

  public static synchronized String _(String string,
                                      Object[] objects, boolean t) {
    String str = (objects == null ? _(string) : _(string, objects));
    return str;
  }

  private String getString(String string, Object[] objects) {
      return MessageFormat.format(string, objects);
  }

}
