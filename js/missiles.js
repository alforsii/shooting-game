class Missiles extends Enemy {
  constructor(game, x, y, w, h, color) {
    super(game, x, y, w, h, color);
    this.vy = -Math.random() * 2;
  }

  updateMiss(enemy) {
    this.draw();
    for (let i = 0; i < enemy.length; i++) {
      enemy[i].y += this.vy;
      // if enemy[i] is going off the left of the screen
      if (enemy[i].y < 0) {
        // enemy[i].y = -this.height;
        this.game.genMissiles();
      }
    }
  }
}
