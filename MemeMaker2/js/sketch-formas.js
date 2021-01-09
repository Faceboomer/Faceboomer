// INICIALIZAÇÃO
// altura da footer
let footer = 35;
// altura da header 
let header = 56.8;

// posição dos botoes
btnPosY = 420;
btnPosX = 65;

// cor de fundo
r = 255; g = 255; b = 255; a = 255;

// BOTOES fundos (lista)
let bgBtn = [];

// load das imagens
// lista de imagens
let backgrounds = [];

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
        backgrounds.push(loadImage('data/formas/' + file));
    }
}

function setup() {
    let c = createCanvas(windowWidth, windowHeight);
    // posicionar canvas abaixo da header
    c.position(0, 0);

    // posicionar o sketch dentro desta div no html
    c.parent('sketch-forma');

    // CRIAÇÃO DOS BOTOES
    // margem dos botoes para estar centrado
    // margem = (largura - largura de todos os botões) /2
    var margem = (windowWidth - (btnPosX * 4 + 8)) / 2;

    // IMAGEM DE FUNDO
    for (var i = 0; i < 4; i++) {
        bgBtn[i] = createButton('');

        bgBtn[i].position(btnPosX * i + margem, btnPosY + 180);
        bgBtn[i].style('width', '60px');
        bgBtn[i].style('height', '60px');
        bgBtn[i].style('border', 'none');
        bgBtn[i].style('background-size', '60px 60px');
        bgBtn[i].style('background-repeat', 'no-repeat');
    }

    // divido em 2 para estarem alinhados
    for (var i = 4; i < 8; i++) {
        bgBtn[i] = createButton('');

        bgBtn[i].position(btnPosX * i + + margem - (btnPosX * 4), btnPosY + 245);
        bgBtn[i].style('width', '60px');
        bgBtn[i].style('height', '60px');
        bgBtn[i].style('border', 'none');
        bgBtn[i].style('background-size', '60px 60px');
        bgBtn[i].style('background-repeat', 'no-repeat');
    }

    // colocar imagens de fundo nos botoes
    bgBtn[0].style('background-image', 'url("data/formas/forma1.png")');
    bgBtn[1].style('background-image', 'url("data/formas/forma2.png")');
    bgBtn[2].style('background-image', 'url("data/formas/forma3.png")');
    bgBtn[3].style('background-image', 'url("data/formas/forma4png")');
    bgBtn[4].style('background-image', 'url("data/formas/forma5.png")');
    bgBtn[5].style('background-image', 'url("data/formas/forma6.png")');
    bgBtn[6].style('background-image', 'url("data/formas/forma7.png")');
    bgBtn[7].style('background-image', 'url("data/formas/forma8.png")');
}

function draw() {
    background(0, 0, 0, 0);

    // funções dos botoes para mudar a imagem
    bgBtn[0].mousePressed(showBg0);
    bgBtn[1].mousePressed(showBg1);
    bgBtn[2].mousePressed(showBg2);
    bgBtn[3].mousePressed(showBg3);
    bgBtn[4].mousePressed(showBg4);
    bgBtn[5].mousePressed(showBg5);
    bgBtn[6].mousePressed(showBg6);
    bgBtn[7].mousePressed(showBg7);

    // desenhar retangulo sólido
    noStroke();
    fill(r, g, b, a);
    rect(0, 0+header, windowWidth, windowWidth);
}

function showBg0() {
    a = 0;
    image(backgrounds[0], 0, 0+header, windowWidth, windowWidth);
}
function showBg1() {
    a = 0;
    image(backgrounds[1], 0, 0+header, windowWidth, windowWidth);
}
function showBg2() {
    a = 0;
    image(backgrounds[2], 0, 0+header, windowWidth, windowWidth);
}
function showBg3() {
    a = 0;
    image(backgrounds[3], 0, 0+header, windowWidth, windowWidth);
}
function showBg4() {
    a = 0;
    image(backgrounds[4], 0, 0+header, windowWidth, windowWidth);
}
function showBg5() {
    a = 0;
    image(backgrounds[5], 0, 0+header, windowWidth, windowWidth);
}
function showBg6() {
    a = 0;
    image(backgrounds[6], 0, 0+header, windowWidth, windowWidth);
}
function showBg7() {
    a = 0;
    image(backgrounds[7], 0, 0+header, windowWidth, windowWidth);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}