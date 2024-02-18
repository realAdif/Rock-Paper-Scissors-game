import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getGameById } from '../api/gameAPI';

import UserSelection from './UserSelection';

function MultiplayerGameRoom() {
  const { id } = useParams();
  // const [gameState, setGameState] = useState(null);
  const [userName, setUserName] = useState(false);

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const gameData = await getGameById(id);

        setUserName(gameData.players[0].isActive.toString());
        console.log(gameData.players[0].isActive.toString());
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
      <div className="absolute top-36 ">
        <h2>Game is starting</h2>
        <p>Game Id: {id}</p>
        <p>Player1 ready:{userName} </p>
        <p>Player2 ready: </p>
      </div>
      <UserSelection onUserChoice={handleUserChoice} />
    </section>
  );
}

export default MultiplayerGameRoom;
