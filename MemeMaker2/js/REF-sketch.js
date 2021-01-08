let backgroudNum = 0;
let fontsize = 40;
let snowflakes = [];
let backgrounds = [];
let frames = [];
let stickers = [];
let buttons = [];
let snowflakeButton = false;
const Actions = {
  SNOW: 1,
  BACKGROUND: 2,
};
let CANVASX = 360;
let CANVASY = 360;

function preload() {
  backgroundFiles = [
    'inverno2.jpg',
    'inverno3.jpg',
    'jesus3.jpg',
    'outono2.jpg',
    'outono3.jpg',
    'pascoa1.jpg',
    'pascoa2.jpg',
    'pascoa3.jpg',
    'primavera1.jpg',
    'primavera2.jpg',
    'verao1.jpg',
    'verao2.jpg',
  ];

  // Background import
  for (let file of backgroundFiles) {
    backgrounds.push(loadImage('data/Fundos/' + file));
  }

  // Frame import
  for (let i = 1; i < 9; i++) {
    frames[i] = loadImage('data/moldura' + i + '.png');
  }

  // Sticker import
  for (let i = 1; i < 4; i++) {
    stickers[i] = loadImage('data/sticker' + i + '.png');
  }

  font = loadFont('fonts/Meddon-Regular.ttf');
}

function setup() {
  createCanvas(CANVASX, CANVASY);
  // o P5 parece-me limitado a um canvas predefinido, por isso verifiquem qual o tamanho indicado com base no computador a apresetar, se vão estar em fullscreen, etc.
  // Para além disso, as imagens, quando não são do tamanho do canvas ficam SEMPRE esticadas, no entanto, talvez até fique bem tendo em conta o conceito.

  textFont(font);
  textSize(fontsize);
  textAlign(CENTER, CENTER);

  buttons.push(new Button(20, 500, 50, Actions.SNOW, stickers[2]));
  buttons.push(new Button(100, 500, 50, Actions.BACKGROUND, stickers[2]));
}

function draw() {
  // O P5 desenha "por ordem", por isso se puserem o background mais abaixo, não conseguem ver o resto
  background('white');

  image(backgrounds[backgroudNum], 0, 0, CANVASX, CANVASY);

  textAlign(CENTER);
  drawWords();

  for (let button of buttons) {
    button.draw();
  }

  //#region Snowflake

  let t = frameCount / 60; // update time
  // create a random number of snowflakes each frame
  for (let i = 0; i < random(5); i++) {
    snowflakes.push(new Snowflake()); // append snowflake object
  }

  for (let flake of snowflakes) {
    flake.update(t);
    if (snowflakeButton) flake.display();
  }

  //#endregion Snowflake
}

function mousePressed() {
  for (let button of buttons) {
    button.clicked(mouseX, mouseY);
  }
}

function drawWords() {
  // Exemplo: https://p5js.org/examples/typography-words.html
  fill(0);
  text('FACEBOOMER', 300, 100);
}

class Snowflake {
  constructor() {
    // initialize coordinates
    this.posX = 0;
    this.posY = random(-50, 0);
    this.initialangle = random(0, 2 * PI);
    this.size = random(2, 5);

    // radius of snowflake spiral
    // chosen so the snowflakes are uniformly spread out in area
    this.radius = sqrt(random(pow(width / 2, 2)));

    this.update = function (time) {
      // x position follows a circle
      let w = 0.6; // angular speed
      let angle = w * time + this.initialangle;
      this.posX = width / 2 + this.radius * sin(angle);

      // different size snowflakes fall at slightly different y speeds
      this.posY += pow(this.size, 0.5);

      // delete snowflake if past end of screen
      if (this.posY > height) {
        let index = snowflakes.indexOf(this);
        snowflakes.splice(index, 1);
      }
    };

    this.display = function () {
      ellipse(this.posX, this.posY, this.size);
    };
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

  clicked(x, y) {
    let dis = dist(x, y, this.x + this.size / 2, this.y + this.size / 2);
    if (dis < this.size / 2) {
      switch (this.action) {
        case Actions.SNOW:
          snowflakeButton = !snowflakeButton;
          break;
        case Actions.BACKGROUND:
          backgroudNum = backgroudNum < backgroundFiles.length - 1 ? backgroudNum + 1 : 0;
          break;
        default:
          break;
      }
    }
  }

  draw() {
    image(this.image, this.x, this.y, this.size, this.size);
  }
}
