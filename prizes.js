class Prize {
  constructor(game) {
    this.game = game;
    this.x = Math.floor(Math.random() * 450);
    this.y = Math.floor(Math.random() * 300);
    this.width = 60;
    this.height = 60;
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

  drawAbove() {
    this.game.ctx.fillStyle = "green";
    this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  /*
    drawBottom() {
      this.game.ctx.fillStyle = "green";
      this.game.ctx.fillRect((this.x = 0), this.y, this.width, this.height);
    }*/
}
