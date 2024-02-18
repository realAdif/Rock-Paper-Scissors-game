import { useState } from 'react';
import { createGame } from '../api/gameAPI';
import { useNavigate } from 'react-router-dom';
import { generateGameId } from '../util/onlineLogic';

function MultplayerCreate() {
  // navigate and error handles
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);
  const [error, setError] = useState(false);
  const [gameId] = useState(generateGameId());

  // gameObj to send to server
  const gameObj = {
    id: gameId.toString(),
    players: [
      {
        username: username,
        isActive: true,
        score: 0,
      },
    ],
  };

  // api call to create a game and navigate to the lobby:id
  function handleCreateGame() {
    if (username) {
      createGame(gameObj);
      navigate(`/lobby/${gameId}/admin`, { state: { gameId: gameObj } });
      setError(false);
    } else {
      setError(true);
    }
  }

  return (
    // need styling
    <section className="container mx-auto">
      <div className="text-white text-center">
        <p>Username</p>
        <input
          type="text"
          name="username"
          id="username"
          className="text-black px-2"
          onChange={(e) => setUsername(e.target.value)}
        />

        <p>your username: {username}</p>
        <p className="text-sm text-red-500">
          {error && 'useranme can not be empty'}
        </p>
        <p>Guest username: </p>
        <p>game id: {gameId}</p>

        <button onClick={handleCreateGame}>Create room</button>
      </div>
    </section>
  );
}

export default MultplayerCreate;
