/** @format */

// redux/slices/taskSlice.js (or your existing slice file)

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const VITE_API_URL = import.meta.env.VITE_API_URL;

// Define async thunk to update the join status
export const updateJoinStatus = createAsyncThunk(
  "tasks/updateJoinStatus",
  async ({ telegramHandle, taskId }) => {
    try {
      const response = await axios.put(`${VITE_API_URL}/join`, {
        telegramHandle,
        taskId,
      });
      return response.data;
    } catch (error) {
      console.error("Error updating join status:", error);
      throw error;
    }
  },
);

// Define async thunk to update the Follow status
export const updateFollowStatus = createAsyncThunk(
  "tasks/updateFollowStatus",
  async ({ telegramHandle, taskId }) => {
    try {
      const response = await axios.put(`${VITE_API_URL}/follow`, {
        telegramHandle,
        taskId,
      });
      return response.data;
    } catch (error) {
      console.error("Error updating follow status:", error);
      throw error;
    }
  },
);

// Define async thunk to update the watch status
export const updateWatchStatus = createAsyncThunk(
  "tasks/updateWatchStatus",
  async ({ telegramHandle, taskId }) => {
    try {
      const response = await axios.put(`${VITE_API_URL}/watch`, {
        telegramHandle,
        taskId,
      });
      return response.data;
    } catch (error) {
      console.error("Error updating follow status:", error);
      throw error;
    }
  },
);

// Define async thunk to update the exchange status
export const updateExchangeStatus = createAsyncThunk(
  "tasks/updateExchangeStatus",
  async ({ telegramHandle, taskId, exchangeName, exchangeLogo }) => {
    try {
      const response = await axios.put(`${VITE_API_URL}/exchange`, {
        telegramHandle,
        taskId,
        exchangeName,
        exchangeLogo,
      });
      return response.data;
    } catch (error) {
      console.error("Error updating follow status:", error);
      throw error;
    }
  },
);

export const getReferralUsers = createAsyncThunk(
  "tasks/getReferralUsers",
  async ({ telegramHandle }) => {
    try {
      const response = await axios.get(
        `${VITE_API_URL}/referred-users?telegramHandle=${telegramHandle}`,
        {},
      );
      // console.log();

      return response.data;
    } catch (error) {
      console.error("Error :", error);
      throw error;
    }
  },
);

// Define async thunk to update the Follow status
export const updateFbStatus = createAsyncThunk(
  "tasks/updateFbStatus",
  async ({ telegramHandle, taskId }) => {
    try {
      const response = await axios.put(`${VITE_API_URL}/fb`, {
        telegramHandle,
        taskId,
      });
      return response.data;
    } catch (error) {
      console.error("Error updating follow status:", error);
      throw error;
    }
  },
);
export const updateInstaStatus = createAsyncThunk(
  "tasks/updateInstaStatus",
  async ({ telegramHandle, taskId }) => {
    try {
      const response = await axios.put(`${VITE_API_URL}/insta`, {
        telegramHandle,
        taskId,
      });
      return response.data;
    } catch (error) {
      console.error("Error updating follow status:", error);
      throw error;
    }
  },
);

export const updateTGStatus = createAsyncThunk(
  "tasks/updateTGStatus",
  async ({ telegramHandle, taskId }) => {
    try {
      const response = await axios.put(`${VITE_API_URL}/tg`, {
        telegramHandle,
        taskId,
      });
      return response.data;
    } catch (error) {
      console.error("Error updating Join status:", error);
      throw error;
    }
  },
);
export const updateTikTokStatus = createAsyncThunk(
  "tasks/updateTikTokStatus",
  async ({ telegramHandle, taskId }) => {
    try {
      const response = await axios.put(`${VITE_API_URL}/tiktok`, {
        telegramHandle,
        taskId,
      });
      return response.data;
    } catch (error) {
      console.error("Error updating follow status:", error);
      throw error;
    }
  },
);

export const updateHabitNetwork = createAsyncThunk(
  "tasks/updateHabitNetwork",
  async ({ telegramHandle, taskId }) => {
    try {
      const response = await axios.put(`${VITE_API_URL}/PokeTON`, {
        telegramHandle,
        taskId,
      });
      return response.data;
    } catch (error) {
      console.error("Error updating HabitNetwork status:", error);
      throw error;
    }
  },
);

export const updatePokeTG = createAsyncThunk(
  "tasks/updatePokeTG",
  async ({ telegramHandle, taskId }) => {
    try {
      const response = await axios.put(`${VITE_API_URL}/PokeTG`, {
        telegramHandle,
        taskId,
      });
      return response.data;
    } catch (error) {
      console.error("Error updating HabitNetwork status:", error);
      throw error;
    }
  },
);
// TopUp
export const updateTopUpGame = createAsyncThunk(
  "tasks/updateTopUpGame",
  async ({ telegramHandle, taskId }) => {
    try {
      const response = await axios.put(`${VITE_API_URL}/TapUp`, {
        telegramHandle,
        taskId,
      });
      return response.data;
    } catch (error) {
      console.error("Error updating HabitNetwork status:", error);
      throw error;
    }
  },
);

