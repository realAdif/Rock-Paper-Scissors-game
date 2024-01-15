import PropTypes from 'prop-types';
import PaperIcon from '../assets/icon-paper.svg';
import RockIcon from '../assets/icon-rock.svg';
import ScissorsIcon from '../assets/icon-scissors.svg';

Button.propTypes = {
  icon: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  gradientColors: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

function Button({ icon, altText, gradientColors, className, onClick }) {
  return (
    <button
      className={`w-[140px] h-[140px] flex justify-center items-center rounded-full bg-gradient-to-b from-[${gradientColors[0]}] to-[${gradientColors[1]}] ${className} `}
      onClick={onClick}
    >
      <img
        src={icon}
        alt={altText}
        className="bg-white rounded-full w-[100px] h-[100px] p-4"
      />
    </button>
  );
}

PaperButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};
export function PaperButton({ className, onClick }) {
  return (
    <Button
      icon={PaperIcon}
      altText="Paper Icon button"
      gradientColors={['#ec9e0e', '#eca922']}
      className={className}
      onClick={onClick}
    />
  );
}
RockButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};
export function RockButton({ className, onClick }) {
  return (
    <Button
      icon={RockIcon}
      altText="Rock Icon button"
      gradientColors={['#dc2e4e', '#dd405d']}
      className={className}
      onClick={onClick}
    />
  );
}
ScissorsButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};
export function ScissorsButton({ className, onClick }) {
  return (
    <Button
      icon={ScissorsIcon}
      altText="Scissors Icon button"
      gradientColors={['#4865f4', '#5671f5']}
      className={className}
      onClick={onClick}
    />
  );
}
