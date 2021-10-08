---
sidebar_position: 2
title: Recettes
description: Comment utiliser les data generators pour les recettes ?
tags: [data generators]
---

## Introduction

Dans cet article nous allons voir comment générer nos différents crafts à l'aide
d'un générateur.

## Code

### Création du générateur

Créez une nouvelle classe avec comme nom, par exemple, ``RecipeGenerator`` qui hérite de
la classe ``RecipeProvider``.

````java
public class RecipeGenerator extends RecipeProvider {

    public RecipeGenerator(DataGenerator gen) {
        super(gen);
    }

    @Override
    protected void buildCraftingRecipes(Consumer<FinishedRecipe> p_176532_) {

    }
}
````

Ecrivez le constructeur imposé par la classe mère, puis re-définissez la méthode
`buildCraftingRecipes` en supprimant le `super`.

Rendez-vous maintenant dans votre classe avec l'event ``GatherDataEvent`` et
ajoutez le générateur comme ceci :

````java
@SubscribeEvent
    public static void dataGen(final GatherDataEvent e)
    {
        DataGenerator generator = e.getGenerator();

        if(e.includeClient())
        {

        }

        if(e.includeServer())
        {
            generator.addProvider(new RecipeGenerator(generator));
        }
    }
````

:::tip
Les crafts sont gérés par le serveur, on exécute donc la génération des recettes
seulement si l'event l'inclus.
:::

De cette façon on ajoute notre générateur de crafts aux générateurs associés de notre
mod.

## Recettes dans la table de craft

:::tip
Il faut savoir que dans Minecraft, il y a plusieurs types de crafts. Les *shaped* et
*shapeless*.

Les *shaped* définissent les crafts dont la disposition des items dans
la table doit respecter un certain schéma.

``Ex: les épées, les pioches, la table d'enchantement, les coffres, etc...`` 

Les *shapeless* eux, n'ont pas de forme prédéfinie.
Seul le contenu même du craft importe.

``Ex: les feux d'artifices (customisation), les soupes de champignons, etc...``
:::

### Shaped recipes

Pour l'exemple, je vais créer un craft qui me donnera 1 diamant lorsque je disposerai
une croix de dirt avec une pomme au milieu.

![img.png](/img/docs/exemple_craft_shaped.png)

Allez dans la fonction `buildCraftingRecipes` puis insérez ce code :

````java
ShapedRecipeBuilder.shaped(Items.DIAMOND, 1)
                .define('D', Blocks.DIRT)
                .define('A', Items.APPLE)
                .pattern(" D ")
                .pattern("DAD")
                .pattern(" D ")
                .group("diamond")
                .unlockedBy("unlock", InventoryChangeTrigger.TriggerInstance.hasItems(ItemPredicate.Builder.item().of(Items.APPLE).of(Blocks.DIRT).build()))
                .save(consumer, new ResourceLocation(Testmod.MODID, "mon_craft"));
````

Ne vous inquiètez pas, au premier abord, ça paraît un peu compliqué, mais en décomposant
petit à petit ça va se clarifier. On voit donc qu'on a besoin de la classe ``ShapedRecipeBuilder``
qui comme son nom l'indique permet de construire notre craft. A l'aide de plusieurs fonctions
on va pouvoir définir les propriétés de notre craft.

````java
shaped(Items.DIAMOND, 1)
````

La fonction ``shaped`` sert à donner le résulat, du craft. Oui, on commence par le résultat
et non par les ingrédients. En premier argument vous pouvez donner un ``Item``, ``Block`` ou
même un ``Tag<Item>``.

:::tip
Ce dernier est très utile pour des crafts utilisant les laines
de couleurs par exemple, vous permettant de spécifier l'ensemble des laines.
:::

En deuxième argument, vous pouvez, si vous le souhaitez, donner la quantité de votre
résultat. Dans cet exemple je vais laisser la quantité à **1**.

````java
define('D', Blocks.DIRT)
define('A', Items.APPLE)
````

La fonction ``define`` permet d'associer à un caractère : un item, un block, ou encore un tag.
De cette manière, lorsqu'on dessinera le schéma de notre craft, le caractère ``D`` sera
associé au bloc de terre dans ce cas là.

:::tip
Ici le caractère 'D' n'est pas anodin. Etant donné que j'utlise le bloc de ``Dirt``,
j'ai pris l'initial du mot comme caractère. Essayez de rendre vos craft le plus lisible
possible. Comme votre code d'ailleurs !
:::

````java
pattern(" D ")
pattern("DAD")
pattern(" D ")
````

