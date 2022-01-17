---
sidebar_position: 1
title: Harvest Level
description: Comment définir le niveau de récolte d'un bloc ?
tags: [blocs, tools]
---

Depuis la 1.17, le niveau pour récolter un bloc est défini par un tag attribué le contenant.

## Tiers de base

Si vous souhaitez que votre bloc soit récoltable avec n'importe quel tier d'outil, il n'est pas nécessaire d'ajouter votre bloc dans un tag, dans le cas contraire il faudra s'assurer que le bloc `requiresToolForDrops()` et ajouter celui-ci au(x) tag(s) approprié(s) parmi ceux-ci : 

- `forge:needs_wood_tool`
- `forge:needs_gold_tool`
- `minecraft:needs_stone_tool`
- `minecraft:needs_iron_tool`
- `minecraft:needs_diamond_tool`
- `forge:needs_netherite_tool`

## Tiers Customs

Malgré tout, il est aussi possible de créer son propre _tier_ d'outil. Pour cela il nous faudra créer un nouveau tag qui contiendra les blocs cassables à partir de ce tier, mais aussi l'enregistrer.

Pour créer le tag, rien de plus simple, il vous faut ajouter cette ligne

```java
public static final Tag.Named<Block> MON_TIER_TAG = BlockTags.createOptional(new ResourceLocation("modid", "mon_tier_tag"));
```

:::note
Les ID's et noms de variable peuvent être remplacés à votre guise.
:::

Après ça il faut que l'on enregistre le tier pour que le jeu le prenne en compte. Pour cela ajoutez cette ligne :

```java
public static final Tier MON_TIER = TierSortingRegistry.registerTier(
            new ForgeTier(5, 5000, 10, 100, 0, MON_TIER_TAG, () -> Ingredient.of(Items.OBSIDIAN)),
            new ResourceLocation("modid", "mon_tier"),
            List.of(Tiers.DIAMOND), List.of());
```

Ici le premier paramètre correspond à la configuration du tier (avec comme argument le niveau du tier (hiérarchie), le nombre d'utilisations max, la rapidité, le nombre de dégâts, la valeur d'enchantement et enfin l'item permettant de réparer les outils de ce _tier_), le deuxième lui correspond à l'ID du tier, et les 2 derniers correspondent au placement du _tier_ par rapport aux autres (supérieur et inférieur, dans ce cas présent, il se placera comme supérieur au diamant et inférieur à aucun tier).