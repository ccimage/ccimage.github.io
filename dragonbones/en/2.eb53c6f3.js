(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{215:function(e,t,n){"use strict";var a=n(24);n.d(t,"a",(function(){return a.c})),n.d(t,"b",(function(){return a.d})),n.d(t,"c",(function(){return a.e}))},220:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(239),c=n(218),i=n(210),s=n(213);const l="",u="dark";var h=()=>{const{siteConfig:{themeConfig:{disableDarkMode:e}}={}}=Object(i.a)(),[t,n]=Object(a.useState)("undefined"!=typeof document?document.documentElement.getAttribute("data-theme"):l),r=Object(a.useCallback)(e=>{try{localStorage.setItem("theme",e)}catch(t){console.error(t)}},[n]),o=Object(a.useCallback)(()=>{n(l),r(l)},[]),c=Object(a.useCallback)(()=>{n(u),r(u)},[]);return Object(a.useEffect)(()=>{document.documentElement.setAttribute("data-theme",t)},[t]),Object(a.useEffect)(()=>{if(!e)try{const e=localStorage.getItem("theme");null!==e&&n(e)}catch(t){console.error(t)}},[n]),Object(a.useEffect)(()=>{e||window.matchMedia("(prefers-color-scheme: dark)").addListener(({matches:e})=>{n(e?u:l)})},[]),{isDarkTheme:t===u,setLightTheme:o,setDarkTheme:c}},d=n(240);var f=function(e){const{isDarkTheme:t,setLightTheme:n,setDarkTheme:a}=h();return r.a.createElement(d.a.Provider,{value:{isDarkTheme:t,setLightTheme:n,setDarkTheme:a}},e.children)};var m=()=>{const[e,t]=Object(a.useState)({}),n=Object(a.useCallback)((e,t)=>{try{localStorage.setItem("docusaurus.tab."+e,t)}catch(n){console.error(n)}},[]);return Object(a.useEffect)(()=>{try{const e={};for(let t=0;t<localStorage.length;t+=1){const n=localStorage.key(t);if(n.startsWith("docusaurus.tab.")){e[n.substring("docusaurus.tab.".length)]=localStorage.getItem(n)}}t(e)}catch(e){console.error(e)}},[]),{tabGroupChoices:e,setTabGroupChoices:(e,a)=>{t(t=>({...t,[e]:a})),n(e,a)}}};var v=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{}});var p=function(e){const{tabGroupChoices:t,setTabGroupChoices:n}=m();return r.a.createElement(v.Provider,{value:{tabGroupChoices:t,setTabGroupChoices:n}},e.children)},b=n(96),g=n.n(b);var _=function(){const{siteConfig:{themeConfig:{announcementBar:e={}}}={}}=Object(i.a)(),{id:t,content:n,backgroundColor:o,textColor:c}=e,[s,l]=Object(a.useState)(!0);return Object(a.useEffect)(()=>{const e=localStorage.getItem("docusaurus.announcement.id"),n=t!==e;localStorage.setItem("docusaurus.announcement.id",t),n&&localStorage.setItem("docusaurus.announcement.dismiss",!1),(n||"false"===localStorage.getItem("docusaurus.announcement.dismiss"))&&l(!1)},[]),!n||s?null:r.a.createElement("div",{className:g.a.announcementBar,style:{backgroundColor:o,color:c},role:"banner"},r.a.createElement("div",{className:g.a.announcementBarContent,dangerouslySetInnerHTML:{__html:n}}),r.a.createElement("button",{type:"button",className:g.a.announcementBarClose,onClick:()=>{localStorage.setItem("docusaurus.announcement.dismiss",!0),l(!0)},"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")))},k=n(1),E=n(211),y=n.n(E),j=n(219),O=n(221),w=n(275),C=n.n(w),N=n(97),T=n.n(N);const x=()=>r.a.createElement("span",{className:y()(T.a.toggle,T.a.moon)}),S=()=>r.a.createElement("span",{className:y()(T.a.toggle,T.a.sun)});var P=function(e){const{isClient:t}=Object(i.a)();return r.a.createElement(C.a,Object(k.a)({disabled:!t,icons:{checked:r.a.createElement(x,null),unchecked:r.a.createElement(S,null)}},e))},M=n(233),L=n(215);var D=function(e){const[t,n]=Object(a.useState)(e);return Object(a.useEffect)(()=>{const e=()=>n(window.location.hash);return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[]),[t,n]};var I=e=>{const[t,n]=Object(a.useState)(!0),[r,o]=Object(a.useState)(!1),[c,i]=Object(a.useState)(0),[s,l]=Object(a.useState)(0),u=Object(a.useCallback)(e=>{null!==e&&l(e.getBoundingClientRect().height)},[]),h=Object(L.c)(),[d,f]=D(h.hash),m=()=>{const e=window.pageYOffset||document.documentElement.scrollTop;if(0===e&&n(!0),e<s)return;if(r)return o(!1),n(!1),void i(e);const t=document.documentElement.scrollHeight-s,a=window.innerHeight;c&&e>=c?n(!1):e+a<t&&n(!0),i(e)};return Object(a.useEffect)(()=>{if(e)return window.addEventListener("scroll",m),()=>{window.removeEventListener("scroll",m)}},[c,s]),Object(a.useEffect)(()=>{e&&(n(!0),f(h.hash))},[h]),Object(a.useEffect)(()=>{e&&d&&o(!0)},[d]),{navbarRef:u,isNavbarVisible:t}},B=n(243),A=n(244),F=n(98),X=n.n(F);function R({activeBasePath:e,to:t,href:n,label:a,position:o,...c}){const i=Object(s.a)(t),l=Object(s.a)(e);return r.a.createElement(j.a,Object(k.a)({},n?{target:"_blank",rel:"noopener noreferrer",href:n}:{activeClassName:"navbar__link--active",to:i,...e?{isActive:(e,t)=>t.pathname.startsWith(l)}:null},c),a)}function G({items:e,position:t,...n}){return e?r.a.createElement("div",{className:y()("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===t,"dropdown--right":"right"===t})},r.a.createElement(R,Object(k.a)({className:"navbar__item navbar__link"},n),n.label),r.a.createElement("ul",{className:"dropdown__menu"},e.map((e,t)=>r.a.createElement("li",{key:t},r.a.createElement(R,Object(k.a)({className:"navbar__item navbar__link"},e)))))):r.a.createElement(R,Object(k.a)({className:"navbar__item navbar__link"},n))}function H({items:e,...t}){return e?r.a.createElement("li",{className:"menu__list-item"},r.a.createElement(R,Object(k.a)({className:"menu__link menu__link--sublist"},t),t.label),r.a.createElement("ul",{className:"menu__list"},e.map((e,t)=>r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(R,Object(k.a)({className:"menu__link"},e)))))):r.a.createElement("li",{className:"menu__list-item"},r.a.createElement(R,Object(k.a)({className:"menu__link"},t)))}var U=function(){const{siteConfig:{themeConfig:{navbar:{title:e,links:t=[],hideOnScroll:n=!1}={},disableDarkMode:o=!1}},isClient:c}=Object(i.a)(),[s,l]=Object(a.useState)(!1),[u,h]=Object(a.useState)(!1),{isDarkTheme:d,setLightTheme:f,setDarkTheme:m}=Object(M.a)(),{navbarRef:v,isNavbarVisible:p}=I(n),{logoLink:b,logoLinkProps:g,logoImageUrl:_,logoAlt:E}=Object(A.a)();Object(B.a)(s);const w=Object(a.useCallback)(()=>{l(!0)},[l]),C=Object(a.useCallback)(()=>{l(!1)},[l]),N=Object(a.useCallback)(e=>e.target.checked?m():f(),[f,m]);return r.a.createElement("nav",{ref:v,className:y()("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":s,[X.a.navbarHideable]:n,[X.a.navbarHidden]:!p})},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:w,onKeyDown:w},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(j.a,Object(k.a)({className:"navbar__brand",to:b},g),null!=_&&r.a.createElement("img",{key:c,className:"navbar__logo",src:_,alt:E}),null!=e&&r.a.createElement("strong",{className:y()("navbar__title",{[X.a.hideLogoText]:u})},e)),t.filter(e=>"left"===e.position).map((e,t)=>r.a.createElement(G,Object(k.a)({},e,{key:t})))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},t.filter(e=>"right"===e.position).map((e,t)=>r.a.createElement(G,Object(k.a)({},e,{key:t}))),!o&&r.a.createElement(P,{className:X.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:d,onChange:N}),r.a.createElement(O.a,{handleSearchBarToggle:h,isSearchBarExpanded:u}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:C}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(j.a,Object(k.a)({className:"navbar__brand",onClick:C,to:b},g),null!=_&&r.a.createElement("img",{key:c,className:"navbar__logo",src:_,alt:E}),null!=e&&r.a.createElement("strong",{className:"navbar__title"},e)),!o&&s&&r.a.createElement(P,{"aria-label":"Dark mode toggle in sidebar",checked:d,onChange:N})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},t.map((e,t)=>r.a.createElement(H,Object(k.a)({},e,{onClick:C,key:t}))))))))},W=n(99),K=n.n(W);function V({to:e,href:t,label:n,...a}){const o=Object(s.a)(e);return r.a.createElement(j.a,Object(k.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{to:o},a),n)}const Y=({url:e,alt:t})=>r.a.createElement("img",{className:"footer__logo",alt:t,src:e});var z=function(){const e=Object(i.a)(),{siteConfig:t={}}=e,{themeConfig:n={}}=t,{footer:a}=n,{copyright:o,links:c=[],logo:l={}}=a||{},u=Object(s.a)(l.src);return a?r.a.createElement("footer",{className:y()("footer",{"footer--dark":"dark"===a.style})},r.a.createElement("div",{className:"container"},c&&c.length>0&&r.a.createElement("div",{className:"row footer__links"},c.map((e,t)=>r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((e,t)=>e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(V,e)))):null))),(l||o)&&r.a.createElement("div",{className:"text--center"},l&&l.src&&r.a.createElement("div",{className:"margin-bottom--sm"},l.href?r.a.createElement("a",{href:l.href,target:"_blank",rel:"noopener noreferrer",className:K.a.footerLogoLink},r.a.createElement(Y,{alt:l.alt,url:u})):r.a.createElement(Y,{alt:l.alt,url:u})),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:o}})))):null};n(100);t.a=function(e){const{siteConfig:t={}}=Object(i.a)(),{favicon:n,title:a,themeConfig:{image:l},url:u}=t,{children:h,title:d,noFooter:m,description:v,image:b,keywords:g,permalink:k,version:E}=e,y=d?`${d} | ${a}`:a,j=b||l;let O=u+Object(s.a)(j);Object(c.a)(j)||(O=j);const w=Object(s.a)(n);return r.a.createElement(f,null,r.a.createElement(p,null,r.a.createElement(o.a,null,r.a.createElement("html",{lang:"en"}),y&&r.a.createElement("title",null,y),y&&r.a.createElement("meta",{property:"og:title",content:y}),n&&r.a.createElement("link",{rel:"shortcut icon",href:w}),v&&r.a.createElement("meta",{name:"description",content:v}),v&&r.a.createElement("meta",{property:"og:description",content:v}),E&&r.a.createElement("meta",{name:"docsearch:version",content:E}),g&&g.length&&r.a.createElement("meta",{name:"keywords",content:g.join(",")}),j&&r.a.createElement("meta",{property:"og:image",content:O}),j&&r.a.createElement("meta",{property:"twitter:image",content:O}),j&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+y}),k&&r.a.createElement("meta",{property:"og:url",content:u+k}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.a.createElement(_,null),r.a.createElement(U,null),r.a.createElement("div",{className:"main-wrapper"},h),!m&&r.a.createElement(z,null)))}},222:function(e,t,n){"use strict";var a,r,o,c,i=n(39),s=n(7),l=n(56),u=n(232),h=n(55),d=n(21),f=n(57),m=n(260),v=n(261),p=n(265),b=n(241).set,g=n(267)(),_=n(242),k=n(268),E=n(269),y=n(270),j=s.TypeError,O=s.process,w=O&&O.versions,C=w&&w.v8||"",N=s.Promise,T="process"==u(O),x=function(){},S=r=_.f,P=!!function(){try{var e=N.resolve(1),t=(e.constructor={})[n(11)("species")]=function(e){e(x,x)};return(T||"function"==typeof PromiseRejectionEvent)&&e.then(x)instanceof t&&0!==C.indexOf("6.6")&&-1===E.indexOf("Chrome/66")}catch(a){}}(),M=function(e){var t;return!(!d(e)||"function"!=typeof(t=e.then))&&t},L=function(e,t){if(!e._n){e._n=!0;var n=e._c;g((function(){for(var a=e._v,r=1==e._s,o=0,c=function(t){var n,o,c,i=r?t.ok:t.fail,s=t.resolve,l=t.reject,u=t.domain;try{i?(r||(2==e._h&&B(e),e._h=1),!0===i?n=a:(u&&u.enter(),n=i(a),u&&(u.exit(),c=!0)),n===t.promise?l(j("Promise-chain cycle")):(o=M(n))?o.call(n,s,l):s(n)):l(a)}catch(h){u&&!c&&u.exit(),l(h)}};n.length>o;)c(n[o++]);e._c=[],e._n=!1,t&&!e._h&&D(e)}))}},D=function(e){b.call(s,(function(){var t,n,a,r=e._v,o=I(e);if(o&&(t=k((function(){T?O.emit("unhandledRejection",r,e):(n=s.onunhandledrejection)?n({promise:e,reason:r}):(a=s.console)&&a.error&&a.error("Unhandled promise rejection",r)})),e._h=T||I(e)?2:1),e._a=void 0,o&&t.e)throw t.v}))},I=function(e){return 1!==e._h&&0===(e._a||e._c).length},B=function(e){b.call(s,(function(){var t;T?O.emit("rejectionHandled",e):(t=s.onrejectionhandled)&&t({promise:e,reason:e._v})}))},A=function(e){var t=this;t._d||(t._d=!0,(t=t._w||t)._v=e,t._s=2,t._a||(t._a=t._c.slice()),L(t,!0))},F=function(e){var t,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===e)throw j("Promise can't be resolved itself");(t=M(e))?g((function(){var a={_w:n,_d:!1};try{t.call(e,l(F,a,1),l(A,a,1))}catch(r){A.call(a,r)}})):(n._v=e,n._s=1,L(n,!1))}catch(a){A.call({_w:n,_d:!1},a)}}};P||(N=function(e){m(this,N,"Promise","_h"),f(e),a.call(this);try{e(l(F,this,1),l(A,this,1))}catch(t){A.call(this,t)}},(a=function(e){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=n(271)(N.prototype,{then:function(e,t){var n=S(p(this,N));return n.ok="function"!=typeof e||e,n.fail="function"==typeof t&&t,n.domain=T?O.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&L(this,!1),n.promise},catch:function(e){return this.then(void 0,e)}}),o=function(){var e=new a;this.promise=e,this.resolve=l(F,e,1),this.reject=l(A,e,1)},_.f=S=function(e){return e===N||e===c?new o(e):r(e)}),h(h.G+h.W+h.F*!P,{Promise:N}),n(42)(N,"Promise"),n(272)("Promise"),c=n(20).Promise,h(h.S+h.F*!P,"Promise",{reject:function(e){var t=S(this);return(0,t.reject)(e),t.promise}}),h(h.S+h.F*(i||!P),"Promise",{resolve:function(e){return y(i&&this===c?N:this,e)}}),h(h.S+h.F*!(P&&n(273)((function(e){N.all(e).catch(x)}))),"Promise",{all:function(e){var t=this,n=S(t),a=n.resolve,r=n.reject,o=k((function(){var n=[],o=0,c=1;v(e,!1,(function(e){var i=o++,s=!1;n.push(void 0),c++,t.resolve(e).then((function(e){s||(s=!0,n[i]=e,--c||a(n))}),r)})),--c||a(n)}));return o.e&&r(o.v),n.promise},race:function(e){var t=this,n=S(t),a=n.reject,r=k((function(){v(e,!1,(function(e){t.resolve(e).then(n.resolve,a)}))}));return r.e&&a(r.v),n.promise}})},223:function(e,t,n){"use strict";var a=n(232),r={};r[n(11)("toStringTag")]="z",r+""!="[object z]"&&n(23)(Object.prototype,"toString",(function(){return"[object "+a(this)+"]"}),!0)},224:function(e,t,n){"use strict";var a=n(274)(!0);n(58)(String,"String",(function(e){this._t=String(e),this._i=0}),(function(){var e,t=this._t,n=this._i;return n>=t.length?{value:void 0,done:!0}:(e=a(t,n),this._i+=e.length,{value:e,done:!1})}))},232:function(e,t,n){var a=n(54),r=n(11)("toStringTag"),o="Arguments"==a(function(){return arguments}());e.exports=function(e){var t,n,c;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(n){}}(t=Object(e),r))?n:o?a(t):"Object"==(c=a(t))&&"function"==typeof t.callee?"Arguments":c}},233:function(e,t,n){"use strict";var a=n(0),r=n(240);t.a=function(){return Object(a.useContext)(r.a)}},240:function(e,t,n){"use strict";var a=n(0);const r=n.n(a).a.createContext({isDarkTheme:!1,setLightTheme:()=>{},setDarkTheme:()=>{}});t.a=r},241:function(e,t,n){var a,r,o,c=n(56),i=n(266),s=n(60),l=n(40),u=n(7),h=u.process,d=u.setImmediate,f=u.clearImmediate,m=u.MessageChannel,v=u.Dispatch,p=0,b={},g=function(){var e=+this;if(b.hasOwnProperty(e)){var t=b[e];delete b[e],t()}},_=function(e){g.call(e.data)};d&&f||(d=function(e){for(var t=[],n=1;arguments.length>n;)t.push(arguments[n++]);return b[++p]=function(){i("function"==typeof e?e:Function(e),t)},a(p),p},f=function(e){delete b[e]},"process"==n(54)(h)?a=function(e){h.nextTick(c(g,e,1))}:v&&v.now?a=function(e){v.now(c(g,e,1))}:m?(o=(r=new m).port2,r.port1.onmessage=_,a=c(o.postMessage,o,1)):u.addEventListener&&"function"==typeof postMessage&&!u.importScripts?(a=function(e){u.postMessage(e+"","*")},u.addEventListener("message",_,!1)):a="onreadystatechange"in l("script")?function(e){s.appendChild(l("script")).onreadystatechange=function(){s.removeChild(this),g.call(e)}}:function(e){setTimeout(c(g,e,1),0)}),e.exports={set:d,clear:f}},242:function(e,t,n){"use strict";var a=n(57);function r(e){var t,n;this.promise=new e((function(e,a){if(void 0!==t||void 0!==n)throw TypeError("Bad Promise constructor");t=e,n=a})),this.resolve=a(t),this.reject=a(n)}e.exports.f=function(e){return new r(e)}},243:function(e,t,n){"use strict";var a=n(0);t.a=function(e=!0){Object(a.useEffect)(()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"}),[e])}},244:function(e,t,n){"use strict";var a=n(210),r=n(233),o=n(213),c=n(218);t.a=()=>{const{siteConfig:{baseUrl:e,themeConfig:{navbar:{logo:t={}}={}}}={}}=Object(a.a)(),{isDarkTheme:n}=Object(r.a)(),i=t.href||e;let s={};t.target?s={target:t.target}:Object(c.a)(i)||(s={rel:"noopener noreferrer",target:"_blank"});const l=t.srcDark&&n?t.srcDark:t.src;return{logoLink:i,logoLinkProps:s,logoImageUrl:Object(o.a)(l),logoAlt:t.alt}}},260:function(e,t){e.exports=function(e,t,n,a){if(!(e instanceof t)||void 0!==a&&a in e)throw TypeError(n+": incorrect invocation!");return e}},261:function(e,t,n){var a=n(56),r=n(262),o=n(263),c=n(19),i=n(59),s=n(264),l={},u={};(t=e.exports=function(e,t,n,h,d){var f,m,v,p,b=d?function(){return e}:s(e),g=a(n,h,t?2:1),_=0;if("function"!=typeof b)throw TypeError(e+" is not iterable!");if(o(b)){for(f=i(e.length);f>_;_++)if((p=t?g(c(m=e[_])[0],m[1]):g(e[_]))===l||p===u)return p}else for(v=b.call(e);!(m=v.next()).done;)if((p=r(v,g,m.value,t))===l||p===u)return p}).BREAK=l,t.RETURN=u},262:function(e,t,n){var a=n(19);e.exports=function(e,t,n,r){try{return r?t(a(n)[0],n[1]):t(n)}catch(c){var o=e.return;throw void 0!==o&&a(o.call(e)),c}}},263:function(e,t,n){var a=n(22),r=n(11)("iterator"),o=Array.prototype;e.exports=function(e){return void 0!==e&&(a.Array===e||o[r]===e)}},264:function(e,t,n){var a=n(232),r=n(11)("iterator"),o=n(22);e.exports=n(20).getIteratorMethod=function(e){if(null!=e)return e[r]||e["@@iterator"]||o[a(e)]}},265:function(e,t,n){var a=n(19),r=n(57),o=n(11)("species");e.exports=function(e,t){var n,c=a(e).constructor;return void 0===c||null==(n=a(c)[o])?t:r(n)}},266:function(e,t){e.exports=function(e,t,n){var a=void 0===n;switch(t.length){case 0:return a?e():e.call(n);case 1:return a?e(t[0]):e.call(n,t[0]);case 2:return a?e(t[0],t[1]):e.call(n,t[0],t[1]);case 3:return a?e(t[0],t[1],t[2]):e.call(n,t[0],t[1],t[2]);case 4:return a?e(t[0],t[1],t[2],t[3]):e.call(n,t[0],t[1],t[2],t[3])}return e.apply(n,t)}},267:function(e,t,n){var a=n(7),r=n(241).set,o=a.MutationObserver||a.WebKitMutationObserver,c=a.process,i=a.Promise,s="process"==n(54)(c);e.exports=function(){var e,t,n,l=function(){var a,r;for(s&&(a=c.domain)&&a.exit();e;){r=e.fn,e=e.next;try{r()}catch(o){throw e?n():t=void 0,o}}t=void 0,a&&a.enter()};if(s)n=function(){c.nextTick(l)};else if(!o||a.navigator&&a.navigator.standalone)if(i&&i.resolve){var u=i.resolve(void 0);n=function(){u.then(l)}}else n=function(){r.call(a,l)};else{var h=!0,d=document.createTextNode("");new o(l).observe(d,{characterData:!0}),n=function(){d.data=h=!h}}return function(a){var r={fn:a,next:void 0};t&&(t.next=r),e||(e=r,n()),t=r}}},268:function(e,t){e.exports=function(e){try{return{e:!1,v:e()}}catch(t){return{e:!0,v:t}}}},269:function(e,t,n){var a=n(7).navigator;e.exports=a&&a.userAgent||""},270:function(e,t,n){var a=n(19),r=n(21),o=n(242);e.exports=function(e,t){if(a(e),r(t)&&t.constructor===e)return t;var n=o.f(e);return(0,n.resolve)(t),n.promise}},271:function(e,t,n){var a=n(23);e.exports=function(e,t,n){for(var r in t)a(e,r,t[r],n);return e}},272:function(e,t,n){"use strict";var a=n(7),r=n(25),o=n(13),c=n(11)("species");e.exports=function(e){var t=a[e];o&&t&&!t[c]&&r.f(t,c,{configurable:!0,get:function(){return this}})}},273:function(e,t,n){var a=n(11)("iterator"),r=!1;try{var o=[7][a]();o.return=function(){r=!0},Array.from(o,(function(){throw 2}))}catch(c){}e.exports=function(e,t){if(!t&&!r)return!1;var n=!1;try{var o=[7],i=o[a]();i.next=function(){return{done:n=!0}},o[a]=function(){return i},e(o)}catch(c){}return n}},274:function(e,t,n){var a=n(41),r=n(35);e.exports=function(e){return function(t,n){var o,c,i=String(r(t)),s=a(n),l=i.length;return s<0||s>=l?e?"":void 0:(o=i.charCodeAt(s))<55296||o>56319||s+1===l||(c=i.charCodeAt(s+1))<56320||c>57343?e?i.charAt(s):o:e?i.slice(s,s+2):c-56320+(o-55296<<10)+65536}}},275:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(0),c=d(o),i=d(n(211)),s=d(n(9)),l=d(n(276)),u=d(n(277)),h=n(278);function d(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClick=n.handleClick.bind(n),n.handleTouchStart=n.handleTouchStart.bind(n),n.handleTouchMove=n.handleTouchMove.bind(n),n.handleTouchEnd=n.handleTouchEnd.bind(n),n.handleFocus=n.handleFocus.bind(n),n.handleBlur=n.handleBlur.bind(n),n.previouslyChecked=!(!e.checked&&!e.defaultChecked),n.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var n=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:n})}},{key:"handleTouchStart",value:function(e){this.startX=(0,h.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,h.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var n=(0,h.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>n?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<n&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var n=this.props.icons;return n?void 0===n[e]?t.defaultProps.icons[e]:n[e]:null}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,r=(t.icons,function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["className","icons"])),o=(0,i.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},n);return c.default.createElement("div",{className:o,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},c.default.createElement("div",{className:"react-toggle-track"},c.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),c.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),c.default.createElement("div",{className:"react-toggle-thumb"}),c.default.createElement("input",a({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(o.PureComponent);t.default=f,f.displayName="Toggle",f.defaultProps={icons:{checked:c.default.createElement(l.default,null),unchecked:c.default.createElement(u.default,null)}},f.propTypes={checked:s.default.bool,disabled:s.default.bool,defaultChecked:s.default.bool,onChange:s.default.func,onFocus:s.default.func,onBlur:s.default.func,className:s.default.string,name:s.default.string,value:s.default.string,id:s.default.string,"aria-labelledby":s.default.string,"aria-label":s.default.string,icons:s.default.oneOfType([s.default.bool,s.default.shape({checked:s.default.node,unchecked:s.default.node})])}},276:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(0),o=(a=r)&&a.__esModule?a:{default:a};t.default=function(){return o.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},o.default.createElement("title",null,"switch-check"),o.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},277:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(0),o=(a=r)&&a.__esModule?a:{default:a};t.default=function(){return o.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},o.default.createElement("title",null,"switch-x"),o.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},278:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var n=t[0];return{x:n.clientX,y:n.clientY}}var a=e.pageX;if(void 0!==a)return{x:a,y:e.pageY}}return{x:0,y:0}}}}]);