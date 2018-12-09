// created by Mollie Lemm in Dec. 2018 for creative coding at the University of Montana.

// defining xoff starts for each of the different things.
let woff = 0;
let woff1 = 10000;
let xoff = 0;
let xoff1 = 10000;
let roff = 0;
let roff1 = 100000;
let roff2 = 1000;
let bgoff = 0;


// setup function
function setup() {
// creating a canvas
  createCanvas(windowWidth, windowHeight);
  background('black');
  strokeWeight(2);
  frameRate(60)
  ellipseMode(RADIUS);
}


function draw() {

// noise for the background color, so it stays withing a similar gradient.
push();
  let bg = map(noise(bgoff), 0, 1, 0, 25);
  bgoff += 0.001;
pop();

// noise for the location of the ellipse
push();
  let x = map(noise(xoff),0,1,0,width);
  let y = map(noise(xoff1),0,1,0,height);
  xoff += 0.0015;
  xoff1 += 0.0015;
pop();

// noise for the width and height of the ellipse
push();
  let w = map(noise(woff),0,1,0,300);
  let h = map(noise(woff1),0,1,0,300);
  woff += 0.0018;
  woff1 += 0.0018;
pop();

// noise to create a cool color gradient for the ellipse
push();
  let r = map(noise(roff), 0, 1, 0, 235);
  let g = map(noise(roff1), 0, 1, 20, 235);
  let b = map(noise(roff2), 0, 1, 20, 235);
  roff += 0.0006;
  roff1 += 0.0006;
  roff2 += 0.0006;
pop();

// drawing the ellipse using the variable defined above, with an alpha as well.
stroke(r,g,b, 40);
noFill();
ellipse(x,y,w,h);

// creating an if statement to restart the sketch at a perlin noise defined
// background color every 2000 frames.
if (frameCount % 2000 == 0) {
background(bg);
  }

}
