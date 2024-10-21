/** @format */

import Header from "../layout/Header";
import axios from "axios";

import AppNav from "../layout/AppNav";
import TopMenu from "../components/TopMenu";
import Game from "../utils/Game";
import { useDispatch, useSelector } from "react-redux";
import { createNewUser, checkIfUserExists } from "../redux/tomSlice";
import { updateTotalCoins } from "../redux/counterSlice";
import { useCallback, useEffect, useState } from "react";
import LoadingScreen from "../utils/LoadingScreen";
import { calculateProfit } from "../redux/profitSlice";
import useDebounce from "../utils/useDebounce";
import { Link } from "react-router-dom";
import { useMicrophone } from "../contexts/MicrophoneContext";
import toast from "react-hot-toast";
import useSound from "use-sound";
import mineSound from "../music/earn.mp3";

const Home = () => {
  const count = useSelector((state) => state.counter.value);
  const status = useSelector((state) => state.tom.status);
  const user = useSelector((state) => state.tom.user);
  const [displayedCoins, setDisplayedCoins] = useState(user?.totalCoins);
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("Tab1");
  const debouncedCount = useDebounce(count, 100);
  const [isAnimating, setIsAnimating] = useState(false);
  const { setStream } = useMicrophone();
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [profitRate, setProfitRate] = useState(0);
  const { telegramHandle, userName, lvl, totalCoins } = user || {};
  const [play] = useSound(mineSound);

  const userTask = user?.Tasks?.[0]; // Safely access the first task
  const VITE_API_URL = import.meta.env.VITE_API_URL;
  const fetchProfit = () => {
    if (telegramHandle) {
      dispatch(calculateProfit(telegramHandle))
        .unwrap()
        .then((result) => {
          if (result?.status === "success") {
            setProfitRate(result?.coinsAdded);
          }
        });
      setDisplayedCoins(user?.totalCoins);
    }
  };

  const handleOpenModal = () => {
    setIsOpen(true); // Open the modal

    localStorage.setItem("modalOpened", "true");
  };

  useEffect(() => {
    if (user?.profitStartTime) {
      const modalOpened = localStorage.getItem("modalOpened");
      fetchProfit();
      // If not opened before, open it for the first time
      if (!modalOpened) {
        fetchProfit();
        handleOpenModal();
      }
    }
  }, []);


  const updateCoins = useCallback(() => {
    // console.log(debouncedCount);

    if (!user?.telegramHandle) {
      console.error(
        "Error: user is not available or does not have a telegramHandle",
      );
      return;
    }

    if (isNaN(debouncedCount)) {
      console.error("Error: debouncedCount is NaN");
      return;
    }

    dispatch(
      updateTotalCoins({
        telegramHandle: user.telegramHandle,
        amount: Number(lvl || 1),
      }),
    );
    dispatch(checkIfUserExists(user?.telegramHandle));
  }, [dispatch, user?.telegramHandle, debouncedCount]);

  useEffect(() => {
    if (count) {
      updateCoins();
    }
  }, [count, updateCoins]);

  const formatNumber = (number) => {
    return Math.floor(number).toLocaleString();
  };
  const fetchData = async () => {
    if (user?.telegramHandle) {
      dispatch(checkIfUserExists(user?.telegramHandle));
    }
  };




  const handleVibration = async () => {
    if (!user?.telegramHandle) return;
    dispatch(checkIfUserExists(user?.telegramHandle));
    setIsAnimating(true);

    // Smoothly increment displayed coins over 500ms
    let increment = lvl || 1;
    let incrementStep = increment / 10;

    let stepCount = 0;
    let interval = setInterval(() => {
      if (stepCount < 10) {
        setDisplayedCoins((prev) => prev + incrementStep);
        stepCount++;
      } else {
        clearInterval(interval);
      }
    }, 50); // Update coins every 50ms to create a smooth effect

    if (navigator.vibrate) {
      navigator.vibrate(100); // Vibrate for 200ms
    }

    try {
      await dispatch(
        updateTotalCoins({
          telegramHandle: user.telegramHandle,
          amount: increment,
        }),
      );
    } catch (error) {
      console.error("Error updating coins:", error);
      setDisplayedCoins((prev) => prev - increment); // Revert UI update if API fails
    }

    setTimeout(() => setIsAnimating(false), 200);
  };
  function formatNumbers(num) {
    if (num >= 1e9) {
      return (num / 1e9).toFixed(1) + "B"; // Billion
    } else if (num >= 1e6) {
      return (num / 1e6).toFixed(1) + "M"; // Million
    } else if (num >= 1e3) {
      return (num / 1e3).toFixed(1) + "k"; // Thousand
    }
    return num?.toString(); // Less than 1000, no formatting
  }
  const formattedProfitRate = formatNumbers(profitRate);

  const handleClaimProfit = async () => {
    if (!user?.telegramHandle && profitRate !== 0) {
      console.log("Error: User is not available.");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.put(
        `${VITE_API_URL}/claim-profit/tom/${user.telegramHandle}`, // API endpoint
        { amount: profitRate }, // Request body with amount
      );

      if (response.data?.status === "success") {
        toast.success("Profit claimed successfully!");
        setDisplayedCoins((prev) => prev + profitRate);
        fetchData();
        setLoading(false);

        play();
        setIsOpen(false);
      } else {
        console.log(response.data.message || "Error claiming profit.");
        setLoading(false);
      }
    } catch (error) {
      console.error("Error claiming profit:", error);
      console.log("An error occurred while claiming the profit.");
      setLoading(false);
    }
  };

  if (status === "loading") {
    return <LoadingScreen />;
  }
  const coins = user?.totalCoins;
  return (
    <div className="  w-full sm:max-w-xs  m-auto h-screen rounded-lg  relative shadow-2xl overflow-hidden ">
      <Header user={user} />
      <div className="px-3 pb-36 lg:pb-56  bg-[#1d1e23]  rounded-t-2xl  overflow-hidden  shadow_top    border-[#e2b446] relative border-t-[2px] ">
        <TopMenu />
        {/* Score */}
        <div className=" ">
          <div className="flex justify-center items-center   space-x-2  pt-2">
            <img src="/talktom.png" className="rounded-full w-8" alt="" />
            <p className="text-white text-4xl  font-bold ">
              {/* {(activeTab === "Tab1" && formatNumber(displayedCoins)) || 0} */}
              {activeTab === "Tab2"
                ? formatNumber(coins)
                : formatNumber(displayedCoins)}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center  mt-3 relative z-50">
          {/* Tab Headers */}
          <div className="flex  justify-center bg-[#000]  rounded-xl">
            <button
              className={`px-4 py-2 text-sm font-bold rounded-xl ${
                activeTab === "Tab1"
                  ? " bg-[#e2b446] text-[#1d1e23] shadow-2xl"
                  : "text-white border border-[#e2b446]"
              }`}
              onClick={() => setActiveTab("Tab1")}
            >
              Tap To Earn
            </button>
            <button
              className={`ml-2 px-4 py-2 text-sm, font-bold rounded-xl ${
                activeTab === "Tab2"
                  ? "bg-[#e2b446] text-[#1d1e23] shadow-2xl"
                  : "text-white border border-[#e2b446]"
              }`}
              onClick={() => {
                setActiveTab("Tab2");
                // handleVoice();
              }}
            >
              Talk To Earn
            </button>
          </div>

          {/* Tab Content */}
          <div className="mt-4 w-full">
            {activeTab === "Tab1" && (
              <div
                onClick={handleVibration} // Trigger vibration and animation on click
                className={`flex justify-center items-center m-auto rounded-full object-contain bg-[url('/speaker.png')] bg-no-repeat bg-center bg-cover w-full max-w-[350px]  aspect-[1/1] sm:max-w-full sm:h-auto  ${
                  isAnimating ? "shad scale-105" : "" // Add shadow class when animating
                }`}
              >
                <div
                  className={`flex  absolute top-1/2 left-1/2 transform gap-3 -translate-x-1/2 -translate-y-1/2   justify-center  ${isAnimating ? "block" : "hidden"}`}
                >
                  <h3 className="text-white text-2xl coin font-bold">+{lvl}</h3>
                </div>
                <div
                  className={`flex  absolute top-1/2 left-[40%] transform gap-3 -translate-x-1/2 -translate-y-1/2   justify-center  ${isAnimating ? "block" : "hidden"}`}
                >
                  <h3 className="text-white text-2xl coin1 font-bold">
                    +{lvl}
                  </h3>
                </div>

                <div
                  className={`flex  absolute top-1/2 left-[60%] transform gap-3 -translate-x-1/2 -translate-y-1/2   justify-center  ${isAnimating ? "block" : "hidden"}`}
                >
                  <h3 className="text-white text-2xl coin2 font-bold">
                    +{lvl}
                  </h3>
                </div>
                {/* <img
                  src="/tapcat.png"
                  className="sm:w-36 w-36 aspect-square object-contain"
                  alt=""
                  loading="lazy"
                /> */}
                <div className="bg-[url(/Layer02.png)] bg-no-repeat bg-contain bg-center sm:w-36 w-64 h-64 " />
                {/* <img
                  src="/tapcat.png"
                  className="sm:w-36 w-36 absolute   animate-none "
                  loading="lazy"
                  alt=""
                /> */}
              </div>
            )}
            {activeTab === "Tab2" && <Game />}
          </div>
        </div>

        {/* Health  */}
        <div className="flex items-center justify-between    px-1 fixed z-50 w-full sm:max-w-xs  h-auto bottom-20     ">
          <Link to="/booster" className="flex items-center space-x-2  ">
            <img src="ladder_10552892.png" className="w-6" alt="" />
            <p className="text-white text-sm">LvL {lvl}</p>
          </Link>
          {/* <div className="flex items-center space-x-2  opacity-45 ">
            <img src="w.png" className="w-3" alt="" />
            <p className="text-white text-sm">1500/1500</p>
          </div> */}
          <Link to="/booster" className="flex items-center space-x-2   mr-5 ">
            <img src="booster.png" className="w-5" alt="" />
            <p className="text-white text-sm">Booster</p>
          </Link>
        </div>
      </div>
      <div className="">
        <AppNav />
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex flex-wrap justify-center items-end w-full h-full z-[1000] bottom-0 end-0 before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.62)] backdrop-blur-sm overflow-auto ">
          <div className="w-full sm:max-w-xs bg-[#1d1e23] border-[#e2b446] border-t-[4px] rounded-t-2xl p-6 relative">
            <svg
              onClick={() => {
                setIsOpen(false);
              }}
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 cursor-pointer relative shrink-0 fill-gray-900 p-1 bg-white/50 rounded-full hover:fill-red-500 float-end"
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
            <div className="text-center my-5">
              <div className="flex flex-col items-center justify-center py-3">
                <img
                  src={
                    !!userTask?.exchangeLogo
                      ? userTask?.exchangeLogo
                      : "/exchange.png"
                  }
                  className="rounded-lg p-2 w-16 sh my-4"
                  alt=""
                />
                <h3 className="text-white text-5xl flex justify-center items-center gap-2 mt-4 font-black">
                  <img
                    src="/talktom.png"
                    className="rounded-full w-12"
                    alt=""
                  />{" "}
                  {profitRate !== 0 ? (
                    formattedProfitRate
                  ) : (
                    <div className="loader3">
                      <div className="bars bar1" />
                      <div className="bars bar2" />
                      <div className="bars bar3" />
                      <div className="bars bar4" />
                      <div className="bars bar5" />
                      <div className="bars bar6" />
                      <div className="bars bar7" />
                      <div className="bars bar8" />
                      <div className="bars bar9" />
                      <div className="bars bar10" />
                    </div>
                  )}
                </h3>
                <p className="text-white/80 text-2xl text-center py-5">
                  The exchange has started working for you
                </p>
              </div>
            </div>
            <button
              onClick={handleClaimProfit}
              disabled={loading || profitRate === 0 ? true : false}
              className="bg-yellow-500 w-2/3 rounded-xl block mb-5  m-auto text-black text-2xl font-bold py-2 hover:opacity-65 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Please Wait.." : "Welcome back 💖"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
