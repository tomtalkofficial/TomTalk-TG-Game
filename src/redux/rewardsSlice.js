/** @format */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const VITE_API_URL = import.meta.env.VITE_API_URL;

// Thunk to claim the daily reward
export const claimDailyReward = createAsyncThunk(
  "rewards/claimDailyReward",
  async (telegramHandle, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${VITE_API_URL}/claim-daily-reward`, {
        telegramHandle,
      });
      return response.data; // Return the full response data
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  },
);
// Thunk to apply the booster
export const applyBooster = createAsyncThunk(
  "rewards/applyBooster",
  async (telegramHandle, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${VITE_API_URL}/apply-booster`, {
        telegramHandle,
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

const rewardsSlice = createSlice({
  name: "rewards",
  initialState: {
    totalCoins: 0,
    streakDay: 1,
    message: "",
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(claimDailyReward.pending, (state) => {
        state.loading = true;
      })
      .addCase(claimDailyReward.fulfilled, (state, action) => {
        state.totalCoins = action.payload.totalCoins;
        state.streakDay = action.payload.streakDay;
        state.message = action.payload.message;
        state.loading = false;
      })
      .addCase(claimDailyReward.rejected, (state, action) => {
        state.error = action.payload?.message || "Failed to claim reward";
        state.loading = false;
      })
      .addCase(applyBooster.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(applyBooster.fulfilled, (state, action) => {
        state.totalCoins = action.payload.remainingCoins;
        state.message = action.payload.message;
        state.loading = false;
      })
      .addCase(applyBooster.rejected, (state, action) => {
        state.error = action.payload.message;
        state.loading = false;
      });
  },
});

export default rewardsSlice.reducer;
