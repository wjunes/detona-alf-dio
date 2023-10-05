const gameOverModal = document.getElementById('gameOverModal');
const finalScore = document.getElementById('finalScore');
const restartButton = document.getElementById('restartButton');

// Cuando el juego termine, muestra el modal
function showGameOverModal() {
    finalScore.textContent = result;
    gameOverModal.style.display = 'block';
}

// Agrega un evento al botón de reinicio para comenzar un nuevo juego
restartButton.addEventListener('click', () => {
    location.reload();

});