---
sidebar_position: 2
title: Dist Executor
---

## Introduction
Le système de `Dist Executor` est une API efficace fournie par **FML** située dans le projet `fmlcore` permettant de gérer le code ne devant s'exécuter que sur une `Dist` particulière. Ce système a été ajouté en remplacement du système de `SidedProxy`, présent lors des anciennes versions de **Forge** (1.12.2 et avant).


## C'est quoi une `Dist` ?
Une `Dist` représente sur quel "côté", sur quel distribution de Minecraft doit s'exécuter ce code. Ces distributions sont représentées dans l'énumération `net.minecraftforge.api.distmarker.Dist`. Aujourd'hui, il existe 2 distributions :
- `CLIENT` : La distribution du client. Il s'agit du client avec lequel les joueurs jouent. Il gère la partie rendu/graphique du jeu.
- `DEDICATED_SERVER` : La distribution du serveur dédié. Il s'agit de la distribution réservée aux serveurs. Il gère le monde ainsi que quelques éléments logiques, et communique avec le client via le réseau. Il ne contient aucun élément visuel du jeu.

:::caution 
La distribution `DEDICATED_SERVER` n'est pas utilisée lors de l'exécution du serveur intégré lancé en solo.
:::


## L'annotation `@OnlyIn`
L'annotation `@OnlyIn` permet d'indiquer à **FML** de charger ou non le membre annoté en fonction de la `Dist` spécifiée en paramètre. Tout comme l'énumération `Dist`, elle se situe dans le package `net.minecraftforge.api.distmarker`. Elle peut-être utilisée sur les classes, les champs, les méthodes, les constructeurs, les packages et les annotations. Pour information, cette annotation est traitée dans la classe `RuntimeDistCleaner` du projet `fmlloader`. L'annotation `@OnlyIns` ne sera pas traité dans ce tutoriel.

Si on tente d'appeler un membre depuis une autre `Dist`, le membre sera considéré comme inexistant et des erreurs comme `NoSuchFieldError`, `NoSuchMethodError` ou encore `ClassNotFoundException` peuvent survenir en fonction du type du membre.

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

En revanche, une même classe par exemple peut contenir des membres reliés à des `Dist`s différentes.
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

Ici, la classe sera chargée, quelque soit la distribution, mais le field `aField` sera inexistant sur serveur et de même pour la méthode `aMethod` sur le client. Si nous exécutons `System.out.println(this.aField);` dans la méthode `aMethod`, le jeu plantera.


## La classe `DistExecutor`
Maintenant, vous aimeriez peut-être savoir comment appeler une classe, une méthode ou quoi que ce soit en fonction de la `Dist` pour éviter les erreurs évoquées plus haut ?
Utiliser la reflection pour voir si la classe `net.minecraft.client.Minecraft` (uniquement présente sur le client) existe serait une solution ; hélas les limitations de **FML** nous en empêche : une erreur est propagée et ferme le jeu automatiquement avant même que nouis puissons exécuter du code. De toute façon, ce n'est pas la méthode propre et recommandée que nous recommande **Forge**.

La classe `DistExecutor` entre maintenant en jeu. Elle se situe dans le package `net.minecraftforge.fml` du projet `fmlcore`. Elle possède quelques méthodes statiques utilitaires qui peuvent répondr à notre problématique.
Nous nous intéresserons pour le moment qu'aux méthodes `(un)safeRunForDist` et `(un)safeRunWhenOn`. Libre à vous de lire la JavaDoc disponible dans la classe pour connaître l'utilité de chaque méthode. Veillez à ne pas utiliser - du moins le moins possible - les méthodes annotées avec l'annotation `@Deprecated`.

:::caution 
Les méthodes `unsafe` n'exécutent pas certaines vérifications que les méthodes `safe` appliquent à l'exécution du jeu. Nonobstant, ces vérifications ne sont pas appliquées en production, quand vous lancer le jeu depuis un launcher par exemple. Vous pouvez donc avoir un plantage en lançant le jeu depuis un environnement de développement, et pas en lançant votre jeu de manière classique. Enfin, les méthodes `unsafe` ne peuvent prévenir de certaines erreurs comme les `ClassCastException`.
:::

