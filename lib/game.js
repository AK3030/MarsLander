import Lander from './lander';
class Game {
  constructor(xDim, yDim){
    this.xDim = xDim;
    this.yDim = yDim;

    this.lander = new Lander(200, 200, 10, "green");
  }

  render(ctx) {
    ctx.clearRect(0,0, this.xDim, this.yDim);
    this.lander.render(ctx);
  }

  moveLander() {
    this.lander.move();
  }

  start(canvasEl) {
    console.log("sajfklajsf");
    const ctx = canvasEl.getContext("2d");

    const animateCallback = () => {

      console.log("aoisdufoasudfoafu");
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
