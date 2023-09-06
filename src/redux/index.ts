import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { exchangeRatesApi } from "./services/exchangeRatesApi";

export const store = configureStore({
  preloadedState: {},
  reducer: {
    [exchangeRatesApi.reducerPath]: exchangeRatesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(exchangeRatesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
