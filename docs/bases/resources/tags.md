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

| Identifiant                                | Description                                                                                                                                                                   |
|--------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `mineable/axe`                             | Liste des blocs pouvant être miné efficacement avec une hache                                                                                                                 |
| `mineable/hoe`                             | Liste des blocs pouvant être miné efficacement avec faux                                                                                                                      |
| `mineable/pickaxe`                         | Liste des blocs pouvant être miné efficacement avec pioche                                                                                                                    |
| `mineable/shovel`                          | Liste des blocs pouvant être miné efficacement avec pelle                                                                                                                     |
| `acacia_logs`                              | Liste des blocs qui sont des buches d'acacia                                                                                                                                  |
| `animals_spawnable_on`                     | Liste des blocs sur lesquels les animaux peuvent apparaitre                                                                                                                   |
| `anvil`                                    | Liste des blocs qui sont des enclumes                                                                                                                                         |
| `axolotls_spawnable_on`                    | Liste des blocs sur lesquels les axolotls peuvent apparaitre                                                                                                                  |
| `azalea_grows_on`                          | Liste des blocs sur lesquels les arbres d'azalées peuvent pousser                                                                                                             |
| `azalea_root_replaceable`                  | Liste des blocs qui peuvent être remplacé par les racines des azalées                                                                                                         |
| `bamboo_plantable_on`                      | Liste des blocs où le bambou peut être planté                                                                                                                                 |
| `banners`                                  | Liste des blocs qui sont des bannières                                                                                                                                        |
| `base_stone_nether`                        | Liste des blocs qui peuvent être remplacés par des ressources (par exemple des minerais) de la dimension du Nether                                                            |
| `base_stone_overworld`                     | Liste des blocs qui peuvent être remplacés par des ressources (par exemple des minerais) du monde normal                                                                      |
| `beacon_base_blocks`                       | Liste des blocs qui peuvent activer une balise selon une structure pré-définit                                                                                                |
| `beds`                                     | Liste des blocs qui sont des lits                                                                                                                                             |
| `beehives`                                 | Liste des blocs qui sont des ruches                                                                                                                                           |
| `bee_growables`                            | Liste des blocs qui réagissent au pollen des abeilles pour pousser plus rapidement                                                                                            |
| `big_dripleaf_placeable`                   | Liste des blocs qui peuvent servir de base pour les grandes foliogoutte                                                                                                       |
| `birch_logs`                               | Liste des blocs qui sont des buches de bouleau                                                                                                                                |
| `buttons`                                  | Liste des blocs qui sont des boutons                                                                                                                                          |
| `campfires`                                | Liste des blocs qui sont des feux de camp                                                                                                                                     |
| `candles`                                  | Liste des blocs qui sont des bougies                                                                                                                                          |
| `candle_cakes`                             | Liste des blocs qui sont des gateaux avec une bougie                                                                                                                          |
| `carpets`                                  | Liste des blocs qui sont des tapis                                                                                                                                            |
| `cauldrons`                                | Liste des blocs qui sont des chaudrons                                                                                                                                        |
| `cave_vines`                               | Liste des blocs qui sont des lianes des cavernes                                                                                                                              |
| `climbable`                                | Liste des blocs qui sont escaladables                                                                                                                                         |
| `coal_ores`                                | Liste des blocs qui sont des minerais de charbon                                                                                                                              |
| `copper_ores`                              | Liste des blocs qui sont des minerais de copper                                                                                                                               |
| `corals`                                   | Liste des blocs qui sont des coraux                                                                                                                                           |
| `coral_blocks`                             | Liste des blocs qui sont des coraux                                                                                                                                           |
| `coral_plants`                             | Liste des blocs qui sont des coraux (plantes)                                                                                                                                 |
| `crimson_stems`                            | Liste des blocs qui sont des tiges carmins                                                                                                                                    |
| `crops`                                    | Liste des blocs qui sont des cultures                                                                                                                                         |
| `crystal_sound_blocks`                     | Liste des blocs qui émettent le son "amethyst block chime" de manière répétée pendant un court laps de temps après avoir été piétinés  ( le volume diminuant progressivement) |
| `dark_oak_logs`                            | Liste des blocs qui sont des buches de bois sombre                                                                                                                            |
| `deepslate_ore_replaceables`               | Liste des blocs pouvant être remplacés par des minerais des profondeurs                                                                                                       |
| `diamond_ores`                             | Liste des blocs qui sont des minerais de diamant                                                                                                                              |
| `dirt`                                     | Liste des blocs qui sont de la terre                                                                                                                                          |
| `doors`                                    | Liste des blocs qui sont des portes                                                                                                                                           |
| `dragon_immune`                            | Liste des blocs qui sont immunisés contre le dragon                                                                                                                           |
| `dripstone_replaceable_blocks`             | Liste des blocs pouvant être remplacés par des blocs de spéléothème                                                                                                           |
| `emerald_ores`                             | Liste des blocs qui sont des minerais d'émeraude                                                                                                                              |
| `enderman_holdable`                        | Liste des blocs pouvant être récupérés par des enderman                                                                                                                       |
| `fall_damage_resetting`                    | Liste des blocs qui reinitialises les dégâts de chute d'un joueur                                                                                                             |
| `features_cannot_replace`                  | Liste des blocs ne peuvent pas être remplacés par des éléments générés                                                                                                        |
| `fences`                                   | Liste des blocs qui sont des barrières                                                                                                                                        |
| `fence_gates`                              | Liste des blocs qui sont des portillons                                                                                                                                       |
| `fire`                                     | Liste des blocs qui sont du feu                                                                                                                                               |
| `flowers`                                  | Liste des blocs qui sont des fleurs                                                                                                                                           |
| `flower_pots`                              | Liste des blocs qui sont des fleurs dans des pots                                                                                                                             |
| `foxes_spawnable_on`                       | Liste des blocs sur lesquels les loups peuvent apparaitre                                                                                                                     |
| `geode_invalid_blocks`                     | Liste des blocs qui empêchent les géodes de se générer                                                                                                                        |
| `goats_spawnable_on`                       | Liste des blocs sur lesquels les chèvres peuvent apparaitre                                                                                                                   |
| `gold_ores`                                | Liste des blocs qui sont des minerais d'or                                                                                                                                    |
| `guarded_by_piglins`                       | Liste des blocs qui rendent hostile les Piglin's quand ils sont cassés ou ouvert (pour ceux le pouvant)                                                                       |
| `hoglin_repellents`                        | Liste des blocs qui font fuir les hoglin's                                                                                                                                    |
| `ice`                                      | Liste des blocs qui sont de la glace                                                                                                                                          |
| `impermeable`                              | Liste des blocs qui ne laissent pas passer les fluides ou le miel                                                                                                             |
| `infiniburn_end`                           | Liste des blocs qui peuvent rester en feu éternellement dans la dimension de l'Ender                                                                                          |
| `infiniburn_nether`                        | Liste des blocs qui peuvent rester en feu éternellement dans la dimension du Nether                                                                                           |
| `infiniburn_overworld`                     | Liste des blocs qui peuvent rester en feu éternellement dans le monde normal                                                                                                  |
| `inside_step_sound_blocks`                 | Liste des blocs jouant le son de pas quand une entité marche à l'intérieur                                                                                                    |
| `iron_ores`                                | Liste des blocs qui sont des minerais de fer                                                                                                                                  |
| `jungle_logs`                              | Liste des blocs qui sont des buches de bois de la jungle                                                                                                                      |
| `lapis_ores`                               | Liste des blocs qui sont des minerais de lapis lazuli                                                                                                                         |
| `lava_pool_stone_cannot_replace`           | Liste des blocs qui ne peuvent pas être remplacé par la génération d'un lac de lave.                                                                                          |
| `leaves`                                   | Liste des blocs qui sont des feuilles                                                                                                                                         |
| `logs`                                     | Liste des blocs qui sont des buches                                                                                                                                           |
| `logs_that_burn`                           | Liste des blocs de buche qui sont inflammables                                                                                                                                |
| `lush_ground_replaceable`                  | Liste des blocs qui seront remplacés par de la terre racineuse                                                                                                                |
| `mooshrooms_spawnable_on`                  | Liste des blocs sur lesquels les vaches champignon peuvent apparaitre                                                                                                         |
| `moss_replaceable`                         | Liste des blocs qui peuvent être remplacés par des blocs de mousse lorsque de la poudre d'os a été appliquée à un bloc de mousse voisin                                       |
| `mushroom_grow_block`                      | Liste des blocs sur lesquels les champignons peuvent être placés ou se propager                                                                                               |
| `needs_diamond_tool`                       | Liste des blocs nécessitant un outil en diamant pour être récolté                                                                                                             |
| `needs_iron_tool`                          | Liste des blocs nécessitant un outil en fer pour être récolté                                                                                                                 |
| `needs_stone_tool`                         | Liste des blocs nécessitant un outil en pierre pour être récolté                                                                                                              |
| `non_flammable_wood`                       | Liste des blocs de bois qui sont inflammables                                                                                                                                 |
| `nylium`                                   | Liste des blocs qui sont des blocs de nylium                                                                                                                                  |
| `oak_logs`                                 | Liste des blocs qui sont des buches de bois de chêne                                                                                                                          |
| `occludes_vibration_signals`               | Liste des blocs qui empêchent les capteurs sculk d'entendre les vibrations si le bloc se trouve entre le capteur et la vibration.                                             |
| `parrots_spawnable_on`                     | Liste des blocs sur lesquels les perroquets peuvent apparaitre                                                                                                                |
| `piglin_repellents`                        | Liste des blocs qui font fuir les piglin's                                                                                                                                    |
| `planks`                                   | Liste des blocs qui sont des planches                                                                                                                                         |
| `polar_bears_spawnable_on_in_frozen_ocean` | Liste des blocs sur lesquels les ours polaires peuvent apparaitre dans des biomes d'océan gelé                                                                                |
| `portals`                                  | Liste des blocs qui sont des portails                                                                                                                                         |
| `pressure_plates`                          | Liste des blocs qui sont des plaques de pression                                                                                                                              |
| `prevent_mob_spawning_inside`              | Liste des blocs qui empêches les monstres d'apparaître à l'intérieur de ceux-ci                                                                                               |
| `rabbits_spawnable_on`                     | Liste des blocs sur lesquels les lapins peuvent apparaitre                                                                                                                    |
| `rails`                                    | Liste des blocs qui sont des rails                                                                                                                                            |
| `redstone_ores`                            | Liste des blocs qui sont des minerais de redstone                                                                                                                             |
| `replaceable_plants`                       | Liste des plantes qui peuvent être remplacées pendant la génération d'un élément                                                                                              |
| `sand`                                     | Liste des blocs qui sont du sable                                                                                                                                             |
| `saplings`                                 | Liste des blocs qui sont des pousses d'arbre                                                                                                                                  |
| `shulker_boxes`                            | Liste des blocs qui sont des boites de shulker                                                                                                                                |
| `signs`                                    | Liste des blocs qui sont des panneaux                                                                                                                                         |
| `slabs`                                    | Liste des blocs qui sont des dalles                                                                                                                                           |
| `small_dripleaf_placeable`                 | Liste des blocs sur lesquels il est possible de placer les petites foliogoutes                                                                                                |
| `small_flowers`                            | Liste des blocs qui sont des petites fleurs                                                                                                                                   |
| `snow`                                     | Liste des blocs qui sont de la neige                                                                                                                                          |
| `soul_fire_base_blocks`                    | Liste des blocs qui peuvent supporter le feu des âmes                                                                                                                         |
| `soul_speed_blocks`                        | Liste des blocs qui donnent un effet de vitesse si jamais un joueur se situe sur l'un d'entre eux avec des bottes ayant l'enchantement _Agilité des âmes_                     |
| `spruce_logs`                              | Liste des blocs qui sont des buches de bois de sapin                                                                                                                          |
| `stairs`                                   | Liste des blocs qui sont des escaliers                                                                                                                                        |
| `standing_signs`                           | Liste des blocs qui sont des panneaux _debouts_                                                                                                                               |
| `stone_bricks`                             | Liste des blocs qui sont des pierres taillées                                                                                                                                 |
| `stone_ore_replaceables`                   | Liste des blocs pouvant être remplacés par des minerais                                                                                                                       |
| `stone_pressure_plates`                    | Liste des blocs qui sont des plaques de pression en pierre                                                                                                                    |
| `strider_warm_blocks`                      | Liste des blocs qui ne font pas trembler un strider si jamais il se retrouve dessus                                                                                           |
| `tall_flowers`                             | Liste des blocs qui sont des fleurs hautes                                                                                                                                    |
| `terracotta`                               | Liste des blocs qui sont de la terre cuite                                                                                                                                    |
| `trapdoors`                                | Liste des blocs qui sont des trappes                                                                                                                                          |
| `underwater_bonemeals`                     | Liste des plantes aquatiques qui poussent dans le fond des océans                                                                                                             |
| `unstable_bottom_center`                   | Liste des blocs qui ne peuvent pas supporter les lanternes et les cloches sur leur face inférieure                                                                            |
| `valid_spawn`                              | Liste des blocs qui sont valides pour l'apparition d'un joueur                                                                                                                |
| `walls`                                    | Liste des blocs qui sont des murets                                                                                                                                           |
| `wall_corals`                              | Liste des blocs qui sont des coraux muraux                                                                                                                                    |
| `wall_post_override`                       | Liste des blocs qui transforment les murs en piliers, même s'ils ne sont pas solides.                                                                                         |
| `wall_signs`                               | Liste des blocs qui sont des panneaux accrochés au mur                                                                                                                        |
| `warped_stems`                             | Liste des blocs qui sont des tiges biscornues                                                                                                                                 |
| `wart_blocks`                              | Liste des blocs qui sont des blocs de verrue                                                                                                                                  |
| `wither_immune`                            | Liste des blocs qui sont immunisés contre les explosions du Wither                                                                                                            |
| `wither_summon_base_blocks`                | Liste des blocs utilisables pour faire apparaitre le Wither                                                                                                                   |
| `wolves_spawnable_on`                      | Liste des blocs sur lesquels les loups peuvent apparaitre                                                                                                                     |
| `wooden_buttons`                           | Liste des blocs qui sont des boutons en bois                                                                                                                                  |
| `wooden_doors`                             | Liste des blocs qui sont des portes en bois                                                                                                                                   |
| `wooden_fences`                            | Liste des blocs qui sont des barrières en bois                                                                                                                                |
| `wooden_pressure_plates`                   | Liste des blocs qui sont des plaques de pression en bois                                                                                                                      |
| `wooden_slabs`                             | Liste des blocs qui sont des dalles en bois                                                                                                                                   |
| `wooden_stairs`                            | Liste des blocs qui sont des escaliers en bois                                                                                                                                |
| `wooden_trapdoors`                         | Liste des blocs qui sont des trappes en bois                                                                                                                                  |
| `wool`                                     | Liste des blocs qui sont des laines                                                                                                                                           |

