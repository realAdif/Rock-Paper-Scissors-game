import { useParams, useNavigate } from 'react-router-dom';
import useFetchPlayers from '../../hooks/useFetchPlayers';

function MultiplayerLobby() {
  const { id, name, playerId } = useParams();
  const navigate = useNavigate();
  const { playerOne, playerTwo } = useFetchPlayers(id);

  function handleGameNavigate() {
    console.log('Navigating to game');
    if (playerOne.username != null && playerTwo.username != null) {
      console.log('Navigating to game 1');
      navigate(`/online/${id}/${name}/${playerId}`);
    }
  }
  return (
    <section className="container mx-auto bg-box-color rounded-lg p-6 gap-y-6 gap-x-6 flex flex-col-reverse lg:flex-row justify-between text-sm w-fit backdrop-blur-md ">
      <div className="w-[260px] flex flex-col justify-between">
        <h1 className="text-center">Loddy</h1>
        <table className="text-center w-full my-2 bg-black bg-opacity-20 rounded-md border border-white border-opacity-50 drop-shadow-lg ">
          <thead className="bg-blue-500 rounded-t-md ">
            <tr>
              <th>id</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border border-white border-opacity-50">
              <th>0</th>
              <th>{playerOne.username ? playerOne.username : 'Loading..'}</th>
            </tr>
            <tr className="border-y-2 border border-white border-opacity-50">
              <th>1</th>
              <th> {playerTwo.username ? playerTwo.username : 'Loading..'}</th>
            </tr>
          </tbody>
        </table>
        <button className="btn-primary" onClick={handleGameNavigate}>
          Start!
        </button>
        <p className="mt-2 text-xs text-center">
          Multiplayer mode is under development
        </p>
      </div>
    </section>
  );
}

export default MultiplayerLobby;
