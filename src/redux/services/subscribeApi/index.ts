import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { Response } from "@/util/interface";
import { ISubscribe } from "./interface";
import { BASE_URL } from "@/api/baseUrl";

export const subscribeApi = createApi({
  reducerPath: "subscribeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    addSubscribe: builder.mutation<
      Response<ISubscribe>,
      {
        email: string;
      }
    >({
      query: (body) => ({
        url: `/notification/api/v1/newsletter/subscribe`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useAddSubscribeMutation } = subscribeApi;
