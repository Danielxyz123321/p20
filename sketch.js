
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var block1
var plane
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
var plane_options={
	isStatic:true
}
plane = Bodies.rectangle(400, 650, 1600, 300, plane_options);
World.add(world,plane)

var block1_options = {
	restuition:0.5,
	friction:0.02,
	frictionAir:0,
}
var block2_options = {
	restuition:0.7,
	friction:0.01,
	frictionAir:0.1,
}
var block3_options = {
	restuition:0.01,
	friction:1,
	frictionAir:0.3,
}
block1 = Bodies.circle(330,10,10,block1_options)
World.add(world,block1)
block2 = Bodies.rectangle(110,50,80,10,block2_options)
World.add(world,block2)
block3 = Bodies.rectangle(550,50,10,10,block3_options)
World.add(world,block3)
	Engine.run(engine);
	rectMode(CENTER);
	fill(CENTER)
	ellipseMode(RADIUS)
}


function draw() {
	background(170);
	Engine.update(engine);
  drawSprites();
  ellipse(block1.position.x,block1.position.y,20);
  rect(block2.position.x ,block2.position.y,80,50);
  rect(block3.position.x,block3.position.y);
}



