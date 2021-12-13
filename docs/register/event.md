---
sidebar_position: 2
title: Register Event
description: Comment utiliser les register events ?
tags: [enregistrement]
---

## Créer l'event

```java
@SubscribeEvent
public void registerBlocks(RegistryEvent.Register<Block> event) {
    event.getRegistry().registerAll(new Block(...), new Block(...), ...);
}
```