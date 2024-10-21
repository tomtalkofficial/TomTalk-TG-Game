/** @format */

import { useCallback, useEffect, useState } from "react";
const CountDown = () => {
  const [countDownTime, setCountDownTIme] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const getTimeDifference = (countDownTime) => {
    const currentTime = new Date().getTime();
    const timeDiffrence = countDownTime - currentTime;
    let days =
      Math.floor(timeDiffrence / (24 * 60 * 60 * 1000)) >= 10
        ? Math.floor(timeDiffrence / (24 * 60 * 60 * 1000))
        : `0${Math.floor(timeDiffrence / (24 * 60 * 60 * 1000))}`;
    const hours =
      Math.floor((timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)) >=
      10
        ? Math.floor((timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60))
        : `0${Math.floor(
            (timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60),
          )}`;
    const minutes =
      Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60)) >= 10
        ? Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60))
        : `0${Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60))}`;
    const seconds =
      Math.floor((timeDiffrence % (60 * 1000)) / 1000) >= 10
        ? Math.floor((timeDiffrence % (60 * 1000)) / 1000)
        : `0${Math.floor((timeDiffrence % (60 * 1000)) / 1000)}`;
    if (timeDiffrence < 0) {
      setCountDownTIme({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      });
      clearInterval();
    } else {
      setCountDownTIme({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      });
    }
  };
  const startCountDown = useCallback(() => {
    const customDate = new Date();
    const countDownDate = new Date("Sep 25, 2024 23:59:59 UTC");
    setInterval(() => {
      getTimeDifference(countDownDate.getTime());
    }, 1000);
  }, []);
  useEffect(() => {
    startCountDown();
  }, [startCountDown]);
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center w-full h-full gap-8 mt-3">
        <h2 className="text-yellow-500 text-3xl mt-4 font-semibold italic animate-bounce ">
          25 Sep, 2024
        </h2>
        <div className="flex justify-center gap-3 ">
          <div className="flex flex-col gap-5 relative">
            <div className="h-16 w-16  flex justify-between items-center bg-[#343650] rounded-lg">
              <div className="relative h-2.5 w-2.5 !-left-[6px] rounded-full bg-[#191A24]"></div>
              <span className="  text-3xl font-semibold text-[#fcd535]">
                {countDownTime?.days}
              </span>
              <div className="relative h-2.5 w-2.5 -right-[6px] rounded-full bg-[#191A24]"></div>
            </div>
            <span className="text-[#8486A9] text-xs text-center capitalize">
              {countDownTime?.days == 1 ? "Day" : "Days"}
            </span>
          </div>
          <div className="flex flex-col gap-5 relative">
            <div className="h-16 w-16  flex justify-between items-center bg-[#343650] rounded-lg">
              <div className="relative h-2.5 w-2.5 !-left-[6px] rounded-full bg-[#191A24]"></div>
              <span className="  text-3xl font-semibold text-[#fcd535]">
                {countDownTime?.hours}
              </span>
              <div className="relative h-2.5 w-2.5 -right-[6px] rounded-full bg-[#191A24]"></div>
            </div>
            <span className="text-[#8486A9] text-xs text-center font-medium">
              {countDownTime?.hours == 1 ? "Hour" : "Hours"}
            </span>
          </div>
          <div className="flex flex-col gap-5 relative">
            <div className="h-16 w-16  flex justify-between items-center bg-[#343650] rounded-lg">
              <div className="relative h-2.5 w-2.5 !-left-[6px] rounded-full bg-[#191A24]"></div>
              <span className="  text-3xl font-semibold text-[#fcd535]">
                {countDownTime?.minutes}
              </span>
              <div className="relative h-2.5 w-2.5 -right-[6px] rounded-full bg-[#191A24]"></div>
            </div>
            <span className="text-[#8486A9] text-xs text-center capitalize">
              {countDownTime?.minutes == 1 ? "Minute" : "Minutes"}
            </span>
          </div>
          <div className="flex flex-col gap-5 relative">
            <div className="h-16 w-16  flex justify-between items-center bg-[#343650] rounded-lg">
              <div className="relative h-2.5 w-2.5 !-left-[6px] rounded-full bg-[#191A24]"></div>
              <span className="  text-3xl font-semibold text-[#fcd535]">
                {countDownTime?.seconds}
              </span>
              <div className="relative h-2.5 w-2.5 -right-[6px] rounded-full bg-[#191A24]"></div>
            </div>
            <span className="text-[#8486A9] text-xs text-center capitalize">
              {countDownTime?.seconds == 1 ? "Second" : "Seconds"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CountDown;
