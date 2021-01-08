var imgs = [];
let buttons = [];

function setup() {
  // Top-left corner of the img is at (0, 0)
  // Width and height are the img's original width and height
 
  buttons = (new Button(20, 500, 50, imgs[6]));
  buttons.position(19, 19);
}

// Image import
function preload() {
  for (var i = 1; i < 7; i++) {
    imgs[i] = loadImage('assets/icone_'+ i + '.png'); 
  }
}
  
function draw() {
  image(imgs[6], 0, 0);
  
  for (var i=0; i<7; i++) {
    image(imgs[i], 10, 10); 
  }
}

class Button {
    constructor(x, y, size, action, image) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.action = action;
      this.image = image;
    }
}

  


let button;
function setup() {
  createCanvas(100, 100);
  background(0);
  button = createButton('click me');
  button.position(19, 19);
  button.mousePressed(changeBG);
}

function changeBG() {
  let val = random(255);
  background(val);
}