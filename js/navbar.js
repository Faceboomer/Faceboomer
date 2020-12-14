// gerar nr int. aleatório
// créditos: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(".randomLoc").on("click", function () {
    switch (getRandomInt(0, 7)) {
        case 0:
            window.location.href = 'conversaMadalena.html';
            break;
        case 1:
            window.location.href = 'conversaNuno.html';
            break;
        case 2:
            window.location.href = 'feed.html';
            break;
        case 3:
            window.location.href = 'lista-chat.html';
            break;
        case 4:
            window.location.href = 'perfil.html';
            break;
        case 5:
            window.location.href = 'lista-grupos.html';
            break;
        case 6:
            window.location.href = 'GaleriadeImagens.html';
            break;
        case 7:
            window.location.href = 'GrupoRissois.html';
            break;

    }
});

let linkChat = $('#messages').parent();
linkChat = linkChat.attr("href");


// verificar desafio da mensagem
// para redirecionar para a lista de chat certa

let desafio2 = localStorage.getItem("desafio2");
// tornar string da consoleLog em boolean (true)
desafio2 = JSON.parse(desafio2);

// SE ESTIVER CUMPRIDO
if (desafio2) {

    linkChat = "lista-chat-vichy.html";
    console.log("🚀 ~ file: navbar.js ~ line 55 ~ desafio ~ linkChat", linkChat)
}
