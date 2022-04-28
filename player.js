class Player {
  constructor(game, x, y, width, height) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.spriteWidth = 1024;
    this.spriteHeight = 64;
    this.width = 64;
    this.height = 64;
    this.frameX = 9;
    this.frameY = 0;
    this.img = new Image();
  }

  left() {
    return this.x;
  }

  right() {
    return this.x + this.width;
  }

  top() {
    return this.y;
  }

  bottom() {
    return this.y + this.height;
  }

  colision(enemy) {
    return !(
      this.bottom() < enemy.top() ||
      this.top() > enemy.bottom() ||
      this.right() < enemy.left() ||
      this.left() > enemy.right()
    );
  }
  /*
  colision(brush) {
    return !(
      this.bottom() < enemy.top() ||
      this.top() > enemy.bottom() ||
      this.right() < enemy.left() ||
      this.left() > enemy.right()
    );
  }*/

  draw() {
    //let img = new Image();
    this.img.src = "docs/assets/images/spritesheet.png";
    this.game.ctx.drawImage(
      this.img,
      this.frameX * this.width,
      this.frameY * this.height,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );

  }

  animate() {
    if(this.frameX == 15) {
      this.frameX = 0
    } else {
      this.frameX++
    }
  }
}
