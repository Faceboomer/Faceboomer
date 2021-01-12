// INICIALIZAÇÃO
// altura da header
let footerS = 35;
let headerS = 56.8;

// posição dos botoes
btnPosYS = 420;
btnPosXS = 65;

// Tamanho e Stickers
let TEXTMENU = 0;
let tamanhoBtnS;
let stickerBtnS;

// Slider
var sizeSliderS;

// cor de fundo
r = 255; g = 255; b = 255; a = 255;

// BOTOES fundos (lista)
let stickersBtn = [];

// load das imagens
// lista de imagens
let stickers = [];

//botões concluído e cancelar
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
        stickers.push(loadImage('data/stickers/' + file));
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

    // BOTOES slider stickers
    stickerBtnS = createButton("Stickers");
    stickerBtnS.position(0, windowWidth, 'fixed');
    stickerBtnS.size(windowWidth / 3, 35);
    stickerBtnS.style("font-family", "Open Sans");
    stickerBtnS.style("font-size", "12px");
    stickerBtnS.style("color", "#af7dfd");
    stickerBtnS.style('background-color', 'transparent');
    stickerBtnS.style('border', 'solid 0.5px #af7dfd');

    // BOTOES slider tamanho
    tamanhoBtnS = createButton("Tamanho");
    tamanhoBtnS.position(windowWidth / 3, windowWidth, 'fixed');
    tamanhoBtnS.size(windowWidth / 3, 35);
    tamanhoBtnS.style("font-family", "Open Sans");
    tamanhoBtnS.style("font-size", "12px");
    tamanhoBtnS.style("color", "#af7dfd");
    tamanhoBtnS.style('background-color', 'transparent');
    tamanhoBtnS.style('border', 'solid 0.5px #af7dfd');

    /*  sizeSlider = createSlider(0, 500, 250); 
      sizeSlider.position(30, 240); */

    sizeSliderS = createSlider(60, 200, 60);
    sizeSliderS.size(200, 20);
    sizeSliderS.position((windowWidth - 200) / 2, windowWidth + 130);

    // esconder (aparece quando se clica no menu)
    sizeSliderS.hide();

    // IMAGEM DE FUNDO
    for (var i = 0; i < 4; i++) {
        stickersBtn[i] = createButton('');
        stickersBtn[i].position(btnPosXS * i + margem, btnPosYS + 170);
        stickersBtn[i].style('width', '60px');
        stickersBtn[i].style('height', '60px');
        stickersBtn[i].style('border', 'none');
        stickersBtn[i].style('background-size', '60px 60px');
        stickersBtn[i].style('background-repeat', 'no-repeat');
    }

    // divido em 2 para estarem alinhados
    for (var i = 4; i < 8; i++) {
        stickersBtn[i] = createButton('');
        stickersBtn[i].position(btnPosXS * i + + margem - (btnPosXS * 4), btnPosYS + 235);
        stickersBtn[i].style('width', '60px');
        stickersBtn[i].style('height', '60px');
        stickersBtn[i].style('border', 'none');
        stickersBtn[i].style('background-size', '60px 60px');
        stickersBtn[i].style('background-repeat', 'no-repeat');
    }

    // colocar imagens de fundo nos botoes
    stickersBtn[0].style('background-image', 'url("data/stickers/sticker1.png")');
    stickersBtn[1].style('background-image', 'url("data/stickers/sticker2.png")');
    stickersBtn[2].style('background-image', 'url("data/stickers/sticker3.png")');
    stickersBtn[3].style('background-image', 'url("data/stickers/sticker4.png")');
    stickersBtn[4].style('background-image', 'url("data/stickers/sticker5.png")');
    stickersBtn[5].style('background-image', 'url("data/stickers/sticker6.png")');
    stickersBtn[6].style('background-image', 'url("data/stickers/sticker7.png")');
    stickersBtn[7].style('background-image', 'url("data/stickers/sticker8.png")');

    buttonCA = createButton("Cancelar");
    buttonCA.size(width / 2, footerS);
    buttonCA.position(0, height - footerS);
    buttonCA.style("font-family", "Open Sans");
    buttonCA.style("font-size", "12px");
    buttonCA.style('box-shadow', '1px 1px 10px #d8b7ff');
    buttonCA.style("color", "#af7dfd");
    buttonCA.style('background-color', 'rgba(255, 255, 255, 0.8)');
    buttonCA.style('border', 'none');

    buttonC = createButton("Concluído");
    buttonC.size(width / 2, footerS);
    buttonC.position(width / 2, height - footerS);
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
    stickersBtn[0].mousePressed(showBg0);
    stickersBtn[1].mousePressed(showBg1);
    stickersBtn[2].mousePressed(showBg2);
    stickersBtn[3].mousePressed(showBg3);
    stickersBtn[4].mousePressed(showBg4);
    stickersBtn[5].mousePressed(showBg5);
    stickersBtn[6].mousePressed(showBg6);
    stickersBtn[7].mousePressed(showBg7);

    clear();
    image(stickers[0], windowWidth / 2-30, windowWidth / 2);
    new_size = sizeSliderS.value();
    stickers[0].resize(new_size, 0);

    // desenhar retangulo sólido
    noStroke();
    fill(r, g, b, a);
    rect(0, 0 + headerS, windowWidth, windowWidth);

    // MENU TAMANHO TEXTO
    tamanhoBtnS.mousePressed(function () {
        TEXTMENU = 0;

        // esconder outros menus

        for (var i = 0; i < 8; i++) {
            stickersBtn[i].hide();
            stickersBtn[i].attribute('disabled', '');
        }
        ///
        sizeSliderS.show();
    });

    // MENU TAMANHO TEXTO
    stickerBtnS.mousePressed(function () {
        TEXTMENU = 1;

        // esconder outros menus

        for (var i = 0; i < 8; i++) {
            stickersBtn[i].show();
            stickersBtn[i].removeAttribute('disabled', '');
        }
        ///
        sizeSliderS.hide();
    });

}

function showBg0() {
    clear();
    a = 0;
    image(stickers[0], 0, 0 + headerS, windowWidth / 2, windowWidth / 2);
}
function showBg1() {
    a = 0;
    image(stickers[1], 0, 0 + headerS, windowWidth / 2, windowWidth / 2);
}
function showBg2() {
    a = 0;
    image(stickers[2], 0, 0 + headerS, windowWidth / 2, windowWidth / 2);
}
function showBg3() {
    a = 0;
    image(stickers[3], 0, 0 + headerS, windowWidth / 2, windowWidth / 2);
}
function showBg4() {
    a = 0;
    image(stickers[4], 0, 0 + headerS, windowWidth / 2, windowWidth / 2);
}
function showBg5() {
    a = 0;
    image(stickers[5], 0, 0 + headerS, windowWidth / 2, windowWidth / 2);
}
function showBg6() {
    a = 0;
    image(stickers[6], 0, 0 + headerS, windowWidth / 2, windowWidth / 2);
}
function showBg7() {
    a = 0;
    image(stickers[7], 0, 0 + headerS, windowWidth / 2, windowWidth / 2);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}