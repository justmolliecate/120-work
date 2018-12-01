
//creating the creature class
class Creature {
  constructor(x, y, r, d) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.d = d;
    this.dx = random(-10, 10);
    this.dy = random(-10, 10);
    this.col = color('rgb(226, 123, 30)');

  }

  show() {
    noStroke();
    fill(this.col);
      //body
      ellipse(this.x, this.y, this.r, this.d);
      //eyes
      fill(0);
      ellipse(this.x-15, this.y-12, this.r/4, this.r/5);
      ellipse(this.x+15, this.y-12, this.r/4, this.r/5);
      //pupils
      fill(255);
      ellipse(this.x-20, this.y-12, this.r/20, this.r/20);
      ellipse(this.x+10, this.y-12, this.r/20, this.r/20);
      //mouth
      fill(0);
      arc(this.x, this.y+30, this.r/1.6, this.d/4, radians(0), radians(180));
  }

  move() {
    this.x = this.x - this.dx;
    this.y = this.y - this.dy;

  }

  edge() {
        // edge check left right
        if (this.x + this.r/2 >= width || this.x - this.r/2 <= 0) {
            this.dx *= -1;
        }
        // edge check bottom and top
        if (this.y + this.d/2 >= height || this.y - this.d/2 <= 0) {
            this.dy *= -1;
        }
    }

    interact(other, my) {

        for (let n = 0; n < other.length; n++) {

            if (n != my) {
                let d = dist(this.x, this.y, other[n].x, other[n].y);
                let combinedR = this.r/2 + other[n].r/2;

                if (d <= combinedR) {
                    this.dx *= -1;
                    this.dy *= -1;

                      if (d <= combinedR) {
                        this.col = color('rgb(201, 50, 50)');
                      } 
                }
            }
        }
    }
}
