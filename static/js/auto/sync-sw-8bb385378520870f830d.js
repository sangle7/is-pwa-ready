!function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="https://resource.toxicjohann.com/ispwaready/",n(n.s=76)}([function(t,n){var e=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=e)},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n,e){"use strict";function r(t){return Object(t)===t&&"[object Object]"===String(t)&&"function"!=typeof t&&!Array.isArray(t)}function o(t){return!Array.isArray(t)&&t-Number.parseFloat(t)+1>=0}function i(t){return"string"==typeof t||t instanceof String}function u(t){return!!t&&("object"===(void 0===t?"undefined":y(t))||"function"==typeof t)&&"function"==typeof t.then}function c(t){return p()(Number.isInteger(t),"onlym accept interger"),new Promise(function(n){setTimeout(n,t)})}function f(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:location.search,n={};return!t||t.length<2?n:(t=t.slice(1),t=t.split("&"),t.map(function(t){t=t.split("="),n[t[0]]=t[1]}),n)}function a(t){var n=[];for(var e in t)n.push(e+"="+t[e]);return"?"+n.join("&")}function s(t,n,e){return new Promise(function(r,o){function i(u){Promise.resolve(t(u)).then(function(){n.removeEventListener(e,i),r()}).catch(o)}n.addEventListener(e,i)})}n.c=r,n.f=o,n.b=i,n.a=u,n.d=c,n.e=f,n.h=a,n.g=s;var l=e(9),p=e.n(l),y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};"undefined"!=typeof window&&Object.prototype.toString.call(window)},function(t,n,e){"use strict";var r=e(20);n.a=new r.a({name:"test",version:1,objectStores:["feature","info"]})},function(t,n,e){t.exports=!e(6)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(1),o=e(0),i=e(12),u=e(37),c=e(28),f=function t(n,e,f){var a,s,l,p,y=n&t.F,d=n&t.G,b=n&t.S,v=n&t.P,h=n&t.B,g=d?r:b?r[e]||(r[e]={}):(r[e]||{}).prototype,m=d?o:o[e]||(o[e]={}),S=m.prototype||(m.prototype={});d&&(f=e);for(a in f)s=!y&&g&&void 0!==g[a],l=(s?g:f)[a],p=h&&s?c(l,r):v&&"function"==typeof l?c(Function.call,l):l,g&&u(g,a,l,n&t.U),m[a]!=l&&i(m,a,p),v&&S[a]!=l&&(S[a]=l)};r.core=o,f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,t.exports=f},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};t.exports=function(t){return"object"===(void 0===t?"undefined":e(t))?null!==t:"function"==typeof t}},function(t,n,e){var r=e(13),o=e(10);t.exports=function(t){return r(o(t))}},function(t,n,e){"use strict";(function(n){function r(t,n){if(t===n)return 0;for(var e=t.length,r=n.length,o=0,i=Math.min(e,r);o<i;++o)if(t[o]!==n[o]){e=t[o],r=n[o];break}return e<r?-1:r<e?1:0}function o(t){return n.Buffer&&"function"==typeof n.Buffer.isBuffer?n.Buffer.isBuffer(t):!(null==t||!t._isBuffer)}function i(t){return Object.prototype.toString.call(t)}function u(t){return!o(t)&&("function"==typeof n.ArrayBuffer&&("function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(t):!!t&&(t instanceof DataView||!!(t.buffer&&t.buffer instanceof ArrayBuffer))))}function c(t){if(x.isFunction(t)){if(O)return t.name;var n=t.toString(),e=n.match(A);return e&&e[1]}}function f(t,n){return"string"==typeof t?t.length<n?t:t.slice(0,n):t}function a(t){if(O||!x.isFunction(t))return x.inspect(t);var n=c(t);return"[Function"+(n?": "+n:"")+"]"}function s(t){return f(a(t.actual),128)+" "+t.operator+" "+f(a(t.expected),128)}function l(t,n,e,r,o){throw new E.AssertionError({message:e,actual:t,expected:n,operator:r,stackStartFunction:o})}function p(t,n){t||l(t,!0,n,"==",E.ok)}function y(t,n,e,c){if(t===n)return!0;if(o(t)&&o(n))return 0===r(t,n);if(x.isDate(t)&&x.isDate(n))return t.getTime()===n.getTime();if(x.isRegExp(t)&&x.isRegExp(n))return t.source===n.source&&t.global===n.global&&t.multiline===n.multiline&&t.lastIndex===n.lastIndex&&t.ignoreCase===n.ignoreCase;if(null!==t&&"object"===(void 0===t?"undefined":S(t))||null!==n&&"object"===(void 0===n?"undefined":S(n))){if(u(t)&&u(n)&&i(t)===i(n)&&!(t instanceof Float32Array||t instanceof Float64Array))return 0===r(new Uint8Array(t.buffer),new Uint8Array(n.buffer));if(o(t)!==o(n))return!1;c=c||{actual:[],expected:[]};var f=c.actual.indexOf(t);return-1!==f&&f===c.expected.indexOf(n)||(c.actual.push(t),c.expected.push(n),b(t,n,e,c))}return e?t===n:t==n}function d(t){return"[object Arguments]"==Object.prototype.toString.call(t)}function b(t,n,e,r){if(null===t||void 0===t||null===n||void 0===n)return!1;if(x.isPrimitive(t)||x.isPrimitive(n))return t===n;if(e&&Object.getPrototypeOf(t)!==Object.getPrototypeOf(n))return!1;var o=d(t),i=d(n);if(o&&!i||!o&&i)return!1;if(o)return t=w.call(t),n=w.call(n),y(t,n,e);var u,c,f=_(t),a=_(n);if(f.length!==a.length)return!1;for(f.sort(),a.sort(),c=f.length-1;c>=0;c--)if(f[c]!==a[c])return!1;for(c=f.length-1;c>=0;c--)if(u=f[c],!y(t[u],n[u],e,r))return!1;return!0}function v(t,n,e){y(t,n,!0)&&l(t,n,e,"notDeepStrictEqual",v)}function h(t,n){if(!t||!n)return!1;if("[object RegExp]"==Object.prototype.toString.call(n))return n.test(t);try{if(t instanceof n)return!0}catch(t){}return!Error.isPrototypeOf(n)&&!0===n.call({},t)}function g(t){var n;try{t()}catch(t){n=t}return n}function m(t,n,e,r){var o;if("function"!=typeof n)throw new TypeError('"block" argument must be a function');"string"==typeof e&&(r=e,e=null),o=g(n),r=(e&&e.name?" ("+e.name+").":".")+(r?" "+r:"."),t&&!o&&l(o,e,"Missing expected exception"+r);var i="string"==typeof r,u=!t&&x.isError(o),c=!t&&o&&!e;if((u&&i&&h(o,e)||c)&&l(o,e,"Got unwanted exception"+r),t&&o&&e&&!h(o,e)||!t&&o)throw o}var S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x=e(50),j=Object.prototype.hasOwnProperty,w=Array.prototype.slice,O="foo"===function(){}.name,E=t.exports=p,A=/\s*function\s+([^\(\s]*)\s*/;E.AssertionError=function(t){this.name="AssertionError",this.actual=t.actual,this.expected=t.expected,this.operator=t.operator,t.message?(this.message=t.message,this.generatedMessage=!1):(this.message=s(this),this.generatedMessage=!0);var n=t.stackStartFunction||l;if(Error.captureStackTrace)Error.captureStackTrace(this,n);else{var e=new Error;if(e.stack){var r=e.stack,o=c(n),i=r.indexOf("\n"+o);if(i>=0){var u=r.indexOf("\n",i+1);r=r.substring(u+1)}this.stack=r}}},x.inherits(E.AssertionError,Error),E.fail=l,E.ok=p,E.equal=function(t,n,e){t!=n&&l(t,n,e,"==",E.equal)},E.notEqual=function(t,n,e){t==n&&l(t,n,e,"!=",E.notEqual)},E.deepEqual=function(t,n,e){y(t,n,!1)||l(t,n,e,"deepEqual",E.deepEqual)},E.deepStrictEqual=function(t,n,e){y(t,n,!0)||l(t,n,e,"deepStrictEqual",E.deepStrictEqual)},E.notDeepEqual=function(t,n,e){y(t,n,!1)&&l(t,n,e,"notDeepEqual",E.notDeepEqual)},E.notDeepStrictEqual=v,E.strictEqual=function(t,n,e){t!==n&&l(t,n,e,"===",E.strictEqual)},E.notStrictEqual=function(t,n,e){t===n&&l(t,n,e,"!==",E.notStrictEqual)},E.throws=function(t,n,e){m(!0,t,n,e)},E.doesNotThrow=function(t,n,e){m(!1,t,n,e)},E.ifError=function(t){if(t)throw t};var _=Object.keys||function(t){var n=[];for(var e in t)j.call(t,e)&&n.push(e);return n}}).call(n,e(19))},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(33),o=e(36);t.exports=e(4)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(27);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n,e){var r=e(35),o=e(30);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,e){var r=e(14),o=e(8),i=e(15).f;t.exports=function(t){return function(n){for(var e,u=o(n),c=r(u),f=c.length,a=0,s=[];f>a;)i.call(u,e=c[a++])&&s.push(t?[e,u[e]]:u[e]);return s}}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n){var e,r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e=this;try{e=e||Function("return this")()||(0,eval)("this")}catch(t){"object"===("undefined"==typeof window?"undefined":r(window))&&(e=window)}t.exports=e},function(t,n,e){"use strict";function r(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function o(t){return function(n,e){e=Array.isArray(e)?e:[e],e.forEach(function(e){e=Array.isArray(e)?e:[e],t.apply(void 0,[n].concat(e))})}}var i=e(23),u=(e.n(i),e(22)),c=(e.n(u),e(21)),f=(e.n(c),e(9)),a=e.n(f),s=e(2),l={close:function(){this.db.close()}},p=["add","put","get","getAll","getAllKeys","clear"].reduce(function(t,n){return t[n]=function(t){for(var r=arguments.length,o=Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];var u=t[n].apply(t,o);return e.i(s.a)(u)?u:new Promise(function(t,n){u.onsuccess=function(n){return t(n.target.result)},u.onerror=function(t){return n(t)}})},t},{});Object.assign(p,["add","put"].forEach(function(t){var n=t[0],e=t[1];p[n+"all"]=o(e)}));var y=function(){function t(){var n=this,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=o.name,u=void 0===i?"test":i,c=o.objectStores,f=void 0===c?[]:c,l=o.version,p=void 0===l?1:l;r(this,t),a()(e.i(s.b)(u),"name must to be String"),a()(Array.isArray(f),"objectStores must to be Array"),this.isReady=!1,this.init(),this._ready=new Promise(function(t,r){var o=indexedDB.open(u,parseInt(p)||1);o.onerror=function(t){r(t)},o.onsuccess=function(e){n.db=e.target.result,n.isReady=!0,t()},o.onupgradeneeded=function(t){var r=t.target.result;n.db=r,Object.values(f).forEach(function(t){a()(e.i(s.b)(t)||e.i(s.c)(t),"value in objectStores Array must be String or Object");var n=e.i(s.b)(t)?{name:t}:t,o=n.name,i=n.indexs,u=void 0===i?[]:i,c=n.option;a()(Array.isArray(u),"indexs attr of objectStores can only be Array");var f=r.createObjectStore(o,c);u.forEach(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.name,e=t.key,r=t.option;f.createIndex(n,e,r)})})},n.request=o})}return t.prototype.init=function(){var t=this;Object.entries(p).forEach(function(n){var e=n[0],r=n[1];l[e]=t.bindTransaction(r,t)}),Object.entries(l).forEach(function(n){var e=n[0],r=n[1];Object.defineProperty(t.__proto__,e,{value:t.bindReady(r,t)})})},t.prototype.bindReady=function(t){var n=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this;return function(){for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return n.ready().then(function(){return t.call.apply(t,[e].concat(o))})}},t.prototype.bindTransaction=function(t){var n=this;arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(e){for(var r=arguments.length,o=Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];var u=n.db.transaction(e,"readwrite"),c=u.objectStore(e);return t.call.apply(t,[n,c].concat(o))}},t.prototype.ready=function(){return this.isReady?Promise.resolve():this._ready},t}();n.a=y},function(t,n,e){e(44),t.exports=e(0).Object.assign},function(t,n,e){e(45),t.exports=e(0).Object.entries},function(t,n,e){e(46),t.exports=e(0).Object.values},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){var r=e(7);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n,e){var r=e(8),o=e(41),i=e(40);t.exports=function(t){return function(n,e,u){var c,f=r(n),a=o(f.length),s=i(u,a);if(t&&e!=e){for(;a>s;)if((c=f[s++])!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===e)return t||s||0;return!t&&-1}}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(24);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){var r=e(7),o=e(1).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,e){t.exports=!e(4)&&!e(6)(function(){return 7!=Object.defineProperty(e(29)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){"use strict";var r=e(14),o=e(34),i=e(15),u=e(42),c=e(13),f=Object.assign;t.exports=!f||e(6)(function(){var t={},n={},e=Symbol(),r="abcdefghijklmnopqrst";return t[e]=7,r.split("").forEach(function(t){n[t]=t}),7!=f({},t)[e]||Object.keys(f({},n)).join("")!=r})?function(t,n){for(var e=u(t),f=arguments.length,a=1,s=o.f,l=i.f;f>a;)for(var p,y=c(arguments[a++]),d=s?r(y).concat(s(y)):r(y),b=d.length,v=0;b>v;)l.call(y,p=d[v++])&&(e[p]=y[p]);return e}:f},function(t,n,e){var r=e(25),o=e(31),i=e(43),u=Object.defineProperty;n.f=e(4)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(11),o=e(8),i=e(26)(!1),u=e(38)("IE_PROTO");t.exports=function(t,n){var e,c=o(t),f=0,a=[];for(e in c)e!=u&&r(c,e)&&a.push(e);for(;n.length>f;)r(c,e=n[f++])&&(~i(a,e)||a.push(e));return a}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(1),o=e(12),i=e(11),u=e(18)("src"),c=Function.toString,f=(""+c).split("toString");e(0).inspectSource=function(t){return c.call(t)},(t.exports=function(t,n,e,c){var a="function"==typeof e;a&&(i(e,"name")||o(e,"name",n)),t[n]!==e&&(a&&(i(e,u)||o(e,u,t[n]?""+t[n]:f.join(String(n)))),t===r?t[n]=e:c?t[n]?t[n]=e:o(t,n,e):(delete t[n],o(t,n,e)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[u]||c.call(this)})},function(t,n,e){var r=e(39)("keys"),o=e(18);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n,e){var r=e(1),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,n,e){var r=e(17),o=Math.max,i=Math.min;t.exports=function(t,n){return t=r(t),t<0?o(t+n,0):i(t,n)}},function(t,n,e){var r=e(17),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(10);t.exports=function(t){return Object(r(t))}},function(t,n,e){var r=e(7);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(5);r(r.S+r.F,"Object",{assign:e(32)})},function(t,n,e){var r=e(5),o=e(16)(!0);r(r.S,"Object",{entries:function(t){return o(t)}})},function(t,n,e){var r=e(5),o=e(16)(!1);r(r.S,"Object",{values:function(t){return o(t)}})},function(t,n){"function"==typeof Object.create?t.exports=function(t,n){t.super_=n,t.prototype=Object.create(n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,n){t.super_=n;var e=function(){};e.prototype=n.prototype,t.prototype=new e,t.prototype.constructor=t}},function(t,n){function e(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(t){if(s===setTimeout)return setTimeout(t,0);if((s===e||!s)&&setTimeout)return s=setTimeout,setTimeout(t,0);try{return s(t,0)}catch(n){try{return s.call(null,t,0)}catch(n){return s.call(this,t,0)}}}function i(t){if(l===clearTimeout)return clearTimeout(t);if((l===r||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(t);try{return l(t)}catch(n){try{return l.call(null,t)}catch(n){return l.call(this,t)}}}function u(){b&&y&&(b=!1,y.length?d=y.concat(d):v=-1,d.length&&c())}function c(){if(!b){var t=o(u);b=!0;for(var n=d.length;n;){for(y=d,d=[];++v<n;)y&&y[v].run();v=-1,n=d.length}y=null,b=!1,i(t)}}function f(t,n){this.fun=t,this.array=n}function a(){}var s,l,p=t.exports={};!function(){try{s="function"==typeof setTimeout?setTimeout:e}catch(t){s=e}try{l="function"==typeof clearTimeout?clearTimeout:r}catch(t){l=r}}();var y,d=[],b=!1,v=-1;p.nextTick=function(t){var n=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)n[e-1]=arguments[e];d.push(new f(t,n)),1!==d.length||b||o(c)},f.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=a,p.addListener=a,p.once=a,p.off=a,p.removeListener=a,p.removeAllListeners=a,p.emit=a,p.prependListener=a,p.prependOnceListener=a,p.listeners=function(t){return[]},p.binding=function(t){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(t){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(t,n){var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};t.exports=function(t){return t&&"object"===(void 0===t?"undefined":e(t))&&"function"==typeof t.copy&&"function"==typeof t.fill&&"function"==typeof t.readUInt8}},function(t,n,e){(function(t,r){function o(t,e){var r={seen:[],stylize:u};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),b(e)?r.showHidden=e:e&&n._extend(r,e),x(r.showHidden)&&(r.showHidden=!1),x(r.depth)&&(r.depth=2),x(r.colors)&&(r.colors=!1),x(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=i),f(r,t,r.depth)}function i(t,n){var e=o.styles[n];return e?"["+o.colors[e][0]+"m"+t+"["+o.colors[e][1]+"m":t}function u(t,n){return t}function c(t){var n={};return t.forEach(function(t,e){n[t]=!0}),n}function f(t,e,r){if(t.customInspect&&e&&A(e.inspect)&&e.inspect!==n.inspect&&(!e.constructor||e.constructor.prototype!==e)){var o=e.inspect(r,t);return m(o)||(o=f(t,o,r)),o}var i=a(t,e);if(i)return i;var u=Object.keys(e),b=c(u);if(t.showHidden&&(u=Object.getOwnPropertyNames(e)),E(e)&&(u.indexOf("message")>=0||u.indexOf("description")>=0))return s(e);if(0===u.length){if(A(e)){var v=e.name?": "+e.name:"";return t.stylize("[Function"+v+"]","special")}if(j(e))return t.stylize(RegExp.prototype.toString.call(e),"regexp");if(O(e))return t.stylize(Date.prototype.toString.call(e),"date");if(E(e))return s(e)}var h="",g=!1,S=["{","}"];if(d(e)&&(g=!0,S=["[","]"]),A(e)){h=" [Function"+(e.name?": "+e.name:"")+"]"}if(j(e)&&(h=" "+RegExp.prototype.toString.call(e)),O(e)&&(h=" "+Date.prototype.toUTCString.call(e)),E(e)&&(h=" "+s(e)),0===u.length&&(!g||0==e.length))return S[0]+h+S[1];if(r<0)return j(e)?t.stylize(RegExp.prototype.toString.call(e),"regexp"):t.stylize("[Object]","special");t.seen.push(e);var x;return x=g?l(t,e,r,b,u):u.map(function(n){return p(t,e,r,b,n,g)}),t.seen.pop(),y(x,h,S)}function a(t,n){if(x(n))return t.stylize("undefined","undefined");if(m(n)){var e="'"+JSON.stringify(n).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(e,"string")}return g(n)?t.stylize(""+n,"number"):b(n)?t.stylize(""+n,"boolean"):v(n)?t.stylize("null","null"):void 0}function s(t){return"["+Error.prototype.toString.call(t)+"]"}function l(t,n,e,r,o){for(var i=[],u=0,c=n.length;u<c;++u)P(n,String(u))?i.push(p(t,n,e,r,String(u),!0)):i.push("");return o.forEach(function(o){o.match(/^\d+$/)||i.push(p(t,n,e,r,o,!0))}),i}function p(t,n,e,r,o,i){var u,c,a;if(a=Object.getOwnPropertyDescriptor(n,o)||{value:n[o]},a.get?c=a.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):a.set&&(c=t.stylize("[Setter]","special")),P(r,o)||(u="["+o+"]"),c||(t.seen.indexOf(a.value)<0?(c=v(e)?f(t,a.value,null):f(t,a.value,e-1),c.indexOf("\n")>-1&&(c=i?c.split("\n").map(function(t){return"  "+t}).join("\n").substr(2):"\n"+c.split("\n").map(function(t){return"   "+t}).join("\n"))):c=t.stylize("[Circular]","special")),x(u)){if(i&&o.match(/^\d+$/))return c;u=JSON.stringify(""+o),u.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(u=u.substr(1,u.length-2),u=t.stylize(u,"name")):(u=u.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),u=t.stylize(u,"string"))}return u+": "+c}function y(t,n,e){var r=0;return t.reduce(function(t,n){return r++,n.indexOf("\n")>=0&&r++,t+n.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60?e[0]+(""===n?"":n+"\n ")+" "+t.join(",\n  ")+" "+e[1]:e[0]+n+" "+t.join(", ")+" "+e[1]}function d(t){return Array.isArray(t)}function b(t){return"boolean"==typeof t}function v(t){return null===t}function h(t){return null==t}function g(t){return"number"==typeof t}function m(t){return"string"==typeof t}function S(t){return"symbol"===(void 0===t?"undefined":k(t))}function x(t){return void 0===t}function j(t){return w(t)&&"[object RegExp]"===T(t)}function w(t){return"object"===(void 0===t?"undefined":k(t))&&null!==t}function O(t){return w(t)&&"[object Date]"===T(t)}function E(t){return w(t)&&("[object Error]"===T(t)||t instanceof Error)}function A(t){return"function"==typeof t}function _(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"===(void 0===t?"undefined":k(t))||void 0===t}function T(t){return Object.prototype.toString.call(t)}function P(t,n){return Object.prototype.hasOwnProperty.call(t,n)}var k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};n.format=function(t){if(!m(t)){for(var n=[],e=0;e<arguments.length;e++)n.push(o(arguments[e]));return n.join(" ")}for(var e=1,r=arguments,i=r.length,u=String(t).replace(/%[sdj%]/g,function(t){if("%%"===t)return"%";if(e>=i)return t;switch(t){case"%s":return String(r[e++]);case"%d":return Number(r[e++]);case"%j":try{return JSON.stringify(r[e++])}catch(t){return"[Circular]"}default:return t}}),c=r[e];e<i;c=r[++e])v(c)||!w(c)?u+=" "+c:u+=" "+o(c);return u},n.deprecate=function(e,o){function i(){if(!u){if(r.throwDeprecation)throw new Error(o);r.traceDeprecation,u=!0}return e.apply(this,arguments)}if(x(t.process))return function(){return n.deprecate(e,o).apply(this,arguments)};if(!0===r.noDeprecation)return e;var u=!1;return i};var q,z={};n.debuglog=function(t){if(x(q)&&(q=e.i({NODE_ENV:"production"}).NODE_DEBUG||""),t=t.toUpperCase(),!z[t])if(new RegExp("\\b"+t+"\\b","i").test(q)){r.pid;z[t]=function(){n.format.apply(n,arguments)}}else z[t]=function(){};return z[t]},n.inspect=o,o.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},o.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},n.isArray=d,n.isBoolean=b,n.isNull=v,n.isNullOrUndefined=h,n.isNumber=g,n.isString=m,n.isSymbol=S,n.isUndefined=x,n.isRegExp=j,n.isObject=w,n.isDate=O,n.isError=E,n.isFunction=A,n.isPrimitive=_,n.isBuffer=e(49);n.log=function(){},n.inherits=e(47),n._extend=function(t,n){if(!n||!w(n))return t;for(var e=Object.keys(n),r=e.length;r--;)t[e[r]]=n[e[r]];return t}}).call(n,e(19),e(48))},,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(3);self.oninstall=function(){self.skipWaiting()},self.onactivate=function(){self.clients.claim()},self.addEventListener("sync",function(t){r.a.put("feature",1,"syncEvent")})}]);