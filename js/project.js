/**
 * Create an article for a project.
 * @param {string} title Title of the article.
 * @param {string} classname Class to define the background of the article. 
 * See and complete in "project.css" to finish selecting the background.
 * @param {string} text : Description of the project. Using decorative tag is allowed.
 * @param {string} period : Période de création du projet.
 * @param {string[]} tools : Liste des outils utilisés.
 * @param {string} videoLink : Source of the video.
 * @param {string} videoText : Text replacing the video. Leave NULL to not replace the video.
 */
function printProject(
  title,
  classname,
  text,
  period = null,
  tools = null,
  videoLink="",
  videoText=null
) {
  // Placement de l'article
  var scriptElem = document.currentScript;
  var article = document.createElement("article");
  scriptElem.parentNode.insertBefore(article, scriptElem);

  // Remplissage du contenu de l'article
  article.classList.add(classname);
  article.id = classname;
  article.style.backgroundImage = `url(img/${classname}.png)`;
  article.innerHTML =
    `<div class="article-bg"></div>
    <h2>${title}</h2>
    <p class='info dark-bg'>
      ${text}<br><br>
      <span class="transparent">
        <img src="img/svg/calendar-fill.svg" /> ${period}
      </span><br>
      <span class="transparent">
        <img src="img/svg/tools.svg" /> ${tools.join(", ")}
      </span>
    </p>` +
    (videoText == null ? `<video src='${videoLink}' class="video-project" controls></video>` : `<p class='no-video dark-bg'>${videoText}</p>`);

  // Ajout d'un raccourci dans la barre de navigation
  let navParent = document.getElementById("nav_links");
  let a = document.createElement("a");
  a.href = `#${classname}`;
  a.innerHTML = title;
  navParent.appendChild(a);
}