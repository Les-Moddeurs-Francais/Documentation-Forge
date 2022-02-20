---
sidebar_position: 5
title: Configs
description: Comment créer des configs pour son mod ?
tags: [bases]
---

Le _configs_ sont une part essentielle de l'api [MinecraftForge](http://minecraftforge.net/). En effet, celle-ci permet ensuite au joueur de configurer certaines valeurs données depuis un fichier crée par le jeu.

Nous allons voir ici comment en rajouter à votre mod pour permettre aux joueurs l'utilisant de personnaliser certains points.

## Création de la classe



## Enregistrement des _configs_

```java
ModLoadingContext.get().registerConfig(type, spec);
```

Ici nous avons deux arguments, le premier sera le type de configuration (il en existe 3, **CLIENT**, **SERVER** et **COMMON**).