"use strict";(self.webpackChunkdoc_forge=self.webpackChunkdoc_forge||[]).push([[3431],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3611:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={sidebar_position:1,title:"Access Transformer",description:"Comment utiliser les access transformers ?",tags:["avanc\xe9"]},s=void 0,d={unversionedId:"advanced/access-transformer",id:"advanced/access-transformer",title:"Access Transformer",description:"Comment utiliser les access transformers ?",source:"@site/docs/advanced/access-transformer.md",sourceDirName:"advanced",slug:"/advanced/access-transformer",permalink:"/Documentation-Forge/docs/advanced/access-transformer",draft:!1,editUrl:"https://github.com/Les-Moddeurs-Francais/Documentation-Forge/edit/master/docs/advanced/access-transformer.md",tags:[{label:"avanc\xe9",permalink:"/Documentation-Forge/docs/tags/avance"}],version:"current",lastUpdatedBy:"Mysterious_Dev",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Access Transformer",description:"Comment utiliser les access transformers ?",tags:["avanc\xe9"]},sidebar:"tutorialSidebar",previous:{title:"Avanc\xe9",permalink:"/Documentation-Forge/docs/category/advanced"},next:{title:"Capabilities",permalink:"/Documentation-Forge/docs/advanced/capabilities"}},c={},u=[{value:"Ajout du fichier pour les AT&#39;s",id:"ajout-du-fichier-pour-les-ats",level:2},{value:"Commentaires",id:"commentaires",level:2},{value:"Syntaxe",id:"syntaxe",level:2},{value:"Les modifieurs d&#39;acc\xe8s",id:"les-modifieurs-dacc\xe8s",level:2},{value:"Descripteur des retours",id:"descripteur-des-retours",level:2},{value:"Exemples",id:"exemples",level:2}],p={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Les ",(0,i.kt)("inlineCode",{parentName:"p"},"access transformers")," (ou AT) permettent de modifier l'accessibilit\xe9  et la visibilit\xe9 des variables, m\xe9thodes et classes des librairies (retirer le ",(0,i.kt)("inlineCode",{parentName:"p"},"final"),", changer l'attribut ",(0,i.kt)("inlineCode",{parentName:"p"},"private")," en ",(0,i.kt)("inlineCode",{parentName:"p"},"public"),", etc...)."),(0,i.kt)("h2",{id:"ajout-du-fichier-pour-les-ats"},"Ajout du fichier pour les AT's"),(0,i.kt)("p",null,"Pour sp\xe9cifier \xe0 ForgeGradle que le mod utilisera les access transformers, vous devez ajouter cette ligne dans le build.gradle (la cat\xe9gorie ",(0,i.kt)("inlineCode",{parentName:"p"},"minecraft")," est normalement d\xe9j\xe0 pr\xe9sente dans votre fichier) :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"minecraft {\n    accessTransformer = file('src/main/resources/META-INF/accesstransformer.cfg')\n}\n")),(0,i.kt)("p",null,"Apr\xe8s cela, vous devrez cr\xe9er un fichier ",(0,i.kt)("inlineCode",{parentName:"p"},"accesstransformer.cfg")," au niveau du chemin sp\xe9cifi\xe9 (ici le dossier ",(0,i.kt)("inlineCode",{parentName:"p"},"META-INF")," situ\xe9 dans vos ressources)."),(0,i.kt)("p",null,"Il est \xe0 chaque fois n\xe9cessaire de rafra\xeechir son projet Gradle pour que les ",(0,i.kt)("em",{parentName:"p"},"transformers")," soit appliqu\xe9s."),(0,i.kt)("h2",{id:"commentaires"},"Commentaires"),(0,i.kt)("p",null,"Tous les textes succ\xe9dant un ",(0,i.kt)("inlineCode",{parentName:"p"},"#")," avant la fin de la ligne seront interpr\xe9t\xe9s comme des commentaires et ne seront pas pris en compte par ",(0,i.kt)("em",{parentName:"p"},"ForgeGradle"),"."),(0,i.kt)("h2",{id:"syntaxe"},"Syntaxe"),(0,i.kt)("p",null,"Trois syntaxes sont disponibles selon le type de la cible pour modifier son acc\xe8s :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Pour les classes : ",(0,i.kt)("inlineCode",{parentName:"li"},"<modificateur> <nom de la classe>")),(0,i.kt)("li",{parentName:"ul"},"Pour les m\xe9thodes : ",(0,i.kt)("inlineCode",{parentName:"li"},"<modificateur> <nom de la classe> <nom de la m\xe9thode>([descripteurs des param\xe8tres])<descripteur de ce qui est retourn\xe9>")),(0,i.kt)("li",{parentName:"ul"},"Pour les variables : ",(0,i.kt)("inlineCode",{parentName:"li"},"<modificateur> <nom de la classe> <nom de la variable>"))),(0,i.kt)("h2",{id:"les-modifieurs-dacc\xe8s"},"Les modifieurs d'acc\xe8s"),(0,i.kt)("p",null,"Les modificateurs d'acc\xe8s sp\xe9cifient vers quelle nouvelle visibilit\xe9 la cible donn\xe9e sera transform\xe9e :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"public")," - visible pour toutes les classes \xe0 l'int\xe9rieur et \xe0 l'ext\xe9rieur de son package"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"protected")," - visible uniquement pour les classes \xe0 l'int\xe9rieur du package et les sous-classes"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"default")," - visible uniquement pour les classes \xe0 l'int\xe9rieur du package"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"private")," - visible uniquement \xe0 l'int\xe9rieur de la classe")),(0,i.kt)("p",null,"Le modificateur sp\xe9cial +f et -f peut \xeatre ajout\xe9 aux modificateurs mentionn\xe9s plus haut afin d'ajouter ou de supprimer l'attribut ",(0,i.kt)("inlineCode",{parentName:"p"},"final"),"."),(0,i.kt)("h2",{id:"descripteur-des-retours"},"Descripteur des retours"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Descripteur"),(0,i.kt)("th",{parentName:"tr",align:null},"Equivalent"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Z")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Bool\xe9en")),(0,i.kt)("td",{parentName:"tr",align:null},"Valeur oscillant entre ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),"et ",(0,i.kt)("inlineCode",{parentName:"td"},"false"),"seulement")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"B")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Byte")),(0,i.kt)("td",{parentName:"tr",align:null},"Nombre en 8-bit")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"S")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Short")),(0,i.kt)("td",{parentName:"tr",align:null},"Nombre en 16-bit")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"C")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Char")),(0,i.kt)("td",{parentName:"tr",align:null},"Caract\xe8re unicode en UTF-16")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"I")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Int")),(0,i.kt)("td",{parentName:"tr",align:null},"Nombre en 32-bit")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"F")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Float")),(0,i.kt)("td",{parentName:"tr",align:null},"Valeur flottante (\xe0 virgule allant jusqu'\xe0 6 a 7 d\xe9cimales)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"J")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Long")),(0,i.kt)("td",{parentName:"tr",align:null},"Nombre en 64-bit")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"D")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Double")),(0,i.kt)("td",{parentName:"tr",align:null},"Valeur flottante (\xe0 virgule allant jusqu'\xe0 15 \xe0 16 d\xe9cimales)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Ljava/lang/Object;")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"java.lang.Object")),(0,i.kt)("td",{parentName:"tr",align:null},"un type de r\xe9f\xe9rence ; la forme interne du nom binaire de la classe doit \xeatre pr\xe9sente (dans l'exemple donn\xe9, la classe r\xe9f\xe9renc\xe9e est ",(0,i.kt)("inlineCode",{parentName:"td"},"java.lang.Object"),"). Notez que les classes internes sont s\xe9par\xe9es par le caract\xe8re ",(0,i.kt)("inlineCode",{parentName:"td"},"$")," (signe dollar), comme par exemple ",(0,i.kt)("inlineCode",{parentName:"td"},"java/lang/System$Logger"),".")))),(0,i.kt)("h2",{id:"exemples"},"Exemples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# D\xe9finit la visibilit\xe9 de la m\xe9thode en public\npublic net.minecraft.data.loot.BlockLoot m_124254_(Lnet/minecraft/world/level/block/Block;Lnet/minecraft/world/item/Item;)Lnet/minecraft/world/level/storage/loot/LootTable$Builder; # createStemDrops\n\n# D\xe9finit la visibilit\xe9 de la variable en protected\nprotected net.minecraft.client.gui.Gui f_168670_ # LINE_HEIGHT\n\n# D\xe9finit la visibilit\xe9 de la classe en protected\nprotected net.minecraft.client.gui.screens.MenuScreens\n")))}m.isMDXComponent=!0}}]);