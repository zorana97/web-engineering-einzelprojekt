(()=>{"use strict";var n,e,t,r,i,o,a,A,c,s,l,p,d,u,f={756:(n,e,t)=>{t.d(e,{Z:()=>A});var r=t(537),i=t.n(r),o=t(645),a=t.n(o)()(i());a.push([n.id,"* {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n}\n\n.container {\n  width: 100%;\n  min-height: 100vh;\n  padding-left: 8%;\n  padding-right: 8%;\n  box-sizing: border-box;\n  overflow: hidden;\n}\n\n.navbar {\n  width: 100%;\n  display: flex;\n  align-items: center;\n}\n\n.heart {\n  width: 30px;\n  cursor: pointer;\n  margin: 10px 0;\n}\n\n.dices {\n  width: 200px;\n  cursor: pointer;\n}\n\n.dice-div {\n  text-align: center;\n  margin-top: 100px;\n}\n\np {\n  margin: 30px;\n  color: cadetblue;\n}\n\nnav {\n  flex: 1;\n  text-align: right;\n}\n\nnav ul li {\n  list-style: none;\n  display: inline-block;\n  margin-right: 30px;\n}\n\nnav ul li a {\n  text-decoration: none;\n  color: #000;\n  font-size: 16px;\n}\n\nh1 {\n  margin: 20px;\n  text-align: center;\n  color: #4e4f4f;\n}\n\n.activity {\n  font-size: 18px;\n  font-weight: 550;\n  color: chocolate;\n}\n\n.list-favorites {\n  list-style: none;\n  margin-top: 10px;\n}\n\n.list {\n  padding: 0 5px;\n  margin: 50px 0;\n  text-align: center;\n}\n\n.delete-favorite {\n  margin-left: 20px;\n  padding-left: 5px;\n  padding-right: 5px;\n  color: coral;\n  font-weight: 600;\n  cursor: pointer;\n}\n\nh3 {\n  margin-top: 40px;\n}\n","",{version:3,sources:["webpack://./src/styles/main.css"],names:[],mappings:"AAAA;EACE,SAAS;EACT,UAAU;EACV,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,gBAAgB;EAChB,iBAAiB;EACjB,sBAAsB;EACtB,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,OAAO;EACP,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,gBAAgB;AAClB",sourcesContent:["* {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n}\n\n.container {\n  width: 100%;\n  min-height: 100vh;\n  padding-left: 8%;\n  padding-right: 8%;\n  box-sizing: border-box;\n  overflow: hidden;\n}\n\n.navbar {\n  width: 100%;\n  display: flex;\n  align-items: center;\n}\n\n.heart {\n  width: 30px;\n  cursor: pointer;\n  margin: 10px 0;\n}\n\n.dices {\n  width: 200px;\n  cursor: pointer;\n}\n\n.dice-div {\n  text-align: center;\n  margin-top: 100px;\n}\n\np {\n  margin: 30px;\n  color: cadetblue;\n}\n\nnav {\n  flex: 1;\n  text-align: right;\n}\n\nnav ul li {\n  list-style: none;\n  display: inline-block;\n  margin-right: 30px;\n}\n\nnav ul li a {\n  text-decoration: none;\n  color: #000;\n  font-size: 16px;\n}\n\nh1 {\n  margin: 20px;\n  text-align: center;\n  color: #4e4f4f;\n}\n\n.activity {\n  font-size: 18px;\n  font-weight: 550;\n  color: chocolate;\n}\n\n.list-favorites {\n  list-style: none;\n  margin-top: 10px;\n}\n\n.list {\n  padding: 0 5px;\n  margin: 50px 0;\n  text-align: center;\n}\n\n.delete-favorite {\n  margin-left: 20px;\n  padding-left: 5px;\n  padding-right: 5px;\n  color: coral;\n  font-weight: 600;\n  cursor: pointer;\n}\n\nh3 {\n  margin-top: 40px;\n}\n"],sourceRoot:""}]);const A=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,i,o){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var A=0;A<this.length;A++){var c=this[A][0];null!=c&&(a[c]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);r&&a[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),e.push(l))}},e}},537:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),o="/*# ".concat(i," */"),a=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(n," */")}));return[e].concat(a).concat([o]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},a=[],A=0;A<n.length;A++){var c=n[A],s=r.base?c[0]+r.base:c[0],l=o[s]||0,p="".concat(s," ").concat(l);o[s]=l+1;var d=t(p),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)e[d].references++,e[d].updater(u);else{var f=i(u,r);r.byIndex=A,e.splice(A,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var o=r(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<o.length;a++){var A=t(o[a]);e[A].references--}for(var c=r(n,i),s=0;s<o.length;s++){var l=t(o[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},g={};function E(n){var e=g[n];if(void 0!==e)return e.exports;var t=g[n]={id:n,exports:{}};return f[n](t,t.exports,E),t.exports}E.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return E.d(e,{a:e}),e},E.d=(n,e)=>{for(var t in e)E.o(e,t)&&!E.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},E.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),E.nc=void 0,n=E(379),e=E.n(n),t=E(795),r=E.n(t),i=E(569),o=E.n(i),a=E(565),A=E.n(a),c=E(216),s=E.n(c),l=E(589),p=E.n(l),d=E(756),(u={}).styleTagTransform=p(),u.setAttributes=A(),u.insert=o().bind(null,"head"),u.domAPI=r(),u.insertStyleElement=s(),e()(d.Z,u),d.Z&&d.Z.locals&&d.Z.locals})();
//# sourceMappingURL=about.js.map