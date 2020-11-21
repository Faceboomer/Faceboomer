$(document).ready(function(){
    $()
});

$(function () {
    console.log("post ready");
  });

var d = document;

/* GUARDAR O POST */
let post;

/* nome é o da maria eugénia, sempre.
vale a pena colocar num script geral quando criarmos o login */
let name = "Maria Eugénia Godinho";
let postText = "";
let date = "";
const like = 0;

/* função para guardar os elementos quando se faz o clique */
$("#publish").on("click", function () {
  
    postText = $("#type-new-post").val();
    console.log("postText", postText)

    date = new Date().toDateString();
    console.log("date", date)
  
    post = {
      nome: name,
      data: date,
      texto: postText,
      gosto: like,
    };

      console.log("post", post);

  savePost(post);
});




/* para fazer resize da textarea */
/* credits: https://stackoverflow.com/questions/454202/creating-a-textarea-with-auto-resize */
$('textarea').each(function () {
    this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
  }).on('input', function () {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
  });
