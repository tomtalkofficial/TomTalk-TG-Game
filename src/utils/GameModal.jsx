/** @format */

import React from "react";
import { Link } from "react-router-dom";

const GameModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[999999] backdrop-blur-sm before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.82)] overflow-auto ">
      <div className="w-full sm:max-w-xs bg-[#1d1e23] border-[#e2b446] border-t-[4px] border-b-[4px] rounded-2xl p-6  relative">
        <svg
          onClick={onClose}
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 cursor-pointer relative shrink-0 fill-gray-900 p-1 bg-white/50 rounded-full hover:fill-red-500 float-end"
          viewBox="0 0 320.591 320.591"
        >
          <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" />
          <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" />
        </svg>
        <div className="text-center mt-5">
          <div className="flex flex-col items-center justify-center py-3">
            <img src="/gm.png" className="w-3/4 rounded-md" alt="" />
            <h3 className="text-white text-4xl mt-4 font-semibold">
              Snake Game
            </h3>
            <p className="text-white/80 text-lg text-center py-4">
              Use the (keys/Buttons) UP, DOWN, RIGHT, and LEFT to make the snake
              grow longer.
            </p>
          </div>

          <Link
            to="/snake-game"
            className="bg-yellow-500 w-2/3 rounded-3xl block uppercase mt-3 m-auto text-black text-2xl font-bold py-2 hover:opacity-65 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Play
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GameModal;
