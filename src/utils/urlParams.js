/** @format */

// src/utils/urlParams.js
export const getParamsFromUrl = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const userID = urlParams.get("userID");
  const userName = urlParams.get("userName");
  return { userID, userName };
};
