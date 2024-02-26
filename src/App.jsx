import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserSelection from './components/UserSelection';
import Header from './components/Header';
import Game from './components/Game';
import Rules from './components/Rules';
import MultiplayerGame from './components/Mutiplayer/MultiplayerGame';
import MultiplayerGameRoom from './components/Mutiplayer/MultiplayerGameRoom';
import MultplayerCreate from './components/Mutiplayer/MultplayerCreate';
import MultiplayerLobby from './components/Mutiplayer/MultiplayerLobby';
import MultiplayerJoin from './components/Mutiplayer/MultiplayerJoin';

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
          {/* starting screen */}
          <Route
            path="/"
            element={
              showGame ? (
                <Game
                  userChoice={userChoice}
                  onResetGame={handleResetGame}
                  setScore={setScore}
                  isOnline={false}
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
          {/* waiting join game */}
          <Route path="/lobby/:id/join" element={<MultiplayerJoin />} />
          {/* waiting room */}
          <Route
            path="/lobby/:id/:name/:player"
            element={<MultiplayerLobby />}
          />
          {/* games */}
          <Route
            path="/online/:id/:name/:player"
            element={<MultiplayerGameRoom />}
          />
        </Routes>
        <Rules />
      </main>
    </Router>
  );
}

export default App;
