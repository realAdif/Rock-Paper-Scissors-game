import { useState } from 'react';
import { getGameById } from '../api/gameAPI';

function useGameIdValidation() {
  const [error, setError] = useState(false);
  async function validateGameId(gameId) {
    try {
      const fetchedGame = await getGameById(gameId);
      console.log('Fetched game:', fetchedGame);
      setError(false);
      return true; // Game ID exists
    } catch (error) {
      setError(true);
      console.error('Error fetching game:', error);
      return false; // Game ID does not exist
    }
  }
  return { error, validateGameId };
}

export default useGameIdValidation;
