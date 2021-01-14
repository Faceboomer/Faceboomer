/* Trabalho realizado por
Catarina Lobão, Francisca Marques, Giuliana Almasio, Mariana Simões, Marta Sousa
FBAUP 2020/2021*/

/* 
ORDEM DOS LAYERS:
1. FUNDO
2. MOLDURA
3. TEXTO
4. STICKERS
5. BRILHOS
6. FORMAS
*/

/*
CAPÍTULOS
1. preload()
2. setup()
3. draw()
4. funções específicas aos layers
5. show/hide subMenus
7. show/hide bottom menu
8. show/hide first menu
9. mousePressed()
10. mouseReleased()
11. createButtons()
*/


//////////////////////////////////
let footer = 35;
let header = 45;
let w = window.innerWidth;
let h = window.innerHeight;
let c; // canvas

/* DECLARAR MENU */
/* inicial */
let button = [];
/* bottom menu */
let bMenu = [];
aBM = 0;

/* DECLARAR FUNDO */
let bg = 255;
let cor = []; // botoes cores fundo
btnPosY = 420; // posição dos botoes
btnPosX = 30;
r = 255; g = 255; b = 255; a = 0;
let bgBtn = []; // botoes imagens de fundo
let backgrounds = []; // lista imagens

/* DECLARAR MOLDURAS */
let molduras = 8;
btnPosY2 = w + 80; // posição dos botoes
btnPosX2 = 55;
let molduraBtn = []; // botoes
let frames = [];

/* DECLARAR TEXTO */
let textoBM; // barra menu
let corBTM;
let tamanhoBTM;
var sliderT; // slider texto
let fontBtn = []; // botoes fonts
let font1, font2, font3, font4, font5; // load fonts
let fonttt; // font default
let corTexto = []; // botoes cor
let Tc = '#9a2fff'; // cor texto
let Tx = 95; let Ty = 100; // posição
let tSize = 22; // tamanho texto
let textbox; // onde se escreve
let textos = []; // objeto texto
let interactTexto = false;

/* DECLARAR STICKERS */
btnPosYS = 420; // posição dos botoes
btnPosXS = 45;
let tamanhoBtnS; // barra menu
let stickerBtnS;
var sizeSliderS;
let boanoiteBtn;
let sSize; // variavel tamanho
let stickersBtn = []; // lista botoes
let stickersImg = []; // lista de imagens
let qualSticker = 8;
let stickers = [] // lista de objetos sticker
let interactSticker = false;

/* DECLARAR BRILHOS */
let brilhoBtnB; // menu barra
let tamanhoBtnB;
var sizeSliderB;
let bSize; // variavel tamanho brilho
brilhosBtn = []; // lista botoes
let brilhosImg = []; // lista de imagens
let qualBrilho = 8;
let brilhos = []; // lista de objetos brilho
let interactBrilho = false;

/* DECLARAR FORMAS */
let formaBtnF;
let tamanhoBtnF;
var sizeSliderF;
var sizeSliderF;
let fSize; // variavel tamanho brilho
let formasBtn = []; // lista de botões
let formasImg = []; // lista de imagens
let qualForma = 8;
let formas = []; // lista de objetos brilho
let interactForma = false;

/* LOAD DE FICHEIROS */
function preload() {
  backgroundFiles = [ // load fundos
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
    backgrounds.push(loadImage('../data/Fundos/' + file));
  }

  framesFiles = [ // load molduras
    'moldura1.png',
    'moldura2.png',
    'moldura3.png',
    'moldura4.png',
    'moldura5.png',
    'moldura6.png',
    'moldura7.png',
    'moldura8.png'
  ];

  for (let file of framesFiles) { // por cada ficheiro, add
    frames.push(loadImage('data/molduras/' + file));
  }

  // load fonts
  font1 = loadFont('data/fonts/Bonbon-Regular.ttf');
  font2 = loadFont('data/fonts/CraftyGirls-Regular.ttf');
  font3 = loadFont('data/fonts/HerrVonMuellerhoff-Regular.ttf');
  font4 = loadFont('data/fonts/Meddon-Regular.ttf');
  font5 = loadFont('data/fonts/OpenSans-Bold.ttf');

  stickersFiles = [
    'sticker1.png',
    'sticker2.png',
    'sticker3.png',
    'sticker4.png',
    'sticker5.png',
    'sticker6.png',
    'sticker7.png',
    'sticker8.png',
  ];
  for (let file of stickersFiles) {
    stickersImg.push(loadImage('data/stickers/' + file));
  }

  brilhosFiles = [
    'brilho.png',
    'brilho1.png',
    'brilho2.png',
    'brilho2.png',
    'brilho4.png',
    'brilho5.png',
    'brilho6.png',
    'brilho7.png',

  ];
  for (let file of brilhosFiles) {
    brilhosImg.push(loadImage('data/brilho/' + file));
  }

  formasFiles = [
    'forma1.png',
    'forma2.png',
    'forma3.png',
    'forma4.png',
    'forma5.png',
    'forma6.png',
    'forma7.png',
    'forma8.png',
  ];
  for (let file of formasFiles) {
    formasImg.push(loadImage('data/formas/' + file));
  }
}

