// store values for possible game moves for computer to select
const gameMoveSelection = ['Rock', 'Paper', 'Scissors'];

// initialized each players scores as a global
let computerScore = 0;
let userScore = 0;

// initialize max rounds and round counter
const MAX_ROUNDS = 5;
let roundCounter = 0;

// this prevents the final score from spawning more than once
let gameNeedsFinalScore = true;

// initialize an element to display the results at bottom of page
const container = document.querySelector('#container');
const roundResultsContainer = document.createElement('div');
const roundResultsText = document.createElement('div');
roundResultsContainer.classList.add('round-results');
roundResultsText.classList.add('round-results-text');
roundResultsContainer.append(roundResultsText);


// initialize paper rock scissor buttons
const buttons = container.querySelectorAll('button');
// make paper rock scissors buttons call playMultipleRounds
buttons.forEach((button) => {
    button.addEventListener('click', () => playMultipleRounds(button.id));
});


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
    roundResultsText.textContent = `You win! ${userPlay} beats ${computerPlay}.`;
    container.parentNode.append(roundResultsContainer);
    ++userScore;
}

// display message if player loses in an appended div
function userLoses(userPlay, computerPlay) {
    roundResultsText.textContent = `You lose! ${computerPlay} beats ${userPlay}.`;
    container.parentNode.append(roundResultsContainer);
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
    if (gameNeedsFinalScore) {
        // make reset button
        const resetButton = document.createElement('button');
        resetButton.id = 'reset-button';
        resetButton.textContent = 'Play Again?';
        resetButton.addEventListener('click', () => resetGame());

        // make final score message
        const finalScore = document.createElement('div');
        finalScore.id = 'final-score';
        finalScore.textContent = `Final Score: Computer-${computerScore} You-${userScore}`;

        // add both elements
        roundResultsContainer.append(finalScore);
        roundResultsContainer.append(resetButton);
    }
    gameNeedsFinalScore = false;
}


// remove final results at bottom then reset and start new game
function resetGame() {
    // reset all counters
    computerScore = 0;
    userScore = 0;
    roundCounter = 0;
    gameNeedsFinalScore = true;
    
    // remove round results and final score
    const container = document.querySelector('#container');
    const resetButton = document.getElementById('reset-button');
    const finalScore =  document.getElementById('final-score');
    container.parentNode.removeChild(roundResultsContainer);
    resetButton.remove();
    finalScore.remove();
}

// play number of rounds defined in MAX_ROUNDS then display final score on next call
function playMultipleRounds(paperRockScissorsButtons) {
    (roundCounter < MAX_ROUNDS) ? playRound(paperRockScissorsButtons, computerPlay()): displayFinalScore();
}


