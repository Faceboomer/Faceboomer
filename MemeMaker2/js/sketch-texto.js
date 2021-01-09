
// INICIALIZAÇÃO
// altura da footer
let footer = 35;
// altura da header
let header = 56.8;

// menu
let TEXTMENU = 0;
let textBtn;
let corBtn;
let tamanhoBtn;

// texto
var textbox;
var sliderT;
let texto;
let tSize = 22;

// cor
let corTexto = [];
let rT = 155;
let gT = 47;
let bT = 255;
// posição dos botoes
btnPosY = 450;
btnPosX = 30;

/* CONTRUÇÃO DOS ELEMENTOS */
function setup() {
    /* CANVAS */
    let c = createCanvas(windowWidth, windowHeight - header);
    // posicionar canvas abaixo da header
    c.position(0, header);

    // posicionar o sketch dentro desta div no html
    c.parent('sketch-holder');

    /* MENU */
    // BARRA MENU
    textBtn = createButton("Texto");
    textBtn.position(0, windowWidth + 57, 'fixed');
    textBtn.size(windowWidth / 3, 35);
    textBtn.style("font-family", "Open Sans");
    textBtn.style("font-size", "12px");
    textBtn.style("color", "#af7dfd");
    textBtn.style('background-color', 'transparent');
    textBtn.style('border', 'none');
    textBtn.style('border-right', 'solid 1px #d8b7ff');

    corBtn = createButton("Cor");
    corBtn.position(windowWidth / 3, windowWidth + 57, 'fixed');
    corBtn.size(windowWidth / 3, 35);
    corBtn.style("font-family", "Open Sans");
    corBtn.style("font-size", "12px");
    corBtn.style("color", "#af7dfd");
    corBtn.style('background-color', 'transparent');
    corBtn.style('border', 'none');
    corBtn.style('border-right', 'solid 1px #d8b7ff');

    tamanhoBtn = createButton("Tamanho");
    tamanhoBtn.position((windowWidth / 3) * 2, windowWidth + 57, 'fixed');
    tamanhoBtn.size(windowWidth / 3, 35);
    tamanhoBtn.style("font-family", "Open Sans");
    tamanhoBtn.style("font-size", "12px");
    tamanhoBtn.style("color", "#af7dfd");
    tamanhoBtn.style('background-color', 'transparent');
    tamanhoBtn.style('border', 'none');

    /* SUBMENUS */
    // ESCREVER TEXTO
    textbox = createElement('textarea', 'Escreve aqui!');
    textbox.position((windowWidth - 200) / 2, windowWidth + 130);
    textbox.size(200, 50);
    textbox.style('border', 'solid 1px #d8b7ff');
    textbox.style("font-family", "Open Sans");
    textbox.style('color', '#af7dfd');

    // SLIDER TAMANHO
    sliderT = createSlider(10, 100, 22);
    sliderT.size(200, 20);
    sliderT.position((windowWidth - 200) / 2, windowWidth + 130);

    // esconder (aparece quando se clica no menu)
    sliderT.hide();

    // OPÇÕES CORES DE TEXTO
    var margem = (windowWidth - (btnPosX * 6 + 20)) / 2;

    for (var i = 0; i < 7; i++) {
        corTexto[i] = createButton('');
        corTexto[i].position(btnPosX * i + margem, btnPosY);
        corTexto[i].style('width', '20px');
        corTexto[i].style('height', '20px');
        corTexto[i].style('border-radius', '50%');
        corTexto[i].style('border', 'solid 0.5px #af7dfd');

        // esconder (aparece quando se clica no menu)
        corTexto[i].hide();
        corTexto[i].attribute('disabled', '');
    }
    corTexto[0].style('background-color', '#000');
    corTexto[1].style('background-color', '#fff');
    corTexto[2].style('background-color', '#9b2fff');
    corTexto[3].style('background-color', '#FF241A');
    corTexto[4].style('background-color', '#3CB2FF');
    corTexto[5].style('background-color', '#7ED24B');
    corTexto[6].style('background-color', '#FFD22C');


    // OBJETO TEXTO
    texto = new Texto(95, 100, tSize, 'Escreve aqui!');
}

/* UPDATE ELEMENTOS */
function draw() {

    // para apagar o texto arrastado, mas não o fundo anterior
    clear();

    // MUDAR A COR
    // botoes/funções para mudar a cor
    corTexto[0].mousePressed(pretoT);
    corTexto[1].mousePressed(brancoT);
    corTexto[2].mousePressed(roxoT);
    corTexto[3].mousePressed(vermelhoT);
    corTexto[4].mousePressed(azulT);
    corTexto[5].mousePressed(verdeT);
    corTexto[6].mousePressed(amareloT);

    fill(rT, gT, bT); // val alterados nas funções abaixo
    noStroke();

    // MUDAR TAMANHO
    tSize = sliderT.value(); // val alterado no slider

    // MUDAR O QUE ESTÁ ESCRITO
    if (textbox) { // se escrever
        let textinho = textbox.value(); // val do input
        texto.updateText(textinho);
    }


    // TEXTO
    texto.update(); // aqui é onde é feito o update drag
    texto.show(tSize); // aqui é aplicado o tamanho da font


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

    /* MENUS */
    // MENU INPUT TEXTO
    textBtn.mousePressed(function () {
        // esconder outros menus
        sliderT.hide();
        for (var i = 0; i < 7; i++) {
            corTexto[i].hide();
            corTexto[i].attribute('disabled', '');
        }
        ///
        textbox.show();
        textbox.removeAttribute('disabled');
    });

    // MENU COR TEXTO
    corBtn.mousePressed(function () {
        TEXTMENU = 1;

        // esconder outros menus
        textbox.hide();
        textbox.attribute('disabled', '');
        sliderT.hide();
        ///
        for (var i = 0; i < 7; i++) {
            corTexto[i].show();
            corTexto[i].removeAttribute('disabled');
        }

    });

    // MENU TAMANHO TEXTO
    tamanhoBtn.mousePressed(function () {
        TEXTMENU = 2;

        // esconder outros menus
        textbox.hide();
        textbox.attribute('disabled', '');
        for (var i = 0; i < 7; i++) {
            corTexto[i].hide();
            corTexto[i].attribute('disabled', '');
        }
        ///
        sliderT.show();
    });
}


// FUNÇÕES ARRASTAR O TEXTO
function mousePressed() {
    texto.pressed();
}

function mouseReleased() {
    texto.released();
}

// FUNÇÕES MUDAR COR
// com nomes a acabar em T para não se confundir com outros sketches
function pretoT() {
    rT = 0;
    gT = 0;
    bT = 0;
} function brancoT() {
    rT = 255;
    gT = 255;
    bT = 255;
} function roxoT() {
    rT = 155;
    gT = 47;
    bT = 255;
} function vermelhoT() {
    rT = 255;
    gT = 47;
    bT = 43;
} function azulT() {
    rT = 60;
    gT = 178;
    bT = 255;
} function verdeT() {
    rT = 126;
    gT = 210;
    bT = 75;
} function amareloT() {
    rT = 255;
    gT = 210;
    bT = 44;
}