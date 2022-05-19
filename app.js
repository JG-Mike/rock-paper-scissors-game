// linking javascript code to html to play game
const scoreInfo = document.getElementById('scoreInfo')
const scoreMessage = document.getElementById('scoreMessage')
const playerScorePara = document.getElementById('playScore')
const computerScorePara = document.getElementById('computerScore')
const rockBtn = document.getElementById('rockBtn')
const paperBtn = document.getElementById('paperBtn')
const scissorsBtn = document.getElementById('scissorsBtn')
const playerSign = document.getElementById('playersign')
const computerSign = document.getElementById('computerSign')
const endgameModal = document.getElementById('endgameModal')
const endgameMsg = document.getElementById('endgameMsg')
const overlay = document.getElementById('overlay')
const restartBtn = document.getElementById('restartBtn')



rockBtn.addEventListener('click', () => handleClick('rock'))
paperBtn.addEventListener('click', () => handleClick('paper'))
scissorsBtn.addEventListener('click', () => handleClick('scissors'))
restartBtn.addEventListener('click', restartGame)
overlay.addEventListener('click', closeEndgameModal)

function handleClick(playerChoice) {
  if (gameOver()) {
    openEndgameModal()
    return
  }

  playRound(playerChoice, computerChoice)
  updateChoices(playerChoice, computerChoice)
  updateScore()

  if (gameOver()) {
    openEndgameModal()
    setFinalMessage()
  }
}


let roundWinner = ""
let playerScore = 0
let computerScore = 0

// code for random selector for the computer
function computerPlay(){

    const computerOptions =  ["rock","paper", "scissors"]
    const random = computerOptions[(Math.random() * computerOptions.length) | 0]
    console.log (random)
}

 const computerChoice = computerPlay()

// code to select winner and count how many rounds each party has made
function playRound(playerChoice,computerChoice){
    if (playerChoice === computerChoice){
        roundWinner = "tie"
    }
    if (
        (playerChoice === "rock" && computerChoice === "scissors" )||
        (playerChoice === "scissors" && computerChoice === "paper" )||
        (playerChoice === "paper" && computerChoice === "rock" )
    );{
        playerScore++
        roundWinner = 'player'
    }
    if (
        (computerChoice === "rock" && playerChoice === "scissors" )||
        (computerChoice === "scissors" && playerChoice === "paper" )||
        (computerChoice === "paper" && playerChoice === "rock" )
    ){
        computerScore++
        roundWinner = 'computer'
    }

   
}

// code for maximum round played by both computer and player
function gameOver(){
    return playerScore === 5 || computerScore === 5
}


// Code for displaying each choice the player and computer have selected
function updateChoices(playerChoice, computerChoice) {
  switch (playerChoice) {
    case 'rock':
      playerSign.textContent = '✊'
      break
    case 'paper':
      playerSign.textContent = '✋'
      break
    case 'scissors':
      playerSign.textContent = '✌'
      break
  }

  switch (computerChoice) {
    case 'rock':
      computerSign.textContent = '✊'
      break
    case 'paper':
      computerSign.textContent = '✋'
      break
    case 'scissors':
      computerSign.textContent = '✌'
      break
  }
}

// code for announcing winners of each round and updating the score board
function updateScore() {
  if (roundWinner === 'tie') {
    scoreInfo.textContent = "It's a tie!"
  } else if (roundWinner === 'player') {
    scoreInfo.textContent = 'You won!'
  } else if (roundWinner === 'computer') {
    scoreInfo.textContent = 'You lost!'
  }
 playerScorePara.textContent = `Player: ${playerScore}`
  computerScorePara.textContent = `Computer: ${computerScore}`
}

function openEndgameModal() {
  endgameModal.classList.add('active')
  overlay.classList.add('active')
}

function closeEndgameModal() {
  endgameModal.classList.remove('active')
  overlay.classList.remove('active')
}

function setFinalMessage() {
  return playerScore > computerScore
    ? (endgameMsg.textContent = 'You won!')
    : (endgameMsg.textContent = 'You lost...')
}

function restartGame() {
  playerScore = 0
  computerScore = 0
  scoreInfo.textContent = 'Choose your weapon'
  scoreMessage.textContent = 'First to score 5 points wins the game'
  playerScorePara.textContent = 'Player: 0'
  computerScorePara.textContent = 'Computer: 0'
  playerSign.textContent = '❔'
  computerSign.textContent = '❔'
  endgameModal.classList.remove('active')
  overlay.classList.remove('active')
}



