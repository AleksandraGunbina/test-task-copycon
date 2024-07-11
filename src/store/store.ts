import { configureStore } from "@reduxjs/toolkit";
import { taskApi } from "./api/taskApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [taskApi.reducerPath]: taskApi.reducer,
  },
  middleware: (getDafaultMiddleware) =>
    getDafaultMiddleware().concat(taskApi.middleware),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;