"use strict";(self.webpackChunkdoc_forge=self.webpackChunkdoc_forge||[]).push([[2423],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return t?a.createElement(f,s(s({ref:n},u),{},{components:t})):a.createElement(f,s({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},54145:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const i={sidebar_position:2,title:"Recettes",description:"Comment utiliser les data generators pour les recettes ?",tags:["data generators"]},s=void 0,o={unversionedId:"data/recipe",id:"version-1.18.x/data/recipe",title:"Recettes",description:"Comment utiliser les data generators pour les recettes ?",source:"@site/versioned_docs/version-1.18.x/data/recipe.mdx",sourceDirName:"data",slug:"/data/recipe",permalink:"/1.18.x/data/recipe",draft:!1,editUrl:"https://github.com/Les-Moddeurs-Francais/Documentation-Forge/edit/master/versioned_docs/version-1.18.x/data/recipe.mdx",tags:[{label:"data generators",permalink:"/1.18.x/tags/data-generators"}],version:"1.18.x",lastUpdatedBy:"Mysterious_Dev",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Recettes",description:"Comment utiliser les data generators pour les recettes ?",tags:["data generators"]},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/1.18.x/data/intro"},next:{title:"Fichiers de traductions",permalink:"/1.18.x/data/lang"}},l={},p=[{value:"Code",id:"code",level:2},{value:"Cr\xe9ation du g\xe9n\xe9rateur",id:"cr\xe9ation-du-g\xe9n\xe9rateur",level:3},{value:"Recettes dans la table de craft",id:"recettes-dans-la-table-de-craft",level:2},{value:"Shaped recipes",id:"shaped-recipes",level:3},{value:"Shapeless recipes",id:"shapeless-recipes",level:3},{value:"Autres",id:"autres",level:3},{value:"Recettes de cuisson",id:"recettes-de-cuisson",level:2},{value:"Recettes dans le stonecutter",id:"recettes-dans-le-stonecutter",level:2},{value:"Recettes dans la smithing table",id:"recettes-dans-la-smithing-table",level:2},{value:"G\xe9n\xe9rer les fichiers",id:"g\xe9n\xe9rer-les-fichiers",level:2}],u={toc:p};function c(e){let{components:n,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Dans cette section, nous allons voir comment g\xe9n\xe9rer nos diff\xe9rentes ",(0,r.kt)("a",{parentName:"p",href:"/1.18.x/bases/resources/recipe"},"recettes")," \xe0 l'aide d'un g\xe9n\xe9rateur."),(0,r.kt)("h2",{id:"code"},"Code"),(0,r.kt)("h3",{id:"cr\xe9ation-du-g\xe9n\xe9rateur"},"Cr\xe9ation du g\xe9n\xe9rateur"),(0,r.kt)("p",null,"Cr\xe9ez une nouvelle classe avec comme nom, par exemple, ",(0,r.kt)("inlineCode",{parentName:"p"},"RecipeGenerator")," qui h\xe9rite de\nla classe ",(0,r.kt)("inlineCode",{parentName:"p"},"RecipeProvider"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class RecipeGenerator extends RecipeProvider {\n\n    public RecipeGenerator(DataGenerator gen) {\n        super(gen);\n    }\n\n    @Override\n    protected void buildCraftingRecipes(Consumer<FinishedRecipe> p_176532_) {\n\n    }\n}\n")),(0,r.kt)("p",null,"Ecrivez le constructeur impos\xe9 par la classe m\xe8re, puis re-d\xe9finissez la m\xe9thode\n",(0,r.kt)("inlineCode",{parentName:"p"},"buildCraftingRecipes")," en supprimant le ",(0,r.kt)("inlineCode",{parentName:"p"},"super"),"."),(0,r.kt)("p",null,"Rendez-vous maintenant dans votre classe avec l'event ",(0,r.kt)("inlineCode",{parentName:"p"},"GatherDataEvent")," et\najoutez le g\xe9n\xe9rateur comme ceci :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@SubscribeEvent\n    public static void dataGen(final GatherDataEvent e)\n    {\n        DataGenerator generator = e.getGenerator();\n\n        if(e.includeClient())\n        {\n\n        }\n\n        if(e.includeServer())\n        {\n            generator.addProvider(new RecipeGenerator(generator));\n        }\n    }\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Les crafts sont g\xe9r\xe9s par le serveur, on ex\xe9cute donc la g\xe9n\xe9ration des recettes\nseulement si l'event l'inclus.")),(0,r.kt)("p",null,"De cette fa\xe7on on ajoute notre g\xe9n\xe9rateur de crafts aux g\xe9n\xe9rateurs associ\xe9s de notre\nmod."),(0,r.kt)("h2",{id:"recettes-dans-la-table-de-craft"},"Recettes dans la table de craft"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Il faut savoir que dans Minecraft, il y a plusieurs types de crafts. Les ",(0,r.kt)("em",{parentName:"p"},"shaped")," et\n",(0,r.kt)("em",{parentName:"p"},"shapeless"),"."),(0,r.kt)("p",{parentName:"admonition"},"Les ",(0,r.kt)("em",{parentName:"p"},"shaped")," d\xe9finissent les crafts dont la disposition des items dans\nla table doit respecter un certain sch\xe9ma."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"Ex: les \xe9p\xe9es, les pioches, la table d'enchantement, les coffres, etc...")),(0,r.kt)("p",{parentName:"admonition"},"Les ",(0,r.kt)("em",{parentName:"p"},"shapeless")," eux, n'ont pas de forme pr\xe9d\xe9finie.\nSeul le contenu m\xeame du craft importe."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"Ex: les feux d'artifices (customisation), les soupes de champignons, etc..."))),(0,r.kt)("h3",{id:"shaped-recipes"},"Shaped recipes"),(0,r.kt)("p",null,"Pour l'exemple, je vais cr\xe9er un craft qui me donnera 1 diamant lorsque je disposerai\nune croix de dirt avec une pomme au milieu."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Exemple de craft",src:t(45574).Z,width:"504",height:"209"})),(0,r.kt)("p",null,"Allez dans la fonction ",(0,r.kt)("inlineCode",{parentName:"p"},"buildCraftingRecipes")," puis ins\xe9rez ce code :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'ShapedRecipeBuilder.shaped(Items.DIAMOND, 1)\n                .define(\'D\', Blocks.DIRT)\n                .define(\'A\', Items.APPLE)\n                .pattern(" D ")\n                .pattern("DAD")\n                .pattern(" D ")\n                .group("diamond")\n                .unlockedBy("unlock", InventoryChangeTrigger.TriggerInstance.hasItems(ItemPredicate.Builder.item().of(Items.APPLE).of(Blocks.DIRT).build()))\n                .save(consumer, new ResourceLocation(Testmod.MODID, "mon_craft"));\n')),(0,r.kt)("p",null,"Ne vous inqui\xe8tez pas, au premier abord, \xe7a para\xeet un peu compliqu\xe9, mais en d\xe9composant\npetit \xe0 petit \xe7a va se clarifier. On voit donc qu'on a besoin de la classe ",(0,r.kt)("inlineCode",{parentName:"p"},"ShapedRecipeBuilder"),"\nqui comme son nom l'indique permet de construire notre craft. A l'aide de plusieurs fonctions\non va pouvoir d\xe9finir les propri\xe9t\xe9s de notre craft."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"shaped(Items.DIAMOND, 1)\n")),(0,r.kt)("p",null,"La fonction ",(0,r.kt)("inlineCode",{parentName:"p"},"shaped")," sert \xe0 donner le r\xe9sulat, du craft. Oui, on commence par le r\xe9sultat\net non par les ingr\xe9dients. En premier argument vous pouvez donner un ",(0,r.kt)("inlineCode",{parentName:"p"},"Item"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Block")," ou\nm\xeame un ",(0,r.kt)("inlineCode",{parentName:"p"},"Tag<Item>"),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Ce dernier est tr\xe8s utile pour des crafts utilisant les laines\nde couleurs par exemple, vous permettant de sp\xe9cifier l'ensemble des laines.")),(0,r.kt)("p",null,"En deuxi\xe8me argument, vous pouvez, si vous le souhaitez, donner la quantit\xe9 de votre\nr\xe9sultat. Dans cet exemple je vais laisser la quantit\xe9 \xe0 ",(0,r.kt)("strong",{parentName:"p"},"1"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"define('D', Blocks.DIRT)\ndefine('A', Items.APPLE)\n")),(0,r.kt)("p",null,"La fonction ",(0,r.kt)("inlineCode",{parentName:"p"},"define")," permet d'associer \xe0 un caract\xe8re : un item, un block, ou encore un tag.\nDe cette mani\xe8re, lorsqu'on dessinera le sch\xe9ma de notre craft, le caract\xe8re ",(0,r.kt)("inlineCode",{parentName:"p"},"D")," sera\nassoci\xe9 au bloc de terre dans ce cas l\xe0."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Ici le caract\xe8re 'D' n'est pas anodin. Etant donn\xe9 que j'utlise le bloc de ",(0,r.kt)("inlineCode",{parentName:"p"},"Dirt"),",\nj'ai pris l'initial du mot comme caract\xe8re. Essayez de rendre vos craft le plus lisible\npossible. Comme votre code d'ailleurs !")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'pattern(" D ")\npattern("DAD")\npattern(" D ")\n')),(0,r.kt)("p",null,"La fonction ",(0,r.kt)("inlineCode",{parentName:"p"},"pattern")," sert \xe0 donner la forme de notre craft. Souvenez-vous de la forme\nque j'ai donn\xe9 plus haut. Chaque ",(0,r.kt)("inlineCode",{parentName:"p"},"pattern")," repr\xe9sente une ligne de la table de craft.\nIci, on utlise tout l'espace disponible de notre table, donc nous sommes oblig\xe9s de combler\nles vides avec des espaces. Un espace repr\xe9sentant un item vide, soit rien.\nLa table de craft de Minecraft ayant 3x3 slots, il y a trois lignes compos\xe9es chacune\nde 3 caract\xe8res au maximum."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"V\xe9rifiez bien que vous ne d\xe9passez pas la limite de caract\xe8re ou de lignes. C'est souvent\nla cause d'erreurs ou bien de dysfonctionnement de votre craft.")),(0,r.kt)("p",null,"Vous n'\xeates pas oblig\xe9s d'utiliser les trois lignes de la table ou m\xeame de remplir chaque\nligne. Par exemple, pour crafter une \xe9p\xe9e on ferait \xe7a :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'pattern("D")\npattern("D")\npattern("A")\n')),(0,r.kt)("p",null,"En faisant cela, on a bien la forme de l'\xe9p\xe9e et on peut crafter l'\xe9p\xe9e sur n'importe\nquelle colonne de la table. \xc9galement le craft de la table de craft ressemble \xe0 cela :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'pattern("DD")\npattern("DD")\n')),(0,r.kt)("p",null,"On a juste besoin de deux lignes et les quatre \xe9l\xe9ments en forme de carr\xe9.\nDe cette mani\xe8re on peut crafter notre table dans n'importe quel coin de la table\nou m\xeame dans l'inventaire du joueur."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'group("diamond")\n')),(0,r.kt)("p",null,"La fonction ",(0,r.kt)("inlineCode",{parentName:"p"},"group")," sert quant \xe0 elle \xe0 rassembler diff\xe9rents crafts pour le m\xeame\nobjet. Ici, j'ai d\xe9cid\xe9 de cr\xe9er un groupe ",(0,r.kt)("inlineCode",{parentName:"p"},"diamond")," \xe9tant donn\xe9 que mon craft\ndonne un diamant. C'est \xe0 dire que tous les crafts ayant le m\xeame group seront rassembl\xe9s\ndans le livre de recettes du jeu sur la m\xeame case."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'unlockedBy("unlock", InventoryChangeTrigger.TriggerInstance.hasItems(ItemPredicate.Builder.item().of(Items.APPLE).of(Blocks.DIRT).build()))\n')),(0,r.kt)("p",null,"La fonction ",(0,r.kt)("inlineCode",{parentName:"p"},"unlockedBy")," sert \xe0 d\xe9finir le moyen d'obtention du craft. Comme vous le\nsavez, les crafts sont obtenus soit en ayant un item dans l'inventaire soit par le\nbiais d'autres recettes. C'est ce qu'on appelle un ",(0,r.kt)("inlineCode",{parentName:"p"},"Criterion")," et il y en a plusieurs.\nIci pour l'exemple j'utliserai le plus simple : ",(0,r.kt)("inlineCode",{parentName:"p"},"InventoryChangeTrigger"),". C'est\nun criterion qui se d\xe9clenche lorsque le joueur poss\xe8de dans son inventaire certains\nitems. Ici la fonction ",(0,r.kt)("inlineCode",{parentName:"p"},"hasItems")," prend en compte soit un item directement, soit\nun ",(0,r.kt)("inlineCode",{parentName:"p"},"ItemPredicate")," et c'est ce qu'on utlise ici."),(0,r.kt)("p",null,"Je ne vais pas d\xe9tailler ici ce qu'est\nun ",(0,r.kt)("em",{parentName:"p"},"Predicate"),", ici ce sera juste un ensemble d'items qui permettront de d\xe9bloquer le craft.\nDans mon cas, les items en question seront : la pomme et le bloc de terre."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'save(consumer, new ResourceLocation(Testmod.MODID, "mon_craft"))\n')),(0,r.kt)("p",null,"Enfin, la fonction ",(0,r.kt)("inlineCode",{parentName:"p"},"save")," qui sert, comme son nom l'indique, \xe0 sauvegarder notre craft. En\npremier param\xe8tre on renseigne ",(0,r.kt)("inlineCode",{parentName:"p"},"consumer")," qui est le param\xe8tre de notre fonction\n",(0,r.kt)("inlineCode",{parentName:"p"},"buildCraftingRecipes"),". En second param\xe8tre on doit renseigner une ",(0,r.kt)("inlineCode",{parentName:"p"},"ResourceLocation"),"\nqui est en fait l'emplacement et le nom du fichier ",(0,r.kt)("inlineCode",{parentName:"p"},".json"),"."),(0,r.kt)("p",null,"Comme emplacement, j'ai mis le modid de mon mod, c'est-\xe0-dire que le fichier sera\nstock\xe9 dans les crafts de mon mod. Vous auriez pu laisser ",(0,r.kt)("inlineCode",{parentName:"p"},"minecraft")," mais je le d\xe9conseille.\nEnfin, ",(0,r.kt)("inlineCode",{parentName:"p"},'"mon_craft"')," d\xe9signe le nom du fichier final."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Faites attention \xe0 ne pas avoir deux crafts diff\xe9rents ayant le m\xeame nom !")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\xc0 partir de la version 36.2.0 de Forge, il est possible de laisser les fichiers dans le\ndossier ",(0,r.kt)("inlineCode",{parentName:"p"},"generated"),". Ils seront tout de m\xeame d\xe9tect\xe9s par le jeu. Vous n'avez donc\nplus besoin de les d\xe9placer dans le dossier ",(0,r.kt)("inlineCode",{parentName:"p"},"resources")," manuellement.")),(0,r.kt)("h3",{id:"shapeless-recipes"},"Shapeless recipes"),(0,r.kt)("p",null,"On va voir maintenant les shapeless recipes ou recettes sans forme en fran\xe7ais.\nVoici un exemple o\xf9 \xe0 l'aide d'un diamant et d'un colorant vert je craft une \xe9meraude: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'ShapelessRecipeBuilder.shapeless(Items.EMERALD)\n                .requires(Items.DIAMOND)\n                .requires(Items.GREEN_DYE)\n                .unlockedBy("unlock", InventoryChangeTrigger.TriggerInstance.hasItems(ItemPredicate.Builder.item().of(Items.EMERALD).of(Items.GREEN_DYE).build()))\n                .save(consumer, new ResourceLocation(Testmod.MODID, "test_emerald"));\n')),(0,r.kt)("p",null,"On remarque ici beaucoup de similitudes avec les shaped recipes. La seule\nfonction qui change est la fonction ",(0,r.kt)("inlineCode",{parentName:"p"},"requires"),". Cette fonction remplace\nle combo des fonctions ",(0,r.kt)("inlineCode",{parentName:"p"},"define")," et ",(0,r.kt)("inlineCode",{parentName:"p"},"pattern"),". La fonction ",(0,r.kt)("inlineCode",{parentName:"p"},"requires")," ne prend\nqu'un seul param\xe8tre pouvant \xeatre un item, un tag, etc...\nJe vous conseille de regarder toutes les d\xe9finitions de la fonction dans\nvotre IDE pour voir tout ce qui vous est propos\xe9.\nLe reste ressemble comme deux gouttes d'eau aux shaped recipes, je ne reviendrai\ndonc pas dessus."),(0,r.kt)("h3",{id:"autres"},"Autres"),(0,r.kt)("p",null,"Dans la classe ",(0,r.kt)("inlineCode",{parentName:"p"},"RecipeProvider")," de Minecraft, vous pouvez trouver diff\xe9rentes fonctions\nvers la fin de celle-ci. Elles permettent aux d\xe9veloppeurs de g\xe9n\xe9rer certaines\nformes de crafts automatiquement sans avoir \xe0 r\xe9\xe9crire toujours la m\xeame chose.\nJe vous conseille d'aller y jeter un coup d'\u0153il, \xe7a peut \xeatre int\xe9ressant !"),(0,r.kt)("h2",{id:"recettes-de-cuisson"},"Recettes de cuisson"),(0,r.kt)("p",null,"Voyons maintenant les diff\xe9rents types de cuisson. Comme vous le savez, il\ny a d\xe9sormais plusieurs types de four disponibles dans Minecraft.\nOn a toujours le four classique, mais \xe9galement le blast furnace et le smoker.\n\xc9galement le feu de camp fait son apparition. On a donc quatre nouveaux\ntypes de craft potentiels.\nChaque type de craft a sa propre fonction de d\xe9di\xe9e."),(0,r.kt)("p",null,"Chaque bloc \xe0 sa propre fonction d\xe9di\xe9e, mais elles ont toutes la m\xeame\nd\xe9finition. La seule chose qui change, c'est le bloc dans lequel\nla recette est valide. Pour l'exemple je montrerai donc qu'une seule fonction,\nen l'occurence la fonction ",(0,r.kt)("inlineCode",{parentName:"p"},"smelting")," associ\xe9e au four. Voici les autres\nfonctions pour les autres blocs :"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Blast furnace -> ",(0,r.kt)("inlineCode",{parentName:"li"},"blasting")),(0,r.kt)("li",{parentName:"ul"},"Smoker -> ",(0,r.kt)("inlineCode",{parentName:"li"},"smoking")),(0,r.kt)("li",{parentName:"ul"},"Campfire -> ",(0,r.kt)("inlineCode",{parentName:"li"},"campfireCooking")))),(0,r.kt)("p",null,"Voyons maintenant un exemple concret d'une recette de cuisson o\xf9 \xe0 partir\nd'une planche de bois on r\xe9cup\xe8re un charbon de bois."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'SimpleCookingRecipeBuilder.smelting(Ingredient.of(ItemTags.PLANKS), Items.CHARCOAL, 1.0f, 200)\n                .unlockedBy("unlock", InventoryChangeTrigger.TriggerInstance.hasItems(ItemPredicate.Builder.item().of(ItemTags.PLANKS).build()))\n                .save(consumer, new ResourceLocation(Testmod.MODID, "planks_to_charcoal"));\n')),(0,r.kt)("p",null,"En premier argument, on a besoin d'un ",(0,r.kt)("inlineCode",{parentName:"p"},"Ingredient"),". Pour cela on a acc\xe8s \xe0\n",(0,r.kt)("inlineCode",{parentName:"p"},"Ingredient.of")," qui peut prendre en param\xe8tre un item, un bloc ou un tag.\nIl y a d'autres d\xe9finitions, je vous laisse regarder \xe7a de votre c\xf4t\xe9.\nPour mon exemple, on va avoir besoin d'utiliser le tag des planches\n",(0,r.kt)("inlineCode",{parentName:"p"},"ItemTags.PLANKS")," de sorte que notre recette fonctionne avec\nn'importe quelle planche du jeu."),(0,r.kt)("p",null,"Ensuite, on renseigne un item ou un bloc en deuxi\xe8me argument."),(0,r.kt)("p",null,"Le troisi\xe8me argument repr\xe9sente la quantit\xe9 d'xp que vous r\xe9cup\xe9rez\nquand la cuisson est termin\xe9e. (Ici la quantit\xe9 d'xp est la m\xeame que\nla cuisson d'un lingot)"),(0,r.kt)("p",null,"Enfin, le dernier param\xe8tre repr\xe9sente le temps en ticks que prend\nla cuisson. Les recettes du jeu prennent en g\xe9n\xe9ral 200 ticks soit\n10 secondes. \xc0 vous de voir si vous voulez jouer avec \xe7a."),(0,r.kt)("h2",{id:"recettes-dans-le-stonecutter"},"Recettes dans le stonecutter"),(0,r.kt)("p",null,"Int\xe9ressons-nous maintenant au stonecutter. Pour l'exemple je vais cr\xe9er\nune recette \xe0 partir de planche pour obtenir une b\xfbche."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'SingleItemRecipeBuilder.stonecutting(Ingredient.of(ItemTags.PLANKS), Blocks.OAK_LOG, 1)\n                .unlockedBy("unlock", InventoryChangeTrigger.TriggerInstance.hasItems(ItemPredicate.Builder.item().of(ItemTags.PLANKS).build()))\n                .save(consumer, new ResourceLocation(Testmod.MODID, "planks_to_log"));\n')),(0,r.kt)("p",null,"Comme plus haut, le premier argument est un ",(0,r.kt)("inlineCode",{parentName:"p"},"Ingredient")," et le deuxi\xe8me\nun item ou un bloc."),(0,r.kt)("p",null,"Quant au troisi\xe8me, il est optionnel mais vous permet de g\xe9rer la quantit\xe9\ndu r\xe9sultat obtenu."),(0,r.kt)("h2",{id:"recettes-dans-la-smithing-table"},"Recettes dans la smithing table"),(0,r.kt)("p",null,"Attaquons maintenant le dernier bloc, la smithing table.\nDans ce cas-l\xe0, je cr\xe9e une recette permettant d'am\xe9liorer une pioche en pierre\nen pioche en fer \xe0 l'aide d'un lingot de fer. Ici aussi, c'est\nassez simple : "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'UpgradeRecipeBuilder.smithing(Ingredient.of(Items.STONE_PICKAXE), Ingredient.of(Items.IRON_INGOT), Items.IRON_PICKAXE)\n                .unlocks("unlock", InventoryChangeTrigger.TriggerInstance.hasItems(Items.STONE_PICKAXE))\n                .save(consumer, new ResourceLocation(Testmod.MODID, "stone_pickaxe_upgrade"));\n')),(0,r.kt)("p",null,"Le premier argument repr\xe9sente l'item que vous am\xe9liorez, le deuxi\xe8me\nrepr\xe9sente l'item d'am\xe9lioration et le dernier repr\xe9sente le r\xe9sultat.\nLes deux premiers sont des ",(0,r.kt)("inlineCode",{parentName:"p"},"Ingredient")," et le dernier un ",(0,r.kt)("inlineCode",{parentName:"p"},"ItemLike")," soit\nun item ou un bloc."),(0,r.kt)("h2",{id:"g\xe9n\xe9rer-les-fichiers"},"G\xe9n\xe9rer les fichiers"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Il ne vous reste plus qu'\xe0 lancer ",(0,r.kt)("inlineCode",{parentName:"p"},"runData")," et vous devriez avoir vos fichiers\ng\xe9n\xe9r\xe9s dans le dossier ",(0,r.kt)("inlineCode",{parentName:"p"},"generated")," de votre workspace !")))}c.isMDXComponent=!0},45574:(e,n,t)=>{t.d(n,{Z:()=>a});const a="data:image/png;base64,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"}}]);