

// INICIALIZAÇÃO
// altura da footer
let footer = 35;
// altura da header
let header = 56.8;

let button;
let button2;
let button3;
let button4;
let button5;
let button6;

let buttonC;
let buttonCA;


function setup() {
  let c = createCanvas(windowWidth, windowHeight);
  // posicionar canvas abaixo da header
  c.position(0, 0);

  // posicionar o sketch dentro desta div no html
  c.parent('sketch-geral');

  button = createButton("Fundo");
  button.size(85,85);
  button.position(30,innerHeight-250);
  button.style("font-family", "Open Sans");
  button.style("font-size", "12px");
  button.style('border-radius', '15px');
  button.style('box-shadow', '1px 1px 10px #d8b7ff');
  button.style("color", "#af7dfd");
  button.style('background-color', 'rgba(255, 255, 255, 0.8)');
  button.style('border', 'none');

  button2 = createButton("Texto");
  button2.size(85,85);
  button2.position(width/2-40,innerHeight-250);
  button2.style("font-family", "Open Sans");
  button2.style("font-size", "12px");
  button2.style('border-radius', '15px');
  button2.style('box-shadow', '1px 1px 10px #d8b7ff');
  button2.style("color", "#af7dfd");
  button2.style('background-color', 'rgba(255, 255, 255, 0.8)');
  button2.style('border', 'none');

  button3 = createButton("Molduras");
  button3.size(85,85);
  button3.position(width-110,innerHeight-250);
  button3.style("font-family", "Open Sans");
  button3.style("font-size", "12px");
  button3.style('border-radius', '15px');
  button3.style('box-shadow', '1px 1px 10px #d8b7ff');
  button3.style("color", "#af7dfd");
  button3.style('background-color', 'rgba(255, 255, 255, 0.8)');
  button3.style('border', 'none');

  button4 = createButton("Stickers");
  button4.size(85,85);
  button4.position(30,innerHeight-120);
  button4.style("font-family", "Open Sans");
  button4.style("font-size", "12px");
  button4.style('border-radius', '15px');
  button4.style('box-shadow', '1px 1px 10px #d8b7ff');
  button4.style("color", "#af7dfd");
  button4.style('background-color', 'rgba(255, 255, 255, 0.8)');
  button4.style('border', 'none');

  button5 = createButton("Brilho");
  button5.size(85,85);
  button5.position(width/2-40,innerHeight-120);
  button5.style("font-family", "Open Sans");
  button5.style("font-size", "12px");
  button5.style('border-radius', '15px');
  button5.style('box-shadow', '1px 1px 10px #d8b7ff');
  button5.style("color", "#af7dfd");
  button5.style('background-color', 'rgba(255, 255, 255, 0.8)');
  button5.style('border', 'none');

  button6 = createButton("Formas");
  button6.size(85,85);
  button6.position(width-110,innerHeight-120);
  button6.style("font-family", "Open Sans");
  button6.style("font-size", "12px");
  button6.style('border-radius', '15px');
  button6.style('box-shadow', '1px 1px 10px #d8b7ff');
  button6.style("color", "#af7dfd");
  button6.style('background-color', 'rgba(255, 255, 255, 0.8)');
  button6.style('border', 'none');
}
  
  
  /*buttonCA = createButton("Cancelar");
  buttonCA.size(width/2,footer);
  buttonCA.position(0,height*2.2);
  buttonCA.style("font-family", "Open Sans");
  buttonCA.style("font-size", "12px");
  buttonCA.style('box-shadow', '1px 1px 10px #d8b7ff');
  buttonCA.style("color", "#af7dfd");
  buttonCA.style('background-color', 'rgba(255, 255, 255, 0.8)');
  buttonCA.style('border', 'none');

  buttonC = createButton("Concluído");
  buttonC.size(width/2,footer);
  buttonC.position(width/2,height*2.2);
  buttonC.style("font-family", "Open Sans");
  buttonC.style("font-size", "12px");
  buttonC.style('box-shadow', '1px 1px 10px #d8b7ff');
  buttonC.style("color", "#af7dfd");
  buttonC.style('background-color', 'rgba(255, 255, 255, 0.8)');
  buttonC.style('border', 'none');*/


function draw() {
  windowResized();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
