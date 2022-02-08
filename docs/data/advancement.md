---
sidebar_position: 4
title: Progrès
description: Comment utiliser les data generators pour les progrès ?
tags: [data generators]
---

Dans cette section, nous allons voir comment générer nos progrès à l'aide d'un générateur.

## Advancement Provider

Pour commencer, nous avons besoin d'une classe qui héritera de la classe `AdvancementProvider`.
On rajoutera le constructeur de la classe dans lequel nous allons modifier quelques trucs.

```java
public class AdvancementsGenerator extends AdvancementProvider {

    public AdvancementsGenerator(DataGenerator generatorIn, ExistingFileHelper fileHelper){
        super(generatorIn, fileHelper);
    }
}
```

Ici le premier paramètre à renseigner est le `DataGenerator` passé en paramètre du constructeur.
En deuxième, on aura besoin du **ExistingFileHelper** (celui-ci servant pour la vérification des fichiers déjà générés).

Il sera ensuite nécessaire d'utiliser la fonction `registerAdvancements` héritée de la classe mère pour enregistrer nos succès.

```java
@Override
protected void registerAdvancements(Consumer<Advancement> consumer, ExistingFileHelper fileHelper) 
{

}
```

### Ajout du succès

Ici pour ajouter un succès il nous suffira d'écrire le code suivant : 
```java
Advancement.Builder.advancement().display(Items.DIAMOND_BLOCK,
                        new TranslatableComponent(Items.DIAMOND_BLOCK.getDescriptionId()),
                        new TextComponent("You obtained a DiamondBlock"),
                        new ResourceLocation("textures/block/diamond_block.png"),
                        FrameType.CHALLENGE,
                        true,
                        true,
                        false)
                .parent(new ResourceLocation("story/mine_stone"))
                .addCriterion("get_diamond_block", InventoryChangeTrigger.TriggerInstance.hasItems(Items.DIAMOND_BLOCK))
                .save(consumer, new ResourceLocation("modid", "mon_progres"), fileHelper);
```

Pour expliquer :

```java
display(Items.DIAMOND_BLOCK, new TranslatableComponent(Items.DIAMOND_BLOCK.getDescriptionId()), new TextComponent("You obtained a DiamondBlock"), new ResourceLocation("textures/block/diamond_block.png"), FrameType.CHALLENGE, true, true, false)
```

Ici on définit l'affichage du succès avec ces paramètres respectifs. En premier lieu nous avons l'item qui servira d'icône, en deuxième le nom du succès (ici définis par une clé de traduction pour que celui-ci dépende de la langue choisie), en troisième la description du succès (ici un texte simple non dépendant de la langue choisie), en quatrième la texture de fond si jamais votre succès n'a pas de _parent_ (peut être définie sur null si ce n'est pas le cas), en cinquième nous avons l'indication de si le succès une fois obtenu doit afficher une notification (aussi appelée _toast_) en haut à droite de l'écran du joueur, en sixième encore une indication mais cette fois-ci spécifiant si une annonce doit être faite dans le chat à l'obtention du succès et enfin en septième nous avons une indication de si le succès doit être caché avant que celui défini comme _parent_ soit obtenu.

```java
parent(new ResourceLocation("story/mine_stone"))
```

La fonction `parent` permet de définir le _parent_ du succès (arborescence des succès).
Ici le premier paramètre est l'identifiant du succès _parent_ (ici le succès `mine_stone`).

```java
addCriterion("get_diamond_block", InventoryChangeTrigger.TriggerInstance.hasItems(Items.DIAMOND_BLOCK))
```

La fonction `addCriterion` (qui est facultative selon si vous voulez que votre progrès créer un nouvel onglet ou non dans le menu dédié) permet quant à elle, d'ajouter un critère d'obtention au succès (plusieurs critères peuvent être définis). Ici le critère est d'obtenir un bloc de diamant, mais il en existe plein d'autres type (la liste complète est disponible dans le package `net.minecraft.advancements.critereon`).
Ici le premier paramètre correspond au nom du critère et le second à l'instance du critère paramétré.

```java
save(consumer, new ResourceLocation("modid", "mon_progres"), fileHelper)
```

Enfin, la fonction `save` qui sert, comme son nom l'indique, à sauvegarder notre progrès. En
premier paramètre on renseigne `consumer` qui est le paramètre de notre fonction
`registerAdvancements`. En second paramètre on doit renseigner l'identifiant de notre progrès (si celui-ci contient des slashs, le progrès sera placé dans les dossiers portant les noms précédents les slashs (par exemple le succès d'identifiant `test/test_advancement` aura pour identifiant `test_advancement` et sera contenu dans le dossier `test` lui-même contenu dans le dossier `advancements` de vos ressources)). Et enfin en troisième argument nous avons le fileHelper qui est le deuxième paramètre de notre fonction `registerAdvancements`.

## GatherDataEvent

Dans votre fonction avec en paramètre l'event `GatherDataEvent` il nous
faudra ajouter notre 'provider'.

```java
@SubscribeEvent
public static void dataGen(final GatherDataEvent e)
{
    DataGenerator generator = e.getGenerator();

    if(e.includeClient())
    {

    }

    if(e.includeServer())
    {
        generator.addProvider(new AdvancementsGenerator(generator, event.getExistingFileHelper()));
    }
}
```

:::tip
Remarquez le `e.includeServer()` qui permet de répartir les différentes
ressources selon le côté qui les utilise. En l'occurrence, les progrès
ne sont utilisés que par le serveur, donc pas besoin de le générer coté client.
:::
