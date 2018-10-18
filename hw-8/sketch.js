

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(.5);
}

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

    let numPerRow = 20;
    let circleSize= 2;
    let pad = width / numPerRow;
    let pad2 = width / 22;
    let kolors = ['white', 'black', 'black', 'black', 'black',];


    push();

      for (let i = circleSize; i < height; i+=pad) {
        for (let z = circleSize; z < width; z+=pad) {
          fill(random(kolors));
          ellipse(z,i,circleSize);
        }

      }
    pop();



    push();
        translate(width*.5, height*.5);
        noStroke();
        fill('rgba(7, 111, 232, 0.3)')
        for (var i = 0; i < 10; i ++) {
        ellipse(pos_x, pos_y, x/3, y/2);
        rotate(PI/5);
     }
    pop();

push();
    translate(width*.5, height*.5);
    noStroke();
    fill('rgba(149, 131, 255, .3)')
    for (var i = 0; i < 20; i ++) {
    ellipse(pos_x, pos_y, x, y);
    rotate(PI/10);
 }
pop();

push();
    translate(width*.5, height*.5);
    noStroke();
    fill('rgba(255, 255, 255, 0.1)')
    for (var i = 0; i < 30; i ++) {
    ellipse(pos_x, pos_y, x, y/2);
    rotate(PI/15);
}
pop();




push();
    translate(width*.5, height*.5);
    noStroke();
    fill('rgba(18, 89, 245, 0.49)')
    for (var i = 0; i < 10; i ++) {
    ellipse(pos_1x, pos_1y, x+pos_1x, y+pos_1y);
    rotate(PI/5);
 }
pop();

push();
    translate(width*.5, height*.5);
      noStroke();
      fill('rgba(149, 131, 255, .3)')
      for (var i = 0; i < 20; i ++) {
      ellipse(pos_1x, pos_1y, x+pos_x, y+pos_y);
      rotate(PI/10);
}
pop();


push();
    translate(width*.5, height*.5);
    noStroke();
    fill('rgba(0, 0, 0, 1)');
    ellipse(0,0,40);
pop();

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
