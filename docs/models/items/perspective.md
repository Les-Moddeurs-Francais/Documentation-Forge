---
sidebar_position: 2
title: Perspectives séparées
description: Comment utiliser les propriétés de modèle pour les items ?
tags: [items, modèles]
---

Les perspectives séparées permettent d'afficher un modèle différent pour un item selon la perspective dans laquelle celui-ci est rendu. Cela nous permet donc d'attribuer un modèle à un item quand il est dans notre main, et un autre modèle pour quand il est affiché dans une interface.

## Base

La structure du fichier du modèle sera celle-ci :

```json
{
  "parent": "forge:item/default",
  "loader": "forge:separate-perspective",
  "base": {
    //Modèle de base
  },
  "perspectives": {
    //Modèles selon les différentes perspectives
  }
}
```

Le modèle de base est celui qui est affiché quand le cas d'une perspective n'est pas prise en charge dans le champ `perspectives`. Pour faire référence à notre item, il nous faudra utiliser la clé `parent` avec une valeur qui sera   le chemin vers votre item (un peu comme pour un modèle basique) :

```json
"parent": "modid:item/example_item"
```

## Perspectives

Pour ce qui est des perspectives, il nous faudra ajouter une clé objet pour chaque perspectives où l'on veut modifier le modèle de l'item, avec à l'intérieur une clé `parent` pour spécifier le modèle. Cela nous donne une chose du style :

```json
"nom_de_la_perspective": {
"parent": "modid:item/example_item"
}
```

Pour connaitre les différentes perspectives, vous pouvez vous référer au tableau ci-dessous.

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
