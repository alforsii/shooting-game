const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

class Game {
  constructor() {
    this.enemy = new Enemy(this);
    this.missiles = new Missiles(this);
    this.payer = new Player(this);
  }

  start() {
    this.payer.draw();
  }
}
