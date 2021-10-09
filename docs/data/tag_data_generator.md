---
sidebar_position: 1
title: Tags
description: Comment utiliser les data generators pour les tags ?
tags: [data generators, introduction]
---

## Introduction

Les tags, ajoutés en 1.13 permettent de regrouper différents items, blocs, entités etc... en un seul fichier. Ceci permettant dans le code de combiner pas mal de condition en une.

## Code

### Création du générateur

Créez une nouvelle classe avec comme nom, par exemple, ``TagsGenerator`` qui hérite de
soit de la classe ``BlockTagsProvider``, ``ItemTagsProvider``, ``FluidTagsProvider``, ``EntityTypeTagsProvider`` ou même ``GameEventTagsProvider`` mais vous pouvez aussi créer vos propres type de tag(ici nous prendrons pour exemple **BlockTagsProvider**).

````java
public class ModBlockTags extends ItemTagsProvider
{
    public ModBlockTags(DataGenerator gen, ExistingFileHelper existingFileHelper)
    {
        super(gen, "modid", existingFileHelper);
    }

    @Override
    protected void addTags()
    {
        
    }
}
````

Écrivez le constructeur imposé par la classe mère, puis re-définissez la méthode addTags en supprimant le super.

Rendez-vous maintenant dans votre classe avec l'event GatherDataEvent et ajoutez le générateur comme ceci :

````java
@SubscribeEvent
    public static void dataGen(final GatherDataEvent e)
    {
        DataGenerator generator = e.getGenerator();

        if(e.includeClient())
        {

        }

        if(e.includeServer())
        {
            generator.addProvider(new ModBlockTags(generator, event.getExistingFileHelper()));
        }
    }
````

:::tip
Les crafts étant gérés par le serveur, on exécute donc la génération des recettes
seulement si l'event l'inclus.
:::

## Ajout du tag

Pour l'exemple, je vais créer un tag de type ``blocks`` comprenant le bloc de diamant, le bloc de terre ainsi que le bloc d'herbe.