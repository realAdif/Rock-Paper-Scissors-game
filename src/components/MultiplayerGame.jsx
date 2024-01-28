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
    <div className="flex justify-center text-white">
      <div className=" flex flex-col">
        <div className="text-center">
          <h1>Welcome send a link to a mate!</h1>
        </div>
        <div className="flex flex-col items-center gap-y-6">
          <p>Generated Game ID: {gameId}</p>
          <button
            onClick={handleCopyClick}
            className="text-white text-center border px-12 py-3 rounded-md hover:bg-white hover:text-black"
          >
            Copy
          </button>
        </div>
      </div>
    </div>
  );
}

export default MultiplayerGame;
