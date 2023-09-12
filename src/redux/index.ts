import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { exchangeRatesApi } from "./services/exchangeRatesApi";
import { currencyPairApi } from "./services/currencyPairApi";

export const store = configureStore({
  preloadedState: {},
  reducer: {
    [exchangeRatesApi.reducerPath]: exchangeRatesApi.reducer,
    [currencyPairApi.reducerPath]: currencyPairApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      exchangeRatesApi.middleware,
      currencyPairApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
