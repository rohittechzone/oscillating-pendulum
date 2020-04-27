const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var clockimg;
var point1;
var pendulum1;
var pole;
function preload(){
clockimg = loadImage("clock/clock.png");
}
function setup() {
  createCanvas(350,600);
  engine = Engine.create();
  world = engine.world;
  point1 = new Point(175,368,10,10);
  pendulum1 = new Pendulum(20,400,35,35);
  pole = new Pole(point1.body,pendulum1.body);

}

function draw() {
  background(clockimg);  
  Engine.update(engine);
  point1.display();
  pendulum1.display();
if(pendulum1.body.position.y < 370){
   pendulum1.body.position.y = 370;
}
  strokeWeight(5);
  line(pendulum1.body.position.x,pendulum1.body.position.y,point1.body.position.x,point1.body.position.y);
if(keyCode === 83){
  pendulum1.body.position.x = mouseX;
}
else if(keyCode === 82){
  pendulum1.body.position.x = pendulum1.body.position.x;
}
textSize(18);
text("Press 'S' to set and 'R' to releace",50,30);
}