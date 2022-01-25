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
ItemProperties.register(Items.TEST_SIMPLE_ITEM_ONE.get(), new ResourceLocation("modid", example_property"), (stack, level, livingEntity, id) -> {
    return stack.getOrCreateTag().getBoolean("tag") ? 1.0f : 0.0f;
});
```

Ici dans cet exemple, l'item (premier paramètre) qui comportera un modèle variable sera un item de test (mais il est possible de changer celui-ci par l'item de votre choix). En second, nous avons l'identifiant de la propriété qui sera utilisé dans le fichier modèle de l'item. Le troisième quant à lui permet de retourner une valeur flottante (généralement comprise entre 0 et 1) qui sera utilisé après dans le modèle de l'item (en ayant accès à certaines variables comme l'item, le monde, l'entité tenant l'item, etc...).

Ici dans l'exemple notre propriété se nomme `modid:example_property` et sa valeur varie entre 0 et 1 selon si l'item en question possède un tag `tag` de valeur **true** ou non, si c'est le cas la propriété `tag` aura pour valeur 1, sinon 0.

## Modèle

```json
{
  "parent": "minecraft:item/generated",
  "textures": {
    "layer0": "modid:item/example_item"
  },
  "overrides": [
    {
      "predicate": {
        "modid:example_property": 1.0
      },
      "model": "modid:item/example_item_with_property"
    }
  ]
}
```

Ici nous nous intéresserons au champ `overrides` (les champs au-dessus sont à connaitre, car ils servent à définir le modèle d'un item de base) qui dans notre cas contient un seul élément (mais il peut y en avoir plusieurs). Celui-ci vérifie si la propriété `modid:example_property` (que nous avons enregistré tout à l’heure) a pour valeur 1 (donc si l’item que nous tenons possède le tag `tag` et si celui-ci à pour valeur **true**), si c’est le cas alors le modèle de l’item deviendra `modid:item/example_item_with_property` sinon son modèle restera `modid:item/example_item`.