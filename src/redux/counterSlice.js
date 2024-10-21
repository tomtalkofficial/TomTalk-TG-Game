/** @format */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const VITE_API_URL = import.meta.env.VITE_API_URL;

export const updateTotalCoins = createAsyncThunk(
  "counter/updateTotalCoins",
  async ({ telegramHandle, amount }) => {
    const response = await axios.put(
      `${VITE_API_URL}/update/tom/${telegramHandle}`,
      { amount },
    );
    // console.log(response);

    return response.data;
  },
);

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    totalCoins: 0,
    status: "idle",
    error: null,
  },
  reducers: {
    increment: (state) => {
      state.value += 0.05;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateTotalCoins.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateTotalCoins.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.totalCoins = action.payload.data.totalCoins; // Update totalCoins with API response
      })
      .addCase(updateTotalCoins.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { increment, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
