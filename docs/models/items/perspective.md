---
sidebar_position: 2
title: Perspectives séparées
description: Comment utiliser les propriétés de modèle pour les items ?
tags: [items, modèles]
---

```json
{
  "parent": "forge:item/default",
  "loader": "forge:separate-perspective",
  "base": {
    "parent": "minecraft:item/coal"
  },
  "perspectives": {
    "firstperson_lefthand": {
      "parent": "minecraft:item/bone"
    },
    "gui": {
      "parent": "minecraft:item/snowball"
    }
  }
}
```

| Nom                     | Description                                                      |
|-------------------------|------------------------------------------------------------------|
| `thirdperson_righthand` | Perspective de l'item dans la main droite à la 3ème personne     |
| `thirdperson_lefthand`  | Perspective de l'item dans la main gauche à la 3ème personne     |
| `firstperson_righthand` | Perspective de l'item dans la main droite à la 1ere personne     |
| `firstperson_lefthand`  | Perspective de l'item dans la main gauche à la 1ere personne     |
| `head`                  | Perspective de l'item sur la tête du joueur (_en 3ème personne_) |
| `gui`                   | Perspective de l'item dans une interface                         |
| `ground`                | Perspective de l'item sur le sol                                 |
| `fixed`                 | Perspective de l'item dans un cadre                              |
