var block;



function setup() {
  createCanvas(1000,1000);
 
block = createSprite(200,200,100,100);

}

function draw() 
{
fill ("white");
  background("#004B97");
if(keyIsDown(RIGHT_ARROW)){
block.position.x = block.position.x +5;
}
  drawSprites();

  if(keyIsDown(LEFT_ARROW)){
 block.position.x = block.position.x -5;
 }
    
 if(keyIsDown(UP_ARROW)){
  block.position.y= block.position.y -5;
 }

 if(keyIsDown(DOWN_ARROW)){
  block.position.y = block.position.y+5;
  }
}





