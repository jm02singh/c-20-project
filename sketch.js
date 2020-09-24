var car, wall;
var speed, weight

var car2, car3, car4;


function setup() {
  createCanvas(1600,400);
speed=random(55,90);
weight=random(400,1350);

car=createSprite(50,67.75,50,50);
car.shapeColor="pink";
car.velocityX=speed; 

car2=createSprite(50,167.5,50,50);
car2.shapeColor="lightblue";
car2.velocityX=speed; 

car3=createSprite(50,266.25,50,50);
car3.shapeColor="purple";
car3.velocityX=speed; 

car4=createSprite(50,365,50,50);
car4.shapeColor="orange";
car4.velocityX=speed; 

wall=createSprite(1300,200,60,height/2);
}

function draw() {
  background("black"); 

  wall.shapeColor="white";

  if(wall.x-car.x<(car.width+wall.width)/2)
  {
    car.velocity=0;
    var deformation=.5*weight*speed*speed/22509;
    if(deformation>180)
    {
      car.shapeColor = "red";
    }

    if(deformation<180 && deformation>100)
    {
      car.shapeColor= "yellow";
    }

    if(deformation<100)
    {
      car.shapeColor="green";
    }
  }








  if(wall.x-car2.x<(car2.width+wall.width)/2)
  {
    car2.velocity=0;
    var deformation=.5*weight*speed*speed/22509;
    if(deformation>180)
    {
      car2.shapeColor = "red";
    }

    if(deformation<180 && deformation>100)
    {
      car2.shapeColor= "yellow";
    }

    if(deformation<100)
    {
      car2.shapeColor="green";
    }
  }









  if(wall.x-car2.x<(car3.width+wall.width)/2)
  {
    car3.velocity=0;
    var deformation=.5*weight*speed*speed/22509;
    if(deformation>180)
    {
      car3.shapeColor = "red";
    }

    if(deformation<180 && deformation>100)
    {
      car3.shapeColor= "yellow";
    }

    if(deformation<100)
    {
      car3.shapeColor="green";
    }
  }










  if(wall.x-car2.x<(car4.width+wall.width)/2)
  {
    car4.velocity=0;
    var deformation=.5*weight*speed*speed/22509;
    if(deformation>180)
    {
      car4.shapeColor = "red";
    }

    if(deformation<180 && deformation>100)
    {
      car4.shapeColor= "yellow";
    }

    if(deformation<100)
    {
      car4.shapeColor="green";
    }
  }



  drawSprites();

}