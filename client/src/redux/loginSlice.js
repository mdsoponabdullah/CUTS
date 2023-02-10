import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk("/login", async (payload) => {
  const response = await axios.post("/api/login", payload);
  return response.data;
});

const slice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    error: null,
    user: null,
  },
  reducers: {},
  extraReducers: {
    [login.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    [login.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export default slice.reducer;