class Hurdle{
    constructor(){
        this.x = displayWidth*5;
        this.y = displayHeight/2;
    }

    move(){
        this.x -= 20;
    }

    display(){

        noStroke();
        fill(0);
        rect(this.x,this.y,50,50);
    }
}