function setup() {
  createCanvas(600, 500);
background("pink");
}

function draw() {
  stroke("black");
  fill("white");
  
 if (mouseIsPressed){
  rect(mouseX, mouseY,50, 50)
}
}
