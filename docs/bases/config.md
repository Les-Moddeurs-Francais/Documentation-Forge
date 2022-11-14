---
sidebar_position: 6
title: Config
description: Ajouter une configuration à son mod
tags: [bases]
---

Il sera parfois utile d'avoir une configuration pour votre mod. Que ce soit pour que vous puissiez tester certaines
fonctionnalités ou même permettre aux joueurs de personnaliser leur expérience de jeu.

Grâce aux fichiers de configuration, les joueurs pourront moduler certaines valeurs de votre mod et ainsi avoir une
version propre à eux de votre mod sans qu'ils aient à le recompiler.

:::tip
Par exemple, le nombre de minerais dans un filon de votre nouveau minerai, les dégats d'une certaine épée, le nombre de
points de vie d'un mob, etc...
:::

### Classe de configuration

Nous aurons besoin d'une seule classe pour cela. Une classe qui sera plutôt conséquente en nombre de lignes mais assez
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

## Client

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
La méthode `define` prend deux paramètres : `"guiOnDeath"` est le nom affiché dans la config et `true` est sa
valeur par défaut.

Enfin, la méthode `pop` indique que l'on a terminé la configuration de notre config (ça fait beaucoup de config 🧐)

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
avant le kick d'un joueur, ainsi qu'une variable modulant les dégats d'une potentielle épée.

### Common

La classe `Common` est assez floue. L'entièreté des paramètres dans cette config ont été dépréciés dans les dernières
versions de Forge. On pourrait s'en passer pour le moment, mais sachez qu'elle est utile pour des choses "générales" de
votre mod. Voyez ça comme le choix par défaut si un de vos paramètres ne rentre pas dans la case client ou server.

### Utilisation dans le code

### Enregistrement

