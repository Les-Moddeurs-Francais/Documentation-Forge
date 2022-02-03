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

:::tip
La valeur retournée peut être changée à votre guise.
:::

Ici la fonction retourne une durée de 500 ticks (_pour rappels, 1 seconde équivaut à 20 ticks dans le jeu_). Il est tout à fait possible de changer le temps de cuisson de l'item selon différents paramètres (la fonction donnant accès au type de recette ainsi qu'à _l'item stack_).