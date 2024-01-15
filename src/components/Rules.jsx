import iconPaperImage from '../assets/icon-paper.svg';
import iconRockImage from '../assets/icon-rock.svg';
import iconScissorsImage from '../assets/icon-scissors.svg';

function Rules() {
  return (
    <div className="bg-white w-fit p-6 rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl text-dark-text">RULES</h1>
        <button>
          <img src="" alt="close icon" className="w-[20px] h-[20px]" />
        </button>
      </div>
      <button className="cursor-pointer p-6">
        <img src="" alt="image of te rules" />
      </button>
    </div>
  );
}

export default Rules;
