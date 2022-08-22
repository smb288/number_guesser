let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function updateScore(guessWinner) {
  if(guessWinner === 'human') {
    humanScore++;
  }
  else if(guessWinner === 'computer') {
    computerScore++;
  }
}

function advanceRound() {
  currentRoundNumber++;
}
