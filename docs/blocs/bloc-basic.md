---
sidebar_position: 1
title: Bloc basique
tags: [blocs]
---

## Type d'enregistrement
Pour que le bloc soit reconnu par le jeu, il nous faut l'enregistrer, et pour cela deux choix s'offrent à nous. Soit les events, soit les DeferredRegister.

### DeferredRegister

Veuillez-vous referrer à la [page sur ce sujet](../register/deferred_register).

## Enregistrer le bloc

Maintenant que l'un des types d'enregistrement a été vu, il ne nous reste plus qu'à enregistrer le bloc et ici deux types sont possibles, enregistrer le bloc avec une classe custom ou sans.

### Sans classe custom

Cette manière nous permet d'enregistrer un bloc, mais celui-ci sera très basique (c'est-à-dire qu'on ne pourra pas définir une action lors d'un clique sur le bloc, ou même lors de sa destruction).

Ainsi pour faire l'enregistrement, ajoutez une variable comme celle-ci dans la classe contenant le DeferredRegister :

```java
public static final RegistryObject<Block> MON_BLOC = BLOCKS.register("mon_bloc", () -> new Block(Block.Properties.of(Material.STONE, MaterialColor.STONE)));
```

:::tip

Tous les noms de classes, de variables et de méthodes sont personnalisables comme vous le souhaitez, et cela, tout au long du *tutoriel*.

:::

Si vous souhaitez en savoir un peu plus sur les différentes propriétés disponibles pour les blocs, voici une [page dédiée à ceci](./properties).

### Avec classe custom
Ici cette manière nous permettra plus tard, d'ajouter des comportements au bloc (nous ne verrons cela que dans un prochain chapitre).
Pour cela, vous devez tout d'abord créer une classe custom étendu de la classe `Block`, ce qui nous donne une classe du type :
```java
public class MonBloc extends Block {
    public MonBloc(Properties properties) {
        super(properties);
    }
}
```

Ainsi nous pourrons enregistrer le bloc comme dans la technique sans classe custom sauf que nous ferons un `new MobBloc` et non `new Block`, ce qui donne une variable du type
```java
public static final RegistryObject<Block> MON_BLOC = BLOCKS.register("mon_bloc", () -> new MonBloc(Block.Properties.of(Material.STONE, MaterialColor.STONE)));
```

## Ressources

Maintenant que notre bloc est ajouté, il faut lui donner une blockstate, un modèle, une texture, un nom qui dépendra de la langue ainsi qu'une loottable qui permettra de définir les loots.

```sh title='Arborescence basique des ressources pour un mod'
assets
└── modid
    ├── blockstates
    ├── lang
    ├── models
    │     ├── block
    │     └── item
    └── textures
          ├── block
          └── item
```

### Blockstate

Une blockstate dans Minecraft est un moyen de définir l'appearance d'un bloc selon des paramètres appelés **blockstates**. Ici notre bloc étant basique, celui-ci n'en comporte pas ce qui nous amène à une blockstate du type :

```json
{
  "variants": {
    "": {
      "model": "modid:block/mon_bloc"
    }
  }
}
```

Ici le paramètre `modèle` définit le chemin ers le modèles du bloc contenu dans le dossier models.

### Modèles et texture

Pour un block, son modèle permet de définir sa forme ainsi que les textures qui lui seront appliquées.

#### Modèle du bloc

Ici nous appliquerons un modèle au bloc assimilable au bloc de diamant.

```json
{
  "parent": "minecraft:block/cube_all",
  "textures": {
    "all": "modid:block/mon_bloc"
  }
}
```

`parent` correspond au modèle maitre que le bloc va utiliser.

`textures` correspond aux textures appliquées au bloc.

#### Modèle de l'item

Le bloc dans l'inventaire étant considéré comme un item, il nous faut aussi lui donner un modèle, ici, cela sera encore une fois assimilable au modèle item du bloc de diamant

```json
{
  "parent": "modid:block/mon_bloc"
}
```

:::tip
Ici le modèle de l'item va aller chercher celui du bloc (celui-ci étant paramétré pur avoir le rendu qu'on connait dans l'inventaire)
:::

#### Texture

Comme spécifié dans le modèle, la texture se situera dans le dossier `textures/block` et aura comme nom `mon_bloc.png` (l'extension est importante).

### Traductions
Un bloc à sa création se voie attribuer de manière systématique un nom délocalisé. La raison étant que celui-ci permet de traduire le nom du bloc dans toutes les langues supportées par le jeu.

Ici le bloc ne comportera qu'un nom traduit en anglais (en_us) qui est la langue de base du jeu (en cas de traduction manquante dans une autre langue, le jeu appliquera cette traduction), mais voici toutes les [langues](https://minecraft.fandom.com/wiki/Language) disponible dans le jeu avec leurs codes respectifs.

Les fichiers de langue sont situés dans le dossier `lang` des ressources.

```json title=en_us.json
{
  "block.modid.mon_bloc": "My Block"
}
```

## Datas

Les datas dans Minecraft correspondes à des ressources coté serveur comme les recettes, les tags, les structures et mêmes les loot tables nécessaires aux blocs.

### Loot Tables

Ici nous appliquerons une _loot table_ similaire à celle du bloc de diamant.

```json
{
  "type": "minecraft:block",
  "pools": [
    {
      "rolls": 1.0,
      "bonus_rolls": 0.0,
      "entries": [
        {
          "type": "minecraft:item",
          "name": "modid:mon_bloc"
        }
      ],
      "conditions": [
        {
          "condition": "minecraft:survives_explosion"
        }
      ]
    }
  ]
}
```

Quelques explications s'imposent :
- `type` définit le type de loot table (block, chest, etc...)
- `pools` définit les listes d'item disponibles avec le nombre d'item à sélectionner ainsi que les items.
- `conditions` définit les conditions qui doivent être respectées pour que le bloc _drop_ quelque chose.