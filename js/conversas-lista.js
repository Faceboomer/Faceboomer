//Apagar grupos
  
$(".chat-random2").on('click', function(){
  $(this).remove();
});

// alerta mensagem enviada

$('#alerta-msg').hide();

$('.chat-random1').on('click', function(){
$('#alerta-msg').show(); 
});

//fechar alerta

$('.alerta-button').each( function() {
    $(this).on('click', function(){
   console.log("botao", $(this).parent());
   $(this).parent().remove();
   })
});

$('.desafios-button').each( function() {
  $(this).on('click', function(){
 console.log("botao", $(this).parent());
 $(this).parent().remove();
 })
});

