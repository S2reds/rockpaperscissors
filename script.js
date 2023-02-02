let getComputerChoice = () => {
    let random = Math.floor(Math.random() * 3) + 1;
    if (random === 1) return 'Rock'
    else if (random === 2) return 'Paper'
    else return 'Scissors'
}

function playRound(player, comp) { 
    if (player.toLowerCase() === 'rock' && comp.toLowerCase() === 'paper') return 'You Lose, Paper beats Rock';
    else if (player.toLowerCase() === 'rock' && comp.toLowerCase() === 'scissors') return 'You Win, Rock beats Scissors';
    else if (player.toLowerCase() === 'paper' && comp.toLowerCase() === 'rock') return 'You Win, Paper beats Rock';
    else if (player.toLowerCase() === 'paper' && comp.toLowerCase() === 'scissors') return 'You Lose, Scissors beats Paper';
    else if (player.toLowerCase() === 'scissors' && comp.toLowerCase() === 'rock') return 'You Lose, Rock beats Scissors';
    else if (player.toLowerCase() === 'scissors' && comp.toLowerCase() === 'paper') return 'You Win, Scissors beats Paper';
    else return 'Tie Game';
}

//scores and selectors
let userScore = 0;
let compScore = 0;
let updateScore = document.querySelector('#update')
let results = document.querySelector('#result')
let round = document.querySelector('#round')
let restart = document.querySelector('#restart')
let replay = document.querySelector('#results')
let replay1 = document.querySelector('.restart')
let btns = document.querySelectorAll('.button');
replay1.style.visibility = 'hidden'

//replay button
replay1.addEventListener('click', game);

//btn events 
btns.forEach(btn => {
    btn.addEventListener('click', event => {
        let eTarget = event.target.id
        let compGuess = getComputerChoice()
        let game = playRound(eTarget, compGuess)
        let split = game.split(",")
        if (split[0] === "You Win") userScore++
        else if (split[0] === "You Lose") compScore++ 
        round.textContent = `${game}`
        updateScore.textContent = `Your Score is: ${userScore} and Comp: ${compScore}`
        if (userScore === 5) {
            btns.forEach(b => b.removeEventListener)
            results.textContent = 'You win!'
            btns.forEach(b => b.disabled = true)
            replay1.style.visibility = 'visible';         
        } else if (compScore === 5) {
            btns.forEach(b => b.removeEventListener)
            results.textContent = 'You lose!'
            btns.forEach(b => b.disabled = true)
            replay1.style.visibility = 'visible';
        }
    });    
});


function game() {
    userScore = 0;
    compScore = 0;
    updateScore.textContent = ''
    replay1.style.visibility = 'hidden'
    round.textContent = ''
    results.textContent = ''
    btns.forEach(b => b.disabled = false)
}

game();
