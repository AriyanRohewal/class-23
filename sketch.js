const  Engine=Matter.Engine;
const  World=Matter.World;
const  Bodies=Matter.Bodies;

var engine , world ;
var ground , ball ; 

function setup (){
    createCanvas(800,400);
    engine=Engine.create();
    world=engine.world;
    var ball_options={
        restituition:1.0
    }
    ball=Bodies.circle(200,100,15,ball_options);
    World.add(world,ball);
    var ground_options={
      isStatic:true
    }
    ground=Bodies.rectangle(200,390,800,20,ground_options);
    World.add(world,ground);

}

function draw (){
    background("blue");
    Engine.update(engine);

    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,15,15);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,800,20);

}