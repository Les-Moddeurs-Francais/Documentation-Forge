"use strict";(self.webpackChunkdoc_forge=self.webpackChunkdoc_forge||[]).push([[1451],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,f=p["".concat(s,".").concat(d)]||p[d]||c[d]||i;return n?r.createElement(f,o(o({ref:t},m),{},{components:n})):r.createElement(f,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5700:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={slug:"forge-116-362",title:"Forge 1.16.5 36.2",authors:["mysterious_dev"],tags:["forge","mise \xe0 jour",1.16]},s=void 0,u={permalink:"/news/forge-116-362",editUrl:"https://github.com/Les-Moddeurs-Francais/Documentation-Forge/edit/master/news/2021-07-22-forge-116-362.md",source:"@site/news/2021-07-22-forge-116-362.md",title:"Forge 1.16.5 36.2",description:"La version 1.16.5 36.2 de Forge est sortie et elle apporte quelques nouveaut\xe9s.",date:"2021-07-22T00:00:00.000Z",formattedDate:"22 juillet 2021",tags:[{label:"forge",permalink:"/news/tags/forge"},{label:"mise \xe0 jour",permalink:"/news/tags/mise-a-jour"},{label:"1.16",permalink:"/news/tags/1-16"}],hasTruncateMarker:!0,authors:[{name:"Mysterious_Dev",title:"Admin de Les Moddeurs Francais",url:"https://github.com/Mysterious-Dev",email:"mysterious_dev@lesmoddeursfrancais.fr",imageURL:"https://github.com/Mysterious-Dev.png",key:"mysterious_dev"}],frontMatter:{slug:"forge-116-362",title:"Forge 1.16.5 36.2",authors:["mysterious_dev"],tags:["forge","mise \xe0 jour","1.16"]},prevItem:{title:"Forge 1.17.1 37.1",permalink:"/news/forge-117-371"},nextItem:{title:"Forge 1.17.1 37.0",permalink:"/news/forge-117-370"}},m={authorsImageUrls:[void 0]},c=[{value:"Nouveaut\xe9s",id:"nouveaut\xe9s",level:3},{value:"Correctifs",id:"correctifs",level:3}],p={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"La version 1.16.5 36.2 de Forge est sortie et elle apporte quelques nouveaut\xe9s."),(0,i.kt)("p",null,"Lien de l'annonce de Forge : ",(0,i.kt)("a",{parentName:"p",href:"https://forums.minecraftforge.net/topic/102524-forge-362-minecraft-1165/"},"https://forums.minecraftforge.net/topic/102524-forge-362-minecraft-1165/")),(0,i.kt)("h3",{id:"nouveaut\xe9s"},"Nouveaut\xe9s"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ajout d'un loader custom pour les ",(0,i.kt)("inlineCode",{parentName:"li"},"TextureAtlasSprite")," d\xe9stin\xe9 aux blocs qui n\xe9cessitent des textures dynamiques sans moteur de rendu dit ",(0,i.kt)("strong",{parentName:"li"},"fancy")),(0,i.kt)("li",{parentName:"ul"},"Ajout d'un data generator pour le sounds.json"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AbstractFurnaceTileEntity")," utilise d\xe9sormais le r\xe9sultat de la fonction ",(0,i.kt)("inlineCode",{parentName:"li"},"IRecipe#assemble")),(0,i.kt)("li",{parentName:"ul"},"L'entit\xe9 ",(0,i.kt)("inlineCode",{parentName:"li"},"SmallFireballEntity")," ne v\xe9rifie plus la r\xe8gle de jeu mobGriefing, au profit de l'event ",(0,i.kt)("inlineCode",{parentName:"li"},"MobGriefingEvent")),(0,i.kt)("li",{parentName:"ul"},"Les ",(0,i.kt)("inlineCode",{parentName:"li"},"Piglins")," utilisent d\xe9sormais l'event ",(0,i.kt)("inlineCode",{parentName:"li"},"MobGriefingEvent")," pour d\xe9cider quand ramasser des objets en or"),(0,i.kt)("li",{parentName:"ul"},"Les fours utilisent d\xe9sormais le ",(0,i.kt)("inlineCode",{parentName:"li"},"IRecipeType")," de la recette actuelle lors du calcul du temps de combustion"),(0,i.kt)("li",{parentName:"ul"},"La vidange des ",(0,i.kt)("inlineCode",{parentName:"li"},"FluidSources")," est d\xe9sormais respectueuse de la suppression du ",(0,i.kt)("inlineCode",{parentName:"li"},"FluidStack"),"."),(0,i.kt)("li",{parentName:"ul"},"Les ",(0,i.kt)("inlineCode",{parentName:"li"},"PlayerEntity")," ont maintenant un attribut de ",(0,i.kt)("em",{parentName:"li"},"knockback")),(0,i.kt)("li",{parentName:"ul"},"Le calcul du ",(0,i.kt)("em",{parentName:"li"},"knockback")," dans ",(0,i.kt)("inlineCode",{parentName:"li"},"PlayerEntity#attack")," a \xe9t\xe9 mis \xe0 jour pour utiliser l'attribut ajout\xe9 ci-dessus"),(0,i.kt)("li",{parentName:"ul"},"Changement de commodit\xe9 pour le d\xe9nombrement des potions"),(0,i.kt)("li",{parentName:"ul"},"Les \xe9chelles customs rendent maintenant les trappes comment pouvant \xeatre grimp\xe9es"),(0,i.kt)("li",{parentName:"ul"},"Ajout de quelques ",(0,i.kt)("em",{parentName:"li"},"access transformers")," dans ",(0,i.kt)("inlineCode",{parentName:"li"},"DimensionSettings")," pour faciliter son utilisation"),(0,i.kt)("li",{parentName:"ul"},"N'importe quel bloc peut maintenant s'annoncer sois m\xeame comme \xe9tant un endroit de spawn"),(0,i.kt)("li",{parentName:"ul"},"Ajout d'un nouvel event, ",(0,i.kt)("inlineCode",{parentName:"li"},"ProjectileImpactEvent#FishingBobber")),(0,i.kt)("li",{parentName:"ul"},"Suppression d'une annotation Nullable de ",(0,i.kt)("inlineCode",{parentName:"li"},"canCreatureSpawn")," qui provoquait des hypoth\xe8ses trompeuses"),(0,i.kt)("li",{parentName:"ul"},"Suppression d'un correctif d\xe9fectueux de la classe ",(0,i.kt)("inlineCode",{parentName:"li"},"Entity")),(0,i.kt)("li",{parentName:"ul"},"Les ",(0,i.kt)("em",{parentName:"li"},"mobs")," peuvent maintenant utiliser des armes \xe0 distance personnalis\xe9es"),(0,i.kt)("li",{parentName:"ul"},"Les entit\xe9s d'\xe9clair peuvent d\xe9sormais infliger des d\xe9gats customs"),(0,i.kt)("li",{parentName:"ul"},'Ajout d\'une "connexion" factice \xe0 ',(0,i.kt)("inlineCode",{parentName:"li"},"FakePlayers"))),(0,i.kt)("h3",{id:"correctifs"},"Correctifs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Correction d'un bug qui rendait les mondes en LAN inaccessible apr\xe8s la suppression d'un mod"),(0,i.kt)("li",{parentName:"ul"},'Correction d\'un probl\xe8me o\xf9 parfois les t\xe2ches gradle runClient/runData/runServer \xe9chouaient avec le message "Impossible de localiser le fichier de classe LaunchTesting"'),(0,i.kt)("li",{parentName:"ul"},"Correction des environnements Forgedev afin qu'ils ne plantent plus avec des probl\xe8mes de chargement de classe lors de l'ex\xe9cution de la configuration \"forge forge test server\""),(0,i.kt)("li",{parentName:"ul"},"Synchronisation de ",(0,i.kt)("inlineCode",{parentName:"li"},"ResourcePackList#addPackFinder")," dans le but de supprimer une condition de concurrence"),(0,i.kt)("li",{parentName:"ul"},"Correction de certains probl\xe8mes de mise en miroir et de rotation du mod\xe8le de certains blocs vanilla (",(0,i.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MC-227255"},"MC-227255"),", ",(0,i.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MC-134110"},"MC-134110"),")"),(0,i.kt)("li",{parentName:"ul"},"Le bouton URL d'un mod dans le menu ",(0,i.kt)("strong",{parentName:"li"},"Mods")," a \xe9t\xe9 r\xe9align\xe9 avec le texte"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PacketBuffer#readLongArray"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"PacketBuffer#readSectionPos")," et ",(0,i.kt)("inlineCode",{parentName:"li"},"PacketBuffer#readString")," ne sont plus supprim\xe9s d'un c\xf4t\xe9"),(0,i.kt)("li",{parentName:"ul"},"Correction d'un blocage de chargement d'un chunk obscur' lors de l'appel de ",(0,i.kt)("inlineCode",{parentName:"li"},"getChunk")),(0,i.kt)("li",{parentName:"ul"},"Correction du ",(0,i.kt)("em",{parentName:"li"},"shift-scrolling")," sur Mac"),(0,i.kt)("li",{parentName:"ul"},"Correction des \xe9liminations de monstres n'\xe9tant pas attribu\xe9es correctement (",(0,i.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MC-121048"},"MC-121048"),")")))}d.isMDXComponent=!0}}]);