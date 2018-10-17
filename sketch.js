var space;
var rocket;
var enemy1;
var enemy2;
var x = 40
var y = 40
var w = 100
var direction = 1;
var offset = 0;
var score = 0

function preload() {
  space = loadImage('space.jpg');
  rocket = loadImage('rocketship.png');
  enemy1 = loadImage('enemy1.png');
  enemy2 = loadImage('enemy2.png');
}

function setup() {
  createCanvas(1000, 600);

}

function draw() {
  image(space, 0, 0);

  if(keyIsPressed) {
    if(keyCode == LEFT_ARROW) {
      x = x - 5
    } else if(keyCode == RIGHT_ARROW) {
      x = x + 5
    }
  }
    image(rocket, x, 550, 50, 50);

 if(keyIsPressed) {
    if(key == 's') {
      stroke(255, 0, 0);
      line(x+12, 565, x+12, 0)
      line(x+37, 565, x+37, 0)
    }
  }

  if(direction == 1) {
    offset += 3;
  } else {
    offset -=3;
  }

  if(offset > width-650) {
    direction = -1;
  }
  if(offset <0 ){
    direction = 1;
  }

  for(var i = .5; i < 6; i++) {
    var hit = 0;
    noStroke();
    fill(255, 255, 0);
    if(keyIsPressed) {
      if(key == 's' && x+12 <= offset+w*i &&  x+37 >= offset+w*i) {
        hit = 1;
      }
    }
    if(hit == 0) {
      image(enemy1, offset+w*i, 50, 50, 50);
    }
    if(hit == 1) {
      image(enemy2, offset+w*i, 50, 65, 65);
      score += 1;
    }


}
  textSize(15);
  text('SCORE', 930, 25);
  textSize(20);
  text(score, 950, 50);

}
