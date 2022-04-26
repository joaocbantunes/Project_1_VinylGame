class Brush {
    constructor(game) {
      this.game = game;
      this.x = Math.floor(Math.random() * 460);
      this.y = 0;
      this.brush = new Image();
      this.width = 60;
      this.height = 60;
    }
  
    drawBrush() {
      this.brush.src = "/images/brush.jpg";
      this.game.ctx.drawImage(this.brush, this.x, this.y, 60, 60);
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
  