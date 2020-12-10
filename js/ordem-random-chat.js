var listaConversa = $(".chat-random, .chat-random1, .chat-random2");
for(var i = 0; i < listaConversa.length; i++){
    var target = Math.floor(Math.random() * listaConversa.length -1) + 1;
    var target2 = Math.floor(Math.random() * listaConversa.length -1) +1;
    listaConversa.eq(target).before(listaConversa.eq(target2));
}