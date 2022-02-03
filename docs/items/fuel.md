---
title: Carburant
description: Comment créer un carburant ?
tags: [items]
---

## Spécifier au jeu que l'item est un carburant

Pour ceci, Forge à ajouté spécifiquement une fonction qui permet de définir le temps d'utilisation (en tick) de [l'item](basic).

Il nous suffira d'ajouter le bout de code comme ceci :

```java
@Override
public int getBurnTime(ItemStack itemStack, @Nullable RecipeType<?> recipeType) {
    return 500;
}
```