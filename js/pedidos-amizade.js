// gerar nr int. aleatório
// créditos: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// objeto JSON que recolhe nomes de uma Google Sheets
$.getJSON("https://spreadsheets.google.com/feeds/cells/1uCT90QFFJJD5m-igVamtIAs21wfZnOv6eb3Pwx9juwM/1/public/full?alt=json", function (data) {

let conteudo = data.feed.entry[getRandomInt(1, data.feed.entry.length)]["content"]["$t"];

 // escrever nome do pedido de amizade
 const p = `
 <span class="place-nome">${conteudo}</span>
 `;

 $('.place-nome').append(p);

});

// aparecer com intervalo random

$('.alerta-container').hide();
$('.aceite').hide();

function myFunction(){

    setTimeout( function(){
  
    $('.alerta-container').show();
      myFunction();
  
    }, Math.random() * 60000 + 20000); //intervalo de tempo
  
  } 
  
  myFunction(); // chamar a função

// timer
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
}

function pad(val) {
  var valString = val + "";
    return valString;
}

// fazer aparecer aviso de pedido aceite e desaparecer alerta de pedido da amizade

$('.button-respond, .button-respond1, .alerta-button').on('click', function () {
  $('.aceite').show();
  $('.alerta-container').hide();
});

//fechar alerta de pedido aceite

$('.aceite-button').each( function() {
    $(this).on('click', function(){
   console.log("botao", $(this).parent());
   $(this).parent().remove();
   })
});