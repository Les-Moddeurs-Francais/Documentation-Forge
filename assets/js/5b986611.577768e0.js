"use strict";(self.webpackChunkdoc_forge=self.webpackChunkdoc_forge||[]).push([[6485],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>c});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(r),c=a,f=d["".concat(s,".").concat(c)]||d[c]||u[c]||i;return r?n.createElement(f,o(o({ref:t},m),{},{components:r})):n.createElement(f,o({ref:t},m))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4143:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:2,title:"Propri\xe9t\xe9s des items",description:"Quelles sont les propri\xe9t\xe9s d'un item ?",tags:["items","propri\xe9t\xe9s"]},o=void 0,l={unversionedId:"items/properties",id:"version-1.18/items/properties",title:"Propri\xe9t\xe9s des items",description:"Quelles sont les propri\xe9t\xe9s d'un item ?",source:"@site/versioned_docs/version-1.18/items/properties.md",sourceDirName:"items",slug:"/items/properties",permalink:"/docs/1.18/items/properties",draft:!1,editUrl:"https://github.com/Les-Moddeurs-Francais/Documentation-Forge/edit/master/versioned_docs/version-1.18/items/properties.md",tags:[{label:"items",permalink:"/docs/1.18/tags/items"},{label:"propri\xe9t\xe9s",permalink:"/docs/1.18/tags/proprietes"}],version:"1.18",lastUpdatedBy:"Mysterious_Dev",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Propri\xe9t\xe9s des items",description:"Quelles sont les propri\xe9t\xe9s d'un item ?",tags:["items","propri\xe9t\xe9s"]},sidebar:"tutorialSidebar",previous:{title:"Item basique",permalink:"/docs/1.18/items/basic"},next:{title:"Item color\xe9",permalink:"/docs/1.18/items/colored"}},s={},p=[],m={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"M\xe9thode"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"food"),(0,a.kt)("td",{parentName:"tr",align:null},"D\xe9finit les propri\xe9t\xe9s de nourriture de l'item.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"stacksTo"),(0,a.kt)("td",{parentName:"tr",align:null},"D\xe9finit la taille maximale d'empilement de l'item.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"durability"),(0,a.kt)("td",{parentName:"tr",align:null},"D\xe9finit la duret\xe9 maximale de l'item.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"craftRemainder"),(0,a.kt)("td",{parentName:"tr",align:null},"D\xe9finit un item qui restera une fois un craft effectu\xe9 avec l'item en tant qu'ingr\xe9dient (comme par exemple le seau de lait donnant un seau vide une fois le craft du gateau effectu\xe9).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"tab"),(0,a.kt)("td",{parentName:"tr",align:null},"D\xe9finit l'onglet cr\xe9atif o\xf9 l'item se trouvera.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"rarity"),(0,a.kt)("td",{parentName:"tr",align:null},"D\xe9finit la raret\xe9 de l'item (ce qui change entre autres la couleur du nom de l'item).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"fireResistant"),(0,a.kt)("td",{parentName:"tr",align:null},"D\xe9finit si l'item est r\xe9sistant ou non \xe0 toute source de feu ou de lave.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"setNoRepair"),(0,a.kt)("td",{parentName:"tr",align:null},"D\xe9finit l'item comme non r\xe9parable m\xeame si celui-ci est endommag\xe9.")))))}u.isMDXComponent=!0}}]);