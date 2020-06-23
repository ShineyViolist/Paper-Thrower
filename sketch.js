var paper,ground,bBox,leftBox,rightBox,boxX,boxY;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	rectMode(CENTER);
	
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(150,350,20);
	
	ground = new Box(400,700,800,40);

	boxX = 550;

	boxY = 630;

	bBox = new Box (boxX + 100,boxY + 40,200,20);
	 
	leftBox = new Box (boxX,boxY,20,100);

	rightBox = new Box (boxX + 200,boxY,20,100);

	Engine.run(engine);
  
}


function draw() {
	background(0);
	Engine.update(engine);
	rectMode(CENTER);
	paper.display();
	ground.display();
	bBox.display();
  	leftBox.display();
  	rightBox.display();
  	drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-60})
	}
}

