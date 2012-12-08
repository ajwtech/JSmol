/*
 * Copyright 1995-2007 Sun Microsystems, Inc.  All Rights Reserved.
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 *
 * This code is free software; you can redistribute it and/or modify it
 * under the terms of the GNU General Public License version 2 only, as
 * published by the Free Software Foundation.  Sun designates this
 * particular file as subject to the "Classpath" exception as provided
 * by Sun in the LICENSE file that accompanied this code.
 *
 * This code is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License
 * version 2 for more details (a copy is included in the LICENSE file that
 * accompanied this code).
 *
 * You should have received a copy of the GNU General Public License version
 * 2 along with this work; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA.
 *
 * Please contact Sun Microsystems, Inc., 4150 Network Circle, Santa Clara,
 * CA 95054 USA or visit www.sun.com if you need additional information or
 * have any questions.
 */

// source: http://grepcode.com/file_/repository.grepcode.com/java/root/jdk/openjdk/6-b14/java/net/URL.java/?v=source

package java.net;

import java.io.IOException;
import java.io.InputStream;
import java.util.Hashtable;
//import sun.security.util.SecurityConstants;

/**
 * Class <code>URL</code> represents a Uniform Resource
 * Locator, a pointer to a "resource" on the World
 * Wide Web. A resource can be something as simple as a file or a
 * directory, or it can be a reference to a more complicated object,
 * such as a query to a database or to a search engine. More
 * information on the types of URLs and their formats can be found at:
 * <blockquote>
 *     <a href="http://www.socs.uts.edu.au/MosaicDocs-old/url-primer.html">
 *    <i>http://www.socs.uts.edu.au/MosaicDocs-old/url-primer.html</i></a>
 * </blockquote>
 * <p>
 * In general, a URL can be broken into several parts. The previous
 * example of a URL indicates that the protocol to use is
 * <code>http</code> (HyperText Transfer Protocol) and that the
 * information resides on a host machine named
 * <code>www.socs.uts.edu.au</code>. The information on that host
 * machine is named <code>/MosaicDocs-old/url-primer.html</code>. The exact
 * meaning of this name on the host machine is both protocol
 * dependent and host dependent. The information normally resides in
 * a file, but it could be generated on the fly. This component of
 * the URL is called the <i>path</i> component.
 * <p>
 * A URL can optionally specify a "port", which is the
 * port number to which the TCP connection is made on the remote host
 * machine. If the port is not specified, the default port for
 * the protocol is used instead. For example, the default port for
 * <code>http</code> is <code>80</code>. An alternative port could be
 * specified as:
 * <blockquote><pre>
 *     http://www.socs.uts.edu.au:80/MosaicDocs-old/url-primer.html
 * </pre></blockquote>
 * <p>
 * The syntax of <code>URL</code> is defined by  <a
 * href="http://www.ietf.org/rfc/rfc2396.txt""><i>RFC&nbsp;2396: Uniform
 * Resource Identifiers (URI): Generic Syntax</i></a>, amended by <a
 * href="http://www.ietf.org/rfc/rfc2732.txt"><i>RFC&nbsp;2732: Format for
 * Literal IPv6 Addresses in URLs</i></a>. The Literal IPv6 address format
 * also supports scope_ids. The syntax and usage of scope_ids is described
 * <a href="Inet6Address.html#scoped">here</a>.
 * <p>
 * A URL may have appended to it a "fragment", also known
 * as a "ref" or a "reference". The fragment is indicated by the sharp
 * sign character "#" followed by more characters. For example,
 * <blockquote><pre>
 *     http://java.sun.com/index.html#chapter1
 * </pre></blockquote>
 * <p>
 * This fragment is not technically part of the URL. Rather, it
 * indicates that after the specified resource is retrieved, the
 * application is specifically interested in that part of the
 * document that has the tag <code>chapter1</code> attached to it. The
 * meaning of a tag is resource specific.
 * <p>
 * An application can also specify a "relative URL",
 * which contains only enough information to reach the resource
 * relative to another URL. Relative URLs are frequently used within
 * HTML pages. For example, if the contents of the URL:
 * <blockquote><pre>
 *     http://java.sun.com/index.html
 * </pre></blockquote>
 * contained within it the relative URL:
 * <blockquote><pre>
 *     FAQ.html
 * </pre></blockquote>
 * it would be a shorthand for:
 * <blockquote><pre>
 *     http://java.sun.com/FAQ.html
 * </pre></blockquote>
 * <p>
 * The relative URL need not specify all the components of a URL. If
 * the protocol, host name, or port number is missing, the value is
 * inherited from the fully specified URL. The file component must be
 * specified. The optional fragment is not inherited.
 * <p>
 * The URL class does not itself encode or decode any URL components
 * according to the escaping mechanism defined in RFC2396. It is the
 * responsibility of the caller to encode any fields, which need to be
 * escaped prior to calling URL, and also to decode any escaped fields,
 * that are returned from URL. Furthermore, because URL has no knowledge
 * of URL escaping, it does not recognise equivalence between the encoded
 * or decoded form of the same URL. For example, the two URLs:<br>
 * <pre>    http://foo.com/hello world/ and http://foo.com/hello%20world</pre>
 * would be considered not equal to each other.
 * <p>
 * Note, the {@link java.net.URI} class does perform escaping of its
 * component fields in certain circumstances. The recommended way
 * to manage the encoding and decoding of URLs is to use {@link java.net.URI},
 * and to convert between these two classes using {link #toURI()} and
 * {@link URI#toURL()}.
 * <p>
 * The {@link URLEncoder} and {@link URLDecoder} classes can also be
 * used, but only for HTML form encoding, which is not the same
 * as the encoding scheme defined in RFC2396.
 *
 * @author  James Gosling
 * @since JDK1.0
 */
