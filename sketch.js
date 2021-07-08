var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
var particle = null;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   } 
   
        
  



    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,700,50);
  Engine.update(engine);
  text("100",10,500);
  text("10",100,500);
  text("90",190,500);
  text("0",280,500);
  text("50",350,500);
  text("0",430,500);
  text("5",520,500);
  text("200",580,500);
  text("300",670,500);
  text("0",750,500);
  
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   if (particle !== null) {
       var x = particle.body.position.x;
       var y = particle.body.position.y;
       if (y > 500) {
           if (x > 0 && x < 80) {
               score += 100;
               particle = null;
           }
           if (x > 80 && x < 160) {
            score += 10;;
            particle = null;
           }
           if (x > 160 && x < 240) {
               score += 90;
               particle =  null;
           }
           if (x > 240 && x < 320) {
               score += 0;
               particle =  null;
            }
            if (x > 320 && x < 400) {
                score += 50;
                particle =  null;
            }
            if (x > 400 && x < 480) {
                score += 0;
                particle =  null;
            }
            if (x > 480 && x < 560) {
                score += 5;
                particle =  null;
            }
            if (x > 560 && x < 640) {
                score += 200;
                particle =  null;
            }
            if (x > 640 && x < 720) {
                score += 300;
                particle =  null;
            }
            if (x > 720 && x < 800) {
                score += 0;
                particle =  null;
            }
       }
   }
}
function mouseClicked() {
  particle = new Particle(mouseX, 10,10);
  particles.push(particle)
}