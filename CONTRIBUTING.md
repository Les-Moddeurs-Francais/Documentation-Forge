# Fork et clonage du repo

Comme la plupart des grands projets open source que vous trouverez, la documenation est hébergé sur GitHub (le site où vous êtes normalement). Si vous avez déjà contribué à un autre projet, vous connaissez déjà ce processus et pouvez passer directement à la section suivante.

Pour ceux qui débutent en matière de collaboration via Git, voici deux étapes faciles pour vous aider à démarrer.

## Fork

Avant toute chose, faites un fork du ["repo" de la documentation](https://github.com/Les-Moddeurs-Francais/Forge-Doc) en cliquant sur le bouton **Fork** en haut à droite.

Cela est nécessaire car tous le monde n'a pas accès au droit. Le fork permet d'effectuer vos changements afin ensuite d'ouvrir un **pull request** pour proposer vos changements afin que nous puissions en discuter.

## Clonage

Après avoir effectué un _fork_ du repo principale, c'est le moment de copier celui-ci en locale. Pour cela vous devez le cloner sur votre machine en local.

Pour cela, ouvrez le terminal **Git bash** dans le dossier où vous souhaiter cloner votre fork, ensuite tapez cette commande `https://github.com/<User>/Forge-Doc` (en remplaçant <User> par votre nom d'utilisateur github).

# Installation

Une fois ceci fais, il faut désormais installer les dépendances. Pour cela ouvrez le dossier où se situe les sources de la documentation avec votre IDE (Php Storm, Webstorm, Visual Studio Code, etc...) et exécutez la commande `npm install` dans le terminal associé.

# Tests

Une fois les modifications effectuées, vous pouvez voir ce que cela rend en éxecutant la commande `npm start` dans votre terminal. Une fois le site _build_, une fenêtre sera lancée dans votre navigateur par default.

# Pull Requests

Une fois les changements testés et terminés, il est temps de faire un PR pour nous proposer vos changements. Pour cela vous devrez ouvrir un PR (en vous rendant sur cette [page](https://github.com/Les-Moddeurs-Francais/Forge-Doc/compare)) et en sélectionnant votre _répo_ (qui correspond au fork) ainsi que la branche où vous aurez effectué vos changements (il est conseillé de faire des modifications sur différentes branches pour ainsi pouvoir travailler sur plusieurs aspects le temps que vos PR soient acceptés et ne pas rester bloquer).