public final class URL implements java.io.Serializable {

    static final long serialVersionUID = -7627629688361524110L;

    /**
     * The property which specifies the package prefix list to be scanned
     * for protocol handlers.  The value of this property (if any) should
     * be a vertical bar delimited list of package names to search through
     * for a protocol handler to load.  The policy of this class is that
     * all protocol handlers will be in a class called <protocolname>.Handler,
     * and each package in the list is examined in turn for a matching
     * handler.  If none are found (or the property is not specified), the
     * default package prefix, sun.net.www.protocol, is used.  The search
     * proceeds from the first package in the list to the last and stops
     * when a match is found.
     */
//    private static final String protocolPathProp = "java.protocol.handler.pkgs";

    /**
     * The protocol to use (ftp, http, nntp, ... etc.) .
     * @serial
     */
    private String protocol;

    /**
     * The host name to connect to.
     * @serial
     */
    private String host;

    /**
     * The protocol port to connect to.
     * @serial
     */
    private int port = -1;

    /**
     * The specified file name on that host. <code>file</code> is
     * defined as <code>path[?query]</code>
     * @serial
     */
    private String file;

    /**
     * The query part of this URL.
     */
    private transient String query;

    /**
     * The authority part of this URL.
     * @serial
     */
    private String authority;

    /**
     * The path part of this URL.
     */
    private transient String path;

    /**
     * The userinfo part of this URL.
     */
    private transient String userInfo;

    /**
     * # reference.
     * @serial
     */
    private String ref;

    /**
     * The host's IP address, used in equals and hashCode.
     * Computed on demand. An uninitialized or unknown hostAddress is null.
     */
//    transient InetAddress hostAddress;

    /**
     * The URLStreamHandler for this URL.
     */
    transient URLStreamHandler handler;

