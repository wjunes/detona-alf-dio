const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.alf')
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

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
      if (square.id == hitPosition) {
          result++
          score.textContent = result
          hitPosition = null
      }  
    })
})

function moveMole() {
    
    timerId = setInterval(randomSquare, 700)
}

moveMole()

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('GAME OVER! Your final score is' + result)
    }
}

let countDownTimerId = setInterval(countDown, 1000)