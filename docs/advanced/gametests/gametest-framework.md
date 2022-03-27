---
sidebar_position: 1
title: Game Test Framework
description: Comment utiliser le framework de test intégré à Forge ?
tags: [GameTest]
---

Le **Game Test Framework** est, comme son nom l'indique, un *framework* permettant de *tester* le jeu. Plus précisément, il permet de tester des mécaniques du jeu stockées sous forme de structures et exécutées par groupes, par exemple le pathfinding d'un villageois ou encore un piston qui pousse des blocks.

:::info
Si vous souhaitez en savoir plus sur ce framework, par exemple sur comment Mojang l'utilise, je vous invite à regarder [cette vidéo](https://www.youtube.com/watch?v=vXaWOJTCYNg).
:::

:::caution
L'implémentation de ce système pour les moddeurs ayant été ajoutée dans dans Forge 39.0.88, vous devez être dans une version supérieure ou égale à celle-ci pour l'utiliser. (Je vous invite cependant à utiliser la dernière version, car il y a eu des changements dans ce système depuis son implémentation)

Vous devez aussi vérifier que pour chaque configuration de run dans votre build.gradle, vous avez bien la ligne `property 'forge.enabledGameTestNamespaces', 'votre_mod_id'`. Cette ligne active tous les tests liés à votre modid.

Enfin, si vous ne l'avez pas, je vous invite à ajouter la configuration de run `runGameTestServer` avec les autres, qui va lancer un serveur sur votre ordinateur qui va exécuter tous les tests puis se fermer. Vous pouvez trouver plus d'informations dessus dans la section **Exécuter les tests**.
<details>
      <summary>
        Le code en question (remplacez bien <code>votre_mod_id</code> par votre modid, attention il est présent plusieurs fois)
      </summary>

    gameTestServer {
        workingDirectory project.file('run')
        
        // Recommended logging data for a userdev environment
        // The markers can be added/remove as needed separated by commas.
        // "SCAN": For mods scan.
        // "REGISTRIES": For firing of registry events.
        // "REGISTRYDUMP": For getting the contents of all registries.
        property 'forge.logging.markers', 'REGISTRIES'
        
        // Recommended logging level for the console
        // You can set various levels here.
        // Please read: https://stackoverflow.com/questions/2031163/when-to-use-the-different-log-levels
        property 'forge.logging.console.level', 'debug'
        
        // Comma-separated list of namespaces to load gametests from. Empty = all namespaces.
        property 'forge.enabledGameTestNamespaces', 'votre_mod_id'

        mods {
            votre_mod_id {
                source sourceSets.main
            }
        }
    }

</details>

:::

## Créer un test
### La template
Pour créer un test, il suffit d'aller en jeu et d'utiliser la commande :

`/test create nomDuTest longueurDeLaStructure hauteurDeLaStructure profondeurDeLaStructure`

(La taille, la largeur et la profondeur de la structure sont des valeurs optionnelles)
Le nom du test n'est pas important, car il devra être changé plus tard de toute façon.

Vous devriez normalement voir quelque chose de similaire à cela :
![Une nouvelle template](/img/docs/gametest_nouvelle_template.png)

Une fois cela fait, je vous invite à construire votre test. Je testerais ici le hopper à des fins de démonstrations. J'ai donc juste posé un hopper, comme cela :

![Une template avec un hopper](/img/docs/gametest_template_hopper.png)

