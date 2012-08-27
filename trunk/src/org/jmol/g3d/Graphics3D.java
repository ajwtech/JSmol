package org.jmol.g3d;

import java.util.BitSet;

import javax.vecmath.Point3f;
import javax.vecmath.Point3i;
import javax.vecmath.Tuple3f;
import javax.vecmath.Vector3f;

import org.jmol.api.ApiPlatform;
import org.jmol.constant.EnumPalette;
import org.jmol.util.ColorUtil;
import org.jmol.util.Escape;
import org.jmol.util.Logger;
import org.jmol.util.Normix;
import org.jmol.util.Parser;
import org.jmol.util.Shader;

public class Graphics3D {

  /* ***************************************************************
   * normals and normal indexes -- normix
   * ***************************************************************/

  Normix normix3d;

  public static final short NORMIX_NULL = Normix.NORMIX_NULL;
  
  public static short getInverseNormix(short normix) {
    return Normix.getInverseNormix(normix);
  }

  public static short getNormix(Vector3f vector, BitSet bsTemp) {
    return Normix.getNormix(vector, bsTemp);
  }

  public static short get2SidedNormix(Vector3f vector, BitSet bsTemp) {
    return Normix.get2SidedNormix(vector, bsTemp);
  }

  public static Vector3f getNormixVector(short normix) {
    return Normix.getVector(normix);
  }

  public boolean isDirectedTowardsCamera(short normix) {
    //polyhedra
    return normix3d.isDirectedTowardsCamera(normix);
  }

  public Vector3f[] getTransformedVertexVectors() {
    return normix3d.getTransformedVectors();
  }

  public final static int EXPORT_NOT = 0;

  public final static byte ENDCAPS_NONE = 0;
  public final static byte ENDCAPS_OPEN = 1;
  public final static byte ENDCAPS_FLAT = 2;
  public final static byte ENDCAPS_SPHERICAL = 3;
  public final static byte ENDCAPS_OPENEND = 4;
  
  public final static short BLACK = 4;
  public final static short ORANGE = 5;
  public final static short PINK = 6;
  public final static short BLUE = 7;
  public final static short WHITE = 8;
  public final static short CYAN = 9;
  public final static short RED = 10;
  public final static short GREEN = 11;
  public final static short GRAY = 12;
  public final static short SILVER = 13;
  public final static short LIME = 14;
  public final static short MAROON = 15;
  public final static short NAVY = 16;
  public final static short OLIVE = 17;
  public final static short PURPLE = 18;
  public final static short TEAL = 19;
  public final static short MAGENTA = 20;
  public final static short YELLOW = 21;
  public final static short HOTPINK = 22;
  public final static short GOLD = 23;

  private final static short UNMASK_CHANGEABLE_TRANSLUCENT =0x07FF;
  private final static short CHANGEABLE_MASK          = (short)0x8000; // negative
  public final static int    LAST_AVAILABLE_COLIX     = UNMASK_CHANGEABLE_TRANSLUCENT;
  private final static int   TRANSLUCENT_SHIFT        = 11; 
  private final static int   ALPHA_SHIFT              = 24 - TRANSLUCENT_SHIFT;
  private final static int   TRANSLUCENT_MASK         = 0xF << TRANSLUCENT_SHIFT; //0x7800
  private final static int   TRANSLUCENT_SCREENED     = TRANSLUCENT_MASK;  
  private final static int   TRANSPARENT              =  8 << TRANSLUCENT_SHIFT;  //0x4000
  final static int           TRANSLUCENT_50           =  4 << TRANSLUCENT_SHIFT;  //0x2000
  public final static short  OPAQUE_MASK              = ~TRANSLUCENT_MASK;


  public final static short  INHERIT_ALL         = 0;
  public final static short INHERIT_COLOR       = 1;
  public final static short  USE_PALETTE         = 2;
  final static short         RAW_RGB             = 3;
  final static short         SPECIAL_COLIX_MAX   = 4;

