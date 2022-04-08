
var trex ,trex_running;
var ground
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")

}

function setup(){
  createCanvas(600,200)
  
  
 trex=createSprite(50,160,20,30)
 trex.scale=0.5
trex.addAnimation("running",trex_running
)
ground=createSprite(0,170,600,20)
}

function draw(){
  background("White")
  trex.collide(ground)
drawSprites();
}
