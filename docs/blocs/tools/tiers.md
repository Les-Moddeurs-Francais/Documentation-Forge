---
sidebar_position: 1
title: Tiers
description: Comment définir le tier nécessaire d'outil pour récolter un bloc ?
tags: [blocs, tools]
---

Depuis la 1.17, le niveau pour récolter un bloc est défini par un tag attribué le contenant.

## Tiers de base

Si vous souhaitez que votre bloc soit récoltable avec n'importe quel _tier_ d'outil, il n'est pas nécessaire d'ajouter votre bloc dans un tag. Dans le cas contraire il faudra s'assurer que le bloc ait la [propriété](../properties) `requiresToolForDrops()` de définie et ajouter celui-ci au(x) tag(s) approprié(s) (contenu(s) dans le dossier `data/minecraft/tags/blocks` ou `data/forge/tags/blocks` selon les cas) parmi ceux-ci : 

- `forge:needs_wood_tool`
- `forge:needs_gold_tool`
- `minecraft:needs_stone_tool`
- `minecraft:needs_iron_tool`
- `minecraft:needs_diamond_tool`
- `forge:needs_netherite_tool`

## Tiers Customs

Malgré tout, il est aussi possible de créer son propre _tier_ d'outil. Pour cela il nous faudra créer un nouveau tag qui contiendra les blocs cassables à partir de ce _tier_, mais aussi l'enregistrer.

Pour créer le tag, rien de plus simple, il vous faut ajouter cette ligne

```java
public static final Tag.Named<Block> MON_TIER_TAG = BlockTags.createOptional(new ResourceLocation("modid", "mon_tier_tag"));
```

:::note
Les ID's et noms de variable peuvent être remplacés à votre guise.
:::

Après ça il faut que l'on enregistre le _tier_ pour que le jeu le prenne en compte. Pour cela ajoutez cette ligne :

```java
public static final Tier MON_TIER = TierSortingRegistry.registerTier(
            new ForgeTier(5, 5000, 10, 100, 0, MON_TIER_TAG, () -> Ingredient.of(Items.OBSIDIAN)),
            new ResourceLocation("modid", "mon_tier"),
            List.of(Tiers.DIAMOND), List.of());
```


Ici le premier paramètre correspond à la configuration du _tier_ (explication disponible ci-dessous), le deuxième lui correspond à l'ID du _tier_, et les 2 derniers correspondent au placement du _tier_ par rapport aux autres (supérieur et inférieur à..., dans ce cas présent, il se placera comme supérieur au diamant et ne sera inférieur à aucun _tier_).

<details>
<summary>Explication de la classe ForgeTier</summary>

```java
new ForgeTier(5, 5000, 10, 100, 0, MON_TIER_TAG, () -> Ingredient.of(Items.OBSIDIAN))
```

Ici le premier paramètre correspond au niveau du _tier_ (hiérarchie entre tous malgré le fait que ce système soit déprécié depuis la version 37.0.31 de Forge), le second correspond quant à lui au nombre d'utilisations maximum (cela peut être recalculé selon l'item concerné), le troisième à la rapidité de l'item possédant ce _tier_, le quatrième au nombre de dégâts, le cinquième à la valeur d'enchantement (par exemple les outils en or s'enchante plus facilement que ceux en fer) et le sixième correspond à l'item nécessaire pour réparer les outils de ce _tier_.

</details>

Après ça il ne vous restera plus qu'à ajouter le bloc dans ledit tag lié au _tier_ (dans ce cas ça sera `modid:mon_tier` se trouvant dans le dossier `data/modid/tags/blocks`).