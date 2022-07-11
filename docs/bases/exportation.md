---
sidebar_position: 5
title: Exporter le mod
description: Comment exporter le mod ?
tags: [bases]
---

Exporter le mod ou le compiler est nécessaire si vous voulez partager votre mod,
ou même jouer avec dans un modpack ou sur un serveur avec vos amis. Vous avez besoin
du *.jar*, et c'est ce qu'on va chercher à obtenir dans cette section.  
Pour cela on va configurer certaines choses dans le *build.gradle*.

## Configuration du build.gradle

:::tip
Vous pouvez trouver le *build.gradle* dans votre dossier principal
:::

Proche de la ligne 15, vous trouverez trois paramètres qui vont nous intéresser : 
``version``, ``group`` et ``archivesBaseName``.

````text
version = '1.0'
group = 'fr.zom.testmod'
archivesBaseName = 'TestMod'
````

### Version

Tout d'abord, nous avons la version de notre mod. Le paramètre est assez clair.
Il sert tout simplement à spécifier la version de votre mod.

````text
version = '1.0'
````

Ici la version de mon mod est 1.0. N'oubliez pas les guillemets !

### Group

On passe maintenant au group qui est le package contenant l'ensemble
de votre code dans le dossier *src/main/java*.  
(C'est souvent le package où votre classe principale est située.)

````text
group = 'fr.zom.testmod'
````

Pour ma part voici le chemin des sources de mon mod.

### Nom de l'archive

Enfin, dernier paramètre qui sera le nom que vous donnez au *.jar* quand vous l'exporterez.

````text
archivesBaseName = 'TestMod'
````

Le nom complet du *.jar* sera le nom que vous mettez juste ici accompagné de la version
qu'on a changé plus haut.

## Exportation

Pour exporter votre mod, rien de plus simple, dans votre IDE, il vous suffit de lancer
la tâche gradle `build`, ou dans la console `gradlew build`.

:::caution
Veillez à ne laisser aucune erreur dans votre code lorsque vous exporter votre mod
autrement le build ne fonctionnera pas !
:::

:::tip
Pour retrouver le *.jar* généré, rendez vous dans votre dossier principal, puis dans
`build/libs` et vous trouverez par exemple : `TestMod-1.0.jar`.
:::