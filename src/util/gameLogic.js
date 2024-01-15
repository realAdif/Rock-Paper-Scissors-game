export const choices = ['rock', 'paper', 'scissors'];

export function getRandomChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

export function determineWinner(user, computer) {
  if (user === computer) return 'tie';

  const winningCombinations = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper',
  };

  return winningCombinations[user] === computer ? 'user' : 'computer';
}
