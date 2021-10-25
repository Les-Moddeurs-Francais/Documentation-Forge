---
sidebar_position: 3
title: Fichiers de traductions
tags: [data generators]
---

Dans cette section, nous allons voir comment générer nos fichiers de traductions
directement à l'aide des data generators.

## Lang Provider

Pour commencer, nous avons besoin d'une classe qui héritera de la classe ``LanguageProvider``.
On rajoutera le constructeur de la classe dans lequel nous allons modifier quelques trucs.

````java
public class LangGenerator extends LanguageProvider {

    public LangGenerator(DataGenerator gen) {
        super(gen, Technicia.MODID, "en_us");
    }
}
````

Ici, j'ai simplement laissé le premier paramètre au constructeur et j'ai renseigné
toutes les autres valeurs directement dans le ``super``. Le premier paramètre
à renseigner dans ce dernier est le ``DataGenerator`` passé en paramètre du constructeur.
Ensuite, on aura besoin du **modid** de votre mod ainsi que de la langue
pour laquelle vous ajoutez une traduction.

:::caution
Je ne montrerai qu'un seul générateur
dans cette section pour lequel je générerai les traductions pour la langue par
défaut de Minecraft.
:::

J'ai marqué ``"en_us"`` pour l'anglais américain qui est la langue de base de
Minecraft. Pour le français par exemple, il faut noter ``"fr_fr""``.

:::tip
Vous pouvez retrouver toutes les langues [ici](https://minecraft.fandom.com/wiki/Language)
:::

Ensuite, on va devoir utiliser la fonction ``addTranslations`` hérité de la classe
mère.

````java
@Override
protected void addTranslations()
{

}
````

C'est dans cette fonction que tout va se jouer. On a accès à des fonctions venant
de la classe mère nommées ``add`` qui permettent d'ajouter nos traductions.
Il y a une surchage de la fonction pour presque tous les objets importants du
jeu. Je vous laisse regarder les différentes surcharges de la fonction.
Pour l'exemple, je vais créer la traduction d'un item.

````java
@Override
protected void addTranslations()
{
    add(MON_ITEM, "My item");
}
````

La fonction est aussi simple d'utilisation. En premier paramètre, on renseigne
notre item puis on donne son nom final qui sera affiché en jeu.

## GatherDataEvent

Dans votre fonction avec en paramètre l'event ``GatherDataEvent`` il nous
reste à ajouter notre 'provider'.

````java
@SubscribeEvent
public static void dataGen(final GatherDataEvent e)
{

    DataGenerator gen = e.getGenerator();

    if(e.includeClient())
    {
        gen.addProvider(new LangGenerator(gen));
    }
}
````

:::tip
Remarquez le ``e.includeClient()`` qui permet de répartir les différentes
ressources selon le côté qui les utilise. En l'occurence, le fichier lang
n'est utilisé que par le client, donc pas besoin de le générer pour le serveur.
:::


