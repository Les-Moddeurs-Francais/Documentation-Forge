"use strict";(self.webpackChunkdoc_forge=self.webpackChunkdoc_forge||[]).push([[6462],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,k=c["".concat(s,".").concat(d)]||c[d]||p[d]||i;return n?r.createElement(k,l(l({ref:t},m),{},{components:n})):r.createElement(k,l({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8350:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={sidebar_position:3,title:"Generator",description:"Comment utiliser les GameTest Generator ?",tags:["game_test"]},s=void 0,u={unversionedId:"advanced/gametests/generator",id:"advanced/gametests/generator",title:"Generator",description:"Comment utiliser les GameTest Generator ?",source:"@site/docs/advanced/gametests/generator.md",sourceDirName:"advanced/gametests",slug:"/advanced/gametests/generator",permalink:"/Documentation-Forge/docs/advanced/gametests/generator",draft:!1,editUrl:"https://github.com/Les-Moddeurs-Francais/Documentation-Forge/edit/master/docs/advanced/gametests/generator.md",tags:[{label:"game_test",permalink:"/Documentation-Forge/docs/tags/game-test"}],version:"current",lastUpdatedBy:"Mireole",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Generator",description:"Comment utiliser les GameTest Generator ?",tags:["game_test"]},sidebar:"tutorialSidebar",previous:{title:"Batches",permalink:"/Documentation-Forge/docs/advanced/gametests/batches"}},m={},p=[{value:"La m\xe9thode en elle-m\xeame",id:"la-m\xe9thode-en-elle-m\xeame",level:2},{value:"La classe <code>TestFunction</code>",id:"la-classe-testfunction",level:2},{value:"Finaliser le GameTestGenerator",id:"finaliser-le-gametestgenerator",level:2}],c={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Les GameTest Generators sont des m\xe9thodes annot\xe9es avec ",(0,i.kt)("inlineCode",{parentName:"p"},"@GameTestGenerator")," qui permettent de g\xe9n\xe9rer plusieurs GameTests dynamiquement depuis une seule m\xe9thode."),(0,i.kt)("h2",{id:"la-m\xe9thode-en-elle-m\xeame"},"La m\xe9thode en elle-m\xeame"),(0,i.kt)("p",null,"Les m\xe9thodes annot\xe9es avec ",(0,i.kt)("inlineCode",{parentName:"p"},"@GameTestGenerator")," ne doivent prendre aucun argument et retourner une liste de ",(0,i.kt)("inlineCode",{parentName:"p"},"TestFunction"),"s qui contiendra les GameTests g\xe9n\xe9r\xe9s."),(0,i.kt)("p",null,"Exemple :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Structure d'un GameTestGenerator, attention celui-l\xe0 ne cr\xe9e aucun GameTest !\n@GameTestGenerator\npublic List<TestFunction> generateGameTests() {\n  return ImmutableList.of();\n}\n")),(0,i.kt)("h2",{id:"la-classe-testfunction"},"La classe ",(0,i.kt)("inlineCode",{parentName:"h2"},"TestFunction")),(0,i.kt)("p",null,"La classe ",(0,i.kt)("inlineCode",{parentName:"p"},"TestFunction")," est une classe repr\xe9sentant un GameTest."),(0,i.kt)("p",null,"Elle poss\xe8de trois constructeurs :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Le premier prend :",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"un ",(0,i.kt)("inlineCode",{parentName:"li"},"String")," qui est le nom du batch utilis\xe9 pour le test"),(0,i.kt)("li",{parentName:"ul"},"un ",(0,i.kt)("inlineCode",{parentName:"li"},"String")," qui est le nom du test"),(0,i.kt)("li",{parentName:"ul"},"un ",(0,i.kt)("inlineCode",{parentName:"li"},"String")," qui est le chemin d'acc\xe8s \xe0 la template du test (exemple : ",(0,i.kt)("inlineCode",{parentName:"li"},"minecraft:minecart_test"),"). Pour plus de facilit\xe9, vous pouvez cr\xe9er une ",(0,i.kt)("inlineCode",{parentName:"li"},"ResourceLocation"),", puis utiliser sa m\xe9thode ",(0,i.kt)("inlineCode",{parentName:"li"},"toString()"),"."),(0,i.kt)("li",{parentName:"ul"},"un ",(0,i.kt)("inlineCode",{parentName:"li"},"int")," qui repr\xe9sente le nombre de ticks avant que le test ne soit consid\xe9r\xe9 comme \xe9chou\xe9 s'il n'a pas d\xe9j\xe0 r\xe9ussi ou \xe9chou\xe9 avant"),(0,i.kt)("li",{parentName:"ul"},"un ",(0,i.kt)("inlineCode",{parentName:"li"},"long")," qui repr\xe9sente le nombre de ticks entre le placement de la template et le d\xe9but du test"),(0,i.kt)("li",{parentName:"ul"},"un ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean")," qui repr\xe9sente si le test est requis ou non pour valider tous les tests, c'est-\xe0-dire si le r\xe9sultat du test influera le code de sortie de la configuration runGameTestServer par exemple"),(0,i.kt)("li",{parentName:"ul"},"un ",(0,i.kt)("inlineCode",{parentName:"li"},"Consumer<GameTestHelper>")," qui contient le code \xe0 ex\xe9cuter pour le GameTest"))),(0,i.kt)("li",{parentName:"ul"},"Le deuxi\xe8me prend :",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"un ",(0,i.kt)("inlineCode",{parentName:"li"},"String")," qui est le nom du batch utilis\xe9 pour le test"),(0,i.kt)("li",{parentName:"ul"},"un ",(0,i.kt)("inlineCode",{parentName:"li"},"String")," qui est le nom du test"),(0,i.kt)("li",{parentName:"ul"},"un ",(0,i.kt)("inlineCode",{parentName:"li"},"String")," qui est le chemin d'acc\xe8s \xe0 la template du test (exemple : ",(0,i.kt)("inlineCode",{parentName:"li"},"minecraft:minecart_test"),"). Pour plus de facilit\xe9, vous pouvez cr\xe9er une ",(0,i.kt)("inlineCode",{parentName:"li"},"ResourceLocation"),", puis utiliser sa m\xe9thode ",(0,i.kt)("inlineCode",{parentName:"li"},"toString()"),"."),(0,i.kt)("li",{parentName:"ul"},"une ",(0,i.kt)("inlineCode",{parentName:"li"},"Rotation")," qui repr\xe9sente la rotation de la template"),(0,i.kt)("li",{parentName:"ul"},"un ",(0,i.kt)("inlineCode",{parentName:"li"},"int")," qui repr\xe9sente le nombre de ticks avant que le test ne soit consid\xe9r\xe9 comme \xe9chou\xe9 s'il n'a pas d\xe9j\xe0 r\xe9ussi ou \xe9chou\xe9 avant"),(0,i.kt)("li",{parentName:"ul"},"un ",(0,i.kt)("inlineCode",{parentName:"li"},"long")," qui repr\xe9sente le nombre de ticks entre le placement de la template et le d\xe9but du test"),(0,i.kt)("li",{parentName:"ul"},"un ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean")," qui repr\xe9sente si le test est requis ou non pour valider tous les tests, c'est-\xe0-dire si le r\xe9sultat du test influera le code de sortie de la configuration runGameTestServer par exemple"),(0,i.kt)("li",{parentName:"ul"},"un ",(0,i.kt)("inlineCode",{parentName:"li"},"Consumer<GameTestHelper>")," qui contient le code \xe0 ex\xe9cuter pour le GameTest"))),(0,i.kt)("li",{parentName:"ul"},"Le troisi\xe8me prend :",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"un ",(0,i.kt)("inlineCode",{parentName:"li"},"String")," qui est le nom du batch utilis\xe9 pour le test"),(0,i.kt)("li",{parentName:"ul"},"un ",(0,i.kt)("inlineCode",{parentName:"li"},"String")," qui est le nom du test"),(0,i.kt)("li",{parentName:"ul"},"un ",(0,i.kt)("inlineCode",{parentName:"li"},"String")," qui est le chemin d'acc\xe8s \xe0 la template du test (exemple : ",(0,i.kt)("inlineCode",{parentName:"li"},"minecraft:minecart_test"),"). Pour plus de facilit\xe9, vous pouvez cr\xe9er une ",(0,i.kt)("inlineCode",{parentName:"li"},"ResourceLocation"),", puis utiliser sa m\xe9thode ",(0,i.kt)("inlineCode",{parentName:"li"},"toString()"),"."),(0,i.kt)("li",{parentName:"ul"},"une ",(0,i.kt)("inlineCode",{parentName:"li"},"Rotation")," qui repr\xe9sente la rotation de la template"),(0,i.kt)("li",{parentName:"ul"},"un ",(0,i.kt)("inlineCode",{parentName:"li"},"int")," qui repr\xe9sente le nombre de ticks avant que le test ne soit consid\xe9r\xe9 comme \xe9chou\xe9 s'il n'a pas d\xe9j\xe0 r\xe9ussi ou \xe9chou\xe9 avant"),(0,i.kt)("li",{parentName:"ul"},"un ",(0,i.kt)("inlineCode",{parentName:"li"},"long")," qui repr\xe9sente le nombre de ticks entre le placement de la template et le d\xe9but du test"),(0,i.kt)("li",{parentName:"ul"},"un ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean")," qui repr\xe9sente si le test est requis ou non pour valider tous les tests, c'est-\xe0-dire si le r\xe9sultat du test influera le code de sortie de la configuration runGameTestServer par exemple"),(0,i.kt)("li",{parentName:"ul"},"un ",(0,i.kt)("inlineCode",{parentName:"li"},"int")," qui repr\xe9sente le nombre maximum de fois que le test peut \xeatre ex\xe9cut\xe9"),(0,i.kt)("li",{parentName:"ul"},"un ",(0,i.kt)("inlineCode",{parentName:"li"},"int")," qui repr\xe9sente le nombre de r\xe9ussites requises pour valider le test"),(0,i.kt)("li",{parentName:"ul"},"un ",(0,i.kt)("inlineCode",{parentName:"li"},"Consumer<GameTestHelper>")," qui contient le code \xe0 ex\xe9cuter pour le GameTest")))),(0,i.kt)("p",null,"Exemple (avec le deuxi\xe8me constructeur) :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'TestFunction hopperTest = new TestFunction(\n  "defaultBatch",                                                 // batch utilis\xe9 pour le test\n  "hoppertest",                                                   // nom du test\n  new ResourceLocation("mod_id", "tests.hopper_test").toString(), // chemin d\'acc\xe8s \xe0 la template du test\n  Rotation.NONE,                                                  // rotation de la template\n  100,                                                            // nombre de ticks avant que le test ne soit consid\xe9r\xe9 comme \xe9chou\xe9 s\'il n\'a pas d\xe9j\xe0 r\xe9ussi ou \xe9chou\xe9 avant\n  0,                                                              // nombre de ticks entre le placement de la template et le d\xe9but du test\n  true,                                                           // si le test est requis ou non\n  helper -> {                                                     // code \xe0 ex\xe9cuter pour le GameTest\n    helper.spawnItem(Items.DIAMOND, 2, 3, 2);\n    helper.assertAtTickTimeContainerContains(20, new BlockPos(2, 2, 2), Items.DIAMOND);\n    helper.runAtTickTime(21, helper::succeed);\n  }\n);\n')),(0,i.kt)("h2",{id:"finaliser-le-gametestgenerator"},"Finaliser le GameTestGenerator"),(0,i.kt)("p",null,"Pour finir, il vous suffit de mettre toutes les ",(0,i.kt)("inlineCode",{parentName:"p"},"TestFunction"),"s que vous avez cr\xe9\xe9es dans une liste, puis de retourner la liste depuis votre ",(0,i.kt)("inlineCode",{parentName:"p"},"GameTestGenerator"),"."),(0,i.kt)("p",null,"Exemple avec une seule ",(0,i.kt)("inlineCode",{parentName:"p"},"TestFunction")," :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@GameTestGenerator\npublic static List<TestFunction> generateTests(){\n  TestFunction hopperTest = new TestFunction(\n    "defaultBatch",\n    "hoppertest",\n    new ResourceLocation("mod_id", "tests.hopper_test").toString(),\n    Rotation.NONE,\n    100,\n    0,\n    true,\n    helper ->{\n        helper.spawnItem(Items.DIAMOND,2,3,2);\n        helper.assertAtTickTimeContainerContains(20,new BlockPos(2,2,2),Items.DIAMOND);\n        helper.runAtTickTime(21,helper::succeed);\n  });\n  return ImmutableList.of(hopperTest);\n}\n')))}d.isMDXComponent=!0}}]);