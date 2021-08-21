---
sidebar_position: 1
title: Introduction
---

# Prérequis

- [Installation de la workspace](../bases/installation.md)
- [Base du mod](../bases/base_du_mod.md)
- Savoir utiliser un event

## Introduction

Depuis la 1.8, Minecraft voit de plus en plus de ses fonctionnalités mises sous forme de
json. Par exemple : les modèles de blocs/items, les loot tables, les recipes, etc...
Et vous devez savoir comme il est pénible d'écrire du json à la main. C'est un problème
que même Mojang eut et suite à cela, les développeurs du jeu mirent à disposition du
code permettant de générer (presque) automatiquement tous ces jsons.

Ce sont les **Data Generators**.

Dans cet article nous verrons simplement les prérequis pour utiliser ces dits générateurs.
Nous ne verrons pas l'ensemble des générateurs dans cette même section. Cependant, une
section sera dédiée pour l'ensemble des générateurs disponibles !

## GatherDataEvent

Un event a été créé exprès par Forge pour que l'on puisse utiliser les générateurs.
Nous allons créer une classe spécifique pour aérer notre code et éviter de surcharger
notre classe principale (ce choix est pûrement personnel, à vous de choisir ce qui
vous convient le mieux)

Dans un nouveau package `data`, on va créer une classe `DataGen` et y écrire :

````java
@Mod.EventBusSubscriber(modid = Testmod.MODID, bus = Mod.EventBusSubscriber.Bus.MOD)
public class DataGen {

    public static final ExistingFileHelper IGNORING_FILES_EFH = new ExistingFileHelper(Collections.emptyList(), Sets.newConcurrentHashSet(), false, null, null);

    @SubscribeEvent
    public static void dataGen(GatherDataEvent e)
    {
        DataGenerator generator = e.getGenerator();
    }
}
````

Allons-y pas à pas pour les explications.

````java
@Mod.EventBusSubscriber(modid = Testmod.MODID, bus = Mod.EventBusSubscriber.Bus.MOD)
````

Tout d'abord, nous avons l'annotation ``@Mod.EventBusSubscriber`` qui permets de signaler
à Forge la présence de notre classe et que cette dernière écoute des évènements.
Utiliser cette annotation nous permet d'enregistrer tous les méthodes statiques de notre
classe ayant un event de Forge en paramètre et l'annotation `@SubscribeEvent`.

````java
public static final ExistingFileHelper IGNORING_FILES_EFH = new ExistingFileHelper(Collections.emptyList(), Sets.newConcurrentHashSet(), false, null, null);
````

Ici, je crée une variable de type `ExistingFileHelper` qui me servira pour mes différents
générateurs à l'avenir. Initialement, les générateurs vérifient que certains fichiers existent
lorsqu'on génére un asset. Par exemple, pour les modèles d'item, si la texture n'est pas
présente dans les fichiers du mod, le générateur renvoie une erreur. Cette fonctionnalité
peut être utile dans certains cas, mais dans le nôtre, ignorer ses vérifications
nous facilitera le travail.

````java
@SubscribeEvent
public static void dataGen(final GatherDataEvent e)
{
    DataGenerator generator = e.getGenerator();
}
````

Enfin, on termine par la méthode qui nous intéresse le plus, celle qui contiendra tous
nos générateurs.

:::caution
Veillez bien à ce que l'annotation @SubscribeEvent soit présente, et à ce que la méthode
soit statique !
:::

Il nous faut également un paramètre de type `GatherDataEvent` qui est l'event clé comme
précisé plus haut.

Dernière chose, on crée une variable de type `DataGenerator` faisant référence au générateur
de l'event que l'on gardera bien au chaud pour les différents générateurs.

## "build.gradle"

Il reste un petit détail pour éviter tout problème dans votre ``build.gradle``.
Rendez vous vers la ligne 99. Vous devriez repérer cette ligne :

````text
args '--mod', 'testmod', '--all', '--output', file('src/generated/resources/'), '--existing', file('src/main/resources/')
````

La seule chose à changer est la deuxième paire de guillemets où vous devez insérer
votre modid. Dans mon cas c'est ``testmod``.

Une fois cela fait, relancez la tâche gradle `genIntellijRuns` si vous êtes sur IntelliJ
ou bien `genEclipseRuns` si vous êtes sur Eclipse.

:::tip
Désormais pour vérifier si tout fonctionne bien, vous pouvez insérer un *print* dans la
méthode ``dataGen`` et exécuter la configuration ``runData`` dans votre IDE pour voir si votre
message s'affiche bien.
:::