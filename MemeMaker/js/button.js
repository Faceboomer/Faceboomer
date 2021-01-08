/*let button1;


// Image import
function preload() {
/*   for (var i = 1; i < 7; i++) {
    imgs[i] = loadImage('../assets/icone_'+ i + '.png'); 
  } 

  button1 = loadImage('../assets/icone_1.png');
}

function setup() {
createCanvas(windowWidth, windowHeight);
}


function draw() {
  background('red');
  image(button1, 0, 0, 50, 50);

}*/

let button;
let button2;
let button3;
let button4;
let button5;
let button6;

let buttonC;
let buttonCA;

/*background-color: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding: 10px 0;
    font-size: 12px;
    text-transform: capitalize;
    border-radius: 15px;
    box-shadow: 1px 1px 10px #d8b7ff;*/

function setup() {
  createCanvas(400,400);
  button = createButton("Fundo");
  button.size(80,80);
  button.position(20,450);
  button.style("font-family", "Open Sans");
  button.style("font-size", "12px");
  button.style('border-radius', '15px');
  button.style('box-shadow', '1px 1px 10px #d8b7ff');
  button.style("color", "#af7dfd");
  button.style('background-color', 'rgba(255, 255, 255, 0.8)');
  button.style('border', 'none');

  button2 = createButton("Texto");
  button2.size(80,80);
  button2.position(width/2-40,450);
  button2.style("font-family", "Open Sans");
  button2.style("font-size", "12px");
  button2.style('border-radius', '15px');
  button2.style('box-shadow', '1px 1px 10px #d8b7ff');
  button2.style("color", "#af7dfd");
  button2.style('background-color', 'rgba(255, 255, 255, 0.8)');
  button2.style('border', 'none');

  button3 = createButton("Molduras");
  button3.size(80,80);
  button3.position(width-100,450);
  button3.style("font-family", "Open Sans");
  button3.style("font-size", "12px");
  button3.style('border-radius', '15px');
  button3.style('box-shadow', '1px 1px 10px #d8b7ff');
  button3.style("color", "#af7dfd");
  button3.style('background-color', 'rgba(255, 255, 255, 0.8)');
  button3.style('border', 'none');

  button4 = createButton("Stickers");
  button4.size(80,80);
  button4.position(20,550);
  button4.style("font-family", "Open Sans");
  button4.style("font-size", "12px");
  button4.style('border-radius', '15px');
  button4.style('box-shadow', '1px 1px 10px #d8b7ff');
  button4.style("color", "#af7dfd");
  button4.style('background-color', 'rgba(255, 255, 255, 0.8)');
  button4.style('border', 'none');

  button5 = createButton("Brilho");
  button5.size(80,80);
  button5.position(width/2-40,550);
  button5.style("font-family", "Open Sans");
  button5.style("font-size", "12px");
  button5.style('border-radius', '15px');
  button5.style('box-shadow', '1px 1px 10px #d8b7ff');
  button5.style("color", "#af7dfd");
  button5.style('background-color', 'rgba(255, 255, 255, 0.8)');
  button5.style('border', 'none');

  button6 = createButton("Formas");
  button6.size(80,80);
  button6.position(width-100,550);
  button6.style("font-family", "Open Sans");
  button6.style("font-size", "12px");
  button6.style('border-radius', '15px');
  button6.style('box-shadow', '1px 1px 10px #d8b7ff');
  button6.style("color", "#af7dfd");
  button6.style('background-color', 'rgba(255, 255, 255, 0.8)');
  button6.style('border', 'none');
  
  buttonCA = createButton("Cancelar");
  buttonCA.size(width/2,40);
  buttonCA.position(0,height*2.2);
  buttonCA.style("font-family", "Open Sans");
  buttonCA.style("font-size", "12px");
  buttonCA.style('box-shadow', '1px 1px 10px #d8b7ff');
  buttonCA.style("color", "#af7dfd");
  buttonCA.style('background-color', 'rgba(255, 255, 255, 0.8)');
  buttonCA.style('border', 'none');

  buttonC = createButton("Concluído");
  buttonC.size(width/2,40);
  buttonC.position(width/2,height*2.2);
  buttonC.style("font-family", "Open Sans");
  buttonC.style("font-size", "12px");
  buttonC.style('box-shadow', '1px 1px 10px #d8b7ff');
  buttonC.style("color", "#af7dfd");
  buttonC.style('background-color', 'rgba(255, 255, 255, 0.8)');
  buttonC.style('border', 'none');

}


