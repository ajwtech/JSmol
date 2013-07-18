/* $RCSfile$
 * $Author: hansonr $
 * $Date: 2008-04-26 01:52:03 -0500 (Sat, 26 Apr 2008) $
 * $Revision: 9314 $
 *
 * Copyright (C) 2003-2005  Miguel, Jmol Development, www.jmol.org
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

package org.jmol.util;

import java.util.Arrays;
import java.util.Comparator;
import java.util.Hashtable;
import java.util.Map;

/**
 * @author Bob Hanson hansonr@stolaf.edu 6/30/2013
 * @author Simone Sturniolo 
 */
public class Tensor {

  // factors that give reasonable first views of ellipsoids.
  
  private static final float ADP_FACTOR = (float) (Math.sqrt(0.5) / Math.PI);
  private static final float MAGNETIC_SUSCEPTIBILITY_FACTOR = 0.01f;
  private static final float ELECTRIC_FIELD_GRADIENT_FACTOR = 1f;
  private static final float BORN_EFFECTIVE_CHARGE_FACTOR = 1f;
  private static final float INTERACTION_FACTOR = 0.04f;
  
  private static EigenSort tSort; // used for sorting eigenvector/values

  // base data:
  
  public String type;
  public int iType = TYPE_OTHER;
  
  // type is an identifier that the reader/creator delivers:
  //
  // adp    -- crystallographic displacement parameters 
  //           - "erature factors"; t.forThermalEllipsoid = true
  //           - either anisotropic (ADP) or isotropic (IDP)
  // iso      -- isotropic displacement parameters; from org.jmol.symmetry.UnitCell 
  //           - changed to "adp" after setting t.isIsotropic = true
  // ms       -- magnetic susceptibility
  // isc      -- NMR interaction tensors
  //           - will have both atomIndex1 and atomIndex2 defined when
  //           - incorporated into a model
  // charge   -- Born Effective Charge tensor
  // TLS-U    -- Translation/Libration/Skew tensor (anisotropic)
  // TLS-R    -- Translation/Libration/Skew tensor (residual)
  
  private static final String KNOWN_TYPES = ";iso....;adp....;tls-u..;tls-r..;ms.....;efg....;isc....;charge.;";
  private static int getType(String type) {
    int pt = type.indexOf("_");
    if (pt >= 0)
      type = type.substring(0, pt);
    pt = KNOWN_TYPES.indexOf(";" + type.toLowerCase() + ".");
    return (pt < 0 ? TYPE_OTHER : pt / 8); 
  }

  // these may be augmented, but the order should be kept the same within this list 
  // no types  < -1, because these are used in Ellipsoids.getAtomState() as bs.get(iType + 1)
  
  public static final int TYPE_OTHER  = -1;
  public static final int TYPE_ISO    = 0;
  public static final int TYPE_ADP   = 1;
  public static final int TYPE_TLS_U  = 2;
  public static final int TYPE_TLS_R  = 3;
  public static final int TYPE_MS     = 4;
  public static final int TYPE_EFG    = 5;
  public static final int TYPE_ISC    = 6;
  public static final int TYPE_CHARGE = 7;

  public double[][] asymMatrix;
  public double[][] symMatrix;    
  public V3[] eigenVectors;
  public float[] eigenValues;

  // derived type-based information, Jmol-centric, for rendering:
  
  public String altType; // "0" "1" "2"

  // altType is somewhat of a legacy - just lets you use 
  
  //  ellipsoid SET 1
  //  ellipsoid SET 2
  //   etc...
  
  public boolean isIsotropic; // just rendered as balls, not special features
  public boolean forThermalEllipsoid;
  public int eigenSignMask = 7; // signs of eigenvalues; bits 2,1,0 set to 1 if > 0
  private float typeFactor = 1; // an ellipsoid scaling factor depending upon type
  private boolean sortIso;

  // added only after passing
  // the tensor to ModelLoader:
  
  public int modelIndex;
  public int atomIndex1 = -1;
  public int atomIndex2 = -1;

