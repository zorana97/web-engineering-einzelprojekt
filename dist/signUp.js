(()=>{"use strict";var n={756:(n,e,t)=>{t.d(e,{Z:()=>a});var r=t(537),o=t.n(r),i=t(645),A=t.n(i)()(o());A.push([n.id,"* {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n}\n\n.container {\n  width: 100%;\n  min-height: 100vh;\n  padding-left: 8%;\n  padding-right: 8%;\n  box-sizing: border-box;\n  overflow: hidden;\n}\n\n.navbar {\n  width: 100%;\n  display: flex;\n  align-items: center;\n}\n\n.heart {\n  width: 30px;\n  cursor: pointer;\n  margin: 10px 0;\n}\n\n.dices {\n  width: 200px;\n  cursor: pointer;\n}\n\n.dice-div {\n  text-align: center;\n  margin-top: 100px;\n}\n\np {\n  margin: 30px;\n  color: cadetblue;\n}\n\nnav {\n  flex: 1;\n  text-align: right;\n}\n\nnav ul li {\n  list-style: none;\n  display: inline-block;\n  margin-right: 30px;\n}\n\nnav ul li a {\n  text-decoration: none;\n  color: #000;\n  font-size: 16px;\n}\n\nh1 {\n  margin: 20px;\n  text-align: center;\n  color: #4e4f4f;\n}\n\n.activity {\n  font-size: 18px;\n  font-weight: 550;\n  color: chocolate;\n}\n\n.list-favorites {\n  list-style: none;\n  margin-top: 10px;\n}\n\n.list {\n  padding: 0 5px;\n  margin: 50px 0;\n  text-align: center;\n}\n\n.delete-favorite {\n  margin-left: 20px;\n  padding-left: 5px;\n  padding-right: 5px;\n  color: coral;\n  font-weight: 600;\n  cursor: pointer;\n}\n\nh3 {\n  margin-top: 40px;\n}\n\nform {\n  width: 300px;\n  margin: 20vh auto 0 auto;\n  padding: 20px;\n  background-color: whitesmoke;\n  border-radius: 4px;\n  font-size: 12px;\n}\n\nform h1 {\n  color: #000;\n  text-align: center;\n}\n\n.signUpBtn {\n  padding: 10px;\n  margin-top: 10px;\n  width: 100%;\n  color: white;\n  background-color: cadetblue;\n  border: none;\n  border-radius: 4px;\n}\n\n.input-control {\n  display: flex;\n  flex-direction: column;\n  margin-right: 20px;\n}\n\n.input-control input {\n  border: 2px solid #f0f0f0;\n  border-radius: 4px;\n  display: block;\n  font-size: 12px;\n  padding: 10px;\n  width: 100%;\n}\n\n.input-control input:focus {\n  outline: 0;\n}\n\n.input-control.success input {\n  border-color: green;\n}\n\n.input-control.error input {\n  border-color: red;\n}\n\n.input-control .error {\n  color: red;\n  font-size: 9px;\n  height: 13px;\n}\n","",{version:3,sources:["webpack://./src/styles/main.css"],names:[],mappings:"AAAA;EACE,SAAS;EACT,UAAU;EACV,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,gBAAgB;EAChB,iBAAiB;EACjB,sBAAsB;EACtB,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,OAAO;EACP,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,wBAAwB;EACxB,aAAa;EACb,4BAA4B;EAC5B,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,WAAW;EACX,YAAY;EACZ,2BAA2B;EAC3B,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,cAAc;EACd,eAAe;EACf,aAAa;EACb,WAAW;AACb;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,cAAc;EACd,YAAY;AACd",sourcesContent:["* {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n}\n\n.container {\n  width: 100%;\n  min-height: 100vh;\n  padding-left: 8%;\n  padding-right: 8%;\n  box-sizing: border-box;\n  overflow: hidden;\n}\n\n.navbar {\n  width: 100%;\n  display: flex;\n  align-items: center;\n}\n\n.heart {\n  width: 30px;\n  cursor: pointer;\n  margin: 10px 0;\n}\n\n.dices {\n  width: 200px;\n  cursor: pointer;\n}\n\n.dice-div {\n  text-align: center;\n  margin-top: 100px;\n}\n\np {\n  margin: 30px;\n  color: cadetblue;\n}\n\nnav {\n  flex: 1;\n  text-align: right;\n}\n\nnav ul li {\n  list-style: none;\n  display: inline-block;\n  margin-right: 30px;\n}\n\nnav ul li a {\n  text-decoration: none;\n  color: #000;\n  font-size: 16px;\n}\n\nh1 {\n  margin: 20px;\n  text-align: center;\n  color: #4e4f4f;\n}\n\n.activity {\n  font-size: 18px;\n  font-weight: 550;\n  color: chocolate;\n}\n\n.list-favorites {\n  list-style: none;\n  margin-top: 10px;\n}\n\n.list {\n  padding: 0 5px;\n  margin: 50px 0;\n  text-align: center;\n}\n\n.delete-favorite {\n  margin-left: 20px;\n  padding-left: 5px;\n  padding-right: 5px;\n  color: coral;\n  font-weight: 600;\n  cursor: pointer;\n}\n\nh3 {\n  margin-top: 40px;\n}\n\nform {\n  width: 300px;\n  margin: 20vh auto 0 auto;\n  padding: 20px;\n  background-color: whitesmoke;\n  border-radius: 4px;\n  font-size: 12px;\n}\n\nform h1 {\n  color: #000;\n  text-align: center;\n}\n\n.signUpBtn {\n  padding: 10px;\n  margin-top: 10px;\n  width: 100%;\n  color: white;\n  background-color: cadetblue;\n  border: none;\n  border-radius: 4px;\n}\n\n.input-control {\n  display: flex;\n  flex-direction: column;\n  margin-right: 20px;\n}\n\n.input-control input {\n  border: 2px solid #f0f0f0;\n  border-radius: 4px;\n  display: block;\n  font-size: 12px;\n  padding: 10px;\n  width: 100%;\n}\n\n.input-control input:focus {\n  outline: 0;\n}\n\n.input-control.success input {\n  border-color: green;\n}\n\n.input-control.error input {\n  border-color: red;\n}\n\n.input-control .error {\n  color: red;\n  font-size: 9px;\n  height: 13px;\n}\n"],sourceRoot:""}]);const a=A},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var A={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(A[c]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);r&&A[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},537:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(o," */"),A=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(n," */")}));return[e].concat(A).concat([i]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},A=[],a=0;a<n.length;a++){var c=n[a],s=r.base?c[0]+r.base:c[0],l=i[s]||0,p="".concat(s," ").concat(l);i[s]=l+1;var d=t(p),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)e[d].references++,e[d].updater(u);else{var E=o(u,r);r.byIndex=a,e.splice(a,0,{identifier:p,updater:E,references:1})}A.push(p)}return A}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var A=0;A<i.length;A++){var a=t(i[A]);e[a].references--}for(var c=r(n,o),s=0;s<i.length;s++){var l=t(i[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),i=t(569),A=t.n(i),a=t(565),c=t.n(a),s=t(216),l=t.n(s),p=t(589),d=t.n(p),u=t(756),E={};E.styleTagTransform=d(),E.setAttributes=c(),E.insert=A().bind(null,"head"),E.domAPI=o(),E.insertStyleElement=l(),e()(u.Z,E),u.Z&&u.Z.locals&&u.Z.locals;var g=document.getElementById("signUpBtn"),f=document.getElementById("username"),B=document.getElementById("age"),C=document.getElementById("email"),m=document.getElementById("password");g.addEventListener("click",(function(n){v()}));var x=function(n,e){var t=n.parentElement;t.querySelector(".error").innerText=e,t.classList.add("error"),t.classList.remove("success")},h=function(n){var e=n.parentElement;e.querySelector(".error").innerText="",e.classList.remove("error"),e.classList.add("success")},v=function(){console.log("validate inputs");var n=f.value.trim(),e=B.value.trim(),t=C.value.trim(),r=m.value.trim();""===n?x(f,"Username is required"):h(f),""===e?x(B,"Invalid age"):e<10?x(B,"Must be over 10 years old"):h(B),""===t?x(C,"Email is required"):function(n){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(n).toLowerCase())}(t)?h(C):x(C,"Provide a valid email address"),""===r?x(m,"Password is required"):r.length<5?x(m,"Password must be at least 5 character"):h(m)}})()})();
//# sourceMappingURL=signUp.js.map