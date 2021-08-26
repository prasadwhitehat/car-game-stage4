class Game
{
    constructor()
    {

    }
     async getstate()
    {
        await database.ref('gameState').on("value",function(data){state=data.val()})   
        
    }
    
    updateState()
    {
        database.ref('/').update({gameState:state})   
    }
    
    start()
    {
       player.getcount()
       form.display() 
       car1=createSprite(200,200);
       car2=createSprite(400,200);
    }

    play()
    {
      form.hide();
      background("blue")
      var index=0
      var x=x+200
      var y=0
      for(var eachplayer in allplayers)
      {
        index=index+1
        y=displayHeight-allplayers[eachplayer].distance
        cars[index-1].x=x
        cars[index-1].y=y

        if(index===player.index)
        {
            cars[index-1].shapeColor="red"


        }

      }
    }

    end()
    {

    }
}