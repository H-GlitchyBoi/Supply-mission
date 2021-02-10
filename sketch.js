//Dropping a package during a zombie apocalypse
//WhiteHatJR C-22, Supply Mission Project, 23/10/2020
//WhiteHatJR C-23, Supply Mission Project vers 2, 24/10/2020
//Oof there maybe some bugs

var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody, ground;
var designatedArea, desginatedBlockH1, designatedBlockH2, desginatedBlockW;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	designatedBlockW = createSprite(width/2, 670, 200, 20);
	designatedBlockW.shapeColor=color(255, 0, 0);
	designatedBlockH1 = createSprite(310, 610, 20, 100);
	designatedBlockH1.shapeColor=color(255, 0, 0);
	designatedBlockH2 = createSprite(490, 610, 20, 100);
	designatedBlockH2.shapeColor=color(255, 0, 0);

	engine = Engine.create();
	world = engine.world;
	
	packageBody = Bodies.circle(width/2 , 200 , 5 , { isStatic:true });
	World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true } );
 	World.add(world, ground);

	designatedBlockWBody = Bodies.rectangle(width/2, 665, 200, 20, { isStatic : true } );
	World.add(world, designatedBlockWBody);

	Engine.run(engine);
  
}

 
function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody, false);
  }
}



