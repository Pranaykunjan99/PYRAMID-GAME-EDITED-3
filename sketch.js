
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground1, ground2;
var box1;
var box2;
var box3, box4, box5;
var box6, box7, box8, box9;
var box10, box11, box12;
var box13,box14;
var box15;
var ball1;
var sling;
var ground3;
var box16,box17,box18,box19,box20;
var box21,box22,box23,box24;
var box25,box26;
var box27;
var box28;
var box29;
var box30;
var box31;




function preload() {

}

function setup() {
    var canvas = createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(600, height, 1200, 20)
    ground2 = new Ground(400, 350, 200, 12)
    ground3= new Ground(700,330,200,12)
    ball1=new Ball(80,5,40)
    box1 = new Box(321, 328, 30, 30)
    box2 = new Box(360, 328, 30, 30);
    box3 = new Box(398, 328, 30, 30)
    box4 = new Box(438, 328, 30, 30);
    box5 = new Box(477, 328, 30, 30)
    box6 = new Box(340, 298, 30, 30)
    box7 = new Box(382, 298, 30, 30)
    box8 = new Box(424, 298, 30, 30)
    box9 = new Box(466, 298, 30, 30)
    box10 = new Box(361, 266, 30, 30)
    box11 = new Box(405, 266, 30, 30)
    box12 = new Box(450, 266, 30, 30)
    box13 = new Box(383, 235, 30, 30)
    box14 = new Box(428, 235, 30, 30)
    box15= new Box(403,205,30,30)
    
    box16=new Box(620,309,30,30)
    box17=new Box(660,309,30,30)
    box18=new Box(700,309,30,30)
    box19=new Box(740,309,30,30)
    box20=new Box(780,309,30,30)
   box21=new Box(640,280,30,30)
   box22=new Box(680,280,30,30)
   box23=new Box(721,280,30,30)
   box24=new Box(761,280,30,30)
   box25=new Box(660,250,30,30)
   box26=new Box(700,250,30,30)
   box27=new Box(740,250,30,30)
   box28=new Box(677,220,30,30)
   box29=new Box(720,220,30,30)
   box30=new Box(697,190.30,30)
   box31=new Box(697,190,30,30)
  
    
    
    
    sling=new Slingshot(ball1.body,{x:100,y:250});

    
}

function draw() {
    background("white");
    Engine.update(engine);
    strokeWeight(2);
    ground1.display()
    ground2.display()
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    box7.display()
    box8.display()
    box9.display()
    box10.display()
    box11.display()
    box12.display()
    box13.display()
    box14.display()
    box15.display()
    ball1.display()
    sling.display()
    ground3.display()
    box16.display()
    box17.display()
    box18.display()
    box19.display()
    box20.display()
    box21.display()
    box22.display()
    box23.display()
    box24.display()
    box25.display()
    box26.display()
    box27.display()
    box28.display()
    box29.display()
    box30.display()
    box31.display()
}
function mouseDragged(){
    Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    sling.fly();
}