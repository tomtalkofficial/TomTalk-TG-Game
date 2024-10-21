import React, { useState } from "react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AppNav from "../layout/AppNav";
import GameModal from "../utils/GameModal";

const MiniGamesMenu = () => {
  const user = useSelector((state) => state.tom.user);
  const [isOpen1, setIsOpen1] = useState(false);

  const { totalCoins } = user || {};
  const handleOpenModal = () => {
    setIsOpen1(true); // Open the modal
  };
  const handleCloseModal = () => {
    setIsOpen1(false); // Close the modal
  };
  function formatNumber(num) {
    if (num >= 1e9) {
      return (num / 1e9).toFixed(1) + "B"; // Billion
    } else if (num >= 1e6) {
      return (num / 1e6).toFixed(1) + "M"; // Million
    } else if (num >= 1e3) {
      return (num / 1e3).toFixed(1) + "k"; // Thousand
    }
    return num?.toString(); // Less than 1000, no formatting
  }

  const formattedProfitPerHour = formatNumber(totalCoins);

  return (
    <div className=" sm:max-w-xs  w-full m-auto mb-40 rounded-lg sm:shadow-2xl overflow-hidden relative">
      <div className="flex flex-col items-center justify-center  mt-10">
        <div className="flex flex-col items-center justify-center ">
          <img src="/talktom.png" className="rounded-full size-16 sh" alt="" />
        </div>

        <div className="flex justify-center items-center  mt-3  space-x-2  ">
          <img src="/talktom.png" className="rounded-full w-10" alt="" />
          <h3 className="text-white text-4xl  font-semibold">
            {formattedProfitPerHour}
          </h3>
        </div>
        <h3 className="text-white text-4xl mt-5 font-semibold">Mini Games</h3>
      </div>
      <div className="max-h-[400px] overflow-y-scroll custom-scrollbar   rounded-t-2xl  mt-3 border-t-[2px]  border-[rgb(226,180,70)]">
        <h2 className="text-white py-4  font-semibold mx-3">Live Game</h2>
        <div className="grid grid-cols-2">
          <button
            onClick={handleOpenModal}
            className="bg-[#272a2f] py-4 my-2 rounded-lg mx-4  relative border border-yellow-300/20"
          >
            <div className="flex items-center justify-center space-x-3 px-3">
              <div className="flex flex-col justify-center items-center space-y-2">
                <div>
                  <img
                    src="gm.png"
                    className="w-full rounded-md "
                    alt="gift_6145427"
                  />
                </div>
                <div>
                  <h2 className="text-white text-lg">Snake Game</h2>
                </div>
              </div>
            </div>
          </button>
        </div>
        <div className=" py-5 flex justify-center items-center">
          <h2 className="text-white text-2xl">More games coming soon...</h2>
        </div>
      </div>

      <AppNav />
      <GameModal show={isOpen1} onClose={handleCloseModal} />
    </div>
  );
};

export default MiniGamesMenu;
