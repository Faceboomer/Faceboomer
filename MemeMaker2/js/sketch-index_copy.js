/* Trabalho realizado por
Catarina Lobão, Giuliana Almasio, Mariana Simões, Marta Sousa
FBAUP 2020/2021*/

/* legenda: "----" é preciso melhorar pequenas coisas
legenda: "!!!" é preciso colocar algo urgente */

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

// PARA ADICIONAR NOVOS LAYERS, PASSAR PELOS SEGUINTES PASSOS:
// 1. DECLARAR VARIÁVEIS (no início)
// 2. LOAD DE ASSETS (em "preload()" )

// 3. CRIAR OS BOTÕES DO LAYER RESPETIVO (em "CreateButtons" )
// 3.1 depois de verificar a posição dos botões, ESCONDER BOTÕES (em "CreateButtons" )

// 4. FAZER FUNÇÃO "show[Layer]Menu"
// 4.1 .show() os botoes (em "show[Layer]Menu" )
// 4.2 FAZER FUNÇÃO "hide[Layer]Menu"
// 4.2 .hide() os botoes (em "hide[Layer]Menu" )

// 5. descomentar "hide[Layer]Menu()" (em "showBottomMenu
// 6. COLOCAR FUNÇÕES NO BOTÃO INICIAL (em "showFirstMenu" )
// show[botao]Menu(); showBottomMenu(); [layer]();

// 7. FAZER A FUNÇÃO LAYER + a classe (outro ficheiro) se necessário


//////////////////////////////////
let footer = 35;
let header = 56.8;
let w = window.innerWidth;
let h = window.innerHeight;

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

/* DECLARAR STICKERS */
// posição dos botoes
btnPosYS = 420;
btnPosXS = 45;
let tamanhoBtnS; // barra menu
let stickerBtnS;
var sizeSliderS;
let sSize; // variavel tamanho
let stickersBtn = []; // lista botoes
let stickersImg = []; // lista de imagens
let qualSticker = 8;
let stickers = [] // lista de objetos sticker

/* DECLARAR BRILHOS */
let brilhoBtnB; // menu barra
let tamanhoBtnB;
var sizeSliderB;
let bSize; // variavel tamanho brilho
brilhosBtn = []; // lista botoes
let brilhosImg = []; // lista de imagens
let qualBrilho = 8;
let brilhos = []; // lista de objetos brilho

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
    backgrounds.push(loadImage('data/fundos/' + file));
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

  let c = createCanvas(w, w);
  c.position(0, header);

  c.parent('index');

  createButtons();
  showFirstMenu();

  fonttt = font5;
  textFont(fonttt);
  textos.push(new Texto(-100, -1000, tSize, 'Escreve aqui!'));

  let icon = createElement('i');
  icon.addClass('fa fa-address-book');
  icon.position(100, 100);
}

