
let roundWinner = ""
let playerScore = 0
let computerScore = 0

// code for random selector for the computer
function computerPlay(){

    const computerSelection =  ["rock","paper", "scissors"]
    const random = computerSelection[(Math.random() * computerSelection.length) | 0]
    console.log (random)

}

// code to select winner and count how many rounds each member has made
function playRound(playerChoice,computerChoice){
    if (playerChoice=== computerChoice){
        roundWinner = "tie"
    }
    if (
        (playerChoice==="rock" && computerChoice === "scissors" )||
        (playerChoice==="scissors" && computerChoice === "paper" )||
        (playerChoice==="paper" && computerChoice === "rock" )||
        ){
        playerScore++
        roundWinner = 'player'
    }
    if (
        (computerChoice==="rock" && playerChoice === "scissors" )||
        (computerChoice==="scissors" && playerChoice === "paper" )||
        (computerChoice==="paper" && playerChoice === "rock" )||
    ){
        computerScore++
        roundWinner= 'computer'
    }

}

// code for maximum round played by both computer and player
function gameOver(){
    return playerScore === 5 || computerScore === 5
}


