/** @format */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const VITE_API_URL = import.meta.env.VITE_API_URL;

// Thunk to start the profit period
export const startProfitPeriod = createAsyncThunk(
  "profit/startProfitPeriod",
  async ({ telegramHandle, profitPerHour }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${VITE_API_URL}/start-profit-period`, {
        telegramHandle,
        profitPerHour,
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

// Thunk to calculate profit
export const calculateProfit = createAsyncThunk(
  "profit/calculateProfit",
  async (telegramHandle, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${VITE_API_URL}/calculate-profit`, {
        params: { telegramHandle },
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

const profitSlice = createSlice({
  name: "profit",
  initialState: {
    profit: 0,
    startTime: null,
    endTime: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(startProfitPeriod.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(startProfitPeriod.fulfilled, (state, action) => {
        state.startTime = action.payload.profitStartTime;
        state.endTime = action.payload.profitEndTime;
        state.loading = false;
      })
      .addCase(startProfitPeriod.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(calculateProfit.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(calculateProfit.fulfilled, (state, action) => {
        state.profit = action.payload.profit;
        state.loading = false;
      })
      .addCase(calculateProfit.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default profitSlice.reducer;
