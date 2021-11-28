---
title: Item coloré
description: Comment créer un item coloré ?
tags: [items, color]
---

Depuis plusieurs versions, Minecraft permet à certains items de pouvoir être colorés. Ceci permettant d'avoir une palette de couleurs gigantesque, et ceci pour un seul et même item.

Nous n'aborderons pas la création de l'iem en tant que telle sur cette page, ceci étant déjà fait avec [celle-ci](basic.md).

## Enregistrer l'item comme pouvant être coloré

Le rendu des items se faisant côté client, nous aurons besoin d'éxecuter le code suivant dans la fonction doClientStuff de la classe principale (la fonction pouvant changer de nom, mais celle-ci doit avoir un paramètre de type **FMLClientSetupEvent**) :

```java
Minecraft.getInstance().getItemColors().register((stack, color) -> {
    return stack.getTag() != null && stack.getTag().contains("color", 99) ? stack.getTag().getInt("color") : 0x13421772;
}, Items.STICK);
```

Ici dans cet exemple, l'item qui sera coloré sera le baton de base du jeu.

Dans ce cas, si l'item n'a pas de tag, ou si le tag ne contient pas la clé "color", alors la couleur sera noire. Sinon elle sera de la couleur spécifiée dans le tag _color_.

![img.png](/img/docs/colored_item.png)