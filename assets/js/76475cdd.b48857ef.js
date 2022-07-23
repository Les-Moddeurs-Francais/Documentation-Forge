"use strict";(self.webpackChunkdoc_forge=self.webpackChunkdoc_forge||[]).push([[9561],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,A=p["".concat(u,".").concat(d)]||p[d]||c[d]||o;return n?r.createElement(A,i(i({ref:t},m),{},{components:n})):r.createElement(A,i({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7129:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:2,title:"Texture anim\xe9e",description:"Comment cr\xe9er une texture anim\xe9e pour son item ?",tags:["models"]},u=void 0,s={unversionedId:"models/animated_texture",id:"version-1.18/models/animated_texture",title:"Texture anim\xe9e",description:"Comment cr\xe9er une texture anim\xe9e pour son item ?",source:"@site/versioned_docs/version-1.18/models/animated_texture.md",sourceDirName:"models",slug:"/models/animated_texture",permalink:"/Documentation-Forge/docs/1.18/models/animated_texture",draft:!1,editUrl:"https://github.com/Les-Moddeurs-Francais/Documentation-Forge/edit/master/versioned_docs/version-1.18/models/animated_texture.md",tags:[{label:"models",permalink:"/Documentation-Forge/docs/1.18/tags/models"}],version:"1.18",lastUpdatedBy:"Mysterious_Dev",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Texture anim\xe9e",description:"Comment cr\xe9er une texture anim\xe9e pour son item ?",tags:["models"]},sidebar:"tutorialSidebar",previous:{title:"Mod\xe8les",permalink:"/Documentation-Forge/docs/1.18/category/models"},next:{title:"Items",permalink:"/Documentation-Forge/docs/1.18/category/models/items"}},m={},c=[{value:"Texture",id:"texture",level:2},{value:"Mcmeta",id:"mcmeta",level:2}],p={toc:c};function d(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Depuis plusieurs versions, il est possible d'animer les textures d'un item gr\xe2ce \xe0 un simple fichier suppl\xe9mentaire. Nous allons voir ici comment ajouter une texture anim\xe9e pour vos blocs/items."),(0,o.kt)("h2",{id:"texture"},"Texture"),(0,o.kt)("p",null,"La texture anim\xe9e de votre item doit \xeatre agenc\xe9e \xe0 la verticale (c'est-\xe0-dire que les texture doivent \xeatre de m\xeame taille et agenc\xe9e les unes sur les autres) comme ceci :"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Exemple de texture",src:n(7880).Z,width:"64",height:"128"})),(0,o.kt)("h2",{id:"mcmeta"},"Mcmeta"),(0,o.kt)("p",null,"Le fichier ",(0,o.kt)("em",{parentName:"p"},"mcmeta")," quant \xe0 lui permet de faire comprendre au jeu que la texture doit \xeatre anim\xe9e, avec deux param\xe8tres :"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Nom"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"N\xe9cessit\xe9"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"interpolate"),(0,o.kt)("td",{parentName:"tr",align:null},"Applique une transition ou non entre les diff\xe9rentes textures"),(0,o.kt)("td",{parentName:"tr",align:null},"Non")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"frametime"),(0,o.kt)("td",{parentName:"tr",align:null},"Temps n\xe9cessaire \xe0 la transition des textures (",(0,o.kt)("em",{parentName:"td"},"interpolate")," activ\xe9 ou non). Pour rappel, une seconde \xe9quivaut \xe0 20 ",(0,o.kt)("em",{parentName:"td"},"ticks")),(0,o.kt)("td",{parentName:"tr",align:null},"Non (mais conseill\xe9)")))),(0,o.kt)("p",null,"Il est n\xe9cessaire que le fichier ",(0,o.kt)("em",{parentName:"p"},"mcmeta")," (contenu dans le m\xeame dossier que la texture) comporte le nom de la texture (de mani\xe8re exacte) avec ensuite l'extension ",(0,o.kt)("inlineCode",{parentName:"p"},".png.mcmeta"),"."),(0,o.kt)("p",null,"Ce qui peut nous donner deux cas d'exemple, le premier :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "animation": {\n    "interpolate": true,\n    "frametime": 10\n  }\n}\n')),(0,o.kt)("p",null,"Dont le r\xe9sultat est :"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Texture anim\xe9e interpol\xe9e",src:n(7566).Z,width:"1280",height:"720"})),(0,o.kt)("p",null,"Ou m\xeame le deuxi\xe8me :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "animation": {\n    "frametime": 10\n  }\n}\n')),(0,o.kt)("p",null,"Dont le r\xe9sultat est :"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Texture anim\xe9e non-interpol\xe9e",src:n(5274).Z,width:"1280",height:"720"})))}d.isMDXComponent=!0},7880:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAACACAMAAACMX59YAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJUExURYCAgAAAAAAAAD4bhqcAAAADdFJOU///ANfKDUEAAAAJcEhZcwAADsIAAA7CARUoSoAAAAB2SURBVGhD7dKxDcNAEMRAv/sv2iDEBtaKJHCyC5bRfXL5/sl5AXjPnBeA98x5AXjPnBeA98x5AXjPnBeA98x5AXjPnBeA98x5AXjPnBeA98x5AXjPnOfc9JaAfzErUAAFCqBAARQogAIFUKAACrwrcMfjA+f8AAj1NMF/8lHWAAAAAElFTkSuQmCC"},7566:function(e,t,n){t.Z=n.p+"assets/images/interpolate-057981e129dcb4909492a4fbdd5c1ffb.GIF"},5274:function(e,t,n){t.Z=n.p+"assets/images/non-interpolate-19945b09073fec60c917e86ed171993a.GIF"}}]);