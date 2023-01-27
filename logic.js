const choices = {
  rock: "rock",
  paper: "paper",
  scissors: "scissors",
};

let playerScore = 0;
let computerScore = 0;

let roundCount = 1;
const totalRounds = 5;

const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");

const roundText = document.querySelector("#round-text");
const resultText = document.querySelector("#result-text");
const playerScoreText = document.querySelector("#player-score");
const computerScoreText = document.querySelector("#computer-score");

roundText.textContent = `Round ${roundCount}`;

rockBtn.addEventListener("click", () => {
  performRound(choices.rock, getComputerChoice());
});
paperBtn.addEventListener("click", () => {
  performRound(choices.paper, getComputerChoice());
});
scissorsBtn.addEventListener("click", () => {
  performRound(choices.scissors, getComputerChoice());
});

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
  // disable buttons if game is over
  if (roundCount === totalRounds) {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;

    roundText.textContent = returnWinnerText();

    return;
  }

  // update round count
  ++roundCount;
  roundText.textContent = `Round ${roundCount}`;

  // draw if equal
  if (playerChoice === computerChoice) {
    resultText.textContent = `Both selected ${playerChoice}.\nDraw.`;
    showCurrentScore();
    return;
  }

  // rock beats scissors
  if (playerChoice === choices.rock) {
    if (computerChoice === choices.scissors) {
      resultText.textContent = "Rock beats scissors.";
      addPlayerScore();
    } else {
      resultText.textContent = "Rock loses against paper.";
      addComputerScore();
    }
  }
  // paper beats rock
  if (playerChoice === choices.paper) {
    if (computerChoice === choices.rock) {
      resultText.textContent = "Paper beats rock.";
      addPlayerScore();
    } else {
      resultText.textContent = "Paper loses against scissors.";
      addComputerScore();
    }
  }
  // scissors beats paper
  if (playerChoice === choices.scissors) {
    if (computerChoice === choices.paper) {
      resultText.textContent = "Scissors beats paper.";
      addPlayerScore();
    } else {
      resultText.textContent = "Scissors loses against rock.";
      addComputerScore();
    }
  }
}

function showCurrentScore() {
  playerScoreText.textContent = `${playerScore}`;
  computerScoreText.textContent = `${computerScore}`;
}

function addPlayerScore() {
  console.log(
    `Player score: ${playerScore}(+1) = ${++playerScore}\nComputer score: ${computerScore}`
  );
  playerScoreText.textContent = `${playerScore}(+1)`;
  computerScoreText.textContent = `${computerScore}`;
}

function addComputerScore() {
  console.log(
    `Player score: ${playerScore}\nComputer score: ${computerScore}(+1) = ${++computerScore}`
  );
  playerScoreText.textContent = `${playerScore}`;
  computerScoreText.textContent = `${computerScore}(+1)`;
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

function returnWinnerText() {
  if (playerScore === computerScore) return "Draw.";
  else if (playerScore > computerScore) return "Player wins.";
  else return "Computer wins.";
}
