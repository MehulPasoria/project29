class Redbox extends Box{
    constructor(x,y){
        super(x,y,20,30);
    }
    display(){
        fill(213,239,231);
        super.display();
    }
}