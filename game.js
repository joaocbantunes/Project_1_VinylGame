class Game {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.player = null;
    this.background = new Image();
    const gameover = new Image();
    gameover.addEventListener("load", () => {
      this.gameover = gameover;
    });
    gameover.src = "docs/assets/images/gameover_screen.jpg";
    //this.gameover = new Image();
    this.winimage = new Image();
    this.frames = 0;
    this.x = 0;
    this.y = 0;
    this.canvasWidth = 900;
    this.canvasHeight = 600;
    this.intervalId = null;
    this.spotify = [];
    this.cassette = [];
    this.brush = [];
    this.ipod = [];
    this.gameSound = new Audio("docs/assets/sounds/gamesound.mp3");
    this.mySoundWin = new Audio("docs/assets/sounds/wingame.mp3");
    this.gameOverSound = new Audio("docs/assets/sounds/gameoversound.mp3");
    this.score = 1930;
    this.newInterval = null;
  }

  start() {
    this.gameSound.play();
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
    this.cassette.forEach((enemie) => {
      enemie.drawCassette();
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
    this.background.src = "docs/assets/images/back.jpg";
    this.ctx.drawImage(
      this.background,
      this.x,
      this.y,
      this.canvasWidth,
      this.canvasHeight
    );
  }

  drawEnemie() {
    if (this.frames % 350 === 0) {
      this.spotify.push(new Spotify(this));
      this.cassette.push(new Cassette(this));
      this.ipod.push(new Ipod(this));
    }
  }

  drawBonus() {
    if (this.frames % 600 === 0) {
      this.brush.push(new Brush(this));
    }
  }

  stopGame() {
    /*this.ctx.font = "90px";
    this.ctx.fillStyle = "red";
    this.ctx.fillText("You didn't make it to 2022!", 280, 580);*/
    this.gameSound.pause();
    this.gameOverSound.play();
    clearInterval(this.intervalId);
    //this.gameover.src = "/docs/assets/images/gameover_screen.jpg";
    this.ctx.drawImage(
      this.gameover,
      this.x,
      this.y,
      this.canvasWidth,
      this.canvasHeight
    );

    //this.stopGame();
  }

  winGame() {
    /*this.ctx.font = "200px";
    this.ctx.fillStyle = "yellow";
    this.ctx.fillText("YOU WIN! YOU'RE A VINYL RESCUER!", 100, 200);*/
    //clearInterval(this.intervalId);
    this.gameSound.pause();
    this.mySoundWin.play();
    this.winimage.src = "docs/assets/images/win_screen.jpg";
    this.ctx.drawImage(
      this.winimage,
      this.x,
      this.y,
      this.canvasWidth,
      this.canvasHeight
    );
  }

  getScore() {
    //let score = 1930 + Math.floor(this.frames / 60);
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(670, 560, 320, 100);
    //this.ctx.fill;
    this.ctx.font = "25px verdana";
    this.ctx.fillStyle = "green";
    this.ctx.fillText(`The year is ${this.score}`, 680, 590);
  }

  checkGameOver() {
    const player = this.player;
    const crashedSpotify = this.spotify.some(function (spotify) {
      return player.colision(spotify);
    });
    const crashedCassette = this.cassette.some(function (cassette) {
      return player.colision(cassette);
    });
    const crashedIpod = this.ipod.some(function (ipod) {
      return player.colision(ipod);
    });
    if (crashedSpotify || crashedCassette || crashedIpod) {
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
        this.score += 10;
      });
    }
  }

  winningGame() {
    if (this.score >= 2022) {
      this.winGame();
    }
  }
}
