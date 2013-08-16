$.ajaxSetup({
  accepts: { binary: "text/plain; charset=x-user-defined" },
})

$.ajaxTransport('binary', function(s) {
  return {
    // no asynchronous binary here.
		send: function( headers, complete ) {
			var xhr = s.xhr();
			xhr.open( s.type, s.url, false );
      // my addition
      if (xhr.hasOwnProperty("responseType")) {
        xhr.responseType = "arraybuffer";
      } else if (xhr.overrideMimeType) {
        xhr.overrideMimeType('text/plain; charset=x-user-defined');
      }
			if ( !s.crossDomain && !headers["X-Requested-With"] ) {
				headers["X-Requested-With"] = "XMLHttpRequest";
			}
			try {
				for (var i in headers )
					xhr.setRequestHeader( i, headers[ i ] );
			} catch( err ) {}
			xhr.send( ( s.hasContent && s.data ) || null );
			callback = function( _, isAbort ) {
				var status, responseHeaders, statusText, responses;
				try {
					if ( callback && ( isAbort || xhr.readyState === 4 ) ) {
						callback = undefined;
						if ( isAbort ) {
							if ( xhr.readyState !== 4 ) {
								xhr.abort();
							}
						} else {
							responses = {};
							status = xhr.status;
							responseHeaders = xhr.getAllResponseHeaders();
							if ( typeof xhr.responseText === "string" ) {
								responses.text = xhr.responseText;
							}
							try {
								statusText = xhr.statusText;
							} catch( e ) {
								statusText = "";
							}
							if ( !status && s.isLocal && !s.crossDomain ) {
								status = responses.text ? 200 : 404;
							} else if ( status === 1223 ) {
								status = 204;
							}
						}
					}
				} catch( firefoxAccessException ) {
					if ( !isAbort ) {
						complete( -1, firefoxAccessException );
					}
				}
				if ( responses ) {
					complete( status, statusText, responses, responseHeaders );
				}
			};
			callback();
		},
		abort: function() {
			if ( callback ) {
				callback( undefined, true );
			}
		}
	};
});
