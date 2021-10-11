import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { client } from "../client";

const initialState = {
  coins: [],
  error: null,
  loading: false,
};

export const fetchCoinsFromAPI = createAsyncThunk(
  "coins/fetchCoinsFromAPI",
  async (args = { currency: "usd", perPage: 30, page: 1 }) => {
    const { data } = await client.get(
      `/coins/markets?vs_currency=${args.currency}&order=market_cap_desc&per_page=${args.perPage}&page=${args.page}&sparkline=false`
    );
    return data;
  }
);

export const coinsSlice = createSlice({
  name: "coins",
  initialState,
  extraReducers: {
    [fetchCoinsFromAPI.pending]: state => {
      state.loading = true;
    },
    [fetchCoinsFromAPI.fulfilled]: (state, action) => {
      state.coins = action.payload;
      state.loading = false;
    },
    [fetchCoinsFromAPI.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const selectCoins = state => state.coins;

export default coinsSlice.reducer;
