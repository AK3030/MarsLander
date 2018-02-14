import Lander from './lander';
import Surface from './surface';
class Game {
  constructor(xDim, yDim){
    this.xDim = xDim;
    this.yDim = yDim;
    this.surface = new Surface();
    this.lander = new Lander(0, 0, 10, "green", 0, 1, 0);
  }

  render(ctx) {
    ctx.clearRect(0,0, this.xDim, this.yDim);
    this.lander.render(ctx);
    this.surface.render(ctx);
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

  rotateLander() {
    this.lander.landerRotate();
  }

  start(canvasEl) {
    const ctx = canvasEl.getContext("2d");
    key("up", () => {this.fireThruster()});
    key("left", () => {this.rotateLander()});

    const animateCallback = () => {


      this.changeAccel();
      this.moveLander();

      this.render(ctx);
      requestAnimationFrame(animateCallback);

    };
    animateCallback();
  }
}

var thing = new Game(5, 4);


export default Game;
