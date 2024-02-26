function generateGameId() {
  const length = 6;
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let gameId = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    gameId += characters.charAt(randomIndex);
  }

  return gameId.toLowerCase();
}

function getWinner(player1, player2) {
  if (player1 === player2) {
    return "It's a tie!";
  }

  if (
    (player1 === 'rock' && player2 === 'scissors') ||
    (player1 === 'scissors' && player2 === 'paper') ||
    (player1 === 'paper' && player2 === 'rock')
  ) {
    return 'Player 1 wins!';
  } else {
    return 'Player 2 wins!';
  }
}

export { generateGameId, getWinner };
