const Engine = Matter.Engine;
 const  World = Matter.World;
  const Events = Matter.Event;
  const Bodies = Matter.Bodies;
 
var Particle;
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score = 0;
var turn = 0;

var gameState = "play";

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
  textSize(30)
 text(500,17,550);
 text(500,97,550);
 text(500,177,550);
 text(500,257,550);
 text(100,337,550);
 text(100,417,550);
 text(100,497,550);
 text(200,577,550);
 text(200,657,550);
 text(200,737,550);


  Engine.update(engine);
 
  ground.display();
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }


   if(Particle!==null && Particle!==undefined){
     
    Particle.display();
   
    if(Particle.x<260){

      
        score = score+500
        Particle.destroy();
       
        if(turn>=5){
        gameState = "end";
      
      }
    }

    else if(Particle.x>260){
      if( Particle.x<500 ){
    
      
        score = score+100
        Particle.destroy();
        if(turn>=5){
        gameState = "end";
        }
      }
    }

    
    else if(Particle.x>500){
      if( Particle.x<750 ){

  
        score = score+200
        Particle.destroy();
        if(turn>=5){
        gameState = "end";
        }
      }
    }
   }
}

function mousePressed(){
  if(gameState ==="play"){
    turn++
    Particle = new particle(mouseX , 10 , 10 );
  }
}