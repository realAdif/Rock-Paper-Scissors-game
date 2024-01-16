import { useState, useEffect } from 'react';
import UserSelection from './components/UserSelection';
import Header from './components/Header';
import Game from './components/Game';
import Rules from './components/Rules';

function App() {
  const [score, setScore] = useState(() => {
    const savedScore = window.localStorage.getItem('score');
    return savedScore !== null ? Number(savedScore) : 0;
  });
  // Update localStorage whenever the score changes
  useEffect(() => {
    const handleBeforeUnload = () => {
      window.localStorage.removeItem('score');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

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
      <Header scoreBoard={score} />
      {!showGame && <UserSelection onUserChoice={handleUserChoice} />}
      {showGame && (
        <Game
          userChoice={userChoice}
          onResetGame={handleResetGame}
          setScore={setScore}
          style={{ display: showGame ? 'block' : 'none' }}
        />
      )}
      <Rules />
    </main>
  );
}

export default App;
