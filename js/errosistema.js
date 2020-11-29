/* Popup Grupo Rissois*/

$('#popups').hide();

$('.fa-search').on('click', function(){
$('#popups').show(); 
});


$('.popup-button').each( function() {
  $(this).on('click', function(){
 console.log("botao", $(this).parent());
 $(this).parent().remove();
 })
});