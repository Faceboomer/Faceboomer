// INICIALIZAÇÃO

let footer = 35;
let header = 56.8;
let w = window.innerWidth;
let h = window.innerHeight;

/* MENU */
/* inicial */
let button = [];
/* bottom menu */
let bMenu = [];
let buttonCA; let buttonC;


/* FUNDO */
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

function setup() {

  let c = createCanvas(w, w);
  c.position(0, header);

  c.parent('index');

  showFirstMenu();

  createButtons();
}

function draw() {

  background(bg);


  // LAYER 1: FUNDO
  fill(r, g, b, a);
  rect(0, 0, w, w);


}

/* FUNÇÕES MEME */
////* FUNDO */
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

} function moldura() {

} function texto() {

} function stickers() {

} function brilho() {

} function formas() {

}


////////* OPTIONS MENUS */
/* FUNDOS MENU */
function showFundoMenu() {
  fill(255);
  rect(0, w, w, h);

  // CRIAÇÃO DOS BOTOES
  // margem dos botoes para estar centrado
  // (largura - largura de todos os botões) /2
  var margem = (w - (btnPosX * 6 + 20)) / 2;

  // botoes COR DO FUNDO
  for (var i = 0; i < 7; i++) {
    cor[i].show();
    cor[i].removeAttribute('disabled');

    cor[i].position(btnPosX * i + margem, btnPosY);
    cor[i].style('width', '20px');
    cor[i].style('height', '20px');
    cor[i].style('border-radius', '50%');
    cor[i].style('border', 'solid 0.5px #af7dfd');
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
    bgBtn[i].show();
    bgBtn[i].removeAttribute('disabled');

    bgBtn[i].position(btnPosX * i + margem, btnPosY + 30);
    bgBtn[i].style('width', '20px');
    bgBtn[i].style('height', '20px');
    bgBtn[i].style('border-radius', '50%');
    bgBtn[i].style('border', 'solid 0.5px #af7dfd');
    bgBtn[i].style('background-size', 'cover');

    if (i > 6) {
      bgBtn[i].position(btnPosX * i + + margem - (btnPosX * 7), btnPosY + 60);
    }
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
}

function hideFundoMenu() {

  for (var i = 0; i < 7; i++) {
    cor[i].hide();
    cor[i].attribute('disabled', '');
  }

  for (var i = 0; i < 147; i++) {
    bgBtn[i].hide();
    bgBtn[i].attribute('disabled', '');
  }
}



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

    ////////* MELHORAR MARGENS */
    if (i < 3) {
      button[i].position(75 * i + 50, h - 160);
    } else {
      button[i].position(75 * i + 50 - (75 * 3), h - 85);
    }
  }

  button[0].mousePressed(function () {
    showFundoMenu();
    showBottomMenu();
    hideFirstMenu();
    fundo();
  });
  button[1].mousePressed(moldura);
  button[2].mousePressed(texto);
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

function createButtons() {
  for (var i = 0; i < 7; i++) {
    cor[i] = createButton('');
    cor[i].hide();
    cor[i].attribute('disabled', '');
  }
  for (var i = 0; i < 14; i++) {
    bgBtn[i] = createButton('');
    bgBtn[i].hide();
    bgBtn[i].attribute('disabled', '');
  }
}