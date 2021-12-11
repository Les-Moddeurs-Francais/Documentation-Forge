---
sidebar_position: 1
title: Installation
description: Comment installer la workspace du mod ?
tags: [bases]
---

# Installation de la workspace

- Installez Java 17 Development Kit (JDK) en suivant l'un de ces 3 liens : **[Oracle](https://www.oracle.com/java/technologies/javase-jdk16-downloads.html)** OU **[Zulu](https://www.azul.com/downloads/?version=java-16-sts&package=jdk-fx)** OU **[Adoptium](https://adoptium.net/?variant=openjdk16&jvmVariant=hotspot)**. Minecraft et MinecraftForge depuis la 1.18 sont compilés sous Java 17.
- Installez le Mod Development Kit (MDK) en suivant ce [lien](https://files.minecraftforge.net/).
- Extrayez tous les fichiers et dossiers contenus dans le dossier compressé dans un nouveau dossier (ceci sera votre dossier de mod).
- Selon votre IDE:
  - Pour Intellij IDEA, ouvrez un nouveau projet (bouton `Open` dans la version **2021.2**) et sélectionnez ensuite le fichier `build.gradle` dans le dossier de votre mod, cliquez pour finir sur **OK**.
  - Pour Eclipse, Dans File>Import, choisissez dans Gradle, Existing Gradle projet. Dans le champ `Project root directory`, choisissez le dossier de votre mod et cliquez ensuite sur **Finish**.
- Une fois le projet importé, générez vos configurations de lancement :
  - Pour Intellij IDEA, exécutez la commande gradle `genIntellijRuns` (`gradlew genIntellijRuns`).
  - Pour Eclipse, exécutez la commande gradle `genEclipseRuns` (`gradlew genEclipseRuns`).
  - Pour Visual Studio Code, exécutez la commande gradle `genVSCodeRuns` (`gradlew genVSCodeRuns`).
- Voilà, si tout s'est bien passé, vous devriez être en mesure de lancer votre mod en test.
