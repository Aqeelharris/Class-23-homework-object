    
   
  var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
  var packageBody,ground;
  const Engine = Matter.Engine;
  const World = Matter.World;
  const Bodies = Matter.Bodies;
  const Body = Matter.Body;
  var box1,box2,box3;
  var world,engine;

  function preload(){
	 helicopterIMG=loadImage("helicopter.png");
	 packageIMG=loadImage("package.png");
  }
  //problem:
  //1. The package is not droping;
  //2. There is a red block on ground and i do not what it is;
  function setup() {
	 createCanvas(800, 700);
   rectMode(CENTER);
    
   engine = Engine.create(); 
	 world = engine.world;

	 packageSprite=createSprite(width/2, 80, 10,10);
	 packageSprite.addImage(packageIMG);
	 packageSprite.scale=0.2;
	     		
	 helicopterSprite=createSprite(width/2, 200, 10,10);
	 helicopterSprite.addImage(helicopterIMG);
	 helicopterSprite.scale=0.6;
    
   box1 = new Box(400,600,200,20);
   box2 = new Box(310,540,20,100);
   box3 = new Box(490,540,20,100);
  
   packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.2, isStatic:true});
	 World.add(world, packageBody);
   
	 //Create a Ground
	 ground = Bodies.rectangle(width/2, 650, width, 20 , {isStatic:true} );
 	 World.add(world, ground);

	 
  
  }


  function draw() {
     background(0);
     Engine.update(engine);
     packageSprite.x= packageBody.position.x;
     packageSprite.y= packageBody.position.y; 
     //text([mouseX,mouseY],mouseX,mouseY);
     box1.display();
     box2.display(); 
     box3.display();  
     rectMode(CENTER);
     rect(ground.position.x,ground.position.y,800,20);
     ellipseMode(CENTER);
     ellipse(packageBody.position.x,packageBody.position.y,20,20);
     drawSprites();
  }

  function keyPressed() {
    console.log("keyPressed");
      if (keyCode === DOWN_ARROW) {
        Matter.Body.setStatic(packageBody,false);
      }
  }
    


