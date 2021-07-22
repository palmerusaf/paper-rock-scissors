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

// get user input handle unusable input and prompt again
function getUserInput() {
    let userChoice = prompt('Please choose Paper, Rock, or Scissors.');

    if (userChoice.length > 3)
        userChoice = userChoice[0].toUpperCase() + userChoice.substr(1).toLowerCase();

    if (userChoice == 'Rock' || userChoice == 'Paper' || userChoice == 'Scissors') {
        return userChoice;
    } else {
        console.log('Invalid selection!');
        getUserInput();
    }
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
function playRound(userSelection, computerSelection) {

    // display msg if there is a tie and get input again
    while (userSelection == computerSelection) {
        console.log("This game was a tie. Try again.");
        getUserInput();
        computerSelection = computerPlay();
    }

    // decide who wins and call appropriate func
    switch (userSelection) {
        case 'Paper':
            (computerSelection == "Rock") ?
            userWins(userSelection, computerSelection): userLoses(userSelection, computerSelection);
            break;
        case 'Rock':
            (computerSelection == "Scissors") ? userWins(userSelection, computerSelection): userLoses(userSelection, computerSelection);
            break;
        case 'Scissors':
            (computerSelection == "Paper") ? userWins(userSelection, computerSelection): userLoses(userSelection, computerSelection);
            break;
    }
}

// play five rounds report final score at the end
function game() {
    userScore = 0;
    computerScore = 0;
    let userSelection = '';
    let computerSelection = computerPlay();

    for (let i = 0; i < 5; i++) {
        userSelection = getUserInput();
        playRound(userSelection, computerSelection);
        computerSelection = computerPlay();
    }
    // print if the user won or lost the 5 round challenge
    (userScore > computerScore) ? console.log("You won the 5 round challenge."): console.log("You lost the 5 round challenge.");

    console.log(`Game Over. Final Score: ${computerScore} Computer v ${userScore} You.`)
}

// start new game
game();