    /* Our hash code.
     * @serial
     */
    private int hashCode = -1;

//    /**
//     * Creates a <code>URL</code> object from the specified
//     * <code>protocol</code>, <code>host</code>, <code>port</code>
//     * number, and <code>file</code>.<p>
//     *
//     * <code>host</code> can be expressed as a host name or a literal
//     * IP address. If IPv6 literal address is used, it should be
//     * enclosed in square brackets (<tt>'['</tt> and <tt>']'</tt>), as
//     * specified by <a
//     * href="http://www.ietf.org/rfc/rfc2732.txt">RFC&nbsp;2732</a>;
//     * However, the literal IPv6 address format defined in <a
//     * href="http://www.ietf.org/rfc/rfc2373.txt"><i>RFC&nbsp;2373: IP
//     * Version 6 Addressing Architecture</i></a> is also accepted.<p>
//     *
//     * Specifying a <code>port</code> number of <code>-1</code>
//     * indicates that the URL should use the default port for the
//     * protocol.<p>
//     *
//     * If this is the first URL object being created with the specified
//     * protocol, a <i>stream protocol handler</i> object, an instance of
//     * class <code>URLStreamHandler</code>, is created for that protocol:
//     * <ol>
//     * <li>If the application has previously set up an instance of
//     *     <code>URLStreamHandlerFactory</code> as the stream handler factory,
//     *     then the <code>createURLStreamHandler</code> method of that instance
//     *     is called with the protocol string as an argument to create the
//     *     stream protocol handler.
//     * <li>If no <code>URLStreamHandlerFactory</code> has yet been set up,
//     *     or if the factory's <code>createURLStreamHandler</code> method
//     *     returns <code>null</code>, then the constructor finds the
//     *     value of the system property:
//     *     <blockquote><pre>
//     *         java.protocol.handler.pkgs
//     *     </pre></blockquote>
//     *     If the value of that system property is not <code>null</code>,
//     *     it is interpreted as a list of packages separated by a vertical
//     *     slash character '<code>|</code>'. The constructor tries to load
//     *     the class named:
//     *     <blockquote><pre>
//     *         &lt;<i>package</i>&gt;.&lt;<i>protocol</i>&gt;.Handler
//     *     </pre></blockquote>
//     *     where &lt;<i>package</i>&gt; is replaced by the name of the package
//     *     and &lt;<i>protocol</i>&gt; is replaced by the name of the protocol.
//     *     If this class does not exist, or if the class exists but it is not
//     *     a subclass of <code>URLStreamHandler</code>, then the next package
//     *     in the list is tried.
//     * <li>If the previous step fails to find a protocol handler, then the
//     *     constructor tries to load from a system default package.
//     *     <blockquote><pre>
//     *         &lt;<i>system default package</i>&gt;.&lt;<i>protocol</i>&gt;.Handler
//     *     </pre></blockquote>
//     *     If this class does not exist, or if the class exists but it is not a
//     *     subclass of <code>URLStreamHandler</code>, then a
//     *     <code>MalformedURLException</code> is thrown.
//     * </ol>
//     *
//     * <p>Protocol handlers for the following protocols are guaranteed
//     * to exist on the search path :-
//     * <blockquote><pre>
//     *     http, https, ftp, file, and jar
//     * </pre></blockquote>
//     * Protocol handlers for additional protocols may also be
//     * available.
//     *
//     * <p>No validation of the inputs is performed by this constructor.
//     *
//     * @param      protocol   the name of the protocol to use.
//     * @param      host       the name of the host.
//     * @param      port       the port number on the host.
//     * @param      file       the file on the host
//     * @exception  MalformedURLException  if an unknown protocol is specified.
//     * @see        java.lang.System#getProperty(java.lang.String)
//     * @see        java.net.URL#setURLStreamHandlerFactory(
//     *                  java.net.URLStreamHandlerFactory)
//     * @see        java.net.URLStreamHandler
//     * @see        java.net.URLStreamHandlerFactory#createURLStreamHandler(
//     *                  java.lang.String)
//     */
//    public URL(String protocol, String host, int port, String file)
//        throws MalformedURLException
//    {
//        this(protocol, host, port, file, null);
//    }

//    /**
//     * Creates a URL from the specified <code>protocol</code>
//     * name, <code>host</code> name, and <code>file</code> name. The
//     * default port for the specified protocol is used.
//     * <p>
//     * This method is equivalent to calling the four-argument
//     * constructor with the arguments being <code>protocol</code>,
//     * <code>host</code>, <code>-1</code>, and <code>file</code>.
//     *
//     * No validation of the inputs is performed by this constructor.
//     *
//     * @param      protocol   the name of the protocol to use.
//     * @param      host       the name of the host.
//     * @param      file       the file on the host.
//     * @exception  MalformedURLException  if an unknown protocol is specified.
//     * @see        java.net.URL#URL(java.lang.String, java.lang.String,
//     *                  int, java.lang.String)
//     */
//    public URL(String protocol, String host, String file)
//            throws MalformedURLException {
//        this(protocol, host, -1, file);
//    }

//    /**
//     * Creates a <code>URL</code> object from the specified
//     * <code>protocol</code>, <code>host</code>, <code>port</code>
//     * number, <code>file</code>, and <code>handler</code>. Specifying
//     * a <code>port</code> number of <code>-1</code> indicates that
//     * the URL should use the default port for the protocol. Specifying
//     * a <code>handler</code> of <code>null</code> indicates that the URL
//     * should use a default stream handler for the protocol, as outlined
//     * for:
//     *     java.net.URL#URL(java.lang.String, java.lang.String, int,
//     *                      java.lang.String)
//     *
//     * <p>If the handler is not null and there is a security manager,
//     * the security manager's <code>checkPermission</code>
//     * method is called with a
//     * <code>NetPermission("specifyStreamHandler")</code> permission.
//     * This may result in a SecurityException.
//     *
//     * No validation of the inputs is performed by this constructor.
//     *
//     * @param      protocol   the name of the protocol to use.
//     * @param      host       the name of the host.
//     * @param      port       the port number on the host.
//     * @param      file       the file on the host
//     * @param      handler    the stream handler for the URL.
//     * @exception  MalformedURLException  if an unknown protocol is specified.
//     * @exception  SecurityException
//     *        if a security manager exists and its
//     *        <code>checkPermission</code> method doesn't allow
//     *        specifying a stream handler explicitly.
//     * @see        java.lang.System#getProperty(java.lang.String)
//     * @see        java.net.URL#setURLStreamHandlerFactory(
//     *                  java.net.URLStreamHandlerFactory)
//     * @see        java.net.URLStreamHandler
//     * @see        java.net.URLStreamHandlerFactory#createURLStreamHandler(
//     *                  java.lang.String)
//     * @see        SecurityManager#checkPermission
//     * @see        java.net.NetPermission
//     */
//    public URL(String protocol, String host, int port, String file,
//               URLStreamHandler handler) throws MalformedURLException {
//        if (handler != null) {
//            SecurityManager sm = System.getSecurityManager();
//            if (sm != null) {
//                // check for permission to specify a handler
//                checkSpecifyHandler(sm);
//            }
//        }
//
//        protocol = protocol.toLowerCase();
//        this.protocol = protocol;
//        if (host != null) {
//
//            /**
//             * if host is a literal IPv6 address,
//             * we will make it conform to RFC 2732
//             */
//            if (host.indexOf(':') >= 0 && !host.startsWith("[")) {
//                host = "["+host+"]";
//            }
//            this.host = host;
//
//            if (port < -1) {
//                throw new MalformedURLException("Invalid port number :" +
//                                                    port);
//            }
//            this.port = port;
//            authority = (port == -1) ? host : host + ":" + port;
//        }
//
//        Parts parts = new Parts(file);
//        path = parts.getPath();
//        query = parts.getQuery();
//
//        if (query != null) {
//            this.file = path + "?" + query;
//        } else {
//            this.file = path;
//        }
//        ref = parts.getRef();
//
//        // Note: we don't do validation of the URL here. Too risky to change
//        // right now, but worth considering for future reference. -br
//        if (handler == null &&
//            (handler = getURLStreamHandler(protocol)) == null) {
//            throw new MalformedURLException("unknown protocol: " + protocol);
//        }
//        this.handler = handler;
//    }

//    /**
//     * Creates a <code>URL</code> object from the <code>String</code>
//     * representation.
//     * <p>
//     * This constructor is equivalent to a call to the two-argument
//     * constructor with a <code>null</code> first argument.
//     *
//     * @param      spec   the <code>String</code> to parse as a URL.
//     * @exception  MalformedURLException  If the string specifies an
//     *               unknown protocol.
//     * see        java.net.URL#URL(java.net.URL, java.lang.String)
//     */
//    public URL(String spec) throws MalformedURLException {
//        this((URL) null, spec, null);
//    }

//    /**
//     * Creates a URL by parsing the given spec within a specified context.
//     *
//     * The new URL is created from the given context URL and the spec
//     * argument as described in
//     * RFC2396 &quot;Uniform Resource Identifiers : Generic * Syntax&quot; :
//     * <blockquote><pre>
//     *          &lt;scheme&gt;://&lt;authority&gt;&lt;path&gt;?&lt;query&gt;#&lt;fragment&gt;
//     * </pre></blockquote>
//     * The reference is parsed into the scheme, authority, path, query and
//     * fragment parts. If the path component is empty and the scheme,
//     * authority, and query components are undefined, then the new URL is a
//     * reference to the current document. Otherwise, the fragment and query
//     * parts present in the spec are used in the new URL.
//     * <p>
//     * If the scheme component is defined in the given spec and does not match
//     * the scheme of the context, then the new URL is created as an absolute
//     * URL based on the spec alone. Otherwise the scheme component is inherited
//     * from the context URL.
//     * <p>
//     * If the authority component is present in the spec then the spec is
//     * treated as absolute and the spec authority and path will replace the
//     * context authority and path. If the authority component is absent in the
//     * spec then the authority of the new URL will be inherited from the
//     * context.
//     * <p>
//     * If the spec's path component begins with a slash character
//     * &quot;/&quot; then the
//     * path is treated as absolute and the spec path replaces the context path.
//     * <p>
//     * Otherwise, the path is treated as a relative path and is appended to the
//     * context path, as described in RFC2396. Also, in this case,
//     * the path is canonicalized through the removal of directory
//     * changes made by occurences of &quot;..&quot; and &quot;.&quot;.
//     * <p>
//     * For a more detailed description of URL parsing, refer to RFC2396.
//     *
//     * @param      context   the context in which to parse the specification.
//     * @param      spec      the <code>String</code> to parse as a URL.
//     * @exception  MalformedURLException  if no protocol is specified, or an
//     *               unknown protocol is found.
//     * see        java.net.URL#URL(java.lang.String, java.lang.String,
//     *                  int, java.lang.String)
//     * @see        java.net.URLStreamHandler
//     * @see        java.net.URLStreamHandler#parseURL(java.net.URL,
//     *                  java.lang.String, int, int)
//     */
//    public URL(URL context, String spec) throws MalformedURLException {
//        this(context, spec, null);
//    }

