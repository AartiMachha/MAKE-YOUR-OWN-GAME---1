var bg;
var diamondImg, diamond;
var keyImg, key;
var ringImg, ring;
var moneyImg, money;
var sackImg, sack;
var treasure, treasureImg;
var notes, notesImg;
var potion, potionImg;
var potion2, potion2Img;
var potion3, potion3Img;
var musicImg, music;
var thief, thiefwalkingD, thiefstandingDR, thiefwalkingL, thiefstandingLR;
var thiefwalkingR, thiefstandingRR, thiefwalkingU, thiefstandingUR;
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12;
var wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20, wall21, wall22;
var door1, door2, door3, door4, door5, door6, door7, door8;

function preload(){
  bg = loadImage("Map.jpg");
  diamondImg = loadImage("diamond.png");
  keyImg = loadImage("key.png");
  ringImg = loadImage("ring.png");
  moneyImg = loadImage("money.png");
  sackImg = loadImage("sack.png");
  treasureImg = loadImage("treasure.png");
  notesImg = loadImage("notes.png");
  potionImg = loadImage("potion.png");
  potion2Img = loadImage("potion2.png");
  potion3Img = loadImage("potion3.png");
  musicImg = loadImage("music.png");
  thiefwalkingD = loadAnimation("thiefDL.png","thiefDR.png");
  thiefstandingDR = loadAnimation("thiefDR.png");
  thiefwalkingL = loadAnimation("thiefLL.png","thiefLR.png");
  thiefstandingLR = loadAnimation("thiefLR.png");
  thiefwalkingR = loadAnimation("thiefRL.png","thiefRR.png");
  thiefstandingRR = loadAnimation("thiefRR.png");
  thiefwalkingU = loadAnimation("thiefUL.png","thiefUR.png");
  thiefstandingUR = loadAnimation("thiefUR.png");
}

function setup() {
  createCanvas(1200,700);

  thief = createSprite(570,650);
  thief.addAnimation("thiefUR.png", thiefstandingUR);
  thief.scale = 0.7;

  diamond = createSprite(473,208);
  diamond.addImage("diamond.png", diamondImg);
  diamond.scale = 0.1;

  key = createSprite(400,80);
  key.addImage("key.png", keyImg);
  key.scale = 0.1;

  ring = createSprite(570,208);
  ring.addImage("ring.png", ringImg);
  ring.scale = 0.1;

  money = createSprite(670,212);
  money.addImage("money.png", moneyImg);
  money.scale = 0.2;

  sack = createSprite(470,160);
  sack.addImage("sack.png", sackImg);
  sack.scale = 0.1;

  treasure = createSprite(265,500);
  treasure.addImage("treasure.png", treasureImg);
  treasure.scale = 0.3;

  notes = createSprite(920,250);
  notes.addImage("notes.png", notesImg);
  notes.scale = 0.1;

  potion = createSprite(670,355);
  potion.addImage("potion.png", potionImg);
  potion.scale = 0.2;

  potion2 = createSprite(470,350);
  potion2.addImage("potion2.png", potion2Img);
  potion2.scale = 0.2;

  potion3 = createSprite(565,350);
  potion3.addImage("potion3.png", potion3Img);
  potion3.scale = 0.1;

  music = createSprite(886,430);
  music.addImage("music.png", musicImg);
  music.scale = 0.1;

  door1 = createSprite(312,283,75,10);
  door1.shapeColor = "blue";

  door2 = createSprite(790,281,45,10);
  door2.shapeColor = "blue";

  door3 = createSprite(792,378,45,10);
  door3.shapeColor = "blue";

  door4 = createSprite(696,450,10,35);
  door4.shapeColor = "blue";

  door5 = createSprite(441,450,10,35);
  door5.shapeColor = "blue";

  door6 = createSprite(440,307,10,30);
  door6.shapeColor = "blue";

  door7 = createSprite(696,258,10,30);
  door7.shapeColor = "blue";

  door8 = createSprite(696,116,10,35);
  door8.shapeColor = "blue";

  wall1 = createSprite(372,47,390,10);
  wall1.shapeColor = 0;
  
  wall2 = createSprite(760,47,260,10);
  wall2.shapeColor = 0;

  wall3 = createSprite(825,520,265,10);
  wall3.shapeColor = 0;

  wall4 = createSprite(313,520,270,10);
  wall4.shapeColor = 0;

  wall5 = createSprite(182,285,10,475);
  wall5.shapeColor = 0;

  wall6 = createSprite(952,308,10,434);
  wall6.shapeColor = 0;

  wall7 = createSprite(440,170,10,238);
  wall7.shapeColor = 0;
  
  wall8 = createSprite(440,375,10,100);
  wall8.shapeColor = 0;

  wall9 = createSprite(440,375,10,100);
  wall9.shapeColor = 0;

  wall10 = createSprite(442,495,10,50);
  wall10.shapeColor = 0;

  wall11 = createSprite(696,495,10,50);
  wall11.shapeColor = 0;

  wall12 = createSprite(696,70,10,50);
  wall12.shapeColor = 0;

  wall13 = createSprite(696,187,10,100);
  wall13.shapeColor = 0;

  wall14 = createSprite(696,353,10,150);
  wall14.shapeColor = 0;

  wall15 = createSprite(572,189,255,10);
  wall15.shapeColor = 0;

  wall16 = createSprite(572,378,255,10);
  wall16.shapeColor = 0;

  wall17 = createSprite(725,378,85,10);
  wall17.shapeColor = 0;

  wall18 = createSprite(887,378,140,10);
  wall18.shapeColor = 0;

  wall19 = createSprite(887,281,140,10);
  wall19.shapeColor = 0;

  wall20 = createSprite(727,281,70,10);
  wall20.shapeColor = 0;

  wall21 = createSprite(227,281,90,10);
  wall21.shapeColor = 0;

  wall22 = createSprite(397,283,90,10);
  wall22.shapeColor = 0;

}

function draw() {
  background(bg); 
  
 if(keyWentDown(DOWN_ARROW)){
   thief.velocityY=3;
   thief.addAnimation("walking_D", thiefwalkingD);
   thief.changeAnimation("walking_D");
 }
 else if(keyWentUp(DOWN_ARROW)){
   thief.velocityY=0;
   thief.addAnimation("standing_D", thiefstandingDR);
   thief.changeAnimation("standing_D");
   }
      
  if(keyWentDown(UP_ARROW)){
    thief.velocityY=-3;
    thief.addAnimation("walking_U", thiefwalkingU);
    thief.changeAnimation("walking_U");
  }
  else if(keyWentUp(UP_ARROW)){
    thief.velocityY=0;
    thief.addAnimation("standing_U", thiefstandingUR);
    thief.changeAnimation("standing_U");
  }

  if(keyWentDown(RIGHT_ARROW)){
    thief.velocityX=3;
    thief.addAnimation("walking_R", thiefwalkingR);
    thief.changeAnimation("walking_R");
  }
  else if(keyWentUp(RIGHT_ARROW)){
    thief.velocityX=0;
    thief.addAnimation("standing_R", thiefstandingRR);
    thief.changeAnimation("standing_R");
  }

  if(keyWentDown(LEFT_ARROW)){
    thief.velocityX=-3;
    thief.addAnimation("walking_L", thiefwalkingL);
    thief.changeAnimation("walking_L");
  }
  else if(keyWentUp(LEFT_ARROW)){
    thief.velocityX=0;
    thief.addAnimation("standing_L", thiefstandingLR);
    thief.changeAnimation("standing_L");
  }
   
 


  drawSprites();
}