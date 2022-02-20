---
sidebar_position: 5
title: Configurations
description: Comment créer des configurations pour son mod ?
tags: [bases]
---

Le _configs_ sont une part essentielle de l'api [MinecraftForge](http://minecraftforge.net/). En effet, celle-ci permet ensuite au joueur de configurer certaines valeurs données depuis un fichier crée par le jeu.

Nous allons voir ici comment en rajouter à votre mod pour permettre aux joueurs l'utilisant de personnaliser certains points.

## Création de la classe



## Enregistrement des _configs_

```java
ModLoadingContext.get().registerConfig(type, spec);
```

Ici nous avons deux arguments, le premier est le type de configuration (il en existe 3, **CLIENT**, **SERVER** et **COMMON**) et le deuxième quant à lui est le _spec_ crée plus tôt.

Dans notre cas, pour une configuration côté client, nous obtiendrons cette ligne :

```java
ModLoadingContext.get().registerConfig(ModConfig.Type.CLIENT, CLIENT_BUILDER.build());
```