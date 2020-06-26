var right_rect,left_rect;
var ob1,ob2,ob3;


function setup() {
  createCanvas(800,400);
  right_rect = createSprite(600,200,30,80);
 right_rect.debug = true;
right_rect.shapeColor="red";
right_rect.velocityX = -3;



  left_rect = createSprite(200,200,80,30);
left_rect.debug = true;
left_rect.shapeColor = "red";
left_rect.velocityX = 3;



ob1 = createSprite(100,100,50,50);
ob1.shapeColor = "yellow";
ob2 = createSprite(200,100,50,50);
ob2.shapeColor = "yellow";
ob3 = createSprite(300,100,50,50);
ob3.shapeColor = "yellow";



}

function draw() {
  background(255,255,255);  
//right_rect.x = World.mouseX;
//right_rect.y = World.mouseY;



if(isTouching(right_rect,ob1))
{
  right_rect.shapeColor = "blue";
  ob1.shapeColor = "blue";
}
else
{
  right_rect.shapeColor = "red";
  ob1.shapeColor = "red";
  
}

Bounceoff(left_rect,right_rect);

  drawSprites();
}


