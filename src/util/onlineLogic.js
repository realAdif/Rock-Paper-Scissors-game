function generateGameId() {
  const length = 6;
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let gameId = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    gameId += characters.charAt(randomIndex);
  }

  return gameId;
}

export { generateGameId };