    /**
     * Creates a URL by parsing the given spec with the specified handler
     * within a specified context. If the handler is null, the parsing
     * occurs as with the two argument constructor.
     *
     * @param      context   the context in which to parse the specification.
     * @param      spec      the <code>String</code> to parse as a URL.
     * @param      handler   the stream handler for the URL.
     * @exception  MalformedURLException  if no protocol is specified, or an
     *               unknown protocol is found.
     * @exception  SecurityException
     *        if a security manager exists and its
     *        <code>checkPermission</code> method doesn't allow
     *        specifying a stream handler.
     * see        java.net.URL#URL(java.lang.String, java.lang.String,
     *                  int, java.lang.String)
     * @see        java.net.URLStreamHandler
     * @see        java.net.URLStreamHandler#parseURL(java.net.URL,
     *                  java.lang.String, int, int)
     */
    public URL(URL context, String spec, URLStreamHandler handler)
        throws MalformedURLException
    {
        String original = spec;
        int i, limit, c;
        int start = 0;
        String newProtocol = null;
        boolean aRef=false;
        boolean isRelative = false;

        // Check for permission to specify a handler
        if (handler != null) {
            SecurityManager sm = System.getSecurityManager();
            if (sm != null) {
                checkSpecifyHandler(sm);
            }
        }

        try {
            limit = spec.length();
            while ((limit > 0) && (spec.charAt(limit - 1) <= ' ')) {
                limit--;        //eliminate trailing whitespace
            }
            while ((start < limit) && (spec.charAt(start) <= ' ')) {
                start++;        // eliminate leading whitespace
            }

            if (spec.regionMatches(true, start, "url:", 0, 4)) {
                start += 4;
            }
            if (start < spec.length() && spec.charAt(start) == '#') {
                /* we're assuming this is a ref relative to the context URL.
                 * This means protocols cannot start w/ '#', but we must parse
                 * ref URL's like: "hello:there" w/ a ':' in them.
                 */
                aRef=true;
            }
            for (i = start ; !aRef && (i < limit) &&
                     ((c = spec.charAt(i)) != '/') ; i++) {
                if (c == ':') {

                    String s = spec.substring(start, i).toLowerCase();
                    if (isValidProtocol(s)) {
                        newProtocol = s;
                        start = i + 1;
                    }
                    break;
                }
            }

            // Only use our context if the protocols match.
            protocol = newProtocol;
            if ((context != null) && ((newProtocol == null) ||
                            newProtocol.equalsIgnoreCase(context.protocol))) {
                // inherit the protocol handler from the context
                // if not specified to the constructor
                if (handler == null) {
                    handler = context.handler;
                }

                // If the context is a hierarchical URL scheme and the spec
                // contains a matching scheme then maintain backwards
                // compatibility and treat it as if the spec didn't contain
                // the scheme; see 5.2.3 of RFC2396
                if (context.path != null && context.path.startsWith("/"))
                    newProtocol = null;

                if (newProtocol == null) {
                    protocol = context.protocol;
                    authority = context.authority;
                    userInfo = context.userInfo;
                    host = context.host;
                    port = context.port;
                    file = context.file;
                    path = context.path;
                    isRelative = true;
                }
            }

            if (protocol == null) {
                throw new MalformedURLException("no protocol: "+original);
            }

            // Get the protocol handler if not specified or the protocol
            // of the context could not be used
            if (handler == null &&
                (handler = getURLStreamHandler(protocol)) == null) {
                throw new MalformedURLException("unknown protocol: "+protocol);
            }

            this.handler = handler;

            i = spec.indexOf('#', start);
            if (i >= 0) {
                ref = spec.substring(i + 1, limit);
                limit = i;
            }

            /*
             * Handle special case inheritance of query and fragment
             * implied by RFC2396 section 5.2.2.
             */
            if (isRelative && start == limit) {
                query = context.query;
                if (ref == null) {
                    ref = context.ref;
                }
            }

            handler.parseURL(this, spec, start, limit);

        } catch(MalformedURLException e) {
            throw e;
        } catch(Exception e) {
            MalformedURLException exception = new MalformedURLException(e.getMessage());
            exception.initCause(e);
            throw exception;
        }
    }

