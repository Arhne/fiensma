import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { BASE_URL } from "@/api/baseUrl";
import { Response } from "@/util/interface";
import { IContactUs } from "./interface";

export const contactUsApi = createApi({
  reducerPath: "contactUsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    addContactUs: builder.mutation<
      Response<IContactUs>,
      {
        firstName: string;
        lastName: string;
        email: string;
        message: string;
        phone: string;
      }
    >({
      query: (body) => ({
        url: `/user/api/v1/contact-us`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useAddContactUsMutation } = contactUsApi;
