// INICIALIZAÇÃO

/* BOTTOM MENU */
let buttonCA; let buttonC;

// CORES FUNDO (lista)
let cor = [];
// posição dos botoes
btnPosY = 420;
btnPosX = 30;

// cor de fundo
r = 255; g = 255; b = 255; a = 255;

// IMAGENS FUNDO
let bgBtn = [];

// lista de imagens
let backgrounds = [];

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
        'flor1.jpg',
        'flor2.jpg'
    ];

    // "empurrar" cada ficheiro para a lista backgrounds
    for (let file of backgroundFiles) {
        backgrounds.push(loadImage('data/fundos/' + file));
    }
}

function setup() {
    let footer = 35;
    let header = 56.8;

    let c = createCanvas(windowWidth, windowHeight - header);
    // posicionar canvas abaixo da header
    c.position(0, header);

    // posicionar o sketch dentro desta div no html
    c.parent('fundo');

    // CRIAÇÃO DOS BOTOES
    // margem dos botoes para estar centrado
    // margem = (largura - largura de todos os botões) /2
    var margem = (windowWidth - (btnPosX * 6 + 20)) / 2;

    // COR DO FUNDO
    for (var i = 0; i < 7; i++) {
        cor[i] = createButton('');
        cor[i].position(btnPosX * i + margem, btnPosY);
        cor[i].style('width', '20px');
        cor[i].style('height', '20px');
        cor[i].style('border-radius', '50%');
        cor[i].style('border', 'solid 0.5px #af7dfd');
    }


    // IMAGEM DE FUNDO
    for (var i = 0; i < 7; i++) {
        bgBtn[i] = createButton('');
        bgBtn[i].position(btnPosX * i + margem, btnPosY + 30);
        bgBtn[i].style('width', '20px');
        bgBtn[i].style('height', '20px');
        bgBtn[i].style('border-radius', '50%');
        bgBtn[i].style('border', 'solid 0.5px #af7dfd');
        bgBtn[i].style('background-size', 'cover');
    }

    // divido em 2 para estarem alinhados
    for (var i = 7; i < 14; i++) {
        bgBtn[i] = createButton('');

        bgBtn[i].position(btnPosX * i + + margem - (btnPosX * 7), btnPosY + 60);
        bgBtn[i].style('width', '20px');
        bgBtn[i].style('height', '20px');
        bgBtn[i].style('border-radius', '50%');
        bgBtn[i].style('border', 'solid 0.5px #af7dfd');
        bgBtn[i].style('background-size', 'cover');
    }

    // cores sólidas dos botoes
    cor[0].style('background-color', '#000');
    cor[1].style('background-color', '#fff');
    cor[2].style('background-color', '#9b2fff');
    cor[3].style('background-color', '#FF241A');
    cor[4].style('background-color', '#3CB2FF');
    cor[5].style('background-color', '#7ED24B');
    cor[6].style('background-color', '#FFD22C');

    // colocar imagens de fundo nos botoes
    bgBtn[0].style('background-image', 'url("data/Fundos/inverno2.jpg")');
    bgBtn[1].style('background-image', 'url("data/Fundos/inverno3.jpg")');
    bgBtn[2].style('background-image', 'url("data/Fundos/jesus3.jpg")');
    bgBtn[3].style('background-image', 'url("data/Fundos/outono2.jpg")');
    bgBtn[4].style('background-image', 'url("data/Fundos/outono3.jpg")');
    bgBtn[5].style('background-image', 'url("data/Fundos/pascoa1.jpg")');
    bgBtn[6].style('background-image', 'url("data/Fundos/pascoa2.jpg")');
    bgBtn[7].style('background-image', 'url("data/Fundos/pascoa3.jpg")');
    bgBtn[8].style('background-image', 'url("data/Fundos/primavera1.jpg")');
    bgBtn[9].style('background-image', 'url("data/Fundos/primavera2.jpg")');
    bgBtn[10].style('background-image', 'url("data/Fundos/verao1.jpg")');
    bgBtn[11].style('background-image', 'url("data/Fundos/verao2.jpg")');
    bgBtn[12].style('background-image', 'url("data/Fundos/flor2.jpg")');
    bgBtn[13].style('background-image', 'url("data/Fundos/flor1.jpg")');


    /* BOTTOM MENU */
    buttonCA = createButton("Cancelar");
    buttonCA.size(windowWidth / 2, footer);
    buttonCA.position(0, height * 2.2);
    buttonCA.style("font-family", "Open Sans");
    buttonCA.style("font-size", "12px");
    buttonCA.style('box-shadow', '1px 1px 10px #d8b7ff');
    buttonCA.style("color", "#af7dfd");
    buttonCA.style('background-color', 'rgba(255, 255, 255, 0.8)');
    buttonCA.style('border', 'none');

    buttonC = createButton("Concluído");
    buttonC.size(windowWidth / 2, footer);
    buttonC.position(windowWidth / 2, windowHeight * 2.2);
    buttonC.style("font-family", "Open Sans");
    buttonC.style("font-size", "12px");
    buttonC.style('box-shadow', '1px 1px 10px #d8b7ff');
    buttonC.style("color", "#af7dfd");
    buttonC.style('background-color', 'rgba(255, 255, 255, 0.8)');
    buttonC.style('border', 'none');

}

