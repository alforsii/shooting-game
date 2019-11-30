class Game {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.ctx = canvas.getContext('2d');
    // this.enemy = new Enemy(this);
    // this.missiles = new Missiles();
    this.player = new Player(this);
    this.enemies = [];
    this.missiles = [];
    this.numberOfEnemies = 5;
    this.missNum = 10;
  }

  start() {
    this.player.keyEvent();
    this.clear();
    this.player.draw();
    this.enemies.forEach(enemy => {
      enemy.update(this.enemies);
    });
    this.missiles.forEach(missile => {
      missile.updateMiss(this.missiles);
    });
  }
  clear() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  generateEnemy() {
    this.enemies = [];
    for (let i = 0; i < this.numberOfEnemies; i++) {
      let x = Math.floor(Math.random() * (this.canvas.width - 10) + 10);
      let y = -30;

      this.enemies.push(new Enemy(this, x, y, 40, 30, 'red'));
    }
  }

  genMissiles() {
    this.missiles = [];
    let missArr = [this.player.x + 9, this.player.x + 23];
    for (let i = 0; i < this.missNum; i++) {
      let x = missArr[Math.floor(Math.random() * missArr.length)];
      let y = this.player.y - 15;
      this.missiles.push(new Missiles(this, x, y, 7, 7, 'green'));
    }
  }
}
