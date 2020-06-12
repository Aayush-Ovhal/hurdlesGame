class Game{
    constructor(){
        this.y = 0
   }

   getState(){
       var gameStateRef = database.ref('gameState');
       gameStateRef.on("value", function(data){
           gameState = data.val();
       });
   }

   update(state){
       database.ref('/').update({
           gameState: state
       });
   }

   async start(){
       if(gameState === 0){
           player = new Player();
           var playerCountRef = await database.ref('playerCount').once("value");
           if(playerCountRef.exists()){
              playerCount = playerCountRef.val();
              player.getCount();
           }
           form = new Form();
           form.display();
       }
    // for(var i = 0; i < playerCount; i++){
    //   aths[i] = new Athlete(200,this.y);
    //   //aths.push(new Athlete(200,this.y));
    //   this.y += 10
    // }
    // console.log(aths);
    
    ath1 = new Athlete(200,0);
    ath2 = new Athlete(200,10);
    ath3 = new Athlete(200,20);
    ath4 = new Athlete(200,30);   

    aths.push(ath1,ath2,ath3,ath4);

    frames = athCNates.frames;
      for(var i = 0; i < frames.length; i++){
       let pos = frames[i].position;
       let img = ath1Img.get(pos.x,pos.y,pos.w,pos.h);
     athletes.push(img);
    }
}

   play(){
     form.hide();
     Player.getPlayerInfo();
     if(allPlayers !== undefined){
         background(255,10,0);
         imageMode(CORNER);
         image(bgImg,1000,displayHeight/2-80,displayWidth*5,displayHeight);
        imageMode(CENTER);
        image(athletes[frameCount%athletes.length],ath1.x,ath1.y,200,290);
        image(athletes[frameCount%athletes.length],ath2.x,ath2.y,200,290);
        image(athletes[frameCount%athletes.length],ath3.x,ath3.y,200,290);
        image(athletes[frameCount%athletes.length],ath4.x,ath4.y,200,290);
        // for(var i = 0; i < aths.length; i++){
        //     aths[0].display();
        // }

        for(let h of hurdles){
            h.display();
            h.move();
          }
         var index = 0;
         var x;
         var y = 200;

         for(var plr in allPlayers){
             index += 1;
             x = displayWidth - allPlayers[plr].distance;
             y += 230;
             console.log(aths);
              aths[index-1].x = x;
              aths[index-1].y = y;
            
              if(index === player.index){
                 camera.position.x = aths[index-1].x;
                 camera.position.y = displayHeight/1.1;
             } 
         }
    }

     if(keyIsDown(RIGHT_ARROW) && player.index !== null){
         player.distance -= 50;
         player.update();
     }

    //  if(keyIsDown(UP_ARROW)){
    //         ath.jump();
    // }
    // //ath.move();
   }

   end(){
       console.log("get out!!!");
   }
}