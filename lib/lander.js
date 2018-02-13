class Lander {
  constructor() {

  }

  move() {
    let dx = 0;
    let dy = -1;
  }

  render(ctx) {
    ctx.fillStyle = "green";
    ctx.beginPath();

    ctx.arc(50, 50, 10, 0, 2 * Math.PI,false);
    ctx.fill;

  }
}
console.log("hello");
module.exports = Lander;
