
var bg1,bg2,bg3,bg1IMG, bg2IMG,bg3IMG
var maharashtra1,maharashtra1IMG
var boy,boyIMG
var plane,planeIMG

var gameState ="begin" ;
var coinCount = "0";


function setup() {
  var canvas=createCanvas(displayWidth, displayHeight );

  button = new Button();
  
   bg1=createSprite(displayWidth/2,displayHeight/2,displayWidth*2, displayHeight)
   bg1.addImage("bg1",bg1IMG)
   bg1.scale=1.5
   
   

  
   bg2=createSprite(displayWidth/2,displayHeight/2,displayWidth*2, displayHeight)
  bg2.addImage("bg2",bg2IMG)
  bg2.scale=10
  bg2.visible=false

  bg3=createSprite(displayWidth/2,displayHeight/2,displayWidth*2, displayHeight)
  bg3.addImage("bg3",bg3IMG)
  bg3.scale=0.5
  bg3.visible=false

  maharashtra1=createSprite(displayWidth/2,displayHeight/2,displayWidth*2, displayHeight)
  maharashtra1.addImage("maharashtra1",maharashtra1IMG)
  maharashtra1.scale=2.8
  maharashtra1.visible=false

  plane=createSprite(60,150,10,10);
  plane.addImage("plane",planeIMG)
  plane.scale=5
  plane.velocityX=5;
  plane.visible=false;

  boy=createSprite(60,650,10,10);
  boy.addImage("boy",boyIMG)
  boy.scale=0.7;
   
  
}
function preload(){
   boyIMG=loadImage("boy/main boy img.png")
   bg1IMG=loadImage("boy/map of india.jpg");
   planeIMG=loadImage("boy/planeimg.png")
  
   bg2IMG=loadImage("boy/bg2.png");
   bg3IMG=loadImage("boy/airport.png");
   maharashtra1IMG=loadImage("states/maharashtra.jpg");
}

function draw() {
  background("black"); 
  drawSprites();
console.log(gameState)
 if(gameState === "begin"){
  textSize(20);
  fill("white")
  text("Hi ! , I'm Jake. I'm a traveller, and I am going to vist India very soon. Would you like to come with me?", 110,600);
  
  
 }
  
 if(gameState==="2"){
   textSize(20)
   fill("white")
   text("Thats great, lets go !!",110,600);
  
   
 }
if(gameState==="3"){
  bg1.visible=false;
  bg2.visible=true;
  boy.visible=false;
  plane.visible=true;
}
if (gameState==="4"){
  textSize(20)
  fill("white")
  text("We are here !, first we will visit Maharashtra",600,600);

  plane.visible=false;
 
  bg2.visible=false;
  bg3.visible=true;
  boy.visible=true;
  boy.x=500
  boy.y=600
  boy.scale=0.9

  
}
 if(gameState==="maharashtra"){
     maharashtra1.visible=true;
     bg3.visible=false;
     boy.x=100
     boy.y=700
     boy.scale=0.7
     textSize(20);
     fill("white")
     text("Maharashtra is famous for its caves, and rock-cut architecture as in Ajanta Ellora Caves that is also one of the UNESCO as World Heritage Site. ",200,600)
     text("Some of the temples in Maharashtra are over 1000 years old. Mumbai in Maharashtra is very well known as the city of BOLLYWOOD .",200,620 )
 }




 button.display();
 
 


  

}