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

