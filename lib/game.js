import Lander from './lander';
import Surface from './surface';
import * as Util from './util';
import LanderControls from './controls';


class Game {
  constructor(xDim, yDim){
    this.xDim = xDim;
    this.yDim = yDim;
    this.surface = null;
    this.lander = new Lander(100, 100, 10, "green", 0, 0, 0);
    this.landingColor = null;
    this.gameStatus = null;
    this.score = 0;
  }

  renderBackground(ctx) {
    ctx.save();
    ctx.fillStyle = "black";
    ctx.fillRect(0,0, 800, 700);
    ctx.restore();
  }

  render(ctx) {
    this.renderBackground(ctx);
    // ctx.clearRect(0,0, this.xDim, this.yDim);
    this.lander.render(ctx);
    this.surface.render(ctx);
    this.lander.renderInfo(ctx);
    // this.renderGameStatus(ctx);


  }

  moveLander() {
    this.lander.move();
  }

  changeAccel() {
    this.lander.gravity();
  }

  fireThruster() {
    this.lander.thruster();
  }

  rotateLander(dir) {
    this.lander.landerRotate(dir);
  }



  checkLanding() {
    let padCoords = this.surface.padCoords();
    if (this.lander.centerX >= padCoords[0] && this.lander.centerX <= padCoords[1]
    && this.lander.centerY <= padCoords[2]) {
    }
  }

  renderScore(ctx) {
    ctx.save();
    ctx.fillStyle ="green";
    ctx.font = "20px monospace";
    ctx.textAlign = "center";
    ctx.fillText("Score: " + this.score, 400, 50);


    // ctx.fill();
    ctx.restore();

  }
  resetGame() {
    this.score = 0;
    this.gameStatus = null;
  }

  resetGame() {
    if (this.gameStatus=== "GREAT LANDING PRESS SPACE TO CONTINUE") {
      this.lander.reset();
    }
    if (this.gameStatus==="LANDED TOO HARD GAME OVER" || this.gameStatus==="GAME OVER"){
      this.lander.reset();
      this.score = 0;
    }
    this.gameStatus = null;

  }

  renderGameStatus(ctx) {
    // ctx.save();
    // ctx.font="30px Arial";
    // this.fillStyle = "white";
    // ctx.fillText(this.gameStatus, 300, 300);
    // ctx.fill();
    // ctx.restore();


    ctx.save();
    ctx.fillStyle ="green";
    ctx.font = "26px monospace";
    ctx.textAlign = "center";
    ctx.fillText(this.gameStatus, 400, 300);

    // ctx.fill();
    ctx.restore();


  }

  start(canvasEl) {

    const ctx = canvasEl.getContext("2d");
    this.surface = new Surface(ctx);

    key("space", () => {this.resetGame()});


    var controlthing = new LanderControls();
    controlthing.keyDownListener();
    controlthing.keyUpListener();
    // this.surface.render();

    const animateCallback = () => {
      this.lander.thrusting = false;

      if (controlthing.keys["ArrowUp"]) {

        this.fireThruster();
      }
      if (controlthing.keys["ArrowLeft"]){

        this.rotateLander(1);
      }
      if (controlthing.keys["ArrowRight"]){
        this.rotateLander(2);
      }
      var rightHitBox = this.lander.rightHitBox(ctx);
      var leftHitbox = this.lander.leftHitbox(ctx);

      // var lowHitBox = this.lander.lowHitbox(ctx);







      if (Util.checkRed(rightHitBox) || Util.checkRed(leftHitbox)) {
        if ((this.lander.velY > 1.2) || (this.lander.angle > 0.1) || (this.lander.angle < -0.1)) {
          this.gameStatus = "BAD LANDING GAME OVER";
          this.score = 100;
        }
        else {
          if (!this.gameStatus) {
              this.gameStatus = "GREAT LANDING PRESS SPACE TO CONTINUE";
              this.score = this.score + 100;
          }

        }
        this.lander.stop();
      } else if (Util.checkWhite(rightHitBox) || Util.checkWhite(leftHitbox)) {
        this.gameStatus = "GAME OVER";
        this.lander.stop();
        this.score = 100;
      }
      else {
        this.changeAccel();
        this.render(ctx);
        this.moveLander();
        this.checkLanding();


      }
      if (this.gameStatus) {
        this.renderGameStatus(ctx);
      }
      this.renderScore(ctx);
      requestAnimationFrame(animateCallback);

    };
    animateCallback();
  }
}

var thing = new Game(5, 4);

export default Game;
