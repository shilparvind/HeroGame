var block1,
  block2,
  block3,
  block4,
  block5,
  block6,
  block7,
  block8,
  block9,
  block10;
var hero, bullet, robot1, robot2, robot3, robot4, herofly, door, fillingBox;
var fb1, fb2, fb3;
var hc1 = false;
var hc2 = false;
var hc3 = false;
var hc4 = false;
var bg, bgImg, bg2, bg2Img, bg3, bg3Img;
//var bgSound,dtSound,flSound;
var face, fcImg, reset, resetImg;
var heroImg, flameImg, robotImg, doorImg, heroflyImg, fillingBoxImg;
var health = 150;
var fuel = 80;
var gameState = 0;
var life = 3;
function preload() {
  heroImg = loadImage("images/heroNor.png");
  heroFlyImg = loadImage("images/herofly.png");
  robotImg = loadImage("images/bot.png");
  doorImg = loadImage("images/door.png");
  fillingBoxImg = loadImage("images/fuelbox.png");
  flameImg = loadImage("images/bullet_left.png");
  fcImg = loadImage("images/herofc.png");
  bgImg = loadImage("images/bgImg.jpg");
  bg2Img = loadImage("images/bg2.jpg");
  resetImg = loadImage("images/reset.png");
  bg3Img = loadImage("images/restsc.jpg");
  //bgSound = loadSound("sounds/Backgroundmusic.mp3");
  //dtSound = loadSound("sounds/deathsound.mp3");
  //flSound = loadSound("sounds/deathsound.mp3");
}

function setup() {
  createCanvas(1400, 700);

  block1 = createSprite(10, 430, 30, 850);
  block1.shapeColor = "lightblue";
  block2 = createSprite(700, 690, 1400, 30);
  block2.shapeColor = "lightblue";
  block3 = createSprite(265, 500, 500, 30);
  block4 = createSprite(500, 340, 30, 300);
  block5 = createSprite(800, 440, 30, 500);
  block6 = createSprite(700, 10, 1400, 30);
  block7 = createSprite(1390, 430, 30, 850);
  //block8 = createSprite(935,200,300,30);
  block9 = createSprite(1400, 500, 300, 30);
  block10 = createSprite(100, 100, 200, 30);
  block3.shapeColor = "lightblue";
  //block4.shapeColor = "lightblue";
  block5.shapeColor = "lightblue";
  block6.shapeColor = "lightblue";
  block7.shapeColor = "lightblue";
  //block8.shapeColor = "lightblue";
  block9.shapeColor = "lightblue";
  block10.shapeColor = "lightblue";

  bulletGroup = new Group();

  //blockGroup = new Group();
  bg3 = createSprite(700, 350, 20, 20);
  bg3.addImage(bg3Img);
  bg3.scale = 2.2;

  reset = createSprite(700, 350, 30, 30);
  reset.addImage(resetImg);
  reset.scale = 1;

  face = createSprite(180, 50, 5, 5);
  face.addImage(fcImg);
  face.scale = 0.22;

  door = createSprite(1295, 600, 50, 50);
  door.addImage(doorImg);
  door.scale = 0.45;

  bg = createSprite(700, 350, 20, 20);
  bg.addImage(bgImg);
  bg.scale = 2.2;

  bg2 = createSprite(700, 350, 20, 20);
  bg2.addImage(bg2Img);
  bg2.scale = 2.2;

  fb1 = createSprite(50, 460, 200, 200);
  fb1.addImage(fillingBoxImg);
  fb1.scale = 0.2;

  fb2 = createSprite(760, 650, 200, 200);
  fb2.addImage(fillingBoxImg);
  fb2.scale = 0.2;

  fb3 = createSprite(1350, 460, 200, 200);
  fb3.addImage(fillingBoxImg);
  fb3.scale = 0.2;

  //fuel2();
}

