var paperObject;
var side1,side2,side3;
var ground;



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperObject= new Paper(100,590,20);
	ground= new Ground(500,600, 1000, 10);

	side1= new Dustbin(690,590,150,10);
	side2= new Dustbin(610,550,10,80);
	side3= new Dustbin(770,550,10,80);

  
}


function draw() {
  background(0);
  Engine.update(engine);

  side1.display();
  side2.display();
  side3.display();
  paperObject.display();
  ground.display();

 // keyPressed();

  drawSprites();
 
}

function keyPressed() 
{
	if (keyCode === UP_ARROW) 
	{
		Matter.Body.applyForce(paperObject.body, paperObject.body.position, {x:15, y:-15})
		
	}
}



