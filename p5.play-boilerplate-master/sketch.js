var boat

function preload(){
  backgroundImg=loadImage("background1.jpg")
  fish1Img=loadImage("images/fish1.png");
  fish2Img=loadImage("images/fish2.png");
  fish3Img=loadImage("images/fish3.png");
  fish4Img=loadImage("images/fish4.png");
  fish5Img=loadImage("images/fish5.png");
  fish6Img=loadImage("images/fish6.png");
  hookImg=loadImage("images/hook.png");
}

function setup() {
  createCanvas(1500,800);
  boat1=new Boat()
  hook=new Hook(100,100)

  fish1=new Fish()
  fishGroup=new Group()
  fishGroup.add(fish1.body)
}

function draw() {
  background(backgroundImg);  
  drawSprites();

  if(keyDown("right")){
  boat1.body.x+=5
}

if(keyDown("left")){
  boat1.body.x-=5
}
if(frameCount%20===0){
  fish1= new Fish()
  fishGroup.add(fish1.body)
fishCount frames===0
}
}
