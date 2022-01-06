---
sidebar_position: 3
title: Capabilities
description: Comment utiliser les capabilities ?
tags: [avancé]
---

Les `capabilities` sont un système mis à disposition par Forge permettant de stocker des données sur des **BlockEntities**(TileEntities), des **Entities**, des **ItemStacks**, des **Levels**(Worlds) et des **LevelChunks**(Chunks).

## Utiliser une Capability

Forge fournit par défaut trois capabilities : `IItemHandler`, qui permet de stocker des items, `IFluidHandler`, qui permet de stocker des liquides et enfin `IEnergyStorage`, qui permet de stocker de l'énergie.

Une capability possède au minimum normalement trois classes : l'interface(Exemple : `IItemHandler`), l'(les) implémentation(s) par défaut de la capability(Exemple : `ItemStackHandler`) et enfin la classe qui contient l'instance de la capability et qui sert à l'enregistrer(Exemple : `CapabilityItemHandler`).

Pour les utiliser, il faut d'abord les attacher à la `BlockEntity`/`Entity`/`ItemStack`/`Level`/`LevelChunk` de votre choix. 
### Attacher une Capability

#### Récupérer l'instance d'une capability

Pour attacher une capability, il faut déjà posséder son unique instance. Pour cela, vous pouvez l'obtenir soit dans la classe qui la contient par défaut, soit en obtenant une autre référence de la même instance en utilisant CapabilityManager#get comme ceci:
```java
static Capability<VotreInterface> VOTRE_CAPABILITY = CapabilityManager.get(new CapabilityToken<>(){});
```
Où VotreInterface est l'interface de votre capability et VOTRE_CAPABILITY est le nom que vous voulez donner à votre variable(appelez-la comme vous voulez)

Exemple :
```java
static Capability<IEnergyStorage> ENERGY_STORAGE =  CapabilityManager.get(new CapabilityToken<>(){});
```
#### Attacher une Capability

Pour attacher une Capability, il faut passer par l'évènement `AttachCapabilitiesEvent`:
* `AttachCapabilitiesEvent<Entity>` pour les `Entity`
* `AttachCapabilitiesEvent<BlockEntity>` pour les `BlockEntity`
* `AttachCapabilitiesEvent<ItemStack>` pour les `ItemStack`
* `AttachCapabilitiesEvent<Level>` pour les `Level`
* `AttachCapabilitiesEvent<LevelChunk>` pour les `LevelChunk`

