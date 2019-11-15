export default class Paddle {
  // passing the parameters of W and H
  constructor(gameWidth, gameHeight) {
    this.width = 100;
    this.height = 15;

    this.gameWidth = gameWidth;

    this.speed = 0;
    this.maxSpeed = 10;

    this.position = {
      /* 700 / 2 (game area in half (midle))
      AND for paddle to be in the middle both half has to go each side*/
      x: gameWidth / 2 - this.width / 2,

      // 800 - 30 (paddle height) - 10
      y: gameHeight - this.height - 10
    };
  }

  moveLeft() {
    this.speed = -this.maxSpeed;
  }
  moveRight() {
    this.speed = this.maxSpeed;
  }
  stop() {
    this.speed = this.speed = 0;
  }

  draw(ctx) {
    ctx.fillStyle = "#00FFFF";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  // Update paddle position (how much times its going to change since its last time)
  update(deltaTime) {
    // x position gets moved -10 amount
    this.position.x += this.speed;

    /* making that paddle wont go out of boundaries ON THE LEFT
    if paddle X is less than 0, THEN make X = 0; */
    if (this.position.x < 0) this.position.x = 0;

    /* if X position of paddle + paddle width is more than
    gameWidth, THEN we line up X perfectly with game width boundaries with
    gameWidth - paddleWidth; (paddle X=0 is left corner of the paddle) */
    if (this.position.x + this.width > this.gameWidth)
      this.position.x = this.gameWidth - this.width;
  }
}
