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

### Motifs de bannière

<details>

<summary>Liste des tags concernant les motifs de bannière</summary>

| Identifiant            | Description                                                                  |
|------------------------|------------------------------------------------------------------------------|
| `pattern_item/creeper` | Liste des motifs qui peuvent être fabriqués en utilisant le motif de creeper |
| `pattern_item/flower`  | Liste des motifs qui peuvent être fabriqués en utilisant le motif de fleur   |
| `pattern_item/globe`   | Liste des motifs qui peuvent être fabriqués en utilisant le motif de globe   |
| `pattern_item/mojang`  | Liste des motifs qui peuvent être fabriqués en utilisant le motif de Mojang  |
| `pattern_item/piglin`  | Liste des motifs qui peuvent être fabriqués en utilisant le motif de Piglin  |
| `pattern_item/skull`   | Liste des motifs qui peuvent être fabriqués en utilisant le motif de crâne   |
| `no_item_required`     | Liste des motifs qui peuvent être fabriqués sans aucun item                  |

</details>

### Blocs

<details>
<summary>Liste des tags concernant les blocs</summary>

| Identifiant                                | Description                                                                                                                                                                   |
|--------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `mineable/axe`                             | Liste des blocs pouvant être miné efficacement avec une hache                                                                                                                 |
| `mineable/hoe`                             | Liste des blocs pouvant être miné efficacement avec une houe                                                                                                                  |
| `mineable/pickaxe`                         | Liste des blocs pouvant être miné efficacement avec une pioche                                                                                                                |
| `mineable/shovel`                          | Liste des blocs pouvant être miné efficacement avec une pelle                                                                                                                 |
| `acacia_logs`                              | Liste des blocs qui sont des buches d'acacia                                                                                                                                  |
| `all_hanging_signs`                        | Liste des blocs qui sont des pancartes suspendues (que ce soit au mur ou sous un bloc)                                                                                        |
| `ancient_city_replaceable`                 | Liste des blocs remplaçables par les cités antiques                                                                                                                           |
| `animals_spawnable_on`                     | Liste des blocs sur lesquels les animaux peuvent apparaître                                                                                                                   |
| `anvil`                                    | Liste des blocs qui sont des enclumes                                                                                                                                         |
| `axolotls_spawnable_on`                    | Liste des blocs sur lesquels les axolotls peuvent apparaître                                                                                                                  |
| `azalea_grows_on`                          | Liste des blocs sur lesquels les arbres d'azalées peuvent pousser                                                                                                             |
| `azalea_root_replaceable`                  | Liste des blocs qui peuvent être remplacé par les racines des azalées                                                                                                         |
| `bamboo_plantable_on`                      | Liste des blocs où le bambou peut être planté                                                                                                                                 |
| `banners`                                  | Liste des blocs qui sont des bannières                                                                                                                                        |
| `bamboo_blocks`                            | Liste des blocs qui sont des blocs de bambou                                                                                                                                  |
| `base_stone_nether`                        | Liste des blocs qui peuvent être remplacés par des ressources (par exemple des minerais) de la dimension du Nether                                                            |
| `base_stone_overworld`                     | Liste des blocs qui peuvent être remplacés par des ressources (par exemple des minerais) du monde normal                                                                      |
| `beacon_base_blocks`                       | Liste des blocs qui peuvent activer une balise selon une structure prédéfinie                                                                                                 |
| `beds`                                     | Liste des blocs qui sont des lits                                                                                                                                             |
| `beehives`                                 | Liste des blocs qui sont des ruches                                                                                                                                           |
| `bee_growables`                            | Liste des blocs qui réagissent au pollen des abeilles pour pousser plus rapidement                                                                                            |
| `big_dripleaf_placeable`                   | Liste des blocs qui peuvent servir de base pour les grandes foliogoutte                                                                                                       |
| `birch_logs`                               | Liste des blocs qui sont des buches de bouleau                                                                                                                                |
| `buttons`                                  | Liste des blocs qui sont des boutons                                                                                                                                          |
| `campfires`                                | Liste des blocs qui sont des feux de camp                                                                                                                                     |
| `candles`                                  | Liste des blocs qui sont des bougies                                                                                                                                          |
| `candle_cakes`                             | Liste des blocs qui sont des gâteaux avec une bougie                                                                                                                          |
| `cauldrons`                                | Liste des blocs qui sont des chaudrons                                                                                                                                        |
| `cave_vines`                               | Liste des blocs qui sont des lianes des cavernes                                                                                                                              |
| `ceiling_hanging_signs`                    | Liste des blocs qui sont des pancartes suspendues en dessous d'un bloc                                                                                                        |
| `climbable`                                | Liste des blocs qui sont escaladables                                                                                                                                         |
| `coal_ores`                                | Liste des blocs qui sont des minerais de charbon                                                                                                                              |
| `completes_find_tree_tutorial`             | Liste des blocs qui, quand ils sont cassés, permettent de compléter le tutoriel `find_tree`                                                                                   |
| `convertable_to_mud`                       | Liste des blocs qui peuvent être convertis en boue                                                                                                                            |
| `copper_ores`                              | Liste des blocs qui sont des minerais de cuivre                                                                                                                               |
| `corals`                                   | Liste des blocs qui sont des coraux (en général)                                                                                                                              |
| `coral_blocks`                             | Liste des blocs qui sont des coraux (blocs)                                                                                                                                   |
| `coral_plants`                             | Liste des blocs qui sont des coraux (plantes)                                                                                                                                 |
| `crimson_stems`                            | Liste des blocs qui sont des tiges carmins                                                                                                                                    |
| `crops`                                    | Liste des blocs qui sont des cultures                                                                                                                                         |
| `crystal_sound_blocks`                     | Liste des blocs qui émettent le son "amethyst block chime" de manière répétée pendant un court laps de temps après avoir été piétinés  ( le volume diminuant progressivement) |
| `dampens_vibrations`                       | Liste des blocs absorbant les vibrations qui le touchent                                                                                                                      |
| `dark_oak_logs`                            | Liste des blocs qui sont des buches de bois sombre                                                                                                                            |
| `dead_bush_may_place_on`                   | Liste des blocs sur lesquelles les arbustes morts peuvent pousser                                                                                                             |
| `deepslate_ore_replaceables`               | Liste des blocs pouvant être remplacés par des minerais des profondeurs                                                                                                       |
| `diamond_ores`                             | Liste des blocs qui sont des minerais de diamant                                                                                                                              |
| `dirt`                                     | Liste des blocs qui sont de la terre                                                                                                                                          |
| `doors`                                    | Liste des blocs qui sont des portes                                                                                                                                           |
| `dragon_immune`                            | Liste des blocs qui sont immunisés contre le dragon                                                                                                                           |
| `dragon_transparent`                       | Liste des blocs qui peuvent être traversés par le dragon sans les détruire                                                                                                    |
| `dripstone_replaceable_blocks`             | Liste des blocs pouvant être remplacés par des blocs de spéléothème                                                                                                           |
| `emerald_ores`                             | Liste des blocs qui sont des minerais d'émeraude                                                                                                                              |
| `enderman_holdable`                        | Liste des blocs pouvant être récupérés par des enderman                                                                                                                       |
| `fall_damage_resetting`                    | Liste des blocs qui réinitialisent les dégâts de chute d'un joueur                                                                                                            |
| `features_cannot_replace`                  | Liste des blocs ne peuvent pas être remplacés par des éléments générés                                                                                                        |
| `fences`                                   | Liste des blocs qui sont des barrières                                                                                                                                        |
| `fence_gates`                              | Liste des blocs qui sont des portillons                                                                                                                                       |
| `fire`                                     | Liste des blocs qui sont du feu                                                                                                                                               |
| `flowers`                                  | Liste des blocs qui sont des fleurs                                                                                                                                           |
| `flower_pots`                              | Liste des blocs qui sont des fleurs dans des pots                                                                                                                             |
| `foxes_spawnable_on`                       | Liste des blocs sur lesquels les loups peuvent apparaître                                                                                                                     |
| `frogs_spawnable_on`                       | Liste des blocs sur lesquels les grenouilles peuvent apparaître                                                                                                               |
| `frog_prefer_jump_to`                      | Liste des blocs sur lesquels les grenouilles préfèrent sauter                                                                                                                 |
| `geode_invalid_blocks`                     | Liste des blocs qui empêchent les géodes de se générer                                                                                                                        |
| `goats_spawnable_on`                       | Liste des blocs sur lesquels les chèvres peuvent apparaître                                                                                                                   |
| `gold_ores`                                | Liste des blocs qui sont des minerais d'or                                                                                                                                    |
| `guarded_by_piglins`                       | Liste des blocs qui rendent hostile les Piglin's quand ils sont cassés ou ouvert (pour ceux le pouvant)                                                                       |
| `hoglin_repellents`                        | Liste des blocs qui font fuir les hoglin's                                                                                                                                    |
| `ice`                                      | Liste des blocs qui sont de la glace                                                                                                                                          |
| `impermeable`                              | Liste des blocs qui ne laissent pas passer les fluides ou le miel                                                                                                             |
| `infiniburn_end`                           | Liste des blocs qui peuvent rester en feu éternellement dans la dimension de l'Ender                                                                                          |
| `infiniburn_nether`                        | Liste des blocs qui peuvent rester en feu éternellement dans la dimension du Nether                                                                                           |
| `infiniburn_overworld`                     | Liste des blocs qui peuvent rester en feu éternellement dans le monde normal                                                                                                  |
| `inside_step_sound_blocks`                 | Liste des blocs jouant le son de pas quand une entité marche à l'intérieur                                                                                                    |
| `invalid_spawn_inside`                     | Liste des blocs où le joueur ne peut pas apparaitre à l'intérieur                                                                                                             |
| `iron_ores`                                | Liste des blocs qui sont des minerais de fer                                                                                                                                  |
| `jungle_logs`                              | Liste des blocs qui sont des buches de bois de la jungle                                                                                                                      |
| `lapis_ores`                               | Liste des blocs qui sont des minerais de lapis lazuli                                                                                                                         |
| `lava_pool_stone_cannot_replace`           | Liste des blocs qui ne peuvent pas être remplacé par la génération d'un lac de lave                                                                                           |
| `leaves`                                   | Liste des blocs qui sont des feuilles                                                                                                                                         |
| `logs`                                     | Liste des blocs qui sont des buches                                                                                                                                           |
| `logs_that_burn`                           | Liste des blocs de buche qui sont inflammables                                                                                                                                |
| `lush_ground_replaceable`                  | Liste des blocs qui seront remplacés par de la terre racineuse                                                                                                                |
| `mangrove_logs`                            | Liste des blocs qui sont des buches en palétuvier                                                                                                                             |
| `mangrove_logs_can_grow_through`           | Liste des blocs qui peuvent être traversés par le tronc d'un palétuvier quand il pousse                                                                                       |
| `mangrove_roots_can_grow_through`          | Liste des blocs qui peuvent être traversés par les racines d'un palétuvier quand il pousse                                                                                    |
| `mooshrooms_spawnable_on`                  | Liste des blocs sur lesquels les vaches champignon peuvent apparaître                                                                                                         |
| `moss_replaceable`                         | Liste des blocs qui peuvent être remplacés par des blocs de mousse lorsque de la poudre d'os a été appliquée à un bloc de mousse voisin                                       |
| `mushroom_grow_block`                      | Liste des blocs sur lesquels les champignons peuvent être placés ou se propager                                                                                               |
| `needs_diamond_tool`                       | Liste des blocs nécessitant un outil en diamant pour être récolté                                                                                                             |
| `needs_iron_tool`                          | Liste des blocs nécessitant un outil en fer pour être récolté                                                                                                                 |
| `needs_stone_tool`                         | Liste des blocs nécessitant un outil en pierre pour être récolté                                                                                                              |
| `nether_carver_replaceables`               | Liste des blocs qui peuvent être détruit par le générateur de monde pour y creuser des grottes dans le Nether                                                                 |
| `nylium`                                   | Liste des blocs qui sont des blocs de nylium                                                                                                                                  |
| `oak_logs`                                 | Liste des blocs qui sont des buches de bois de chêne                                                                                                                          |
| `occludes_vibration_signals`               | Liste des blocs qui empêchent les capteurs sculk d'entendre les vibrations si le bloc se trouve entre le capteur et la vibration                                              |
| `overworld_carver_replaceables`            | Liste des blocs qui peuvent être détruit par le générateur de monde pour y creuser des grottes dans le monde normal                                                           |
| `overworld_natural_logs`                   | Liste des blocs de tronc d'arbre naturellement présent dans le monde normal                                                                                                   |
| `parrots_spawnable_on`                     | Liste des blocs sur lesquels les perroquets peuvent apparaître                                                                                                                |
| `piglin_repellents`                        | Liste des blocs qui font fuir les piglin's                                                                                                                                    |
| `planks`                                   | Liste des blocs qui sont des planches                                                                                                                                         |
| `polar_bears_spawnable_on_in_frozen_ocean` | Liste des blocs sur lesquels les ours polaires peuvent apparaître dans des biomes d'océan gelé                                                                                |
| `portals`                                  | Liste des blocs qui sont des portails                                                                                                                                         |
| `pressure_plates`                          | Liste des blocs qui sont des plaques de pression                                                                                                                              |
| `prevent_mob_spawning_inside`              | Liste des blocs empêchent les monstres d'apparaître à l'intérieur de ceux-ci                                                                                                  |
| `rabbits_spawnable_on`                     | Liste des blocs sur lesquels les lapins peuvent apparaître                                                                                                                    |
| `rails`                                    | Liste des blocs qui sont des rails                                                                                                                                            |
| `redstone_ores`                            | Liste des blocs qui sont des minerais de redstone                                                                                                                             |
| `replaceable_plants`                       | Liste des plantes qui peuvent être remplacées pendant la génération d'un élément                                                                                              |
| `sand`                                     | Liste des blocs qui sont du sable                                                                                                                                             |
| `saplings`                                 | Liste des blocs qui sont des pousses d'arbre                                                                                                                                  |
| `sculk_replaceable`                        | Liste des blocs qui peuvent être remplacé par des blocs de la familles des sculks lors de la génération du sculls                                                             |
| `sculk_replaceable_world_gen`              | Liste des blocs qui peuvent être remplacé par des blocs de la familles des sculks lors de la génération du sculls par le générateur de monde                                  |
| `shulker_boxes`                            | Liste des blocs qui sont des boites de shulker                                                                                                                                |
| `signs`                                    | Liste des blocs qui sont des panneaux                                                                                                                                         |
| `slabs`                                    | Liste des blocs qui sont des dalles                                                                                                                                           |
| `small_dripleaf_placeable`                 | Liste des blocs sur lesquels il est possible de placer les petites foliogoutes                                                                                                |
| `small_flowers`                            | Liste des blocs qui sont des petites fleurs                                                                                                                                   |
| `snaps_goat_horn`                          | Liste des blocs qui cassent une corne aux chèvres quand elles chargent dedans                                                                                                 |
| `snow`                                     | Liste des blocs qui sont de la neige                                                                                                                                          |
| `snow_layer_cannot_survive_on`             | Liste des blocs sur lesquels les couches de neige ne peuvent pas survivre                                                                                                     |
| `snow_layer_can_survive_on`                | Liste des blocs sur lesquels les couches de neige peuvent survivre                                                                                                            |
| `soul_fire_base_blocks`                    | Liste des blocs qui peuvent supporter le feu des âmes                                                                                                                         |
| `soul_speed_blocks`                        | Liste des blocs qui donnent un effet de vitesse si jamais un joueur se situe sur l'un d'entre eux avec des bottes ayant l'enchantement _Agilité des âmes_                     |
| `spruce_logs`                              | Liste des blocs qui sont des buches de bois de sapin                                                                                                                          |
| `stairs`                                   | Liste des blocs qui sont des escaliers                                                                                                                                        |
| `standing_signs`                           | Liste des blocs qui sont des panneaux qui sont sur pied                                                                                                                       |
| `stone_bricks`                             | Liste des blocs qui sont des pierres taillées                                                                                                                                 |
| `stone_ore_replaceables`                   | Liste des blocs pouvant être remplacés par des minerais                                                                                                                       |
| `stone_pressure_plates`                    | Liste des blocs qui sont des plaques de pression en pierre                                                                                                                    |
| `strider_warm_blocks`                      | Liste des blocs qui ne font pas trembler un strider si jamais il se retrouve dessus                                                                                           |
| `stripped_logs`                            | Liste des blocs qui sont des bûches écorcées                                                                                                                                  |
| `tall_flowers`                             | Liste des blocs qui sont des fleurs hautes                                                                                                                                    |
| `terracotta`                               | Liste des blocs qui sont de la terre cuite                                                                                                                                    |
| `trapdoors`                                | Liste des blocs qui sont des trappes                                                                                                                                          |
| `underwater_bonemeals`                     | Liste des plantes aquatiques qui poussent dans le fond des océans                                                                                                             |
| `unstable_bottom_center`                   | Liste des blocs qui ne peuvent pas supporter les lanternes et les cloches sur leur face inférieure                                                                            |
| `valid_spawn`                              | Liste des blocs qui sont valides pour l'apparition d'un joueur                                                                                                                |
| `walls`                                    | Liste des blocs qui sont des murets                                                                                                                                           |
| `wall_corals`                              | Liste des blocs qui sont des coraux muraux                                                                                                                                    |
| `wall_hanging_signs`                       | Liste des blocs qui sont des pancartes suspendues au mur                                                                                                                      |
| `wall_post_override`                       | Liste des blocs qui transforment les murs en piliers, même s'ils ne sont pas solides                                                                                          |
| `wall_signs`                               | Liste des blocs qui sont des panneaux accrochés au mur                                                                                                                        |
| `warped_stems`                             | Liste des blocs qui sont des tiges biscornues                                                                                                                                 |
| `wart_blocks`                              | Liste des blocs qui sont des blocs de verrue                                                                                                                                  |
| `wither_immune`                            | Liste des blocs qui sont immunisés contre les explosions du Wither                                                                                                            |
| `wither_summon_base_blocks`                | Liste des blocs utilisables pour faire apparaître le Wither                                                                                                                   |
| `wolves_spawnable_on`                      | Liste des blocs sur lesquels les loups peuvent apparaître                                                                                                                     |
| `wooden_buttons`                           | Liste des blocs qui sont des boutons en bois                                                                                                                                  |
| `wooden_doors`                             | Liste des blocs qui sont des portes en bois                                                                                                                                   |
| `wooden_fences`                            | Liste des blocs qui sont des barrières en bois                                                                                                                                |
| `wooden_pressure_plates`                   | Liste des blocs qui sont des plaques de pression en bois                                                                                                                      |
| `wooden_slabs`                             | Liste des blocs qui sont des dalles en bois                                                                                                                                   |
| `wooden_stairs`                            | Liste des blocs qui sont des escaliers en bois                                                                                                                                |
| `wooden_trapdoors`                         | Liste des blocs qui sont des trappes en bois                                                                                                                                  |
| `wool`                                     | Liste des blocs qui sont des laines                                                                                                                                           |
| `wool_carpets`                             | Liste des blocs qui sont des tapis de laine                                                                                                                                   |

