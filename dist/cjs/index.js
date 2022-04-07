"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e={exports:{}},t={},r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var u=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(t).map((function(e){return t[e]}));if("0123456789"!==n.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var u,i,c=a(e),s=1;s<arguments.length;s++){for(var l in u=Object(arguments[s]))n.call(u,l)&&(c[l]=u[l]);if(r){i=r(u);for(var f=0;f<i.length;f++)o.call(u,i[f])&&(c[i[f]]=u[i[f]])}}return c},i=u,c=60103,s=60106;
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var l=60109,f=60110,p=60112;t.Suspense=60113;var d=60115,y=60116;if("function"==typeof Symbol&&Symbol.for){var v=Symbol.for;c=v("react.element"),s=v("react.portal"),t.Fragment=v("react.fragment"),t.StrictMode=v("react.strict_mode"),t.Profiler=v("react.profiler"),l=v("react.provider"),f=v("react.context"),p=v("react.forward_ref"),t.Suspense=v("react.suspense"),d=v("react.memo"),y=v("react.lazy")}var m="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function _(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||g}function w(){}function k(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||g}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=_.prototype;var C=k.prototype=new w;C.constructor=k,i(C,_.prototype),C.isPureReactComponent=!0;var R={current:null},j=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,r){var n,o={},a=null,u=null;if(null!=t)for(n in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(a=""+t.key),t)j.call(t,n)&&!S.hasOwnProperty(n)&&(o[n]=t[n]);var i=arguments.length-2;if(1===i)o.children=r;else if(1<i){for(var s=Array(i),l=0;l<i;l++)s[l]=arguments[l+2];o.children=s}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===o[n]&&(o[n]=i[n]);return{$$typeof:c,type:e,key:a,ref:u,props:o,_owner:R.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===c}var P=/\/+/g;function x(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function $(e,t,r,n,o){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var u=!1;if(null===e)u=!0;else switch(a){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case c:case s:u=!0}}if(u)return o=o(u=e),e=""===n?"."+x(u,0):n,Array.isArray(o)?(r="",null!=e&&(r=e.replace(P,"$&/")+"/"),$(o,t,r,"",(function(e){return e}))):null!=o&&(E(o)&&(o=function(e,t){return{$$typeof:c,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,r+(!o.key||u&&u.key===o.key?"":(""+o.key).replace(P,"$&/")+"/")+e)),t.push(o)),1;if(u=0,n=""===n?".":n+":",Array.isArray(e))for(var i=0;i<e.length;i++){var l=n+x(a=e[i],i);u+=$(a,t,r,l,o)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=m&&e[m]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),i=0;!(a=e.next()).done;)u+=$(a=a.value,t,r,l=n+x(a,i++),o);else if("object"===a)throw t=""+e,Error(h(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return u}function N(e,t,r){if(null==e)return e;var n=[],o=0;return $(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function T(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var D={current:null};function F(){var e=D.current;if(null===e)throw Error(h(321));return e}var I={ReactCurrentDispatcher:D,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:R,IsSomeRendererActing:{current:!1},assign:i};t.Children={map:N,forEach:function(e,t,r){N(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return N(e,(function(){t++})),t},toArray:function(e){return N(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error(h(143));return e}},t.Component=_,t.PureComponent=k,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.cloneElement=function(e,t,r){if(null==e)throw Error(h(267,e));var n=i({},e.props),o=e.key,a=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,u=R.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)j.call(t,l)&&!S.hasOwnProperty(l)&&(n[l]=void 0===t[l]&&void 0!==s?s[l]:t[l])}var l=arguments.length-2;if(1===l)n.children=r;else if(1<l){s=Array(l);for(var f=0;f<l;f++)s[f]=arguments[f+2];n.children=s}return{$$typeof:c,type:e.type,key:o,ref:a,props:n,_owner:u}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=O,t.createFactory=function(e){var t=O.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:p,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:y,_payload:{_status:-1,_result:e},_init:T}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return F().useCallback(e,t)},t.useContext=function(e,t){return F().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return F().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return F().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return F().useLayoutEffect(e,t)},t.useMemo=function(e,t){return F().useMemo(e,t)},t.useReducer=function(e,t,r){return F().useReducer(e,t,r)},t.useRef=function(e){return F().useRef(e)},t.useState=function(e){return F().useState(e)},t.version="17.0.2";var A={};
/** @license React v17.0.2
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */!function(e){"production"!==process.env.NODE_ENV&&function(){var t=u,r=60103,n=60106;e.Fragment=60107,e.StrictMode=60108,e.Profiler=60114;var o=60109,a=60110,i=60112;e.Suspense=60113;var c=60120,s=60115,l=60116,f=60121,p=60122,d=60117,y=60129,v=60131;if("function"==typeof Symbol&&Symbol.for){var m=Symbol.for;r=m("react.element"),n=m("react.portal"),e.Fragment=m("react.fragment"),e.StrictMode=m("react.strict_mode"),e.Profiler=m("react.profiler"),o=m("react.provider"),a=m("react.context"),i=m("react.forward_ref"),e.Suspense=m("react.suspense"),c=m("react.suspense_list"),s=m("react.memo"),l=m("react.lazy"),f=m("react.block"),p=m("react.server.block"),d=m("react.fundamental"),m("react.scope"),m("react.opaque.id"),y=m("react.debug_trace_mode"),m("react.offscreen"),v=m("react.legacy_hidden")}var h="function"==typeof Symbol&&Symbol.iterator;function g(e){if(null===e||"object"!=typeof e)return null;var t=h&&e[h]||e["@@iterator"];return"function"==typeof t?t:null}var b={current:null},_={current:null},w={},k=null;function C(e){k=e}w.setExtraStackFrame=function(e){k=e},w.getCurrentStack=null,w.getStackAddendum=function(){var e="";k&&(e+=k);var t=w.getCurrentStack;return t&&(e+=t()||""),e};var R={ReactCurrentDispatcher:b,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:t};function j(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];O("warn",e,r)}function S(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];O("error",e,r)}function O(e,t,r){var n=R.ReactDebugCurrentFrame.getStackAddendum();""!==n&&(t+="%s",r=r.concat([n]));var o=r.map((function(e){return""+e}));o.unshift("Warning: "+t),Function.prototype.apply.call(console[e],console,o)}R.ReactDebugCurrentFrame=w;var E={};function P(e,t){var r=e.constructor,n=r&&(r.displayName||r.name)||"ReactClass",o=n+"."+t;E[o]||(S("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",t,n),E[o]=!0)}var x={isMounted:function(e){return!1},enqueueForceUpdate:function(e,t,r){P(e,"forceUpdate")},enqueueReplaceState:function(e,t,r,n){P(e,"replaceState")},enqueueSetState:function(e,t,r,n){P(e,"setState")}},$={};function N(e,t,r){this.props=e,this.context=t,this.refs=$,this.updater=r||x}Object.freeze($),N.prototype.isReactComponent={},N.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},N.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};var T={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]},D=function(e,t){Object.defineProperty(N.prototype,e,{get:function(){j("%s(...) is deprecated in plain JavaScript React classes. %s",t[0],t[1])}})};for(var F in T)T.hasOwnProperty(F)&&D(F,T[F]);function I(){}function A(e,t,r){this.props=e,this.context=t,this.refs=$,this.updater=r||x}I.prototype=N.prototype;var M=A.prototype=new I;function U(e){return e.displayName||"Context"}function z(t){if(null==t)return null;if("number"==typeof t.tag&&S("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."),"function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t;switch(t){case e.Fragment:return"Fragment";case n:return"Portal";case e.Profiler:return"Profiler";case e.StrictMode:return"StrictMode";case e.Suspense:return"Suspense";case c:return"SuspenseList"}if("object"==typeof t)switch(t.$$typeof){case a:return U(t)+".Consumer";case o:return U(t._context)+".Provider";case i:return d=t,y=t.render,v="ForwardRef",m=y.displayName||y.name||"",d.displayName||(""!==m?v+"("+m+")":v);case s:return z(t.type);case f:return z(t._render);case l:var r=t,u=r._payload,p=r._init;try{return z(p(u))}catch(e){return null}}var d,y,v,m;return null}M.constructor=A,t(M,N.prototype),M.isPureReactComponent=!0;var L,q,V,W=Object.prototype.hasOwnProperty,B={key:!0,ref:!0,__self:!0,__source:!0};function Y(e){if(W.call(e,"ref")){var t=Object.getOwnPropertyDescriptor(e,"ref").get;if(t&&t.isReactWarning)return!1}return void 0!==e.ref}function H(e){if(W.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return void 0!==e.key}function J(e,t){var r=function(){L||(L=!0,S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};r.isReactWarning=!0,Object.defineProperty(e,"key",{get:r,configurable:!0})}function X(e,t){var r=function(){q||(q=!0,S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};r.isReactWarning=!0,Object.defineProperty(e,"ref",{get:r,configurable:!0})}function G(e){if("string"==typeof e.ref&&_.current&&e.__self&&_.current.stateNode!==e.__self){var t=z(_.current.type);V[t]||(S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',t,e.ref),V[t]=!0)}}V={};var K=function(e,t,n,o,a,u,i){var c={$$typeof:r,type:e,key:t,ref:n,props:i,_owner:u,_store:{}};return Object.defineProperty(c._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(c,"_self",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.defineProperty(c,"_source",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.freeze&&(Object.freeze(c.props),Object.freeze(c)),c};function Q(e,t,r){var n,o={},a=null,u=null,i=null,c=null;if(null!=t)for(n in Y(t)&&(u=t.ref,G(t)),H(t)&&(a=""+t.key),i=void 0===t.__self?null:t.__self,c=void 0===t.__source?null:t.__source,t)W.call(t,n)&&!B.hasOwnProperty(n)&&(o[n]=t[n]);var s=arguments.length-2;if(1===s)o.children=r;else if(s>1){for(var l=Array(s),f=0;f<s;f++)l[f]=arguments[f+2];Object.freeze&&Object.freeze(l),o.children=l}if(e&&e.defaultProps){var p=e.defaultProps;for(n in p)void 0===o[n]&&(o[n]=p[n])}if(a||u){var d="function"==typeof e?e.displayName||e.name||"Unknown":e;a&&J(o,d),u&&X(o,d)}return K(e,a,u,i,c,_.current,o)}function Z(e,r,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o,a,u=t({},e.props),i=e.key,c=e.ref,s=e._self,l=e._source,f=e._owner;if(null!=r)for(o in Y(r)&&(c=r.ref,f=_.current),H(r)&&(i=""+r.key),e.type&&e.type.defaultProps&&(a=e.type.defaultProps),r)W.call(r,o)&&!B.hasOwnProperty(o)&&(void 0===r[o]&&void 0!==a?u[o]=a[o]:u[o]=r[o]);var p=arguments.length-2;if(1===p)u.children=n;else if(p>1){for(var d=Array(p),y=0;y<p;y++)d[y]=arguments[y+2];u.children=d}return K(e.type,i,c,s,l,f,u)}function ee(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var te=!1,re=/\/+/g;function ne(e){return e.replace(re,"$&/")}function oe(e,t){return"object"==typeof e&&null!==e&&null!=e.key?(r=""+e.key,n={"=":"=0",":":"=2"},"$"+r.replace(/[=:]/g,(function(e){return n[e]}))):t.toString(36);var r,n}function ae(e,t,o,a,u){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c,s,l,f=!1;if(null===e)f=!0;else switch(i){case"string":case"number":f=!0;break;case"object":switch(e.$$typeof){case r:case n:f=!0}}if(f){var p=e,d=u(p),y=""===a?"."+oe(p,0):a;if(Array.isArray(d)){var v="";null!=y&&(v=ne(y)+"/"),ae(d,t,v,"",(function(e){return e}))}else null!=d&&(ee(d)&&(c=d,s=o+(!d.key||p&&p.key===d.key?"":ne(""+d.key)+"/")+y,d=K(c.type,s,c.ref,c._self,c._source,c._owner,c.props)),t.push(d));return 1}var m=0,h=""===a?".":a+":";if(Array.isArray(e))for(var b=0;b<e.length;b++)m+=ae(l=e[b],t,o,h+oe(l,b),u);else{var _=g(e);if("function"==typeof _){var w=e;_===w.entries&&(te||j("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),te=!0);for(var k,C=_.call(w),R=0;!(k=C.next()).done;)m+=ae(l=k.value,t,o,h+oe(l,R++),u)}else if("object"===i){var S=""+e;throw Error("Objects are not valid as a React child (found: "+("[object Object]"===S?"object with keys {"+Object.keys(e).join(", ")+"}":S)+"). If you meant to render a collection of children, use an array instead.")}}return m}function ue(e,t,r){if(null==e)return e;var n=[],o=0;return ae(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function ie(e){if(-1===e._status){var t=(0,e._result)(),r=e;r._status=0,r._result=t,t.then((function(t){if(0===e._status){var r=t.default;void 0===r&&S("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",t);var n=e;n._status=1,n._result=r}}),(function(t){if(0===e._status){var r=e;r._status=2,r._result=t}}))}if(1===e._status)return e._result;throw e._result}function ce(t){return"string"==typeof t||"function"==typeof t||(t===e.Fragment||t===e.Profiler||t===y||t===e.StrictMode||t===e.Suspense||t===c||t===v||"object"==typeof t&&null!==t&&(t.$$typeof===l||t.$$typeof===s||t.$$typeof===o||t.$$typeof===a||t.$$typeof===i||t.$$typeof===d||t.$$typeof===f||t[0]===p))}function se(){var e=b.current;if(null===e)throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");return e}var le,fe,pe,de,ye,ve,me,he=0;function ge(){}ge.__reactDisabledLog=!0;var be,_e=R.ReactCurrentDispatcher;function we(e,t,r){if(void 0===be)try{throw Error()}catch(e){var n=e.stack.trim().match(/\n( *(at )?)/);be=n&&n[1]||""}return"\n"+be+e}var ke,Ce=!1,Re="function"==typeof WeakMap?WeakMap:Map;function je(e,r){if(!e||Ce)return"";var n,o=ke.get(e);if(void 0!==o)return o;Ce=!0;var a,u=Error.prepareStackTrace;Error.prepareStackTrace=void 0,a=_e.current,_e.current=null,function(){if(0===he){le=console.log,fe=console.info,pe=console.warn,de=console.error,ye=console.group,ve=console.groupCollapsed,me=console.groupEnd;var e={configurable:!0,enumerable:!0,value:ge,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}he++}();try{if(r){var i=function(){throw Error()};if(Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(i,[])}catch(e){n=e}Reflect.construct(e,[],i)}else{try{i.call()}catch(e){n=e}e.call(i.prototype)}}else{try{throw Error()}catch(e){n=e}e()}}catch(t){if(t&&n&&"string"==typeof t.stack){for(var c=t.stack.split("\n"),s=n.stack.split("\n"),l=c.length-1,f=s.length-1;l>=1&&f>=0&&c[l]!==s[f];)f--;for(;l>=1&&f>=0;l--,f--)if(c[l]!==s[f]){if(1!==l||1!==f)do{if(l--,--f<0||c[l]!==s[f]){var p="\n"+c[l].replace(" at new "," at ");return"function"==typeof e&&ke.set(e,p),p}}while(l>=1&&f>=0);break}}}finally{Ce=!1,_e.current=a,function(){if(0==--he){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:t({},e,{value:le}),info:t({},e,{value:fe}),warn:t({},e,{value:pe}),error:t({},e,{value:de}),group:t({},e,{value:ye}),groupCollapsed:t({},e,{value:ve}),groupEnd:t({},e,{value:me})})}he<0&&S("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}(),Error.prepareStackTrace=u}var d=e?e.displayName||e.name:"",y=d?we(d):"";return"function"==typeof e&&ke.set(e,y),y}function Se(e,t,r){return je(e,!1)}function Oe(t,r,n){if(null==t)return"";if("function"==typeof t)return je(t,function(e){var t=e.prototype;return!(!t||!t.isReactComponent)}(t));if("string"==typeof t)return we(t);switch(t){case e.Suspense:return we("Suspense");case c:return we("SuspenseList")}if("object"==typeof t)switch(t.$$typeof){case i:return Se(t.render);case s:return Oe(t.type,r,n);case f:return Se(t._render);case l:var o=t,a=o._payload,u=o._init;try{return Oe(u(a),r,n)}catch(e){}}return""}ke=new Re;var Ee,Pe={},xe=R.ReactDebugCurrentFrame;function $e(e){if(e){var t=e._owner,r=Oe(e.type,e._source,t?t.type:null);xe.setExtraStackFrame(r)}else xe.setExtraStackFrame(null)}function Ne(e){if(e){var t=e._owner;C(Oe(e.type,e._source,t?t.type:null))}else C(null)}function Te(){if(_.current){var e=z(_.current.type);if(e)return"\n\nCheck the render method of `"+e+"`."}return""}function De(e){return null!=e&&void 0!==(t=e.__source)?"\n\nCheck your code at "+t.fileName.replace(/^.*[\\\/]/,"")+":"+t.lineNumber+".":"";var t}Ee=!1;var Fe={};function Ie(e,t){if(e._store&&!e._store.validated&&null==e.key){e._store.validated=!0;var r=function(e){var t=Te();if(!t){var r="string"==typeof e?e:e.displayName||e.name;r&&(t="\n\nCheck the top-level render call using <"+r+">.")}return t}(t);if(!Fe[r]){Fe[r]=!0;var n="";e&&e._owner&&e._owner!==_.current&&(n=" It was passed a child from "+z(e._owner.type)+"."),Ne(e),S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',r,n),Ne(null)}}}function Ae(e,t){if("object"==typeof e)if(Array.isArray(e))for(var r=0;r<e.length;r++){var n=e[r];ee(n)&&Ie(n,t)}else if(ee(e))e._store&&(e._store.validated=!0);else if(e){var o=g(e);if("function"==typeof o&&o!==e.entries)for(var a,u=o.call(e);!(a=u.next()).done;)ee(a.value)&&Ie(a.value,t)}}function Me(e){var t,r=e.type;if(null!=r&&"string"!=typeof r){if("function"==typeof r)t=r.propTypes;else{if("object"!=typeof r||r.$$typeof!==i&&r.$$typeof!==s)return;t=r.propTypes}if(t){var n=z(r);!function(e,t,r,n,o){var a=Function.call.bind(Object.prototype.hasOwnProperty);for(var u in e)if(a(e,u)){var i=void 0;try{if("function"!=typeof e[u]){var c=Error((n||"React class")+": "+r+" type `"+u+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[u]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw c.name="Invariant Violation",c}i=e[u](t,u,n,r,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(e){i=e}!i||i instanceof Error||($e(o),S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",r,u,typeof i),$e(null)),i instanceof Error&&!(i.message in Pe)&&(Pe[i.message]=!0,$e(o),S("Failed %s type: %s",r,i.message),$e(null))}}(t,e.props,"prop",n,e)}else if(void 0!==r.PropTypes&&!Ee){Ee=!0,S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",z(r)||"Unknown")}"function"!=typeof r.getDefaultProps||r.getDefaultProps.isReactClassApproved||S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Ue(e){for(var t=Object.keys(e.props),r=0;r<t.length;r++){var n=t[r];if("children"!==n&&"key"!==n){Ne(e),S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),Ne(null);break}}null!==e.ref&&(Ne(e),S("Invalid attribute `ref` supplied to `React.Fragment`."),Ne(null))}function ze(t,n,o){var a=ce(t);if(!a){var u="";(void 0===t||"object"==typeof t&&null!==t&&0===Object.keys(t).length)&&(u+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var i,c=De(n);u+=c||Te(),null===t?i="null":Array.isArray(t)?i="array":void 0!==t&&t.$$typeof===r?(i="<"+(z(t.type)||"Unknown")+" />",u=" Did you accidentally export a JSX literal instead of a component?"):i=typeof t,S("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",i,u)}var s=Q.apply(this,arguments);if(null==s)return s;if(a)for(var l=2;l<arguments.length;l++)Ae(arguments[l],t);return t===e.Fragment?Ue(s):Me(s),s}var Le=!1;try{var qe=Object.freeze({});new Map([[qe,null]]),new Set([qe])}catch(e){}var Ve=ze,We=function(e,t,r){for(var n=Z.apply(this,arguments),o=2;o<arguments.length;o++)Ae(arguments[o],n.type);return Me(n),n},Be=function(e){var t=ze.bind(null,e);return t.type=e,Le||(Le=!0,j("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")),Object.defineProperty(t,"type",{enumerable:!1,get:function(){return j("Factory.type is deprecated. Access the class directly before passing it to createFactory."),Object.defineProperty(this,"type",{value:e}),e}}),t},Ye={map:ue,forEach:function(e,t,r){ue(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return ue(e,(function(){t++})),t},toArray:function(e){return ue(e,(function(e){return e}))||[]},only:function(e){if(!ee(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};e.Children=Ye,e.Component=N,e.PureComponent=A,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R,e.cloneElement=We,e.createContext=function(e,t){void 0===t?t=null:null!==t&&"function"!=typeof t&&S("createContext: Expected the optional second argument to be a function. Instead received: %s",t);var r={$$typeof:a,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null};r.Provider={$$typeof:o,_context:r};var n=!1,u=!1,i=!1,c={$$typeof:a,_context:r,_calculateChangedBits:r._calculateChangedBits};return Object.defineProperties(c,{Provider:{get:function(){return u||(u=!0,S("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")),r.Provider},set:function(e){r.Provider=e}},_currentValue:{get:function(){return r._currentValue},set:function(e){r._currentValue=e}},_currentValue2:{get:function(){return r._currentValue2},set:function(e){r._currentValue2=e}},_threadCount:{get:function(){return r._threadCount},set:function(e){r._threadCount=e}},Consumer:{get:function(){return n||(n=!0,S("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")),r.Consumer}},displayName:{get:function(){return r.displayName},set:function(e){i||(j("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.",e),i=!0)}}}),r.Consumer=c,r._currentRenderer=null,r._currentRenderer2=null,r},e.createElement=Ve,e.createFactory=Be,e.createRef=function(){var e={current:null};return Object.seal(e),e},e.forwardRef=function(e){null!=e&&e.$$typeof===s?S("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):"function"!=typeof e?S("forwardRef requires a render function but was given %s.",null===e?"null":typeof e):0!==e.length&&2!==e.length&&S("forwardRef render functions accept exactly two parameters: props and ref. %s",1===e.length?"Did you forget to use the ref parameter?":"Any additional parameter will be undefined."),null!=e&&(null==e.defaultProps&&null==e.propTypes||S("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?"));var t,r={$$typeof:i,render:e};return Object.defineProperty(r,"displayName",{enumerable:!1,configurable:!0,get:function(){return t},set:function(r){t=r,null==e.displayName&&(e.displayName=r)}}),r},e.isValidElement=ee,e.lazy=function(e){var t,r,n={$$typeof:l,_payload:{_status:-1,_result:e},_init:ie};return Object.defineProperties(n,{defaultProps:{configurable:!0,get:function(){return t},set:function(e){S("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),t=e,Object.defineProperty(n,"defaultProps",{enumerable:!0})}},propTypes:{configurable:!0,get:function(){return r},set:function(e){S("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),r=e,Object.defineProperty(n,"propTypes",{enumerable:!0})}}}),n},e.memo=function(e,t){ce(e)||S("memo: The first argument must be a component. Instead received: %s",null===e?"null":typeof e);var r,n={$$typeof:s,type:e,compare:void 0===t?null:t};return Object.defineProperty(n,"displayName",{enumerable:!1,configurable:!0,get:function(){return r},set:function(t){r=t,null==e.displayName&&(e.displayName=t)}}),n},e.useCallback=function(e,t){return se().useCallback(e,t)},e.useContext=function(e,t){var r=se();if(void 0!==t&&S("useContext() second argument is reserved for future use in React. Passing it is not supported. You passed: %s.%s",t,"number"==typeof t&&Array.isArray(arguments[2])?"\n\nDid you call array.map(useContext)? Calling Hooks inside a loop is not supported. Learn more at https://reactjs.org/link/rules-of-hooks":""),void 0!==e._context){var n=e._context;n.Consumer===e?S("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?"):n.Provider===e&&S("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?")}return r.useContext(e,t)},e.useDebugValue=function(e,t){return se().useDebugValue(e,t)},e.useEffect=function(e,t){return se().useEffect(e,t)},e.useImperativeHandle=function(e,t,r){return se().useImperativeHandle(e,t,r)},e.useLayoutEffect=function(e,t){return se().useLayoutEffect(e,t)},e.useMemo=function(e,t){return se().useMemo(e,t)},e.useReducer=function(e,t,r){return se().useReducer(e,t,r)},e.useRef=function(e){return se().useRef(e)},e.useState=function(e){return se().useState(e)},e.version="17.0.2"}()}(A),"production"===process.env.NODE_ENV?e.exports=t:e.exports=A;const M=e.exports.createContext({loader:null,rootMargin:"0px",threshold:1});exports.LazyBastard=({children:t,height:r=15})=>{const[n,o]=e.exports.useState(!1),{loader:a,rootMargin:u,threshold:i}=e.exports.useContext(M),c=e.exports.useRef(null);e.exports.useEffect((()=>{let e;const t=()=>{e&&c.current&&e.unobserve(c.current)};if(c.current)return e=new IntersectionObserver((e=>{e[0].intersectionRatio<=0||(o(!0),t())}),{rootMargin:u,threshold:i}),e.observe(c.current),()=>{t()}}),[c,u,i]);const s=Math.floor(r/26)||1;return n?e.exports.createElement(e.exports.Fragment,null,e.exports.createElement("div",{ref:c}),e.exports.createElement(e.exports.Suspense,{fallback:a||e.exports.createElement("ul",{className:"lazy-bastard"},Array(s).fill(null).map(((t,r)=>e.exports.createElement("li",{key:r}))))},t)):e.exports.createElement("div",{ref:c,style:{height:r}})},exports.LazyBastardProvider=({children:t,loader:r=null})=>e.exports.createElement(M.Provider,{value:{loader:r}},t);
