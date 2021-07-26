// store values for possible game moves
const gameMoveSelection = ['Rock', 'Paper', 'Scissors'];

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
    // TO-DO return button ids
}

// display message if player win and increase score for player
function userWins(userPlay, computerPlay) {
// TO-DO return winner msg
}

// display message if player loses and increase score for computer 
function userLoses(userPlay, computerPlay) {
// TO-DO return loser msg
}

// take user input and computer input and compare them declare round winner
function playRound(userSelection, computerSelection) {

    // display msg if there is a tie and get input again
    while (userSelection == computerSelection) {
        // TO-DO send tie message to user
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

// TO-DO maybe delete? or refactor?
function game() {
    let computerSelection = computerPlay();
}

// start new game
game();

//below is and example of how you can attach event listeners to each button

{
    /* < div id = "container" >
        <
        button id = "1" > Click Me < /button> <
        button id = "2" > Click Me < /button> <
        button id = "3" > Click Me < /button> <
        /div> */
}


// // buttons is a node list. It looks and acts much like an array.
// const buttons = document.querySelectorAll('button');

// // we use the .forEach method to iterate through each button
// buttons.forEach((button) => {

//     // and for each one we add a 'click' listener
//     button.addEventListener('click', () => {
//         alert(button.id);
//     });
// });