### La méthode `(un)safeRunForDist`
La méthode `(un)safeRunForDist` permet de retourner une instance de la classe demandée en paramètre en fonction de la `Dist`. Par exemple, un système de "proxy" est facilement reproductible grâce à cette méthode :
```java
package fr.lmf.distexecutor;

public interface SidedManager {
    void init();
}
```

Cette interface va nous permettre de définir un membre commun entre nos `Manager`s : un pour le client, et l'autre pour le serveur. Voici un exemple d'implémentation pour le client :
```java
package fr.lmf.distexecutor.client;

import fr.lmf.distexecutor.SidedManager;
import net.minecraftforge.api.distmarker.Dist;
import net.minecraftforge.api.distmarker.OnlyIn;
import net.minecraftforge.fml.event.lifecycle.FMLClientSetupEvent;
import net.minecraftforge.fml.javafmlmod.FMLJavaModLoadingContext;

@OnlyIn(Dist.CLIENT)
public class ClientManager implements SidedManager {
    
    @Override
    public void init() {
        FMLJavaModLoadingContext.get().getModEventBus().addListener(this::clientSetup);
    }

    public void clientSetup(FMLClientSetupEvent event) {
        // do something at client startup
    }
}
```
En voici une autre pour le serveur :
```java
package fr.lmf.distexecutor.server;

import fr.lmf.distexecutor.SidedManager;
import net.minecraftforge.api.distmarker.Dist;
import net.minecraftforge.api.distmarker.OnlyIn;
import net.minecraftforge.common.MinecraftForge;
import net.minecraftforge.eventbus.api.SubscribeEvent;
import net.minecraftforge.fmlserverevents.FMLServerStartedEvent;

@OnlyIn(Dist.DEDICATED_SERVER)
public class ServerManager implements SidedManager
{
    @Override
    public void init() {
        MinecraftForge.EVENT_BUS.register(this);
    }

    @SubscribeEvent
    public void onServerStart(FMLServerStartedEvent event) {
        // do something at server startup
    }
}
```
Enfin, il faudra exécuter la bonne méthode `init` au démarrage du mod. La méthode `(un)safeRunForDist` prend 2 paramètres à signature identiques : un [`Supplier`]("https://docs.oracle.com/en/java/javase/16/docs/api/java.base/java/util/function/Supplier.html") d'un `(Safe)Supplier` de votre classe cible (ici `ClientManager` ou `ServerManager`). Un `SafeSupplier` est une interface fournie par **FML** étandant `Supplier` et `SafeReferent`. Un `SafeReferent` est une interface elle aussi fournie par **FML** qui va subir des vérifications et propager une erreur si il n'est pas jugé "safe". Les méthodes `unsafe` ne demandent pas de `SafeSupplier`, remplacé par un `Supplier` classique.

```java
package fr.lmf.distexecutor;

import fr.lmf.distexecutor.client.ClientManager;
import fr.lmf.distexecutor.server.ServerManager;
import net.minecraftforge.fml.DistExecutor;
import net.minecraftforge.fml.common.Mod;

@Mod("distexecutorexample")
public class DistExecutorMod {

    // some fields and constants

    public DistExecutorMod() {
        // do something
        var manager = DistExecutor.unsafeRunForDist(() -> ClientManager::new, () -> ServerManager::new);
        manager.init();
        // do something
    }

    // other methods
}
```

:::tip
Notez l'utilisation du mot-clé `var`, introduit dans **Java** depuis la version 10. Il détectera automatiquement le type commun de nos deux classes, ici `SidedManager`. Nous avons donc accès aux méthodes dans cette classe, soit `init` dans le cadre de l'exemple, libre à vous d'en rajouter autant que vous voulez pour les usages de votre choix.
:::

### La méthode `(un)safeRunWhenOn`
Voici une seconde méthode qui fonctionne un peu différemment, rassurez vous, vous n'avez pas besoin de tout recommencer, gardez vos classes `ClientManager` et `ServerManager`, vous allez en avoir besoin.

