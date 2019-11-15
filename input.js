import Paddle from "./paddle";

export default class InputHandler {
  // passing the value of paddle to constructor
  constructor(paddle) {
    // listening to keydown and function event and when
    // it happens it alerts

    // when the key is pressed it moves left or right
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case 37:
          // we passed parrameters in constructor so
          //it know what is Paddle
          paddle.moveLeft();
          break;

        case 39:
          paddle.moveRight();
          break;
      }
    });

    // when the key is not pressed it stops
    document.addEventListener("keyup", event => {
      switch (event.keyCode) {
        case 37:
          // we passed parrameters in constructor so
          //it know what is Paddle
          paddle.stop();
          break;

        case 39:
          paddle.stop();
          break;
      }
    });
  }
}
