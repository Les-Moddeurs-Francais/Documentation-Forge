"use strict";(self.webpackChunkdoc_forge=self.webpackChunkdoc_forge||[]).push([[902],{4816:function(e,t,s){s.r(t),s.d(t,{frontMatter:function(){return u},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return d},default:function(){return m}});var r=s(7462),n=s(3366),o=(s(7294),s(3905)),a=["components"],u={slug:"forge-117-370",title:"Forge 1.17.1 37.0",author:"Mysterious_Dev",author_title:"Admin de Les Moddeurs Francais",author_url:"https://github.com/Mysterious-Dev",author_image_url:"https://avatars.githubusercontent.com/u/40738104?v=4",tags:["forge","update","1.17.1"]},i=void 0,l={permalink:"/blog/forge-117-370",editUrl:"https://github.com/Les-Moddeurs-Francais/Forge-Doc/edit/master/blog/2021-07-22-forge-117-370.md",source:"@site/blog/2021-07-22-forge-117-370.md",title:"Forge 1.17.1 37.0",description:"La version 1.17.1 37.0 de Forge est sortie apr\xe8s des semaines d'attente, et celle-ci change beaucoup de choses.",date:"2021-07-22T00:00:00.000Z",formattedDate:"July 22, 2021",tags:[{label:"forge",permalink:"/blog/tags/forge"},{label:"update",permalink:"/blog/tags/update"},{label:"1.17.1",permalink:"/blog/tags/1-17-1"}],truncated:!0,prevItem:{title:"Forge 1.16.5 36.2",permalink:"/blog/forge-116-362"}},d=[{value:"Enfin !",id:"enfin-",children:[]},{value:"Java 16 et les Modules",id:"java-16-et-les-modules",children:[]},{value:"Mixins",id:"mixins",children:[]},{value:"Forge Gradle",id:"forge-gradle",children:[]},{value:"Installateurs et serveurs",id:"installateurs-et-serveurs",children:[]}],c={toc:d};function m(e){var t=e.components,s=(0,n.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"La version 1.17.1 37.0 de Forge est sortie apr\xe8s des semaines d'attente, et celle-ci change beaucoup de choses."),(0,o.kt)("p",null,"Lien de l'annonce de Forge : ",(0,o.kt)("a",{parentName:"p",href:"https://forums.minecraftforge.net/topic/102544-forge-370-minecraft-1171/"},"https://forums.minecraftforge.net/topic/102544-forge-370-minecraft-1171/")),(0,o.kt)("h3",{id:"enfin-"},"Enfin !"),(0,o.kt)("p",null,"Minecraft Forge 1.17.1 est d\xe9sormais publique !\nAvant toutes choses, quelques points sont \xe0 aborder suite aux nombreux changements."),(0,o.kt)("h3",{id:"java-16-et-les-modules"},"Java 16 et les Modules"),(0,o.kt)("p",null,"Presque toutes les fonctionnalit\xe9s de Java 16 sont ouvertes aux mods.\nCependant, les modules Java sont un peu p\xe9nibles \xe0 utiliser."),(0,o.kt)("p",null,"Si vous utilisez le syst\xe8me module-info dans votre mod, assurez-vous de bien comprendre ce que c\u2019est et comment il est expos\xe9 aux autres modules (mods) au moment de la compilation.\nActuellement, module-infos sera ignor\xe9 lors de l\u2019ex\xe9cution mais PAS lors de la compilation.\nNotre conseil permanent est de ne pas d\xe9velopper votre mod en tant que module."),(0,o.kt)("h3",{id:"mixins"},"Mixins"),(0,o.kt)("p",null,"Les Mixins ont \xe9t\xe9 d\xe9sactiv\xe9s pour le moment suite au changement de version de Java (Minecraft \xe9tant pass\xe9 de Java 8 \xe0 Java 16). Une fois que la librairie sera mise \xe0 jour, ils seront r\xe9introduits."),(0,o.kt)("h3",{id:"forge-gradle"},"Forge Gradle"),(0,o.kt)("p",null,"ForgeGradle 5 est d\xe9sormais disponible pour le d\xe9veloppement de mod en version 1.16 et 1.17 (pour faciliter le support de Java 16, faciliter la t\xe2che aux moddeurs utilisant les 2 versions, etc...)."),(0,o.kt)("h3",{id:"installateurs-et-serveurs"},"Installateurs et serveurs"),(0,o.kt)("p",null,"En raison du fonctionnement du syst\xe8me de modules en Java, le serveur se lance d\xe9sormais d\u2019une mani\xe8re tr\xe8s diff\xe9rente.\nIl n\u2019est plus possible de fournir un seul fichier jar ex\xe9cutable comme c\u2019\xe9tait le cas auparavant, une solution de contournement est donc utilis\xe9 :"),(0,o.kt)("p",null,"Lorsque vous installez un serveur, vous verrez deux scripts d\u2019ex\xe9cution (un pour Linux et Mac, un pour Windows) et des fichiers d\u2019arguments.\nLes arguments sont ajout\xe9s dans l\u2019ordre :"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"java @user_jvm_args.txt @forge_args.txt <user game args>")),(0,o.kt)("p",null,"Comme vous pouvez le constater par son nom, seul le fichier user_jvm_args.txt est destin\xe9 \xe0 \xeatre modifi\xe9 par l\u2019utilisateur final."),(0,o.kt)("p",null,"Il y a un exemple \xe9crit fourni par CurlieWurlie dans le fichier user_jvm_args qui explique les arguments les plus couramment utilis\xe9s (-Xmx, -Xms).\nLes tutoriels pour cr\xe9er un serveur ne fonctionneront plus sur Forge >=37.0. Vous devrez utiliser l\u2019un des fichiers de commandes (.bash / .sh) fournis, sinon le jeu ne pourra pas se charger."))}m.isMDXComponent=!0}}]);