</details>

### Variantes de chat

<details>

<summary>Liste des tags concernant les variantes de chat</summary>

| Identifiant        | Description                                                     |
|--------------------|-----------------------------------------------------------------|
| `default_spawns`   | Liste des variantes de chat pouvant apparaitre naturellement    |
| `full_moon_spawns` | Liste des variantes de chat pouvant apparaitre à la pleine lune |

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
| `freeze_immune_entity_types` | Liste des entités qui ne gèlent pas dans la poudreuse                                                    |
| `frog_food`                  | Liste des entités qui peuvent être mangées par les grenouilles                                           |
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

| Identifiant                  | Description                                                                                       |
|------------------------------|---------------------------------------------------------------------------------------------------|
| `allay_can_listen`           | Liste des évènements pouvant être écoutés par les allay's                                         |
| `ignore_vibrations_sneaking` | Liste des évènements considérés comme des vibrations, qui peuvent être masqués en s'accroupissant |
| `shrieker_can_listen`        | Liste des évènements pouvant être écoutés par les _shrieker_'s                                    |
| `vibrations`                 | Liste des évènements considérés comme des vibrations                                              |
| `warden_can_listen`          | Liste des évènements pouvant être écoutés par les warden's                                        |

</details>

### Instruments

<details>

<summary>Liste des tags concernant les instruments</summary>

