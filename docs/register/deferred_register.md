---
sidebar_position: 1
title: Deferred Register
tags: [enregistrement]
---

Pour créer un Deferred Register, il nous faut tout d'abord ajouter une variable dans une classe où nous enregistrerons tous les éléments concernés (comme les items, les blocs, etc...) comme celle-ci :

# Créer le Deferred Register

```java 
public static final DeferredRegister<Item> NOM_VARIABLE = DeferredRegister.create(ForgeRegistries.ITEMS, "modid");
```

Quelques explications :
- La classe référencée entre les chevrons doit correspondre au type définit par le premier argument.
- Le premier argument permet de définir le type d'élément que nous allons pouvoir enregistrer (ici, cela sera pour les items). Il en existe different types :
    - BLOCKS
    - FLUIDS
    - ITEMS
    - MOB_EFFECTS
    - SOUND_EVENTS
    - POTIONS
    - ENCHANTMENTS
    - ENTITIES
    - BLOCK_ENTITIES
    - PARTICLE_TYPES
    - CONTAINERS
    - PAINTING_TYPES
    - RECIPE_SERIALIZERS
    - ATTRIBUTES
    - STAT_TYPES
    - PROFESSIONS
    - POI_TYPES
    - MEMORY_MODULE_TYPES
    - SENSOR_TYPES
    - SCHEDULES
    - ACTIVITIES
    - WORLD_CARVERS
    - SURFACE_BUILDERS
    - FEATURES
    - DECORATORS
    - CHUNK_STATUS
    - STRUCTURE_FEATURES
    - BLOCK_STATE_PROVIDER_TYPES
    - BLOCK_PLACER_TYPES
    - FOLIAGE_PLACER_TYPES
    - TREE_DECORATOR_TYPES
    - BIOMES
    - DATA_SERIALIZERS
    - LOOT_MODIFIER_SERIALIZERS
    - WORLD_TYPES
- Le deuxième quant à lui est le modid sous lequel votre élément sera enregistré (il est préférable de mettre le modid de votre mod).

Il ne reste plus qu'à faire comprendre au jeu que le Deferred Register existe et pour cela il faudra disposer ce bout de code dans le constructeur de votre classe principale.

```java 
Classe.NOM_VARIABLE.register(FMLJavaModLoadingContext.get().getModEventBus());
```

:::caution
Tous les noms de classes, de variables et de méthodes sont personnalisables comme vous le souhaitez, et cela, tout au long du tutoriel.
:::

Voilà maintenant le jeu pourra reconnaitre le Deferred Register. Il ne reste plus qu'à enregistrer des éléments du type de celui-ci