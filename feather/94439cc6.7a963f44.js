(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{115:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return b})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return o}));var n=r(1),c=r(6),a=(r(0),r(123)),b={title:"ParticleSystem"},p={id:"particle/ParticleSystem",title:"ParticleSystem",description:"## \u6982\u8ff0",source:"@site/docs/particle/ParticleSystem.md",permalink:"/feather/docs/particle/ParticleSystem",sidebar:"someSidebar",previous:{title:"\u7c92\u5b50\u7cfb\u7edf\u81ea\u5b9a\u4e49\u6269\u5c55",permalink:"/feather/docs/particle/ParticleExtensions"},next:{title:"GravityParticleSystem",permalink:"/feather/docs/particle/GravityParticleSystem"}},i=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[]}],l={rightToc:i};function o(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),Object(a.b)("p",null,"ParticleSystem \u662f\u7c92\u5b50\u5e93\u7684\u57fa\u7c7b\uff0c\u5176\u4ed6\u7c92\u5b50\u5e93\u53ef\u4ee5\u7ee7\u627f\u81ea ParticleSystem \u5b9e\u73b0\u81ea\u5df1\u7684\u529f\u80fd\u3002ParticleSystem \u63d0\u4f9b\u4e86\u7c92\u5b50\u5e93\u5fc5\u987b\u7684\u4e00\u4e9b\u5c5e\u6027\u548c\u65b9\u6cd5\uff0c\u5728\u521b\u5efa\u7c92\u5b50\u5bf9\u8c61\u65f6\u4f7f\u7528\u4e86\u5bf9\u8c61\u6c60\u4ee5\u51cf\u5c11\u5bf9\u8c61\u521b\u5efa\u5e26\u6765\u7684\u5f00\u9500\u3002"),Object(a.b)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),Object(a.b)("p",null,"ParticleSystem \u63d0\u4f9b\u4e86\u7c92\u5b50\u7cfb\u7edf\u6240\u5fc5\u987b\u7684\u4e00\u4e9b\u5c5e\u6027\uff0c\u5982\uff1a\u7c92\u5b50\u51fa\u73b0\u95f4\u9694\u3001\u7c92\u5b50\u7eb9\u7406\u7b49\u7b49\u3002"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," public emissionTime:number = -1; ")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{})," @brief \u7c92\u5b50\u51fa\u73b0\u603b\u65f6\u95f4\uff0c\u5355\u4f4d\u6beb\u79d2\uff0c\u53d6\u503c\u8303\u56f4(0,Number.MAX_VALUE]\uff0c-1\u8868\u793a\u65e0\u9650\u65f6\u95f4\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," public emissionRate:number; ")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{})," @brief \u7c92\u5b50\u51fa\u73b0\u95f4\u9694\uff0c\u5355\u4f4d\u6beb\u79d2\uff0c\u53d6\u503c\u8303\u56f4(0,Number.MAX_VALUE]\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," public texture:egret.Texture; ")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"@brief \u7c92\u5b50\u6240\u4f7f\u7528\u7684\u7eb9\u7406\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," public emitterX:number = 0; ")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"@brief \u7c92\u5b50\u51fa\u73b0\u70b9X\u5750\u6807\uff0c\u53d6\u503c\u8303\u56f4[-Number.MAX_VALUE,Number.MAX_VALUE] **\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," public emitterY:number = 0; ")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"@brief \u7c92\u5b50\u51fa\u73b0\u70b9Y\u5750\u6807\uff0c\u53d6\u503c\u8303\u56f4[-Number.MAX_VALUE,Number.MAX_VALUE] **\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," public maxParticles:number = 200; ")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"@brief \u7c92\u5b50\u7cfb\u7edf\u6700\u5927\u7c92\u5b50\u6570\uff0c\u8d85\u8fc7\u8be5\u6570\u91cf\u5c06\u4e0d\u4f1a\u7ee7\u7eed\u521b\u5efa\u7c92\u5b50\uff0c\u53d6\u503c\u8303\u56f4[1,Number.MAX_VALUE]\n")),Object(a.b)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),Object(a.b)("p",null,"ParticleSystem \u63d0\u4f9b\u4e86\u7c92\u5b50\u7cfb\u7edf\u6240\u5fc5\u987b\u7684\u4e00\u4e9b\u65b9\u6cd5\uff0c\u5982\uff1a\u5f00\u59cb\u3001\u505c\u6b62\u3001\u66f4\u6362\u7eb9\u7406\u3002"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," constructor(texture:egret.Texture, emissionRate:number) ")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{})," @brief \u6784\u9020\u51fd\u6570  @param texture {egret.Texture} \u7c92\u5b50\u7eb9\u7406  @param emissionRate {number} \u7c92\u5b50\u51fa\u73b0\u95f4\u9694\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," public start(duration:number = -1):void "),"\nuuid: 76254641-0b76-4754-a186-0bd8049c4ab9"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{})," @brief \u5f00\u59cb\u521b\u5efa\u7c92\u5b50  @param duration {number} \u7c92\u5b50\u51fa\u73b0\u603b\u65f6\u95f4\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," public stop(clear:boolean = false):void ")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{})," @brief \u505c\u6b62\u521b\u5efa\u7c92\u5b50  @param clear {boolean} \u662f\u5426\u6e05\u9664\u6389\u73b0\u6709\u7c92\u5b50\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," public changeTexture(texture:egret.Texture):void ")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"@brief \u66f4\u6362\u7c92\u5b50\u7eb9\u7406  @param texture {egret.Texture} \u65b0\u7684\u7eb9\u7406\n")))}o.isMDXComponent=!0},123:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return s}));var n=r(0),c=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var l=c.a.createContext({}),o=function(e){var t=c.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p({},t,{},e)),r},u=function(e){var t=o(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},O=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,b=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=o(r),O=n,s=u["".concat(b,".").concat(O)]||u[O]||m[O]||a;return r?c.a.createElement(s,p({ref:t},l,{components:r})):c.a.createElement(s,p({ref:t},l))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,b=new Array(a);b[0]=O;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,b[1]=p;for(var l=2;l<a;l++)b[l]=r[l];return c.a.createElement.apply(null,b)}return c.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"}}]);