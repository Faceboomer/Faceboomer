// gerar nr int. aleatório
// créditos: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// gerar três nr aleatórios
var i = getRandomInt(0, 1);
var ii = getRandomInt(0, 1);
var iii = getRandomInt(0, 1);

// mostrar ou não aleatóriamente os alertas
switch(i) {
  case 1:
    document.getElementById('aparecer').remove();
    console.log("i");
    break;
}

switch(ii) {
  case 1:
    document.getElementById('aparecer1').remove();
    console.log("ii");
    break;
}

switch(iii) {
  case 1:
    document.getElementById('aparecer2').remove();
    console.log("iii");
    break;
}



// NÃO FUNCIONA PQ A FORMA COMO CHEGAMOS AO FEED É SEMPRE POR TYPE_NAVIGATE
// QUE É SEMPRE QUE SE CHEGA À PáG ATRAVÉS DE UM LINK
/*
if (performance.navigation.type == performance.navigation.TYPE_NAVIGATE) {
  document.getElementById('aparecer').remove();
};

if (performance.navigation.type == performance.navigation.TYPE_NAVIGATE) {
  document.getElementById('aparecer1').remove();
};

if (performance.navigation.type == performance.navigation.TYPE_NAVIGATE) {
  document.getElementById('aparecer2').remove();
};
*/