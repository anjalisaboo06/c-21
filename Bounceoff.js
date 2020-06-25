var moveRect2,movingRect;

function setup() {
  createCanvas(1200,800);
  moveRect2=createSprite(400, 200, 50, 80);
  movingRect=createSprite(300, 250, 30, 100);
  moveRect2.debug=true;
  movingRect.debug=true;
  moveRect2.shapeColor="white";
movingRect.shapeColor="white";
moveRect2.velocityX = 5;
movingRect.velocityX = -5;

}

function draw() {
  background(0,0,0);  
  if (movingRect.x - moveRect2.x = moveRect2.width/2 + movingRect.width/2
    && moveRect2.x - movingRect.x < moveRect2.width/2 + movingRect.width/2){
  movingRect.velocityX = 5;
  moveRect2.velocityX = -5;
    }

    if (movingRect.y - moveRect2.y = moveRect2.height/2 + movingRect.height/2
        && moveRect2.x - movingRect.x < moveRect2.height/2 + movingRect.height/2){
      movingRect.velocityY = 5;
      moveRect2.velocityY = -5;
        }
    


  drawSprites();
}