function draw() {
  background("black");
  fill("white");
  text(mouseX + "," + mouseY, mouseX, mouseY);
  //bgSound.play();

  textSize(20);
  text("Fuel:" + fuel, 50, 55);
  //text("Health:"+health,40,50);
  text("X" + life, 200, 55);

  //bullet.collide(blockGroup);
  if (gameState === 0) {
    background("white");
    textSize(30);
    text("start", 700, 350);
    reset.visible = false;
    bg.visible = true;
    bg2.visible = false;
    bg3.visible = false;
    /*robot1.visible = false;
   robot2.visible = false;
   robot3.visible = false;
   robot4.visible = false;*/
    fb1.visible = false;
    fb2.visible = false;
    fb3.visible = false;
    block4.visible = false;
    f();
  }

  if (gameState === 1) {
    bg.visible = false;
    bg3.visble = false;
    reset.visible = false;
    //bg2.visible = false;
    fb1.visible = true;
    fb2.visible = true;
    fb3.visible = true;
    door.visible = true;
    face.visible = true;
    block4.visible = false;
    //block8.visible = false;
    if (keyDown(UP_ARROW) && fuel > 0) {
      hero.y = hero.y - 10;
      fuel = fuel - 1;
    }

    if (keyWentUp(UP_ARROW)) {
      hero.addImage(heroImg);
    }
    hero.y = hero.y + 3;

    if (keyWentDown(UP_ARROW)) {
      hero.addImage(heroFlyImg);
    }

    if (fuel === 0) {
      hero.y = hero.y + 5;
    }

    if (keyDown(LEFT_ARROW)) {
      hero.x = hero.x - 4;
    }
    if (keyDown(RIGHT_ARROW)) {
      hero.x = hero.x + 4;
    }
    if (keyDown(DOWN_ARROW)) {
      hero.y = hero.y + 4;
    }

    robot1.bounceOff(block2);
    robot1.bounceOff(block6);
    robot2.bounceOff(block1);
    robot2.bounceOff(block4);
    robot4.bounceOff(block5);
    robot4.bounceOff(block7);
    robot3.bounceOff(block9);
    robot3.bounceOff(block6);

    hero.bounceOff(block1);
    hero.bounceOff(block2);
    hero.bounceOff(block3);
    //hero.bounceOff(block4);
    hero.bounceOff(block5);
    hero.bounceOff(block6);
    hero.bounceOff(block7);
    //hero.bounceOff(block8);
    hero.bounceOff(block9);
    hero.bounceOff(block10);
    if (keyWentDown("space")) {
      bullet1();
    }

    //hero.depth = fb3.depth;

    if (hero.isTouching(fb2)) {
      fuel = 80;
      //fb2.visible = false;
    }
    if (hero.isTouching(fb1)) {
      fuel = 80;
      //fb1.destroy();
    }
    if (hero.isTouching(fb3)) {
      fuel = 80;
      //fb3.destroy();
    }
    if (hero.isTouching(robot1)) {
      //health = health-50;
      hero.x = 80;
      hero.y = 640;
      life = life - 1;
      fuel = 80;
    }
    if (hero.isTouching(robot2)) {
      //health = health-50;
      hero.x = 80;
      hero.y = 640;
      life = life - 1;
      fuel = 80;
    }
    if (hero.isTouching(robot3)) {
      //health = health-50;
      hero.x = 80;
      hero.y = 640;
      life = life - 1;
      fuel = 80;
    }
    if (hero.isTouching(robot4)) {
      //health = health-50;
      hero.x = 80;
      hero.y = 640;
      life = life - 1;
      fuel = 80;
    }

    destr();
    bulletdes();
    if (hero.isTouching(door)) {
      gameState = 2;
      //background("white");
      //bg2.visible = true;

      /*robot1.visible = false;
   robot2.visible = false;
   robot3.visible = false;
   robot4.visible = false;*/
      fb1.visible = false;
      fb2.visible = false;
      fb3.visible = false;
      block4.visible = false;
    }
  }

  if (gameState === 2) {
    background("white");
    //textSize(30);
    //text("start",700,350);
    hero.visible = false;
    bg2.visible = true;
    bg.visible = false;
    bg3.visible = false;
    robot1.visible = false;
    robot2.visible = false;
    robot3.visible = false;
    robot4.visible = false;
    fb1.visible = false;
    fb2.visible = false;
    fb3.visible = false;
  }
  /*if(health === 0){
  hero.destroy();
  //robot1.destroy();
  //robot2.destroy();
  //robot3.destroy();
  //robot4.destroy();
  text("DEATH,PLEASE RESTART",100,570);
}*/
  if (life === 0) {
    bg3.visible = true;
    hero.destroy();
    text("DEATH,PLEASE RESTART", 100, 570);
    reset.visible = true;
    if (mousePressedOver(reset)) {
      retry();
    }
    robot1.destroy();
    robot2.destroy();
    robot3.destroy();
    robot4.destroy();

    fb2.visible = false;
    fb1.visible = false;
    fb3.visible = false;
    bulletGroup.destroyEach();
    face.visible = false;
    door.visible = false;
  }

  drawSprites();
}
function plr() {
  hero = createSprite(80, 640, 100, 100);
  hero.addImage(heroImg);
  hero.scale = 0.5;
}
function robo1() {
  robot1 = createSprite(650, 500, 50, 50);
  robot1.addImage(robotImg);
  robot1.scale = 0.4;
  robot1.velocityY = 5;
  //console.log("robo1");
}
function robo2() {
  robot2 = createSprite(240, 300, 50, 50);
  robot2.addImage(robotImg);
  robot2.scale = 0.4;
  robot2.velocityX = 5;
  //console.log("robo2");
}
function robo3() {
  robot3 = createSprite(1300, 165, 50, 50);
  robot3.addImage(robotImg);
  robot3.velocityY = 5;
  robot3.scale = 0.4;
  //console.log("robo3");
}
function robo4() {
  robot4 = createSprite(1000, 620, 50, 50);
  robot4.addImage(robotImg);
  robot4.scale = 0.4;
  robot4.velocityX = 5;
  //console.log("robo4");
}
function bullet1() {
  bullet = createSprite(hero.x + 40, hero.y - 5, 20, 20);
  bullet.addImage(flameImg);
  bullet.velocityX = 70;
  bullet.scale = 0.3;
  bulletGroup.add(bullet);

  //bgSound.play();
}

