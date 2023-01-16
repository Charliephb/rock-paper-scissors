// create array of "weapons"
const possibleSelections = ["Rock" , "Paper" , "Scissors"];

// create function for random choice of move
function getComputerChoice() {
    computerSelection = possibleSelections[Math.floor(Math.random() * possibleSelections.length)];
    return(computerSelection);
}

//create the if statements for the game 

