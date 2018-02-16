

class Lander {
  constructor(centerX, centerY, radius, color, velX, velY, angle) {
    this.centerX = centerX;
    this.centerY = centerY;
    this.radius = radius;
    this.color = color;
    this.velX = velX;
    this.velY = velY;
    this.angle = angle;
    this.fuel = 300;
  }

  thruster() {
    this.velY = this.velY + - (.07) * (Math.cos(this.angle));
    this.velX = this.velX + (.07) * (Math.cos(this.angle - Math.PI/2));
    this.fuel = this.fuel - 1;
  }

  gravity() {
    this.velY = this.velY + .005;
  }

  lowHitbox(ctx) {
    let box = ctx.getImageData(this.centerX, this.centerY + 12, 1, 1).data;
    // if (box[0] !== 0) {
    //   console.log(box[0]);
    // }

    return box;

    // console.log("adsfljafl");
  }

  rightHitBox(ctx) {
    let box = ctx.getImageData(this.centerX + 12, this.centerY, 1, 1).data;
    return box;
    // console.log("asdflkajsf");
  }

  leftHitbox(ctx) {
    let box = ctx.getImageData(this.centerX-12, this.centerY, 1, 1).data;
    return box;
    // console.log("asdflkjasf");
  }

  asdf() {
    console.log("asdfkaljsflk");
  }



  landerRotate(dir) {

    if (dir === 2) {
      this.angle = this.angle+.05;
    }
    if (dir === 1) {
      this.angle = this.angle-.05;
    }

  }

  stop() {

    this.velX = 0;
    this.velY = 0;
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


    ctx.fillStyle = "white";
    ctx.beginPath();

    ctx.arc(this.centerX, this.centerY, this.radius, this.angle, Math.PI + this.angle,false);
    ctx.fill();
    ctx.restore();
  }

  renderInfo(ctx) {
    ctx.save();
    ctx.fillStyle ="white";
    ctx.fillText("vertical velocity (m/s): " + Math.round(this.velY *1000) /1000, 100, 100);
    ctx.fillText("fuel level: " + this.fuel, 100, 110);

    ctx.fill();
    ctx.restore();

  }
}

module.exports = Lander;
