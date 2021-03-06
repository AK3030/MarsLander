

class Lander {
  constructor(centerX, centerY, radius, color, velX, velY, angle) {
    this.centerX = centerX;
    this.centerY = centerY;
    this.radius = radius;
    this.color = color;
    this.velX = velX;
    this.velY = velY;
    this.angle = angle;
    this.fuel = 1000;
    this.thrusting = false;
  }

  reset() {
    this.centerX = 100;
    this.centerY = 100;
  }

  thruster() {
    if (this.fuel > 0) {
      this.thrusting = true;
      this.velY = this.velY + - (.03) * (Math.cos(this.angle));
      this.velX = this.velX + (.03) * (Math.cos(this.angle - Math.PI/2));
      this.fuel = this.fuel - 1;
    }
  }

  gravity() {
    this.velY = this.velY + .013;
  }

  // lowHitbox(ctx) {
  //   let box = ctx.getImageData(this.centerX, this.centerY, 1, 1).data;
  //   // if (box[0] !== 0) {
  //   //   console.log(box[0]);
  //   // }
  //
  //   return box;
  //
  //   // console.log("adsfljafl");
  // }

  rightHitBox(ctx) {
    let box = ctx.getImageData(this.centerX+18, this.centerY+18, 1, 1).data;
    return box;

  }

  leftHitbox(ctx) {
    let box = ctx.getImageData(this.centerX-18, this.centerY+18, 1, 1).data;

    return box;

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
    ctx.fillStyle = "grey";
    ctx.strokeStyle = "grey";
    ctx.beginPath();
    ctx.translate(this.centerX, this.centerY);
    ctx.rotate(this.angle);
    ctx.fillRect(-10, -10, 20, 20);

    ctx.moveTo(10, 10);
    ctx.lineTo(15, 18);
    ctx.lineTo(18, 18);


    ctx.moveTo(-10, 10);
    ctx.lineTo(-15, 18);
    ctx.lineTo(-18, 18);
    ctx.stroke();


    if (this.thrusting === true) {
      ctx.strokeStyle = "white";
      ctx.beginPath();
      ctx.moveTo(-5, 10);
      ctx.lineTo(0, 20);
      ctx.lineTo(5,10);
      ctx.stroke();
    }


    ctx.restore();


  }

  renderInfo(ctx) {
    ctx.save();
    ctx.fillStyle ="green";
    ctx.font = "15px monospace";
    ctx.fillText("vertical velocity (m/s): " + Math.round(this.velY *1000) /1000, 100, 100);
    ctx.fillText("fuel level: " + this.fuel, 100, 115);

    // ctx.fill();
    ctx.restore();

  }
}

module.exports = Lander;
