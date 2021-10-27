/**
 * Create an article for a project.
 * string $title : Title of the article.
 * string $class : Class to define the background of the article. 
 *                 See and complete in "project.css" to finish selecting the background.
 * string $text : Description of the project. Using decorative tag is allowed.
 * string $videoLink : Source of the video.
 * string $videoText : Text replacing the video. Leave NULL to not replace the video.
 */
function printProject(
  title,
  classname,
  text,
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
  article.innerHTML =
    "<h2>"+title+"</h2>"+
    "<p class='info dark-bg'>"+text+"</p>"+
    (videoText == null ? "<video src='"+videoLink+"' controls></video>" : "<p class='no-video dark-bg'>"+videoText+"</p>");
}