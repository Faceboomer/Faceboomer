/* creditos: Daniel Shiffman
https://editor.p5js.org/icm/sketches/BkRHbimhm
*/

class Forma {

    constructor(x, y, s) {
        this.dragging = false; // está a ser arrastado?

        // posição
        this.x = x;
        this.y = y;
        // tamanho do sticker
        this.s = s;
        // para arrastar
        this.offsetX = 0;
        this.offsetY = 0;
    }

    // update objeto: posição
    update() {
        // está a ser arrastado?
        if (this.dragging) {
            this.x = mouseX + this.offsetX;
            this.y = mouseY + this.offsetY;
        }
    }

    // update de tamanho / imagem
    updateSize(S, B) {
        this.s = S;
        this.b = B;
    }

    // construir objeto
    show() {
        // caso seja uma das 8 imagens
        if (this.b < 8) {
            imageMode(CENTER);
            image(formasImg[this.b], this.x, this.y, this.s, this.s);
        }
        this.w = this.s;
        this.h = this.s;
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