// Begin with a function called computerPlay
// Function should choose a random choice between
// rock, paper or scissors and return the value

const choices = ["Rock", "Paper", "Scissors"];
let userChoice = prompt("Choose rock, paper or  scissors: ");

const computerPlay = () => {
  let choice = Math.floor(Math.random() * 3);
  return choices[choice];
};

// Write a function named playRound that takes
// the user selection and the random selection
// from the computer and RETURNS a string.
const playRound = (userSelection, computerSelection) => {
  // NOTE: Player choice must be case insensitive
  userSelection = userSelection
    .trim()
    .toLowerCase()
    .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));

  if (
    (userSelection === "Rock" && computerSelection === "Paper") ||
    (userSelection === "Paper" && computerSelection === "Scissors") ||
    (userSelection === "Scissors" && computerSelection === "Rock")
  ) {
    // If the user loses write:
    // "You Lose! Paper beats Rock"
    // replacing paper and rock with the
    // correct choices.
    return `You Lose! ${computerSelection} beats ${userSelection}`;
  } else if (
    (userSelection === "Paper" && computerSelection === "Rock") ||
    (userSelection === "Scissors" && computerSelection === "Paper") ||
    (userSelection === "Rock" && computerSelection === "Scissors")
  ) {
    // If the user wins write:
    // "You Win! Scissors beats Paper!"
    // replacing scissors and paper with
    // the correct choices
    return `You Win! ${userSelection} beats ${computerSelection}`;
  } else {
    return "It's a tie!";
  }
};

console.log(playRound(userChoice, computerPlay()));
