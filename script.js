
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
      console.log ("Draw!");
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      computerScore++;
      console.log ("You lose! Rock is suffocated by paper.");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      humanScore++;
      console.log ("You win! Rock destroys scissors.");
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore++;
      console.log ("You win! Rock is suffocated by paper.");
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      computerScore++;
      console.log ("You lose! Paper is cut by scissors.");
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      computerScore++;
      console.log ("You lose! Rock destroys scissors.");
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      humanScore++;
      console.log ("You win! Paper is cut by scissors.");
    }  
    else return "Pick something else jeez ;-;";
  }


  
  let humanScore = 0;
  let computerScore = 0;
  while (humanScore < 5 && computerScore < 5) {
   let humanSelection = prompt(
    "Input your move here! (Accepted values : Rock, Paper, Scissors)"
  );

  const computerSelection = getComputerChoice();
  if (humanSelection === null || humanSelection === "") {
    alert("Type something !!!!!")
    continue;
  }

  playRound(humanSelection, computerSelection)
  console.log("your score · " + humanScore + " XX " + computerScore + " · computer score")
  }

   
  
  
  
  
 




