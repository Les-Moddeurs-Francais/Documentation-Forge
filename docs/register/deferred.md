---
sidebar_position: 1
title: Deferred Register
description: Comment utiliser les Deferred Registers ?
tags: [enregistrement]
---

Pour créer un Deferred Register, il nous faut tout d'abord ajouter une variable dans une classe où nous enregistrerons tous les éléments concernés (comme les items, les blocs, etc...) comme celle-ci :

## Créer un Deferred Register

### Registres gérés par Forge

```java 
public static final DeferredRegister<Item> MON_REGISTRE = DeferredRegister.create(ForgeRegistries.ITEMS, "modid");
```

Quelques explications :
- La classe référencée entre les chevrons doit correspondre au type définit par le premier argument
- Le premier argument permet de définir le type d'élément (liste ci-dessous) que nous allons pouvoir enregistrer (ici, cela sera pour les items)
<details>
<summary>Liste des types</summary>
<ul>
  <li>BLOCKS</li>
  <li>FLUIDS</li>
  <li>ITEMS</li>
  <li>MOB_EFFECTS</li>
  <li>SOUND_EVENTS</li>
  <li>POTIONS</li>
  <li>ENCHANTMENTS</li>
  <li>ENTITIES</li>
  <li>BLOCK_ENTITIES</li>
  <li>PARTICLE_TYPES</li>
  <li>CONTAINERS</li>
  <li>PAINTING_TYPES</li>
  <li>RECIPE_SERIALIZERS</li>
  <li>ATTRIBUTES</li>
  <li>STAT_TYPES</li>
  <li>PROFESSIONS</li>
  <li>POI_TYPES</li>
  <li>MEMORY_MODULE_TYPES</li>
  <li>SENSOR_TYPES</li>
  <li>SCHEDULES</li>
  <li>ACTIVITIES</li>
  <li>WORLD_CARVERS</li>
  <li>FEATURES</li>
  <li>CHUNK_STATUS</li>
  <li>STRUCTURE_FEATURES</li>
  <li>BLOCK_STATE_PROVIDER_TYPES</li>
  <li>FOLIAGE_PLACER_TYPES</li>
  <li>TREE_DECORATOR_TYPES</li>
  <li>BIOMES</li>
  <li>DATA_SERIALIZERS</li>
  <li>LOOT_MODIFIER_SERIALIZERS</li>
  <li>WORLD_TYPES</li>
</ul>
</details>
- Le deuxième quant à lui est le modid sous lequel votre élément sera enregistré (il est préférable de mettre le modid de votre mod)

Il ne reste plus qu'à faire comprendre au jeu que le Deferred Register existe et pour cela il faudra disposer ce bout de code dans le constructeur de votre classe principale.

```java 
Classe.NOM_VARIABLE.register(FMLJavaModLoadingContext.get().getModEventBus());
```

:::caution
Tous les noms de classes, de variables et de méthodes sont personnalisables comme vous le souhaitez, et cela, tout au long du tutoriel.
:::

### Registres non gérés par Forge

En raison de certaines particularités du code de base, tous les registres ne sont pas gérés par Forge. Il peut s'agir de registres statiques, comme `RecipeType`, qui peuvent être utilisés en toute sécurité, ou des registres dynamiques, comme `ConfiguredFeature` et certains autres registres concernant la génération, qui sont généralement représentés en JSON. Ces objets ne doivent être enregistrés de cette manière que si un autre objet de registre le nécessite. La fonction `DeferredRegister#create` possède une surcharge (depuis la 1.18.2) qui permet aux moddeurs de spécifier la clé du registre pour lequel il est nécessaire de créer un RegistryObject :

```java
private static final DeferredRegister<RecipeType<?>> MON_REGISTRE = DeferredRegister.create(Registry.RECIPE_TYPE_REGISTRY, "modid");

public static final RegistryObject<RecipeType<ExampleRecipe>> MON_TYPE_RECETTE = REGISTER.register("example_recipe_type", () -> new RecipeType<>() {});
```