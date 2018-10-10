let ball = {};
ball.width = 40;
ball.x = 10;
ball.y = 10;
ball.delta_x = 5;
ball.delta_y = 5;
ball.scale_x = 5;
ball.scale_y = 5;

let bll = true;

function setup() {
    createCanvas(windowWidth, 400);
    background('black');
    frameRate(200);
}



function draw() {

    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;


    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }





  if ( bll ) {
    fill(random(256),random(256),random(256), random(100));//'rgba(64, 196, 237, .5)');
    noStroke();
  } else {
    fill('black')
  }
ellipse(ball.x, ball.y, ball.width, ball.width);
}

  function mousePressed() {
    bll = !bll;
  }



//function mousePressed() {
  //  ball.scale_x = map(mouseX, 0, width, 0.5, 10);
  //  ball.scale_y = map(mouseY, 0, height, 0.5, 10);
//}
