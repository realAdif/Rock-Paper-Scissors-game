import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { PaperButton, RockButton, ScissorsButton } from '../ui/Button';
import { getRandomChoice, determineWinner } from '../util/gameLogic';

Game.propTypes = {
  userChoice: PropTypes.string.isRequired,
  onResetGame: PropTypes.func.isRequired,
  setScore: PropTypes.func,
  userName: PropTypes.string,
  // player 2
  playerChoice: PropTypes.string,
  playerName: PropTypes.string,
  // online settings
  isOnline: PropTypes.bool.isRequired,
  playAgain: PropTypes.bool,
};

function Game({
  userChoice,
  onResetGame,
  setScore,
  userName,
  playerChoice,
  playerName,
  isOnline,
  playAgain,
}) {
  const [computerChoice, setComputerChoice] = useState(null);
  const [winner, setWinner] = useState(null);
  useEffect(() => {
    //single game
    if (userChoice && !isOnline) {
      const randomChoice = getRandomChoice();
      setComputerChoice(randomChoice);
      const result = determineWinner(userChoice, randomChoice);
      setWinner(result);
      if (result === 'YOU WIN' && setScore != null) {
        setScore((prevScore) => prevScore + 1);
      }
    }
    // online game
    if (playerChoice && isOnline) {
      const result = determineWinner(userChoice, playerChoice);
      setWinner(result);
    }
  }, [userChoice, setScore]);

  useEffect(() => {
    if (playerChoice) {
      const result = determineWinner(userChoice, playerChoice);
      return setWinner(result);
    }
  }, [playerChoice]);
  return (
    <div className="container mx-auto">
      {/* lg */}
      <div className="md:block hidden">
        <div className="flex justify-between items-center mx-4">
          {/* user */}
          <div>
            {userChoice === 'paper' && <PaperButton />}
            {userChoice === 'rock' && <RockButton />}
            {userChoice === 'scissors' && <ScissorsButton />}
            <p className="text-white mt-8 text-center">
              {userName ? userName.toUpperCase() : 'YOU'} PICKED
            </p>
          </div>
          {/* text */}
          <div className="w-fit mx-auto ">
            <h1 className="text-white text-6xl my-4">
              {winner}
              {
                // if the game is online and the player has not picked
                !playerChoice && 'WAITING...'
              }
            </h1>
            <button
              className={
                playAgain
                  ? `text-dark-text bg-white w-full py-2 rounded-lg`
                  : 'hidden'
              }
              onClick={onResetGame}
            >
              PLAY AGAIN
            </button>
          </div>
          {/* computer*/}
          <div>
            {isOnline ? (
              <div>
                {playerChoice === 'rock' && <RockButton />}
                {playerChoice === 'paper' && <PaperButton />}
                {playerChoice === 'scissors' && <ScissorsButton />}
              </div>
            ) : (
              <div>
                {computerChoice === 'paper' && <PaperButton />}
                {computerChoice === 'rock' && <RockButton />}
                {computerChoice === 'scissors' && <ScissorsButton />}
              </div>
            )}
            {!playerChoice && (
              <div className="w-[140px] h-[140px] bg-slate-500 rounded-full mx-auto"></div>
            )}
            <p className="text-white mt-8 text-center">
              {!playerChoice && 'WAITING FOR PLAYER'}
            </p>
            <p className="text-white mt-8 text-center">
              {playerName ? playerName.toUpperCase() : 'THE HOUSE PICKED'}
            </p>
          </div>
        </div>
      </div>
      {/* sm  need to setup the update for playerss*/}
      <div className="md:hidden">
        {/* icons */}
        <div className="flex justify-between items-center mx-4">
          {/* user */}
          <div>
            {userChoice === 'paper' && <PaperButton />}
            {userChoice === 'rock' && <RockButton />}
            {userChoice === 'scissors' && <ScissorsButton />}
            <p className="text-white mt-8 text-center">YOU PICKED</p>
          </div>
          {/* computer*/}
          <div>
            {computerChoice === 'paper' && <PaperButton />}
            {computerChoice === 'rock' && <RockButton />}
            {computerChoice === 'scissors' && <ScissorsButton />}
            <p className="text-white mt-8 text-center">THE HOUSE PICKED</p>
          </div>
        </div>
        {/* text */}
        <div className="w-fit mx-auto my-4 ">
          <h1 className="text-white text-6xl my-4">{winner}</h1>
          <button
            className="text-dark-text bg-white w-full py-2 rounded-lg"
            onClick={onResetGame}
          >
            PLAY AGAIN
          </button>
        </div>
      </div>
    </div>
  );
}

export default Game;
