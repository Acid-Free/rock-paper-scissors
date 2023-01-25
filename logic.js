const choices = {
  rock: "rock",
  paper: "paper",
  scissors: "scissors",
};

let playerScore = 0;
let computerScore = 0;

const roundCount = 5;

// returns "rock", "paper", or "scissors"
function getComputerChoice() {
  const choice = Math.trunc(Math.random() * 3);
  switch (choice) {
    case 0:
      return choices.rock;
    case 1:
      return choices.paper;
    case 2:
      return choices.scissors;
  }
}

// returns "rock", "paper", "scissors", or undefined
function getPlayerChoice(rawChoice) {
  rawChoice = rawChoice.trim().toLowerCase();
  return choices[rawChoice];
}

// performs a round, prints results and updates scores
function performRound(playerChoice, computerChoice) {
  // draw if equal
  if (playerChoice === computerChoice) {
    console.log(`Both selected ${playerChoice}\nDraw.`);
    return;
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
  console.log(
    `Player score: ${playerScore}(+1) = ${++playerScore}\nComputer score: ${computerScore}`
  );
}

function addComputerScore() {
  console.log(
    `Player score: ${playerScore}\nComputer score: ${computerScore}(+1) = ${++computerScore}`
  );
}

function resetScore() {
  playerScore = 0;
  computerScore = 0;
}

// performs a game of set rounds, prints results
function performGame() {
  let round = 1;
  while (round <= 5) {
    const playerChoice = getPlayerChoice(
      prompt(`Round ${round}\nRock, paper or scissors?`)
    );

    if (playerChoice == null) {
      console.log(`${playerChoice} is an invalid move.`);
      continue;
    }

    let computerChoice = getComputerChoice();

    performRound(playerChoice, computerChoice);

    ++round;
  }

  printWinner();
}

function printWinner() {
  if (playerScore === computerScore) console.log("Judgement: Draw");
  else if (playerScore > computerScore) console.log("Judgement: Player wins.");
  else console.log("Judgement: Computer wins.");
}
