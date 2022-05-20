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

## Liste

### Blocs

<details>
<summary>Liste des tags pour les blocs</summary>

| Identifiant                                | Description                                                   |
|--------------------------------------------|---------------------------------------------------------------|
| `mineable/axe`                             | Liste des blocs pouvant être miné efficacement avec une hache |
| `mineable/hoe`                             | Liste des blocs pouvant être miné efficacement avec faux      |
| `mineable/pickaxe`                         | Liste des blocs pouvant être miné efficacement avec pioche    |
| `mineable/shovel`                          | Liste des blocs pouvant être miné efficacement avec pelle     |
| `acacia_logs`                              |                                                               |
| `animals_spawnable_on`                     |                                                               |
| `anvil`                                    |                                                               |
| `axolotls_spawnable_on`                    |                                                               |
| `azalea_grows_on`                          |                                                               |
| `azalea_root_replaceable`                  |                                                               |
| `bamboo_plantable_on`                      |                                                               |
| `banners`                                  |                                                               |
| `base_stone_nether`                        |                                                               |
| `base_stone_overworld`                     |                                                               |
| `beacon_base_blocks`                       |                                                               |
| `beds`                                     |                                                               |
| `beehives`                                 |                                                               |
| `bee_growables`                            |                                                               |
| `big_dripleaf_placeable`                   |                                                               |
| `birch_logs`                               |                                                               |
| `buttons`                                  |                                                               |
| `campfires`                                |                                                               |
| `candles`                                  |                                                               |
| `candle_cakes`                             |                                                               |
| `carpets`                                  |                                                               |
| `cauldrons`                                |                                                               |
| `cave_vines`                               |                                                               |
| `climbable`                                |                                                               |
| `coal_ores`                                |                                                               |
| `copper_ores`                              |                                                               |
| `corals`                                   |                                                               |
| `coral_blocks`                             |                                                               |
| `coral_plants`                             |                                                               |
| `crimson_stems`                            |                                                               |
| `crops`                                    |                                                               |
| `crystal_sound_blocks`                     |                                                               |
| `dark_oak_logs`                            |                                                               |
| `deepslate_ore_replaceables`               |                                                               |
| `diamond_ores`                             |                                                               |
| `dirt`                                     |                                                               |
| `doors`                                    |                                                               |
| `dragon_immune`                            |                                                               |
| `dripstone_replaceable_blocks`             |                                                               |
| `emerald_ores`                             |                                                               |
| `enderman_holdable`                        |                                                               |
| `fall_damage_resetting`                    |                                                               |
| `features_cannot_replace`                  |                                                               |
| `fences`                                   |                                                               |
| `fence_gates`                              |                                                               |
| `fire`                                     |                                                               |
| `flowers`                                  |                                                               |
| `flower_pots`                              |                                                               |
| `foxes_spawnable_on`                       |                                                               |
| `geode_invalid_blocks`                     |                                                               |
| `goats_spawnable_on`                       |                                                               |
| `gold_ores`                                |                                                               |
| `guarded_by_piglins`                       |                                                               |
| `hoglin_repellents`                        |                                                               |
| `ice`                                      |                                                               |
| `impermeable`                              |                                                               |
| `infiniburn_end`                           |                                                               |
| `infiniburn_nether`                        |                                                               |
| `infiniburn_overworld`                     |                                                               |
| `inside_step_sound_blocks`                 |                                                               |
| `iron_ores`                                |                                                               |
| `jungle_logs`                              |                                                               |
| `lapis_ores`                               |                                                               |
| `lava_pool_stone_cannot_replace`           |                                                               |
| `leaves`                                   |                                                               |
| `logs`                                     |                                                               |
| `logs_that_burn`                           |                                                               |
| `lush_ground_replaceable`                  |                                                               |
| `mooshrooms_spawnable_on`                  |                                                               |
| `moss_replaceable`                         |                                                               |
| `mushroom_grow_block`                      |                                                               |
| `needs_diamond_tool`                       |                                                               |
| `needs_iron_tool`                          |                                                               |
| `needs_stone_tool`                         |                                                               |
| `non_flammable_wood`                       |                                                               |
| `nylium`                                   |                                                               |
| `oak_logs`                                 |                                                               |
| `occludes_vibration_signals`               |                                                               |
| `parrots_spawnable_on`                     |                                                               |
| `piglin_repellents`                        |                                                               |
| `planks`                                   |                                                               |
| `polar_bears_spawnable_on_in_frozen_ocean` |                                                               |
| `portals`                                  |                                                               |
| `pressure_plates`                          |                                                               |
| `prevent_mob_spawning_inside`              |                                                               |
| `rabbits_spawnable_on`                     |                                                               |
| `rails`                                    |                                                               |
| `redstone_ores`                            |                                                               |
| `replaceable_plants`                       |                                                               |
| `sand`                                     |                                                               |
| `saplings`                                 |                                                               |
| `shulker_boxes`                            |                                                               |
| `signs`                                    |                                                               |
| `slabs`                                    |                                                               |
| `small_dripleaf_placeable`                 |                                                               |
| `small_flowers`                            |                                                               |
| `snow`                                     |                                                               |
| `soul_fire_base_blocks`                    |                                                               |
| `soul_speed_blocks`                        |                                                               |
| `spruce_logs`                              |                                                               |
| `stairs`                                   |                                                               |
| `standing_signs`                           |                                                               |
| `stone_bricks`                             |                                                               |
| `stone_ore_replaceables`                   |                                                               |
| `stone_pressure_plates`                    |                                                               |
| `strider_warm_blocks`                      |                                                               |
| `tall_flowers`                             |                                                               |
| `terracotta`                               |                                                               |
| `trapdoors`                                |                                                               |
| `underwater_bonemeals`                     |                                                               |
| `unstable_bottom_center`                   |                                                               |
| `valid_spawn`                              |                                                               |
| `walls`                                    |                                                               |
| `wall_corals`                              |                                                               |
| `wall_post_override`                       |                                                               |
| `wall_signs`                               |                                                               |
| `warped_stems`                             |                                                               |
| `wart_blocks`                              |                                                               |
| `wither_immune`                            |                                                               |
| `wither_summon_base_blocks`                |                                                               |
| `wolves_spawnable_on`                      |                                                               |
| `wooden_buttons`                           |                                                               |
| `wooden_doors`                             |                                                               |
| `wooden_fences`                            |                                                               |
| `wooden_pressure_plates`                   |                                                               |
| `wooden_slabs`                             |                                                               |
| `wooden_stairs`                            |                                                               |
| `wooden_trapdoors`                         |                                                               |
| `wool`                                     |                                                               |

</details>
