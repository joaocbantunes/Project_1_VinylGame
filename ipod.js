class Ipod {
  constructor(game) {
    this.game = game;
    this.x = 980;
    this.y = Math.floor(Math.random() * 490);
    this.width = 60;
    this.height = 60;
    this.ipod = new Image();
  }

  drawIpod() {
    this.ipod.src = "/images/ipod.png";
    this.game.ctx.drawImage(this.ipod, this.x, this.y, this.width, this.height);
    this.x -= 2;
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
