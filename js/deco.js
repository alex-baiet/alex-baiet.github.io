/** Permet de désactiver le script. */
const active = false;

document.body.innerHTML += "<div class='no_scroll' id='bg-area'><div id='bg-anim'></div></div>";
var bg = document.getElementById("bg-anim");
var numSquare = 0;
var allSquares = [];
const maxShape = 100;
var lastUpdate = Date.now();
var debugCount = 0;


// Variables d'animations des formes de fonds
var animTimeInterval = 100; // ms
var minRotationSpeed = -30; // deg/second
var maxRotationSpeed = 30;
var minSpeed = 50; // pixels/second
var maxSpeed = 120;
var minSize = 70;
var maxSize = 200;

function randomInterval(min, max) {
    return min + Math.random() * (max-min);
}

function bgManager() {
    if (bg.childElementCount < maxShape) {
        createSquare();
    }
}

// Ajoute un carré.
function createSquare() {
    // Création de la forme
    squareId = 'bg-square-'+numSquare;
    bg.innerHTML += '<div class="bg-square" id="'+squareId+'"></div>';
    var square = document.getElementById(squareId);
    square.style.width = randomInterval(minSize, maxSize) + "px";
    square.style.height = square.style.width;
    
    // Initialisation de l'animation
    square.style.top = (-square.clientHeight*1.5)+"px";
    square.style.left = (Math.random() * (bg.clientWidth - square.clientWidth))+"px";
    square.setAttribute("speed", randomInterval(minSpeed, maxSpeed));
    square.style.rotate = (Math.random()*360)+"deg";
    square.setAttribute("rotation-speed", randomInterval(minRotationSpeed, maxRotationSpeed));

    // Ajout de la forme dans les éléments a animer
    allSquares.push(numSquare);
    numSquare++;
}

function updateShape() {
    let deltaTime = (Date.now() - lastUpdate)/1000;
    for (let i = allSquares.length-1; i >= 0; i--) {
        let shape = document.getElementById("bg-square-"+allSquares[i]);
        shape.style.top = (parseFloat(shape.style.top.replace("px", "")) + shape.getAttribute("speed") * deltaTime) + "px";
        shape.style.rotate = (parseFloat(shape.style.rotate.replace("deg", "")) + shape.getAttribute("rotation-speed") * deltaTime) + "deg";
        if (debugCount-- > 0) {
            console.log("tick left: "+debugCount);
            console.log("deltaTime: "+deltaTime);
            console.log("top: "+shape.style.top);
            console.log("rotate: "+shape.style.rotate);
        }

        if (shape.style.top.replace("px", "") > bg.clientHeight+shape.clientHeight/2) {
            shape.remove();
            allSquares.splice(i, 1);
        }
    }
    requestAnimationFrame(updateShape);
    lastUpdate = Date.now();
}

if (active) {
    setInterval(bgManager, 2000);
    requestAnimationFrame(updateShape);
}
