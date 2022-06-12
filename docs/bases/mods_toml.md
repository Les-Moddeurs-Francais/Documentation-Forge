---
sidebar_position: 3
title: Mods.toml
description: Comment gérer le mods.toml ?
tags: [bases]
---

Le fichier mods.toml (contenu dans le dossier **resources**) définit les métadonnées de votre mod. Ses informations peuvent être consultées par les utilisateurs depuis l'écran principal du jeu, via le bouton "Mods". Un seul fichier d'information peut décrire plusieurs mods.

Généralement, il est structuré comme ceci :

:::danger

Le champ **license** du fichier mods.toml est obligatoire. S'il n'est pas fourni, une erreur se produira. Consultez les licences disponibles à l'adresse https://choosealicense.com/.

:::
```
modLoader="javafml"
loaderVersion="[41,)"
license="All rights reserved"
[[mods]]

modId="modid"
version="0.0.1"
displayName="Mon mod"
updateJSONURL="https://masuperurl.fr/updates.json"
displayURL="https://masuperurl.fr/monmod"
logoFile="monmod.png"
credits="Mon mod est en Java, merci !"
authors="Toute la communauté"
description='''
Cette description peut être très longue
et en plusieurs lignes !
'''

[[dependencies.modid]]
    modId="forge"
    mandatory=true
    versionRange="[41,)"
    ordering="NONE"
    side="BOTH"

[[dependencies.modid]]
    modId="minecraft"
    mandatory=true
    versionRange="[1.19,1.20)"
    ordering="NONE"
    side="BOTH"
```

| Propriété     | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|---------------|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| modid         | String | Le modid du mod (doit correspondre avec celui de la classe principale)                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| version       | String | La version du mod                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| displayName   | String | Le nom affiché pour le mod                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| updateJSONURL | String | L'URL vers le fichier JSON servant au _système d'update checker_ de Forge                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| displayURL    | String | Le lien de la page du mod                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| logoFile      | String | Le nom du fichier correspondant au logo du mod (celui-ci doit être placé dans le dossier **resources**)                                                                                                                                                                                                                                                                                                                                                                                                                |
| credits       | String | Une chaines de caractère qui contient les remerciements que vous souhaitez mentionner                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| authors       | String | Les auteurs du mod                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| displayTest   | String | Contrôle de l'affichage du mod dans l'écran de connexion aux serveurs (`MATCH_VERSION` signifie que votre mod provoquera un X rouge si les versions du client et du serveur diffères, `IGNORE_SERVER_VERSION` signifie que votre mod ne provoquera pas de X rouge s'il est présent sur le serveur mais pas sur le client, `IGNORE_ALL_VERSION` signifie que votre mod ne provoquera pas de X rouge s'il est présent sur le client ou le serveur, `NONE` signifie qu'aucun test d'affichage n'est défini sur votre mod) |
| description   | String | La description du mod                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| dependencies  | List   | La liste des dépendances du mod                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |