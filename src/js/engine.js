const squares = document.querySelectorAll('.square');
const alf = document.querySelector('.alf');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');
const lives = document.querySelector('#lives'); // Agregar referencia ao elemento de vidas

let result = 0;
let hitPosition;
let timerId = null;
let livesCount = 9; // Inicializar o contador de vidas

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('alf');
    });

    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add('alf');

    hitPosition = randomSquare.id;
}

function playSound(audioName) {
    let audio = new Audio(`./src/audio/${audioName}.mp3`);
    audio.volume = 0.4;
    audio.play();
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result++;
            score.textContent = result;
            hitPosition = null;
            playSound("ouch-rev");
        } else {
            // Se o jogador falha, tira uma vida
            livesCount--;
            lives.textContent = livesCount;

            // Se o contador de vidas chega em cero, mostra a mensagem de Game Over yereinicia o jogo
            if (livesCount === 0) {
                clearInterval(countDownTimerId);
                clearInterval(timerId);
                showGameOverModal();
                livesCount = 9; // Reiniciar o contador de vidas
                lives.textContent = livesCount;
                result = 0;
                score.textContent = result;
                currentTime = 60;
                timeLeft.textContent = currentTime;
                moveAlf(); // Comeca um novo jogo
            }
        }
    });
});

function moveAlf() {
    timerId = setInterval(randomSquare, 700);
}

moveAlf();

function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;

    if (currentTime == 0) {
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        showGameOverModal()
        livesCount = 9; // Reiniciar el contador de vidas
        lives.textContent = livesCount;
        result = 0;
        score.textContent = result;
        moveAlf(); // Comienza un nuevo juego
    }
}

let countDownTimerId = setInterval(countDown, 1000);
