class Lander {
  constructor(centerX, centerY, radius, color, velX, velY) {
    this.centerX = centerX;
    this.centerY = centerY;
    this.radius = radius;
    this.color = color;
    this.velX = velX;
    this.velY = velY;
  }

  gravity() {
    this.velY = this.velY + .005;
  }

  move() {
    let dx = this.velX;
    let dy = this.velY;
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
