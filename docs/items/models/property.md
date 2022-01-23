---
sidebar_position: 1
title: Propriétés de modèle
description: Comment utiliser les propriétés de modèle pour les items ?
tags: [items, models]
---

Disponibles depuis la 1.9, les propriétés de modèle (anciennement appelées _models predicates_) permettent de changer le modèle d'un item dynamiquement.

## Enregistrer l'item comme ayant un modèle variable

Le rendu des items se faisant côté client, nous aurons besoin d'exécuter le code suivant dans la fonction **client** de la classe principale (la fonction pouvant changer de nom, mais celle-ci doit avoir un paramètre de type **FMLClientSetupEvent**) :

```java
ItemProperties.register(Items.TEST_SIMPLE_ITEM_ONE.get(), new ResourceLocation("full"), (stack, level, livingEntity, id) -> {
    return stack.getOrCreateTag().getBoolean("full") ? 1.0f : 0.0f;
});
```

Ici dans cet exemple, l'item (premier paramètre) qui comportera un modèle variable sera un item de test (mais il est possible de changer celui-ci par l'item de votre choix). En second, nous avons l'identifiant de la propriété qui sera utilisé dans le fichier modèle de l'item. Le troisième quant à lui de retourner une valeur flottante (généralement comprise entre 0 et 1) qui va permettre de définir le modèle de l'item selon un code définit (tout en ayant accès à certaines variables comme l'item stack, le niveau, etc...).

Ici dans l'exemple notre propriété se nomme **full** et sa valeur varie entre 0 et 1 selon si l'item en question possède un tag **full** de valeur _true_, si c'est le cas la propriété **full** aura pour valeur 1, sinon 0.

## Modèle

```json
{
  "parent": "minecraft:item/generated",
  "textures": {
    "layer0": "test_mod_forge:item/test_simple_item_one"
  },
  "overrides": [
    {
      "predicate": {
        "minecraft:full": 1.0
      },
      "model": "test_mod_forge:item/test_simple_item_one_full"
    }
  ]
}
```