| Identifiant            | Description                                                                   |
|------------------------|-------------------------------------------------------------------------------|
| `goat_horns`           | Liste des instruments des cornes de chèvres lâchées par des chèvres           |
| `regular_goat_horns`   | Liste des instruments des cornes de chèvres lâchées par des chèvres normales  |
| `screaming_goat_horns` | Liste des instruments des cornes de chèvres lâchées par des chèvres hurlantes |

</details>

### Items

<details>

<summary>Liste des tags concernant les items</summary>

| Identifiant                    | Description                                                                                      |
|--------------------------------|--------------------------------------------------------------------------------------------------|
| `acacia_logs`                  | Liste de toutes les types de buche en acajou                                                     |
| `anvil`                        | Liste de tous les types d'enclumes                                                               |
| `arrows`                       | Liste de tous les types de flèche                                                                |
| `axolotl_tempt_items`          | Liste des items permettant d'attirer des axolotl                                                 |
| `bamboo_blocks`                | Liste de toutes les types de blocs de bambou                                                     |
| `banners`                      | Liste de toutes les bannières avec leurs couleurs respective                                     |
| `beacon_payment_items`         | Liste des items pouvant être utilisés pour l'activation d'une balise                             |
| `beds`                         | Liste de tous les types de lits                                                                  |
| `birch_logs`                   | Liste de tous les types de troncs en bouleau                                                     |
| `boats`                        | Liste de tous les types de bateaux                                                               |
| `bookshelf_books`              | Liste de tous les types de bibliothèques                                                         |
| `buttons`                      | Liste de tous les types de boutons                                                               |
| `candles`                      | Liste de tous les types de bougies                                                               |
| `chest_boats`                  | Liste de tous les types de bateaux avec coffre                                                   |
| `cluster_max_harvestables`     | Liste des outils permettant de récolter efficacement de l'améthyste                              |
| `coals`                        | Liste de tous les types de charbon                                                               |
| `coal_ores`                    | Liste des minerais de charbon                                                                    |
| `compasses`                    | Liste de tous les types de boussoles                                                             |
| `completes_find_tree_tutorial` | Liste des types de blocs permettant de completer le tutoriel `find_tree`                         |
| `copper_ores`                  | Liste des minerais de cuivre                                                                     |
| `creeper_drop_music_discs`     | Liste de tous les disques pouvant être _dropés_ par un creeper quand il est tué par un squelette |
| `crimson_stems`                | Liste de tous les types de troncs carmins                                                        |
| `dampens_vibrations`           | Liste de tous les types de blocs absorbant les vibrations qui le touchent                        |
| `dark_oak_logs`                | Liste de tous les types de troncs en chêne noir                                                  |
| `diamond_ores`                 | Liste des minerais de diamant                                                                    |
| `dirt`                         | Liste de tous les types de terre                                                                 |
| `doors`                        | Liste de tous les types de porte                                                                 |
| `emerald_ores`                 | Liste des minerais d'émeraude                                                                    |
| `fences`                       | Liste de tous les types de barrières                                                             |
| `fence_gates`                  | Liste de tous les types de portillons                                                            |
| `fishes`                       | Liste de tous les types de poissons                                                              |
| `flowers`                      | Liste de tous les types de fleurs                                                                |
| `fox_food`                     | Liste des items que le renard peut manger                                                        |
| `freeze_immune_wearables`      | Liste de tous les item pouvant être portés qui immunisent contre le froid                        |
| `gold_ores`                    | Liste des minerais d'or                                                                          |
| `ignored_by_piglin_babies`     | Liste des items ignorés par les bébés piglins                                                    |
| `hanging_signs`                | Liste de tous les types de pancartes suspendues                                                  |
| `iron_ores`                    | Liste des minerais de fer                                                                        |
| `jungle_logs`                  | Liste de tous les types de troncs en acajou                                                      |
| `lapis_ores`                   | Liste des minerais de lapis lazuli                                                               |
| `leaves`                       | Liste de tous les types de feuilles                                                              |
| `lectern_books`                | Liste de tous les types de livres pouvant être posés sur un pupitre de lecture                   |
| `logs`                         | Liste de tous les types de troncs (avec ou sans écorse, etc...)                                  |
| `logs_that_burn`               | Liste des tous les types de troncs combustibles                                                  |
| `mangrove_logs`                | Liste des tous les types de troncs en palétuvier                                                 |
| `music_discs`                  | Liste de tous les disques de musique                                                             |
| `non_flammable_wood`           | Liste des tous les types de bois non combustibles                                                |
| `oak_logs`                     | Liste de tous les types de troncs en chêne                                                       |
| `overworld_natural_logs`       | Liste de tous les types de troncs naturellement présent dans le monde normal                     |
| `piglin_food`                  | Liste des items que mangent les piglins                                                          |
| `piglin_loved`                 | Liste des items que les Piglins accepte pour faire un échange                                    |
| `piglin_repellents`            | Liste des items qui repoussent les piglins                                                       |
| `planks`                       | Liste de tous les types de planches                                                              |
| `rails`                        | Liste de tous les types de rails                                                                 |
| `redstone_ores`                | Liste des minerais de redstone                                                                   |
| `sand`                         | Liste de tous les types de sables                                                                |
| `saplings`                     | Liste de tous les types de pousses d'arbre                                                       |
| `signs`                        | Liste de tous les types de panneaux                                                              |
| `slabs`                        | Liste de tous les types de dalles                                                                |
| `small_flowers`                | Liste de tous les types de _petites_ fleurs                                                      |
| `soul_fire_base_blocks`        | Liste des items produisant du feu bleu                                                           |
| `spruce_logs`                  | Liste de tous les types de troncs en sapin                                                       |
| `stairs`                       | Liste de tous les types d'escaliers                                                              |
| `stone_bricks`                 | Liste de tous les types de pierres taillées                                                      |
| `stone_crafting_materials`     | Liste des items permettant de crafter les objets à base de pierre                                |
| `stone_tool_materials`         | Liste des items permettant de crafter les outils et armes en roche                               |
| `tall_flowers`                 | Liste de tous les types de fleurs haute                                                          |
| `terracotta`                   | Liste de tous les types de terres cuites                                                         |
| `trapdoors`                    | Liste de tous les types de trappes                                                               |
| `walls`                        | Liste de tous les types de murets                                                                |
| `warped_stems`                 | Liste de tous les types de troncs biscornus                                                      |
| `wart_blocks`                  | Liste de tous les types de blocs de verrues                                                      |
| `wooden_buttons`               | Liste de tous les types de boutons en bois                                                       |
| `wooden_doors`                 | Liste de tous les types de portes en bois                                                        |
| `wooden_fences`                | Liste de tous les types de barrières en bois                                                     |
| `wooden_pressure_plates`       | Liste de tous les types de plaques de pression en bois                                           |
| `wooden_slabs`                 | Liste de tous les types de dalles en bois                                                        |
| `wooden_stairs`                | Liste de tous les types d'escaliers en bois                                                      |
| `wooden_trapdoors`             | Liste de tous les types de trappes en bois                                                       |
| `wool`                         | Liste de tous les types de laines                                                                |
| `wool_carpets`                 | Liste de tous les types de tapis en laine                                                        |

