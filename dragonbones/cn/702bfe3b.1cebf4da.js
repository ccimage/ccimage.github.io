(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{146:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"rightToc",(function(){return i})),t.d(n,"metadata",(function(){return b})),t.d(n,"default",(function(){return u}));var r=t(1),o=t(6),a=(t(0),t(209)),c={id:"createProject",uuid:"265640c7-dc85-40bf-983b-2287deb084b3",title:"\u521b\u5efa\u9879\u76ee"},i=[],b={id:"dbLibs/createProject",title:"\u521b\u5efa\u9879\u76ee",description:"DragonBones\u4f5c\u4e3aEgret\u5f15\u64ce\u7684\u6269\u5c55\u5e93\u5df2\u7ecf\u96c6\u6210\u5728\u5b89\u88c5\u5305\u4e2d\u3002\u5982\u679c\u4f60\u7684\u9879\u76ee\u9700\u8981\u4f7f\u7528\u5230DragonBones\uff0c\u9700\u8981\u5728\u9879\u76ee\u914d\u7f6e\u4e2d\u5f00\u542fDragonBones\u914d\u7f6e\u9879\u3002\u64cd\u4f5c\u6b65\u9aa4\u5982\u4e0b\uff1a",source:"@site/docs/dbLibs/createProject.md",permalink:"/dragonbones/cn/docs/dbLibs/createProject",sidebar:"someSidebar",previous:{title:"4.0&4.5\u6570\u636e\u683c\u5f0f\u8bf4\u660e",permalink:"/dragonbones/cn/docs/dbLibs/dataFormat"},next:{title:"\u521b\u5efa\u9aa8\u9abc\u52a8\u753b",permalink:"/dragonbones/cn/docs/dbLibs/createAnimation"}},l={rightToc:i,metadata:b},p="wrapper";function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)(p,Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"DragonBones\u4f5c\u4e3aEgret\u5f15\u64ce\u7684\u6269\u5c55\u5e93\u5df2\u7ecf\u96c6\u6210\u5728\u5b89\u88c5\u5305\u4e2d\u3002\u5982\u679c\u4f60\u7684\u9879\u76ee\u9700\u8981\u4f7f\u7528\u5230DragonBones\uff0c\u9700\u8981\u5728\u9879\u76ee\u914d\u7f6e\u4e2d\u5f00\u542fDragonBones\u914d\u7f6e\u9879\u3002\u64cd\u4f5c\u6b65\u9aa4\u5982\u4e0b\uff1a"),Object(a.b)("p",null,"1\u3001\u65b0\u5efa Egret\u9879\u76ee"),Object(a.b)("p",null,"2\u3001\u4fee\u6539\u9879\u76ee\u4e2d\u7684 egretProperties.json\u6587\u4ef6"),Object(a.b)("p",null,"\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\uff0c\u627e\u5230modules\u6807\u7b7e\uff0c\u6dfb\u52a0DragonBones\u7ed1\u5b9a\u9879\u3002"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'"name": "dragonbones"\n')),Object(a.b)("p",null,"\u6dfb\u52a0\u540e\u914d\u7f6e\u5185\u5bb9\u5982\u4e0b\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'"modules": [\n    {\n        "name": "egret"\n    },\n    {\n        "name": "game"\n    },\n    {\n        "name": "tween"\n    },\n    {\n        "name": "res"\n    },\n    {\n        "name": "dragonbones"\n    }\n]\n')),Object(a.b)("p",null,"3\u3001\u91cd\u65b0\u7f16\u8bd1\u9879\u76ee"),Object(a.b)("p",null,"\u91cd\u65b0\u7f16\u8bd1\u8bf7\u6267\u884c ",Object(a.b)("inlineCode",{parentName:"p"},"egret build -e")),Object(a.b)("p",null,"\u901a\u8fc7\u4e0a\u8ff0\u4e09\u4e2a\u6b65\u9aa4\u64cd\u4f5c\uff0c\u4f60\u53ef\u4ee5\u5728\u9879\u76ee\u4e2d\u76f4\u63a5\u4f7f\u7528DragonBones\u3002"),Object(a.b)("p",null,"\u6d4b\u8bd5\u914d\u7f6e\u662f\u5426\u6210\u529f\uff0c\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u8bed\u53e5\u8fdb\u884c\u8c03\u8bd5\u3002\u5728\u63a7\u5236\u53f0\u4e2d\u76f4\u63a5\u6253\u5370\u51fa\u5f53\u524d DragonBones \u7684\u7248\u672c\u3002"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"console.log(dragonBones.DragonBones.VERSION);\n")))}u.isMDXComponent=!0},209:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),p=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i({},n,{},e)),t},u=function(e){var n=p(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),u=p(t),s=r,m=u["".concat(c,".").concat(s)]||u[s]||d[s]||a;return t?o.a.createElement(m,i({ref:n},l,{components:t})):o.a.createElement(m,i({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=m;var i={};for(var b in n)hasOwnProperty.call(n,b)&&(i[b]=n[b]);i.originalType=e,i[s]="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);