class Surface {
  constructor(ctx) {

  }

  padCoords() {
    return [[100, 200, 600]];
  }

  render(ctx) {


    ctx.save();

    ctx.lineWidth = 4;
    ctx.strokeStyle = "white";
    ctx.beginPath();
    ctx.moveTo(0,400);
    ctx.lineTo(100,600);
    // ctx.moveTo(100,600);
    // pad 1
    // ctx.lineTo(200, 600);
    // ctx.rect(100, 600, 100, 30);

    ctx.moveTo(200,600);
    ctx.lineTo(250, 550);
    ctx.moveTo(250, 550);
    ctx.lineTo(275, 500);
    ctx.moveTo(275,500);
    ctx.lineTo(285, 450);
    ctx.moveTo(285,450);
    ctx.lineTo(300, 400);
    // ctx.moveTo(300,400);
    // pad 2
    // ctx.lineTo(330, 400);

    ctx.moveTo(330,400);
    ctx.lineTo(340,360);
    ctx.moveTo(340,360);
    ctx.lineTo(345, 330);
    ctx.moveTo(345,330);
    ctx.lineTo(365, 290);
    ctx.moveTo(365, 290);
    ctx.lineTo(375, 320);
    ctx.moveTo(375, 320);
    ctx.lineTo(385, 390);
    ctx.moveTo(385, 390);
    ctx.lineTo(390, 465);
    // ctx.moveTo(390, 465);
    // pad 3
    // ctx.lineTo(420, 465);

    ctx.stroke();
    ctx.restore();



    ctx.save();
    ctx.fillStyle = "red";
    ctx.fillRect(100, 600, 100, 30);
    ctx.fillRect(300, 400, 30, 30);
    ctx.fillRect(390, 465, 30, 30);
    ctx.stroke();
    ctx.restore();

  }
}

module.exports = Surface;
