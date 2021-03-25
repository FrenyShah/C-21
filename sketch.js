var fixedRect,movingRect;
function setup() {

  createCanvas(1200,800);
  fixedRect=createSprite(400, 100, 50, 80);
  fixedRect.shapeColor="green";
  movingRect=createSprite(400,800,80,50);
  movingRect.shapeColor="green";
movingRect.velocityY=-3 
fixedRect.velocityY=3
}

function draw() {
  background("blue");  
  //movingRect.x=World.mouseX;
  //movingRect.y=World.mouseY;
  
bounceOff(movingRect,fixedRect)

  drawSprites();
}
