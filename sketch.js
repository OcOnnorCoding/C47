var bulletImage;
var robotImage;
var droneImage;
var powerImage;
var settingImage;

var bullet, robot, drone, power, setting, ground;

var bulletGroup;

function preload() {
  bulletImage = loadImage("Bullet.gif");
  robotImage = loadImage("robot-run.gif");
  droneImage = loadImage("tomas-sousa-drone3.gif");
  powerImage = loadImage("image-Asset.gif");
  settingImage = loadImage("Background.jpg");
}

function setup() {
  createCanvas(600, 400);

  ground = createSprite(400,270,600,20);

  setting = createSprite(200,100,100,500);
  setting.addImage(settingImage);
  setting.scale = 2;

  bullet = createSprite(100,100,20,20);
  bullet.addImage(bulletImage);
  bullet.scale = 0.2;

  robot = createSprite(100,100,20,20);
  robot.addImage(robotImage);
  robot.scale = 0.15;

  drone = createSprite(600,150,10,10);
  drone.addImage(droneImage);
  drone.scale = 0.10;

  power = createSprite(300,150,20,20);
  power.addImage(powerImage);
  power.scale = 0.2;

  bulletGroup = new Group();
}

function draw() {
  background(620);

  if(keyDown("left_arrow")) {
    robot.x = robot.x - 3;
  }

  if(keyDown("right_arrow")) {
    robot.x = robot.x +3;
  }

  if(keyDown("space")) {
    robot.velocityY = robot.velocityY - 1;
  }

  robot.velocityY = robot.velocityY + 0.8;

  robot.collide(ground);

  if(mousePressedOver("left_mouse")) {
    shootBullet();
  }

  drawSprites();
}

function showBullet(){

}