/** @format */

import { useState } from "react";
import { Link } from "react-router-dom";
import SoonModal from "../utils/SoonModal";
import { useSelector } from "react-redux";
import LoadingScreen from "../utils/LoadingScreen";

const TopMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsOpen(false); // Close the modal
  };
  const taskStatus = useSelector((state) => state.tom.user);
  const userTask = taskStatus?.Tasks?.[0]; // Safely access the first task

  // Optional: handle cases where the task is not defined yet
  if (!taskStatus || !taskStatus.Tasks) {
    return <LoadingScreen />;
  }

  return (
    <div className="grid grid-cols-4 gap-2 relative z-50 mt-1">
      <a
        href={`https://tomtalk.io/mint?userID=${taskStatus?.telegramHandle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#272a2f]  relative py-2 cursor-pointer hover:opacity-80  flex flex-col justify-between rounded-lg"
      >
        <span className=" absolute flex h-3 w-3 right-0 top-0">
          <span className="animate-ping absolute right-0 end-0 inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-400" />
        </span>

        <div className="flex justify-center">
          <img
            src="https://tomtalk.io/assets/images/nft.jpg"
            className="w-8"
            alt=""
          />
        </div>
        <div>
          <p className="text-white text-center text-[10px]">Mint daily NFTs</p>
          <p className="text-gray-400 font-semibold text-center text-[10px]">
            🔥 {taskStatus?.nfts?.length}
          </p>
        </div>
      </a>
      <Link
        to="/friends"
        className="bg-[#272a2f]  relative flex flex-col justify-between py-2 rounded-lg cursor-pointer hover:opacity-80 max-w-"
      >
        <span className=" absolute flex h-3 w-3 right-0 top-0">
          <span className="animate-ping absolute right-0 end-0 inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-400" />
        </span>
        <div className="flex justify-center">
          <img src="friends.png" className="w-6" alt="" />
        </div>
        <div>
          <p className="text-white text-center text-[10px]">Invite Friends</p>
          <p className="text-gray-400 font-semibold text-center text-[10px]">
            {userTask?.referredCont || 0}
          </p>
        </div>
      </Link>
      <Link
        className="bg-[#272a2f]  relative flex flex-col justify-between py-2 rounded-lg cursor-pointer hover:opacity-80"
        to="/spin"
      >
        <span className=" absolute flex h-3 w-3 right-0 top-0">
          <span className="animate-ping absolute right-0 end-0 inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-400" />
        </span>
        <div className="flex justify-center">
          <img src="roulette.png" className="w-8" alt="" />
        </div>
        <div>
          <p className="text-white text-center text-[10px]">Daily Spin</p>
          <p className="text-gray-400 font-semibold text-center text-[10px]">
            00:00
          </p>
        </div>
      </Link>
      <Link
        to="/gameMenu"
        className="bg-[#272a2f]  relative flex flex-col justify-between py-2 rounded-lg cursor-pointer hover:opacity-80"
      >
        <span className=" absolute flex h-3 w-3 right-0 top-0">
          <span className="animate-ping absolute right-0 end-0 inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-400" />
        </span>
        <div className="flex justify-center">
          <img src="game-boy_10538901.png" className="w-6" alt="" />
        </div>
        <div>
          <p className="text-white text-center text-[10px]">Mini Game</p>
          <p className="text-gray-400 font-semibold text-center text-[10px]">
            Play Now
          </p>
        </div>
      </Link>
      {/* {isOpen && (
        <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto ">
          <div className="w-full max-w-xs  shadow-lg rounded-lg p-6 relative">
            <svg
              onClick={() => {
                setIsOpen(false);
              }}
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 cursor-pointer shrink-0 fill-gray-900 p-1 bg-white rounded-full hover:fill-red-500   m-auto"
              viewBox="0 0 320.591 320.591"
            >
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"
              />
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"
              />
            </svg>
            <div className=" text-center">
              <img src="soon.png" className="w-full" alt="" />
            </div>
          </div>
        </div>
      )} */}
      <SoonModal show={isOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default TopMenu;
