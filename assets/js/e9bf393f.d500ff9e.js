"use strict";(self.webpackChunkdoc_forge=self.webpackChunkdoc_forge||[]).push([[9120],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=d(n),c=r,v=m["".concat(l,".").concat(c)]||m[c]||p[c]||o;return n?a.createElement(v,s(s({ref:t},u),{},{components:n})):a.createElement(v,s({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var d=2;d<o;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7177:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:2,title:"Base du mod",description:"Comment installer les bases du mod ?",tags:["bases"]},s=void 0,i={unversionedId:"bases/base_du_mod",id:"bases/base_du_mod",title:"Base du mod",description:"Comment installer les bases du mod ?",source:"@site/docs/bases/base_du_mod.mdx",sourceDirName:"bases",slug:"/bases/base_du_mod",permalink:"/bases/base_du_mod",draft:!1,editUrl:"https://github.com/Les-Moddeurs-Francais/Documentation-Forge/edit/master/docs/bases/base_du_mod.mdx",tags:[{label:"bases",permalink:"/tags/bases"}],version:"current",lastUpdatedBy:"Mysterious_Dev",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Base du mod",description:"Comment installer les bases du mod ?",tags:["bases"]},sidebar:"documentationSidebar",previous:{title:"Installation",permalink:"/bases/installation"},next:{title:"Mods.toml",permalink:"/bases/mods_toml"}},l={},d=[{value:"Classe principale",id:"classe-principale",level:2},{value:"Organisation",id:"organisation",level:3},{value:"Code",id:"code",level:3},{value:"mods.toml",id:"modstoml",level:2},{value:"Modid",id:"modid",level:3},{value:"Nom du mod",id:"nom-du-mod",level:3},{value:"Cr\xe9dits",id:"cr\xe9dits",level:3},{value:"Description",id:"description",level:3}],u={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\xc0 la cr\xe9ation de votre mod, vous aurez besoin de cr\xe9er sa base.\nPour cela on va avoir besoin de cr\xe9er la classe principale et\nmodifier le mods.toml de quoi pouvoir faire d\xe9tecter votre mod \xe0 Forge."),(0,r.kt)("h2",{id:"classe-principale"},"Classe principale"),(0,r.kt)("h3",{id:"organisation"},"Organisation"),(0,r.kt)("p",null,"Pour commencer, dans le dossier ",(0,r.kt)("em",{parentName:"p"},"src/main/java"),", vous pouvez supprimer les packages d'exemple. On n'en aura pas besoin, on va tout reprendre de z\xe9ro.\nIl va falloir bien organiser notre mod d\xe8s le d\xe9part pour \xe9viter que ce soit vite le bazar.",(0,r.kt)("br",{parentName:"p"}),"\n","Pour cela on va nommer l'arborescence de nos packages de la m\xeame sorte qu'un nom de domaine d'un site web, mais dans le sens inverse.\nPar exemple dans mon cas ",(0,r.kt)("inlineCode",{parentName:"p"},"fr.zom.testmod"),". On rep\xe8re la langue du d\xe9veloppeur avec ",(0,r.kt)("inlineCode",{parentName:"p"},"fr"),", le pseudo ",(0,r.kt)("inlineCode",{parentName:"p"},"zom")," ainsi que le nom du mod ",(0,r.kt)("inlineCode",{parentName:"p"},"testmod"),"."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Il est fortement d\xe9conseill\xe9 d'utiliser des accents ainsi que des majuscules")),(0,r.kt)("p",null,"Une fois les packages cr\xe9\xe9s, vous pouvez cr\xe9er une classe \xe0 laquelle on donne le nom de notre mod avec une majuscule au d\xe9but.\nPar exemple : ",(0,r.kt)("inlineCode",{parentName:"p"},"TestMod")),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Dans cet article je suivrai la convention PascalCase.")),(0,r.kt)("h3",{id:"code"},"Code"),(0,r.kt)("p",null,"On va s'attaquer au code maintenant."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Mod(TestMod.MODID)\npublic class TestMod {\n\n    public static final String MODID = "testmod";\n\n    public TestMod()\n    {\n       IEventBus bus = FMLJavaModLoadingContext.get().getModEventBus();\n       \n       bus.addListener(this::setup);\n       bus.addListener(this::clientSetup); \n    }\n    \n    public void setup(FMLCommonSetupEvent e)\n    {\n    }\n    \n    public void clientSetup(FMLClientSetupEvent e)\n    {\n    }\n    \n\n}\n\n')),(0,r.kt)("p",null,"D\xe9composons le code petit \xe0 petit."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Mod(TestMod.MODID)\npublic class TestMod {\n")),(0,r.kt)("p",null,"Tout d'abord, nous devons ajouter l'annotation ",(0,r.kt)("em",{parentName:"p"},"@Mod")," avec en param\xe8tre le modid,\nsoit l'identifiant de notre mod pour signaler \xe0 Forge que notre mod est pr\xe9sent."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Il est fortement conseill\xe9 de mettre votre modid dans une variable final de sorte que vous n'ayez pas \xe0 retaper \xe0 la main votre modid et ainsi limiter les erreurs (et en plus ce n'est pas hard-cod\xe9 et \xe7a, c'est bien !). Et veillez \xe9galement \xe0 ne pas mettre de majuscules en \xe9crivant votre modid !")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"    public void setup(FMLCommonSetupEvent e)\n    {\n    }\n    \n    public void clientSetup(FMLClientSetupEvent e)\n    {\n    }\n")),(0,r.kt)("p",null,"Ici j'ai saut\xe9 quelques lignes, on reviendra sur le constructeur plus haut un peu apr\xe8s.\nLes deux m\xe9thodes que nous avons cr\xe9\xe9es juste ici serviront \xe0 certaines fonctions, notamment\npour la g\xe9n\xe9ration de minerais ou encore le changement de rendu de certains blocs/items\npar exemple. La m\xe9thode ",(0,r.kt)("em",{parentName:"p"},"setup")," servira pour les fonctionnalit\xe9s c\xf4t\xe9 serveur.\nLa m\xe9thode ",(0,r.kt)("em",{parentName:"p"},"clientSetup")," quant \xe0 elle, servira pour le c\xf4t\xe9 client, d'o\xf9 son nom."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"    public TestMod()\n    {\n       IEventBus bus = FMLJavaModLoadingContext.get().getModEventBus();\n       \n       bus.addListener(this::setup);\n       bus.addListener(this::clientSetup); \n    }\n")),(0,r.kt)("p",null,'Enfin, dans le constructeur, nous indiquons \xe0 Forge que nous "\xe9coutons" les events ',(0,r.kt)("em",{parentName:"p"},"FMLCommonSetupEvent")," et ",(0,r.kt)("em",{parentName:"p"},"FMLClientSetupEvent")," quand ils sont appel\xe9s.\nGrossi\xe8rement, on ex\xe9cute les m\xe9thodes ",(0,r.kt)("em",{parentName:"p"},"setup")," et ",(0,r.kt)("em",{parentName:"p"},"clientSetup")," lorsque Forge mets en place le jeu et le client sp\xe9cifiquement pour l'\xe9v\xe9nement ",(0,r.kt)("em",{parentName:"p"},"FMLClientSetupEvent"),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"La variable ",(0,r.kt)("strong",{parentName:"p"},"bus")," nous servira dans les tutoriels suivants pour enregistrer nos items et blocs.")),(0,r.kt)("p",null,"On en a fini avec le code. Il n'y a pas grand-chose pour le moment, juste de quoi\nlancer le jeu avec notre mod pour \xeatre d\xe9tect\xe9 par Forge. Il nous reste plus qu'\xe0 remplir la\n\"carte d'identit\xe9\" de notre mod."),(0,r.kt)("h2",{id:"modstoml"},"mods.toml"),(0,r.kt)("p",null,"Cette fois-ci, on va se rendre dans le dossier ",(0,r.kt)("em",{parentName:"p"},"src/main/resources")," et vous devriez\ntrouver le fichier ",(0,r.kt)("a",{parentName:"p",href:"/bases/mods_toml"},"mods.toml")," dans le dossier ",(0,r.kt)("em",{parentName:"p"},"META-INF"),".\nCe dernier contient toutes les informations pour identifier votre mod. On va passer en revue ici les informations les plus importantes du fichier."),(0,r.kt)("h3",{id:"modid"},"Modid"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'modId="testmod"\n')),(0,r.kt)("p",null,"Ligne 18 du fichier, vous devriez avoir la propri\xe9t\xe9 ",(0,r.kt)("em",{parentName:"p"},"modId")," o\xf9 entre guillemets\nvous notez ",(0,r.kt)("strong",{parentName:"p"},"exactement")," la m\xeame chose que dans la variable cr\xe9\xe9e pr\xe9c\xe9demment dans\nvotre classe principale. Pour ma part, ce sera ",(0,r.kt)("strong",{parentName:"p"},'"testmod"'),"."),(0,r.kt)("h3",{id:"nom-du-mod"},"Nom du mod"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'displayName="TestMod"\n')),(0,r.kt)("p",null,"Ligne 26, on a acc\xe8s \xe0 la forme que le prendra le nom du mod dans la liste\ndes mods de Forge. Ici, vous avez plus de libert\xe9s que pour le modid, vous\npouvez ins\xe9rer des espaces, des majuscules et m\xeame des accents."),(0,r.kt)("h3",{id:"cr\xe9dits"},"Cr\xe9dits"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'credits="Tutoriel r\xe9alis\xe9 pour LMF"\nauthors="Zom\'"\n')),(0,r.kt)("p",null,"Ligne 29, vous pouvez indiquer des remerciements particuliers comme pour les\ngraphistes et les diff\xe9rents contributeurs au mod dans les ",(0,r.kt)("em",{parentName:"p"},"credits"),". Vous\npouvez \xe9galement renseigner les auteurs du mod dans ",(0,r.kt)("em",{parentName:"p"},"authors"),"."),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"description='''\nCeci est la \ndescription sur plusieurs lignes\ndu mod.\n'''\n")),(0,r.kt)("p",null,"Ligne 33 est renseign\xe9e la description du mod que vous pourrez retrouver\ndans la liste des mods quand vous s\xe9lectionner le v\xf4tre. Vous pouvez\ny d\xe9crire de mani\xe8re concise ce qu'ajoute votre mod au jeu."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\xc0 vous de jouer ! Il ne vous reste plus qu'\xe0 lancer la configuration\n",(0,r.kt)("em",{parentName:"p"},"runClient")," dans votre IDE et voir dans la liste des mods\nsi votre mod est pr\xe9sent !")))}p.isMDXComponent=!0}}]);