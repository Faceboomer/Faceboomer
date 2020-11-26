/* help: https://www.freecodecamp.org/news/cjn-google-sheets-as-json-endpoint/ */

var items = [];

$.getJSON("https://spreadsheets.google.com/feeds/cells/1ouF6eqgwn9ZfvhakdIN8crQfA8uHg3BX4Loxnzqs9oE/1/public/full?alt=json", function (data) {

    // os objetos já com o parse de JSON
    console.log(data);


    // for
    $.each(data.feed.entry, function (key, val) {
        //items.push( "<li id='" + key + "'>" + val + "</li>" );
        //let txt = val.content.gs$cell.inputValue;

        //console.log('id:' + key);
        console.log('val: ' + val.content.$t);
    });

});


/* (function () {

    // ir buscar os comentarios da Google Sheets
    var listaComentarios = "https://spreadsheets.google.com/feeds/cells/1ouF6eqgwn9ZfvhakdIN8crQfA8uHg3BX4Loxnzqs9oE/1/public/full?alt=json";
    console.log("listaComentarios", listaComentarios)

    // converter para objeto JSON
    $.getJSON(listaComentarios, {
        tags: "mount rainier",
        tagmode: "any",
        format: "json"
    })
        // recebe os comentarios em "data"
        .done(function (data) {

            // for loop para um nr especifico de comentarios
            $.each(data.items, function (i, item) {
                console.log("items", items)
                console.log("data", data)

                // escrever
                const p = `
        <div class="foto">

            </div>
            <div class="comentario">
                <p class="comment">${item.inputValue}</p>
                </div>
            </div>
        </div>
        `;

                $(".container").append(p);

            });
        });
})();

 */