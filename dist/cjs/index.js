"use strict";function e(e){if(e&&e.__esModule)return e;var n=Object.create(null);return e&&Object.keys(e).forEach((function(t){if("default"!==t){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})}})),n.default=e,Object.freeze(n)}Object.defineProperty(exports,"__esModule",{value:!0});var n=e(require("react")),t=n.createContext({loader:null,rootMargin:"0px",threshold:1}),r=[],a=[];!function(e,n){if(e&&"undefined"!=typeof document){var t,i=!0===n.prepend?"prepend":"append",o=!0===n.singleTag,l="string"==typeof n.container?document.querySelector(n.container):document.getElementsByTagName("head")[0];if(o){var d=r.indexOf(l);-1===d&&(d=r.push(l)-1,a[d]={}),t=a[d]&&a[d][i]?a[d][i]:a[d][i]=s()}else t=s();65279===e.charCodeAt(0)&&(e=e.substring(1)),t.styleSheet?t.styleSheet.cssText+=e:t.appendChild(document.createTextNode(e))}function s(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),n.attributes)for(var t=Object.keys(n.attributes),r=0;r<t.length;r++)e.setAttribute(t[r],n.attributes[t[r]]);var a="prepend"===i?"afterbegin":"beforeend";return l.insertAdjacentElement(a,e),e}}("@keyframes lazy-bastard-skeleton-loading {\n  0% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0 50%;\n  }\n}\n\n.lazy-bastard-skeleton-loading {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.lazy-bastard-skeleton-loading li {\n  margin: 0;\n  padding: 0;\n  animation: skeleton-loading 1.4s infinite;\n  background-image: linear-gradient(\n    90deg,\n    rgba(190, 190, 190, 0.2) 25%,\n    rgba(255, 255, 255, 0.16) 37%,\n    rgba(190, 190, 190, 0.2) 63%\n  );\n  background-size: 400% 100%;\n  border-radius: 4px;\n  height: 16px;\n  width: 100%;\n}\n\n.lazy-bastard-skeleton-loading li:not(:last-child) {\n  margin-bottom: 10px;\n}\n\n.lazy-bastard-skeleton-loading\n  li:last-child:not(:first-child):not(:nth-child(2)) {\n  width: 61%;\n}\n",{});exports.LazyBastard=function(e){var r=e.children,a=e.height,i=void 0===a?15:a,o=n.useState(!1),l=o[0],d=o[1],s=n.useContext(t),c=s.loader,u=s.rootMargin,f=s.threshold,g=n.useRef(null);n.useEffect((function(){var e,n=function(){e&&g.current&&e.unobserve(g.current)};if(g.current)return(e=new IntersectionObserver((function(e){e[0].intersectionRatio<=0||(d(!0),n())}),{rootMargin:u,threshold:f})).observe(g.current),function(){n()}}),[g,u,f]);var b=Math.floor(i/26)||1;return l?n.createElement(n.Fragment,null,n.createElement("div",{ref:g}),n.createElement(n.Suspense,{fallback:c||n.createElement("ul",{className:"lazy-bastard-skeleton-loading"},Array(b).fill(null).map((function(e,t){return n.createElement("li",{key:t})})))},r)):n.createElement("div",{ref:g,style:{height:i}})},exports.LazyBastardProvider=function(e){var r=e.children,a=e.loader,i=void 0===a?null:a;return n.createElement(t.Provider,{value:{loader:i}},r)};
