(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{179:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(1),o=n(6),a=(n(0),n(309)),c={id:"useComponents",uuid:"de445ba0-118d-4167-98f7-69eb4815c577",title:"\u5728EXML\u4e2d\u4f7f\u7528\u81ea\u5b9a\u4e49\u7ec4\u4ef6"},i={id:"EUI/advancedSkills/useComponents",title:"\u5728EXML\u4e2d\u4f7f\u7528\u81ea\u5b9a\u4e49\u7ec4\u4ef6",description:"## \u5f15\u7528\u81ea\u5b9a\u4e49\u7ec4\u4ef6",source:"@site/docs/EUI/advancedSkills/useComponents.md",permalink:"/uieditor/docs/EUI/advancedSkills/useComponents",sidebar:"someSidebar",previous:{title:"\u81ea\u5b9a\u4e49\u9879\u5448\u793a\u5668",permalink:"/uieditor/docs/EUI/dataCollection/itemRenderer"},next:{title:"style \u4f7f\u7528",permalink:"/uieditor/docs/EUI/advancedSkills/style"}},l=[{value:"\u5f15\u7528\u81ea\u5b9a\u4e49\u7ec4\u4ef6",id:"\u5f15\u7528\u81ea\u5b9a\u4e49\u7ec4\u4ef6",children:[]},{value:"\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u89c4\u8303",id:"\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u89c4\u8303",children:[]}],p={rightToc:l};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"\u5f15\u7528\u81ea\u5b9a\u4e49\u7ec4\u4ef6"},"\u5f15\u7528\u81ea\u5b9a\u4e49\u7ec4\u4ef6"),Object(a.b)("p",null,"\u4e4b\u524d\u4f8b\u5b50\u4e2d\u7528\u5230\u7684\u8282\u70b9\u90fd\u662fEUI\u6807\u51c6\u5e93\u4e2d\u7684\u7ec4\u4ef6\uff0c\u6b64\u5916 EUI \u53ef\u4ee5\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u3002\u4f8b\u5982\u6709\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7684\u6309\u94ae\u7c7b\uff1a",Object(a.b)("inlineCode",{parentName:"p"},"control.MyButton")," ,\u5728EXML\u4e2d\u63cf\u8ff0\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u7684\u65b9\u5f0f\u5982\u4e0b\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'<e:Group class="skins.MyGroup" xmlns:e="http://ns.egret.com/eui" con="control.*"> \n    <con:MyButton/> \n</e:Group>\n')),Object(a.b)("p",null,"\u9996\u5148\u6211\u4eec\u8981\u5728\u6839\u8282\u70b9\u6dfb\u52a0\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7684\u547d\u540d\u7a7a\u95f4\uff1a",Object(a.b)("inlineCode",{parentName:"p"},'con="control.*"')," \uff0c\u7b49\u53f7\u4e4b\u524d\u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"con")," \u8868\u793a\u547d\u540d\u7a7a\u95f4\u524d\u7f00\uff0c\u8fd9\u4e2a\u53ef\u4ee5\u968f\u610f\u5199\uff0c\u53ea\u8981\u4e0d\u8ddf\u73b0\u6709\u7684\u524d\u7f00\u91cd\u540d\u5373\u53ef\u3002\u7b49\u53f7\u540e\u9762\u7684\u90e8\u5206 ",Object(a.b)("inlineCode",{parentName:"p"},"control.*")," \u8868\u793a\u5728",Object(a.b)("inlineCode",{parentName:"p"},"control"),"\u8fd9\u4e2a\u6a21\u5757\u540d\u4e0b\u7684\u7c7b\u3002\n\u58f0\u660e\u4e86\u547d\u540d\u7a7a\u95f4\u540e\uff0c\u5c31\u53ef\u4ee5\u5408\u6cd5\u5730\u5f15\u7528\u81ea\u5b9a\u4e49\u7ec4\u4ef6\uff1a",Object(a.b)("inlineCode",{parentName:"p"},"<con:MyButton/>")," \u8868\u793a\u7684\u7c7b\u5c31\u662f ",Object(a.b)("inlineCode",{parentName:"p"},"control.MyButton"),"\u3002\n\u8981\u662f\u7c7b\u4e0d\u5728\u4efb\u4f55\u6a21\u5757\u4e0b\uff0c\u53ef\u4ee5\u76f4\u63a5\u58f0\u660e\u547d\u540d\u7a7a\u95f4\u4e3a\uff1a",Object(a.b)("inlineCode",{parentName:"p"},'local="*"'),"\uff0c\u540c\u7406\u524d\u7f00\u662f\u53ef\u4ee5\u968f\u610f\u8d77\u7684\uff0c\u7b49\u53f7\u540e\u9762\u53ea\u9700\u8981\u4e00\u4e2a",Object(a.b)("inlineCode",{parentName:"p"},"*"),"\u5373\u8868\u793a\u4e0d\u542b\u6a21\u5757\u540d\u3002"),Object(a.b)("h2",{id:"\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u89c4\u8303"},"\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u89c4\u8303"),Object(a.b)("p",null,"\u8fd9\u91cc\u9700\u8981\u8bf4\u660e\u7684\u662f\uff0c\u867d\u7136EXML\u4e2d\u53ef\u4ee5\u4f7f\u7528\u76f4\u63a5\u5f15\u7528\u81ea\u5b9a\u4e49\u7ec4\u4ef6\uff0c\u4f46\u4f5c\u4e3a\u6700\u4f73\u5b9e\u8df5\uff0c\u6211\u4eec\u63a8\u8350\u5c3d\u53ef\u80fd\u907f\u514d\u5728EXML\u91cc\u76f4\u63a5\u4f7f\u7528\u5b83\u3002\u56e0\u4e3a",Object(a.b)("inlineCode",{parentName:"p"},"\u5728EXML\u4e2d\u4f7f\u7528\u7684\u81ea\u5b9a\u4e49\u7ec4\u4ef6\uff0c\u5bf9\u7ec4\u4ef6\u4ee3\u7801\u7684\u5065\u58ee\u6027\u6709\u4e00\u5b9a\u8981\u6c42"),"\uff0c\u624d\u80fd\u88ab\u89e3\u6790\u5668\u6b63\u5e38\u5b9e\u4f8b\u5316\u3002\u5e76\u4e14\u7edd\u5927\u591a\u6570\u4f7f\u7528\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u7684\u573a\u666f\uff0c\u5e94\u8be5\u90fd\u4f1a\u6709\u66f4\u597d\u7684\u7ec4\u7ec7\u65b9\u5f0f\u800c\u4e0d\u662f\u76f4\u63a5\u653e\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u8fdb\u53bb\u3002\u6709\u4e24\u79cd\u5e38\u89c1\u7684\u60c5\u51b5\u662f\u6211\u4eec\u5e94\u8be5\u907f\u514d\u4f7f\u7528\u81ea\u5b9a\u4e49\u7ec4\u4ef6\uff1a"),Object(a.b)("p",null,"1.\u5728\u76ae\u80a4\u4e2d\u653e\u7f6e\u4e00\u4e2a\u4e0d\u590d\u7528\u7684\u81ea\u5b9a\u4e49\u7ec4\u4ef6\uff0c\u5e76\u4e14\u4e3a\u8fd9\u4e2a\u7ec4\u4ef6\u518d\u8bbe\u7f6e\u4e00\u4e2a\u76ae\u80a4\uff0c\u8fd9\u79cd\u60c5\u51b5\u5b8c\u5168\u53ef\u4ee5\u76f4\u63a5\u628a\u5b83\u5bf9\u5e94\u76ae\u80a4\u91cc\u7684\u5185\u5bb9\u76f4\u63a5\u653e\u5230\u7236\u7ea7\u76ae\u80a4\u5185\uff0c\u800c\u4e0d\u9700\u8981\u591a\u8fd9\u4e00\u5c42\u5d4c\u5957\u3002"),Object(a.b)("p",null,"2.\u542b\u6709\u4e0e\u4e1a\u52a1\u903b\u8f91\u8026\u5408\u7684\u7ec4\u4ef6\u3002\u8fd9\u7c7b\u7ec4\u4ef6\u5e94\u8be5\u5728\u903b\u8f91\u4ee3\u7801\u4e2d\u5b9e\u4f8b\u5316\u52a8\u6001\u6dfb\u52a0\uff0c\u800c\u4e0d\u662f\u653e\u5728\u76ae\u80a4\u4e2d\u5b9e\u4f8b\u5316\u3002\u56e0\u4e3a\u76ae\u80a4\u88ab\u5b9e\u4f8b\u5316\u7684\u65f6\u5019\uff0c\u76f8\u5173\u7684\u4e1a\u52a1\u903b\u8f91\u4f9d\u8d56\u5e76\u6ca1\u6709\u521d\u59cb\u5316\u5b8c\u5168\uff0c\u5bb9\u6613\u4ea7\u751f\u62a5\u9519\u3002"),Object(a.b)("p",null,"\u5f53\u7ec4\u4ef6\u9700\u8981\u590d\u7528\u5e76\u4e14\u6709\u5f88\u5f3a\u901a\u7528\u6027\u7684\u65f6\u5019\u3002\u7b80\u5355\u8bf4\u5c31\u662f\u8fd9\u4e2a\u81ea\u5b9a\u4e49\u7ec4\u4ef6\uff0c\u8d77\u5230\u7684\u529f\u80fd\u4f5c\u7528\u662f\u8ddf\u6846\u67b6\u91cc\u7684UI\u7ec4\u4ef6\u5e93\u7c7b\u4f3c\u7684\uff0c\u5e94\u8be5\u4e0e\u5177\u4f53\u7684\u4e1a\u52a1\u903b\u8f91\u65e0\u5173\uff0c\u80fd\u591f\u72ec\u7acb\u88ab\u5b9e\u4f8b\u5316\u4f7f\u7528\u3002\u4f8b\u5982\u7ee7\u627f\u4e00\u4e2aButton\u5b9e\u73b0\u4e00\u4e2a\u80fd\u64ad\u653e\u5f71\u7247\u526a\u8f91\u529f\u80fd\u7684\u6309\u94ae\u3002\u8fd9\u79cd\u60c5\u51b5\u4e0b\u6211\u4eec\u624d\u5728EXML\u76f4\u63a5\u5f15\u7528\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u3002"),Object(a.b)("p",null,"\u5f53\u5fc5\u987b\u5728EXML\u4e2d\u4f7f\u7528\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u65f6\uff0c\u7f16\u7801\u4e0a\u5177\u4f53\u8981\u6ce8\u610f\u4ec0\u4e48\u5462\uff1f\u4e3a\u4e86\u66f4\u597d\u7684\u7406\u89e3\u8fd9\u4e2a\u7f16\u7801\u8981\u6c42\uff0c\u8fd9\u91cc\u7b80\u5355\u8bb2\u89e3\u4e00\u4e0bEXML\u8fd0\u884c\u65f6\u89e3\u6790\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u7684\u539f\u7406\u3002\u5f53\u4f60\u5728EXML\u4e2d\u653e\u7f6e\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u65f6\uff0cEXML\u89e3\u6790\u5668\u5728\u8fd0\u884c\u65f6\u9700\u8981\u53bb\u5206\u6790\u8fd9\u4e2a\u7ec4\u4ef6\u7684\u5c5e\u6027\u5217\u8868\u4ee5\u53ca\u5bf9\u5e94\u7684\u5c5e\u6027\u7c7b\u578b\uff0c\u7528\u4e8e\u7c7b\u578b\u68c0\u67e5\u4ee5\u53ca\u683c\u5f0f\u5316\u6b63\u786e\u7684\u6570\u636e\u7c7b\u578b\u3002\u4f46\u7531\u4e8eJS\u8bed\u8a00\u7684\u9650\u5236\uff0c\u539f\u751f\u5e76\u6ca1\u6709\u7c7b\u7684\u6982\u5ff5\uff0c\u8981\u8bfb\u53d6\u4e00\u4e2a\u7ec4\u4ef6\u7684\u5177\u4f53\u542b\u6709\u54ea\u4e9b\u5c5e\u6027\u5c31\u5fc5\u987b\u5148\u5b9e\u4f8b\u5316\u5b83\u3002\u6240\u4ee5\u5f00\u53d1\u8005\u4f1a\u9047\u5230\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u6784\u9020\u51fd\u6570\u88ab\u591a\u8c03\u7528\u4e00\u6b21\u7684\u60c5\u51b5\uff0c\u8fd9\u662f\u662f\u6b63\u5e38\u7684\u73b0\u8c61\uff0c\u4e00\u4e2a\u7ec4\u4ef6\u53ea\u4f1a\u5b9e\u4f8b\u5316\u4e00\u6b21\uff0c\u8bfb\u53d6\u5c5e\u6027\u5217\u8868\u540e\u5c31\u4f1a\u7f13\u5b58\u4e0b\u6765\u3002\u56e0\u6b64\u89c4\u5219\u5b9e\u9645\u4e0a\u53ea\u6709\u8fd9\u4e00\u6761\uff1a",Object(a.b)("inlineCode",{parentName:"p"},"\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u8981\u80fd\u5355\u72ec\u5b9e\u4f8b\u5316\u800c\u4e0d\u62a5\u9519\uff0c\u4e14\u80fd\u6b63\u5e38\u8bbf\u95ee\u5230\u5c5e\u6027\u9ed8\u8ba4\u503c\u4e0d\u62a5\u9519"),"\u3002\u5177\u4f53\u53ef\u4ee5\u62c6\u89e3\u4e3a\u4ee5\u4e0b\u5e94\u6ce8\u610f\u7684\u70b9\uff1a"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"1.\u5c5e\u6027\u5fc5\u987b\u8981\u6709\u9ed8\u8ba4\u503c\uff08\u8d4b\u503c\u4e3anull\u4e5f\u53ef\u4ee5\uff09\uff0c\u56e0\u4e3aTS\u7f16\u8bd1\u5668\u4f1a\u628a\u6ca1\u6709\u9ed8\u8ba4\u503c\u7684\u5c5e\u6027\u76f4\u63a5\u4f18\u5316\u6389\uff0c\u5728\u8fd0\u884c\u65f6\u5e76\u4e0d\u5b58\u5728\u3002")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"2.\u5c5e\u6027\u7684getter\u65b9\u6cd5\u5185\u8981\u5224\u65ad\u8bbf\u95ee\u7684\u5bf9\u8c61\u662f\u5426\u4e3a\u7a7a\uff0c\u786e\u4fdd\u5916\u90e8\u4efb\u4f55\u60c5\u51b5\u4e0b\u8bbf\u95ee\u5c5e\u6027\u90fd\u4e0d\u4f1a\u62a5\u9519\u3002")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"3.\u7ec4\u4ef6\u6784\u9020\u51fd\u6570\u53c2\u6570\u5fc5\u987b\u4e3a\u7a7a\uff0c\u6216\u8005\u53c2\u6570\u6709\u9ed8\u8ba4\u503c\uff0c\u5426\u5219\u65e0\u6cd5\u7528\u7a7a\u6784\u9020\u51fd\u6570\u5b9e\u4f8b\u5316\u3002")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"4.\u7ec4\u4ef6\u7684\u6784\u9020\u51fd\u6570\u5185\u4e0d\u5e94\u8be5\u6709\u5bf9\u5916\u90e8\u4e1a\u52a1\u903b\u8f91\u4f9d\u8d56\u7684\u4ee3\u7801\uff0c\u8fd9\u90e8\u5206\u4ee3\u7801\u53ef\u4ee5\u8f6c\u79fb\u5230\u7ec4\u4ef6\u88ab\u6dfb\u52a0\u5230\u821e\u53f0\u7684\u65f6\u5019\u542f\u52a8\u800c\u4e0d\u662f\u5b9e\u4f8b\u5316\u65f6\u3002"))),Object(a.b)("p",null,"\u5176\u4e2d\u6ce8\u610f\u4e00\u4e0b\uff1a\u867d\u7136\u89e3\u6790\u5668\u53ef\u80fd\u65e0\u6cd5\u5b9e\u4f8b\u5316\u7ec4\u4ef6\uff0c\u4f46\u662f\u4f60\u5728EXML\u4e2d\u5176\u5b9e\u5e76\u6ca1\u6709\u4f7f\u7528\u5230\u5b83\u81ea\u8eab\u5b9a\u4e49\u7684\u5c5e\u6027\uff0c\u800c\u662f\u53ea\u7528\u5230\u4e86\u7ee7\u627f\u81ea\u6846\u67b6\u7ec4\u4ef6\u7684\u5c5e\u6027\uff0c\u8fd9\u79cd\u60c5\u51b5\u5176\u5b9e\u5e94\u8be5\u53ef\u4ee5\u5ffd\u7565\u3002\u56e0\u6b64\u4e3a\u4e86\u6700\u5927\u9650\u5ea6\u786e\u4fdd\u663e\u793a\u6b63\u5e38\uff0c\u9632\u6b62\u7a0b\u5e8f\u4e2d\u65ad\uff0c\u89e3\u6790\u5668\u5bf9\u8fd9\u4e2a\u62a5\u9519\u8fdb\u884c\u4e86\u5c4f\u853d\uff0c\u53ea\u4f1a\u8f93\u51fa\u4e00\u4e9b\u8b66\u544a\u3002\u4f8b\u5982\u5f53\u770b\u5230#2104\u53f7\u8b66\u544a\u65f6\uff0c\u5c31\u662f\u63d0\u793a\u4f60\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u65e0\u6cd5\u5355\u72ec\u5b9e\u4f8b\u5316\u3002"))}b.isMDXComponent=!0},309:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),b=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},u=function(e){var t=b(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=b(n),s=r,m=u["".concat(c,".").concat(s)]||u[s]||d[s]||a;return n?o.a.createElement(m,i({ref:t},p,{components:n})):o.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);