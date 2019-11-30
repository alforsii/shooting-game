class Game {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.ctx = canvas.getContext('2d');
    // this.enemy = new Enemy(this);
    this.missiles = new Missiles();
    this.payer = new Player(this);
    this.enemies = [];
    this.numberOfEnemies = 5;
  }

  start() {
    this.payer.keyEvent();
    this.clear();
    this.payer.draw();
    this.enemies.forEach(enemy => {
      enemy.update();
    });
  }
  clear() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  generateEnemy() {
    this.enemies = [];
    for (let i = 0; i < this.numberOfEnemies; i++) {
      let x = Math.floor(Math.random() * (this.canvas.width - 10) + 10);
      let y = 10;

      this.enemies.push(new Enemy(this, x, y, 40, 30));
    }
  }
}
