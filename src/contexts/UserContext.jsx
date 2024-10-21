/** @format */

import React, { createContext, useContext, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createNewUser, checkIfUserExists } from "../redux/tomSlice";
import { getParamsFromUrl } from "../utils/urlParams";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const { userID, userName } = getParamsFromUrl();

    if (userID && userName) {
      dispatch(createNewUser({ userID, userName })).then((newUser) => {
        setUser(newUser.payload);
      });
    }
  }, [dispatch]);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
