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

export default LanderControls;

var hi = new LanderControls();
