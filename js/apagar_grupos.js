/* verificar se JQuery está a funcionar */

$(function() {
    console.log ('Jquery funciona');
  });
  
/* Apagar grupos */
  
$(".grupo-wrapper").on('click', function(){
  $(this).remove();
});
