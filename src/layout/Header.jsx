/** @format */

import ProgressBar from "@ramonak/react-progress-bar";
import { Link } from "react-router-dom";
import useRequest from "@ahooksjs/use-request";

import { useDispatch, useSelector } from "react-redux";

import { checkIfUserExists } from "../redux/tomSlice";
import LoadingScreen from "../utils/LoadingScreen";

const Header = () => {
  const dispatch = useDispatch();
  const totalCoins = useSelector((state) => state.tom.user);

  const { telegramHandle, profitPerHour } = totalCoins || {};

  const userTask = totalCoins?.Tasks?.[0]; // Safely access the first task

  // Optional: handle cases where the task is not defined yet
  if (!totalCoins || !totalCoins.Tasks) {
    return <LoadingScreen />;
  }

  const fetchData = () => {
    if (telegramHandle) {
      dispatch(checkIfUserExists(telegramHandle));
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
  // console.log("startTime", profitEndTime);
  function formatNumber(num) {
    if (num >= 1e9) {
      return (num / 1e9).toFixed(1) + "B"; // Billion
    } else if (num >= 1e6) {
      return (num / 1e6).toFixed(1) + "M"; // Million
    } else if (num >= 1e3) {
      return (num / 1e3).toFixed(1) + "k"; // Thousand
    }
    return num?.toFixed(0)?.toString(); // Less than 1000, no formatting
  }

  const formattedProfitPerHour = formatNumber(profitPerHour);
  return (
    <>
      <div className="bg-black ">
        <div className="  flex  items-center gap-3 p-4  ">
          <div className=" p-1 rounded-lg bg-yellow-400">
            <img
              src="https://tomtalk.io/assets/images/chr/Layer08.png"
              className="size-6 object-contain"
              loading="lazy"
              alt=""
            />
          </div>
          {/* {startTime && <p className="text-red-500">{startTime}</p>} */}
          <p className=" text-white text-xs ">{totalCoins?.userName} (CEO)</p>
        </div>
        <div className="  grid grid-cols-2 py-2 mx-4 overflow-hidden -mt-3">
          <Link to="/rank" className="px-4 flex flex-col space-y-3 ">
            <div className="flex justify-between">
              <p className="text-white text-xs">Rank &gt; </p>
              <p className="text-white text-xs">1/11 </p>
            </div>
            <div>
              <ProgressBar
                completed="10"
                isLabelVisible={false}
                height={6}
                bgColor={"rgba(226, 180, 70)"}
                baseBgColor={"#374355"}
              />
            </div>
          </Link>
          <div className=" bg-[#3d3a33] px-1 flex gap-4  items-center  rounded-lg">
            <div className="border-r pr-2 pl-1">
              <img
                src={
                  userTask?.exchangeLogo ? userTask?.exchangeLogo : "/earn.png"
                }
                className="w-8     "
                alt=""
              />
            </div>
            <div>
              <small className="text-[10px] text-center text-gray-400 font-semibold">
                Profit Per hour
              </small>{" "}
              <br />
              <div className="flex justify-center space-x-1 items-center">
                {/* <img src='/talktom.png' className='rounded-full w-4' alt='' /> */}
                <p className="text-xs text-white text-center font-bold pb-1 mb-0">
                  {formattedProfitPerHour}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
