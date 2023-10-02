import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { PaginatedResponse } from "@/util/interface";
import { IFaq } from "./interface";
import { BASE_URL } from "@/api/baseUrl";

export const faqApi = createApi({
  reducerPath: "faqApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["faq"],
  endpoints: (builder) => ({
    getAllFaq: builder.query<
      PaginatedResponse<IFaq[]>,
      {
        perPage: number;
        currentPage: number;
        question?: string;
        active?: string;
        answer?: string;
        date?: string;
      }
    >({
      query: ({ perPage, currentPage, question, active, answer, date }) => {
        let query = `/user/api/v1/faq?isActive=true&perPage=${perPage}&currentPage=${currentPage}`;
        if (question) {
          query = `${query}&category=${question}`;
        }
        if (active) {
          query = `${query}&active=${active}`;
        }
        if (answer) {
          query = `${query}&currency=${answer}`;
        }
        if (date) {
          query = `${query}&date=${date}`;
        }
        return {
          url: query,
          method: "GET",
        };
      },
      providesTags: ["faq"],
    }),
  }),
});

export const { useGetAllFaqQuery } = faqApi;
