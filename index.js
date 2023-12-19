const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const ROCK = "ROCK";

const OPTIONS = [ROCK, PAPER, SCISSORS];

game()

function getComputerChoice() {
    return OPTIONS[Math.round(Math.random() * 2)];
}

function game() {
    let gameWon = 0
    console.log("ROCK, PAPER, SCISSORS GAME");
    
    for (let index = 0; index < 5; index++) {
        let input = prompt("ROCK PAPER SCISSORS (Choose One): ")

        let result = playRound(input.toUpperCase(), getComputerChoice())
        console.log(result)
        if (result.match("Win")) {
          gameWon++
        } else if (result.match("Tie")) {
          index --;
          console.log("Replay the round")
          continue
        }
    }
    if (gameWon > 2) {
      console.log("YOU WON!!!!!!!!")
    } else {
      console.log("YOU LOST")
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) return "Tie"
  if (playerSelection == ROCK) {
    return computerSelection == PAPER
      ? generateResponse(false, PAPER, ROCK)
      : generateResponse(true, ROCK, SCISSORS);
  } else if (playerSelection == PAPER) {
    return computerSelection == ROCK
      ? generateResponse(true, PAPER, ROCK)
      : generateResponse(false, SCISSORS, PAPER);
  } else if ((playerSelection = SCISSORS)) {
    return computerSelection == PAPER
      ? generateResponse(true, SCISSORS, PAPER)
      : generateResponse(false, ROCK, SCISSORS);
  }
}

function generateResponse(winner, option1, option2) {
    return `You ${winner ? "Win" : "Lose"}!${option1} Beats ${option2}`;
}
