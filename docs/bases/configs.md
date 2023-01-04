---
sidebar_position: 5
title: Configurations
description: Comment ajouter un fichier de configuration à son mod ?
tags: [bases]
---

Il sera parfois utile d'avoir une configuration pour votre mod. Que ce soit pour que vous puissiez tester certaines
fonctionnalités ou même permettre aux joueurs de personnaliser leur expérience de jeu.

Grâce aux fichiers de configuration, les joueurs pourront moduler certaines valeurs de votre mod et ainsi avoir une
version propre à eux de votre mod sans qu'ils aient à le recompiler.

:::tip
Par exemple, le nombre de minerais dans un filon de votre nouveau minerai, les dégâts d'une certaine épée, le nombre de
points de vie d'un mob, etc...
:::

## Classe de configuration

Nous aurons besoin d'une seule classe pour cela. Une classe qui sera plutôt conséquente en nombre de lignes, mais assez
simple en fin de compte.

Allons-y progressivement. Créez une classe ``ModConfig`` avec trois classes imbriquées : `Client`, `Server` et `Common`.

```java
public class ModConfig {
    
    public static class Client{
        
    }
    
    public static class Server{
        
    }
    
    public static class Common{
        
    }
    
}
```

### Client

On commence par la partie client qui va répertorier toutes les variables qui touchent le côté éponyme du jeu.
Ce seront des valeurs qui serviront à moduler le rendu graphique du jeu.

```java

public static class Client {
    
    public final ForgeConfigSpec.BooleanValue showGuiOnDeath;
    
    Client(ForgeConfigSpec.Builder builder){
        builder.comment("Client Configuration for TestMod")
                .push("client");
        
        showGuiOnDeath = builder.define("guiOnDeath", true);
        
        builder.pop();
    }
    
}
```

Ici j'ai créé une variable ``showGuiOnDeath`` de type ``ForgeConfigSpec.BooleanValue`` qui est simplement une valeur
boolénne dans la config. Je n'implémenterai pas sa fonction dans cette partie, mais imaginez que ce paramètre définit si
on affiche l'écran de mort du joueur à sa mort (ce qui semble logique 😅).

Dans le constructeur, on indique en paramètre le ``builder`` qui est l'objet qui représente notre fichier de config 
(qui sera ensuite *sérialisé* en .toml).

Sa méthode ``comment``, comme son nom l'indique, insère un commentaire dans le fichier, ce qui est bien utile pour la
lisibilité de votre config. La méthode ``push`` quant à elle fait office de catégorie et permet de regrouper différentes
valeurs d'un même thème.

Ensuite, on affecte la valeur de la config à notre variable `showGuiOnDeath` que l'on pourra utiliser dans notre code.
La méthode `define` prend deux paramètres : le nom affiché dans la config (ici `"guiOnDeath"`) et sa
valeur par défaut (ici `true`).

Enfin, la méthode `pop` indique que l'on a terminé la catégorie actuelle de notre config (ici `'push'`)

<br/>

> **Voilà le schéma de nos trois classes. Elles seront toutes de la même forme, seul le fond différera.**

### Server

On retrouve pour la classe `Server` le même pattern de classe. C'est sûrement cette classe qui va vous intéresser en
premier lieu, car c'est dans celle-ci que l'on mettra les valeurs qui influeront le comportement du jeu.

```java
public static class Server {

    public final ForgeConfigSpec.IntValue timeoutAFK;
    public final ForgeConfigSpec.IntValue damageCustomSword;

    Server(ForgeConfigSpec.Builder builder) {

        builder.comment("Server configuration")
                .push("server");

        builder.comment("Amount of seconds before player timeout");
        timeoutAFK = builder.defineInRange("timeoutAFK", 300, 0, 3600);
        
        builder.comment("Amount of damage for the custom sword");
        damageCustomSword = builder.defineInRange("dmgCustomSword", 4, 4, 10);

        builder.pop();
    }
}
```

Si vous avez compris comment ça marche, alors vous avez vu qu'on a une variable pour un hypothétique compte à rebours
avant le kick d'un joueur, ainsi qu'une variable modulant les dégâts d'une potentielle épée.

> **Vous remarquerez que les valeurs numériques sont définies sur un intervalle que vous imposez ! (ex: de 4 à 10 pour 
> 'dmgCustomSword')**

### Common

