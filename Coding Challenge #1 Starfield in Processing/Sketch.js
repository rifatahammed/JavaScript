var stars = [];

var speed;

function setup() {
  createCanvas(1600, 800);//https://p5js.org/reference/#/p5/createCanvas
  for (var i = 0; i < 800; i++) {
    stars[i] = new Star();
  }
}

function draw() {
  speed = map(mouseX, 0, width, 0, 50); //https://p5js.org/reference/#/p5/map
  background(0); // this means black bg
  translate(width / 2, height / 2);//https://p5js.org/reference/#/p5/translate
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}