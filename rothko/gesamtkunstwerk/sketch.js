// do not remove, allowes autocomplete
/// <reference path="./../p5.global-mode.d.ts" />

var hue;
var hueFill;
var hueFill2;



function setup() {
  createCanvas(400, 600);
  colorMode(HSB, 100);
  frameRate(30);
}

function draw() {
  hue = mouseX/255*63.7;
  background (hue, 50, 40);
  noStroke();
  fill(hueFill, 50, 40);
  rect(70, 50, 260, 200);
  fill(hueFill2, 50, 40);
  rect(70, 300, 260, 200);
  filter(BLUR, 3)

}
function mousePressed() {
  if (mouseButton === LEFT) {
    hueFill = random(0, 100);
  }
  if (mouseButton === CENTER) {
    hueFill2 = random(0,100)
  }
}

