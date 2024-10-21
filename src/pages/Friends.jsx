/** @format */

import React from "react";
import AppNav from "../layout/AppNav";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import LoadingScreen from "../utils/LoadingScreen";
import { getReferralUsers } from "../redux/taskSlice";
import useRequest from "@ahooksjs/use-request";
import { FaTelegram, FaWhatsapp } from "react-icons/fa6";

const Friends = () => {
  const user = useSelector((state) => state.tom.user);
  const friends = useSelector((state) => state.tasks.friends);
  const dispatch = useDispatch();

  const referralLink = `https://t.me/TOMTALK_BOT?start=${user?.telegramHandle}`;
  const message = encodeURIComponent(
    "Your voice is special. Everyone's voice is different. Tom Talk helps you make money from your voice. Talk, sing, or just be yourself, and get paid.",
  );
  const whatsappUrl = `whatsapp://send?text=${message} ${encodeURIComponent(referralLink)}`;

  const telegramLink = `https://t.me/share/url?url=${referralLink}&text=${message}`;

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(referralLink)
      .then(() => {
        toast.success("Copied!");
      })
      .catch((err) => {
        console.error("Could not copy text");
      });
  };

  const fetchData = () => {
    const { telegramHandle } = user || {};

    if (telegramHandle) {
      dispatch(
        getReferralUsers({
          telegramHandle,
        }),
      );
    }
  };
  useRequest(fetchData, {
    loadingDelay: 10000,
    pollingInterval: 10000,
    pollingWhenHidden: false,
    refreshOnWindowFocus: true,
    throttleInterval: 10000,
    throwOnError: true,
  });

  // Optional: handle cases where the task is not defined yet
  if (!user || !user.Tasks) {
    return <LoadingScreen />;
  }
  // console.log(friends);

  return (
    <div className=" sm:max-w-xs  w-full m-auto mb-40 rounded-lg shadow-2xl overflow-hidden relative">
      <div className="flex flex-col items-center justify-center  mt-10">
        <h3 className="text-white text-4xl mt-4 font-semibold">
          Invite friends!
        </h3>
        <p className="text-white/80 text-sm text-center py-1 ">
          You and your friends will receive bonuses
        </p>
      </div>
      <div className="mt-4">
        <div className="bg-[#272a2f] py-4 my-2 rounded-lg mx-4 hover:opacity-70 cursor-pointer relative">
          <div className="flex items-center space-x-3 px-3">
            <div className="flex items-center space-x-4">
              <div className="p-1">
                <img
                  src="gift_6145427.png"
                  className="size-10 object-contain"
                  alt="gift_6145427"
                />
              </div>
              <div>
                <h2 className="text-white">Invite a friend</h2>
                <div className="flex items-center space-x-1">
                  <p className="text-white">
                    <span className=" text-yellow-300">+5,000</span>{" "}
                    <small>for you and your friend</small>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#272a2f] py-4 my-4 rounded-lg mx-4 hover:opacity-70 cursor-pointer relative">
          <div className="flex items-center space-x-3 px-3">
            <div className="flex items-center space-x-4">
              <div className="p-1">
                <img
                  src="gift_6145427.png"
                  className="size-10 object-contain"
                  alt="gift_6145427"
                />
              </div>
              <div>
                <h2 className="text-white">
                  Invite a friend with Telegram Premium
                </h2>
                <div className="flex items-center space-x-1">
                  <p className="text-white">
                    <span className=" text-yellow-300">+25,000</span>{" "}
                    <small>for you and your friend</small>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex  w-full justify-center  space-x-3 z-10 mt-4">
          <div>
            <a
              className="cssbuttons-io-button  "
              href={telegramLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Invite a friends
              <div className="icon">
                {/* <svg
                  height={24}
                  width={24}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                    fill="currentColor"
                  />
                </svg> */}
                <FaTelegram />
              </div>
            </a>
          </div>
          <div>
            <a className="copy  block" href={whatsappUrl} target="_blank">
              <FaWhatsapp className="text-white text-2xl" />
            </a>
          </div>
          <div>
            <button className="copy " onClick={() => copyToClipboard()}>
              <span
                data-text-end="Copied!"
                data-text-initial="Copy to clipboard"
                className="tooltip"
              />
              <span>
                <svg
                  xmlSpace="preserve"
                  style={{ enableBackground: "new 0 0 512 512" }}
                  viewBox="0 0 6.35 6.35"
                  y={0}
                  x={0}
                  height={20}
                  width={20}
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  className="clipboard text-white text-2xl"
                >
                  <g>
                    <path
                      fill="currentColor"
                      d="M2.43.265c-.3 0-.548.236-.573.53h-.328a.74.74 0 0 0-.735.734v3.822a.74.74 0 0 0 .735.734H4.82a.74.74 0 0 0 .735-.734V1.529a.74.74 0 0 0-.735-.735h-.328a.58.58 0 0 0-.573-.53zm0 .529h1.49c.032 0 .049.017.049.049v.431c0 .032-.017.049-.049.049H2.43c-.032 0-.05-.017-.05-.049V.843c0-.032.018-.05.05-.05zm-.901.53h.328c.026.292.274.528.573.528h1.49a.58.58 0 0 0 .573-.529h.328a.2.2 0 0 1 .206.206v3.822a.2.2 0 0 1-.206.205H1.53a.2.2 0 0 1-.206-.205V1.529a.2.2 0 0 1 .206-.206z"
                    />
                  </g>
                </svg>
                <svg
                  xmlSpace="preserve"
                  style={{ enableBackground: "new 0 0 512 512" }}
                  viewBox="0 0 24 24"
                  y={0}
                  x={0}
                  height={18}
                  width={18}
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  className="checkmark"
                >
                  <g>
                    <path
                      data-original="#000000"
                      fill="currentColor"
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                    />
                  </g>
                </svg>
              </span>
            </button>
          </div>
        </div>
        <h2 className="text-white py-1 font-semibold mt-5 mx-3">
          List of your friends
        </h2>
        <div className="bg-black  max-h-[500px] overflow-y-scroll custom-scrollbar rounded-lg px-2 py-2">
          {friends?.length !== 0 ? (
            [...friends]
              .sort((a, b) => b.totalCoins - a.totalCoins) // Sort by totalCoins in descending order
              .map((value, index) => {
                return (
                  <div
                    className="bg-[#272a2f] py-2 my-2 rounded-lg mx-4  hover:opacity-70 cursor-pointer relative"
                    key={value?.telegramHandle}
                  >
                    <div className="flex items-center justify-between space-x-3 px-3">
                      <div className="flex items-center space-x-4">
                        <div className="p-1">
                          <img
                            src="talktom.png"
                            className="size-10 object-contain"
                            alt="gift_6145427"
                          />
                        </div>
                        <div>
                          <h2 className="text-white">{value?.userName}</h2>
                          <div className="flex items-center space-x-1">
                            <p className="text-white">
                              <span className=" text-yellow-300">
                                {value?.totalCoins?.toFixed(0)}
                              </span>{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className="text-lg text-gray-400">{index + 1}</p>
                      </div>
                    </div>
                  </div>
                );
              })
          ) : (
            <p className="text-center text-gray-100">
              No referred users found.
            </p>
          )}
        </div>
      </div>

      <AppNav />
    </div>
  );
};

export default Friends;
