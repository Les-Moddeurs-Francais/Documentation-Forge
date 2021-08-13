---
sidebar_position: 2
title: Dist Executor
---

## Introduction
`Dist Executor` est un sytème efficace permettant de gérer le code ne devant s'exécuter que sur une `Dist` particulière. Ce système a été ajouté en remplacement du système de `SidedProxy`, présent lors des anciennes versions de **Forge** (1.12.2 et avant).


## C'est quoi une `Dist` ?
Une `Dist` représente sur quel "côté", sur quel distribution de Minecraft doit s'exécuter ce code. Ces distributions sont représentées dans l'énumération `net.minecraftforge.api.distmarker.Dist`. Aujourd'hui, il existe 2 distributions :
- `CLIENT` : La distribution du client. Il s'agit du client avec lequel les joueurs jouent. Il gère la partie rendu/graphique du jeu.
- `DEDICATED_SERVER` : La distribution du serveur dédié. Il s'agit de la distribution réservée aux serveurs. Il gère le monde ainsi que quelques éléments logiques, et communique avec le client via le réseau. Il ne contient aucun élément visuel du jeu.

:::caution 
La distribution `DEDICATED_SERVER` n'est pas utilisée lors de l'exécution du serveur intégré lancé en solo.
:::


## L'annotation `@OnlyIn`
L'annotation `@OnlyIn` permet d'indiquer à **FML** de charger ou non le membre annoté en fonction de la `Dist` spécifiée en paramètre. Elle se situe dans le package `net.minecraftforge.api.distmarker`.
Elle peut-être utilisée sur les classes, les champs, les méthodes, les constructeurs, les packages et les annotations.

Si on tente d'appeler un membre depuis une autre `Dist`, le membre sera considéré comme inexistant et des erreurs comme `NoSuchFieldError` ou `ClassNotFoundException` peuvent survenir en fonction du type de membre.

Par exemple :
```java
package fr.lmf.distexecutor;

import net.minecraftforge.api.distmarker.Dist;
import net.minecraftforge.api.distmarker.OnlyIn;

@OnlyIn(Dist.CLIENT)
public class OnlyClientClass {

    private Object aField;

    public void aMethod() {
        // do something
    }
}
```

La classe ne sera chargée que sur le client. Si elle est appelée sur le serveur, une erreur sera propagée.

En revanche, une même classe par exemple peut contenir des membres appartenant à des `Dist`s différents.
Exemple :
```java
package fr.lmf.distexecutor;

import net.minecraftforge.api.distmarker.Dist;
import net.minecraftforge.api.distmarker.OnlyIn;

public class SimpleClass {

    @OnlyIn(Dist.CLIENT)
    private Object aField;

    @OnlyIn(Dist.DEDICATED_SERVER)
    public void aMethod() {
        // do something
    }
}
```

Ici, la classe sera chargée, quelque soit la distribution, mais le field `aField` sera inexistant sur serveur et de même pour la méthode `aMethod` sur le client.


## La classe `DistExecutor`
Maintenant, vous aimeriez peut-être savoir comment appeler une classe, une méthode ou quoi que ce soit en fonction de la `Dist` ?
Utiliser la reflection pour voir si la classe `net.minecraft.client.Minecraft` (uniquement présente sur le client) existe serait une solution ; hélas les limitations de FML nous en empêche : une erreur est propagée et ferme le jeu automatiquement.

La classe `DistExecutor` entre maintenant en jeu. Elle possède quelques méthodes statiques utilitaires qui peuvent répondr à notre problématique.
Nous nous intéresserons pour le moment qu'aux méthodes `safeRunWhenOn` et `safeRunForDist`. Libre à vous de lire la JavaDoc disponible dans la classe pour connaître l'utilité de chaque méthode.
Ces méthodes sont relativement simples à utiliser et peuvent être utilisées à tout moment. Intéressons nous d'abord à `safeRunWhenOn` :