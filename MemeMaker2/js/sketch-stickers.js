// INICIALIZAÇÃO
// altura da header
let footerS = 35;
let headerS = 56.8;

// posição dos botoes
btnPosYS = 420;
btnPosXS = 65;

// cor de fundo
r = 255; g = 255; b = 255; a = 255;

// BOTOES fundos (lista)
let bgBtnS = [];

// load das imagens
// lista de imagens
let backgroundsS = [];

let buttonC;
let buttonCA;

function preload() {
    backgroundFilesS = [
        'sticker1.png',
        'sticker2.png',
        'sticker3.png',
        'sticker4.png',
        'sticker5.png',
        'sticker6.png',
        'sticker7.png',
        'sticker8.png',
    ];

    // "empurrar" cada ficheiro para a lista backgrounds
    for (let file of backgroundFilesS) {
        backgroundsS.push(loadImage('data/stickers/' + file));
    }
}

function setup() {
    let c = createCanvas(windowWidth, windowHeight);
    // posicionar canvas abaixo da header
    c.position(0, 0);

    // posicionar o sketch dentro desta div no html
    c.parent('sketch-sticker');

    // CRIAÇÃO DOS BOTOES
    // margem dos botoes para estar centrado
    // margem = (largura - largura de todos os botões) /2
    var margem = (windowWidth - (btnPosXS * 4 + 8)) / 2;

    // IMAGEM DE FUNDO
    for (var i = 0; i < 4; i++) {
        bgBtnS[i] = createButton('');

        bgBtnS[i].position(btnPosXS * i + margem, btnPosYS + 170);
        bgBtnS[i].style('width', '60px');
        bgBtnS[i].style('height', '60px');
        bgBtnS[i].style('border', 'none');
        bgBtnS[i].style('background-size', '60px 60px');
        bgBtnS[i].style('background-repeat', 'no-repeat');
    }

    // divido em 2 para estarem alinhados
    for (var i = 4; i < 8; i++) {
        bgBtnS[i] = createButton('');

        bgBtnS[i].position(btnPosXS * i + + margem - (btnPosXS * 4), btnPosYS + 235);
        bgBtnS[i].style('width', '60px');
        bgBtnS[i].style('height', '60px');
        bgBtnS[i].style('border', 'none');
        bgBtnS[i].style('background-size', '60px 60px');
        bgBtnS[i].style('background-repeat', 'no-repeat');
    }

    // colocar imagens de fundo nos botoes
    bgBtnS[0].style('background-image', 'url("data/stickers/sticker1.png")');
    bgBtnS[1].style('background-image', 'url("data/stickers/sticker2.png")');
    bgBtnS[2].style('background-image', 'url("data/stickers/sticker3.png")');
    bgBtnS[3].style('background-image', 'url("data/stickers/sticker4.png")');
    bgBtnS[4].style('background-image', 'url("data/stickers/sticker5.png")');
    bgBtnS[5].style('background-image', 'url("data/stickers/sticker6.png")');
    bgBtnS[6].style('background-image', 'url("data/stickers/sticker7.png")');
    bgBtnS[7].style('background-image', 'url("data/stickers/sticker8.png")');  

  buttonCA = createButton("Cancelar");
  buttonCA.size(width/2,footerS);
  buttonCA.position(0,height-footerS);
  buttonCA.style("font-family", "Open Sans");
  buttonCA.style("font-size", "12px");
  buttonCA.style('box-shadow', '1px 1px 10px #d8b7ff');
  buttonCA.style("color", "#af7dfd");
  buttonCA.style('background-color', 'rgba(255, 255, 255, 0.8)');
  buttonCA.style('border', 'none');

  buttonC = createButton("Concluído");
  buttonC.size(width/2,footerS);
  buttonC.position(width/2,height-footerS);
  buttonC.style("font-family", "Open Sans");
  buttonC.style("font-size", "12px");
  buttonC.style('box-shadow', '1px 1px 10px #d8b7ff');
  buttonC.style("color", "#af7dfd");
  buttonC.style('background-color', 'rgba(255, 255, 255, 0.8)');
  buttonC.style('border', 'none');
}

function draw() {
    background(0, 0, 0, 0);

    // funções dos botoes para mudar a imagem
    bgBtnS[0].mousePressed(showBg0);
    bgBtnS[1].mousePressed(showBg1);
    bgBtnS[2].mousePressed(showBg2);
    bgBtnS[3].mousePressed(showBg3);
    bgBtnS[4].mousePressed(showBg4);
    bgBtnS[5].mousePressed(showBg5);
    bgBtnS[6].mousePressed(showBg6);
    bgBtnS[7].mousePressed(showBg7);

    // desenhar retangulo sólido
    noStroke();
    fill(r, g, b, a);
    rect(0, 0+headerS, windowWidth, windowWidth);
 }

function showBg0() {
    a = 0;
    image(backgroundsS[0], 0, 0+headerS, windowWidth, windowWidth);
}
function showBg1() {
    a = 0;
    image(backgroundsS[1], 0, 0+headerS, windowWidth, windowWidth);
}
function showBg2() {
    a = 0;
    image(backgroundsS[2], 0, 0+headerS, windowWidth, windowWidth);
}
function showBg3() {
    a = 0;
    image(backgroundsS[3], 0, 0+headerS, windowWidth, windowWidth);
}
function showBg4() {
    a = 0;
    image(backgroundsS[4], 0, 0+headerS, windowWidth, windowWidth);
}
function showBg5() {
    a = 0;
    image(backgroundsS[5], 0, 0+headerS, windowWidth, windowWidth);
}
function showBg6() {
    a = 0;
    image(backgroundsS[6], 0, 0+headerS, windowWidth, windowWidth);
}
function showBg7() {
    a = 0;
    image(backgroundsS[7], 0, 0+headerS, windowWidth, windowWidth);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}