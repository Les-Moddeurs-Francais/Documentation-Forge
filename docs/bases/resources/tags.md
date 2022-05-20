---
sidebar_position: 3
title: Tags
description: Comment sont structurées les tags dans Minecraft ?
tags: [bases, ressources]
---

Ajoutés en 1.13, les tags permettent de regrouper plusieurs éléments du jeu (comme des items, blocs, entitées, etc...) dans un même fichier pour après les utiliser dans des recettes (par exemple celle du coffre nécessitant n'importe quels types de bois) ou même dans votre code directement.

## Structure générale

```json
{
  "replace": false,
  "values": [
    //Entrées
  ]
}
```

| Nom     | Description                                       |
|---------|---------------------------------------------------|
| replace | Définit si le tag doit remplacer ceux du même nom |
| values  | Entrées du tag (éléments contenus dans celui-ci)  |

Il existe cependant 2 types de valeurs, les valeurs requises et optionnelles (la différence étant que pour les valeurs requises, si le jeu n'arrive pas à les trouver, cela provoquera une erreur au chargement, ce qui n'est pas le cas pour les valeurs optionnelles) :
<details>
  <summary>Valeurs requises</summary>

Celle-ci peuvent prendre 2 valeurs, soit un identifiant faisant référence à un élément du jeu, soit un identifiant faisant référence à un tag (précédé d'un `#`).

```json
"minecraft:diamond_block"
```

```json
"#minecraft:stone_bricks"
```
  
</details>

<details>
  <summary>Valeurs optionnelles</summary>

Celle-ci peuvent prendre 2 valeurs au niveau du champ `ìd`, soit un identifiant faisant référence à un élément du jeu, soit un identifiant faisant référence à un tag (précédé d'un `#`). Le champ `required` permet quant à lui de définir si l'entrée est requise ou non (dans le cas d'une entrée optionnelle il faudrat le définir sur `false`).

```json
{
  "id": "minecraft:diamond_block",
  "required": false
}
```

```json
{
  "id": "#minecraft:stone_bricks",
  "required": false
}
```

</details>

## Listes

### Blocs

<details>
<summary>Liste des tags concernant les blocs</summary>

| Identifiant                                | Description                                                                                    |
|--------------------------------------------|------------------------------------------------------------------------------------------------|
| `mineable/axe`                             | Liste des blocs pouvant être miné efficacement avec une hache                                  |
| `mineable/hoe`                             | Liste des blocs pouvant être miné efficacement avec faux                                       |
| `mineable/pickaxe`                         | Liste des blocs pouvant être miné efficacement avec pioche                                     |
| `mineable/shovel`                          | Liste des blocs pouvant être miné efficacement avec pelle                                      |
| `acacia_logs`                              | Liste des blocs                                                                                |
| `animals_spawnable_on`                     | Liste des blocs sur lesquels les animaux peuvent apparaitre                                    |
| `anvil`                                    | Liste des blocs                                                                                |
| `axolotls_spawnable_on`                    | Liste des blocs sur lesquels les axolotls peuvent apparaitre                                   |
| `azalea_grows_on`                          | Liste des blocs                                                                                |
| `azalea_root_replaceable`                  | Liste des blocs                                                                                |
| `bamboo_plantable_on`                      | Liste des blocs                                                                                |
| `banners`                                  | Liste des blocs                                                                                |
| `base_stone_nether`                        | Liste des blocs                                                                                |
| `base_stone_overworld`                     | Liste des blocs                                                                                |
| `beacon_base_blocks`                       | Liste des blocs                                                                                |
| `beds`                                     | Liste des blocs                                                                                |
| `beehives`                                 | Liste des blocs                                                                                |
| `bee_growables`                            | Liste des blocs                                                                                |
| `big_dripleaf_placeable`                   | Liste des blocs                                                                                |
| `birch_logs`                               | Liste des blocs                                                                                |
| `buttons`                                  | Liste des blocs                                                                                |
| `campfires`                                | Liste des blocs                                                                                |
| `candles`                                  | Liste des blocs                                                                                |
| `candle_cakes`                             | Liste des blocs                                                                                |
| `carpets`                                  | Liste des blocs                                                                                |
| `cauldrons`                                | Liste des blocs                                                                                |
| `cave_vines`                               | Liste des blocs                                                                                |
| `climbable`                                | Liste des blocs                                                                                |
| `coal_ores`                                | Liste des blocs                                                                                |
| `copper_ores`                              | Liste des blocs                                                                                |
| `corals`                                   | Liste des blocs                                                                                |
| `coral_blocks`                             | Liste des blocs                                                                                |
| `coral_plants`                             | Liste des blocs                                                                                |
| `crimson_stems`                            | Liste des blocs                                                                                |
| `crops`                                    | Liste des blocs                                                                                |
| `crystal_sound_blocks`                     | Liste des blocs                                                                                |
| `dark_oak_logs`                            | Liste des blocs                                                                                |
| `deepslate_ore_replaceables`               | Liste des blocs pouvant être remplacés par des minerais des profondeurs                        |
| `diamond_ores`                             | Liste des blocs                                                                                |
| `dirt`                                     | Liste des blocs                                                                                |
| `doors`                                    | Liste des blocs                                                                                |
| `dragon_immune`                            | Liste des blocs qui sont immunisés contre le dragon                                            |
| `dripstone_replaceable_blocks`             | Liste des blocs pouvant être remplacés par des blocs de spéléothème                            |
| `emerald_ores`                             | Liste des blocs                                                                                |
| `enderman_holdable`                        | Liste des blocs pouvant être récupérés par des enderman                                        |
| `fall_damage_resetting`                    | Liste des blocs                                                                                |
| `features_cannot_replace`                  | Liste des blocs                                                                                |
| `fences`                                   | Liste des blocs                                                                                |
| `fence_gates`                              | Liste des blocs                                                                                |
| `fire`                                     | Liste des blocs                                                                                |
| `flowers`                                  | Liste des blocs                                                                                |
| `flower_pots`                              | Liste des blocs                                                                                |
| `foxes_spawnable_on`                       | Liste des blocs sur lesquels les loups peuvent apparaitre                                      |
| `geode_invalid_blocks`                     | Liste des blocs                                                                                |
| `goats_spawnable_on`                       | Liste des blocs sur lesquels les chèvres peuvent apparaitre                                    |
| `gold_ores`                                | Liste des blocs                                                                                |
| `guarded_by_piglins`                       | Liste des blocs                                                                                |
| `hoglin_repellents`                        | Liste des blocs                                                                                |
| `ice`                                      | Liste des blocs                                                                                |
| `impermeable`                              | Liste des blocs                                                                                |
| `infiniburn_end`                           | Liste des blocs                                                                                |
| `infiniburn_nether`                        | Liste des blocs                                                                                |
| `infiniburn_overworld`                     | Liste des blocs                                                                                |
| `inside_step_sound_blocks`                 | Liste des blocs                                                                                |
| `iron_ores`                                | Liste des blocs                                                                                |
| `jungle_logs`                              | Liste des blocs                                                                                |
| `lapis_ores`                               | Liste des blocs                                                                                |
| `lava_pool_stone_cannot_replace`           | Liste des blocs                                                                                |
| `leaves`                                   | Liste des blocs                                                                                |
| `logs`                                     | Liste des blocs                                                                                |
| `logs_that_burn`                           | Liste des blocs                                                                                |
| `lush_ground_replaceable`                  | Liste des blocs                                                                                |
| `mooshrooms_spawnable_on`                  | Liste des blocs sur lesquels les vaches champignon peuvent apparaitre                          |
| `moss_replaceable`                         | Liste des blocs                                                                                |
| `mushroom_grow_block`                      | Liste des blocs                                                                                |
| `needs_diamond_tool`                       | Liste des blocs nécessitant un outil en diamant pour être récolté                              |
| `needs_iron_tool`                          | Liste des blocs nécessitant un outil en fer pour être récolté                                  |
| `needs_stone_tool`                         | Liste des blocs nécessitant un outil en pierre pour être récolté                               |
| `non_flammable_wood`                       | Liste des blocs                                                                                |
| `nylium`                                   | Liste des blocs                                                                                |
| `oak_logs`                                 | Liste des blocs                                                                                |
| `occludes_vibration_signals`               | Liste des blocs                                                                                |
| `parrots_spawnable_on`                     | Liste des blocs sur lesquels les perroquets peuvent apparaitre                                 |
| `piglin_repellents`                        | Liste des blocs                                                                                |
| `planks`                                   | Liste des blocs                                                                                |
| `polar_bears_spawnable_on_in_frozen_ocean` | Liste des blocs sur lesquels les ours polaires peuvent apparaitre dans des biomes d'océan gelé |
| `portals`                                  | Liste des blocs                                                                                |
| `pressure_plates`                          | Liste des blocs                                                                                |
| `prevent_mob_spawning_inside`              | Liste des blocs                                                                                |
| `rabbits_spawnable_on`                     | Liste des blocs sur lesquels les lapins peuvent apparaitre                                     |
| `rails`                                    | Liste des blocs                                                                                |
| `redstone_ores`                            | Liste des blocs                                                                                |
| `replaceable_plants`                       | Liste des blocs                                                                                |
| `sand`                                     | Liste des blocs                                                                                |
| `saplings`                                 | Liste des blocs                                                                                |
| `shulker_boxes`                            | Liste des blocs                                                                                |
| `signs`                                    | Liste des blocs                                                                                |
| `slabs`                                    | Liste des blocs                                                                                |
| `small_dripleaf_placeable`                 | Liste des blocs                                                                                |
| `small_flowers`                            | Liste des blocs                                                                                |
| `snow`                                     | Liste des blocs                                                                                |
| `soul_fire_base_blocks`                    | Liste des blocs                                                                                |
| `soul_speed_blocks`                        | Liste des blocs                                                                                |
| `spruce_logs`                              | Liste des blocs                                                                                |
| `stairs`                                   | Liste des blocs                                                                                |
| `standing_signs`                           | Liste des blocs                                                                                |
| `stone_bricks`                             | Liste des blocs                                                                                |
| `stone_ore_replaceables`                   | Liste des blocs pouvant être remplacés par des minerais                                        |
| `stone_pressure_plates`                    | Liste des blocs                                                                                |
| `strider_warm_blocks`                      | Liste des blocs                                                                                |
| `tall_flowers`                             | Liste des blocs                                                                                |
| `terracotta`                               | Liste des blocs                                                                                |
| `trapdoors`                                | Liste des blocs                                                                                |
| `underwater_bonemeals`                     | Liste des blocs                                                                                |
| `unstable_bottom_center`                   | Liste des blocs                                                                                |
| `valid_spawn`                              | Liste des blocs qui sont valides pour l'apparition d'un joueur                                 |
| `walls`                                    | Liste des blocs                                                                                |
| `wall_corals`                              | Liste des blocs                                                                                |
| `wall_post_override`                       | Liste des blocs                                                                                |
| `wall_signs`                               | Liste des blocs                                                                                |
| `warped_stems`                             | Liste des blocs                                                                                |
| `wart_blocks`                              | Liste des blocs                                                                                |
| `wither_immune`                            | Liste des blocs qui sont immunisés contre les explosions du Wither                             |
| `wither_summon_base_blocks`                | Liste des blocs utilisables pour faire apparaitre le Wither                                    |
| `wolves_spawnable_on`                      | Liste des blocs sur lesquels les loups peuvent apparaitre                                      |
| `wooden_buttons`                           | Liste des blocs                                                                                |
| `wooden_doors`                             | Liste des blocs                                                                                |
| `wooden_fences`                            | Liste des blocs                                                                                |
| `wooden_pressure_plates`                   | Liste des blocs                                                                                |
| `wooden_slabs`                             | Liste des blocs                                                                                |
| `wooden_stairs`                            | Liste des blocs                                                                                |
| `wooden_trapdoors`                         | Liste des blocs                                                                                |
| `wool`                                     | Liste des blocs                                                                                |

</details>

### Entités

<details>

<summary>Liste des tags concernant les entités</summary>

| Identifiant                 | Description |
|-----------------------------|-------------|
| `arrows`                    |             |
| `axolotl_always_hostiles`   |             |
| `axolotl_hunt_targets`      |             |
| `beehive_inhabitors`        |             |
| `freeze_hurts_extra_types`  |             |
| `freeze_hurts_extra_types`  |             |
| `impact_projectiles`        |             |
| `powder_snow_walkable_mobs` |             |
| `raiders`                   |             |
| `skeletons`                 |             |

</details>

### Fluides

<details>

<summary>Liste des tags concernant les fluides</summary>

| Identifiant | Description |
|-------------|-------------|
| `lava`      |             |
| `water`     |             |

</details>

### Évènements de jeu

<details>

<summary>Liste des tags concernant les évènements de jeu</summary>

| Identifiant                  | Description |
|------------------------------|-------------|
| `ignore_vibrations_sneaking` |             |
| `vibrations`                 |             |

</details>

### Biomes

:::caution
Le dossier pour ces tags est préalablement contenu dans le dossier `worldgen` qui est lui-même contenu dans le dossier `tags`
:::

<details>

<summary>Liste des tags concernant les biomes</summary>

| Identifiant                            | Description |
|----------------------------------------|-------------|
| `has_structure\bastion_remnant`        |             |
| `has_structure\buried_treasure`        |             |
| `has_structure\desert_pyramid`         |             |
| `has_structure\end_city`               |             |
| `has_structure\igloo`                  |             |
| `has_structure\jungle_temple`          |             |
| `has_structure\mineshaft`              |             |
| `has_structure\mineshaft_mesa`         |             |
| `has_structure\nether_fortress`        |             |
| `has_structure\nether_fossil`          |             |
| `has_structure\ocean_monument`         |             |
| `has_structure\ocean_ruin_cold`        |             |
| `has_structure\ocean_ruin_warm`        |             |
| `has_structure\pillager_outpost`       |             |
| `has_structure\ruined_portal_desert`   |             |
| `has_structure\ruined_portal_jungle`   |             |
| `has_structure\ruined_portal_mountain` |             |
| `has_structure\ruined_portal_nether`   |             |
| `has_structure\ruined_portal_ocean`    |             |
| `has_structure\ruined_portal_standard` |             |
| `has_structure\ruined_portal_swamp`    |             |
| `has_structure\shipwreck`              |             |
| `has_structure\shipwreck_beached`      |             |
| `has_structure\stronghold`             |             |
| `has_structure\swamp_hut`              |             |
| `has_structure\village_desert`         |             |
| `has_structure\village_plains`         |             |
| `has_structure\village_savanna`        |             |
| `has_structure\village_snowy`          |             |
| `has_structure\village_taiga`          |             |
| `has_structure\woodland_mansion`       |             |
| `is_badlands`                          |             |
| `is_beach`                             |             |
| `is_deep_ocean`                        |             |
| `is_forest`                            |             |
| `is_hill`                              |             |
| `is_jungle`                            |             |
| `is_mountain`                          |             |
| `is_nether`                            |             |
| `is_ocean`                             |             |
| `is_river`                             |             |
| `is_taiga`                             |             |

</details>

### Structures configurées

:::caution
Le dossier pour ces tags est préalablement contenu dans le dossier `worldgen` qui est lui-même contenu dans le dossier `tags`
:::

<details>

<summary>Liste des tags concernant les structures configurées</summary>

| Identifiant                 | Description |
|-----------------------------|-------------|
| `dolphin_located`           |             |
| `eye_of_ender_located`      |             |
| `mineshaft`                 |             |
| `ocean_ruin`                |             |
| `on_ocean_explorer_maps`    |             |
| `on_treasure_maps`          |             |
| `on_woodland_explorer_maps` |             |
| `ruined_portal`             |             |
| `shipwreck`                 |             |
| `village`                   |             |

</details>