Une fois votre template(le nom de ce que vous venez de créer) de test finie, il vous suffit de faire un clic droit sur le bloc de structure(celui qui est violet) et de cliquer sur le bouton "SAVE" **en bas à droite**(pas l'autre).

### Le code

Avant de continuer, vous devez faire un choix :
- Soit vous décidez de garder le test uniquement dans votre projet, par exemple il ne sera pas inclus dans le jar que vous créerez ou sur votre repo git si vous en avez
- Soit vous préférez l'inclure
#### Si vous choisissez de garder le test uniquement dans votre projet
Dans le jeu, faites la commande `/test exportthis`. Ensuite, allez dans le dossier run à la racine de votre projet, puis dans le dossier gameteststructures. Vous devriez normalement trouver un fichier qui a le même nom que celui de votre test. Vous pouvez maintenant passer la section correspondant à l'autre choix, et lorsque que je parlerais ensuite du "fichier sélectionné", je parlerais de celui-là.

#### Si vous choisissez de garder le test avec votre mod
Allez dans le dossier run à la racine de votre projet. Ensuite, allez dans saves puis sélectionnez le dossier qui correspond au nom du monde dans lequel vous avez créé votre template. Il vous suffit juste d'aller dans generated/minecraft/structures et vous devriez trouver un fichier qui a le même nom que la template que vous avez créée. Copiez ce fichier et collez-le dans le dossier de vos structures (dans le dossier resources : data/modid/structures). Lorsque je parlerais du fichier sélectionné, ce sera de celui que vous venez de coller.

#### Créer la classe des tests
Une fois votre fichier sélectionné, il va falloir créer une classe qui va contenir vos tests. Le nom et l'emplacement sont bien sûr libres. Une fois cette classe créée, vous devez signaler à Forge qu'elle existe et qu'elle contient des tests. Pour ce faire, vous avez deux solutions :

Soit utiliser l'annotation `GameTestHolder` comme ceci :
```java
@GameTestHolder("votre_mod_id")
public class VotreClasseDeTests{
    //etc
}
```

Soit utiliser l'event RegisterGameTestsEvent :
```java
@SubscribeEvent
public static void onRegisterGameTests(RegisterGameTestsEvent event) {
    event.register(VotreClasseDeTests.class);
}
```

Vous pouvez maintenant créer dans cette même classe la méthode qui va s'occuper de votre test. Cette méthode doit utiliser l'annotation `@GameTest` et accepter comme argument un`GameTestHelper`.

L'annotation `@GameTest` est configurable avec les arguments suivants :

| Nom de l'argument   | Description                                                                                                                                                                                                                                                                                         | Valeur par défaut      |
|---------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------|
| `timeoutTicks`      | Définit le temps maximal d'exécution de ce test avant qu'il ne renvoie une erreur (le test peut finir son exécution avant s'il succède). Pour des tests utilisant des choses aléatoires comme les entités ou les random tick(du blé qui pousse par exemple), il est conseillé d'augmenter ce temps. | 100 ticks (5 secondes) |
| `batch`             | Le nom d'un groupe qui peut être utilisé pour grouper des tests similaires ensemble.                                                                                                                                                                                                                | "defaultBatch"         |
| `rotationSteps`     | Permet de tourner une template. 0 = aucune rotation, 1 = 90 degrés dans le sens des aiguilles d'une montre, 2 = 180 degrés, 3 = 270 degrés dans le sens des aiguilles d'une montre. N'importe quelle valeur non comprise entre 0 et 3 retournera une erreur.                                        | 0 (Aucune rotation)    |
| `required`          | Si cette valeur est mise à `true`, le groupe de tests entier retournera une erreur si le test n'est pas validé. Au contraire, si cette valeur est mise à `false`, l'erreur sera présente dans les logs mais n'affectera pas le groupe de tests.                                                     | true                   |
| `templateNamespace` | Ajoutée par Forge, cet argument détermine depuis quel namespace (un modid est un namespace) la template sera chargée. Cet argument détermine aussi si un GameTest sera chargé en se basant sur la propriété `forge.enabledGameTestNamespaces` qui est dans chacune de vos configurations de run.    | "minecraft"            |
| `template`          | Définit le chemin d'accès à la template relatif à `data/modid/structures` utilisé pour la charger.                                                                                                                                                                                                  | ""                     |
| `setupTicks`        | Définit combien de ticks le jeu attend après avoir fait apparaître la template avant que le game test ne commence.                                                                                                                                                                                  | 0                      |
| `attempts`          | Définit combien de fois le jeu essaye d'exécuter le game test avant de renvoyer une erreur (si le nombre de succès requis est atteint avant, le jeu valide le test et arrête de l'exécuter).                                                                                                        | 1                      |
| `requiredSuccesses` | Définit combien de fois le test doit réussir pour qu'il soit validé et ne renvoie pas d'erreur. Cette valeur ne fait rien si `attempts` est égal à 1.                                                                                                                                               | 1                      |


:::info
Si vous ne spécifiez pas l'argument `template`, Forge prendra le nom de la méthode qui gère le GameTest en question(en minuscules). Forge ajoute aussi d'ailleurs le nom de la classe(aussi en minuscules) où le GameTest est et un point avant ce nom pour obtenir le chemin final, qui ressemble à `data/modid/structures/nomdelaclasse.nomdelatemplate.nbt` ou à `run/gameteststructures/nomdelaclasse.nomdelatemplate.snbt`. Si vous ne voulez pas que Forge rajoute le nom de la classe avant le nom de la template, vous pouvez rajouter l'annotation `@PrefixGameTestTemplate(false)`devant la méthode ou la classe (s'appliquera à toutes les méthodes) 

