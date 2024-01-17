import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import RuleImage from '../assets/image-rules.svg';
import CloseIcon from '../assets/icon-close.svg';

export default function Rules() {
  const [openRule, setOpenRule] = useState(false);
  const handleRule = () => {
    setOpenRule(!openRule);
  };
  return (
    <div className="container mx-auto flex lg:justify-between justify-center mb-12">
      <a
        className="text-white text-center border px-12 py-3 rounded-md hover:bg-white hover:text-black"
        href={location.pathname === '/online' ? '/' : '/online'}
      >
        {location.pathname === '/online' ? 'vs PC' : 'Play with a mate!'}
      </a>
      <button
        className="text-white text-center border px-12 py-3 rounded-md hover:bg-white hover:text-black"
        onClick={() => handleRule()}
      >
        RULES
      </button>

      {openRule && <RuleScreenSm onClose={handleRule} />}
      {openRule && <RuleScreenLg onClose={handleRule} />}
    </div>
  );
}
RuleScreenSm.propTypes = {
  onClose: PropTypes.func.isRequired,
};

function RuleScreenSm({ onClose }) {
  return (
    <div className="bg-white absolute top-0 h-full w-full sm:hidden">
      <div className="flex flex-col justify-between items-center h-full">
        <h1 className="mt-24 text-3xl text-dark-text">RULES</h1>
        <img src={RuleImage} alt="Rules" className="w-full p-4" />
        <button onClick={onClose}>
          <img src={CloseIcon} alt="Close Icon" className="mb-24" />
        </button>
      </div>
    </div>
  );
}
RuleScreenLg.propTypes = {
  onClose: PropTypes.func.isRequired,
};
function RuleScreenLg({ onClose }) {
  return (
    <div className="sm:block absolute hidden top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg">
      <div className="flex justify-between">
        <h1 className=" text-3xl text-dark-text">RULES</h1>
        <button onClick={onClose}>
          <img src={CloseIcon} alt="Close Icon" />
        </button>
      </div>
      <img src={RuleImage} alt="Rules" className="w-full p-4" />
    </div>
  );
}
