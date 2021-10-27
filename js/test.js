console.log("Hello there from js !");

var body = document.querySelector("body");
body.innerHTML = "ghlmshgsjmghqsmdhm<p>GOES BRRRRRRRR</p>";

console.log(body.innerHTML);

function printCurScript() {
  console.log(document.currentScript.innerHTML);
}

function insert() {
  var newElem = document.createElement("span")
  var curElem = document.currentScript;
  curElem.parentNode.insertBefore(newElem, curElem);
}
