import Game from "./lib/game";

const canvasEl = document.getElementsByTagName("canvas")[0];

canvasEl.height = 1000;
canvasEl.width = 1000;






new Game(
  canvasEl.width,
  canvasEl.height
).start(canvasEl);
