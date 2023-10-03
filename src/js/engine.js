
const squares = document.querySelectorAll('.square')
const alf = document.querySelector('.alf')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime  = 60
let timerId = null

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('alf')
    })
    
    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('alf')

    hitPosition = randomSquare.id
}

function playSound(audioName) {
    let audio = new Audio(`./src/audio/${audioName}.mp3`);
    audio.volume = 0.4;
    audio.play();
  }

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
      if (square.id == hitPosition) {
          result++
          score.textContent = result
          hitPosition = null
          playSound("ouch-rev");
      }  
    })
})

function moveAlf() {
    
    timerId = setInterval(randomSquare, 700)
}

moveAlf()

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('GAME OVER! Your final score is: ' + result)
    }
}

let countDownTimerId = setInterval(countDown, 1000)