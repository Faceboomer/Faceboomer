/* creditos: Daniel Shiffman
https://editor.p5js.org/icm/sketches/BkRHbimhm
*/

class Texto {

    constructor(x, y, s, pp) {
        this.dragging = false; // está a ser arrastado?

        // posição
        this.x = x;
        this.y = y;
        // tamanho do texto
        this.s = s;
        // texto
        this.p = pp;

        this.offsetX = 0;
        this.offsetY = 0;
    }

    // update objeto: posição, cor e font
    update() {

        // está a ser arrastado?
        if (this.dragging) {
            this.x = mouseX + this.offsetX;
            this.y = mouseY + this.offsetY;
        }
    }

    // update de texto, font, tamanho e cor
    updateText(T, S, C, F) {
        this.p = T;
        this.s = S;
        this.c = C;
        this.f = F;
    }

    // construir objeto
    show() {
        textSize(this.s);
        fill(this.c);
        textFont(this.f);
        // texto, x, y
        let t = text(this.p, this.x, this.y);

        // altura e largura para o click
        this.w = textWidth(t);
        this.h = textAscent();
    }

    // objeto com rato pressionado em cima
    pressed() {
        // cliquei no objeto?
        if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
            this.dragging = true;
            // If so, keep track of relative location of click to corner of rectangle
            this.offsetX = this.x - mouseX;
            this.offsetY = this.y - mouseY;
        }
    }


    released() {
        // Quit dragging
        this.dragging = false;
    }

}