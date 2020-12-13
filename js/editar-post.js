/* ao tocar no ícone das 3 bolinhas */
$('.edit').on('click', function() {
console.log("clicked to edit")
    
    // se o post tiver uma imagem,
    if($(this).next().hasClass("publicacao")) {
        
        console.log("this has an image");

        // troca o html para ir buscar uma img aleatoria ao nosso banco
        $(this).next().html("");
        $(this).next().html('<img src="data/posts/post'+getRandomInt(1,77)+'.jpg" />');
    } 

    // se nao,
    else {
    // remove essa publicação
    $(this).parent().parent().remove();
    }

});

$('.apagar').on('click', function() {
    console.log("oops!")

        // remove essa img
        $(this).remove();
        
    
    });