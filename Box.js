class Box{
    constructor(x,y,width,height){
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    World.add(world,this.body);
}
didsplay(){
    var pos = this.body.position;
    fill(176,219,81);
    rectMode(CENTER);
    rect(pos.x,pos.y,this.width,this.height);
    fill("white");
}
}