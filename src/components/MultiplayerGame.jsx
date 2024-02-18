import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getGameById } from '../api/gameAPI';

function MultiplayerGame() {
  // navigate and error handles
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  // checking game id and navigate to the lobby:id
  async function handleJoinGame() {
    try {
      const enteredGameId = document.getElementById('gameIdInput').value;
      const fetchedGame = await getGameById(enteredGameId);
      console.log('Fetched game:', fetchedGame);
      setError(false);
      navigate(`/lobby/${enteredGameId}`);
    } catch (error) {
      setError(true);
      console.error('Status code:', error.response.status);
    }
  }

  return (
    <section className="flex flex-col lg:flex-row  gap-x-6 justify-center text-white border-2 border-header-outline bg-white bg-opacity-10  rounded-lg p-6 w-fit mx-auto">
      {/* create a game */}
      <div className="flex flex-col justify-center items-center gap-y-6 p-3">
        <button
          onClick={() => navigate(`/create`)}
          className="text-white text-center border px-8 py-3 rounded-md hover:bg-white hover:text-black"
        >
          Create a game
        </button>
      </div>
      {/* join game */}
      <div className="flex flex-col items-center gap-y-6 p-3 lg:border-l-2 lg:border-t-0  border-t border-header-outline">
        <p>Join a game</p>
        <input
          id="gameIdInput"
          type="text"
          placeholder="enter the game id"
          className="mx-3 text-center py-3 rounded-md text-black"
        />
        <button
          onClick={handleJoinGame}
          className="text-white text-center border px-8 py-3 rounded-md hover:bg-white hover:text-black"
        >
          Join a game
        </button>
        <p className="text-sm text-red-500">
          {error && 'Can not find the game'}
        </p>
      </div>
    </section>
  );
}

export default MultiplayerGame;
