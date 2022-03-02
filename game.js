let playerScore = 0  
let computerScore = 0  
let roundWinner = ''

// rules of the game
function playRound (playerSelection,computerSelection){
    if (playerSelection===computerSelection) {
        roundWinner = "tie"
    }
    if (
        playerSelection=== "rock" && computerSelection==="scissors"||
        playerSelection=== "scissors" && computerSelection==="paper"||
        playerSelection=== "paper" && computerSelection==="rock"
    ){
        playerScore ++
        roundWinner ="player"
    }
    if (
        computerSelection === "rock"&& playerSelection ==="scissors"||
        computerSelection === "scissors"&& playerSelection ==="paper"||
        computerSelection === "scissors"&& playerSelection ==="rock"||
    )
         {
        computerScore ++
        roundWinner = "computer"
    }
    updateScoreMessage(roundWinner,playerScore,computerScore)

}

function getRandomChoice(){
    let randomNumber = Math.floor(Math.random()*3)
    switch(randomNumber){
        case 0:
            return 'rock'
            case 1:
                return ' paper'
                case 2 :
                    return ' scissors'

    }
}

function gameOver (){
    return playerScore === 5 || computerScore === 5
}

// UI

const scoreInfo = document.getElementById('scoreInfo')
const scoreMessage = document.getElementById('scoreMessage')
const playerScorePara = document.getElementById('playerScore')
const computerScorePara = document.getElementById('computerScore')
const playerSign = document.getElementById('playerSign')
const computerSign = document.getElementById('computerSign')
const rockBtn = document.getElementById('rockBtn')
const paperBtn = document.getElementById('paperBtn')
const scissorsBtn = document.getElementById('scissorsBtn')
const endgameModal = document.getElementById('endgameModal')
const endgameMsg = document.getElementById('endgameMsg')
const overlay = document.getElementById('overlay')
const restartBtn = document.getElementById('restartBtn')