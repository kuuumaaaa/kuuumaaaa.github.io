(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[337],{7098:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/work",function(){return r(7645)}])},1063:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var n=r(5893),o=r(9008),a=r(1664),i=r.n(a),c=r(667),l=r.n(c);function u(){return(0,n.jsxs)("nav",{className:l().headerNav,children:[(0,n.jsx)(i(),{href:"/work",children:(0,n.jsx)("a",{children:"Works"})}),(0,n.jsx)(i(),{href:"/about",children:(0,n.jsx)("a",{children:"About"})}),(0,n.jsx)(i(),{href:"/contact",children:(0,n.jsx)("a",{children:"Contact"})})]})}function f(e){var t=e.children;return(0,n.jsxs)("div",{className:l().container,children:[(0,n.jsxs)(o.default,{children:[(0,n.jsx)("title",{children:"Portfolio"}),(0,n.jsx)("meta",{name:"description",content:"kuma portfolio"}),(0,n.jsx)("meta",{name:"viewpoart",content:"width=device-width, initial-scale=1.0, user-scalable=no"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsxs)("header",{className:l().header,children:[(0,n.jsx)(i(),{href:"/",children:(0,n.jsx)("p",{children:"Kuma Portfolio"})}),(0,n.jsx)(u,{})]}),(0,n.jsx)("main",{className:l().main,children:t}),(0,n.jsx)("footer",{className:l().footer,children:(0,n.jsxs)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["Powered by"," ",(0,n.jsx)("span",{className:l().logo,children:(0,n.jsx)("img",{src:"/vercel.svg",alt:"Vercel Logo",width:72,height:16})})]})})]})}},1551:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(l){c=!0,o=l}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,i=(a=r(7294))&&a.__esModule?a:{default:a},c=r(1003),l=r(880),u=r(9246);var f={};function s(e,t,r,n){if(e&&c.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;f[t+"%"+r+(o?"%"+o:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=l.useRouter(),a=i.default.useMemo((function(){var t=o(c.resolveHref(n,e.href,!0),2),r=t[0],a=t[1];return{href:r,as:e.as?c.resolveHref(n,e.as):a||r}}),[n,e.href,e.as]),d=a.href,p=a.as,h=i.default.useRef(d),m=i.default.useRef(p),v=e.children,y=e.replace,_=e.shallow,b=e.scroll,g=e.locale;"string"===typeof v&&(v=i.default.createElement("a",null,v));var j=(t=i.default.Children.only(v))&&"object"===typeof t&&t.ref,x=o(u.useIntersection({rootMargin:"200px"}),3),w=x[0],k=x[1],E=x[2],M=i.default.useCallback((function(e){m.current===p&&h.current===d||(E(),m.current=p,h.current=d),w(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[p,j,d,E,w]);i.default.useEffect((function(){var e=k&&r&&c.isLocalURL(d),t="undefined"!==typeof g?g:n&&n.locale,o=f[d+"%"+p+(t?"%"+t:"")];e&&!o&&s(n,d,p,{locale:t})}),[p,d,k,g,r,n]);var C={ref:M,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,i,l){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:a,locale:l,scroll:i}))}(e,n,d,p,y,_,b,g)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),c.isLocalURL(d)&&s(n,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var L="undefined"!==typeof g?g:n&&n.locale,N=n&&n.isLocaleDomain&&c.getDomainLocale(p,L,n&&n.locales,n&&n.domainLocales);C.href=N||c.addBasePath(c.addLocale(p,L,n&&n.defaultLocale))}return i.default.cloneElement(t,C)};t.default=d,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(l){c=!0,o=l}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!c,f=a.useRef(),s=o(a.useState(!1),2),d=s[0],p=s[1],h=o(a.useState(t?t.current:null),2),m=h[0],v=h[1],y=a.useCallback((function(e){f.current&&(f.current(),f.current=void 0),n||d||e&&e.tagName&&(f.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=u.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=l.get(n):(t=l.get(r),u.push(r));if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return l.set(r,t={id:r,observer:a,elements:o}),t}(r),o=n.id,a=n.observer,i=n.elements;return i.set(e,t),a.observe(e),function(){if(i.delete(e),a.unobserve(e),0===i.size){a.disconnect(),l.delete(o);var t=u.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&u.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:m,rootMargin:r}))}),[n,m,r,d]),_=a.useCallback((function(){p(!1)}),[]);return a.useEffect((function(){if(!c&&!d){var e=i.requestIdleCallback((function(){return p(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){t&&v(t.current)}),[t]),[y,d,_]};var a=r(7294),i=r(4686),c="undefined"!==typeof IntersectionObserver;var l=new Map,u=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},7645:function(e,t,r){"use strict";r.r(t);var n=r(5893),o=r(1063);t.default=function(){return(0,n.jsx)(o.Z,{children:(0,n.jsx)("h2",{children:" Work"})})}},667:function(e){e.exports={container:"Home_container__7g8NP",main:"Home_main__S6bRQ",header:"Home_header__3xbHQ",footer:"Home_footer__ksD7n",title:"Home_title__BJ_Vh",description:"Home_description__MKzV8",code:"Home_code__gfS3g",grid:"Home_grid__MkiGS",card:"Home_card__MtCb_",logo:"Home_logo__jLiWu"}},9008:function(e,t,r){e.exports=r(3121)},1664:function(e,t,r){e.exports=r(1551)}},function(e){e.O(0,[774,888,179],(function(){return t=7098,e(e.s=t);var t}));var t=e.O();_N_E=t}]);