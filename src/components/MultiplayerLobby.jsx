import { useEffect, useState } from 'react';
import { getGameById } from '../api/gameAPI';
import { useParams } from 'react-router-dom';

function MultiplayerLobby() {
  // get the id from URL
  const { id } = useParams();
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

  return (
    <main className=" container mx-auto h-full text-white">
      <h1 className="text-center">Loddy</h1>
      <div className="flex justify-around">
        <div className="w-fit">
          <p>
            player 1 name:{' '}
            {playerOne.username ? playerOne.username : 'Loading..'}
          </p>
          <p>
            player 2 name:
            {playerTwo.username ? playerTwo.username : 'Loading..'}
          </p>
        </div>
      </div>
      <div className="text-center mt-6">
        <h1>Steps:</h1>
        <p>1.send the code to your mate: {id}</p>
        <p>
          2.to check if your mate has joined, click check to see if the player
          as joined
        </p>
        <p>3.when you see you see player 2 name come up, you start the game!</p>
      </div>
      <button onClick={handleGetPlayer}>check</button>
    </main>
  );
}

export default MultiplayerLobby;
