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

function playRound(playerChoice,computerChoice){
    const onlyLetters = /^[a-z]+$/i;
    //checking if the user input is a string 
    if(typeof computerChoice !== 'string' || typeof playerChoice !== 'string'){
        alert("That choice isn't in the game yet. Please type a string , Rock, Paper or Scissors.");
        throw new RangeError('Choices must be Rock, Paper or Scissors.');
    }
    //cheking if the user input in a valide string (only letters)
    if(!onlyLetters.test(computerChoice.trim()) || !onlyLetters.test(playerChoice.trim())){
    alert("That choice isn't in the game yet. Please type a string, Rock, Paper or Scissors.");
    throw new RangeError('Choices must be Rock, Paper or Scissors.');
    }
    //cheking if the user input in the valide choices
    const player = Object.keys(BEATS).find(move=> move.toLocaleLowerCase()===playerChoice.trim().toLocaleLowerCase());
    const computer = Object.keys(BEATS).find(move=> move.toLocaleLowerCase()===computerChoice.trim().toLocaleLowerCase());
    if(!player || !computer){
        alert('Choices must be Rock, Paper or Scissors.');
        throw new RangeError('Choices must be Rock, Paper or Scissors.');
    }
    //cheking how's thw winner 
    if(player === computer){
        alert(`A draw! You both picked ${player}. No points this round.`);
        return null;
    }else if(BEATS[player] === computer){
        return 'player';
    }else{
        return 'computer';
    }
};

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

        let playerSelection = prompt(
            "Your turn, champion!\n\nType one choice: rock, paper, or scissors.\nSelect OK to play, or Cancel to leave the tournament."
        );

        if (playerSelection === null) {
            alert("Tournament paused. Computer will be here if you want a rematch!");
            return;
        }

        playerSelection = playerSelection.trim().toLowerCase();

        if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
            alert("That choice isn't in the game yet. Please type rock, paper, or scissors.");
            continue;
        }

        const computerSelection = computerPlay();

        const results = playRound(playerSelection, computerSelection);

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
        // confetti();
        alert(`Congratulations! You defeated the computer`);
    } else {
        alert(`Game Over! The computer wins this time! The trophy is safe for now - challenge them to a rematch!`);
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