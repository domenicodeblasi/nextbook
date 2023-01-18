/*! For license information please see bundle.js.LICENSE.txt */
(()=>{var t={398:(t,e,r)=>{"use strict";r.d(e,{Z:()=>s});var n=r(81),o=r.n(n),i=r(645),a=r.n(i)()(o());a.push([t.id,".logo{width:100px}",""]);const s=a},828:(t,e,r)=>{"use strict";r.d(e,{Z:()=>s});var n=r(81),o=r.n(n),i=r(645),a=r.n(i)()(o());a.push([t.id,"*{padding:0;margin:0;box-sizing:border-box}.loader{width:35px;height:35px;border-radius:50%;margin:20px auto 0 auto;border:5px solid #f0f0f0;border-top:5px solid #454497;animation:spin .4s ease-in-out infinite}@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}",""]);const s=a},964:(t,e,r)=>{"use strict";r.d(e,{Z:()=>s});var n=r(81),o=r.n(n),i=r(645),a=r.n(i)()(o());a.push([t.id,'*{padding:0;margin:0;box-sizing:border-box}:root{background-color:#f0f0f0;color:#2d2d2d;font-family:"Work Sans",sans-serif;font-size:14px}body{width:100dvw;overflow:hidden}#home{height:100dvh;display:flex;justify-content:center;align-items:center}.container{display:flex;flex-direction:column;align-items:center;justify-content:space-evenly;width:80%;min-width:200px;height:60%;min-height:180px}.logo-container{display:flex;flex-direction:column;align-items:center}.logo-container .heading{margin-top:5px;color:#454497;font-family:"Josefin Sans",sans-serif;font-weight:700;font-size:2.4em}#form{display:flex;flex-direction:column;width:80%;max-width:500px;margin-top:30px}#form .search-bar-label{font-weight:400;font-size:.9em}#form .search-bar{padding:10px;font-family:inherit;background-color:#dcdcdc;color:#2d2d2d;border:none;border-radius:5px;margin-top:5px}#form .submit-btn{width:100px;background-color:#454497;color:#f0f0f0;font-family:inherit;margin:20px auto 0 auto;padding:10px;border:none;border-radius:8px;cursor:pointer;transition:transform ease .1s}#form .submit-btn:hover{transform:scale(1.05);transition:transform ease .1s}#search-results-section{position:relative;height:100dvh;width:inherit}.close-btn{position:absolute;background-color:inherit;width:50px;height:50px;font-size:2.5em;font-family:inherit;color:#454497;border:none;cursor:pointer;transition:transform ease .1s;z-index:3}.close-btn:hover{transform:scale(1.05);transition:transform ease .1s}.results-container{display:flex;flex-direction:column;align-items:center;width:inherit;height:100dvh}.page{display:flex;height:100dvh;flex-direction:column;padding:50px 50px 65px 50px;justify-content:space-between;width:inherit}.card{padding:10px 20px;background-color:#dcdcdc;border-radius:10px;height:22%;overflow:hidden;cursor:pointer;transition:all ease .1s}.card h2{font-family:inherit;font-weight:500;font-size:1.8em;color:#454497}.card h4{font-family:inherit;font-weight:400;font-size:.9em;color:#2d2d2d}.card:hover{box-shadow:5px 5px 10px #919191;transform:scale(1.02);transition:all ease .1s}.index-container{position:absolute;bottom:0;display:flex;justify-content:center;align-items:center;width:inherit}.index-container .index{display:flex;justify-content:center;align-items:center;width:35px;height:35px;margin:15px;cursor:pointer}.index-container .selected{background-color:#454497;color:#f0f0f0;border-radius:50%}#book-section{min-height:100dvh}.book-container{display:flex;flex-direction:column;align-items:center;width:inherit;height:100dvh;padding:50px 50px 65px 50px;overflow-y:scroll;overflow-x:hidden;scroll-behavior:smooth}.cover-container{position:relative;display:flex;flex-direction:row;justify-content:center;align-items:center;width:100%;max-width:800px;min-height:300px;background-color:#dcdcdc;border-radius:15px;overflow:hidden}.carousel-btn{position:absolute;right:0;height:100%;width:7%;font-family:inherit;font-size:1.5em;font-weight:300;color:#f0f0f0;background-color:#454497;border:none;border-top-right-radius:inherit;border-bottom-right-radius:inherit;z-index:2;cursor:pointer}.carousel-btn:hover{font-size:1.7em;transition:all ease .1s}.carousel-btn:active{background-color:#e27979;transition:background-color ease .1s}.cover{max-height:90%;border-radius:7px;transition:all ease .1s}.cover:hover{transform:scale(1.01);box-shadow:5px 5px 10px #919191;transition:all ease .1s}.hidden{position:absolute;visibility:hidden}@keyframes slide-in{0%{transform:translateX(300%)}100%{transform:translateX(0)}}@keyframes slide-out{0%{transform:translateX(0)}100%{transform:translateX(-300%)}}.title{margin-top:40px;text-align:center;color:#454497;font-weight:600}.description{margin-top:15px;width:100%;max-width:800px;line-height:1.6em}@media screen and (max-width: 600px){.card h2{font-size:1.2em}.card h4{font-size:.8em}.cover-container{width:100vw;border-radius:0}.cover{margin-bottom:40px;max-height:70%}.carousel-btn{position:absolute;width:100%;height:40px;right:auto;bottom:0}}',""]);const s=a},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r="",n=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),n&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=t(e),n&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(t,r,n,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(n)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var u=0;u<t.length;u++){var l=[].concat(t[u]);n&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:t=>{"use strict";t.exports=function(t){return t[1]}},259:t=>{t.exports=function(t,e,r){var n=-1,o=t.length;e<0&&(e=-e>o?0:o+e),(r=r>o?o:r)<0&&(r+=o),o=e>r?0:r-e>>>0,e>>>=0;for(var i=Array(o);++n<o;)i[n]=t[n+e];return i}},612:t=>{t.exports=function(){return!1}},400:(t,e,r)=>{var n=r(259),o=r(612),i=r(554),a=Math.ceil,s=Math.max;t.exports=function(t,e,r){e=(r?o(t,e,r):void 0===e)?1:s(i(e),0);var c=null==t?0:t.length;if(!c||e<1)return[];for(var u=0,l=0,d=Array(a(c/e));u<c;)d[l++]=n(t,u,u+=e);return d}},554:t=>{t.exports=function(t){return t}},379:t=>{"use strict";var e=[];function r(t){for(var r=-1,n=0;n<e.length;n++)if(e[n].identifier===t){r=n;break}return r}function n(t,n){for(var i={},a=[],s=0;s<t.length;s++){var c=t[s],u=n.base?c[0]+n.base:c[0],l=i[u]||0,d="".concat(u," ").concat(l);i[u]=l+1;var f=r(d),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)e[f].references++,e[f].updater(p);else{var h=o(p,n);n.byIndex=s,e.splice(s,0,{identifier:d,updater:h,references:1})}a.push(d)}return a}function o(t,e){var r=e.domAPI(e);return r.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;r.update(t=e)}else r.remove()}}t.exports=function(t,o){var i=n(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var s=r(i[a]);e[s].references--}for(var c=n(t,o),u=0;u<i.length;u++){var l=r(i[u]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=c}}},569:t=>{"use strict";var e={};t.exports=function(t,r){var n=function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,r)=>{"use strict";t.exports=function(t){var e=r.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(r){!function(t,e,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(n,t,e.options)}(e,t,r)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={id:n,exports:{}};return t[n](i,i.exports,r),i.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t})(),r.nc=void 0,(()=>{"use strict";var t=r(400),e=r.n(t),n=r(379),o=r.n(n),i=r(795),a=r.n(i),s=r(569),c=r.n(s),u=r(565),l=r.n(u),d=r(216),f=r.n(d),p=r(589),h=r.n(p),v=r(964),m={};m.styleTagTransform=h(),m.setAttributes=l(),m.insert=c().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=f(),o()(v.Z,m),v.Z&&v.Z.locals&&v.Z.locals;const y=r.p+"d884eb3b87708637ee94.svg";var g=r(398),x={};x.styleTagTransform=h(),x.setAttributes=l(),x.insert=c().bind(null,"head"),x.domAPI=a(),x.insertStyleElement=f(),o()(g.Z,x),g.Z&&g.Z.locals&&g.Z.locals;var b=["Childhood","Poetry","Short Stories","Santa Claus","Horror Tales","Detective Stories","Love Stories","Roald Dahl","Mythical Animals","Swords","Humour","Trains","Super Mario","Cartoons and Comics","Pirates","Venice","Travel","Classic Literature","Male Friendship","Tiger","Religion","Young Adult","Wizards"],w=r(828),L={};function E(){var t=document.createElement("div");t.classList.add("loader"),form.lastElementChild.replaceWith(t)}function k(){var t=document.createElement("button");t.classList.add("submit-btn"),t.type="submit",form.lastElementChild.replaceWith(t),t.innerHTML="Search"}function S(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function T(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,"symbol"==typeof(o=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key))?o:String(o)),n)}var o}function j(t,e,r){return e&&T(t.prototype,e),r&&T(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function C(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return M(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?M(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return a=t.done,t},e:function(t){s=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(s)throw i}}}}function M(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function A(){A=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function u(t,e,r,o){var i=e&&e.prototype instanceof f?e:f,a=Object.create(i.prototype),s=new S(o||[]);return n(a,"_invoke",{value:w(t,r,s)}),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var d={};function f(){}function p(){}function h(){}var v={};c(v,i,(function(){return this}));var m=Object.getPrototypeOf,y=m&&m(m(T([])));y&&y!==e&&r.call(y,i)&&(v=y);var g=h.prototype=f.prototype=Object.create(v);function x(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function o(n,i,a,s){var c=l(t[n],t,i);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==typeof d&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){o("next",t,a,s)}),(function(t){o("throw",t,a,s)})):e.resolve(d).then((function(t){u.value=t,a(u)}),(function(t){return o("throw",t,a,s)}))}s(c.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function w(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=L(a,r);if(s){if(s===d)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=l(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function T(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return p.prototype=h,n(g,"constructor",{value:h,configurable:!0}),n(h,"constructor",{value:p,configurable:!0}),p.displayName=c(h,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,c(t,s,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},x(b.prototype),c(b.prototype,a,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new b(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(g),c(g,s,"Generator"),c(g,i,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=T,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:T(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},t}function O(t,e,r,n,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}function P(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){O(i,n,o,a,s,"next",t)}function s(t){O(i,n,o,a,s,"throw",t)}a(void 0)}))}}L.styleTagTransform=h(),L.setAttributes=l(),L.insert=c().bind(null,"head"),L.domAPI=a(),L.insertStyleElement=f(),o()(w.Z,L),w.Z&&w.Z.locals&&w.Z.locals;var _,$,z,I,H,Z,N,R,q,F,U,G,D,W,X=document.querySelector(".logo-container"),Y=document.querySelector("#form"),J=document.querySelector(".search-bar"),B=document.querySelector("#search-results-section > button"),V=document.querySelector(".results-container"),K=document.querySelector(".book-container"),Q=document.querySelector("#book-section > button"),tt=window.innerHeight,et=1;function rt(){return nt.apply(this,arguments)}function nt(){return(nt=P(A().mark((function t(){return A().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return window.scrollTo(0,0),E(),t.next=4,at();case 4:return t.next=6,ct();case 6:return t.next=8,ht();case 8:return t.next=10,mt();case 10:setTimeout(k,1e3);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function ot(){return it.apply(this,arguments)}function it(){return it=P(A().mark((function t(){return A().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Z.addEventListener("click",function(){var t=P(A().mark((function t(e){var r,n;return A().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(R=e.target.closest(".card"),r=e.target.closest("h2"),n=e.target.closest("h4"),e.target!=R&&e.target!=r&&e.target!=n){t.next=13;break}return t.next=6,gt();case 6:return t.next=8,bt();case 8:return console.log(G),t.next=11,Lt();case 11:return t.next=13,kt();case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),!0);case 1:case"end":return t.stop()}}),t)}))),it.apply(this,arguments)}function at(){return st.apply(this,arguments)}function st(){return(st=P(A().mark((function t(){var e,r,n,o,i;return A().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=function(){return J.value.toLowerCase().split(" ").join("_")},t.next=3,e();case 3:return r=t.sent,n=`https://openlibrary.org/subjects/${r}.json`,t.next=7,fetch(n);case 7:return o=t.sent,t.next=10,o.json();case 10:i=t.sent,_=i.works;case 12:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function ct(){return ut.apply(this,arguments)}function ut(){return(ut=P(A().mark((function t(){var e,r,n,o;return A().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for($=Math.ceil(_.length/4),(z=document.createElement("div")).classList.add("index-container"),V.append(z),e=1;e<=$;e++)(I=document.createElement("span")).classList.add("index"),I.innerHTML=`${e}`,z.append(I);if(H=Array.from(document.querySelectorAll(".index-container > *")),t.prev=6,!H[0]){t.next=11;break}H[0].classList.add("selected"),t.next=12;break;case 11:throw new Error("No results! try to write something different");case 12:t.next=17;break;case 14:t.prev=14,t.t0=t.catch(6),alert(t.t0.message);case 17:r=C(H),t.prev=18,o=A().mark((function t(){var e;return A().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(e=n.value).addEventListener("click",(function(){H.forEach((function(t){t.classList.remove("selected")})),e.classList.add("selected"),et=e.textContent;try{ft()}catch(t){alert(t.message)}}));case 2:case"end":return t.stop()}}),t)})),r.s();case 21:if((n=r.n()).done){t.next=25;break}return t.delegateYield(o(),"t1",23);case 23:t.next=21;break;case 25:t.next=30;break;case 27:t.prev=27,t.t2=t.catch(18),r.e(t.t2);case 30:return t.prev=30,r.f(),t.finish(30);case 33:case"end":return t.stop()}}),t,null,[[6,14],[18,27,30,33]])})))).apply(this,arguments)}function lt(){return dt.apply(this,arguments)}function dt(){return(dt=P(A().mark((function t(){return A().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(Z=document.createElement("div")).classList.add("page"),V.prepend(Z);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function ft(){return pt.apply(this,arguments)}function pt(){return(pt=P(A().mark((function t(){var r;return A().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(N=e()(_,4),Z.innerHTML="",r=0;r<N[et-1].length;r++)(R=document.createElement("div")).classList.add("card"),R.innerHTML=`<h2>${N[et-1][r].title}</h2>`,q=N[et-1][r].authors,F=q.map((function(t){return t.name})),R.innerHTML+=`<h4>${F.join(", ")}</h4>`,(U=document.createElement("div")).setAttribute("style","visibility:hidden; display:none"),U.textContent=`${N[et-1][r].key}`,R.append(U),Z.append(R);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function ht(){return vt.apply(this,arguments)}function vt(){return(vt=P(A().mark((function t(){return A().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,1!=et){t.next=8;break}return t.next=4,lt();case 4:return t.next=6,ft();case 6:t.next=9;break;case 8:throw new Error("please refresh the page");case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),alert(`${t.t0.name}: ${t.t0.message}`);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}function mt(){return yt.apply(this,arguments)}function yt(){return(yt=P(A().mark((function t(){return A().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:window.scrollTo({top:tt,behavior:"smooth"});case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function gt(){return xt.apply(this,arguments)}function xt(){return(xt=P(A().mark((function t(){return A().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:window.scrollTo({top:2*tt,behavior:"smooth"});case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function bt(){return wt.apply(this,arguments)}function wt(){return(wt=P(A().mark((function t(){var e,r,n;return A().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=R.lastElementChild.textContent,r=`https://openlibrary.org${e}.json`,t.next=4,fetch(r);case 4:return n=t.sent,t.next=7,n.json();case 7:G=t.sent;case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Lt(){return Et.apply(this,arguments)}function Et(){return(Et=P(A().mark((function t(){return A().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:D=new(function(){function t(){S(this,t)}return j(t,[{key:"title",get:function(){return G.title}},{key:"description",get:function(){return"object"==typeof G.description?G.description.value:G.description}},{key:"arrayCoverURL",get:function(){var t=[];if(G.covers.length>1){for(var e=0;e<2;e++){var r=Math.floor(Math.random()*(G.covers.length-1)),n=G.covers[r];-1==n&&(n=G.covers[r+1]);var o=`https://covers.openlibrary.org/b/id/${n}-M.jpg`;t.push(o)}console.log(t)}else if(1==G.covers.length){var i=`https://covers.openlibrary.org/b/id/${G.covers[0]}-M.jpg`;t.push(i)}else t=[];return t}}]),t}());case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function kt(){return St.apply(this,arguments)}function St(){return(St=P(A().mark((function t(){var e,r,n,o,i,a,s,c;return A().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(e=document.createElement("div")).classList.add("cover-container"),K.append(e),2==D.arrayCoverURL.length?((r=document.createElement("button")).classList.add("carousel-btn"),r.textContent=">",e.append(r),(n=document.createElement("img")).classList.add("cover"),n.style.animation="none",n.setAttribute("src",D.arrayCoverURL[0]),e.append(n),(o=document.createElement("img")).classList.add("cover","hidden"),o.setAttribute("src",D.arrayCoverURL[1]),e.append(o),r.addEventListener("click",(function(){o.classList.contains("hidden")?(n.classList.add("hidden"),n.style.animation="slide-out ease 0.5s",o.classList.remove("hidden"),o.style.animation="slide-in ease 0.5s"):n.classList.contains("hidden")&&(o.classList.add("hidden"),o.style.animation="slide-out ease 0.5s",n.classList.remove("hidden"),n.style.animation="slide-in ease 0.5s")}))):1==D.arrayCoverURL.length?((i=document.createElement("img")).classList.add("cover"),i.setAttribute("src",D.arrayCoverURL[0]),e.append(i)):((a=document.createElement("div")).classList.add("no-cover"),a.textContent="book cover not available",e.append(a)),(s=document.createElement("h1")).classList.add("title"),s.innerHTML=`${D.title}`,K.append(s),(c=document.createElement("p")).classList.add("description"),c.innerHTML=`${D.description}`,K.append(c),console.log(D.description);case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}window.addEventListener("resize",(function(){tt=window.innerHeight})),X.prepend(((W=new Image).src=y,W.classList.add("logo"),W)),J.addEventListener("focus",(function(t){t.preventDefault(),t.target.focus({preventScroll:!0}),J.style.outline="2px solid rgb(69, 68, 151)"})),J.addEventListener("blur",(function(){J.style.outline="none"})),setInterval((function(){J.placeholder=`${b[Math.floor(Math.random()*b.length)]}`}),3e3),Y.addEventListener("submit",function(){var t=P(A().mark((function t(e){return A().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),t.next=3,rt();case 3:return t.next=5,ot();case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),B.addEventListener("click",(function(){J.value="",V.innerHTML="",et=1,window.scrollTo({top:0,behavior:"smooth"})})),Q.addEventListener("click",(function(){K.innerHTML="",window.scrollTo({top:tt,behavior:"smooth"})}))})()})();