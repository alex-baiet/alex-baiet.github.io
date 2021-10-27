<?php require("php/project.inc.php"); ?>

<!DOCTYPE html>
<html lang="fr">
  <head>
    <title>Alex BAIET | Acceuil</title>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="css/stylesheet.css">
    <link rel="stylesheet" type="text/css" href="css/color.css">
    <link rel="stylesheet" type="text/css" href="css/separation.css">
    <link rel="stylesheet" type="text/css" href="css/project.css">
  </head>

  <body>
    <nav>
      <div class="nav_name">
        <span>M</span>
        <span>E</span>
        <span>N</span>
        <span>U</span>
      </div>
      <h1>Navigation</h1>
      <a href="index.php" class="back">Retour au menu</a>
      <a href="#description">Haut de page</a>
      <a href="#tankulator_py">Tankulator python</a>
      <a href="#tankulator_unity">Tankulator Unity</a>
      <a href="#lightball">LightBall</a>
      <a href="#pymagicmaze">PyMagic-Maze</a>
      <a href="#slay_the_spire">Slay the Spire</a>
      <a href="#hiraizumi_web">Site web de Hiraizumi</a>
    </nav>

    <section>
      <article class="description" id="description">
        <h1>Mes<br><b>Projets</b></h1>
        <div>
          Ici sont réunis tous les projets réalisés au cours de mes études.
        </div>
      </article>
      <?php
        addProject(
          "Tankulator python",
          "tankulator_py",
          "Ceci est mon premier projet réalisé, et a été réalisé sur <b>Python</b>.<br>
          Le projet a commencé en juillet 2019, pendant mes vacances scolaires, par simple curiosité d'apprendre les bases de python.
          L'objectif était de créer un jeu simple, mais finalement, ce projet s'est transformé en un jeu assez complet pouvant être facilement modifier personnalisé par les utilisateurs.<br>
          Ce projet python m'a donc permit d'apprendre en autodidacte à la fois les bases de la programmation, mais aussi des fonctions avancé de ce langage de programmation.<br>
          Malheureusement, le projet sur python ne s'est jamais terminée car python n'était pas un langage suffisamment optimisé pour faire ce que je souhaitais faire.",
          "video/tankulator_py.mp4"
        );

        addProject(
          "Tankulator Unity",
          "tankulator_unity",
          "L'objectif de ce projet était de récreer le jeu Tankulator de python sur l'éditeur de Unity, en l'améliorant et le finissant.<br>
          Ce projet avait la encore comme second but d'apprendre les bases de l'éditeur de jeu <b>Unity</b> et du langage <b>C#</b>.
          Cette version est bien plus complète que la version de Python.",
          "video/tankulator_unity.mp4"
        );

        addProject(
          "LightBall",
          "lightball",
          "LightBall est un projet sur Unity (encore), qui avait pour but de tester mon efficacité en programmation : 
          ce jeu a été réalisé en <b>2 jours seulement</b>, avec tout le contenu créé moi-même.",
          "video/lightball.mp4"
        );

        addProject(
          "PyMagic-Maze",
          "pymagicmaze",
          "Ce projet est un projet imposé lors de ma 1<sup>ère</sup> année de DUT informatique de Marne-la-Vallée.<br>
          le but du projet était de recréer le jeu de société <b>Magic-Maze</b> sur Python.<br>",
          "video/pymagicmaze.mp4"
        );

        addProject(
          "Slay the Spire",
          "slay_the_spire",
          "Ce projet scolaire en <b>Java</b> avait pour but de recréer le début du jeu <b>Slay the Spire</b>.<br>
          L'objectif de ce projet était d'apprendre à gérer de nombreuses données (plus de 150 cartes) et de bien organiser le code en conséquence.<br>
          <br>
          Si vous trouver que l'interface laisse à désirer, c'est normal :<br>
          - Le but du projet n'était pas de faire un beau jeu, juste de gérer de nombreuses données.<br>
          - Dû à une contrainte scolaire, j'étais obligé d'utiliser une librarie graphique très mal optimisée.",
          "video/slay_the_spire.mp4"
        );
        
        addProject(
          "Site web de Hiraizumi",
          "hiraizumi_web",
          "Ce site web présente <b>Hiraizumi</b>, une ville située au Japon et placée au patrimoine mondiale de l'Unesco.
          Ce site fait découvrir ce qu'est Hiraizumi et tous les lieux intérressants à visiter pour aider les visiteurs du site à préparer leurs voyages pour cette ville.<br>
          <br>
          Ce projet a été réalisé avec 3 autres collègues de DUT Informatique. 
          Sur ce projet j'était le <b>support du groupe</b>, c'est à dire que j'ai travaillé à toutes les étapes de la conception du site.<br>
          Pour plus d'informations sur le partage des tâches, 
          allez directement sur la page \"<a target='_blank' href='https://perso-etudiant.u-pem.fr/~abaiet/unesco/us.php'>qui sommes nous</a>\" du site.",
          "",
          "Allez directement voir le site <a target='_blank' href='https://perso-etudiant.u-pem.fr/~abaiet/unesco/index.php'>ici</a>, ce sera mieux qu'une vidéo de démonstration !"
        );
      ?>
    </section>

    <script src="js/deco.js"></script>
  </body>
</html>
