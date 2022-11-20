---
sidebar_position: 1
title: Utiliser les événements
description: Comment utiliser le système d'événement fourni par Forge, dans son mod ?
tags: [événements]
---

## Caractéristiques

### Priorité entre les événements

### Événements annulables

## Enregistrement

:::note
Il existe plusieurs _bus_ pour l'enregistrement d'événements. `MinecraftForge.EVENT_BUS` pour la quasi totalité des événements (c'est principalement celui-ci que vous utiliserez) et `FMLJavaModLoadingContext.get().getModEventBus()` qui lui est spécifique au mod Java (il est utilisé par exemple pour l'enregistrement ou pour la séparation des instructions coté serveur ou client).
:::