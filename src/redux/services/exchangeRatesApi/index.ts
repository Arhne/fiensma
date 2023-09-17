import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ICurrentRates, IExchangeSummary } from "./interface";
import { Response } from "@/util/interface";
import { BASE_URL } from "@/api/baseUrl";

export const exchangeRatesApi = createApi({
  reducerPath: "exchangeRatesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["exchangeRates"],
  endpoints: (builder) => ({
    getExchangeRateSummary: builder.query<
      Response<IExchangeSummary[]>,
      { perPage: number; currentPage: number }
    >({
      query: ({ perPage, currentPage }) => ({
        url: `/marketPlace/api/v1/rates/a/stats/getRateSummary?perPage=${perPage}&currentPage=${currentPage}`,
        method: "GET",
      }),
      providesTags: ["exchangeRates"],
    }),

    getExchangeRateSummaryByDate: builder.query<
      Response<IExchangeSummary[]>,
      { currencyPairId?: string; startDate: string; endDate: string }
    >({
      query: ({ currencyPairId, startDate, endDate }) => {
        let query = `?startDate=${startDate}&endDate=${endDate}`;

        if (currencyPairId) {
          query = `${query}&currencyPairId=${currencyPairId}`;
        }
        return {
          url: `/marketPlace/api/v1/rates/a/stats/getRateSummary${query}`,
          method: "GET",
        };
      },
      providesTags: ["exchangeRates"],
    }),

    getCurrentRates: builder.query<Response<ICurrentRates[]>, void>({
      query: () => ({
        url: `/marketPlace/api/v1/rates/findCurrentRates`,
        method: "GET",
      }),
      providesTags: ["exchangeRates"],
    }),
  }),
});

export const {
  useGetExchangeRateSummaryByDateQuery,
  useGetCurrentRatesQuery,
  useGetExchangeRateSummaryQuery,
} = exchangeRatesApi;
