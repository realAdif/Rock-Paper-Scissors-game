export const choices = ['rock', 'paper', 'scissors'];

export function getRandomChoice(userChoice) {
  const otherChoices = choices.filter((choice) => choice !== userChoice);
  return otherChoices[Math.floor(Math.random() * otherChoices.length)];
}

export function determineWinner(user, computer) {
  const winningCombinations = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper',
  };

  return winningCombinations[user] === computer ? 'YOU WIN' : 'YOU LOSE';
}
