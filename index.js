// store values for possible game moves
const gameMoveSelection = ['Rock', 'Paper', 'Scissors'];

// initalized player and computer's score to use for final score report
let userScore = 0;
let computerScore = 0;

// get a random index for the computer to use for its move
function getRandomIndex(indexSize) {
    return Math.floor(Math.random() * indexSize);
}

// have the computer pick a move from the possible stored moves
function computerPlay() {
    return gameMoveSelection[getRandomIndex(gameMoveSelection.length)];
}

// display message if player win and increase score for player
function userWins(userPlay, computerPlay) {
    console.log(`You win! ${userPlay} beats ${computerPlay}.`);
    userScore++;
}

// display message if player loses and increase score for computer 
function userLoses(userPlay, computerPlay) {
    console.log(`You lose! ${computerPlay} beats ${userPlay}.`);
    computerScore++;
}

// take user input and computer input and compare them declare round winner
function playRound(userPlay, computerPlay) {
    userPlay = userPlay[0].toUpperCase() + userPlay.substr(1).toLowerCase();

    // display msg if there is a tie and return to game func
    if (userPlay == computerPlay) {
        console.log("This game was a tie. Try again.");
        return null;
    }

    // decide who wins and call appropriate func
    switch (userPlay) {
        case 'Paper':
            (computerPlay == "Rock") ?
            userWins(userPlay, computerPlay): userLoses(userPlay, computerPlay);
            break;
        case 'Rock':
            (computerPlay == "Scissors") ? userWins(userPlay, computerPlay) userLoses(userPlay, computerPlay);
            break;
        case 'Scissors':
            (computerPlay == "Paper") ? userWins(userPlay, computerPlay): userLoses(userPlay, computerPlay);
            break;
        default:
            console.log('Invalid selection! You mush choose Paper, Rock, or Scissors.')
    }
}

// play five rounds report final score at the end
function game() {
    userScore = 0;
    computerScore = 0;
    let userInput = '';
    let computerSelection = computerPlay();

    for (let i = 0; i < 5; i++) {
        userInput = prompt('Please choose Paper, Rock, or Scissors.', 'Enter your selection here');
        playRound(userInput, computerSelection);
        computerSelection = computerPlay();
    }
    // print if the user won or lost the 5 round challenge
    (userScore > computerScore) ? console.log("You won the 5 round challenge."): console.log("You lost the 5 round challenge.");

    console.log(`Game Over. Final Score: ${computerScore} Computer v ${userScore} You.`)
}

// start new game
game();