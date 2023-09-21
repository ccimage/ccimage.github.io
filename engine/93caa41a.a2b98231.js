(window.webpackJsonp=window.webpackJsonp||[]).push([[233],{360:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"metadata",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(1),i=n(9),a=(n(0),n(520)),l={id:"text",uuid:"90053fb2-725c-4da1-89da-13ea24635681",title:"\u6587\u672c\u7c7b\u578b"},p=[{value:"1.\u666e\u901a\u6587\u672c",id:"1\u666e\u901a\u6587\u672c",children:[]},{value:"2.\u8f93\u5165\u6587\u672c",id:"2\u8f93\u5165\u6587\u672c",children:[]},{value:"3.\u4f4d\u56fe\u6587\u672c",id:"3\u4f4d\u56fe\u6587\u672c",children:[]}],c={id:"render-2d/textField/text",title:"\u6587\u672c\u7c7b\u578b",description:"Egret \u63d0\u4f9b\u4e09\u79cd\u4e0d\u540c\u7684\u6587\u672c\u7c7b\u578b\u3002",source:"@site/docs/render-2d/textField/text.md",permalink:"/engine/docs/render-2d/textField/text",sidebar:"someSidebar",previous:{title:"\u906e\u7f69",permalink:"/engine/docs/render-2d/mask/mask"},next:{title:"\u6587\u672c\u6837\u5f0f",permalink:"/engine/docs/render-2d/textField/textStyle"}},b={rightToc:p,metadata:c},o="wrapper";function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)(o,Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Egret \u63d0\u4f9b\u4e09\u79cd\u4e0d\u540c\u7684\u6587\u672c\u7c7b\u578b\u3002"),Object(a.b)("h2",{id:"1\u666e\u901a\u6587\u672c"},"1.\u666e\u901a\u6587\u672c"),Object(a.b)("p",null,"\u666e\u901a\u6587\u672c\u662f\u7528\u4e8e\u663e\u793a\u6807\u51c6\u6587\u672c\u5185\u5bb9\u7684\u6587\u672c\u7c7b\u578b\u3002"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"egret.TextField")," \u7c7b\u8868\u793a\u6587\u672c\u7c7b\u578b\uff0c\u4f7f\u7528\u8303\u4f8b\u5982\u4e0b\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'const label: egret.TextField = new egret.TextField();\nlabel.text = "This is a text!";\nthis.addChild(label);\n\n')),Object(a.b)("p",null,"\u8fd0\u884c\u6548\u679c\uff1a"),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/engine/img/docs/2dRender/textField/text/5661598a65c67.png",alt:null}))),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"egret.TextField")," \u7c7b\u5305\u542b ",Object(a.b)("inlineCode",{parentName:"p"},"text")," \u5c5e\u6027\uff0c\u8be5\u5c5e\u6027\u662f\u5f53\u524d\u6587\u672c\u7684\u663e\u793a\u5185\u5bb9\u3002"),Object(a.b)("h2",{id:"2\u8f93\u5165\u6587\u672c"},"2.\u8f93\u5165\u6587\u672c"),Object(a.b)("p",null,"\u8f93\u5165\u6587\u672c\u662f\u5141\u8bb8\u7528\u6237\u8f93\u5165\u7684\u6587\u672c\u7c7b\u578b\u3002"),Object(a.b)("p",null,"\u5c06\u6587\u672c\u6846\u8bbe\u7f6e\u4e3a\u53ef\u8f93\u5165\u7684\u4ee3\u7801\u5982\u4e0b\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"const txInput: egret.TextField = new egret.TextField();\ntxInput.type = egret.TextFieldType.INPUT;\ntxInput.width = 282;\ntxInput.height = 43;\ntxInput.x = 134;\ntxInput.y = 592;\ntxInput.textColor = 0x000000;\n/// \u6ce8\u610f_container\u662f\u4e8b\u5148\u5efa\u7acb\u597d\u7684\u4e00\u4e2a\u663e\u793a\u5bb9\u5668\uff0c\u5373 egret.Sprite\uff0c\u5e76\u4e14\u5df2\u7ecf\u6dfb\u52a0\u5230\u663e\u793a\u5217\u8868\u4e2d\nthis._container.addChild(txInput);\n\n")),Object(a.b)("p",null,"\u5173\u952e\u4ee3\u7801\u662f\u8bbe\u7f6e\u5176\u7c7b\u578b\u4e3a ",Object(a.b)("inlineCode",{parentName:"p"},"INPUT"),"\u3002"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"setFocus()")," \u65b9\u6cd5")),Object(a.b)("p",null,"\u8f93\u5165\u6587\u672c\u6709 ",Object(a.b)("inlineCode",{parentName:"p"},"setFocus()")," \u65b9\u6cd5\uff0c\u4f5c\u7528\u662f\u4f7f\u8f93\u5165\u6587\u672c\u83b7\u5f97\u7126\u70b9\uff0c\u4f7f\u7528\u65b9\u6cd5\u5982\u4e0b\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"const textIput: egret.TextField = new egret.TextField();\ntextIput.type = egret.TextFieldType.INPUT;\nthis.addChild(textIput);\nconst button: egret.Shape = new egret.Shape();\nbutton.graphics.beginFill(0x00cc00);\nbutton.graphics.drawRect(0, 0, 100, 40);\nbutton.graphics.endFill();\nbutton.y = 50;\nthis.addChild(button);\nbutton.touchEnabled = true;\nbutton.addEventListener(egret.TouchEvent.TOUCH_BEGIN, (e) => {\n    textIput.setFocus();\n}, this);\n\n")),Object(a.b)("p",null,"\u8fd9\u91cc\u521b\u5efa\u4e86\u4e00\u4e2a\u8f93\u5165\u6587\u672c\u548c\u4e00\u4e2a\u6309\u94ae\uff0c\u5728\u6309\u94ae\u7684\u89e6\u6478\u4e8b\u4ef6\u56de\u8c03\u51fd\u6570\u4e2d\u8c03\u7528\u8f93\u5165\u6587\u672c\u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"setFocus()")," \u65b9\u6cd5\u3002"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u8bbe\u7f6e\u8f93\u5165\u6837\u5f0f")),Object(a.b)("p",null,"\u8f93\u5165\u6587\u672c\u7684\u8f93\u5165\u6837\u5f0f\u6709\u4e09\u79cd\uff1a\u666e\u901a\u6587\u672c\uff08\u9ed8\u8ba4\uff09\uff0c\u5bc6\u7801\u548c\u7535\u8bdd\u53f7\u3002\u8bbe\u7f6e\u4e0d\u540c\u7684\u7c7b\u578b\u7684\u8f93\u5165\u6837\u5f0f\uff0c\u5728\u624b\u673a\u4e0a\u5f39\u51fa\u9762\u677f\u662f\u4e0d\u540c\u7684\u3002\u8bbe\u7f6e\u5bc6\u7801\u6837\u5f0f\u8f93\u5165\u65f6\u663e\u793a\u5bc6\u7801\uff0c\u8bbe\u7f6e\u7535\u8bdd\u53f7\u6837\u5f0f\u8f93\u5165\u65f6\u5728\u624b\u673a\u4e0a\u5f39\u51fa\u6570\u5b57\u8f93\u5165\u9762\u677f\u3002"),Object(a.b)("p",null,"\u8bbe\u7f6e\u8f93\u5165\u6587\u672c\u6837\u5f0f\u9996\u5148\u8981\u8bbe\u7f6e ",Object(a.b)("inlineCode",{parentName:"p"},"egret.TextField")," \u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"TextFieldType")," \u4e3a ",Object(a.b)("inlineCode",{parentName:"p"},"INPUT")," \u7c7b\u578b\u3002\u7136\u540e\u8bbe\u7f6e ",Object(a.b)("inlineCode",{parentName:"p"},"egret.TextField")," \u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"inputType")," \u5c5e\u6027\u5373\u53ef\u3002"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'const text: egret.TextField = new egret.TextField();\ntext.type = egret.TextFieldType.INPUT;\n//\u8bbe\u7f6e\u8f93\u5165\u6587\u672c\u7684\u6837\u5f0f\u4e3a\u6587\u672c\ntext.inputType = egret.TextFieldInputType.TEXT;\ntext.text = "Input text:";\ntext.width = 300;\nthis.addChild(text);\nconst pass: egret.TextField = new egret.TextField();\npass.type = egret.TextFieldType.INPUT;\n//\u8bbe\u7f6e\u8f93\u5165\u6587\u672c\u663e\u793a\u4e3a\u5bc6\u7801\npass.inputType = egret.TextFieldInputType.PASSWORD;\n//\u8bbe\u7f6e\u5bc6\u7801\u663e\u793a\npass.displayAsPassword = true;\npass.text = "Password";\npass.y = 100;\npass.width = 300;\nthis.addChild(pass);\nconst tel: egret.TextField = new egret.TextField();\ntel.type = egret.TextFieldType.INPUT;\n//\u8bbe\u7f6e\u8f93\u5165\u7535\u8bdd\u53f7\u6837\u5f0f\ntel.inputType = egret.TextFieldInputType.TEL;\ntel.text = "Telephone number:";\ntel.y = 200;\ntel.width = 300;\nthis.addChild(tel);\n\n')),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/engine/img/docs/2dRender/textField/text/575e904c4a14f.png",alt:null}))),Object(a.b)("p",null,"\u6700\u7ec8\u6548\u679c\u5982\u4e0a\u56fe\u6240\u793a\uff0c\u5728\u8f93\u5165\u6587\u672c\u9ed8\u8ba4\u6837\u5f0f\u4e0b\u5f39\u51fa\u9ed8\u8ba4\u8f93\u5165\u6cd5\uff0c\u5728\u5bc6\u7801\u6837\u5f0f\u4e0b\u5f39\u51fa\u82f1\u6587\u8f93\u5165\u6cd5\uff0c\u5728\u7535\u8bdd\u53f7\u6837\u5f0f\u4e0b\u5f39\u51fa\u6570\u5b57\u952e\u76d8\u3002"),Object(a.b)("h2",{id:"3\u4f4d\u56fe\u6587\u672c"},"3.\u4f4d\u56fe\u6587\u672c"),Object(a.b)("p",null,"\u4f4d\u56fe\u6587\u672c\u662f\u501f\u52a9\u4f4d\u56fe\u5b57\u4f53\u6e32\u67d3\u7684\u6587\u672c\u7c7b\u578b\u3002"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"egret.BitmapText")," \u7c7b\u8868\u793a\u4f4d\u56fe\u6587\u672c\u7c7b\u578b\u3002"),Object(a.b)("p",null,"\u5176\u4f7f\u7528\u65b9\u6cd5\u4e3a\uff1a"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u52a0\u8f7d\u4f4d\u56fe\u5b57\u4f53\u6587\u4ef6"),Object(a.b)("li",{parentName:"ul"},"\u5c06\u52a0\u8f7d\u540e\u7684\u5b57\u4f53\u5bf9\u8c61\u8d4b\u503c\u7ed9 ",Object(a.b)("inlineCode",{parentName:"li"},"egret.BitmapText")," \u7684 ",Object(a.b)("inlineCode",{parentName:"li"},"font")," \u5c5e\u6027\u3002")),Object(a.b)("p",null,"\u8303\u4f8b\u5982\u4e0b\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'class Main extends egret.DisplayObjectContainer {\n    public constructor() {\n        super();\n        this.once(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);\n    }\n    private onAddToStage(evt: egret.Event) {\n        RES.getResByUrl("resource/cartoon-font.fnt", this.onLoadComplete, this, RES.ResourceItem.TYPE_FONT);\n    }\n    private _bitmapText: egret.BitmapText;\n    private onLoadComplete(font: egret.BitmapFont): void {\n        this._bitmapText = new egret.BitmapText();\n        this._bitmapText.font = font;\n        this._bitmapText.x = 50;\n        this._bitmapText.y = 300;\n        this.addChild(this._bitmapText);\n    }\n}\n\n')),Object(a.b)("p",null,"\u8fd0\u884c\u6548\u679c\uff1a"),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/engine/img/docs/2dRender/textField/text/20170830200839.png",alt:null}))))}d.isMDXComponent=!0},520:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),o=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):p({},t,{},e)),n},d=function(e){var t=o(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},O=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),d=o(n),u=r,O=d["".concat(l,".").concat(u)]||d[u]||s[u]||a;return n?i.a.createElement(O,p({ref:t},b,{components:n})):i.a.createElement(O,p({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=O;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:r,l[1]=p;for(var b=2;b<a;b++)l[b]=n[b];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);