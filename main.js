import Game from "./lib/game";

const canvasEl = document.getElementsByTagName("canvas")[0];
canvasEl.height = window.innerHeight;
canvasEl.width = window.innerWidth;

console.log(canvasEl);
new Game(
  canvasEl.width,
  canvasEl.height
).start(canvasEl);
