import { generateGameId } from '../util/onlineLogic';

function MultiplayerGame() {
  const gameId = generateGameId();
  const gameLink = `/online/${gameId}`;
  const handleCopyClick = () => {
    // Create a temporary input element
    const tempInput = document.createElement('input');
    // Set the value of the input to the generated game ID
    tempInput.value = gameLink;
    // Append the input to the body
    document.body.appendChild(tempInput);
    // Select the text in the input
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // For mobile devices
    // Execute the copy command
    document.execCommand('copy');
    // Remove the temporary input
    document.body.removeChild(tempInput);
    // Optionally, you can provide user feedback (e.g., a notification)
    alert(`Game ID copied: ${gameId}`);
  };

  return (
    <section className="flex flex-col lg:flex-row  gap-x-6 justify-center text-white border-2 border-header-outline bg-white bg-opacity-10  rounded-lg p-6 w-fit mx-auto">
      <div className="flex flex-col justify-center items-center gap-y-6 p-3">
        <p>Game id: {gameId}</p>
        <button
          onClick={handleCopyClick}
          className="text-white text-center border px-8 py-3 rounded-md hover:bg-white hover:text-black"
        >
          Create a game
        </button>
      </div>

      <div className="flex flex-col items-center gap-y-6 p-3 lg:border-l-2 lg:border-t-0  border-t border-header-outline">
        <p>Join a game</p>
        <input
          type="text"
          placeholder="enter the game id"
          className="mx-3 text-center py-3 rounded-md text-black"
        />
        <button
          onClick={handleCopyClick}
          className="text-white text-center border px-8 py-3 rounded-md hover:bg-white hover:text-black"
        >
          Join a game
        </button>
      </div>
    </section>
  );
}

export default MultiplayerGame;
