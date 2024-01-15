import { useState } from 'react';
import UserSelection from './components/UserSelection';
import Header from './components/Header';
import Game from './components/Game';

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
    <main className="h-screen bg-gradient-to-b from-[#1f3756] to-[#141539]">
      <Header />
      {!showGame && <UserSelection onUserChoice={handleUserChoice} />}
      {showGame && (
        <Game userChoice={userChoice} onResetGame={handleResetGame} />
      )}
    </main>
  );
}

export default App;
