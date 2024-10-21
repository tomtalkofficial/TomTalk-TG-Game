/** @format */

import Header from "../layout/Header";
import AppNav from "../layout/AppNav";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingScreen from "../utils/LoadingScreen";
import useSound from "use-sound";
import { startProfitPeriod } from "../redux/profitSlice";

import {
  checkIfUserExists,
  createNewUser,
  updateMineUser,
} from "../redux/tomSlice";
import toast from "react-hot-toast";
import mineSound from "../music/mine.mp3";

const data = [
  {
    id: 1,
    image: "c1.png",
    title: "CEO",
    perHour: "100",
    rate: "1000",
  },
  {
    id: 2,
    image: "c2.png",
    title: "Marketing",
    perHour: "70",
    rate: "1000",
  },
  {
    id: 3,
    image: "c3.png",
    title: "IT Team",
    perHour: "240",
    rate: "2000",
  },
  {
    id: 4,
    image: "c4.png",
    title: "Support Team",
    perHour: "70",
    rate: "750",
  },
  {
    id: 5,
    image: "c5.png",
    title: "TomBook",
    perHour: "70",
    rate: "500",
  },
  {
    id: 6,
    image: "c6.png",
    title: "TomTube",
    perHour: "90",
    rate: "1100",
  },
  {
    id: 7,
    image: "x.png",
    title: "X",
    perHour: "80",
    rate: "550",
  },
  {
    id: 8,
    image: "c8.png",
    title: "TikTok",
    perHour: "100",
    rate: "600",
  },
];