    /*
     * Returns true if specified string is a valid protocol name.
     */
    private boolean isValidProtocol(String protocol) {
        int len = protocol.length();
        if (len < 1)
            return false;
        char c = protocol.charAt(0);
        if (!Character.isLetter(c))
            return false;
        for (int i = 1; i < len; i++) {
            c = protocol.charAt(i);
            if (!Character.isLetterOrDigit(c) && c != '.' && c != '+' &&
                c != '-') {
                return false;
            }
        }
        return true;
    }

    /*
     * Checks for permission to specify a stream handler.
     */
    private void checkSpecifyHandler(@SuppressWarnings("unused") SecurityManager sm) {
        //sm.checkPermission(SecurityConstants.SPECIFY_HANDLER_PERMISSION);
    }

    /**
     * Sets the fields of the URL. This is not a public method so that
     * only URLStreamHandlers can modify URL fields. URLs are
     * otherwise constant.
     *
     * @param protocol the name of the protocol to use
     * @param host the name of the host
       @param port the port number on the host
     * @param file the file on the host
     * @param ref the internal reference in the URL
     */
    protected void set5(String protocol, String host,
                       int port, String file, String ref) {
        synchronized (this) {
            this.protocol = protocol;
            this.host = host;
            authority = port == -1 ? host : host + ":" + port;
            this.port = port;
            this.file = file;
            this.ref = ref;
            /* This is very important. We must recompute this after the
             * URL has been changed. */
            hashCode = -1;
            //hostAddress = null;
            int q = file.lastIndexOf('?');
            if (q != -1) {
                query = file.substring(q+1);
                path = file.substring(0, q);
            } else
                path = file;
        }
    }

