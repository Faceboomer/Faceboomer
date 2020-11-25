$(function () {
    console.log("popups ready");
});



/* METEROLOGIA */
fetch('https://ipapi.co/json/')
    .then(function (response) {
        response.json().then(jsonData => {

            $("#city").text(jsonData.city);
            /* console.log(".then -> jsonData.city", jsonData.city) */

        });
    })
    .catch(function (error) {
        console.log(error)
    });

$('.popup-button').each( function(index) {
    $(this).on('click', function(){
        console.log("botao", $(this).parent());
        $(this).parent().remove();
    })
  });
