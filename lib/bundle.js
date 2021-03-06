/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_game__ = __webpack_require__(1);


const canvasEl = document.getElementsByTagName("canvas")[0];

canvasEl.height = 700;
canvasEl.width = 800;

new __WEBPACK_IMPORTED_MODULE_0__lib_game__["a" /* default */](
  canvasEl.width,
  canvasEl.height
).start(canvasEl);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lander__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lander___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__lander__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__surface__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__surface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__surface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controls__ = __webpack_require__(5);






class Game {
  constructor(xDim, yDim){
    this.xDim = xDim;
    this.yDim = yDim;
    this.surface = null;
    this.lander = new __WEBPACK_IMPORTED_MODULE_0__lander___default.a(100, 100, 10, "green", 0, 0, 0);
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
    this.surface = new __WEBPACK_IMPORTED_MODULE_1__surface___default.a(ctx);

    key("space", () => {this.resetGame()});


    var controlthing = new __WEBPACK_IMPORTED_MODULE_3__controls__["a" /* default */]();
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







      if (__WEBPACK_IMPORTED_MODULE_2__util__["a" /* checkRed */](rightHitBox) || __WEBPACK_IMPORTED_MODULE_2__util__["a" /* checkRed */](leftHitbox)) {
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
      } else if (__WEBPACK_IMPORTED_MODULE_2__util__["b" /* checkWhite */](rightHitBox) || __WEBPACK_IMPORTED_MODULE_2__util__["b" /* checkWhite */](leftHitbox)) {
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

/* harmony default export */ __webpack_exports__["a"] = (Game);


/***/ }),
/* 2 */
/***/ (function(module, exports) {



class Lander {
  constructor(centerX, centerY, radius, color, velX, velY, angle) {
    this.centerX = centerX;
    this.centerY = centerY;
    this.radius = radius;
    this.color = color;
    this.velX = velX;
    this.velY = velY;
    this.angle = angle;
    this.fuel = 1000;
    this.thrusting = false;
  }

  reset() {
    this.centerX = 100;
    this.centerY = 100;
  }

  thruster() {
    if (this.fuel > 0) {
      this.thrusting = true;
      this.velY = this.velY + - (.03) * (Math.cos(this.angle));
      this.velX = this.velX + (.03) * (Math.cos(this.angle - Math.PI/2));
      this.fuel = this.fuel - 1;
    }
  }

  gravity() {
    this.velY = this.velY + .013;
  }

  // lowHitbox(ctx) {
  //   let box = ctx.getImageData(this.centerX, this.centerY, 1, 1).data;
  //   // if (box[0] !== 0) {
  //   //   console.log(box[0]);
  //   // }
  //
  //   return box;
  //
  //   // console.log("adsfljafl");
  // }

  rightHitBox(ctx) {
    let box = ctx.getImageData(this.centerX+18, this.centerY+18, 1, 1).data;
    return box;

  }

  leftHitbox(ctx) {
    let box = ctx.getImageData(this.centerX-18, this.centerY+18, 1, 1).data;

    return box;

  }



  landerRotate(dir) {

    if (dir === 2) {
      this.angle = this.angle+.05;
    }
    if (dir === 1) {
      this.angle = this.angle-.05;
    }

  }

  stop() {

    this.velX = 0;
    this.velY = 0;
  }

  move() {
    let dx = this.velX;
    let dy = this.velY;

    this.centerX = this.centerX + dx;
    this.centerY = this.centerY + dy;
  }

  render(ctx) {
    ctx.save();
    ctx.fillStyle = "grey";
    ctx.strokeStyle = "grey";
    ctx.beginPath();
    ctx.translate(this.centerX, this.centerY);
    ctx.rotate(this.angle);
    ctx.fillRect(-10, -10, 20, 20);

    ctx.moveTo(10, 10);
    ctx.lineTo(15, 18);
    ctx.lineTo(18, 18);


    ctx.moveTo(-10, 10);
    ctx.lineTo(-15, 18);
    ctx.lineTo(-18, 18);
    ctx.stroke();


    if (this.thrusting === true) {
      ctx.strokeStyle = "white";
      ctx.beginPath();
      ctx.moveTo(-5, 10);
      ctx.lineTo(0, 20);
      ctx.lineTo(5,10);
      ctx.stroke();
    }


    ctx.restore();


  }

  renderInfo(ctx) {
    ctx.save();
    ctx.fillStyle ="green";
    ctx.font = "15px monospace";
    ctx.fillText("vertical velocity (m/s): " + Math.round(this.velY *1000) /1000, 100, 100);
    ctx.fillText("fuel level: " + this.fuel, 100, 115);

    // ctx.fill();
    ctx.restore();

  }
}

module.exports = Lander;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

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


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

const checkRed = (pixelData) => {
  // for (let i = 0; i < pixelData.length; i=i+3) {
  //
  //   if (pixelData[i] === 255) {
  //     console.log(pixelData);
  //     return true;
  //   }
  // }
  if ((pixelData[0] === 255) && (pixelData[3] === 255) && (pixelData[1] === 0) && (pixelData[2] === 0)){

    return true;
  }
  return false;
};
/* harmony export (immutable) */ __webpack_exports__["a"] = checkRed;


const checkWhite = (pixelData) => {
  if (pixelData[0] === 148){
    // console.log(pixelData);
    return true;
  }
  return false;
};
/* harmony export (immutable) */ __webpack_exports__["b"] = checkWhite;



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class LanderControls {
  constructor() {
    this.keys = {
      "ArrowUp":false,
      "ArrowDown":false,
      "ArrowLeft":false,
      "ArrowRight":false,
    };
    this.keyDownListener = this.keyDownListener.bind(this);
  }

  keyDownListener() {
    var keys = this.keys;
    $(document.body).keydown(function(event) {
      keys[event.key] = true;
    });
  }

  keyUpListener() {
    var keys = this.keys;
    $(document.body).keyup(function(event) {
      keys[event.key] = false;

    });
  }
}

/* harmony default export */ __webpack_exports__["a"] = (LanderControls);

var hi = new LanderControls();


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map