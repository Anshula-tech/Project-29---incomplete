const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {
    //images
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    //ex. ground = new Ground(600,height,1200,20);
    groundobject = new Ground(600, 380, 1200, 30)
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    
    rectMode(CENTER);
    //ex. box1.display();
    groundobject.display();
}
