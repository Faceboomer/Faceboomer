/* help: https://www.freecodecamp.org/news/cjn-google-sheets-as-json-endpoint/ */



(function () {

    // ir buscar os comentarios da Google Sheets
    var listaComentarios = "https://spreadsheets.google.com/feeds/cells/1ouF6eqgwn9ZfvhakdIN8crQfA8uHg3BX4Loxnzqs9oE/1/public/full?alt=json";
    console.log("listaComentarios", listaComentarios)

    // converter para objeto JSON
    $.getJSON(listaComentarios, {
        /* tags: "mount rainier",
        tagmode: "any",
        format: "json" */

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



/* jQuery.getJSON("https://spreadsheets.google.com/feeds/cells/0AvqEhTnjx7TSdGJocUNFS0F0d0xtcDhubVE5aXZvVXc/od6/public/basic?alt=json-in-script&callback=listEntries", function listEntries(json) {
    var content = document.createTextNode(json.feed.entry[2].title.$t);
    jQuery("p.inhalt").append(content);
}); */