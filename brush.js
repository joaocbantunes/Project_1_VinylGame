class Brush {
  constructor(game) {
    this.game = game;
    this.x = Math.floor(Math.random() * 400);
    this.y = Math.floor(Math.random() * 800);
    this.brush = new Image();
    this.width = 86;
    this.height = 40;
  }

  drawBrush() {
    this.brush.src = "docs/assets/images/brush.png";
    this.game.ctx.drawImage(this.brush, this.x, this.y, 86, 40);
    this.x++;
    this.y--;
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
}
