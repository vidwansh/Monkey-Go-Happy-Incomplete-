
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var string
function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  
monkey = createSprite(80, 315, 20, 20);
monkey.addAnimation("moving", monkey_running)
monkey.scale = 0.1;
  
ground = createSprite(400, 350, 900, 10);
ground.velocityX = -4;
ground.x = ground.width/2;
console.log(ground.x);
  
score = 0;
  
bananaGroup = createGroup ();
obstacleGroup = createGroup ();

}


function draw() {
  
  background("white");

  if(keyDown("space") && monkey.y >= 80){
    monkey.velocityY = -10;
  }
  
  monkey.velocityY = monkey.velocityY + 1;
  
  monkey.collide(ground);
  
  if(ground.x<0){
    ground.x = ground.width/2;
  }
  
  score = score + Math.round(getFrameRate()/60);
  string = text("SURVIVAL TIME : " + score, 150, 80); 
  
  spawnBanana();
  spawnObstacles();
  
  drawSprites();
}

function spawnBanana (){
  if(frameCount%80===0){
    banana = createSprite (400, 120, 20, 20);
    banana.velocityX = -4;
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.lifetime = 300;
    banana.y = Math.round(random(120, 200));
    
    bananaGroup.add(banana);
  }
}

function spawnObstacles (){
  if(frameCount%300===0){
    obstacle = createSprite (400, 315, 20, 20);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -4;
    obstacle.lifetime = 200;
    
    obstacleGroup.add(obstacle);
  }
}