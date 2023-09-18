import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { exchangeRatesApi } from "./services/exchangeRatesApi";
import { contactUsApi } from "./services/contactUsApi";
import { currencyPairApi } from "./services/currencyPairApi";
import { configurationApi } from "./services/supportApi";

export const store = configureStore({
  preloadedState: {},
  reducer: {
    [exchangeRatesApi.reducerPath]: exchangeRatesApi.reducer,
    [contactUsApi.reducerPath]: contactUsApi.reducer,
    [currencyPairApi.reducerPath]: currencyPairApi.reducer,
    [configurationApi.reducerPath]: configurationApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      exchangeRatesApi.middleware,
      contactUsApi.middleware,
      currencyPairApi.middleware,
      configurationApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
