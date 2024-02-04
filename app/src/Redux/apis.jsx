import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apis = createApi({
  reducerPath: "apis",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://facebook-backend-x6aw.onrender.com/api/",
  }),
  tagTypes: ["Login"],
  keepUnusedDataFor: 0.01,
  endpoints: (builder) => ({
    getLogin: builder.query({
      query: () => ({
        url: `login`,
        method: "GET",
        providesTags: ["Login"],
      }),
    }),
    createLogin: builder.mutation({
      query: (data) => ({
        url: `login`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Login"],
    }),
  }),
});

export const { useGetLoginQuery, useCreateLoginMutation } = apis;
