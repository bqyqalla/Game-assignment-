
const classes = {
  "W": "tile-wall",
  " ": "tile-space",
  "G": "tile-goal",
  "P": "entity-player",
  "B": "entity-block"
}

let playerPosition ={}

function createMapLayout(){
  var gameContet= document.getElementById("game");
  for (var y = 0; y < tileMap01.height; y++) {
    for (var x = 0; x < tileMap01.width; x++) {
      var tile = document.createElement("div");
      //tile.classname = "tile" + getStyleClass(tileMap01.mapGrid[row][col]);
      tile.setAttribute("class","tile " + classes[tileMap01.mapGrid[y][x]]);
      tile.setAttribute("id", `x:${x},y:${y}`);
      gameContet.appendChild(tile);
    }
  }
  const playerId = document.getElementsByClassName("entity-player")[0].id;
  playerPosition.x = parseInt(playerId. split(",")[0].split(":")[1]);
  playerPosition.y = parseInt(playerId. split(",")[1].split(":")[1]);

};



document.addEventListener("DOMContentLoaded", function (){  
  const game = document.getElementById("game") 
    game.style.display = "grid";
    game.style.gridTemplateColumns= `repeat(${tileMap01.width}, 36px)`;
    
    

  createMapLayout();

  
});

document.addEventListener("keydown", handleKeyPress);
function handleKeyPress(event) {
  
  event.preventDefault();
  
  switch (event.key) {
    case "ArrowUp":
    movePlayer(0, -1); 
    break;
    case "ArrowDown":
    movePlayer(0, 1);
    break;
    case "ArrowLeft":
    movePlayer(-1,0);
    break;
    case "ArrowRight":
    movePlayer(1,0);
    break;
  }
}


function movePlayer(dx, dy) {
  var newPlayerX = playerPosition.x + dx;
  var newPlayerY = playerPosition.y + dy;

  console.log(newPlayerX, newPlayerY);
   // Stanna på bannan
  

let newPlayerPosition = document.getElementById(`x:${newPlayerX},y:${newPlayerY}`)
if (newPlayerPosition.classList[1]=="tile-wall") return;
console.log(playerPosition);

let oldPlayerPosition = document.getElementById(`x:${playerPosition.x},y:${playerPosition.y}`);
oldPlayerPosition.classList.add(newPlayerPosition.classList[1]);
oldPlayerPosition.classList.remove('entity-player');







newPlayerPosition.classList.add('entity-player');
console.log(newPlayerPosition);
playerPosition.x = newPlayerX
playerPosition.y = newPlayerY


//var nextTile = tileMap01.mapGrid[newPlayerY][newPlayerX];
//if (nextTile === "W") return;

  //if( nextTile === "B"){
  //var newBoxX = newPlayerX + dx;
  //var newBoxY = newPlayerY + dy;
// flytta box o spelare 
  //if( newBoxX <= 0 || newBoxX >= tileMap01.width || 
    //newBoxY <= 0 || newBoxY >= tileMap01.height || 
    //tileMap01.mapGrid[newBoxX][newBoxY] === " " ){
     // playerPosition.x = newPlayerX;
      //playerPosition.y = newPlayerY;

      //updatePlayerPosition();
      //updateBoxPostion(newBoxX, newBoxY);
    //}
    // flytta spelare
      //else if (nextTile === " "){

        //playerPosition.x = newPlayerX
        //playerPosition.y = newPlayerY

       //updatePlayerPosition();

      //}
//}
}
