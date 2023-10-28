import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { BASE_URL } from "@/api/baseUrl";
import { Response } from "@/util/interface";
import { IApplicant, IJob } from "./interface";

export const jobApi = createApi({
  reducerPath: "jobApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["job"],
  endpoints: (builder) => ({
    applyForJob: builder.mutation<
      Response<IApplicant>,
      {
        job: string;
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        applicantCV: string;
        applicantCoverLetter: string;
        applyingFrom: string;
      }
    >({
      query: (body) => ({
        url: `/user/api/v1/jobs/apply`,
        method: "POST",
        body,
      }),
    }),

    getAllJobs: builder.query<
      Response<IJob[]>,
      { perPage: number; currentPage: number; category?: string }
    >({
      query: ({ perPage, currentPage, category }) => {
        let query = `?isActive=true&perPage=${perPage}&currentPage=${currentPage}`;
        if (category) {
          query = `${query}&category=${category}`;
        }
        return {
          url: `/user/api/v1/jobs${query}`,
          method: "GET",
        };
      },
      providesTags: ["job"],
    }),
    getAllJobCategories: builder.query<Response<string[]>, void>({
      query: () => ({
        url: `/user/api/v1/jobs/get-all-job-categories`,
        method: "GET",
      }),
      providesTags: ["job"],
    }),
    getSingleJobs: builder.query<Response<IJob>, string>({
      query: (query) => ({
        url: `/user/api/v1/jobs/get-job-by-id/${query}`,
        method: "GET",
      }),
      providesTags: ["job"],
    }),
  }),
});

export const {
  useApplyForJobMutation,
  useGetAllJobsQuery,
  useGetSingleJobsQuery,
  useGetAllJobCategoriesQuery,
} = jobApi;