  private static final String infoList = 
    ";............." + ";eigenvalues.." + ";eigenvectors."
  + ";asymmatrix..." + ";symmatrix...." + ";value........"
  + ";isotropy....." + ";anisotropy..." + ";asymmetry...." 
  + ";eulerzyz....." + ";eulerzxz....." + ";quaternion..." 
  + ";indices......" + ";string......." + ";type.........";
  /**
   * returns an object of the specified type, including "eigenvalues",
   * "eigenvectors", "asymmetric", "symmetric", "trace", "indices", and "type"
   * 
   * @param infoType
   * @return Object or null
   */
  public Object getInfo(String infoType) {
    if (infoType.charAt(0) != ';')
      infoType = ";" + infoType + ".";
    switch (infoList.indexOf(infoType) / 14) {
    default:
      // dump all key/value pairs
      Map<String, Object> info = new Hashtable<String, Object>();
      String[] s = Parser.getTokens(TextFormat.replaceAllCharacter(infoList, ";.", ' ').trim());
      Arrays.sort(s);
      for (int i = 0; i < s.length; i++)
        info.put(s[i], getInfo(s[i]));
      return info;
      
    case 1:
      return eigenValues;
    case 2:
      P3[] list = new P3[3];
      for (int i = 0; i < 3; i++)
        list[i] = P3.newP(eigenVectors[i]);
      return list;
      
      
    case 3:
      if (asymMatrix == null)
        return null;
      float[] a = new float[9];
      int pt = 0;
      for (int i = 0; i < 3; i++)
        for (int j = 0; j < 3; j++)
          a[pt++] = (float) asymMatrix[i][j];
      return Matrix3f.newA(a);
    case 4:
      if (symMatrix == null)
        return null;
      float[] b = new float[9];
      int p2 = 0;
      for (int i = 0; i < 3; i++)
        for (int j = 0; j < 3; j++)
          b[p2++] = (float) symMatrix[i][j];
      return Matrix3f.newA(b);
    case 5:
      return Float.valueOf(eigenValues[2]);
    case 6: // isotropy
      return Float.valueOf(getIso());
    case 7: // anisotropy
      // Anisotropy, defined as Vzz-(Vxx+Vyy)/2
      return Float.valueOf(getAnisotropy()); 
    case 8: // asymmetry
      // Asymmetry, defined as (Vyy-Vxx)/(Vzz - Viso)
      return Float.valueOf(getAsymmetry());
 
      
    case 9: // eulerzyz
      return ((Quaternion) getInfo("quaternion")).getEulerZYZ();
    case 10: // eulerzxz
      return ((Quaternion) getInfo("quaternion")).getEulerZXZ();
    case 11: // quaternion
      return Quaternion.getQuaternionFrame(null, eigenVectors[0],
          eigenVectors[1]);
      
      
    case 12: 
      return new int[] { modelIndex, atomIndex1, atomIndex2 };
    case 13:
      return this.toString();
    case 14:
      return type;
    }
  }

  public float getIso() {
    return (eigenValues[0] + eigenValues[1] + eigenValues[2]) / 3;
  }

  public float getAnisotropy() {
    return eigenValues[2] - (eigenValues[0] + eigenValues[1]) / 2;
  }

  public float getAsymmetry() {
    return eigenValues[0] == eigenValues[2] ? 0 : (eigenValues[1] - eigenValues[0])
        / (eigenValues[2] - getIso());
  }

  public static Tensor copyTensor(Tensor t0) {
    Tensor t = new Tensor();
    t.setType(t0.type);
    t.eigenValues = t0.eigenValues;
    t.eigenVectors = t0.eigenVectors;
    t.asymMatrix = t0.asymMatrix;
    t.symMatrix = t0.symMatrix;
    t.eigenSignMask = t0.eigenSignMask;
    t.modelIndex = t0.modelIndex;
    t.atomIndex1 = t0.atomIndex1;
    t.atomIndex2 = t0.atomIndex2;
    return t;
  }

  /**
   * private constructor so that all instantiation must go through one 
   * of the static getTensor... methods to set fields properly.
   * 
   */
  private Tensor() {}
  
  /**
   * Standard constructor for QM tensors
   * 
   * @param asymmetricTensor
   * @param type
   * @return Tensor
   */
  public static Tensor getTensorFromAsymmetricTensor(double[][] asymmetricTensor, String type) {
    double[][] a = new double[3][3];    
    for (int i = 3; --i >= 0;)
      for (int j = 3; --j >= 0;)
        a[i][j] = asymmetricTensor[i][j];
    
    // symmetrize matrix
    if (a [0][1] != a[1][0]) {
      a[0][1] = a[1][0] = (a[0][1] + a[1][0])/2;
    }
    if (a[1][2] != a[2][1]) {
      a[1][2] = a[2][1] = (a[1][2] + a[2][1])/2;
    }
    if (a[0][2] != a[2][0]) {
      a[0][2] = a[2][0] = (a[0][2] + a[2][0])/2;
    }
    Eigen eigen = new Eigen(3);
    eigen.calc(a);
    Matrix3f m = new Matrix3f();
    float[] mm = new float[9];
    for (int i = 0, p = 0; i < 3; i++)
      for (int j = 0; j < 3; j++)
        mm[p++] = (float) a[i][j];
    m.setA(mm);

    V3[] evec = eigen.getEigenVectors3();
    V3 n = new V3();
    V3 cross = new V3();
    for (int i = 0; i < 3; i++) {
      n.setT(evec[i]);
      m.transform(n);
      cross.cross(n, evec[i]);
      //Logger.info("v[i], n, n x v[i]"+ evec[i] + " " + n + " "  + cross);
      n.setT(evec[i]);
       n.normalize();
      cross.cross(evec[i], evec[(i + 1) % 3]);
      //Logger.info("draw id eigv" + i + " " + Escape.eP(evec[i]) + " color " + (i ==  0 ? "red": i == 1 ? "green" : "blue") + " # " + n + " " + cross);
    }
//    Logger.info("eigVal+vec (" + eigen.d[0] + " + " + eigen.e[0]
//        + ")\n             (" + eigen.d[1] + " + " + eigen.e[1]
//        + ")\n             (" + eigen.d[2] + " + " + eigen.e[2] + ")");

    V3[] vectors = new V3[3];
    float[] values = new float[3];
    eigen.fillArrays(vectors, values);
    Tensor t = newTensorType(vectors, values, type);
    t.asymMatrix = asymmetricTensor;
    t.symMatrix = a;
    return t;
  }

