import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  getGameById,
  roundMovesAdd,
  getRoundById,
  deleteAllRound,
} from '../../api/gameAPI';
import { findSameRound, generateRoundBody } from '../../util/onlineLogic';

import UserSelection from '../UserSelection';
import Game from '../Game';

function MultiplayerGameRoom() {
  const { id, name, playerId } = useParams();
  const [userChoice, setUserChoice] = useState();
  const [username] = useState(`player${playerId}`);
  const [playerChoice, setPlayerChoice] = useState();
  const [playerName, setPlayerName] = useState('Loading..');
  const [gameRest, setGameRest] = useState(true);
  const [gameHistory, setGameHistory] = useState([]);

  // this function is called when users want to play again
  const handleResetGame = async () => {
    setGameRest(true);
    console.log('resting rounds...');
    const rest = await deleteAllRound(id);
    setPlayerChoice();
    console.log('finished reseting rounds...', rest);
  };

  // api call to fetch whenn page loads
  useEffect(() => {
    async function fetchData() {
      console.log('fetched data...');
      try {
        const freshFetch = await getGameById(id);
        if (playerId == 0) {
          setPlayerName(freshFetch.players[1].username);
        } else {
          setPlayerName(freshFetch.players[0].username);
        }
      } catch (error) {
        console.error('Error creating or fetching game:', error);
      }
    }
    fetchData();
  }, []);

  //  handle user choice
  const handleUserChoice = async (choice) => {
    setUserChoice(choice);
    setGameRest(false);
    const userObject = generateRoundBody(
      gameHistory.length,
      choice,
      username,
      parseInt(playerId)
    );
    setGameHistory((prevGameHistory) => [...prevGameHistory, userObject]);
    let updatedGameHistory = await sendRound(userObject);

    if (updatedGameHistory.length <= 1) {
      await new Promise((resolve) => setTimeout(resolve, 3000)); // wait for 3 seconds
      updatedGameHistory = await getRoundById(id);
      const playerObject = await findSameRound(
        updatedGameHistory,
        parseInt(playerId),
        gameHistory.length
      );
      return setPlayerChoice(
        playerObject[0].player0 || playerObject[0].player1
      );
    } else if (updatedGameHistory.length === 2) {
      const playerObject = await findSameRound(
        updatedGameHistory,
        parseInt(playerId),
        gameHistory.length
      );
      return setPlayerChoice(
        playerObject[0].player0 || playerObject[0].player1
      );
    } else if (updatedGameHistory.length > 2) {
      console.log('too many rounds');
    }
  };
  // hepler functions
  async function sendRound(round) {
    console.log('creating round..');
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000)); // wait for 3 seconds
      const roundAPI = await roundMovesAdd(id, round);
      return roundAPI.body.rounds;
    } catch (error) {
      return console.error('Error creating or fetching game:', error);
    }
  }
  return (
    <section className="text-white container mx-auto">
      <div className="absolute top-36 ">
        <p>Game Id: {id}</p>
        <p>Your Name: {name} </p>
        <p>player 2 ready: {playerName} </p>
        <p>rounds played: {gameHistory.length}</p>
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
          playAgain={true}
        />
      )}
    </section>
  );
}

export default MultiplayerGameRoom;
