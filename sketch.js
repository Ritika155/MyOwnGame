var bgImg






function preload(){
  bgImg=loadImage("./Assets/bg1.jpeg")
}





function setup() {
  createCanvas(800,400);
 
}



function draw() {
  background(bgImg);  
  drawSprites();

}