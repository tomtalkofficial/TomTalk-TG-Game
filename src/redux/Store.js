/** @format */

// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import tomReducer from "./tomSlice";
import tasksReducer from "./taskSlice";
import rewardsReducer from "./rewardsSlice";
import profitReducer from "./profitSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    tom: tomReducer,
    tasks: tasksReducer,
    rewards: rewardsReducer,
    profit: profitReducer,
  },
});
