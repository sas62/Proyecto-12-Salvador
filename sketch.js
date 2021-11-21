var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg=loadImage("path.png");     
  boyImg=loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png");        
 
}

function setup(){
  
  createCanvas(400,400);
path = createSprite(200,200,0,0);
path.addImage("path", pathImg);
path.velocityY = 1;

path.scale=1.2;

boy = createSprite(200,300,0,0); 
boy.addAnimation("boy", boyImg);
boy.scale=0.9;
  

leftBoundary=createSprite(1,0,100,800);

leftBoundary.visible=false;

rightBoundary=createSprite(410,0,100,800);

rightBoundary.visible=false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  
  
  
  if(path.y > 400 ){
    path.y = height/3;
  }
  
  drawSprites();
}
