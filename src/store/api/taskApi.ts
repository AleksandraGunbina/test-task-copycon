import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { token } from "../../healpers/token";

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
        headers: {
          Authorization: `${token}`,
        },
      }),
    }),
  }),
});

export const { useTaskDataMutation } = taskApi;