//////////////////////////////////
function draw() {
  /*----- colocar fundos dos menus aqui  */
  //// LAYER 1: FUNDO
  imageMode(CENTER);
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
  textos[textos.length - 1].updateText(escrito, tSize, Tc, fonttt);
  // update posição
  textos[textos.length - 1].update(); // update drag
  // mostrar todos
  for (let t of textos) {
    t.show(); // display + aplicar tamanho
  }

  //// LAYER 4: STICKERS
  sSize = sizeSliderS.value();
  if (stickers.length > 0) {
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

  if (brilhos.length > 0) {
    // update posição do último
    brilhos[brilhos.length - 1].update();
    // update tamanho / escolha do último
    brilhos[brilhos.length - 1].updateSize(bSize, qualBrilho);
  }
  // mostrar todos
  for (let b of brilhos) {
    b.show();
  }

  //// LAYER 6: FORMAS
  fSize = sizeSliderF.value();

  if (formas.length > 0) {
    // update posição do último
    formas[formas.length - 1].update();
    // update tamanho / escolha do último
    formas[formas.length - 1].updateSize(fSize, qualForma);
  }
  // mostrar todos
  for (let f of formas) {
    f.show();
  }

  ////* BARRA MENU */
  // está em draw para ser redesenhado por cima dos objetos do canvas
  fill(255);
  rect(0, w + 35, w, h);
  stroke(175, 125, 253);
  strokeWeight(0.7);
  rect(0, w, w, 35);
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
  textbox.value('Escreve aqui!');
  sliderT.value(22);
  fonttt = font5;

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
  qualSticker = 0;

  stickersBtn[0].mousePressed(function () {
    qualBrilho = 0;
  });
  stickersBtn[1].mousePressed(function () {
    qualBrilho = 1;
  });
  stickersBtn[2].mousePressed(function () {
    qualBrilho = 2;
  });
  stickersBtn[3].mousePressed(function () {
    qualBrilho = 3;
  });
  stickersBtn[4].mousePressed(function () {
    qualBrilho = 4;
  });
  stickersBtn[5].mousePressed(function () {
    qualBrilho = 5;
  });
  stickersBtn[6].mousePressed(function () {
    qualBrilho = 6;
  });
  stickersBtn[7].mousePressed(function () {
    qualBrilho = 7;
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

  brilhos.push(new Forma(w / 2, w / 2, fSize));

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
  /* mostrar SETA */

  button[0] = createButton('Fundo');
  button[1] = createButton('Moldura');
  button[2] = createButton('Texto');
  button[3] = createButton('Stickers');
  button[4] = createButton('Brilho');
  button[5] = createButton('Formas');

  for (var i = 0; i < 6; i++) {
    button[i].size(60, 60);
    button[i].style('font-family', 'Open Sans');
    button[i].style('font-size', '12px');
    button[i].style('border-radius', '15px');
    button[i].style('box-shadow', '1px 1px 10px #d8b7ff');
    button[i].style('color', '#af7dfd');
    button[i].style('background-color', 'rgba(255, 255, 255, 0.8)');
    button[i].style('border', 'none');

    ////////* ------ MELHORAR MARGENS */
    if (i < 3) {
      button[i].position(75 * i + 50, h - 160);
    } else {
      button[i].position(75 * i + 50 - (75 * 3), h - 85);
    }
  }

  button[0].mousePressed(function () { // fundo
    showFundoMenu();
    showBottomMenu();
    hideFirstMenu();
    fundo();
    /* esconder SETA */
  });
  button[1].mousePressed(function () { // molduras
    showMolduraMenu();
    showBottomMenu();
    hideFirstMenu();
    moldura();
  });
  button[2].mousePressed(function () { // texto
    showTextoMenu();
    showBottomMenu();
    hideFirstMenu();
    texto();
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
  });
  button[5].mousePressed(function () {
    showFormaMenu();
    showBottomMenu();
    hideFirstMenu();
    forma();
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
    cor[i].position(btnPosX * i + margem, btnPosY);
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
    bgBtn[i].position(btnPosX * i + margem, btnPosY + 30);
    bgBtn[i].style('width', '20px');
    bgBtn[i].style('height', '20px');
    bgBtn[i].style('border-radius', '50%');
    bgBtn[i].style('border', 'solid 0.5px #af7dfd');
    bgBtn[i].style('background-size', 'cover');
    if (i > 6) {
      bgBtn[i].position(btnPosX * i + + margem - (btnPosX * 7), btnPosY + 60);
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
  textoBM.position(0, w + 57, 'fixed');
  textoBM.size(w / 3, 35);
  textoBM.style("font-family", "Open Sans");
  textoBM.style("font-size", "12px");
  textoBM.style("color", "#af7dfd");
  textoBM.style('background-color', 'transparent');
  textoBM.style('border', 'none');
  textoBM.style('border-right', 'solid 1px #d8b7ff');
  textoBM.hide();
  textoBM.attribute('disabled', '');
  corTBM = createButton("Cor");
  corTBM.position(w / 3, w + 57, 'fixed');
  corTBM.size(w / 3, 35);
  corTBM.style("font-family", "Open Sans");
  corTBM.style("font-size", "12px");
  corTBM.style("color", "#af7dfd");
  corTBM.style('background-color', 'transparent');
  corTBM.style('border', 'none');
  corTBM.style('border-right', 'solid 1px #d8b7ff');
  corTBM.hide();
  corTBM.attribute('disabled', '');
  tamanhoTBM = createButton("Tamanho");
  tamanhoTBM.position((w / 3) * 2, w + 57, 'fixed');
  tamanhoTBM.size(w / 3, 35);
  tamanhoTBM.style("font-family", "Open Sans");
  tamanhoTBM.style("font-size", "12px");
  tamanhoTBM.style("color", "#af7dfd");
  tamanhoTBM.style('background-color', 'transparent');
  tamanhoTBM.style('border', 'none');
  tamanhoTBM.hide();
  tamanhoTBM.attribute('disabled', '');
  textbox = createElement('textarea', 'Escreve aqui!');
  textbox.position((w - 200) / 2, w + 130);
  textbox.size(200, 50);
  textbox.style('border', 'solid 1px #d8b7ff');
  textbox.style("font-family", "Open Sans");
  textbox.style('color', '#af7dfd');
  textbox.hide();
  textbox.attribute('disabled', '');
  // BOTOES ESCOLHER FONT
  margem = (w - (btnPosX * 5)) / 2;
  for (var i = 0; i < 5; i++) {
    fontBtn[i] = createButton('Aa');
    fontBtn[i].position(btnPosX * i + margem, btnPosY);
    fontBtn[i].style('width', '20px');
    fontBtn[i].style('height', '20px');
    fontBtn[i].style('border', 'none');
    fontBtn[i].style('background-color', 'transparent');
    fontBtn[i].style('color', '#9b2fff');
    fontBtn[i].hide();
    fontBtn[i].attribute('disabled', '');
  }
  fontBtn[0].style('font-family', 'myBonbon');
  fontBtn[1].style('font-family', 'myCrafty');
  fontBtn[2].style('font-family', 'myHerr');
  fontBtn[2].style('font-size', '15px');
  fontBtn[2].position(btnPosX * 2 + margem, btnPosY - 1);
  fontBtn[3].style('font-family', 'myMeddon');
  fontBtn[3].style('font-size', '10px');
  fontBtn[3].position(btnPosX * 3 + margem - 3, btnPosY - 1);
  fontBtn[4].style('font-family', 'myOpenSans');
  fontBtn[4].style('font-weight', 'bold');
  // SLIDER TAMANHO
  sliderT = createSlider(10, 100, 22);
  sliderT.size(200, 20);
  sliderT.position((windowWidth - 200) / 2, windowWidth + 130);
  sliderT.hide();
  // OPÇÕES CORES DE TEXTO
  margem = (windowWidth - (btnPosX * 6 + 20)) / 2;
  for (var i = 0; i < 7; i++) {
    corTexto[i] = createButton('');
    corTexto[i].position(btnPosX * i + margem, btnPosY + 45);
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
  margem = (windowWidth - (btnPosXS * 4 + 8)) / 2;
  // BOTOES slider stickers
  stickerBtnS = createButton("Stickers");
  stickerBtnS.position(0, w + 57, 'fixed');
  stickerBtnS.size(windowWidth / 3, 35);
  stickerBtnS.style("font-family", "Open Sans");
  stickerBtnS.style("font-size", "12px");
  stickerBtnS.style("color", "#af7dfd");
  stickerBtnS.style('background-color', 'transparent');
  stickerBtnS.style('border', 'solid 0.5px #af7dfd');
  stickerBtnS.hide();
  stickerBtnS.attribute('disable', '');

  // BOTOES slider tamanho
  tamanhoBtnS = createButton("Tamanho");
  tamanhoBtnS.position(w / 3, w + 57, 'fixed');
  tamanhoBtnS.size(windowWidth / 3, 35);
  tamanhoBtnS.style("font-family", "Open Sans");
  tamanhoBtnS.style("font-size", "12px");
  tamanhoBtnS.style("color", "#af7dfd");
  tamanhoBtnS.style('background-color', 'transparent');
  tamanhoBtnS.style('border', 'solid 0.5px #af7dfd');
  tamanhoBtnS.hide();
  tamanhoBtnS.attribute('disable', '');

  sizeSliderS = createSlider(60, 200, 60);
  sizeSliderS.size(200, 20);
  sizeSliderS.position((windowWidth - 200) / 2, windowWidth + 130);

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
  margem = (windowWidth - (btnPosX * 4 + 8)) / 2;

  // BOTOES slider stickers
  brilhoBtnB = createButton("Brilhos");
  brilhoBtnB.position(0, w + 57, 'fixed');
  brilhoBtnB.size(windowWidth / 3, 35);
  brilhoBtnB.style("font-family", "Open Sans");
  brilhoBtnB.style("font-size", "12px");
  brilhoBtnB.style("color", "#af7dfd");
  brilhoBtnB.style('background-color', 'transparent');
  brilhoBtnB.style('border', 'solid 0.5px #af7dfd');
  brilhoBtnB.hide();
  brilhoBtnB.attribute('disable', '');

  tamanhoBtnB = createButton("Tamanho");
  tamanhoBtnB.position(w / 3, windowWidth + 57, 'fixed');
  tamanhoBtnB.size(windowWidth / 3, 35);
  tamanhoBtnB.style("font-family", "Open Sans");
  tamanhoBtnB.style("font-size", "12px");
  tamanhoBtnB.style("color", "#af7dfd");
  tamanhoBtnB.style('background-color', 'transparent');
  tamanhoBtnB.style('border', 'solid 0.5px #af7dfd');
  tamanhoBtnB.hide();
  tamanhoBtnB.attribute('disable', '');

  sizeSliderB = createSlider(100, 1000, 200);
  sizeSliderB.size(200, 20);
  sizeSliderB.position((windowWidth - 200) / 2, windowWidth + 130);
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
  margem = (windowWidth - (btnPosX * 4 + 8)) / 2;
  // BOTOES slider stickers
  formaBtnF = createButton("Formas");
  formaBtnF.position(0, w + 57, 'fixed');
  formaBtnF.size(windowWidth / 3, 35);
  formaBtnF.style("font-family", "Open Sans");
  formaBtnF.style("font-size", "12px");
  formaBtnF.style("color", "#af7dfd");
  formaBtnF.style('background-color', 'transparent');
  formaBtnF.style('border', 'solid 0.5px #af7dfd');
  formaBtnF.hide();
  formaBtnF.attribute('disable', '');

  tamanhoBtnF = createButton("Tamanho");
  tamanhoBtnF.position(w / 3, windowWidth + 57, 'fixed');
  tamanhoBtnF.size(windowWidth / 3, 35);
  tamanhoBtnF.style("font-family", "Open Sans");
  tamanhoBtnF.style("font-size", "12px");
  tamanhoBtnF.style("color", "#af7dfd");
  tamanhoBtnF.style('background-color', 'transparent');
  tamanhoBtnF.style('border', 'solid 0.5px #af7dfd');
  tamanhoBtnF.hide();
  tamanhoBtnF.attribute('disable', '');

  sizeSliderF = createSlider(70, 300, 22);
  sizeSliderF.size(200, 20);
  sizeSliderF.position((windowWidth - 200) / 2, windowWidth + 130);
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