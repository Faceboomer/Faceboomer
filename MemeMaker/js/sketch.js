
// necessario para colocar sketch na div
let sketch = function (p) {

  // em vez de "function setup" -> p.setup
  p.setup = function () {
    p.createCanvas(360, 360);
    p.background('red');
  }
}
// necessario para colocar este p5 na div placeImg
new p5(sketch, 'placeImg');