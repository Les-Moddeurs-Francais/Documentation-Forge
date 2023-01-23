"use strict";(self.webpackChunkdoc_forge=self.webpackChunkdoc_forge||[]).push([[9097],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(a),m=i,v=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return a?n.createElement(v,r(r({ref:t},u),{},{components:a})):n.createElement(v,r({ref:t},u))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var s=2;s<l;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6933:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(7462),i=(a(7294),a(3905));const l={sidebar_position:2,title:"Capabilities",description:"Comment utiliser les capabilities ?",tags:["avanc\xe9"]},r=void 0,o={unversionedId:"advanced/capabilities",id:"advanced/capabilities",title:"Capabilities",description:"Comment utiliser les capabilities ?",source:"@site/docs/advanced/capabilities.mdx",sourceDirName:"advanced",slug:"/advanced/capabilities",permalink:"/advanced/capabilities",draft:!1,editUrl:"https://github.com/Les-Moddeurs-Francais/Documentation-Forge/edit/master/docs/advanced/capabilities.mdx",tags:[{label:"avanc\xe9",permalink:"/tags/avance"}],version:"current",lastUpdatedBy:"Mysterious_Dev",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Capabilities",description:"Comment utiliser les capabilities ?",tags:["avanc\xe9"]},sidebar:"documentationSidebar",previous:{title:"Access Transformer",permalink:"/advanced/access-transformer"},next:{title:"Coremods",permalink:"/advanced/coremods"}},p={},s=[{value:"Attacher une Capability",id:"attacher-une-capability",level:2},{value:"R\xe9cup\xe9rer l&#39;instance d&#39;une capability",id:"r\xe9cup\xe9rer-linstance-dune-capability",level:3},{value:"Attacher une Capability",id:"attacher-une-capability-1",level:3},{value:"R\xe9cup\xe9rer la Capability",id:"r\xe9cup\xe9rer-la-capability",level:2},{value:"Sauvegarder la Capability",id:"sauvegarder-la-capability",level:2},{value:"Cr\xe9er une Capability",id:"cr\xe9er-une-capability",level:2},{value:"L&#39;interface de la Capability",id:"linterface-de-la-capability",level:3},{value:"Les impl\xe9mentations de l&#39;interface de votre Capability",id:"les-impl\xe9mentations-de-linterface-de-votre-capability",level:3},{value:"Cr\xe9er la classe contenant l&#39;instance de la Capability",id:"cr\xe9er-la-classe-contenant-linstance-de-la-capability",level:3},{value:"Enregistrer la Capability",id:"enregistrer-la-capability",level:3},{value:"Avec l&#39;\xe9v\xe9nement <code>RegisterCapabilitiesEvent</code>",id:"avec-l\xe9v\xe9nement-registercapabilitiesevent",level:4},{value:"Avec l&#39;annotation <code>@AutoRegisterCapability</code>",id:"avec-lannotation-autoregistercapability",level:4}],u={toc:s};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Les ",(0,i.kt)("inlineCode",{parentName:"p"},"capabilities")," sont un syst\xe8me mis \xe0 disposition par Forge permettant de stocker des donn\xe9es sur des ",(0,i.kt)("strong",{parentName:"p"},"BlockEntities")," (TileEntities), des ",(0,i.kt)("strong",{parentName:"p"},"Entities"),", des ",(0,i.kt)("strong",{parentName:"p"},"ItemStacks"),", des ",(0,i.kt)("strong",{parentName:"p"},"Levels"),"(Worlds) et des ",(0,i.kt)("strong",{parentName:"p"},"LevelChunks"),"(Chunks)."),(0,i.kt)("p",null,"Forge fournit par d\xe9faut trois capabilities : ",(0,i.kt)("inlineCode",{parentName:"p"},"IItemHandler"),", qui permet de stocker des items, ",(0,i.kt)("inlineCode",{parentName:"p"},"IFluidHandler"),", qui permet de stocker des liquides et enfin ",(0,i.kt)("inlineCode",{parentName:"p"},"IEnergyStorage"),", qui permet de stocker de l'\xe9nergie."),(0,i.kt)("p",null,"Une capability poss\xe8de au minimum normalement trois classes : l'interface(Exemple : ",(0,i.kt)("inlineCode",{parentName:"p"},"IItemHandler"),"), l'(les) impl\xe9mentation(s) par d\xe9faut de la capability (Exemple : ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemStackHandler"),") et enfin la classe qui contient l'instance de la capability et qui sert \xe0 l'enregistrer (Exemple : ",(0,i.kt)("inlineCode",{parentName:"p"},"CapabilityItemHandler"),")."),(0,i.kt)("p",null,"Pour les utiliser, il faut d'abord les attacher \xe0 la ",(0,i.kt)("inlineCode",{parentName:"p"},"BlockEntity"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"Entity"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"ItemStack"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"Level"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"LevelChunk")," de votre choix."),(0,i.kt)("h2",{id:"attacher-une-capability"},"Attacher une Capability"),(0,i.kt)("h3",{id:"r\xe9cup\xe9rer-linstance-dune-capability"},"R\xe9cup\xe9rer l'instance d'une capability"),(0,i.kt)("p",null,"Pour attacher une capability, il faut d\xe9j\xe0 poss\xe9der son unique instance. Pour cela, vous pouvez l'obtenir soit dans la classe qui la contient par d\xe9faut, soit en obtenant une autre r\xe9f\xe9rence de la m\xeame instance en utilisant ",(0,i.kt)("inlineCode",{parentName:"p"},"CapabilityManager#get")," comme ceci:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"static Capability<VotreInterface> VOTRE_CAPABILITY = CapabilityManager.get(new CapabilityToken<>(){});\n")),(0,i.kt)("p",null,"O\xf9 VotreInterface est l'interface de votre capability et VOTRE_CAPABILITY est le nom que vous voulez donner \xe0 votre variable (appelez-la comme vous voulez)"),(0,i.kt)("p",null,"Exemple :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"static Capability<IEnergyStorage> ENERGY_STORAGE =  CapabilityManager.get(new CapabilityToken<>(){});\n")),(0,i.kt)("h3",{id:"attacher-une-capability-1"},"Attacher une Capability"),(0,i.kt)("p",null,"Pour attacher une Capability, il faut passer par l'\xe9v\xe8nement ",(0,i.kt)("inlineCode",{parentName:"p"},"AttachCapabilitiesEvent"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AttachCapabilitiesEvent<Entity>")," pour les ",(0,i.kt)("inlineCode",{parentName:"li"},"Entity")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AttachCapabilitiesEvent<BlockEntity>")," pour les ",(0,i.kt)("inlineCode",{parentName:"li"},"BlockEntity")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AttachCapabilitiesEvent<ItemStack>")," pour les ",(0,i.kt)("inlineCode",{parentName:"li"},"ItemStack")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AttachCapabilitiesEvent<Level>")," pour les ",(0,i.kt)("inlineCode",{parentName:"li"},"Level")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AttachCapabilitiesEvent<LevelChunk>")," pour les ",(0,i.kt)("inlineCode",{parentName:"li"},"LevelChunk"))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Il n'existe d'\xe9v\xe8nement que pour ces cinq-l\xe0. Par exemple, si vous voulez attacher une Capability \xe0 un joueur sp\xe9cifiquement, ",(0,i.kt)("inlineCode",{parentName:"p"},"AttachCapabilitiesEvent<Player>")," ne marchera pas. \xc0 la place, il faut utiliser ",(0,i.kt)("inlineCode",{parentName:"p"},"AttachCapabilitiesEvent<Entity>")," et v\xe9rifier si ",(0,i.kt)("inlineCode",{parentName:"p"},"AttachCapabilitiesEvent#getObject"),"(l'entit\xe9) est une instance de Player.")),(0,i.kt)("p",null,"Vous devrez avoir une impl\xe9mentation de votre capability (utilisez celle par d\xe9faut ou cr\xe9ez la v\xf4tre, voir ",(0,i.kt)("a",{parentName:"p",href:"#les-impl%C3%A9mentations-de-linterface-de-votre-capability"},"ici"),")."),(0,i.kt)("p",null,"Il vous faudra \xe9galement une ",(0,i.kt)("inlineCode",{parentName:"p"},"ResourceLocation"),' qui sera la "cl\xe9" de votre capability et qui sera utilis\xe9e pour \xe9viter que la m\xeame capability soit ajout\xe9e deux fois ou que d\'autres erreurs du style se produisent.'),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Votre cl\xe9 peut \xeatre n'importe quelle ",(0,i.kt)("inlineCode",{parentName:"p"},"ResourceLocation"),", mais elle doit \xeatre unique."),(0,i.kt)("p",{parentName:"admonition"},"Vous pouvez, par exemple, cr\xe9er une ",(0,i.kt)("inlineCode",{parentName:"p"},"ResourceLocation")," \xe0 partir de votre modid et du nom de la Capability que vous ajoutez comme ceci :"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},"ResourceLocation VOTRE_CLE = new ResourceLocation(VOTRE_MODID, NOM_DE_LA_CAPABILITY)\n"))),(0,i.kt)("p",null,"Pour finir, il vous faudra une impl\xe9mentation de ",(0,i.kt)("inlineCode",{parentName:"p"},"ICapabilityProvider")," qui retourne avec la fonction ",(0,i.kt)("inlineCode",{parentName:"p"},"getCapability")," un ",(0,i.kt)("inlineCode",{parentName:"p"},"LazyOptional")," de la capability (un Provider)"),(0,i.kt)("p",null,"Exemple :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class EnergyStorageProvider implements ICapabilityProvider {\n    private final LazyOptional<IEnergyStorage> energyStorageOptional;\n\n    public EnergyStorageProvider(){\n        this.energyStorageOptional = LazyOptional.of(() -> new EnergyStorage(10000)); // Remplacez le new EnergyStorage() par votre impl\xe9mentation de l'interface de la capability\n    }\n\n    @Nonnull\n    @Override\n    public <T> LazyOptional<T> getCapability(@Nonnull Capability<T> cap, @Nullable Direction side) {\n        return CapabilityEnergy.ENERGY.orEmpty(cap, this.energyStorageOptional);\n    }\n    \n}\n")),(0,i.kt)("p",null,"Pensez bien \xe0 remplacer ",(0,i.kt)("inlineCode",{parentName:"p"},"IEnergyStorage")," par l'interface de votre capability, ",(0,i.kt)("inlineCode",{parentName:"p"},"new EnergyStorage()")," par l'impl\xe9mentation de votre capability et ",(0,i.kt)("inlineCode",{parentName:"p"},"CapabilityEnergy.ENERGY")," par l'unique instance de la capability(regardez ",(0,i.kt)("a",{parentName:"p",href:"#r%C3%A9cup%C3%A9rer-linstance-dune-capability"},"ici")," pour savoir comment l'obtenir)"),(0,i.kt)("p",null,"Exemples :"),(0,i.kt)("p",null,"Attacher la Capability ",(0,i.kt)("inlineCode",{parentName:"p"},"IEnergyStorage")," avec le Provider fait plus haut \xe0 tous les ",(0,i.kt)("inlineCode",{parentName:"p"},"LevelChunk")," :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@SubscribeEvent\npublic static void attachToChunks(AttachCapabilitiesEvent<LevelChunks> event)\n{\n    event.addCapability(VOTRE_CLE, new EnergyStorageProvider());\n}\n")),(0,i.kt)("p",null,"Attacher la Capability ",(0,i.kt)("inlineCode",{parentName:"p"},"IEnergyStorage")," avec le Provider fait plus haut \xe0 des ",(0,i.kt)("inlineCode",{parentName:"p"},"Player")," :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@SubscribeEvent\npublic static void attachToEntities(AttachCapabilitiesEvent<Entity> event)\n{\n    if(event.getObject() instanceof Player){\n        event.addCapability(VOTRE_CLE, new EnergyStorageProvider());\n    }\n}\n")),(0,i.kt)("p",null,"(pensez bien \xe0 remplacer VOTRE_CLE par la ",(0,i.kt)("inlineCode",{parentName:"p"},"ResourceLocation")," servant de cl\xe9 que vous avez cr\xe9\xe9e plus haut et ",(0,i.kt)("inlineCode",{parentName:"p"},"new EnergyStorageProvider()")," par votre provider)"),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Attacher les Capabilities par d\xe9faut de Forge (voir ",(0,i.kt)("a",{parentName:"p",href:"#utiliser-une-capability"},"ici"),") \xe0 des classes vanilla peut causer certains probl\xe8mes. Par exemple, attacher un ",(0,i.kt)("inlineCode",{parentName:"p"},"IItemHandler")," \xe0 un joueur ne marchera pas, car si vous essayez de le r\xe9cup\xe9rer en passant par le joueur, vous obtiendrez un ",(0,i.kt)("inlineCode",{parentName:"p"},"IItemHandler")," qui correspond \xe0 l'inventaire du m\xeame joueur. Si vous souhaitez tout de m\xeame utiliser les Capabilities de Forge, il faut alors cr\xe9er une nouvelle Capability qui extend celle que vous souhaitez attacher(voir ",(0,i.kt)("a",{parentName:"p",href:"#cr%C3%A9er-une-capability"},"ici"),").")),(0,i.kt)("h2",{id:"r\xe9cup\xe9rer-la-capability"},"R\xe9cup\xe9rer la Capability"),(0,i.kt)("p",null,"Une fois que la Capability est bien attach\xe9e, pour l'utiliser, il faut la r\xe9cup\xe9rer ! Pour cela, reprenons l'exemple de la Capability ",(0,i.kt)("inlineCode",{parentName:"p"},"IEnergyStorage")," attach\xe9e \xe0 un joueur :"),(0,i.kt)("p",null,"Pour la r\xe9cup\xe9rer, il faut d'abord obtenir la classe sur laquelle vous avez attach\xe9 la Capability (une instance de ",(0,i.kt)("inlineCode",{parentName:"p"},"Player")," dans notre cas). Une fois cela fait (je n'explique pas comment faire, car cela d\xe9pend de sur quoi vous avez attach\xe9 la Capability), il faut utiliser dans notre cas (celui du joueur) :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"LazyOptional<IEnergyStorage> energyStorageLazyOptional = player.getCapability(CapabilityEnergy.ENERGY);\n")),(0,i.kt)("p",null,"Encore une fois, remplacez bien ",(0,i.kt)("inlineCode",{parentName:"p"},"IEnergyStorage")," par l'interface de votre Capability, ",(0,i.kt)("inlineCode",{parentName:"p"},"CapabilityEnergy.ENERGY")," par l'instance de votre Capability et nommez la variable comme vous voulez."),(0,i.kt)("p",null,"Nous avons maintenant un ",(0,i.kt)("inlineCode",{parentName:"p"},"LazyOptional")," de notre Capability."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Qu'est-ce qu'un ",(0,i.kt)("inlineCode",{parentName:"p"},"LazyOptional")," ?"),(0,i.kt)("p",{parentName:"admonition"},"C'est une classe cr\xe9\xe9e par Forge et qui est similaire \xe0 la classe Optional (tapez java Optional sur Google si vous ne savez pas ce que c'est). Si vous voulez en savoir plus, regardez dans la classe elle-m\xeame, c'est assez bien document\xe9.")),(0,i.kt)("p",null,"Maintenant que vous poss\xe9dez votre ",(0,i.kt)("inlineCode",{parentName:"p"},"LazyOptional"),", vous pouvez faire ce que vous voulez avec."),(0,i.kt)("p",null,"Vous pouvez utiliser ",(0,i.kt)("inlineCode",{parentName:"p"},"LazyOptional#isPresent")," pour savoir si votre Capability est pr\xe9sente, ",(0,i.kt)("inlineCode",{parentName:"p"},"LazyOptional#ifPresent")," pour ex\xe9cuter un ",(0,i.kt)("inlineCode",{parentName:"p"},"Consumer")," si la capability est pr\xe9sente, et d'autres comme ",(0,i.kt)("inlineCode",{parentName:"p"},"LazyOptional#orElse"),". Pour plus d'informations, je vous invite \xe0 regarder dans la class ",(0,i.kt)("inlineCode",{parentName:"p"},"LazyOptional"),", sur ",(0,i.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/api/java/util/Optional.html"},"cette page")," ou \xe0 rechercher sur Internet."),(0,i.kt)("p",null,"Exemples (si l'on utilise la Capability ",(0,i.kt)("inlineCode",{parentName:"p"},"IEnergyStorage"),") :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"lazyOptional.ifPresent(cap -> cap.receiveEnergy(500, false));\n\nIEnergyStorage energyStorage = lazyOptional.orElse(new EnergyStorage(10000));\nenergyStorage.extractEnergy(500, false);\n")),(0,i.kt)("h2",{id:"sauvegarder-la-capability"},"Sauvegarder la Capability"),(0,i.kt)("p",null,"Si vous avez fait quelques tests par vous-m\xeames, vous avez s\xfbrement remarqu\xe9 que la Capability n'est pas sauvegard\xe9e : c'est normal."),(0,i.kt)("p",null,"Pour sauvegarder sa Capability, il faut modifier votre Provider comme ceci :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Tout d'abord, il faut savoir quel type de donn\xe9es vous voulez sauvegarder et trouver le ",(0,i.kt)("inlineCode",{parentName:"li"},"Tag"),"(anciennement ",(0,i.kt)("inlineCode",{parentName:"li"},"NBT"),") correspondant : ",(0,i.kt)("inlineCode",{parentName:"li"},"IntTag")," si vous souhaitez sauvegarder un ",(0,i.kt)("inlineCode",{parentName:"li"},"int"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"StringTag")," pour un ",(0,i.kt)("inlineCode",{parentName:"li"},"String"),", ou encore ",(0,i.kt)("inlineCode",{parentName:"li"},"CompoundTag")," pour stocker diff\xe9rents types de donn\xe9es. Il en existe beaucoup d'autres, je vous invite donc \xe0 regarder le package ",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"em"},"net.minecraft.nbt"))," pour la liste compl\xe8te."),(0,i.kt)("li",{parentName:"ul"},"Ensuite, changez votre classe pour impl\xe9menter ",(0,i.kt)("inlineCode",{parentName:"li"},"ICapabilitySerializable<VotreTag>"),"(remplacez VotreTag par le ",(0,i.kt)("inlineCode",{parentName:"li"},"Tag")," que vous avez choisi) au lieu de ",(0,i.kt)("inlineCode",{parentName:"li"},"ICapabilityProvider"),". Cela devrait g\xe9n\xe9rer une erreur, c'est normal."),(0,i.kt)("li",{parentName:"ul"},"Ajoutez la fonction ",(0,i.kt)("inlineCode",{parentName:"li"},"serializeNBT")," qui retourne le ",(0,i.kt)("inlineCode",{parentName:"li"},"Tag")," que vous avez d\xe9cid\xe9 d'utiliser que vous aurez pr\xe9alablement set avec les donn\xe9es que vous voulez sauvegarder"),(0,i.kt)("li",{parentName:"ul"},"Finalement, ajoutez la fonction ",(0,i.kt)("inlineCode",{parentName:"li"},"deserializeNBT")," qui a pour argument le ",(0,i.kt)("inlineCode",{parentName:"li"},"Tag")," que vous avez d\xe9cid\xe9 d'utiliser et que vous pouvez r\xe9cup\xe9rer pour l'utiliser")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"La plupart des impl\xe9mentations par d\xe9faut des Capabilities fournies par Forge (regardez les classes qui impl\xe9mentent l'interface de la Capability de votre choix) poss\xe8dent des fonctions permettant de s\xe9rialiser et de d\xe9s\xe9rialiser des ",(0,i.kt)("inlineCode",{parentName:"p"},"Tag"),". Si elles existent, il est donc pr\xe9f\xe9rable de les utiliser dans les fonctions correspondantes de votre Provider.")),(0,i.kt)("p",null,"Voici ce que cela donne si l'on reprend le Provider cr\xe9\xe9 plus haut :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class EnergyStorageProvider implements ICapabilitySerializable<IntTag> {\n    private final LazyOptional<IEnergyStorage> energyStorageOptional;\n\n    public EnergyStorageProvider(){\n        this.energyStorageOptional = LazyOptional.of(() -> new EnergyStorage(10000)); // Remplacez le new EnergyStorage() par votre impl\xe9mentation de l\'interface de la capability\n    }\n\n    @Nonnull\n    @Override\n    public <T> LazyOptional<T> getCapability(@Nonnull Capability<T> cap, @Nullable Direction side) {\n        return CapabilityEnergy.ENERGY.orEmpty(cap, this.energyStorageOptional);\n    }\n\n    @Override\n    public IntTag serializeNBT() {\n        LazyOptional<EnergyStorage> energyStorage1 = energyStorageOptional.cast(); //Cette ligne sert \xe0 transformer le LazyOptional qui contient un IEnergyStorage en LazyOptional qui contient un EnergyStorage. Si vous faites ceci, soyez bien s\xfbrs que votre LazyOptional du d\xe9but contienne forc\xe9ment une instance de la classe que vous castez, sinon vous aurez une erreur\n        return (IntTag) energyStorage1.orElseThrow(() -> new IllegalArgumentException("Unable to serialize the capability : the capability is not present")).serializeNBT();\n    }\n\n    @Override\n    public void deserializeNBT(IntTag nbt) {\n        LazyOptional<EnergyStorage> energyStorage1 = energyStorageOptional.cast();\n        energyStorage1.orElseThrow(() -> new IllegalArgumentException("Unable to deserialize the capability : the capability is not present")).deserializeNBT(nbt);\n    }\n    \n}\n')),(0,i.kt)("h2",{id:"cr\xe9er-une-capability"},"Cr\xe9er une Capability"),(0,i.kt)("p",null,"Si aucune des Capabilities fournies par Forge ne vous convient, vous pouvez cr\xe9er la v\xf4tre."),(0,i.kt)("p",null,"Pour ce faire, vous allez devoir cr\xe9er plusieurs classes : l'interface de la Capability, une ou plusieurs impl\xe9mentations et enfin une classe qui va contenir l'instance de la Capability."),(0,i.kt)("h3",{id:"linterface-de-la-capability"},"L'interface de la Capability"),(0,i.kt)("p",null,"Cette partie est relativement simple et d\xe9pend beaucoup de l'usage que vous voulez faire de votre Capability. Cr\xe9ez juste les fonctions dont vous avez besoin."),(0,i.kt)("p",null,"Exemple :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public interface ILightCapability {\n\n    /**\n     * Used to get the amount of light stored\n     * @return the amount of light stored\n     */\n    int getLight();\n\n    /**\n     * Used to define the light stored\n     * @param light the new amount of light\n     */\n    void setLight(int light);\n\n    /**\n     * Used to add an amount of light to the storage\n     * @param light the amount of light to be added to the storage\n     */\n    default void receiveLight(int light){\n        setLight(getLight() + light);\n    }\n\n    /**\n     * Used to remove an amount of light to the storage\n     * @param light the amount of light to be removed from the storage\n     */\n    default void extractLight(int light){\n        setLight(getLight() - light);\n    }\n\n}\n")),(0,i.kt)("h3",{id:"les-impl\xe9mentations-de-linterface-de-votre-capability"},"Les impl\xe9mentations de l'interface de votre Capability"),(0,i.kt)("p",null,"Apr\xe8s avoir cr\xe9\xe9 l'interface de sa Capability, il faut aussi cr\xe9er des impl\xe9mentations de cette m\xeame interface : ce seront elles qui seront utilis\xe9es en temps r\xe9el par le biais des ",(0,i.kt)("inlineCode",{parentName:"p"},"LazyOptional")," lorsque vous r\xe9cup\xe9rez votre Capability."),(0,i.kt)("p",null,'La seule "r\xe8gle" est qu\'il faut que vous impl\xe9mentiez votre interface, et vous pouvez aussi faire comme Forge et rajouter des fonctions pour s\xe9rialiser et d\xe9s\xe9rialiser les donn\xe9es contenues dans la classe, pour rendre le code plus facile \xe0 comprendre et \xe0 \xe9diter si vous utilisez plusieurs Provider par exemple.'),(0,i.kt)("p",null,"Exemple :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class LightStorage implements ILightCapability{\n    private final int maxLight;\n    private int light;\n    \n    public LightStorage(int maxLight){\n        this.maxLight = maxLight;\n    }\n    \n    @Override\n    public int getLight() {\n        return light;\n    }\n\n    @Override\n    public void setLight(int light) {\n        light = Math.min(light, maxLight); //Un peu de code pour emp\xeacher le niveau de lumi\xe8re ("light") de d\xe9passer la valeur maximale d\xe9finie dans le constructeur ou d\'\xeatre en dessous de 0\n        light = Math.max(light, 0);\n        this.light = light;\n    }\n\n    public Tag serializeNBT(){\n        return IntTag.valueOf(getLight());\n    }\n\n    public void deserializeNBT(Tag nbt){\n        if(nbt instanceof IntTag){\n            setLight(((IntTag) nbt).getAsInt());\n        }\n    }\n}\n')),(0,i.kt)("h3",{id:"cr\xe9er-la-classe-contenant-linstance-de-la-capability"},"Cr\xe9er la classe contenant l'instance de la Capability"),(0,i.kt)("p",null,"Il faut maintenant cr\xe9er une classe qui contiendra l'instance par d\xe9faut de votre Capability (il s'agit en fait d'une instance de la classe ",(0,i.kt)("inlineCode",{parentName:"p"},"Capability"),")"),(0,i.kt)("p",null,"Le code pour la r\xe9cup\xe9rer est exactement le m\xeame qu'",(0,i.kt)("a",{parentName:"p",href:"#r%C3%A9cup%C3%A9rer-linstance-dune-capability"},"ici"),", il faut juste mettre \xe7a dans une classe."),(0,i.kt)("p",null,"Exemple :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class LightCapability {\n    public static Capability<ILightCapability> LIGHT_CAPABILITY = CapabilityManager.get(new CapabilityToken<>(){});\n}\n")),(0,i.kt)("h3",{id:"enregistrer-la-capability"},"Enregistrer la Capability"),(0,i.kt)("p",null,"Finalement il suffit d'enregistrer sa Capability et cela peut \xeatre fait de 2 mani\xe8res diff\xe9rentes, soit avec un \xe9v\xe9nement, soit avec une annotation."),(0,i.kt)("h4",{id:"avec-l\xe9v\xe9nement-registercapabilitiesevent"},"Avec l'\xe9v\xe9nement ",(0,i.kt)("inlineCode",{parentName:"h4"},"RegisterCapabilitiesEvent")),(0,i.kt)("p",null,"Pour ce qui est de la m\xe9thode avec l'\xe9v\xe9nement, il faut enregistrer sa Capability \xe0 l'aide de la fonction ",(0,i.kt)("inlineCode",{parentName:"p"},"register")," de l'\xe9v\xe9nement ",(0,i.kt)("inlineCode",{parentName:"p"},"RegisterCapabilitiesEvent")," pour que Forge sache qu'elle existe."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"N'oubliez pas de faire attention \xe0 ce que la classe dans laquelle vous mettez ledit \xe9v\xe9nement soit bien \"abonn\xe9e\" aux flux d'\xe9v\xe9nements !")),(0,i.kt)("p",null,"Exemple :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@SubscribeEvent\npublic void registerCaps(RegisterCapabilitiesEvent event) {\n    event.register(ILightCapability.class);\n}\n")),(0,i.kt)("h4",{id:"avec-lannotation-autoregistercapability"},"Avec l'annotation ",(0,i.kt)("inlineCode",{parentName:"h4"},"@AutoRegisterCapability")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Cette m\xe9thode n'est possible que dans les versions sup\xe9rieures \xe0 la 1.19.2-43.1.1.")),(0,i.kt)("p",null,"Avec la m\xe9thode de l'annotation, il suffit de rajouter l'annotation ",(0,i.kt)("inlineCode",{parentName:"p"},"@AutoRegisterCapability")," au-dessus de l'",(0,i.kt)("a",{parentName:"p",href:"#linterface-de-la-capability"},"interface")," que nous avons cr\xe9\xe9e pr\xe9c\xe9demment"),(0,i.kt)("p",null,"Exemple :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@AutoRegisterCapability\npublic interface ILightCapability {\n    ...\n}\n")))}c.isMDXComponent=!0}}]);