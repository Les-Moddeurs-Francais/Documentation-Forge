"use strict";(self.webpackChunkdoc_forge=self.webpackChunkdoc_forge||[]).push([[3497],{3905:function(e,t,n){n.d(t,{Zo:function(){return o},kt:function(){return s}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),m=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=m(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),c=m(n),s=r,k=c["".concat(d,".").concat(s)]||c[s]||u[s]||l;return n?a.createElement(k,i(i({ref:t},o),{},{components:n})):a.createElement(k,i({ref:t},o))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8825:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return o},default:function(){return c}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],p={sidebar_position:1,title:"Recettes",description:"Comment sont structur\xe9es les recettes dans Minecraft ?",tags:["gameplay"]},d=void 0,m={unversionedId:"gameplay/recipe",id:"gameplay/recipe",title:"Recettes",description:"Comment sont structur\xe9es les recettes dans Minecraft ?",source:"@site/docs/gameplay/recipe.md",sourceDirName:"gameplay",slug:"/gameplay/recipe",permalink:"/docs/gameplay/recipe",editUrl:"https://github.com/Les-Moddeurs-Francais/Forge-Doc/edit/master/docs/gameplay/recipe.md",tags:[{label:"gameplay",permalink:"/docs/tags/gameplay"}],version:"current",lastUpdatedBy:"Mysterious_Dev",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Recettes",description:"Comment sont structur\xe9es les recettes dans Minecraft ?",tags:["gameplay"]},sidebar:"tutorialSidebar",previous:{title:"Gameplay",permalink:"/docs/category/generation"},next:{title:"Data Generators",permalink:"/docs/category/data-generators"}},o=[{value:"Recette de base structur\xe9e",id:"recette-de-base-structur\xe9e",children:[],level:2},{value:"Recette de base non structur\xe9e",id:"recette-de-base-non-structur\xe9e",children:[],level:2},{value:"Recette du fourneau",id:"recette-du-fourneau",children:[],level:2},{value:"Recette du haut fourneau",id:"recette-du-haut-fourneau",children:[],level:2},{value:"Recette du fumoir",id:"recette-du-fumoir",children:[],level:2},{value:"Recette du tailleur de pierre",id:"recette-du-tailleur-de-pierre",children:[],level:2},{value:"Recette du feu de camp",id:"recette-du-feu-de-camp",children:[],level:2},{value:"Recette de la table de forgeron",id:"recette-de-la-table-de-forgeron",children:[],level:2}],u={toc:o};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"recette-de-base-structur\xe9e"},"Recette de base structur\xe9e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "minecraft:crafting_shaped",\n  "pattern": [\n    "###",\n    "###",\n    "###"\n  ],\n  "key": {\n    "#": {\n      "item": "minecraft:diamond"\n    }\n  },\n  "result": {\n    "item": "minecraft:diamond_block"\n  }\n}\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Nom"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"Type de la recette (ici ",(0,l.kt)("inlineCode",{parentName:"td"},"minecraft:crafting_shaped"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"group"),(0,l.kt)("td",{parentName:"tr",align:null},"Groupe de la recette (pour grouper certaines recettes ensemble comme par exemple les portes, les dalles, les planches, etc...)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pattern"),(0,l.kt)("td",{parentName:"tr",align:null},"Forme de la recette dans la table de craft (les symboles correspondants \xe0 ceux d\xe9finis dans le champ ",(0,l.kt)("inlineCode",{parentName:"td"},"key"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},"Definitions des symboles comme des objets utilis\xe9s dans la recette (ici le symbole ",(0,l.kt)("inlineCode",{parentName:"td"},"#")," correspond au diamant)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"result"),(0,l.kt)("td",{parentName:"tr",align:null},"R\xe9sultat de la recette")))),(0,l.kt)("h2",{id:"recette-de-base-non-structur\xe9e"},"Recette de base non structur\xe9e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "minecraft:crafting_shapeless",\n  "ingredients": [\n    {\n      "item": "minecraft:diamond_block"\n    }\n  ],\n  "result": {\n    "item": "minecraft:diamond",\n    "count": 9\n  }\n}\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Nom"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"Type de la recette (ici ",(0,l.kt)("inlineCode",{parentName:"td"},"minecraft:crafting_shapeless"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"group"),(0,l.kt)("td",{parentName:"tr",align:null},"Groupe de la recette (pour grouper certaines recettes ensemble comme par exemple les portes, les dalles, les planches, etc...)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ingredients"),(0,l.kt)("td",{parentName:"tr",align:null},"Ingr\xe9dients permettant de r\xe9aliser la recette (applicable dans n'importe quel ordre)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"result"),(0,l.kt)("td",{parentName:"tr",align:null},"R\xe9sultat de la recette")))),(0,l.kt)("h2",{id:"recette-du-fourneau"},"Recette du fourneau"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "minecraft:smelting",\n  "ingredient": {\n    "item": "minecraft:cobblestone"\n  },\n  "result": "minecraft:stone",\n  "experience": 0.1,\n  "cookingtime": 200\n}\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Nom"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"Type de la recette (ici ",(0,l.kt)("inlineCode",{parentName:"td"},"minecraft:smelting"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"group"),(0,l.kt)("td",{parentName:"tr",align:null},"Groupe de la recette (pour grouper certaines recettes ensemble comme par exemple les portes, les dalles, les planches, etc...)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ingredients"),(0,l.kt)("td",{parentName:"tr",align:null},"Ingr\xe9dients permettant de r\xe9aliser la recette (ici cela \xe9quivaut \xe0 l'item devant \xeatre cuit)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"result"),(0,l.kt)("td",{parentName:"tr",align:null},"R\xe9sultat de la recette")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"experience"),(0,l.kt)("td",{parentName:"tr",align:null},"Montant d'exp\xe9rience re\xe7u par le joueur")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cookingtime"),(0,l.kt)("td",{parentName:"tr",align:null},"Temps n\xe9cessaire afin que la cuisson soit r\xe9alis\xe9e")))),(0,l.kt)("h2",{id:"recette-du-haut-fourneau"},"Recette du haut fourneau"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "minecraft:blasting",\n  "group": "iron_ingot",\n  "ingredient": {\n    "item": "minecraft:iron_ore"\n  },\n  "result": "minecraft:iron_ingot",\n  "experience": 0.7,\n  "cookingtime": 100\n}\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Nom"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"Type de la recette (ici ",(0,l.kt)("inlineCode",{parentName:"td"},"minecraft:blasting"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"group"),(0,l.kt)("td",{parentName:"tr",align:null},"Groupe de la recette (pour grouper certaines recettes ensemble comme par exemple les portes, les dalles, les planches, etc...)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ingredients"),(0,l.kt)("td",{parentName:"tr",align:null},"Ingr\xe9dients permettant de r\xe9aliser la recette (ici cela \xe9quivaut \xe0 l'item devant \xeatre cuit)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"result"),(0,l.kt)("td",{parentName:"tr",align:null},"R\xe9sultat de la recette")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"experience"),(0,l.kt)("td",{parentName:"tr",align:null},"Montant d'exp\xe9rience re\xe7u par le joueur")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cookingtime"),(0,l.kt)("td",{parentName:"tr",align:null},"Temps n\xe9cessaire afin que la cuisson soit r\xe9alis\xe9e")))),(0,l.kt)("h2",{id:"recette-du-fumoir"},"Recette du fumoir"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "minecraft:smoking",\n  "ingredient": {\n    "item": "minecraft:beef"\n  },\n  "result": "minecraft:cooked_beef",\n  "experience": 0.35,\n  "cookingtime": 100\n}\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Nom"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"Type de la recette (ici ",(0,l.kt)("inlineCode",{parentName:"td"},"minecraft:smoking"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"group"),(0,l.kt)("td",{parentName:"tr",align:null},"Groupe de la recette (pour grouper certaines recettes ensemble comme par exemple les portes, les dalles, les planches, etc...)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ingredients"),(0,l.kt)("td",{parentName:"tr",align:null},"Ingr\xe9dients permettant de r\xe9aliser la recette (ici cela \xe9quivaut \xe0 l'item devant \xeatre cuit)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"result"),(0,l.kt)("td",{parentName:"tr",align:null},"R\xe9sultat de la recette")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"experience"),(0,l.kt)("td",{parentName:"tr",align:null},"Montant d'exp\xe9rience re\xe7u par le joueur")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cookingtime"),(0,l.kt)("td",{parentName:"tr",align:null},"Temps n\xe9cessaire afin que la cuisson soit r\xe9alis\xe9e")))),(0,l.kt)("h2",{id:"recette-du-tailleur-de-pierre"},"Recette du tailleur de pierre"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "minecraft:stonecutting",\n  "ingredient": {\n    "item": "minecraft:stone"\n  },\n  "result": "minecraft:stone_slab",\n  "count": 2\n}\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Nom"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"Type de la recette (ici ",(0,l.kt)("inlineCode",{parentName:"td"},"minecraft:stonecutting"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"group"),(0,l.kt)("td",{parentName:"tr",align:null},"Groupe de la recette (pour grouper certaines recettes ensemble comme par exemple les portes, les dalles, les planches, etc...)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ingredient"),(0,l.kt)("td",{parentName:"tr",align:null},"Ingr\xe9dients permettant de r\xe9aliser la recette (ici cela \xe9quivaut au bloc qui doit \xeatre taill\xe9)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"result"),(0,l.kt)("td",{parentName:"tr",align:null},"R\xe9sultat de la recette")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"count"),(0,l.kt)("td",{parentName:"tr",align:null},"Nombre d'item resultant")))),(0,l.kt)("h2",{id:"recette-du-feu-de-camp"},"Recette du feu de camp"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "minecraft:campfire_cooking",\n  "ingredient": {\n    "item": "minecraft:potato"\n  },\n  "result": "minecraft:baked_potato",\n  "experience": 0.35,\n  "cookingtime": 600\n}\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Nom"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"Type de la recette (ici ",(0,l.kt)("inlineCode",{parentName:"td"},"minecraft:campfire_cooking"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"group"),(0,l.kt)("td",{parentName:"tr",align:null},"Groupe de la recette (pour grouper certaines recettes ensemble comme par exemple les portes, les dalles, les planches, etc...)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ingredients"),(0,l.kt)("td",{parentName:"tr",align:null},"Ingr\xe9dients permettant de r\xe9aliser la recette (ici cela \xe9quivaut \xe0 l'item devant \xeatre cuit)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"result"),(0,l.kt)("td",{parentName:"tr",align:null},"R\xe9sultat de la recette")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"experience"),(0,l.kt)("td",{parentName:"tr",align:null},"Montant d'exp\xe9rience re\xe7u par le joueur")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cookingtime"),(0,l.kt)("td",{parentName:"tr",align:null},"Temps n\xe9cessaire afin que la cuisson soit r\xe9alis\xe9e")))),(0,l.kt)("h2",{id:"recette-de-la-table-de-forgeron"},"Recette de la table de forgeron"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "minecraft:smithing",\n  "base": {\n    "item": "minecraft:diamond_axe"\n  },\n  "addition": {\n    "item": "minecraft:netherite_ingot"\n  },\n  "result": {\n    "item": "minecraft:netherite_axe"\n  }\n}\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Nom"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"Type de la recette (ici ",(0,l.kt)("inlineCode",{parentName:"td"},"minecraft:smithing"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"group"),(0,l.kt)("td",{parentName:"tr",align:null},"Groupe de la recette (pour grouper certaines recettes ensemble comme par exemple les portes, les dalles, les planches, etc...)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"base"),(0,l.kt)("td",{parentName:"tr",align:null},"Item devant \xeatre am\xe9lior\xe9")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"addition"),(0,l.kt)("td",{parentName:"tr",align:null},"Second item n\xe9cessaire \xe0 l'am\xe9lioration")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"result"),(0,l.kt)("td",{parentName:"tr",align:null},"R\xe9sultat de la recette")))))}c.isMDXComponent=!0}}]);