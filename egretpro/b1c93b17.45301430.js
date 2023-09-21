(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{171:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return c})),n.d(r,"rightToc",(function(){return i})),n.d(r,"metadata",(function(){return l})),n.d(r,"default",(function(){return s}));var t=n(1),a=n(9),o=(n(0),n(199)),c={title:"\u8d44\u6e90\u52a0\u8f7d\u4e0e\u5f15\u7528",uuid:"94d45604-f5d3-4cd2-a66a-2517e7022c57"},i=[{value:"\u6dfb\u52a0\u8d44\u6e90\u5230\u9879\u76ee\u4e2d",id:"\u6dfb\u52a0\u8d44\u6e90\u5230\u9879\u76ee\u4e2d",children:[]},{value:"\u52a0\u8f7d\u8d44\u6e90",id:"\u52a0\u8f7d\u8d44\u6e90",children:[{value:"\u52a0\u8f7d\u52a8\u753b\u8d44\u6e90",id:"\u52a0\u8f7d\u52a8\u753b\u8d44\u6e90",children:[]}]},{value:"\u52a8\u6001\u52a0\u8f7d\u8d44\u6e90",id:"\u52a8\u6001\u52a0\u8f7d\u8d44\u6e90",children:[]}],l={id:"programming/load-and-reference-assets",title:"\u8d44\u6e90\u52a0\u8f7d\u4e0e\u5f15\u7528",description:"## \u6dfb\u52a0\u8d44\u6e90\u5230\u9879\u76ee\u4e2d",source:"@site/docs/programming/load-and-reference-assets.md",permalink:"/egretpro/docs/programming/load-and-reference-assets",sidebar:"someSidebar",previous:{title:"\u7ba1\u7406\u6e38\u620f\u4ee3\u7801",permalink:"/egretpro/docs/programming/manage-game-code"},next:{title:"\u6e38\u620f\u903b\u8f91\u7f16\u7a0b",permalink:"/egretpro/docs/programming/game-programming-logic"}},p={rightToc:i,metadata:l},u="wrapper";function s(e){var r=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(u,Object(t.a)({},p,n,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"\u6dfb\u52a0\u8d44\u6e90\u5230\u9879\u76ee\u4e2d"},"\u6dfb\u52a0\u8d44\u6e90\u5230\u9879\u76ee\u4e2d"),Object(o.b)("p",null,"\u5728\u7f16\u8f91\u5668\u7684\u8d44\u6e90\u9762\u677f\u4e2d\u53f3\u952e\uff0c\u9009\u4e2d\u5bfc\u5165\u8d44\u6e90"),Object(o.b)("p",null,Object(o.b)("img",Object(t.a)({parentName:"p"},{src:"/egretpro/img/docs/programming/load-and-reference-assets/editor-resource.png",alt:null}))),Object(o.b)("h2",{id:"\u52a0\u8f7d\u8d44\u6e90"},"\u52a0\u8f7d\u8d44\u6e90"),Object(o.b)("h3",{id:"\u52a0\u8f7d\u52a8\u753b\u8d44\u6e90"},"\u52a0\u8f7d\u52a8\u753b\u8d44\u6e90"),Object(o.b)("p",null,"\u5c06\u52a8\u753b\u8d44\u6e90\u6dfb\u52a0\u5230 Animation \u7ec4\u4ef6\u4e0a\u5c06\u81ea\u52a8\u52a0\u8f7d\u52a8\u753b\u8d44\u6e90"),Object(o.b)("p",null,Object(o.b)("img",Object(t.a)({parentName:"p"},{src:"/egretpro/img/docs/programming/load-and-reference-assets/auto-load-animation-resource.png",alt:null}))),Object(o.b)("h2",{id:"\u52a8\u6001\u52a0\u8f7d\u8d44\u6e90"},"\u52a8\u6001\u52a0\u8f7d\u8d44\u6e90"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-typescript"}),'// \u83b7\u53d6\u8d44\u6e90\u7ba1\u7406\u5668\u5b9e\u4f8b\nconst Res = ResourceManager.instance;\n// \u8bbe\u7f6e\u8d44\u6e90\u6839\u8def\u5f84\nRes.baseUrl = "resource/";\n// \u52a0\u8f7d\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u8d44\u6e90\nRes.loadConfig("default.res.json", false);\n// \u52a0\u8f7d\u5355\u4e2a\u8d44\u6e90\nRes.loadUri(resourcePath);\nRes.loadResouceData(resourcePath, resourceType);\n')))}s.isMDXComponent=!0},199:function(e,r,n){"use strict";n.d(r,"a",(function(){return s})),n.d(r,"b",(function(){return f}));var t=n(0),a=n.n(t);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var r=a.a.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):i({},r,{},e)),n},s=function(e){var r=u(e.components);return a.a.createElement(p.Provider,{value:r},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=Object(t.forwardRef)((function(e,r){var n=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=t,b=s["".concat(c,".").concat(d)]||s[d]||m[d]||o;return n?a.a.createElement(b,i({ref:r},p,{components:n})):a.a.createElement(b,i({ref:r},p))}));function f(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[d]="string"==typeof e?e:t,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);