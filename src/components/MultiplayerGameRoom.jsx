import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getGameById } from '../api/gameAPI';

import UserSelection from './UserSelection';

function MultiplayerGameRoom() {
  const { id } = useParams();
  // const [gameState, setGameState] = useState(null);
  const [playerOne, setplayerOne] = useState(false);

  const [playerCount, setPlayerCount] = useState(0);
  useEffect(() => {
    const fetchGame = async () => {
      try {
        const gameData = await getGameById(id);
        setplayerOne(gameData.players[0].isActive.toString());
        console.log(gameData);
        setPlayerCount(gameData.players.length);
        setplayerOne(gameData.players[0]);
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
        <p>Player count: {playerCount}</p>
        <p>
          PlayerOne Name:{playerOne.username} / is Player is ready:
          {playerOne.isActive.toString()}
        </p>
        <p>PlayerTwo Name:{playerOne.username} / is Player is ready: </p>
      </div>
      <UserSelection onUserChoice={handleUserChoice} />
    </section>
  );
}

export default MultiplayerGameRoom;