La fonction ``pattern`` sert à donner la forme de notre craft. Souvenez-vous de la forme
que j'ai donné plus haut. Chaque ``pattern`` représente une ligne de la table de craft.
Ici, on utlise tout l'espace disponible de notre table, donc nous sommes obligés de combler
les vides avec des espaces. Un espace représentant un item vide, soit rien.
La table de craft de Minecraft ayant 3x3 slots, il y a trois lignes composées chacune
de 3 caractères au maximum.

:::caution
Vérifiez bien que vous ne dépassez pas la limite de caractère ou de lignes. C'est souvent
la cause d'erreurs ou bien de dysfonctionnement de votre craft.
:::

Vous n'êtes pas obligés d'utiliser les trois lignes de la table ou même de remplir chaque
ligne. Par exemple, pour crafter une épée on ferait ça :

````java
pattern("D")
pattern("D")
pattern("A")
````

En faisant cela, on a bien la forme de l'épée et on peut crafter l'épée sur n'importe
quelle colonne de la table. Également le craft de la table de craft ressemble à cela :

````java
pattern("DD")
pattern("DD")
````

On a juste besoin de deux lignes et les quatre éléments en forme de carré.
De cette manière on peut crafter notre table dans n'importe quel coin de la table
ou même dans l'inventaire du joueur.

````java
group("diamond")
````

La fonction ``group`` sert quant à elle à rassembler différents crafts pour le même
objet. Ici, j'ai décidé de créer un groupe ``diamond`` étant donné que mon craft
donne un diamant. C'est à dire que tous les crafts ayant le même group seront rassemblés
dans le livre de recettes du jeu sur la même case.

````java
unlockedBy("unlock", InventoryChangeTrigger.TriggerInstance.hasItems(ItemPredicate.Builder.item().of(Items.APPLE).of(Blocks.DIRT).build()))
````

La fonction ``unlockedBy`` sert à définir le moyen d'obtention du craft. Comme vous le
savez, les crafts sont obtenus soit en ayant un item dans l'inventaire soit par le
biais d'autres recettes. C'est ce qu'on appelle un ``Criterion`` et il y en a plusieurs.
Ici pour l'exemple j'utliserai le plus simple : ``InventoryChangeTrigger``. C'est
un criterion qui se déclenche lorsque le joueur possède dans son inventaire certains
items. Ici la fonction ``hasItems`` prend en compte soit un item directement, soit
un ``ItemPredicate`` et c'est ce qu'on utlise ici.

Je ne vais pas détailler ici ce qu'est
un *Predicate*, ici ce sera juste un ensemble d'items qui permettront de débloquer le craft.
Dans mon cas, les items en question seront : la pomme et le bloc de terre.

````java
save(consumer, new ResourceLocation(Testmod.MODID, "mon_craft"))
````

Enfin, la fonction ``save`` sert, comme son nom l'indique, à sauvegarder notre craft. En
premier paramètre on renseigne ``consumer`` qui est le paramètre de notre fonction
``buildCraftingRecipes``. En second paramètre on doit renseigner une `ResourceLocation`
qui est en fait l'emplacement et le nom du fichier ``.json``.

Comme emplacement, j'ai mis le modid de mon mod, c'est-à-dire que le fichier sera
stocké dans les crafts de mon mod. Vous auriez pu laisser ``minecraft`` mais je le déconseille.
Enfin, ``"mon_craft"`` désigne le nom du fichier final.

:::caution
Faites attention à ne pas avoir deux crafts différents ayant le même nom !
:::

:::tip
À partir de la version 36.2.0 de Forge, il est possible de laisser les fichiers dans le
dossier ``generated``. Ils seront tout de même détectés par le jeu. Vous n'avez donc
plus besoin de les déplacer dans le dossier ``resources`` manuellement.
:::

### Shapeless recipes

On va voir maintenant les shapeless recipes ou recettes sans forme en français.
Voici un exemple où à l'aide d'un diamant et d'un colorant vert je craft une émeraude: 

````java
ShapelessRecipeBuilder.shapeless(Items.EMERALD)
                .requires(Items.DIAMOND)
                .requires(Items.GREEN_DYE)
                .unlockedBy("unlock", InventoryChangeTrigger.TriggerInstance.hasItems(ItemPredicate.Builder.item().of(Items.EMERALD).of(Items.GREEN_DYE).build()))
                .save(consumer, new ResourceLocation(Testmod.MODID, "test_emerald"));
````

On remarque ici beaucoup de similitudes avec les shaped recipes. La seule
fonction qui change est la fonction ``requires``. Cette fonction remplace
le combo des fonctions ``define`` et `pattern`. La fonction `requires` ne prend
qu'un seul paramètre pouvant être un item, un tag, etc...
Je vous conseille de regarder toutes les définitions de la fonction dans
votre IDE pour voir tout ce qui vous est proposé.
Le reste ressemble comme deux gouttes d'eau aux shaped recipes, je ne reviendrai
donc pas dessus.

