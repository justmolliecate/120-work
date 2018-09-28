// setup function
function setup() {
// creating a canvas with a purple color
  createCanvas( 500, 600 );
  background( '#b3b3ff' );
}

function draw() {
  //doing the draw function
  //creating ears for my monster
  fill(53, 214, 90)
  strokeWeight(1)
  noStroke()
  triangle(100, 60, 120, 30, 140, 60);
  triangle(300, 60, 320, 30, 340, 60);
  fill(177, 226, 188)
  triangle(115, 60, 120, 35, 125, 60);
  triangle(315, 60, 320, 35, 325, 60);
  //creating head shape
  fill(94, 255, 131, 200)
  rect(90, 60, 260, 75, 10);
  //creating eyes
  fill(250, 255, 117)
  ellipse(150, 90, 28, 10);
  ellipse(290, 90, 28, 10);
  fill(0, 0, 0)
  ellipse(150, 90, 4, 10);
  ellipse(290, 90, 4, 10);
  //drawing mouth
  fill(255, 255, 255)
  arc(220, 110, 130, 35, 0, PI, CHORD);
  //drawing nose
  fill(255, 153, 170)
  triangle(215, 95, 220, 105, 225, 95);
  //body neck thing
  stroke(224, 8, 8)
  line(216, 135, 216, 335);
  stroke(249, 149, 9)
  line(224, 135, 224, 335);
  stroke(249, 220, 9)
  line(220, 135, 220, 335);
  stroke(78, 226, 40)
  line(218, 135, 218, 335);
  stroke(18, 160, 232)
  line(222, 135, 222, 335);
//

  fill(94, 255, 131, 60);

  rect(210, 135, 20, 200);
  //legs
  strokeWeight(2)
  stroke(142, 138, 138)
  line(150, 335, 290, 335)
  line(150, 335, 150, 355)
  line(170, 335, 170, 355)
  line(190, 335, 190, 355)
  line(210, 335, 210, 355)
  line(230, 335, 230, 355)
  line(250, 335, 250, 355)
  line(270, 335, 270, 355)
  line(290, 335, 290, 355)
  stroke(142, 138, 138)

}