  public Graphics3D(ApiPlatform apiPlatform) {
		// TODO Auto-generated constructor stub
	}
	public static short getColix(int argb) {
    return Colix3D.getColix(argb); 
  }

	private boolean inGreyscaleMode;

  public short[] getBgColixes(short[] bgcolixes) {
    return bgcolixes;
  }
  public static short getColixTranslucent(int argb) {
    int a = (argb >> 24) & 0xFF;
    if (a == 0xFF)
      return getColix(argb);
    return getColixTranslucent(getColix(argb), true, a / 255f);
  }


  public static String getHexCodes(short[] colixes) {
    if (colixes == null)
      return null;
    StringBuffer s = new StringBuffer();
    for (int i = 0; i < colixes.length; i++)
      s.append(i == 0 ? "" : " ")
        .append(getHexCode(colixes[i]));
    return s.toString();
  }

  public static String getHexCode(short colix) {
    return Escape.escapeColor(getArgb(colix));
  }

  public static short[] getColixArray(String colorNames) {
    if (colorNames == null || colorNames.length() == 0)
      return null;
    String[] colors = Parser.getTokens(colorNames);
    short[] colixes = new short[colors.length];
    for (int j = 0; j < colors.length; j++) {
      colixes[j] = getColix(ColorUtil.getArgbFromString(colors[j]));
      if (colixes[j] == 0)
        return null;
    }
    return colixes;
  }

  public static short getColix(String colorName) {
    int argb = ColorUtil.getArgbFromString(colorName);
    if (argb != 0)
      return Colix3D.getColix(argb);
    if ("none".equalsIgnoreCase(colorName))
      return INHERIT_ALL;
    if ("opaque".equalsIgnoreCase(colorName))
      return INHERIT_COLOR;
    return USE_PALETTE;
  }

  private final static short applyColorTranslucencyLevel(short colix,
                                                         float translucentLevel) {
    // 0.0 to 1.0 ==> MORE translucent   
    //                 1/8  1/4 3/8 1/2 5/8 3/4 7/8 8/8
    //     t            32  64  96  128 160 192 224 255 or 256
    //     t >> 5        1   2   3   4   5   6   7   8
    //     (t >> 5) + 1  2   3   4   5   6   7   8   9 
    // 15 is reserved for screened, so 9-14 just map to 9, "invisible"

    if (translucentLevel == 0) //opaque
      return (short) (colix & ~TRANSLUCENT_MASK);
    if (translucentLevel < 0) //screened
      return (short) (colix & ~TRANSLUCENT_MASK | TRANSLUCENT_SCREENED);
    if (Float.isNaN(translucentLevel) || translucentLevel >= 255 || translucentLevel == 1.0)
      return (short) ((colix & ~TRANSLUCENT_MASK) | TRANSPARENT);
    int iLevel = (int) (translucentLevel < 1 ? translucentLevel * 256
            : translucentLevel <= 9 ? ((int) (translucentLevel-1)) << 5
               : translucentLevel < 15 ? 8 << 5 : translucentLevel);
    iLevel = (iLevel >> 5) % 16;
    return (short) (colix & ~TRANSLUCENT_MASK | (iLevel << TRANSLUCENT_SHIFT));
  }

  public final static int getColixTranslucencyLevel(short colix) {
    int logAlpha = (colix >> TRANSLUCENT_SHIFT) & 0xF;
    switch (logAlpha) {
    case 0:
      return 0;
    case 1: //  32
    case 2: //  64
    case 3: //  96
    case 4: // 128
    case 5: // 160
    case 6: // 192
    case 7: // 224
      return logAlpha << 5;
    case 15:
      return -1;
    default:
      return 255;
    }
  }
  
  public static float getColixTranslucencyFractional(short colix) {
    int translevel = getColixTranslucencyLevel(colix);
    return (
          translevel == -1 ? 0.5f 
        : translevel == 0 ? 0 
        : translevel == 255 ? 1 
        : translevel / 256f
        );
  }

