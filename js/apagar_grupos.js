//verificar se JQuery está a funcionar

$(function() {
    console.log ('Jquery funciona');
  });
  
//Apagar grupos
  
$(".itens-grupos").on('click', function(){
  $(this).remove();
});
