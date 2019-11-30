window.addEventListener('load', () => {
  const newGame = new Game();

  function animate() {
    requestAnimationFrame(animate);
    newGame.start();
  }

  newGame.genMissiles(10);
  // console.log('Output for: newGame.missiles', newGame.missiles);
  newGame.generateEnemy();
  animate();
});
