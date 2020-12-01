// criar variáveis
var modal = document.getElementById("myModal");

// ir buscar a imagem 
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img-capa");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "data/utilizador/foto-de-perfil.jpg";
}

// ir buscar o span para fechar
var span = document.getElementsByClassName("close")[0];

// fechar quando se clica no botão
span.onclick = function() { 
  modal.style.display = "none";
}