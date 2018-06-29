// do not remove, allowes autocomplete
/// <reference path="./../p5.global-mode.d.ts" />

var clicks = 10;
var keys = 10;
var time = 0;
var timespeed = 1;
var myHugh = 0;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  colorMode(HSB,100);
}

function draw() { 
  time = time + timespeed;  
  var ellipseOffset = time % 400;
  var myHugh = time % 100;

  if (ellipseOffset > 300) {
    background(myHugh,100,100);
  } else {
    background(100,100,100);
  }

  if (keyIsPressed) {
    timespeed = 50;
  } else {
    timespeed = 1;
  }
  

  ///stroke("pink");
  fill("black");

  ellipse(ellipseOffset, 200, clicks * 10, clicks * 10);
  ellipse(300, 300, clicks * 10, clicks * 10);
}

function mouseReleased() {
  clicks = clicks + 1;
}

function keyReleased() {
  keys = keys + 1;
} 