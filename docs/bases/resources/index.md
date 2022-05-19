---
title: Ressources
description: Quelles sont les différentes ressources de Minecraft ?
hide_table_of_contents: true
tags: [bases]
---

Tous les dossiers (et donc les ressources associées) cités ici doivent se trouver dans le dossier `/src/main/resources/`.

## Blockstates

Les _blockstates_ sont définies par des fichiers JSON se trouvant dans le dossier `/assets/<modid>/blockstates`.

## [Traductions](lang)

Les traductions sont définies dans des fichiers JSON dont le nom dépend du [_code de la langue_](https://minecraft.fandom.com/wiki/Language) visé, se trouvant dans le dossier `/assets/<modid>/lang`.

## Modèles

Les modèles sont définis par des fichiers JSON.
Ils peuvent se trouver dans deux dossiers différents, si cela concerne les blocs, le dossier concerné sera `/assets/<modid>/models/block` et si cela concerne les items, le dossier concerné sera `/assets/<modid>/models/item`.

## Textures

Les textures sont des fichiers PNG se trouvant dans un sous dossier du dossier `assets/<modid>/textures`.

## [Recettes](recipe)

Les recettes sont définies par des fichiers JSON se trouvant dans le dossier `/data/<modid>/recipes`.

## Progrès

Les progrès sont définis par des fichiers JSON se trouvant dans le dossier `/data/<modid>/advancements`.

## Tables de butin

Les tables de butin sont définies par des fichiers JSON se trouvant dans le dossier `/data/<modid>/loot_tables` (des sous dossiers sont attendus selon si cela concerne les blocs (`blocks`), les coffres (`chests`) ou mêmes les entités (`entities`)).

## [Tags](tags)

Les _tags_ sont définis par des fichiers JSON se trouvant dans le dossier `/data/<modid>/tags` (des sous dossiers sont attendus et leurs noms dépendra de la clé du registre pour lequel le tag sera affecté (liste ci-dessous)).

<details>

<summary>Liste des registres avec leurs clés</summary>

| Registre                          | Clé                         |
|-----------------------------------|-----------------------------|
| `SOUND_EVENT_REGISTRY`            | `sound_event`               |
| `FLUID_REGISTRY`                  | `fluid`                     |
| `MOB_EFFECT_REGISTRY`             | `mob_effect`                |
| `BLOCK_REGISTRY`                  | `block`                     |
| `ENCHANTMENT_REGISTRY`            | `enchantment`               |
| `ENTITY_TYPE_REGISTRY`            | `entity_type`               |
| `ITEM_REGISTRY`                   | `item`                      |
| `POTION_REGISTRY`                 | `potion`                    |
| `PARTICLE_TYPE_REGISTRY`          | `particle_type`             |
| `BLOCK_ENTITY_TYPE_REGISTRY`      | `block_entity_type`         |
| `MOTIVE_REGISTRY`                 | `motive`                    |
| `CUSTOM_STAT_REGISTRY`            | `custom_stat`               |
| `CHUNK_STATUS_REGISTRY`           | `chunk_status`              |
| `RULE_TEST_REGISTRY`              | `rule_test`                 |
| `POS_RULE_TEST_REGISTRY`          | `pos_rule_test`             |
| `MENU_REGISTRY`                   | `menu`                      |
| `RECIPE_TYPE_REGISTRY`            | `recipe_type`               |
| `RECIPE_SERIALIZER_REGISTRY`      | `recipe_serializer`         |
| `ATTRIBUTE_REGISTRY`              | `attribute`                 |
| `GAME_EVENT_REGISTRY`             | `game_event`                |
| `POSITION_SOURCE_TYPE_REGISTRY`   | `position_source_type`      |
| `STAT_TYPE_REGISTRY`              | `stat_type`                 |
| `VILLAGER_TYPE_REGISTRY`          | `villager_type`             |
| `VILLAGER_PROFESSION_REGISTRY`    | `villager_profession`       |
| `POINT_OF_INTEREST_TYPE_REGISTRY` | `point_of_interest_type`    |
| `MEMORY_MODULE_TYPE_REGISTRY`     | `memory_module_type`        |
| `SENSOR_TYPE_REGISTRY`            | `sensor_type`               |
| `SCHEDULE_REGISTRY`               | `schedule`                  |
| `ACTIVITY_REGISTRY`               | `activity`                  |
| `LOOT_ENTRY_REGISTRY`             | `loot_pool_entry_type`      |
| `LOOT_FUNCTION_REGISTRY`          | `loot_function_type`        |
| `LOOT_ITEM_REGISTRY`              | `loot_condition_type`       |
| `LOOT_NUMBER_PROVIDER_REGISTRY`   | `loot_number_provider_type` |
| `LOOT_NBT_PROVIDER_REGISTRY`      | `loot_nbt_provider_type`    |
| `LOOT_SCORE_PROVIDER_REGISTRY`    | `loot_score_provider_type`  |
| `DIMENSION_TYPE_REGISTRY`         | `dimension_type`            |
| `DIMENSION_REGISTRY`              | `dimension`                 |
| `LEVEL_STEM_REGISTRY`             | `dimension`                 |
| ``                                | ``                          |
| ``                                | ``                          |
| ``                                | ``                          |
| ``                                | ``                          |
| ``                                | ``                          |
| ``                                | ``                          |
| ``                                | ``                          |
| ``                                | ``                          |
| ``                                | ``                          |
| ``                                | ``                          |
| ``                                | ``                          |
| ``                                | ``                          |
| ``                                | ``                          |
| ``                                | ``                          |
| ``                                | ``                          |
| ``                                | ``                          |
| ``                                | ``                          |
| ``                                | ``                          |
| ``                                | ``                          |
| ``                                | ``                          |
| ``                                | ``                          |
| ``                                | ``                          |
| ``                                | ``                          |
| ``                                | ``                          |
| ``                                | ``                          |
| ``                                | ``                          |
| ``                                | ``                          |
| ``                                | ``                          |
| ``                                | ``                          |
| ``                                | ``                          |
| ``                                | ``                          |
| ``                                | ``                          |
| ``                                | ``                          |


</details>