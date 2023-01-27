"use strict";(self.webpackChunkdoc_forge=self.webpackChunkdoc_forge||[]).push([[2235],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},31549:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:1,title:"Installation",description:"Comment installer la workspace du mod ?",tags:["bases"]},i="Installation de la workspace",l={unversionedId:"bases/installation",id:"bases/installation",title:"Installation",description:"Comment installer la workspace du mod ?",source:"@site/docs/bases/installation.mdx",sourceDirName:"bases",slug:"/bases/installation",permalink:"/bases/installation",draft:!1,editUrl:"https://github.com/Les-Moddeurs-Francais/Documentation-Forge/edit/master/docs/bases/installation.mdx",tags:[{label:"bases",permalink:"/tags/bases"}],version:"current",lastUpdatedBy:"Mysterious_Dev",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Installation",description:"Comment installer la workspace du mod ?",tags:["bases"]},sidebar:"documentationSidebar",previous:{title:"Bases",permalink:"/category/bases"},next:{title:"Base du mod",permalink:"/bases/base_du_mod"}},s={},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation-de-la-workspace"},"Installation de la workspace"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Installez Java 17 Development Kit (JDK) en suivant l'un de ces 3 liens : ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://www.oracle.com/java/technologies/downloads/#java17"},"Oracle"))," OU ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://www.azul.com/downloads/?version=java-17-sts&package=jdk-fx"},"Zulu"))," OU ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://adoptium.net/?variant=openjdk17&jvmVariant=hotspot"},"Adoptium")),". Minecraft et MinecraftForge depuis la 1.18 sont compil\xe9s sous Java 17."),(0,a.kt)("li",{parentName:"ul"},"Installez le Mod Development Kit (MDK) en suivant ce ",(0,a.kt)("a",{parentName:"li",href:"https://files.minecraftforge.net/net/minecraftforge/forge/index_1.19.html"},"lien"),"."),(0,a.kt)("li",{parentName:"ul"},"Extrayez tous les fichiers et dossiers contenus dans le dossier compress\xe9 dans un nouveau dossier (ceci sera votre dossier de mod)."),(0,a.kt)("li",{parentName:"ul"},"Selon votre IDE:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Pour Intellij IDEA, ouvrez un nouveau projet (bouton ",(0,a.kt)("inlineCode",{parentName:"li"},"Open")," dans la version ",(0,a.kt)("strong",{parentName:"li"},"2021.2"),") et s\xe9lectionnez ensuite le fichier ",(0,a.kt)("inlineCode",{parentName:"li"},"build.gradle")," dans le dossier de votre mod, cliquez pour finir sur ",(0,a.kt)("strong",{parentName:"li"},"OK"),"."),(0,a.kt)("li",{parentName:"ul"},"Pour Eclipse, Dans File>Import, choisissez dans Gradle, Existing Gradle projet. Dans le champ ",(0,a.kt)("inlineCode",{parentName:"li"},"Project root directory"),", choisissez le dossier de votre mod et cliquez ensuite sur ",(0,a.kt)("strong",{parentName:"li"},"Finish"),"."))),(0,a.kt)("li",{parentName:"ul"},"Une fois le projet import\xe9, g\xe9n\xe9rez vos configurations de lancement :",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Pour Intellij IDEA, ex\xe9cutez la commande gradle ",(0,a.kt)("inlineCode",{parentName:"li"},"genIntellijRuns")," (",(0,a.kt)("inlineCode",{parentName:"li"},"gradlew genIntellijRuns"),")."),(0,a.kt)("li",{parentName:"ul"},"Pour Eclipse, ex\xe9cutez la commande gradle ",(0,a.kt)("inlineCode",{parentName:"li"},"genEclipseRuns")," (",(0,a.kt)("inlineCode",{parentName:"li"},"gradlew genEclipseRuns"),")."),(0,a.kt)("li",{parentName:"ul"},"Pour Visual Studio Code, ex\xe9cutez la commande gradle ",(0,a.kt)("inlineCode",{parentName:"li"},"genVSCodeRuns")," (",(0,a.kt)("inlineCode",{parentName:"li"},"gradlew genVSCodeRuns"),")."))),(0,a.kt)("li",{parentName:"ul"},"Voil\xe0, si tout s'est bien pass\xe9, vous devriez \xeatre en mesure de lancer votre mod en test.")))}u.isMDXComponent=!0}}]);