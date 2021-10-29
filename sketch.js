var backGround
var loadBackground
var loadStick
var stickPlayer
var loadObstacle1
var obstacle1
var loadGround
var ground

function preload(){
  loadStick=loadImage("stickAvatar.png");
  loadBackground=loadImage("background.jpg");
  loadObstacle1=loadImage("obstacle1.png");
  loadGround=loadImage("ground.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  backGround = createSprite(displayWidth/2,displayHeight/2,40,40);
 backGround.addImage(loadBackground)
 backGround.scale=1.45
 ground = createSprite(displayWidth/2-70,displayHeight-280,width,20);
 ground.addImage(loadGround)
 stickPlayer = createSprite(100,displayHeight-375, 50, 50);
 stickPlayer.addImage(loadStick)
 stickPlayer.scale=0.37
obstacle1 = createSprite(200,200,20,20);
obstacle1.addImage(loadObstacle1)
obstacle1.scale=0.09
}

function draw() {
  background(255,255,255);  
  drawSprites();
}

