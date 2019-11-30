class Game {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.ctx = canvas.getContext('2d');
    this.enemy = new Enemy(this);
    this.missiles = new Missiles(this);
    this.payer = new Player(this);
  }

  start() {
    setInterval(() => {
      this.clear();
      this.payer.keyEvent();
      this.payer.draw();
      //   this.payer.getMouse();
      //   this.payer.moveWithMouse();
    }, 30);
  }
  clear() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}
