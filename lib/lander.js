class Lander {
  constructor(centerX, centerY, radius, color) {
    this.centerX = centerX;
    this.centerY = centerY;
    this.radius = radius;
    this.color = color;
  }

  move() {
    let dx = 1;
    let dy = 1;
    this.centerX = this.centerX + dx;
    this.centerY = this.centerY + dy;
  }

  render(ctx) {
    ctx.fillStyle = "green";
    ctx.beginPath();

    ctx.arc(this.centerX, this.centerY, this.radius, 0, 2 * Math.PI,false);
    ctx.fill();

  }
}
console.log("hello");
var thing = new Lander(200, 200, 10, "green");
console.log(thing);
thing.move();
console.log(thing);
module.exports = Lander;
