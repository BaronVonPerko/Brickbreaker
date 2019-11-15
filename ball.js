export default class Ball {
  constructor(gameWidth, gameHeight) {
    this.image = document.getElementById("imgBall");

    this.size = 16;
    this.position = { x: 10, y: 10 };
    this.speed = { x: 4, y: 2 };
    this.gameHeight = gameHeight;
    this.gameWidth = gameWidth;
  }

  // we need to pass the ctx here (context)
  draw(ctx) {
    // Cia buvo ispradziu 10,10 nes tik paskuj declare kur jis stoves pagal this.
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }

  update(deltaTime) {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    // when ball boundary goes outside gameW and X is less than ball boundary
    // make it go reverse
    if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {
      this.speed.x = -this.speed.x;
    }

    if (this.position.y + this.size > this.gameHeight || this.position.y < 0) {
      this.speed.y = -this.speed.y;
    }
  }
}
