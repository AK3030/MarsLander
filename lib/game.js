import Lander from './lander';
import Surface from './surface';
import * as Util from './util';



class Game {
  constructor(xDim, yDim){
    this.xDim = xDim;
    this.yDim = yDim;
    this.surface = null;
    this.lander = new Lander(100, 100, 10, "green", 0, 0, 0);
    this.landingColor = null;
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



  checkLanding() {
    let padCoords = this.surface.padCoords();
    if (this.lander.centerX >= padCoords[0] && this.lander.centerX <= padCoords[1]
    && this.lander.centerY <= padCoords[2]) {
    }
  }

  start(canvasEl) {

    const ctx = canvasEl.getContext("2d");
    this.surface = new Surface(ctx);
    key("up", () => {this.fireThruster()});
    key("left", () => {this.rotateLander(1)});
    key("right", () => {this.rotateLander(2)})
    // this.render();

    key("down", () => {
      // let firstthing = ctx.getImageData(this.lander.centerX, this.lander.centerY+11, 2, 2)
      // console.log(firstthing);
      //
      // let thing = ctx.getImageData(100,600, 2, 2);
      // console.log(thing);
      // console.log(Util.checkRed(thing.data));
      // console.log(Util.checkRed(firstthing.data));
      // this.lander.stop();

    });

    const animateCallback = () => {


      this.changeAccel();
      this.render(ctx);
      this.moveLander();
      this.checkLanding();

      if (Util.checkRed(this.lander.lowHitbox(ctx))){
        this.lander.stop();
      }


      requestAnimationFrame(animateCallback);

    };
    animateCallback();
  }
}

var thing = new Game(5, 4);


export default Game;
