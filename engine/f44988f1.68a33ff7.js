(window.webpackJsonp=window.webpackJsonp||[]).push([[376],{503:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"rightToc",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(1),c=n(9),i=(n(0),n(520)),o={id:"touchEvent",uuid:"c9235d35-d5bc-4c4f-a23b-b15279835b38",title:"\u89e6\u6478\u4e8b\u4ef6"},a=[{value:"1.\u89e6\u6478\u4e8b\u4ef6",id:"1\u89e6\u6478\u4e8b\u4ef6",children:[]},{value:"2.\u53d6\u6d88\u89e6\u6478\u4e8b\u4ef6",id:"2\u53d6\u6d88\u89e6\u6478\u4e8b\u4ef6",children:[]}],l={id:"event/touchEvent",title:"\u89e6\u6478\u4e8b\u4ef6",description:"### 1.\u89e6\u6478\u4e8b\u4ef6",source:"@site/docs/event/touchEvent.md",permalink:"/engine/docs/event/touchEvent",sidebar:"someSidebar",previous:{title:"\u4e8b\u4ef6\u7684\u4f18\u5148\u7ea7",permalink:"/engine/docs/event/priority"},next:{title:"\u53d1\u9001HTTP\u8bf7\u6c42",permalink:"/engine/docs/net/sendHTTP"}},p={rightToc:a,metadata:l},s="wrapper";function u(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(i.b)(s,Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"1\u89e6\u6478\u4e8b\u4ef6"},"1.\u89e6\u6478\u4e8b\u4ef6"),Object(i.b)("p",null,"\u5bf9\u4e8e\u79fb\u52a8\u6e38\u620f\uff0c\u89e6\u6478\u4e8b\u4ef6\u662f\u6700\u5e38\u7528\u7684\u7528\u6237\u4ea4\u4e92\u4e8b\u4ef6\u7c7b\u578b\u3002Egret \u4e3a\u89e6\u6478\u4e8b\u4ef6\u8bbe\u7f6e\u4e86\u4e13\u95e8\u7684\u89e6\u6478\u4e8b\u4ef6\u7c7b",Object(i.b)("inlineCode",{parentName:"p"},"egret.TouchEvent"),"\u3002"),Object(i.b)("p",null,"\u5176\u5305\u542b\u7684\u4e8b\u4ef6\u7c7b\u578b\u4e3b\u8981\u6709\uff1a"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"TOUCH_BEGIN\uff1a\u5f53\u7528\u6237\u7b2c\u4e00\u6b21\u89e6\u6478\u542f\u7528\u89e6\u6478\u7684\u8bbe\u5907\u65f6\uff08\u4f8b\u5982\uff0c\u7528\u624b\u6307\u89e6\u6478\u914d\u6709\u89e6\u6478\u5c4f\u7684\u79fb\u52a8\u7535\u8bdd\u6216\u5e73\u677f\u7535\u8111\uff09\u89e6\u53d1"),Object(i.b)("li",{parentName:"ul"},"TOUCH_CANCEL\uff1a\u7531\u4e8e\u67d0\u4e2a\u4e8b\u4ef6\u53d6\u6d88\u4e86\u89e6\u6478\u65f6\u89e6\u53d1"),Object(i.b)("li",{parentName:"ul"},"TOUCH_END\uff1a\u5f53\u7528\u6237\u79fb\u9664\u4e0e\u542f\u7528\u89e6\u6478\u7684\u8bbe\u5907\u7684\u63a5\u89e6\u65f6\uff08\u4f8b\u5982\uff0c\u5c06\u624b\u6307\u4ece\u914d\u6709\u89e6\u6478\u5c4f\u7684\u79fb\u52a8\u7535\u8bdd\u6216\u5e73\u677f\u7535\u8111\u4e0a\u62ac\u8d77\uff09\u89e6\u53d1"),Object(i.b)("li",{parentName:"ul"},"TOUCH_MOVE\uff1a\u5f53\u7528\u6237\u89e6\u78b0\u8bbe\u5907\u5e76\u79fb\u52a8\u65f6\u8fdb\u884c\u89e6\u53d1\uff0c\u800c\u4e14\u4f1a\u8fde\u7eed\u89e6\u53d1\uff0c\u76f4\u5230\u63a5\u89e6\u70b9\u88ab\u5220\u9664"),Object(i.b)("li",{parentName:"ul"},"TOUCH_TAP\uff1a\u5f53\u7528\u6237\u5728\u89e6\u6478\u8bbe\u5907\u4e0a\u4e0e\u5f00\u59cb\u89e6\u6478\u7684\u540c\u4e00 DisplayObject \u5b9e\u4f8b\u4e0a\u62ac\u8d77\u63a5\u89e6\u70b9\u65f6\u89e6\u53d1\uff08\u76f8\u5f53\u4e0e\u70b9\u51fb\u4e8b\u4ef6\uff09")),Object(i.b)("p",null,"\u5728Egret\u4e2d\u4f7f\u7528\u89e6\u6478\u4e8b\u4ef6\u65f6\uff0c\u9700\u8981\u6253\u5f00\u663e\u793a\u5bf9\u8c61\u7684\u89e6\u6478\u4e8b\u4ef6\u5f00\u5173\uff0c\u5373\u5c06\u8be5\u663e\u793a\u5bf9\u8c61\u7684",Object(i.b)("inlineCode",{parentName:"p"},"touchEnabled"),"\u5c5e\u6027\u8bbe\u7f6e\u4e3a",Object(i.b)("inlineCode",{parentName:"p"},"true"),"\u3002\u4ee3\u7801\u793a\u4f8b\u5982\u4e0b\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'class TouchEventTest extends egret.DisplayObjectContainer {\n    public constructor() {\n        super();\n        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);\n    }\n    private onAddToStage(event: egret.Event) {\n        //\u6dfb\u52a0\u663e\u793a\u6587\u672c\n        this.drawText();\n        //\u7ed8\u5236\u4e00\u4e2a\u900f\u660e\u5ea6\u4e3a1\u7684\u7eff\u8272\u77e9\u5f62\uff0c\u5bbd\u9ad8\u4e3a100*80\n        const spr1: egret.Sprite = new egret.Sprite();\n        spr1.graphics.beginFill(0x00ff00, 1);\n        spr1.graphics.drawRect(0, 0, 100, 80);\n        spr1.graphics.endFill();\n        spr1.width = 100;\n        spr1.height = 80;\n        this.addChild(spr1);\n        //\u8bbe\u7f6e\u663e\u793a\u5bf9\u8c61\u53ef\u4ee5\u76f8\u5e94\u89e6\u6478\u4e8b\u4ef6\n        spr1.touchEnabled = true;\n        //\u6ce8\u518c\u4e8b\u4ef6\n        spr1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);\n        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);\n        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTaps, this, true);\n    }\n    private onTouch(evt: egret.TouchEvent) {\n        this.txt.text += "\\n\u70b9\u51fb\u4e86spr1";\n    }\n    private onTouchTap(evt: egret.TouchEvent) {\n        this.txt.text += "\\n\u5bb9\u5668\u5192\u6ce1\u4fa6\u542c\\n---------";\n    }\n    private onTouchTaps(evt: egret.TouchEvent) {\n        this.txt.text += "\\n\u5bb9\u5668\u6355\u83b7\u4fa6\u542c";\n    }\n    //\u7ed8\u5236\u6587\u672c\n    private txt: egret.TextField;\n    private drawText(): void {\n        this.txt = new egret.TextField();\n        this.txt.size = 12;\n        this.txt.x = 250;\n        this.txt.width = 200;\n        this.txt.height = 200;\n        this.txt.text = "\u4e8b\u4ef6\u6587\u5b57";\n        this.addChild(this.txt);\n    }\n}\n\n')),Object(i.b)("h3",{id:"2\u53d6\u6d88\u89e6\u6478\u4e8b\u4ef6"},"2.\u53d6\u6d88\u89e6\u6478\u4e8b\u4ef6"),Object(i.b)("p",null,"\u53d6\u6d88\u89e6\u6478\u4e8b\u4ef6\uff0c\u5728\u7531\u4e8e\u67d0\u4e2a\u4e8b\u4ef6 \u53d6\u6d88\u4e86\u89e6\u6478 \u65f6\u89e6\u53d1\u3002"),Object(i.b)("p",null,"\u4ee5\u70b9\u51fb\u4e8b\u4ef6\u4e3a\u4f8b\uff0c\u4e00\u4e2a\u70b9\u51fb\u7684\u6d41\u7a0b\u4e00\u822c\u4f1a\u89e6\u53d13\u4e2a touch \u4e8b\u4ef6\uff1a",Object(i.b)("inlineCode",{parentName:"p"},"TouchBegin")," \u89e6\u6478\u5f00\u59cb\uff0c",Object(i.b)("inlineCode",{parentName:"p"},"TouchEnd")," \u89e6\u6478\u7ed3\u675f\uff0c",Object(i.b)("inlineCode",{parentName:"p"},"TouchTap")," \u70b9\u51fb\u3002"),Object(i.b)("p",null,"\u5728\u67d0\u4e9b\u7279\u6b8a\u60c5\u51b5\uff0c\u6bd4\u5982 EUI \u4e2d\u7684 ",Object(i.b)("inlineCode",{parentName:"p"},"Scroller")," \u6eda\u52a8\u5217\u8868\uff0c\u5f53\u624b\u6307\u70b9\u4e2d\u5b83\u540e\uff0c\u9996\u5148\u629b\u51fa\u4e00\u4e2a ",Object(i.b)("inlineCode",{parentName:"p"},"TouchBegin"),"\uff0c\u5982\u679c\u6b64\u65f6\u6ca1\u6709\u6eda\u52a8\uff0c\u76f4\u63a5\u79bb\u5f00\u5c4f\u5e55\uff0c\u90a3\u4e48\u8fd8\u662f\u539f\u6765\u6807\u51c6\u7684\u6d41\u7a0b\uff0c\u629b\u51fa ",Object(i.b)("inlineCode",{parentName:"p"},"TouchEnd")," \u548c ",Object(i.b)("inlineCode",{parentName:"p"},"TouchTap"),"\u3002\u4f46\u662f\u5f53\u624b\u6307\u6eda\u52a8\u5b83\u4ee5\u540e\uff0c\u5219\u4f1a\u629b\u51fa\u4e00\u4e2a ",Object(i.b)("inlineCode",{parentName:"p"},"TouchCancel")," \u4e8b\u4ef6\uff0c\u800c\u540e\u7eed\u7684 ",Object(i.b)("inlineCode",{parentName:"p"},"TouchEnd")," \u548c ",Object(i.b)("inlineCode",{parentName:"p"},"TouchTap")," \u4e8b\u4ef6\u5c31\u4e0d\u4f1a\u88ab\u89e6\u53d1\u4e86\u3002"),Object(i.b)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u793a\u4f8b\u4ee3\u7801\uff0c\u521b\u5efa\u4e00\u4e2a\u6eda\u52a8\u5217\u8868\u5e76\u589e\u52a0\u76d1\u542c"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'const scroller = new eui.Scroller();\nconst list = new eui.List();\nlist.itemRendererSkinName = `\n        <e:Skin states="up,down,disabled" minHeight="50" minWidth="100" xmlns:e="http://ns.egret.com/eui"> <e:Image width="100%" height="100%" scale9Grid="1,3,8,8" alpha.disabled="0.5"\n                     source="resource/button_up.png"\n                     source.down="resource/button_down.png"/> <e:Label text="{data}" top="8" bottom="8" left="8" right="8"\n                     textColor="0xFFFFFF" verticalAlign="middle" textAlign="center"/> </e:Skin>`;\nconst ac = new eui.ArrayCollection([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);\nlist.dataProvider = ac;\nscroller.viewport = list;\nscroller.height = 200;\nthis.addChild(scroller);\nscroller.addEventListener(egret.TouchEvent.TOUCH_BEGIN, () => { console.log("111 Scroller Begin"); }, this);\nlist.addEventListener(egret.TouchEvent.TOUCH_BEGIN, () => { console.log("111 List Begin"); }, this);\nscroller.addEventListener(egret.TouchEvent.TOUCH_END, () => { console.log("222 Scroller END"); }, this);\nlist.addEventListener(egret.TouchEvent.TOUCH_END, () => { console.log("222 List END"); }, this);\nscroller.addEventListener(egret.TouchEvent.TOUCH_TAP, () => { console.log("33 Scroller Tap"); }, this);\nlist.addEventListener(egret.TouchEvent.TOUCH_TAP, () => { console.log("33 List Tap"); }, this);\nscroller.addEventListener(egret.TouchEvent.TOUCH_CANCEL, () => { console.log("44 Scroller cancel"); }, this);\nlist.addEventListener(egret.TouchEvent.TOUCH_CANCEL, () => { console.log("44 List cancel"); }, this);\n\n')),Object(i.b)("p",null,"\u5f53\u6ca1\u6709\u6eda\u52a8\uff0c\u70b9\u51fb\u5217\u8868\u540e\uff0c\u4f1a\u4f9d\u6b21\u629b\u51fa\u4ee5\u4e0b\u4e8b\u4ef6\u3002"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"111 List Begin\n111 Scroller Begin\n222 List END\n222 Scroller END\n33 List Tap\n33 Scroller Tap\n\n")),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"/engine/img/docs/event/touchEvent/568e5eb1eef1f.png",alt:null}))),Object(i.b)("p",null,"\u4e0a\u56fe\u4e3a\u70b9\u51fb\u540e\u7684\u6837\u5b50"),Object(i.b)("p",null,"\u5f53\u6eda\u52a8 ",Object(i.b)("inlineCode",{parentName:"p"},"scroller")," \u4ee5\u540e\uff0c\u4f1a\u629b\u51fa ",Object(i.b)("inlineCode",{parentName:"p"},"TouchCancel"),"\uff0c\u540e\u7eed\u7684 touch \u4e8b\u4ef6\u4e0d\u4f1a\u88ab\u89e6\u53d1\u3002"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"111 List Begin\n111 Scroller Begin\n44 List cancel\n44 Scroller cancel\n\n")),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"/engine/img/docs/event/touchEvent/568e5eb20e0fe.png",alt:null}))),Object(i.b)("p",null,"\u53e6\u5916 ",Object(i.b)("inlineCode",{parentName:"p"},"TouchCancel")," \u89e6\u53d1\u4ee5\u540e\uff0c\u8bf4\u660e\u89e6\u6478\u88ab\u53d6\u6d88\u4e86\uff0c\u672c\u6b21\u89e6\u6478\u88ab\u9009\u4e2d\u7684\u9009\u9879\u6761\u4e5f\u4f1a\u6062\u590d\u6210\u9009\u4e2d\u524d\u7684\u72b6\u6001\u3002"))}u.isMDXComponent=!0},520:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var r=n(0),c=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var p=c.a.createContext({}),s=function(e){var t=c.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a({},t,{},e)),n},u=function(e){var t=s(e.components);return c.a.createElement(p.Provider,{value:t},e.children)},b="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},h=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),b=r,h=u["".concat(o,".").concat(b)]||u[b]||d[b]||i;return n?c.a.createElement(h,a({ref:t},p,{components:n})):c.a.createElement(h,a({ref:t},p))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[b]="string"==typeof e?e:r,o[1]=a;for(var p=2;p<i;p++)o[p]=n[p];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);