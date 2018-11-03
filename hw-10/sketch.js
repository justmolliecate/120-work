
// setup canvas
function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(1);
}

// global variables ellipse petals size and such

let pos_x = 0;
let pos_y = 30;
let pos_1x = -50;
let pos_1y = -10;
let x = 50;
let y = 130;


function draw() {
    background('black');
    noStroke();
    ellipseMode(CENTER);

// variables for array for stars
    let numPerRow = 20;
    let circleSize= 2;
    let pad = width / numPerRow;
    let pad2 = width / 22;
    let kolors = ['white', 'black', 'black', 'black', 'black',];

// random stars array
    push();

      for (let i = circleSize; i < height; i+=pad) {
        for (let z = circleSize; z < width; z+=pad) {
          fill(random(kolors));
          ellipse(z,i,circleSize);
        }

      }
    pop();

    //functions for all of the different flowers

    flowerDraw(40, 100, 1.0, 1.0);
    flowerDraw(200, 100, 1.5, 1.5);
    flowerDraw(200, 200, 0.5, 0.5);
    flowerDraw(500, 400, 2.0, 2.0);
    flowerDraw(30, 500, 1.0, 1.0);
    flowerDraw(270, 180, 1.5, 1.5);
    flowerDraw(220, 600, 0.5, 0.5);
    flowerDraw(50, 450, 2.0, 2.0);
    flowerDraw(1000, 100, 1.0, 1.0);
    flowerDraw(1200, 500, 1.5, 1.5);
    flowerDraw(900, 600, 0.5, 0.5);
    flowerDraw(1100, 1100, 2.0, 2.0);
    flowerDraw(1010, 800, 1.0, 1.0);
    flowerDraw(1001, 18, 1.5, 1.5);
    flowerDraw(220, 600, 0.5, 0.5);
    flowerDraw(1050, 450, 2.0, 2.0);

  }

//setting up function for the flowers
function flowerDraw(pos_x1, pos_y1, scale_x1, scale_y1){
    push();
      translate(pos_x1, pos_y1);
      scale(scale_x1, scale_y1);

      //draw petals
      noStroke();
      fill(random(256),random(256),random(256), random(100)); //randomizing color
      for (var i = 0; i < 10; i ++) {
      ellipse(pos_x, pos_y, x/3, y/2);
      rotate(PI/5);
    }
      pop();
//randomizing sizes and position
      pos_x = pos_x + pos_x;
      if (pos_x > 50) {
         pos_x = random(1, 50);
      }

      pos_y = pos_y + pos_y;
      if (pos_y > 50) {
         pos_y = random(1, 40);
      }

      x = x * x;
      if (x > 1000) {
         x = random(1,50);
      }

      y = y * y;
      if (y > 1000) {
         y = random(20,100);
      }



}
