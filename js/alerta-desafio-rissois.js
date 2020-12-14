$('.desafios-button').each( function() {
    $(this).on('click', function(){
   console.log("botao", $(this).parent());
   $(this).parent().remove();
   })
  });