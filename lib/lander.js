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
    console.log(this.velY);
    console.log(this.angle);
    this.velY = this.velY + - (.07) * (Math.cos(this.angle));
    this.velX = this.velX + (.07) * (Math.cos(this.angle - Math.PI/2));
  }

  gravity() {

    this.velY = this.velY + .005;
  }

  landerRotate(dir) {

    if (dir === 2) {
      this.angle = this.angle+.05;
    }
    if (dir === 1) {
      this.angle = this.angle-.05;
    }

  }

  move() {
    let dx = this.velX;
    let dy = this.velY;

    this.centerX = this.centerX + dx;
    this.centerY = this.centerY + dy;
  }

  render(ctx) {
    ctx.save();
    // ctx.translate(this.centerX, this.centerY);
    // ctx.rotate(this.angle);


    ctx.fillStyle = "green";
    ctx.beginPath();

    ctx.arc(this.centerX, this.centerY, this.radius, this.angle, Math.PI + this.angle,false);
    ctx.fill();
    ctx.restore();

  }
}

module.exports = Lander;
