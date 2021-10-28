"use strict";(self.webpackChunkdoc_forge=self.webpackChunkdoc_forge||[]).push([[9883],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,v=p["".concat(d,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(v,o(o({ref:t},c),{},{components:n})):a.createElement(v,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5800:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:3,title:"Fichiers de traductions",description:"Comment utiliser les data generators pour les fichiers de traductions ?",tags:["data generators"]},d=void 0,l={unversionedId:"data/trad_data_generator",id:"data/trad_data_generator",isDocsHomePage:!1,title:"Fichiers de traductions",description:"Comment utiliser les data generators pour les fichiers de traductions ?",source:"@site/docs/data/trad_data_generator.md",sourceDirName:"data",slug:"/data/trad_data_generator",permalink:"/docs/data/trad_data_generator",editUrl:"https://github.com/Les-Moddeurs-Francais/Forge-Doc/edit/master/docs/data/trad_data_generator.md",tags:[{label:"data generators",permalink:"/docs/tags/data-generators"}],version:"current",lastUpdatedBy:"Mysterious_Dev",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Fichiers de traductions",description:"Comment utiliser les data generators pour les fichiers de traductions ?",tags:["data generators"]},sidebar:"tutorialSidebar",previous:{title:"Recettes",permalink:"/docs/data/recipe_data_generator"},next:{title:"Access Transformer",permalink:"/docs/advanced/access-transformer"}},c=[{value:"Lang Provider",id:"lang-provider",children:[],level:2},{value:"GatherDataEvent",id:"gatherdataevent",children:[],level:2}],u={toc:c};function p(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Dans cette section, nous allons voir comment g\xe9n\xe9rer nos fichiers de traductions\ndirectement \xe0 l'aide des data generators."),(0,i.kt)("h2",{id:"lang-provider"},"Lang Provider"),(0,i.kt)("p",null,"Pour commencer, nous avons besoin d'une classe qui h\xe9ritera de la classe ",(0,i.kt)("inlineCode",{parentName:"p"},"LanguageProvider"),".\nOn rajoutera le constructeur de la classe dans lequel nous allons modifier quelques trucs."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class LangGenerator extends LanguageProvider {\n\n    public LangGenerator(DataGenerator gen) {\n        super(gen, Technicia.MODID, "en_us");\n    }\n}\n')),(0,i.kt)("p",null,"Ici, j'ai simplement laiss\xe9 le premier param\xe8tre au constructeur et j'ai renseign\xe9\ntoutes les autres valeurs directement dans le ",(0,i.kt)("inlineCode",{parentName:"p"},"super"),". Le premier param\xe8tre\n\xe0 renseigner dans ce dernier est le ",(0,i.kt)("inlineCode",{parentName:"p"},"DataGenerator")," pass\xe9 en param\xe8tre du constructeur.\nEnsuite, on aura besoin du ",(0,i.kt)("strong",{parentName:"p"},"modid")," de votre mod ainsi que de la langue\npour laquelle vous ajoutez une traduction."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Je ne montrerai qu'un seul g\xe9n\xe9rateur\ndans cette section pour lequel je g\xe9n\xe9rerai les traductions pour la langue par\nd\xe9faut de Minecraft."))),(0,i.kt)("p",null,"J'ai marqu\xe9 ",(0,i.kt)("inlineCode",{parentName:"p"},'"en_us"')," pour l'anglais am\xe9ricain qui est la langue de base de\nMinecraft. Pour le fran\xe7ais par exemple, il faut noter ",(0,i.kt)("inlineCode",{parentName:"p"},'"fr_fr""'),"."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Vous pouvez retrouver toutes les langues ",(0,i.kt)("a",{parentName:"p",href:"https://minecraft.fandom.com/wiki/Language"},"ici")))),(0,i.kt)("p",null,"Ensuite, on va devoir utiliser la fonction ",(0,i.kt)("inlineCode",{parentName:"p"},"addTranslations")," h\xe9rit\xe9 de la classe\nm\xe8re."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@Override\nprotected void addTranslations()\n{\n\n}\n")),(0,i.kt)("p",null,"C'est dans cette fonction que tout va se jouer. On a acc\xe8s \xe0 des fonctions venant\nde la classe m\xe8re nomm\xe9es ",(0,i.kt)("inlineCode",{parentName:"p"},"add")," qui permettent d'ajouter nos traductions.\nIl y a une surchage de la fonction pour presque tous les objets importants du\njeu. Je vous laisse regarder les diff\xe9rentes surcharges de la fonction.\nPour l'exemple, je vais cr\xe9er la traduction d'un item."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Override\nprotected void addTranslations()\n{\n    add(MON_ITEM, "My item");\n}\n')),(0,i.kt)("p",null,"La fonction est aussi simple d'utilisation. En premier param\xe8tre, on renseigne\nnotre item puis on donne son nom final qui sera affich\xe9 en jeu."),(0,i.kt)("h2",{id:"gatherdataevent"},"GatherDataEvent"),(0,i.kt)("p",null,"Dans votre fonction avec en param\xe8tre l'event ",(0,i.kt)("inlineCode",{parentName:"p"},"GatherDataEvent")," il nous\nreste \xe0 ajouter notre 'provider'."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@SubscribeEvent\npublic static void dataGen(final GatherDataEvent e)\n{\n\n    DataGenerator gen = e.getGenerator();\n\n    if(e.includeClient())\n    {\n        gen.addProvider(new LangGenerator(gen));\n    }\n}\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Remarquez le ",(0,i.kt)("inlineCode",{parentName:"p"},"e.includeClient()")," qui permet de r\xe9partir les diff\xe9rentes\nressources selon le c\xf4t\xe9 qui les utilise. En l'occurence, le fichier lang\nn'est utilis\xe9 que par le client, donc pas besoin de le g\xe9n\xe9rer pour le serveur."))))}p.isMDXComponent=!0}}]);