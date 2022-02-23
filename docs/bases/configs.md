---
sidebar_position: 5
title: Configurations
description: Comment créer des configurations pour son mod ?
tags: [bases]
---

Les configurations sont une partie essentielle de l'api [MinecraftForge](http://minecraftforge.net/). En effet, celle-ci permet ensuite au joueur de configurer certaines valeurs données depuis un fichier crée par le jeu.

Nous allons voir ici comment en rajouter à votre mod pour permettre aux joueurs l'utilisant de personnaliser certains points.

## Création

```java
public static ForgeConfigSpec.Builder BUILDER = new ForgeConfigSpec.Builder();
```

Pour définir des champs dans la configuration souhaitée, il suffit de créer des variables comme celle ci-dessous :

```java
public static ForgeConfigSpec.IntValue INT_CONFIG;
```

Pour ensuite les définir comme suit (avec le nom, la valeur par default, la valeur minimum et celle maximum) :

```java
INT_CONFIG = BUILDER.defineInRange("int_config", 10, 1, 40);
```

Cependant, plusieurs types de valeurs sont disponibles comme celles ci-dessous : 

- ForgeConfigSpec.IntValue
- ForgeConfigSpec.DoubleValue
- ForgeConfigSpec.LongValue
- ForgeConfigSpec.BooleanValue
- ForgeConfigSpec.EnumValue

### IntValue

Ce type de champ peut être défini grace aux méthodes `.defineInRange(...)`

### DoubleValue

Ce type de champ peut être défini grace aux méthodes `.defineInRange(...)`

### LongValue

Ce type de champ peut être défini grace aux méthodes `.defineInRange(...)`

### BooleanValue

Ce type de champ peut être défini grace aux méthodes `.define(...)`

### EnumValue

Ce type de champ peut être défini grace aux méthodes `.defineEnum(...)`

Il est ensuite possible de récupérer la valeur d'un champ (définit par une variable dans le code) avec un `.get()`

## Enregistrement

```java
ModLoadingContext.get().registerConfig(type, spec);
```

Ici nous avons deux arguments, le premier est le type de configuration (il en existe 3, **CLIENT**, **SERVER** et **COMMON**) et le deuxième quant à lui est le _spec_ crée plus tôt.

Dans notre cas, pour une configuration côté client, nous obtiendrons cette ligne :

```java
ModLoadingContext.get().registerConfig(ModConfig.Type.CLIENT, CLIENT_BUILDER.build());
```