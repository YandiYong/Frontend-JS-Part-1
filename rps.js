const BEATS = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
};
const WINNING_SCORE= 3;


function computerPlay() {
    const rpsChoices = ["rock", "paper", "scissors"];

    const randomNumber = Math.floor(Math.random() * rpsChoices.length);

    return rpsChoices[randomNumber];
}

const playerChoice = () => {
    const onlyLetters = /^[a-z]+$/i;

    while (true) {
        const choice = prompt(
            "Your turn, champion!\n\nType one choice: rock, paper, or scissors.\nSelect OK to play, or Cancel to leave the tournament."
        );

        if (choice === null) return null;

        const normalized = choice.trim().toLowerCase();

        if (!onlyLetters.test(normalized)) {
            alert("That choice isn't in the game yet. Please type rock, paper, or scissors.");
            continue;
        }

        if (!["rock", "paper", "scissors"].includes(normalized)) {
            alert("Choices must be Rock, Paper or Scissors.");
            continue;
        }

        return normalized;
    }
};


function playRound(playerChoice,computerChoice){
    if(playerChoice === computerChoice){
        alert(`A draw! You both picked ${playerChoice}. No points this round.`);
        return null;
    }else if(BEATS[playerChoice] === computerChoice){
        return 'player';
    }else{
        return 'computer';
    }
};


function game() {

    let playerScore = 0;
    let computerScore = 0;

    alert(`Welcome to the game of Rock Paper & Scissors.\n
    HOW TO PLAY:🎮
    1. You will play against a Computer.
    2. Choose rock, paper or scissors.
    3. The first to win 3 rounds wins!
    4. Click Cancel to exit the game.

        Press OK to begin.`);

    while (playerScore < WINNING_SCORE && computerScore < WINNING_SCORE) {

        let playerSelection = playerChoice();
        
        if (playerSelection === null) {
            alert("Tournament cancelled. Computer will be here if you want to play!");
            return;
        }

        let computerSelection = computerPlay();

        let results = playRound(playerSelection, computerSelection);

        if(results === null){
            alert(`ROUND RESULT
            You chose: ${playerSelection}
            Computer chose: ${computerSelection}
        
            there is no winner in this round!
        
            Your score: ${playerScore}
            Computer score: ${computerScore}`);
        }else{
            if (results === "player") {
            playerScore++;
            } else if (results === "computer") {
                computerScore++;
            }
            alert(`ROUND RESULT
            You chose: ${playerSelection}
            Computer chose: ${computerSelection}
        
            Winner in this round : ${results}
        
            Your score: ${playerScore}
            Computer score: ${computerScore}`);
        }
    }

    if (playerScore === WINNING_SCORE) {
        alert(`🏆Congratulations! You defeated the computer.🎉🎉`);
    } else {
        alert(`Game Over! The computer 🤖 wins this time! The trophy is safe for now - challenge them to a rematch!`);
    }
}

function newGame(){
    let playAgain = true;

    while(playAgain){
        game();
        playAgain = confirm(`Would you like to play again?`);
    }
    alert(`Thanks for playing`);
}
newGame();