Si vous avez utilisé l'annotation `@GameTestHolder` avec votre modid, vous n'avez pas besoin de spécifier le `templateNamespace`. Ce n'est pas le cas si vous utilisez l'event `RegisterGameTestEvent`.

Veuillez aussi noter que le `templateNamespace` sert aussi à déterminer si le test sera exécuté ou non, en méthode du ou des modid renseignés dans le build.gradle dans les lignes `property 'forge.enabledGameTestNamespaces', 'votre_mod_id'` dans vos configurations de run présentes dans votre build.gradle. Vous pouvez d'ailleurs utiliser plusieurs modid pour les tests comme ceci : `property 'forge.enabledGameTestNamespaces', 'votre_mod_id,autre_mod_id,encore_un_autre'`
:::info

#### Renommer la template
Maintenant que vous avez toutes ces informations, je vous invite à renommer votre template (le fichier sélectionné) ou à ajuster la ou les annotations qui sont devant votre méthode.

#### Remplir le GameTest (la méthode)
Dans le GameTest, vous pouvez ajouter des instructions qui permettent d'exécuter votre test, puis des instructions permettant de vérifier que le test a réussi. L'instance de la classe `GameTestHelper` que vous recevez en argument est faite pour cela.

:::info
La classe `GameTestHelper` contient une grande quantité de méthodes visant à aider à exécuter votre test et à vérifier que tout s'est bien passé. Pour voir toutes les méthodes disponibles, je vous invite à aller regarder le code de cette classe.

Dans la classe `GameTestHelper`, lorsqu'une instance de la classe `BlockPos` est demandée, pour poser un bloc par exemple, **elle doit être en coordonnées relatives**, c'est-à-dire en coordonnées par rapport à l'origine de la template (le structure block).
:::

Comme dit plus haut, les méthodes de la class `GameTestHelper` sont là pour vous aider à remplir votre GameTest.

Dans mon exemple j'utiliserais la template créée plus haut
```java
@GameTest(template = "hopper_test")
public static void doHopperTest(GameTestHelper helper){
    helper.spawnItem(Items.DIAMOND, 2, 3, 2); // Fait apparaître un diamant en (2, 3, 2)
    helper.assertAtTickTimeContainerContains(20, new BlockPos(2, 2, 2), Items.DIAMOND); // Attend 20 ticks puis vérifie que le conteneur en (2, 2, 2)(le hopper) contient un diamant
    helper.runAtTickTime(21, helper::succeed); // attend jusqu'au 21ème tick du test puis le valide si aucune erreur ne s'est produite
}
```
:::info
Si le GameTest n'est pas une méthode statique, une nouvelle instance de votre classe de tests sera créée pour chaque test.
:::

Les noms des méthodes et des variables ne sont pas importants, vous pouvez mettre ce que vous voulez.

Peu importe le type de test, vous devriez trouver une méthode qui vous permettra de le réaliser dans la classe `GameTestHelper`.


## Lancer les tests
Pour lancer les tests et vérifier leur bon fonctionnement, vous avez deux solutions :
- Les lancer en jeu dans la configuration runClient
- Les lancer de manière non visible avec la configuration runGameTestServer

### Lancer les tests avec la configuration runClient
Lorsque vous êtes en jeu, vous pouvez soit lancer tous les tests en utilisant la commande `/test runAll`, soit lancer un test spécifique avec `/test run <nom_du_test>`.

Une fois le ou les tests lancés, vous devriez voir les templates être ajoutées au monde et les tests s'exécuter.

Si un test succède, un beacon vert apparaîtra proche de la template.

Si un test échoue, un beacon rouge apparaîtra proche de la template ainsi qu'un livre contenant les erreurs posé sur un pupitre. Vous aurez aussi un message dans le chat.

Si vous voulez exécuter à nouveau un test, vous pouvez le faire en utilisant la commande `/test runThis`, qui exécutera à nouveau le test le plus proche du joueur. Vous pouvez aussi appuyer sur le bouton posé sur le command block proche du test.

### Lancer les tests avec la configuration runGameTestServer
Pour exécuter les tests avec la configuration runGameTestServer, il vous suffit de la lancer.

Cette configuration lance un serveur minecraft qui va exécuter les tests puis s'arrêter.

Le code de sortie de la configuration runGameTestServer est égal au nombre de tests marqué comme requis qui ont échoué.

C'est la configuration utilisée pour faire de la CI par exemple.