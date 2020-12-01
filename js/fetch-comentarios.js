
// gerar nr int. aleatório
// créditos: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// objeto JSON que recolhe comentarios de uma Google Sheets
$.getJSON("https://spreadsheets.google.com/feeds/cells/1ouF6eqgwn9ZfvhakdIN8crQfA8uHg3BX4Loxnzqs9oE/1/public/full?alt=json", function (data) {

    // os objetos já com o parse de JSON
    //console.log(data);

    /*     $.each(data.feed.entry, function (key, val) {
            // verificar se apenas a 1a col é que está a ser usada
            console.log('val: ' + val.gs$cell.col);
        }); */ 

    // ir buscar 2 a 7 comentarios aleatórios
    for (i = 0; i < getRandomInt(2, 7); i++) {

        let conteudo = data.feed.entry[getRandomInt(1, data.feed.entry.length)]["content"]["$t"];


        // escrever comentário
        const p = `
        <div class="container">
        <div class="c-wrapper">
        <div class="fotoPerfil">
          <img src="data/posts/icone-perfil${getRandomInt(1, 20)}.jpg" />
        </div>
        <div class="comentario">
          <p>${conteudo}</p>
        </div>
        </div>
        <div class="interação">
          <span>Há ${getRandomInt(2, 24)} dias</span>
          <span class="likes">Gosto</span>
          <span class="comments">Responder...</span>
        </div>
      </div>
    </div>
        `;

        $('#comments-wrapper').append(p);
    }
});