    /**
     * Sets the specified 8 fields of the URL. This is not a public method so
     * that only URLStreamHandlers can modify URL fields. URLs are otherwise
     * constant.
     *
     * @param protocol the name of the protocol to use
     * @param host the name of the host
     * @param port the port number on the host
     * @param authority the authority part for the url
     * @param userInfo the username and password
     * @param path the file on the host
     * @param ref the internal reference in the URL
     * @param query the query part of this URL
     * @since 1.3
     */
    protected void set(String protocol, String host, int port,
                       String authority, String userInfo, String path,
                       String query, String ref) {
        synchronized (this) {
            this.protocol = protocol;
            this.host = host;
            this.port = port;
            this.file = query == null ? path : path + "?" + query;
            this.userInfo = userInfo;
            this.path = path;
            this.ref = ref;
            /* This is very important. We must recompute this after the
             * URL has been changed. */
            hashCode = -1;
            //hostAddress = null;
            this.query = query;
            this.authority = authority;
        }
    }

    /**
     * Gets the query part of this <code>URL</code>.
     *
     * @return  the query part of this <code>URL</code>,
     * or <CODE>null</CODE> if one does not exist
     * @since 1.3
     */
    public String getQuery() {
        return query;
    }

    /**
     * Gets the path part of this <code>URL</code>.
     *
     * @return  the path part of this <code>URL</code>, or an
     * empty string if one does not exist
     * @since 1.3
     */
    public String getPath() {
        return path;
    }

    /**
     * Gets the userInfo part of this <code>URL</code>.
     *
     * @return  the userInfo part of this <code>URL</code>, or
     * <CODE>null</CODE> if one does not exist
     * @since 1.3
     */
    public String getUserInfo() {
        return userInfo;
    }

    /**
     * Gets the authority part of this <code>URL</code>.
     *
     * @return  the authority part of this <code>URL</code>
     * @since 1.3
     */
    public String getAuthority() {
        return authority;
    }

    /**
     * Gets the port number of this <code>URL</code>.
     *
     * @return  the port number, or -1 if the port is not set
     */
    public int getPort() {
        return port;
    }

    /**
     * Gets the default port number of the protocol associated
     * with this <code>URL</code>. If the URL scheme or the URLStreamHandler
     * for the URL do not define a default port number,
     * then -1 is returned.
     *
     * @return  the port number
     * @since 1.4
     */
    public int getDefaultPort() {
        return handler.getDefaultPort();
    }

    /**
     * Gets the protocol name of this <code>URL</code>.
     *
     * @return  the protocol of this <code>URL</code>.
     */
    public String getProtocol() {
        return protocol;
    }

    /**
     * Gets the host name of this <code>URL</code>, if applicable.
     * The format of the host conforms to RFC 2732, i.e. for a
     * literal IPv6 address, this method will return the IPv6 address
     * enclosed in square brackets (<tt>'['</tt> and <tt>']'</tt>).
     *
     * @return  the host name of this <code>URL</code>.
     */
    public String getHost() {
        return host;
    }

    /**
     * Gets the file name of this <code>URL</code>.
     * The returned file portion will be
     * the same as <CODE>getPath()</CODE>, plus the concatenation of
     * the value of <CODE>getQuery()</CODE>, if any. If there is
     * no query portion, this method and <CODE>getPath()</CODE> will
     * return identical results.
     *
     * @return  the file name of this <code>URL</code>,
     * or an empty string if one does not exist
     */
    public String getFile() {
        return file;
    }

    /**
     * Gets the anchor (also known as the "reference") of this
     * <code>URL</code>.
     *
     * @return  the anchor (also known as the "reference") of this
     *          <code>URL</code>, or <CODE>null</CODE> if one does not exist
     */
    public String getRef() {
        return ref;
    }

    /**
     * Compares this URL for equality with another object.<p>
     *
     * If the given object is not a URL then this method immediately returns
     * <code>false</code>.<p>
     *
     * Two URL objects are equal if they have the same protocol, reference
     * equivalent hosts, have the same port number on the host, and the same
     * file and fragment of the file.<p>
     *
     * Two hosts are considered equivalent if both host names can be resolved
     * into the same IP addresses; else if either host name can't be
     * resolved, the host names must be equal without regard to case; or both
     * host names equal to null.<p>
     *
     * Since hosts comparison requires name resolution, this operation is a
     * blocking operation. <p>
     *
     * Note: The defined behavior for <code>equals</code> is known to
     * be inconsistent with virtual hosting in HTTP.
     *
     * @param   obj   the URL to compare against.
     * @return  <code>true</code> if the objects are the same;
     *          <code>false</code> otherwise.
     */
    @Override
    public boolean equals(Object obj) {
        if (!(obj instanceof URL))
            return false;
        URL u2 = (URL)obj;

        return handler.equals(this, u2);
    }

