(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{149:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"rightToc",(function(){return i})),t.d(n,"metadata",(function(){return p})),t.d(n,"default",(function(){return d}));var r=t(1),a=t(9),c=(t(0),t(199)),o={title:"\u5b9e\u4f53\u7ec4\u4ef6\u7cfb\u7edf",uuid:"75f7fe71-dc3b-433c-8372-4b8eb55c79f6"},i=[{value:"\u5b9e\u4f53\u4e0a\u4e0b\u6587",id:"\u5b9e\u4f53\u4e0a\u4e0b\u6587",children:[]},{value:"\u5b9e\u4f53\u5339\u914d\u5668",id:"\u5b9e\u4f53\u5339\u914d\u5668",children:[]},{value:"\u5b9e\u4f53\u7ec4",id:"\u5b9e\u4f53\u7ec4",children:[]},{value:"\u5b9e\u4f53\u6536\u96c6\u5668",id:"\u5b9e\u4f53\u6536\u96c6\u5668",children:[]},{value:"\u7cfb\u7edf",id:"\u7cfb\u7edf",children:[]}],p={id:"programming/ecs",title:"\u5b9e\u4f53\u7ec4\u4ef6\u7cfb\u7edf",description:"\u9996\u5148\u6765\u81ea\u5b9e\u4f53\u7ec4\u4ef6\u7cfb\u7edf\u7684\u6982\u5ff5\u3002",source:"@site/docs/programming/ecs.md",permalink:"/egretpro/docs/programming/ecs",sidebar:"someSidebar",previous:{title:"\u7ec4\u4ef6\u811a\u672c",permalink:"/egretpro/docs/programming/component"},next:{title:"Egret Pro \u67b6\u6784",permalink:"/egretpro/docs/programming/architecture"}},l={rightToc:i,metadata:p},b="wrapper";function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)(b,Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u9996\u5148\u6765\u81ea\u5b9e\u4f53\u7ec4\u4ef6\u7cfb\u7edf\u7684\u6982\u5ff5\u3002"),Object(c.b)("p",null,"\u5b9e\u4f53\u7ec4\u4ef6\u7cfb\u7edf\uff08ECS\uff09\u662f\u4e00\u79cd\u67b6\u6784\u6a21\u5f0f\uff0c\u5176\u6a21\u5f0f\u9075\u5faa\u7ec4\u5408\u4f18\u4e8e\u7ee7\u627f\u539f\u5219\uff0c\u6e38\u620f\u5185\u7684\u6bcf\u4e00\u4e2a\u57fa\u672c\u5355\u5143\u90fd\u662f\u4e00\u4e2a\u5b9e\u4f53\uff0c\u6bcf\u4e2a\u5b9e\u4f53\u53c8\u7531\u4e00\u4e2a\u6216\u591a\u4e2a\u7ec4\u4ef6\u6784\u6210\uff0c\u6bcf\u4e2a\u7ec4\u4ef6\u4ec5\u4ec5\u5305\u542b\u4ee3\u8868\u5176\u7279\u6027\u7684\u6570\u636e\uff08\u5373\u5728\u7ec4\u4ef6\u4e2d\u6ca1\u6709\u4efb\u4f55\u884c\u4e3a\uff09\uff0c\u7cfb\u7edf\u4fbf\u662f\u6765\u5904\u7406\u62e5\u6709\u4e00\u4e2a\u6216\u591a\u4e2a\u76f8\u540c\u7279\u5f81\u7ec4\u4ef6\u7684\u5b9e\u4f53\u96c6\u5408\u7684\u5de5\u5177\uff0c\u5176\u53ea\u62e5\u6709\u884c\u4e3a\uff08\u5373\u5728\u7cfb\u7edf\u4e2d\u6ca1\u6709\u4efb\u4f55\u72b6\u6001\uff09\u3002"),Object(c.b)("p",null,"\u5b9e\u4f53\u4e0e\u7ec4\u4ef6\u662f\u4e00\u4e2a\u4e00\u5bf9\u591a\u7684\u5173\u7cfb\uff0c\u5b9e\u4f53\u62e5\u6709\u600e\u6837\u7684\u80fd\u529b\uff0c\u5b8c\u5168\u662f\u53d6\u51b3\u4e8e\u5176\u62e5\u6709\u54ea\u4e9b\u7ec4\u4ef6\uff0c\u901a\u8fc7\u52a8\u6001\u6dfb\u52a0\u6216\u5220\u9664\u7ec4\u4ef6\uff0c\u53ef\u4ee5\u5728\uff08\u6e38\u620f\uff09\u8fd0\u884c\u65f6\u6539\u53d8\u5b9e\u4f53\u7684\u884c\u4e3a\u3002"),Object(c.b)("p",null,"\u4e0b\u9762\u662f\u5b9e\u4f53\u7ec4\u4ef6\u7cfb\u7edf\u5982\u4f55\u5728 Egret Pro \u5de5\u4f5c\u7684\u793a\u610f\u56fe\uff0c\u8ba9\u6211\u4eec\u6765\u7b80\u5355\u7684\u4e86\u89e3\u4e00\u4e0b ECS \u7684\u5de5\u4f5c\u539f\u7406\u3002"),Object(c.b)("p",null,Object(c.b)("img",Object(r.a)({parentName:"p"},{src:"/egretpro/img/docs/programming/architecture/ecs.png",alt:null}))),Object(c.b)("h2",{id:"\u5b9e\u4f53\u4e0a\u4e0b\u6587"},"\u5b9e\u4f53\u4e0a\u4e0b\u6587"),Object(c.b)("p",null,"\u6240\u6709\u88ab\u521b\u5efa\u51fa\u6765\u7684\u5b9e\u4f53\u90fd\u5b58\u50a8\u5728\u5b9e\u4f53\u4e0a\u4e0b\u6587\u4e2d\uff0c\u4e00\u4e2a\u5f15\u64ce\u5b9e\u4f8b\u4e2d\u5305\u542b\u591a\u4e2a\u5b9e\u4f53\u4e0a\u4e0b\u6587\u5b9e\u4f8b\uff0c\u56e0\u4e3a\u6bcf\u4e2a\u5b9e\u4f53\u4e0a\u4e0b\u6587\u5b9e\u4f8b\u53ea\u80fd\u5b58\u50a8\u4e00\u79cd\u5b9e\u4f53\u7c7b\u578b\uff0c\u6bd4\u5982 gameEntityContext \u5b58\u50a8 ",Object(c.b)("inlineCode",{parentName:"p"},"GameEntity"),"\uff0cassetEntityContext \u5b58\u50a8 ",Object(c.b)("inlineCode",{parentName:"p"},"AssetEntity"),"\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u6269\u5c55\u66f4\u591a\u7684\u5b9e\u4f53\u7c7b\u578b\u548c\u5b9e\u4f53\u4e0a\u4e0b\u6587\u5b9e\u4f8b\u6765\u6ee1\u8db3\u6211\u4eec\u7684\u5f00\u53d1\u9700\u6c42\u3002"),Object(c.b)("h2",{id:"\u5b9e\u4f53\u5339\u914d\u5668"},"\u5b9e\u4f53\u5339\u914d\u5668"),Object(c.b)("p",null,"\u5b9e\u4f53\u5339\u914d\u5668\u7684\u529f\u80fd\u662f\u7528\u6765\u5b9a\u4e49\u5177\u6709\u67d0\u79cd\u7ec4\u4ef6\u7279\u5f81\u7684\u5b9e\u4f53\u96c6\u5408\u7684\u89c4\u5219\uff0c\u901a\u8fc7\u4e00\u4e2a\u5339\u914d\u5668\u5b9e\u4f8b\uff0c\u5c31\u53ef\u4ee5\u5b9a\u4e49\u4e00\u4e2a\u660e\u786e\u7684\u5b9e\u4f53\u96c6\u5408\u7684\u89c4\u5219\u3002"),Object(c.b)("p",null,"\u6bd4\u5982\u6211\u4eec\u9700\u8981\u627e\u5230\u6240\u6709\u5305\u542b ",Object(c.b)("inlineCode",{parentName:"p"},"Transform")," \u548c ",Object(c.b)("inlineCode",{parentName:"p"},"MeshRenderer")," \u7ec4\u4ef6\u7684\u5b9e\u4f53\u96c6\u5408\uff0c\u90a3\u4e48\u6211\u4eec\u5c31\u9700\u8981\u5148\u5b9a\u4e49\u4e00\u4e2a\u8fd9\u6837\u7684\u5339\u914d\u89c4\u5219\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"    Matcher.create(GameEntity, true, Transform, MeshRenderer);\n")),Object(c.b)("p",null,"\u6216\u8005\u6211\u4eec\u9700\u8981\u627e\u5230\u6240\u6709\u5305\u542b ",Object(c.b)("inlineCode",{parentName:"p"},"Transform")," \u548c\u5305\u542b ",Object(c.b)("inlineCode",{parentName:"p"},"MeshRenderer")," \u6216 ",Object(c.b)("inlineCode",{parentName:"p"},"SkinnedMeshRenderer")," \u7ec4\u4ef6\u7684\u5b9e\u4f53\u96c6\u5408\uff0c\u5339\u914d\u89c4\u5219\u5982\u4e0b\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"    Matcher.create(GameEntity, true, Transform)\n        .anyOf(MeshRenderer, SkinnedMeshRenderer);\n")),Object(c.b)("p",null,"\u4e5f\u53ef\u80fd\u6211\u4eec\u9700\u8981\u627e\u5230\u6240\u6709\u5305\u542b ",Object(c.b)("inlineCode",{parentName:"p"},"Transform")," \u548c\u5305\u542b ",Object(c.b)("inlineCode",{parentName:"p"},"MeshRenderer")," \u6216 ",Object(c.b)("inlineCode",{parentName:"p"},"SkinnedMeshRenderer")," \u7ec4\u4ef6\u7684\u5b9e\u4f53\u96c6\u5408\uff0c\u4f46\u662f\u4e0d\u80fd\u5305\u62ec ",Object(c.b)("inlineCode",{parentName:"p"},"AlreadyDead")," \u7ec4\u4ef6\u7684\u5b9e\u4f53\u96c6\u5408\uff0c\u5339\u914d\u89c4\u5219\u5982\u4e0b\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"    Matcher.create(GameEntity, true, Transform)\n        .anyOf(MeshRenderer, SkinnedMeshRenderer)\n        .noneOf(AlreadyDead);\n")),Object(c.b)("h2",{id:"\u5b9e\u4f53\u7ec4"},"\u5b9e\u4f53\u7ec4"),Object(c.b)("p",null,"\u5b9e\u4f53\u7ec4\u662f\u7528\u6765\u7f13\u5b58\u67d0\u4e2a\u5339\u914d\u5668\u5339\u914d\u5668\u5230\u7684\u5b9e\u4f53\u96c6\u5408\u3002\u5b9e\u4f53\u7ec4\u5728\u6dfb\u52a0\u6216\u5220\u9664\u67d0\u4e2a\u5b9e\u4f53\u65f6\uff0c\u4f1a\u6d3e\u53d1\u4e8b\u4ef6\u3002"),Object(c.b)("h2",{id:"\u5b9e\u4f53\u6536\u96c6\u5668"},"\u5b9e\u4f53\u6536\u96c6\u5668"),Object(c.b)("p",null,"\u5b9e\u4f53\u6536\u96c6\u5668\u662f\u7528\u6765\u76d1\u542c\u5b9e\u4f53\u7ec4\u7684\u4e8b\u4ef6\uff0c\u5e76\u5c06\u5b9e\u4f53\u7ec4\u6dfb\u52a0\u6216\u5220\u9664\u7684\u5b9e\u4f53\u4e34\u65f6\u7f13\u5b58\u8d77\u6765\u3002"),Object(c.b)("h2",{id:"\u7cfb\u7edf"},"\u7cfb\u7edf"),Object(c.b)("p",null,"\u6bcf\u4e2a\u7cfb\u7edf\u90fd\u53ef\u4ee5\u5b9a\u4e49\u82e5\u5e72\u5b9e\u4f53\u5339\u914d\u5668\uff0c\u6bcf\u4e2a\u5b9e\u4f53\u5339\u914d\u5668\u4f1a\u521b\u5efa\u4e00\u4e2a\u5b9e\u4f53\u6536\u96c6\u5668\uff0c\u5e76\u4e14\u8be5\u5339\u914d\u5668\u4f1a\u5339\u914d\u5230\u4e00\u4e2a\u5b9e\u4f53\u7ec4\u3002\u5b9e\u4f53\u6536\u96c6\u5668\u4f1a\u6839\u636e\u5b9e\u4f53\u7ec4\u7684\u6539\u53d8\u60c5\u51b5\uff0c\u7f13\u5b58\u5b9e\u4f53\uff0c\u5e76\u5728\u7cfb\u7edf\u7684\u56fa\u5b9a\u751f\u547d\u5468\u671f\u6267\u884c\u7cfb\u7edf\u7684\u7279\u5b9a\u56de\u8c03\uff0c\u4ee5\u6b64\u6765\u5b9e\u73b0\u5904\u7406\u7cfb\u7edf\u7684\u884c\u4e3a\u548c\u903b\u8f91\u3002"),Object(c.b)("p",null,"\u6bd4\u5982\u53ef\u4ee5\u6709\u4e00\u4e2a\u8fd9\u6837\u7684\u7cfb\u7edf\u5b9e\u73b0\u5982\u4e0b\u884c\u4e3a\uff0c\u4e3a\u6bcf\u4e00\u4e2a\u6dfb\u52a0\u4e86 ",Object(c.b)("inlineCode",{parentName:"p"},"Transform")," \u548c ",Object(c.b)("inlineCode",{parentName:"p"},"MeshRenderer")," \u7ec4\u4ef6\u7684\u5b9e\u4f53\u6dfb\u52a0\u4e00\u4e2a ",Object(c.b)("inlineCode",{parentName:"p"},"MeshFilter")," \u7ec4\u4ef6\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"@system({allOfExecuteMode: ExecuteMode.Running})\nclass MySystem extends System {\n\n    protected getMatchers() {\n        return [\n            Mathcer.create(GameEntity, true, Transform, MeshRenderer),\n        ];\n    }\n\n    public onEntityAdded(entity:GameEntity, group:IGroup) {\n        if (entity.getComponent(MeshFilter) === null) {\n            entity.addComponent(MeshFilter);\n        }\n    }\n}\n\n// \u9884\u6ce8\u518c\u7cfb\u7edf\nSystemManager.preRegisterSystem(MySystem);\n")),Object(c.b)("p",null,"\u6216\u8005\u5b9e\u73b0\u4e00\u4e2a\u80fd\u8ba9\u6240\u6709\u6dfb\u52a0\u4e86 ",Object(c.b)("inlineCode",{parentName:"p"},"Transform")," \u548c ",Object(c.b)("inlineCode",{parentName:"p"},"Rotater")," \u7ec4\u4ef6\u7684\u5b9e\u4f53\u4e0d\u505c\u7684\u8f6c\u52a8\u7cfb\u7edf\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"@system({allOfExecuteMode: ExecuteMode.Running})\nclass MySystem extends System {\n\n    protected getMatchers() {\n        return [\n            Mathcer.create(GameEntity, true, Transform, Rotater),\n        ];\n    }\n\n    public onFrame(deltaTime: float) {\n        for (const entity of this.groups[0].entities as GameEntity[]) {\n            const { speed } = entity.getComponent(Rotater)!;\n            entity.transform.rotate(\n                speed.x * deltaTime,\n                speed.y * deltaTime,\n                speed.z * deltaTime\n            );\n        }\n    }\n}\n\n// \u9884\u6ce8\u518c\u7cfb\u7edf\nSystemManager.preRegisterSystem(MySystem);\n")),Object(c.b)("p",null,"\u4ece\u4e0a\u9762\u7684\u51e0\u4e2a\u4f8b\u5b50\u6211\u4eec\u53ef\u4ee5\u770b\u5230\uff0c\u6240\u6709\u7684\u884c\u4e3a\u90fd\u88ab\u5206\u79bb\u5230\u7cfb\u7edf\u4e2d\uff0c\u800c\u5b9e\u4f53\u548c\u5176\u7ec4\u4ef6\u53ea\u662f\u6570\u636e\u7684\u96c6\u5408\uff0c\u7ec4\u4ef6\u6216\u8bb8\u4f1a\u6709\u4e00\u4e9b\u81ea\u8eab\u5bf9\u6570\u636e\u8fdb\u884c\u7279\u5b9a\u89c4\u5219\u6539\u53d8\u7684\u65b9\u6cd5\uff0c\u4f46\u65e0\u8bba\u5982\u4f55\uff0c\u7ec4\u4ef6\u4e0d\u5e94\u8be5\u5177\u6709\u8d85\u51fa\u5904\u7406\u81ea\u8eab\u6570\u636e\u7684\u884c\u4e3a\u3002"),Object(c.b)("p",null,"\u6211\u4eec\u4f1a\u5728\u540e\u7eed\u5b8c\u5584\u66f4\u591a\u7684\u5b9e\u4f53\u7ec4\u4ef6\u7cfb\u7edf\u7684\u6587\u6863\u548c\u6559\u7a0b\uff0c\u8ba9\u60a8\u80fd\u5bf9\u4f7f\u7528\u8fd9\u79cd\u6a21\u5f0f\u6765\u5f00\u53d1\u6e38\u620f\u7684\u65b9\u5f0f\u6709\u66f4\u6e05\u6670\u3001\u66f4\u6df1\u5165\u7684\u4e86\u89e3\u3002"))}d.isMDXComponent=!0},199:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return O}));var r=t(0),a=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),b=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i({},n,{},e)),t},d=function(e){var n=b(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=b(t),m=r,u=d["".concat(o,".").concat(m)]||d[m]||s[m]||c;return t?a.a.createElement(u,i({ref:n},l,{components:t})):a.a.createElement(u,i({ref:n},l))}));function O(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,o=new Array(c);o[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var l=2;l<c;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);