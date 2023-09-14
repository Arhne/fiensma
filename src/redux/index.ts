import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { exchangeRatesApi } from "./services/exchangeRatesApi";
import { contactUsApi } from "./services/contactUsApi";

export const store = configureStore({
  preloadedState: {},
  reducer: {
    [exchangeRatesApi.reducerPath]: exchangeRatesApi.reducer,
    [contactUsApi.reducerPath]: contactUsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      exchangeRatesApi.middleware,
      contactUsApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
