import Lander from './lander';
import Surface from './surface';
class Game {
  constructor(xDim, yDim){
    this.xDim = xDim;
    this.yDim = yDim;
    this.surface = new Surface();
    this.lander = new Lander(100, 100, 10, "green", 0, 0, 0);
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

  rotateLander(dir) {
    this.lander.landerRotate(dir);
  }

  start(canvasEl) {
    const ctx = canvasEl.getContext("2d");
    key("up", () => {this.fireThruster()});
    key("left", () => {this.rotateLander(1)});
    key("right", () => {this.rotateLander(2)})

    const animateCallback = () => {


      this.changeAccel();
      this.render(ctx);
      this.moveLander();


      requestAnimationFrame(animateCallback);

    };
    animateCallback();
  }
}

var thing = new Game(5, 4);


export default Game;
