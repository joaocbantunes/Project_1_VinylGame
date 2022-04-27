class Ipod {
  constructor(game) {
    this.game = game;
    this.x = Math.floor(Math.random() * 900);
    this.y = 0;
    this.width = 41;
    this.height = 70;
    this.ipod = new Image();
  }

  drawIpod() {
    this.ipod.src = "./docs/assets/images/ipod.png";
    this.game.ctx.drawImage(this.ipod, this.x, this.y, this.width, this.height);
    this.y += 2;
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
