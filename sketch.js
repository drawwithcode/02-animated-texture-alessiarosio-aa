function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background("black");
  colorMode(HSB, 100);
  angleMode(DEGREES);
  // put setup code here
}

function draw() {

  for (let y = 0; y <= noise(frameCount) * windowHeight; y +=15)
  {
   push();
   fill(100*mouseX/windowWidth, 30, 70, random()*100);
   noStroke();
   ellipse(frameCount, y, random(10));
   pop();
  }

  textSize(18);
  text('Move the mouse to change color', 630, 690);
  fill("white");
  noStroke();

  // put drawing code here
}
