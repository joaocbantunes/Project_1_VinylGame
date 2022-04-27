class Water {
  constructor(game) {
    this.game = game;
    this.x = Math.floor(Math.random() * 1000);
    this.y = 400;
    this.water = new Image();
    this.width = 50;
    this.height = 50;
  }

  drawWater() {
    this.water.src = "./docs/assets/images/water.png";
    this.game.ctx.drawImage(this.water, this.x, this.y, 40, 80);
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
