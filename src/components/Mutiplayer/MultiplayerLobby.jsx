import { useEffect, useState } from 'react';
import { getGameById } from '../../api/gameAPI';
import { useParams, useNavigate } from 'react-router-dom';

function MultiplayerLobby() {
  // get the id from URL
  const { id, name, playerId } = useParams();
  const navigate = useNavigate();
  // players
  const [playerOne, setPlayerOne] = useState({});
  const [playerTwo, setPlayerTwo] = useState({});
  // run this function when the component loads
  useEffect(() => {
    async function fetchData() {
      try {
        const newData = await getGameById(id);
        console.log('Fetched data:', newData);
        setPlayerOne(newData.players[0]);
        if (newData.players[1]) setPlayerTwo(newData.players[1]);
      } catch (error) {
        console.error('Error creating or fetching game:', error);
        if (error.response && error.response.status) {
          console.error('Status code:', error.response.status);
        }
      }
    }

    const timer = setTimeout(() => {
      fetchData();
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  async function handleGetPlayer() {
    try {
      const newData = await getGameById(id);
      console.log('Fetched data:', newData);
      setPlayerOne(newData.players[0]);
      if (newData.players[1]) setPlayerTwo(newData.players[1]);
    } catch (error) {
      console.error('Error creating or fetching game:', error);
      if (error.response && error.response.status) {
        console.error('Status code:', error.response.status);
      }
    }
  }

  // navigate to the game

  function handleGameNavigate() {
    console.log('Navigating to game');
    if (playerOne.username != null && playerTwo.username != null) {
      console.log('Navigating to game 1');
      navigate(`/online/${id}/${name}/${playerId}`);
    }
  }

  return (
    <main className=" container mx-auto h-full text-white">
      <h1 className="text-center">Loddy</h1>
      <div className="flex justify-around">
        <div className="w-fit">
          <p>
            player 1 name:
            {playerOne.username ? playerOne.username : 'Loading..'}
          </p>
          <p>
            player 2 name:
            {playerTwo.username ? playerTwo.username : 'Loading..'}
          </p>
        </div>
      </div>
      <div className="w-full mx-auto">
        <button onClick={handleGetPlayer} className="btn-primary">
          check
        </button>
        <button className="btn-primary" onClick={handleGameNavigate}>
          Start Game!
        </button>
      </div>
    </main>
  );
}

export default MultiplayerLobby;
