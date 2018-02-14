class Lander {
  constructor(centerX, centerY, radius, color, velX, velY, angle) {
    this.centerX = centerX;
    this.centerY = centerY;
    this.radius = radius;
    this.color = color;
    this.velX = velX;
    this.velY = velY;
    this.angle = angle;
  }

  thruster() {
    // this.velX = this.velX + -3;
    // console.log(this.velY);
    // this.velY = this.velY -.07;
  }

  gravity() {
    // this.velY = this.velY + .005;
  }

  landerRotate() {
    console.log("coords", this.centerX, this.centerY);
    this.angle = this.angle+.05;
  }

  move() {
    // let dx = this.velX;
    // let dy = this.velY;
    // this.centerX = this.centerX + dx;
    // this.centerY = this.centerY + dy;
  }

  render(ctx) {
    ctx.save();
    ctx.translate(300, 300);
    ctx.rotate(this.angle);
    ctx.fillStyle = "green";
    ctx.beginPath();

    ctx.arc(this.centerX, this.centerY, this.radius, 0, Math.PI,false);
    ctx.fill();
    ctx.restore();

  }
}
console.log("hello");
var thing = new Lander(200, 200, 10, "green");
console.log(thing);
thing.move();
console.log(thing);
module.exports = Lander;