export const updateTopUpTG = createAsyncThunk(
  "tasks/updateTopUpTG",
  async ({ telegramHandle, taskId }) => {
    try {
      const response = await axios.put(`${VITE_API_URL}/TapUpTG`, {
        telegramHandle,
        taskId,
      });
      return response.data;
    } catch (error) {
      console.error("Error updating HabitNetwork status:", error);
      throw error;
    }
  },
);

export const updateBitgetTask = createAsyncThunk(
  "tasks/updateBitgetTask",
  async ({ telegramHandle, taskName }, { rejectWithValue }) => {
    try {
      // Make the API call
      console.log({ telegramHandle, taskName });

      const response = await axios.put(
        `${VITE_API_URL}/bitget-task/${telegramHandle}`,
        { taskName },
      );

      // Return the data if the request is successful
      return response.data;
    } catch (error) {
      console.error("Error updating task:", error);

      // Return a rejected error with the error message for proper error handling
      return rejectWithValue(
        error.response ? error.response.data : "Something went wrong",
      );
    }
  },
);

export const updatePartnerTask = createAsyncThunk(
  "tasks/updatePartnerTask",

  async ({ telegramHandle, taskName }, { rejectWithValue }) => {
    try {
      // Make the API call
      // console.log({ telegramHandle, taskName });

      const response = await axios.put(
        `${VITE_API_URL}/partner-task/${telegramHandle}`,
        { taskName },
      );

      // Return the data if the request is successful
      return response.data;
    } catch (error) {
      console.error("Error updating task:", error);

      // Return a rejected error with the error message for proper error handling
      return rejectWithValue(
        error.response ? error.response.data : "Something went wrong",
      );
    }
  },
);

const initialState = {
  tasks: [],
  friends: [],
  status: "idle",
  error: null,
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateTopUpTG.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateTopUpTG.fulfilled, (state, action) => {
        state.status = "succeeded";
        const updatedTask = action.payload.data;
        state.tasks = updatedTask?.Tasks[0];
      })
      .addCase(updateTopUpTG.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateBitgetTask.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateBitgetTask.fulfilled, (state, action) => {
        state.status = "succeeded";
        const updatedTask = action.payload.data;
        state.tasks = updatedTask?.Tasks[0];
      })
      .addCase(updateBitgetTask.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updatePartnerTask.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updatePartnerTask.fulfilled, (state, action) => {
        state.status = "succeeded";
        const updatedTask = action.payload.data;
        state.tasks = updatedTask?.Tasks[0];
      })
      .addCase(updatePartnerTask.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateTGStatus.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateTGStatus.fulfilled, (state, action) => {
        state.status = "succeeded";
        const updatedTask = action.payload.data;
        state.tasks = updatedTask?.Tasks[0];
      })
      .addCase(updateTGStatus.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateTopUpGame.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateTopUpGame.fulfilled, (state, action) => {
        state.status = "succeeded";
        const updatedTask = action.payload.data;
        state.tasks = updatedTask?.Tasks[0];
      })
      .addCase(updateTopUpGame.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updatePokeTG.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updatePokeTG.fulfilled, (state, action) => {
        state.status = "succeeded";
        const updatedTask = action.payload.data;
        state.tasks = updatedTask?.Tasks[0];
      })
      .addCase(updatePokeTG.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateHabitNetwork.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateHabitNetwork.fulfilled, (state, action) => {
        state.status = "succeeded";
        const updatedTask = action.payload.data;
        state.tasks = updatedTask?.Tasks[0];
      })
      .addCase(updateHabitNetwork.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateTikTokStatus.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateTikTokStatus.fulfilled, (state, action) => {
        state.status = "succeeded";
        const updatedTask = action.payload.data;
        state.tasks = updatedTask?.Tasks[0];
      })
      .addCase(updateTikTokStatus.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateJoinStatus.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateJoinStatus.fulfilled, (state, action) => {
        state.status = "succeeded";
        const updatedTask = action.payload.data;
        state.tasks = updatedTask?.Tasks[0];
      })
      .addCase(updateJoinStatus.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateFollowStatus.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateFollowStatus.fulfilled, (state, action) => {
        state.status = "succeeded";
        const updatedTask = action.payload.data;
        state.tasks = updatedTask?.Tasks[0];
      })
      .addCase(updateFollowStatus.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateWatchStatus.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateWatchStatus.fulfilled, (state, action) => {
        state.status = "succeeded";
        const updatedTask = action.payload.data;
        state.tasks = updatedTask?.Tasks[0];
      })
      .addCase(updateWatchStatus.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateExchangeStatus.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateExchangeStatus.fulfilled, (state, action) => {
        state.status = "succeeded";
        const updatedTask = action.payload.data;
        state.tasks = updatedTask?.Tasks[0];
      })
      .addCase(updateExchangeStatus.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getReferralUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getReferralUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        const updatedTask = action.payload.data;
        state.friends = updatedTask;
      })
      .addCase(getReferralUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateFbStatus.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateFbStatus.fulfilled, (state, action) => {
        state.status = "succeeded";
        const updatedTask = action.payload.data;
        state.tasks = updatedTask?.Tasks[0];
      })
      .addCase(updateFbStatus.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateInstaStatus.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateInstaStatus.fulfilled, (state, action) => {
        state.status = "succeeded";
        const updatedTask = action.payload.data;
        state.tasks = updatedTask?.Tasks[0];
      })
      .addCase(updateInstaStatus.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default taskSlice.reducer;
