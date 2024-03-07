import { useState } from 'react';
import { createGame } from '../../api/gameAPI';
import { useNavigate } from 'react-router-dom';
import { generateGameId } from '../../util/onlineLogic';
import clipboard_svg from '../../assets/clipboard.svg';
function MultplayerCreate() {
  // navigate and error handles
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);
  const [copySuccess, setCopySuccess] = useState(false);
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
      navigate(`/lobby/${gameId}/${username}/0`, {
        state: { playerOne: gameObj },
      });
      setError(false);
    } else {
      setError(true);
    }
  }

  function handleCopy() {
    navigator.clipboard.writeText(gameId).then(
      function () {
        console.log('Copying to clipboard was successful!');
        setCopySuccess(true);
        setTimeout(() => {
          setCopySuccess(false);
        }, 2000);
      },
      function (err) {
        console.error('Could not copy text: ', err);
      }
    );
  }

  return (
    // need styling
    <section className="container mx-auto bg-box-color rounded-lg p-6 w-[300px]">
      <input
        className="w-full"
        type="text"
        name="username"
        id="username"
        placeholder="Enter your username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <p className="text-sm text-red-500 my-1">
        {error && 'username can not be empty.'}
      </p>

      <div className="flex items-center justify-between gap-2 text-sm my-3">
        <p>Game id: {gameId}</p>
        <button onClick={handleCopy}>
          <img src={clipboard_svg} alt="clipboard_svg icon" />
        </button>
      </div>
      {copySuccess && <p className="text-sm">Copied!</p>}

      <button className="btn-primary w-full my-2" onClick={handleCreateGame}>
        Create room
      </button>
    </section>
  );
}

export default MultplayerCreate;
