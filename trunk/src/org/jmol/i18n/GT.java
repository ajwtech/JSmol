/* $RCSfile$
 * $Author: hansonr $
 * $Date: 2013-05-22 18:39:40 -0500 (Wed, 22 May 2013) $
 * $Revision: 18241 $
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
//import java.util.HashMap;
import java.util.Hashtable;
import java.util.Map;

import org.jmol.util.J2SRequireImport;
import org.jmol.util.Logger; 

/**
 * 
 * The language list is now in org.jmol.i18n.Language -- Bob Hanson, 12/16/12
 * 
 * implementing translations in JavaScript
 * 
 */

@J2SRequireImport({org.jmol.i18n.Resource.class, org.jmol.i18n.Language.class})
public class GT {

  private static boolean ignoreApplicationBundle = false;
  private static GT getTextWrapper;
  private static Language[] languageList;

  private Resource[] resources = null;
  private int resourceCount = 0;

  private boolean doTranslate = true;
  private String language;
  private static boolean allowDebug = false;

  public GT() {
   // testing here  
  }
  
  
  public GT(String langCode) {
    /**
     * @j2sIgnore
     * 
     */
    {
      allowDebug = true;      
    }
    
    resources = null;
    resourceCount = 0;
    getTextWrapper = this;
    if (langCode != null && langCode.length() == 0)
      langCode = "none";
    if (langCode != null)
      language = langCode;
    if ("none".equals(language))
      language = null;
    if (language == null)
      language = Resource.getLanguage();
    if (language == null)
      language = "en";

    String la = language;
    String la_co = null;
    String la_co_va = null;
    int i = language.indexOf("_");
    if (i >= 0) {
      la = la.substring(0, i);
      la_co = language;
      if ((i = la_co.indexOf("_", ++i)) >= 0) {
        la_co = la_co.substring(0, i);
        la_co_va = language;
      }
    }

    /*
     * find the best match. In each case, if the match is not found
     * but a variation at the next level higher exists, pick that variation.
     * So, for example, if fr_CA does not exist, but fr_FR does, then 
     * we choose fr_FR, because that is taken as the "base" class for French.
     * 
     * Or, if the language requested is "fr", and there is no fr.po, but there
     * is an fr_FR.po, then return that. 
     * 
     * Thus, the user is informed of which country/variant is in effect,
     * if they want to know. 
     * 
     */
    if ((language = getSupported(la_co_va)) == null
        && (language = getSupported(la_co)) == null
        && (language = getSupported(la)) == null) {
      language = "en";
      System.out.println(language + " not supported -- using en");
      return;
    }
    la_co_va = null;
    la_co = null;
    switch (language.length()) {
    default:
      la_co_va = language;
      la_co = language.substring(0, 5);
      la = language.substring(0, 2);
      break;
    case 5:
      la_co = language;
      la = language.substring(0, 2);
      break;
    case 2:
      la = language;
      break;
    }

    /*
     * Time to determine exactly what .po files we actually have.
     * No need to check a file twice.
     * 
     */

    la_co = getSupported(la_co);
    la = getSupported(la);

    if (la == la_co || "en_US".equals(la))
      la = null;
    if (la_co == la_co_va)
      la_co = null;
    if ("en_US".equals(la_co))
      return;
    if (allowDebug && Logger.debugging)
      Logger.debug("Instantiating gettext wrapper for " + language
          + " using files for language:" + la + " country:" + la_co
          + " variant:" + la_co_va);
    if (!ignoreApplicationBundle)
      addBundles("Jmol", la_co_va, la_co, la);
    addBundles("JmolApplet", la_co_va, la_co, la);
  }

  public static Language[] getLanguageList(GT gt) {
    if (languageList == null) {
      if (gt == null)
        gt = getTextWrapper();
      gt.createLanguageList();
    }
    return languageList;
  }

  public static String getLanguage() {
    return getTextWrapper().language;
  }

  public static void ignoreApplicationBundle() {
    ignoreApplicationBundle = true;
  }

  /**
   * 
   * @param TF
   * @return  initial setting of GT.doTranslate
   * 
   */
  public static boolean setDoTranslate(boolean TF) {
    boolean b = getDoTranslate();
    getTextWrapper().doTranslate = TF;
    return b;
  }

  public static boolean getDoTranslate() {
    return getTextWrapper().doTranslate;
  }

  public static String _(String string) {
    return getTextWrapper().getString(string, null);
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

  public static String escapeHTML(String msg) {
    char ch;
    for (int i = msg.length(); --i >= 0;)
      if ((ch = msg.charAt(i)) > 0x7F) {
        msg = msg.substring(0, i) + "&#" + ((int) ch) + ";"
            + msg.substring(i + 1);
      }
    return msg;
  }

  private static GT getTextWrapper() {
    return (getTextWrapper == null ? getTextWrapper = new GT(null)
        : getTextWrapper);
  }

  synchronized private void createLanguageList() {
    boolean wasTranslating = doTranslate;
    doTranslate = false;
    languageList = Language.getLanguageList();
    doTranslate = wasTranslating;
  }

  private static Map<String, String> htLanguages = new Hashtable<String, String>();

  private String getSupported(String code) {
    if (code == null)
      return null;
    String s = htLanguages.get(code);
    if (s != null)
      return (s.length() == 0 ? null : s);
    s = Language.getSupported(getLanguageList(this), code);
    htLanguages.put(code, (s == null ? "" : s));
    return s;
  }

  private void addBundles(String type, String la_co_va, String la_co, String la) {
    try {
      String className = "org.jmol.translation." + type + ".";
      if (la_co_va != null)
        addBundle(className, la_co_va);
      if (la_co != null)
        addBundle(className, la_co);
      if (la != null)
        addBundle(className, la);
    } catch (Exception exception) {
      if (allowDebug)
        Logger.errorEx("Some exception occurred!", exception);
      resources = null;
      resourceCount = 0;
    }
  }

  private void addBundle(String className, String name) {
    Resource resource = Resource.getResource(className, name);    
    if (resource != null) {
      if (resources == null) {
        resources = new Resource[8];
        resourceCount = 0;
      }
      resources[resourceCount] = resource;
      resourceCount++;
      if (allowDebug)Logger.debug("GT adding " + className);
    }
  }

  private String getString(String string, Object[] objects) {
    String trans = null;
    if (doTranslate) {
      for (int bundle = resourceCount; --bundle >= 0;) {
        trans = resources[bundle].getString(string);
        break;
      }
      if (trans == null) {
        if (resourceCount > 0 && allowDebug && Logger.debugging)
          Logger.debug("No trans, using default: " + string);
      } else {
        string = trans;
      }
    }
    if (trans == null) {
      if (string.startsWith("["))
        string = string.substring(string.indexOf("]") + 1);
      else if (string.endsWith("]"))
        string = string.substring(0, string.indexOf("["));
    }
    return (objects == null ? string : MessageFormat.format(string, objects));
  }
}