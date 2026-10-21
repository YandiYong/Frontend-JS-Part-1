const BEATS = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
};

const WINNING_SCORE= 3;

function game() {

    let playerScore = 0;
    let computerScore = 0;

    alert(`Welcome to the game of Rock Paper & Scissors.\n
    HOW TO PLAY:
    1. You will play against a Computer.
    2. Choose rock, paper or scissors.
    3. The first to win 3 rounds wins!
    4. Click Cancel to exit the game.

        Press OK to begin.`);

    while (playerScore < WINNING_SCORE && computerScore < WINNING_SCORE) {

        let playerSelection = prompt(`Choose rock, paper or scissors:`);

        if (playerSelection === null) {
            alert(`Game cancelled`);
            return;
        }

        playerSelection = playerSelection.trim().toLowerCase();

        if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
            alert(`Invalid choice. Please choose rock, paper or scissors`);
            continue;
        }

        const computerSelection = computerPlay();

        const results = playRound(playerSelection, computerSelection);

        
        if (results === "player") {
            playerScore++;
        } else if (results === "computer") {
            computerScore++;
        }
        alert(`ROUND RESULT
    
        You chose: ${playerSelection}
        Computer chose: ${computerSelection}
    
        Winner: ${results}
    
        Your score: ${playerScore}
        Computer score: ${computerScore}`);

    }

    if (playerScore === WINNING_SCORE) {
        alert(`Congratulations! You defeated the computer`);
    } else {
        alert(`Game Over! The computer defeated you!`);
    }
}