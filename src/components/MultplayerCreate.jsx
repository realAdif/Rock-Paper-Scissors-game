import { useState } from 'react';
import PropTypes from 'prop-types';
import { createGame } from '../api/gameAPI';
import { useNavigate } from 'react-router-dom';
import { generateGameId } from '../util/onlineLogic';
MultplayerCreate.propTypes = {
  gameId: PropTypes.number,
};
function MultplayerCreate({ gameId }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);
  // create a function to call the api to make a new game
  gameId = generateGameId();

  const gameObj = {
    id: `${gameId}`,
    players: [
      {
        username: username,
        score: 0,
      },
      {
        username: 'guest',
        score: 0,
      },
    ],
  };
  function handleCreateGame() {
    createGame(gameObj);
    // navigate(`/online/${gameId}`);
  }

  return (
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

        {/* if this username is not null it will start the game */}
        <p>your username: {username}</p>
        <p>Guest username: </p>
        <p>game id: {gameId}</p>

        <button onClick={handleCreateGame}>Create room</button>
      </div>
    </section>
  );
}

export default MultplayerCreate;
