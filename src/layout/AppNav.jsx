/** @format */

import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import LoadingScreen from "../utils/LoadingScreen";

const AppNav = () => {
  const { pathname } = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [isOpen, setIsOpen] = useState(false);

  const taskStatus = useSelector((state) => state.tom.user);
  const userTask = taskStatus?.Tasks?.[0]; // Safely access the first task

  // Optional: handle cases where the task is not defined yet
  // if (!taskStatus || !taskStatus.Tasks) {
  //   return <LoadingScreen />;
  // }

  return (
    <>
      <div className="flex justify-center">
        <div className=" fixed bottom-[0rem] rounded-lg  flex justify-center w-full sm:max-w-xs  bg-[#272a2f] backdrop-blur-x z-[999] pb-0 mb-0 app-nav">
          <div className="  mx-auto w-full pb-0 mb-0">
            <ul className="grid grid-cols-6  items-center justify-between h-[66px]  pb-0 mb-0">
              <li
                className={`text-center pt-2  h-full flex flex-col w-full items-center justify-center text-white border-white ${
                  pathname === "/play" ? " bg-black px-3 rounded-lg " : ""
                }`}
              >
                <Link
                  to="/play"
                  className={`text-white ${
                    pathname === "/play"
                      ? "active opacity-100 font-bold"
                      : "opacity-50 font-medium"
                  }`}
                  onClick={scrollToTop}
                >
                  <div className="flex justify-center">
                    <img
                      src={
                        userTask?.exchangeLogo
                          ? userTask?.exchangeLogo
                          : "/exchange.png"
                      }
                      className="w-5"
                      alt=""
                    />
                  </div>
                  {/* <BiHome size={22} color='current' className='block m-auto' /> */}
                  <p className="text-xs mt-1 leading-[15px] mb-0">
                    {userTask?.exchangeName
                      ? userTask?.exchangeName
                      : "Exchange"}
                  </p>
                </Link>
              </li>
              <li
                className={`text-center pt-2 px h-full flex flex-col w-full items-center justify-center text-white border-white ${
                  pathname === "/mine" ? " bg-black rounded-lg " : ""
                }`}
              >
                <Link
                  to="/mine"
                  onClick={scrollToTop}
                  className={`text-white ${
                    pathname === "/mine"
                      ? "active opacity-100 font-bold"
                      : "opacity-50 font-medium"
                  }`}
                >
                  <div className="flex justify-center">
                    <img src="mine.png" className="w-5" alt="" />
                  </div>
                  {/* <BsTrophy size={22} color='current' className='mx-2 block' /> */}
                  <p className="text-xs mt-1 leading-[15px] mb-0">Mine</p>
                </Link>
              </li>
              <li
                className={`text-center pt-2 px h-full flex flex-col w-full items-center justify-center text-white border-white ${
                  pathname === "/gameMenu" ? " bg-black rounded-lg " : ""
                }`}
              >
                <Link
                  to="/gameMenu"
                  onClick={scrollToTop}
                  className={`text-white ${
                    pathname === "/gameMenu"
                      ? "active opacity-100 font-bold "
                      : "opacity-50 font-medium"
                  }`}
                >
                  <div className="flex justify-center">
                    <img src="gameicon.png" className="w-7" alt="" />
                  </div>

                  <p className="text-xs mt-1 leading-[15px] mb-0">MiniGames</p>
                </Link>
              </li>
              <li
                className={`text-center pt-2 px h-full flex flex-col w-full items-center justify-center text-white border-white ${
                  pathname === "/friends" ? " bg-black rounded-lg " : ""
                }`}
              >
                <Link
                  to="/friends"
                  onClick={scrollToTop}
                  className={`text-white ${
                    pathname === "/friends"
                      ? "active opacity-100 font-bold"
                      : "opacity-50 font-medium"
                  }`}
                >
                  <div className="flex justify-center">
                    <img src="friend.png" className="w-7" alt="" />
                  </div>

                  <p className="text-xs mt-1 leading-[15px] mb-0">Friends</p>
                </Link>
              </li>
              <li
                className={`text-center pt-2 px h-full flex flex-col w-full items-center justify-center text-white border-white ${
                  pathname === "/earn" ? " bg-black rounded-lg " : ""
                }`}
              >
                <Link
                  to="/earn"
                  onClick={scrollToTop}
                  className={`text-white ${
                    pathname === "/earn"
                      ? "active opacity-100 font-bold"
                      : "opacity-50 font-medium"
                  }`}
                >
                  <div className="flex justify-center items-center">
                    <img src="earns.png" className="w-7" alt="" />
                  </div>
                  {/* <RiChatSmile3Line size={22} color='current' className='block m-auto' /> */}
                  <p className="text-xs mt-1 leading-[15px] mb-0">Earn</p>
                </Link>
              </li>
              <li
                className={`text-center pt-2 px h-full flex flex-col w-full items-center justify-center text-white border-white ${
                  pathname === "/airdrop" ? " bg-black rounded-lg " : ""
                }`}
              >
                <Link
                  to="/airdrop"
                  onClick={scrollToTop}
                  className={`text-white ${
                    pathname === "/airdrop"
                      ? "active opacity-100 font-bold"
                      : "opacity-50 font-medium"
                  }`}
                >
                  <div className="flex justify-center">
                    <img src="/talktom.png" className="w-5" alt="" />
                  </div>
                  <p className="text-xs mt-1 leading-[15px] mb-0">Airdrop</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[999999] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto ">
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
              <img src="soon.png" className="w-full z-[999999]" alt="" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AppNav;
