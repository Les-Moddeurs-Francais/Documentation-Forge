---
title: Onglet créatif
description: Comment créer un onglet créatif pour organiser ses items ?
tags: [items]
---

Les onglets créatifs (ou _creatives tabs_) sont des interfaces permettant d'organiser et de répertorier différents blocs et items.

## Déclaration

Pour créer votre onglet, vous devrez le créer dans un événement dédié comme ceci :

```java
private void onCreativeModeTabRegister(CreativeModeTabEvent.Register event)
{
    CreativeModeTab MY_MOD_TAB = event.registerCreativeModeTab(new ResourceLocation(MODID, "my_mod_tab"), List.of(), List.of(CreativeModeTabs.SPAWN_EGGS), builder -> builder
            .icon(() -> new ItemStack(Items.DIAMOND))
            .title(Component.literal("My Mod Tab"))
            .withLabelColor(0x0000FF)
            .displayItems((features, output, hasPermissions) -> {
                //Items contenus dans cet onglet
            }));
}
```

Ici, nous avons une fonction `registerCreativeModeTab` avec 4 arguments. Le premier est l'identifiant de l'onglet, le deuxième est quant à lui les onglets qui seront placés après le nôtre, le troisième lui est donc les onglets qui seront placés avant le nôtre et enfin le quatrième est un supplier qui va nous permettre de construire notre onglet avec :
- Son icone (`icon(...)`) 
- Son titre (`title(...)`) qui peut très bien être une simple chaine de caractère comme ici, ou une clé de traduction.
- Son alignement à droite ou non (`alignedRight()`)
- La visibilité de son titre (`hideTitle()`)
- La présence de barre de défilement sur le côté (`noScrollBar()`)
- Son type (`type(...)`)
- Son fond custom (`withBackgroundLocation(...)`)
- S'il a une barre de recherche ou non (`withSearchBar()`) avec une variante pour définir la taille de la barre de recherche (`withSearchBar(...)`)
- L'image de l'onglet (`withTabsImage(...)`)
- La couleur de son titre (`withLabelColor(...)`)
- La couleur de ses emplacements (`withSlotColor(...)`)

Et voilà, l'onglet est créé, mais celui-ci est vide. Il faut donc ajouter des items à cet onglet.

## Ajout des items

Pour ajouter les items dans un onglet du menu créatif, 2 choix s'offrent à vous, soit l'ajouter dans un onglet existant, soit dans un nouvel onglet.


### Ajout des items dans un onglet existant

### Ajout des items dans un nouvel onglet


Et voilà, votre item devrait être accessible en jeu dans le menu créatif.