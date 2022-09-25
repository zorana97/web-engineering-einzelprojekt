(()=>{var n={669:(n,e,t)=>{n.exports=t(609)},448:(n,e,t)=>{"use strict";var r=t(867),o=t(26),i=t(372),s=t(327),a=t(97),c=t(109),u=t(985),p=t(874),l=t(648),f=t(644),d=t(205);n.exports=function(n){return new Promise((function(e,t){var A,h=n.data,m=n.headers,g=n.responseType;function E(){n.cancelToken&&n.cancelToken.unsubscribe(A),n.signal&&n.signal.removeEventListener("abort",A)}r.isFormData(h)&&r.isStandardBrowserEnv()&&delete m["Content-Type"];var v=new XMLHttpRequest;if(n.auth){var y=n.auth.username||"",x=n.auth.password?unescape(encodeURIComponent(n.auth.password)):"";m.Authorization="Basic "+btoa(y+":"+x)}var B=a(n.baseURL,n.url);function b(){if(v){var r="getAllResponseHeaders"in v?c(v.getAllResponseHeaders()):null,i={data:g&&"text"!==g&&"json"!==g?v.response:v.responseText,status:v.status,statusText:v.statusText,headers:r,config:n,request:v};o((function(n){e(n),E()}),(function(n){t(n),E()}),i),v=null}}if(v.open(n.method.toUpperCase(),s(B,n.params,n.paramsSerializer),!0),v.timeout=n.timeout,"onloadend"in v?v.onloadend=b:v.onreadystatechange=function(){v&&4===v.readyState&&(0!==v.status||v.responseURL&&0===v.responseURL.indexOf("file:"))&&setTimeout(b)},v.onabort=function(){v&&(t(new l("Request aborted",l.ECONNABORTED,n,v)),v=null)},v.onerror=function(){t(new l("Network Error",l.ERR_NETWORK,n,v,v)),v=null},v.ontimeout=function(){var e=n.timeout?"timeout of "+n.timeout+"ms exceeded":"timeout exceeded",r=n.transitional||p;n.timeoutErrorMessage&&(e=n.timeoutErrorMessage),t(new l(e,r.clarifyTimeoutError?l.ETIMEDOUT:l.ECONNABORTED,n,v)),v=null},r.isStandardBrowserEnv()){var C=(n.withCredentials||u(B))&&n.xsrfCookieName?i.read(n.xsrfCookieName):void 0;C&&(m[n.xsrfHeaderName]=C)}"setRequestHeader"in v&&r.forEach(m,(function(n,e){void 0===h&&"content-type"===e.toLowerCase()?delete m[e]:v.setRequestHeader(e,n)})),r.isUndefined(n.withCredentials)||(v.withCredentials=!!n.withCredentials),g&&"json"!==g&&(v.responseType=n.responseType),"function"==typeof n.onDownloadProgress&&v.addEventListener("progress",n.onDownloadProgress),"function"==typeof n.onUploadProgress&&v.upload&&v.upload.addEventListener("progress",n.onUploadProgress),(n.cancelToken||n.signal)&&(A=function(n){v&&(t(!n||n&&n.type?new f:n),v.abort(),v=null)},n.cancelToken&&n.cancelToken.subscribe(A),n.signal&&(n.signal.aborted?A():n.signal.addEventListener("abort",A))),h||(h=null);var w=d(B);w&&-1===["http","https","file"].indexOf(w)?t(new l("Unsupported protocol "+w+":",l.ERR_BAD_REQUEST,n)):v.send(h)}))}},609:(n,e,t)=>{"use strict";var r=t(867),o=t(849),i=t(321),s=t(185),a=function n(e){var t=new i(e),a=o(i.prototype.request,t);return r.extend(a,i.prototype,t),r.extend(a,t),a.create=function(t){return n(s(e,t))},a}(t(546));a.Axios=i,a.CanceledError=t(644),a.CancelToken=t(972),a.isCancel=t(502),a.VERSION=t(288).version,a.toFormData=t(675),a.AxiosError=t(648),a.Cancel=a.CanceledError,a.all=function(n){return Promise.all(n)},a.spread=t(713),a.isAxiosError=t(268),n.exports=a,n.exports.default=a},972:(n,e,t)=>{"use strict";var r=t(644);function o(n){if("function"!=typeof n)throw new TypeError("executor must be a function.");var e;this.promise=new Promise((function(n){e=n}));var t=this;this.promise.then((function(n){if(t._listeners){var e,r=t._listeners.length;for(e=0;e<r;e++)t._listeners[e](n);t._listeners=null}})),this.promise.then=function(n){var e,r=new Promise((function(n){t.subscribe(n),e=n})).then(n);return r.cancel=function(){t.unsubscribe(e)},r},n((function(n){t.reason||(t.reason=new r(n),e(t.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.prototype.subscribe=function(n){this.reason?n(this.reason):this._listeners?this._listeners.push(n):this._listeners=[n]},o.prototype.unsubscribe=function(n){if(this._listeners){var e=this._listeners.indexOf(n);-1!==e&&this._listeners.splice(e,1)}},o.source=function(){var n;return{token:new o((function(e){n=e})),cancel:n}},n.exports=o},644:(n,e,t)=>{"use strict";var r=t(648);function o(n){r.call(this,null==n?"canceled":n,r.ERR_CANCELED),this.name="CanceledError"}t(867).inherits(o,r,{__CANCEL__:!0}),n.exports=o},502:n=>{"use strict";n.exports=function(n){return!(!n||!n.__CANCEL__)}},321:(n,e,t)=>{"use strict";var r=t(867),o=t(327),i=t(782),s=t(572),a=t(185),c=t(97),u=t(875),p=u.validators;function l(n){this.defaults=n,this.interceptors={request:new i,response:new i}}l.prototype.request=function(n,e){"string"==typeof n?(e=e||{}).url=n:e=n||{},(e=a(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=e.transitional;void 0!==t&&u.assertOptions(t,{silentJSONParsing:p.transitional(p.boolean),forcedJSONParsing:p.transitional(p.boolean),clarifyTimeoutError:p.transitional(p.boolean)},!1);var r=[],o=!0;this.interceptors.request.forEach((function(n){"function"==typeof n.runWhen&&!1===n.runWhen(e)||(o=o&&n.synchronous,r.unshift(n.fulfilled,n.rejected))}));var i,c=[];if(this.interceptors.response.forEach((function(n){c.push(n.fulfilled,n.rejected)})),!o){var l=[s,void 0];for(Array.prototype.unshift.apply(l,r),l=l.concat(c),i=Promise.resolve(e);l.length;)i=i.then(l.shift(),l.shift());return i}for(var f=e;r.length;){var d=r.shift(),A=r.shift();try{f=d(f)}catch(n){A(n);break}}try{i=s(f)}catch(n){return Promise.reject(n)}for(;c.length;)i=i.then(c.shift(),c.shift());return i},l.prototype.getUri=function(n){n=a(this.defaults,n);var e=c(n.baseURL,n.url);return o(e,n.params,n.paramsSerializer)},r.forEach(["delete","get","head","options"],(function(n){l.prototype[n]=function(e,t){return this.request(a(t||{},{method:n,url:e,data:(t||{}).data}))}})),r.forEach(["post","put","patch"],(function(n){function e(e){return function(t,r,o){return this.request(a(o||{},{method:n,headers:e?{"Content-Type":"multipart/form-data"}:{},url:t,data:r}))}}l.prototype[n]=e(),l.prototype[n+"Form"]=e(!0)})),n.exports=l},648:(n,e,t)=>{"use strict";var r=t(867);function o(n,e,t,r,o){Error.call(this),this.message=n,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),r&&(this.request=r),o&&(this.response=o)}r.inherits(o,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var i=o.prototype,s={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach((function(n){s[n]={value:n}})),Object.defineProperties(o,s),Object.defineProperty(i,"isAxiosError",{value:!0}),o.from=function(n,e,t,s,a,c){var u=Object.create(i);return r.toFlatObject(n,u,(function(n){return n!==Error.prototype})),o.call(u,n.message,e,t,s,a),u.name=n.name,c&&Object.assign(u,c),u},n.exports=o},782:(n,e,t)=>{"use strict";var r=t(867);function o(){this.handlers=[]}o.prototype.use=function(n,e,t){return this.handlers.push({fulfilled:n,rejected:e,synchronous:!!t&&t.synchronous,runWhen:t?t.runWhen:null}),this.handlers.length-1},o.prototype.eject=function(n){this.handlers[n]&&(this.handlers[n]=null)},o.prototype.forEach=function(n){r.forEach(this.handlers,(function(e){null!==e&&n(e)}))},n.exports=o},97:(n,e,t)=>{"use strict";var r=t(793),o=t(303);n.exports=function(n,e){return n&&!r(e)?o(n,e):e}},572:(n,e,t)=>{"use strict";var r=t(867),o=t(527),i=t(502),s=t(546),a=t(644);function c(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new a}n.exports=function(n){return c(n),n.headers=n.headers||{},n.data=o.call(n,n.data,n.headers,n.transformRequest),n.headers=r.merge(n.headers.common||{},n.headers[n.method]||{},n.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete n.headers[e]})),(n.adapter||s.adapter)(n).then((function(e){return c(n),e.data=o.call(n,e.data,e.headers,n.transformResponse),e}),(function(e){return i(e)||(c(n),e&&e.response&&(e.response.data=o.call(n,e.response.data,e.response.headers,n.transformResponse))),Promise.reject(e)}))}},185:(n,e,t)=>{"use strict";var r=t(867);n.exports=function(n,e){e=e||{};var t={};function o(n,e){return r.isPlainObject(n)&&r.isPlainObject(e)?r.merge(n,e):r.isPlainObject(e)?r.merge({},e):r.isArray(e)?e.slice():e}function i(t){return r.isUndefined(e[t])?r.isUndefined(n[t])?void 0:o(void 0,n[t]):o(n[t],e[t])}function s(n){if(!r.isUndefined(e[n]))return o(void 0,e[n])}function a(t){return r.isUndefined(e[t])?r.isUndefined(n[t])?void 0:o(void 0,n[t]):o(void 0,e[t])}function c(t){return t in e?o(n[t],e[t]):t in n?o(void 0,n[t]):void 0}var u={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:c};return r.forEach(Object.keys(n).concat(Object.keys(e)),(function(n){var e=u[n]||i,o=e(n);r.isUndefined(o)&&e!==c||(t[n]=o)})),t}},26:(n,e,t)=>{"use strict";var r=t(648);n.exports=function(n,e,t){var o=t.config.validateStatus;t.status&&o&&!o(t.status)?e(new r("Request failed with status code "+t.status,[r.ERR_BAD_REQUEST,r.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t)):n(t)}},527:(n,e,t)=>{"use strict";var r=t(867),o=t(546);n.exports=function(n,e,t){var i=this||o;return r.forEach(t,(function(t){n=t.call(i,n,e)})),n}},546:(n,e,t)=>{"use strict";var r=t(867),o=t(16),i=t(648),s=t(874),a=t(675),c={"Content-Type":"application/x-www-form-urlencoded"};function u(n,e){!r.isUndefined(n)&&r.isUndefined(n["Content-Type"])&&(n["Content-Type"]=e)}var p,l={transitional:s,adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(p=t(448)),p),transformRequest:[function(n,e){if(o(e,"Accept"),o(e,"Content-Type"),r.isFormData(n)||r.isArrayBuffer(n)||r.isBuffer(n)||r.isStream(n)||r.isFile(n)||r.isBlob(n))return n;if(r.isArrayBufferView(n))return n.buffer;if(r.isURLSearchParams(n))return u(e,"application/x-www-form-urlencoded;charset=utf-8"),n.toString();var t,i=r.isObject(n),s=e&&e["Content-Type"];if((t=r.isFileList(n))||i&&"multipart/form-data"===s){var c=this.env&&this.env.FormData;return a(t?{"files[]":n}:n,c&&new c)}return i||"application/json"===s?(u(e,"application/json"),function(n,e,t){if(r.isString(n))try{return(0,JSON.parse)(n),r.trim(n)}catch(n){if("SyntaxError"!==n.name)throw n}return(0,JSON.stringify)(n)}(n)):n}],transformResponse:[function(n){var e=this.transitional||l.transitional,t=e&&e.silentJSONParsing,o=e&&e.forcedJSONParsing,s=!t&&"json"===this.responseType;if(s||o&&r.isString(n)&&n.length)try{return JSON.parse(n)}catch(n){if(s){if("SyntaxError"===n.name)throw i.from(n,i.ERR_BAD_RESPONSE,this,null,this.response);throw n}}return n}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:t(623)},validateStatus:function(n){return n>=200&&n<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(n){l.headers[n]={}})),r.forEach(["post","put","patch"],(function(n){l.headers[n]=r.merge(c)})),n.exports=l},874:n=>{"use strict";n.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}},288:n=>{n.exports={version:"0.27.2"}},849:n=>{"use strict";n.exports=function(n,e){return function(){for(var t=new Array(arguments.length),r=0;r<t.length;r++)t[r]=arguments[r];return n.apply(e,t)}}},327:(n,e,t)=>{"use strict";var r=t(867);function o(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}n.exports=function(n,e,t){if(!e)return n;var i;if(t)i=t(e);else if(r.isURLSearchParams(e))i=e.toString();else{var s=[];r.forEach(e,(function(n,e){null!=n&&(r.isArray(n)?e+="[]":n=[n],r.forEach(n,(function(n){r.isDate(n)?n=n.toISOString():r.isObject(n)&&(n=JSON.stringify(n)),s.push(o(e)+"="+o(n))})))})),i=s.join("&")}if(i){var a=n.indexOf("#");-1!==a&&(n=n.slice(0,a)),n+=(-1===n.indexOf("?")?"?":"&")+i}return n}},303:n=>{"use strict";n.exports=function(n,e){return e?n.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):n}},372:(n,e,t)=>{"use strict";var r=t(867);n.exports=r.isStandardBrowserEnv()?{write:function(n,e,t,o,i,s){var a=[];a.push(n+"="+encodeURIComponent(e)),r.isNumber(t)&&a.push("expires="+new Date(t).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(n){var e=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},793:n=>{"use strict";n.exports=function(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}},268:(n,e,t)=>{"use strict";var r=t(867);n.exports=function(n){return r.isObject(n)&&!0===n.isAxiosError}},985:(n,e,t)=>{"use strict";var r=t(867);n.exports=r.isStandardBrowserEnv()?function(){var n,e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");function o(n){var r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=o(window.location.href),function(e){var t=r.isString(e)?o(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0}},16:(n,e,t)=>{"use strict";var r=t(867);n.exports=function(n,e){r.forEach(n,(function(t,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(n[e]=t,delete n[r])}))}},623:n=>{n.exports=null},109:(n,e,t)=>{"use strict";var r=t(867),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];n.exports=function(n){var e,t,i,s={};return n?(r.forEach(n.split("\n"),(function(n){if(i=n.indexOf(":"),e=r.trim(n.substr(0,i)).toLowerCase(),t=r.trim(n.substr(i+1)),e){if(s[e]&&o.indexOf(e)>=0)return;s[e]="set-cookie"===e?(s[e]?s[e]:[]).concat([t]):s[e]?s[e]+", "+t:t}})),s):s}},205:n=>{"use strict";n.exports=function(n){var e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return e&&e[1]||""}},713:n=>{"use strict";n.exports=function(n){return function(e){return n.apply(null,e)}}},675:(n,e,t)=>{"use strict";var r=t(867);n.exports=function(n,e){e=e||new FormData;var t=[];function o(n){return null===n?"":r.isDate(n)?n.toISOString():r.isArrayBuffer(n)||r.isTypedArray(n)?"function"==typeof Blob?new Blob([n]):Buffer.from(n):n}return function n(i,s){if(r.isPlainObject(i)||r.isArray(i)){if(-1!==t.indexOf(i))throw Error("Circular reference detected in "+s);t.push(i),r.forEach(i,(function(t,i){if(!r.isUndefined(t)){var a,c=s?s+"."+i:i;if(t&&!s&&"object"==typeof t)if(r.endsWith(i,"{}"))t=JSON.stringify(t);else if(r.endsWith(i,"[]")&&(a=r.toArray(t)))return void a.forEach((function(n){!r.isUndefined(n)&&e.append(c,o(n))}));n(t,c)}})),t.pop()}else e.append(s,o(i))}(n),e}},875:(n,e,t)=>{"use strict";var r=t(288).version,o=t(648),i={};["object","boolean","number","function","string","symbol"].forEach((function(n,e){i[n]=function(t){return typeof t===n||"a"+(e<1?"n ":" ")+n}}));var s={};i.transitional=function(n,e,t){function i(n,e){return"[Axios v"+r+"] Transitional option '"+n+"'"+e+(t?". "+t:"")}return function(t,r,a){if(!1===n)throw new o(i(r," has been removed"+(e?" in "+e:"")),o.ERR_DEPRECATED);return e&&!s[r]&&(s[r]=!0,console.warn(i(r," has been deprecated since v"+e+" and will be removed in the near future"))),!n||n(t,r,a)}},n.exports={assertOptions:function(n,e,t){if("object"!=typeof n)throw new o("options must be an object",o.ERR_BAD_OPTION_VALUE);for(var r=Object.keys(n),i=r.length;i-- >0;){var s=r[i],a=e[s];if(a){var c=n[s],u=void 0===c||a(c,s,n);if(!0!==u)throw new o("option "+s+" must be "+u,o.ERR_BAD_OPTION_VALUE)}else if(!0!==t)throw new o("Unknown option "+s,o.ERR_BAD_OPTION)}},validators:i}},867:(n,e,t)=>{"use strict";var r,o=t(849),i=Object.prototype.toString,s=(r=Object.create(null),function(n){var e=i.call(n);return r[e]||(r[e]=e.slice(8,-1).toLowerCase())});function a(n){return n=n.toLowerCase(),function(e){return s(e)===n}}function c(n){return Array.isArray(n)}function u(n){return void 0===n}var p=a("ArrayBuffer");function l(n){return null!==n&&"object"==typeof n}function f(n){if("object"!==s(n))return!1;var e=Object.getPrototypeOf(n);return null===e||e===Object.prototype}var d=a("Date"),A=a("File"),h=a("Blob"),m=a("FileList");function g(n){return"[object Function]"===i.call(n)}var E=a("URLSearchParams");function v(n,e){if(null!=n)if("object"!=typeof n&&(n=[n]),c(n))for(var t=0,r=n.length;t<r;t++)e.call(null,n[t],t,n);else for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&e.call(null,n[o],o,n)}var y,x=(y="undefined"!=typeof Uint8Array&&Object.getPrototypeOf(Uint8Array),function(n){return y&&n instanceof y});n.exports={isArray:c,isArrayBuffer:p,isBuffer:function(n){return null!==n&&!u(n)&&null!==n.constructor&&!u(n.constructor)&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n)},isFormData:function(n){var e="[object FormData]";return n&&("function"==typeof FormData&&n instanceof FormData||i.call(n)===e||g(n.toString)&&n.toString()===e)},isArrayBufferView:function(n){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(n):n&&n.buffer&&p(n.buffer)},isString:function(n){return"string"==typeof n},isNumber:function(n){return"number"==typeof n},isObject:l,isPlainObject:f,isUndefined:u,isDate:d,isFile:A,isBlob:h,isFunction:g,isStream:function(n){return l(n)&&g(n.pipe)},isURLSearchParams:E,isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:v,merge:function n(){var e={};function t(t,r){f(e[r])&&f(t)?e[r]=n(e[r],t):f(t)?e[r]=n({},t):c(t)?e[r]=t.slice():e[r]=t}for(var r=0,o=arguments.length;r<o;r++)v(arguments[r],t);return e},extend:function(n,e,t){return v(e,(function(e,r){n[r]=t&&"function"==typeof e?o(e,t):e})),n},trim:function(n){return n.trim?n.trim():n.replace(/^\s+|\s+$/g,"")},stripBOM:function(n){return 65279===n.charCodeAt(0)&&(n=n.slice(1)),n},inherits:function(n,e,t,r){n.prototype=Object.create(e.prototype,r),n.prototype.constructor=n,t&&Object.assign(n.prototype,t)},toFlatObject:function(n,e,t){var r,o,i,s={};e=e||{};do{for(o=(r=Object.getOwnPropertyNames(n)).length;o-- >0;)s[i=r[o]]||(e[i]=n[i],s[i]=!0);n=Object.getPrototypeOf(n)}while(n&&(!t||t(n,e))&&n!==Object.prototype);return e},kindOf:s,kindOfTest:a,endsWith:function(n,e,t){n=String(n),(void 0===t||t>n.length)&&(t=n.length),t-=e.length;var r=n.indexOf(e,t);return-1!==r&&r===t},toArray:function(n){if(!n)return null;var e=n.length;if(u(e))return null;for(var t=new Array(e);e-- >0;)t[e]=n[e];return t},isTypedArray:x,isFileList:m}},756:(n,e,t)=>{"use strict";t.d(e,{Z:()=>a});var r=t(537),o=t.n(r),i=t(645),s=t.n(i)()(o());s.push([n.id,"* {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n}\n\n.container {\n  width: 100%;\n  min-height: 100vh;\n  padding-left: 8%;\n  padding-right: 8%;\n  box-sizing: border-box;\n  overflow: hidden;\n}\n\n.navbar {\n  width: 100%;\n  display: flex;\n  align-items: center;\n}\n\n.heart {\n  width: 30px;\n  cursor: pointer;\n  margin: 10px 0;\n}\n\n.dices {\n  width: 200px;\n  cursor: pointer;\n}\n\n.dice-div {\n  text-align: center;\n  margin-top: 100px;\n}\n\np {\n  margin: 30px;\n  color: cadetblue;\n}\n\nnav {\n  flex: 1;\n  text-align: right;\n}\n\nnav ul li {\n  list-style: none;\n  display: inline-block;\n  margin-right: 30px;\n}\n\nnav ul li a {\n  text-decoration: none;\n  color: #000;\n  font-size: 16px;\n}\n\nh1 {\n  margin: 20px;\n  text-align: center;\n  color: #4e4f4f;\n}\n\n.activity {\n  font-size: 18px;\n  font-weight: 550;\n  color: chocolate;\n}\n\n.list-favorites {\n  list-style: none;\n  margin-top: 10px;\n}\n\n.list {\n  padding: 0 5px;\n  margin: 50px 0;\n  text-align: center;\n}\n\n.delete-favorite {\n  margin-left: 20px;\n  padding-left: 5px;\n  padding-right: 5px;\n  color: coral;\n  font-weight: 600;\n  cursor: pointer;\n}\n\nh3 {\n  margin-top: 40px;\n}\n\nform {\n  width: 300px;\n  margin: 20vh auto 0 auto;\n  padding: 20px;\n  background-color: whitesmoke;\n  border-radius: 4px;\n  font-size: 12px;\n}\n\nform h1 {\n  color: #000;\n  text-align: center;\n}\n\n.signUpBtn {\n  padding: 10px;\n  margin-top: 10px;\n  width: 100%;\n  color: white;\n  background-color: cadetblue;\n  border: none;\n  border-radius: 4px;\n}\n\n.input-control {\n  display: flex;\n  flex-direction: column;\n  margin-right: 20px;\n}\n\n.input-control input {\n  border: 2px solid #f0f0f0;\n  border-radius: 4px;\n  display: block;\n  font-size: 12px;\n  padding: 10px;\n  width: 100%;\n}\n\n.input-control input:focus {\n  outline: 0;\n}\n\n.input-control.success input {\n  border-color: green;\n}\n\n.input-control.error input {\n  border-color: red;\n}\n\n.input-control .error {\n  color: red;\n  font-size: 9px;\n  height: 13px;\n}\n","",{version:3,sources:["webpack://./src/styles/main.css"],names:[],mappings:"AAAA;EACE,SAAS;EACT,UAAU;EACV,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,gBAAgB;EAChB,iBAAiB;EACjB,sBAAsB;EACtB,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,OAAO;EACP,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,wBAAwB;EACxB,aAAa;EACb,4BAA4B;EAC5B,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,WAAW;EACX,YAAY;EACZ,2BAA2B;EAC3B,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,cAAc;EACd,eAAe;EACf,aAAa;EACb,WAAW;AACb;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,cAAc;EACd,YAAY;AACd",sourcesContent:["* {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n}\n\n.container {\n  width: 100%;\n  min-height: 100vh;\n  padding-left: 8%;\n  padding-right: 8%;\n  box-sizing: border-box;\n  overflow: hidden;\n}\n\n.navbar {\n  width: 100%;\n  display: flex;\n  align-items: center;\n}\n\n.heart {\n  width: 30px;\n  cursor: pointer;\n  margin: 10px 0;\n}\n\n.dices {\n  width: 200px;\n  cursor: pointer;\n}\n\n.dice-div {\n  text-align: center;\n  margin-top: 100px;\n}\n\np {\n  margin: 30px;\n  color: cadetblue;\n}\n\nnav {\n  flex: 1;\n  text-align: right;\n}\n\nnav ul li {\n  list-style: none;\n  display: inline-block;\n  margin-right: 30px;\n}\n\nnav ul li a {\n  text-decoration: none;\n  color: #000;\n  font-size: 16px;\n}\n\nh1 {\n  margin: 20px;\n  text-align: center;\n  color: #4e4f4f;\n}\n\n.activity {\n  font-size: 18px;\n  font-weight: 550;\n  color: chocolate;\n}\n\n.list-favorites {\n  list-style: none;\n  margin-top: 10px;\n}\n\n.list {\n  padding: 0 5px;\n  margin: 50px 0;\n  text-align: center;\n}\n\n.delete-favorite {\n  margin-left: 20px;\n  padding-left: 5px;\n  padding-right: 5px;\n  color: coral;\n  font-weight: 600;\n  cursor: pointer;\n}\n\nh3 {\n  margin-top: 40px;\n}\n\nform {\n  width: 300px;\n  margin: 20vh auto 0 auto;\n  padding: 20px;\n  background-color: whitesmoke;\n  border-radius: 4px;\n  font-size: 12px;\n}\n\nform h1 {\n  color: #000;\n  text-align: center;\n}\n\n.signUpBtn {\n  padding: 10px;\n  margin-top: 10px;\n  width: 100%;\n  color: white;\n  background-color: cadetblue;\n  border: none;\n  border-radius: 4px;\n}\n\n.input-control {\n  display: flex;\n  flex-direction: column;\n  margin-right: 20px;\n}\n\n.input-control input {\n  border: 2px solid #f0f0f0;\n  border-radius: 4px;\n  display: block;\n  font-size: 12px;\n  padding: 10px;\n  width: 100%;\n}\n\n.input-control input:focus {\n  outline: 0;\n}\n\n.input-control.success input {\n  border-color: green;\n}\n\n.input-control.error input {\n  border-color: red;\n}\n\n.input-control .error {\n  color: red;\n  font-size: 9px;\n  height: 13px;\n}\n"],sourceRoot:""}]);const a=s},645:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var s={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(s[c]=!0)}for(var u=0;u<n.length;u++){var p=[].concat(n[u]);r&&s[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},537:n=>{"use strict";n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(o," */"),s=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(n," */")}));return[e].concat(s).concat([i]).join("\n")}return[e].join("\n")}},379:n=>{"use strict";var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},s=[],a=0;a<n.length;a++){var c=n[a],u=r.base?c[0]+r.base:c[0],p=i[u]||0,l="".concat(u," ").concat(p);i[u]=p+1;var f=t(l),d={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)e[f].references++,e[f].updater(d);else{var A=o(d,r);r.byIndex=a,e.splice(a,0,{identifier:l,updater:A,references:1})}s.push(l)}return s}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var s=0;s<i.length;s++){var a=t(i[s]);e[a].references--}for(var c=r(n,o),u=0;u<i.length;u++){var p=t(i[u]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}i=c}}},569:n=>{"use strict";var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{"use strict";n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{"use strict";n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{"use strict";var n=t(379),e=t.n(n),r=t(795),o=t.n(r),i=t(569),s=t.n(i),a=t(565),c=t.n(a),u=t(216),p=t.n(u),l=t(589),f=t.n(l),d=t(756),A={};A.styleTagTransform=f(),A.setAttributes=c(),A.insert=s().bind(null,"head"),A.domAPI=o(),A.insertStyleElement=p(),e()(d.Z,A),d.Z&&d.Z.locals&&d.Z.locals;const h=t.p+"dices.png";var m=t(669),g=t.n(m);const E=function(){g().get("https://www.boredapi.com/api/activity",{headers:{Accept:"application/json"}}).then((function(n){document.getElementById("activity").innerHTML=n.data.activity}))},v=t.p+"heart.png";var y=document.getElementById("dices");y.src=h,y.addEventListener("click",E),E();var x=document.getElementById("heart");x.src=v,x.addEventListener("click",(function(){var n=document.getElementById("favoritesList"),e=document.getElementById("activity").innerHTML,t=document.createElement("li");t.innerHTML=e,t.setAttribute("class","list-favorites"),n.appendChild(t);var r=document.createElement("span");r.innerHTML="x",r.setAttribute("class","delete-favorite"),t.appendChild(r);for(var o=document.querySelectorAll("span"),i=function(n){o[n].addEventListener("click",(function(){o[n].parentElement.style.display="none"}))},s=0;s<o.length;s++)i(s)}))})()})();
//# sourceMappingURL=index.js.map