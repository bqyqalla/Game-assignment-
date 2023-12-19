
const classes = {
  "W": "tile-wall",
  " ": "tile-space",
  "G": "tile-goal",
  "P": "entity-player",
  "B": "entity-block"
}

let playerPosition ={}

let totalGoalTiles = 5;
let reachedGoalTiles = 0;

function createMapLayout(){
  var gameContet= document.getElementById("game");
  for (var y = 0; y < tileMap01.height; y++) {
    for (var x = 0; x < tileMap01.width; x++) {
      
     if (tileMap01.mapGrid [y][x][0] === "G"){
            totalGoalTiles++;

          }
      var tile = document.createElement("div");
      //tile.classname = "tile" + getStyleClass(tileMap01.mapGrid[row][col]);
      tile.setAttribute("class","tile " + classes[tileMap01.mapGrid[y][x][0]]);
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
    movePlayer(0, -1,0,-2); 
    break;
    case "ArrowDown":
    movePlayer(0, 1,0 ,2); 
    break;
    case "ArrowLeft":
    movePlayer(-1,0,-2,0); 
    break;
    case "ArrowRight":
    movePlayer(1,0,2,0);
    break;
  }
}


function movePlayer(dx, dy,bx,by) {
  var newPlayerX = playerPosition.x + dx;
  var newPlayerY = playerPosition.y + dy;

  console.log(newPlayerX, newPlayerY);
   // Stanna på bannan
  var obsticaleX = playerPosition.x + bx;
  var obsticaleY = playerPosition.y + by;

let newPlayerPosition = document.getElementById(`x:${newPlayerX},y:${newPlayerY}`)

let newboxPosition = document.getElementById(`x:${obsticaleX},y:${obsticaleY}`) 
console.log(newboxPosition);

let oldPlayerPosition = document.getElementById(`x:${playerPosition.x},y:${playerPosition.y}`);

if (newPlayerPosition.classList.contains("tile-wall")) return;
//if (newboxPosition.classList.contains("tile-goal")) { // goal position

 
   
 // newboxPosition.classList.add("tile-goal-reached");

//  var reachedGoalTiles = document.getElementsByClassName("tile-goal-reached");
 
  //reachedGoalTiles = titleMap01.mapGrid[y][x].lenhth;
 // if(reachedGoalTiles.length ===  totalGoalTiles) {
 //   alert(" Winner! Winner! Chicken Dinner!") // winner alert message
 // }
//}
//if(reachedGoalTiles){
 // console.log(reachedGoalTiles.length);
// }


if (newPlayerPosition.classList.contains("entity-block")) {
//moving block
if(newboxPosition.classList.contains("entity-block"))return;
if(newboxPosition.classList.contains("tile-wall")) return;
  
newPlayerPosition.classList.add("entity-player");
newboxPosition.classList.add("entity-block"); 
newPlayerPosition.classList.remove('entity-block');
newboxPosition.classList.remove("tile-space");
if(newboxPositionclassList.contains("tile-goal")){
  
  if(Victory()){
    alert(" Winner! Winner! Chicken Dinner!") // winner alert message
 }

}
else{
//oldPlayerPosition.classList.add(newPlayerPosition.classList[1]);
  
  newPlayerPosition.classList.add('entity-player');
}
console.log(playerPosition);

  oldPlayerPosition.classList.remove('entity-player');



//const boxPosition = newPlayerPosition.classList.contains("entity-block");

function Victory () {
  const goalTiles = document.querySelectorAll("tile-Goal");
  for (const tile of goalTiles) {
      if (!tile.classList.contains("entity-block")) {
          return false;
      }
      
  }
  return true;
}

  
}

  

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
