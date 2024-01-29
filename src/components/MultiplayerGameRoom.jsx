import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getGameById } from '../api/gameAPI';

import UserSelection from './UserSelection';

function MultiplayerGameRoom() {
  const { id } = useParams();
  // const [gameState, setGameState] = useState(null);
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const gameData = await getGameById(id);
        // setGameState(gameData);
        setUserName(gameData.players[1].username);
      } catch (error) {
        console.error('Error fetching game:', error);
      }
    };

    fetchGame();
  }, [id]);
  const handleUserChoice = (choice) => {
    console.log(choice);
  };
  return (
    <section className="text-white container mx-auto">
      <div className="text-center w-full hidden">
        <h2>Game is starting</h2>
        <p>Wait for player to join: {userName} </p>
      </div>
      <UserSelection onUserChoice={handleUserChoice} />
    </section>
  );
}

export default MultiplayerGameRoom;
