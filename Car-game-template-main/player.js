class Player
{
    constructor()
    {
      this.name=''
      this.distance=0
      this.place=0  
      this.index=0
    }

    getcount()
    {
      database.ref('playerCount').on("value",function(data){count=data.val()}); 
    }

    updatecount()
    {
     database.ref('/').update({playerCount:count})   

    }
    
    getPlayerInfo()
    {
      database.ref('players').on("value",function(data){allplayers=data.val()});
    }

    update()
    {
      playerindex='players/player'+this.index
      database.ref(playerindex).set({name:this.name,distance:this.distance,place:this.place})
    }

}