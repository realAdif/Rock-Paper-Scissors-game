import { useState } from 'react';
import UserSelection from './components/UserSelection';
import Header from './components/Header';
import Game from './components/Game';
import Rules from './components/Rules';

function App() {
  const [userChoice, setUserChoice] = useState(null);
  const [showGame, setShowGame] = useState(false);

  const handleUserChoice = (choice) => {
    setUserChoice(choice);
    setShowGame(true);
  };
  const handleResetGame = () => {
    setUserChoice(null);
    setShowGame(false);
  };
  return (
    <main className="h-screen bg-gradient-to-b from-[#1f3756] to-[#141539] flex flex-col justify-between">
      <Header />
      {!showGame && <UserSelection onUserChoice={handleUserChoice} />}
      {showGame && (
        <Game userChoice={userChoice} onResetGame={handleResetGame} />
      )}
      <Rules />
    </main>
  );
}

export default App;