  /**
   * Standard constructor for charge and iso 
   * 
   * @param eigenVectors
   * @param eigenValues
   * @param type
   * @return Tensor
   */
  public static Tensor getTensorFromEigenVectors(V3[] eigenVectors,
                                            float[] eigenValues, String type) {
    float[] values = new float[3];
    V3[] vectors = new V3[3];
    for (int i = 0; i < 3; i++) {
      vectors[i] = V3.newV(eigenVectors[i]);
      values[i] = eigenValues[i];
    }    
    return newTensorType(vectors, values, type);
  }

  /**
   * Standard constructor for ellipsoids based on axes 
   * 
   * @param axes
   * @return Tensor
   */
  public static Tensor getTensorFromAxes(V3[] axes) {
    Tensor t = new Tensor();
    t.eigenValues = new float[3];
    t.eigenVectors = new V3[3];
    for (int i = 0; i < 3; i++) {
      t.eigenVectors[i] = V3.newV(axes[i]);
      t.eigenValues[i] = axes[i].length();
      if (t.eigenValues[i] == 0)
        return null;
      t.eigenVectors[i].normalize();
    }
    if (Math.abs(t.eigenVectors[0].dot(t.eigenVectors[1])) > 0.0001f
        || Math.abs(t.eigenVectors[1].dot(t.eigenVectors[2])) > 0.0001f 
        || Math.abs(t.eigenVectors[2].dot(t.eigenVectors[0])) > 0.0001f)
      return null;
    t.setType("other");
    t.sortAndNormalize();
    return t;
  }

  /**
   * standard constructor for thermal ellipsoids convention beta
   * (see http://www.iucr.org/iucr-top/comm/cnom/adp/finrepone/finrepone.html)
   * 
   * @param coefs
   * @return Tensor
   */
  public static Tensor getTensorFromThermalEquation(double[] coefs) {
    Tensor t = new Tensor();
    t.eigenValues = new float[3];
    t.eigenVectors = new V3[3];
    // assumes an ellipsoid centered on 0,0,0
    // called by UnitCell for the initial creation from PDB/CIF ADP data    
    double[][] mat = new double[3][3];
    mat[0][0] = coefs[0]; //XX
    mat[1][1] = coefs[1]; //YY
    mat[2][2] = coefs[2]; //ZZ
    mat[0][1] = mat[1][0] = coefs[3] / 2; //XY
    mat[0][2] = mat[2][0] = coefs[4] / 2; //XZ
    mat[1][2] = mat[2][1] = coefs[5] / 2; //YZ
    Eigen.getUnitVectors(mat, t.eigenVectors, t.eigenValues);
    t.setType("adp");
    t.sortAndNormalize();
    return t;
  }

  /**
   * Note that type may be null here to skip type initialization
   * and allow later setting of type; this should be used with care.
   * 
   * @param type
   * @return "this" for convenience only
   */
  public Tensor setType(String type) {
    if (this.type == null || type == null)
      this.type = type;
    if (type != null)
      processType();
    return this;
  }

  /**
   * Returns a factored eigenvalue; thermal ellipsoids use sqrt(abs(eigenvalue)) for
   * ellipsoid axes; others use just use abs(eigenvalue); all cases get factored by
   * typeFactor
   * 
   * @param i
   * @return factored eigenvalue
   */
  public float getFactoredValue(int i) {
    float f = Math.abs(eigenValues[i]);
    return (forThermalEllipsoid ? (float) Math.sqrt(f) : f) * typeFactor;
  }

  public void setAtomIndexes(int index1, int index2) {
    atomIndex1 = index1;
    atomIndex2 = index2;
  }

  public boolean isSelected(BS bsSelected, int iAtom) {
    return (iAtom >= 0 ? (atomIndex1 == iAtom || atomIndex2 == iAtom)
        : bsSelected.get(atomIndex1)
            && (atomIndex2 < 0 || bsSelected.get(atomIndex2)));
  }

