
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score = 0,ground;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
monkey = createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running) ; 
monkey.scale=0.1;

ground = createSprite(200,350,400,10);
ground.velocityX= -4;

bananaGroup = createGroup();
obstacleGroup = createGroup();  
}


function draw() {
background("white")

if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
        
    }
    
    
  
  
  
  
  //add gravity
    monkey.velocityY = monkey.velocityY + 0.8  
  monkey.collide(ground);
  
  ground.x = ground.width/2;
  
  stroke("blue");
  textSize(20);
  fill("blue");
  text("score: "+ score, 10, 40);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival Time: "+ survivalTime, 10,60);
  
  
  Food();
  obsta();
  drawSprites();  
}

function Food() {
 
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.velocityX = -4;
    banana.scale=0.1;
    bananaGroup.add(banana);
    bananaGroup.setLifetimeEach(200);
  } 
}

function obsta(){
 if (frameCount % 300 === 0) {
    var obstacle = createSprite(600,320,40,10);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -4;
    obstacle.scale=0.15;
    obstacleGroup.add(obstacle);
    obstacleGroup.setLifetimeEach(200);
 }  
  
  
}


