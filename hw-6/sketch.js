
var shape = {};
    shape.pos1x = 0;
    shape.pos1y = 0;


var el_width = 50;
var el_height = 20;
var el_max_mov1 = 13;
var el_max_mov2 = 13;
var value = 0;

var rr = 20;
var gg = 30;
var bb = 40;

// setup function
function setup() {
// creating a canvas
  createCanvas(windowWidth, windowHeight);
  background( 'rgb(0, 0, 0)' );
  strokeWeight(13);
  frameRate(25)
  ellipseMode(RADIUS);
}


function draw() {
  // translate canvas
  translate(width * 0.5,height * 0.5);
// move shape and resize randomly
  shape.pos1x += round(random(-el_max_mov1, el_max_mov1));
  shape.pos1y += (random(-el_max_mov2, el_max_mov2));

  el_width += random(-el_max_mov1, el_max_mov1);
  el_height += round(random(-el_max_mov1 % el_max_mov1));

  shape.pos1y = map(value, 100, windowWidth/2, 0, width, true);
  shape.pos1x = map(200, 300, windowHeight/2, 0, height, true);

//changing stroke color
  stroke(rr,gg,bb,15);
  // drawing ellipse
  noFill();
  ellipse(shape.pos1x,shape.pos1y,el_width,el_height);

  value += 1

  if (value > 30) {
    value=-value
  };

  if (value < 0) {
    value=value
  };
//randomizing color for shape
  rr += random(-5,5);
  gg += random(-2,2);
  bb += random(-3,3);

  if (rr > 90) {
    rr=-rr
  };

  if (rr < 70) {
    rr=rr
  };

  if (gg > 200) {
    gg=-gg
  };

  if (gg < 150) {
    gg=gg
  };

  if (bb > 240) {
    bb=-bb
  };

  if (bb < 180) {
    bb=bb
  };

}
