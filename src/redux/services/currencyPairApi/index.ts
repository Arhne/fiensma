import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { PaginatedResponse } from "@/util/interface";
import { ICurrencyPair } from "./interface";
import { BASE_URL } from "@/api/baseUrl";

export const currencyPairApi = createApi({
  reducerPath: "currencyPairApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["currencyPair"],
  endpoints: (builder) => ({
    getAllCurrencyPair: builder.query<
      PaginatedResponse<ICurrencyPair[]>,
      {
        perPage: number;
        currentPage: number;
        category?: string;
        active?: string;
        currency?: string;
        date?: string;
      }
    >({
      query: ({ perPage, currentPage, category, active, currency, date }) => {
        let query = `/marketPlace/api/v1/currency-pairs?perPage=${perPage}&currentPage=${currentPage}`;
        if (category) {
          query = `${query}&category=${category}`;
        }
        if (active) {
          query = `${query}&active=${active}`;
        }
        if (currency) {
          query = `${query}&currency=${currency}`;
        }
        if (date) {
          query = `${query}&date=${date}`;
        }
        return {
          url: query,
          method: "GET",
        };
      },
      providesTags: ["currencyPair"],
    }),
  }),
});

export const { useGetAllCurrencyPairQuery } = currencyPairApi;
