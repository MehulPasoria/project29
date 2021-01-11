class Bluebox extends Box{
    constructor(x,y){
        super(x,y,20,20);
    }
    display(){
        fill(85,136,238);
        super.display();
    }
}