    /**
     * Creates an integer suitable for hash table indexing.<p>
     *
     * The hash code is based upon all the URL components relevant for URL
     * comparison. As such, this operation is a blocking operation.<p>
     *
     * @return  a hash code for this <code>URL</code>.
     */
    @Override
    public synchronized int hashCode() {
        if (hashCode != -1)
            return hashCode;

        hashCode = handler.hashCode(this);
        return hashCode;
    }

    /**
     * Compares two URLs, excluding the fragment component.<p>
     *
     * Returns <code>true</code> if this <code>URL</code> and the
     * <code>other</code> argument are equal without taking the
     * fragment component into consideration.
     *
     * @param   other   the <code>URL</code> to compare against.
     * @return  <code>true</code> if they reference the same remote object;
     *          <code>false</code> otherwise.
     */
    public boolean sameFile(URL other) {
        return handler.sameFile(this, other);
    }

    /**
     * Constructs a string representation of this <code>URL</code>. The
     * string is created by calling the <code>toExternalForm</code>
     * method of the stream protocol handler for this object.
     *
     * @return  a string representation of this object.
     * see     java.net.URL#URL(java.lang.String, java.lang.String, int,
     *                  java.lang.String)
     * @see     java.net.URLStreamHandler#toExternalForm(java.net.URL)
     */
    @Override
    public String toString() {
        return toExternalForm();
    }

    /**
     * Constructs a string representation of this <code>URL</code>. The
     * string is created by calling the <code>toExternalForm</code>
     * method of the stream protocol handler for this object.
     *
     * @return  a string representation of this object.
     * see     java.net.URL#URL(java.lang.String, java.lang.String,
     *                  int, java.lang.String)
     * @see     java.net.URLStreamHandler#toExternalForm(java.net.URL)
     */
    public String toExternalForm() {
        return handler.toExternalForm(this);
    }

    /**
     * Returns a {@link java.net.URI} equivalent to this URL.
     * This method functions in the same way as <code>new URI (this.toString())</code>.
     * <p>Note, any URL instance that complies with RFC 2396 can be converted
     * to a URI. However, some URLs that are not strictly in compliance
     * can not be converted to a URI.
     *
     * @exception URISyntaxException if this URL is not formatted strictly according to
     *            to RFC2396 and cannot be converted to a URI.
     *
     * @return    a URI instance equivalent to this URL.
     * @since 1.5
     */
//    public URI toURI() throws URISyntaxException {
//        return new URI (toString());
//    }

    /**
     * Returns a <code>URLConnection</code> object that represents a
     * connection to the remote object referred to by the <code>URL</code>.
     *
     * <p>A new connection is opened every time by calling the
     * <code>openConnection</code> method of the protocol handler for
     * this URL.
     *
     * <p>If for the URL's protocol (such as HTTP or JAR), there
     * exists a public, specialized URLConnection subclass belonging
     * to one of the following packages or one of their subpackages:
     * java.lang, java.io, java.util, java.net, the connection
     * returned will be of that subclass. For example, for HTTP an
     * HttpURLConnection will be returned, and for JAR a
     * JarURLConnection will be returned.
     *
     * @return     a <code>URLConnection</code> to the URL.
     * @exception  IOException  if an I/O exception occurs.
     * see        java.net.URL#URL(java.lang.String, java.lang.String,
     *             int, java.lang.String)
     * @see        java.net.URLConnection
     * @see java.net.URLStreamHandler#openConnection(java.net.URL)
     */
    public URLConnection openConnection() throws java.io.IOException {
        return handler.openConnection(this);
    }
/*
    *//**
     * Same as openConnection(), except that the connection will be
     * made through the specified proxy; Protocol handlers that do not
     * support proxing will ignore the proxy parameter and make a
     * normal connection.
     *
     * Calling this method preempts the system's default ProxySelector
     * settings.
     *
     * @param      proxy the Proxy through which this connection
     *             will be made. If direct connection is desired,
     *             Proxy.NO_PROXY should be specified.
     * @return     a <code>URLConnection</code> to the URL.
     * @exception  IOException  if an I/O exception occurs.
     * @exception  SecurityException if a security manager is present
     *             and the caller doesn't have permission to connect
     *             to the proxy.
     * @exception  IllegalArgumentException will be thrown if proxy is null,
     *             or proxy has the wrong type
     * @exception  UnsupportedOperationException if the subclass that
     *             implements the protocol handler doesn't support
     *             this method.
     * @see        java.net.URL#URL(java.lang.String, java.lang.String,
     *             int, java.lang.String)
     * @see        java.net.URLConnection
     * @see        java.net.URLStreamHandler#openConnection(java.net.URL,
     *             java.net.Proxy)
     * @since      1.5
     *//*
    public URLConnection openConnection(Proxy proxy)
        throws java.io.IOException {
        if (proxy == null) {
            throw new IllegalArgumentException("proxy can not be null");
        }

        SecurityManager sm = System.getSecurityManager();
        if (proxy.type() != Proxy.Type.DIRECT && sm != null) {
            InetSocketAddress epoint = (InetSocketAddress) proxy.address();
            if (epoint.isUnresolved())
                sm.checkConnect(epoint.getHostName(), epoint.getPort());
            else
                sm.checkConnect(epoint.getAddress().getHostAddress(),
                                epoint.getPort());
        }
        return handler.openConnection(this, proxy);
    }
*/
    /**
     * Opens a connection to this <code>URL</code> and returns an
     * <code>InputStream</code> for reading from that connection. This
     * method is a shorthand for:
     * <blockquote><pre>
     *     openConnection().getInputStream()
     * </pre></blockquote>
     *
     * @return     an input stream for reading from the URL connection.
     * @exception  IOException  if an I/O exception occurs.
     * @see        java.net.URL#openConnection()
     * @see        java.net.URLConnection#getInputStream()
     */
    public final InputStream openStream() throws java.io.IOException {
        return openConnection().getInputStream();
    }

