import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useGameIdValidation from '../../hooks/useGameIdValidation';

function MultiplayerGame() {
  // navigate and error handles
  const [enteredGameId, setEnteredGameId] = useState(null);
  const { error, validateGameId } = useGameIdValidation();
  const navigate = useNavigate();

  // checking game id and navigate to the lobby:id
  async function handleJoinGame() {
    const isValidGameId = await validateGameId(enteredGameId);
    if (isValidGameId) {
      navigate(`/lobby/${enteredGameId}/join`);
    } else {
      console.error('Invalid game ID');
    }
  }

  return (
    <section className="flex flex-col lg:flex-row gap-y-6 gap-x-6 justify-center text-white rounded-lg p-6 w-fit mx-auto bg-box-color text-sm">
      <div></div>

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
          value={enteredGameId}
          onChange={(e) => setEnteredGameId(e.target.value)}
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
