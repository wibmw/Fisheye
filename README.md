![FishEye](https://wibmw.github.io/Fisheye/assets/images/logo.png) 



## Contexte
> Site web de photographes freelances, nous proposons une plateforme unique pour
montrer les photos des photographes, sur une belle page et les contacter pour des événements ou des tirages.

## Objectifs
Dans ce projet, nous allons devoir coder une application accessible qui
contient des données et plusieurs fonctionnalités assez conséquentes.
Quand nous nous retrouvons confronté à ce genre de situation, le mieux
est de tenter de découper l'application en une succession de tâches plus
abordables à réaliser successivement.

## Etapes & Fonctionnalités
- **Etape 1 :** Prendre en main les éléments, la maquette et
la base de code
- **Etape 2 :** Importer les datas
- **Etape 3 :** Intégrer la page d'accueil
- **Etape 4 :** Gérer la navigation entre la page accueil et la
page photographe
- **Etape 5 :** Afficher le contenu statique de la page
photographe
- **Etape 6 :** Créer la modale de contact
- **Etape 7 :** Gérer les médias de la Lightbox
- **Etape 8 :** Afficher et gérer les likes
- **Etape 9 :** Créer le système de tri
- **Etape 10 :** Vérifier le code avec un linter
  
---
### Prototype des fonctionnalités :

Nous devons créer les pages suivantes pour le prototype :
- **Page d'accueil :**
○ Liste de tous les photographes avec leur nom, leur slogan, leur
localisation, leur prix/heure et une image miniature de leur choix.
○ Lorsque l'utilisateur clique sur la vignette d'un photographe, il est
amené à sa page.
- **Page des photographes (le contenu de la page sera généré de manière
dynamique en fonction du photographe) :**
  - Affiche une galerie des travaux du photographe.
  - Les photographes peuvent montrer à la fois des photos et des vidéos.
    - Dans le cas des vidéos, montrer une image miniature dans la
galerie.
  - Chaque média comprend un titre et un nombre de likes.
    - Lorsque l'utilisateur clique sur l'icône "Like", le nombre de likes
affiché est incrémenté.
    - Le nombre de likes total d’un photographe doit correspondre à la
somme des likes de chacun de ses médias.
  - Les médias peuvent être triés par popularité ou par titre.
  - Lorsque l'utilisateur clique sur un média, celui-ci doit s’ouvrir dans une
lightbox :
    - Lorsque la lightbox est affichée, il y a une croix dans le coin pour
fermer la fenêtre.
    - Des boutons de navigation permettent de passer d'un élément
média à l'autre dans la lightbox (les utilisateurs peuvent cliquer
sur ces boutons pour naviguer).
    - Les touches fléchées du clavier permettent également de
naviguer entre les médias dans la lightbox.
  - Afficher un bouton pour contacter le photographe.
    - Le formulaire de contact est une modale qui s'affiche par-dessus
le reste.
    - Il comprend des champs pour les noms, l'adresse électronique et
le message.
    - Plus tard, le bouton de contact enverra un message au
photographe. Pour l'instant, seulement afficher le contenu des
trois champs dans les logs de la console.

  
---
## Technologies

**Autorisés:**
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) 

**Linter:**     
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

---
## Notes
###Maquette Figma :

[Figma](https://www.figma.com/file/Q3yNeD7WTK9QHDldg9vaRl/UI-Design-FishEye-FR)

###Polices :
- Logo & titres: __*DM Sans - Open Sans*__
- Texte: __*DM Sans - Open Sans*__

###Couleurs :
***Primaire :***
-  🟥 __*#901C1C*__
-  🟧 __*#D3573C*__
***Secondaire :***
-  🟧 __*#99E2D0*__
-  ⬜️ __*#525252*__
-  ⬜ __*#FAFAFA*__

###Contraintes :
- **Approche desktop-first:** oui
- **Maquette desktop :** oui
- **Validation W3C HTML :** à passer, warning autorisés
- **Validation W3C CSS :** à passer, warning autorisés
- **Validation AChecker :** à passer, warning autorisés
- **Compatibilité :** Dernières versions de Chrome et Firefox 
