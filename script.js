let getComputerChoice = () => {
    let random = Math.floor(Math.random() * 3) + 1;
    if (random === 1) return 'Rock'
    else if (random === 2) return 'Paper'
    else return 'Scissors'
}

let playRound = (player, comp) => {
    if (player.toLowerCase() === 'rock' && comp.toLowerCase() === 'paper') return 'You Lose, Paper beats Rock';
    else if (player.toLowerCase() === 'rock' && comp.toLowerCase() === 'scissors') return 'You Win, Rock beats Scissors';
    else if (player.toLowerCase() === 'paper' && comp.toLowerCase() === 'rock') return 'You Win, Paper beats Rock';
    else if (player.toLowerCase() === 'paper' && comp.toLowerCase() === 'scissors') return 'You Lose, Scissors beats Paper';
    else if (player.toLowerCase() === 'scissors' && comp.toLowerCase() === 'rock') return 'You Lose, Rock beats Scissors';
    else if (player.toLowerCase() === 'scissors' && comp.toLowerCase() === 'paper') return 'You Win, Scissors beats Paper';
    else return 'Tie Game';
}

function game() {
    let userScore = 0;
    let compScore = 0;
    for (let i = 0; i < 5; i++) {
        let userGuess = prompt("Rock, paper, or scissors?")
        let compGuess = getComputerChoice();
        let game = playRound(userGuess, compGuess);
        let split = game.split(",")
        if (split[0] === "You Win") ++userScore
        else if (split[0] === "You Lose") ++compScore 
        console.log(`Score is Player: ${userScore} and Comp: ${compScore}`)
    }
}

game()
