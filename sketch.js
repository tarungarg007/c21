function setup() {
  createCanvas(800,400);
 movingrect= createSprite(400, 200, 50, 50);
 fixedrect=createSprite(200,100,30,30)
 object20=createSprite(100,300,100,30)
 object21=createSprite(400,300,100,30)
 object20.shapeColor="pink"
 object21.shapeColor="yellow"
 object20.velocityX=1;
 object21.velocityX=-1;
}

function draw() {
  background(255,255,255); 
  movingrect.x=mouseX; 
  movingrect.y=mouseY; 
if(istouching(movingrect,object20)){
  movingrect.shapeColor="red"
  object20.shapeColor="red"
}
 else{
  movingrect.shapeColor="pink"
  object20.shapeColor="pink"
 }
 bounceoff(object20,object21)
  drawSprites();
}