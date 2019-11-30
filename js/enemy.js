class Enemy {
  constructor(game, x, y, w, h, color) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.color = color;
    // this.vx = Math.random();
    this.vy = undefined;
  }

  update(enemy) {
    this.drawEnemy();
    for (let i = 0; i < enemy.length; i++) {
      this.vy = Math.random() * 0.3;
      enemy[i].y += this.vy;
      //   enemy[i].x += Math.random();
      // if enemy[i] is going off the left of the screen
      if (enemy[i].y > this.game.canvas.height + this.height + 20) {
        // enemy[i].y = -this.height;
        this.game.generateEnemy();
      }
    }
  }

  drawEnemy() {
    this.game.ctx.fillStyle = this.color;
    this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.game.ctx.fill();
    // this.game.ctx.strokeStyle = this.color;
    // this.game.ctx.lineWidth = 10;
    // this.game.ctx.beginPath();
    // this.game.ctx.moveTo(this.x + 12, this.y);
    // this.game.ctx.lineTo(this.x + 12, this.y - 15);
    // this.game.ctx.stroke();
    // this.game.ctx.beginPath();
    // this.game.ctx.moveTo(this.x + 27, this.y);
    // this.game.ctx.lineTo(this.x + 27, this.y - 15);
    // this.game.ctx.stroke();
  }
}
