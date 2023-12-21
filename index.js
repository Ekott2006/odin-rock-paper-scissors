const PAPER = "Paper";
const SCISSORS = "Scissors";
const ROCK = "Rock";

const OPTIONS = [ROCK, PAPER, SCISSORS];
const SELECTION_TO_SVG = {
  [PAPER]: "./svg/loose_leaf_paper.svg",
  [SCISSORS]: "./svg/scissors-svgrepo-com.svg",
  [ROCK]: "./svg/rock-svgrepo-com.svg",
};

let SCORE = { player: 0, computer: 0 };

document.querySelector("#ROCK").onclick = () => playRound(ROCK);
document.querySelector("#PAPER").onclick = () => playRound(PAPER);
document.querySelector("#SCISSORS").onclick = () => playRound(SCISSORS);

document.querySelector("#modal-button").onclick = () => {
  document.querySelector("div#modal").style.display = "none";

  document.querySelector("#result-banner").innerHTML = "Choose your weapon";
  document.querySelector("#result-text").innerHTML =
    "First to score 5 points wins the game";

  document.querySelector("#result-computer-image").src =
    "./svg/mono-gnome-question.svg";
  document.querySelector("#result-player-image").src =
    "./svg/mono-gnome-question.svg";
  SCORE = { player: 0, computer: 0 };
  document.querySelector("#result-player").innerHTML = SCORE.player;
  document.querySelector("#result-computer").innerHTML = SCORE.computer;

  return;
};

function playRound(playerSelection) {
  let computerSelection = OPTIONS[Math.round(Math.random() * 2)];
  document.querySelector("#result-computer-image").src =
    SELECTION_TO_SVG[computerSelection];
  document.querySelector("#result-player-image").src =
    SELECTION_TO_SVG[playerSelection];

  let didPlayerWin = true;
  if (playerSelection == computerSelection) {
    document.querySelector("#result-banner").innerHTML = "Its a Tie";
    document.querySelector(
      "#result-text"
    ).innerHTML = `${computerSelection} is tied with ${playerSelection}`;
    return;
  } else if (playerSelection == ROCK && computerSelection == PAPER) {
    didPlayerWin = false;
  } else if (playerSelection == PAPER && computerSelection == SCISSORS) {
    didPlayerWin = false;
  } else if (playerSelection == SCISSORS && computerSelection == ROCK) {
    didPlayerWin = false;
  }

  if (didPlayerWin) {
    SCORE.player += 1;
    document.querySelector("#result-banner").innerHTML = "You Won!!!";
    document.querySelector("#result-player").innerHTML = SCORE.player;
    document.querySelector(
      "#result-text"
    ).innerHTML = `${computerSelection} is beaten by ${playerSelection}`;
  } else {
    SCORE.computer += 1;
    document.querySelector("#result-banner").innerHTML = "You Lost!";
    document.querySelector("#result-computer").innerHTML = SCORE.computer;
    document.querySelector(
      "#result-text"
    ).innerHTML = `${playerSelection} is beaten by ${computerSelection}`;
  }

  if (SCORE.player == 5) {
    document.querySelector("div#modal").style.display = "flex";
    document.querySelector("#modal-text").innerHTML = "You Win!!!!";
  } else if (SCORE.computer == 5) {
    document.querySelector("div#modal").style.display = "flex";
    document.querySelector("#modal-text").innerHTML = "You Lose!!!!";
  }
}