const Mine = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [play] = useSound(mineSound);
  const taskStatus = useSelector((state) => state.tom.user);
  const { status } = useSelector((state) => state.tom);

  const userMines = taskStatus?.Mine || [];

  if (!taskStatus || !taskStatus.Mine) {
    return <LoadingScreen />;
  }
  const calculateRateAtLevel = (baseRate, level = 1, growthFactor = 2) => {
    return baseRate * Math.pow(growthFactor, level - 1); // Custom growth based on level
  };
  const handleMineUpdate = async () => {
    try {
      for (const mine of userMines) {
        if (mine?.name === selected?.name) {
          const newLevel = parseInt(mine.level) + 1; // Increment the level by 1
          const profitPerH = calculateRateAtLevel(
            Number(selected?.profitPerHour),
            newLevel - 1,
            1.2,
          );
          // console.log(profitPerH?.toFixed(0));

          const response = await dispatch(
            updateMineUser({
              userID: taskStatus?.telegramHandle,
              name: mine.name,
              level: newLevel.toString(),
            }),
          ).unwrap();
          dispatch(
            startProfitPeriod({
              telegramHandle: taskStatus?.telegramHandle,
              profitPerHour: profitPerH?.toFixed(0),
            }),
          ).unwrap();
          // console.log(profitPerH);

          setIsOpen(false);

          dispatch(checkIfUserExists(taskStatus?.telegramHandle));
          play();
          toast.success("LVL updated successfully");
          if (response.status === "error") {
            toast.error(response.message);
            setIsOpen(false);
          } else {
            setIsOpen(false);
          }

          return;
        }
      }
    } catch (err) {
      console.error("Error caught:", err.message);
      toast.error(err?.message);
    }
  };

  useEffect(() => {
    // Ensure taskStatus and telegramHandle are defined
    const telegramHandle = taskStatus?.telegramHandle || "";

    if (telegramHandle) {
      dispatch(checkIfUserExists(telegramHandle));
    }
  }, [dispatch, taskStatus?.telegramHandle]);
  // console.log(selected);

  // console.log(calculateRateAtLevel(100, 7, 1.4)); // Rate at level 3 with 1.5x growth
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

  return (
    <>
      <div className=" sm:max-w-xs  w-full m-auto h-screen rounded-lg shadow-2xl overflow-hidden">
        <Header />
        <div className="px-3 py-4 lg:pb-56  rounded-t-2xl bg-[#1d1e23]  border-t-[2px] shadow_top border-[rgb(226,180,70)]">
          <div className="grid grid-cols-4 px-5 pb-2 justify-center ">
            <Link to="#" className="text-white text-sm text-center">
              PR&Team
            </Link>
            <Link to="#" className="text-white text-sm text-center opacity-40">
              Markets
            </Link>
            <Link to="#" className="text-white text-sm text-center opacity-40">
              Legal
            </Link>
            <Link to="#" className="text-white text-sm text-center opacity-40">
              Web3
            </Link>
          </div>
          <div className="max-h-[500px] overflow-y-scroll custom-scrollbar pb-10">
            <div className="grid grid-cols-2 gap-3 py-5">
              {data.map((res) => {
                const matchedMine = userMines?.find(
                  (mine) => mine.name === res.title,
                );
                const itemCost = parseInt(
                  calculateRateAtLevel(
                    Number(res.rate),
                    Number(matchedMine?.level),
                    1.5,
                  ),
                );
                // console.log("itemCost", itemCost);

                const isDisabled = taskStatus?.totalCoins < itemCost;
                // console.log(isDisabled);
                const opacity = isDisabled ? 0.5 : 1;

                return matchedMine ? (
                  <div
                    key={res.id}
                    className="bg-[#272a2f] py-2 rounded-lg hover:opacity-60"
                    style={{
                      opacity,
                      cursor: isDisabled ? "not-allowed" : "pointer",
                    }}
                    onClick={() => {
                      if (!isDisabled) {
                        setSelected(matchedMine);
                        setIsOpen(true);
                      }
                    }}
                  >
                    <div className="flex px-2 justify-center space-x-2">
                      <div>
                        <img
                          src={res.image}
                          className="w-14 h-14 rounded-full object-contain"
                          alt={res.title}
                        />
                      </div>
                      <div className="flex flex-col justify-between">
                        <p className="text-white text-center text-[14px]">
                          {res.title}
                        </p>
                        <p className="text-gray-400 font-semibold text-center text-[10px]">
                          Profit Per Hour
                        </p>
                        <div className="flex items-center justify-center space-x-2">
                          <img
                            src="talktom.png"
                            className="w-3 block"
                            alt="Profit per hour"
                          />
                          <p className="text-gray-400 font-semibold text-center pb-0 mb-0 text-[11px]">
                            +
                            {formatNumber(
                              calculateRateAtLevel(
                                Number(res.perHour),
                                Number(matchedMine?.level),
                                1.2,
                              )?.toFixed(0),
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr className="border-t-2 my-2 border-gray-500" />
                    <div className="flex justify-center space-x-5 items-center px-3">
                      <p className="text-gray-100 font-semibold text-center text-[11px] border-r-2 pr-3 border-gray-400">
                        Lvl {matchedMine?.level}
                      </p>
                      <div className="flex items-center space-x-2">
                        <img src="talktom.png" className="w-5" alt="Rate" />
                        <p className="text-gray-200 font-bold text-center text-[12px]">
                          {formatNumber(
                            calculateRateAtLevel(
                              Number(res.rate),
                              Number(matchedMine?.level),
                              1.5,
                            )?.toFixed(0),
                          )}
                          {/* {Number(res.rate)} */}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <LoadingScreen key={res.id} /> // Ensure a key for the LoadingScreen
                );
              })}
            </div>
          </div>
        </div>
        <div className="">
          <AppNav />
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 flex flex-wrap justify-center items-end  w-full h-full backdrop-blur-sm z-[1000] bottom-0 end-0 before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto ">
          <div className="w-full sm:max-w-xs bg-[#1d1e23]   border-[#e2b446]  border-t-[4px]  rounded-t-2xl  p-6 relative">
            <svg
              onClick={() => {
                setIsOpen(false);
              }}
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 cursor-pointer relative shrink-0 fill-gray-900 p-1 bg-white/50 rounded-full hover:fill-red-500    float-end"
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
              <div className="p-1">
                <img
                  src="/mining.png"
                  className="size-20 m-auto object-contain"
                  alt=""
                />
              </div>
              <h3 className="text-white text-3xl my-4 font-semibold ">
                {selected?.title}
              </h3>
              <p className="text-white/80 text-sm text-center py-1 ">
                Profit per hour:
                <strong className="text-lg">
                  {" "}
                  +{" "}
                  {formatNumber(
                    calculateRateAtLevel(
                      Number(selected?.profitPerHour),
                      Number(selected?.level),
                      1.2,
                    )?.toFixed(0),
                  )}
                </strong>
              </p>
              <div className="flex justify-center items-center   space-x-2 my-2">
                <img src="/talktom.png" className="rounded-full w-6" alt="" />
                <h2 className="text-white text-2xl font-bold ">
                  {formatNumber(
                    calculateRateAtLevel(
                      Number(selected?.cost),
                      Number(selected?.level),
                      1.5,
                    )?.toFixed(0),
                  )}
                </h2>
              </div>
              <p className="text-white/80 text-sm text-center py-1 ">
                Earn even when offline
              </p>

              <button
                onClick={() => handleMineUpdate()}
                className="bg-yellow-500 w-2/3 rounded-xl block mb-5  m-auto text-black text-2xl font-bold py-2 hover:opacity-65 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Applying..." : " Go ahead"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Mine;
