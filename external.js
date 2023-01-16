// create array of "weapons"
const possibleSelections = ["rock" , "paper" , "scissors"];
//starting game values
let playerScore = 0;
let computerScore = 0;

            //create the if statements for the game 
function playRound(playerSelection, computerSelection) {
        
        // create function for random choice of move
        function getComputerChoice() {
            computerSelection = possibleSelections[Math.floor(Math.random() * possibleSelections.length)];
            return(computerSelection);
            }

            //player input
        let playerinput = prompt("Rock,Paper, Scissors?")
            //make both choices lower case for log
            playerSelection = playerinput.toLowerCase();
            getComputerChoice();

            //to make sure results change
            console.log(playerSelection);
            console.log(computerSelection);

            //tie
            if (playerSelection == computerSelection) {
            console.log(`This is a tie ${playerSelection} was chosen by both sides`) }
            //player win
            else if (
                (playerSelection == 'rock' && computerSelection == 'scissors') || 
                (playerSelection == 'paper' && computerSelection == 'rock') || 
                (playerSelection == 'scissors' && computerSelection == 'paper') )  
                {
            // add to player score       
            playerScore = ++playerScore;
            console.log(`${playerSelection} beats ${computerSelection} - Player wins -> Player ${playerScore} - Computer ${computerScore}`) 
                    
                }
            //computer win
            else if (
                (playerSelection == 'rock' && computerSelection == 'paper') ||
                (playerSelection == 'paper' && computerSelection == 'scissors') ||
                (playerSelection == 'scissors' && computerSelection == 'rock') )
                {
            // add to computer score
            computerScore = ++computerScore;
            console.log(`${computerSelection} beats ${playerSelection} - Computer wins -> Player ${playerScore} - Computer ${computerScore}`);
            // return(`Player ${playerScore} - Computer ${computerScore}`);
                }
            
            

            


            // else if (playerSelection == "Paper" && computerSelection == "Scissors")
            
            }
function game() {

    //reset scores when recalled()

    //loop for 5 games
    for (let i = 0; i < 5; i++ ) {
        playRound();
    }

    let choice = prompt("play again?");
        if (choice == "yes") {
            playerScore = 0;
            computerScore = 0;
            game(); }
        else {
        console.log("no");
    }
}

