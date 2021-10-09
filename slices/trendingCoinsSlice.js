import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  error: null,
  loading: false,
};

export const trendingCoinsSlice = createSlice({
  name: "trendingCoins",
  initialState,
  reducers: {},
});

export default trendingCoinsSlice.reducer;
