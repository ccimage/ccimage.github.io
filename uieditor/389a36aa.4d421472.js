(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{148:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return s}));var r=t(1),a=t(6),o=(t(0),t(309)),i={id:"taskConfig",title:"\u4efb\u52a1\u914d\u7f6e",uuid:"f1d869c8-fd90-41ad-8488-ff3696be90e9"},c={id:"wing/manual/taskConfig",title:"\u4efb\u52a1\u914d\u7f6e",description:"\u8bbe\u7f6e\u5f53\u524d\u5de5\u4f5c\u7a7a\u95f4\u4e0b `.wing/tasks.json` \u53ef\u4ee5\u81ea\u5b9a\u4e49\u4efb\u52a1\u3002\u5e38\u89c1\u7684\u4efb\u52a1\u5982 \u6784\u5efa\uff0c\u6e05\u7406\uff0c\u53d1\u5e03\u3002\u8fd9\u4e9b\u4efb\u52a1\u901a\u8fc7\u4e00\u822c\u662f\u6267\u884c\u547d\u4ee4\u884c\u7a0b\u5e8f\u6765\u5b9e\u73b0\u7684\u3002",source:"@site/docs/wing/manual/taskConfig.md",permalink:"/uieditor/docs/wing/manual/taskConfig",sidebar:"someSidebar",previous:{title:"\u5de5\u4f5c\u7a7a\u95f4\u8bbe\u7f6e",permalink:"/uieditor/docs/wing/manual/workSpace"},next:{title:"\u542f\u52a8\u914d\u7f6e",permalink:"/uieditor/docs/wing/manual/startUpConfig"}},u=[],p={rightToc:u};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u8bbe\u7f6e\u5f53\u524d\u5de5\u4f5c\u7a7a\u95f4\u4e0b ",Object(o.b)("inlineCode",{parentName:"p"},".wing/tasks.json")," \u53ef\u4ee5\u81ea\u5b9a\u4e49\u4efb\u52a1\u3002\u5e38\u89c1\u7684\u4efb\u52a1\u5982 \u6784\u5efa\uff0c\u6e05\u7406\uff0c\u53d1\u5e03\u3002\u8fd9\u4e9b\u4efb\u52a1\u901a\u8fc7\u4e00\u822c\u662f\u6267\u884c\u547d\u4ee4\u884c\u7a0b\u5e8f\u6765\u5b9e\u73b0\u7684\u3002\n\u5982\u679c\u5f53\u524d\u5de5\u4f5c\u7a7a\u95f4\u4e0b\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},".wing")," \u6587\u4ef6\u5939\u6ca1\u6709 ",Object(o.b)("inlineCode",{parentName:"p"},"tasks.json")," \u3002\u53ef\u4ee5\u901a\u8fc7\u547d\u4ee4\u9762\u677f\u4e2d\u7684 ",Object(o.b)("strong",{parentName:"p"},"Tasks: Configure Task Runner")," \u547d\u4ee4\u9009\u62e9\u4e00\u4e2a\u4efb\u52a1\u6a21\u677f\u3002"),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"/uieditor/img/docs/wing/manual/taskConfig/5.png",alt:null}))),Object(o.b)("p",null,"\u5bf9\u4e8e\u4e00\u822c\u7684Egret\u9879\u76ee\uff0c\u5728\u521b\u5efa\u9879\u76ee\u7684\u65f6\u5019\u5df2\u7ecf\u81ea\u52a8\u751f\u6210\u4e86\u4e0eEgret\u547d\u4ee4\u884c\u5339\u914d\u7684\u4efb\u52a1\uff1a ",Object(o.b)("strong",{parentName:"p"},"\u6784\u5efa(Ctrl+Shift+B)\uff0c\u6e05\u7406\uff0c\u53d1\u5e03"),"\u3002",Object(o.b)("inlineCode",{parentName:"p"},"tasks.json")," \u5982\u4e0b\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'{\n    "version": "0.1.0",\n    "command": "egret",\n    "isShellCommand": true,\n    "tasks": [\n        {\n            "taskName": "build",\n            "showOutput": "always",\n            "args": [\n                "build",\n                "-sourcemap"\n            ],\n            "problemMatcher": "$tsc"\n        },\n        {\n            "taskName": "clean",\n            "showOutput": "always",\n            "args": [\n                "build",\n                "-e"\n            ],\n            "problemMatcher": "$tsc"\n        },\n        {\n            "taskName": "publish",\n            "showOutput": "always",\n            "args": [\n                "publish"\n            ],\n            "problemMatcher": "$tsc"\n        }\n    ]\n}\n')))}s.isMDXComponent=!0},309:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),s=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},l=function(e){var n=s(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),l=s(t),m=r,f=l["".concat(i,".").concat(m)]||l[m]||b[m]||o;return t?a.a.createElement(f,c({ref:n},p,{components:t})):a.a.createElement(f,c({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);