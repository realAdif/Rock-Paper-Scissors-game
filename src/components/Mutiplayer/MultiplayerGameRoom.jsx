import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getGameById, roundMovesAdd, getRoundById } from '../../api/gameAPI';
import { findSameRound } from '../../util/onlineLogic';

import UserSelection from '../UserSelection';
import Game from '../Game';

function MultiplayerGameRoom() {
  const { id, name, playerId } = useParams();
  const { gameResult, setGameResult } = useState(null);
  // are player choice as a string // will set what user is selected
  const [userChoice, setUserChoice] = useState();
  const [request, setRequest] = useState({});
  //player two choice as a string // will get a api call and set player choice
  const [playerChoice, setPlayerChoice] = useState();
  const [playerName, setPlayerName] = useState('Loading..');
  // this is set if player can see the last screen true or false
  const [gameRest, setGameRest] = useState(true);

  const [gameHistory, setGameHistory] = useState([]);

  // this function is called when users want to play again
  const handleResetGame = () => {
    return setGameRest(true);
  };

  // api call to fetch whenn page loads
  useEffect(() => {
    async function fetchData() {
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

  // api call when user selects a choice
  useEffect(() => {
    async function updateRound() {
      const updatedRequest = {
        [`player${playerId}`]: userChoice,
        round: gameHistory.length,
      };
      setGameHistory((prevHistory) => [...prevHistory, updatedRequest]);
      const result = await roundMovesAdd(id, updatedRequest);
      return result;
    }
    if (userChoice && playerId) {
      updateRound();
    }
  }, [userChoice, playerId]);

  // update game history
  useEffect(() => {
    async function fetchData() {
      const freshFetch = await getRoundById(id);
      console.log('Game History fetch: ', freshFetch.body.rounds);
      return freshFetch.body.rounds;
    }
    const timer = setTimeout(async () => {
      // Call fetchData to fetch round data
      const newRound = await fetchData();
      console.log(' 1 timer New Round: ', newRound);
      // Find the round corresponding to the other player's move
      const otherPlayerRound = findSameRound(newRound, playerId);
      console.log(' 2 otherPlayerRound: ', otherPlayerRound);
      console.log('OtherPlayer:', otherPlayerRound);
    }, 3000);
    console.log('game history Array:', gameHistory);
    return () => clearInterval(timer);
  }, [gameHistory, id]);

  //  handle user choice
  const handleUserChoice = (choice) => {
    setUserChoice(choice);
    setGameRest(false);
  };

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
          playAgain={false}
        />
      )}
    </section>
  );
}

export default MultiplayerGameRoom;
