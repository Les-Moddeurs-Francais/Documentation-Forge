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
| type        | Type de la recette (ici `minecraft:crafting_shaped`)                                                                           |
| group       | Groupe de la recette (pour grouper certaines recettes ensemble comme par exemple les portes, les dalles, les planches, etc...) |
| ingredients | Ingrédients permettant de réaliser la recette (applicable dans n'importe quel ordre)                                           |
| result      | Résultat de la recette (ici cela est 9 diamants)                                                                               |

## Recette de fourneau

```json

```

| Nom | Description |
|-----|-------------|
|     |             |

## Recette de haut fourneau

```json

```

| Nom | Description |
|-----|-------------|
|     |             |

## Recette de fumoir

```json

```

| Nom | Description |
|-----|-------------|
|     |             |

## Recette du tailleur de pierre

```json

```

| Nom | Description |
|-----|-------------|
|     |             |

## Recette du feu de camp

```json

```

| Nom | Description |
|-----|-------------|
|     |             |

## Recette de la table de forgeron

```json

```

| Nom | Description |
|-----|-------------|
|     |             |