La classe `Common` est assez floue. L'entièreté des paramètres dans cette config ont été dépréciés dans les dernières
versions de Forge. On pourrait s'en passer pour le moment, mais sachez qu'elle est utile pour des choses "générales" de
votre mod. Voyez ça comme le choix par défaut si un de vos paramètres ne rentre pas dans la case client ou serveur.

## Enregistrement

Avant de pouvoir utiliser notre config, il va falloir l'enregistrer dans notre mod.

```java
public static final ForgeConfigSpec clientSpec;
public static final Client client;

static {
    final Pair<Client, ForgeConfigSpec> specPair = new ForgeConfigSpec.Builder().configure(Client::new);
    client = specPair.getLeft();
    clientSpec = specPair.getRight();
}

public static final ForgeConfigSpec serverSpec;
public static final Server server;

static {
    final Pair<Server, ForgeConfigSpec> specPair = new ForgeConfigSpec.Builder().configure(Server::new);
    server = specPair.getLeft();
    serverSpec = specPair.getRight();
}

public static final ForgeConfigSpec commonSpec;
public static final Common common;

static {
    final Pair<Common, ForgeConfigSpec> specPair = new ForgeConfigSpec.Builder().configure(Common::new);
    common = specPair.getLeft();
    commonSpec = specPair.getRight();
}

@SubscribeEvent
public static void modLoading(final ModConfigEvent.Loading e) {
    LogManager.getLogger().debug(Logging.PREPVID_CONFIG, "Config Loaded");
}
```

Je vous l'accorde, à première vue ce gros bout code n'est pas très fameux, mais en le décomposant ce n'est finalement
pas si compliqué (promis 😅).

```java
public static final ForgeConfigSpec clientSpec;
public static final Client client;

static {
    final Pair<Client, ForgeConfigSpec> specPair = new ForgeConfigSpec.Builder().configure(Client::new);
    client = specPair.getLeft();
    clientSpec = specPair.getRight();
}
```

Vous l'aurez peut-être remarqué, mais il y a trois portions de code qui se ressemble, et celle ci-dessus est l'une
d'entre-elles.

Premièrement, on déclare deux variables `clientSpec` et `client`. La variable `clientSpec` servira à enregister la
config dans le mod. C'est à partir de `client` que nous pourrons récupérer nos valeurs. Ensuite dans un bloc statique
qui s'exécute à la lecture de la classe on affecte les valeurs des deux variables via la méthode `configure`. Elle nous
renvoie un `Pair` qui équivaut à un tuple en Python.

<br/>

:::tip
Faites de même pour le serveur et le common. Ça sera un bon moyen de voir si vous avez compris le truc 😉!
:::

<br/>

Il ne reste plus qu'à enregistrer nos configs dans la classe principale de notre mod (dans son constructeur).

```java
ModLoadingContext modLoadingContext = ModLoadingContext.get();

// Configs

final String configFolder = "prepvid/";

modLoadingContext.registerConfig(net.minecraftforge.fml.config.ModConfig.Type.CLIENT, ModConfig.clientSpec, configFolder + "client.toml");
modLoadingContext.registerConfig(net.minecraftforge.fml.config.ModConfig.Type.SERVER, ModConfig.serverSpec, configFolder + "server.toml");
modLoadingContext.registerConfig(net.minecraftforge.fml.config.ModConfig.Type.COMMON, ModConfig.commonSpec, configFolder + "common.toml");
```

<br/>

:::tip
La variable `configFolder` me sert à ne pas répéter le chemin vers le dossier où je souhaite enregistrer ma config.
Vous pouvez vous en passer si vous le désirez ainsi que modifier le troisième paramètre
des méthodes si besoin (vous pouvez omettre le troisième paramètre également).
:::

## Utilisation dans le code

Par exemple, je vais créer une épée dont le nombre de dégâts sera défini dans la config (on modifiera directement le tier de l'item).
    
```java
public static final Tier TIER = new ForgeTier(1, 3, -2.8f, ModConfig.server.damageCustomSword, 13, MON_TAG, MON_INGREDIENT);
```

Ici le `Tier` de mon épée aura pour boost de dégâts la valeur `ModConfig.server.damageCustomSword` qu'on avait défini
un peu plus haut.

Désormais si vous lancez le jeu, dans le dossier config du monde vous aurez un dossier avec vos configs à l'intérieur où
vous pourrez, et les joueurs également, modifier les valeurs inscrites dans l'intervalle que vous aurez imposé.

> ![](../../static/img/docs/config/resultat_config_light.png#gh-light-mode-only)![](../../static/img/docs/config/resultat_config_dark.png#gh-dark-mode-only)