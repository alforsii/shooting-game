window.addEventListener('load', () => {
  const newGame = new Game();

  function animate() {
    requestAnimationFrame(animate);
    newGame.start();
  }
  newGame.generateEnemy();
  animate();
});
