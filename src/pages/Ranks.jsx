/** @format */

import AppNav from "../layout/AppNav";

import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import CountUp from "react-countup";

import LoadingScreen from "../utils/LoadingScreen";
import { useEffect } from "react";
import { getTopRanks } from "../redux/tomSlice";

const Ranks = () => {
  const { topRanks, status, user } = useSelector((state) => state.tom);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(getTopRanks());
    }
  }, [dispatch, user]);

  if (status === "loading") {
    return <LoadingScreen />;
  }
  // console.log("topRanks: ", topRanks);

  return (
    <>
      <div className="sm:max-w-xs w-full m-auto h-screen rounded-lg shadow-2xl overflow-hidden">
        <div className="py-8">
          <div className="flex justify-center">
            <img
              src="https://tomtalk.io/assets/images/chr/Layer02.png"
              className="w-14 aspect-square object-contain bg-[#e2b446] shadow_top shadow-[#e2b446] p-1 rounded-lg"
              alt=""
              loading="lazy"
            />
          </div>
          <h2 className="text-center text-gray-300 mt-4 text-xl">
            Leaderboard
          </h2>

          <div className="max-h-[500px] overflow-y-scroll custom-scrollbar pb-10">
            {topRanks?.length > 0 ? (
              topRanks.map((res, index) => (
                <div
                  key={res?.telegramHandle}
                  className="bg-[#272a2f] py-2 my-2 rounded-lg mx-4"
                >
                  <div className="flex items-center justify-between space-x-3 px-3">
                    <div className="flex items-center space-x-2">
                      <div className="p-1 rounded-lg bg-gray-700">
                        <img
                          src="/catw.png"
                          className="size-6 object-contain"
                          alt={`${res.userName} avatar`}
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <h2 className="text-white">{res.userName}</h2>
                        <div className="flex items-center space-x-1">
                          <img
                            src="talktom.png"
                            className="w-5"
                            alt="coins"
                            loading="lazy"
                          />
                          <p className="text-white font-semibold text-center text-[12px]">
                            <CountUp
                              delay={2}
                              start={0}
                              end={res?.totalCoins?.toFixed(0)}
                            />
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-lg text-gray-400">{index + 1}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-100">No data available</p>
            )}
          </div>
        </div>

        <AppNav />
      </div>
    </>
  );
};

export default Ranks;
