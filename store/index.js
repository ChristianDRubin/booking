import { configureStore } from "@reduxjs/toolkit";
import savedReducer from "./SavedReducer";

export const store = configureStore({
  reducer: {
    booking: savedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