:::caution
Il n'existe d'évènement que pour ces cinq-là. Par exemple, si vous voulez attacher une Capability à un joueur spécifiquement, `AttachCapabilitiesEvent<Player\>` ne marchera pas. À la place, il faut utiliser `AttachCapabilitiesEvent<Entity\>` et vérifier si `AttachCapabilitiesEvent#getObject`(l'entité) est une instance de Player.
:::caution
Vous devrez avoir une implémentation de votre capability(utilisez celle par défaut ou créez la vôtre, voir [ici](#les-implémentations-de-linterface-de-votre-capability)).

Il vous faudra également une `ResourceLocation` qui sera la "clé" de votre capability et qui sera utilisée pour éviter que la même capability soit ajoutée deux fois ou que d'autres erreurs du style se produisent.

:::tip
Votre clé peut être n'importe quelle `ResourceLocation`, mais elle doit être unique.

Vous pouvez, par exemple, créer une `ResourceLocation` à partir de votre modid et du nom de la Capability que vous ajoutez comme ceci :

```java
ResourceLocation VOTRE_CLE = new ResourceLocation(VOTRE_MODID, NOM_DE_LA_CAPABILITY)
```
:::tip

Pour finir, il vous faudra une implémentation de `ICapabilityProvider` qui retourne avec la fonction `getCapability` un `LazyOptional` de la capability(un Provider)

Exemple :

```java
public class EnergyStorageProvider implements ICapabilityProvider {
    private final LazyOptional<IEnergyStorage> energyStorageOptional;

    public EnergyStorageProvider(){
        this.energyStorageOptional = LazyOptional.of(() -> new EnergyStorage(10000)); // Remplacez le new EnergyStorage() par votre implémentation de l'interface de la capability
    }

    @Nonnull
    @Override
    public <T> LazyOptional<T> getCapability(@Nonnull Capability<T> cap, @Nullable Direction side) {
        return CapabilityEnergy.ENERGY.orEmpty(cap, this.energyStorageOptional);
    }
    
}
```
Pensez bien à remplacer `IEnergyStorage` par l'interface de votre capability, `new EnergyStorage()` par l'implémentation de votre capability et `CapabilityEnergy.ENERGY` par l'unique instance de la capability(regardez [ici](#récupérer-linstance-dune-capability) pour savoir comment l'obtenir)

Exemples :

Attacher la Capability `IEnergyStorage` avec le Provider fait plus haut à tous les `LevelChunk` :
```java
@SubscribeEvent
public static void attachToChunks(AttachCapabilitiesEvent<LevelChunks> event)
{
    event.addCapability(VOTRE_CLE, new EnergyStorageProvider());
}
```
Attacher la Capability IEnergyStorage avec le Provider fait plus haut à des Player :
```java
@SubscribeEvent
public static void attachToEntities(AttachCapabilitiesEvent<Entity> event)
{
    if(event.getObject() instanceof Player){
        event.addCapability(VOTRE_CLE, new EnergyStorageProvider());
    }
}
```
(pensez bien à remplacer VOTRE_CLE par la `ResourceLocation` servant de clé que vous avez créée plus haut et `new EnergyStorageProvider()` par votre provider)

:::warning
Attacher les Capabilities par défaut de Forge(voir [ici](#utiliser-une-capability)) à des classes vanilla peut causer certains problèmes. Par exemple, attacher un `IItemHandler` à un joueur ne marchera pas, car si vous essayez de le récupérer en passant par le joueur, vous obtiendrez un `IItemHandler` qui correspond à l'inventaire du même joueur. Si vous souhaitez tout de même utiliser les Capabilities de Forge, il faut alors créer une nouvelle Capability qui extend celle que vous souhaitez attacher(voir [ici](#créer-une-capability)).
:::

### Récupérer la Capability

Une fois que la Capability est bien attachée, pour l'utiliser, il faut la récupérer ! Pour cela, reprenons l'exemple de la Capability `IEnergyStorage` attachée à un joueur :

Pour la récupérer, il faut d'abord obtenir la classe sur laquelle vous avez attaché la Capability (une instance de `Player` dans notre cas). Une fois cela fait (je n'explique pas comment faire, car cela dépend de sur quoi vous avez attaché la Capability), il faut utiliser dans notre cas(celui du joueur) :

```java
LazyOptional<IEnergyStorage> energyStorageLazyOptional = player.getCapability(CapabilityEnergy.ENERGY);
```

Encore une fois, remplacez bien `IEnergyStorage` par l'interface de votre Capability, `CapabilityEnergy.ENERGY` par l'instance de votre Capability et nommez la variable comme vous voulez.

Nous avons maintenant un `LazyOptional` de notre Capability.
:::tip
Qu'est-ce qu'un `LazyOptional` ?

C'est une classe créée par Forge et qui est similaire à la classe Optional (tapez java Optional sur google si vous ne savez pas ce que c'est). Si vous voulez en savoir plus, regardez dans la classe elle-même, c'est assez bien documenté.
:::

Maintenant que vous possédez votre `LazyOptional`, vous pouvez faire ce que vous voulez avec.

Vous pouvez utiliser `LazyOptional#isPresent` pour savoir si votre Capability est présente, `LazyOptional#ifPresent` pour exécuter un `Consumer` si la capability est présente, et d'autres comme `LazyOptional#orElse`. Pour plus d'informations, je vous invite à regarder dans la class `LazyOptional`, sur [cette page](https://docs.oracle.com/javase/8/docs/api/java/util/Optional.html) ou à rechercher sur Internet.

Exemples (si l'on utilise la Capability `IEnergyStorage`) :
```java
lazyOptional.ifPresent(cap -> cap.receiveEnergy(500, false));

IEnergyStorage energyStorage = lazyOptional.orElse(new EnergyStorage(10000));
energyStorage.extractEnergy(500, false);
```

### Sauvegarder la Capability

Si vous avez fait quelques tests par vous-mêmes, vous avez sûrement remarqué que la Capability n'est pas sauvegardée : c'est normal.

Pour sauvegarder sa Capability, il faut modifier votre Provider comme ceci :

- Tout d'abord, il faut savoir quel type de données vous voulez sauvegarder et trouver le `Tag`(anciennement `NBT`) correspondant : `IntTag` si vous souhaitez sauvegarder un `int`, `StringTag` pour un `String`, ou encore `CompoundTag` pour stocker différents types de données. Il en existe beaucoup d'autres, je vous invite donc à regarder le package *`net.minecraft.nbt`* pour la liste complète.
- Ensuite, changez votre classe pour implémenter `ICapabilitySerializable<VotreTag\>`(remplacez VotreTag par le `Tag` que vous avez choisi) au lieu de `ICapabilityProvider`. Cela devrait générer une erreur, c'est normal.
- Ajoutez la fonction `serializeNBT` qui retourne le `Tag` que vous avez décidé d'utiliser que vous aurez préalablement set avec les données que vous voulez sauvegarder
- Finalement, ajoutez la fonction `deserializeNBT` qui a pour argument le `Tag` que vous avez décidé d'utiliser et que vous pouvez récupérer pour l'utiliser

:::tip
La plupart des implémentations par défaut des Capabilities fournies par Forge(regardez les classes qui implémentent l'interface de la Capability de votre choix) possèdent des fonctions permettant de sérialiser et de désérialiser des Tags. Si elles existent, il est donc préférable de les utiliser dans les fonctions correspondantes de votre Provider.
:::

Voici ce que cela donne si l'on reprend le Provider créé plus haut :
```java
public class EnergyStorageProvider implements ICapabilitySerializable<IntTag> {
    private final LazyOptional<IEnergyStorage> energyStorageOptional;

    public EnergyStorageProvider(){
        this.energyStorageOptional = LazyOptional.of(() -> new EnergyStorage(10000)); // Remplacez le new EnergyStorage() par votre implémentation de l'interface de la capability
    }

    @Nonnull
    @Override
    public <T> LazyOptional<T> getCapability(@Nonnull Capability<T> cap, @Nullable Direction side) {
        return CapabilityEnergy.ENERGY.orEmpty(cap, this.energyStorageOptional);
    }

    @Override
    public IntTag serializeNBT() {
        LazyOptional<EnergyStorage> energyStorage1 = energyStorageOptional.cast(); //Cette ligne sert à transformer le LazyOptional qui contient un IEnergyStorage en LazyOptional qui contient un EnergyStorage. Si vous faites ceci, soyez bien sûrs que votre LazyOptional du début contienne forcément une instance de la classe que vous castez, sinon vous aurez une erreur
        return (IntTag) energyStorage1.orElseThrow(() -> new IllegalArgumentException("Unable to serialize the capability : the capability is not present")).serializeNBT();
    }

    @Override
    public void deserializeNBT(IntTag nbt) {
        LazyOptional<EnergyStorage> energyStorage1 = energyStorageOptional.cast();
        energyStorage1.orElseThrow(() -> new IllegalArgumentException("Unable to deserialize the capability : the capability is not present")).deserializeNBT(nbt);
    }
    
}
```

### Créer une Capability

Si aucune des Capabilities fournies par Forge ne vous convient, vous pouvez créer la vôtre.

Pour ce faire, vous allez devoir créer plusieurs classes : l'interface de la Capability, une ou plusieurs implémentations et enfin une classe qui va contenir l'instance de la Capability.

#### L'interface de la Capability

Cette partie est relativement simple et dépend beaucoup de l'usage que vous voulez faire de votre Capability. Créez juste les fonctions dont vous avez besoin.

Exemple :
```java
public interface ILightCapability {

    /**
     * Used to get the amount of light stored
     * @return the amount of light stored
     */
    int getLight();

    /**
     * Used to define the light stored
     * @param light the new amount of light
     */
    void setLight(int light);

    /**
     * Used to add an amount of light to the storage
     * @param light the amount of light to be added to the storage
     */
    default void receiveLight(int light){
        setLight(getLight() + light);
    }

    /**
     * Used to remove an amount of light to the storage
     * @param light the amount of light to be removed from the storage
     */
    default void extractLight(int light){
        setLight(getLight() - light);
    }

}
```

#### Les implémentations de l'interface de votre Capability

Après avoir créé l'interface de sa Capability, il faut aussi créer des implémentations de cette même interface : ce seront elles qui seront utilisées en temps réel par le biais des `LazyOptional` lorsque vous récupérez votre Capability.

La seule "règle" est qu'il faut que vous implémentiez votre interface, et vous pouvez aussi faire comme Forge et rajouter des fonctions pour sérialiser et désérialiser les données contenues dans la classe, pour rendre le code plus facile à comprendre et à éditer si vous utilisez plusieurs Provider par exemple.

Exemple :
```java
public class LightStorage implements ILightCapability{
    private final int maxLight;
    private int light;
    
    public LightStorage(int maxLight){
        this.maxLight = maxLight;
    }
    
    @Override
    public int getLight() {
        return light;
    }

    @Override
    public void setLight(int light) {
        light = Math.min(light, maxLight); //Un peu de code pour empêcher le niveau de lumière ("light") de dépasser la valeur maximale définie dans le constructeur ou d'être en dessous de 0
        light = Math.max(light, 0);
        this.light = light;
    }

    public Tag serializeNBT(){
        return IntTag.valueOf(getLight());
    }

    public void deserializeNBT(Tag nbt){
        if(nbt instanceof IntTag){
            setLight(((IntTag) nbt).getAsInt());
        }
    }
}
```

#### Créer la classe contenant l'instance de la Capability

Il faut maintenant créer une classe qui contiendra l'instance par défaut de votre Capability(il s'agit en fait d'une instance de la classe `Capability`)

Le code pour la récupérer est exactement le même qu'[ici](#récupérer-linstance-dune-capability), il faut juste mettre ça dans une classe.

Exemple :
```java
public class LightCapability {
    public static Capability<ILightCapability> LIGHT_CAPABILITY = CapabilityManager.get(new CapabilityToken<>(){});
}
```

#### Enregistrer la Capability

Finalement, il faut enregistrer sa Capability à l'aide de la fonction `register` de l'event `RegisterCapabilitiesEvent` pour que Forge sache qu'elle existe.

N'oubliez pas de faire attention à ce que la classe dans laquelle vous mettez l'event soit bien "abonnée" aux flux d'events !

Exemple :
```java
@SubscribeEvent
public void registerCaps(RegisterCapabilitiesEvent event) {
    event.register(ILightCapability.class);
}
```