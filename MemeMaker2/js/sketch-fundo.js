// inicialização
// tamanho do canvas
let CANVASX = 320; // a ser usado o windowWidth
let CANVASY = 568;

// altura da footer
let footer = 35;
// altura da header
let header = 56.8;

// fundos
let bgNum = 0;
let backgrounds = []

// load das imagens
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
}

function setup() {
    let c = createCanvas(windowWidth, windowHeight-footer);
    // posicionar canvas abaixo da header
    c.position(0, header);

    // posicionar o sketch dentro desta div no html
    c.parent('sketch-holder');
}

function draw() {
    background(0, 0, 0, 100);

    image(backgrounds[bgNum], 0, 0, windowWidth, windowWidth)
}



function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }