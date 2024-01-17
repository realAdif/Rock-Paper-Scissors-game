// import { v4 as uuidv4 } from 'uuid';

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
export function generateGameID() {
  // Generate a random string of specified length
  function generateRandomString(length) {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  }

  // Get current timestamp
  const timestamp = new Date().getTime();

  // Concatenate timestamp and random string to create a unique ID
  const gameID = `${timestamp}_${generateRandomString(5)}`;

  return gameID;
}
