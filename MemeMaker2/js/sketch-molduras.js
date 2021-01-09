// INICIALIZAÇÃO
// altura da footer
let footer = 35;
// altura da header
let header = 56.8;

// BOTOES cor de fundo (lista)
let cor = [];
// posição dos botoes
btnPosY = 420;
btnPosX = 30;

// cor de fundo
r = 255; g = 255; b = 255; a = 255;

// BOTOES fundos (lista)
let bgBtn = [];

// load das imagens
// lista de imagens
let backgrounds = [];

function preload() {
    backgroundFiles = [
        'moldura1.png',
        'moldura2.png',
        'moldura3.png',
        'moldura4.png',
        'moldura5.png',
        'moldura6.png',
        'moldura7.png',
        'moldura8.png',
        //'moldura9.png'
    ];

    // "empurrar" cada ficheiro para a lista backgrounds
    for (let file of backgroundFiles) {
        backgrounds.push(loadImage('data/' + file));
    }
}

function setup() {
    let c = createCanvas(windowWidth, windowHeight);
    // posicionar canvas abaixo da header
    c.position(0, 0);

    // posicionar o sketch dentro desta div no html
    c.parent('sketch-moldura');

    // CRIAÇÃO DOS BOTOES
    // margem dos botoes para estar centrado
    // margem = (largura - largura de todos os botões) /2
    var margem = (windowWidth - (btnPosX * 4 + 8)) / 2;

    // COR DO FUNDO
    /*for (var i = 0; i < 7; i++) {
        cor[i] = createButton('');
        cor[i].position(btnPosX * i + margem, btnPosY);
        cor[i].style('width', '20px');
        cor[i].style('height', '20px');
        cor[i].style('border', 'solid 0.5px #af7dfd');
    }*/


    // IMAGEM DE FUNDO
    for (var i = 0; i < 4; i++) {
        bgBtn[i] = createButton('');

        bgBtn[i].position(btnPosX * i + margem, btnPosY + 140);
        bgBtn[i].style('width', '60px');
        bgBtn[i].style('height', '80px');
        bgBtn[i].style('border', 'none');
        bgBtn[i].style('background-size', 'cover');
    }

    // divido em 2 para estarem alinhados
    for (var i = 4; i < 8; i++) {
        bgBtn[i] = createButton('');

        bgBtn[i].position(btnPosX * i + + margem - (btnPosX * 4), btnPosY + 235);
        bgBtn[i].style('width', '60px');
        bgBtn[i].style('height', '80px');
        bgBtn[i].style('border', 'none');
        bgBtn[i].style('background-size', 'cover');
    }

    /*// cores sólidas dos botoes
    cor[0].style('background-color', '#000');
    cor[1].style('background-color', '#fff');
    cor[2].style('background-color', '#9b2fff');
    cor[3].style('background-color', '#FF241A');
    cor[4].style('background-color', '#3CB2FF');
    cor[5].style('background-color', '#7ED24B');
    cor[6].style('background-color', '#FFD22C');*/

    // colocar imagens de fundo nos botoes
    bgBtn[0].style('background-image', 'url("data/moldura1.png")');
    bgBtn[1].style('background-image', 'url("data/moldura2.png")');
    bgBtn[2].style('background-image', 'url("data/moldura3.png")');
    bgBtn[3].style('background-image', 'url("data/moldura4.png")');
    bgBtn[4].style('background-image', 'url("data/moldura5.png")');
    bgBtn[5].style('background-image', 'url("data/moldura6.png")');
    bgBtn[6].style('background-image', 'url("data/moldura7.png")');
    bgBtn[7].style('background-image', 'url("data/moldura8.png")');
   // bgBtn[8].style('background-image', 'url("data/moldura9.png")');

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
   // bgBtn[8].mousePressed(showBg8);

    // desenhar retangulo sólido
    fill(r, g, b, a);
    rect(0, 0+header, windowWidth, windowWidth);

    // funções para mudar a cor sólida
   /* cor[0].mousePressed(preto);
    cor[1].mousePressed(branco);
    cor[2].mousePressed(roxo);
    cor[3].mousePressed(vermelho);
    cor[4].mousePressed(azul);
    cor[5].mousePressed(verde);
    cor[6].mousePressed(amarelo);*/
}

// FUNÇOES
// cores de fundo
/*function preto() {
    r = 0;
    g = 0;
    b = 0;
    a = 255;
} function branco() {
    r = 255;
    g = 255;
    b = 255;
    a = 255;
} function roxo() {
    r = 155;
    g = 47;
    b = 255;
    a = 255;
} function vermelho() {
    r = 255;
    g = 47;
    b = 43;
    a = 255;
} function azul() {
    r = 60;
    g = 178;
    b = 255;
    a = 255;
} function verde() {
    r = 126;
    g = 210;
    b = 75;
    a = 255;
} function amarelo() {
    r = 255;
    g = 210;
    b = 44;
    a = 255;
}*/

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
/*function showBg8() {
    a = 0;
    image(backgrounds[8], 0, 0, windowWidth, windowWidth);
}*/


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}