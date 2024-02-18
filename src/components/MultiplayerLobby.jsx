import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { getGameById } from '../api/gameAPI';

function MultiplayerLobby() {
  // get the id from URL
  const [gameId] = useState(useLocation().state.gameId);
  const [gameObj, setGameObj] = useState(gameId);

  // players
  const [player1] = useState({
    username: gameObj.players[0]?.username,
    isActive: gameObj.players[0].isActive,
  });
  // const [player2] = useState(null);

  //  helpers
  // function to check if both of the player are ready
  // return true or false
  function isPlayerReady(playerOne, playTwo) {
    return playerOne.isActive && playTwo.isActive;
  }
  // function to make a api call by id and update players state

  // navigate to online:id

  // get game update by gameid
  async function updateGame() {
    return setGameObj(await getGameById(gameId.id));
  }

  return (
    <main className=" container mx-auto h-full text-white">
      <h1 className="text-center">Loddy</h1>
      <div className="flex justify-around">
        <div className="w-fit">
          <p>
            player 1 name:
            {player1.username}
          </p>
          <p>name is ready : {player1.isActive.toString()}</p>
        </div>
        <div className="w-fit">
          <p>
            player 2 name:
            {gameObj.players[1]?.username || ' waiting for player..'}
          </p>
          <p>
            name is ready:{' '}
            {gameObj.players[1]?.isActive.toString() || 'waiting..'}
          </p>
        </div>
      </div>
      <p className="text-center mt-6">
        if the player does not join the game within 2 min this will won&apos;t
        work
      </p>
      <button onClick={() => updateGame()}>check</button>
    </main>
  );
}

export default MultiplayerLobby;
