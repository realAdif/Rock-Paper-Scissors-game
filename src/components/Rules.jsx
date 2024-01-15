import { useState } from 'react';
import PropTypes from 'prop-types';
import RuleImage from '../assets/image-rules.svg';
import CloseIcon from '../assets/icon-close.svg';

export default function Rules() {
  const [openRule, setOpenRule] = useState(false);
  const handleRule = () => {
    setOpenRule(!openRule);
  };
  return (
    <div className="container mx-auto flex lg:justify-end justify-center mb-12">
      <button
        className="text-white  text-center border px-12 py-3 rounded-md hover:bg-white hover:text-black"
        onClick={() => handleRule()}
      >
        RULES
      </button>
      {openRule && <RuleScreen onClose={handleRule} />}
    </div>
  );
}
RuleScreen.propTypes = {
  onClose: PropTypes.func.isRequired,
};

function RuleScreen({ onClose }) {
  return (
    <div className="bg-white absolute top-0 h-full w-full">
      <div className="flex flex-col justify-between items-center h-full">
        <h1 className="mt-24 text-3xl text-dark-text">Rules</h1>
        <img src={RuleImage} alt="Rules" className="w-full p-4" />
        <button onClick={onClose}>
          <img src={CloseIcon} alt="Close Icon" className="mb-24" />
        </button>
      </div>
    </div>
  );
}
