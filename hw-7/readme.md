# Mollie Lemm

## Here is the breakdown of the ball bouncing code:


This first section of things is defining the global variables:

Defining ball as an object:c`let ball = {};`


Setting width: `ball.width = 40;`



Setting initial x coordinate; `ball.x = 10;`

Setting initial y coordinate: `ball.y = 10;`

Setting the angle of movement with x axis:`ball.delta_x = 1;`

Setting the angle of movement with y axis: `ball.delta_y = 1;`

Setting the x velocity: `ball.scale_x = 1;`

Setting the y velocity: `ball.scale_y = 1;`

Setting up the sketch, creating canvas and setting background:

      function setup() {
      createCanvas(windowWidth, 400);
      background(255);
      }

Drawing the function:

    function draw() {
Changing position of x and y coordinates of ball:

    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;

Keeping the ball within the bounds of the canvas:

    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }

Drawing the ball:

    fill(255);
    ellipse(ball.x, ball.y, ball.width, ball.width);
    }


Changing the slight angle of the ball if the emouse is pressed on the ball:

    function mousePressed() {
      ball.scale_x = map(mouseX, 0, width, 0.5, 10);
      ball.scale_y = map(mouseY, 0, height, 0.5, 10);
    }
### How I altered mine:
I changed the background to black. I then changed the variables so I could increase the distance between the balls. I then changed the frame rate. I also changed the colors in an if then statement so that if nothing was happening, the colors would be random and semi-transparent. I put that if the mouse is pressed using (mousePressed) that the circles would change to black. I used the Logical Not operator to flip the state of it when the mouse is pressed.

This was a really fun assignment. 
