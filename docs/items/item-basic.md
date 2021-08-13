---
sidebar_position: 1
title: Item basique
---

## Type d'enregistrement
Pour que l'item soit reconnu par le jeu, il nous faut l'enregistrer, et pour cela deux choix s'offrent à nous. Soit les events, soit les DeferredRegister. Ici nous nous intéresserons au DeferredRegister.

### DeferredRegister
Pour enregistrer un item avec cette technique, il nous faut déjà créer le DeferredRegister (qui est une façon de communiquer directement avec les registres sans passer par les events). Pour cela rendez-vous dans une classe au choix et rajoutez ceci :
```java 
public static final DeferredRegister<Item> ITEMS = DeferredRegister.create(ForgeRegistries.ITEMS, "modid");
```
:::tip

Tous les noms de classes, de variables et de méthodes sont personnalisables comme vous le souhaitez, et cela, tout au long du *tutoriel*.

:::

Maintenant pour faire comprendre au jeu que ce DeferredRegister existe, il faut le déclarer et pour cela rendez-vous dans le constructeur de votre classe principale pour y ajouter ceci :
```java 
ClasseItems.ITEMS.register(FMLJavaModLoadingContext.get().getModEventBus());
```

:::caution 

Le nom **ClasseItems** doit être changé par celui de la classe où se situe la variable énoncée plus tôt

:::

## Enregistrer l'item

Maintenant que l'un des types d'enregistrement a été vu, il ne nous reste plus qu'à enregistrer l'item et ici deux types sont possibles. Enregistrer l'item avec une classe custom ou sans.

### Sans classe custom

Cette manière nous permet d'enregistrer un item, mais celui-ci sera très basique (c'est-à-dire qu'on ne pourra pas définir une action lors d'un clique droit ou même lors de la destruction de l'item).

Ainsi pour faire l'enregistrement, ajoutez une variable comme celle-ci dans la classe contenant le DeferredRegister :
```java
public static final RegistryObject<Item> MON_ITEM = ITEMS.register("mon_item", () -> new Item(new Item.Properties().stacksTo(10)));
```

Si vous souhaitez en savoir un peu plus sur les différentes propriétés disponibles, voici une [page dédiée à ceci](./properties).

### Avec classe custom
Ici cette manière nous permettra plus tard, d'ajouter des comportements à l'item (nous ne verrons cela que dans un prochain chapitre).
Pour cela, vous devez tout d'abord créer une classe custom étendu de la classe `Item`, ce qui nous donne une classe du type :
```java
public class MonItem extends Item {
    public MonItem(Properties properties) {
        super(properties);
    }
}
```

Ainsi nous pourrons enregistrer l'item comme dans la technique sans classe custom sauf que nous ferons un `new MonItem` et non `new Item`, ce qui donne une variable du type
```java
public static final RegistryObject<Item> MON_ITEM = ITEMS.register("mon_item", () -> new MonItem(new Item.Properties().tab(CreativeModeTab.TAB_MISC)));
```

## Ressources

Maintenant que notre item est ajouté, il faut lui donner un modèle, une texture ainsi qu'un nom qui dépendra de la langue.

### Modèle et texture

Pour un item, son modèle permet de définir sa forme ainsi que les textures qui lui seront appliquées.

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
  "item.modid.mon_item": "My Item"
}
```