</details>

### Entités

<details>

<summary>Liste des tags concernant les entités</summary>

| Identifiant                  | Description                                                                                              |
|------------------------------|----------------------------------------------------------------------------------------------------------|
| `arrows`                     | Liste de toutes les flèches (entités)                                                                    |
| `axolotl_always_hostiles`    | Liste des entités contre lesquels les axolotls sont toujours hostiles                                    |
| `axolotl_hunt_targets`       | Liste des entités que les axolotls attaquent                                                             |
| `beehive_inhabitors`         | Liste des entités qui habitent dans une ruche                                                            |
| `freeze_hurts_extra_types`   | Liste des entités qui sont plus sensible au froid et subissent donc des points de dégâts supplémentaires |
| `freeze_immune_entity_types` | Liste des entités qui ne gèle pas dans la poudreuse                                                      |
| `impact_projectiles`         | Liste des entités qui sont des projectiles                                                               |
| `powder_snow_walkable_mobs`  | Liste des entités qui peuvent marcher sur la poudreuse sans s'enfoncer dedans                            |
| `raiders`                    | Liste des entités qui composent les raids contre les villages                                            |
| `skeletons`                  | Liste de tous les types de squelette                                                                     |

</details>

### Fluides

<details>

<summary>Liste des tags concernant les fluides</summary>

