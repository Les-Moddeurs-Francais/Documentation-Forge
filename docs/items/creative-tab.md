---
title: Onglet créatif
description: Comment créer une "creative tab" pour organiser ses items ?
tags: [items]
---

Les onglets créatifs (ou _creatives tabs_) sont des interfaces permettant d'organiser et de répertorier différents blocs et items.

# Déclaration

Pour créer votre onglet, vous devrez le déclarer dans une classe comme ceci :

```java

public static final CreativeModeTab MY_MOD_TAB = new CreativeModeTab("mon_mod") {
    @Override
    public ItemStack makeIcon() {
        return new ItemStack(Items.DIAMOND);
    }
};

```

:::tip
Vous pouvez aussi créer une classe custom (dépendante de la classe **CreativeModeTab**).
:::

Et voila, l'onglet est créé, mais celui-ci est vide. Il faut donc ajouter des items à cet onglet grâce à la propriété _tab_ des items.

# Traduction

Comme beaucoup d'éléments, les onglets créatifs possèdent aussi une clé de traduction.

Il est donc possible d'afficher un nom différent pour chaque langue, comme ceci :

```json
{
    "itemGroup.mon_mod": "Mon Mod"
}
```