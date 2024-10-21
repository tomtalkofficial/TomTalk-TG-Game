/** @format */

import Header from "../layout/Header";
import AppNav from "../layout/AppNav";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateFollowStatus,
  updateJoinStatus,
  updateWatchStatus,
  updateExchangeStatus,
  updateFbStatus,
  updateInstaStatus,
  updateTGStatus,
  updateTikTokStatus,
  updateHabitNetwork,
  updatePokeTG,
  updateTopUpGame,
  updateTopUpTG,
  updateBitgetTask,
  updatePartnerTask,
} from "../redux/taskSlice";
import useSound from "use-sound";
import mineSound from "../music/earn.mp3";

import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { checkIfUserExists, createNewUser } from "../redux/tomSlice";
import { FaAngleRight } from "react-icons/fa";
import toast from "react-hot-toast";
import LoadingScreen from "../utils/LoadingScreen";
import useRequest from "@ahooksjs/use-request";
import DailyRewards from "../utils/DailyRewards";
const Earn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [rewardBtn, setRewardBtn] = useState(true);
  const [play] = useSound(mineSound);

  const [isOpen1, setIsOpen1] = useState(false);

  const handleOpenModal = () => {
    setIsOpen1(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsOpen1(false); // Close the modal
  };

  const dispatch = useDispatch();
  const taskStatus = useSelector((state) => state.tom.user);
  const userTask = taskStatus?.Tasks?.[0]; // Safely access the first task
  const { loading } = useSelector((state) => state.tasks);
  // Optional: handle cases where the task is not defined yet
  if (!taskStatus || !taskStatus.Tasks) {
    return <LoadingScreen />;
  }

  // console.log(taskStatus);

  const handleJoinUpdate = () => {
    if (taskStatus?.telegramHandle && taskStatus?.Tasks[0]?._id) {
      dispatch(
        updateJoinStatus({
          telegramHandle: taskStatus?.telegramHandle,
          taskId: taskStatus?.Tasks[0]?._id,
        }),
      );
      toast.success("Task Completed");
      play();
      dispatch(checkIfUserExists(taskStatus?.telegramHandle));
      setIsOpen(false);
    }
  };

  const handleFollowUpdate = () => {
    if (taskStatus?.telegramHandle && taskStatus?.Tasks[0]?._id) {
      dispatch(
        updateFollowStatus({
          telegramHandle: taskStatus?.telegramHandle,
          taskId: taskStatus?.Tasks[0]?._id,
        }),
      );
      toast.success("Task Completed");
      play();

      dispatch(checkIfUserExists(taskStatus?.telegramHandle));

      setIsOpen(false);
    }
  };

  const handleWatchUpdate = () => {
    if (taskStatus?.telegramHandle && taskStatus?.Tasks[0]?._id) {
      dispatch(
        updateWatchStatus({
          telegramHandle: taskStatus?.telegramHandle,
          taskId: taskStatus?.Tasks[0]?._id,
        }),
      );
      toast.success("Task Completed");
      play();

      dispatch(checkIfUserExists(taskStatus?.telegramHandle));

      setIsOpen(false);
    }
  };
  const handleExchangeUpdate = (data) => {
    if (taskStatus?.telegramHandle && taskStatus?.Tasks[0]?._id) {
      dispatch(
        updateExchangeStatus({
          telegramHandle: taskStatus?.telegramHandle,
          taskId: taskStatus?.Tasks[0]?._id,
          exchangeName: data?.name,
          exchangeLogo: data?.logo,
        }),
      );
      toast.success("Task Completed");
      play();

      dispatch(checkIfUserExists(taskStatus?.telegramHandle));
      setIsModal(false);
      setIsOpen(false);
      setRewardBtn(false);
    }
  };

  const handleFBUpdate = () => {
    if (taskStatus?.telegramHandle && taskStatus?.Tasks[0]?._id) {
      dispatch(
        updateFbStatus({
          telegramHandle: taskStatus?.telegramHandle,
          taskId: taskStatus?.Tasks[0]?._id,
        }),
      );
      toast.success("Task Completed");
      play();

      dispatch(checkIfUserExists(taskStatus?.telegramHandle));

      setIsOpen(false);
    }
  };
  const handleTGUpdate = () => {
    if (taskStatus?.telegramHandle && taskStatus?.Tasks[0]?._id) {
      dispatch(
        updateTGStatus({
          telegramHandle: taskStatus?.telegramHandle,
          taskId: taskStatus?.Tasks[0]?._id,
        }),
      );
      toast.success("Task Completed");
      play();

      dispatch(checkIfUserExists(taskStatus?.telegramHandle));

      setIsOpen(false);
    }
  };

  const handleTikTokUpdate = () => {
    if (taskStatus?.telegramHandle && taskStatus?.Tasks[0]?._id) {
      dispatch(
        updateTikTokStatus({
          telegramHandle: taskStatus?.telegramHandle,
          taskId: taskStatus?.Tasks[0]?._id,
        }),
      );
      toast.success("Task Completed");
      play();

      dispatch(checkIfUserExists(taskStatus?.telegramHandle));

      setIsOpen(false);
    }
  };
  const handleInstaUpdate = () => {
    if (taskStatus?.telegramHandle && taskStatus?.Tasks[0]?._id) {
      dispatch(
        updateInstaStatus({
          telegramHandle: taskStatus?.telegramHandle,
          taskId: taskStatus?.Tasks[0]?._id,
        }),
      );
      toast.success("Task Completed");
      play();

      dispatch(checkIfUserExists(taskStatus?.telegramHandle));

      setIsOpen(false);
    }
  };

  const handleHabitNetwork = () => {
    if (taskStatus?.telegramHandle && taskStatus?.Tasks[0]?._id) {
      dispatch(
        updateHabitNetwork({
          telegramHandle: taskStatus?.telegramHandle,
          taskId: taskStatus?.Tasks[0]?._id,
        }),
      );
      toast.success("Task Completed");
      play();
      dispatch(checkIfUserExists(taskStatus?.telegramHandle));
      setIsOpen(false);
    }
  };
  const handlePokeTG = () => {
    if (taskStatus?.telegramHandle && taskStatus?.Tasks[0]?._id) {
      dispatch(
        updatePokeTG({
          telegramHandle: taskStatus?.telegramHandle,
          taskId: taskStatus?.Tasks[0]?._id,
        }),
      );
      toast.success("Task Completed");
      play();
      dispatch(checkIfUserExists(taskStatus?.telegramHandle));
      setIsOpen(false);
    }
  };

  // topUp

  const handleTopUpGame = () => {
    if (taskStatus?.telegramHandle && taskStatus?.Tasks[0]?._id) {
      dispatch(
        updateTopUpGame({
          telegramHandle: taskStatus?.telegramHandle,
          taskId: taskStatus?.Tasks[0]?._id,
        }),
      );
      toast.success("Task Completed");
      play();
      dispatch(checkIfUserExists(taskStatus?.telegramHandle));
      setIsOpen(false);
    }
  };
  const handleTopUpTG = () => {
    if (taskStatus?.telegramHandle && taskStatus?.Tasks[0]?._id) {
      dispatch(
        updateTopUpTG({
          telegramHandle: taskStatus?.telegramHandle,
          taskId: taskStatus?.Tasks[0]?._id,
        }),
      );
      toast.success("Task Completed");
      play();
      dispatch(checkIfUserExists(taskStatus?.telegramHandle));
      setIsOpen(false);
    }
  };
  const handleReferredUpdate = () => {
    if (userTask?.referredCont < 3) {
      toast.error("Task isn't  completed");
      return;
    }
  };

  const handleTaskUpdate = (taskName) => {
    dispatch(
      updateBitgetTask({
        telegramHandle: taskStatus?.telegramHandle,
        taskName,
      }),
    )
      .unwrap()
      .then(() => {
        toast.success("Task Completed");
        play();
        dispatch(checkIfUserExists(taskStatus?.telegramHandle));
        setIsOpen(false);
      })
      .catch((error) => {
        // Handle error cases
        toast.error("Failed to complete task: " + error.message);
      });
  };

  const handlePartnerUpdate = (taskName) => {
    dispatch(
      updatePartnerTask({
        telegramHandle: taskStatus?.telegramHandle,
        taskName,
      }),
    )
      .unwrap()
      .then(() => {
        toast.success("Task Completed");
        play();
        dispatch(checkIfUserExists(taskStatus?.telegramHandle));
        setIsOpen(false);
      })
      .catch((error) => {
        // Handle error cases
        toast.error("Failed to complete task: " + error.message);
      });
  };

  const [data, setData] = useState({
    imgUrl: "",
    title: "",
    point: 0,
    link: "",
    btnTitle: "",
    fun: null,
    status: false,
    choose: null,
  });

  const ex = [
    {
      name: "Binance",
      logo: "/binance.png",
    },
    {
      name: "OKX",
      logo: "/OKX.svg",
    },
    {
      name: "Crypto.com",
      logo: "/cr.svg",
    },
    {
      name: "Bybit",
      logo: "/bt.png",
    },
    {
      name: "BingX",
      logo: "/bing.png",
    },
    {
      name: "HTX",
      logo: "/htx.png",
    },
    {
      name: "Kucoin",
      logo: "/kucoin.png",
    },
    {
      name: "Gate.io",
      logo: "/gate.png",
    },
    {
      name: "MEXC",
      logo: "/mexc.png",
    },
    {
      name: "Bitget",
      logo: "/bitget.png",
    },
  ];
  const [activeTab, setActiveTab] = useState("Tab1");
  const fetchData = () => {
    const { telegramHandle } = taskStatus || {};
    if (telegramHandle) {
      dispatch(checkIfUserExists(telegramHandle));
    }
  };
  // useRequest(fetchData, {
  //   loadingDelay: 500,
  //   pollingInterval: 1000,
  //   pollingWhenHidden: false,
  //   refreshOnWindowFocus: true,
  //   throttleInterval: 1000,
  //   throwOnError: true,
  // });

  const [dos, setDos] = useState(false);
  const [dos1, setDos1] = useState(false);
  const [dos2, setDos2] = useState(false);
  const [dos3, setDos3] = useState(false);

  const [dos4, setDos4] = useState(false);
  const [dos5, setDos5] = useState(false);
  const [dos6, setDos6] = useState(false);
  const [dos7, setDos7] = useState(false);
  const [dos8, setDos8] = useState(false);
  const [dos9, setDos9] = useState(false);
  const [dos10, setDos10] = useState(false);
  const [dos11, setDos11] = useState(false);
  const [dos12, setDos12] = useState(false);
  const [dos13, setDos13] = useState(false);
  const [dos15, setDos15] = useState(false);
  const [dos16, setDos16] = useState(false);
  const [dos17, setDos17] = useState(false);
  const [dos18, setDos18] = useState(false);
  const [dos19, setDos19] = useState(false);
  const [dos20, setDos20] = useState(false);
  const [dos21, setDos21] = useState(false);
  const [dos22, setDos22] = useState(false);
  const [dos23, setDos23] = useState(false);
  const [dos24, setDos24] = useState(false);

  return (
    <>
      <div className=" sm:max-w-xs  w-full m-auto h-screen rounded-lg shadow-2xl overflow-hidden">
        {/* <Header /> */}
        <div className="px-3 py-4 lg:pb-56  rounded-t-2xl bg-[#1d1e23]  border-t-[2px] shadow_top border-[rgb(226,180,70)]">
          <div className="flex flex-col items-center justify-center ">
            <img src="/talktom.png" className="rounded-full w-16 sh" alt="" />
            <h3 className="text-white text-4xl mt-4 font-semibold">
              Earn More Coins
            </h3>
          </div>
          {/* Tab Headers */}
          <div className="flex  justify-center   rounded-xl mt-3">
            <button
              className={`px-4 py-2 text-lg font-bold rounded-xl ${
                activeTab === "Tab1"
                  ? " bg-[#e2b446] text-[#1d1e23] shadow-2xl"
                  : "text-white border border-[#e2b446]"
              }`}
              onClick={() => setActiveTab("Tab1")}
            >
              Mission
            </button>
            <button
              className={`ml-2 px-4 py-2 text-lg, font-bold rounded-xl ${
                activeTab === "Tab2"
                  ? "bg-[#e2b446] text-[#1d1e23] shadow-2xl"
                  : "text-white border border-[#e2b446]"
              }`}
              onClick={() => setActiveTab("Tab2")}
            >
              Partner
            </button>
          </div>
          {/* Tab Content */}
          <div className="mt-4 w-full">
            {activeTab === "Tab1" && (
              <div className="max-h-[500px] overflow-y-scroll custom-scrollbar pb-44">
                <h2 className="text-white py-1  font-semibold">Daily Tasks</h2>
                <div
                  onClick={handleOpenModal}
                  className="bg-[#272a2f] py-2 my-2 rounded-lg mx-4 hover:opacity-70 cursor-pointer relative"
                >
                  <div className="flex items-center space-x-3 px-3">
                    <div className="flex items-center space-x-2">
                      <div className=" p-1  ">
                        <img
                          src="gift_6145427.png"
                          className="size-6 object-contain"
                          alt=""
                        />
                      </div>
                      <div>
                        <h2 className="text-white">Daily Reward</h2>
                        <div className="flex items-center space-x-1">
                          <p className="text-white text-xs">+128,000</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h2 className="text-white py-1 font-semibold mt-5">
                  Task List
                </h2>
                <div>
                  <div
                    className="bg-[#272a2f] py-2 my-2 rounded-lg mx-4 hover:opacity-70 cursor-pointer relative"
                    onClick={() => {
                      !userTask?.tg && setIsOpen(true);
                      setRewardBtn(true);
                      setData({
                        imgUrl: "telegram.png",
                        title: "Join our TG Announcement channel",
                        point: "5,000",
                        btnTitle: "Join",
                        link: "https://t.me/tomtalk_official",
                        fun: () => handleTGUpdate(),
                        status: userTask?.tg,
                        choose: null,
                      });
                    }}
                  >
                    {!userTask?.tg && (
                      <span className=" absolute flex h-3 w-3 right-0 top-0">
                        <span className="animate-ping absolute right-0 end-0 inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-400" />
                      </span>
                    )}
                    <div className="flex items-center space-x-3 px-3">
                      <div className="flex items-center space-x-2">
                        <div className="p-1">
                          <img
                            src="telegram.png"
                            className="size-6 object-contain"
                            alt="Join our TG channel"
                          />
                        </div>
                        <div>
                          <h2 className="text-white">
                            Join our Announcement channel
                          </h2>
                          <div className="flex items-center space-x-1">
                            <p className="text-white">+5,000</p>
                          </div>
                        </div>
                        <div>
                          {userTask?.tg && (
                            <IoCheckmarkDoneCircleSharp className="text-white text-2xl absolute right-5 top-1/2  transform -translate-y-1/2 " />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-[#272a2f] py-2 my-2 rounded-lg mx-4 hover:opacity-70 cursor-pointer relative"
                    onClick={() => {
                      !userTask?.tiktok && setIsOpen(true);
                      setRewardBtn(true);
                      setData({
                        imgUrl: "tiktok.png",
                        title: "Follow our TikTok",
                        point: "5,000",
                        btnTitle: "Follow",
                        link: "https://www.tiktok.com/@tomtalkofficial",
                        fun: () => handleTikTokUpdate(),
                        status: userTask?.tiktok,
                        choose: null,
                      });
                    }}
                  >
                    {!userTask?.tiktok && (
                      <span className=" absolute flex h-3 w-3 right-0 top-0">
                        <span className="animate-ping absolute right-0 end-0 inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-400" />
                      </span>
                    )}
                    <div className="flex items-center space-x-3 px-3">
                      <div className="flex items-center space-x-2">
                        <div className="p-1">
                          <img
                            src="tiktok.png"
                            className="size-6 object-contain"
                            alt="Follow our TikTok"
                          />
                        </div>
                        <div>
                          <h2 className="text-white">Follow our TikTok</h2>
                          <div className="flex items-center space-x-1">
                            <p className="text-white">+5,000</p>
                          </div>
                        </div>
                        <div>
                          {userTask?.tiktok && (
                            <IoCheckmarkDoneCircleSharp className="text-white text-2xl absolute right-5 top-1/2  transform -translate-y-1/2 " />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-[#272a2f] py-2 my-2 rounded-lg mx-4 hover:opacity-70 cursor-pointer relative"
                    onClick={() => {
                      !userTask?.fb && setIsOpen(true);
                      setRewardBtn(true);
                      setData({
                        imgUrl: "fb.png",
                        title: "Follow our Facebook Page",
                        point: "5,000",
                        btnTitle: "Follow",
                        link: "https://www.facebook.com/tomtalkofficial/",
                        fun: () => handleFBUpdate(),
                        status: userTask?.fb,
                        choose: null,
                      });
                    }}
                  >
                    {!userTask?.fb && (
                      <span className=" absolute flex h-3 w-3 right-0 top-0">
                        <span className="animate-ping absolute right-0 end-0 inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-400" />
                      </span>
                    )}
                    <div className="flex items-center space-x-3 px-3">
                      <div className="flex items-center space-x-2">
                        <div className="p-1">
                          <img
                            src="fb.png"
                            className="size-6 object-contain"
                            alt="Follow our X channel"
                          />
                        </div>
                        <div>
                          <h2 className="text-white">
                            Follow our Facebook Page
                          </h2>
                          <div className="flex items-center space-x-1">
                            <p className="text-white">+5,000</p>
                          </div>
                        </div>
                        <div>
                          {userTask?.fb && (
                            <IoCheckmarkDoneCircleSharp className="text-white text-2xl absolute right-5 top-1/2  transform -translate-y-1/2 " />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-[#272a2f] py-2 my-2 rounded-lg mx-4 hover:opacity-70 cursor-pointer relative"
                    onClick={() => {
                      !userTask?.insta && setIsOpen(true);
                      setRewardBtn(true);
                      setData({
                        imgUrl: "insta.png",
                        title: "Follow our Instagram",
                        point: "5,000",
                        btnTitle: "Follow",
                        link: "https://www.instagram.com/tomtalkofficial/",
                        fun: () => handleInstaUpdate(),
                        status: userTask?.insta,
                        choose: null,
                      });
                    }}
                  >
                    {!userTask?.insta && (
                      <span className=" absolute flex h-3 w-3 right-0 top-0">
                        <span className="animate-ping absolute right-0 end-0 inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-400" />
                      </span>
                    )}
                    <div className="flex items-center space-x-3 px-3">
                      <div className="flex items-center space-x-2">
                        <div className="p-1">
                          <img
                            src="insta.png"
                            className="size-6 object-contain"
                            alt="Follow our X channel"
                          />
                        </div>
                        <div>
                          <h2 className="text-white">Follow our Instagram</h2>
                          <div className="flex items-center space-x-1">
                            <p className="text-white">+5,000</p>
                          </div>
                        </div>
                        <div>
                          {userTask?.insta && (
                            <IoCheckmarkDoneCircleSharp className="text-white text-2xl absolute right-5 top-1/2  transform -translate-y-1/2 " />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-[#272a2f] py-2 my-2 rounded-lg mx-4 hover:opacity-70 cursor-pointer relative"
                    onClick={() => {
                      !userTask?.join && setIsOpen(true);

                      setRewardBtn(true);

                      setData({
                        imgUrl: "telegram.png",
                        title: "Join our TG channel",
                        point: "5,000",
                        btnTitle: "Join",
                        link: "https://t.me/tomtalkofficial",
                        fun: () => handleJoinUpdate(),
                        status: userTask?.join,
                        choose: null,
                      });
                    }}
                  >
                    {!userTask?.join && (
                      <span className=" absolute flex h-3 w-3 right-0 top-0">
                        <span className="animate-ping absolute right-0 end-0 inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-400" />
                      </span>
                    )}
                    <div className="flex items-center space-x-3 px-3">
                      <div className="flex items-center space-x-2">
                        <div className="p-1">
                          <img
                            src="telegram.png"
                            className="size-6 object-contain"
                            alt="Join our TG channel"
                          />
                        </div>
                        <div>
                          <h2 className="text-white">Join our TG channel</h2>
                          <div className="flex items-center space-x-1">
                            <p className="text-white">+5,000</p>
                          </div>
                        </div>
                        <div>
                          {userTask?.join && (
                            <IoCheckmarkDoneCircleSharp className="text-white text-2xl absolute right-5 top-1/2  transform -translate-y-1/2 " />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="bg-[#272a2f] py-2 my-2 rounded-lg mx-4 hover:opacity-70 cursor-pointer relative"
                    onClick={() => {
                      !userTask?.follow && setIsOpen(true);
                      setRewardBtn(true);
                      setData({
                        imgUrl: "x.png",
                        title: "Follow our X channel",
                        point: "5,000",
                        btnTitle: "Follow",
                        link: "https://x.com/Tomtalkofficial",
                        fun: () => handleFollowUpdate(),
                        status: userTask?.follow,
                        choose: null,
                      });
                    }}
                  >
                    {!userTask?.follow && (
                      <span className=" absolute flex h-3 w-3 right-0 top-0">
                        <span className="animate-ping absolute right-0 end-0 inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-400" />
                      </span>
                    )}
                    <div className="flex items-center space-x-3 px-3">
                      <div className="flex items-center space-x-2">
                        <div className="p-1">
                          <img
                            src="x.png"
                            className="size-6 object-contain"
                            alt="Follow our X channel"
                          />
                        </div>
                        <div>
                          <h2 className="text-white">Follow our X channel</h2>
                          <div className="flex items-center space-x-1">
                            <p className="text-white">+5,000</p>
                          </div>
                        </div>
                        <div>
                          {userTask?.follow && (
                            <IoCheckmarkDoneCircleSharp className="text-white text-2xl absolute right-5 top-1/2  transform -translate-y-1/2 " />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="bg-[#272a2f] py-2 my-2 rounded-lg mx-4 hover:opacity-70 cursor-pointer relative"
                    onClick={() => {
                      !userTask?.watch && setIsOpen(true);
                      setRewardBtn(true);

                      setData({
                        imgUrl: "yt.png",
                        title: "Subscribe our Youtube channel",
                        point: "10,000",
                        btnTitle: "Subscribe",
                        link: "https://www.youtube.com/@Tomtalkofficial",
                        fun: () => handleWatchUpdate(),
                        status: userTask?.watch,
                        choose: () => null,
                        choose: null,
                      });
                    }}
                  >
                    {!userTask?.watch && (
                      <span className=" absolute flex h-3 w-3 right-0 top-0">
                        <span className="animate-ping absolute right-0 end-0 inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-400" />
                      </span>
                    )}
                    <div className="flex items-center space-x-3 px-3">
                      <div className="flex items-center space-x-2">
                        <div className="p-1">
                          <img
                            src="yt.png"
                            className="size-6 object-contain"
                            alt="Follow our X channel"
                          />
                        </div>
                        <div>
                          <h2 className="text-white">
                            Subscribe our YT channel
                          </h2>
                          <div className="flex items-center space-x-1">
                            <p className="text-white">+10,000</p>
                          </div>
                        </div>
                        <div>
                          {userTask?.watch && (
                            <IoCheckmarkDoneCircleSharp className="text-white text-2xl absolute right-5 top-1/2  transform -translate-y-1/2 " />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-[#272a2f] py-2 my-2 rounded-lg mx-4 hover:opacity-70 cursor-pointer relative"
                    onClick={() => {
                      setIsOpen(true);
                      setRewardBtn(true);
                      setData({
                        imgUrl: "exchng.png",
                        title: "Choose your exchange",
                        point: "5,000",
                        btnTitle: "Choose",
                        link: "",
                        fun: () => handleExchangeUpdate(),
                        status: userTask?.exchange,
                        choose: () => setIsModal(true),
                      });
                    }}
                  >
                    <div className="flex items-center space-x-3 px-3">
                      <div className="flex items-center space-x-2">
                        <div className="p-1">
                          <img
                            src="exchng.png"
                            className="size-6 object-contain"
                            alt="Choose your exchange"
                          />
                        </div>
                        <div>
                          <h2 className="text-white">Choose your exchange</h2>
                          <div className="flex items-center space-x-1">
                            <p className="text-white">+5,000</p>
                          </div>
                        </div>
                        {userTask?.exchange && (
                          <IoCheckmarkDoneCircleSharp className="text-white text-2xl absolute right-5 top-1/2  transform -translate-y-1/2 " />
                        )}
                      </div>
                    </div>
                  </div>

                  <div
                    className="bg-[#272a2f] py-2 my-2 rounded-lg mx-4 hover:opacity-70 cursor-pointer relative"
                    onClick={() => {
                      userTask?.referredCont < 3 && setIsOpen(true);
                      setRewardBtn(true);
                      setData({
                        imgUrl: "friends.png",
                        title: "Invite 3 friends",
                        point: "25,000",
                        btnTitle: "Check",
                        link: "",
                        fun: null,
                        status: userTask?.exchange,
                        choose: () => handleReferredUpdate(),
                      });
                    }}
                  >
                    <div className="flex items-center space-x-3 px-3">
                      <div className="flex items-center space-x-2">
                        <div className="p-1">
                          <img
                            src="friends.png"
                            className="size-6 object-contain"
                            alt="Invite 3 friends"
                          />
                        </div>
                        <div>
                          <h2 className="text-white">Invite 3 friends</h2>
                          <div className="flex items-center space-x-1">
                            <p className="text-white">+25,000</p>
                          </div>
                        </div>
                        {userTask?.referredCont >= 3 && (
                          <IoCheckmarkDoneCircleSharp className="text-white text-2xl absolute right-5 top-1/2  transform -translate-y-1/2 " />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === "Tab2" && (
              <div className="max-h-[500px] overflow-y-scroll custom-scrollbar pb-44">
                <h2 className="text-white py-1  font-semibold">Bitget</h2>
                {/* bitget Start */}
                <div className="bg-[#272a2f] py-2 my-2 rounded-lg mx-2 hover:opacity-70 cursor-pointer relative">
                  <div className="flex items-center  px-3">
                    <div className="flex items-center space-x-2">
                      <div className="p-1">
                        <img
                          src="/bitget.jpg"
                          className="size-8 object-contain rounded-lg"
                          alt=""
                        />
                      </div>
                      <div>
                        <h2 className="text-white">Download bitget wallet </h2>
                        <div className="flex items-center space-x-1">
                          <p className="text-white">+10,000</p>
                        </div>
                      </div>
                      {!userTask?.BitgetApp &&
                        (dos4 ? (
                          <button
                            onClick={() => handleTaskUpdate("BitgetApp")}
                            className="text-black bg-[#e2b446] font-bold text-xl px-3 py-2 rounded-lg absolute right-3 top-1/2  transform -translate-y-1/2  disabled:cursor-not-allowed disabled:"
                          >
                            {loading ? (
                              <div className="flex flex-row gap-2">
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.7s]" />
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.3s]" />
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.7s]" />
                              </div>
                            ) : (
                              "Claim"
                            )}
                          </button>
                        ) : (
                          <a
                            onClick={() => setDos4(true)}
                            className="text-black bg-[#e2b446] font-bold text-xl px-3 py-2 rounded-lg absolute right-3 top-1/2  transform -translate-y-1/2  disabled:cursor-not-allowed disabled:"
                            href="https://bitgetwallet.onelink.me/6Vx1/z8eexk4k"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            DO
                          </a>
                        ))}

                      <div>
                        {userTask?.BitgetApp && (
                          <IoCheckmarkDoneCircleSharp className="text-white text-2xl absolute right-5 top-1/2  transform -translate-y-1/2 " />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#272a2f] py-2 my-2 rounded-lg mx-2 hover:opacity-70 cursor-pointer relative">
                  <div className="flex items-center  px-3">
                    <div className="flex items-center space-x-2">
                      <div className="p-1">
                        <img
                          src="/bitget.jpg"
                          className="size-8 object-contain rounded-lg"
                          alt=""
                        />
                      </div>
                      <div>
                        <h2 className="text-white">
                          Follow bitget wallet channel{" "}
                        </h2>
                        <div className="flex items-center space-x-1">
                          <p className="text-white">+10,000</p>
                        </div>
                      </div>

                      {!userTask?.BitgetTG &&
                        (dos5 ? (
                          <button
                            onClick={() => handleTaskUpdate("BitgetTG")}
                            className="text-black bg-[#e2b446] font-bold text-xl px-3 py-2 rounded-lg absolute right-3 top-1/2  transform -translate-y-1/2  disabled:cursor-not-allowed disabled:"
                          >
                            {loading ? (
                              <div className="flex flex-row gap-2">
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.7s]" />
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.3s]" />
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.7s]" />
                              </div>
                            ) : (
                              "Claim"
                            )}
                          </button>
                        ) : (
                          <a
                            onClick={() => setDos5(true)}
                            className="text-black bg-[#e2b446] font-bold text-xl px-3 py-2 rounded-lg absolute right-3 top-1/2  transform -translate-y-1/2  disabled:cursor-not-allowed disabled:"
                            href="https://t.me/+RwtSzY2RGGk2ZmQ9"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            DO
                          </a>
                        ))}

                      <div>
                        {userTask?.BitgetTG && (
                          <IoCheckmarkDoneCircleSharp className="text-white text-2xl absolute right-5 top-1/2  transform -translate-y-1/2 " />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#272a2f] py-2 my-2 rounded-lg mx-2 hover:opacity-70 cursor-pointer relative">
                  <div className="flex items-center  px-3">
                    <div className="flex items-center space-x-2">
                      <div className="p-1">
                        <img
                          src="/bitget.jpg"
                          className="size-8 object-contain rounded-lg"
                          alt=""
                        />
                      </div>
                      <div>
                        <h2 className="text-white">Follow Bitget Wallet x</h2>
                        <div className="flex items-center space-x-1">
                          <p className="text-white">+10,000</p>
                        </div>
                      </div>

                      {!userTask?.BitgetFollow &&
                        (dos6 ? (
                          <button
                            onClick={() => handleTaskUpdate("BitgetFollow")}
                            className="text-black bg-[#e2b446] font-bold text-xl px-3 py-2 rounded-lg absolute right-3 top-1/2  transform -translate-y-1/2  disabled:cursor-not-allowed disabled:"
                          >
                            {loading ? (
                              <div className="flex flex-row gap-2">
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.7s]" />
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.3s]" />
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.7s]" />
                              </div>
                            ) : (
                              "Claim"
                            )}
                          </button>
                        ) : (
                          <a
                            onClick={() => setDos6(true)}
                            className="text-black bg-[#e2b446] font-bold text-xl px-3 py-2 rounded-lg absolute right-3 top-1/2  transform -translate-y-1/2  disabled:cursor-not-allowed disabled:"
                            href="https://x.com/Bitgetwallet_id"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            DO
                          </a>
                        ))}

                      <div>
                        {userTask?.BitgetFollow && (
                          <IoCheckmarkDoneCircleSharp className="text-white text-2xl absolute right-5 top-1/2  transform -translate-y-1/2 " />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                {/* ============ */}

                {/* Siriustap Start */}
                <h2 className="text-white py-1  font-semibold">Siriustap</h2>
                <div className="bg-[#272a2f] py-2 my-2 rounded-lg mx-2 hover:opacity-70 cursor-pointer relative">
                  <div className="flex items-center  px-3">
                    <div className="flex items-center space-x-2">
                      <div className="p-1">
                        <img
                          src="https://ton.app/media/1b03da44-a1ef-472e-959a-e2bdb5e04ae2.png?w=640&q=50"
                          className="size-8 object-contain rounded-lg"
                          alt=""
                        />
                      </div>
                      <div>
                        <h2 className="text-white">Game Bot</h2>
                        <div className="flex items-center space-x-1">
                          <p className="text-white">+5,000</p>
                        </div>
                      </div>
                      {!userTask?.SiriusTap &&
                        (dos13 ? (
                          <button
                            onClick={() => handlePartnerUpdate("SiriusTap")}
                            className="text-black bg-[#e2b446] font-bold text-xl px-3 py-2 rounded-lg absolute right-3 top-1/2  transform -translate-y-1/2  disabled:cursor-not-allowed disabled:"
                          >
                            {loading ? (
                              <div className="flex flex-row gap-2">
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.7s]" />
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.3s]" />
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.7s]" />
                              </div>
                            ) : (
                              "Claim"
                            )}
                          </button>
                        ) : (
                          <a
                            onClick={() => setDos13(true)}
                            className="text-black bg-[#e2b446] font-bold text-xl px-3 py-2 rounded-lg absolute right-3 top-1/2  transform -translate-y-1/2  disabled:cursor-not-allowed disabled:"
                            href="https://t.me/siriustap_bot?start=976927017584739"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            DO
                          </a>
                        ))}
                      <div>
                        {userTask?.SiriusTap && (
                          <IoCheckmarkDoneCircleSharp className="text-white text-2xl absolute right-5 top-1/2  transform -translate-y-1/2 " />
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#272a2f] py-2 my-2 rounded-lg mx-2 hover:opacity-70 cursor-pointer relative">
                  <div className="flex items-center  px-3">
                    <div className="flex items-center space-x-2">
                      <div className="p-1">
                        <img
                          src="https://ton.app/media/1b03da44-a1ef-472e-959a-e2bdb5e04ae2.png?w=640&q=50"
                          className="size-8 object-contain rounded-lg"
                          alt=""
                        />
                      </div>
                      <div>
                        <h2 className="text-white">Join Community</h2>
                        <div className="flex items-center space-x-1">
                          <p className="text-white">+5,000</p>
                        </div>
                      </div>
                      {!userTask?.SiriusTapTG &&
                        (dos15 ? (
                          <button
                            onClick={() => handlePartnerUpdate("SiriusTapTG")}
                            className="text-black bg-[#e2b446] font-bold text-xl px-3 py-2 rounded-lg absolute right-3 top-1/2  transform -translate-y-1/2  disabled:cursor-not-allowed disabled:"
                          >
                            {loading ? (
                              <div className="flex flex-row gap-2">
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.7s]" />
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.3s]" />
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.7s]" />
                              </div>
                            ) : (
                              "Claim"
                            )}
                          </button>
                        ) : (
                          <a
                            onClick={() => setDos15(true)}
                            className="text-black bg-[#e2b446] font-bold text-xl px-3 py-2 rounded-lg absolute right-3 top-1/2  transform -translate-y-1/2  disabled:cursor-not-allowed disabled:"
                            href="https://t.me/SiriuspadAnnouncements"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            DO
                          </a>
                        ))}
                      <div>
                        {userTask?.SiriusTapTG && (
                          <IoCheckmarkDoneCircleSharp className="text-white text-2xl absolute right-5 top-1/2  transform -translate-y-1/2 " />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                {/* ENd */}

                {/* ============= */}
                {/* ============ */}

                {/* DragarkX Start */}
                <h2 className="text-white py-1  font-semibold">DRAGARK</h2>
                <div className="bg-[#272a2f] py-2 my-2 rounded-lg mx-2 hover:opacity-70 cursor-pointer relative">
                  <div className="flex items-center  px-3">
                    <div className="flex items-center space-x-2">
                      <div className="p-1">
                        <img
                          src="https://ximg.magic.store/wMR8CsTBKw3V6AIAPuuY5GmjTj-efegeQNNs3p-GNfc/rs:fill:256:256:0/dpr:1/g:ce/f:webp/q:60/czM6Ly9wcm9kLW1hZ2ljLXN0b3JlLWltYWdlcy9kZmM1MzVlNS01YjAyLTQ0N2MtYmZiOS1kZmNhM2E0Y2EyOWQ"
                          className="size-8 object-contain rounded-lg"
                          alt=""
                        />
                      </div>
                      <div>
                        <h2 className="text-white">Follow X</h2>
                        <div className="flex items-center space-x-1">
                          <p className="text-white">+5,000</p>
                        </div>
                      </div>
                      {!userTask?.DragarkX &&
                        (dos16 ? (
                          <button
                            onClick={() => handlePartnerUpdate("DragarkX")}
                            className="text-black bg-[#e2b446] font-bold text-xl px-3 py-2 rounded-lg absolute right-3 top-1/2  transform -translate-y-1/2  disabled:cursor-not-allowed disabled:"
                          >
                            {loading ? (
                              <div className="flex flex-row gap-2">
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.7s]" />
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.3s]" />
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.7s]" />
                              </div>
                            ) : (
                              "Claim"
                            )}
                          </button>
                        ) : (
                          <a
                            onClick={() => setDos16(true)}
                            className="text-black bg-[#e2b446] font-bold text-xl px-3 py-2 rounded-lg absolute right-3 top-1/2  transform -translate-y-1/2  disabled:cursor-not-allowed disabled:"
                            href="https://x.com/playDRAGARK"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            DO
                          </a>
                        ))}
                      <div>
                        {userTask?.DragarkX && (
                          <IoCheckmarkDoneCircleSharp className="text-white text-2xl absolute right-5 top-1/2  transform -translate-y-1/2 " />
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#272a2f] py-2 my-2 rounded-lg mx-2 hover:opacity-70 cursor-pointer relative">
                  <div className="flex items-center  px-3">
                    <div className="flex items-center space-x-2">
                      <div className="p-1">
                        <img
                          src="https://ximg.magic.store/wMR8CsTBKw3V6AIAPuuY5GmjTj-efegeQNNs3p-GNfc/rs:fill:256:256:0/dpr:1/g:ce/f:webp/q:60/czM6Ly9wcm9kLW1hZ2ljLXN0b3JlLWltYWdlcy9kZmM1MzVlNS01YjAyLTQ0N2MtYmZiOS1kZmNhM2E0Y2EyOWQ"
                          className="size-8 object-contain rounded-lg"
                          alt=""
                        />
                      </div>
                      <div>
                        <h2 className="text-white">Join Discord</h2>
                        <div className="flex items-center space-x-1">
                          <p className="text-white">+5,000</p>
                        </div>
                      </div>
                      {!userTask?.DragarkDis &&
                        (dos17 ? (
                          <button
                            onClick={() => handlePartnerUpdate("DragarkDis")}
                            className="text-black bg-[#e2b446] font-bold text-xl px-3 py-2 rounded-lg absolute right-3 top-1/2  transform -translate-y-1/2  disabled:cursor-not-allowed disabled:"
                          >
                            {loading ? (
                              <div className="flex flex-row gap-2">
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.7s]" />
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.3s]" />
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.7s]" />
                              </div>
                            ) : (
                              "Claim"
                            )}
                          </button>
                        ) : (
                          <a
                            onClick={() => setDos17(true)}
                            className="text-black bg-[#e2b446] font-bold text-xl px-3 py-2 rounded-lg absolute right-3 top-1/2  transform -translate-y-1/2  disabled:cursor-not-allowed disabled:"
                            href="https://discord.gg/KEChMrdk7z"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            DO
                          </a>
                        ))}
                      <div>
                        {userTask?.DragarkDis && (
                          <IoCheckmarkDoneCircleSharp className="text-white text-2xl absolute right-5 top-1/2  transform -translate-y-1/2 " />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                {/* ENd */}

                {/* ============= */}

                {/* ============ */}

                {/* BearFi Start */}
                <h2 className="text-white py-1  font-semibold">BearFi</h2>
                <div className="bg-[#272a2f] py-2 my-2 rounded-lg mx-2 hover:opacity-70 cursor-pointer relative">
                  <div className="flex items-center  px-3">
                    <div className="flex items-center space-x-2">
                      <div className="p-1">
                        <img
                          src="https://d1j2c9jkfhu70p.cloudfront.net/7b329411-f0e1-4b10-ad38-ee937d470788.png"
                          className="size-8 object-contain rounded-lg"
                          alt=""
                        />
                      </div>
                      <div>
                        <h2 className="text-white">Bot link</h2>
                        <div className="flex items-center space-x-1">
                          <p className="text-white">+5,000</p>
                        </div>
                      </div>
                      {!userTask?.BearFiBot &&
                        (dos18 ? (
                          <button
                            onClick={() => handlePartnerUpdate("BearFiBot")}
                            className="text-black bg-[#e2b446] font-bold text-xl px-3 py-2 rounded-lg absolute right-3 top-1/2  transform -translate-y-1/2  disabled:cursor-not-allowed disabled:"
                          >
                            {loading ? (
                              <div className="flex flex-row gap-2">
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.7s]" />
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.3s]" />
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.7s]" />
                              </div>
                            ) : (
                              "Claim"
                            )}
                          </button>
                        ) : (
                          <a
                            onClick={() => setDos18(true)}
                            className="text-black bg-[#e2b446] font-bold text-xl px-3 py-2 rounded-lg absolute right-3 top-1/2  transform -translate-y-1/2  disabled:cursor-not-allowed disabled:"
                            href="https://t.me/BearFi_OfficialBot/bearfi?startapp=AlexxOliver-282906-0"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            DO
                          </a>
                        ))}
                      <div>
                        {userTask?.BearFiBot && (
                          <IoCheckmarkDoneCircleSharp className="text-white text-2xl absolute right-5 top-1/2  transform -translate-y-1/2 " />
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#272a2f] py-2 my-2 rounded-lg mx-2 hover:opacity-70 cursor-pointer relative">
                  <div className="flex items-center  px-3">
                    <div className="flex items-center space-x-2">
                      <div className="p-1">
                        <img
                          src="https://d1j2c9jkfhu70p.cloudfront.net/7b329411-f0e1-4b10-ad38-ee937d470788.png"
                          className="size-8 object-contain rounded-lg"
                          alt=""
                        />
                      </div>
                      <div>
                        <h2 className="text-white">Follow X</h2>
                        <div className="flex items-center space-x-1">
                          <p className="text-white">+5,000</p>
                        </div>
                      </div>
                      {!userTask?.BearFiX &&
                        (dos19 ? (
                          <button
                            onClick={() => handlePartnerUpdate("BearFiX")}
                            className="text-black bg-[#e2b446] font-bold text-xl px-3 py-2 rounded-lg absolute right-3 top-1/2  transform -translate-y-1/2  disabled:cursor-not-allowed disabled:"
                          >
                            {loading ? (
                              <div className="flex flex-row gap-2">
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.7s]" />
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.3s]" />
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.7s]" />
                              </div>
                            ) : (
                              "Claim"
                            )}
                          </button>
                        ) : (
                          <a
                            onClick={() => setDos19(true)}
                            className="text-black bg-[#e2b446] font-bold text-xl px-3 py-2 rounded-lg absolute right-3 top-1/2  transform -translate-y-1/2  disabled:cursor-not-allowed disabled:"
                            href="https://x.com/BearFiBot"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            DO
                          </a>
                        ))}
                      <div>
                        {userTask?.BearFiX && (
                          <IoCheckmarkDoneCircleSharp className="text-white text-2xl absolute right-5 top-1/2  transform -translate-y-1/2 " />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                {/* ENd */}

                {/* ============ */}

                {/* BpayBot Start */}
                <h2 className="text-white py-1  font-semibold">Bpay</h2>
                <div className="bg-[#272a2f] py-2 my-2 rounded-lg mx-2 hover:opacity-70 cursor-pointer relative">
                  <div className="flex items-center  px-3">
                    <div className="flex items-center space-x-2">
                      <div className="p-1">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrIXWT0YCRDz11iby1J2i2wr0VkOGozm-p_w&s"
                          className="size-8 object-contain rounded-lg"
                          alt=""
                        />
                      </div>
                      <div>
                        <h2 className="text-white">Start Bpay Bot</h2>
                        <div className="flex items-center space-x-1">
                          <p className="text-white">+5,000</p>
                        </div>
                      </div>
                      {!userTask?.BpayBot &&
                        (dos20 ? (
                          <button
                            onClick={() => handlePartnerUpdate("BpayBot")}
                            className="text-black bg-[#e2b446] font-bold text-xl px-3 py-2 rounded-lg absolute right-3 top-1/2  transform -translate-y-1/2  disabled:cursor-not-allowed disabled:"
                          >
                            {loading ? (
                              <div className="flex flex-row gap-2">
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.7s]" />
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.3s]" />
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.7s]" />
                              </div>
                            ) : (
                              "Claim"
                            )}
                          </button>
                        ) : (
                          <a
                            onClick={() => setDos20(true)}
                            className="text-black bg-[#e2b446] font-bold text-xl px-3 py-2 rounded-lg absolute right-3 top-1/2  transform -translate-y-1/2  disabled:cursor-not-allowed disabled:"
                            href="https://t.me/bpay_coin_bot/bpay_mini_app?startapp=channel_tomtalk"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            DO
                          </a>
                        ))}
                      <div>
                        {userTask?.BpayBot && (
                          <IoCheckmarkDoneCircleSharp className="text-white text-2xl absolute right-5 top-1/2  transform -translate-y-1/2 " />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#272a2f] py-2 my-2 rounded-lg mx-2 hover:opacity-70 cursor-pointer relative">
                  <div className="flex items-center  px-3">
                    <div className="flex items-center space-x-2">
                      <div className="p-1">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrIXWT0YCRDz11iby1J2i2wr0VkOGozm-p_w&s"
                          className="size-8 object-contain rounded-lg"
                          alt=""
                        />
                      </div>
                      <div>
                        <h2 className="text-white">Join Bpay Bot Channel</h2>
                        <div className="flex items-center space-x-1">
                          <p className="text-white">+5,000</p>
                        </div>
                      </div>
                      {!userTask?.BpayTG &&
                        (dos21 ? (
                          <button
                            onClick={() => handlePartnerUpdate("BpayTG")}
                            className="text-black bg-[#e2b446] font-bold text-xl px-3 py-2 rounded-lg absolute right-3 top-1/2  transform -translate-y-1/2  disabled:cursor-not-allowed disabled:"
                          >
                            {loading ? (
                              <div className="flex flex-row gap-2">
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.7s]" />
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.3s]" />
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.7s]" />
                              </div>
                            ) : (
                              "Claim"
                            )}
                          </button>
                        ) : (
                          <a
                            onClick={() => setDos21(true)}
                            className="text-black bg-[#e2b446] font-bold text-xl px-3 py-2 rounded-lg absolute right-3 top-1/2  transform -translate-y-1/2  disabled:cursor-not-allowed disabled:"
                            href="https://t.me/Bpay_official_channel"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            DO
                          </a>
                        ))}
                      <div>
                        {userTask?.BpayTG && (
                          <IoCheckmarkDoneCircleSharp className="text-white text-2xl absolute right-5 top-1/2  transform -translate-y-1/2 " />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                {/* ============= */}
                {/* RUN-TAP-TAP Start */}
                <h2 className="text-white py-1  font-semibold">RUN-TAP-TAP</h2>
                <div className="bg-[#272a2f] py-2 my-2 rounded-lg mx-2 hover:opacity-70 cursor-pointer relative">
                  <div className="flex items-center  px-3">
                    <div className="flex items-center space-x-2">
                      <div className="p-1">
                        <img
                          src="https://play-lh.googleusercontent.com/dG-_K6Da8qKOGrrb3AKUuI36TtDAVdzn_r01Kt7TkpUFzBpeW0YIFIpTgNGXaptLWus"
                          className="size-8 object-contain rounded-lg"
                          alt=""
                        />
                      </div>
                      <div>
                        <h2 className="text-white">Join RUN-TAP-TAP bot</h2>
                        <div className="flex items-center space-x-1">
                          <p className="text-white">+5,000</p>
                        </div>
                      </div>
                      {!userTask?.RunBot &&
                        (dos22 ? (
                          <button
                            onClick={() => handlePartnerUpdate("RunBot")}
                            className="text-black bg-[#e2b446] font-bold text-xl px-3 py-2 rounded-lg absolute right-3 top-1/2  transform -translate-y-1/2  disabled:cursor-not-allowed disabled:"
                          >
                            {loading ? (
                              <div className="flex flex-row gap-2">
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.7s]" />
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.3s]" />
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.7s]" />
                              </div>
                            ) : (
                              "Claim"
                            )}
                          </button>
                        ) : (
                          <a
                            onClick={() => setDos22(true)}
                            className="text-black bg-[#e2b446] font-bold text-xl px-3 py-2 rounded-lg absolute right-3 top-1/2  transform -translate-y-1/2  disabled:cursor-not-allowed disabled:"
                            href="https://t.me/run_tap_tap_bot/RunTapTap?startapp=M00Y6OY71840838334"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            DO
                          </a>
                        ))}
                      <div>
                        {userTask?.BpayBot && (
                          <IoCheckmarkDoneCircleSharp className="text-white text-2xl absolute right-5 top-1/2  transform -translate-y-1/2 " />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#272a2f] py-2 my-2 rounded-lg mx-2 hover:opacity-70 cursor-pointer relative">
                  <div className="flex items-center  px-3">
                    <div className="flex items-center space-x-2">
                      <div className="p-1">
                        <img
                          src="https://play-lh.googleusercontent.com/dG-_K6Da8qKOGrrb3AKUuI36TtDAVdzn_r01Kt7TkpUFzBpeW0YIFIpTgNGXaptLWus"
                          className="size-8 object-contain rounded-lg"
                          alt=""
                        />
                      </div>
                      <div>
                        <h2 className="text-white">Follow RUN Community</h2>
                        <div className="flex items-center space-x-1">
                          <p className="text-white">+5,000</p>
                        </div>
                      </div>
                      {!userTask?.RunTG &&
                        (dos23 ? (
                          <button
                            onClick={() => handlePartnerUpdate("RunTG")}
                            className="text-black bg-[#e2b446] font-bold text-xl px-3 py-2 rounded-lg absolute right-3 top-1/2  transform -translate-y-1/2  disabled:cursor-not-allowed disabled:"
                          >
                            {loading ? (
                              <div className="flex flex-row gap-2">
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.7s]" />
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.3s]" />
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.7s]" />
                              </div>
                            ) : (
                              "Claim"
                            )}
                          </button>
                        ) : (
                          <a
                            onClick={() => setDos23(true)}
                            className="text-black bg-[#e2b446] font-bold text-xl px-3 py-2 rounded-lg absolute right-3 top-1/2  transform -translate-y-1/2  disabled:cursor-not-allowed disabled:"
                            href="https://t.me/Bpay_official_channel"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            DO
                          </a>
                        ))}
                      <div>
                        {userTask?.RunTG && (
                          <IoCheckmarkDoneCircleSharp className="text-white text-2xl absolute right-5 top-1/2  transform -translate-y-1/2 " />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#272a2f] py-2 my-2 rounded-lg mx-2 hover:opacity-70 cursor-pointer relative">
                  <div className="flex items-center  px-3">
                    <div className="flex items-center space-x-2">
                      <div className="p-1">
                        <img
                          src="https://play-lh.googleusercontent.com/dG-_K6Da8qKOGrrb3AKUuI36TtDAVdzn_r01Kt7TkpUFzBpeW0YIFIpTgNGXaptLWus"
                          className="size-8 object-contain rounded-lg"
                          alt=""
                        />
                      </div>
                      <div>
                        <h2 className="text-white">Follow X RUN</h2>
                        <div className="flex items-center space-x-1">
                          <p className="text-white">+5,000</p>
                        </div>
                      </div>
                      {!userTask?.RunX &&
                        (dos23 ? (
                          <button
                            onClick={() => handlePartnerUpdate("RunX")}
                            className="text-black bg-[#e2b446] font-bold text-xl px-3 py-2 rounded-lg absolute right-3 top-1/2  transform -translate-y-1/2  disabled:cursor-not-allowed disabled:"
                          >
                            {loading ? (
                              <div className="flex flex-row gap-2">
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.7s]" />
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.3s]" />
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.7s]" />
                              </div>
                            ) : (
                              "Claim"
                            )}
                          </button>
                        ) : (
                          <a
                            onClick={() => setDos23(true)}
                            className="text-black bg-[#e2b446] font-bold text-xl px-3 py-2 rounded-lg absolute right-3 top-1/2  transform -translate-y-1/2  disabled:cursor-not-allowed disabled:"
                            href="http://x.com/RunTogether_Nft"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            DO
                          </a>
                        ))}
                      <div>
                        {userTask?.RunX && (
                          <IoCheckmarkDoneCircleSharp className="text-white text-2xl absolute right-5 top-1/2  transform -translate-y-1/2 " />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                {/* ============= */}

                {/* BaseRagdoll Start */}
                <h2 className="text-white py-1  font-semibold">BaseRagdoll</h2>
                <div className="bg-[#272a2f] py-2 my-2 rounded-lg mx-2 hover:opacity-70 cursor-pointer relative">
                  <div className="flex items-center  px-3">
                    <div className="flex items-center space-x-2">
                      <div className="p-1">
                        <img
                          src="/RagdollDapp.png"
                          className="size-8 object-contain rounded-lg"
                          alt=""
                        />
                      </div>
                      <div>
                        <h2 className="text-white">Follow Channel</h2>
                        <div className="flex items-center space-x-1">
                          <p className="text-white">+5,000</p>
                        </div>
                      </div>
                      {!userTask?.RagdollFollow &&
                        (dos7 ? (
                          <button
                            onClick={() => handlePartnerUpdate("RagdollFollow")}
                            className="text-black bg-[#e2b446] font-bold text-xl px-3 py-2 rounded-lg absolute right-3 top-1/2  transform -translate-y-1/2  disabled:cursor-not-allowed disabled:"
                          >
                            {loading ? (
                              <div className="flex flex-row gap-2">
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.7s]" />
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.3s]" />
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.7s]" />
                              </div>
                            ) : (
                              "Claim"
                            )}
                          </button>
                        ) : (
                          <a
                            onClick={() => setDos7(true)}
                            className="text-black bg-[#e2b446] font-bold text-xl px-3 py-2 rounded-lg absolute right-3 top-1/2  transform -translate-y-1/2  disabled:cursor-not-allowed disabled:"
                            href="https://t.me/BaseRagdoll"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            DO
                          </a>
                        ))}
                      <div>
                        {userTask?.RagdollFollow && (
                          <IoCheckmarkDoneCircleSharp className="text-white text-2xl absolute right-5 top-1/2  transform -translate-y-1/2 " />
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#272a2f] py-2 my-2 rounded-lg mx-2 hover:opacity-70 cursor-pointer relative">
                  <div className="flex items-center  px-3">
                    <div className="flex items-center space-x-2">
                      <div className="p-1">
                        <img
                          src="/RagdollDapp.png"
                          className="size-8 object-contain rounded-lg"
                          alt=""
                        />
                      </div>
                      <div>
                        <h2 className="text-white">Join dApp</h2>
                        <div className="flex items-center space-x-1">
                          <p className="text-white">+5,000</p>
                        </div>
                      </div>
                      {!userTask?.RagdollDapp &&
                        (dos8 ? (
                          <button
                            onClick={() => handlePartnerUpdate("RagdollDapp")}
                            className="text-black bg-[#e2b446] font-bold text-xl px-3 py-2 rounded-lg absolute right-3 top-1/2  transform -translate-y-1/2  disabled:cursor-not-allowed disabled:"
                          >
                            {loading ? (
                              <div className="flex flex-row gap-2">
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.7s]" />
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.3s]" />
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.7s]" />
                              </div>
                            ) : (
                              "Claim"
                            )}
                          </button>
                        ) : (
                          <a
                            onClick={() => setDos8(true)}
                            className="text-black bg-[#e2b446] font-bold text-xl px-3 py-2 rounded-lg absolute right-3 top-1/2  transform -translate-y-1/2  disabled:cursor-not-allowed disabled:"
                            href="https://t.me/Ragdollwtf_bot/minigame_ragdoll?startapp"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            DO
                          </a>
                        ))}
                      <div>
                        {userTask?.RagdollDapp && (
                          <IoCheckmarkDoneCircleSharp className="text-white text-2xl absolute right-5 top-1/2  transform -translate-y-1/2 " />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                {/* ENd */}

                {/* Intract Start */}
                <h2 className="text-white py-1  font-semibold">Intract</h2>
                <div className="bg-[#272a2f] py-2 my-2 rounded-lg mx-2 hover:opacity-70 cursor-pointer relative">
                  <div className="flex items-center  px-3">
                    <div className="flex items-center space-x-2">
                      <div className="p-1">
                        <img
                          src="/Intract.png"
                          className="size-8 object-contain rounded-lg"
                          alt=""
                        />
                      </div>
                      <div>
                        <h2 className="text-white">Intract Bot </h2>
                        <div className="flex items-center space-x-1">
                          <p className="text-white">+5,000</p>
                        </div>
                      </div>
                      {!userTask?.Intract &&
                        (dos8 ? (
                          <button
                            onClick={() => handlePartnerUpdate("Intract")}
                            className="text-black bg-[#e2b446] font-bold text-xl px-3 py-2 rounded-lg absolute right-3 top-1/2  transform -translate-y-1/2  disabled:cursor-not-allowed disabled:"
                          >
                            {loading ? (
                              <div className="flex flex-row gap-2">
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.7s]" />
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.3s]" />
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.7s]" />
                              </div>
                            ) : (
                              "Claim"
                            )}
                          </button>
                        ) : (
                          <a
                            onClick={() => setDos8(true)}
                            className="text-black bg-[#e2b446] font-bold text-xl px-3 py-2 rounded-lg absolute right-3 top-1/2  transform -translate-y-1/2  disabled:cursor-not-allowed disabled:"
                            href="https://t.me/tonton_intract_bot"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            DO
                          </a>
                        ))}
                      <div>
                        {userTask?.Intract && (
                          <IoCheckmarkDoneCircleSharp className="text-white text-2xl absolute right-5 top-1/2  transform -translate-y-1/2 " />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                {/* ENd */}

                {/* Grand Journey Start */}
                <h2 className="text-white py-1  font-semibold">
                  Grand Journey
                </h2>
                <div className="bg-[#272a2f] py-2 my-2 rounded-lg mx-2 hover:opacity-70 cursor-pointer relative">
                  <div className="flex items-center  px-3">
                    <div className="flex items-center space-x-2">
                      <div className="p-1">
                        <img
                          src="/GrandDapp.png"
                          className="size-8 object-contain rounded-lg"
                          alt=""
                        />
                      </div>
                      <div>
                        <h2 className="text-white">
                          Follow Grand Journey Channel
                        </h2>
                        <div className="flex items-center space-x-1">
                          <p className="text-white">+5,000</p>
                        </div>
                      </div>
                      {!userTask?.GrandTG &&
                        (dos9 ? (
                          <button
                            onClick={() => handlePartnerUpdate("GrandTG")}
                            className="text-black bg-[#e2b446] font-bold text-xl px-3 py-2 rounded-lg absolute right-3 top-1/2  transform -translate-y-1/2  disabled:cursor-not-allowed disabled:"
                          >
                            {loading ? (
                              <div className="flex flex-row gap-2">
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.7s]" />
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.3s]" />
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.7s]" />
                              </div>
                            ) : (
                              "Claim"
                            )}
                          </button>
                        ) : (
                          <a
                            onClick={() => setDos9(true)}
                            className="text-black bg-[#e2b446] font-bold text-xl px-3 py-2 rounded-lg absolute right-3 top-1/2  transform -translate-y-1/2  disabled:cursor-not-allowed disabled:"
                            href="https://t.me/Channel_GrandJourney"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            DO
                          </a>
                        ))}
                      <div>
                        {userTask?.GrandTG && (
                          <IoCheckmarkDoneCircleSharp className="text-white text-2xl absolute right-5 top-1/2  transform -translate-y-1/2 " />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                {/* TG */}
                <div className="bg-[#272a2f] py-2 my-2 rounded-lg mx-2 hover:opacity-70 cursor-pointer relative">
                  <div className="flex items-center  px-3">
                    <div className="flex items-center space-x-2">
                      <div className="p-1">
                        <img
                          src="/GrandDapp.png"
                          className="size-8 object-contain rounded-lg"
                          alt=""
                        />
                      </div>
                      <div>
                        <h2 className="text-white">Join Grand Journey dApp</h2>
                        <div className="flex items-center space-x-1">
                          <p className="text-white">+5,000</p>
                        </div>
                      </div>
                      {!userTask?.GrandDapp &&
                        (dos10 ? (
                          <button
                            onClick={() => handlePartnerUpdate("GrandDapp")}
                            className="text-black bg-[#e2b446] font-bold text-xl px-3 py-2 rounded-lg absolute right-3 top-1/2  transform -translate-y-1/2  disabled:cursor-not-allowed disabled:"
                          >
                            {loading ? (
                              <div className="flex flex-row gap-2">
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.7s]" />
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.3s]" />
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.7s]" />
                              </div>
                            ) : (
                              "Claim"
                            )}
                          </button>
                        ) : (
                          <a
                            onClick={() => setDos10(true)}
                            className="text-black bg-[#e2b446] font-bold text-xl px-3 py-2 rounded-lg absolute right-3 top-1/2  transform -translate-y-1/2  disabled:cursor-not-allowed disabled:"
                            href="https://t.me/grandjourneybot/airdrop?startapp=ref_gNyiHK"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            DO
                          </a>
                        ))}
                      <div>
                        {userTask?.GrandDapp && (
                          <IoCheckmarkDoneCircleSharp className="text-white text-2xl absolute right-5 top-1/2  transform -translate-y-1/2 " />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                {/* ENd */}

                {/* Habit  Start */}
                <h2 className="text-white py-1  font-semibold">
                  Habit Game (Tap - Trade - Win USDT)
                </h2>
                <div className="bg-[#272a2f] py-2 my-2 rounded-lg mx-2 hover:opacity-70 cursor-pointer relative">
                  <div className="flex items-center  px-3">
                    <div className="flex items-center space-x-2">
                      <div className="p-1">
                        <img
                          src="/HabitGame.png"
                          className="size-8 object-contain rounded-lg"
                          alt=""
                        />
                      </div>
                      <div>
                        <h2 className="text-white">Habit Game</h2>
                        <div className="flex items-center space-x-1">
                          <p className="text-white">+5,000</p>
                        </div>
                      </div>
                      {!userTask?.HabitGame &&
                        (dos11 ? (
                          <button
                            onClick={() => handlePartnerUpdate("HabitGame")}
                            className="text-black bg-[#e2b446] font-bold text-xl px-3 py-2 rounded-lg absolute right-3 top-1/2  transform -translate-y-1/2  disabled:cursor-not-allowed disabled:"
                          >
                            {loading ? (
                              <div className="flex flex-row gap-2">
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.7s]" />
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.3s]" />
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.7s]" />
                              </div>
                            ) : (
                              "Claim"
                            )}
                          </button>
                        ) : (
                          <a
                            onClick={() => setDos11(true)}
                            className="text-black bg-[#e2b446] font-bold text-xl px-3 py-2 rounded-lg absolute right-3 top-1/2  transform -translate-y-1/2  disabled:cursor-not-allowed disabled:"
                            href="https://t.me/HabitNetwork_bot/HABIT?startapp=ref_7256334586"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            DO
                          </a>
                        ))}
                      <div>
                        {userTask?.HabitGame && (
                          <IoCheckmarkDoneCircleSharp className="text-white text-2xl absolute right-5 top-1/2  transform -translate-y-1/2 " />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                {/* TG */}
                <div className="bg-[#272a2f] py-2 my-2 rounded-lg mx-2 hover:opacity-70 cursor-pointer relative">
                  <div className="flex items-center  px-3">
                    <div className="flex items-center space-x-2">
                      <div className="p-1">
                        <img
                          src="/HabitGame.png"
                          className="size-8 object-contain rounded-lg"
                          alt=""
                        />
                      </div>
                      <div>
                        <h2 className="text-white">Join Habit Network</h2>
                        <div className="flex items-center space-x-1">
                          <p className="text-white">+5,000</p>
                        </div>
                      </div>
                      {!userTask?.HabitTG &&
                        (dos12 ? (
                          <button
                            onClick={() => handlePartnerUpdate("HabitTG")}
                            className="text-black bg-[#e2b446] font-bold text-xl px-3 py-2 rounded-lg absolute right-3 top-1/2  transform -translate-y-1/2  disabled:cursor-not-allowed disabled:"
                          >
                            {loading ? (
                              <div className="flex flex-row gap-2">
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.7s]" />
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.3s]" />
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.7s]" />
                              </div>
                            ) : (
                              "Claim"
                            )}
                          </button>
                        ) : (
                          <a
                            onClick={() => setDos12(true)}
                            className="text-black bg-[#e2b446] font-bold text-xl px-3 py-2 rounded-lg absolute right-3 top-1/2  transform -translate-y-1/2  disabled:cursor-not-allowed disabled:"
                            href="https://t.me/+zvHApIjKapM4YWU1"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            DO
                          </a>
                        ))}
                      <div>
                        {userTask?.HabitTG && (
                          <IoCheckmarkDoneCircleSharp className="text-white text-2xl absolute right-5 top-1/2  transform -translate-y-1/2 " />
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#272a2f] py-2 my-2 rounded-lg mx-2 hover:opacity-70 cursor-pointer relative">
                  <div className="flex items-center  px-3">
                    <div className="flex items-center space-x-2">
                      <div className="p-1">
                        <img
                          src="/HabitGame.png"
                          className="size-8 object-contain rounded-lg"
                          alt=""
                        />
                      </div>
                      <div>
                        <h2 className="text-white">
                          Follow Habit Network on X
                        </h2>
                        <div className="flex items-center space-x-1">
                          <p className="text-white">+5,000</p>
                        </div>
                      </div>
                      {!userTask?.HabitFollow &&
                        (dos12 ? (
                          <button
                            onClick={() => handlePartnerUpdate("HabitFollow")}
                            className="text-black bg-[#e2b446] font-bold text-xl px-3 py-2 rounded-lg absolute right-3 top-1/2  transform -translate-y-1/2  disabled:cursor-not-allowed disabled:"
                          >
                            {loading ? (
                              <div className="flex flex-row gap-2">
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.7s]" />
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.3s]" />
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.7s]" />
                              </div>
                            ) : (
                              "Claim"
                            )}
                          </button>
                        ) : (
                          <a
                            onClick={() => setDos12(true)}
                            className="text-black bg-[#e2b446] font-bold text-xl px-3 py-2 rounded-lg absolute right-3 top-1/2  transform -translate-y-1/2  disabled:cursor-not-allowed disabled:"
                            href="https://x.com/0xHabitNetwork"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            DO
                          </a>
                        ))}
                      <div>
                        {userTask?.HabitFollow && (
                          <IoCheckmarkDoneCircleSharp className="text-white text-2xl absolute right-5 top-1/2  transform -translate-y-1/2 " />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                {/* ENd */}

                <h2 className="text-white py-1  font-semibold">TapUp</h2>
                <div className="bg-[#272a2f] py-2 my-2 rounded-lg mx-2 hover:opacity-70 cursor-pointer relative">
                  <div className="flex items-center  px-3">
                    <div className="flex items-center space-x-2">
                      <div className="p-1">
                        <img
                          src="/tapup.jpeg"
                          className="size-8 object-contain rounded-lg"
                          alt=""
                        />
                      </div>
                      <div>
                        <h2 className="text-white">Play TapUp Game：</h2>
                        <div className="flex items-center space-x-1">
                          <p className="text-white">+5,000</p>
                        </div>
                      </div>
                      {!userTask?.TapUp &&
                        (dos2 ? (
                          <button
                            onClick={handleTopUpGame}
                            className="text-black bg-[#e2b446] font-bold text-xl px-3 py-2 rounded-lg absolute right-3 top-1/2  transform -translate-y-1/2  disabled:cursor-not-allowed disabled:"
                          >
                            {loading ? (
                              <div className="flex flex-row gap-2">
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.7s]" />
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.3s]" />
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.7s]" />
                              </div>
                            ) : (
                              "Claim"
                            )}
                          </button>
                        ) : (
                          <a
                            onClick={() => setDos2(true)}
                            className="text-black bg-[#e2b446] font-bold text-xl px-3 py-2 rounded-lg absolute right-3 top-1/2  transform -translate-y-1/2  disabled:cursor-not-allowed disabled:"
                            href="https://t.me/TapUp_Bot?start=uZI3UMmU6p"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            DO
                          </a>
                        ))}
                      <div>
                        {userTask?.TapUp && (
                          <IoCheckmarkDoneCircleSharp className="text-white text-2xl absolute right-5 top-1/2  transform -translate-y-1/2 " />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                {/* TG */}
                <div className="bg-[#272a2f] py-2 my-2 rounded-lg mx-2 hover:opacity-70 cursor-pointer relative">
                  <div className="flex items-center  px-3">
                    <div className="flex items-center space-x-2">
                      <div className="p-1">
                        <img
                          src="/tapup.jpeg"
                          className="size-8 object-contain rounded-lg"
                          alt=""
                        />
                      </div>
                      <div>
                        <h2 className="text-white">Join TapUp TG group</h2>
                        <div className="flex items-center space-x-1">
                          <p className="text-white">+2,000</p>
                        </div>
                      </div>
                      {!userTask?.TapUpTG &&
                        (dos3 ? (
                          <button
                            onClick={handleTopUpTG}
                            className="text-black bg-[#e2b446] font-bold text-xl px-3 py-2 rounded-lg absolute right-3 top-1/2  transform -translate-y-1/2  disabled:cursor-not-allowed disabled:"
                          >
                            {loading ? (
                              <div className="flex flex-row gap-2">
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.7s]" />
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.3s]" />
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.7s]" />
                              </div>
                            ) : (
                              "Claim"
                            )}
                          </button>
                        ) : (
                          <a
                            onClick={() => setDos3(true)}
                            className="text-black bg-[#e2b446] font-bold text-xl px-3 py-2 rounded-lg absolute right-3 top-1/2  transform -translate-y-1/2  disabled:cursor-not-allowed disabled:"
                            href="https://t.me/Tapup_chat"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            DO
                          </a>
                        ))}
                      <div>
                        {userTask?.TapUpTG && (
                          <IoCheckmarkDoneCircleSharp className="text-white text-2xl absolute right-5 top-1/2  transform -translate-y-1/2 " />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                {/* ENd */}
                {/* PokeTON Start */}
                <h2 className="text-white py-1  font-semibold">PokeTON</h2>
                <div className="bg-[#272a2f] py-2 my-2 rounded-lg mx-2 hover:opacity-70 cursor-pointer relative">
                  <div className="flex items-center  px-3">
                    <div className="flex items-center space-x-2">
                      <div className="p-1">
                        <img
                          src="/PokeTON.svg"
                          className="size-8 object-contain"
                          alt=""
                        />
                      </div>
                      <div>
                        <h2 className="text-white">Join mini app PokeTON</h2>
                        <div className="flex items-center space-x-1">
                          <p className="text-white">+5,000</p>
                        </div>
                      </div>
                      {!userTask?.PokeTON &&
                        (dos ? (
                          <button
                            onClick={handleHabitNetwork}
                            className="text-black bg-[#e2b446] font-bold text-xl px-3 py-2 rounded-lg absolute right-3 top-1/2  transform -translate-y-1/2  disabled:cursor-not-allowed disabled:"
                          >
                            {loading ? (
                              <div className="flex flex-row gap-2">
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.7s]" />
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.3s]" />
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.7s]" />
                              </div>
                            ) : (
                              "Claim"
                            )}
                          </button>
                        ) : (
                          <a
                            onClick={() => setDos(true)}
                            className="text-black bg-[#e2b446] font-bold text-xl px-3 py-2 rounded-lg absolute right-3 top-1/2  transform -translate-y-1/2  disabled:cursor-not-allowed disabled:"
                            href="https://t.me/PoketonOrg_Bot/app?startapp=code-ads00050"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            DO
                          </a>
                        ))}
                      <div>
                        {userTask?.PokeTON && (
                          <IoCheckmarkDoneCircleSharp className="text-white text-2xl absolute right-5 top-1/2  transform -translate-y-1/2 " />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                {/* TG */}
                <div className="bg-[#272a2f] py-2 my-2 rounded-lg mx-2 hover:opacity-70 cursor-pointer relative">
                  <div className="flex items-center  px-3">
                    <div className="flex items-center space-x-2">
                      <div className="p-1">
                        <img
                          src="/PokeTON.svg"
                          className="size-8 object-contain"
                          alt=""
                        />
                      </div>
                      <div>
                        <h2 className="text-white">Follow PokeTON Channel</h2>
                        <div className="flex items-center space-x-1">
                          <p className="text-white">+2,000</p>
                        </div>
                      </div>
                      {!userTask?.PokeTG &&
                        (dos1 ? (
                          <button
                            onClick={handlePokeTG}
                            className="text-black bg-[#e2b446] font-bold text-xl px-3 py-2 rounded-lg absolute right-3 top-1/2  transform -translate-y-1/2  disabled:cursor-not-allowed disabled:"
                          >
                            {loading ? (
                              <div className="flex flex-row gap-2">
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.7s]" />
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.3s]" />
                                <div className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:.7s]" />
                              </div>
                            ) : (
                              "Claim"
                            )}
                          </button>
                        ) : (
                          <a
                            onClick={() => setDos1(true)}
                            className="text-black bg-[#e2b446] font-bold text-xl px-3 py-2 rounded-lg absolute right-3 top-1/2  transform -translate-y-1/2  disabled:cursor-not-allowed disabled:"
                            href="https://t.me/PoketonOrg_Ann"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            DO
                          </a>
                        ))}
                      <div>
                        {userTask?.PokeTG && (
                          <IoCheckmarkDoneCircleSharp className="text-white text-2xl absolute right-5 top-1/2  transform -translate-y-1/2 " />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                {/* ENd */}
              </div>
            )}
          </div>
        </div>
        <div>
          <AppNav />
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0  flex flex-wrap justify-center items-end  w-full h-full z-[1000] backdrop-blur-sm bottom-0 end-0 before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto ">
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
                  src={data.imgUrl}
                  className="size-20 m-auto object-contain"
                  alt=""
                />
              </div>
              <h3 className="text-white text-3xl my-4 font-semibold ">
                {data.title}
              </h3>
              {data?.link !== "" ? (
                <a
                  target="_blank"
                  onClick={() => setRewardBtn(false)}
                  href={data?.link}
                  className="mybtn block uppercase  w-2/3 m-auto"
                >
                  {" "}
                  {data.btnTitle}
                </a>
              ) : (
                <button
                  onClick={() => {
                    data?.choose();
                    setIsOpen(false);
                  }}
                  className="mybtn block uppercase  w-2/3 m-auto"
                >
                  {" "}
                  {data.btnTitle}
                </button>
              )}
              <div className="flex justify-center items-center   space-x-2 my-5">
                <img src="/talktom.png" className="rounded-full w-6" alt="" />
                <h2 className="text-white text-2xl font-bold ">
                  +{data.point}
                </h2>
              </div>
              {!data.status && (
                <button
                  disabled={rewardBtn}
                  className="bg-yellow-500 w-2/3 rounded-xl block mb-5  m-auto text-black text-2xl font-bold py-2 hover:opacity-65 disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={data.fun}
                >
                  Claim
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {isModal && (
        <div className="fixed inset-0  flex flex-wrap justify-center items-end  w-full h-full z-[1000] bottom-0 end-0 backdrop-blur-sm before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto ">
          <div className="w-full sm:max-w-xs bg-[#1d1e23]   border-[#e2b446]  border-t-[4px]  rounded-t-2xl   relative">
            <svg
              onClick={() => {
                setIsModal(false);
              }}
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 cursor-pointer relative shrink-0 fill-gray-900 p-1 bg-white/50 rounded-full hover:fill-red-500 m-3   float-end"
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
            <div className=" text-center mt-12">
              <h3 className="text-white text-3xl my-4 font-semibold ">
                {data.title}
              </h3>
            </div>
            {ex.map((value, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    handleExchangeUpdate(value);
                  }}
                  className="bg-[#272a2f] py-2 my-2 rounded-lg mx-4 hover:opacity-70 cursor-pointer relative"
                >
                  <div className="flex items-center px-3">
                    <div className="flex items-center space-x-3">
                      <div className="p-1">
                        <img
                          src={value.logo}
                          className="size-8 object-contain"
                          alt="Invite 3 friends"
                        />
                      </div>
                      <div>
                        <h2 className="text-white">{value.name}</h2>
                      </div>
                    </div>
                    <div>
                      {userTask?.exchangeName === value.name ? (
                        <IoCheckmarkDoneCircleSharp className="text-white text-2xl absolute right-5 top-1/2  transform -translate-y-1/2 " />
                      ) : (
                        <FaAngleRight className="text-white text-2xl absolute right-5 top-1/2  transform -translate-y-1/2 " />
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <DailyRewards show={isOpen1} onClose={handleCloseModal} />
    </>
  );
};

export default Earn;