</details>

### Variantes de peinture

<details>

<summary>Liste des tags concernant les variantes de peinture</summary>

| Identifiant | Description                                              |
|-------------|----------------------------------------------------------|
| `placeable` | Liste des variantes de peinture plaçables en mode survie |

</details>

### Points d'intérêt

<details>

<summary>Liste des tags concernant les variantes de points d'intérêt</summary>

| Identifiant           | Description                                              |
|-----------------------|----------------------------------------------------------|
| `acquirable_job_site` | Liste des points d'intérêt recherchés par les villageois |
| `bee_home`            | Liste des points d'intérêt ciblés par les abeilles       |
| `village`             | Liste des points d'intérêt qui font partie d'un village  |

</details>

### Biomes

:::caution
Le dossier pour ces tags est contenu dans le dossier `worldgen` qui est lui-même contenu dans le dossier `tags`
:::

<details>

<summary>Liste des tags concernant les biomes</summary>

| Identifiant                                 | Description                                                                                                          |
|---------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| `has_structure\ancient_city`                | Liste des biomes pouvant contenir des cités antiques                                                                 |
| `has_structure\bastion_remnant`             | Liste des biomes pouvant contenir des ruines de bastion                                                              |
| `has_structure\buried_treasure`             | Liste des biomes pouvant contenir des trésors enfouis                                                                |
| `has_structure\desert_pyramid`              | Liste des biomes pouvant contenir des pyramides                                                                      |
| `has_structure\end_city`                    | Liste des biomes pouvant contenir des villes de l'End                                                                |
| `has_structure\igloo`                       | Liste des biomes pouvant contenir des igloos                                                                         |
| `has_structure\jungle_temple`               | Liste des biomes pouvant contenir des temples de la jungle                                                           |
| `has_structure\mineshaft`                   | Liste des biomes pouvant contenir des mines abandonnées                                                              |
| `has_structure\mineshaft_mesa`              | Liste des biomes pouvant contenir des mines abandonnées du mesa                                                      |
| `has_structure\nether_fortress`             | Liste des biomes pouvant contenir des forteresses du Nether                                                          |
| `has_structure\nether_fossil`               | Liste des biomes pouvant contenir des fossiles du Nether                                                             |
| `has_structure\ocean_monument`              | Liste des biomes pouvant contenir des monuments océaniques                                                           |
| `has_structure\ocean_ruin_cold`             | Liste des biomes pouvant contenir des ruines océaniques d'eaux froides                                               |
| `has_structure\ocean_ruin_warm`             | Liste des biomes pouvant contenir des ruines océaniques d'eaux chaudes                                               |
| `has_structure\pillager_outpost`            | Liste des biomes pouvant contenir des avant-postes de pillards                                                       |
| `has_structure\ruined_portal_desert`        | Liste des biomes pouvant contenir des ruines de portail du désert                                                    |
| `has_structure\ruined_portal_jungle`        | Liste des biomes pouvant contenir des ruines de portail de la jungle                                                 |
| `has_structure\ruined_portal_mountain`      | Liste des biomes pouvant contenir des ruines de portail des montages                                                 |
| `has_structure\ruined_portal_nether`        | Liste des biomes pouvant contenir des ruines de portail du Nether                                                    |
| `has_structure\ruined_portal_ocean`         | Liste des biomes pouvant contenir des ruines de portail de l'océan                                                   |
| `has_structure\ruined_portal_standard`      | Liste des biomes pouvant contenir des ruines de portail _standard_                                                   |
| `has_structure\ruined_portal_swamp`         | Liste des biomes pouvant contenir des ruines de portail des marais                                                   |
| `has_structure\shipwreck`                   | Liste des biomes pouvant contenir des épaves                                                                         |
| `has_structure\shipwreck_beached`           | Liste des biomes pouvant contenir des bateaux échoués sur une plage                                                  |
| `has_structure\stronghold`                  | Liste des biomes pouvant contenir des forts de l'End                                                                 |
| `has_structure\swamp_hut`                   | Liste des biomes pouvant contenir des huttes de sorcière                                                             |
| `has_structure\village_desert`              | Liste des biomes pouvant contenir des villages du désert                                                             |
| `has_structure\village_plains`              | Liste des biomes pouvant contenir des villages de la plaine                                                          |
| `has_structure\village_savanna`             | Liste des biomes pouvant contenir des villages de la savane                                                          |
| `has_structure\village_snowy`               | Liste des biomes pouvant contenir des villages enneigés                                                              |
| `has_structure\village_taiga`               | Liste des biomes pouvant contenir des villages de la taïga                                                           |
| `has_structure\woodland_mansion`            | Liste des biomes pouvant contenir des manoirs de la forêt                                                            |
| `allows_surface_slime_spawns`               | Liste des biomes dans lesquels les slimes peuvent apparaitre en surface                                              |
| `allows_tropical_fish_spawns_at_any_height` | Liste des biomes dans lesquels les poissons tropicaux peuvent apparaitre dans les lacs à n'importe quel altitude     |
| `has_closer_water_fog`                      | Liste des biomes dans lesquels la distance de vue sous l'eau est réduite                                             |
| `is_badlands`                               | Liste des biomes de type _badland_                                                                                   |
| `is_beach`                                  | Liste des biomes _plage_                                                                                             |
| `is_deep_ocean`                             | Liste des biomes de type _océan profond_                                                                             |
| `is_end`                                    | Liste des biomes de l'End                                                                                            |
| `is_forest`                                 | Liste des biomes de type _forêt_                                                                                     |
| `is_hill`                                   | Liste des biomes _collines_                                                                                          |
| `is_jungle`                                 | Liste des biomes de type _jungle_                                                                                    |
| `is_mountain`                               | Liste des biomes de type _montagne_                                                                                  |
| `is_nether`                                 | Liste des biomes du Nether                                                                                           |
| `is_ocean`                                  | Liste des biomes océaniques                                                                                          |
| `is_overworld`                              | Liste des biomes du monde normal                                                                                     |
| `is_river`                                  | Liste des différents type de _rivières_                                                                              |
| `is_savanna`                                | Liste des biomes de type _savane_                                                                                    |
| `is_taiga`                                  | Liste des biomes de type _taïga_                                                                                     |
| `mineshaft_blocking`                        | Liste des biomes où les mines abandonnées sont bloquées                                                              |
| `more_frequent_drowned_spawns`              | Liste des biomes dans lesquels la quantité d'apparition de noyé est plus importante que les autres                   |
| `only_allows_snow_and_gold_rabbits`         | Liste des biomes dans lesquels les lapins qui apparaissent sont de couleur beige uniquement                          |
| `plays_underwater_music`                    | Liste des biomes dans lesquels le jeu joue des musiques spécifiques à l'ambiance sous-marine                         |
| `polar_bears_spawn_on_alternate_blocks`     | Liste des biomes dans lesquels les ours polaires peuvent apparaitre                                                  |
| `produces_corals_from_bonemeal`             | Liste des biomes dans lesquels des coraux sont produit après l'utilisation d'engrais                                 |
| `reduce_water_ambient_spawns`               | Liste des biomes dans lesquels la quantité d'apparition de créature marine est réduite par rapport aux autres biomes |
| `required_ocean_monument_surrounding`       | Liste des biomes qui doivent être autour d'un monument sous-marin                                                    |
| `spawns_cold_variant_frogs`                 | Liste des biomes dans lesquels une grenouille aura une variante de biome froid quand elle est générée/elle grandit   |
| `spawns_warm_variant_frogs`                 | Liste des biomes dans lesquels une grenouille aura une variante de biome chaud quand elle est générée/elle grandit   |
| `stronghold_biased_to`                      | Liste des biomes qui contrôle la génération des forts de l'End                                                       |
| `water_on_map_outlines`                     | Liste des biomes qui sont considéré comme étant des océans sur les cartes aux trésors                                |
| `without_patrol_spawns`                     | Liste des biomes où les patrouilles ne peuvent pas apparaitre                                                        |
| `without_wandering_trader_spawns`           | Liste des biomes où les marchands ambulants ne peuvent pas apparaitre                                                |
| `without_zombie_sieges`                     | Liste des biomes où les attaques de zombies ne peuvent pas être lancées                                              |

