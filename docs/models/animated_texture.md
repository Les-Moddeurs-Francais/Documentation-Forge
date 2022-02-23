---
sidebar_position: 2
title: Texture animée
description: Comment créer une texture animée pour son item ?
tags: [items, models]
---

Depuis plusieurs versions, il est possible d'animer les textures d'un item grâce à un simple fichier supplémentaire. Nous allons voir ici comment ajouter une texture animée pour vos blocs/items.

## Texture

La texture animée de votre item doit être agencée en vertical (c'est-à-dire que les texture doivent être de même taille et agencée les unes sur les autres) comme ceci :

![Exemple de texture](/img/docs/animated-texture/example-texture.png)

## Mcmeta

Le fichier _mcmeta_ quant à lui permet de faire comprendre au jeu que la texture doit être animé avec deux paramètres :

| Nom         | Description                                                                 | Nécessité            |
|-------------|-----------------------------------------------------------------------------|----------------------|
| interpolate | Applique une transition ou non entre les différentes textures               | Non                  |
| frametime   | Temps nécessaire à la transition des textures (_interpolate_ activé ou non) | Non (mais conseillé) |

Il est nécessaire que le fichier _mcmeta_ (contenu dans le même dossier que la texture) comporte le nom de la texture (de manière exacte) avec ensuite l'extension `.png.mcmeta`.

Ce qui peut nous donner deux cas d'exemple, le premier :

```json
{
  "animation": {
    "interpolate": true,
    "frametime": 10
  }
}
```
Dont le résultat est :

![Texture animée interpolée](/img/docs/animated-texture/interpolate.GIF)

Ou même le deuxième :

```json
{
  "animation": {
    "frametime": 10
  }
}
```

Dont le résultat est :

![Texture animée non-interpolée](/img/docs/animated-texture/non-interpolate.GIF)