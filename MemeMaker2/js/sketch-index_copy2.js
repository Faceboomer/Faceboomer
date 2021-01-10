// INICIALIZAÇÃO

let w1 = window.innerWidth;
let h1 = window.innerHeight;

let fundo = function (f) {

  let button;


  f.setup = function () {
    let footer = 35;
    let header = 56.8;

    let c = f.createCanvas(w1, w1);
    c.position(0, header);


    button = f.createButton('Fundo');
    button.size(60, 60);
    button.position(50, h1 - 150);
    button.style('font-family', 'Open Sans');
    button.style('font-size', '12px');
    button.style('border-radius', '15px');
    button.style('box-shadow', '1px 1px 10px #d8b7ff');
    button.style('color', '#af7dfd');
    button.style('background-color', 'rgba(255, 255, 255, 0.8)');
    button.style('border', 'none');

    button.mousePressed(function () {
      f.fill('green');
      f.rect(0, 0, w, w);
    });

  }

  function windowResized() {
    resizeCanvas(w1, h1);
  }


}

let myFundo = new p5(fundo, 'fundo')

/* let button;


function setup() {
  let footer = 35;
  let header = 56.8;

  let c = createCanvas(windowWidth, windowHeight - header);
  // posicionar canvas abaixo da header
  c.position(0, header);

  // posicionar o sketch dentro desta div no html
  c.parent('fundo');

  button = createButton('Fundo');
  button.size(85, 85);
  button.position(30, innerHeight - 250);
  button.style('font-family', 'Open Sans');
  button.style('font-size', '12px');
  button.style('border-radius', '15px');
  button.style('box-shadow', '1px 1px 10px #d8b7ff');
  button.style('color', '#af7dfd');
  button.style('background-color', 'rgba(255, 255, 255, 0.8)');
  button.style('border', 'none');

}

function windowResized1() {
  resizeCanvas(windowWidth, windowHeight);
}
 */