</details>

### Générateurs de niveau plat préréglés

:::caution
Le dossier pour ces tags est contenu dans le dossier `worldgen` qui est lui-même contenu dans le dossier `tags`
:::

<details>

<summary>Liste des tags concernant les générateurs de niveau plat préréglés</summary>

| Identifiant | Description                                                                  |
|-------------|------------------------------------------------------------------------------|
| `visible`   | Liste des générateurs visibles sur l'écran de configuration des mondes plats |

</details>

### Structures

:::caution
Le dossier pour ces tags est contenu dans le dossier `worldgen` qui est lui-même contenu dans le dossier `tags`
:::

<details>

<summary>Liste des tags concernant les structures</summary>

| Identifiant                 | Description                                                        |
|-----------------------------|--------------------------------------------------------------------|
| `cats_spawn_as_black`       | Liste des structure où les chats noirs peuvent apparaitre          |
| `cats_spawn_in`             | Liste des structure où les chats peuvent apparaitre                |
| `dolphin_located`           | Liste des structure pouvant être localisées par un dauphin         |
| `eye_of_ender_located`      | Liste des structures pouvant être localisées par un œil de l'Ender |
| `mineshaft`                 | Listes des structures qui sont des puits de mine abandonnée        |
| `ocean_ruin`                | Listes des structures qui sont des ruines d'océan                  |
| `on_ocean_explorer_maps`    | Liste des structures visibles sur les cartes au trésor marines     |
| `on_treasure_maps`          | Liste des structures visibles sur les cartes au trésor             |
| `on_woodland_explorer_maps` | Liste des structures visibles sur les cartes au trésor forestières |
| `ruined_portal`             | Listes des structures qui sont des portails en ruines              |
| `shipwreck`                 | Listes des structures qui sont des épaves de navire                |
| `village`                   | Listes des structures qui sont des villages                        |

</details>

### Préréglages du monde

:::caution
Le dossier pour ces tags est contenu dans le dossier `worldgen` qui est lui-même contenu dans le dossier `tags`
:::

<details>

<summary>Liste des tags concernant les préréglages du monde</summary>

| Identifiant | Description                                                                                              |
|-------------|----------------------------------------------------------------------------------------------------------|
| `extended`  | Liste des préréglages du monde qui apparaissent uniquement lorsque vous maintenez la touche Alt enfoncée |
| `normal`    | Liste des préréglages du monde qui apparaissent dans le menu de configuration à la création d'un monde   |

</details>