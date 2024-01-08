import bgImage from '../assets/bg-triangle.svg';
import iconPaperImage from '../assets/icon-paper.svg';
import iconRockImage from '../assets/icon-rock.svg';
import iconScissorsImage from '../assets/icon-scissors.svg';

function UserSelection() {
  return (
    <div className="flex justify-center">
      <div className="mt-32 relative">
        <img src={bgImage} alt="background Triangle" className="" />

        <button className="bg-white w-[140px] h-[140px] flex justify-center items-center rounded-full bg-gradient-to-b from-[#4865f4] to-[#5671f5] drop-shadow-lg absolute -top-12 -left-10  ">
          <img
            src={iconPaperImage}
            alt="paper icon"
            className="bg-white rounded-full w-[100px] h-[100px] p-4"
          />
        </button>
        <button className="bg-white w-[140px] h-[140px] flex justify-center items-center rounded-full bg-gradient-to-b from-[#ec9e0e] to-[#eca922] drop-shadow-lg absolute -top-12 -right-10">
          <img
            src={iconScissorsImage}
            alt="scissors icon"
            className="bg-white rounded-full w-[100px] h-[100px] p-4"
          />
        </button>
        <button className="bg-white w-[140px] h-[140px] flex justify-center items-center rounded-full bg-gradient-to-b from-[#dc2e4e] to-[#dd405d] drop-shadow-lg absolute -bottom-12 left-1/2 transform -translate-x-1/2 ">
          <img
            src={iconRockImage}
            alt="scissors icon"
            className="bg-white rounded-full w-[100px] h-[100px] p-4"
          />
        </button>
      </div>
    </div>
  );
}

export default UserSelection;
