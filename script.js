function getComputerChoice() {
  let numberSelection = Math.random();
  if (numberSelection < 0.333) return "Rock";
  if (numberSelection < 0.666 > 0.333) return "Paper";
  if (numberSelection < 1 > 0.666) return "Scissors";
}

function getHumanChoice() {
  let userInput = prompt(
    (message = "Input your move here! (Accepted values : Rock, Paper, Scissors")
  );
  if (userInput.toLowerCase() === "rock") return "Rock";
  if (userInput.toLowerCase() === "paper") return "Paper";
  if (userInput.toLowerCase() === "scissors") return "Scissors";
  else
    return "Please input something normal ;-;";
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

}

console.log(getHumanChoice())