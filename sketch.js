var wall1,wall2,car1,car2,car3;
var speed,weight;



function setup() {
  createCanvas(600,600);
speed=random(55,90);
weight=random(400,1500);
car1=createSprite(50,100,25,25)
car1.shapeColor=("white");
//car1.velocityX=speed;
car2=createSprite(50,300,25,25)
car2.shapeColor=("white");
//car2.velocityX=speed;
car3=createSprite(50,500,25,25)
car3.shapeColor=("white");
//car3.velocityX=speed;
wall1=createSprite(300,200,height,10);
wall2=createSprite(300,400,height,10);
wall1.shapeColor=("white");
wall2.shapeColor=("white");
}
function draw() {
  background("black"); 
  if(wall1.x-car1.x(car1.width+wall1.width)/2)
{
car1.velocityX=0;
var deformation=0.5*weight*speed*speed/22509;
if(deformation>180)
{
car1.shapecolor=color(225,0,0);
}
if(deformation<180  && deformation>100)
{
car1.shapecolor=color(230,230,0);
}
if(deformation<100)
{
car1.shapecolor=color(0,225,0);
}

} 
  drawSprites();
}