  public static short getColix(Object obj) {
    if (obj == null)
      return INHERIT_ALL;
    if (obj instanceof EnumPalette)
      return (((EnumPalette) obj) == EnumPalette.NONE ? INHERIT_ALL
          : USE_PALETTE);
    if (obj instanceof Integer)
      return Colix3D.getColix(((Integer) obj).intValue());
    if (obj instanceof String)
      return getColix((String) obj);
    if (obj instanceof Byte)
      return (((Byte) obj).byteValue() == 0 ? INHERIT_ALL
          : USE_PALETTE);
    if (Logger.debugging) {
      Logger.debug("?? getColix(" + obj + ")");
    }
    return HOTPINK;
  }

  public final static short getColixTranslucent(short colix, boolean isTranslucent, float translucentLevel) {
    if (colix == INHERIT_ALL)
      colix = INHERIT_COLOR;
    colix &= ~TRANSLUCENT_MASK;
    return (isTranslucent ? applyColorTranslucencyLevel(colix, translucentLevel) : colix);
  }

  public final static short copyColixTranslucency(short colixFrom, short colixTo) {
    return getColixTranslucent(colixTo, isColixTranslucent(colixFrom), getColixTranslucencyLevel(colixFrom));  
  }
  
  public int getColorArgbOrGray(short colix) {
    if (colix < 0)
      colix = changeableColixMap[colix & UNMASK_CHANGEABLE_TRANSLUCENT];
    return (inGreyscaleMode ? Colix3D.getArgbGreyscale(colix) : Colix3D.getArgb(colix));
  }

  int[] getShades(short colix) {
    if (colix < 0)
      colix = changeableColixMap[colix & UNMASK_CHANGEABLE_TRANSLUCENT];
    return (inGreyscaleMode ? Colix3D.getShadesGreyscale(colix) : Colix3D.getShades(colix));
  }

  public final static short getChangeableColixIndex(short colix) {
    return (colix >= 0 ? -1 : (short)(colix & UNMASK_CHANGEABLE_TRANSLUCENT));
  }

  public final static boolean isColixTranslucent(short colix) {
    return ((colix & TRANSLUCENT_MASK) != 0);
  }

  public final static short getColixInherited(short myColix, short parentColix) {
    switch (myColix) {
    case INHERIT_ALL:
      return parentColix;
    case INHERIT_COLOR:
      return (short) (parentColix & OPAQUE_MASK);
    default:
      //check this colix irrespective of translucency, and if inherit, then
      //it must be inherit color but not translucent level; 
      return ((myColix & OPAQUE_MASK) == INHERIT_COLOR ? (short) (parentColix
          & OPAQUE_MASK | myColix & TRANSLUCENT_MASK) : myColix);
    }
  }

  public final static boolean isColixColorInherited(short colix) {
    switch (colix) {
    case INHERIT_ALL:
    case INHERIT_COLOR:
      return true;
    default: //could be translucent of some sort
      return (colix & OPAQUE_MASK) == INHERIT_COLOR; 
    }
  }
  
  public static int getArgb(short colix) {
    return Colix3D.getArgb(colix);  
  }
  
  /****************************************************************
   * changeable colixes
   * give me a short ID and a color, and I will give you a colix
   * later, you can reassign the color if you want
   * Used only for colorManager coloring of elements
   ****************************************************************/

  private short[] changeableColixMap = new short[16];

  public short getChangeableColix(short id, int argb) {
    if (id >= changeableColixMap.length) {
      short[] t = new short[id + 16];
      System.arraycopy(changeableColixMap, 0, t, 0, changeableColixMap.length);
      changeableColixMap = t;
    }
    if (changeableColixMap[id] == 0)
      changeableColixMap[id] = Colix3D.getColix(argb);
    return (short)(id | CHANGEABLE_MASK);
  }

  public void changeColixArgb(short id, int argb) {
    if (id < changeableColixMap.length && changeableColixMap[id] != 0)
      changeableColixMap[id] = Colix3D.getColix(argb);
  }

  /* ***************************************************************
   * shading and lighting
   * ***************************************************************/

  private static void flushCaches() {
    Colix3D.flushShades();
    Sphere3D.flushSphereCache();
  }

