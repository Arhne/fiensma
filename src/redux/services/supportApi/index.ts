import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { BASE_URL } from "@/api/baseUrl";
import { Response } from "@/util/interface";
import { IConfig, ISetup } from "./interface";

export const configurationApi = createApi({
  reducerPath: "configurationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    findActiveSetup: builder.query<Response<IConfig>, void>({
      query: () => ({
        url: "/marketPlace/api/v1/setup/findActiveSetup",
        method: "GET",
      }),
    }),
    setup: builder.query<Response<ISetup[]>, void>({
      query: () => ({
        url: "/marketPlace/api/v1/setup",
        method: "GET",
      }),
    }),
  }),
});

export const { useFindActiveSetupQuery, useSetupQuery } = configurationApi;
