/** @format */

// MicrophoneContext.js
import React, { createContext, useState, useContext } from "react";

const MicrophoneContext = createContext();

export const useMicrophone = () => {
  return useContext(MicrophoneContext);
};

export const MicrophoneProvider = ({ children }) => {
  const [stream, setStream] = useState(null);

  return (
    <MicrophoneContext.Provider value={{ stream, setStream }}>
      {children}
    </MicrophoneContext.Provider>
  );
};
