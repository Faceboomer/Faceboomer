let desafio1 = false;

$("#publishDesafio").on("click", function() {

    desafio1 = true;
    estadoDesafio(desafio1)
});


/* guardar estado desafio */
function estadoDesafio(data) {
let desafios = localStorage.getItem("desafio");

// se já tiver objetos guardados na memória,
if (desafios != null) {
  // converte a string JSON em objeto JS
  desafios = JSON.parse(desafios);
} else {
  // se não, posts são uma lista (de posts)
  desafios = [];
}

// adiciona
desafios.push(data);

// converter em "texto", string, JSON
desafios = JSON.stringify(posts);

// guardar na variável do localStorage
localStorage.setItem("desafio", desafios);
}

/* se os dois estiverem verdadeiros */
if (desafio == 2) {


};