    /** same as openStream()
     * 
     * @return  input stream
     * @throws IOException
     */
    public Object getContent() throws IOException {
      return openConnection().getInputStream();
    }    

    /**
     * The URLStreamHandler factory.
     */
    static URLStreamHandlerFactory factory;

    /**
     * Sets an application's <code>URLStreamHandlerFactory</code>.
     * This method can be called at most once in a given Java Virtual
     * Machine.
     *
     *<p> The <code>URLStreamHandlerFactory</code> instance is used to
     *construct a stream protocol handler from a protocol name.
     *
     * <p> If there is a security manager, this method first calls
     * the security manager's <code>checkSetFactory</code> method
     * to ensure the operation is allowed.
     * This could result in a SecurityException.
     *
     * @param      fac   the desired factory.
     * @exception  Error  if the application has already set a factory.
     * @exception  SecurityException  if a security manager exists and its
     *             <code>checkSetFactory</code> method doesn't allow
     *             the operation.
     * see        java.net.URL#URL(java.lang.String, java.lang.String,
     *             int, java.lang.String)
     * @see        java.net.URLStreamHandlerFactory
     * @see        SecurityManager#checkSetFactory
     */
    public static void setURLStreamHandlerFactory(URLStreamHandlerFactory fac) {
        synchronized (streamHandlerLock) {
            if (factory != null) {
                throw new Error("factory already defined");
            }
            SecurityManager security = System.getSecurityManager();
            if (security != null) {
                security.checkSetFactory();
            }
            handlers.clear();
            factory = fac;
        }
    }

    /**
     * A table of protocol handlers.
     */
    static Hashtable<String, URLStreamHandler> handlers = new Hashtable<String, URLStreamHandler>();
    private static Object streamHandlerLock = new Object();

    /**
     * Returns the Stream Handler.
     * @param protocol the protocol to use
     * @return handler
     */
    static URLStreamHandler getURLStreamHandler(String protocol) {

        URLStreamHandler handler = handlers.get(protocol);
        if (handler == null) {

           // boolean checkedWithFactory = false;

            // Use the factory (if any)
            if (factory != null) {
                handler = factory.createURLStreamHandler(protocol);
             //   checkedWithFactory = true;
            }
            
        }

        return handler;

    }

    /**
     * WriteObject is called to save the state of the URL to an
     * ObjectOutputStream. The handler is not saved since it is
     * specific to this system.
     * @param s 
     * @throws IOException 
     *
     * @serialData the default write object value. When read back in,
     * the reader must ensure that calling getURLStreamHandler with
     * the protocol variable returns a valid URLStreamHandler and
     * throw an IOException if it does not.
     */
    private synchronized void writeObject(java.io.ObjectOutputStream s)
        throws IOException
    {
        s.defaultWriteObject(); // write the fields
    }

    /**
     * readObject is called to restore the state of the URL from the
     * stream.  It reads the components of the URL and finds the local
     * stream handler.
     * @param s 
     * @throws IOException 
     * @throws ClassNotFoundException 
     */
    private synchronized void readObject(java.io.ObjectInputStream s)
         throws IOException, ClassNotFoundException
    {
        s.defaultReadObject();  // read the fields
        if ((handler = getURLStreamHandler(protocol)) == null) {
            throw new IOException("unknown protocol: " + protocol);
        }

        // Construct authority part
        if (authority == null &&
            ((host != null && host.length() > 0) || port != -1)) {
            if (host == null)
                host = "";
            authority = (port == -1) ? host : host + ":" + port;

            // Handle hosts with userInfo in them
            int at = host.lastIndexOf('@');
            if (at != -1) {
                userInfo = host.substring(0, at);
                host = host.substring(at+1);
            }
        } else if (authority != null) {
            // Construct user info part
            int ind = authority.indexOf('@');
            if (ind != -1)
                userInfo = authority.substring(0, ind);
        }

        // Construct path and query part
        path = null;
        query = null;
        if (file != null) {
            // Fix: only do this if hierarchical?
            int q = file.lastIndexOf('?');
            if (q != -1) {
                query = file.substring(q+1);
                path = file.substring(0, q);
            } else
                path = file;
        }
    }

}

