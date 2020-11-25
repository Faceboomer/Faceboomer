let likes = $("#gostos").text();

/* converter string em numero */
let number = parseInt(likes, 10);

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
});