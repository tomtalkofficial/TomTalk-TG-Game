/** @format */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { claimDailyReward } from "../redux/rewardsSlice";
import toast from "react-hot-toast";

const rewards = [
  { id: 1, coins: "500" },
  { id: 2, coins: "1k" },
  { id: 3, coins: "2k" },
  { id: 4, coins: "4k" },
  { id: 5, coins: "8k" },
  { id: 6, coins: "16k" },
  { id: 7, coins: "32K" },
];

const DailyRewards = ({ show, onClose }) => {
  const dispatch = useDispatch();
  const { loading, message, error } = useSelector((state) => state.rewards);
  const { telegramHandle, streakDay } = useSelector((state) => state.tom.user);

  // Handle the reward claim process and toast notifications within this function
  const handleClaim = () => {
    if (telegramHandle && !loading) {
      dispatch(claimDailyReward(telegramHandle)).then(() => {
        // Check if there's a message or error after the dispatch completes
        if (message) {
          toast.success(message);
          onClose();
        } else if (error) {
          toast.error(error);
        }
      });
    }
  };

  if (!show) return null;

  const isRewardClaimed = (dayId) => dayId < streakDay;

  return (
    <div className="fixed inset-0 flex flex-wrap justify-center items-end w-full h-full z-[1000] bottom-0 backdrop-blur-sm end-0 before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto">
      <div className="w-full sm:max-w-xs bg-[#1d1e23] border-[#e2b446] border-t-[4px] rounded-t-2xl p-6 relative">
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
            <img src="/calendar_3869087.png" className="w-16" alt="" />
            <h3 className="text-white text-4xl mt-4 font-semibold">
              Daily Reward
            </h3>
            <p className="text-white/80 text-sm text-center py-1">
              Accrue coins for logging into the game daily without skipping
            </p>
          </div>
          {/* Rewards Cards */}
          <div className="grid grid-cols-4 gap-2 mt-2 place-content-center justify-center text-center">
            {rewards.map((value) => {
              const isClaimed = isRewardClaimed(value.id);
              const isCurrentDay = value.id === streakDay;

              return (
                <div
                  key={value.id}
                  onClick={() => {
                    if (isCurrentDay && !isClaimed && !loading) {
                      handleClaim();
                    }
                  }}
                  className={`w-full py-2 my-2 rounded-lg relative cursor-pointer 
                    ${isCurrentDay && !isClaimed ? "border-2 border-yellow-400" : ""} 
                    ${isClaimed ? "bg-yellow-400 opacity-50 cursor-not-allowed" : "bg-[#272a2f] hover:opacity-70"}`}
                >
                  <h4 className="text-white font-bold">Day {value.id}</h4>
                  <div className="py-2">
                    <img
                      src="talktom.png"
                      className="size-8 object-contain m-auto"
                      alt="gift_6145427"
                    />
                  </div>
                  <h4 className="text-white font-bold">{value.coins}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyRewards;
