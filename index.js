// store values for possible game moves for computer to select
const gameMoveSelection = ['Rock', 'Paper', 'Scissors'];

// initialized each players scores as a global
let computerScore = 0;
let userScore = 0;

// initialize max rounds and round counter
const MAX_ROUNDS = 5;
let roundCounter = 0;

// setup buttons to get user input and pass it into the game
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {

    // and for each one add a 'click' listener
    button.addEventListener('click', () => {
        game(button.id);
    });
});

// initialize an element to display the results at bottom of page
const container = document.querySelector('#container');
const roundResults = document.createElement('div');
roundResults.classList.add('round-results');

// get a random index for the computer to use for its move
function getRandomIndex(indexSize) {
    return Math.floor(Math.random() * indexSize);
}

// have the computer pick a move from the possible stored moves
function computerPlay() {
    return gameMoveSelection[getRandomIndex(gameMoveSelection.length)];
}

// display message if player wins in an appended div
function userWins(userPlay, computerPlay) {
    roundResults.textContent = `You win! ${userPlay} beats ${computerPlay}.`;
    container.append(roundResults);
    ++userScore;
}

// display message if player loses in an appended div
function userLoses(userPlay, computerPlay) {
    roundResults.textContent = `You lose! ${computerPlay} beats ${userPlay}.`;
    container.append(roundResults);
    ++computerScore;
}

// take user input and computer input and compare them declare round winner
function playRound(userSelection, computerSelection) {

    // display msg if there is a tie and get input again
    while (userSelection == computerSelection) {
        computerSelection = computerPlay();
    }

    roundCounter++;

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

// add div at bottom displaying final results after 5 rounds
function displayFinalScore() {
    // make reset button
    const resetButton = document.createElement('button');
    resetButton.classList.add('reset-button');
    resetButton.textContent = 'Play Again?';
    // make final score message
    const finalScore = document.createElement('div');
    finalScore.classList.add('final-score');
    finalScore.textContent = 'final score';
    // add both elements
    roundResults.append(finalScore);
    roundResults.append(resetButton);
}

// remove final results at bottom to reset game
function resetFinalScore() {
    computerScore = 0;
    userScore = 0;
    roundCounter = 0;
}

// play five rounds
function game(userSelection) {
    if (roundCounter < MAX_ROUNDS) {
        let computerSelection = computerPlay();
        playRound(userSelection, computerSelection);
    } else
        displayFinalScore();
}