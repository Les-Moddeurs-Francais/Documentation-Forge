---
sidebar_position: 4
title: Progrès
description: Comment utiliser les data generators pour les progrès ?
tags: [data generators]
---

Dans cette section, nous allons voir comment générer nos progrès à l'aide d'un générateur.

## Advancement Provider

Pour commencer, nous avons besoin d'une classe qui héritera de la classe `AdvancementProvider`.
On rajoutera le constructeur de la classe dans lequel nous allons modifier quelques trucs.

```java
public class AdvancementsGenerator extends AdvancementProvider {

    public AdvancementsGenerator(DataGenerator generatorIn, ExistingFileHelper fileHelper){
        super(generatorIn, fileHelper);
    }
}
```