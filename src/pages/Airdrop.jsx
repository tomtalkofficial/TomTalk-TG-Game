/** @format */

import React, { useState } from "react";
import Header from "../layout/Header";
import AppNav from "../layout/AppNav";
import { TonConnectButton } from "@tonconnect/ui-react";
import CountDown from "../utils/Countdown";
import { useSelector } from "react-redux";

import useRequest from "@ahooksjs/use-request";

import CountUp from "react-countup";
import LoadingScreen from "../utils/LoadingScreen";

const Airdrop = () => {
  const taskStatus = useSelector((state) => state.tom.user);

  // Optional: handle cases where the task is not defined yet
  if (!taskStatus) {
    return <LoadingScreen />;
  }

  return (
    <div className=" sm:max-w-xs  w-full m-auto h-screen rounded-lg shadow-2xl overflow-hidden">
      <Header />
      <div className="px-3 py-4 lg:pb-56  rounded-t-2xl bg-[#1d1e23]  border-t-[2px] shadow_top border-[rgb(226,180,70)]">
        <div className="flex flex-col items-center justify-center ">
          <img src="/talktom.png" className="rounded-full size-16 sh" alt="" />
          <h3 className="text-white text-4xl mt-4 font-semibold">Airdrop</h3>
          <p className="text-white/80 text-sm text-center py-1 ">
            Listing is on the way. Tasks will be appear below. Complete them to
            participate in the AirDrop
          </p>
        </div>
        {/* <CountDown /> */}
        <div className="h-[400px] overflow-y-scroll custom-scrollbar pb-52 mt-4 ">
          <h2 className="text-white py-1  font-semibold mx-3">NFTS</h2>

          <a
            href={`https://tomtalk.io/mint?userID=${taskStatus?.telegramHandle}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#272a2f] py-2 my-2 rounded-lg mx-4 block relative"
          >
            <div className="flex items-center space-x-3 px-3">
              <div className="flex items-center space-x-4">
                <div className="p-1">
                  <img
                    src="https://tomtalk.io/assets/images/nft.jpg"
                    className="size-10 object-contain"
                    alt="gift_6145427"
                  />
                </div>
                <div>
                  <h2 className="text-white font-bold">Mint Daily Free NFTs</h2>
                  <div className="flex items-center space-x-1">
                    <p className="text-white/35 capitalize">
                      <small>its help to eligible for airdrop</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
          {/* <h2 className="text-white py-1 font-semibold text-start mt-4">
            Connect Wallet
          </h2> */}
          <div className="flex justify-center items-center pt-5 flex-col">
            {/* <TonConnectButton className=" m-auto  z-30 relative wallet" /> */}
            {/* <a href="/airdrop" target="_blank" rel="noopener noreferrer">
              {" "}
              <button className=" bg-yellow-500 w-3/3 rounded-xl block mb-5 px-3   mt-5 m-auto text-black text-2xl font-bold py-2 hover:opacity-65 disabled:opacity-50 disabled:cursor-not-allowed">
                Mint NFTs
              </button>
            </a> */}
            {/* {isConnected && (
              <div className="w-full mt-3 px-3 text-white bg-black py-4 rounded-lg">
                <div className="flex justify-between  ">
                  <p className="font-bold">Connected account</p>
                  <p className="font-bold">
                    {" "}
                    {truncate(
                      `${ensName ? `${ensName} (${address})` : address}`,
                      8,
                    )}
                  </p>
                </div>
                <div className="flex justify-between mt-3 ">
                  <p className="font-bold">Wallet Balance:</p>
                  <p className="font-bold text-end flex items-center gap-1">
                    {" "}
                    {walletBalance > 0 ? (
                      <CountUp
                        delay={2}
                        start={0}
                        decimals={2}
                        end={Math.round(walletBalance * 100) / 100}
                      />
                    ) : (
                      "?"
                    )}{" "}
                    <img src="/core.png" className="rounded-full w-6" alt="" />
                  </p>
                </div>
              </div>
            )}
            {chain?.id === 1115 ? (
              <button
                onClick={() => open()}
                className=" bg-yellow-500 w-2/3 rounded-xl block mb-5  mt-5 m-auto text-black text-2xl font-bold py-2 hover:opacity-65 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Disconnect
              </button>
            ) : isConnected ? (
              <button
                className=" bg-yellow-500 w-2/3 rounded-xl block mb-5  m-auto text-black text-2xl font-bold py-2 hover:opacity-65 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => switchChain?.({ chainId: 1115 })}
              >
                {" "}
                Switch to Core Dao
              </button>
            ) : (
              <button
                className="bg-yellow-500 w-2/3 rounded-xl block mb-5  m-auto text-black text-2xl font-bold py-2 hover:opacity-65 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => open()}
              >
                Connect Wallet
              </button>
            )} */}
          </div>
        </div>
      </div>
      <div>
        <AppNav />
      </div>
    </div>
  );
};

export default Airdrop;
