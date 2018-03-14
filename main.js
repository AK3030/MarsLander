import Game from "./lib/game";

const canvasEl = document.getElementsByTagName("canvas")[0];

canvasEl.height = 700;
canvasEl.width = 800;

new Game(
  canvasEl.width,
  canvasEl.height
).start(canvasEl);
