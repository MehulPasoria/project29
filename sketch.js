const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

function setup(){
    createCanvas(800,400);

    engine = Engine.create();
    world = engine.world;

    box1 = new BlueBox(500,360,20,20);
    box2 = new YellowBox(500,360,20,20);
    box3 = new GreenBox(500,360,20,20);
    box4 = new RedBox(500,360,20,20);
    box5 = new GreenBox(500,360,20,20);
    box6 = new YellowBox(500,360,20,20);

    box7 = new BlueBox(500,360,20,20);
    box8 = new YellowBox(500,360,20,20);
    box9 = new GreenBox(500,360,20,20);
    box10 = new RedBox(500,360,20,20);
    box11 = new GreenBox(500,360,20,20);
    box12 = new YellowBox(500,360,20,20);

    box13 = new BlueBox(500,360,20,20);
    box14 = new YellowBox(500,360,20,20);
    box15 = new GreenBox(500,360,20,20);
    box16 = new RedBox(500,360,20,20);
    box17 = new GreenBox(500,360,20,20);
    box18 = new YellowBox(500,360,20,20);

    box19 = new BlueBox(500,360,20,20);
    box20 = new YellowBox(500,360,20,20);
    box21 = new GreenBox(500,360,20,20);
    box22 = new RedBox(500,360,20,20);
    box23 = new GreenBox(500,360,20,20);
    box24 = new YellowBox(500,360,20,20);

    box25 = new BlueBox(500,360,20,20);
    box26 = new YellowBox(500,360,20,20);
    box27 = new GreenBox(500,360,20,20);
    box28 = new RedBox(500,360,20,20);
    box29 = new GreenBox(500,360,20,20);
    box30 = new YellowBox(500,360,20,20);

    box31 = new BlueBox(500,360,20,20);
    box32 = new YellowBox(500,360,20,20);
    box33 = new GreenBox(500,360,20,20);
    box34 = new RedBox(500,360,20,20);
    box35 = new GreenBox(500,360,20,20);
    box36 = new YellowBox(500,360,20,20);

    box37 = new BlueBox(500,360,20,20);
    box38 = new YellowBox(500,360,20,20);
    box39 = new GreenBox(500,360,20,20);

    ball = new Ball(0,0,50);

    spring = New Projectile(ball.body{x:200,y:200});;

    ground = new Platform(400,390,800,20);
}


function draw(){
    background(247,233,178);
    Engine.update(engine);

    debug:true;

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display();
    box31.display();
    box32.display();
    box33.display();
    box34.display();
    box35.display();
    box36.display();
    box37.display();
    box38.display();
    box39.display();

    ball.display();
    spring.display();
    ground.display();
    



}