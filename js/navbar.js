// gerar nr int. aleatório
// créditos: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// verificar desafios para redirecionar para as páginas certas
let desafio1 = localStorage.getItem("desafio1");
// tornar string da consoleLog em boolean (true)
desafio1 = JSON.parse(desafio1);

let desafio2 = localStorage.getItem("desafio2");
// tornar string da consoleLog em boolean (true)
desafio2 = JSON.parse(desafio2);

$(".randomLoc").on("click", function () {
    switch (getRandomInt(0, 7)) {
        case 0:
            window.location.href = 'conversaMadalena.html';
            break;
        case 1:
            if (desafio2) {
                window.location.href = 'conversaNunoGaspar.html'
            } else { window.location.href = 'conversaNuno.html'; }
            break;
        case 2:
            window.location.href = 'feed.html';
            break;
        case 3:
            if (desafio2) {
                window.location.href = 'lista--chat.html'
            } else { window.location.href = 'lista-chat.html'; }
            break;
        case 4:
            window.location.href = 'perfil.html';
            break;
        case 5:
            window.location.href = 'lista-grupos.html';
            break;
        case 6:
            window.location.href = 'GaleriadeImagens-MadalenaGaspar.html';
            break;
        case 7:
            if (desafio1) {
                window.location.href = 'gruporRissois.html'
            } else { window.location.href = 'GrupoRissois.html'; }
            break;

    }
});


// SE ESTIVER CUMPRIDO O DESAFIO DAS MENSAGENS
// lista de chat não tem alerta
let linkChat = $('#messages').parent();

if (desafio2) {
    // alterar o atributo
    linkChat.attr("href", "lista--chat.html")
    console.log("desafio das mensagens completo", linkChat)
}


// nas publicaçoes, os posts que têm href="GrupoRissois.html"
// muda para o grupo final com o desafio cumprido
let linkGrupo = $('.linkGrupo');

if (desafio2) {
    // alterar o atributo
    linkGrupo.attr("href", "gruporRissois.html")
    console.log("desafio do rissol completo", linkGrupo)
}