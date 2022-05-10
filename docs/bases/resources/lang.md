---
sidebar_position: 1
title: Traductions
description : Comment sont structurées les fichiers de traductions dans Minecraft ?
tags: [bases, ressources]
---

## Structure générale

```json
{
  //Entrées
}
```

Les entrées des fichiers de traduction se présentent comme ceci `"clé de traduction" : "traduction"`.

## Tableau des types communs, traductibles

| Type de registre | Format de la clé de traduction   |
|------------------|----------------------------------|
| Block            | `block.<namespace>.<path>`       |
| Item             | `item.<namespace>.<path>`        |
| Onglet créatif   | `itemGroup.<path>`               |
| Effet de potion  | `effect.<namespace>.<path>`      |
| Enchantement     | `enchantment.<namespace>.<path>` |
| Type d'entité    | `entity.<namespace>.<path>`      |
| Biome            | `biome.<namespace>.<path>`       |
| Stat             | `stat.<namespace>.<path>`        |
