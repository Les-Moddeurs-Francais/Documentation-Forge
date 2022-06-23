---
sidebar_position: 3
title: Coremods
description: Comment utiliser les coremods ?
tags: [avancé]
---

## Introduction
Le système de `CoreMod` est un outil fourni par **Forge** dans le projet [CoreMods](https://github.com/MinecraftForge/CoreMods). Il permet d'effectuer des modifications directement dans le code de Minecraft, sans passer ni par des événements, ni par les autres outils fournis par l'API **Forge**. Ce système est apparu pour remplacer l'ancien système de coremods présent dans les versions de Forge antérieures à la 1.13.

:::warning
Attention, utilisez les coremods à vos risques et périls, une sur-utilisation des coremods peut entraîner des incompatibilités inter-mods ! 
Ils ne doivent être utilisés qu'en dernier recours. Il est possible d'ajouter autant de coremods que souhaité, mais la modification du code n'est pas gratuite (surtout avec de grosses modifications) : le temps de chargement du jeu peut-être impacté s'il y en a beaucoup. Enfin, le débug est plus difficile, puisque le code modifié apparaît uniquement pendant l'exécution, il n'existe pas physiquement.

Il est fortement recommandé de se renseigner auparavant sur le bytecode Java. Les instructions et la bibliothèque ASM qui est utilisée par le système de coremods.
Voici quelques ressources :
- https://asm.ow2.io
- https://fr.wikipedia.org/wiki/ASM_(logiciel)
- https://fr.wikipedia.org/wiki/Bytecode_Java
- https://gitlab.ow2.org/asm/asm
:::


## Fonctionnement
Un coremod est représenté sous la forme d'un fichier JavaScript. En effet, le nouveau système de coremod utilise le moteur (déprécié) [Nashorn](https://openjdk.org/projects/nashorn/) pour lire et exécuter le coremod sous la forme d'un script JavaScript. L'objectif étant de restreindre le champ d'action du coremod pour des questions de sécurité et de stabilité. Pour cause, on ne peut pas appeler certaines classes à l'intérieur d'un coremod : seules les classes situées dans les packages `java.util`, `java.util.function`, `org.objectweb.asm.tree`, `org.objectweb.asm`, `org.objectweb.asm.util` et la classe `ASMAPI` (`net.minecraftforge.coremod.api.ASMAPI`) peuvent être utilisées.

:::note
La classe ASMAPI possède plein de méthodes utiles pour simplifier la transformation et éviter d'écrire du code redondant.
Les classes de la bibliothèque ASM, utilisées pour la transformation, sont très bien documentées. Ne surtout pas hésiter à se renseigner directement dans le code.
:::

Au chargement du mod, **FML** cherche le fichier `coremods.json` situé dans le dossier `META-INF` de votre mod. Par défaut, il n'existe pas, il faudra le créer soi-même.

Exemple d'un fichier `coremods.json` :
```json
{
    "edit_ai": "coremods/edit_ai.js",
    "redstone_optimization": "coremods/redstone.js"
}
```

Sa structure est très simple : il s'agit simplement d'un objet avec plusieurs clés ayant pour valeur des chaînes de caractères. Ces derniers représentent le chemin d'accès vers le fichier du coremod.

:::caution
Le chemin d'accès démarre à la racine du mod, et non du dossier `META-INF` !
Exemple :
```sh title='Arborescence basique pour les coremods'
coremods
    ├── edit_ai.js
    └── redstone.js
META-INF
    └── coremods.json
```
:::

Ensuite, **FML** va charger un à un les coremods. Si des erreurs de syntaxe sont détectées, le coremod sera ignoré et une erreur sera imprimée dans les logs.
À ce sujet, `Nashorn` ne supporte pas les dernières fonctionnalités des versions d'`ECMAScript`. Voici les règles à respecter et quelques conseils :

Utiliser le mot clé `var` pour déclarer une variable. :
```js
var myVar = "x"; // bon
let myVar = "x"; // mauvais
const myVar = "x"; // mauvais
String myVar = "x"; // mauvais
```

Importer une classe :
```js
var InsnList = Java.type('org.objectweb.asm.tree.InsnList');
```

Affichage dans la console :
```js
var ASMAPI = Java.type('net.minecraftforge.coremod.api.ASMAPI'); // importer ASMAPI
ASMAPI.log('DEBUG', "Le message est : {} de : {}", unParametre, unAutreParametre);
```

Une boucle for :
```js
for(var i = 0; i < methodNode.instructions.toArray().length; i++) {
    var insnNode = methodNode.instructions.toArray()[i];
}
```

Comparer deux strings :
```js
if(methodNode.name == "<init>") {

}
```

:::note
`<init>` correspond au constructeur d'une classe. (Appelé lors de la création d'un objet).

