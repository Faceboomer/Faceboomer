// inicialização
$(function () {
    console.log("msg ready");
  });


/* GUARDAR O POST no click*/
// post individual
let msg;
//variáveis
let postText = "";
let date = "";

/* função para guardar os elementos quando se faz o clique */
$('#enviar').on("click", function () {
    
    // ir buscar o que se escrever na textarea
    postText = $('#type-here').val();
    //data atual
    date = new Date().toUTCString();
  
    // construção do objeto em JSON
    msg = { 
      data: date,
      texto: postText,
    };

  savePost(msg);
  writePost(msg);
  // apaga o que está escrito
  $("#type-here").val('');
});

/* GUARDAR O POST na Local Storage */
function savePost(data) {
    let msgs = localStorage.getItem("msgsNuno");
    
    // se já tiver objetos guardados na memória,
    if (msgs != null) {
        // converte a string JSON em objeto JS
      msgs = JSON.parse(msgs);
    } else {
        // se não, posts são uma lista (de posts)
      msgs = [];
    }
    
    // adiciona posts novos à LS e devolve nova lista
    msgs.push(data);
  
    // converter em "texto", string, JSON
    msgs = JSON.stringify(msgs);
    
    // guardar na variável do localStorage
    localStorage.setItem("msgsNuno", msgs);
  }

  /* PARA CONSTRUIR AS PUBLICAÇÕES */
  function writePost(data) {
  let novasMsgs = localStorage.getItem("msgsNuno");

  // se tiver o objeto na memória
  if (novasMsgs != null) {
      // converter para objeto JS
      novasMsgs = JSON.parse(novasMsgs);

    // por cada novo post,
    novasMsgs.forEach(function (msg, i) {

        // escrever
        const p = `
        <div class="enviada">
        <div class="c-wrapper">
          <div class="msg-enviada">
            <p>${msg.texto}</p>
          </div>
        </div>
      </div>
        `;
        
        // na div que está acima dos posts já publicados
        // (o post mais recente em cima)
        $("#mensagens").append(p);
    });
  }
}