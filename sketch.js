
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var world;
var wall1, wall2, wall3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
 wall1=new Ground(400,680,400,20);
 wall2=new Ground(690,680,5,60);
 wall3=new Ground(650,680,5,60);




var ball_Option=
{
isStatic:false,
restitution:0.3,
friction:0,
density:1.2

}
ball=Bodies.circle(200,100,10,ball_Option);
World.add(world,ball);
rectMode(CENTER);
ellipseMode(RADIUS)

	Engine.run(engine);
  
}


function draw() {
  
  background(0);

  ellipse(ball.position.x,ball.position.y,20);

  wall1.show();
  wall2.show();
  wall3.show();
     
  if (keyCode===UP_ARROW){
	Matter.Bodies.circle(ball,{x:0,y:0},{x:0.5,y:0.6})
  }
  drawSprites();
 
}



