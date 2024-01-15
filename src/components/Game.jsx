import PropTypes from 'prop-types';
import { PaperButton, RockButton, ScissorsButton } from '../ui/Button';

Game.propTypes = {
  userChoice: PropTypes.string.isRequired,
  onResetGame: PropTypes.func.isRequired,
};

function Game({ userChoice, onResetGame }) {
  const handleResetGame = () => {
    onResetGame();
  };
  return (
    <div className="container mx-auto">
      <div className="flex justify-between  text-white text-2xl mt-12 px-6 text-center">
        <div>
          <h1>YOU PICKED</h1>
          {userChoice === 'paper' && <PaperButton />}
          {userChoice === 'rock' && <RockButton />}
          {userChoice === 'scissors' && <ScissorsButton />}
        </div>

        <button onClick={handleResetGame} className="text-red-500 bg-white">
          PLAY AGAIN
        </button>

        <div>
          <h1>THE HOUSE</h1>
          <PaperButton />
        </div>
      </div>
    </div>
  );
}

export default Game;
