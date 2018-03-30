class LanderTwo {
  constructor(startX, startY, radius, color, velX, velY, angle) {
    this.startX = startX;
    this.startY = startY;
    this.color = color;
    this.velX = velX;
    this.velY = velY;
    this.angle = angle;
    this.fuel = 1000;
  }

  render(ctx) {
    ctx.save();

    ctx.fillStyle = "yellow";
    ctx.translate(150, 150);
    ctx.rotate(Math.PI/4); // Rotate 45 degrees (in radians)
    ctx.fillRect(-10, -10, 20, 20);
    ctx.restore();

  }


}


module.exports = LanderTwo;
