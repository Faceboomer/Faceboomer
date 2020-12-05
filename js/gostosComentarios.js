// PODEMOS USAR ESTA FUNÇÃO NOUTROS JS FILES
// gerar nr int. aleatório
// créditos: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


/* conta o nr de gostos */
var count = 0;

$('.gostos-btn').each(function (index) {
  $(this).on('click', function () {
    console.log("numero de likes", $(this).prev().text());

    // obter texto do <p> que vem antes do botao
    let likes = $(this).prev().text();
    // transformar esse texto num número
    let number = parseInt(likes, 10);

    // contar nr de clicks
    // e aumentar number de likes
    count += 1;
    if (count == 1) {
      number++;
    }
    if (count == 2) {
      count = 0;
      number = number - 1;
    }
    console.log("number", number);

    $(this).prev().text(number);
  })
});

// nr aleatorio de comentarios
$(".comentarios").each(function () {
    // escrever comentário
    const a = `
    <a href="comentarios-random.html">${getRandomInt(1,7)}</a>
    `;

$(this).append(a);

})