// INICIALIZAÇÃO
// altura da footer
let footer1 = 35;
// altura da header
let header1 = 56.8;

// posição dos botoes
btnPosY = 420;
btnPosX = 65;


// Cor e Tamanho
let TEXTMENU = 0;
let corBtn;
let tamanhoBtn1;

// Slider
var sizeSlider;

// cor de fundo
r = 255; g = 255; b = 255; a = 255;

// BOTOES fundos (lista)
let bgBtn1 = [];

// load das imagens
// lista de imagens
let backgrounds1 = [];

function preload() {
    backgroundFiles = [
        'brilho.png',
        'brilho1.png',
        'brilho2.png',
        'brilho2.png',
        'brilho4.png',
        'brilho5.png',
        'brilho6.png',
        'brilho7.png',

    ];

    // "empurrar" cada ficheiro para a lista backgrounds
    for (let file of backgroundFiles) {
        backgrounds1.push(loadImage('data/brilho/' + file));
    }
}

function setup() {
    let c = createCanvas(windowWidth, windowHeight);
    // posicionar canvas abaixo da header
    c.position(0, 0);

    // posicionar o sketch dentro desta div no html
    c.parent('sketch-brilho');



    sizeSlider = createSlider(10, 100, 22);
    sizeSlider.size(200, 20);
    sizeSlider.position((windowWidth - 200) / 2, windowWidth + 130);

    // esconder (aparece quando se clica no menu)
    sizeSlider.hide();

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

    // BOTOES slider tamanho

    tamanhoBtn1 = createButton("Tamanho");
    tamanhoBtn1.position(0, windowWidth + 57, 'fixed');
    tamanhoBtn1.size(windowWidth / 3, 35);
    tamanhoBtn1.style("font-family", "Open Sans");
    tamanhoBtn1.style("font-size", "12px");
    tamanhoBtn1.style("color", "#af7dfd");
    tamanhoBtn1.style('background-color', 'transparent');
    tamanhoBtn1.style('border', 'solid 0.5px #af7dfd');


    // IMAGEM DE FUNDO
    for (var i = 0; i < 4; i++) {
        bgBtn1[i] = createButton('');

        bgBtn1[i].position(btnPosX * i + margem, btnPosY + 170);
        bgBtn1[i].style('width', '60px');
        bgBtn1[i].style('height', '60px');
        bgBtn1[i].style('border', 'none');
        bgBtn1[i].style('background-size', '60px 60px');
        bgBtn1[i].style('background-repeat', 'no-repeat');
    }

    // divido em 2 para estarem alinhados
    for (var i = 4; i < 8; i++) {
        bgBtn1[i] = createButton('');

        bgBtn1[i].position(btnPosX * i + + margem - (btnPosX * 4), btnPosY + 235);
        bgBtn1[i].style('width', '60px');
        bgBtn1[i].style('height', '60px');
        bgBtn1[i].style('border', 'none');
        bgBtn1[i].style('background-size', '60px 60px');
        bgBtn1[i].style('background-repeat', 'no-repeat');
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
    bgBtn1[0].style('background-image', 'url("data/brilho/brilho.png")');
    bgBtn1[1].style('background-image', 'url("data/brilho/brilho1.png")');
    bgBtn1[2].style('background-image', 'url("data/brilho/brilho2.png")');
    bgBtn1[3].style('background-image', 'url("data/brilho/brilho3.png")');
    bgBtn1[4].style('background-image', 'url("data/brilho/brilho4.png")');
    bgBtn1[5].style('background-image', 'url("data/brilho/brilho5.png")');
    bgBtn1[6].style('background-image', 'url("data/brilho/brilho6.png")');
    bgBtn1[7].style('background-image', 'url("data/brilho/brilho7.png")');
    // bgBtn[8].style('background-image', 'url("data/moldura9.png")');

}

function draw() {
    background(0, 0, 0, 0);

    /* BARRA MENU */
    // está em draw para ser redesenhado por cima dos objetos do canvas
    fill(255);
    stroke(175, 125, 253);
    strokeWeight(0.7);
    rect(0, windowWidth, windowWidth, 35);
    // fundo menu
    // fundo
    rectMode(CORNER)
    rect(0, windowWidth + 35, windowWidth, windowHeight);




    // funções dos botoes para mudar a imagem
    bgBtn1[0].mousePressed(showBg0);
    bgBtn1[1].mousePressed(showBg1);
    bgBtn1[2].mousePressed(showBg2);
    bgBtn1[3].mousePressed(showBg3);
    bgBtn1[4].mousePressed(showBg4);
    bgBtn1[5].mousePressed(showBg5);
    bgBtn1[6].mousePressed(showBg6);
    bgBtn1[7].mousePressed(showBg7);
    // bgBtn[8].mousePressed(showBg8);






    for (var i = 0; i < 8; i++) {
        clear();
        image(backgrounds1[i], 60, 60);
        new_size = sizeSlider.value();
        backgrounds1[0].resize(new_size, 0);
        backgrounds1[1].resize(new_size, 0);
        backgrounds1[2].resize(new_size, 0);
        backgrounds1[3].resize(new_size, 0);
        backgrounds1[4].resize(new_size, 0);
        backgrounds1[5].resize(new_size, 0);
        backgrounds1[6].resize(new_size, 0);
        backgrounds1[7].resize(new_size, 0);
    }

    // desenhar retangulo sólido

    fill(r, g, b, a);
    rect(0, 0 + header1, windowWidth, windowWidth);

    // MENU TAMANHO TEXTO
    tamanhoBtn1.mousePressed(function () {
        TEXTMENU = 2;

        // esconder outros menus

        for (var i = 0; i < 8; i++) {
            bgBtn1[i].hide();
            bgBtn1[i].attribute('disabled', '');
        }
        ///
        sizeSlider.show();
    });





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
    image(backgrounds1[0], 0, 0 + header1, windowWidth, windowWidth);
}
function showBg1() {
    a = 0;
    image(backgrounds1[1], 0, 0 + header1, windowWidth, windowWidth);
}
function showBg2() {
    a = 0;
    image(backgrounds1[2], 0, 0 + header1, windowWidth, windowWidth);
}
function showBg3() {
    a = 0;
    image(backgrounds1[3], 0, 0 + header1, windowWidth, windowWidth);
}
function showBg4() {
    a = 0;
    image(backgrounds1[4], 0, 0 + header1, windowWidth, windowWidth);
}
function showBg5() {
    a = 0;
    image(backgrounds1[5], 0, 0 + header1, windowWidth, windowWidth);
}
function showBg6() {
    a = 0;
    image(backgrounds1[6], 0, 0 + header1, windowWidth, windowWidth);
}
function showBg7() {
    a = 0;
    image(backgrounds1[7], 0, 0 + header1, windowWidth, windowWidth);
}



function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}








