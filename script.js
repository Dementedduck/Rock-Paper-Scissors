function getComputerChoice() {
  let numberSelection = Math.random();
  if (numberSelection < 0.333) return "Rock";
  if (numberSelection < 0.666 && numberSelection >= 0.333) return "Paper";
  if (numberSelection < 1 > 0.666) return "Scissors";
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();
  if (humanChoice === computerChoice) {
    Results.textContent = "Draw!";
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    Results.textContent = "You lose! Rock is suffocated by paper.";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    Results.textContent = "You win! Rock destroys scissors.";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    Results.textContent = "You win! Rock is suffocated by paper.";
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    Results.textContent = "You lose! Paper is cut by scissors.";
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    Results.textContent = "You lose! Rock destroys scissors.";
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    Results.textContent = "You win! Paper is cut by scissors.";
  } else return "Pick something else jeez ;-;";
}

let humanScore = 0;
let computerScore = 0;

const Results = document.querySelector("#results");
const Rock = document.querySelector("#rock");
const Paper = document.querySelector("#paper");
const Scissors = document.querySelector("#scissors");
const Tally = document.querySelector("#tally");
const compTally = document.querySelector("#tallyTwo");
const whoWon = document.querySelector("#winner");

Rock.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  if (humanScore < 5 && computerScore < 5) {
    getComputerChoice();
    playRound("rock", computerSelection);
    Tally.textContent = "your score · " + humanScore;
    compTally.textContent = "Computer score · " + computerScore;
  } else if (humanScore === 5) {
    whoWon.textContent = "YOU WIN!!!!";
    whoWon.style.color = "green";
  } else if (computerScore === 5) {
    whoWon.textContent = "YOU LOSE :(";
    whoWon.style.color = "red";
  }
});

Paper.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  if (humanScore < 5 && computerScore < 5) {
    getComputerChoice();
    playRound("paper", computerSelection);
    Tally.textContent = "your score · " + humanScore;
    compTally.textContent = "Computer score · " + computerScore;
  } else if (humanScore === 5) {
    whoWon.textContent = "YOU WIN!!!!";
    whoWon.style.color = "green";
  } else if (computerScore === 5) {
    whoWon.textContent = "YOU LOSE :(";
    whoWon.style.color = "red";
  }
});

Scissors.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  if (humanScore < 5 && computerScore < 5) {
    getComputerChoice();
    playRound("scissors", computerSelection);
    Tally.textContent = "Your score · " + humanScore;
    compTally.textContent = "Computer score · " + computerScore;
  } else if (humanScore === 5) {
    whoWon.textContent = "YOU WIN!!!!";
    whoWon.style.color = "green";
  } else if (computerScore === 5) {
    whoWon.textContent = "YOU LOSE :(";
    whoWon.style.color = "red";
  }
});
