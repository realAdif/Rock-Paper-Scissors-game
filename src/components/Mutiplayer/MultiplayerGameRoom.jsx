import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getGameById } from '../../api/gameAPI';

import UserSelection from '../UserSelection';
import Game from '../Game';

function MultiplayerGameRoom() {
  const { id, name } = useParams();
  // are player choice as a string // will set what user is selected
  const [userChoice, setUserChoice] = useState(null);
  //player two choice as a string // will get a api call and set player choice
  const [playerChoice, setPlayerChoice] = useState('paper');
  const [playerName, setPlayerName] = useState('Loading..');
  // this is set if player can see the last screen true or false
  const [gameRest, setGameRest] = useState(true);

  // this function is called when users want to play again
  const handleResetGame = () => {
    console.log('reset game');
    return setGameRest(true);
  };

  // api call to fetch players choice // every 3 seconds
  // set the players choice

  //api call to update user choice
  const handleUserChoice = (choice) => {
    console.log(choice);
    setUserChoice(choice);
    setGameRest(false);
  };

  return (
    <section className="text-white container mx-auto">
      <div className="absolute top-36 ">
        <p>Game Id: {id}</p>
        <p>Your Name: {name} </p>
        <p>player 2 ready: </p>
        <p>rounds played:</p>
      </div>

      {gameRest ? (
        <UserSelection onUserChoice={handleUserChoice} />
      ) : (
        <Game
          userChoice={userChoice}
          onResetGame={handleResetGame}
          userName={name}
          playerName={playerName}
          playerChoice={playerChoice}
          isOnline={true}
        />
      )}
    </section>
  );
}

export default MultiplayerGameRoom;
