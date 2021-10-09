import { configureStore } from "@reduxjs/toolkit";

import trendingCoinsReducer from "./slices/trendingCoinsSlice";

export const store = configureStore({
  reducer: { trendingCoins: trendingCoinsReducer },
});
