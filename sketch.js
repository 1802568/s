var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

 

  var particles = [];
  var plinkos = [];
  var plinkos2 = [];
  var plinkos3 = [];
  var plinkos4 = [];
  var plinkos5 = [];
  var plinkos6 = [];
  var divisions =[];
  var particles =[]
  var divisionHeight=300;
  var score =0;

function setup() {
   createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


  for (var k = 20; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

   for (var j = 75; j <=width; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,75));
   }


   for (var t = 50; t <=width; t=t+50) 
   {
   
      plinkos2.push(new Plinko(t,150));
   }
   for (var j = 75; j <=width; j=j+50) 
   {
   
      plinkos3.push(new Plinko(j,225));
   }


   for (var t = 50; t <=width; t=t+50) 
   {
   
      plinkos4.push(new Plinko(t,300));
   }   for (var j = 75; j <=width; j=j+50) 
   {
   
      plinkos5.push(new Plinko(j,375));
   }


   for (var t = 50; t <=width; t=t+50) 
   {
   
      plinkos6.push(new Plinko(t,450));
   }
}
function draw() {
  background("black");
  textSize(20)

  Engine.update(engine);
  ground.display();
  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
plinkos2[i].display()
plinkos3[i].display()
plinkos4[i].display()
plinkos5[i].display()
plinkos6[i].display()
  }

  for (var i = 0; i < divisions.length; i++) {
     
   divisions[i].display();

   
 }


}