//////////////////////////////////
function setup() {

  c = createCanvas(w, w);
  c.position(0, header);

  c.parent('index');

  // header
  let hdr = createDiv('');
  hdr.position(0, 0);
  hdr.size(w, header);
  hdr.style('background-color', '#fff');
  hdr.style('box-shadow', '1px 1px 10px #d8b7ff');

  createButtons();
  showFirstMenu();

  // alerta
  //icone fechar alerta
  let divAlerta = createDiv('');
  divAlerta.size(w - 50, 130);
  divAlerta.position(30, w / 3);
  divAlerta.style('font-family', 'Open Sans');
  divAlerta.style('text-shadow', '0 0 2px #d8b7ff');
  divAlerta.style('font-size', '12px');
  divAlerta.style('border-radius', '15px');
  divAlerta.style('box-shadow', '1px 1px 10px #d8b7ff');
  divAlerta.style('color', '#af7dfd');
  divAlerta.style('background-color', 'rgba(255, 255, 255, 0.8)');
  divAlerta.style('border', 'none');
  divAlerta.style('text-align', 'center');

  let iconFechar = createElement('i');
  iconFechar.addClass('fa fa-times');
  iconFechar.style('float', 'right');
  iconFechar.style('text-shadow', '0 0 2px #d8b7ff');

  let pAlerta = createP('Bem vindo/a!<br>O Coollage ajuda-te a gerar as tuas próprias imagens para fazeres, finalmente, parte da comunidade Faceboomer! Toca em qualquer botão para começar a personalizar.');

  pAlerta.style('margin-left', '10vw');
  pAlerta.style('margin-right', '10vw');
  pAlerta.style('font-size', '12px');
  pAlerta.style('text-align', 'left');
  pAlerta.style('position', 'absolute');
  pAlerta.style('line-height', '1.2');
  pAlerta.style('top', '50%');
  pAlerta.style('transform', 'translateY(-50%)');

  iconFechar.parent(divAlerta);
  pAlerta.parent(divAlerta);

  iconFechar.mousePressed(function () {
    divAlerta.remove();
  });

  fonttt = font5;
  textFont(fonttt);
  textos.push(new Texto(-100, -1000, tSize, 'Escreve aqui!'));
for (let t of textos){
  t.update();
  t.updateText('', 22, '#fff', font5);
}
}

//////////////////////////////////
function draw() {
  //// LAYER 1: FUNDO
  imageMode(CORNER);
  background(bg);

  //// LAYER 2: MOLDURAS
  switch (moldura) {
    case 0:
      image(frames[0], 0, 0, w, w);
      break;
    case 1:
      image(frames[1], 0, 0, w, w);
      break;
    case 2:
      image(frames[2], 0, 0, w, w);
      break;
    case 3:
      image(frames[3], 0, 0, w, w);
      break;
    case 4:
      image(frames[4], 0, 0, w, w);
      break;
    case 5:
      image(frames[5], 0, 0, w, w);
      break;
    case 6:
      image(frames[6], 0, 0, w, w);
      break;
    case 7:
      image(frames[7], 0, 0, w, w);
      break;
    case 8:
      break;
  }

  //// LAYER 3: TEXTO
  noStroke();
  tSize = sliderT.value(); // tamanho texto
  let escrito = textbox.value(); // o que se escreve
  // UPDATE: texto, tamanho, cor, font
  // update posição
  if (interactTexto == true) {
    print(textos[textos.length - 1].update());
    textos[textos.length - 1].update(); // update drag
    textos[textos.length - 1].updateText(escrito, tSize, Tc, fonttt);
  }
  // mostrar todos
  for (let t of textos) {
    t.show(); // display + aplicar tamanho
  }


  /* 
    for (let t of textos) {
          t.show(); // display + aplicar tamanho
    } */

  //// LAYER 4: STICKERS
  sSize = sizeSliderS.value();
  if (interactSticker == true) {
    // update posição do último
    stickers[stickers.length - 1].update();
    // update tamanho / escolha do último
    stickers[stickers.length - 1].updateSize(sSize, qualSticker);
  }
  // mostrar todos
  for (let s of stickers) {
    s.show();
  }

  //// LAYER 5: BRILHOS
  bSize = sizeSliderB.value();
  if (interactBrilho == true) {
    if (brilhos.length > 0) {
      // update posição do último
      brilhos[brilhos.length - 1].update();
      // update tamanho / escolha do último
      brilhos[brilhos.length - 1].updateSize(bSize, qualBrilho);
    }
  }
  // mostrar todos
  for (let b of brilhos) {
    b.show();
  }

  //// LAYER 6: FORMAS
  fSize = sizeSliderF.value();
  if (interactForma == true) {
    if (formas.length > 0) {
      // update posição do último
      formas[formas.length - 1].update();
      // update tamanho / escolha do último
      formas[formas.length - 1].updateSize(fSize, qualForma);
    }
  }
  // mostrar todos
  for (let f of formas) {
    f.show();
  }

  ////* BARRA MENU */
  // está em draw para ser redesenhado por cima dos objetos do canvas
  /*   fill('red');
    rect(100, 100, 100, 100); */
}