| Identifiant | Description                           |
|-------------|---------------------------------------|
| `lava`      | Liste des fluides qui sont de la lave |
| `water`     | Liste des fluides qui sont de l'eau   |

</details>

### Évènements de jeu

<details>

<summary>Liste des tags concernant les évènements de jeu</summary>

| Identifiant                  | Description |
|------------------------------|-------------|
| `ignore_vibrations_sneaking` |             |
| `vibrations`                 |             |

</details>

### Items

<details>

<summary>Liste des tags concernant les items</summary>

| Identifiant                  | Description |
|------------------------------|-------------|
| `acacia_logs`                |             |
| `anvil`                      |             |
| `arrows`                     |             |
| `axolotl_tempt_items`        |             |
| `banners`                    |             |
| `beacon_payment_items`       |             |
| `beds`                       |             |
| `birch_logs`                 |             |
| `boats`                      |             |
| `buttons`                    |             |
| `candles`                    |             |
| `carpets`                    |             |
| `cluster_max_harvestables`   |             |
| `coals`                      |             |
| `coal_ores`                  |             |
| `copper_ores`                |             |
| `creeper_drop_music_discs`   |             |
| `crimson_stems`              |             |
| `dark_oak_logs`              |             |
| `diamond_ores`               |             |
| `dirt`                       |             |
| `doors`                      |             |
| `emerald_ores`               |             |
| `fences`                     |             |
| `fishes`                     |             |
| `flowers`                    |             |
| `fox_food`                   |             |
| `freeze_immune_wearables`    |             |
| `gold_ores`                  |             |
| `ignored_by_piglin_babies`   |             |
| `iron_ores`                  |             |
| `jungle_logs`                |             |
| `lapis_ores`                 |             |
| `leaves`                     |             |
| `lectern_books`              |             |
| `logs`                       |             |
| `logs_that_burn`             |             |
| `music_discs`                |             |
| `non_flammable_wood`         |             |
| `oak_logs`                   |             |
| `occludes_vibration_signals` |             |
| `piglin_food`                |             |
| `piglin_loved`               |             |
| `piglin_repellents`          |             |
| `planks`                     |             |
| `rails`                      |             |
| `redstone_ores`              |             |
| `sand`                       |             |
| `saplings`                   |             |
| `signs`                      |             |
| `slabs`                      |             |
| `small_flowers`              |             |
| `soul_fire_base_blocks`      |             |
| `spruce_logs`                |             |
| `stairs`                     |             |
| `stone_bricks`               |             |
| `stone_crafting_materials`   |             |
| `stone_tool_materials`       |             |
| `tall_flowers`               |             |
| `terracotta`                 |             |
| `trapdoors`                  |             |
| `walls`                      |             |
| `warped_stems`               |             |
| `wooden_buttons`             |             |
| `wooden_doors`               |             |
| `wooden_fences`              |             |
| `wooden_pressure_plates`     |             |
| `wooden_slabs`               |             |
| `wooden_stairs`              |             |
| `wooden_trapdoors`           |             |
| `wool`                       |             |

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

| Identifiant                 | Description                                                                     |
|-----------------------------|---------------------------------------------------------------------------------|
| `dolphin_located`           | Liste des structure configurées pouvant être localisées par un dolphin          |
| `eye_of_ender_located`      | Liste des structures configurées pouvant être localisées par un oeil de l'Ender |
| `mineshaft`                 | Listes des structures configurées qui sont des puits de mine abandonné          |
| `ocean_ruin`                | Listes des structures configurées qui sont des ruines d'océan                   |
| `on_ocean_explorer_maps`    |                                                                                 |
| `on_treasure_maps`          |                                                                                 |
| `on_woodland_explorer_maps` |                                                                                 |
| `ruined_portal`             | Listes des structures configurées qui sont des portails en ruines               |
| `shipwreck`                 | Listes des structures configurées qui sont des épaves de navire                 |
| `village`                   | Listes des structures configurées qui sont des villages                         |

</details>