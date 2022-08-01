"use strict";(self.webpackChunkdoc_forge=self.webpackChunkdoc_forge||[]).push([[2319],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return r?n.createElement(g,l(l({ref:t},u),{},{components:r})):n.createElement(g,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},7521:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:1,title:"Migration de la 1.16 vers la 1.17",description:"Quelles sont les \xe9tapes pour migrer son mod de la 1.16 \xe0 la 1.17",tags:["mise \xe0 jour"],hide_table_of_contents:!0},l=void 0,o={unversionedId:"updates/116_117",id:"updates/116_117",title:"Migration de la 1.16 vers la 1.17",description:"Quelles sont les \xe9tapes pour migrer son mod de la 1.16 \xe0 la 1.17",source:"@site/docs/updates/116_117.md",sourceDirName:"updates",slug:"/updates/116_117",permalink:"/docs/updates/116_117",draft:!1,editUrl:"https://github.com/Les-Moddeurs-Francais/Documentation-Forge/edit/master/docs/updates/116_117.md",tags:[{label:"mise \xe0 jour",permalink:"/docs/tags/mise-a-jour"}],version:"current",lastUpdatedBy:"Mysterious_Dev",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Migration de la 1.16 vers la 1.17",description:"Quelles sont les \xe9tapes pour migrer son mod de la 1.16 \xe0 la 1.17",tags:["mise \xe0 jour"],hide_table_of_contents:!0},sidebar:"documentationSidebar",previous:{title:"Mise \xe0 jour",permalink:"/docs/category/update"},next:{title:"Avanc\xe9",permalink:"/docs/category/advanced"}},s={},p=[{value:"\xc9tapes",id:"\xe9tapes",level:2}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Ce guide ne se concentrera que sur les \xe9tapes primordiales pour migrer de la 1.16 \xe0 la 1.17, tous les changements concernant le code ne seront pas expliqu\xe9s ici."),(0,a.kt)("h2",{id:"\xe9tapes"},"\xc9tapes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Faites une copie de votre mod 1.16 dans un nouveau dossier ou (alternativement) utilisez github pour cr\xe9er une nouvelle branche et clonez-la"),(0,a.kt)("li",{parentName:"ul"},"T\xe9l\xe9chargez le MDK de Forge et copiez le dossier gradle et les scripts gradlew \xe0 partir de l\xe0, rien d'autre"),(0,a.kt)("li",{parentName:"ul"},"Modifiez le fichier ",(0,a.kt)("inlineCode",{parentName:"li"},"build.gradle")," pour utiliser FG 5.1+ : ",(0,a.kt)("inlineCode",{parentName:"li"},"classpath group: 'net.minecraftforge.gradle', name: 'ForgeGradle', version: '5.1.+', changing: true")),(0,a.kt)("li",{parentName:"ul"},"Ouvrez une nouvelle fen\xeatre de commande ou un shell bash (pour Linux) avec les variables d'environnement JAVA_HOME et PATH configur\xe9es pour Java 16. Vous pouvez v\xe9rifier ce changement avec la commande ",(0,a.kt)("inlineCode",{parentName:"li"},"java -version")),(0,a.kt)("li",{parentName:"ul"},"Si votre mod 1.16.5 n'utilise pas les mappings officiels, ex\xe9cutez : ",(0,a.kt)("inlineCode",{parentName:"li"},'gradlew -PUPDATE_MAPPINGS_CHANNEL="official" -PUPDATE_MAPPINGS="1.16.5" updateMappings')),(0,a.kt)("li",{parentName:"ul"},"Modifier la ligne mappings du fichier build.gradle : ",(0,a.kt)("inlineCode",{parentName:"li"},"mappings channel: 'official', version: '1.16.5'")),(0,a.kt)("li",{parentName:"ul"},"Ajoutez la ligne suivante \xe0 votre build.gradle : ",(0,a.kt)("inlineCode",{parentName:"li"},"apply from: 'https://raw.githubusercontent.com/SizableShrimp/Forge-Class-Remapper/main/classremapper.gradle'")),(0,a.kt)("li",{parentName:"ul"},"Ex\xe9cutez la commande gradle pour mettre \xe0 jour les noms des classes : ",(0,a.kt)("inlineCode",{parentName:"li"},"gradlew -PUPDATE_CLASSNAMES=true updateClassnames")),(0,a.kt)("li",{parentName:"ul"},"Modifier la ligne mappings du fichier build.gradle : ",(0,a.kt)("inlineCode",{parentName:"li"},"mappings channel: 'official', version: '1.17.1'")),(0,a.kt)("li",{parentName:"ul"},"Changez la ligne ",(0,a.kt)("inlineCode",{parentName:"li"},"java.toolchain.languageVersion = JavaLanguageVersion.of(8)")," par ",(0,a.kt)("inlineCode",{parentName:"li"},"java.toolchain.languageVersion = JavaLanguageVersion.of(16)")," dans le fichier build.gradle"),(0,a.kt)("li",{parentName:"ul"},"Changez la d\xe9pendance de forge pour ",(0,a.kt)("inlineCode",{parentName:"li"},"minecraft 'net.minecraftforge:forge:1.17.1-37.1.1'")),(0,a.kt)("li",{parentName:"ul"},"Importez Gradle dans IntelliJ/Eclipse, changer le SDK du projet pour Java 16, et faire en sorte que gradle jre utilise aussi le JDK du projet"),(0,a.kt)("li",{parentName:"ul"},"Ex\xe9cutez la commande ",(0,a.kt)("inlineCode",{parentName:"li"},"gradlew genIntellijRuns")),(0,a.kt)("li",{parentName:"ul"},"Corrigez votre code et testez"),(0,a.kt)("li",{parentName:"ul"},"Dans votre fichier mods.toml, remplacez ces lignes par les suivantes :",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'loaderVersion = "[36,)"')," -> ",(0,a.kt)("inlineCode",{parentName:"li"},'loaderVersion = "[37,)"')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'versionRange = "[36,)"')," -> ",(0,a.kt)("inlineCode",{parentName:"li"},'versionRange = "[37,)"')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'versionRange = "[1.16.5,1.17)"')," -> ",(0,a.kt)("inlineCode",{parentName:"li"},'versionRange = "[1.17.1]"'))))))}d.isMDXComponent=!0}}]);