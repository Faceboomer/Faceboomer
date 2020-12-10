var modal = document.getElementById("conteudo-vichy");

// Ir buscar a imagem e usá-la
var img = document.getElementById("imagem-vichy");
var modalImg = document.getElementById("imgVichy");
var legendaText = document.getElementById("legenda");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "data/GaleriaDesafio/Imagens-galeria (1).jpg";
}

// Ir buscar a span com o botão para fechar
var span = document.getElementsByClassName("fechar")[0];

// Fechar
span.onclick = function() { 
  modal.style.display = "none";
}