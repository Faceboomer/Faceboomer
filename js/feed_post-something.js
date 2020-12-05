// inicialização
$(function () {
    console.log("post ready");
  });

  $('#publish').click(function() {
    console.log("slay");
  });
    

/* GUARDAR O POST no click*/
// post individual
let post;
//variáveis
let name = "Maria Eugénia Godinho";
let postText = "";
let date = "";

/* função para guardar os elementos quando se faz o clique */
$('#publish').on("click", function () {
    
    // ir buscar o que se escrever na textarea
    postText = $('#type-new-post').val();
    //data atual
    date = new Date().toUTCString();
  
    // construção do objeto em JSON
    post = {
      nome: name,
      data: date,
      texto: postText,
    };

    if (postText) {
      savePost(post);
      writePost(post);
    };

  // apaga o que está escrito
  $("#type-new-post").val('');
});

$(document).ready(function() {

  let antigosPosts = localStorage.getItem('publicacoes');

  if (antigosPosts != null) {
    writePost(antigosPosts);
    console.log("$ -> antigosPosts", antigosPosts)
  };
  
});

/* GUARDAR O POST na Local Storage */
function savePost(data) {
    let posts = localStorage.getItem("publicacoes");
    
    // se já tiver objetos guardados na memória,
    if (posts != null) {
        // converte a string JSON em objeto JS
      posts = JSON.parse(posts);
    } else {
        // se não, posts são uma lista (de posts)
      posts = [];
    }
    
    // adiciona posts novos à LS e devolve nova lista
    posts.push(data);
  
    // converter em "texto", string, JSON
    posts = JSON.stringify(posts);
    
    // guardar na variável do localStorage
    localStorage.setItem("publicacoes", posts);
  }

  /* PARA CONSTRUIR AS PUBLICAÇÕES */
  function writePost(data) {
  let novosPosts = localStorage.getItem("publicacoes");

  // se tiver o objeto na memória
  if (novosPosts != null) {
      // converter para objeto JS
    novosPosts = JSON.parse(novosPosts);

    // por cada novo post,
    novosPosts.forEach(function (post, i) {

        // escrever
        const p = `
        <article id="post-${i}" class="post">
        <div class="post-wrapper">
          <div class="iconePerfil">
            <img src="data/utilizador/foto-de-perfil.jpg" />
          </div>
          <h3 class="nome">${post.nome}</h3>
          <i class="fa fa-ellipsis-h"></i>
          <div class="publicacao-texto">
            <p class="post-texto">
            ${post.texto}
            </p>
          </div>
          <p class="gostos">20</p>
          <button class="gostos-btn"><i class="fa fa-thumbs-up"></i></button>
          <p class="comentarios"><a href="comentarios-random.html">${getRandomInt(1,7)}</a></p>
          <i class="fa fa-comment"></i>
          <i class="fa fa-share-alt"></i>
        </div>
      </article>
        `;
        
        // na div que está acima dos posts já publicados
        // (o post mais recente em cima)
        $("#novos-posts").prepend(p);
    });
  }
}