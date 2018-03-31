class Surface {
  constructor(ctx) {

  }

  padCoords() {
    return [[100, 200, 600]];
  }

  render(ctx) {

    // mars color 94492F


    ctx.restore();
    // #94492F
    // ctx.beginPath();
    // ctx.lineWidth = 4;
    ctx.strokeStyle = "#94492F";
    ctx.fillStyle = "#94492F";
    ctx.beginPath();
    ctx.moveTo(0,400);
    ctx.lineTo(100,600);
    ctx.lineTo(100, 700);
    ctx.lineTo(0, 700);
    // ctx.lineTo(50, 600);
    // ctx.fill();
    // ctx.moveTo(100,600);
    // pad 1
    // ctx.lineTo(200, 600);
    // ctx.rect(100, 600, 100, 30);

    ctx.moveTo(200,600);
    ctx.lineTo(250, 550);
    ctx.lineTo(275, 500);
    ctx.lineTo(285, 450);
    ctx.lineTo(300, 400);
    ctx.lineTo(300, 700);
    ctx.lineTo(200, 700);

    // ctx.fill();
    // ctx.moveTo(300,400);
    // pad 2
    // ctx.lineTo(330, 400);

    ctx.moveTo(330,400);
    ctx.lineTo(340,360);
    // ctx.moveTo(340,360);
    ctx.lineTo(345, 330);
    // ctx.moveTo(345,330);
    ctx.lineTo(365, 290);
    // ctx.moveTo(365, 290);
    ctx.lineTo(375, 320);
    // ctx.moveTo(375, 320);
    ctx.lineTo(385, 390);
    // ctx.moveTo(385, 390);
    ctx.lineTo(390, 465);
    ctx.lineTo(390, 700);
    ctx.lineTo(330, 700);
    ctx.fill();

    ctx.moveTo(420, 466);
    ctx.lineTo(450, 500);
    ctx.lineTo(480, 580);
    ctx.lineTo(480, 700);
    ctx.lineTo(420, 700);
    // ctx.fill();

    ctx.moveTo(520, 580);
    ctx.lineTo(540, 650);
    ctx.lineTo(540, 700);
    ctx.lineTo(520, 700);
    // ctx.fill();

    ctx.moveTo(580, 680);
    ctx.lineTo(660, 550);
    ctx.lineTo(700, 400);
    ctx.lineTo(700, 700);
    ctx.lineTo(580, 700);

    ctx.moveTo(740, 400);
    ctx.lineTo(800, 300);
    ctx.lineTo(800, 700);
    ctx.lineTo(740, 700);
    ctx.fill();


    ctx.stroke();
    ctx.restore();

    ctx.fillRect(100, 630, 100, 80);
    ctx.fillRect(300, 430, 30, 280);
    ctx.fillRect(390, 495, 30, 210);
    ctx.fillRect(480, 610, 40, 90);
    // ctx.fillRect(540, 710, 40, 10);
    ctx.fillRect(700, 430, 40, 270);

    ctx.save();
    ctx.fillStyle = "red";
    ctx.fillRect(100, 600, 100, 30);
    ctx.fillRect(300, 400, 30, 30);
    ctx.fillRect(390, 465, 30, 30);
    ctx.fillRect(480, 580, 40, 30);
    ctx.fillRect(540, 680, 40, 30);
    ctx.fillRect(700, 400, 40, 30);


    ctx.stroke();
    ctx.restore();

  }
}

module.exports = Surface;
