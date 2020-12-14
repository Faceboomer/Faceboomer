// inicialização
$(function () {
    console.log("comment ready");
});


/* GUARDAR O COMENTÁRIO no click*/
// comentário individual
let comment;
//variáveis
let conteudo = "";

/* função para escrever e publicar */
$('#enviar').on("click", function () {

    // ir buscar o que se escrever na textarea
    conteudo = $('#type-here').val();


    if (conteudo) {
        publicar(conteudo);
    };

    // apaga o que está escrito
    $("#type-here").val('');
});

/* PARA CONSTRUIR AS PUBLICAÇÕES */
function publicar(data) {

    const c = `
    <div class="container">
    <div class="c-wrapper">
    <div class="fotoPerfil">
      <img src="data/utilizador/foto-de-perfil.jpg" />
    </div>
    <div class="comentario">
      <p>${data}</p>
    </div>
    </div>
    <div class="interacao">
      <span>Há ${getRandomInt(2, 24)} segundos</span>
      <span class="likes">Gosto</span>
      <span class="comments">Responder...</span>
    </div>
  </div>
</div>
          `;

    // na div que está acima dos posts já publicados
    // (o post mais recente em cima)
    $('#comments-wrapper').append(c);
}
