import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserSelection from './components/UserSelection';
import Header from './components/Header';
import Game from './components/Game';
import Rules from './components/Rules';
import MultiplayerGame from './components/MultiplayerGame';
import MultiplayerGameRoom from './components/MultiplayerGameRoom';
import MultplayerCreate from './components/MultplayerCreate';
import MultiplayerLobby from './components/MultiplayerLobby';
import MultiplayerJoin from './components/MultiplayerJoin';
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
    <Router>
      <main className="h-screen bg-gradient-to-b from-[#1f3756] to-[#141539] flex flex-col justify-between">
        <Header playerOne={score} />
        <Routes>
          <Route
            path="/"
            element={
              showGame ? (
                <Game
                  userChoice={userChoice}
                  onResetGame={handleResetGame}
                  setScore={setScore}
                />
              ) : (
                <UserSelection onUserChoice={handleUserChoice} />
              )
            }
          />

          {/* make a game room or join a game */}
          <Route path="/online" element={<MultiplayerGame />} />

          {/* create a game room  */}
          <Route path="/create" element={<MultplayerCreate />} />

          {/* waiting room   
            thing to do:
            error handling
            styling
          */}
          <Route path="/lobby/:id/admin" element={<MultiplayerLobby />} />

          {/*  join a game room  
            thing to do:
            error handling
            styling
          */}
          <Route path="/lobby/:id/" element={<MultiplayerJoin />} />

          {/* game */}
          <Route path="/online/:id" element={<MultiplayerGameRoom />} />
        </Routes>
        <Rules />
      </main>
    </Router>
  );
}

export default App;
