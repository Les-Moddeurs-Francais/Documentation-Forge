---
sidebar_position: 1
title: Ressources
description: Quelles sont les différentes ressources de Minecraft ?
hide_table_of_contents: true
tags: [bases]
---

Tous les dossiers (et donc les ressources associées) cités ici doivent se trouver dans le dossier `/src/main/resources/`.

## Blockstates

Les _blockstates_ sont définies par des fichiers JSON se trouvant dans le dossier `/assets/<modid>/blockstates`.

## Traductions

Les traductions sont définies dans des fichiers JSON dont le nom dépend du [_code de la langue_](https://minecraft.fandom.com/wiki/Language) visé, se trouvant dans le dossier `/assets/<modid>/lang`.

## Modèles

Les modèles sont définies par des fichiers JSON.
Ils peuvent se trouver dans deux dossiers différents, si cela concerne les blocs, le dossier concerné sera `/assets/<modid>/models/block` et si cela concerne les items, le dossier concerné sera `/assets/<modid>/models/item`.

## Textures

Les textures sont des fichiers PNG se trouvant dans un sous dossier du dossier `assets/<modid>/textures`.

## [Recettes](recipe)

Les recettes sont définies par des fichiers JSON se trouvant dans le dossier `/data/<modid>/recipes`.

## Progrès

Les progrès sont définis par des fichiers JSON se trouvant dans le dossier `/data/<modid>/advancements`.

## Tables de butin

Les tables de butin sont définis par des fichiers JSON se trouvant dans le dossier `/data/<modid>/loot_tables` (des sous dossiers sont attendus selon si cela concerne les blocs (`blocks`), les coffres (`chests`) ou mêmes les entités (`entities`)).

## Tags

Les _tags_ sont définis par des fichiers JSON se trouvant dans le dossier `/data/<modid>/tags` (des sous dossiers sont attendus selon si cela concerne les blocs (`blocks`), les items (`items`), les types d'entité (`entity_types`), les fluides (`fluids`) ou même les événements (`game_events`)).