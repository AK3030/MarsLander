import Lander from './lander';
class Game {
  constructor(xDim, yDim){
    this.xDim = xDim;
    this.yDim = yDim;
  }

  render(ctx) {
    ctx.clearRect(0,0, this.xDim, this.yDim);
  }

  moveLander() {

  }

  start(canvasEl) {
    const ctx = canvasEl.getContext("2d");

    const animateCallback = () => {

    };
  }
}

export default Game;
