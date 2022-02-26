"use strict";(self.webpackChunkdoc_forge=self.webpackChunkdoc_forge||[]).push([[1127],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6605:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return u},toc:function(){return p},default:function(){return m}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={sidebar_position:1,title:"Tiers",description:"Comment d\xe9finir le tier n\xe9cessaire d'outil pour r\xe9colter un bloc ?",tags:["blocs","tools"]},s=void 0,c={unversionedId:"blocs/tools/tiers",id:"blocs/tools/tiers",title:"Tiers",description:"Comment d\xe9finir le tier n\xe9cessaire d'outil pour r\xe9colter un bloc ?",source:"@site/docs/blocs/tools/tiers.md",sourceDirName:"blocs/tools",slug:"/blocs/tools/tiers",permalink:"/docs/blocs/tools/tiers",editUrl:"https://github.com/Les-Moddeurs-Francais/Forge-Doc/edit/master/docs/blocs/tools/tiers.md",tags:[{label:"blocs",permalink:"/docs/tags/blocs"},{label:"tools",permalink:"/docs/tags/tools"}],version:"current",lastUpdatedBy:"Mysterious_Dev",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Tiers",description:"Comment d\xe9finir le tier n\xe9cessaire d'outil pour r\xe9colter un bloc ?",tags:["blocs","tools"]},sidebar:"tutorialSidebar",previous:{title:"Outils",permalink:"/docs/category/blocs/tools"},next:{title:"Types",permalink:"/docs/blocs/tools/types"}},u={},p=[{value:"Tiers de base",id:"tiers-de-base",level:2},{value:"Tiers Customs",id:"tiers-customs",level:2}],d={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Depuis la 1.17, le ",(0,o.kt)("em",{parentName:"p"},"tier")," pour un outil n\xe9cessaire \xe0 la r\xe9colte d'un bloc est d\xe9fini par un tag contenant ledit bloc."),(0,o.kt)("h2",{id:"tiers-de-base"},"Tiers de base"),(0,o.kt)("p",null,"Si vous souhaitez que votre bloc soit r\xe9coltable avec n'importe quel ",(0,o.kt)("em",{parentName:"p"},"tier")," d'outil, il n'est pas n\xe9cessaire de l'ajouter dans un tag. Dans le cas contraire il faudra s'assurer que le bloc ait la ",(0,o.kt)("a",{parentName:"p",href:"../properties"},"propri\xe9t\xe9")," ",(0,o.kt)("inlineCode",{parentName:"p"},"requiresToolForDrops()")," de d\xe9finie et ajouter celui-ci au(x) tag(s) appropri\xe9(s) (contenu(s) dans le dossier ",(0,o.kt)("inlineCode",{parentName:"p"},"data/minecraft/tags/blocks")," ou ",(0,o.kt)("inlineCode",{parentName:"p"},"data/forge/tags/blocks")," selon les cas) parmi ceux-ci : "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"forge:needs_wood_tool")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"forge:needs_gold_tool")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"minecraft:needs_stone_tool")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"minecraft:needs_iron_tool")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"minecraft:needs_diamond_tool")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"forge:needs_netherite_tool"))),(0,o.kt)("h2",{id:"tiers-customs"},"Tiers Customs"),(0,o.kt)("p",null,"Malgr\xe9 tout, il est aussi possible de cr\xe9er son propre ",(0,o.kt)("em",{parentName:"p"},"tier")," d'outil. Pour cela il nous faudra cr\xe9er un nouveau tag qui contiendra les blocs cassables \xe0 partir de ce ",(0,o.kt)("em",{parentName:"p"},"tier"),", mais aussi l'enregistrer."),(0,o.kt)("p",null,"Pour cr\xe9er le tag, rien de plus simple, il vous faut ajouter cette ligne"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public static final Tag.Named<Block> MON_TIER_TAG = BlockTags.createOptional(new ResourceLocation("modid", "mon_tier_tag"));\n')),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Les ID's et noms de variable peuvent \xeatre remplac\xe9s \xe0 votre guise."))),(0,o.kt)("p",null,"Apr\xe8s \xe7a il faut que l'on enregistre le ",(0,o.kt)("em",{parentName:"p"},"tier")," pour que le jeu le prenne en compte. Pour cela ajoutez cette ligne :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public static final Tier MON_TIER = TierSortingRegistry.registerTier(\n            new ForgeTier(5, 5000, 10, 100, 0, MON_TIER_TAG, () -> Ingredient.of(Items.OBSIDIAN)),\n            new ResourceLocation("modid", "mon_tier"),\n            List.of(Tiers.DIAMOND), List.of());\n')),(0,o.kt)("p",null,"Ici le premier param\xe8tre correspond \xe0 la configuration du ",(0,o.kt)("em",{parentName:"p"},"tier")," (explication disponible ci-dessous), le deuxi\xe8me lui correspond \xe0 l'ID du ",(0,o.kt)("em",{parentName:"p"},"tier"),", et les 2 derniers correspondent au placement du ",(0,o.kt)("em",{parentName:"p"},"tier")," par rapport aux autres (sup\xe9rieur et inf\xe9rieur \xe0..., dans ce cas pr\xe9sent, il se placera comme sup\xe9rieur au diamant et ne sera inf\xe9rieur \xe0 aucun ",(0,o.kt)("em",{parentName:"p"},"tier"),")."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Explication de la classe ForgeTier"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"new ForgeTier(5, 5000, 10, 100, 0, MON_TIER_TAG, () -> Ingredient.of(Items.OBSIDIAN))\n")),(0,o.kt)("p",null,"Ici le premier param\xe8tre correspond au niveau du ",(0,o.kt)("em",{parentName:"p"},"tier")," (hi\xe9rarchie entre tous malgr\xe9 le fait que ce syst\xe8me soit d\xe9pr\xe9ci\xe9 depuis la version 37.0.31 de Forge), le second correspond quant \xe0 lui au nombre d'utilisations maximum (cela peut \xeatre recalcul\xe9 selon l'item concern\xe9), le troisi\xe8me \xe0 la rapidit\xe9 de l'item poss\xe9dant ce ",(0,o.kt)("em",{parentName:"p"},"tier"),", le quatri\xe8me au nombre de d\xe9g\xe2ts, le cinqui\xe8me \xe0 la valeur d'enchantement (par exemple les outils en or s'enchante plus facilement que ceux en fer) et le sixi\xe8me correspond \xe0 l'item n\xe9cessaire pour r\xe9parer les outils de ce ",(0,o.kt)("em",{parentName:"p"},"tier"),".")),(0,o.kt)("p",null,"Apr\xe8s \xe7a il ne vous restera plus qu'\xe0 ajouter le bloc dans ledit tag li\xe9 au ",(0,o.kt)("em",{parentName:"p"},"tier")," (dans ce cas \xe7a sera ",(0,o.kt)("inlineCode",{parentName:"p"},"modid:mon_tier")," se trouvant dans le dossier ",(0,o.kt)("inlineCode",{parentName:"p"},"data/modid/tags/blocks"),")."))}m.isMDXComponent=!0}}]);