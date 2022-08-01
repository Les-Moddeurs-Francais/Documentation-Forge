"use strict";(self.webpackChunkdoc_forge=self.webpackChunkdoc_forge||[]).push([[5174],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,g=p["".concat(l,".").concat(m)]||p[m]||c[m]||i;return t?r.createElement(g,o(o({ref:n},d),{},{components:t})):r.createElement(g,o({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9874:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const i={sidebar_position:3,title:"Fichiers de traductions",description:"Comment utiliser les data generators pour les fichiers de traductions ?",tags:["data generators"]},o=void 0,s={unversionedId:"data/lang",id:"data/lang",title:"Fichiers de traductions",description:"Comment utiliser les data generators pour les fichiers de traductions ?",source:"@site/docs/data/lang.md",sourceDirName:"data",slug:"/data/lang",permalink:"/docs/data/lang",draft:!1,editUrl:"https://github.com/Les-Moddeurs-Francais/Documentation-Forge/edit/master/docs/data/lang.md",tags:[{label:"data generators",permalink:"/docs/tags/data-generators"}],version:"current",lastUpdatedBy:"Mysterious_Dev",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Fichiers de traductions",description:"Comment utiliser les data generators pour les fichiers de traductions ?",tags:["data generators"]},sidebar:"documentationSidebar",previous:{title:"Recettes",permalink:"/docs/data/recipe"},next:{title:"Progr\xe8s",permalink:"/docs/data/advancement"}},l={},u=[{value:"Lang Provider",id:"lang-provider",level:2},{value:"GatherDataEvent",id:"gatherdataevent",level:2}],d={toc:u};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Dans cette section, nous allons voir comment g\xe9n\xe9rer nos fichiers de traductions directement \xe0 l'aide d'un g\xe9n\xe9rateur."),(0,a.kt)("h2",{id:"lang-provider"},"Lang Provider"),(0,a.kt)("p",null,"Pour commencer, nous avons besoin d'une classe qui h\xe9ritera de la classe ",(0,a.kt)("inlineCode",{parentName:"p"},"LanguageProvider"),".\nOn rajoutera le constructeur de la classe dans lequel nous allons modifier quelques trucs."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class LangGenerator extends LanguageProvider {\n\n    public LangGenerator(DataGenerator gen) {\n        super(gen, Technicia.MODID, "en_us");\n    }\n}\n')),(0,a.kt)("p",null,"Ici, j'ai simplement laiss\xe9 le premier param\xe8tre au constructeur et j'ai renseign\xe9\ntoutes les autres valeurs directement dans le ",(0,a.kt)("inlineCode",{parentName:"p"},"super"),". Le premier param\xe8tre\n\xe0 renseigner dans ce dernier est le ",(0,a.kt)("inlineCode",{parentName:"p"},"DataGenerator")," pass\xe9 en param\xe8tre du constructeur.\nEnsuite, on aura besoin du ",(0,a.kt)("strong",{parentName:"p"},"modid")," de votre mod ainsi que de la langue\npour laquelle vous ajoutez une traduction."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Je ne montrerai qu'un seul g\xe9n\xe9rateur\ndans cette section pour lequel je g\xe9n\xe9rerai les traductions pour la langue par\nd\xe9faut de Minecraft.")),(0,a.kt)("p",null,"J'ai marqu\xe9 ",(0,a.kt)("inlineCode",{parentName:"p"},'"en_us"')," pour l'anglais am\xe9ricain qui est la langue de base de\nMinecraft. Pour le fran\xe7ais par exemple, il faut noter ",(0,a.kt)("inlineCode",{parentName:"p"},'"fr_fr""'),"."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Vous pouvez retrouver toutes les langues ",(0,a.kt)("a",{parentName:"p",href:"https://minecraft.fandom.com/wiki/Language"},"ici"))),(0,a.kt)("p",null,"Ensuite, on va devoir utiliser la fonction ",(0,a.kt)("inlineCode",{parentName:"p"},"addTranslations")," h\xe9rit\xe9 de la classe\nm\xe8re."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"@Override\nprotected void addTranslations()\n{\n\n}\n")),(0,a.kt)("p",null,"C'est dans cette fonction que tout va se jouer. On a acc\xe8s \xe0 des fonctions venant\nde la classe m\xe8re nomm\xe9es ",(0,a.kt)("inlineCode",{parentName:"p"},"add")," qui permettent d'ajouter nos traductions.\nIl y a une surchage de la fonction pour presque tous les objets importants du\njeu. Je vous laisse regarder les diff\xe9rentes surcharges de la fonction.\nPour l'exemple, je vais cr\xe9er la traduction d'un item."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@Override\nprotected void addTranslations()\n{\n    add(MON_ITEM, "My item");\n}\n')),(0,a.kt)("p",null,"La fonction est aussi simple d'utilisation. En premier param\xe8tre, on renseigne\nnotre item puis on donne son nom final qui sera affich\xe9 en jeu."),(0,a.kt)("h2",{id:"gatherdataevent"},"GatherDataEvent"),(0,a.kt)("p",null,"Dans votre fonction avec en param\xe8tre l'event ",(0,a.kt)("inlineCode",{parentName:"p"},"GatherDataEvent")," il nous\nreste \xe0 ajouter notre 'provider'."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"@SubscribeEvent\npublic static void dataGen(final GatherDataEvent e)\n{\n    DataGenerator gen = e.getGenerator();\n\n    gen.addProvider(event.includeClient(), new LangGenerator(gen));\n}\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Remarquez le ",(0,a.kt)("inlineCode",{parentName:"p"},"e.includeClient()")," qui permet de r\xe9partir les diff\xe9rentes\nressources selon le c\xf4t\xe9 qui les utilise. En l'occurrence, le fichier lang\nn'est utilis\xe9 que par le client, donc pas besoin de le g\xe9n\xe9rer pour le serveur.")))}c.isMDXComponent=!0}}]);