function draw() {
    //background('red')
    noStroke();

    // funções dos botoes para mudar a imagem
    bgBtn[0].mousePressed(showBg0);
    bgBtn[1].mousePressed(showBg1);
    bgBtn[2].mousePressed(showBg2);
    bgBtn[3].mousePressed(showBg3);
    bgBtn[4].mousePressed(showBg4);
    bgBtn[5].mousePressed(showBg5);
    bgBtn[6].mousePressed(showBg6);
    bgBtn[7].mousePressed(showBg7);
    bgBtn[8].mousePressed(showBg8);
    bgBtn[9].mousePressed(showBg9);
    bgBtn[10].mousePressed(showBg10);
    bgBtn[11].mousePressed(showBg11);
    bgBtn[12].mousePressed(showBg12);
    bgBtn[13].mousePressed(showBg13);

    // desenhar retangulo sólido
    fill(r, g, b, a);
    rect(0, 0, windowWidth, windowWidth);

    // funções para mudar a cor sólida
    cor[0].mousePressed(preto);
    cor[1].mousePressed(branco);
    cor[2].mousePressed(roxo);
    cor[3].mousePressed(vermelho);
    cor[4].mousePressed(azul);
    cor[5].mousePressed(verde);
    cor[6].mousePressed(amarelo);
}

// FUNÇOES
// cores de fundo
function preto() {
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
}

function showBg0() {
    a = 0;
    image(backgrounds[0], 0, 0, windowWidth, windowWidth);
}
function showBg1() {
    a = 0;
    image(backgrounds[1], 0, 0, windowWidth, windowWidth);
}
function showBg2() {
    a = 0;
    image(backgrounds[2], 0, 0, windowWidth, windowWidth);
}
function showBg3() {
    a = 0;
    image(backgrounds[3], 0, 0, windowWidth, windowWidth);
}
function showBg4() {
    a = 0;
    image(backgrounds[4], 0, 0, windowWidth, windowWidth);
}
function showBg5() {
    a = 0;
    image(backgrounds[5], 0, 0, windowWidth, windowWidth);
}
function showBg6() {
    a = 0;
    image(backgrounds[6], 0, 0, windowWidth, windowWidth);
}
function showBg7() {
    a = 0;
    image(backgrounds[7], 0, 0, windowWidth, windowWidth);
}
function showBg8() {
    a = 0;
    image(backgrounds[8], 0, 0, windowWidth, windowWidth);
}
function showBg9() {
    a = 0;
    image(backgrounds[9], 0, 0, windowWidth, windowWidth);
}
function showBg10() {
    a = 0;
    image(backgrounds[10], 0, 0, windowWidth, windowWidth);
}
function showBg11() {
    a = 0;
    image(backgrounds[11], 0, 0, windowWidth, windowWidth);
}
function showBg12() {
    a = 0;
    image(backgrounds[12], 0, 0, windowWidth, windowWidth);
}
function showBg13() {
    a = 0;
    image(backgrounds[13], 0, 0, windowWidth, windowWidth);
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}