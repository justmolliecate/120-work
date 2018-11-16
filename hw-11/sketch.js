// Created by Mollie Lemm

// defining variable
let clouds = [];
//setting up canvas
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  let tempX = random(width); //defining paramenters
  let tempY = random(height);
  let tempR = 80

  for (let i=0; i<10000; i++) {
    clouds[i] = new Cloud(tempX,tempY,tempR);
  } // creating array to make 10,000 ellipses

  frameRate(30);
}



function draw() {
  background(0);
  for (let i = 0; i<clouds.length; i++)
  clouds[i].frame(); //calling .frame
}

// creating class
class Cloud {
  constructor(tempX,tempY,tempR){
    this.x = tempX;
    this.y = tempY;
    this.r = tempR;
  }

  frame() {
    this.show();
    this.move();
  }

  show() {
    noStroke();
    fill(random(255), 5);
    ellipse(this.x,this.y,this.r);

  }

  move() {
    this.x = this.x + random(-50,50);
    this.y = this.y + random(-60,60);
  }



}
