import PropTypes from 'prop-types';
import LogoImage from '../assets/logo.svg';

Header.propTypes = {
  scoreBoard: PropTypes.number.isRequired,
};
function Header({ scoreBoard }) {
  return (
    <div className="flex justify-center pt-6 container mx-auto">
      <div className="w-full border-2 border-header-outline rounded-lg p-3 flex justify-between ">
        <img src={LogoImage} alt="Rock,Paper and Scissors text image" />
        <div className="bg-white w-[150px] rounded-md flex flex-col items-center justify-center">
          <p className="text-score-text text-sm">SCORE</p>
          <h1 className="text-dark-text text-4xl font-bold">{scoreBoard}</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
