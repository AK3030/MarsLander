import Lander from './lander';
class Game {
  constructor(xDim, yDim){
    this.xDim = xDim;
    this.yDim = yDim;

    this.lander = new Lander(200, 200, 10, "green", 1, 1);
  }

  render(ctx) {
    ctx.clearRect(0,0, this.xDim, this.yDim);
    this.lander.render(ctx);
  }

  moveLander() {
    this.lander.move();
  }

  changeAccel() {
    this.lander.gravity();
  }

  start(canvasEl) {
    console.log("sajfklajsf");
    const ctx = canvasEl.getContext("2d");

    const animateCallback = () => {

      console.log("aoisdufoasudfoafu");
      this.changeAccel();
      this.moveLander();
      console.log(this.lander);
      this.render(ctx);
      requestAnimationFrame(animateCallback);

    };
    animateCallback();
  }
}

var thing = new Game(5, 4);


export default Game;