  /**
   * common processing of eigenvectors.
   * 
   * @param vectors
   * @param values
   * @param type
   * @return Tensor
   */
  private static Tensor newTensorType(V3[] vectors, float[] values, String type) {
    Tensor t = new Tensor();
    t.eigenValues = values;
    t.eigenVectors = vectors;
    for (int i = 0; i < 3; i++)
      t.eigenVectors[i].normalize();
    t.setType(type);
    t.sortAndNormalize();
    t.eigenSignMask = (t.eigenValues[0] >= 0 ? 1 : 0)
        + (t.eigenValues[1] >= 0 ? 2 : 0) + (t.eigenValues[2] >= 0 ? 4 : 0);
    return t;
  }

  /**
   * Sets typeFactor, altType, isIsotropic, forThermalEllipsoid;
   * type "iso" changed to "" here.
   * 
   */
  private void processType() {
    
    forThermalEllipsoid = false;
    isIsotropic = false;
    altType = null;
    typeFactor = 1;
    sortIso = false;
    
    switch (iType = getType(type)) {
    case TYPE_ISO:
      forThermalEllipsoid = true;
      isIsotropic = true;
      altType = "1";
      type = "adp";
      break;
    case TYPE_ADP:
      forThermalEllipsoid = true;
      typeFactor = ADP_FACTOR;
      altType = "1";
      break;
    case TYPE_MS:
      sortIso = true;
      typeFactor = MAGNETIC_SUSCEPTIBILITY_FACTOR;
      break;
    case TYPE_EFG:
      sortIso = true;
      typeFactor = ELECTRIC_FIELD_GRADIENT_FACTOR;
      break;
    case TYPE_ISC:
      sortIso = true;
      typeFactor = INTERACTION_FACTOR;
      break;
    case TYPE_CHARGE:
      typeFactor = BORN_EFFECTIVE_CHARGE_FACTOR;
      break;
    case TYPE_TLS_R:
      altType = "2";
      break;
    case TYPE_TLS_U:
      altType = "3";
      break;
    }
  }

  /**
   * The expression:
   * 
   * |sigma_3 - sigma_iso| >= |sigma_1 - sigma_iso| >= |sigma_2 - sigma_iso|
   * 
   * simply sorts the values from largest to smallest or smallest to largest,
   * depending upon the direction of the asymmetry, always setting the last
   * value to be the farthest from the mean. We use a simpler form here:
   * 
   * |sigma_3 - sigma_1| >= |sigma_3 - sigma_2| >= |sigma_2 - sigma_1|
   * 
   * which amounts to the same thing and is prettier. (Think about it!)
   * 
   */
  private void sortAndNormalize() {
    // first sorted 3 2 1, then check for iso-sorting
    Object[][] o = new Object[][] {
        new Object[] { V3.newV(eigenVectors[0]), Float.valueOf(eigenValues[0]) },
        new Object[] { V3.newV(eigenVectors[1]), Float.valueOf(eigenValues[1]) },
        new Object[] { V3.newV(eigenVectors[2]), Float.valueOf(eigenValues[2]) } };
    Arrays.sort(o, getEigenSort());
    for (int i = 0; i < 3; i++) {
      int pt = i;
      eigenVectors[i] = (V3) o[pt][0];
      eigenValues[i] = ((Float) o[pt][1]).floatValue();
    }
    if (sortIso
        && eigenValues[2] - eigenValues[1] < eigenValues[1] - eigenValues[0]) {
      V3 vTemp = eigenVectors[0];
      eigenVectors[0] = eigenVectors[2];
      eigenVectors[2] = vTemp;
      float f = eigenValues[0];
      eigenValues[0] = eigenValues[2];
      eigenValues[2] = f;
    }
    for (int i = 0; i < 3; i++)
      eigenVectors[i].normalize();
  }

  public boolean isEquiv(Tensor t) {
    if (t.iType != iType) 
      return false;
    float f = Math.abs(eigenValues[0] + eigenValues[1] + eigenValues[2]);
    for (int i = 0; i < 3; i++)
      if (Math.abs(t.eigenValues[i] - eigenValues[i]) / f > 0.0003f)
        return false;
    return true;
  }
  private static Comparator<? super Object[]> getEigenSort() {
    return (tSort == null ? (tSort = new EigenSort()) : tSort);
  }

  @Override
  public String toString() {
    return (type + " " + modelIndex + " " + atomIndex1 + " " + atomIndex2 + "\n" + (eigenVectors == null ? ""
        + eigenValues[0] : eigenVectors[0] + "\t" + eigenValues[0] + "\t"
        + "\n" + eigenVectors[1] + "\t" + eigenValues[1] + "\t" + "\n"
        + eigenVectors[2] + "\t" + eigenValues[2] + "\t" + "\n"));
  }

}
