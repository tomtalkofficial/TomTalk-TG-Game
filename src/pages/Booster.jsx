/** @format */

import React, { useState } from "react";
import CountUp from "react-countup";
import { useSelector } from "react-redux";

import AppNav from "../layout/AppNav";
import BoosterModal from "../utils/BoosterModal";

const Booster = () => {
  const [isOpen1, setIsOpen1] = useState(false);

  const user = useSelector((state) => state.tom.user);
  const { totalCoins, lvl, telegramHandle } = user || {};

  const handleOpenModal = () => {
    setIsOpen1(true); // Open the modal
  };
  const handleCloseModal = () => {
    setIsOpen1(false); // Close the modal
  };

  const boosterCosts = {
    1: 2000,
    2: 4000,
    3: 8000,
    4: 16000,
    5: 32000,
    6: 64000,
    7: 128000,
    8: 256000,
    9: 512000,
    10: 1024000,
    11: 2048000,
    12: 4096000,
    13: 8192000,
    14: 16384000,
    15: 32768000,
    16: 65536000,
    17: 131072000,
    18: 262144000,
    19: 524288000,
    20: 1048576000,
    21: 2097152000,
    22: 4194304000,
    23: 8388608000,
    24: 16777216000,
    25: 33554432000,
    26: 67108864000,
    27: 134217728000,
    28: 268435456000,
    29: 536870912000,
    30: 1073741824000,
    31: 2147483648000,
    32: 4294967296000,
    33: 8589934592000,
    34: 17179869184000,
    35: 34359738368000,
    36: 68719476736000,
    37: 137438953472000,
    38: 274877906944000,
    39: 549755813888000,
    40: 1099511627776000,
  };

  // console.log(user?.nfts);

  // Get the corresponding booster cost for the user's level
  const boosterCost = boosterCosts[lvl];
  return (
    <div className=" sm:max-w-xs  w-full m-auto mb-40 rounded-lg shadow-2xl overflow-hidden relative">
      <div className="flex flex-col items-center justify-center  mt-10">
        <p className="text-white/80 text-lg text-center py-1 ">Your balance</p>
        <div className="flex justify-center items-center  mt-3  space-x-2  ">
          <img src="/talktom.png" className="rounded-full w-10" alt="" />
          <h3 className="text-white text-4xl  font-semibold">
            <CountUp
              delay={2}
              start={0}
              end={
                totalCoins > 0 ? totalCoins?.toFixed(1) : totalCoins?.toFixed(1)
              }
            />
          </h3>
        </div>
      </div>
      <div className="max-h-[500px] overflow-y-scroll custom-scrollbar mt-10 pb-52">
        <h2 className="text-white py-1  font-semibold mx-3">
          Free daily boosters
        </h2>

        <div className="bg-[#272a2f] py-4 my-2 rounded-lg mx-4 opacity-70 cursor-not-allowed relative">
          <div className="flex items-center space-x-3 px-3">
            <div className="flex items-center space-x-4">
              <div className="p-1">
                <img
                  src="w.png"
                  className="size-10 object-contain"
                  alt="gift_6145427"
                />
              </div>
              <div>
                <h2 className="text-white">Full energy</h2>
                <div className="flex items-center space-x-1">
                  <p className="text-white/35">
                    <small>Coming soon</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          href={`https://tomtalk.io/mint?userID=${telegramHandle}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#272a2f] py-2 my-2 rounded-lg mx-4 block relative"
        >
          <div className="flex items-center space-x-3 px-3">
            <div className="flex items-center space-x-4">
              <div className="p-1">
                <img
                  src="https://tomtalk.io/assets/images/nft.jpg"
                  className="size-10 object-contain"
                  alt="gift_6145427"
                />
              </div>
              <div>
                <h2 className="text-white font-bold">Mint Daily Free NFTs</h2>
                <div className="flex items-center space-x-1">
                  <p className="text-white/35 capitalize">
                    <small>its help to eligible for airdrop</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </a>
        <h2 className="text-white py-1 mt-10 font-semibold mx-3">Boosters</h2>
        <div
          className="bg-[#272a2f] py-4 my-2 rounded-lg mx-4 hover:opacity-70 cursor-pointer relative"
          onClick={handleOpenModal}
        >
          <div className="flex items-center space-x-3 px-3">
            <div className="flex items-center space-x-4">
              <div className="p-1">
                <img
                  src="money_1679475.png"
                  className="size-10 object-contain"
                  alt="gift_6145427"
                />
              </div>
              <div>
                <h2 className="text-white">MultiCoins</h2>
                <div className="flex items-center space-x-1">
                  <img
                    src="talktom.png"
                    className="w-5"
                    alt="coins"
                    loading="lazy"
                  />
                  <p className="text-white">
                    {boosterCost} - 1🖼️
                    <span className="text-white/50"> = {lvl + 1} lvl</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#272a2f] py-4 my-2 rounded-lg mx-4 opacity-70 cursor-not-allowed relative">
          <div className="flex items-center space-x-3 px-3">
            <div className="flex items-center space-x-4">
              <div className="p-1">
                <img
                  src="battery_11021030.png"
                  className="size-10 object-contain"
                  alt="gift_6145427"
                />
              </div>
              <div>
                <h2 className="text-white">Energy limit</h2>
                <div className="flex items-center space-x-1">
                  <img
                    src="talktom.png"
                    className="w-5"
                    alt="coins"
                    loading="lazy"
                  />
                  <p className="text-white">
                    1000 - <span className="text-white/50">Coming Soon</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AppNav />
      <BoosterModal show={isOpen1} onClose={handleCloseModal} />
    </div>
  );
};

export default Booster;
