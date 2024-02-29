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

function generateRoundBody(round, choice, playerId, id) {
  if (playerId === 'player0') {
    return {
      id: id,
      round: round,
      player0: choice,
    };
  }
  return {
    id: id,
    round: round,
    player1: choice,
  };
}

function findSameRound(roundArray, currentPlayer, currentRound) {
  if (roundArray.length <= 1) return null;
  const playerId = currentPlayer === 0 ? 1 : 0;

  const userPlayer = roundArray.filter(
    (player) => player.round === currentRound && player.id === playerId
  );

  return userPlayer;
}

export { generateGameId, findSameRound, generateRoundBody };
