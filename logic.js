const choices = {
  rock: "rock",
  paper: "paper",
  scissors: "scissors",
};

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

// performs a round, prints and returns results
function performRound(playerChoice, computerChoice) {}

// performs a game of set rounds, prints results
function performGame() {}
