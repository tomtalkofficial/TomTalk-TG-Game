/** @format */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { applyBooster } from "../redux/rewardsSlice";
import toast from "react-hot-toast";
import { checkIfUserExists } from "../redux/tomSlice";
import axios from "axios";

const BoosterModal = ({ show, onClose }) => {
  const user = useSelector((state) => state.tom.user);
  const { telegramHandle, lvl, nfts } = user || {};
  const { loading } = useSelector((state) => state.rewards);
  const dispatch = useDispatch();

  const handleApplyBooster = async () => {
    if (telegramHandle) {
      try {
        const response = await axios.put(
          `https://talkingtom-apis.onrender.com/api/nfts/remove-last/tom/${telegramHandle}`,
        );
        if (response.data?.status === "success") {
          dispatch(applyBooster(telegramHandle))
            .unwrap()
            .then((result) => {
              toast.success(result.message);
              dispatch(checkIfUserExists(telegramHandle));
              onClose();
            })
            .catch((err) => {
              toast.error(err);
            });
        }
      } catch (error) {
        toast.error("ErrorNFT: " + error.message);
      }
    }
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

  // Get the corresponding booster cost for the user's level
  const boosterCost = boosterCosts[lvl];

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex flex-wrap justify-center items-end w-full h-full z-[1000] bottom-0 end-0 backdrop-blur-sm before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto">
      <div className="w-full sm:max-w-xs bg-[#1d1e23] border-[#e2b446] border-t-[4px] rounded-t-2xl p-6  relative">
        <svg
          onClick={onClose}
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 cursor-pointer relative shrink-0 fill-gray-900 p-1 bg-white/50 rounded-full hover:fill-red-500 float-end"
          viewBox="0 0 320.591 320.591"
        >
          <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" />
          <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" />
        </svg>
        <div className="text-center">
          <div className="flex flex-col items-center justify-center">
            <img src="/money_1679475.png" className="w-16" alt="" />
            <h3 className="text-white text-4xl mt-4 font-semibold">
              MultiCoins
            </h3>
            <p className="text-white/80 text-sm text-center py-1">
              increase the amount of coins you can earn per voice/tap
            </p>
            <p className="text-white/80 text-lg text-center font-semibold py-1">
              +1 coin for voice/tap for level {lvl ? lvl + 1 : 1}
            </p>
          </div>
          {nfts?.length === 0 ? (
            <div className="flex justify-center items-center   space-x-2 my-5">
              <img
                src="https://tomtalk.io/assets/images/nft.jpg"
                className=" rounded-lg w-10"
                alt=""
              />
              <h2 className="text-red-400 italic text-2xl font-bold ">
                {nfts?.length} NFTs Found
              </h2>
            </div>
          ) : (
            <div className="flex justify-center items-center   space-x-2 my-5">
              <img src="/talktom.png" className="rounded-full w-6" alt="" />
              <h2 className="text-white text-2xl font-bold ">
                {boosterCost} + 1🖼️ -{" "}
                <span className="text-white/50">{lvl + 1} lvl</span>
              </h2>
            </div>
          )}
          {nfts?.length === 0 ? (
            <>
              <a
                href={`https://tomtalk.io/mint?userID=${telegramHandle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-500 w-2/3 rounded-xl block mb-5  m-auto text-black text-2xl font-bold py-2 hover:opacity-65 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Burn NFTs
              </a>
              <p className="text-yellow-400 italic animate-bounce">
                NFTs are required for Boost
              </p>
            </>
          ) : (
            <button
              onClick={() => handleApplyBooster()}
              disabled={nfts?.length === 0 ? true : false || loading}
              className="bg-yellow-500 w-2/3 rounded-xl block mb-5  m-auto text-black text-2xl font-bold py-2 hover:opacity-65 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Applying..." : " Go ahead"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BoosterModal;