//////////////////////////////////
////////* ACTIONS FUNDO */
function fundo() {
  // funções dos botoes para mudar a imagem
  bgBtn[0].mousePressed(function () {
    bg = backgrounds[0];
  });
  bgBtn[1].mousePressed(function () {
    bg = backgrounds[1];
  });
  bgBtn[2].mousePressed(function () {
    bg = backgrounds[2];
  });
  bgBtn[3].mousePressed(function () {
    bg = backgrounds[3];
  });
  bgBtn[4].mousePressed(function () {
    bg = backgrounds[4];
  });
  bgBtn[5].mousePressed(function () {
    bg = backgrounds[5];
  });
  bgBtn[6].mousePressed(function () {
    bg = backgrounds[6];
  });
  bgBtn[7].mousePressed(function () {
    bg = backgrounds[7];
  });
  bgBtn[8].mousePressed(function () {
    bg = backgrounds[8];
  });
  bgBtn[9].mousePressed(function () {
    bg = backgrounds[9];
  });
  bgBtn[10].mousePressed(function () {
    bg = backgrounds[10];
  });
  bgBtn[11].mousePressed(function () {
    bg = backgrounds[11];
  });
  bgBtn[12].mousePressed(function () {
    bg = backgrounds[12];
  });
  bgBtn[13].mousePressed(function () {
    bg = backgrounds[13];
  });

  // funções para mudar a cor sólida
  cor[0].mousePressed(function () {
    bg = 0;
  });
  cor[1].mousePressed(function () {
    bg = 255;
  });
  cor[2].mousePressed(function () {
    bg = '#9a2fff';
  });
  cor[3].mousePressed(function () {
    bg = '#ff2f2b';
  });
  cor[4].mousePressed(function () {
    bg = '#3cb1ff';
  });
  cor[5].mousePressed(function () {
    bg = '#7fd24b';
  });
  cor[6].mousePressed(function () {
    bg = '#ffd12c';
  });

  bMenu[0].mousePressed(function () {
    bg = 255;
    showFirstMenu();
    hideFundoMenu();
    hideBottomMenu();
  });

}
////////* ACTIONS MOLDURA */
function moldura() {
  // funções dos botoes para mudar a imagem
  molduraBtn[0].mousePressed(function () {
    moldura = 0;
  });
  molduraBtn[1].mousePressed(function () {
    moldura = 1;
  });
  molduraBtn[2].mousePressed(function () {
    moldura = 2;
  });
  molduraBtn[3].mousePressed(function () {
    moldura = 3;
  });
  molduraBtn[4].mousePressed(function () {
    moldura = 4;
  });
  molduraBtn[5].mousePressed(function () {
    moldura = 5;
  });
  molduraBtn[6].mousePressed(function () {
    moldura = 6;
  });
  molduraBtn[7].mousePressed(function () {
    moldura = 7;
  });
  bMenu[0].mousePressed(function () {
    moldura = 8;
    hideMolduraMenu();
    hideBottomMenu();
    showFirstMenu();
  });
}
////////* ACTIONS TEXTO */
function texto() {
  interactTexto = true;
  textbox.value('Escreve aqui!');
  sliderT.value(22);
  fonttt = font5;
  print(Tc, 'Tc');

  // MUDAR FONT
  fontBtn[0].mousePressed(function () {
    fonttt = font1;
    print(fonttt.font.names.fullName);
  });
  fontBtn[1].mousePressed(function () {
    fonttt = font2;
    print(fonttt.font.names.fullName);
  });
  fontBtn[2].mousePressed(function () {
    fonttt = font3;
    print(fonttt.font.names.fullName);
  });
  fontBtn[3].mousePressed(function () {
    fonttt = font4;
    print(fonttt.font.names.fullName);
  });
  fontBtn[4].mousePressed(function () {
    fonttt = font5;
    print(fonttt.font.names.fullName);
  });

  // MUDAR A COR
  // botoes/funções para mudar a cor
  corTexto[0].mousePressed(function () {
    Tc = 0;
  });
  corTexto[1].mousePressed(function () {
    Tc = 255;
  });
  corTexto[2].mousePressed(function () {
    Tc = '#9a2fff';
  });
  corTexto[3].mousePressed(function () {
    Tc = '#ff2f2b';
  });
  corTexto[4].mousePressed(function () {
    Tc = '#3cb1ff';
  });
  corTexto[5].mousePressed(function () {
    Tc = '#7fd24b';
  });
  corTexto[6].mousePressed(function () {
    Tc = '#ffd12c';
  });

  textos.push(new Texto(Tx, Ty, tSize, 'Escreve aqui!'));

  // ao clicar cancelar
  bMenu[0].mousePressed(function () {
    textos.pop();
    showFirstMenu();
    hideTextoMenu();
    hideBottomMenu();
  });

}
////////* ACTIONS STICKER */
function sticker() {
  interactSticker = true;

  qualSticker = 0;

  stickersBtn[0].mousePressed(function () {
    qualSticker = 0;
  });
  stickersBtn[1].mousePressed(function () {
    qualSticker = 1;
  });
  stickersBtn[2].mousePressed(function () {
    qualSticker = 2;
  });
  stickersBtn[3].mousePressed(function () {
    qualSticker = 3;
  });
  stickersBtn[4].mousePressed(function () {
    qualSticker = 4;
  });
  stickersBtn[5].mousePressed(function () {
    qualSticker = 5;
  });
  stickersBtn[6].mousePressed(function () {
    ququalStickeralBrilho = 6;
  });
  stickersBtn[7].mousePressed(function () {
    qualSticker = 7;
  });

  stickers.push(new Sticker(w / 2, w / 2, bSize));

  // ao clicar cancelar
  bMenu[0].mousePressed(function () {
    stickers.pop();
    showFirstMenu();
    hideStickerMenu();
    hideBottomMenu();
  });

}
////////* ACTIONS BRILHO */
function brilho() {
  interactBrilho = true;
  qualBrilho = 1;

  brilhosBtn[0].mousePressed(function () {
    qualBrilho = 0;
  });
  brilhosBtn[1].mousePressed(function () {
    qualBrilho = 1;
  });
  brilhosBtn[2].mousePressed(function () {
    qualBrilho = 2;
  });
  brilhosBtn[3].mousePressed(function () {
    qualBrilho = 3;
  });
  brilhosBtn[4].mousePressed(function () {
    qualBrilho = 4;
  });
  brilhosBtn[5].mousePressed(function () {
    qualBrilho = 5;
  });
  brilhosBtn[6].mousePressed(function () {
    qualBrilho = 6;
  });
  brilhosBtn[7].mousePressed(function () {
    qualBrilho = 7;
  });

  brilhos.push(new Brilho(w / 2, w / 2, fSize));

  // ao clicar cancelar
  bMenu[0].mousePressed(function () {
    brilhos.pop();;
    showFirstMenu();
    hideBrilhoMenu();
    hideBottomMenu();
  });

}
////////* ACTIONS FORMA */
function forma() {
  interactForma = true;
  qualForma = 1;

  formasBtn[0].mousePressed(function () {
    qualForma = 0;
  });
  formasBtn[1].mousePressed(function () {
    qualForma = 1;
  });
  formasBtn[2].mousePressed(function () {
    qualForma = 2;
  });
  formasBtn[3].mousePressed(function () {
    qualForma = 3;
  });
  formasBtn[4].mousePressed(function () {
    qualForma = 4;
  });
  formasBtn[5].mousePressed(function () {
    qualForma = 5;
  });
  formasBtn[6].mousePressed(function () {
    qualForma = 6;
  });
  formasBtn[7].mousePressed(function () {
    qualForma = 7;
  });

  formas.push(new Forma(w / 2, w / 2, fSize));

  // ao clicar cancelar
  bMenu[0].mousePressed(function () {
    formas.pop();;
    showFirstMenu();
    hideFormaMenu();
    hideBottomMenu();
  });
}

