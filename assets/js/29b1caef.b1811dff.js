"use strict";(self.webpackChunkdoc_forge=self.webpackChunkdoc_forge||[]).push([[5862],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),m=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=m(e.components);return i.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=m(n),k=a,c=d["".concat(p,".").concat(k)]||d[k]||s[k]||l;return n?i.createElement(c,r(r({ref:t},u),{},{components:n})):i.createElement(c,r({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var m=2;m<l;m++)r[m]=n[m];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80864:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var i=n(87462),a=(n(67294),n(3905));const l={slug:"forge-118-380",title:"Forge 1.18 38.0",authors:["mysterious_dev"],tags:["forge","mise \xe0 jour",1.18]},r=void 0,o={permalink:"/news/forge-118-380",editUrl:"https://github.com/Les-Moddeurs-Francais/Documentation-Forge/edit/master/news/2021-12-01-forge-118-380.md",source:"@site/news/2021-12-01-forge-118-380.md",title:"Forge 1.18 38.0",description:"Seulement quelques heures apr\xe8s la sortie de la version 1.18, Forge 1.18 38.0 est sortie et elle apporte quelques changements (peu voir aucun ajout).",date:"2021-12-01T00:00:00.000Z",formattedDate:"1 d\xe9cembre 2021",tags:[{label:"forge",permalink:"/news/tags/forge"},{label:"mise \xe0 jour",permalink:"/news/tags/mise-a-jour"},{label:"1.18",permalink:"/news/tags/1-18"}],hasTruncateMarker:!0,authors:[{name:"Mysterious_Dev",title:"Admin de Les Moddeurs Francais",url:"https://github.com/Mysterious-Dev",email:"mysterious_dev@lesmoddeursfrancais.fr",imageURL:"https://github.com/Mysterious-Dev.png",key:"mysterious_dev"}],frontMatter:{slug:"forge-118-380",title:"Forge 1.18 38.0",authors:["mysterious_dev"],tags:["forge","mise \xe0 jour","1.18"]},prevItem:{title:"Forge 1.18.2 40.0",permalink:"/news/forge-1182-400"},nextItem:{title:"Forge 1.17.1 37.1",permalink:"/news/forge-1171-371"}},p={authorsImageUrls:[void 0]},m=[{value:"Changements",id:"changements",level:2},{value:"Suppressions",id:"suppressions",level:2}],u={toc:m};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Seulement quelques heures apr\xe8s la sortie de la version 1.18, Forge 1.18 38.0 est sortie et elle apporte quelques changements (peu voir aucun ajout)."),(0,a.kt)("p",null,"Lien de l'annonce de Forge : ",(0,a.kt)("a",{parentName:"p",href:"https://forums.minecraftforge.net/topic/106322-forge-380-minecraft-118/"},"https://forums.minecraftforge.net/topic/106322-forge-380-minecraft-118/")),(0,a.kt)("h2",{id:"changements"},"Changements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"99% du paquet fmllegacy. La plupart des classes ont simplement \xe9t\xe9 d\xe9plac\xe9es de x.y.fmllegacy.z vers x.y.z"),(0,a.kt)("li",{parentName:"ul"},"Toutes les instances de ",(0,a.kt)("inlineCode",{parentName:"li"},"Gui")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"Screen")," (",(0,a.kt)("inlineCode",{parentName:"li"},"GuiOpenEvent")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"ScreenOpenEvent"),", par exemple)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"GuiScreenEvent")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"ScreenEvent"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"GuiOverlayDebugForge")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"ForgeDebugScreenOverlay")),(0,a.kt)("li",{parentName:"ul"},"Toutes les instances de ",(0,a.kt)("inlineCode",{parentName:"li"},"GameMode")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"GameType")," (",(0,a.kt)("inlineCode",{parentName:"li"},"ClientPlayerChangeGameModeEvent")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"ClientPlayerChangedGameTypeEvent"),", par exemple)"),(0,a.kt)("li",{parentName:"ul"},"Toutes les instances de ",(0,a.kt)("inlineCode",{parentName:"li"},"MatrixStack")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"PoseStack")," (",(0,a.kt)("inlineCode",{parentName:"li"},"DrawSelectionEvent#matrix"),"-> ",(0,a.kt)("inlineCode",{parentName:"li"},"DrawSelectionEvent#poseStack"),", par exemple)"),(0,a.kt)("li",{parentName:"ul"},"Toutes les instances de ",(0,a.kt)("inlineCode",{parentName:"li"},"KeyBinding")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"KeyMapping")," (",(0,a.kt)("inlineCode",{parentName:"li"},"ClickInputEvent#keyBinding")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"ClickInputEvent#keyMapping"),", par exemple)"),(0,a.kt)("li",{parentName:"ul"},"Toutes les instances de ",(0,a.kt)("inlineCode",{parentName:"li"},"World")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"Level")),(0,a.kt)("li",{parentName:"ul"},"Toutes les instances de ",(0,a.kt)("inlineCode",{parentName:"li"},"WorldType")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"WorldPreset")," (",(0,a.kt)("inlineCode",{parentName:"li"},"ForgeHooksClient#getDefaultWorldType")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"ForgeHooksClient#getDefaultWorldPreset"),", par exemple"),(0,a.kt)("li",{parentName:"ul"},"Toutes les instances de ",(0,a.kt)("inlineCode",{parentName:"li"},"NBT")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"Tag")," (",(0,a.kt)("inlineCode",{parentName:"li"},"BlockSnapshot#getNbt")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"BlockSnapshot#getTag"),", par exemple)"),(0,a.kt)("li",{parentName:"ul"},"Toutes les instances de ",(0,a.kt)("inlineCode",{parentName:"li"},"Container")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"Menu")," (",(0,a.kt)("inlineCode",{parentName:"li"},"IForgeContainerType")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"IForgeMenuType"),", par exemple)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PlaySoundEvent#sound")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"PlaySoundEvent#originalSound")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PlaySoundEvent#result")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"PlaySoundEvent#sound")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SoundEvent#manager")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"SoundEvent#engine")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SoundEvent#soundSourceEvent#source")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"SoundEvent#soundSourceEvent#canal")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"FOVUpdateEvent")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"FOVModifierEvent")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"EntityViewRenderEvent#FOVModiier")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"EntityViewRenderEvent#FieldOfView")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"InputUpdateEvent")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"MovementInputUpdateEvent")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"InitScreenEvent#{...Widget...}")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"{...Listener...}")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ForgeItemTagsProvider#func_240521_a_Colored")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"copyColored")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"MobSpawnInfoBuilder")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"MobSpawnSettingBuilder")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"BasicTrade")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"BasicItemListing")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ModelLoader")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"ForgeModelBakery")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ForgeWorldTypeScreens")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"ForgeWorldPresetEditors")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"StackList")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"MultItemValue"))),(0,a.kt)("h2",{id:"suppressions"},"Suppressions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Toute l'API d'animation"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"IForgeTextureAtlasSprite")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"IForgeItem#showDurabiityBar"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"IForgeItem#getDurabilityForDisplay")," et ",(0,a.kt)("inlineCode",{parentName:"li"},"IForgeItem#getRGBDurabilityForDisplay")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ForgeHooksClient#refreshResources")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ModelBuilder#gui3d")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"BlockInfo#updateShift"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"BlockInfo#getShx"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"BlockInfo#getShy")," et ",(0,a.kt)("inlineCode",{parentName:"li"},"BlockInfo#getShz")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CapabilityInject")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CapabilityManager#register")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ConditionalAdvancement#processConditions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"IForgeItem#isShield")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"IForgeStructureFeature#getDefaultSpawnList")," et ",(0,a.kt)("inlineCode",{parentName:"li"},"IForgeStructureFeature#getDefaultCreatureSpawnList")),(0,a.kt)("li",{parentName:"ul"},"Classe des constantes de Forge"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"VanillaResourceType")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ForgeHooksClient#worldRenderPass")," (+ accesseur)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ForgeHooksClient#preDraw"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"ForgeHooksClient#postDraw")," et ",(0,a.kt)("inlineCode",{parentName:"li"},"ForgeHooksClient#getColorIndex")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ScrollPanel#drawBackground")," (+ accesseur)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Screen#RenderToolTip")," et ",(0,a.kt)("inlineCode",{parentName:"li"},"Screen#RenderComponentToolTip")," (+ accesseur)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ResourceManager#getResourceType")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"LootPool#bonusRolls")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ForgeConfig#selectiveResourceReload")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PotionEvent#PotionAddedEvent")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ClientHooks")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ModFileResourcePack")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ResourcePackLoader#getResourcePackFor")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ResourcePackLoader#IPackInfoFinder")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ServerLifecycleHooks#buildPackFinder")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"IResourceType")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ReloadRequirements")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CommandSetDimension"))))}s.isMDXComponent=!0}}]);