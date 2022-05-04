// Begin with a function called computerPlay
// Function should choose a random choice between
// rock, paper or scissors and return the value

const choices = ["Rock", "Paper", "Scissors"];

const computerPlay = () => {
  let choice = Math.floor(Math.random() * 3);
  return choices[choice];
};
