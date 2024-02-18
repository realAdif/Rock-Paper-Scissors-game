import { useEffect, useState } from 'react';
import { getGameById } from '../api/gameAPI';
import { useParams } from 'react-router-dom';
function MultiplayerJoin() {
  const { id } = useParams();
  const [player, setPlayer] = useState({});
  const [playerCount, setPlayerCount] = useState();
  const [data, setData] = useState(null);
  // this is button to add the new player to the game
  async function handleJoinGame() {
    try {
      const fetchedGame = await getGameById(id);
      console.log('Fetched game:', fetchedGame);
    } catch (error) {
      console.error('Error creating or fetching game:', error);
      if (error.response && error.response.status) {
        console.error('Status code:', error.response.status);
      }
    }
  }
  // this function will get a status of the players
  useEffect(() => {
    async function fetchData() {
      try {
        const newData = await getGameById(id);
        console.log('Fetched data:', newData);
        setPlayerCount(newData.players.length);
        setData(newData);
      } catch (error) {
        console.error('Error creating or fetching game:', error);
        if (error.response && error.response.status) {
          console.error('Status code:', error.response.status);
        }
      }
    }
    fetchData();
  }, []);
  // if the data changes this updates the state
  useEffect(() => {
    if (data !== null) {
      setPlayer((prevPlayer) => ({
        ...prevPlayer,
        player1: data.players[0],
      }));
    } else {
      console.log('missing data');
    }
  }, [data]);

  return (
    <main className=" container mx-auto h-full text-white w-fit  gap-y-12">
      <h1 className="text-center">Lobby</h1>

      {/* info */}
      <p>
        player admin: Is{' '}
        {player.player1 ? `${player.player1.username}` : 'waiting for player'}
      </p>
      <p>player count: {playerCount} </p>
      <p>game id : {id} </p>

      {/* input */}
      <input
        type="text"
        name="player2Username"
        id="/"
        placeholder="username"
        className="my-8 mr-3  p-2 rounded-md"
      />
      {/* start game button */}
      <button onClick={() => handleJoinGame()}>Join game</button>
    </main>
  );
}

export default MultiplayerJoin;
