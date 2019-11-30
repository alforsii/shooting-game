class Enemy {
  constructor(game, x, y, w, h, color) {
    this.game = game;
    this.id = Math.floor(Math.random() * 1000 + 1);
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.color = color;
    this.vx = Math.random() * 0.3;
    this.vy = Math.random() * 0.3;
  }

  update(enemy) {
    this.draw();
    for (let i = 0; i < enemy.length; i++) {
      enemy[i].y += this.vy;
      // if enemy[i] is going off the left of the screen
      if (enemy[i].y > this.game.canvas.height + this.height + 20) {
        // enemy[i].y = -this.height;
        this.game.generateEnemy();
      }
    }
  }

  draw() {
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

  // get the four side coordinates of the rectangle
  getDistance(x1, y1, x2, y2) {
    let xDistance = x2 - x1;
    let yDistance = y2 - y1;
    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
  }
}