`<clinit>` correspond à l'initialiseur classique d'une classe. (Appelé lors du chargement de la classe).
:::

Chaque coremod possède une fonction `initializeCoreMod` qui est appelée au chargement du coremod. À l'intérieur doit être retourné un ou plusieurs `Transfomer`s.
Un transformer est l'objet définissant quelle classe, méthode ou champ va être modifié, et les modifications à effectuer.
Pour cela, il définit deux éléments : la cible `target` et la fonction de transformation `transformer`.
Il y a trois types différents de transformers :
- [`ClassTransformer`](#classtransformer) : pour modifier une classe
- [`MethodTransformer`](#methodtransformer) : pour modifier une méthode dans une classe
- [`FieldTransformer`](#fieldtransformer) : pour modifier un champ dans une classe

:::caution
Pour rappel, il n'y a pas de notion de type. Dans les prochains extraits de code, les variables s'appellent `classNode`/`methodNode`/`fieldNode` par soucis de lisibilité. Elle pourrait très bien se nommer `cn`/`mn`/`fn` ou même `foo`.
:::


### ClassTransformer
Paramètres de la cible pour créér un `ClassTransformer` :

| Nom  | Description                            | Exemple                                       |
|------|----------------------------------------|-----------------------------------------------|
| type | Le transformer transformera une classe |  CLASS                                        |
| name | Le nom de la classe                    | `net/minecraft/client/Minecraft`              |

La fonction de transformation prend un objet `ClassNode` en paramètre et le retourne à la fin après avoir effectué les modifications.

Résultat en **JavaScript** :
```js
function initializeCoreMod() {
    return {
        'MonTransformer': {
            'target': {
                'type': 'CLASS',
                'name': 'net/minecraft/client/Minecraft'
            },
            'transformer': function(classNode) {
                // modifications
                return classNode;
            }
        }
    }
}
```

### MethodTransformer
Paramètres de la cible pour créér un `MethodTransformer` :

| Nom        | Description                                | Exemple                                       |
|------------|--------------------------------------------|-----------------------------------------------|
| type       | Le transformer transformera une méthode    |  METHOD                                       |
| class      | Le nom de la classe qui possède la méthode | `net/minecraft/client/Minecraft`              |
| methodName | La nom de la méthode à transformer         | `reloadResourcePacks`                         |
| methodDesc | La description de la méthode à transformer | `(Z)Ljava/util/concurrent/CompletableFuture;` |

La fonction de transformation prend un objet `MethodNode` en paramètre et le retourne à la fin après avoir effectué les modifications.

Résultat en **JavaScript** :
```js
function initializeCoreMod() {
    return {
        'MonTransformer': {
            'target': {
                'type': 'METHOD',
                'class': 'net/minecraft/client/Minecraft',
                'methodName': 'reloadResourcePacks',
                'methodDesc': '(Z)Ljava/util/concurrent/CompletableFuture;'
            },
            'transformer': function(methodNode) {
                // modifications
                return methodNode;
            }
        }
    }
}
```

### FieldTransformer
Paramètres de la cible pour créér un `FieldTransformer` :

| Nom       | Description                              | Exemple                          |
|-----------|------------------------------------------|----------------------------------|
| type      | Le transformer transformera un champ     |  FIELD                           |
| class     | Le nom de la classe qui possède le champ | `net/minecraft/client/Minecraft` |
| fieldName | La nom du champ à transformer            | `pendingReload`                  |

La fonction de transformation prend un objet `FieldNode` en paramètre et le retourne à la fin après avoir effectué les modifications.

Résultat en **JavaScript** :
```js
function initializeCoreMod() {
    return {
        'MonTransformer': {
            'target': {
                'type': 'FIELD',
                'class': 'net/minecraft/client/Minecraft',
                'fieldName': 'pendingReload'
            },
            'transformer': function(fieldNode) {
                // modifications
                return fieldNode;
            }
        }
    }
}
```

On peut très bien ajouter à la suite des transformers dans le même coremod comme ceci :
```js
function initializeCoreMod() {
    return {
        'MonTransformer': {
            'target': {
                'type': 'CLASS',
                'name': 'net/minecraft/client/Minecraft'
            },
            'transformer': function(classNode) {
                // modifications
                return classNode;
            }
        },
        'MonTransformer': {
            'target': {
                'type': 'METHOD',
                'class': 'net/minecraft/client/Minecraft',
                'methodName': 'reloadResourcePacks',
                'methodDesc': '(Z)Ljava/util/concurrent/CompletableFuture;'
            },
            'transformer': function(methodNode) {
                // modifications
                return methodNode;
            }
        },
        'MonTransformer': {
            'target': {
                'type': 'FIELD',
                'class': 'net/minecraft/client/Minecraft',
                'fieldName': 'pendingReload'
            },
            'transformer': function(fieldNode) {
                // modifications
                return fieldNode;
            }
        }
    }
}
```

## Exemples d'utilisation

Voici trois exemples d'application d'un coremod.
- [Modification d'une instruction](#modification-dune-instruction)
- [Affichage dans la console lors de l'initialisation du jeu](#affichage-dans-la-console-lors-de-linitialisation-du-jeu)
- [Supprimer des instructions](#supprimer-des-instructions)

### Modification d'une instruction

Même si on est en JavaScript, on a accès aux méthodes et aux champs des classes Java. C'est ainsi que l'on peut modifier le code du jeu.
Prenons un exemple, certes inutile, mais un exemple quand même : on souhaite modifier le nom du thread de rendu de Minecraft.

Trois étapes :
- [Chercher où le nom du thread de rendu est géré](#étape-1)
- [Imaginer un moyen de changer le nom du thread de rendu](#étape-2)
- [Le coder dans le transformer](#étape-3)

#### Étape 1
On sait que le thread est créé au lancement de Minecraft. On cherche d'abord dans la classe principale : `net.minecraft.client.main.Main`.
Bingo, dans la méthode `main`, on trouve la ligne `Thread.currentThread().setName("Render thread");`.

En utilisant un outil comme [**Recaf**](https://github.com/Col-E/Recaf), dans l'onglet `Search -> Strings` en cherchant `Render thread` on aurait trouvé toutes les occurrences où ce nom est utilisé.
#### Étape 2
Si on est encore débutant avec le bytecode, il peut être difficile d'imaginer immédiatement une solution à la problématique. Pour faciliter les choses, il peut, encore une fois, être intéressant d'utiliser **Recaf**. On charge le jar de minecraft en environnement de développement (pour ne pas avoir le jeu obfusqué). Puis, on ouvre la classe `net/minecraft/client/main/Main`. En faisant `Clic droit -> Edit with assembler` sur le nom de la méthode `main`, on peut ainsi lire (et modifier) les instructions en bytecode de la méthode. En parcourant les instructions, on remarque que tous les strings de la méthode sont utilisées via une instruction nommée **LDC**. En effet, cette instruction permet d'apporter sur la pile (la stack) une constante, ici de type `String`.

En poursuivant les recherches, on trouve les trois lignes suivantes :
```
INVOKESTATIC java/lang/Thread.currentThread()Ljava/lang/Thread;
LDC "Render thread"
INVOKEVIRTUAL java/lang/Thread.setName(Ljava/lang/String;)V
```

La première instruction (`INVOKESTATIC`) sert à appeler une méthode statique, ici contenue dans la classe `Thread` et de nom `currentThread` et de signature `()Ljava/lang/Thread;`. Pour rappel, la signature d'une méthode permet de déterminer le type des paramètres et son type retourné. Avec **Recaf**, on peut trouver la signature d'une méthode en faisant `Clic droit -> Edit with assembler` sur le nom de la méthode, on peut obtenir sur la première ligne la description de la méthode.

La seconde instruction (`LDC`) apporte sur la pile la constante "Render thread".

La troisième (`INVOKEVIRTUAL`) sert à appeler une méthode non-statique sur une instance d'une classe donnée, ici sur une instance de la classe `Thread`, récupérée via la première instruction.

La modification à effectuer est donc très simple, il suffit donc de changer la valeur constante (la seconde instruction) par ce que l'on souhaite.

#### Étape 3
On considère qu'on utilise un coremod avec un transformer qui transformera la méthode `main` de la classe `net/minecraft/client/main/Main` :

```js
function initializeCoreMod() {
    return {
        'MonTransformer': {
            'target': {
                'type': 'METHOD',
                'class': 'net/minecraft/client/main/Main',
                'methodName': 'main',
                'methodDesc': '([Ljava/lang/String;)V'
            },
            'transformer': function(methodNode) {
                return methodNode;
            }
        }
    }
}
```

On parcourt toutes les instructions de la méthode :
```js
function initializeCoreMod() {
    return {
        'MonTransformer': {
            'target': {
                'type': 'METHOD',
                'class': 'net/minecraft/client/main/Main',
                'methodName': 'main',
                'methodDesc': '([Ljava/lang/String;)V'
            },
            'transformer': function(methodNode) {
                var instructions = methodNode.instructions.toArray();
                for(var i = 0; i < instructions.length; i++) {

                }
                return methodNode;
            }
        }
    }
}
```

On vérifie si l'instruction est bien une instruction LDC et on vérifie si la constante de l'instruction est bien égale à "Render thread".
```js
var Opcodes = Java.type('org.objectweb.asm.Opcodes');

function initializeCoreMod() {
    return {
        'MonTransformer': {
            'target': {
                'type': 'METHOD',
                'class': 'net/minecraft/client/main/Main',
                'methodName': 'main',
                'methodDesc': '([Ljava/lang/String;)V'
            },
            'transformer': function(methodNode) {
                var instructions = methodNode.instructions.toArray();
                for(var i = 0; i < instructions.length; i++) {
                    if(instructions[i].getOpcode() == Opcodes.LDC && instructions[i].cst == "Render thread") {

                    }
                }
                return methodNode;
            }
        }
    }
}
```

On remplace la constante par "Thread vraiment lent". On peut ensuite casser la boucle avec le mot-clé `break` pour éviter de perdre du temps lors de la transformation de la méthode.
```js
var Opcodes = Java.type('org.objectweb.asm.Opcodes');

function initializeCoreMod() {
    return {
        'MonTransformer': {
            'target': {
                'type': 'METHOD',
                'class': 'net/minecraft/client/main/Main',
                'methodName': 'main',
                'methodDesc': '([Ljava/lang/String;)V'
            },
            'transformer': function(methodNode) {
                var instructions = methodNode.instructions.toArray();
                for(var i = 0; i < instructions.length; i++) {
                    if(instructions[i].getOpcode() == Opcodes.LDC && instructions[i].cst == "Render thread") {
                        instructions[i].cst = "Thread vraiment lent";
                        break;
                    }
                }
                return methodNode;
            }
        }
    }
}
```

Et voilà, on peut désormais lancer le jeu et consulter notre nouveau et super nom du thread de rendu de Minecraft ! On peut aussi noter la présence de cette ligne `Transforming main with desc ([Ljava/lang/String;)V` qui indique que la méthode a bien été transformée, utile pour savoir si notre modification s'est appliquée ou non !


### Affichage dans la console lors de l'initialisation du jeu
Il s'agit d'un second exemple d'application des coremods. Ici, il s'agira d'ajouter à la fin du constructeur un simple `System.out.println("Initialisation du jeu");`

Ici, la période de recherche est assez facile : on sait quelle méthode modifier dans quelle classe et où ajouter la ligne de code.
On a donc un début de coremod ainsi :
```js
function initializeCoreMod() {
    return {
        'MonTransformer': {
            'target': {
                'type': 'METHOD',
                'class': 'net/minecraft/client/Minecraft',
                'methodName': '<init>',
                'methodDesc': '(Lnet/minecraft/client/main/GameConfig;)V'
            },
            'transformer': function(methodNode) {
                return methodNode;
            }
        }
    }
}
```

De la même manière, on parcourt les instructions de la méthode jusqu'à arriver à la dernière, l'instruction `RETURN` (par chance, il n'y en a qu'une seule) :
```js
var Opcodes = Java.type('org.objectweb.asm.Opcodes');

function initializeCoreMod() {
    return {
        'MonTransformer': {
            'target': {
                'type': 'METHOD',
                'class': 'net/minecraft/client/Minecraft',
                'methodName': '<init>',
                'methodDesc': '(Lnet/minecraft/client/main/GameConfig;)V'
            },
            'transformer': function(methodNode) {
                var instructions = methodNode.instructions.toArray();
                for(var i = 0; i < instructions.length; i++) {
                    if(instructions[i].getOpcode() == Opcodes.RETURN) {
                        break;
                    }
                }
                return methodNode;
            }
        }
    }
}
```

Désormais, il faut ajouter la ligne de code juste avant l'instruction `RETURN`. La ligne de code est constituée de plusieurs instructions :
```
GETSTATIC java/lang/System.out Ljava/io/PrintStream;
LDC "Initialisation du jeu"
INVOKEVIRTUAL java/io/PrintStream.println(Ljava/lang/String;)V
```

On crée donc une liste d'instructions (`InsnList`) :
```js
var insnList = new InsnList();
insnList.add(new FieldInsnNode(Opcodes.GETSTATIC, "java/lang/System", "out", "Ljava/io/PrintStream;"));
insnList.add(new LdcInsnNode("Initialisation du jeu"));
insnList.add(new MethodInsnNode(Opcodes.INVOKEVIRTUAL, "java/io/PrintStream", "println", "(Ljava/lang/String;)V"));
```
On ajoute instruction par instruction à la liste d'instructions. Je conseille de consulter la documentation des constructeurs de ces classes pour savoir quel paramètre correspond à quoi. Il ne faut pas non plus oublier d'importer les quatres classes (`InsnList`, `FieldInsnNode`, `LdcInsnNode`, `MethodInsnNode`) qui sont utilisées dans cette liste d'instructions.

On finit par ajouter la liste d'instructions juste avant l'instruction `RETURN` :
```js
methodNode.instructions.insertBefore(instructions[i], insnList);
```

On obtient le résultat final :
```js
var FieldInsnNode = Java.type('org.objectweb.asm.tree.FieldInsnNode');
var InsnList = Java.type('org.objectweb.asm.tree.InsnList');
var LdcInsnNode = Java.type('org.objectweb.asm.tree.LdcInsnNode');
var MethodInsnNode = Java.type('org.objectweb.asm.tree.MethodInsnNode');
var Opcodes = Java.type('org.objectweb.asm.Opcodes');

function initializeCoreMod() {
    return {
        'MonTransformer': {
            'target': {
                'type': 'METHOD',
                'class': 'net/minecraft/client/Minecraft',
                'methodName': '<init>',
                'methodDesc': '(Lnet/minecraft/client/main/GameConfig;)V'
            },
            'transformer': function(methodNode) {
                var instructions = methodNode.instructions.toArray();
                for(var i = 0; i < instructions.length; i++) {
                    if(instructions[i].getOpcode() == Opcodes.RETURN) {
                        var insnList = new InsnList();
                        insnList.add(new FieldInsnNode(Opcodes.GETSTATIC, "java/lang/System", "out", "Ljava/io/PrintStream;"));
                        insnList.add(new LdcInsnNode("Initialisation du jeu"));
                        insnList.add(new MethodInsnNode(Opcodes.INVOKEVIRTUAL, "java/io/PrintStream", "println", "(Ljava/lang/String;)V"));
                        methodNode.instructions.insertBefore(instructions[i], insnList);
                        break;
                    }
                }
                return methodNode;
            }
        }
    }
}
```

Désormais, un joli message s'affiche au début du chargement du jeu !
Cet exemple est certes un peu bateau, mais il permet de maîtriser les fondamentaux.

### Supprimer des instructions

Cette fois-ci, on souhaite retirer, pour une quelconque raison, un message de la console qui indique le pseudo du joueur au démarrage du jeu, le fameux `"Setting user: Pseudo"`.

Le fonctionnement est, encore une fois, similaire. Sauf que nous n'allons ni modifier, ni ajouter d'instructions, mais en retirer.
Je passe l'étape de recherche qui nous permet de savoir où est la ligne de code à supprimer :
Il s'agit, encore une fois, dans la classe `net/minecraft/client/Minecraft` du constructeur : `<init>(Lnet/minecraft/client/main/GameConfig;)V`.
Les instructions concernées sont :
```
GETSTATIC net/minecraft/client/Minecraft.LOGGER Lorg/slf4j/Logger;
LDC "Setting user: {}"
ALOAD this
GETFIELD net/minecraft/client/Minecraft.user Lnet/minecraft/client/User;
INVOKEVIRTUAL net/minecraft/client/User.getName()Ljava/lang/String;
INVOKEINTERFACE org/slf4j/Logger.info(Ljava/lang/String;Ljava/lang/Object;)V
```

On définit une instruction repère, qui permettra de nous situer dans la liste d'instructions. Ici, l'instruction LDc "Setting user: {}" est la plus pertinente, nous savons qu'il n'y a aucune instruction similaire utilisée dans la méthode. On peut donc imaginer un début de coremod :
```js
var Opcodes = Java.type('org.objectweb.asm.Opcodes');

function initializeCoreMod() {
    return {
        'MonTransformer': {
            'target': {
                'type': 'METHOD',
                'class': 'net/minecraft/client/Minecraft',
                'methodName': '<init>',
                'methodDesc': '(Lnet/minecraft/client/main/GameConfig;)V'
            },
            'transformer': function(methodNode) {
                var instructions = methodNode.instructions.toArray();
                for(var i = 0; i < instructions.length; i++) {
                    if(instructions[i].getOpcode() == Opcodes.LDC && instructions[i].cst == "Setting user: {}") {
                        break;
                    }
                }
                return methodNode;
            }
        }
    }
}
```

Il faut donc ensuite retirer une a une l'instruction précédente, les quatre suivantes et cette instruction de la liste des instructions de la méthode. Pour cela, il existe une méthode dans la classe `InsnList` qui permet de supprimer une instruction. Son nom est explicite : `remove`.

```js
var Opcodes = Java.type('org.objectweb.asm.Opcodes');

function initializeCoreMod() {
    return {
        'MonTransformer': {
            'target': {
                'type': 'METHOD',
                'class': 'net/minecraft/client/Minecraft',
                'methodName': '<init>',
                'methodDesc': '(Lnet/minecraft/client/main/GameConfig;)V'
            },
            'transformer': function(methodNode) {
                var instructions = methodNode.instructions.toArray();
                for(var i = 0; i < instructions.length; i++) {
                    if(instructions[i].getOpcode() == Opcodes.LDC && instructions[i].cst == "Setting user: {}") {
                        methodNode.instructions.remove(instructions[i - 1]);
                        methodNode.instructions.remove(instructions[i]);
                        methodNode.instructions.remove(instructions[i + 1]);
                        methodNode.instructions.remove(instructions[i + 2]);
                        methodNode.instructions.remove(instructions[i + 3]);
                        methodNode.instructions.remove(instructions[i + 4]);
                        break;
                    }
                }
                return methodNode;
            }
        }
    }
}
```

Désormais, le message dans la console affichant votre pseudo n'apparaît plus. J'en conviens, ce n'est pas très utile.

## Transformation et mappings (lancement en production)
Vous avez peut-être codé plusieurs coremods (grâce à cette page :smile:), tout fonctionne en environnement de développement, mais quand vous exportez votre mod et que vous l'essayer sur le launcher officiel, patatra, rien ne marche !

Il est bien possible qu'il y ait un problème de mappings, c'est-à-dire que les noms des champs et des méthodes soit différents entre l'environnement de développement (lisibles) et la production (illisibles). Il faut donc rendre compatible le coremod dans les deux environnements.

Il y a donc trois endroits possibles qui peuvent causer ces problèmes dans les coremods :
- [La cible du transformer concerne une méthode ou un champ d'une classe de Minecraft](#cible-du-transformer)
- [Un champ d'une classe de Minecraft est modifié/appelé lors de la transformation](#champ-appelé)
- [Une méthode d'une classe de Minecraft est appelée lors de la transformation](#méthode-appelée)

:::info
Les méthodes `main`, les constructeurs `<init>` et les static-initializers `<clinit>` ne sont pas concernés par les mappings.
:::

### Cible du transformer
On considère que le transformer est de type `METHOD` ou `FIELD`.

Situation de départ dans le cas de la transformation d'une méthode (valable pour un champ) :
```js
'target': {
    'type': 'METHOD',
    'class': 'net/minecraft/BlockUtil',
    'methodName': 'getTopConnextedBlock',
    'methodDesc': '(Lnet/minecraft/world/level/BlockGetter;Lnet/minecraft/core/BlockPos;Lnet/minecraft/world/level/block/Block;Lnet/minecraft/core/Direction;Lnet/minecraft/world/level/block/Block;)Ljava/util/Optional;'
}
```
Ici, le problème va concerner le nom de la méthode. En effet, `getTopConnextedBlock` n'existe qu'en environnement de développement. Pour trouver le nom adapté à la production, il y a quatre méthodes :
- Avoir le plugin [Minecraft Development](https://plugins.jetbrains.com/plugin/8327-minecraft-development) sur IntelliJ IDEA, faire clique droit sur la méthode concernée et cliquer sur `Get SRG name`
- Charger dans **Recaf** le fichier jar de Minecraft (par exemple `.minecraft/libraries/net/minecraft/client/1.18.2-20220404.173914/client-1.18.2-20220404.173914-srg.jar` et déduire la méthode concernée par les actions effectuées)
- Chercher dans un des fichiers des mappings consacré aux méthodes le nom `getTopConnextedBlock` et regarder sa correspondance.
- Interroger sur Discord le bot forge `forge-bot#9014` avec la commande !moj `getTopConnextedBlock` et regarder la réponse.

Toutes ces méthodes pointent vers le même résultat : le nom obfusqué de cette méthode est `m_177845_`. Il faut donc remplacer dans la cible du transformer `getTopConnextedBlock` par `m_177845_`.

### Champ appelé
De la même manière, il faut trouver le nom du champ concerné et remplacer le nom actuel par `ASMAPI.mapField('nom_obfusqué')`. Par exemple, pour le champ `pendingReload` dans la classe `Minecraft`, cela donnera `ASMAPI.mapField('f_91024_')`.

### Méthode appelée
De la même manière, il faut trouver le nom du champ concerné et remplacer le nom actuel par `ASMAPI.mapMethod('nom_obfusqué')`. Par exemple, pour le champ `reloadResourcePacks` (avec un booléan en paramètre) dans la classe `Minecraft`, cela donnera `ASMAPI.mapMethod('m_168019_')`.

:::caution
Bien penser à importer la classe `ASMAPI` quand vous utilisez les méthodes de cette classe !
:::

## Conclusion
Si vous avez lu jusqu'ici et pratiqué un minimum, vous êtes désormais initié aux coremods et prêt à aller plus loin ! Je ne vais pas spoiler la suite, cherchez par vous-même et vous trouverez, ce n'est pas si compliqué que ça !
