(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{201:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"default",(function(){return s}));var r=n(1),a=n(6),o=(n(0),n(209)),c={id:"createAnimation",uuid:"ca6c31d9-e7ab-4405-b10d-2ab1af59d283",title:"\u521b\u5efa\u9aa8\u9abc\u52a8\u753b"},i=[],b={id:"dbLibs/createAnimation",title:"\u521b\u5efa\u9aa8\u9abc\u52a8\u753b",description:"\u9996\u5148\u4eceDragonBones Pro\u4e2d\u5bfc\u51fa\u4e00\u4efd\u9aa8\u9abc\u52a8\u753b\u6570\u636e\u3002\u4f60\u53ef\u4ee5\u70b9\u51fb\u4e0b\u9762\u7684\u8fde\u63a5\u4e0b\u8f7d\u3002",source:"@site/docs/dbLibs/createAnimation.md",permalink:"/dragonbones/cn/docs/dbLibs/createAnimation",sidebar:"someSidebar",previous:{title:"\u521b\u5efa\u9879\u76ee",permalink:"/dragonbones/cn/docs/dbLibs/createProject"},next:{title:"\u591a\u4eba\u7269\u52a8\u753b",permalink:"/dragonbones/cn/docs/dbLibs/morePeopleAnimation"}},l={rightToc:i,metadata:b},p="wrapper";function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(p,Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u9996\u5148\u4eceDragonBones Pro\u4e2d\u5bfc\u51fa\u4e00\u4efd\u9aa8\u9abc\u52a8\u753b\u6570\u636e\u3002\u4f60\u53ef\u4ee5\u70b9\u51fb\u4e0b\u9762\u7684\u8fde\u63a5\u4e0b\u8f7d\u3002"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/dragonbones/cn/img/docs/dbLibs/createAnimation/55937e0a59ba9.zip"}),"Robot.zip")),Object(o.b)("p",null,"\u6211\u4eec\u901a\u8fc7Res Depot\u5de5\u5177\u5c06\u8d44\u6e90\u4e2d\u7684",Object(o.b)("inlineCode",{parentName:"p"},"texture.png"),"\uff0c",Object(o.b)("inlineCode",{parentName:"p"},"texture.json"),"\u548c",Object(o.b)("inlineCode",{parentName:"p"},"RobotGame_1.json")," \u6dfb\u52a0\u5230\u9879\u76ee\u7ec4\u4e2d\u3002"),Object(o.b)("p",null,"\u4f7f\u7528RES\u6a21\u5757\u52a0\u8f7d\u8d44\u6e90\u5b8c\u6210\u540e\uff0c\u53ef\u4ee5\u521b\u5efa\u57fa\u4e8eDragonBones\u7684\u9aa8\u9abc\u52a8\u753b\u3002"),Object(o.b)("p",null,"\u5b9e\u4f8b\u5316DragonBones\u6240\u9700\u8981\u7684\u6570\u636e\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'var dragonbonesData = RES.getRes( "RobotGame_1_json" );  \nvar textureData = RES.getRes( "texture_json" );  \nvar texture = RES.getRes( "texture_png" );\n')),Object(o.b)("p",null,"DragonBones\u52a8\u753b\u7531\u5de5\u5382\u7c7b\u8fdb\u884c\u7ba1\u7406\uff0c\u53ef\u4ee5\u4f7f\u7528EgretFactory\u5bf9\u8c61\u6765\u5904\u7406\u6240\u6709\u7684\u52a8\u753b\u6570\u636e\u4ee5\u53ca\u8d34\u56fe\u3002\n\u6b65\u9aa4\u5982\u4e0b\uff1a"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"\u89e3\u6790\u5916\u90e8\u6570\u636e\uff0c\u5e76\u6dfb\u52a0\u81f3EgretFactory\u4e2d"),Object(o.b)("li",{parentName:"ol"},"\u8bbe\u7f6e\u52a8\u753b\u4e2d\u7ed1\u5b9a\u7684\u8d34\u56fe")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"let egretFactory: dragonBones.EgretFactory = dragonBones.EgretFactory.factory;\negretFactory.parseDragonBonesData(dragonbonesData);  \negretFactory.parseTextureAtlasData(textureData, texture);\n")),Object(o.b)("p",null,"\u6570\u636e\u51c6\u5907\u597d\u540e\uff0c\u9700\u8981\u4ece\u6570\u636e\u4e2d\u63d0\u53d6\u51fa\u9700\u8981\u7684\u9aa8\u67b6\u7cfb\u7edf\u3002\u5728DragonBones\u4e2d\uff0c\u9aa8\u67b6\u6709\u591a\u4e2a\u9aa8\u9abc\u7ec4\u6210\u3002\u6bcf\u4e2a\u9aa8\u67b6\u4e2d\u7ed1\u5b9a\u4e86\u5f53\u524d\u9aa8\u67b6\u7684\u52a8\u753b\u6570\u636e\u3002"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},'let armatureDisplay: dragonBones.EgretArmatureDisplay = egretFactory.buildArmatureDisplay("robot");')),Object(o.b)("p",null,"\u901a\u8fc7",Object(o.b)("inlineCode",{parentName:"p"},"buildArmatureDisplay"),"\u65b9\u6cd5\uff0c\u6211\u4eec\u63d0\u53d6\u540d\u79f0\u4e3a",Object(o.b)("inlineCode",{parentName:"p"},"robot"),"\u7684\u9aa8\u67b6\u3002\u8981\u60f3\u5728\u821e\u53f0\u4e2d\u770b\u5230\u8be5\u9aa8\u67b6\uff0c\u6211\u4eec\u9700\u8981\u5c06\u5176\u663e\u6027\u7684\u6dfb\u52a0\u5230\u7684\u821e\u53f0\u5f53\u4e2d\uff0c\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u8bed\u53e5\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'this.addChild(armatureDisplay);\narmatureDisplay.x = 200;\narmatureDisplay.y = 300;\narmatureDisplay.scaleX = 0.5;\narmatureDisplay.scaleY = 0.5;\n\narmatureDisplay.animation.play("Walk");\n')),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"armatureDisplay"),"\u662f\u540d\u79f0\u4e3a",Object(o.b)("inlineCode",{parentName:"p"},"robot"),"\u7684\u9aa8\u67b6\u5bf9\u8c61\u7684\u663e\u793a\u5bf9\u8c61\u3002\u5c06\u5176\u6dfb\u52a0\u5230\u663e\u793a\u5217\u8868\u4e2d\uff0c\u5c31\u53ef\u4ee5\u5728\u821e\u53f0\u4e2d\u770b\u5230\u5f53\u524d\u63d0\u53d6\u7684\u673a\u5668\u4eba\u3002\u6548\u679c\u5982\u56fe\uff1a"),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"/dragonbones/cn/img/docs/dbLibs/createAnimation/56c3144fce23f.png",alt:null}))),Object(o.b)("p",null,"\u9700\u8981\u64ad\u653e\u7684\u52a8\u753b\u540d\u79f0\uff0c\u53ef\u53c2\u8003\u4e0b\u56fe\uff0c\u5728DragonBones Pro\u4e2d\uff0c\u52a8\u753b\u9762\u677f\u7f57\u5217\u4e86\u6240\u6709\u53ef\u64ad\u653e\u7684\u52a8\u753b\u540d\u79f0\u3002"),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"/dragonbones/cn/img/docs/dbLibs/createAnimation/56c314504fd66.png",alt:null}))))}s.isMDXComponent=!0},209:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},s=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),s=p(n),u=r,d=s["".concat(c,".").concat(u)]||s[u]||m[u]||o;return n?a.a.createElement(d,i({ref:t},l,{components:n})):a.a.createElement(d,i({ref:t},l))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i[u]="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);