(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{174:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"rightToc",(function(){return l})),a.d(t,"metadata",(function(){return b})),a.d(t,"default",(function(){return s}));var n=a(1),r=a(6),i=(a(0),a(209)),o={id:"53update",title:"5.3 API \u53d8\u66f4\u8bf4\u660e"},l=[{value:"\u79fb\u9664\u4ee5\u4e0b\u65b9\u6cd5\u53ca\u5c5e\u6027",id:"\u79fb\u9664\u4ee5\u4e0b\u65b9\u6cd5\u53ca\u5c5e\u6027",children:[{value:"dragonBones.Armature",id:"dragonbonesarmature",children:[]},{value:"dragonBones.Bone",id:"dragonbonesbone",children:[]},{value:"dragonBones.WorldClock",id:"dragonbonesworldclock",children:[]},{value:"dragonBones.DragonBonesData",id:"dragonbonesdragonbonesdata",children:[]},{value:"dragonBones.Animation",id:"dragonbonesanimation",children:[]},{value:"dragonBones.IEventDispatcher",id:"dragonbonesieventdispatcher",children:[]},{value:"dragonBones.DataParser",id:"dragonbonesdataparser",children:[]},{value:"dragonBones.BaseFactory",id:"dragonbonesbasefactory",children:[]},{value:"dragonBones.EgretTextureAtlasData",id:"dragonbonesegrettextureatlasdata",children:[]},{value:"dragonBones.EgretEvent",id:"dragonbonesegretevent",children:[]},{value:"dragonBones.EgretArmatureDisplay",id:"dragonbonesegretarmaturedisplay",children:[]},{value:"\u6570\u636e\u89e3\u6790",id:"\u6570\u636e\u89e3\u6790",children:[]},{value:"dragonBones.EgretFactory",id:"dragonbonesegretfactory",children:[]},{value:"Movie\u76f8\u5173",id:"movie\u76f8\u5173",children:[]}]},{value:"\u79fb\u9664\u4ee5\u4e0b\u7c7b",id:"\u79fb\u9664\u4ee5\u4e0b\u7c7b",children:[{value:"\u4ee5\u4e0b\u7c7b\u7edf\u4e00\u5e76\u5165\u5230\u975e\u6781\u901f\u683c\u5f0f\u7684\u7c7b\u5f53\u4e2d",id:"\u4ee5\u4e0b\u7c7b\u7edf\u4e00\u5e76\u5165\u5230\u975e\u6781\u901f\u683c\u5f0f\u7684\u7c7b\u5f53\u4e2d",children:[]},{value:"\u4ee5\u4e0b\u7c7b\u5e76\u5165egret.Event\u5f53\u4e2d",id:"\u4ee5\u4e0b\u7c7b\u5e76\u5165egretevent\u5f53\u4e2d",children:[]}]}],b={id:"dbLibs/53update",title:"5.3 API \u53d8\u66f4\u8bf4\u660e",description:"\u9f99\u9aa8\u4ece 5.2 \u5347\u7ea7\u52305.3 \u4e4b\u540e\uff0c\u79fb\u9664\u548c\u66f4\u65b0\u4e86\u90e8\u5206 api \uff0c\u4e0b\u9762\u662f\u8be6\u7ec6\u8bf4\u660e\uff1a\r",source:"@site/docs/dbLibs/53update.md",permalink:"/dragonbones/cn/docs/dbLibs/53update",sidebar:"someSidebar",previous:{title:"\u63d2\u4ef6\u5f00\u53d1\u89c4\u8303",permalink:"/dragonbones/cn/docs/dbPro/plugin/specification"},next:{title:"5.0 \u6570\u636e\u683c\u5f0f\u8bf4\u660e",permalink:"/dragonbones/cn/docs/dbLibs/5foramt"}},c={rightToc:l,metadata:b},p="wrapper";function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)(p,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u9f99\u9aa8\u4ece 5.2 \u5347\u7ea7\u52305.3 \u4e4b\u540e\uff0c\u79fb\u9664\u548c\u66f4\u65b0\u4e86\u90e8\u5206 api \uff0c\u4e0b\u9762\u662f\u8be6\u7ec6\u8bf4\u660e\uff1a"),Object(i.b)("h2",{id:"\u79fb\u9664\u4ee5\u4e0b\u65b9\u6cd5\u53ca\u5c5e\u6027"},"\u79fb\u9664\u4ee5\u4e0b\u65b9\u6cd5\u53ca\u5c5e\u6027"),Object(i.b)("h3",{id:"dragonbonesarmature"},"dragonBones.Armature"),Object(i.b)("p",null,"\u4e8b\u4ef6\u76f8\u5173\u65b9\u6cd5\u4eceArmature\u4e2d\u79fb\u9664\u3002\u9700\u8981\u901a\u8fc7\u4e8b\u4ef6\u6d3e\u53d1\u5668Armature.prototype.eventDispatcher\u83b7\u53d6\u65b9\u6cd5\u3002  "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("h4",Object(n.a)({parentName:"li"},{id:"haseventlistenertype-eventstringtype-boolean"}),"hasEventListener(type: EventStringType): boolean"),Object(i.b)("p",{parentName:"li"},"\u53c2\u8003 ",Object(i.b)("inlineCode",{parentName:"p"},"Armature.prototype.eventDispatcher")," , ",Object(i.b)("inlineCode",{parentName:"p"},"IEventDispatcher.prototype.hasDBEventListener"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h4",Object(n.a)({parentName:"li"},{id:"addeventlistenertype-eventstringtype-listener-function-target-any-void"}),"addEventListener(type: EventStringType, listener: Function, target: any): void"),Object(i.b)("p",{parentName:"li"},"\u53c2\u8003 ",Object(i.b)("inlineCode",{parentName:"p"},"Armature.prototype.eventDispatcher")," , ",Object(i.b)("inlineCode",{parentName:"p"},"IEventDispatcher.addDBEventListener"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h4",Object(n.a)({parentName:"li"},{id:"removeeventlistenertype-eventstringtype-listener-function-target-any-void"}),"removeEventListener(type: EventStringType, listener: Function, target: any): void"),Object(i.b)("p",{parentName:"li"},"\u53c2\u8003 ",Object(i.b)("inlineCode",{parentName:"p"},"Armature.prototype.eventDispatcher")," , ",Object(i.b)("inlineCode",{parentName:"p"},"IEventDispatcher.removeDBEventListener"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h4",Object(n.a)({parentName:"li"},{id:"enableanimationcacheframerate-number-void"}),"enableAnimationCache(frameRate: number): void"),Object(i.b)("p",{parentName:"li"},"\u53c2\u8003 ",Object(i.b)("inlineCode",{parentName:"p"},"Armature.prototype.cacheFrameRate"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h4",Object(n.a)({parentName:"li"},{id:"replacetexturetexture-any-void"}),"replaceTexture(texture: any): void"))),Object(i.b)("h3",{id:"dragonbonesbone"},"dragonBones.Bone"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("h4",Object(n.a)({parentName:"li"},{id:"getbones-arraybone"}),"getBones(): ",Object(i.b)("inlineCode",{parentName:"h4"},"Array<Bone>")),Object(i.b)("p",{parentName:"li"},"\u53c2\u8003 ",Object(i.b)("inlineCode",{parentName:"p"},"Armature.prototype.getBones(): Array<Bone>;"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h4",Object(n.a)({parentName:"li"},{id:"getslots-arrayslot"}),"getSlots(): ",Object(i.b)("inlineCode",{parentName:"h4"},"Array<Slot>")),Object(i.b)("p",{parentName:"li"},"\u53c2\u8003 ",Object(i.b)("inlineCode",{parentName:"p"},"Armature.prototype.getSlots(): Array<Slot>;"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h4",Object(n.a)({parentName:"li"},{id:"readonly-slot-slot--null"}),"readonly slot: Slot | null"),Object(i.b)("p",{parentName:"li"},"\u53c2\u8003 ",Object(i.b)("inlineCode",{parentName:"p"},"Armature.prototype.getSlots(): Array<Slot>;")))),Object(i.b)("h3",{id:"dragonbonesworldclock"},"dragonBones.WorldClock"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("h4",Object(n.a)({parentName:"li"},{id:"static-readonly-clock-worldclock"}),"static readonly clock: WorldClock"),"\u53c2\u8003 ",Object(i.b)("inlineCode",{parentName:"li"},"BaseFactory.clock: WorldClock;"))),Object(i.b)("h3",{id:"dragonbonesdragonbonesdata"},"dragonBones.DragonBonesData"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("h4",Object(n.a)({parentName:"li"},{id:"dispose-void"}),"dispose(): void;"),"\u53c2\u8003 ",Object(i.b)("inlineCode",{parentName:"li"},"BaseFactory.prototype.removeDragonBonesData(name: string, disposeData?: boolean): void;"))),Object(i.b)("h3",{id:"dragonbonesanimation"},"dragonBones.Animation"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("h4",Object(n.a)({parentName:"li"},{id:"gotoandplayanimationname-string-fadeintime-number-duration-number-playtimes-number-layer-number-group-string--null-fadeoutmode-animationfadeoutmode-pausefadeout-boolean-pausefadein-boolean-animationstate--null"}),"gotoAndPlay(animationName: string, fadeInTime?: number, duration?: number, playTimes?: number, layer?: number, group?: string | null, fadeOutMode?: AnimationFadeOutMode, pauseFadeOut?: boolean, pauseFadeIn?: boolean): AnimationState | null"),Object(i.b)("p",{parentName:"li"},"\u53c2\u8003 ",Object(i.b)("inlineCode",{parentName:"p"},"animation.play(animationName?: string | null, playTimes?: number): AnimationState | null"),Object(i.b)("br",{parentName:"p"}),"\n","\u4ee5\u53ca ",Object(i.b)("inlineCode",{parentName:"p"},"animation.fadeIn(animationName: string, fadeInTime?: number, playTimes?: number, layer?: number, group?: string | null, fadeOutMode?: AnimationFadeOutMode): AnimationState | null"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h4",Object(n.a)({parentName:"li"},{id:"gotoandstopanimationname-string-time-number-animationstate--null"}),"gotoAndStop(animationName: string, time?: number): AnimationState | null"),Object(i.b)("p",{parentName:"li"},"\u53c2\u8003 ",Object(i.b)("inlineCode",{parentName:"p"},"animation.gotoAndStopByTime(animationName: string, time?: number): AnimationState | null;"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h4",Object(n.a)({parentName:"li"},{id:"readonly-animationlist-arraystring"}),"readonly animationList: ",Object(i.b)("inlineCode",{parentName:"h4"},"Array<string>"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h4",Object(n.a)({parentName:"li"},{id:"readonly-animationdatalist-arrayanimationdata"}),"readonly animationDataList: ",Object(i.b)("inlineCode",{parentName:"h4"},"Array<AnimationData>")))),Object(i.b)("h3",{id:"dragonbonesieventdispatcher"},"dragonBones.IEventDispatcher"),Object(i.b)("p",null,"\u4f7f\u7528\u65b0\u7684\u4e8b\u4ef6\u63a5\u53e3\uff0c\u65e7\u7684\u4e8b\u4ef6\u63a5\u53e3\u5df2\u5e9f\u5f03\u79fb\u9664\u3002"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("h4",Object(n.a)({parentName:"li"},{id:"haseventtype-eventstringtype-boolean"}),"hasEvent(type: EventStringType): boolean"),Object(i.b)("p",{parentName:"li"},"\u53c2\u8003 ",Object(i.b)("inlineCode",{parentName:"p"},"IEventDispatcher.prototype.hasDBEventListener(type: EventStringType): boolean"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h4",Object(n.a)({parentName:"li"},{id:"addeventtype-eventstringtype-listener-function-thisobject-any-void"}),"addEvent(type: EventStringType, listener: Function, thisObject: any): void"),Object(i.b)("p",{parentName:"li"},"\u53c2\u8003 ",Object(i.b)("inlineCode",{parentName:"p"},"IEventDispatcher.prototype.addDBEventListener(type: EventStringType, listener: Function, thisObject: any): void"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h4",Object(n.a)({parentName:"li"},{id:"removeeventtype-eventstringtype-listener-function-thisobject-any-void"}),"removeEvent(type: EventStringType, listener: Function, thisObject: any): void"),Object(i.b)("p",{parentName:"li"},"\u53c2\u8003 ",Object(i.b)("inlineCode",{parentName:"p"},"IEventDispatcher.prototype.removeDBEventListener(type: EventStringType, listener: Function, thisObject: any): void")))),Object(i.b)("h3",{id:"dragonbonesdataparser"},"dragonBones.DataParser"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("h4",Object(n.a)({parentName:"li"},{id:"static-parsedragonbonesdatarawdata-any-dragonbonesdata--null"}),"static parseDragonBonesData(rawData: any): DragonBonesData | null"),Object(i.b)("p",{parentName:"li"},"\u53c2\u8003 ",Object(i.b)("inlineCode",{parentName:"p"},"BaseFactory.prototype.parseDragonBonesData(rawData: any, name?: string | null, scale?: number): DragonBonesData | null"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h4",Object(n.a)({parentName:"li"},{id:"static-parsetextureatlasdatarawdata-any-scale-number-any"}),"static parseTextureAtlasData(rawData: any, scale?: number): any"),Object(i.b)("p",{parentName:"li"},"\u53c2\u8003 ",Object(i.b)("inlineCode",{parentName:"p"},"BaseFactory.prototype.parseTextureAtlasData(rawData: any, textureAtlas: any, name?: string | null, scale?: number): TextureAtlasData")))),Object(i.b)("h3",{id:"dragonbonesbasefactory"},"dragonBones.BaseFactory"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("h4",Object(n.a)({parentName:"li"},{id:"changeskinarmature-armature-skin-skindata-exclude-arraystring--null-boolean"}),"changeSkin(armature: Armature, skin: SkinData, exclude?: ",Object(i.b)("inlineCode",{parentName:"h4"},"Array<string>")," | null): boolean"),Object(i.b)("p",{parentName:"li"},"\u53c2\u8003 ",Object(i.b)("inlineCode",{parentName:"p"},"BaseFactory.prototype.replaceSkin(armature: Armature, skin: SkinData, isOverride?: boolean, exclude?: Array<string> | null): boolean"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h4",Object(n.a)({parentName:"li"},{id:"copyanimationstoarmaturetoarmature-armature-fromarmatrename-string-fromskinname-string-fromdragonbonesdataname-string-replaceoriginalanimation-boolean-boolean"}),"copyAnimationsToArmature(toArmature: Armature, fromArmatreName: string, fromSkinName?: string, fromDragonBonesDataName?: string, replaceOriginalAnimation?: boolean): boolean"),Object(i.b)("p",{parentName:"li"},"\u53c2\u8003 ",Object(i.b)("inlineCode",{parentName:"p"},"BaseFactory.prototype.replaceAnimation(armature: Armature, armatureData: ArmatureData, isOverride?: boolean): boolean")))),Object(i.b)("h3",{id:"dragonbonesegrettextureatlasdata"},"dragonBones.EgretTextureAtlasData"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("h4",Object(n.a)({parentName:"li"},{id:"dispose-void-1"}),"dispose(): void"),Object(i.b)("p",{parentName:"li"},"\u53c2\u8003 ",Object(i.b)("inlineCode",{parentName:"p"},"BaseFactory.prototype.removeTextureAtlasData(name: string, disposeData?: boolean): void;"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h4",Object(n.a)({parentName:"li"},{id:"readonly-texture-egrettexture--null"}),"readonly texture: egret.Texture | null"),Object(i.b)("p",{parentName:"li"},"\u53c2\u8003 ",Object(i.b)("inlineCode",{parentName:"p"},"EgretTextureAtlasData.prototype.renderTexture: egret.Texture | null;")))),Object(i.b)("h3",{id:"dragonbonesegretevent"},"dragonBones.EgretEvent"),Object(i.b)("p",null,"Egret\u4e8b\u4ef6\u4e2d\u5df2\u7ecf\u5305\u542b\u6709\u4e8b\u4ef6\u4f53\u5bf9\u8c61",Object(i.b)("inlineCode",{parentName:"p"},"EgretEvent.prototype.eventObject: EventObject"),"\u3002\u4e8b\u4ef6\u4f53\u5bf9\u8c61\u4e2d\u6709\u52a8\u753b\u72b6\u6001\u540d\u79f0 name, \u662f\u5426\u64ad\u653e\u5b8c\u6bd5 isCompleted\uff0c\u5df2\u7ecf\u5faa\u73af\u64ad\u653e\u7684\u6b21\u6570 currentPlayTimes \u7b49\u72b6\u6001\u5c5e\u6027\uff0c\u56e0\u6b64\u4e0d\u518d\u5355\u72ec\u66b4\u9732\u5728\u4e8b\u4ef6 Event \u5f53\u4e2d\u3002"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("h4",Object(n.a)({parentName:"li"},{id:"readonly-animationstate-animationstate--null"}),"readonly animationState: AnimationState | null;"),Object(i.b)("p",{parentName:"li"},"\u53c2\u8003 ",Object(i.b)("inlineCode",{parentName:"p"},"EventObject.prototype.animationState: AnimationState;"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h4",Object(n.a)({parentName:"li"},{id:"readonly-animationname-string"}),"readonly animationName: string"),Object(i.b)("p",{parentName:"li"},"\u53c2\u8003 ",Object(i.b)("inlineCode",{parentName:"p"},"EventObject.prototype.animationState: AnimationState;"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h4",Object(n.a)({parentName:"li"},{id:"readonly-armature-armature"}),"readonly armature: Armature"),Object(i.b)("p",{parentName:"li"},"\u53c2\u8003 ",Object(i.b)("inlineCode",{parentName:"p"},"EventObject.prototype.armature: Armature;"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h4",Object(n.a)({parentName:"li"},{id:"readonly-bone-bone--null"}),"readonly bone: Bone | null"),Object(i.b)("p",{parentName:"li"},"\u53c2\u8003 ",Object(i.b)("inlineCode",{parentName:"p"},"EventObject.prototype.bone: Bone | null;"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h4",Object(n.a)({parentName:"li"},{id:"readonly-slot-slot--null-1"}),"readonly slot: Slot | null"),Object(i.b)("p",{parentName:"li"},"\u53c2\u8003 ",Object(i.b)("inlineCode",{parentName:"p"},"EventObject.prototype.slot: Slot | null;"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h4",Object(n.a)({parentName:"li"},{id:"readonly-framelabel-string"}),"readonly frameLabel: string"),Object(i.b)("p",{parentName:"li"},"\u53c2\u8003 ",Object(i.b)("inlineCode",{parentName:"p"},"EventObject.prototype.name: string;"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h4",Object(n.a)({parentName:"li"},{id:"readonly-sound-string"}),"readonly sound: string;"),Object(i.b)("p",{parentName:"li"},"\u53c2\u8003 ",Object(i.b)("inlineCode",{parentName:"p"},"EventObject.prototype.name: string;"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h4",Object(n.a)({parentName:"li"},{id:"readonly-movementid-string"}),"readonly movementID: string;"),Object(i.b)("p",{parentName:"li"},"\u53c2\u8003 ",Object(i.b)("inlineCode",{parentName:"p"},"EventObject.prototype.animationState: AnimationState;")))),Object(i.b)("h4",{id:"\u6240\u6709\u7684\u9759\u6001\u4e8b\u4ef6\u7684\u540d\u79f0\uff0c\u73b0\u5728\u5f52\u5c5e\u4e8e\u7c7b-eventobject\u3002"},"\u6240\u6709\u7684\u9759\u6001\u4e8b\u4ef6\u7684\u540d\u79f0\uff0c\u73b0\u5728\u5f52\u5c5e\u4e8e\u7c7b ",Object(i.b)("inlineCode",{parentName:"h4"},"EventObject"),"\u3002"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("h4",Object(n.a)({parentName:"li"},{id:"static-start-string"}),"static START: string;")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h4",Object(n.a)({parentName:"li"},{id:"static-loop_complete-string"}),"static LOOP_COMPLETE: string;")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h4",Object(n.a)({parentName:"li"},{id:"static-complete-string"}),"static COMPLETE: string;")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h4",Object(n.a)({parentName:"li"},{id:"static-fade_in-string"}),"static FADE_IN: string;")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h4",Object(n.a)({parentName:"li"},{id:"static-fade_in_complete-string"}),"static FADE_IN_COMPLETE: string;")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h4",Object(n.a)({parentName:"li"},{id:"static-fade_out-string"}),"static FADE_OUT: string;")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h4",Object(n.a)({parentName:"li"},{id:"static-fade_out_complete-string"}),"static FADE_OUT_COMPLETE: string;")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h4",Object(n.a)({parentName:"li"},{id:"static-frame_event-string"}),"static FRAME_EVENT: string;")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h4",Object(n.a)({parentName:"li"},{id:"static-sound_event-string"}),"static SOUND_EVENT: string;")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h4",Object(n.a)({parentName:"li"},{id:"static-animation_frame_event-string"}),"static ANIMATION_FRAME_EVENT: string;")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h4",Object(n.a)({parentName:"li"},{id:"static-bone_frame_event-string"}),"static BONE_FRAME_EVENT: string;")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h4",Object(n.a)({parentName:"li"},{id:"static-movement_frame_event-string"}),"static MOVEMENT_FRAME_EVENT: string;")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h4",Object(n.a)({parentName:"li"},{id:"static-sound-string"}),"static SOUND: string;"))),Object(i.b)("h3",{id:"dragonbonesegretarmaturedisplay"},"dragonBones.EgretArmatureDisplay"),Object(i.b)("p",null,"\u7ee7\u627f\u81ea ",Object(i.b)("inlineCode",{parentName:"p"},"EgretArmatureDisplay")," "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("h4",Object(n.a)({parentName:"li"},{id:"advancetimebyselfon-boolean-void"}),"advanceTimeBySelf(on: boolean): void"),"\u53c2\u8003 ",Object(i.b)("inlineCode",{parentName:"li"},"BaseFactory.prototype.clock"))),Object(i.b)("h3",{id:"\u6570\u636e\u89e3\u6790"},"\u6570\u636e\u89e3\u6790"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("h4",Object(n.a)({parentName:"li"},{id:"class-egrettextureatlas"}),"class EgretTextureAtlas;"),Object(i.b)("p",{parentName:"li"},"\u53c2\u8003 ",Object(i.b)("inlineCode",{parentName:"p"},"BaseFactory.prototype.parseTextureAtlasData(rawData: any, textureAtlas: any, name?: string | null, scale?: number): TextureAtlasData;"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h3",Object(n.a)({parentName:"li"},{id:"class-egretsheetatlas"}),"class EgretSheetAtlas"),Object(i.b)("p",{parentName:"li"},"\u53c2\u8003 ",Object(i.b)("inlineCode",{parentName:"p"},"BaseFactory.prototype.parseTextureAtlasData(rawData: any, textureAtlas: any, name?: string | null, scale?: number): TextureAtlasData;"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h3",Object(n.a)({parentName:"li"},{id:"class-soundeventmanager"}),"class SoundEventManager"),Object(i.b)("p",{parentName:"li"},"\u53c2\u8003 ",Object(i.b)("inlineCode",{parentName:"p"},"EgretFactory.prototype.soundEventManager: EgretArmatureDisplay;"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h3",Object(n.a)({parentName:"li"},{id:"class-animationcachemanager"}),"class AnimationCacheManager"),Object(i.b)("p",{parentName:"li"},"\u53c2\u8003 ",Object(i.b)("inlineCode",{parentName:"p"},"Armature.prototype.cacheFrameRate")))),Object(i.b)("h3",{id:"dragonbonesegretfactory"},"dragonBones.EgretFactory"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("h4",Object(n.a)({parentName:"li"},{id:"static-readonly-clock-worldclock-1"}),"static readonly clock: WorldClock"),Object(i.b)("p",{parentName:"li"},"\u53c2\u8003 ",Object(i.b)("inlineCode",{parentName:"p"},"BaseFactory.clock: WorldClock;"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h4",Object(n.a)({parentName:"li"},{id:"addskeletondatadragonbonesdata-dragonbonesdata-dragonbonesname-string--null-void"}),"addSkeletonData(dragonBonesData: DragonBonesData, dragonBonesName?: string | null): void"),Object(i.b)("p",{parentName:"li"},"\u53c2\u8003 ",Object(i.b)("inlineCode",{parentName:"p"},"BaseFactory.prototype.addDragonBonesData(data: DragonBonesData, name?: string | null): void;"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h4",Object(n.a)({parentName:"li"},{id:"getskeletondatadragonbonesname-string-dragonbonesdata--null"}),"getSkeletonData(dragonBonesName: string): DragonBonesData | null"),Object(i.b)("p",{parentName:"li"},"\u53c2\u8003 ",Object(i.b)("inlineCode",{parentName:"p"},"BaseFactory.prototype.getDragonBonesData(name: string): DragonBonesData | null;"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h4",Object(n.a)({parentName:"li"},{id:"removeskeletondatadragonbonesname-string-void"}),"removeSkeletonData(dragonBonesName: string): void"),Object(i.b)("p",{parentName:"li"},"\u53c2\u8003 ",Object(i.b)("inlineCode",{parentName:"p"},"BaseFactory.prototype.removeDragonBonesData(name: string, disposeData?: boolean): void;"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h4",Object(n.a)({parentName:"li"},{id:"addtextureatlastextureatlasdata-textureatlasdata-dragonbonesname-string--null-void"}),"addTextureAtlas(textureAtlasData: TextureAtlasData, dragonBonesName?: string | null): void"),Object(i.b)("p",{parentName:"li"},"\u53c2\u8003 ",Object(i.b)("inlineCode",{parentName:"p"},"BaseFactory.prototype.addTextureAtlasData(data: TextureAtlasData, name?: string | null): void;"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h4",Object(n.a)({parentName:"li"},{id:"gettextureatlasdragonbonesname-string-textureatlasdata--null"}),"getTextureAtlas(dragonBonesName: string): TextureAtlasData[] | null"),Object(i.b)("p",{parentName:"li"},"\u53c2\u8003 ",Object(i.b)("inlineCode",{parentName:"p"},"BaseFactory.prototype.getTextureAtlasData(name: string): Array<TextureAtlasData> | null;"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h4",Object(n.a)({parentName:"li"},{id:"removetextureatlasdragonbonesname-string-void"}),"removeTextureAtlas(dragonBonesName: string): void"),Object(i.b)("p",{parentName:"li"},"\u53c2\u8003 ",Object(i.b)("inlineCode",{parentName:"p"},"BaseFactory.prototype.removeTextureAtlasData(name: string, disposeData?: boolean): void;"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h4",Object(n.a)({parentName:"li"},{id:"buildfastarmaturearmaturename-string-dragonbonesname-string-skinname-string-fastarmature--null"}),"buildFastArmature(armatureName: string, dragonBonesName?: string, skinName?: string): FastArmature | null"),Object(i.b)("p",{parentName:"li"},"\u53c2\u8003 ",Object(i.b)("inlineCode",{parentName:"p"},"BaseFactory.prototype.buildArmature(armatureName: string, dragonBonesName?: string, skinName?: string, textureAtlasName?: string): Armature | null;"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h4",Object(n.a)({parentName:"li"},{id:"dispose-void-2"}),"dispose(): void;"),Object(i.b)("p",{parentName:"li"},"\u53c2\u8003 ",Object(i.b)("inlineCode",{parentName:"p"},"BaseFactory.prototype.clear(disposeData?: boolean): void;")))),Object(i.b)("h3",{id:"movie\u76f8\u5173"},"Movie\u76f8\u5173"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("h4",Object(n.a)({parentName:"li"},{id:"dragonboneshasmoviegroupgroupname-string-boolean"}),"dragonBones.hasMovieGroup(groupName: string): boolean")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h4",Object(n.a)({parentName:"li"},{id:"dragonbonesaddmoviegroupgroupdata-arraybuffer-textureatlas-egrettexture--egrettexture-groupname-string--null-void"}),"dragonBones.addMovieGroup(groupData: ArrayBuffer, textureAtlas: egret.Texture | egret.Texture[], groupName?: string | null): void")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h4",Object(n.a)({parentName:"li"},{id:"dragonbonesremovemoviegroupgroupname-string-void"}),"dragonBones.removeMovieGroup(groupName: string): void")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h4",Object(n.a)({parentName:"li"},{id:"dragonbonesremoveallmoviegroup-void"}),"dragonBones.removeAllMovieGroup(): void")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h4",Object(n.a)({parentName:"li"},{id:"dragonbonesbuildmoviemoviename-string-groupname-string--null-movie--null"}),"dragonBones.buildMovie(movieName: string, groupName?: string | null): Movie | null;")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h4",Object(n.a)({parentName:"li"},{id:"dragonbonesgetmovienamesgroupname-string-string--null"}),"dragonBones.getMovieNames(groupName: string): string[] | null;")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h4",Object(n.a)({parentName:"li"},{id:"dragonbonesclass-movieevent"}),"dragonBones.class MovieEvent")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("h4",Object(n.a)({parentName:"li"},{id:"dragonbonesclass-movie"}),"dragonBones.class Movie"))),Object(i.b)("h2",{id:"\u79fb\u9664\u4ee5\u4e0b\u7c7b"},"\u79fb\u9664\u4ee5\u4e0b\u7c7b"),Object(i.b)("h3",{id:"\u4ee5\u4e0b\u7c7b\u7edf\u4e00\u5e76\u5165\u5230\u975e\u6781\u901f\u683c\u5f0f\u7684\u7c7b\u5f53\u4e2d"},"\u4ee5\u4e0b\u7c7b\u7edf\u4e00\u5e76\u5165\u5230\u975e\u6781\u901f\u683c\u5f0f\u7684\u7c7b\u5f53\u4e2d"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"type FastArmature;"),Object(i.b)("li",{parentName:"ul"},"type FastBone;"),Object(i.b)("li",{parentName:"ul"},"type FastSlot;"),Object(i.b)("li",{parentName:"ul"},"type FastAnimation;"),Object(i.b)("li",{parentName:"ul"},"type FastAnimationState;")),Object(i.b)("h3",{id:"\u4ee5\u4e0b\u7c7b\u5e76\u5165egretevent\u5f53\u4e2d"},"\u4ee5\u4e0b\u7c7b\u5e76\u5165egret.Event\u5f53\u4e2d"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"class Event;"),Object(i.b)("li",{parentName:"ul"},"class ArmatureEvent;"),Object(i.b)("li",{parentName:"ul"},"class AnimationEvent;"),Object(i.b)("li",{parentName:"ul"},"class FrameEvent;"),Object(i.b)("li",{parentName:"ul"},"class SoundEvent;")))}s.isMDXComponent=!0},209:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},s=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),s=p(a),m=n,u=s["".concat(o,".").concat(m)]||s[m]||d[m]||i;return a?r.a.createElement(u,l({ref:t},c,{components:a})):r.a.createElement(u,l({ref:t},c))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l[m]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);