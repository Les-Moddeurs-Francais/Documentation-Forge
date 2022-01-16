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