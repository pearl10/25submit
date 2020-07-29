
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;

var log2,log1,log3;
var ground;

function preload(){

}

function setup() {
	createCanvas(800, 700);

  
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	

	Engine.run(engine);
	
	ground=new Ground(400,680,800,40)
	ball=new Ball(90,675);
	
	

	log1=new Bin(600,660,40,20);
	log2=new Bin2(550,610,20,150);
	log3=new Bin2(650,610,20,150)
	
}                                       


function draw() {
  
  background(255);
  Engine.update(engine)
 
 ball.display();
 
 
 
 
 log3.display();
 log2.display();
 log1.display();
 ground.display();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
	
	Matter.Body.applyForce(ball.body,ball.body.position,{x:110,y:-110});
	
	
	}
	
	
	
	
	
	
	
	}
	
	










