var database;
var form,game,player;
var gameState,playerCount;
var count,state;
var playerindex;
var car1,car2;
var cars=[car1,car2];
var allplayers;


function setup(){
  database = firebase.database();

  
  createCanvas(displayWidth,displayHeight);
  game= new Game();
  player=new Player();
  form=new Form();
  game.getstate();
  game.start();

 

}

function draw()
{
  background("white");
  game.getstate();
  player.getcount();
  console.log(count);
  if(count===2)
  {
    state=1
    game.updateState();

  }
  
  if(state===1)
   {
      game.play();

   } 
 
  drawSprites()
  
   
  
}

