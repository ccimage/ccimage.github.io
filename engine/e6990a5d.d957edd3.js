(window.webpackJsonp=window.webpackJsonp||[]).push([[353],{480:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"default",(function(){return b}));var r=n(1),i=n(9),a=(n(0),n(520)),c={id:"rectangleHit",title:"\u77e9\u5f62\u78b0\u649e\u68c0\u6d4b",uuid:"241e5d80-61b3-4fef-8b10-25a7503540c8"},o=[],p={id:"hit/rectangleHit",title:"\u77e9\u5f62\u78b0\u649e\u68c0\u6d4b",description:"\u78b0\u649e\u68c0\u6d4b\uff0c\u5224\u65ad\u663e\u793a\u5bf9\u8c61\u662f\u5426\u4e0e\u4e00\u70b9\u76f8\u4ea4\u3002",source:"@site/docs/hit/rectangleHit.md",permalink:"/engine/docs/hit/rectangleHit",sidebar:"someSidebar",previous:{title:"Facebook InstantGames",permalink:"/engine/docs/publish/minigame/facebookInstantGames"},next:{title:"\u50cf\u7d20\u78b0\u649e\u68c0\u6d4b",permalink:"/engine/docs/hit/pixelHit"}},l={rightToc:o,metadata:p},s="wrapper";function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)(s,Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u78b0\u649e\u68c0\u6d4b\uff0c\u5224\u65ad\u663e\u793a\u5bf9\u8c61\u662f\u5426\u4e0e\u4e00\u70b9\u76f8\u4ea4\u3002"),Object(a.b)("p",null,"\u77e9\u5f62\u78b0\u649e\u68c0\u6d4b\uff0c\u662f\u5224\u65ad\u663e\u793a\u5bf9\u8c61\u7684\u5305\u56f4\u76d2\u662f\u5426\u4e0e\u4e00\u70b9\u76f8\u4ea4\u3002"),Object(a.b)("p",null,"Egret \u63d0\u4f9b ",Object(a.b)("inlineCode",{parentName:"p"},"hitTestPoint()")," \u65b9\u6cd5\u8fdb\u884c\u78b0\u649e\u68c0\u6d4b\uff0c\u77e9\u5f62\u78b0\u649e\u68c0\u6d4b\u7684\u7528\u6cd5\u4e3a\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"const isHit: boolean = shp.hitTestPoint(x, y);\n\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"shp")," \u662f\u5f85\u68c0\u6d4b\u7684\u663e\u793a\u5bf9\u8c61\uff0c(x, y)\u662f\u5f85\u68c0\u6d4b\u7684\u70b9\u7684\u4f4d\u7f6e\u3002\u5982\u679c\u53d1\u751f\u78b0\u649e\uff0c\u5219\u65b9\u6cd5\u8fd4\u56de ",Object(a.b)("inlineCode",{parentName:"p"},"true"),",\u5982\u679c\u6ca1\u6709\u53d1\u751f\u78b0\u649e\uff0c\u5219\u8fd4\u56de ",Object(a.b)("inlineCode",{parentName:"p"},"false"),"\u3002"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u793a\u4f8b\u4ee3\u78011\uff1a")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'class HitTest extends egret.DisplayObjectContainer {\n    public constructor() {\n        super();\n        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);\n    }\n    private onAddToStage(event: egret.Event) {\n        this.drawText();\n        const shp: egret.Shape = new egret.Shape();\n        shp.graphics.beginFill(0xff0000);\n        shp.graphics.drawRect(0, 0, 100, 100);\n        shp.graphics.endFill();\n        shp.width = 100;\n        shp.height = 100;\n        this.addChild(shp);\n        const isHit: boolean = shp.hitTestPoint(10, 10);\n        this.infoText.text = "isHit: " + isHit;\n    }\n    private infoText: egret.TextField;\n    private drawText() {\n        this.infoText = new egret.TextField();\n        this.infoText.y = 200;\n        this.infoText.text = "isHit";\n        this.addChild(this.infoText);\n    }\n}\n\n')),Object(a.b)("p",null,"\u7f16\u8bd1\u8c03\u8bd5\u540e\uff0c\u6548\u679c\u5982\u4e0b\u56fe\uff1a"),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/engine/img/docs/hit/rectangleHit/5565345c3987a.png",alt:null}))),Object(a.b)("p",null,"\u6587\u672c\u4e2d\u8fd4\u56de\u78b0\u649e\u7684\u7ed3\u679c\uff0c\u663e\u793a\u4e3a ",Object(a.b)("inlineCode",{parentName:"p"},"true"),"\uff0c\u8868\u793a\u53d1\u751f\u4e86\u78b0\u649e\u3002"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u793a\u4f8b\u4ee3\u78012\uff1a")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'class HitTest extends egret.DisplayObjectContainer {\n    public constructor() {\n        super();\n        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);\n    }\n    private onAddToStage(event: egret.Event) {\n        this.drawText();\n        const shp: egret.Shape = new egret.Shape();\n        shp.graphics.beginFill(0xff0000);\n        shp.graphics.drawCircle(0, 0, 20);\n        shp.graphics.endFill();\n        shp.width = 100;\n        shp.height = 100;\n        this.addChild(shp);\n        const isHit: boolean = shp.hitTestPoint(25, 25);\n        this.infoText.text = "isHit: " + isHit;\n    }\n    private infoText: egret.TextField;\n    private drawText() {\n        this.infoText = new egret.TextField();\n        this.infoText.y = 200;\n        this.infoText.text = "isHit: ";\n        this.addChild(this.infoText);\n    }\n}\n\n')),Object(a.b)("p",null,"\u7f16\u8bd1\u8c03\u8bd5\u540e\uff0c\u6548\u679c\u5982\u4e0b\u56fe\uff1a"),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/engine/img/docs/hit/rectangleHit/5565345c3d62d.png",alt:null}))),Object(a.b)("p",null,"\u6587\u672c\u4e2d\u8fd4\u56de\u78b0\u649e\u7684\u7ed3\u679c\uff0c\u663e\u793a\u4e3a ",Object(a.b)("inlineCode",{parentName:"p"},"true"),"\uff0c\u8868\u793a\u53d1\u751f\u4e86\u78b0\u649e\u3002"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u8be5\u70b9\u5e76\u672a\u4e0e\u7ea2\u8272\u5706\u5f62\u76f4\u63a5\u76f8\u4ea4\uff0c\u800c\u662f\u4e0e\u7ea2\u8272\u5706\u5f62\u7684\u5305\u56f4\u76d2\u76f8\u4ea4\u3002")))}b.isMDXComponent=!0},520:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return g}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),s=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},b=function(e){var t=s(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(n),u=r,h=b["".concat(c,".").concat(u)]||b[u]||d[u]||a;return n?i.a.createElement(h,o({ref:t},l,{components:n})):i.a.createElement(h,o({ref:t},l))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=h;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:r,c[1]=o;for(var l=2;l<a;l++)c[l]=n[l];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);