  public static Point3f getLightSource() {
    return new Point3f(Shader.xLight, Shader.yLight, Shader.zLight);
  }

  public synchronized static void setSpecular(boolean val) {
    if (Shader.specularOn == val)
      return;
    Shader.specularOn = val;
    flushCaches();
  }

  public static boolean getSpecular() {
    return Shader.specularOn;
  }

  /**
   *  fractional distance from black for ambient color
   * 
   * @param val
   */
  public synchronized static void setZShadePower(int val) {
    Shader.zPower = val;
  }

  public static int getZShadePower() {
    return Shader.zPower;
  }
  
  /**
   *  fractional distance from black for ambient color
   * 
   * @param val
   */
  public synchronized static void setAmbientPercent(int val) {
    if (Shader.ambientPercent == val)
      return;
    Shader.ambientPercent = val;
    Shader.ambientFraction = val / 100f;
    flushCaches();
  }

  public static int getAmbientPercent() {
    return Shader.ambientPercent;
  }
  
  /**
   *  df in I = df * (N dot L) + sf * (R dot V)^p
   * 
   * @param val
   */
  public synchronized static void setDiffusePercent(int val) {
    if (Shader.diffusePercent == val)
      return;
    Shader.diffusePercent = val;
    Shader.diffuseFactor = val / 100f;
    flushCaches();
  }

  public static int getDiffusePercent() {
    return Shader.diffusePercent;
  }
  
  /**
   *  p in I = df * (N dot L) + sf * (R dot V)^p
   * 
   * @param val
   */
  public synchronized static void setPhongExponent(int val) {
    if (Shader.phongExponent == val && Shader.usePhongExponent)
      return;
    Shader.phongExponent = val;
    float x = (float) (Math.log(val) / Math.log(2));
    Shader.usePhongExponent = (x != (int) x);
    if (!Shader.usePhongExponent)
      Shader.specularExponent = (int) x;
    flushCaches();
  }

  public static int getPhongExponent() {
    return Shader.phongExponent;
  }

  /**
   *  log_2(p) in I = df * (N dot L) + sf * (R dot V)^p
   *  for faster calculation of shades
   *  
   * @param val
   */
  public synchronized static void setSpecularExponent(int val) {
    if (Shader.specularExponent == val)
      return;
    Shader.specularExponent = val;
    Shader.phongExponent = (int) Math.pow(2, val);
    Shader.usePhongExponent = false;
    flushCaches();
  }
  
  public static int getSpecularExponent() {
    return Shader.specularExponent;
  }
  
  /**
   *  sf in I = df * (N dot L) + sf * (R dot V)^p
   *  not a percent of anything, really
   *
   * @param val
   */
  public synchronized static void setSpecularPercent(int val) {
    if (Shader.specularPercent == val)
      return;
    Shader.specularPercent = val;
    Shader.specularFactor = val / 100f;
    flushCaches();
  }

  public static int getSpecularPercent() {
    return Shader.specularPercent;
  }

  /**
   *  fractional distance to white for specular dot
   * 
   * @param val
   */
  public synchronized static void setSpecularPower(int val) {
    if (val < 0) {
      setSpecularExponent(-val);
      return;
    }
    if (Shader.specularPower == val)
      return;
    Shader.specularPower = val;
    Shader.intenseFraction = val / 100f;
    flushCaches();
  }
  
  public static int getSpecularPower() {
    return Shader.specularPower;
  }
  
  private final Vector3f vectorAB = new Vector3f();
  private final Vector3f vectorAC = new Vector3f();
  private final Vector3f vectorNormal = new Vector3f();
	private int currentShadeIndex;
	private Object[] shadesCurrent;
	private Object argbCurrent;
	private Object argbNoisyUp;
	private Object argbNoisyDn;

  void setColorNoisy(int shadeIndex) {
    currentShadeIndex = shadeIndex;
    argbCurrent = shadesCurrent[shadeIndex];
    argbNoisyUp = shadesCurrent[shadeIndex < Shader.shadeIndexLast ? shadeIndex + 1
        : Shader.shadeIndexLast];
    argbNoisyDn = shadesCurrent[shadeIndex > 0 ? shadeIndex - 1 : 0];
  }

