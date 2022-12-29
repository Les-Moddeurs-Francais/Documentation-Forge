# Fork et clonage du repo

Comme la plupart des grands projets open source que vous trouverez, le code source de la documentation est hébergée sur GitHub (le site où vous êtes actuellement). Si vous avez déjà contribué à un autre projet, vous devez surement déjà connaitre le processus suivant et pouvez donc passer directement à la section suivante.

Pour ceux qui débutent en matière de collaboration via Git, voici deux étapes faciles pour vous aider à démarrer.

## Fork

Avant toute chose, faites un fork du ["repo" de la documentation](https://github.com/Les-Moddeurs-Francais/Documentation-Forge) en cliquant sur le bouton **Fork** en haut à droite.

![image](https://user-images.githubusercontent.com/40738104/206232104-43bc4744-00dc-49f3-957b-217a175b1b08.png)

Cela est nécessaire, car tout le monde n'a pas accès au droit d'écriture. Le fork permet d'effectuer les changements souhaités (sur votre espace personnel) afin ensuite, d'ouvrir un **pull request** pour proposer vos changements.

## Clonage

Après avoir effectué un _fork_ du "repo" principale, c'est le moment de copier celui-ci en local sur votre machine.

Pour cela, ouvrez un terminal dans le dossier où vous souhaitez cloner votre fork, ensuite tapez cette commande `git clone https://github.com/<User>/Documentation-Forge` (en remplaçant <User> par votre nom d'utilisateur Github).

# Installation

Une fois ceci fait, il faut ensuite installer les dépendances. Pour cela, ouvrez le dossier où se situent les sources de la documentation avec votre IDE préféré (Php Storm, Webstorm, Visual Studio Code, etc...) et exécutez la commande `npm install` dans le terminal associé.

# Tests

Une fois les modifications effectuées, vous pouvez voir ce que cela rend en exécutant la commande `npm start` dans votre terminal. Une fois le site construit, une fenêtre sera lancée dans votre navigateur par défaut (avec l'url `http://localhost:3000/`).

# Pull Requests

Une fois les changements effectués, il est temps de faire un PR pour nous proposer vos changements. Pour cela vous devrez ouvrir un PR (en vous rendant sur cette [page](https://github.com/Les-Moddeurs-Francais/Documentation-Forge/compare)), en sélectionnant votre _répo_ (qui correspond au fork) ainsi que la branche où vous aurez effectué vos changements (il est conseillé de faire des modifications sur différentes branches pour ainsi pouvoir travailler sur plusieurs aspects le temps que vos PR soient acceptés et ne pas rester bloquer).