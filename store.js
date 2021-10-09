import { useMemo } from "react";
import { configureStore } from "@reduxjs/toolkit";

import trendingCoinsReducer from "./slices/trendingCoinsSlice";

let store;

function makeStore(preloadedState) {
  return configureStore({
    reducer: { trendingCoins: trendingCoinsReducer },
    preloadedState,
  });
}

export const initStore = preloadedState => {
  let _store = store ?? makeStore(preloadedState);

  if (preloadedState && store) {
    _store = makeStore({
      ...store.getState(),
      ...preloadedState,
    });
    store = undefined;
  }

  if (typeof window === "undefined") return _store;
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState) {
  const store = useMemo(() => initStore(initialState), [initialState]);
  return store;
}
