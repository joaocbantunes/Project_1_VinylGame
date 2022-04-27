class Spotify {
  constructor(game) {
    this.game = game;
    this.x = 0;
    this.y = Math.floor(Math.random() * 300);
    this.spotify = new Image();
    this.width = 50;
    this.height = 50;
  }

  drawSpotify() {
    this.spotify.src = "./docs/assets/images/spotify.png";
    this.game.ctx.fillStyle = "white";
    this.game.ctx.fillRect(this.spotify, this.y, 50, 50);
    this.game.ctx.drawImage(this.spotify, this.x, this.y, 60, 60);
    this.x += 2;
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
