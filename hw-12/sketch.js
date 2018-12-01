
//creating array
let creatures = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('rgb(128, 164, 157)');

  for (let i = 0; i < 10; i++) {
    creatures.push( new Creature(random(0, 1000), random(0, 1000), 100, 150) );
  }

  // frameRate(10);
}

function draw() {

  background('rgb(128, 164, 157)');

  for (let i = 0; i < creatures.length; i++){
  creatures[i].show();
  creatures[i].move();
  creatures[i].edge();
  creatures[i].interact(creatures, i);
}
}
