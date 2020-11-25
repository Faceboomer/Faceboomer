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



/*
let likes = $(".gostos").text();

//converter string em numero
let number = parseInt(likes, 10);
console.log("number", number);

(function () {
    var count = 0;

    $('.like-btn').click(function () {
      count += 1;

      if (count == 2) {
        number =+ 1;
      }
      if (count > 2) {
          count = 0;
          number =- 1;
      }
    });
  })();

$(".like-btn").on("click", function() {
    var count = 0;

    number =+ 1;
}); */