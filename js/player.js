class Player {
  constructor(game) {
    this.game = game;
    this.width = 30;
    this.height = 40;
    this.x = canvas.width / 2;
    this.y = canvas.height - this.height - 3;
    this.color = 'blue';
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.fill();
  }
}
