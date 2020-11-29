/* verificar se JQuery está a funcionar */

$(function() {
    console.log ('Jquery funciona');
  });

/* Fechar Popup */

$('.popup-button').each( function() {
    $(this).on('click', function(){
   console.log("botao", $(this).parent());
   $(this).parent().remove();
   })
});

/* Popup Grupo Rissois*/

$('#popups1').hide();

$('.grupo-wrapper1').on('click', function(){
$('#popups1').show(); 
});
