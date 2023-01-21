"use strict";(self.webpackChunkdoc_forge=self.webpackChunkdoc_forge||[]).push([[1329],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),u=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),m=n,g=c["".concat(o,".").concat(m)]||c[m]||d[m]||i;return r?a.createElement(g,l(l({ref:t},p),{},{components:r})):a.createElement(g,l({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var u=2;u<i;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},9979:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const i={slug:"forge-119-441",title:"Forge 1.19.3 44.1",authors:["mysterious_dev"],tags:["forge","mise \xe0 jour",1.19]},l=void 0,s={permalink:"/news/forge-119-441",editUrl:"https://github.com/Les-Moddeurs-Francais/Documentation-Forge/edit/master/news/2023-01-01-forge-1193-441.md",source:"@site/news/2023-01-01-forge-1193-441.md",title:"Forge 1.19.3 44.1",description:"La version 1.19.3-44.1 de Forge est sortie. Celle-ci apporte plusieurs changements et corrections de bugs.",date:"2023-01-01T00:00:00.000Z",formattedDate:"1 janvier 2023",tags:[{label:"forge",permalink:"/news/tags/forge"},{label:"mise \xe0 jour",permalink:"/news/tags/mise-a-jour"},{label:"1.19",permalink:"/news/tags/1-19"}],hasTruncateMarker:!0,authors:[{name:"Mysterious_Dev",title:"Admin de Les Moddeurs Francais",url:"https://github.com/Mysterious-Dev",email:"mysterious_dev@lesmoddeursfrancais.fr",imageURL:"https://github.com/Mysterious-Dev.png",key:"mysterious_dev"}],frontMatter:{slug:"forge-119-441",title:"Forge 1.19.3 44.1",authors:["mysterious_dev"],tags:["forge","mise \xe0 jour","1.19"]},nextItem:{title:"Forge 1.19.3 44.0",permalink:"/news/forge-119-440"}},o={authorsImageUrls:[void 0]},u=[{value:"Nouveaut\xe9s",id:"nouveaut\xe9s",level:3},{value:"Changements",id:"changements",level:3},{value:"Suppressions",id:"suppressions",level:3},{value:"Corrections",id:"corrections",level:3}],p={toc:u};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"La version 1.19.3-44.1 de Forge est sortie. Celle-ci apporte plusieurs changements et corrections de bugs."),(0,n.kt)("p",null,"Lien de l'annonce de Forge : ",(0,n.kt)("a",{parentName:"p",href:"https://blog.minecraftforge.net/releases/1193rb1/"},"https://blog.minecraftforge.net/releases/1193rb1/")),(0,n.kt)("h3",{id:"nouveaut\xe9s"},"Nouveaut\xe9s"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ajout d'un nouvel \xe9v\xe9nement, ",(0,n.kt)("inlineCode",{parentName:"li"},"CreativeModeTabEvent"),", qui permet enregistrer des onglets pour l'inventaire cr\xe9atif et remplir les entr\xe9es des onglets existants"),(0,n.kt)("li",{parentName:"ul"},"Ajout d'un acc\xe8s au champ ",(0,n.kt)("inlineCode",{parentName:"li"},"lookupProvider")," pour les ",(0,n.kt)("em",{parentName:"li"},"data generators")),(0,n.kt)("li",{parentName:"ul"},"Ajout de la classe ",(0,n.kt)("inlineCode",{parentName:"li"},"DatapackBuiltinEntriesProvider")," qui facilite la t\xe2che des mods pour la g\xe9n\xe9ration des fichiers JSON des registres dynamiques (en grande partie pour la g\xe9n\xe9ration)"),(0,n.kt)("li",{parentName:"ul"},"Ajout d'un \xe9v\xe9nement, appel\xe9 avant que les mod\xe8les ne soient mis dans le cache par la classe ",(0,n.kt)("inlineCode",{parentName:"li"},"BlockModelShaper")),(0,n.kt)("li",{parentName:"ul"},"Ajout de la fonction ",(0,n.kt)("inlineCode",{parentName:"li"},"simpleBlockWithItem")," pour la g\xe9n\xe9ration des mod\xe8les et blockstates avec les ",(0,n.kt)("em",{parentName:"li"},"data generators")),(0,n.kt)("li",{parentName:"ul"},"Ajout de la configuration de l'atlas pour les blocs, pour enregistrer la texture ",(0,n.kt)("inlineCode",{parentName:"li"},"forge:white")),(0,n.kt)("li",{parentName:"ul"},"Ajout de la possibilit\xe9 de g\xe9n\xe9rer les valeurs sp\xe9cifiques de Forge dans le fichier ",(0,n.kt)("inlineCode",{parentName:"li"},"pack.mcmeta")," avec les ",(0,n.kt)("em",{parentName:"li"},"data generators")),(0,n.kt)("li",{parentName:"ul"},"Ajout d'un nouvel \xe9v\xe9nement, ",(0,n.kt)("inlineCode",{parentName:"li"},"TradeWithVillagerEvent")),(0,n.kt)("li",{parentName:"ul"},"Ajout de la prise en charge des impl\xe9mentations personnalis\xe9es de ",(0,n.kt)("inlineCode",{parentName:"li"},"CreativeModeTab")),(0,n.kt)("li",{parentName:"ul"},"Ajouter de plusieurs m\xe9thodes d'aide pour acc\xe9der \xe0 l'ensemble des emplacements de sprites charg\xe9s"),(0,n.kt)("li",{parentName:"ul"},"Ajout de la possibilit\xe9 d'utiliser la classe ",(0,n.kt)("inlineCode",{parentName:"li"},"PackOutput")," dans les classes ajout\xe9es par Forge, utilis\xe9es pour les ",(0,n.kt)("em",{parentName:"li"},"data generators"))),(0,n.kt)("h3",{id:"changements"},"Changements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"D\xe9placement des registres de datapack vers l'\xe9v\xe9nement ",(0,n.kt)("inlineCode",{parentName:"li"},"DataPackRegistryEvent.NewRegistry")," au lieu de les lier \xe0 ",(0,n.kt)("inlineCode",{parentName:"li"},"ForgeRegistry")),(0,n.kt)("li",{parentName:"ul"},"D\xe9sactivation du champ ",(0,n.kt)("inlineCode",{parentName:"li"},"guiLight3d")," pour les mod\xe8les d'items g\xe9n\xe9r\xe9s")),(0,n.kt)("h3",{id:"suppressions"},"Suppressions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Suppression de la classe ",(0,n.kt)("inlineCode",{parentName:"li"},"ForgeRegistryTagsProvider")),(0,n.kt)("li",{parentName:"ul"},"Suppression du doublon ",(0,n.kt)("inlineCode",{parentName:"li"},"updateNeighbourForOutputSignal"))),(0,n.kt)("h3",{id:"corrections"},"Corrections"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Correction de la fusion des packs de ressources de mods ne retournant pas toutes les ressources avec le m\xeame nom lorsque cela est demand\xe9"),(0,n.kt)("li",{parentName:"ul"},"Correction de la classe ",(0,n.kt)("inlineCode",{parentName:"li"},"BlockStateProvider"),", qui n'attendait pas la g\xe9n\xe9ration des mod\xe8les avant de terminer son processus"),(0,n.kt)("li",{parentName:"ul"},"Correction des caches du chargeur OBJ, qui ne sont pas ",(0,n.kt)("em",{parentName:"li"},"thread-safe")),(0,n.kt)("li",{parentName:"ul"},"Correction des mod\xe8les imbriqu\xe9s dans des g\xe9om\xe9tries personnalis\xe9es qui ne trouvait pas leurs ",(0,n.kt)("em",{parentName:"li"},"parents")),(0,n.kt)("li",{parentName:"ul"},"Correction du lien bris\xe9 pour la documentation de v\xe9rification de mise \xe0 jour dans le fichier ",(0,n.kt)("inlineCode",{parentName:"li"},"mods.toml")," du mdk"),(0,n.kt)("li",{parentName:"ul"},"Ajout d'une cl\xe9 de traduction pour la description du fichier ",(0,n.kt)("inlineCode",{parentName:"li"},"pack.mcmeta")," de Forge"),(0,n.kt)("li",{parentName:"ul"},"Correction de l'utilisation d'un ",(0,n.kt)("inlineCode",{parentName:"li"},"DeferredRegister")," sur un registre non envelopp\xe9 par Forge"),(0,n.kt)("li",{parentName:"ul"},"Correction de la classe ",(0,n.kt)("inlineCode",{parentName:"li"},"SidedInvWrapper")," qui ne tenait pas compte des cas sp\xe9ciaux d'empilage de base dans les alambics et les fours"),(0,n.kt)("li",{parentName:"ul"},"Correction du rendu des onglets de l'inventaire cr\xe9atif qui se chevauchaient si l'onglet s\xe9lectionn\xe9 n'\xe9tait pas sur la page actuelle"),(0,n.kt)("li",{parentName:"ul"},"Correction des registres de ",(0,n.kt)("em",{parentName:"li"},"datapack")," qui n'\xe9tait pas synchronis\xe9s avec les clients"),(0,n.kt)("li",{parentName:"ul"},"Correction des ressources de Forge qui rempla\xe7aient celles de base"),(0,n.kt)("li",{parentName:"ul"},"Correction du ",(0,n.kt)("em",{parentName:"li"},"logspam")," lorsqu'une ressource \xe0 la racine est demand\xe9e \xe0 partir de ",(0,n.kt)("inlineCode",{parentName:"li"},"DelegatingPackResources")),(0,n.kt)("li",{parentName:"ul"},"Correction de la poudre de b\xe9ton qui n'\xe9tait pas hydrat\xe9e par des sources d'eau"),(0,n.kt)("li",{parentName:"ul"},"Correction de la classe ",(0,n.kt)("inlineCode",{parentName:"li"},"StemBlock")," ne v\xe9rifiant pas la fonction ",(0,n.kt)("inlineCode",{parentName:"li"},"canSustainPlant")," pour le bloc cens\xe9 \xeatre correct, d\xe9sormais elle v\xe9rifie maintenant pour les melons/citrouilles au lieu de la tige elle-m\xeame")))}d.isMDXComponent=!0}}]);