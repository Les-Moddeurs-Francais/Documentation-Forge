---
sidebar_position: 4
title: Loot Tables
description: Comment générer des loot tables dynamiquement ?
tags: [data generators]
---


## Introduction

Dans cet article, nous allons voir comment générer des loot tables avec les data generators.

## Loot Table Provider

Pour commencer, nous aurons besoin d'un ``Provider``. C'est à dire, d'une classe renseignant
toutes nos loot tables. Les Loot Tables sont assez différentes de ce côté par rapport
aux autres ``Providers``.

### LootTablesGenerator

````java
public class LootTablesGenerator extends LootTableProvider {

    private final List<Pair<Supplier<Consumer<BiConsumer<ResourceLocation, LootTable.Builder>>>, LootContextParamSet>> subProviders = ImmutableList.of(
            Pair.of(ModBlockLootTable::new, LootContextParamSets.BLOCK));

    public LootTablesGenerator(DataGenerator pGenerator) {
        super(pGenerator);
    }

    @Override
    protected List<Pair<Supplier<Consumer<BiConsumer<ResourceLocation, LootTable.Builder>>>, LootContextParamSet>> getTables() {
        return subProviders;
    }

    @Override
    protected void validate(Map<ResourceLocation, LootTable> map, ValidationContext validationtracker) {

    }
}
````

La variable ``subProviders`` est la liste de nos différents ``Sous-Providers``.
Et c'est ici que la différence va se faire avec les autres providers.
Les Loot Tables ont plusieurs types distincts. Que ce soit les Loot Tables des blocs
ou bien les Loot Tables des mobs, on aura besoin d'un ``Sous-Provider`` pour chaque type.

Ici on utilise la classe ``Pair<K,V>`` permettant d'allier deux classes d'objets différents
en une paire comme son nom l'indique. Le premier type ``K`` représente la classe du ``Sous-Provider``, et
le type ``V`` représente le type de Loot Table, ici ``LootContextParamSets.BLOCK`` désignant
les Loot Tables des blocs.

Pour cet article je commencerai avec les blocs, et au fur et à mesure je rajouterai les différents types
comme les entités ou encore les loots de la pêche, etc...

Bref, revenons-en à notre classe, la seule méthode qui nous intéresse ici, est la méthode ``validate``.
Le fait qu'elle soit vide est volontaire. Cela nous permet d'outrepasser les vérifications
d'autres ressources à la génération de nos fichiers json.

C'est cette classe que vous devrez enregistrer dans votre classe ``DataGen`` (cf. [Data Generators](intro.md))

### ModBlockLootTables

Comme vous l'avez peut-être plus haut, j'ai créé une classe ModBlockLootTable.
C'est la classe de notre ``Sous-Provider`` et voici à quoi elle ressemble.

````java
public class ModBlockLootTable extends BlockLoot {

    private final Map<ResourceLocation, LootTable.Builder> map = Maps.newHashMap();
    private final List<Block> KNOWN_BLOCKS = Lists.newArrayList();

    @Override
    protected void addTables() {

        add(ModObjects.ENDERITE_ORE.get(), createOreDrop(ModObjects.ENDERITE_ORE.get(), ModObjects.ENDERITE_RAW.get()));
        dropSelf(ModObjects.ENDERITE_BLOCK.get());

    }

    @Override
    public void accept(BiConsumer<ResourceLocation, LootTable.Builder> consumer) {
        this.addTables();
        map.forEach((consumer::accept));
    }

    @Override
    protected Iterable<Block> getKnownBlocks() {
        return KNOWN_BLOCKS;
    }

    @Override
    protected void add(Block pBlock, LootTable.Builder pLootTableBuilder) {
        this.map.put(pBlock.getLootTable(), pLootTableBuilder);
    }
}
````

Je ne rentrerai pas dans le détail de toutes les méthodes ici car, comme plus haut,
pas mal de méthodes servent à outrepasser les vérifications posées par Mojang.
La méthode qui nous intéresse est la méthode ``addTables``.

````java
@Override
    protected void addTables() {

        add(ModObjects.ENDERITE_ORE.get(), createOreDrop(ModObjects.ENDERITE_ORE.get(), ModObjects.ENDERITE_RAW.get()));
        dropSelf(ModObjects.ENDERITE_BLOCK.get());

    }
````

J'ai ici deux exemples de Loot Table.

Le premier est un block de minerai qui donnera le minerai brut en question quand je
le casserai. Pour cela j'ai besoin de la méthode ``add`` qui me permet de générer 
la Loot Table en question.

Le premier argument représente le bloc pour lequel on crée la Loot Table.
Le second argument représente la LootTable. Ici ``createOreDrop`` permet
de générer une LootTable de minerai, c'est à dire avec une chance de donner
plusieurs minerais grâce à **Fortune** notamment.

Le second exemple est une Loot Table tout à fait basique qui donnera juste
le bloc en question lorsqu'on le cassera. C'est un peu la LootTable par défaut.

//TODO faire les loot table custom