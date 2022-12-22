---
sidebar_position: 1
title: Utiliser les événements
description: Comment utiliser le système d'événement fourni par Forge, dans son mod ?
tags: [événements]
---

## Caractéristiques

### Priorité entre les événements

Les événements disposent aussi d'un système de priorité, accessible par la propriété `priority` de l'annotation `@SubscribeEvent`. Pour ça, il existe 5 valeurs de priorité disponibles avec l'énumération `EventPriority`, `HIGHEST`, `HIGH`, `NORMAL`, `LOW` et `LOWEST`.

### Événements annulables
