/** @format */

import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useDispatch, useSelector } from "react-redux";
import useRequest from "@ahooksjs/use-request";
import useSound from "use-sound";
import mineSound from "../music/earn.mp3";
import AppNav from "../layout/AppNav";
import LoadingScreen from "../utils/LoadingScreen";
import toast from "react-hot-toast";
import axios from "axios";
import { checkIfUserExists } from "../redux/tomSlice";
import { MdOutlineRefresh } from "react-icons/md";

const Spin = () => {
  const dispatch = useDispatch();
  const VITE_API_URL = import.meta.env.VITE_API_URL;
  const user = useSelector((state) => state.tom.user);
  const { totalCoins, lastSpinDate, telegramHandle, spinAmount } = user || {};
  const [activeSpin, setActiveSpin] = useState(false);
  const [canSpin, setCanSpin] = useState(false);
  const userTask = user?.Tasks?.[0]; // Safely access the first task
  const [remainingTime, setRemainingTime] = useState("");
  // Optional: handle cases where the task is not defined yet
  if (!userTask || !user.Tasks) {
    return <LoadingScreen />;
  }
  const [play] = useSound(mineSound);
  const lastSpin = new Date(lastSpinDate);
  // Calculate remaining spin time
  useEffect(() => {
    if (lastSpin) {
      const interval = setInterval(() => {
        const now = new Date();
        const timeSinceLastSpin = now - lastSpin;
        const hoursSinceLastSpin = timeSinceLastSpin / (1000 * 60 * 60);
        const hoursLeft = 24 - hoursSinceLastSpin;
        // console.log(hoursLeft);

        if (hoursLeft <= 0) {
          setRemainingTime("You can spin now!");
          setCanSpin(true);
          clearInterval(interval);
        } else {
          const hours = Math.floor(hoursLeft);
          const minutes = Math.floor((hoursLeft - hours) * 60);
          const seconds = Math.floor(((hoursLeft - hours) * 60 - minutes) * 60);
          setRemainingTime(`${hours} : ${minutes} : ${seconds}`);
          // console.log(remainingTime);

          setCanSpin(false);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [lastSpin]);
  const fetchData = () => {
    if (telegramHandle) {
      dispatch(checkIfUserExists(telegramHandle));
    }
  };
  const handleSpin1 = async () => {
    setActiveSpin(true);
    const spinAmount = Math.floor(1 + Math.random() * 5000);

    try {
      const response = await axios.put(`${VITE_API_URL}/spin`, {
        telegramHandle,
        spinAmount: spinAmount, // Example spin amount
      });

      if (response.data.message === "Spin successful") {
        toast.custom((t) => (
          <div
            className={`${
              t.visible ? "animate-enter" : "animate-leave"
            } max-w-md w-full bg-[#272A2F]  shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
          >
            <div className="flex-1 w-0 p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="talktom.png"
                    alt=""
                  />
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-white">
                    Congratulation!
                  </p>
                  <p className="mt-1 text-sm text-gray-200">
                    You Win{" "}
                    <strong className="text-yellow-500">{spinAmount}</strong>{" "}
                    Coins
                  </p>
                </div>
              </div>
            </div>
            <div className="flex border-l border-gray-400">
              <button
                onClick={() => toast.dismiss(t.id)}
                className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-yellow-600 hover:text-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                Close
              </button>
            </div>
          </div>
        ));
        play();
        fetchData(); // Refresh last spin date
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error spinning:", error);
      toast.error(error?.response?.data?.message || "Spin failed. Try again.");
    } finally {
      setTimeout(() => {
        setActiveSpin(false);
      }, 2000);
    }
  };

  useRequest(fetchData, {
    loadingDelay: 500,
    pollingInterval: 1000,
    pollingWhenHidden: false,
    refreshOnWindowFocus: true,
    throttleInterval: 1000,
    throwOnError: true,
  });

  return (
    <div className=" sm:max-w-xs  w-full m-auto mb-40 rounded-lg shadow-2xl overflow-hidden relative">
      <div className="flex flex-col items-center justify-center  mt-4">
        <p className="text-white/80 text-lg text-center py-1 ">Your balance</p>
        <div className="flex justify-center items-center    space-x-2  ">
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
      <div className="px-3 py-4 lg:pb-56  rounded-t-2xl  mt-3 border-t-[2px]  border-[rgb(226,180,70)]">
        <div className="flex flex-col items-center justify-center ">
          <h3 className="text-white text-4xl mt-4 font-semibold">Daily Spin</h3>
          <p className="text-white/80 text-sm text-center py-2 ">
            <strong className="text-white">
              Every 24 hours, you’ll get one spin.{" "}
            </strong>
            <br />
            Take your chance and you could win anywhere from 1 to 5000 Tom Coins
          </p>
        </div>
        <div
          className={`flex  items-center justify-center py-3 ${activeSpin ? "animate-spin" : ""}`}
        >
          <img src="/spin1.png" className="w-5/6" alt="" />
        </div>
        <div className="flex justify-center  items-center py-2">
          <button
            className="full-rounded spin  disabled:opacity-45 disabled:cursor-not-allowed"
            onClick={handleSpin1}
            // disabled={!canSpin}
          >
            <span>
              {activeSpin
                ? "Spinning..."
                : canSpin
                  ? "Spin Now"
                  : "Please Wait"}
            </span>
            <div className="borders full-rounded" />
          </button>
          <button className="text-white text-3xl" onClick={fetchData}>
            <MdOutlineRefresh />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between   px-1 fixed z-50 w-full sm:max-w-xs  h-auto bottom-20     ">
        <div className="flex items-center space-x-2  ">
          <img src="reward.png" className="w-6" alt="" />
          <p className="text-white text-sm">
            <span>Last Win:</span> {spinAmount || 0}
          </p>
        </div>
        <div className="flex items-center space-x-2   ">
          <img src="roulette.png" className="w-6" alt="" />
          <p className="text-white text-sm">
            {user?.spin ? remainingTime : "You can spin now!"}
          </p>
        </div>
      </div>
      {/*  */}
      <AppNav />
    </div>
  );
};

export default Spin;
