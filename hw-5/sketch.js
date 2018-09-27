
let tear1_y = -40;
let tear2_y = -10;
let tear3_y = -40;
let tear4_y = -10;
let tear5_y = -40;

let speed = 5;
let speed2 = 3;
let speed3 = 2;
let speed4 = 1;
let speed5 = 2.5;

let tear1_x = -40;
let tear2_x = -10;
let tear3_x = -40;
let tear4_x = -10;
let tear5_x = -40;

let poolx = 270;
let pooly = -70;
let poolWidth =20;
let poolHeight =1

// setup function
function setup() {
// creating a canvas
  createCanvas( windowWidth, 800 );
  background( 'rgb(179, 255, 237)' );
}


function draw() {
  translate(windowWidth/2, 400);

push();
  // body
  noStroke();
  fill('rgb(251, 171, 97)');
  ellipse(0,0,300,400);

push();
    // mouth
    noFill();
    stroke('black');
    arc(0,60,100,50,PI,0);

    if (mouseIsPressed) {
      fill('black');
      arc(0,30,200,200,0,PI);
    } else {
      arc(0,60,100,50,PI,0);
    }
pop();

  // eyes
  fill('white');
  arc(70,-75,50,60,0,PI,CHORD);
  arc(-70,-75,50,60,0,PI,CHORD);
  fill('black')
  ellipse(75,-60,15,);
  ellipse(-65,-60,15,);

pop();

push();
  // tears
  noStroke();
  fill('rgb(174, 210, 238)');
  ellipse(70,tear1_y,10,20);
  ellipse(90,tear2_y,10,20);
  ellipse(70,tear3_y,10,20);
  ellipse(90,tear4_y,10,20);
  ellipse(70,tear5_y,10,20);

  noStroke();
  fill('rgb(174, 210, 238)');
  ellipse(-70,tear1_y,10,20);
  ellipse(-90,tear2_y,10,20);
  ellipse(-70,tear3_y,10,20);
  ellipse(-90,tear4_y,10,20);
  ellipse(-70,tear5_y,10,20);

  tear1_y = tear1_y + speed;
  tear2_y = tear2_y + speed2;
  tear3_y = tear3_y + speed3;
  tear4_y = tear4_y + speed4;
  tear5_y = tear5_y + speed5;


if (tear1_y > 250) {
  speed = -300
}


if (tear1_y < -35) {
  speed = 5
}


if (tear2_y > 250) {
  speed2 = -300
}


  if (tear2_y < -40) {
    speed2 = 3
}


if (tear3_y > 250) {
  speed3 = -300
}

if (tear3_y < -40) {
  speed3 = 2
}
if (tear4_y > 250) {
  speed4 = -300
}

if (tear4_y < -40) {
  speed4 = 1
}

if (tear5_y > 250) {
  speed5 = -300
}

if (tear5_y < -40) {
  speed5 = 2.5
}

pop();

// pool of tears
push();

  noStroke();
  fill('rgba(174, 210, 238, .25)');
  ellipse(0,poolx,poolWidth,poolHeight);

poolWidth = poolWidth +1.5;
poolHeight = poolHeight +.2;

pop();


}
