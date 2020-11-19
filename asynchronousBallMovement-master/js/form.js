class Form{
    constructor(){}
    display(){
     var title=createElement("h2")
     title.html("Car Racing Game")
     title.position(350,100);
     var input=createInput("Name")
     input.position(300,300)
     var button=createButton("PLAY")
     button.position(350,350);
     var greeting=createElement("h3")
     button.mousePressed(function(){
         input.hide();
         button.hide();
         var name=input.value();
         playerCount=playerCount+1
         player.update(name)
         player.updateCount(playerCount);
         greeting.html("Hello "+name )
         greeting.position(300,300)
     })
    }
}