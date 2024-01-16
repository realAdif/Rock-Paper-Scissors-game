import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { PaperButton, RockButton, ScissorsButton } from '../ui/Button';
import { getRandomChoice, determineWinner } from '../util/gameLogic';

Game.propTypes = {
  userChoice: PropTypes.string.isRequired,
  onResetGame: PropTypes.func.isRequired,
};

function Game({ userChoice, onResetGame }) {
  const [computerChoice, setComputerChoice] = useState(null);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const randomChoice = getRandomChoice(userChoice);
    setComputerChoice(randomChoice);
    setWinner(determineWinner(userChoice, randomChoice));
  }, [userChoice]);
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
            <p className="text-white mt-8 text-center">YOU PICKED</p>
          </div>
          {/* text */}
          <div className="w-fit mx-auto ">
            <h1 className="text-white text-6xl my-4">{winner}</h1>
            <button
              className="text-dark-text bg-white w-full py-2 rounded-lg"
              onClick={onResetGame}
            >
              PLAY AGAIN
            </button>
          </div>
          {/* computer*/}
          <div>
            {computerChoice === 'paper' && <PaperButton />}
            {computerChoice === 'rock' && <RockButton />}
            {computerChoice === 'scissors' && <ScissorsButton />}
            <p className="text-white mt-8 text-center">THE HOUSE PICKED</p>
          </div>
        </div>
      </div>
      {/* sm */}
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
        <div className="w-fit mx-auto ">
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
