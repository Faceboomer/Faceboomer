/* desafio publicar imagem */
// se clicar botao enviar
// em grupoRisssois.html
$("#publishDesafio").on("click", function () {

  let desafio1 = true;
  localStorage.setItem("desafio1", desafio1);
});

/* desafio enviar msg */
// se clicar em enviar em GaleriadeImagens.html
$("#publishDesafio2").on("click", function () {
  let desafio2 = true;
  localStorage.setItem("desafio2", desafio2);
});
