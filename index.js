import Paddle from "/brick/src/paddle";
import InputHandler from "/brick/src/input";
import Ball from "/brick/src/ball";

// Grabbing the canvas from html
let canvas = document.getElementById("gameScreen");
// Context of the canvas
let ctx = canvas.getContext("2d");

//(it works the same as let), BUT "const" cannot be reasigned
const GAME_WIDTH = 700;
const GAME_HEIGHT = 500;

// Declaring paddle it has game width and game height
let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
let ball = new Ball(GAME_WIDTH, GAME_HEIGHT);
// Inputing from input.js and passing the value of paddle
new InputHandler(paddle);
paddle.draw(ctx);

let lastTime = 0;

//images

// GAME LOOP
function gameLoop(timestamp) {
  // How  much time past
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  // Clearing canvas
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  paddle.update(deltaTime);
  paddle.draw(ctx);
  ball.draw(ctx);
  ball.update(deltaTime);

  //when the next frame is ready call this loop again
  requestAnimationFrame(gameLoop);
}
requestAnimationFrame(gameLoop);
