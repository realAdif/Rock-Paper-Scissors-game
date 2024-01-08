import LogoImage from '../assets/logo.svg';

function Header() {
  return (
    <div className="flex justify-center pt-6">
      <div className="border-2 border-header-outline rounded-lg p-3 w-[800px] flex justify-between ">
        <img src={LogoImage} alt="Rock,Paper and Scissors text image" />
        <div className="bg-white w-[150px] rounded-md flex flex-col items-center justify-center">
          <p className="text-score-text text-sm">SCORE</p>
          <h1 className="text-dark-text text-4xl font-bold">12</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
