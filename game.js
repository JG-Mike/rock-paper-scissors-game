function computerPlay(){

    const computerSelection =  ["rock","paper", "scissors"]
    const random = computerSelection[(Math.random() * computerSelection.length) | 0]
    console.log (random)

};

