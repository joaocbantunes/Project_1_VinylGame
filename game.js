class Game {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.player = null;
    this.background = new Image();
    this.frames = 0;
    this.x = 0;
    this.y = 0;
    this.canvasWidth = 1100;
    this.canvasHeight = 600;
    this.intervalId = null;
    this.spotify = [];
    this.water = [];
    this.brush = [];
    this.ipod = [];
    this.score = 1930;
    this.newInterval = null;
  }

  start() {
    this.player = new Player(this, 460, 190, 60, 40);
    const controls = new Controls(this);
    controls.keyEvents();
    this.intervalId = setInterval(() => {
      this.update();
    }, 1000 / 60);
    this.newInterval = setInterval(() => {
      this.score++;
    }, 1000);
  }

  update() {
    this.drawBackground();
    this.player.draw();
    this.drawEnemie();
    this.drawBonus();
    this.spotify.forEach((enemie) => {
      enemie.drawSpotify();
    });
    this.water.forEach((enemie) => {
      enemie.drawWater();
    });
    this.ipod.forEach((enemie) => {
      enemie.drawIpod();
    });
    this.brush.forEach((bonus) => {
      bonus.drawBrush();
    });
    this.frames += 3;
    /*  this.timeOut = setTimeout(() => {
      this.score += Math.floor(this.frames * 0.003);
    }, 1000);
 */
    this.checkBonus();
    this.checkGameOver();
    this.getScore();
    this.winningGame();
  }

  drawBackground() {
    this.background.src = "/images/back.jpg";
    this.ctx.drawImage(
      this.background,
      this.x,
      this.y,
      this.canvasWidth,
      this.canvasHeight
    );
  }

  drawEnemie() {
    if (this.frames % 500 === 0) {
      this.spotify.push(new Spotify(this));
      this.water.push(new Water(this));
      this.ipod.push(new Ipod(this));
    }
  }

  drawBonus() {
    if (this.frames % 600 === 0) {
      this.brush.push(new Brush(this));
    }
  }

  stopGame() {
    this.ctx.font = "90px";
    this.ctx.fillStyle = "red";
    this.ctx.fillText("You didn't make it to 2022!", 280, 580);
    clearInterval(this.intervalId);
  }

  winGame() {
    this.ctx.font = "200px";
    this.ctx.fillStyle = "yellow";
    this.ctx.fillText("YOU WIN! YOU'RE A VINYL RESCUER!", 100, 200);
    clearInterval(this.intervalId);
  }

  getScore() {
    //let score = 1930 + Math.floor(this.frames / 60);
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(880, 570, 170, 150);
    //this.ctx.fill;
    this.ctx.font = "20px verdana";
    this.ctx.fillStyle = "green";
    this.ctx.fillText(`The year is ${this.score}`, 880, 590);
  }

  checkGameOver() {
    const player = this.player;
    const crashedSpotify = this.spotify.some(function (spotify) {
      return player.colision(spotify);
    });
    const crashedWater = this.water.some(function (water) {
      return player.colision(water);
    });
    const crashedIpod = this.ipod.some(function (ipod) {
      return player.colision(ipod);
    });
    if (crashedSpotify || crashedWater || crashedIpod) {
      this.stopGame();
    }
  }

  checkBonus() {
    const player = this.player;
    const crashedBrush = this.brush.some(function (brush) {
      return player.colision(brush);
    });
    if (crashedBrush) {
      this.brush.forEach((brush, i, arr) => {
        arr.splice(i, 1);
        this.score += 20;
      });
    }
  }

  winningGame() {
    if (this.score >= 2022) {
      this.winGame();
    }
  }
}
