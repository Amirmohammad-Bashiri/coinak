import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { client } from "../client";

const initialState = {
  trendingCoins: [],
  error: null,
  loading: false,
};

export const fetchTrendingCoins = createAsyncThunk(
  "trendingCoins/fetchTrendingCoins",
  async () => {
    const { data } = await client.get("/search/trending");
    return data;
  }
);

export const trendingCoinsSlice = createSlice({
  name: "trendingCoins",
  initialState,
  extraReducers: {
    [fetchTrendingCoins.pending]: state => {
      state.loading = true;
    },
    [fetchTrendingCoins.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [fetchTrendingCoins.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const selectTrendingCoins = state => state.trendingCoins;

export default trendingCoinsSlice.reducer;
