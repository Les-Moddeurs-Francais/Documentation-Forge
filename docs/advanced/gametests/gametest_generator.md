---
sidebar_position: 3
title: GameTest Generator
description: Comment utiliser les GameTest Generator ?
tags: [GameTest]
---

Les GameTest Generators sont des méthodes annotées avec `@GameTestGenerator` qui permettent de générer plusieurs GameTests dynamiquement depuis une seule méthode.

## La méthode en elle-même

Les méthodes annotées avec `@GameTestGenerator` ne doivent prendre aucun argument et retourner une liste de `TestFunction`s qui contiendra les GameTests générés.

Exemple :
```java
// Structure d'un GameTestGenerator, attention celui-là ne crée aucun GameTest !
@GameTestGenerator
public List<TestFunction> generateGameTests() {
  return ImmutableList.of();
}
```

## La classe `TestFunction`

La classe `TestFunction` est une classe représentant un GameTest.

Elle possède trois constructeurs :
- Le premier prend :
  - un `String` qui est le nom du batch utilisé pour le test
  - un `String` qui est le nom du test
  - un `String` qui est le chemin d'accès à la template du test (exemple : `minecraft:minecart_test`). Pour plus de facilité, vous pouvez créer une `ResourceLocation`, puis utiliser sa méthode `toString()`.
  - un `int` qui représente le nombre de ticks avant que le test ne soit considéré comme échoué s'il n'a pas déjà réussi ou échoué avant
  - un `long` qui représente le nombre de ticks entre le placement de la template et le début du test
  - un `boolean` qui représente si le test est requis ou non pour valider tous les tests, c'est-à-dire si le résultat du test influera le code de sortie de la configuration runGameTestServer par exemple
  - un `Consumer<GameTestHelper>` qui contient le code à exécuter pour le GameTest
- Le deuxième prend :
  - un `String` qui est le nom du batch utilisé pour le test
  - un `String` qui est le nom du test
  - un `String` qui est le chemin d'accès à la template du test (exemple : `minecraft:minecart_test`). Pour plus de facilité, vous pouvez créer une `ResourceLocation`, puis utiliser sa méthode `toString()`.
  - une `Rotation` qui représente la rotation de la template
  - un `int` qui représente le nombre de ticks avant que le test ne soit considéré comme échoué s'il n'a pas déjà réussi ou échoué avant
  - un `long` qui représente le nombre de ticks entre le placement de la template et le début du test
  - un `boolean` qui représente si le test est requis ou non pour valider tous les tests, c'est-à-dire si le résultat du test influera le code de sortie de la configuration runGameTestServer par exemple
  - un `Consumer<GameTestHelper>` qui contient le code à exécuter pour le GameTest
- Le troisième prend :
  - un `String` qui est le nom du batch utilisé pour le test
  - un `String` qui est le nom du test
  - un `String` qui est le chemin d'accès à la template du test (exemple : `minecraft:minecart_test`). Pour plus de facilité, vous pouvez créer une `ResourceLocation`, puis utiliser sa méthode `toString()`.
  - une `Rotation` qui représente la rotation de la template
  - un `int` qui représente le nombre de ticks avant que le test ne soit considéré comme échoué s'il n'a pas déjà réussi ou échoué avant
  - un `long` qui représente le nombre de ticks entre le placement de la template et le début du test
  - un `boolean` qui représente si le test est requis ou non pour valider tous les tests, c'est-à-dire si le résultat du test influera le code de sortie de la configuration runGameTestServer par exemple
  - un `int` qui représente le nombre maximum de fois que le test peut être exécuté
  - un `int` qui représente le nombre de réussites requises pour valider le test
  - un `Consumer<GameTestHelper>` qui contient le code à exécuter pour le GameTest

Exemple (avec le deuxième constructeur) :
```java
TestFunction hopperTest = new TestFunction(
  "defaultBatch",                                                 // batch utilisé pour le test
  "hoppertest",                                                   // nom du test
  new ResourceLocation("mod_id", "tests.hopper_test").toString(), // chemin d'accès à la template du test
  Rotation.NONE,                                                  // rotation de la template
  100,                                                            // nombre de ticks avant que le test ne soit considéré comme échoué s'il n'a pas déjà réussi ou échoué avant
  0,                                                              // nombre de ticks entre le placement de la template et le début du test
  true,                                                           // si le test est requis ou non
  helper -> {                                                     // code à exécuter pour le GameTest
    helper.spawnItem(Items.DIAMOND, 2, 3, 2);
    helper.assertAtTickTimeContainerContains(20, new BlockPos(2, 2, 2), Items.DIAMOND);
    helper.runAtTickTime(21, helper::succeed);
  }
);
```

## Finaliser le GameTestGenerator

Pour finir, il vous suffit de mettre toutes les `TestFunction`s que vous avez créées dans une liste, puis de retourner la liste depuis votre `GameTestGenerator`.

Exemple avec une seule `TestFunction` :
```java
@GameTestGenerator
public static List<TestFunction> generateTests(){
  TestFunction hopperTest = new TestFunction(
    "defaultBatch",
    "hoppertest",
    new ResourceLocation("mod_id", "tests.hopper_test").toString(),
    Rotation.NONE,
    100,
    0,
    true,
    helper ->{
        helper.spawnItem(Items.DIAMOND,2,3,2);
        helper.assertAtTickTimeContainerContains(20,new BlockPos(2,2,2),Items.DIAMOND);
        helper.runAtTickTime(21,helper::succeed);
  });
  return ImmutableList.of(hopperTest);
}
```