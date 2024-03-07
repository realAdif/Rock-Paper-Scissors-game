import { useEffect, useState } from 'react';
import { addPlayer, getGameById } from '../../api/gameAPI';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function MultiplayerJoin() {
  const { id } = useParams();
  const [username, setUsername] = useState('Ace123');
  const [player, setPlayer] = useState({});
  const [playerCount, setPlayerCount] = useState();
  const [error, setError] = useState('');
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  let playerObject = {
    username: username,
    isActive: true,
    score: 0,
  };

  // this is button to add the new player to the game
  async function handleJoinGame(newPlayer) {
    try {
      const updateGame = await addPlayer(id, newPlayer);
      console.log('Successfully added player to the game:', updateGame);
      navigate(`/lobby/${id}/${username}/1`, {
        state: { playerTwo: playerObject },
      });
    } catch (error) {
      console.error('Error adding player to the game:', error);
      // Check if error.response is defined and has a status property
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
          setError('Can not find the game');
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
    <section className="container mx-auto bg-box-color rounded-lg p-6 gap-y-6 gap-x-6 flex flex-col-reverse lg:flex-row justify-between text-sm w-fit ">
      <div className="w-[260px] flex flex-col justify-between">
        <h1 className="text-center">Status</h1>
        <table className="table-auto text-center w-full my-2 ">
          <tr>
            <th>id</th>
            <th>Name</th>
          </tr>
          <tr className="text-green-600">
            <th>0</th>
            <th>
              {player.player1
                ? `${player.player1.username}`
                : 'waiting for player'}
            </th>
          </tr>
        </table>
        <p>Your Name: {username}</p>
      </div>
      <div className="w-[260px] flex flex-col justify-between">
        <h1 className="text-center">Join a game</h1>
        <input
          type="text"
          className="w-full my-2"
          name="player2Username"
          id="/"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <p>{error}</p>
        <button
          className="btn-primary w-full"
          onClick={() => handleJoinGame(playerObject)}
        >
          Join game
        </button>
      </div>
    </section>
  );
}

export default MultiplayerJoin;
