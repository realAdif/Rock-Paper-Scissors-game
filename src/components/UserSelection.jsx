import bgImage from '../assets/bg-triangle.svg';
import { PaperButton, RockButton, ScissorsButton } from '../ui/Button';
import PropTypes from 'prop-types';

UserSelection.propTypes = {
  onUserChoice: PropTypes.func.isRequired,
};

function UserSelection({ onUserChoice }) {
  const handleUserChoice = (choice) => {
    onUserChoice(choice);
  };

  return (
    <div className="flex justify-center">
      <div className="mt-32 relative">
        <img src={bgImage} alt="background Triangle" />
        <PaperButton
          className="absolute -top-12 -left-10"
          onClick={() => handleUserChoice('paper')}
        />
        <RockButton
          className="absolute -bottom-12 left-1/2 transform -translate-x-1/2"
          onClick={() => handleUserChoice('rock')}
        />
        <ScissorsButton
          className="absolute -top-12 -right-10"
          onClick={() => handleUserChoice('scissors')}
        />
      </div>
    </div>
  );
}

export default UserSelection;
