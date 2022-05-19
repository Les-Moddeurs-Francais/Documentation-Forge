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

| Registre                                | Clé                                     |
|-----------------------------------------|-----------------------------------------|
| `SOUND_EVENT_REGISTRY`                  | `sound_event`                           |
| `FLUID_REGISTRY`                        | `fluid`                                 |
| `MOB_EFFECT_REGISTRY`                   | `mob_effect`                            |
| `BLOCK_REGISTRY`                        | `block`                                 |
| `ENCHANTMENT_REGISTRY`                  | `enchantment`                           |
| `ENTITY_TYPE_REGISTRY`                  | `entity_type`                           |
| `ITEM_REGISTRY`                         | `item`                                  |
| `POTION_REGISTRY`                       | `potion`                                |
| `PARTICLE_TYPE_REGISTRY`                | `particle_type`                         |
| `BLOCK_ENTITY_TYPE_REGISTRY`            | `block_entity_type`                     |
| `MOTIVE_REGISTRY`                       | `motive`                                |
| `CUSTOM_STAT_REGISTRY`                  | `custom_stat`                           |
| `CHUNK_STATUS_REGISTRY`                 | `chunk_status`                          |
| `RULE_TEST_REGISTRY`                    | `rule_test`                             |
| `POS_RULE_TEST_REGISTRY`                | `pos_rule_test`                         |
| `MENU_REGISTRY`                         | `menu`                                  |
| `RECIPE_TYPE_REGISTRY`                  | `recipe_type`                           |
| `RECIPE_SERIALIZER_REGISTRY`            | `recipe_serializer`                     |
| `ATTRIBUTE_REGISTRY`                    | `attribute`                             |
| `GAME_EVENT_REGISTRY`                   | `game_event`                            |
| `POSITION_SOURCE_TYPE_REGISTRY`         | `position_source_type`                  |
| `STAT_TYPE_REGISTRY`                    | `stat_type`                             |
| `VILLAGER_TYPE_REGISTRY`                | `villager_type`                         |
| `VILLAGER_PROFESSION_REGISTRY`          | `villager_profession`                   |
| `POINT_OF_INTEREST_TYPE_REGISTRY`       | `point_of_interest_type`                |
| `MEMORY_MODULE_TYPE_REGISTRY`           | `memory_module_type`                    |
| `SENSOR_TYPE_REGISTRY`                  | `sensor_type`                           |
| `SCHEDULE_REGISTRY`                     | `schedule`                              |
| `ACTIVITY_REGISTRY`                     | `activity`                              |
| `LOOT_ENTRY_REGISTRY`                   | `loot_pool_entry_type`                  |
| `LOOT_FUNCTION_REGISTRY`                | `loot_function_type`                    |
| `LOOT_ITEM_REGISTRY`                    | `loot_condition_type`                   |
| `LOOT_NUMBER_PROVIDER_REGISTRY`         | `loot_number_provider_type`             |
| `LOOT_NBT_PROVIDER_REGISTRY`            | `loot_nbt_provider_type`                |
| `LOOT_SCORE_PROVIDER_REGISTRY`          | `loot_score_provider_type`              |
| `DIMENSION_TYPE_REGISTRY`               | `dimension_type`                        |
| `DIMENSION_REGISTRY`                    | `dimension`                             |
| `LEVEL_STEM_REGISTRY`                   | `dimension`                             |
| `FLOAT_PROVIDER_TYPE_REGISTRY`          | `float_provider_type`                   |
| `INT_PROVIDER_TYPE_REGISTRY`            | `int_provider_type`                     |
| `HEIGHT_PROVIDER_TYPE_REGISTRY`         | `height_provider_type`                  |
| `BLOCK_PREDICATE_TYPE_REGISTRY`         | `block_predicate_type`                  |
| `NOISE_GENERATOR_SETTINGS_REGISTRY`     | `worldgen/noise_settings`               |
| `CONFIGURED_CARVER_REGISTRY`            | `worldgen/configured_carver`            |
| `CONFIGURED_FEATURE_REGISTRY`           | `worldgen/configured_feature`           |
| `PLACED_FEATURE_REGISTRY`               | `worldgen/placed_feature`               |
| `CONFIGURED_STRUCTURE_FEATURE_REGISTRY` | `worldgen/configured_structure_feature` |
| `STRUCTURE_SET_REGISTRY`                | `worldgen/structure_set`                |
| `PROCESSOR_LIST_REGISTRY`               | `worldgen/processor_list`               |
| `TEMPLATE_POOL_REGISTRY`                | `worldgen/template_pool`                |
| `BIOME_REGISTRY`                        | `worldgen/biome`                        |
| `NOISE_REGISTRY`                        | `worldgen/noise`                        |
| `DENSITY_FUNCTION_REGISTRY`             | `worldgen/density_function`             |
| `CARVER_REGISTRY`                       | `worldgen/carver`                       |
| `FEATURE_REGISTRY`                      | `worldgen/feature`                      |
| `STRUCTURE_FEATURE_REGISTRY`            | `worldgen/structure_feature`            |
| `STRUCTURE_PLACEMENT_TYPE_REGISTRY`     | `worldgen/structure_placement`          |
| `STRUCTURE_PIECE_REGISTRY`              | `worldgen/structure_piece`              |
| `PLACEMENT_MODIFIER_REGISTRY`           | `worldgen/placement_modifier_type`      |
| `BLOCK_STATE_PROVIDER_TYPE_REGISTRY`    | `worldgen/block_state_provider_type`    |
| `FOLIAGE_PLACER_TYPE_REGISTRY`          | `worldgen/foliage_placer_type`          |
| `TRUNK_PLACER_TYPE_REGISTRY`            | `worldgen/trunk_placer_type`            |
| `TREE_DECORATOR_TYPE_REGISTRY`          | `worldgen/tree_decorator_type`          |
| `FEATURE_SIZE_TYPE_REGISTRY`            | `worldgen/feature_size_type`            |
| `BIOME_SOURCE_REGISTRY`                 | `worldgen/biome_source`                 |
| `CHUNK_GENERATOR_REGISTRY`              | `worldgen/chunk_generator`              |
| `CONDITION_REGISTRY`                    | `worldgen/material_condition`           |
| `RULE_REGISTRY`                         | `worldgen/material_rule`                |
| `DENSITY_FUNCTION_TYPE_REGISTRY`        | `worldgen/density_function_type`        |
| `STRUCTURE_PROCESSOR_REGISTRY`          | `worldgen/structure_processor`          |
| `STRUCTURE_POOL_ELEMENT_REGISTRY`       | `worldgen/structure_pool_element`       |


</details>