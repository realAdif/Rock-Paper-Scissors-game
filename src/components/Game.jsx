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
      {/* <div className="flex justify-between  text-white text-md mt-12 px-6 text-center">
        <div className="flex flex-col items-center gap-y-3">
          <p>YOU PICKED</p>
          {userChoice === 'paper' && <PaperButton />}
          {userChoice === 'rock' && <RockButton />}
          {userChoice === 'scissors' && <ScissorsButton />}
        </div>
        <button onClick={onResetGame}>Play</button>
        <p>Winner is: {winner}</p>
        <div className="flex flex-col items-center gap-y-3">
          <p>THE HOUSE PICKED</p>
          <div className="w-[140px] h-[140px] bg-[#3b4363] bg-opacity-25 rounded-full">
            {computerChoice === 'paper' && <PaperButton />}
            {computerChoice === 'rock' && <RockButton />}
            {computerChoice === 'scissors' && <ScissorsButton />}
          </div>
        </div>
      </div> */}
      <div>
        <div className="flex justify-between items-center mx-4 ">
          <div>
            {userChoice === 'paper' && <PaperButton />}
            {userChoice === 'rock' && <RockButton />}
            {userChoice === 'scissors' && <ScissorsButton />}
            <p className="text-white mt-8 text-center">YOU PICKED</p>
          </div>
          <div>
            {computerChoice === 'paper' && <PaperButton />}
            {computerChoice === 'rock' && <RockButton />}
            {computerChoice === 'scissors' && <ScissorsButton />}
            <p className="text-white mt-8 text-center">THE HOUSE PICKED</p>
          </div>
        </div>
        <div className="w-fit mx-auto ">
          <h1 className="text-white text-6xl my-4">{winner}</h1>
          <button
            className="text-dark-text bg-white w-full py-4 rounded-lg"
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
