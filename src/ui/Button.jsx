import PropTypes from 'prop-types';
import PaperIcon from '../assets/icon-paper.svg';
import RockIcon from '../assets/icon-rock.svg';
import ScissorsIcon from '../assets/icon-scissors.svg';

Button.propTypes = {
  icon: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  gradientColors: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

function Button({ icon, altText, className, onClick, gradientColors }) {
  const defaultStyle = `w-[140px] h-[140px] flex justify-center items-center rounded-full rock `;
  return (
    <button
      className={`${defaultStyle} ${className} ${gradientColors}`}
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

export function RockButton({ className, onClick }) {
  return (
    <Button
      icon={RockIcon}
      altText="Rock Icon button"
      className={className}
      onClick={onClick}
      gradientColors={'bg-gradient-to-t from-[#dc2e4e] to-[#dd405d]'} //['#dc2e4e', '#dd405d']
    />
  );
}
export function ScissorsButton({ className, onClick }) {
  return (
    <Button
      icon={ScissorsIcon}
      altText="Scissors Icon button"
      className={className}
      onClick={onClick}
      gradientColors={'bg-gradient-to-t from-[#ec9e0e] to-[#eca922]'} //['#ec9e0e', '#eca922']
    />
  );
}
export function PaperButton({ className, onClick }) {
  return (
    <Button
      icon={PaperIcon}
      altText="Paper Icon button"
      className={className}
      onClick={onClick}
      gradientColors={'bg-gradient-to-t from-[#4865f4] to-[#5671f5]'} // ['#4865f4', '#5671f5']
    />
  );
}
PaperButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

RockButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};
ScissorsButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};
