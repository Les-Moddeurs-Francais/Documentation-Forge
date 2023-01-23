"use strict";(self.webpackChunkdoc_forge=self.webpackChunkdoc_forge||[]).push([[5754],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,v=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(v,s(s({ref:t},p),{},{components:n})):r.createElement(v,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6978:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:1,title:"Introduction",description:"Qu'est ce que les data generators ?",tags:["data generators","introduction"]},s=void 0,o={unversionedId:"data/intro",id:"version-1.18.x/data/intro",title:"Introduction",description:"Qu'est ce que les data generators ?",source:"@site/versioned_docs/version-1.18.x/data/intro.mdx",sourceDirName:"data",slug:"/data/intro",permalink:"/1.18.x/data/intro",draft:!1,editUrl:"https://github.com/Les-Moddeurs-Francais/Documentation-Forge/edit/master/versioned_docs/version-1.18.x/data/intro.mdx",tags:[{label:"data generators",permalink:"/1.18.x/tags/data-generators"},{label:"introduction",permalink:"/1.18.x/tags/introduction"}],version:"1.18.x",lastUpdatedBy:"Mysterious_Dev",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Introduction",description:"Qu'est ce que les data generators ?",tags:["data generators","introduction"]},sidebar:"tutorialSidebar",previous:{title:"Data Generators",permalink:"/1.18.x/category/data-generators"},next:{title:"Recettes",permalink:"/1.18.x/data/recipe"}},l={},u=[{value:"GatherDataEvent",id:"gatherdataevent",level:2},{value:"&quot;build.gradle&quot;",id:"buildgradle",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Depuis la 1.8, Minecraft voit de plus en plus de ses fonctionnalit\xe9s mises sous forme de\njson. Par exemple : les mod\xe8les de blocs/items, les loot tables, les recettes, etc...\nEt vous devez savoir comme il est p\xe9nible d'\xe9crire du json \xe0 la main. C'est un probl\xe8me\nque m\xeame Mojang eut et suite \xe0 cela, les d\xe9veloppeurs du jeu mirent \xe0 disposition du\ncode permettant de g\xe9n\xe9rer (presque) automatiquement tous ces jsons."),(0,a.kt)("p",null,"Ce sont les ",(0,a.kt)("strong",{parentName:"p"},"Data Generators"),"."),(0,a.kt)("p",null,"Dans cet article nous verrons simplement les pr\xe9requis pour utiliser ces dits g\xe9n\xe9rateurs.\nNous ne verrons pas l'ensemble des g\xe9n\xe9rateurs dans cette m\xeame section. Cependant, une\nsection sera d\xe9di\xe9e pour l'ensemble des g\xe9n\xe9rateurs disponibles !"),(0,a.kt)("h2",{id:"gatherdataevent"},"GatherDataEvent"),(0,a.kt)("p",null,"Un event a \xe9t\xe9 cr\xe9\xe9 expr\xe8s par Forge pour que l'on puisse utiliser les g\xe9n\xe9rateurs.\nNous allons cr\xe9er une classe sp\xe9cifique pour a\xe9rer notre code et \xe9viter de surcharger\nnotre classe principale (ce choix est p\xfbrement personnel, \xe0 vous de choisir ce qui\nvous convient le mieux)"),(0,a.kt)("p",null,"Dans un nouveau package ",(0,a.kt)("inlineCode",{parentName:"p"},"data"),", on va cr\xe9er une classe ",(0,a.kt)("inlineCode",{parentName:"p"},"DataGen")," et y \xe9crire :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"@Mod.EventBusSubscriber(modid = Testmod.MODID, bus = Mod.EventBusSubscriber.Bus.MOD)\npublic class DataGen {\n\n    public static final ExistingFileHelper IGNORING_FILES_EFH = new ExistingFileHelper(Collections.emptyList(), Sets.newConcurrentHashSet(), false, null, null);\n\n    @SubscribeEvent\n    public static void dataGen(GatherDataEvent e)\n    {\n        DataGenerator generator = e.getGenerator();\n    }\n}\n")),(0,a.kt)("p",null,"Allons-y pas \xe0 pas pour les explications."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"@Mod.EventBusSubscriber(modid = Testmod.MODID, bus = Mod.EventBusSubscriber.Bus.MOD)\n")),(0,a.kt)("p",null,"Tout d'abord, nous avons l'annotation ",(0,a.kt)("inlineCode",{parentName:"p"},"@Mod.EventBusSubscriber")," qui permets de signaler\n\xe0 Forge la pr\xe9sence de notre classe et que cette derni\xe8re \xe9coute des \xe9v\xe8nements.\nUtiliser cette annotation nous permet d'enregistrer tous les m\xe9thodes statiques de notre\nclasse ayant un event de Forge en param\xe8tre et l'annotation ",(0,a.kt)("inlineCode",{parentName:"p"},"@SubscribeEvent"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public static final ExistingFileHelper IGNORING_FILES_EFH = new ExistingFileHelper(Collections.emptyList(), Sets.newConcurrentHashSet(), false, null, null);\n")),(0,a.kt)("p",null,"Ici, je cr\xe9e une variable de type ",(0,a.kt)("inlineCode",{parentName:"p"},"ExistingFileHelper")," qui me servira pour mes diff\xe9rents\ng\xe9n\xe9rateurs \xe0 l'avenir. Initialement, les g\xe9n\xe9rateurs v\xe9rifient que certains fichiers existent\nlorsqu'on g\xe9n\xe9re un asset. Par exemple, pour les mod\xe8les d'item, si la texture n'est pas\npr\xe9sente dans les fichiers du mod, le g\xe9n\xe9rateur renvoie une erreur. Cette fonctionnalit\xe9\npeut \xeatre utile dans certains cas, mais dans le n\xf4tre, ignorer ses v\xe9rifications\nnous facilitera le travail."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"@SubscribeEvent\npublic static void dataGen(final GatherDataEvent e)\n{\n    DataGenerator generator = e.getGenerator();\n}\n")),(0,a.kt)("p",null,"Enfin, on termine par la m\xe9thode qui nous int\xe9resse le plus, celle qui contiendra tous\nnos g\xe9n\xe9rateurs."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Veillez bien \xe0 ce que l'annotation @SubscribeEvent soit pr\xe9sente, et \xe0 ce que la m\xe9thode\nsoit statique !")),(0,a.kt)("p",null,"Il nous faut \xe9galement un param\xe8tre de type ",(0,a.kt)("inlineCode",{parentName:"p"},"GatherDataEvent")," qui est l'event cl\xe9 comme\npr\xe9cis\xe9 plus haut."),(0,a.kt)("p",null,"Derni\xe8re chose, on cr\xe9e une variable de type ",(0,a.kt)("inlineCode",{parentName:"p"},"DataGenerator")," faisant r\xe9f\xe9rence au g\xe9n\xe9rateur\nde l'event que l'on gardera bien au chaud pour les diff\xe9rents g\xe9n\xe9rateurs."),(0,a.kt)("h2",{id:"buildgradle"},'"build.gradle"'),(0,a.kt)("p",null,"Il reste un petit d\xe9tail pour \xe9viter tout probl\xe8me dans votre ",(0,a.kt)("inlineCode",{parentName:"p"},"build.gradle"),".\nRendez vous vers la ligne 99. Vous devriez rep\xe9rer cette ligne :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"args '--mod', 'testmod', '--all', '--output', file('src/generated/resources/'), '--existing', file('src/main/resources/')\n")),(0,a.kt)("p",null,"La seule chose \xe0 changer est la deuxi\xe8me paire de guillemets o\xf9 vous devez ins\xe9rer\nvotre modid. Dans mon cas c'est ",(0,a.kt)("inlineCode",{parentName:"p"},"testmod"),"."),(0,a.kt)("p",null,"Une fois cela fait, relancez la t\xe2che gradle ",(0,a.kt)("inlineCode",{parentName:"p"},"genIntellijRuns")," si vous \xeates sur IntelliJ\nou bien ",(0,a.kt)("inlineCode",{parentName:"p"},"genEclipseRuns")," si vous \xeates sur Eclipse."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"D\xe9sormais pour v\xe9rifier si tout fonctionne bien, vous pouvez ins\xe9rer un ",(0,a.kt)("em",{parentName:"p"},"print")," dans la\nm\xe9thode ",(0,a.kt)("inlineCode",{parentName:"p"},"dataGen")," et ex\xe9cuter la configuration ",(0,a.kt)("inlineCode",{parentName:"p"},"runData")," dans votre IDE pour voir si votre\nmessage s'affiche bien.")))}c.isMDXComponent=!0}}]);