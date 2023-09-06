import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IAdvert, IExchangeSummary } from "./interface";
import { Response, PaginatedResponse } from "@/util/interface";
import { BASE_URL } from "@/api/baseUrl";

export const exchangeRatesApi = createApi({
  reducerPath: "exchangeRatesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["exchangeRates"],
  endpoints: (builder) => ({
    getExchangeRateSummaryByDate: builder.query<
      Response<IExchangeSummary[]>,
      { perPage: number; currentPage: number }
    >({
      query: ({ perPage, currentPage }) => ({
        url: `/marketPlace/api/v1/rates/a/stats/getRateSummary?perPage=${perPage}&currentPage=${currentPage}`,
        method: "GET",
      }),
      providesTags: ["exchangeRates"],
    }),

    getCurrentRates: builder.query<Response<IAdvert[]>, void>({
      query: () => ({
        url: `/marketPlace/api/v1/rates/findCurrentRates`,
        method: "GET",
      }),
      providesTags: ["exchangeRates"],
    }),

    suspendAdvert: builder.mutation<
      Response<IAdvert>,
      { advertStatus: string; advertId: string }
    >({
      query: (body) => ({
        url: `/marketPlace/api/v1/advert/updateAdvertStatus`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["exchangeRates"],
    }),
  }),
});

export const {
  useGetExchangeRateSummaryByDateQuery,
  useGetCurrentRatesQuery,
  useSuspendAdvertMutation,
} = exchangeRatesApi;
