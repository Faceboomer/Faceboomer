// INICIALIZAÇÃO
// altura da footer
let footerFSize = 35;
// altura da header 
let headerFSize = 56.8;

// BOTOES cor de fundo (lista)
//let cor = [];
// posição dos botoes
btnPosYFSize = 420;
btnPosXFSize = 65;

// cor de fundo
r = 255; g = 255; b = 255; a = 255;

// BOTOES fundos (lista)
let bgBtnFSize = [];

// load das imagens
// lista de imagens
let backgroundsFSize = [];

function preload() {
    backgroundFiles = [
        'forma1.png',
        'forma2.png',
        'forma3.png',
        'forma4.png',
        'forma5.png',
        'forma6.png',
        'forma7.png',
        'forma8.png'
    ];

    // "empurrar" cada ficheiro para a lista backgrounds
    for (let file of backgroundFiles) {
        backgroundsFSize.push(loadImage('data/formas/' + file));
    }
}

function setup() {
    let c = createCanvas(windowWidth, windowHeight);
    // posicionar canvas abaixo da header
    c.position(0, 0);

    // posicionar o sketch dentro desta div no html
    c.parent('sketch-forma-size');

    // CRIAÇÃO DOS BOTOES
    // margem dos botoes para estar centrado
    // margem = (largura - largura de todos os botões) /2
    var margem = (windowWidth - (btnPosXFSize * 4 + 8)) / 2;

    // IMAGEM DE FUNDO
    for (var i = 0; i < 4; i++) {
        bgBtnFSize[i] = createButton('');

        bgBtnFSize[i].position(btnPosXFSize * i + margem, btnPosYFSize + 180);
        bgBtnFSize[i].style('width', '60px');
        bgBtnFSize[i].style('height', '60px');
        bgBtnFSize[i].style('border', 'none');
        bgBtnFSize[i].style('background-size', '60px 60px');
        bgBtnFSize[i].style('background-repeat', 'no-repeat');
    }

    // divido em 2 para estarem alinhados
    for (var i = 4; i < 8; i++) {
        bgBtnFSize[i] = createButton('');

        bgBtnFSize[i].position(btnPosXFSize * i + + margem - (btnPosXFSize * 4), btnPosYFSize + 245);
        bgBtnFSize[i].style('width', '60px');
        bgBtnFSize[i].style('height', '60px');
        bgBtnFSize[i].style('border', 'none');
        bgBtnFSize[i].style('background-size', '60px 60px');
        bgBtnFSize[i].style('background-repeat', 'no-repeat');
    }

    // colocar imagens de fundo nos botoes
    bgBtnFSize[0].style('background-image', 'url("data/formas/forma1.png")');
    bgBtnFSize[1].style('background-image', 'url("data/formas/forma2.png")');
    bgBtnFSize[2].style('background-image', 'url("data/formas/forma3.png")');
    bgBtnFSize[3].style('background-image', 'url("data/formas/forma4png")');
    bgBtnFSize[4].style('background-image', 'url("data/formas/forma5.png")');
    bgBtnFSize[5].style('background-image', 'url("data/formas/forma6.png")');
    bgBtnFSize[6].style('background-image', 'url("data/formas/forma7.png")');
    bgBtnFSize[7].style('background-image', 'url("data/formas/forma8.png")');
}

function draw() {
    background(0, 0, 0, 0);

    // funções dos botoes para mudar a imagem
    bgBtnFSize[0].mousePressed(showBg0);
    bgBtnFSize[1].mousePressed(showBg1);
    bgBtnFSize[2].mousePressed(showBg2);
    bgBtnFSize[3].mousePressed(showBg3);
    bgBtnFSize[4].mousePressed(showBg4);
    bgBtnFSize[5].mousePressed(showBg5);
    bgBtnFSize[6].mousePressed(showBg6);
    bgBtnFSize[7].mousePressed(showBg7);

    // desenhar retangulo sólido
    noStroke();
    fill(r, g, b, a);
    rect(0, 0+headerFSize, windowWidth, windowWidth);
}

function showBg0() {
    a = 0;
    image(backgroundsFSize[0], 0, 0+headerFSize, windowWidth, windowWidth);
}
function showBg1() {
    a = 0;
    image(backgroundsFSize[1], 0, 0+headerFSize, windowWidth, windowWidth);
}
function showBg2() {
    a = 0;
    image(backgroundsFSize[2], 0, 0+headerFSize, windowWidth, windowWidth);
}
function showBg3() {
    a = 0;
    image(backgroundsFSize[3], 0, 0+headerFSize, windowWidth, windowWidth);
}
function showBg4() {
    a = 0;
    image(backgroundsFSize[4], 0, 0+headerFSize, windowWidth, windowWidth);
}
function showBg5() {
    a = 0;
    image(backgroundsFSize[5], 0, 0+headerFSize, windowWidth, windowWidth);
}
function showBg6() {
    a = 0;
    image(backgroundsFSize[6], 0, 0+headerFSize, windowWidth, windowWidth);
}
function showBg7() {
    a = 0;
    image(backgroundsFSize[7], 0, 0+headerFSize, windowWidth, windowWidth);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}