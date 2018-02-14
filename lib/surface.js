class Surface {
  constructor() {

  }

  render(ctx) {
    ctx.beginPath();
    ctx.moveTo(0,600);
    ctx.lineTo(600,600);
    ctx.stroke();

  }
}

module.exports = Surface;
