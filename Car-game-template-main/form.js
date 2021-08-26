class Form
{
    constructor()
    {
        this.input=createInput("");
        this.button=createButton("Play");
        this.greeting=createElement("h2");
        this.title=createElement("h1");
        this.reset=createButton("reset");
    }

    display()
    {
        this.title.position(1000,10);
        this.title.html("CAR RACING GAME");
        this.input.position(350,250);
        this.button.position(350,300);
        this.reset.position(400,20);

        this.button.mousePressed(()=>
        {
            this.input.hide();
            this.button.hide();
            this.greeting.position(350,250);
            this.greeting.html("Welcome "+this.input.value());
            count=count+1
            player.updatecount();
            player.index=count
            player.name=this.input.value()
            player.update()
        });

        this.reset.mousePressed(()=>
        {
            database.ref('players').remove()
            state=0
            game.updateState();
            count=0
            player.updatecount();



        })
    }

    hide()
    {
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }

    
}