La méthode `(un)safeRunWhenOn` fonctionne différemment, déjà, elle ne prend pas un ensemble de `Supplier`, mais une `Dist` en premier paramètre et un `Supplier` d'un objet `(Safe)Runnable` (en fonction de si vous utilisez la méthode safe ou unsafe). Si la `Dist` fournie en paramètre correspond à la distribution actuelle, le code contenu dans l'objet `(Safe)Runnable` sera exécuté. Par exemple, voici un code qui affichera dans la console "Bonjour depuis le client" sur le client et "Bonjour depuis le serveur" sur le serveur :

```java
DistExecutor.unsafeRunWhenOn(Dist.CLIENT, () -> () -> System.out.println("Bonjour depuis le client"));
DistExecutor.unsafeRunWhenOn(Dist.DEDICATED_SERVER, () -> () -> System.out.println("Bonjour depuis le serveur"));
```

Jusqu'ici, nos deux `Manager`s avait la même méthode en commun, appelée au même moment. En revanche, vous aimeriez pouvoir être plus libre dans l'utilisation de vos `Manager`s en ajoutant des méthodes indépendantes et pouvant être appelées un peu partout comme pouvoir démarrer une base de donnée depuis le serveur, ou alors ouvrir un écran depuis le client...

 On considère une méthode `foo(String)` dans `ClientManager` et une méthode `bar(int)` dans `ServerManager`. Effectivement, polymorphisme et héritage ici ne seront pas utiles. Une solution est de déclarer 2 fields publiques et statiques (ou alors privé, avec un accesseur), un pour le `ClientManager` et l'autre pour le `ServerManager`, de les initialiser chacun à l'aide de la méthode `(un)safeRunWhenOn`. Puis ensuite de les appeler quand bon vous semble dans une classe elle-même annotée `@OnlyIn` avec la `Dist` correspondante, ou bien en utilisant à nouveau la méthode `(un)safeRunWhenOn`.

Vous pouvez également profiter de l'interface `SidedManager` créée plus tôt pour donner un accès sûr aux méthodes communes et publiques des deux `Manager`s :
```java
package fr.lmf.distexecutor;

import fr.lmf.distexecutor.SidedManager;
import fr.lmf.distexecutor.client.ClientManager;
import fr.lmf.distexecutor.server.ServerManager;
import net.minecraftforge.api.distmarker.Dist;
import net.minecraftforge.api.distmarker.OnlyIn;
import net.minecraftforge.fml.DistExecutor;
import net.minecraftforge.fml.common.Mod;

@Mod("distexecutorexample")
public class DistExecutorMod {

    @OnlyIn(Dist.CLIENT)
    private static ClientManager clientManager;

    @OnlyIn(Dist.DEDICATED_SERVER)
    private static ServerManager serverManager;

    private static SidedManager currentManager;

    public DistExecutorMod() {
        DistExecutor.unsafeRunWhenOn(Dist.CLIENT, () -> () -> {
            clientManager = new ClientManager();
            clientManager.foo("foobar");
        });
        DistExecutor.unsafeRunWhenOn(Dist.DEDICATED_SERVER, () -> () -> {
            serverManager = new ServerManager();
            serverManager.bar(0);
        });
        currentManager = DistExecutor.unsafeRunForDist(() -> DistExecutorMod::getClientManager, () -> DistExecutorMod::getServerManager);
        currentManager.init();
    }

    @OnlyIn(Dist.CLIENT)
    public static ClientManager getClientManager() {
        return clientManager;
    }

    @OnlyIn(Dist.DEDICATED_SERVER)
    public static ServerManager getServerManager() {
        return serverManager;
    }

    public static SidedManager getCurrentManager() {
        return currentManager;
    }
}
```

## Conclusion
Vous savez maintenant vous servir de l'annotation `@OnlyIn` et de la classe `DistExecutor`. Vous êtes au courant des erreurs qui peuvent survenir si vous utilisez de manière incorrecte ces classes et que vous appelez de manière non vérifiée des membres présent sur une seule distribution du client.

Ce n'est pas une notion évidente, c'est pour ça que j'ai essayé d'être le plus clair et concis et de donner quelques exemples et quelques tips. Toutefois il existe évidemment d'autres manières d'utiliser ces outils pratique. Ne vous découragez pas au moindre plantage et faites attention à ce que vous appelez. 

Bon modding !