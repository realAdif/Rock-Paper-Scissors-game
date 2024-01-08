import { useState } from 'react';

import UserSelection from './components/UserSelection';
import Header from './components/header';
import closeIcon from './assets/icon-close.svg';
import ruleImage from './assets/image-rules.svg';

function App() {
  const [toggleRules, setToggleRules] = useState(false);
  const ruleToggle = () => {
    setToggleRules(!toggleRules);
  };
  function Rules() {
    return (
      <div className="bg-white w-fit p-6 rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl text-dark-text">RULES</h1>
          <button onClick={ruleToggle}>
            <img
              src={closeIcon}
              alt="close icon"
              className="w-[20px] h-[20px]"
            />
          </button>
        </div>
        <button className="cursor-pointer p-6">
          <img src={ruleImage} alt="image of te rules" />
        </button>
      </div>
    );
  }
  return (
    <main className="h-screen bg-gradient-to-b from-[#1f3756] to-[#141539]">
      <Header />
      <UserSelection />
      <button
        onClick={ruleToggle}
        className="text-white absolute bottom-12 right-12 border-2 px-6 py-2 rounded-md"
      >
        RULES
      </button>
      {toggleRules ? <Rules /> : null}
    </main>
  );
}

export default App;
