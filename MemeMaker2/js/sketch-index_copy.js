/* Trabalho realizado por
Catarina Lobão, Giuliana Almasio, Mariana Simões, Marta Sousa
FBAUP 2020/2021*/


/* legenda: "----" é preciso melhorar pequenas coisas
legenda: "!!!" é preciso colocar algo urgente */

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
function preload() { // load lista de imagens
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
    backgrounds.push(loadImage('data/Fundos/' + file));
  }
}

/* DECLARAR TEXTO */
let textoBM; // barra menu
let corBTM;
let tamanhoBTM;
var sliderT; // slider texto
let fontBtn = []; // botoes fonts
let font1, font2, font3, font4, font5;
function preload() {
  font1 = loadFont('data/fonts/Bonbon-Regular.ttf');
  font2 = loadFont('data/fonts/CraftyGirls-Regular.ttf');
  font3 = loadFont('data/fonts/HerrVonMuellerhoff-Regular.ttf');
  font4 = loadFont('data/fonts/Meddon-Regular.ttf');
  font5 = loadFont('data/fonts/OpenSans-Bold.ttf');
}
let fonttt; // font default
let corTexto = []; // botoes cor
let Tc = 'red'; // cor texto !!! mudar para transparente
let Tx = 0; let Ty = -1000; // posição
let tSize = 22; // tamanho texto
let textbox; // onde se escreve
let textos; // objeto texto


//////////////////////////////////
function setup() {

  let c = createCanvas(w, w);
  c.position(0, header);

  c.parent('index');

  createButtons();
  showFirstMenu();

  fonttt = font5;
  textFont(fonttt); // font default
  fill(Tc); // cor default
  textos = new Texto(95, 100, tSize, 'Escreve aqui!');

}



//////////////////////////////////
function draw() {
  /*----- colocar fundos dos menus aqui  */
  //// LAYER 1: FUNDO
  background(bg);
  //// LAYER 2: MOLDURAS

  //// LAYER 3: TEXTO !!!
  noStroke();
  // MUDAR TAMANHO
  tSize = sliderT.value(); // val alterado no slider
  // MUDAR COR
  fill(Tc);
  // MUDAR FONT
  textFont(fonttt);
  // MUDAR O QUE ESTÁ ESCRITO
  textbox.input(function () {
    let escrito = textbox.value();
    textos.updateText(escrito);
  })
  // TEXTO !!! colocar mais um
  textos.update(); // update drag
  textos.show(tSize); // display + aplicar tamanho


  ////* BARRA MENU */
  // está em draw para ser redesenhado por cima dos objetos do canvas
  rect(0, w + 35, w, h);
  fill(255, aBM);
  stroke(175, 125, 253, aBM);
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

} function moldura() { }

////////* ACTIONS TEXTO */
function texto() {
  Tx = 95;
  Ty = 100;

  // MUDAR FONT
  fontBtn[0].mousePressed(function () {
    fonttt = font1;
  });
  fontBtn[1].mousePressed(function () {
    fonttt = font2;
  });
  fontBtn[2].mousePressed(function () {
    fonttt = font3;
  });
  fontBtn[3].mousePressed(function () {
    fonttt = font4;
  });
  fontBtn[4].mousePressed(function () {
    fonttt = font5;
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

} function stickers() {

} function brilho() {

} function formas() {

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
  corTBM.hide();
  tamanhoTBM.hide();
  textbox.hide();
  for (var i = 0; i < 5; i++) {
    fontBtn[i].hide();
    fontBtn[i].attribute('disabled', '');
  }
  textoBM.attribute('disabled', '');
  corTBM.attribute('disabled', '');
  tamanhoTBM.attribute('disabled', '');
  textbox.attribute('disabled', '');
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
  });
  button[1].mousePressed(function () { // molduras

  });
  button[2].mousePressed(function () { // texto
    showTextoMenu();
    showBottomMenu();
    hideFirstMenu();
    texto();
  });
  button[3].mousePressed(stickers);
  button[4].mousePressed(brilho);
  button[5].mousePressed(formas);
}

function hideFirstMenu() {
  for (var i = 0; i < 6; i++) {
    button[i].hide();
    button[i].attribute('disabled', '');
  }
}


// FUNÇÕES ARRASTAR O TEXTO
function mousePressed() {
  textos.pressed();
}

function mouseReleased() {
  textos.released();
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
  bgBtn[12].style('background-image', 'url("data/Fundos/flor2.jpg")');
  bgBtn[13].style('background-image', 'url("data/Fundos/flor1.jpg")');

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
  var margem = (w - (btnPosX * 5)) / 2;
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
  var margem = (windowWidth - (btnPosX * 6 + 20)) / 2;
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
}