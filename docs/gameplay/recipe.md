---
sidebar_position: 1
title: Recettes
description: Comment sont structurés les recettes dans Minecraft ?
tags: [gameplay]
---

## Recette de base structurée

```json
{
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "###",
    "###",
    "###"
  ],
  "key": {
    "#": {
      "item": "minecraft:diamond"
    }
  },
  "result": {
    "item": "minecraft:diamond_block"
  }
}
```

| Nom     | Description                                                                                                                    |
|---------|--------------------------------------------------------------------------------------------------------------------------------|
| type    | Type de la recette (ici `minecraft:crafting_shaped`)                                                                           |
| group   | Groupe de la recette (pour grouper certaines recettes ensemble comme par exemple les portes, les dalles, les planches, etc...) |
| pattern | Pattern de la recette dans la table de craft (les symbole correspondants à ceux définits dans le champ `key`)                  |
| key     | Definitions des symboles comme des objets utilisés dans la recette (ici le symbole `#` correspond au diamant)                  |
| result  | Résultat de la recette (ici cela est le bloc de diamant)                                                                       |


## Recette de base non structurée

```json
{
  "type": "minecraft:crafting_shapeless",
  "ingredients": [
    {
      "item": "minecraft:diamond_block"
    }
  ],
  "result": {
    "item": "minecraft:diamond",
    "count": 9
  }
}
```

| Nom         | Description                                                                                                                    |
|-------------|--------------------------------------------------------------------------------------------------------------------------------|
| type        | Type de la recette (ici `minecraft:crafting_shapeless`)                                                                        |
| group       | Groupe de la recette (pour grouper certaines recettes ensemble comme par exemple les portes, les dalles, les planches, etc...) |
| ingredients | Ingrédients permettant de réaliser la recette (applicable dans n'importe quel ordre)                                           |
| result      | Résultat de la recette (ici cela est 9 diamants)                                                                               |

## Recette de fourneau

```json
{
  "type": "minecraft:smelting",
  "ingredient": {
    "item": "minecraft:cobblestone"
  },
  "result": "minecraft:stone",
  "experience": 0.1,
  "cookingtime": 200
}
```

| Nom         | Description                                                                                                                    |
|-------------|--------------------------------------------------------------------------------------------------------------------------------|
| type        | Type de la recette (ici `minecraft:smelting`)                                                                                  |
| group       | Groupe de la recette (pour grouper certaines recettes ensemble comme par exemple les portes, les dalles, les planches, etc...) |
| ingredients | Ingrédients permettant de réaliser la recette (ici cela équivaut à l'item devant être cuit)                                    |
| result      | Résultat de la recette (ici cela est de la _stone_)                                                                            |
| experience  | Montant d'éxperience perçu par le joueur                                                                                       |
| cookingtime | Temps nécessaire afin que la cuisson soit réalisée                                                                             |

## Recette de haut fourneau

```json
{
  "type": "minecraft:blasting",
  "group": "iron_ingot",
  "ingredient": {
    "item": "minecraft:iron_ore"
  },
  "result": "minecraft:iron_ingot",
  "experience": 0.7,
  "cookingtime": 100
}
```

| Nom         | Description                                                                                                                    |
|-------------|--------------------------------------------------------------------------------------------------------------------------------|
| type        | Type de la recette (ici `minecraft:blasting`)                                                                                  |
| group       | Groupe de la recette (pour grouper certaines recettes ensemble comme par exemple les portes, les dalles, les planches, etc...) |
| ingredients | Ingrédients permettant de réaliser la recette (ici cela équivaut à l'item devant être cuit)                                    |
| result      | Résultat de la recette (ici cela est un lingot de fer)                                                                         |
| experience  | Montant d'éxperience perçu par le joueur                                                                                       |
| cookingtime | Temps nécessaire afin que la cuisson soit réalisée                                                                             |

## Recette de fumoir

```json
{
  "type": "minecraft:smoking",
  "ingredient": {
    "item": "minecraft:beef"
  },
  "result": "minecraft:cooked_beef",
  "experience": 0.35,
  "cookingtime": 100
}
```

| Nom         | Description                                                                                                                    |
|-------------|--------------------------------------------------------------------------------------------------------------------------------|
| type        | Type de la recette (ici `minecraft:smoking`)                                                                                   |
| group       | Groupe de la recette (pour grouper certaines recettes ensemble comme par exemple les portes, les dalles, les planches, etc...) |
| ingredients | Ingrédients permettant de réaliser la recette (ici cela équivaut à l'item devant être cuit)                                    |
| result      | Résultat de la recette (ici cela est un steak cuit)                                                                            |
| experience  | Montant d'éxperience perçu par le joueur                                                                                       |
| cookingtime | Temps nécessaire afin que la cuisson soit réalisée                                                                             |

## Recette du tailleur de pierre

```json
{
  "type": "minecraft:stonecutting",
  "ingredient": {
    "item": "minecraft:stone"
  },
  "result": "minecraft:stone_slab",
  "count": 2
}
```

| Nom | Description |
|-----|-------------|
|     |             |

## Recette du feu de camp

```json
{
  "type": "minecraft:campfire_cooking",
  "ingredient": {
    "item": "minecraft:potato"
  },
  "result": "minecraft:baked_potato",
  "experience": 0.35,
  "cookingtime": 600
}
```

| Nom | Description |
|-----|-------------|
|     |             |

## Recette de la table de forgeron

```json
{
  "type": "minecraft:smithing",
  "base": {
    "item": "minecraft:diamond_axe"
  },
  "addition": {
    "item": "minecraft:netherite_ingot"
  },
  "result": {
    "item": "minecraft:netherite_axe"
  }
}
```

| Nom | Description |
|-----|-------------|
|     |             |