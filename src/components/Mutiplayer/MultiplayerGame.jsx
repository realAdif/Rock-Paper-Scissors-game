import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getGameById } from '../../api/gameAPI';

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
      navigate(`/lobby/${enteredGameId}/join`);
    } catch (error) {
      setError(true);
      console.error('Status code:', error.response.status);
    }
  }

  return (
    <section className="flex flex-col lg:flex-row gap-y-6 gap-x-6 justify-center text-white rounded-lg p-6 w-fit mx-auto bg-box-color text-sm">
      <div className="flex flex-col justify-between items-center w-[260px] mx-auto">
        <p>Start a new game!</p>
        <button
          onClick={() => navigate(`/create`)}
          className="btn-primary w-full"
        >
          Create a game
        </button>
      </div>
      <div className="flex flex-col items-center w-[260px] mx-auto">
        <p>Join a game</p>
        <input
          id="gameIdInput"
          type="text"
          placeholder="enter the game id"
          className="w-full my-2 "
        />
        {error && (
          <p className="text-sm text-red-500 mb-2">can not find the game</p>
        )}

        <button onClick={handleJoinGame} className="btn-primary w-full">
          Join a game
        </button>
      </div>
    </section>
  );
}

export default MultiplayerGame;
