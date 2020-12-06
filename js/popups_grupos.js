//verificar se JQuery está a funcionar

$(function() {
    console.log ('Jquery funciona');
  });

//fechar Popups

$('.popup-button').each( function() {
    $(this).on('click', function(){
   console.log("botao", $(this).parent());
   $(this).parent().remove();
   })
});

//popup grupo rissois - mostrar com clique

$('#popups1').hide();

$('.itens-grupos1').on('click', function(){
$('#popups1').show(); 
});