  /**
   *  used by CartoonRenderer (DNA surface) and GeoSurfaceRenderer (face) to
   *  assign a noisy shade to the surface it will render
   * @param screenA 
   * @param screenB 
   * @param screenC 
   */
  public void setNoisySurfaceShade(Point3i screenA, Point3i screenB, Point3i screenC) {
    vectorAB.set(screenB.x - screenA.x, screenB.y - screenA.y, screenB.z
        - screenA.z);
    int shadeIndex;
    if (screenC == null) {
      shadeIndex = Shader.getShadeIndex(-vectorAB.x, -vectorAB.y, vectorAB.z);
    } else {
      vectorAC.set(screenC.x - screenA.x, screenC.y - screenA.y, screenC.z
          - screenA.z);
      vectorAB.cross(vectorAB, vectorAC);
      shadeIndex = vectorAB.z >= 0 ? Shader.getShadeIndex(-vectorAB.x,
          -vectorAB.y, vectorAB.z) : Shader.getShadeIndex(vectorAB.x,
          vectorAB.y, -vectorAB.z);
    }
    if (shadeIndex > Shader.shadeIndexNoisyLimit)
      shadeIndex = Shader.shadeIndexNoisyLimit;
    setColorNoisy(shadeIndex);
  }

  private int getShadeIndex(Point3f screenA,
                                 Point3f screenB, Point3f screenC) {
    // for fillTriangle and fillQuad.
    vectorAB.sub(screenB, screenA);
    vectorAC.sub(screenC, screenA);
    vectorNormal.cross(vectorAB, vectorAC);
    return
      (vectorNormal.z >= 0
            ? Shader.getShadeIndex(-vectorNormal.x, -vectorNormal.y,
                                    vectorNormal.z)
            : Shader.getShadeIndex(vectorNormal.x, vectorNormal.y,
                                    -vectorNormal.z));
  }
	public void setWindowParameters(int width, int height,
			boolean antialiasDisplay) {
		// TODO Auto-generated method stub
		
	}
	public static int getFontStyleID(String fontface) {
		// TODO Auto-generated method stub
		return -1;
	}

	public boolean isInDisplayRange(int screenX, int screenY) {
		// TODO Auto-generated method stub
		return false;
	}

	public boolean isClippedZ(int screenZ) {
		// TODO Auto-generated method stub
		return false;
	}

  public static void getHermiteList(int tension, Tuple3f s0, Tuple3f s1, Tuple3f s2, Tuple3f s3, Tuple3f s4, Tuple3f[] list, int index0, int n) {
    Hermite3D.getHermiteList(tension, s0, s1, s2, s3, s4, list, index0, n);
  }

	public boolean isAntialiased() {
		// TODO Auto-generated method stub
		return false;
	}

	public int getSlab() {
		// TODO Auto-generated method stub
		return 100;
	}

	public int getDepth() {
		// TODO Auto-generated method stub
		return 0;
	}

	public boolean currentlyRendering() {
		// TODO Auto-generated method stub
		return false;
	}

	public void renderBackground() {
		// TODO Auto-generated method stub
		
	}

	public void setGreyscaleMode(boolean b) {
		// TODO Auto-generated method stub
		
	}

	public void releaseScreenImage() {
		// TODO Auto-generated method stub
		
	}

	public Font3D getFont3D(String fontFace, String fontStyle, float fontSize) {
		// TODO Auto-generated method stub
		return null;
	}

	public void destroy() {
		// TODO Auto-generated method stub
		
	}

	public void setBackgroundTransparent(boolean b) {
		// TODO Auto-generated method stub
		
	}

	public void setBackgroundArgb(int argb) {
		// TODO Auto-generated method stub
		
	}

	public void setSlabAndDepthValues(int slabValue, int depthValue,
			boolean zShadeEnabled, int zSlabValue, int zDepthValue) {
		// TODO Auto-generated method stub
		
	}


}
