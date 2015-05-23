/**
			 * Cookie plugin
			 *
			 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
			 * Dual licensed under the MIT and GPL licenses:
			 * http://www.opensource.org/licenses/mit-license.php
			 * http://www.gnu.org/licenses/gpl.html
			 *
			 */
 
			jQuery.cookie = function(name, value, options) {
			    if (typeof value != 'undefined') { // name and value given, set cookie
			        options = options || {};
			        if (value === null) {
			            value = '';
			            options.expires = -1;
			        }
			        var expires = '';
			        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
			            var date;
			            if (typeof options.expires == 'number') {
			                date = new Date();
			                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
			            } else {
			                date = options.expires;
			            }
			            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
			        }
			        // CAUTION: Needed to parenthesize options.path and options.domain
			        // in the following expressions, otherwise they evaluate to undefined
			        // in the packed version for some reason...
			        var path = options.path ? '; path=' + (options.path) : '';
			        var domain = options.domain ? '; domain=' + (options.domain) : '';
			        var secure = options.secure ? '; secure' : '';
			        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
			    } else { // only name given, get cookie
			        var cookieValue = null;
			        if (document.cookie && document.cookie != '') {
			            var cookies = document.cookie.split(';');
			            for (var i = 0; i < cookies.length; i++) {
			                var cookie = jQuery.trim(cookies[i]);
			                // Does this cookie string begin with the name we want?
			                if (cookie.substring(0, name.length + 1) == (name + '=')) {
			                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
			                    break;
			                }
			            }
			        }
			        return cookieValue;
			    }
			};
			
			/* Copyright (c) 2006 Mathias Bank (http://www.mathias-bank.de)
			 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) 
			 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
			 * 
			 * Thanks to Hinnerk Ruemenapf - http://hinnerk.ruemenapf.de/ for bug reporting and fixing.
			 */
			 
			jQuery.extend({
			/**
			* Returns get parameters.
			*
			* If the desired param does not exist, null will be returned
			*
			* @example value = $.getURLParam("paramName");
			*/ 
			 getURLParam: function(strParamName){
				  var strReturn = "";
				  var strHref = window.location.href;
				  var bFound=false;
				  
				  var cmpstring = strParamName + "=";
				  var cmplen = cmpstring.length;
			
				  if ( strHref.indexOf("?") > -1 ){
				    var strQueryString = strHref.substr(strHref.indexOf("?")+1);
				    var aQueryString = strQueryString.split("&");
				    for ( var iParam = 0; iParam < aQueryString.length; iParam++ ){
				      if (aQueryString[iParam].substr(0,cmplen)==cmpstring){
				        var aParam = aQueryString[iParam].split("=");
				        strReturn = aParam[1];
				        bFound=true;
				        break;
				      }
				      
				    }
				  }
				  if (bFound==false) return null;
				  return strReturn;
				}
			});
			
			$.extend({URLEncode:function(c){var o='';var x=0;c=c.toString();var r=/(^[a-zA-Z0-9_.]*)/;
			  while(x<c.length){var m=r.exec(c.substr(x));
			    if(m!=null && m.length>1 && m[1]!=''){o+=m[1];x+=m[1].length;
			    }else{if(c[x]==' ')o+='+';else{var d=c.charCodeAt(x);var h=d.toString(16);
			    o+='%'+(h.length<2?'0':'')+h.toUpperCase();}x++;}}return o;},
			URLDecode:function(s){var o=s;var binVal,t;var r=/(%[^%]{2})/;
			  while((m=r.exec(o))!=null && m.length>1 && m[1]!=''){b=parseInt(m[1].substr(1),16);
			  t=String.fromCharCode(b);o=o.replace(m[1],t);}return o;}
			});

