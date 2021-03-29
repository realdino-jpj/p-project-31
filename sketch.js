const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var stick ;
var particles=[];
var plinkos = [];
var divisions= [];
var cols = 10;
var rows = 6;
var divisionHeight=300;
var ping
var pa
function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  stick = new Ground(400,790,800,10);
  ping = new Particle(400,20,10);


}

function draw() {
  background(0);  
  Engine.update(engine);
  var spacing = width/ cols;
  for (var j = 0; j < rows; j++){
   for (var i = 0; i < cols; i++){
   var p = new Plinko(i*spacing, j*spacing, 10);
  plinkos.push(p);
 p.display();
 }


}

for (var k=0; k<=innerWidth; k = k + 80 ){

  var d = (new Ground(k, height-divisionHeight/2, 10, divisionHeight));
   divisions.push(d);
   //World.add(world,d);
   d.display();

 }

  if (frameCount % 60 == 0){

  pa = new Particle(random(300,500),10,10);
particles.push(pa);


 }
 for (var i= 0 ; i < particles.length; i++){

 particles[i].display();

 }


 //pa.display();
  stick.display();
ping.display();
  drawSprites();
}

function newParticle() {
 // var pa = new Particle(300, 0, 10);
 //particles.push(pa);
}