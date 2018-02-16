import Game from "./lib/game";

const canvasEl = document.getElementsByTagName("canvas")[0];

canvasEl.height = 700;
canvasEl.width = 550;

new Game(
  canvasEl.width,
  canvasEl.height
).start(canvasEl);
