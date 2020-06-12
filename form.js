class Form{
    constructor(){
       this.inst = createElement('h1');
       this.inst.html("ENTER YOUR DETAILS");

       this.name = createInput('CodeName');

       this.submit = createButton('SUBMIT');

    }

    hide(){
        this.inst.hide();
        this.name.hide();
        this.submit.hide();
    }

    display(){
        
        this.inst.position(displayWidth/4,displayHeight/4);
        this.name.position(displayWidth/4,displayHeight/3);
        this.submit.position(displayWidth/4,displayHeight/2.5);

        this.submit.mousePressed(() => {
            this.name.hide();
            this.submit.hide()

            player.name = this.name.value();

            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount); 

            this.inst.html("let's warm up " + player.name);
        })

    }
}