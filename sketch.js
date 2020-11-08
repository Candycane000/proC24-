
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground  
function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
//	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
  //World.add(world, ground);
  ground= new Ground(750,650,1500,20);
	box= new Box(1400,595,20,90);
	box1= new Box(1240,595,20,90);
	box2= new Box(1320,630,140,20);
	paper= new Paper(100,100,30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  box.display() 
  box1.display()
  box2.display()
 paper.display()
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){

     Body.applyForce(paper.body,paper.body.position,{x:95,y:-95})
	}
}


