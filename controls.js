class Controls {
  constructor(game) {
    this.game = game;
    this.player = this.game.player;
  }

  keyEvents() {
    window.addEventListener("keydown", (e) => {
      switch (e.code) {
        case "KeyW":
        case "ArrowUp":
          if (this.player.y > 5) {
            this.player.y -= 25;
          }
          break;

        case "KeyA":
        case "ArrowLeft":
          if (this.player.x > 8) {
            this.player.x -= 25;
          }
          break;

        case "KeyD":
        case "ArrowRight":
          if (this.player.x + this.player.width < 900) {
            this.player.x += 25;
          }
          break;

        case "KeyS":
        case "ArrowDown":
          if (this.player.y + this.player.height < 600) {
            this.player.y += 25;
          }
          break;
      }
    });
  }
}
