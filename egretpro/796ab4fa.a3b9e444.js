(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{153:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"default",(function(){return O}));var r=n(1),a=n(9),b=(n(0),n(199)),c={title:"\u8054\u673a\u591a\u4eba\u6e38\u620f",uuid:"f7871bff-d89b-42aa-89bd-2b65ca3771f1"},l=[{value:"\u7f51\u7edc\u8fde\u63a5\u670d\u52a1\u4ecb\u7ecd",id:"\u7f51\u7edc\u8fde\u63a5\u670d\u52a1\u4ecb\u7ecd",children:[]},{value:"\u7f51\u7edc\u670d\u52a1\u529f\u80fd",id:"\u7f51\u7edc\u670d\u52a1\u529f\u80fd",children:[{value:"NetworkIdentity \u7ec4\u4ef6",id:"networkidentity-\u7ec4\u4ef6",children:[]},{value:"NetworkTransform \u7ec4\u4ef6",id:"networktransform-\u7ec4\u4ef6",children:[]}]},{value:"\u65b0\u9879\u76ee\u6784\u5efa",id:"\u65b0\u9879\u76ee\u6784\u5efa",children:[{value:"\u9879\u76ee\u6d41\u7a0b",id:"\u9879\u76ee\u6d41\u7a0b",children:[]}]},{value:"\u8001\u9879\u76ee\u8fc1\u79fb",id:"\u8001\u9879\u76ee\u8fc1\u79fb",children:[{value:"\u9879\u76ee\u6d41\u7a0b",id:"\u9879\u76ee\u6d41\u7a0b-1",children:[]}]}],i={id:"guide/engine-features-network",title:"\u8054\u673a\u591a\u4eba\u6e38\u620f",description:"## \u7f51\u7edc\u8fde\u63a5\u670d\u52a1\u4ecb\u7ecd",source:"@site/docs/guide/engine-features-network.md",permalink:"/egretpro/docs/guide/engine-features-network",sidebar:"someSidebar",previous:{title:"\u78b0\u649e\u68c0\u6d4b",permalink:"/egretpro/docs/guide/engine-features-collision"},next:{title:"WayPoint",permalink:"/egretpro/docs/guide/engine-features-waypoint"}},o={rightToc:l,metadata:i},p="wrapper";function O(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(b.b)(p,Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"\u7f51\u7edc\u8fde\u63a5\u670d\u52a1\u4ecb\u7ecd"},"\u7f51\u7edc\u8fde\u63a5\u670d\u52a1\u4ecb\u7ecd"),Object(b.b)("p",null,"Egret Pro \u5728\u540e\u7eed\u5f00\u53d1\u6784\u5efa\u65f6\u8003\u8651\u5230\u4e86\u591a\u4eba\u6e38\u620f\uff0c\u5f00\u53d1\u4e86\u4e3a\u591a\u4eba\u6e38\u620f\u8bbe\u7f6e\u8054\u7f51\u6e38\u620f\u7684\u529f\u80fd\u3002\u53ea\u8981\u60a8\u9075\u5b88\u57fa\u672c\u7684\u6846\u67b6\u7ea6\u5b9a\uff0c\u5c31\u80fd\u4f7f\u7528 Egret Pro \u5c06\u5355\u673a\u6e38\u620f\u62d3\u5c55\u6210\u4e3a\u591a\u4eba\u8054\u7f51\u6e38\u620f\u3002"),Object(b.b)("p",null,"\u76ee\u524d Egret Pro \u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u6846\u67b6\u91c7\u7528 ",Object(b.b)("inlineCode",{parentName:"p"},"ECS")," \u7684\u7ed3\u6784\uff0c\u5ba2\u6237\u7aef\u8d1f\u8d23\u7ed8\u5236\u6e38\u620f\u4e16\u754c\u7684\u5b9e\u65f6\u753b\u9762\uff0c\u670d\u52a1\u5668\u7aef\u5219\u8d1f\u8d23\u54cd\u5e94\u6240\u6709\u5ba2\u6237\u7aef\u7684\u8fde\u63a5\u8bf7\u6c42\u548c\u6e38\u620f\u903b\u8f91\u5904\u7406\uff0c\u5e76\u63a7\u5236\u6240\u6709\u5ba2\u6237\u7aef\u7684\u753b\u9762\u7ed8\u5236\uff0c\u5ba2\u6237\u7aef\u4e0e\u670d\u52a1\u5668\u901a\u8fc7\u7f51\u7edc\u547d\u4ee4\u5305\u4ea4\u4e92\u5b8c\u6210\u6bcf\u4e00\u6b65\u6e38\u620f\u903b\u8f91\u3002"),Object(b.b)("h2",{id:"\u7f51\u7edc\u670d\u52a1\u529f\u80fd"},"\u7f51\u7edc\u670d\u52a1\u529f\u80fd"),Object(b.b)("p",null,"Egret Pro \u7684\u7f51\u7edc\u670d\u52a1\u529f\u80fd\u76ee\u524d\u9664\u4e86\u652f\u6301\u4e00\u822c\u670d\u52a1\u5668\u548c\u5ba2\u6237\u7aef\u4e4b\u95f4\u7684\u901a\u4fe1\u529f\u80fd\u4e4b\u5916\uff0c\u5df2\u7ecf\u5c06",Object(b.b)("strong",{parentName:"p"},"\u5411\u670d\u52a1\u5668\u548c\u5ba2\u6237\u7aef\u53d1\u9001\u7f51\u7edc\u6e38\u620f\u7269\u4f53\u7684\u552f\u4e00ID"),"\u548c",Object(b.b)("strong",{parentName:"p"},"\u5b9e\u65f6\u540c\u6b65\u6e38\u620f\u7269\u4f53Transform\u5c5e\u6027"),"\u8fd9\u4e24\u4e2a\u529f\u80fd\u6574\u5408\u5230",Object(b.b)("strong",{parentName:"p"},"\u7f16\u8f91\u5668\u5f15\u64ce\u5185\u90e8"),"\u3002"),Object(b.b)("p",null,"\u60a8\u53ea\u9700\u8981\u5728\u9879\u76ee\u76ee\u5f55\u4e2d\u7684 ",Object(b.b)("inlineCode",{parentName:"p"},"egretpro.json")," \u7684 ",Object(b.b)("inlineCode",{parentName:"p"},"packages"),' \u76ee\u5f55\u4e0b\u6dfb\u52a0 "network" \uff1a'),Object(b.b)("p",null,Object(b.b)("img",Object(r.a)({parentName:"p"},{src:"/egretpro/img/docs/guide/engine-features-network/n-4.png",alt:"n-4"}))),Object(b.b)("p",null,"\u518d\u91cd\u542f\u9879\u76ee\uff0c\u5373\u53ef\u5728 ",Object(b.b)("inlineCode",{parentName:"p"},"\u6dfb\u52a0\u7ec4\u4ef6")," \u4e2d\u627e\u5230\u7ec4\u4ef6 ",Object(b.b)("inlineCode",{parentName:"p"},"NetworkIdentity")," \u548c ",Object(b.b)("inlineCode",{parentName:"p"},"NetworkTransform")," \u3002"),Object(b.b)("p",null,Object(b.b)("img",Object(r.a)({parentName:"p"},{src:"/egretpro/img/docs/guide/engine-features-network/n-1.png",alt:"n-1"}))),Object(b.b)("h3",{id:"networkidentity-\u7ec4\u4ef6"},"NetworkIdentity \u7ec4\u4ef6"),Object(b.b)("p",null,Object(b.b)("img",Object(r.a)({parentName:"p"},{src:"/egretpro/img/docs/guide/engine-features-network/n-3.png",alt:"n-3"}))),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"\u5c5e\u6027"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"\u91ca\u4e49"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"isLocalPlayer"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u662f\u5426\u662f\u672c\u5730\u6e38\u620f\u5bf9\u8c61")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"type"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u7f51\u7edc\u6e38\u620f\u5bf9\u8c61\u7c7b\u578b")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"sceneID"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u7f51\u7edc\u6e38\u620f\u573a\u666fID")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"netID"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u7f51\u7edc\u670d\u52a1ID")))),Object(b.b)("h3",{id:"networktransform-\u7ec4\u4ef6"},"NetworkTransform \u7ec4\u4ef6"),Object(b.b)("p",null,Object(b.b)("img",Object(r.a)({parentName:"p"},{src:"/egretpro/img/docs/guide/engine-features-network/n-2.png",alt:"n-2"}))),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"\u5c5e\u6027"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"\u91ca\u4e49"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"target"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u9700\u8981\u540c\u6b65Transform\u7684\u6e38\u620f\u5bf9\u8c61")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"synclnterval"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u7f51\u7edc\u670d\u52a1\u540c\u6b65\u7684\u65f6\u95f4\u95f4\u9694")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"\u6ce8\uff1a\u5728\u76ee\u524d\u9636\u6bb5\u8fd9\u4e24\u4e2a\u7ec4\u4ef6\u4e2d\u7684\u5c5e\u6027\u90fd\u4e0d\u9700\u8981\u5f00\u53d1\u8005\u81ea\u884c\u8bbe\u7f6e\uff0c\u53ea\u9700\u8981\u642d\u5efa\u597d\u670d\u52a1\u5668\u4e4b\u540e\uff0c\u670d\u52a1\u5668\u4f1a\u81ea\u52a8\u4e3a\u8fd9\u4e9b\u7ec4\u4ef6\u914d\u7f6e\u76f8\u5e94\u7684\u5c5e\u6027\u3002")),Object(b.b)("p",null,"\u7531\u4e8e\u8be5\u529f\u80fd\u4e3a\u65b0\u5f00\u53d1\u529f\u80fd\uff0c\u8fd9\u4e00\u90e8\u5206\u5c06\u5206\u4e3a\u4e00\u4e0b\u6a21\u5757\u8fdb\u884c\u4ecb\u7ecd\uff1a"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"\u6a21\u5757"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"\u63cf\u8ff0"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#%E9%A1%B9%E7%9B%AE%E6%B5%81%E7%A8%8B"}),"\u65b0\u9879\u76ee\u5f00\u53d1")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u4ecb\u7ecd\u4e86\u65b0\u9879\u76ee\u6784\u5efa\u7684\u6d41\u7a0b")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#%E8%80%81%E9%A1%B9%E7%9B%AE%E8%BF%81%E7%A7%BB"}),"\u8001\u9879\u76ee\u8fc1\u79fb")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u4ecb\u7ecd\u4e86\u8001\u9879\u76ee\u8fc1\u79fb\u7684\u6d41\u7a0b")))),Object(b.b)("h2",{id:"\u65b0\u9879\u76ee\u6784\u5efa"},"\u65b0\u9879\u76ee\u6784\u5efa"),Object(b.b)("h3",{id:"\u9879\u76ee\u6d41\u7a0b"},"\u9879\u76ee\u6d41\u7a0b"),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},"\u6e38\u620f\u529f\u80fd\u5b9e\u73b0\uff1a\u5728\u670d\u52a1\u5668\u7aef\u7f16\u5199\u6e38\u620f\u8fd0\u884c\u65f6\u529f\u80fd\u811a\u672c\uff1b"),Object(b.b)("li",{parentName:"ol"},"\u6ce8\u518c\u7f51\u7edc\u670d\u52a1\uff1a\u7f16\u5199\u6fc0\u6d3b\u7f51\u7edc\u7ba1\u7406\u7cfb\u7edf\u3001\u7f51\u7edc\u5ba2\u6237\u7aef\u548c\u7f51\u7edc\u670d\u52a1\u5668\u7684\u7ec4\u4ef6\u7c7b\u811a\u672c\uff1b"),Object(b.b)("li",{parentName:"ol"},"\u670d\u52a1\u5668\u529f\u80fd\uff1a\u6839\u636e\u6e38\u620f\u529f\u80fd\u7f16\u5199\u76f8\u5e94\u7684\u670d\u52a1\u5668\u63a5\u6536\u548c\u53d1\u9001\u547d\u4ee4\u7684\u529f\u80fd\u811a\u672c\uff1b"),Object(b.b)("li",{parentName:"ol"},"\u5ba2\u6237\u7aef\u529f\u80fd\uff1a\u7f16\u5199\u5ba2\u6237\u7aef\u63a5\u6536\u548c\u53d1\u9001\u547d\u4ee4\u7684\u529f\u80fd\uff0c\u53ca\u5ba2\u6237\u7aef\u5904\u7406\u547d\u4ee4\u7684\u529f\u80fd\u811a\u672c\u3002")),Object(b.b)("h2",{id:"\u8001\u9879\u76ee\u8fc1\u79fb"},"\u8001\u9879\u76ee\u8fc1\u79fb"),Object(b.b)("h3",{id:"\u9879\u76ee\u6d41\u7a0b-1"},"\u9879\u76ee\u6d41\u7a0b"),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},"\u8c03\u6574\u539f\u9879\u76ee\u67b6\u6784\uff1a\u4f7f\u539f\u9879\u76ee\u7684\u903b\u8f91\u67b6\u6784\u7b26\u5408Egret3D\u7684\u201cECS\u201d\u6846\u67b6\uff1b"),Object(b.b)("li",{parentName:"ol"},"\u7f51\u7edc\u670d\u52a1\u529f\u80fd\uff1a\u4e0e\u65b0\u9879\u76ee\u6d41\u7a0b\u4e2d\u7684\u65b9\u5f0f\u4e00\u81f4\u3002")))}O.isMDXComponent=!0},199:function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},b=Object.keys(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),p=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},O=function(e){var t=p(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},j="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),O=p(n),j=r,d=O["".concat(c,".").concat(j)]||O[j]||u[j]||b;return n?a.a.createElement(d,l({ref:t},o,{components:n})):a.a.createElement(d,l({ref:t},o))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=n.length,c=new Array(b);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[j]="string"==typeof e?e:r,c[1]=l;for(var o=2;o<b;o++)c[o]=n[o];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);