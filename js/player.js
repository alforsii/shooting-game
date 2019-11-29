class Player {
  constructor(game) {
    this.game = game;
    this.width = 30;
    this.height = 40;
    this.x = canvas.width / 2;
    this.y = canvas.height - this.height - 3;
    this.color = 'blue';
    this.speed = 5;
    this.mouse = { x: canvas.width / 2, y: canvas.height - this.height - 3 };
  }

  draw() {
    this.game.ctx.fillStyle = this.color;
    this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.game.ctx.fill();
  }
  move() {
    document.addEventListener('keydown', event => {
      let key = event.keyCode;
      event.preventDefault();
      if (key === 37) this.x -= this.speed;
      if (key === 39) this.x += this.speed;
      if (this.x < 0) {
        this.x = 0;
      }
      if (this.x + this.width > this.game.canvas.width) {
        this.x = this.game.canvas.width - this.width;
      }
    });
    document.addEventListener('keyup', event => {});
  }
  moveWithMouse() {
    this.x = this.mouse.x;
    this.y = this.mouse.y;
  }

  getMouse() {
    document.addEventListener('mousemove', event => {
      this.mouse.x = event.clientX;
      //   this.mouse.y = event.clientY;
      if (this.x + this.width < 0) {
        this.mouse.x = 0;
      }
      if (this.x + this.width > this.game.canvas.width) {
        this.mouse.x = this.game.canvas.width - this.width - 5;
      }
    });
  }
}
