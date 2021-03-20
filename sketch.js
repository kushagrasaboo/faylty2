
var database
var gameState=0;
var playerCount;
var game,player,form;
var c1,c2,c3,c4,cars;
var allPlayers;
function setup(){
    createCanvas(displayWidth,displayHeight);
    database = firebase.database()
   game=new Game();
   
   game.getGameState()
   game.wait()
}

function draw(){
    background("white");
    if(playerCount==4){
     game.updateGameState(1);
    }

    if(gameState===1){
    game.play()
    }
}