function destr() {
  if (robot2.isTouching(bulletGroup)) {
    robot2.destroy();
    bulletGroup.destroyEach();
    //robo2();
    setTimeout(robo2, 2000);
  }

  if (robot1.isTouching(bulletGroup)) {
    robot1.destroy();
    bulletGroup.destroyEach();
    //robo1();
    setTimeout(robo1, 2000);
  }

  if (robot3.isTouching(bulletGroup)) {
    robot3.destroy();
    bulletGroup.destroyEach();
    //robo3();
    setTimeout(robo3, 2000);
  }

  if (robot4.isTouching(bulletGroup)) {
    robot4.destroy();
    bulletGroup.destroyEach();
    //robo4();
    setTimeout(robo4, 2000);
  }
}
function bulletdes() {
  if (bulletGroup.isTouching(block1)) {
    bulletGroup.destroyEach();
  }
  if (bulletGroup.isTouching(block2)) {
    bulletGroup.destroyEach();
  }
  if (bulletGroup.isTouching(block3)) {
    bulletGroup.destroyEach();
  }
  //if(bulletGroup.isTouching(block4)){
  //bulletGroup.destroyEach();
  //}
  if (bulletGroup.isTouching(block5)) {
    bulletGroup.destroyEach();
  }
  if (bulletGroup.isTouching(block6)) {
    bulletGroup.destroyEach();
  }
  if (bulletGroup.isTouching(block7)) {
    bulletGroup.destroyEach();
  }
  //if(bulletGroup.isTouching(block8)){
  //bulletGroup.destroyEach();
  //}
  if (bulletGroup.isTouching(block9)) {
    bulletGroup.destroyEach();
  }
  if (bulletGroup.isTouching(block10)) {
    bulletGroup.destroyEach();
  }
}
function spawnRobo1() {
  if (frameCount % 80 === 0) {
    robo1();
  }
}
function retry() {
  gameState = 0;
  robot1.destroy();
  robot2.destroy();
  robot3.destroy();
  robot4.destroy();
  bulletGroup.destroyEach();
  /*fb1.destroy();
  fb2.destroy();
  fb3.destroy();*/
  life = 3;
  fuel = 80;
  door.visible = false;
}
function f() {
  if (keyWentDown("f")) {
    gameState = 1;
    robo1();
    robo2();
    robo3();
    robo4();
    plr();
  }
}
