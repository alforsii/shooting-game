window.addEventListener('load', () => {
  const newGame = new Game();

  function animate() {
    requestAnimationFrame(animate);
    newGame.start();
  }

  newGame.genMissiles();
  console.log('Output for: newGame.enemies', newGame.enemies);
  console.log('Output for: newGame.missiles', newGame.missiles);
  newGame.generateEnemy();
  animate();
});