//////////////////////////////////
//////////////////* MEME MENUS */
////////* FUNDO MENU */
function showFundoMenu() {
  aBM = 255; // fundo da barra menu
  // botoes COR DO FUNDO
  for (var i = 0; i < 7; i++) {
    cor[i].show();
    cor[i].removeAttribute('disabled');
  }
  // botoes IMG FUNDO
  for (var i = 0; i < 14; i++) {
    bgBtn[i].show();
    bgBtn[i].removeAttribute('disabled');
  }

}

function hideFundoMenu() {
  for (var i = 0; i < 7; i++) {
    cor[i].hide();
    cor[i].attribute('disabled', '');
  }
  for (var i = 0; i < 14; i++) {
    bgBtn[i].hide();
    bgBtn[i].attribute('disabled', '');
  }

}

////////* MOLDURA MENU */
function showMolduraMenu() {
  aBM = 255; // fundo da barra menu
  // botoes molduras
  for (var i = 0; i < 8; i++) {
    molduraBtn[i].show();
    molduraBtn[i].removeAttribute('disabled');
  }
}

function hideMolduraMenu() {
  for (var i = 0; i < 8; i++) {
    molduraBtn[i].hide();
    molduraBtn[i].attribute('disabled', '');
  }
}

////////* TEXTO MENU */
function showTextoMenu() {
  aBM = 255; // fundo da barra menu

  // botoes barra menu
  textoBM.show();
  textoBM.removeAttribute('disabled');
  corTBM.show();
  corTBM.removeAttribute('disabled');
  tamanhoTBM.show();
  tamanhoTBM.removeAttribute('disabled');
  // para escrever
  textbox.show();
  textbox.removeAttribute('disabled');
  // para escolher font
  for (var i = 0; i < 5; i++) {
    fontBtn[i].show();
    fontBtn[i].removeAttribute('disabled');
  }
  // MENU INPUT TEXTO
  textoBM.mousePressed(function () {
    // esconder outros menus
    sliderT.hide();
    for (var i = 0; i < 7; i++) {
      corTexto[i].hide();
      corTexto[i].attribute('disabled', '');
    }
    /// mostrar botoes fonts
    textbox.show();
    textbox.removeAttribute('disabled');
    for (var i = 0; i < 5; i++) {
      fontBtn[i].show();
      fontBtn[i].removeAttribute('disabled');
    }
  });
  // MENU COR TEXTO
  corTBM.mousePressed(function () {
    // esconder outros menus
    textbox.hide();
    textbox.attribute('disabled', '');
    sliderT.hide();
    for (var i = 0; i < 5; i++) {
      fontBtn[i].hide();
      fontBtn[i].attribute('disabled', '');
    }
    ///
    for (var i = 0; i < 7; i++) {
      corTexto[i].show();
      corTexto[i].removeAttribute('disabled');
    }
  });
  // MENU TAMANHO TEXTO
  tamanhoTBM.mousePressed(function () {
    // esconder outros menus
    textbox.hide();
    textbox.attribute('disabled', '');
    for (var i = 0; i < 7; i++) {
      corTexto[i].hide();
      corTexto[i].attribute('disabled', '');
    }
    for (var i = 0; i < 5; i++) {
      fontBtn[i].hide();
      fontBtn[i].attribute('disabled', '');
    }
    ///
    sliderT.show();
  });

}

function hideTextoMenu() {
  interactTexto = false;
  textoBM.hide();
  textoBM.attribute('disabled', '');
  corTBM.hide();
  corTBM.attribute('disabled', '');
  tamanhoTBM.hide();
  tamanhoTBM.attribute('disabled', '');
  textbox.hide();
  textbox.attribute('disabled', '');
  sliderT.hide();
  for (var i = 0; i < 5; i++) {
    fontBtn[i].hide();
    fontBtn[i].attribute('disabled', '');
  }
  for (var i = 0; i < 7; i++) {
    corTexto[i].hide();
    corTexto[i].attribute('disabled', '');
  }
}

////////* STICKER MENU */
function showStickerMenu() {
  // MENU MOSTRAR STICKERS/ESCONDER SLIDER
  tamanhoBtnS.show();
  tamanhoBtnS.removeAttribute('disabled');
  stickerBtnS.show();
  stickerBtnS.removeAttribute('disabled');

  for (var i = 0; i < 8; i++) {
    stickersBtn[i].show();
    stickersBtn[i].removeAttribute('disabled');
  }
  sizeSliderS.hide();

  stickerBtnS.mousePressed(function () {
    for (var i = 0; i < 8; i++) {
      stickersBtn[i].show();
      stickersBtn[i].removeAttribute('disabled');
    }
    sizeSliderS.hide();
  });

  // MENU ESCONDER STICKERS/MOSTRAR SLIDER
  tamanhoBtnS.mousePressed(function () {
    // esconder outros menus
    for (var i = 0; i < 8; i++) {
      stickersBtn[i].hide();
      stickersBtn[i].attribute('disabled', '');
    }
    sizeSliderS.show();
  });
}

function hideStickerMenu() {
  interactSticker = false;

  tamanhoBtnS.hide();
  tamanhoBtnS.attribute('disabled', '');
  stickerBtnS.hide();
  stickerBtnS.attribute('disabled');

  for (var i = 0; i < 8; i++) {
    stickersBtn[i].hide();
    stickersBtn[i].attribute('disabled', '');
  }
  sizeSliderS.hide();
}

////////* BRILHO MENU */
function showBrilhoMenu() {
  // MENU MOSTRAR STICKERS/ESCONDER SLIDER
  tamanhoBtnB.show();
  tamanhoBtnB.removeAttribute('disabled');
  brilhoBtnB.show();
  brilhoBtnB.removeAttribute('disabled');

  for (var i = 0; i < 8; i++) {
    brilhosBtn[i].show();
    brilhosBtn[i].removeAttribute('disabled');
  }
  sizeSliderB.hide();

  brilhoBtnB.mousePressed(function () {
    for (var i = 0; i < 8; i++) {
      brilhosBtn[i].show();
      brilhosBtn[i].removeAttribute('disabled');
    }
    sizeSliderB.hide();
  });

  // MENU ESCONDER STICKERS/MOSTRAR SLIDER
  tamanhoBtnB.mousePressed(function () {
    // esconder outros menus
    for (var i = 0; i < 8; i++) {
      brilhosBtn[i].hide();
      brilhosBtn[i].attribute('disabled', '');
    }
    sizeSliderB.show();
  });
}

