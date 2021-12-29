---
sidebar_position: 2
title: Base du mod
description: Comment installer les bases du mod ?
tags: [bases]
---

## Introduction

À la création de votre mod, vous aurez besoin de créer sa base.
Pour cela on va avoir besoin de créer la classe principale et
modifier le mods.toml de quoi pouvoir faire détecter votre mod à Forge.

## Classe principale

### Organisation

Pour commencer, dans le dossier *src/main/java*, vous pouvez supprimer les packages d'exemple. On n'en aura pas besoin, on va tout reprendre de zéro.
Il va falloir bien organiser notre mod dès le départ pour éviter que ce soit vite le bazar.  
Pour cela on va nommer l'arborescence de nos packages de la même sorte qu'un nom de domaine d'un site web, mais dans le sens inverse.
Par exemple dans mon cas `fr.zom.testmod`. On repère la langue du développeur avec `fr`, le pseudo `zom` ainsi que le nom du mod `testmod`.

:::caution
Il est fortement déconseillé d'utiliser des accents ainsi que des majuscules
:::

Une fois les packages créés, vous pouvez créer une classe à laquelle on donne le nom de notre mod avec une majuscule au début.
Par exemple : `TestMod`

:::warning
Dans cet article je suivrai la convention PascalCase.
:::

### Code

On va s'attaquer au code maintenant.

```java
@Mod(TestMod.MODID)
public class TestMod {

    public static final String MODID = "testmod";

    public TestMod()
    {
       IEventBus bus = FMLJavaModLoadingContext.get().getModEventBus();
       
       bus.addListener(this::setup);
       bus.addListener(this::clientSetup); 
    }
    
    public void setup(FMLCommonSetupEvent e)
    {
    }
    
    public void clientSetup(FMLClientSetupEvent e)
    {
    }
    

}

```

Décomposons le code petit à petit.

````java
@Mod(TestMod.MODID)
public class TestMod {
````

Tout d'abord, nous devons ajouter l'annotation *@Mod* avec en paramètre le modid,
soit l'identifiant de notre mod pour signaler à Forge que notre mod est présent.

:::caution
Il est fortement conseillé de mettre votre modid dans une variable final de sorte à ce que vous n'ayez pas à retaper à la main votre modid et ainsi limiter les erreurs (et en plus c'est pas hard-codé et ça c'est bien !). Et veillez également à ne pas mettre de majuscules en écrivant votre modid !
:::

````java
    public void setup(FMLCommonSetupEvent e)
    {
    }
    
    public void clientSetup(FMLClientSetupEvent e)
    {
    }
````

Ici j'ai sauté quelques lignes, on reviendra sur le constructeur plus haut un peu après.
Les deux méthodes que nous avons créé juste ici serviront à certaines fonctions, notamment
pour la génération de minerais ou encore le changement de rendu de certains blocs/items
par exemple. La méthode *setup* servira pour les fonctionnalités côté serveur.
La méthode *clientSetup* quant à elle, servira pour le côté client, d'où son nom.

````java
    public TestMod()
    {
       IEventBus bus = FMLJavaModLoadingContext.get().getModEventBus();
       
       bus.addListener(this::setup);
       bus.addListener(this::clientSetup); 
    }
````

Enfin, dans le constructeur, nous indiquons à Forge que nous "écoutons" les events *FMLCommonSetupEvent* et *FMLClientSetupEvent* quand ils sont appelés.
Grossièrement, on exécute les méthodes *setup* et *clientSetup* lorsque Forge mets en place le jeu et le client spécifiquement pour l'event *FMLClientSetupEvent*.

:::tip
La variable **bus** nous servira dans les tutoriels suivants pour enregistrer nos items et blocs.
:::

On en a fini avec le code. Il n'y a pas grand chose pour le moment, juste de quoi
lancer le jeu avec notre mod pour être détecté par Forge. Il nous reste plus qu'à remplir la
"carte d'identité" de notre mod.

## mods.toml

Cette fois-ci, on va se rendre dans le dossier *src/main/resources* et vous devriez
trouver le fichier [mods.toml](../bases/mods_toml) dans le dossier *META-INF*.
Ce dernier contient toutes les informations pour identifier votre mod. On va passer en revue ici les informations les plus importantes du fichier.

### Modid

````text
# The modid of the mod
modId="testmod" #mandatory
````

Ligne 18 du fichier, vous devriez avoir la propriété *modId* où entre guillemets
vous notez **exactement** la même chose que dans la variable créée précédemment dans
votre classe principale. Pour ma part ce sera **"testmod"**.

### Nom du mod

````text
# A display name for the mod
displayName="TestMod" #mandatory
````

Ligne 26, on a accès à la forme que le prendra le nom du mod dans la liste
des mods de Forge. Ici vous avez plus de libertés que pour le modid, vous
pouvez insérer des espaces, des majuscules et même des accents.

### Crédits

````text
# A text field displayed in the mod UI
credits="Tutoriel réalisé pour LMF" #optional
# A text field displayed in the mod UI
authors="Zom'" #optional
````

Ligne 29, vous pouvez indiquer des remerciements particuliers comme pour les
graphistes et les différents contributeurs au mod dans les *credits*. Vous
pouvez également renseigner les auteurs du mod dans *authors*.

### Description

````text
# The description text for the mod (multi line!) (#mandatory)
description='''
Ceci est la 
description sur plusieurs lignes
du mod.
'''
````

Ligne 33 est renseignée la description du mod que vous pourrez retrouver
dans la liste des mods quand vous sélectionner le votre. Vous pouvez
y décrire de manière conscise ce qu'ajoute votre mod au jeu.

> À vous de jouer ! Il ne vous reste plus qu'à lancer la configuration
*runClient* dans votre IDE et voir dans la liste des mods
si votre mod est présent !