### Autres

Dans la classe ``RecipeProvider`` de Minecraft, vous pouvez trouver différentes fonctions
vers la fin de celle-ci. Elles permettent aux développeurs de générer certaines
formes de crafts automatiquement sans avoir à réécrire toujours la même chose.
Je vous conseille d'aller y jeter un coup d'œil, ça peut être intéressant !

## Recettes de cuisson

Voyons maintenant les différents types de cuisson. Comme vous le savez, il
y a désormais plusieurs types de four disponibles dans Minecraft.
On a toujours le four classique, mais également le blast furnace et le smoker.
Également le feu de camp fait son apparition. On a donc quatre nouveaux
types de craft potentiels.
Chaque type de craft a sa propre fonction de dédiée.

Chaque bloc à sa propre fonction dédiée, mais elles ont toutes la même
définition. La seule chose qui change, c'est le bloc dans lequel
la recette est valide. Pour l'exemple je montrerai donc qu'une seule fonction,
en l'occurence la fonction ``smelting`` associée au four. Voici les autres
fonctions pour les autres blocs :

:::tip
- Blast furnace -> ``blasting``
- Smoker -> ``smoking``
- Campfire -> ``campfireCooking``
:::

Voyons maintenant un exemple concret d'une recette de cuisson où à partir
d'une planche de bois on récupère un charbon de bois.

````java
SimpleCookingRecipeBuilder.smelting(Ingredient.of(ItemTags.PLANKS), Items.CHARCOAL, 1.0f, 200)
                .unlockedBy("unlock", InventoryChangeTrigger.TriggerInstance.hasItems(ItemPredicate.Builder.item().of(ItemTags.PLANKS).build()))
                .save(consumer, new ResourceLocation(Testmod.MODID, "planks_to_charcoal"));
````

En premier argument, on a besoin d'un ``Ingredient``. Pour cela on a accès à
``Ingredient.of`` qui peut prendre en paramètre un item, un bloc ou un tag.
Il y a d'autres définitions, je vous laisse regarder ça de votre côté.
Pour mon exemple, on va avoir besoin d'utiliser le tag des planches
``ItemTags.PLANKS`` de sorte que notre recette fonctionne avec
n'importe quelle planche du jeu.

Ensuite, on renseigne un item ou un bloc en deuxième argument.

Le troisième argument représente la quantité d'xp que vous récupérez
quand la cuisson est terminée. (Ici la quantité d'xp est la même que
la cuisson d'un lingot)

Enfin, le dernier paramètre représente le temps en ticks que prend
la cuisson. Les recettes du jeu prennent en général 200 ticks soit
10 secondes. À vous de voir si vous voulez jouer avec ça.

## Recettes dans le stonecutter

Intéressons-nous maintenant au stonecutter. Pour l'exemple je vais créer
une recette à partir de planche pour obtenir une bûche.

````java
SingleItemRecipeBuilder.stonecutting(Ingredient.of(ItemTags.PLANKS), Blocks.OAK_LOG, 1)
                .unlockedBy("unlock", InventoryChangeTrigger.TriggerInstance.hasItems(ItemPredicate.Builder.item().of(ItemTags.PLANKS).build()))
                .save(consumer, new ResourceLocation(Testmod.MODID, "planks_to_log"));
````

Comme plus haut, le premier argument est un ``Ingredient`` et le deuxième
un item ou un bloc.

Quant au troisième, il est optionnel mais vous permet de gérer la quantité
du résultat obtenu.

## Recettes dans la smithing table

Attaquons maintenant le dernier bloc, la smithing table.
Dans ce cas-là, je crée une recette permettant d'améliorer une pioche en pierre
en pioche en fer à l'aide d'un lingot de fer. Ici aussi, c'est
assez simple : 

````java
UpgradeRecipeBuilder.smithing(Ingredient.of(Items.STONE_PICKAXE), Ingredient.of(Items.IRON_INGOT), Items.IRON_PICKAXE)
                .unlocks("unlock", InventoryChangeTrigger.TriggerInstance.hasItems(Items.STONE_PICKAXE))
                .save(consumer, new ResourceLocation(Testmod.MODID, "stone_pickaxe_upgrade"));
````

Le premier argument représente l'item que vous améliorez, le deuxième
représente l'item d'amélioration et le dernier représente le résultat.
Les deux premiers sont des ``Ingredient`` et le dernier un `ItemLike` soit
un item ou un bloc.

## Générer les fichiers

:::tip
Il ne vous reste plus qu'à lancer ``runData`` et vous devriez avoir vos fichiers
générés dans le dossier ``generated`` de votre workspace !
:::
