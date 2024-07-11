import { token } from './../../halpers/accessData';
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const taskApi = createApi({
  reducerPath: "taskApi",
  tagTypes: ["Task"],
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
    prepareHeaders: (headers) => {
      headers.set("Authorization", `${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    taskData: builder.mutation({
      query: (values) => ({
        url: "/list",
        method: "POST",
        body: values,
      }),
    }),
  }),
});

export const { useTaskDataMutation } = taskApi;
