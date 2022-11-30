"use strict";(self.webpackChunkdoc_forge=self.webpackChunkdoc_forge||[]).push([[64],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(r),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5055:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={title:"Item color\xe9",description:"Comment cr\xe9er un item color\xe9 ?",tags:["items"]},i=void 0,c={unversionedId:"items/colored",id:"items/colored",title:"Item color\xe9",description:"Comment cr\xe9er un item color\xe9 ?",source:"@site/docs/items/colored.md",sourceDirName:"items",slug:"/items/colored",permalink:"/items/colored",draft:!1,editUrl:"https://github.com/Les-Moddeurs-Francais/Documentation-Forge/edit/master/docs/items/colored.md",tags:[{label:"items",permalink:"/tags/items"}],version:"current",lastUpdatedBy:"Mysterious_Dev",frontMatter:{title:"Item color\xe9",description:"Comment cr\xe9er un item color\xe9 ?",tags:["items"]},sidebar:"documentationSidebar",previous:{title:"Propri\xe9t\xe9s des items",permalink:"/items/properties"},next:{title:"Onglet cr\xe9atif",permalink:"/items/creative-tab"}},l={},s=[{value:"Enregistrer l&#39;item comme pouvant \xeatre color\xe9",id:"enregistrer-litem-comme-pouvant-\xeatre-color\xe9",level:2}],p={toc:s};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Depuis plusieurs versions, Minecraft permet \xe0 certains items de pouvoir \xeatre color\xe9s. Nous permettant une palette de couleurs gigantesque, et ceci pour un seul item."),(0,o.kt)("p",null,"Nous n'aborderons pas la cr\xe9ation de l'item en tant que telle sur cette page, ceci \xe9tant d\xe9j\xe0 fait avec ",(0,o.kt)("a",{parentName:"p",href:"/items/basic"},"celle-ci"),"."),(0,o.kt)("h2",{id:"enregistrer-litem-comme-pouvant-\xeatre-color\xe9"},"Enregistrer l'item comme pouvant \xeatre color\xe9"),(0,o.kt)("p",null,"Le rendu des items se faisant c\xf4t\xe9 client, nous aurons besoin d'ex\xe9cuter le code suivant dans la fonction ",(0,o.kt)("strong",{parentName:"p"},"client")," de la classe principale (celle-ci doit avoir un param\xe8tre de type ",(0,o.kt)("strong",{parentName:"p"},"FMLClientSetupEvent"),") :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'Minecraft.getInstance().getItemColors().register((stack, color) -> {\n    return stack.getTag() != null && stack.getTag().contains("color", 99) ? stack.getTag().getInt("color") : 0x13421772;\n}, Items.STICK);\n')),(0,o.kt)("p",null,"Ici dans cet exemple, l'item qui sera color\xe9 sera le b\xe2ton de base du jeu (mais il est possible de changer celui-ci par l'item de votre choix)."),(0,o.kt)("p",null,"Dans ce cas, si l'item n'a pas de tag, ou si le tag ne contient pas la cl\xe9 \"color\", alors la couleur sera noire. Sinon elle sera de la couleur sp\xe9cifi\xe9e dans le tag ",(0,o.kt)("em",{parentName:"p"},"color"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"La condition expos\xe9e ici n'est qu'\xe0 titre indicatif, et n'est donc pas n\xe9cessaire. Il est cependant n\xe9cessaire de retourner un nombre qui sera la couleur de votre item (ici par d\xe9faut la couleur sera celle attribu\xe9e au nombre ",(0,o.kt)("strong",{parentName:"p"},"0x13421772"),").")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"R\xe9sultat",src:r(1313).Z,width:"1920",height:"991"})))}u.isMDXComponent=!0},1313:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/colored_item-89a6d6f4e12086ace4f25db3a1bb002b.png"}}]);