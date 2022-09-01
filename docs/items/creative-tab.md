---
title: Onglet créatif
description: Comment créer un onglet créatif pour organiser ses items ?
tags: [items]
---

Les onglets créatifs (ou _creatives tabs_) sont des interfaces permettant d'organiser et de répertorier différents blocs et items.

# Déclaration

Pour créer votre onglet, vous devrez le déclarer dans une classe comme ceci :

:::tip
Vous pouvez aussi créer une classe custom (dépendante de la classe **CreativeModeTab**).
:::

```java

public static final CreativeModeTab MY_MOD_TAB = new CreativeModeTab("mon_mod") {
    @Override
    public ItemStack makeIcon() {
        return new ItemStack(Items.DIAMOND);
    }
};

```

:::danger
La fonction **makeIcon** permet de définir l'icône de l'onglet créatif. Il est donc impératif que celle-ci renvoie quelque chose de non null (sinon le jeu aura un crash une fois que le menu créatif sera affiché).
:::

Et voilà, l'onglet est créé, mais celui-ci est vide. Il faut donc ajouter des items à cet onglet.

# Ajout des items

Pour ajouter les items dans l'onglet, allez à la déclaration de votre item :

```java
public static final RegistryObject<Item> EXAMPLE_ITEM = ITEMS.register("exemple_item", () -> new Item(new Item.Properties()));
```

Ajoutez juste la méthode **.tab()** a la liste des propriétés de votre item, celle ci prends en paramètre la creativeTab crée auparavant :

```java
public static final RegistryObject<Item> EXAMPLE_ITEM = ITEMS.register("exemple_item", () -> new Item(new Item.Properties().tab(VotreClasse.MY_MOD_TAB)));
```

Et voilà, votre item devrait être en jeu.

# Traduction

Comme beaucoup d'éléments, les onglets créatifs possèdent aussi une clé de traduction.

Il est donc possible d'afficher un nom différent pour chaque langue, comme ceci :

```json
{
  "itemGroup.mon_mod": "Mon Mod"
}
```

:::tip
L'identifiant après _itemGroup_ doit être le même que celui passé dans le constructeur de l'onglet créatif.
:::