
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var world, universe;
var roof;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5; 

function preload(){
	
}

function setup() {
	createCanvas(800, 700);

    
	universe = Engine.create();
	world = universe.world ; 

	

	roof = Bodies.rectangle(390, 100, 600, 40);
	
	bob1 = new Bob(150, 500);
	bob2 = new Bob(270, 500);
	bob3 = new Bob(390, 500);
	bob4 = new Bob(510, 500);
	bob5 = new Bob(630, 500);

	rope1 = new Rope(bob1.body, roof.body )

	
	

     
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  rect(roof.position.x, roof.position.y, 600, 40);
  

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

 
  
  drawSprites();
 
}



