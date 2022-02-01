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

Ici le premier paramètre à renseigner dans ce dernier est le `DataGenerator` passé en paramètre du constructeur.
En deuxième, on aura besoin du **ExistingFileHelper** (celui-ci servant pour la vérification des fichiers déjà générés).

Il sera ensuite nécessaire d'utiliser la fonction `registerAdvancements` héritée de la classe mère.

```java
@Override
protected void registerAdvancements(Consumer<Advancement> consumer, ExistingFileHelper fileHelper) 
{

}
```

```java
@SubscribeEvent
public static void dataGen(final GatherDataEvent e)
{
    DataGenerator generator = e.getGenerator();

    if(e.includeClient())
    {

    }

    if(e.includeServer())
    {
        generator.addProvider(new AdvancementsGenerator(generator, event.getExistingFileHelper()));
    }
}
```