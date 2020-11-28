var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
var particles = [];
var plinkos = [];
var divisions = []
var particles = []
var divisionHeight=300;
var score =0;
var count=0
var particle
var turn=0
var gameState="play"
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
 text("Score : "+score,20,30);
 text("Count:"+count,700,30)
 text("500",25,600)
 text("300",100,600)
 text("200",185,600)
 text("200",260,600)
 text("100",340,600)
 text("100",415,600)
 text("200",500,600)
 text("200",585,600)
 text("300",670,600)
 text("500",750,600)
 
Engine.update(engine);
//mousePressed()
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
  }
  if(particle!= null){
    particle.display()
     Score()
}  
 

  }
function mousePressed(){
  if (gameState!=="end"){
    count++;
    particle= new Particle(mouseX,10,10,10)
    
}
  
}
function Score(){
  if (gameState!=="end"&&particle.body.position.x>0&&particle.body.position.x<80&&particle.body.position.y>510){
    score=score+500
  }
  if (gameState!=="end"&&particle.body.position.x>80&&particle.body.position.x<160&&particle.body.position.y>510){
    score=score+300
  }
  if (gameState!=="end"&&particle.body.position.x>160&&particle.body.position.x<320&&particle.body.position.y>510){
    score=score+200
  }
}