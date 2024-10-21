/** @format */

import axios from "axios";

const VITE_API_URL = import.meta.env.VITE_API_URL;

// const VITE_API_URL_Test = "";

export const fetchTopRanks = async () => {
  const response = await axios.get(`${VITE_API_URL}/top-users`);

  return response.data;
};

export const createUser = async (userID, userName) => {
  const response = await axios.post(`${VITE_API_URL}/tom`, {
    telegramHandle: userID,
    userName: userName,
  });
  return response.data;
};

export const checkUserExists = async (userID) => {
  const response = await axios.get(`${VITE_API_URL}/tom/${userID}`);
  return response.data;
};

export const updateUser = async (userID, mineData) => {
  // console.log("userID, data", userID, mineData);
  const response = await axios.put(
    `${VITE_API_URL}/tom/${userID}/update-mine`,
    mineData,
  );
  // console.log(response);

  return response.data;
};
