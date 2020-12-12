/* desafio publicar imagem */
// se clicar botao enviar
// em grupoRisssois.html
$("#publishDesafio").on("click", function () {

  let desafio1 = true;
  localStorage.setItem("desafio1", desafio1);
});

/* desafio enviar msg */
// se licar em enviar em GaleriadeImagens.html
$("#publishDesafio2").on("click", function () {

  let desafio2 = true;
  localStorage.setItem("desafio2", desafio2);
});


/* verificar o estado dos desafios */
let desafio1 = localStorage.getItem("desafio1");
// tornar string da consoleLog em boolean (true)
desafio1 = JSON.parse(desafio1)

let desafio2 = localStorage.getItem("desafio2");
// tornar string da consoleLog em boolean (true)
desafio2 = JSON.parse(desafio2)

if (desafio1 && desafio2) {
  setInterval(window.location.replace("Final.html"), 3000);
}

