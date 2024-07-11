import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const token = "6b2a6b4c-51c4-4beb-94b8-250d12d023b1";

export const taskApi = createApi({
  reducerPath: "taskApi",
  tagTypes: ["Task"],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://zdkhiu5mp5dwa.elma365.ru/pub/v1/app/test_sreda/test_task',
    //credentials: "same-origin",
    prepareHeaders: (headers) => {
      //headers.set('Access-Control-Allow-Origin','*');
      headers.set("Authorization", `Bearer ${token}`);
      //headers.set("Content-Type", "application/json");
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
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const { useTaskDataMutation } = taskApi;
