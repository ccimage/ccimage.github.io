(window.webpackJsonp=window.webpackJsonp||[]).push([[291],{418:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"rightToc",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"default",(function(){return b}));var r=n(1),a=n(9),c=(n(0),n(520)),o={id:"tint",uuid:"1185be85-2522-4a81-96ab-ce4c56352941",title:"\u8bbe\u7f6e\u586b\u5145\u8272"},i=[],p={id:"render-2d/colorEffects/tint",title:"\u8bbe\u7f6e\u586b\u5145\u8272",description:"\u4ece Egret 5.2.24 \u7248\u672c\u5f00\u59cb\uff0c`DisplayObject` \u4e2d\u65b0\u589e\u52a0\u4e86\u4e00\u4e2a `tint` \u5c5e\u6027\uff0c\u53ef\u4ee5\u7ed9\u5f53\u524d\u5bf9\u8c61\u8bbe\u7f6e\u586b\u5145\u8272.",source:"@site/docs/render-2d/colorEffects/tint.md",permalink:"/engine/docs/render-2d/colorEffects/tint",sidebar:"someSidebar",previous:{title:"\u81ea\u5b9a\u4e49Shader",permalink:"/engine/docs/render-2d/colorEffects/shader"},next:{title:"\u6dfb\u52a0 3D \u5185\u5bb9",permalink:"/engine/docs/pro/add-3d-content"}},l={rightToc:i,metadata:p},u="wrapper";function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)(u,Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u4ece Egret 5.2.24 \u7248\u672c\u5f00\u59cb\uff0c",Object(c.b)("inlineCode",{parentName:"p"},"DisplayObject")," \u4e2d\u65b0\u589e\u52a0\u4e86\u4e00\u4e2a ",Object(c.b)("inlineCode",{parentName:"p"},"tint")," \u5c5e\u6027\uff0c\u53ef\u4ee5\u7ed9\u5f53\u524d\u5bf9\u8c61\u8bbe\u7f6e\u586b\u5145\u8272."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a\u8be5\u529f\u80fd\u8fd8\u5904\u4e8e\u6d4b\u8bd5\u9636\u6bb5\uff0c\u53ef\u4ee5\u7528\u4e8e\u6e38\u620f\u8c03\u8bd5\uff0c\u6b63\u5f0f\u7248\u672c\u8bf7\u8c28\u614e\u4f7f\u7528\u3002")),Object(c.b)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u793a\u4f8b\uff0c\u7ed9\u56fe\u7247\u52a0\u4e0a\u4e0d\u540c\u7684\u586b\u5145\u8272\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'let texture: egret.Texture = RES.getRes("bird_png");\nlet b1 = new egret.Bitmap();\nb1.texture = texture;\nthis.addChild(b1);\nlet b2 = new egret.Bitmap();\nb2.texture = texture;\nb2.tint = 0xff0000;\nb2.x = 150;\nthis.addChild(b2);\nlet b3 = new egret.Bitmap();\nb3.texture = texture;\nb3.tint = 0x00ff00;\nb3.x = 300;\nthis.addChild(b3);\nlet b4 = new egret.Bitmap();\nb4.texture = texture;\nb4.tint = 0x4169E1;\nb4.x = 450;\nthis.addChild(b4);\n\n')),Object(c.b)("p",null,Object(c.b)("img",Object(r.a)({parentName:"p"},{src:"/engine/img/docs/2dRender/colorEffects/tint/./p1.png",alt:null}))))}b.isMDXComponent=!0},520:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},b=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,s=b["".concat(o,".").concat(d)]||b[d]||f[d]||c;return n?a.a.createElement(s,i({ref:t},l,{components:n})):a.a.createElement(s,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var l=2;l<c;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);