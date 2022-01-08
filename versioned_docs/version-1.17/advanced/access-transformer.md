---
sidebar_position: 1
title: Access Transformer
description: Comment utiliser les access transformers ?
tags: [avancé]
---

Les `access transformers` (ou AT) permettent de modifier l'accessibilité  et la visibilité des variables, méthodes et classes des librairies (retirer le `final`, changer l'attribut `private` en `public`, etc...).

## Ajout du fichier pour les AT's
Pour spécifier à ForgeGradle que le mod utilisera les access transformers, vous devez ajouter cette ligne dans le build.gradle (la catégorie `minecraft` est normalement déjà présente dans votre fichier) :
```
minecraft {
    accessTransformer = file('src/main/resources/META-INF/accesstransformer.cfg')
}
```

Après cela, vous devrez créer un fichier `accesstransformer.cfg` au niveau du chemin spécifié.

Pour appliquer les `access trasnformers` après une modification du fichier, vous devrez rafraichir le projet gradle.

## Commentaires

Tous les textes succédant un `#` avant la fin de la ligne seront transcrits comme des commentaires et ne seront pas pris en compte.

## Les modifieurs d'accès

Les modificateurs d'accès spécifient vers quelle nouvelle visibilité la cible donnée sera transformée. Par ordre décroissant de visibilité :
- `public` - visible pour toutes les classes à l'intérieur et à l'extérieur de son package
- `protected` - visible uniquement pour les classes à l'intérieur du package et les sous-classes
- `default` - visible uniquement pour les classes à l'intérieur du package
- `private` - visible uniquement à l'intérieur de la classe

Le modificateur spécial +f et -f peut être ajouté aux modificateurs mentionnés plus haut afin d'ajouter ou de supprimer l'attribut `final`.

## Obtenir les access transformers

Pour obtenir les access transformers, vous pouvez rejoindre le [discord](https://discord.gg/UvedJ9m) de Forge, vous rendre dans le channel bot-commands et utiliser ces 3 commandes (ceci concerne les mappings officiels) :
- `!mojf` suivi du nom de la variable (et cela peut être précédé du nom de la classe suivie d'un point pour plus de précisions, ex : `Block.harvestLevel`) pour obtenir la ligne d'access transformer correspondante.
- `!mojm` suivi du nom de la fonction (et cela peut être précédé du nom de la classe suivie d'un point pour plus de précisions, ex : `Block.asBlock`) pour obtenir la ligne d'access transformer correspondante.
- `!mojc` suivi du nom de la classe pour obtenir la ligne d'access transformer correspondante.

## Exemples

```
# Définis la visibilité de la méthode en public
public net.minecraft.data.loot.BlockLoot m_124254_(Lnet/minecraft/world/level/block/Block;Lnet/minecraft/world/item/Item;)Lnet/minecraft/world/level/storage/loot/LootTable$Builder; # createStemDrops

# Définis la visibilité de la variable en protected
protected net.minecraft.client.gui.Gui f_168670_ # LINE_HEIGHT

# Définis la visibilité de la classe en protected
protected net.minecraft.client.gui.screens.MenuScreens
```