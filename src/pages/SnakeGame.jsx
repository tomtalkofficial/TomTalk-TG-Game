import React, { useState, useEffect } from "react";
import useSound from "use-sound";
import music_food from "../music/music_food.mp3";
import mineSound from "../music/earn.mp3";
import music_gameover from "../music/music_gameover.mp3";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateTotalCoins } from "../redux/counterSlice";
import toast from "react-hot-toast";

const ROWS = 20;
const COLS = 20;
const INITIAL_SNAKE = [{ row: 12, col: 12 }];
const INITIAL_DIRECTION = "RIGHT";

const generateFood = () => {
  return {
    row: Math.floor(Math.random() * ROWS),
    col: Math.floor(Math.random() * COLS),
  };
};
const SnakeGame = () => {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [food, setFood] = useState(generateFood());
  const [gameOver, setGameOver] = useState(false);
  const [isPause, setIsPause] = useState(false);
  const [score, setScore] = useState(0);
  const [play] = useSound(music_food);
  const [gameover] = useSound(music_gameover);
  const [mine_Sound] = useSound(mineSound);
  const user = useSelector((state) => state.tom.user);
  const status = useSelector((state) => state.counter.status);
  const { telegramHandle } = user || {};
  const dispatch = useDispatch();

  const checkCollision = (snake) => {
    const head = snake[0];
    return (
      snake
        .slice(1)
        .some(
          (segment) => segment.row === head.row && segment.col === head.col,
        ) ||
      head.row < 0 ||
      head.row >= ROWS ||
      head.col < 0 ||
      head.col >= COLS
    );
  };
  const handleVibration = () => {
    if (navigator.vibrate) {
      navigator.vibrate(200); // Vibrate for 200ms
    } else {
      console.log("Vibration API not supported by this device");
    }
  };
  const resetGame = () => {
    handleVibration();
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    setFood(generateFood());
    setGameOver(false);
    setScore(0);
  };

  useEffect(() => {
    if (!gameOver && !isPause) {
      const moveSnake = () => {
        const newSnake = snake.map((segment) => ({ ...segment }));

        const head = { ...newSnake[0] };

        switch (direction) {
          case "UP":
            head.row = (head.row - 1 + ROWS) % ROWS;
            break;
          case "DOWN":
            head.row = (head.row + 1) % ROWS;
            break;
          case "LEFT":
            head.col = (head.col - 1 + COLS) % COLS;
            break;
          case "RIGHT":
            head.col = (head.col + 1) % COLS;
            break;
          default:
            break;
        }

        newSnake.unshift(head);

        if (head.row === food.row && head.col === food.col) {
          setFood(generateFood());
          play();
          setScore(score + 100);
        } else {
          newSnake.pop();
        }

        if (checkCollision(newSnake)) {
          setGameOver(true);
          gameover();
        } else {
          setSnake(newSnake);
        }
      };

      const gameInterval = setInterval(moveSnake, 200);

      return () => {
        clearInterval(gameInterval);
      };
    }
  }, [snake, direction, food, gameOver, isPause, score]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      switch (e.key) {
        case "ArrowUp":
          setDirection("UP");
          break;
        case "ArrowDown":
          setDirection("DOWN");
          break;
        case "ArrowLeft":
          setDirection("LEFT");
          break;
        case "ArrowRight":
          setDirection("RIGHT");
          break;
        default:
          break;
      }
    };
    document.addEventListener("keydown", handleKeyPress);
  }, []);

  const handleClaim = async () => {
    if (telegramHandle && score > 0) {
      try {
        const result = await dispatch(
          updateTotalCoins({
            telegramHandle: telegramHandle,
            amount: Number(score),
          }),
        ).unwrap(); // Ensures you wait for the result from the action
        // console.log("res ===>", result);

        if (result?.status === "success") {
          mine_Sound();
          setScore(0); // Reset score on success
          toast.success("Coins claimed successfully!");
        }
      } catch (error) {
        console.error("Error claiming coins:", error);
        toast.error("Failed to claim coins, please try again.");
      }
    }
  };

  return (
    <div className="sm:max-w-xs  w-full h-screen m-auto  rounded-lg sm:shadow-2xl overflow-hidden  relative">
      <div className="game-board my-5">
        {Array.from({ length: ROWS }).map((_, rowIndex) => (
          <div key={rowIndex} className="rows">
            {Array.from({ length: COLS }).map((_, colIndex) => (
              <div
                key={colIndex}
                className={`cell ${snake.some((segment) => segment.row === rowIndex && segment.col === colIndex) ? "snake" : ""} ${
                  food.row === rowIndex && food.col === colIndex ? "food" : ""
                }`}
              ></div>
            ))}
          </div>
        ))}
      </div>
      {gameOver && (
        <div className="fixed inset-0  flex flex-wrap justify-center items-center w-full h-full z-[999999] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.82)] overflow-auto ">
          <div className="w-full sm:max-w-xs bg-[#1d1e23] border-[#e2b446] border-t-[4px] border-b-[4px] rounded-2xl p-6  relative">
            <Link to="/gameMenu">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 cursor-pointer relative shrink-0 fill-gray-900 p-1 bg-white/50 rounded-full hover:fill-red-500 float-end"
                viewBox="0 0 320.591 320.591"
              >
                <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" />
                <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" />
              </svg>
            </Link>
            <div className="text-center mt-5">
              <div className="flex flex-col items-center justify-center py-3">
                <img
                  src="/talktom.png"
                  className="rounded-full w-16 sh"
                  alt=""
                />

                <h3 className="text-white text-4xl mt-4 font-semibold">
                  Game Over!
                </h3>
                <p className="my-4 text-white  text-lg font-bold flex items-center gap-2 justify-center">
                  {" "}
                  You earn: <span className="text-[#e2b446]">{score}</span>
                  <img
                    src="talktom.png"
                    className="w-4 inline-block"
                    alt="coins"
                    loading="lazy"
                  />{" "}
                </p>
              </div>
              <div className="flex items-center ">
                <button
                  onClick={resetGame}
                  title="Re-Start"
                  className="bg-yellow-500 rounded-full size-14    m-auto text-black text-2xl font-bold py-2 hover:opacity-65 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <img src="/repeat.svg" className="w-8 m-auto" alt="" />
                </button>
                {score !== 0 && (
                  <button
                    disabled={score === 0 || status === "loading"} // Disable if score is 0 or status is loading
                    className="bg-yellow-500 w-2/4 rounded-3xl uppercase m-auto text-black text-2xl font-bold py-2 hover:opacity-65 disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={handleClaim}
                  >
                    {status === "loading" ? "Claiming..." : "Claim"}{" "}
                    {/* Change button text based on status */}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="flex items-center justify-center gap-2 max-w-[70%] m-auto ">
        <button
          className="bg-yellow-500 w-full rounded-3xl block uppercase mt-3 m-auto text-black text-2xl font-bold py-2 hover:opacity-65 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => {
            setIsPause(!isPause);
            handleVibration();
          }}
        >
          {" "}
          {isPause ? "Resume" : "Pause"}
        </button>
        {isPause && (
          <Link
            to="/gameMenu"
            title="Re-Start"
            className="bg-yellow-500 rounded-full w-2/3 flex justify-center  mt-3  m-auto text-black text-2xl font-bold py-2 hover:opacity-65 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Exit
          </Link>
        )}
      </div>
      <p className="my-4 text-white  text-lg font-bold flex items-center gap-2 justify-center">
        {" "}
        Score : <span className="text-[#e2b446]">{score}</span>
        <img
          src="talktom.png"
          className="w-5 inline-block"
          alt="coins"
          loading="lazy"
        />{" "}
      </p>
      <div className="control flex justify-center  flex-col items-center">
        <div>
          <button
            className="up bg-yellow-500 rounded-full size-14   uppercase mt-3 m-auto text-black text-2xl font-bold py-2 hover:opacity-65 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => {
              setDirection("UP");
              handleVibration();
            }}
          >
            <img src="/up.svg" className="w-10 m-auto" alt="" />
          </button>
        </div>
        <div className="flex gap-20 ">
          <button
            className="left bg-yellow-500 rounded-full size-14   uppercase mt-3 m-auto text-black text-2xl font-bold py-2 hover:opacity-65 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => {
              setDirection("LEFT");
              handleVibration();
            }}
          >
            <img src="/left.svg" className="w-10 m-auto" alt="" />
          </button>
          <button
            className="right bg-yellow-500 rounded-full size-14   uppercase mt-3 m-auto text-black text-2xl font-bold py-2 hover:opacity-65 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => {
              setDirection("RIGHT");
              handleVibration();
            }}
          >
            <img src="/right.svg" className="w-10 m-auto" alt="" />
          </button>
        </div>
        <div>
          <button
            className="down bg-yellow-500  rounded-full size-14   mt-3 m-auto text-black text-2xl font-bold py-2 hover:opacity-65 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => {
              setDirection("DOWN");
              handleVibration();
            }}
          >
            <img src="/down.svg" className="w-10 m-auto" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SnakeGame;
