/* creditos: Daniel Shiffman
https://editor.p5js.org/icm/sketches/BkRHbimhm
*/

class BomDia {

    constructor() {

        // tamanho do texto
        this.s = s;

        this.offsetX = 0;
        this.offsetY = 0;
    }



    // construir objeto
    show() {

        var d = new Date();
        var weekday = d.getDay();
        var w = "";

        switch (weekday) {
            case 0:
                w = "Domingo";
                break;
            case 1:
                w = "Segunda-Feira";
                break;
            case 2:
                w = "Terça-Feira";
                break;
            case 3:
                w = "Quarta-Feira";
                break;
            case 4:
                w = "Quinta-Feira";
                break;
            case 5:
                w = "Sexta-Feira";
                break;
            case 6:
                w = "Sábado";
                break;
        }
        
        textSize(22);
        fill(this.c);
        textFont(font6);

        // texto, x, y
        let t = text("Feliz" + weekday[w], this.x, this.y);

        // altura e largura para o click
        this.w = textWidth(t);
        this.h = textAscent();
    }

}