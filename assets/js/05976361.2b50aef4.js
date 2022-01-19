"use strict";(self.webpackChunkdoc_forge=self.webpackChunkdoc_forge||[]).push([[3339],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||s;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<s;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3846:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(7462),a=n(3366),s=(n(7294),n(3905)),l=["components"],o={sidebar_position:2,title:"Tags",description:"Comment sont structur\xe9es les tags dans Minecraft ?",tags:["bases","ressources"]},i=void 0,u={unversionedId:"bases/resources/tags",id:"bases/resources/tags",title:"Tags",description:"Comment sont structur\xe9es les tags dans Minecraft ?",source:"@site/docs/bases/resources/tags.md",sourceDirName:"bases/resources",slug:"/bases/resources/tags",permalink:"/docs/bases/resources/tags",editUrl:"https://github.com/Les-Moddeurs-Francais/Forge-Doc/edit/master/docs/bases/resources/tags.md",tags:[{label:"bases",permalink:"/docs/tags/bases"},{label:"ressources",permalink:"/docs/tags/ressources"}],version:"current",lastUpdatedBy:"Mysterious_Dev",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Tags",description:"Comment sont structur\xe9es les tags dans Minecraft ?",tags:["bases","ressources"]},sidebar:"tutorialSidebar",previous:{title:"Recettes",permalink:"/docs/bases/resources/recipe"},next:{title:"Exporter le mod",permalink:"/docs/bases/exportation"}},c=[{value:"Structure g\xe9n\xe9rale",id:"structure-g\xe9n\xe9rale",children:[],level:2}],p={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,s.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Ajout\xe9s en 1.13, les tags permettent de regrouper plusieurs \xe9l\xe9ments du jeu (comme des items, blocs, entit\xe9es, etc...) dans un m\xeame fichier pour apr\xe8s les utiliser dans des recettes (par exemple celle du coffre n\xe9cessitant n'importe quels types de bois) ou m\xeame dans votre code."),(0,s.kt)("h2",{id:"structure-g\xe9n\xe9rale"},"Structure g\xe9n\xe9rale"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "replace": false,\n  "values": [\n    //Entr\xe9es\n  ]\n}\n')),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Nom"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"replace"),(0,s.kt)("td",{parentName:"tr",align:null},"D\xe9finit si le tag doit remplacer ceux du m\xeame nom")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"values"),(0,s.kt)("td",{parentName:"tr",align:null},"Entr\xe9es du tag (\xe9l\xe9ments contenus dans celui-ci)")))),(0,s.kt)("p",null,"Il existe cependant 2 types de valeurs, les valeurs requises et optionnelles (la diff\xe9rence \xe9tant que pour les valeurs requises, si le jeu n'arrive pas \xe0 les trouver, cela provoquera une erreur au chargement, ce qui n'est pas le cas pour les valeurs optionnelles) :"),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Valeurs requises"),(0,s.kt)("p",null,"Celle-ci peuvent prendre 2 valeurs, soit un identifiant faisant r\xe9f\xe9rence \xe0 un \xe9l\xe9ment du jeu, soit un identifiant faisant r\xe9f\xe9rence \xe0 un tag (pr\xe9c\xe9d\xe9 d'un ",(0,s.kt)("inlineCode",{parentName:"p"},"#"),")."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'"minecraft:diamond_block"\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'"#minecraft:stone_bricks"\n'))),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Valeurs optionnelles"),(0,s.kt)("p",null,"Celle-ci peuvent prendre 2 valeurs au niveau du champ ",(0,s.kt)("inlineCode",{parentName:"p"},"\xecd"),", soit un identifiant faisant r\xe9f\xe9rence \xe0 un \xe9l\xe9ment du jeu, soit un identifiant faisant r\xe9f\xe9rence \xe0 un tag (pr\xe9c\xe9d\xe9 d'un ",(0,s.kt)("inlineCode",{parentName:"p"},"#"),"). Le champ ",(0,s.kt)("inlineCode",{parentName:"p"},"required")," permet quant \xe0 lui de d\xe9finir si l'entr\xe9e est requise ou non (dans le cas d'une entr\xe9e optionnelle il faudrat le d\xe9finir sur ",(0,s.kt)("inlineCode",{parentName:"p"},"false"),")."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "minecraft:diamond_block",\n  "required": false\n}\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "#minecraft:stone_bricks",\n  "required": false\n}\n'))))}d.isMDXComponent=!0}}]);