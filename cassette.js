class Cassette {
  constructor(game) {
    this.game = game;
    this.x = Math.floor(Math.random() * 450);
    this.y = 0;
    this.cassette = new Image();
    this.width = 50;
    this.height = 50;
  }

  drawCassette() {
    this.cassette.src = "./docs/assets/images/cassette.png";
    this.game.ctx.drawImage(this.cassette, this.x, this.y, 80, 50);
    this.x++;
    this.y++;
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
