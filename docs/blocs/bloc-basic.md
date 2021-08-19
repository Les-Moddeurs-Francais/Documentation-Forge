---
sidebar_position: 1
title: Bloc basique
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

Maintenant que notre item est ajouté, il faut lui donner un modèle, une texture ainsi qu'un nom qui dépendra de la langue.

### Modèle et texture

Pour un block, son modèle permet de définir sa forme ainsi que les textures qui lui seront appliquées.

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

Ici nous appliquerons un modèle basique assimilable au diamant.

```json
{
  "parent": "minecraft:item/generated",
  "textures": {
    "layer0": "minecraft:item/mon_item"
  }
}
```

`parent` correspond au modèle maitre que l'item va utiliser.

`textures` correspond aux textures appliqué à l'item.

Comme spécifié dans le modèle, la texture se situera dans le dossier `textures/item` et aura comme nom `mon_item.png` (l'extension est importante).

### Traductions
Un item à sa création se voie attribuer de manière systématique un nom délocalisé. La raison étant que celui-ci permet de traduire le nom de l'item dans toutes les langues supportées par le jeu.

Ici l'item ne comportera qu'un nom traduit en anglais (en_us) qui est la langue de base du jeu (en cas de traduction manquante dans une autre langue, le jeu appliquera cette traduction), mais voici toutes les [langues](https://minecraft.fandom.com/wiki/Language) disponible dans le jeu avec leurs codes respectifs.

Les fichiers de langue sont situés dans le dossier `lang` des ressources.

```json title=en_us.json
{
  "block.modid.mon_bloc": "My Block"
}
```