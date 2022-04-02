---
sidebar_position: 4
title: Tags
description: Comment utiliser les data generators pour tags ?
tags: [data generators]
---

Dans cette section, nous allons voir comment générer nos tags directement à l'aide d'un générateur.

## Tags Provider

Depuis la 1.18.2, les [_tags_](../bases/resources/tags) peuvent être utilisés pour regrouper tout type d'élément dans le jeu. Dans cette partie nous allons voir comment utiliser les classes pour les types prédéfinis et ensuite pour ceux non définis de base.

### Classes prédéfinies

Pour commencer, nous avons besoin d'une classe qui héritera de l'une des classes ci-dessous. On rajoutera ensuite, le constructeur de la classe dans lequel nous allons modifier quelques trucs.

- BiomeTagsProvider
- BlockTagsProvider
- ConfiguredStructureTagsProvider
- EntityTypeTagsProvider
- FluidTagsProvider
- GameEventTagsProvider
- ItemTagsProvider

```java
public class BlockTagsGenerator extends net.minecraft.data.tags.BlockTagsProvider {
    public BlockTagsGenerator(DataGenerator p_126511_, String modId, @Nullable ExistingFileHelper existingFileHelper) {
        super(p_126511_, modId, existingFileHelper);
    }
}
```

Ensuite, on va devoir utiliser la fonction `addTags`, héritée de la classe mère.

```java
@Override
protected void addTags() {
    
}
```

C'est dans cette fonction que tout va se jouer. On a accès à des fonctions venant de la classe mère nommées `tag` qui permettent d'ajouter nos _tags_.

Dans un premier temps, la fonction requiert un identifiant pour le _tag_. Celui-ci ayant un type `TagKey`, nous pouvons soit utiliser la fonction `TagKey#create`, soit des fonctions prédéfinies ou même des valeurs prédéfinies par Mojang (disponibles dans les différentes classes des [_tags_](../bases/resources/tags)) :

:::tip
Pour les classes prédéfinies, une fonction est disponible pour que cela soit plus simple. Les fonctions associées selon les classes mères sont :
- `BiomeTagsProvider` -> `BiomeTags#create`
- `BlockTagsProvider` -> `BlockTags#create`
- `ConfiguredStructureTagsProvider` -> `ConfiguredStructureTags#create`
- `EntityTypeTagsProvider` -> `EntityTypeTags#create`
- `FluidTagsProvider` -> `FluidTags#create`
- `GameEventTagsProvider` -> `GameEventTags#create`
- `ItemTagsProvider` -> `ItemTags#create`
:::

Dans notre cas, nous allons utiliser la fonction prédéfinie pour cela dans la classe `BlockTags` :

```java
@Override
protected void addTags() {
    tag(BlockTags.create(new ResourceLocation("modid, "mon_tag")));
}
```

Après cette fonction, 4 types de fonction sont disponibles, `add`, `addOptional`, `addTag` et `addOptionalTag`.

```java
add(Blocks.DIAMOND_BLOCK)
```

La fonction `add` permet d'ajouter une valeur au tag en question, qui sera requise (c'est-à-dire que si le jeu ne connait pas l'identifiant de cette valeur, une erreur sera produite).

```java
addOptional(Blocks.GOLD_BLOCK.getRegistryName())
```

La fonction `addOptional` permet d'ajouter une valeur au tag en question, qui sera optionnelle (c'est-à-dire que si le jeu ne connait pas l'identifiant de cette valeur, celle-ci ne sera pas prise en compte par le jeu). Le paramètre est l'identifiant de l'élément optionnel (`ResourceLocation`).

```java
addTag(BlockTags.STONE_BRICKS)
```

La fonction `addTag` permet d'ajouter chaque valeur d'un tag au tag en question, qui seront requises (c'est-à-dire que si le jeu ne connait pas l'identifiant de ce tag, une erreur sera produite).

```java
addOptionalTag(net.minecraftforge.common.Tags.Blocks.COBBLESTONE.location());
```

La fonction `addOptionalTag` permet d'ajouter chaque valeur d'un tag au tag en question, qui seront optionnelles (c'est-à-dire que si le jeu ne connait pas l'identifiant de ce tag, celui-ci ne sera pas pris en compte par le jeu). Le paramètre est l'identifiant du [_tag_](../bases/resources/tags) optionnel (`ResourceLocation`)

### Classes non définies



## GatherDataEvent

Dans votre fonction avec en paramètre l'event `GatherDataEvent` il nous
faudra ajouter notre 'provider'.

```java
@SubscribeEvent
public static void dataGen(final GatherDataEvent e)
{
    DataGenerator generator = e.getGenerator();

    if(e.includeClient())
    {

    }

    if(e.includeServer())
    {
        generator.addProvider(new TagsGenerator(generator, event.getExistingFileHelper()));
    }
}
```

:::tip
Remarquez le `e.includeServer()` qui permet de répartir les différentes
ressources selon le côté qui les utilise. En l'occurrence, les _tags_
ne sont utilisés que par le serveur, donc pas besoin de le générer coté client.
:::