function hideBrilhoMenu() {
  interactBrilho = false;

  tamanhoBtnB.hide();
  tamanhoBtnB.attribute('disabled', '');
  brilhoBtnB.hide();
  brilhoBtnB.attribute('disabled');

  for (var i = 0; i < 8; i++) {
    brilhosBtn[i].hide();
    brilhosBtn[i].attribute('disabled', '');
  }
  sizeSliderB.hide();
}

////////* FORMA MENU */
function showFormaMenu() {

  // MENU MOSTRAR STICKERS/ESCONDER SLIDER
  tamanhoBtnF.show();
  tamanhoBtnF.removeAttribute('disabled');
  formaBtnF.show();
  formaBtnF.removeAttribute('disabled');

  for (var i = 0; i < 8; i++) {
    formasBtn[i].show();
    formasBtn[i].removeAttribute('disabled');
  }
  sizeSliderF.hide();

  formaBtnF.mousePressed(function () {
    for (var i = 0; i < 8; i++) {
      formasBtn[i].show();
      formasBtn[i].removeAttribute('disabled');
    }
    sizeSliderF.hide();
  });

  // MENU ESCONDER STICKERS/MOSTRAR SLIDER
  tamanhoBtnF.mousePressed(function () {
    // esconder outros menus
    for (var i = 0; i < 8; i++) {
      formasBtn[i].hide();
      formasBtn[i].attribute('disabled', '');
    }
    sizeSliderF.show();
  });
}

function hideFormaMenu() {
  interactForma = false;

  tamanhoBtnF.hide();
  tamanhoBtnF.attribute('disabled', '');
  formaBtnF.hide();
  formaBtnF.attribute('disabled');

  for (var i = 0; i < 8; i++) {
    formasBtn[i].hide();
    formasBtn[i].attribute('disabled', '');
  }
  sizeSliderF.hide();

}

//////////////////////* NAV MENUS */
/* BOTTOM MENU */
function showBottomMenu() {

  hideFirstMenu();

  bMenu[0] = createButton("Cancelar");
  bMenu[1] = createButton("Concluído");

  for (var i = 0; i < 2; i++) {
    bMenu[i].size(w / 2, footer);
    bMenu[i].position(0, h - footer);
    bMenu[i].style("font-family", "Open Sans");
    bMenu[i].style("font-size", "12px");
    bMenu[i].style('text-shadow', '0 0 2px #d8b7ff');
    bMenu[i].style('box-shadow', '1px 1px 10px #d8b7ff');
    bMenu[i].style("color", "#af7dfd");
    bMenu[i].style('background-color', 'rgba(255, 255, 255, 0.8)');
    bMenu[i].style('border', 'none');
    bMenu[i].style('border-right', 'solid 0.5px #af7dfd');

    if (i > 0) {
      bMenu[i].position(w / 2, h - footer);
      bMenu[i].style('border-right', 'none');
    }
  }

  bMenu[0].mousePressed(function () {
    hideBottomMenu();
    hideFundoMenu();
    hideTextoMenu();
    hideMolduraMenu();
    hideStickerMenu();
    hideBrilhoMenu();
    hideFormaMenu();
    showFirstMenu();
  });
  bMenu[1].mousePressed(function () {
    hideBottomMenu();
    hideFundoMenu();
    hideTextoMenu();
    hideMolduraMenu();
    hideStickerMenu();
    hideBrilhoMenu();
    hideFormaMenu();
    showFirstMenu();
  });
}

function hideBottomMenu() {
  for (var i = 0; i < 2; i++) {
    bMenu[i].hide();
    bMenu[i].attribute('disabled', '');
  }
}

/* MENU INICIAL */
function showFirstMenu() {
  //// botões gerais e alerta
  let linkVoltar = createA('../Final.html', '');
  let voltarIcon = createElement('i');
  voltarIcon.addClass('fa fa-arrow-left');
  voltarIcon.style('text-shadow', '0 0 2px #d8b7ff');
  voltarIcon.position(0, 3);
  voltarIcon.attribute('href', '../Final.html');
  voltarIcon.parent(linkVoltar);

  let guardarIcon = createElement('i');
  guardarIcon.addClass('fa fa-download');
  guardarIcon.style('text-shadow', '0 0 2px #d8b7ff');
  guardarIcon.position(w - 50, 3);
  let guardar = createButton('');
  guardar.position(w - 38, 13);
  guardar.size(20, 20);
  guardar.mousePressed(function () {
    saveCanvas(c, 'Faceboomer', 'jpg');
  });
  guardar.style('border', 'none');
  guardar.style('background-color', 'transparent');


  button[0] = createButton('Fundo');
  button[1] = createButton('Moldura');
  button[2] = createButton('Texto');
  button[3] = createButton('Stickers');
  button[4] = createButton('Brilho');
  button[5] = createButton('Formas');

  for (var i = 0; i < 6; i++) {
    button[i].size(60, 60);
    button[i].style('font-family', 'Open Sans');
    button[i].style('text-shadow', '0 0 2px #d8b7ff');
    button[i].style('font-size', '12px');
    button[i].style('border-radius', '15px');
    button[i].style('box-shadow', '1px 1px 10px #d8b7ff');
    button[i].style('color', '#af7dfd');
    button[i].style('background-color', 'rgba(255, 255, 255, 0.8)');
    button[i].style('border', 'none');

    var margem = (w - 75 * 3) / 2;
    if (i < 3) {
      button[i].position(75 * i + margem, w + 80);
    } else {
      button[i].position(75 * i + margem - (75 * 3), w + 155);
    }
  }

  button[0].mousePressed(function () { // fundo
    showFundoMenu();
    showBottomMenu();
    hideFirstMenu();
    fundo();

    linkVoltar.remove();
    voltarIcon.remove();
  });
  button[1].mousePressed(function () { // molduras
    showMolduraMenu();
    showBottomMenu();
    hideFirstMenu();
    moldura();

    linkVoltar.remove();
    voltarIcon.remove();
  });
  button[2].mousePressed(function () { // texto
    showTextoMenu();
    showBottomMenu();
    hideFirstMenu();
    texto();

    linkVoltar.remove();
    voltarIcon.remove();
  });
  button[3].mousePressed(function () { // stickers
    showStickerMenu();
    showBottomMenu();
    hideFirstMenu();
    sticker();
  });
  button[4].mousePressed(function () { // brilhos
    showBrilhoMenu();
    showBottomMenu();
    hideFirstMenu();
    brilho();

    linkVoltar.remove();
    voltarIcon.remove();
  });
  button[5].mousePressed(function () {
    showFormaMenu();
    showBottomMenu();
    hideFirstMenu();
    forma();

    linkVoltar.remove();
    voltarIcon.remove();
  });
}

