class LanderControls {
  constructor() {
    this.keys = {
      "up":false,
      "down":false,
      "left":false,
      "right":false,
    };
  }

  keyDownListener() {
    console.log("downlisten");
    $(document.body).keydown(function(event) {
      console.log(event.key);
    });
  }

  keyUpListener() {
    console.log("uplisten");
    $(document.body).keyup(function(event) {
      console.log(event.key);
    });
  }
}

export default LanderControls;
