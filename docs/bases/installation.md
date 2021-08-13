---
sidebar_position: 1
title: Installation
---

# Installation de la workspace

- Installez Java 16 Development Kit (JDK) en suivant ce [lien](https://adoptopenjdk.net/?variant=openjdk8&jvmVariant=hotspot). Minecraft et MinecraftForge depuis la 1.17 sont compilés sous Java 16.
- Installez le Mod Development Kit (MDK) en suivant ce [lien](https://files.minecraftforge.net/).
- Extrayez tous les fichiers et dossiers contenus dans le dossier compressé dans un nouveau dossier (ceci sera votre dossier de mod).
- Selon votre IDE:
  - Pour Intellij IDEA, ouvrez un nouveau projet (bouton `Open` dans la version **2021.2**) et sélectionnez ensuite le fichier `build.gradle` dans le dossier de votre mod, cliquez pour finir sur **OK**.
  - Pour Eclipse, Dans File>Import, choisissez dans Gradle, Existing Gradle projet. Dans le champ `Project root directory`, choisissez le dossier de votre mod et cliquez ensuite sur **Finish**.
- Une fois le projet importé, générez vos configurations de lancement :
  - Pour Intellij IDEA, exécutez la commande gradle `genIntellijRuns` (`gradlew genIntellijRuns`).
  - Pour Eclipse, exécutez la commande gradle `genEclipseRuns` (`gradlew genEclipseRuns`).
- Voilà, si tout c'est bien passé, vous devriez être en mesure de lancer votre mod en test.