function hideFirstMenu() {

  for (var i = 0; i < 6; i++) {
    button[i].hide();
    button[i].attribute('disabled', '');
  }
}


// FUNÇÕES ARRASTAR O TEXTO
function mousePressed() {
  for (let t of textos) {
    t.pressed();
  }
  for (let b of brilhos) {
    b.pressed();
  }
  for (let s of stickers) {
    s.pressed();
  }
  for (let f of formas) {
    f.pressed();
  }
}

function mouseReleased() {
  for (let t of textos) {
    t.released();
  }
  for (let b of brilhos) {
    b.released();
  }
  for (let s of stickers) {
    s.released();
  }
  for (let f of formas) {
    f.released();
  }
}



//////////////////////////////////
//////////////////////////////////
/* ESTILO TODOS BOTÕES */
function createButtons() {
  //// fundo
  // botoes cores fundo
  var margem = (w - (btnPosX * 6 + 20)) / 2;
  for (var i = 0; i < 7; i++) {
    cor[i] = createButton('');
    cor[i].position(btnPosX * i + margem, w + 75);
    cor[i].style('width', '20px');
    cor[i].style('height', '20px');
    cor[i].style('border-radius', '50%');
    cor[i].style('border', 'solid 0.5px #af7dfd');
    cor[i].hide();
    cor[i].attribute('disabled', '');
  }
  // cores sólidas dos botoes
  cor[0].style('background-color', '#000');
  cor[1].style('background-color', '#fff');
  cor[2].style('background-color', '#9b2fff');
  cor[3].style('background-color', '#FF241A');
  cor[4].style('background-color', '#3CB2FF');
  cor[5].style('background-color', '#7ED24B');
  cor[6].style('background-color', '#FFD22C');

  for (var i = 0; i < 14; i++) {
    bgBtn[i] = createButton('');
    bgBtn[i].position(btnPosX * i + margem, w + 75 + 30);
    bgBtn[i].style('width', '20px');
    bgBtn[i].style('height', '20px');
    bgBtn[i].style('border-radius', '50%');
    bgBtn[i].style('border', 'solid 0.5px #af7dfd');
    bgBtn[i].style('background-size', 'cover');
    if (i > 6) {
      bgBtn[i].position(btnPosX * i + + margem - (btnPosX * 7), w + 75 + 60);
    }
    bgBtn[i].hide();
    bgBtn[i].attribute('disabled', '');
  }
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
  bgBtn[12].style('background-image', 'url("data/Fundos/flor1.jpg")');
  bgBtn[13].style('background-image', 'url("data/Fundos/flor2.jpg")');

  //// molduras
  margem = (w - (btnPosX2 * 4)) / 2;
  for (var i = 0; i < 8; i++) {
    molduraBtn[i] = createButton('');
    molduraBtn[i].position(btnPosX2 * i + margem, btnPosY2);
    molduraBtn[i].style('width', '50px');
    molduraBtn[i].style('height', '50px');
    molduraBtn[i].style('border', 'none');
    molduraBtn[i].style('background-size', '50px 50px');
    molduraBtn[i].style('background-repeat', 'no-repeat');

    if (i >= 4) {
      molduraBtn[i].position(btnPosX2 * i + margem - (btnPosX2 * 4), btnPosY2 + 55);
    }
    molduraBtn[i].hide();
    molduraBtn[i].attribute('disabled', '');
  }
  // colocar imagens de fundo nos botoes
  molduraBtn[0].style('background-image', 'url("data/molduras/moldura1.png")');
  molduraBtn[1].style('background-image', 'url("data/molduras/moldura2.png")');
  molduraBtn[2].style('background-image', 'url("data/molduras/moldura3.png")');
  molduraBtn[3].style('background-image', 'url("data/molduras/moldura4.png")');
  molduraBtn[4].style('background-image', 'url("data/molduras/moldura5.png")');
  molduraBtn[5].style('background-image', 'url("data/molduras/moldura6.png")');
  molduraBtn[6].style('background-image', 'url("data/molduras/moldura7.png")');
  molduraBtn[7].style('background-image', 'url("data/molduras/moldura8.png")');

  //// texto
  // menu barra
  textoBM = createButton("Texto");
  textoBM.position(0, w + 35, 'fixed');
  textoBM.size(w / 3, 35);
  textoBM.style("font-family", "Open Sans");
  textoBM.style('text-shadow', '0 0 2px #d8b7ff');
  textoBM.style("font-size", "12px");
  textoBM.style("color", "#af7dfd");
  textoBM.style('background-color', '#fff');
  textoBM.style('border', 'solid 0.5px #af7dfd');
  textoBM.hide();
  textoBM.attribute('disabled', '');
  corTBM = createButton("Cor");
  corTBM.position(w / 3, w + 35, 'fixed');
  corTBM.size(w / 3, 35);
  corTBM.style("font-family", "Open Sans");
  corTBM.style('text-shadow', '0 0 2px #d8b7ff');
  corTBM.style("font-size", "12px");
  corTBM.style("color", "#af7dfd");
  corTBM.style('background-color', '#fff');
  corTBM.style('border', 'solid 0.5px #af7dfd');
  corTBM.hide();
  corTBM.attribute('disabled', '');
  tamanhoTBM = createButton("Tamanho");
  tamanhoTBM.position((w / 3) * 2, w + 35, 'fixed');
  tamanhoTBM.size(w / 3, 35);
  tamanhoTBM.style("font-family", "Open Sans");
  tamanhoTBM.style('text-shadow', '0 0 2px #d8b7ff');
  tamanhoTBM.style("font-size", "12px");
  tamanhoTBM.style("color", "#af7dfd");
  tamanhoTBM.style('background-color', '#fff');
  tamanhoTBM.style('border', 'solid 0.5px #af7dfd');
  tamanhoTBM.hide();
  tamanhoTBM.attribute('disabled', '');
  textbox = createElement('textarea', 'Escreve aqui!');
  textbox.position((w - 200) / 2, w + 130);
  textbox.size(200, 50);
  textbox.style('border', 'solid 1px #d8b7ff');
  textbox.style("font-family", "Open Sans");
  textbox.style('color', '#af7dfd');
  textbox.style('text-shadow', '0 0 2px #d8b7ff');
  textbox.hide();
  textbox.attribute('disabled', '');
  // BOTOES ESCOLHER FONT
  margem = (w - (btnPosX * 5)) / 2;
  for (var i = 0; i < 5; i++) {
    fontBtn[i] = createButton('Aa');
    fontBtn[i].position(btnPosX * i + margem, w + 85);
    fontBtn[i].style('width', '20px');
    fontBtn[i].style('height', '20px');
    fontBtn[i].style('border', 'none');
    fontBtn[i].style('background-color', '#fff');
    fontBtn[i].style('color', '#9b2fff');
    fontBtn[i].hide();
    fontBtn[i].attribute('disabled', '');
  }
  fontBtn[0].style('font-family', 'myBonbon');
  fontBtn[1].style('font-family', 'myCrafty');
  fontBtn[2].style('font-family', 'myHerr');
  fontBtn[2].style('font-size', '15px');
  fontBtn[2].position(btnPosX * 2 + margem, w + 85 - 1);
  fontBtn[3].style('font-family', 'myMeddon');
  fontBtn[3].style('font-size', '10px');
  fontBtn[3].position(btnPosX * 3 + margem - 3, w + 85 - 1);
  fontBtn[4].style('font-family', 'myOpenSans');
  fontBtn[4].style('font-weight', 'bold');
  // SLIDER TAMANHO
  sliderT = createSlider(10, 100, 22);
  sliderT.size(200, 20);
  sliderT.position((w - 200) / 2, w + 130);
  sliderT.hide();
  // OPÇÕES CORES DE TEXTO
  margem = (w - (btnPosX * 6 + 20)) / 2;
  for (var i = 0; i < 7; i++) {
    corTexto[i] = createButton('');
    corTexto[i].position(btnPosX * i + margem, w + 85 + 45);
    corTexto[i].style('width', '20px');
    corTexto[i].style('height', '20px');
    corTexto[i].style('border-radius', '50%');
    corTexto[i].style('border', 'solid 0.5px #af7dfd');
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

  // STICKERS
  margem = (w - (btnPosXS * 4 + 8)) / 2;
  // BOTOES slider stickers
  stickerBtnS = createButton("Stickers");
  stickerBtnS.position(0, w + 35, 'fixed');
  stickerBtnS.size(w / 2, 35);
  stickerBtnS.style("font-family", "Open Sans");
  stickerBtnS.style('text-shadow', '0 0 2px #d8b7ff');
  stickerBtnS.style("font-size", "12px");
  stickerBtnS.style("color", "#af7dfd");
  stickerBtnS.style('background-color', '#fff');
  stickerBtnS.style('border', 'solid 0.5px #af7dfd');
  stickerBtnS.hide();
  stickerBtnS.attribute('disable', '');

  // BOTOES slider tamanho
  tamanhoBtnS = createButton("Tamanho");
  tamanhoBtnS.position(w / 2, w + 35, 'fixed');
  tamanhoBtnS.size(w / 2, 35);
  tamanhoBtnS.style("font-family", "Open Sans");
  tamanhoBtnS.style('text-shadow', '0 0 2px #d8b7ff');
  tamanhoBtnS.style("font-size", "12px");
  tamanhoBtnS.style("color", "#af7dfd");
  tamanhoBtnS.style('background-color', '#fff');
  tamanhoBtnS.style('border', 'solid 0.5px #af7dfd');
  tamanhoBtnS.hide();
  tamanhoBtnS.attribute('disable', '');

  sizeSliderS = createSlider(60, 200, 60);
  sizeSliderS.size(200, 20);
  sizeSliderS.position((w - 200) / 2, w + 130);
  // esconder (aparece quando se clica no menu)
  sizeSliderS.hide();

  // IMAGEM DE FUNDO
  margem = (w - (btnPosXS * 4)) / 2;
  for (var i = 0; i < 8; i++) {
    stickersBtn[i] = createButton('');
    stickersBtn[i].position(btnPosXS * i + margem, w + 110);
    stickersBtn[i].style('width', '40px');
    stickersBtn[i].style('height', '40px');
    stickersBtn[i].style('border', 'none');
    stickersBtn[i].style('background-size', '40px 40px');
    stickersBtn[i].style('background-repeat', 'no-repeat');
    // divido em 2 para estarem alinhados
    if (i >= 4) {
      stickersBtn[i].position(btnPosXS * i + margem - (btnPosXS * 4), w + 120 + 35);
    }
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
  // esconder
  for (var i = 0; i < 8; i++) {
    stickersBtn[i].hide();
    stickersBtn[i].attribute('disabled');
  }
  sizeSliderS.hide();

  // BRILHOS
  margem = (w - (btnPosX * 4 + 8)) / 2;
  // BOTOES slider stickers
  brilhoBtnB = createButton("Brilhos");
  brilhoBtnB.position(0, w + 35, 'fixed');
  brilhoBtnB.size(w / 2, 35);
  brilhoBtnB.style("font-family", "Open Sans");
  brilhoBtnB.style('text-shadow', '0 0 2px #d8b7ff');
  brilhoBtnB.style("font-size", "12px");
  brilhoBtnB.style("color", "#af7dfd");
  brilhoBtnB.style('background-color', '#fff');
  brilhoBtnB.style('border', 'solid 0.5px #af7dfd');
  brilhoBtnB.hide();
  brilhoBtnB.attribute('disable', '');
  tamanhoBtnB = createButton("Tamanho");
  tamanhoBtnB.position(w / 2, w + 35, 'fixed');
  tamanhoBtnB.size(w / 2, 35);
  tamanhoBtnB.style("font-family", "Open Sans");
  tamanhoBtnB.style('text-shadow', '0 0 2px #d8b7ff');
  tamanhoBtnB.style("font-size", "12px");
  tamanhoBtnB.style("color", "#af7dfd");
  tamanhoBtnB.style('background-color', '#fff');
  tamanhoBtnB.style('border', 'solid 0.5px #af7dfd');
  tamanhoBtnB.hide();
  tamanhoBtnB.attribute('disable', '');
  sizeSliderB = createSlider(100, 1000, 200);
  sizeSliderB.size(200, 20);
  sizeSliderB.position((w - 200) / 2, w + 130);
  sizeSliderB.hide();

  // IMAGEM DE FUNDO
  btnPosXS = btnPosXS + 10;
  margem = (w - (btnPosXS * 4)) / 2;
  for (var i = 0; i < 8; i++) {
    brilhosBtn[i] = createButton('');
    brilhosBtn[i].position(btnPosXS * i + margem, w + 98);
    brilhosBtn[i].style('width', '50px');
    brilhosBtn[i].style('height', '50px');
    brilhosBtn[i].style('border', 'none');
    brilhosBtn[i].style('background-size', '50px 50px');
    brilhosBtn[i].style('background-repeat', 'no-repeat');

    brilhosBtn[i].hide();
    brilhosBtn[i].attribute('disable', '');

    if (i >= 4) {
      brilhosBtn[i].position(btnPosXS * i + margem - (btnPosXS * 4), w + 153);
    }
  }
  brilhosBtn[0].style('background-image', 'url("data/brilho/brilho.png")');
  brilhosBtn[1].style('background-image', 'url("data/brilho/brilho1.png")');
  brilhosBtn[2].style('background-image', 'url("data/brilho/brilho2.png")');
  brilhosBtn[3].style('background-image', 'url("data/brilho/brilho3.png")');
  brilhosBtn[4].style('background-image', 'url("data/brilho/brilho4.png")');
  brilhosBtn[5].style('background-image', 'url("data/brilho/brilho5.png")');
  brilhosBtn[6].style('background-image', 'url("data/brilho/brilho6.png")');
  brilhosBtn[7].style('background-image', 'url("data/brilho/brilho7.png")');


  // FORMAS
  margem = (w - (btnPosX * 4 + 8)) / 2;
  // BOTOES slider stickers
  formaBtnF = createButton("Formas");
  formaBtnF.position(0, w + 35, 'fixed');
  formaBtnF.size(w / 2, 35);
  formaBtnF.style("font-family", "Open Sans");
  formaBtnF.style('text-shadow', '0 0 2px #d8b7ff');
  formaBtnF.style("font-size", "12px");
  formaBtnF.style("color", "#af7dfd");
  formaBtnF.style('background-color', '#fff');
  formaBtnF.style('border', 'solid 0.5px #af7dfd');
  formaBtnF.hide();
  formaBtnF.attribute('disable', '');

  tamanhoBtnF = createButton("Tamanho");
  tamanhoBtnF.position(w / 2, w + 35, 'fixed');
  tamanhoBtnF.size(w / 2, 35);
  tamanhoBtnF.style("font-family", "Open Sans");
  tamanhoBtnF.style('text-shadow', '0 0 2px #d8b7ff');
  tamanhoBtnF.style("font-size", "12px");
  tamanhoBtnF.style("color", "#af7dfd");
  tamanhoBtnF.style('background-color', '#fff');
  tamanhoBtnF.style('border', 'solid 0.5px #af7dfd');
  tamanhoBtnF.hide();
  tamanhoBtnF.attribute('disable', '');

  sizeSliderF = createSlider(70, 300, 22);
  sizeSliderF.size(200, 20);
  sizeSliderF.position((w - 200) / 2, w + 130);
  sizeSliderF.hide();

  // IMAGEM DE FUNDO
  btnPosXS = btnPosXS - 10;
  margem = (w - (btnPosXS * 4)) / 2;
  for (var i = 0; i < 8; i++) {
    formasBtn[i] = createButton('');
    formasBtn[i].position(btnPosXS * i + margem, w + 110);
    formasBtn[i].style('width', '40px');
    formasBtn[i].style('height', '40px');
    formasBtn[i].style('border', 'none');
    formasBtn[i].style('background-size', '40px 40px');
    formasBtn[i].style('background-repeat', 'no-repeat');

    formasBtn[i].hide();
    formasBtn[i].attribute('disable', '');

    if (i >= 4) {
      formasBtn[i].position(btnPosXS * i + margem - (btnPosXS * 4), w + 155);
    }
  }
  formasBtn[0].style('background-image', 'url("data/formas/forma1.png")');
  formasBtn[1].style('background-image', 'url("data/formas/forma2.png")');
  formasBtn[2].style('background-image', 'url("data/formas/forma3.png")');
  formasBtn[3].style('background-image', 'url("data/formas/forma4.png")');
  formasBtn[4].style('background-image', 'url("data/formas/forma5.png")');
  formasBtn[5].style('background-image', 'url("data/formas/forma6.png")');
  formasBtn[6].style('background-image', 'url("data/formas/forma7.png")');
  formasBtn[7].style('background-image', 'url("data/formas/forma8.png")');

}