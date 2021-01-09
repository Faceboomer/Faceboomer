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

    // update objeto sendo arrastado
    update() {
        if (this.dragging) {
            this.x = mouseX + this.offsetX;
            this.y = mouseY + this.offsetY;
        }
    }

    updateText(T) {
        this.p = T;
    }

    // construir objeto
    show(sT) {
        this.s = sT;
        textSize(this.s);
        let t = text(this.p, this.x, this.y);

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
            print(this.w);
        }
    }


    released() {
        // Quit dragging
        this.dragging = false;
    }

}