const choices = {
  rock: "rock",
  paper: "paper",
  scissors: "scissors",
};

let playerScore = 0;
let computerScore = 0;

// returns "rock", "paper", or "scissors"
function getComputerChoice() {
  const choice = Math.trunc(Math.random() * 3);
  return choices[choice];
}

// returns "rock", "paper", "scissors", or undefined
function getPlayerChoice(rawChoice) {
  rawChoice = rawChoice.trim().toLowerCase();
  return choices[rawChoice];
}

// performs a round, prints results and updates scores
function performRound(playerChoice, computerChoice) {
  // check if player choice is invalid
  if (playerChoice == null) {
    console.log(`${playerChoice} is an invalid move`);
    return;
  }

  // draw if equal
  if (playerChoice === computerChoice) {
    console.log(`Both selected ${playerChoice}\nDraw.`);
  }

  // rock beats scissors
  if (playerChoice === choices.rock) {
    if (computerChoice === choices.scissors) {
      console.log("Rock beats scissors.");
      addPlayerScore();
    } else {
      console.log("Rock loses against paper.");
      addComputerScore();
    }
  }
  // paper beats rock
  if (playerChoice === choices.paper) {
    if (computerChoice === choices.rock) {
      console.log("Paper beats rock.");
      addPlayerScore();
    } else {
      console.log("Paper loses against scissors.");
      addComputerScore();
    }
  }
  // scissors beats paper
  if (playerChoice === choices.scissors) {
    if (computerChoice === choices.paper) {
      console.log("Scissors beats paper.");
      addPlayerScore();
    } else {
      console.log("Scissors loses against rock.");
      addComputerScore();
    }
  }
}

function addPlayerScore() {
  console.log(`Player score: ${playerScore}(+1) = ${++playerScore}`);
}

function addComputerScore() {
  console.log(`Computer score: ${computerScore}(+1) = ${++computerScore}`);
}

// performs a game of set rounds, prints results
function performGame() {}
