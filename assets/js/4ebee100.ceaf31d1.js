"use strict";(self.webpackChunkdoc_forge=self.webpackChunkdoc_forge||[]).push([[8752],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),o=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=o(e.components);return n.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=o(a),c=r,k=u["".concat(d,".").concat(c)]||u[c]||m[c]||l;return a?n.createElement(k,i(i({ref:t},s),{},{components:a})):n.createElement(k,i({ref:t},s))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7256:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:2,title:"Recettes",description:"Comment sont structur\xe9es les recettes dans Minecraft ?",tags:["bases","ressources"]},i=void 0,p={unversionedId:"bases/resources/recipe",id:"version-1.18/bases/resources/recipe",title:"Recettes",description:"Comment sont structur\xe9es les recettes dans Minecraft ?",source:"@site/versioned_docs/version-1.18/bases/resources/recipe.md",sourceDirName:"bases/resources",slug:"/bases/resources/recipe",permalink:"/docs/1.18/bases/resources/recipe",draft:!1,editUrl:"https://github.com/Les-Moddeurs-Francais/Documentation-Forge/edit/master/versioned_docs/version-1.18/bases/resources/recipe.md",tags:[{label:"bases",permalink:"/docs/1.18/tags/bases"},{label:"ressources",permalink:"/docs/1.18/tags/ressources"}],version:"1.18",lastUpdatedBy:"Mysterious_Dev",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Recettes",description:"Comment sont structur\xe9es les recettes dans Minecraft ?",tags:["bases","ressources"]},sidebar:"tutorialSidebar",previous:{title:"Traductions",permalink:"/docs/1.18/bases/resources/lang"},next:{title:"Tags",permalink:"/docs/1.18/bases/resources/tags"}},d={},o=[{value:"Recette de base structur\xe9e",id:"recette-de-base-structur\xe9e",level:2},{value:"Recette de base non structur\xe9e",id:"recette-de-base-non-structur\xe9e",level:2},{value:"Recette du fourneau",id:"recette-du-fourneau",level:2},{value:"Recette du haut fourneau",id:"recette-du-haut-fourneau",level:2},{value:"Recette du fumoir",id:"recette-du-fumoir",level:2},{value:"Recette du tailleur de pierre",id:"recette-du-tailleur-de-pierre",level:2},{value:"Recette du feu de camp",id:"recette-du-feu-de-camp",level:2},{value:"Recette de la table de forgeron",id:"recette-de-la-table-de-forgeron",level:2}],s={toc:o};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"recette-de-base-structur\xe9e"},"Recette de base structur\xe9e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "minecraft:crafting_shaped",\n  "pattern": [\n    "###",\n    "###",\n    "###"\n  ],\n  "key": {\n    "#": {\n      "item": "minecraft:diamond"\n    }\n  },\n  "result": {\n    "item": "minecraft:diamond_block"\n  }\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Nom"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"Type de la recette (ici ",(0,r.kt)("inlineCode",{parentName:"td"},"minecraft:crafting_shaped"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"group"),(0,r.kt)("td",{parentName:"tr",align:null},"Groupe de la recette (pour grouper certaines recettes ensemble comme par exemple les portes, les dalles, les planches, etc...)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pattern"),(0,r.kt)("td",{parentName:"tr",align:null},"Forme de la recette dans la table de craft (les symboles correspondants \xe0 ceux d\xe9finis dans le champ ",(0,r.kt)("inlineCode",{parentName:"td"},"key"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key"),(0,r.kt)("td",{parentName:"tr",align:null},"Definitions des symboles comme des objets utilis\xe9s dans la recette (ici le symbole ",(0,r.kt)("inlineCode",{parentName:"td"},"#")," correspond au diamant)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"result"),(0,r.kt)("td",{parentName:"tr",align:null},"R\xe9sultat de la recette")))),(0,r.kt)("h2",{id:"recette-de-base-non-structur\xe9e"},"Recette de base non structur\xe9e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "minecraft:crafting_shapeless",\n  "ingredients": [\n    {\n      "item": "minecraft:diamond_block"\n    }\n  ],\n  "result": {\n    "item": "minecraft:diamond",\n    "count": 9\n  }\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Nom"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"Type de la recette (ici ",(0,r.kt)("inlineCode",{parentName:"td"},"minecraft:crafting_shapeless"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"group"),(0,r.kt)("td",{parentName:"tr",align:null},"Groupe de la recette (pour grouper certaines recettes ensemble comme par exemple les portes, les dalles, les planches, etc...)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ingredients"),(0,r.kt)("td",{parentName:"tr",align:null},"Ingr\xe9dients permettant de r\xe9aliser la recette (applicable dans n'importe quel ordre)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"result"),(0,r.kt)("td",{parentName:"tr",align:null},"R\xe9sultat de la recette")))),(0,r.kt)("h2",{id:"recette-du-fourneau"},"Recette du fourneau"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "minecraft:smelting",\n  "ingredient": {\n    "item": "minecraft:cobblestone"\n  },\n  "result": "minecraft:stone",\n  "experience": 0.1,\n  "cookingtime": 200\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Nom"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"Type de la recette (ici ",(0,r.kt)("inlineCode",{parentName:"td"},"minecraft:smelting"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"group"),(0,r.kt)("td",{parentName:"tr",align:null},"Groupe de la recette (pour grouper certaines recettes ensemble comme par exemple les portes, les dalles, les planches, etc...)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ingredients"),(0,r.kt)("td",{parentName:"tr",align:null},"Ingr\xe9dients permettant de r\xe9aliser la recette (ici cela \xe9quivaut \xe0 l'item devant \xeatre cuit)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"result"),(0,r.kt)("td",{parentName:"tr",align:null},"R\xe9sultat de la recette")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"experience"),(0,r.kt)("td",{parentName:"tr",align:null},"Montant d'exp\xe9rience re\xe7u par le joueur")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cookingtime"),(0,r.kt)("td",{parentName:"tr",align:null},"Temps n\xe9cessaire afin que la cuisson soit r\xe9alis\xe9e")))),(0,r.kt)("h2",{id:"recette-du-haut-fourneau"},"Recette du haut fourneau"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "minecraft:blasting",\n  "group": "iron_ingot",\n  "ingredient": {\n    "item": "minecraft:iron_ore"\n  },\n  "result": "minecraft:iron_ingot",\n  "experience": 0.7,\n  "cookingtime": 100\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Nom"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"Type de la recette (ici ",(0,r.kt)("inlineCode",{parentName:"td"},"minecraft:blasting"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"group"),(0,r.kt)("td",{parentName:"tr",align:null},"Groupe de la recette (pour grouper certaines recettes ensemble comme par exemple les portes, les dalles, les planches, etc...)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ingredients"),(0,r.kt)("td",{parentName:"tr",align:null},"Ingr\xe9dients permettant de r\xe9aliser la recette (ici cela \xe9quivaut \xe0 l'item devant \xeatre cuit)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"result"),(0,r.kt)("td",{parentName:"tr",align:null},"R\xe9sultat de la recette")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"experience"),(0,r.kt)("td",{parentName:"tr",align:null},"Montant d'exp\xe9rience re\xe7u par le joueur")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cookingtime"),(0,r.kt)("td",{parentName:"tr",align:null},"Temps n\xe9cessaire afin que la cuisson soit r\xe9alis\xe9e")))),(0,r.kt)("h2",{id:"recette-du-fumoir"},"Recette du fumoir"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "minecraft:smoking",\n  "ingredient": {\n    "item": "minecraft:beef"\n  },\n  "result": "minecraft:cooked_beef",\n  "experience": 0.35,\n  "cookingtime": 100\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Nom"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"Type de la recette (ici ",(0,r.kt)("inlineCode",{parentName:"td"},"minecraft:smoking"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"group"),(0,r.kt)("td",{parentName:"tr",align:null},"Groupe de la recette (pour grouper certaines recettes ensemble comme par exemple les portes, les dalles, les planches, etc...)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ingredients"),(0,r.kt)("td",{parentName:"tr",align:null},"Ingr\xe9dients permettant de r\xe9aliser la recette (ici cela \xe9quivaut \xe0 l'item devant \xeatre cuit)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"result"),(0,r.kt)("td",{parentName:"tr",align:null},"R\xe9sultat de la recette")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"experience"),(0,r.kt)("td",{parentName:"tr",align:null},"Montant d'exp\xe9rience re\xe7u par le joueur")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cookingtime"),(0,r.kt)("td",{parentName:"tr",align:null},"Temps n\xe9cessaire afin que la cuisson soit r\xe9alis\xe9e")))),(0,r.kt)("h2",{id:"recette-du-tailleur-de-pierre"},"Recette du tailleur de pierre"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "minecraft:stonecutting",\n  "ingredient": {\n    "item": "minecraft:stone"\n  },\n  "result": "minecraft:stone_slab",\n  "count": 2\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Nom"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"Type de la recette (ici ",(0,r.kt)("inlineCode",{parentName:"td"},"minecraft:stonecutting"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"group"),(0,r.kt)("td",{parentName:"tr",align:null},"Groupe de la recette (pour grouper certaines recettes ensemble comme par exemple les portes, les dalles, les planches, etc...)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ingredient"),(0,r.kt)("td",{parentName:"tr",align:null},"Ingr\xe9dients permettant de r\xe9aliser la recette (ici cela \xe9quivaut au bloc qui doit \xeatre taill\xe9)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"result"),(0,r.kt)("td",{parentName:"tr",align:null},"R\xe9sultat de la recette")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"count"),(0,r.kt)("td",{parentName:"tr",align:null},"Nombre d'item resultant")))),(0,r.kt)("h2",{id:"recette-du-feu-de-camp"},"Recette du feu de camp"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "minecraft:campfire_cooking",\n  "ingredient": {\n    "item": "minecraft:potato"\n  },\n  "result": "minecraft:baked_potato",\n  "experience": 0.35,\n  "cookingtime": 600\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Nom"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"Type de la recette (ici ",(0,r.kt)("inlineCode",{parentName:"td"},"minecraft:campfire_cooking"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"group"),(0,r.kt)("td",{parentName:"tr",align:null},"Groupe de la recette (pour grouper certaines recettes ensemble comme par exemple les portes, les dalles, les planches, etc...)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ingredients"),(0,r.kt)("td",{parentName:"tr",align:null},"Ingr\xe9dients permettant de r\xe9aliser la recette (ici cela \xe9quivaut \xe0 l'item devant \xeatre cuit)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"result"),(0,r.kt)("td",{parentName:"tr",align:null},"R\xe9sultat de la recette")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"experience"),(0,r.kt)("td",{parentName:"tr",align:null},"Montant d'exp\xe9rience re\xe7u par le joueur")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cookingtime"),(0,r.kt)("td",{parentName:"tr",align:null},"Temps n\xe9cessaire afin que la cuisson soit r\xe9alis\xe9e")))),(0,r.kt)("h2",{id:"recette-de-la-table-de-forgeron"},"Recette de la table de forgeron"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "minecraft:smithing",\n  "base": {\n    "item": "minecraft:diamond_axe"\n  },\n  "addition": {\n    "item": "minecraft:netherite_ingot"\n  },\n  "result": {\n    "item": "minecraft:netherite_axe"\n  }\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Nom"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"Type de la recette (ici ",(0,r.kt)("inlineCode",{parentName:"td"},"minecraft:smithing"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"group"),(0,r.kt)("td",{parentName:"tr",align:null},"Groupe de la recette (pour grouper certaines recettes ensemble comme par exemple les portes, les dalles, les planches, etc...)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"base"),(0,r.kt)("td",{parentName:"tr",align:null},"Item devant \xeatre am\xe9lior\xe9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"addition"),(0,r.kt)("td",{parentName:"tr",align:null},"Second item n\xe9cessaire \xe0 l'am\xe9lioration")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"result"),(0,r.kt)("td",{parentName:"tr",align:null},"R\xe9sultat de la recette")))))}m.isMDXComponent=!0}}]);