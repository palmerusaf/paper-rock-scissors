// store values for possible game moves
const gameMoveSelection = ['Rock', 'Paper', 'Scissors'];

// setup buttons to get user input and pass it into the game
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {

    // and for each one add a 'click' listener
    button.addEventListener('click', () => {
        game(button.id);
    });
});

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
    alert(`win user:${userPlay} computer:${computerPlay}`);
}

// display message if player loses and increase score for computer 
function userLoses(userPlay, computerPlay) {
    alert(`lose user:${userPlay} computer:${computerPlay}`);
}

// take user input and computer input and compare them declare round winner
function playRound(userSelection, computerSelection) {

    // display msg if there is a tie and get input again
    while (userSelection == computerSelection) {
        computerSelection = computerPlay();
        alert('thai');
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

// play single round
function game(userSelection) {
    let computerSelection = computerPlay();
    playRound(userSelection, computerSelection);
}