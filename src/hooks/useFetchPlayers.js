import { useState, useEffect } from 'react';
import { getGameById } from '../api/gameAPI';
// need to handle the error

const useFetchPlayers = (id) => {
  const [playerOne, setPlayerOne] = useState({});
  const [playerTwo, setPlayerTwo] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const newData = await getGameById(id);
        console.log('Fetched data:', newData);
        setPlayerOne(newData.players[0]);
        if (newData.players[1]) setPlayerTwo(newData.players[1]);
      } catch (error) {
        console.error('Error creating or fetching game:', error);
        return error;
      }
    }

    const timer = setTimeout(() => {
      fetchData();
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return { playerOne, playerTwo };
};

export default useFetchPlayers;
